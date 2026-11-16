import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { readFile } from 'node:fs/promises';

const values = new Map();
globalThis.localStorage = {
  setItem: (key, value) => values.set(key, value),
  getItem: (key) => values.get(key) || null,
  removeItem: (key) => values.delete(key),
};

const vite = await createServer({ server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true, include: [] }, appType: 'custom' });

try {
  const story = await vite.ssrLoadModule('/src/story.js');
  const store = await vite.ssrLoadModule('/src/store.js');
  const vn = await vite.ssrLoadModule('/src/vn.js');

  assert.equal(story.STORY.customers.length, 32, '常客个人事件与合并后的交叉事件应按可播放事件计数');
  for (const name of ['张奶奶', '陈叔', '小满']) assert(vn.SPRITE[name], name + '应配置立绘');
  assert(story.STORY.find('EVT_GRANNY_M17').beats.some((beat) => beat.t === 'cg' && beat.key === 'regular-granny-m17'));
  assert(story.STORY.find('EVT_M36_MAIN').beats.some((beat) => beat.t === 'cg' && beat.key === 'group'), 'M36群像使用已收到的全员合影');
  for (const id of ['regular-granny-m17', 'regular-uncle-m24', 'regular-xiaoman-m10']) {
    assert(vn.CG_COLLECTION.some((cg) => cg.id === id), id + '应出现在CG收藏中');
    assert(vn.CG[id]?.img, id + '应配置对应图片文件');
    await readFile(new URL('../public/art/' + vn.CG[id].img, import.meta.url));
  }
  assert(story.STORY.find('EVT_CROSS_M28').beats.some((beat) => beat.who === '陈叔'), 'M28群像对白应识别陈叔');

  store.reset();
  store.queue.events.splice(0);
  store.state.month = 1;
  store.state.day = 2;
  store.state.dayIndex = 2;
  store.queueStory();
  assert(!store.queue.events.some((event) => event.id === 'EVT_XIAOMAN_M01'), '小满首篇不能提前到M1第2日');
  store.state.day = 3;
  store.state.dayIndex = 3;
  store.queueStory();
  assert(store.queue.events.some((event) => event.id === 'EVT_XIAOMAN_M01'), '小满首篇应在M1第3日开放');

  store.queue.events.splice(0);
  store.state.month = 18;
  store.state.day = 4;
  store.state.played = [];
  store.queueStory();
  assert(!store.queue.events.some((event) => event.id === 'EVT_CROSS_M18'), '交叉剧情前置未完成时不能开放');
  store.state.played = ['EVT_GRANNY_M17', 'EVT_UNCLE_M16'];
  store.queueStory();
  assert(store.queue.events.some((event) => event.id === 'EVT_CROSS_M18'), '交叉剧情前置完成后应开放');

  console.log('✓ 常客剧情解析、立绘配置、日期触发和交叉前置通过');
} finally {
  await vite.close();
}
