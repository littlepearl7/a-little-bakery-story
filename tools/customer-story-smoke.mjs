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
  assert.equal(vn.sceneKeyOfEvent(story.STORY.find('EVT_M01_MAIN')), 'shop', 'M1第一天应显示店内背景');
  assert.match(story.STORY.find('EVT_XIAOMAN_M01').beats.at(-1).text, /等我吃完这块蛋糕，我要把你的草莓小皇冠画进我的画册里！$/, '小满首篇应以指定对白结束');
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
  assert(!store.queue.events.some((event) => event.id === 'EVT_XIAOMAN_M01'), '小满首篇应等M1第3日营业结束');
  store.state.dayPhase = 'closing';
  store.state.service = { tickets: [], current: 0, formalBusiness: false };
  store.closeDay('waste');
  assert(store.queue.events.some((event) => event.id === 'EVT_XIAOMAN_M01'), '小满首篇应在M1第3日打烊后开放');

  store.queue.events.splice(0);
  store.state.month = 18;
  store.state.day = 4;
  store.state.played = [];
  store.queueStory();
  assert(!store.queue.events.some((event) => event.id === 'EVT_CROSS_M18'), '交叉剧情前置未完成时不能开放');
  store.state.played = ['EVT_GRANNY_M17', 'EVT_UNCLE_M16'];
  store.state.day = 5;
  store.queueStory();
  assert(store.queue.events.some((event) => event.id === 'EVT_CROSS_M18'), '交叉剧情应在第4日打烊且前置完成后开放');

  store.reset();
  store.queue.events.splice(0);
  store.state.day = 2;
  store.state.dayIndex = 1;
  const skipped = store.skipCurrentDay();
  assert.equal(skipped?.day, 2, '开发者后门应结算当前经营日');
  assert.equal(store.state.month, 1, '开发者后门不能直接跳过整月');
  assert.equal(store.state.day, 3, '开发者后门只推进一天');

  store.reset();
  store.queue.events.splice(0);
  const friendEvent = story.STORY.friend[1];
  assert(store.doAction('sqchat', {}), '寻找苏晴应启动当月互动剧情');
  assert.equal(store.queue.events[0]?.id, friendEvent.id, '苏晴剧情应排在队列最前');
  assert.equal(store.state.sqchatMonth, 0, '苏晴互动应在剧情读完后才结算完成');
  store.finishEvent(friendEvent);
  assert.equal(store.state.sqchatMonth, 1, '苏晴互动应在读完后记为完成');

  console.log('✓ 常客剧情解析、立绘配置、日期触发和交叉前置通过');
} finally {
  await vite.close();
}
