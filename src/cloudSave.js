const baseUrl = (import.meta.env.VITE_CLOUD_SAVE_URL || '').replace(/\/$/, '');

const cloudOriginAvailable = typeof window !== 'undefined' && (
  window.location.protocol === 'https:' ||
  ['localhost', '127.0.0.1'].includes(window.location.hostname)
);
const cloudEndpointSecure = /^https:\/\//i.test(baseUrl) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(baseUrl);
export const cloudSaveAvailable = !!baseUrl && cloudOriginAvailable && cloudEndpointSecure;

const codeAlphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function createRecoveryCode() {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => codeAlphabet[byte & 31]).join('');
}

async function request(path, options = {}) {
  if (!baseUrl) throw new Error('云存档服务暂不可用。');
  const response = await fetch(baseUrl + path, options);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.message || '云存档请求失败。');
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
}

function recoveryHeaders(code) {
  return { 'X-Recovery-Code': code.replace(/\s+/g, '').toUpperCase() };
}

export function previewCloudSave(code) {
  return request('/api/save/meta', { headers: recoveryHeaders(code) });
}

export function putCloudSave(code, saveText, revision) {
  const headers = {
    ...recoveryHeaders(code),
    'Content-Type': 'application/json',
  };
  if (revision != null) headers['If-Match'] = String(revision);
  return request('/api/save', { method: 'PUT', headers, body: saveText });
}

export async function readCloudSave(code, revision) {
  return request('/api/save', {
    headers: { ...recoveryHeaders(code), 'If-Match': String(revision) },
  });
}
