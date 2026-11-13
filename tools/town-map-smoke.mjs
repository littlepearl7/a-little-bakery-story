import assert from 'node:assert/strict';
import { createServer } from 'vite';

const values = new Map();
globalThis.localStorage = { setItem: (key, value) => values.set(key, value), getItem: (key) => values.get(key) || null };
const vite = await createServer({ server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true, include: [] }, appType: 'custom' });

try {
  const s = await vite.ssrLoadModule('/src/store.js');
  const reset = () => Object.assign(s.state, s.newState());
  reset();
  assert(!s.sceneAvailability('home').open);
  assert(!s.sceneAvailability('park').open);
  assert(!s.sceneAvailability('school').open);
  assert(!s.sceneAvailability('studio').open);
  assert(!s.sceneAvailability('market').open);
  assert(!s.sceneAvailability('cafe').open);
  assert(s.visitTownScene('street'));
  assert.equal(s.state.sceneVisits.street, 1);

  s.state.dayIndex = 2;
  assert(s.sceneAvailability('home').open && s.sceneAvailability('park').open);
  assert(s.visitTownScene('park'));
  assert(!s.sceneAvailability('river').open);
  s.state.dayIndex = 3;
  assert(s.sceneAvailability('river').open);
  assert(s.visitTownScene('river'));
  const ap = s.state.ap;
  assert(s.takeTownPhoto('river').ok);
  assert.equal(s.state.ap, ap - 1);
  assert(!s.takeTownPhoto('river').ok);
  assert(s.exploreRiver('walk').ok);
  assert(!s.exploreRiver('walk').ok);
  assert(s.state.sceneEvents.includes('walk'));
  assert(s.state.scenePhotos.length === 1);

  s.state.month = 3;
  assert(s.sceneAvailability('lab').open);
  s.state.customOrders = 1;
  assert(s.sceneAvailability('studio').open);
  const decor = s.state.pantry.decor;
  assert(s.submitDesign({ shape: '圆形', color: '奶油白', decoration: '草莓', packaging: '牛皮纸礼盒' }).ok);
  assert.equal(s.state.pantry.decor, decor - 1);
  assert.equal(s.state.designWorks.length, 1);
  assert(s.changeOutfit('bakery'));
  assert.equal(s.state.outfit, 'bakery');
  assert(!s.changeOutfit('locked-outfit'));

  s.state.shopLevel = 2;
  s.state.month = 6;
  assert(s.sceneAvailability('cafe').open);
  assert(s.chatCafeOwner().ok);
  assert.equal(s.state.cafeRelation, 3);
  assert(!s.chatCafeOwner().ok);
  s.state.staff.push('rain');
  assert(s.sceneAvailability('staff').open);
  s.state.shopLevel = 3;
  assert(s.sceneAvailability('market').open);
  s.state.shopLevel = 4;
  s.state.customOrders = 2;
  s.state.brand = 30;
  s.state.month = 19;
  assert(s.sceneAvailability('store').open);
  const backedUp = JSON.parse(values.get('alb-save-v6'));
  assert(backedUp.scenePhotos.length === 1 && backedUp.designWorks.length === 1);
  Object.assign(s.state, s.newState());
  assert(s.load());
  assert.equal(s.state.scenePhotos.length, 1);
  assert.equal(s.state.designWorks.length, 1);
  assert.equal(s.state.outfit, 'bakery');

  reset();
  const dayBefore = s.state.dayIndex;
  assert(s.restAtHome());
  assert.equal(s.state.dayIndex, dayBefore + 1);
  assert.equal(s.state.dailyLedger.length, 1);
  assert.equal(s.state.dayPhase, 'prep');
  const snapshot = JSON.parse(values.get('alb-save-v6'));
  assert.equal(snapshot.dailyLedger.length, 1);
  assert(snapshot.sceneVisits && Array.isArray(snapshot.scenePhotos));
  console.log('✓ 竖屏大地图场景门槛、交互奖励、日结和存档冒烟测试全部通过');
} finally {
  await vite.close();
}
