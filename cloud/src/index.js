const ALLOWED_ORIGINS = new Set([
  'https://littlepearl7.github.io',
  'http://127.0.0.1:5173',
  'http://localhost:5173',
  'http://127.0.0.1:5180',
  'http://localhost:5180',
]);
const MAX_BODY_BYTES = 256 * 1024;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.has(origin) ? origin : 'null';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Recovery-Code, If-Match',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin), 'Content-Type': 'application/json; charset=utf-8' },
  });
}

function saveMeta(row) {
  return {
    revision: row.revision,
    month: row.month,
    day: row.day,
    cash: row.cash,
    savedAt: row.saved_at,
    updatedAt: row.updated_at,
  };
}

async function sha256(text) {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), (value) => value.toString(16).padStart(2, '0')).join('');
}

async function applyRateLimit(request, env) {
  const address = request.headers.get('CF-Connecting-IP') || 'unknown';
  const key = await sha256(address);
  const now = Math.floor(Date.now() / 60000) * 60000;
  const row = await env.DB.prepare(
    `INSERT INTO rate_limits (key_hash, window_start, hits) VALUES (?, ?, 1)
     ON CONFLICT(key_hash) DO UPDATE SET
       hits = CASE WHEN window_start = excluded.window_start THEN hits + 1 ELSE 1 END,
       window_start = excluded.window_start
     RETURNING hits`
  ).bind(key, now).first();
  return row.hits <= 30;
}

function readCode(request) {
  const code = (request.headers.get('X-Recovery-Code') || '').replace(/\s+/g, '').toUpperCase();
  return /^[A-HJ-NP-Z2-9]{20}$/.test(code) ? code : '';
}

async function findSave(env, codeHash) {
  return env.DB.prepare(
    'SELECT code_hash, save_json, revision, month, day, cash, saved_at, updated_at FROM saves WHERE code_hash = ?'
  ).bind(codeHash).first();
}

async function readBody(request) {
  if (!request.body) return '';
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  chunks.forEach((chunk) => {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  });
  return new TextDecoder().decode(bytes);
}

function validGameSave(save) {
  return save && typeof save === 'object' && [6, 7, 8].includes(save.v) &&
    Number.isInteger(save.month) && save.month >= 1 && save.month <= 36 &&
    Number.isInteger(save.day) && save.day >= 1 && save.day <= 5 &&
    typeof save.cash === 'number' && Number.isFinite(save.cash);
}

async function handle(request, env) {
  const origin = request.headers.get('Origin') || '';
  if (request.method === 'OPTIONS') {
    if (!ALLOWED_ORIGINS.has(origin)) return new Response(null, { status: 403 });
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
  if (origin && !ALLOWED_ORIGINS.has(origin)) return json({ message: 'Origin is not allowed.' }, 403, origin);

  const { pathname } = new URL(request.url);
  if (pathname === '/health' && request.method === 'GET') return json({ ok: true }, 200, origin);
  if (!['/api/save', '/api/save/meta'].includes(pathname)) return json({ message: 'Not found.' }, 404, origin);
  if (!await applyRateLimit(request, env)) return json({ message: 'Too many requests.' }, 429, origin);

  const code = readCode(request);
  if (!code) return json({ message: 'Recovery code is invalid.' }, 400, origin);
  const codeHash = await sha256(code);

  if (request.method === 'GET') {
    const row = await findSave(env, codeHash);
    if (!row) return json({ message: 'No cloud save for this recovery code.' }, 404, origin);
    if (pathname.endsWith('/meta')) return json(saveMeta(row), 200, origin);
    const revision = Number(request.headers.get('If-Match'));
    if (revision !== row.revision) return json({ message: 'Cloud save changed.', meta: saveMeta(row) }, 409, origin);
    return json({ save: row.save_json, ...saveMeta(row) }, 200, origin);
  }

  if (request.method !== 'PUT' || pathname !== '/api/save') return json({ message: 'Method not allowed.' }, 405, origin);
  const length = Number(request.headers.get('Content-Length') || 0);
  if (length > MAX_BODY_BYTES) return json({ message: 'Save is too large.' }, 413, origin);
  const body = await readBody(request);
  if (body === null) return json({ message: 'Save is too large.' }, 413, origin);
  let save;
  try {
    save = JSON.parse(body);
  } catch (error) {
    return json({ message: 'Save data must be valid JSON.' }, 400, origin);
  }
  if (!validGameSave(save)) return json({ message: 'Save data is invalid.' }, 400, origin);

  const existing = await findSave(env, codeHash);
  const now = Date.now();
  const savedAt = Number(save.savedAt) || now;
  if (!existing) {
    const result = await env.DB.prepare(
      `INSERT OR IGNORE INTO saves
       (code_hash, save_json, revision, month, day, cash, saved_at, updated_at)
       VALUES (?, ?, 1, ?, ?, ?, ?, ?)`
    ).bind(codeHash, body, save.month, save.day, Math.round(save.cash), savedAt, now).run();
    if (result.meta.changes !== 1) {
      const latest = await findSave(env, codeHash);
      return json({ message: 'Cloud save already exists.', meta: saveMeta(latest) }, 409, origin);
    }
    return json({ created: true, revision: 1, month: save.month, day: save.day, cash: save.cash, savedAt, updatedAt: now }, 201, origin);
  }

  const expectedRevision = Number(request.headers.get('If-Match'));
  if (!Number.isInteger(expectedRevision) || expectedRevision !== existing.revision) {
    return json({ message: 'Cloud save changed.', meta: saveMeta(existing) }, 409, origin);
  }
  const result = await env.DB.prepare(
    `UPDATE saves SET save_json = ?, revision = revision + 1, month = ?, day = ?,
     cash = ?, saved_at = ?, updated_at = ? WHERE code_hash = ? AND revision = ?`
  ).bind(body, save.month, save.day, Math.round(save.cash), savedAt, now, codeHash, expectedRevision).run();
  if (result.meta.changes !== 1) {
    const latest = await findSave(env, codeHash);
    return json({ message: 'Cloud save changed.', meta: saveMeta(latest) }, 409, origin);
  }
  return json({ created: false, revision: expectedRevision + 1, month: save.month, day: save.day, cash: save.cash, savedAt, updatedAt: now }, 200, origin);
}

export default {
  async fetch(request, env) {
    try {
      return await handle(request, env);
    } catch (error) {
      return json({ message: 'Cloud save service failed.' }, 500, request.headers.get('Origin') || '');
    }
  },
};
