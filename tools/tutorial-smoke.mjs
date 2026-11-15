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
  store.state.played = ['EVT_PROLOGUE_01'];
  store.state.tutorialPromptPending = true;
  store.save();
  store.state.tutorialPromptPending = false;
  assert(store.load());
  assert.equal(store.state.tutorialPromptPending, true, '刷新后继续显示教程选择');

  store.queue.events.push({ id: 'MAIN_M1_TEST', month: 1, kind: 'main', beats: [] });
  store.startTutorial(true);
  assert.equal(store.queue.events[0].id, 'EVT_TUTORIAL_START', '教程应排在 M1 主线之前');
  assert.equal(store.queue.events.at(-1).id, 'MAIN_M1_TEST', '教程结束后保留主线');
  assert.equal(store.state.tutorialPromptPending, false);

  store.queue.events.splice(0);
  store.queue.events.push({ id: 'MAIN_M1_TEST', month: 1, kind: 'main', beats: [] });
  store.startTutorial(false);
  assert.equal(store.queue.events[0].id, 'EVT_TUTORIAL_SKIP', '跳过时先播简短收尾');
  assert.equal(store.state.tutorialSeen, true);
  console.log('✓ 教程提示存档、事件顺序与跳过流程通过');
} finally {
  await vite.close();
}
