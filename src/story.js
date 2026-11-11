/**
 * 剧情解析器。
 *
 * 唯一数据源是 story/剧情对话.md —— 改那个文件就改剧情，不用动代码。
 * 这里只做一件事：把 md 解析成 [{ id, trigger, scene, rewards, lines }]。
 * 格式说明写在 md 文件末尾。
 */

import raw from '../story/剧情对话.md?raw';

const STAT_KEYS = {
  月份: (s) => s.month,
  资金: (s) => s.money,
  烘焙: (s) => s.skill,
  品质: (s) => s.quality,
  口碑: (s) => s.reputation,
  知名度: (s) => s.fame,
  友情值: (s) => s.friendship,
  门店: (s) => s.stores,
  员工: (s) => s.staff,
  配方数: (s) => s.recipes.length,
};

export function statValue(state, key) {
  const fn = STAT_KEYS[key];
  return fn ? fn(state) : 0;
}

/** 「资金+500，口碑+8，配方:strawberry」→ 结构化奖励项 */
export function parseRewards(text) {
  const out = [];
  if (!text) return out;
  text.split(/[，,、]/).forEach((seg) => {
    const s = seg.trim();
    if (!s) return;
    let m = s.match(/^(.+?)\s*([+\-])\s*(\d+)$/);
    if (m) {
      out.push({ kind: 'num', key: m[1].trim(), value: (m[2] === '-' ? -1 : 1) * Number(m[3]) });
      return;
    }
    m = s.match(/^(.+?)\s*[:：]\s*(.+)$/);
    if (m) out.push({ kind: 'id', key: m[1].trim(), value: m[2].trim() });
  });
  return out;
}

/** 「月份=9,21,33」/「月份=12 且 口碑>=40」/「开局」/「随机」 */
export function parseTrigger(text) {
  const s = (text || '').trim();
  if (!s) return null;
  if (s === '开局') return { type: 'start' };
  if (s === '随机') return { type: 'random' };

  const conds = [];
  for (const part of s.split('且')) {
    const p = part.trim();
    if (!p) continue;
    const m = p.match(/^(.+?)\s*(>=|<=|==|=|>|<)\s*(.+)$/);
    if (!m) return null;
    conds.push({
      key: m[1].trim(),
      op: m[2],
      values: m[3].split(/[,，]/).map((v) => v.trim()),
    });
  }
  return conds.length ? { type: 'cond', conds } : null;
}

export function matchTrigger(trig, state) {
  if (!trig || trig.type !== 'cond') return false;
  return trig.conds.every((c) => {
    const actual = Number(statValue(state, c.key));
    if (c.op === '=' || c.op === '==') {
      return c.values.some((v) => Number(v) === actual);
    }
    const v = Number(c.values[0]);
    if (c.op === '>=') return actual >= v;
    if (c.op === '<=') return actual <= v;
    if (c.op === '>') return actual > v;
    if (c.op === '<') return actual < v;
    return false;
  });
}

const SPEAKER_RE = /^([^\s：:（()【】]{1,8})(?:（([^）)]*)）)?\s*[：:]\s*(.*)$/;

function parseBlock(title, lines, warnings) {
  const meta = {};
  const beats = [];
  let inChoice = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith('>')) continue;

    // 选项提示
    if (line.startsWith('?') || line.startsWith('？')) {
      beats.push({ type: 'ask', text: line.slice(1).trim(), options: [] });
      inChoice = true;
      continue;
    }

    // 列表项：选项 或 元数据
    if (line.startsWith('-')) {
      const body = line.replace(/^-\s*/, '');
      if (inChoice) {
        const i = body.search(/[|｜]/);
        const last = beats[beats.length - 1];
        if (i >= 0) {
          last.options.push({
            text: body.slice(0, i).trim(),
            rewards: parseRewards(body.slice(i + 1)),
          });
        } else {
          last.options.push({ text: body.trim(), rewards: [] });
        }
        continue;
      }
      const m = body.match(/^([^：:]+)[：:]\s*(.*)$/);
      if (m) meta[m[1].trim()] = m[2].trim();
      continue;
    }

    inChoice = false;

    // 旁白（苏晴）：…… 这种带视角标注的也归为旁白
    if (line.startsWith('旁白')) {
      const m = line.match(/^旁白\s*(?:（[^）]*）)?\s*[：:]\s*(.*)$/);
      beats.push({ type: 'say', speaker: null, text: m ? m[1] : line });
      continue;
    }

    const m = line.match(SPEAKER_RE);
    if (m) {
      beats.push({ type: 'say', speaker: m[1], emotion: m[2] || '', text: m[3] });
    } else {
      warnings.push('「' + title + '」里有一行没看懂，已跳过：' + line);
    }
  }

  if (!meta['事件ID']) return null;

  return {
    id: meta['事件ID'],
    title,
    scene: meta['场景'] || '',
    triggerText: meta['触发'] || '',
    trigger: parseTrigger(meta['触发']),
    rewards: parseRewards(meta['奖励']),
    beats,
  };
}

export function parseStory(md) {
  const warnings = [];
  const events = [];
  const lines = md.split(/\r?\n/);

  let title = null;
  let buf = [];

  const flush = () => {
    if (title !== null) {
      // 先确认这块里有「事件ID」，否则是章节标题或文末说明，整块跳过，
      // 免得把说明里的示例台词当成格式错误报出来
      const hasId = buf.some((l) => /^-\s*事件ID\s*[：:]/.test(l.trim()));
      if (hasId) {
        const ev = parseBlock(title, buf, warnings);
        if (ev) events.push(ev);
      }
    }
    buf = [];
  };

  for (const line of lines) {
    const h = line.match(/^(#{2,3})\s+(.*)$/);
    if (h) {
      flush();
      title = h[2].trim();
      continue;
    }
    if (title !== null) buf.push(line);
  }
  flush();

  return { events, warnings };
}

export const STORY = parseStory(raw);

if (typeof console !== 'undefined') {
  if (STORY.warnings.length) {
    console.warn('[剧情] 有 ' + STORY.warnings.length + ' 行没解析成功：');
    STORY.warnings.forEach((w) => console.warn('  ' + w));
  }
  console.log('[剧情] 已加载 ' + STORY.events.length + ' 个事件');
}
