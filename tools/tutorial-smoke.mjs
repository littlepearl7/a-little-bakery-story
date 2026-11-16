import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { readFile } from 'node:fs/promises';

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
  const story = await vite.ssrLoadModule('/src/story.js');

  const opening = story.STORY.prologue;
  assert.equal(opening?.id, 'EVT_PROLOGUE_01', '开场序幕必须能从事件类型找到');
  assert(opening.beats.length > 0, '开场序幕必须含有可播放正文');
  const appSource = await readFile(new URL('../src/App.vue', import.meta.url), 'utf8');
  assert(!appSource.includes('开场序幕没有成功载入'), '序幕异常不能再用标题页弹窗阻断进入游戏');

  store.reset();
  store.startGame();
  assert.equal(store.queue.events[0]?.kind, 'prologue', '新的开始先进入序幕');
  assert.equal(store.queue.events[0]?.id, 'EVT_PROLOGUE_01');
  assert(store.queue.events[0].beats.length > 0, '序幕应有可播放正文');

  store.reset();
  store.state.played = ['EVT_PROLOGUE_01'];
  store.startGame(true);
  assert.equal(store.queue.events[0]?.kind, 'prologue', '新的开始强制把序幕放回队首');

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

  store.reset();
  store.state.played = ['EVT_PROLOGUE_01'];
  store.startGame();
  const apBeforeChat = store.state.ap;
  assert(store.doAction('sqchat', {}), '准备阶段可以开始本月苏晴剧情');
  assert.equal(store.queue.events[0]?.id, story.STORY.friend[1]?.id, '主动互动剧情排在待播主线之前');
  assert.equal(store.state.ap, apBeforeChat - 1, '苏晴互动只扣一次行动力');
  assert.equal(store.doAction('sqchat', {}), false, '同月重复互动不会重复触发');
  assert.equal(store.state.ap, apBeforeChat - 1, '重复互动不再扣行动力');
  console.log('✓ 序幕开场、教程提示与苏晴互动剧情流程通过');
} finally {
  await vite.close();
}
