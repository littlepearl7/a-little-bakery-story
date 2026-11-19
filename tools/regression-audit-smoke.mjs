import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { readFile } from 'node:fs/promises';

const storage = new Map();
globalThis.localStorage = {
  setItem: (key, value) => storage.set(key, value),
  getItem: (key) => storage.get(key) || null,
  removeItem: (key) => storage.delete(key),
};

const vite = await createServer({
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true, include: [] },
  appType: 'custom',
});

try {
  const store = await vite.ssrLoadModule('/src/store.js');
  const { STORY } = await vite.ssrLoadModule('/src/story.js');
  const text = await readFile(new URL('../story/文案v6.md', import.meta.url), 'utf8');

  assert.equal(STORY.events.filter((event) => event.kind === 'main').length, 36);
  assert.equal(Object.keys(STORY.friend).length, 36);
  assert.equal(STORY.events.filter((event) => event.kind === 'tutorial').length, 7);
  assert(!text.includes('tokens truncated'), '统一剧情文案不包含截断占位文本');

  store.reset();
  store.state.played = ['EVT_PROLOGUE_01', 'EVT_TUTORIAL_END'];
  store.state.tutorialProgress = 3;
  store.state.tutorialPromptPending = true;
  store.queue.events.push(STORY.find('EVT_TUTORIAL_FRONT'));
  store.save();
  store.state.tutorialProgress = 9;
  assert(store.load());
  assert.equal(store.state.tutorialProgress, 0, '教程结尾已完成的旧档应清除残留进度');
  assert.equal(store.state.tutorialPromptPending, false, '教程结尾已完成的旧档不应再次询问');
  assert(!store.queue.events.some((event) => event.kind === 'tutorial'), '教程已完成的旧档不应恢复残留教程事件');

  store.reset();
  Object.assign(store.state, {
    shopLevel: 3,
    staff: ['p1', 'p2', 'p3'],
    partnerSkill: { p1: 3, p2: 3, p3: 3 },
    staffAssignments: { picker: null, packer: null, auto: true },
    dayPhase: 'service-ready',
    shelf: { plain: 100, strawberry: 100, chocolate: 100 },
    batches: ['plain', 'strawberry', 'chocolate'].map((product) => ({ id: product, product, qty: 100, quality: 'normal' })),
    orders: [],
    challenge: null,
  });
  store.openShop();
  assert.equal(store.state.dayPhase, 'closing', '自动接待应正常完成营业');
  assert(Math.abs(store.state.reputation - 20.06) < 0.001, '自动接待只结算一次营业口碑');

  store.reset();
  Object.assign(store.state, {
    dayPhase: 'service',
    challenge: { type: 'custom', target: '' },
    challengeDone: false,
    cash: 10000,
    dayRev: 0,
    monthRev: 0,
    shelf: { plain: 2 },
    batches: [{ id: 'plain', product: 'plain', qty: 2, quality: 'normal' }],
    service: {
      current: 0,
      activeTicketId: 'custom-1',
      customDone: 0,
      tickets: [
        { id: 'custom-1', type: '定制', customer: '顾客甲', product: 'plain', qty: 1, pay: 100, status: 'ready' },
        { id: 'custom-2', type: '定制', customer: '顾客乙', product: 'plain', qty: 1, pay: 100, status: 'waiting' },
      ],
    },
  });
  assert(store.deliverTicket('custom-1').ok);
  assert(store.declineTicket('custom-2'));
  assert.equal(store.state.challengeDone, true, '定制挑战应在营业结束时结算');
  assert.equal(store.state.dayRev, 100, '未交付全部定制订单时不发挑战奖金');
  assert.equal(store.state.cash, 10100);

  store.reset();
  Object.assign(store.state, { month: 6, day: 5, dayPhase: 'closing', phase: 'playing' });
  store.queue.events.splice(0);
  store.closeDay('waste');
  const shortEnding = store.queue.events.find((event) => event.kind === 'short');
  assert.equal(store.state.phase, 'ended');
  assert(shortEnding?.beats.length > 0, '阶段未达标时应排入可播放的短线结局');

  console.log('✓ 剧情完整性、旧教程存档、自动营业口碑、定制挑战和短线结局通过');
} finally {
  await vite.close();
}

