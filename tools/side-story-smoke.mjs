import assert from 'node:assert/strict';
import { createServer } from 'vite';

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
  assert.equal(story.STORY.mom.length, 36, '应解析林暖的 36 段月度剧情');
  assert.equal(story.STORY.zhiQiu.length, 19, '应解析沈知秋 11 段主线与 8 段日常');
  assert(story.STORY.find('EVT_ZHIQIU_CH01').beats.some((beat) => beat.who === '沈知秋'), '沈知秋台词应识别为角色对白');
  assert(story.STORY.find('EVT_ZHIQIU_CH01').beats.some((beat) => beat.t === 'cg' && beat.key === 'zhiqiu-01'), 'CG 标记应解析为沈知秋收藏编号');
  assert(story.STORY.find('EVT_ZHIQIU_CH06_WIN').beats.some((beat) => beat.t === 'cg' && beat.key === 'zhiqiu-05'), '冬季篇结尾应包含四季菜单 CG');

  store.reset();
  store.state.dayPhase = 'closing';
  store.state.service = { tickets: [], formalBusiness: false };
  store.closeDay('waste');
  assert.equal(store.state.formalBusinessDays, 0, '跳过的经营日不应计作正式营业');

  store.reset();
  store.state.dayPhase = 'closing';
  store.state.service = { tickets: [], formalBusiness: true };
  store.closeDay('waste');
  assert.equal(store.state.formalBusinessDays, 1, '完成正式营业后应记录一次');
  store.reset();
  store.state.formalBusinessDays = 1;
  let info = store.momStoryInfo();
  assert.equal(info.event?.id, 'EVT_MOM_M01', 'M1 正式营业后开放第一段母女剧情');
  const actionPoints = store.state.ap;
  assert(store.doAction('momchat', {}));
  assert.equal(store.state.ap, actionPoints - 1, '触发妈妈剧情扣一次行动力');
  store.finishEvent(store.queue.events[0]);
  assert.equal(store.state.momBond, 25, '结束 M1 剧情后结算家庭默契奖励');
  assert(store.state.momKeepsakes.includes('店铺钥匙'), 'M1 剧情应解锁旧物');

  store.reset();
  store.state.month = 11;
  store.state.day = 4;
  store.state.dayIndex = 54;
  store.state.shopLevel = 2;
  store.state.customAtM5 = true;
  assert.equal(store.zhiQiuStoryInfo().event?.id, 'EVT_ZHIQIU_CH01', 'M11 第4日满足前置后开放沈知秋初遇');
  assert(store.doAction('zhiqiuchat', {}));
  assert.equal(store.queue.events[0]?.id, 'EVT_ZHIQIU_CH01');
  store.state.played = ['EVT_ZHIQIU_CH01', 'EVT_ZHIQIU_DAILY_01'];
  store.queue.events.splice(0);
  store.state.month = 13;
  store.state.day = 4;
  store.state.dayIndex = 64;
  store.state.cafeDailyTalks = 1;
  store.state.cafeLastTalk = 0;
  assert.equal(store.zhiQiuStoryInfo().event, null, '两次日常交流之前不开放第二章');
  assert(store.doAction('zhiqiuchat', {}));
  assert.equal(store.state.cafeDailyTalks, 2);
  assert.equal(store.zhiQiuStoryInfo().event?.id, 'EVT_ZHIQIU_CH02');

  console.log('✓ 林暖、沈知秋支线解析、触发、奖励和正式营业门槛通过');
} finally {
  await vite.close();
}
