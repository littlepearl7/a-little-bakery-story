import assert from 'node:assert/strict';
import { createServer } from 'vite';

const values = new Map();
globalThis.localStorage = {
  setItem: (key, value) => values.set(key, value),
  getItem: (key) => values.get(key) || null,
  removeItem: (key) => values.delete(key),
};

const vite = await createServer({
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true, include: [] },
  appType: 'custom',
});

try {
  const store = await vite.ssrLoadModule('/src/store.js');
  store.reset();

  const legacy = store.exportSaveText();
  values.set('alb-manual-save-v1', legacy);
  assert(store.hasSave(true, 1), '旧版单手动档自动映射到槽位 1');
  assert.equal(store.manualSaveText(1), legacy);
  assert.equal(store.hasSave(true, 2), false);

  store.state.month = 2;
  assert(store.saveManual(1));
  store.state.month = 3;
  assert(store.saveManual(2));
  store.state.month = 4;
  assert(store.saveManual(3));
  assert.equal(store.MANUAL_SAVE_SLOTS, 3);

  store.state.month = 10;
  assert(store.loadManualSave(false, 1));
  assert.equal(store.state.month, 2, '读取槽位 1 恢复对应月份');
  assert(store.loadManualSave(false, 2));
  assert.equal(store.state.month, 3, '读取槽位 2 不会串档');
  assert(store.loadManualSave(false, 3));
  assert.equal(store.state.month, 4, '读取槽位 3 不会串档');
  assert.equal(store.saveManual(4), false, '超出槽位范围不写入');
  assert.equal(store.hasSave(true, 0), false);
  console.log('✓ 三个本地手动存档位、旧档迁移与独立读取通过');
} finally {
  await vite.close();
}
