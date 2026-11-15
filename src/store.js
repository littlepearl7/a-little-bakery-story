/** 游戏规则 V5：经营日循环、行动力、体力、生产与销售、阶段结算、存档。 */

import { reactive, computed } from 'vue';
import {
  PRODUCTS, productById, PRICE_TIERS, CITIES, SHOP_LEVELS, PARTNERS, partnerById,
  DECORATIONS, CUSTOMERS, INGREDIENTS, RECIPE_BOM,
  STAGES, ENDINGS, stageByMonth, shopLevelInfo, DEVICES, deviceById,
} from './data';
import { STORY, evalTest, PARTNER_OF } from './story';
import { evaluateResearchTrial, evaluateSignatureTrial, improvementFor } from './lab';
import { CG_COLLECTION } from './vn';

const SAVE_KEY = 'alb-save-v6';
const MANUAL_SAVE_KEY = 'alb-manual-save-v1';
const MANUAL_SAVE_PREFIX = 'alb-manual-slot-v1-';
export const MANUAL_SAVE_SLOTS = 3;
export const DAYS_PER_MONTH = 5;

const MOM_CAPACITY = 60; // 林暖每天的免费产能
const STAFF_CAPACITY = 40; // 每位伙伴的产能

export function newState() {
  return {
    v: 9,
    month: 1,
    day: 1,
    cash: 12000,
    reputation: 20,
    popularity: 10,
    loyalty: 20,
    brand: 5,
    shopLevel: 1,
    storeCount: 1,
    cities: ['qiyun'],
    surveyed: [],
    ap: 8,
    maxAp: 8,
    stamina: 100,
    maxStamina: 100,
    pantry: { base: 12, dairy: 8, decor: 2, strawberry: 2, cocoa: 2 },
    legacyStock: 0,
    warehouseCapacity: 120,
    ngpDiscountUsed: false,
    devices: {},
    shelf: {},
    batches: [],
    plan: {},
    prices: {},
    levels: { plain: 1, strawberry: 1, chocolate: 1 },
    unlocked: ['plain', 'strawberry', 'chocolate'],
    staff: [],
    partnerTrust: {},
    partnerSkill: {},
    momBond: 10,
    style: { tradition: 0, innovation: 0, efficiency: 0, community: 0 },
    orders: [],
    dayPhase: 'prep',
    service: null,
    productionMini: null,
    productionResult: null,
    bakingRecords: [],
    recipeNames: {},
    marketPoints: 0,
    tutorialSeen: false,
    tutorialPromptPending: false,
    tutorialProgress: 0,
    tutorialPractice: null,
    tutorialPracticeProgress: 0,
    marketRun: null,
    cafeRun: null,
    cafeCollab: 0,
    activityRecords: { market: [], cafe: [] },
    sceneVisits: {},
    scenePhotos: [],
    sceneEvents: [],
    outfit: 'auto',
    unlockedOutfits: ['auto', 'daily', 'bakery'],
    designWorks: [],
    cafeRelation: 0,
    cafeLastTalk: 0,
    notices: [],
    unlockNotified: [],
    dailyLedger: [],
    daySpend: 0,
    staffAssignments: { picker: null, packer: null, auto: false },
    challenge: null,
    challengeDayIndex: 0,
    challengeDone: false,
    decorations: [],
    regularCustomers: {
      chen: { purchases: 0, lastPurchaseDay: 0, stories: [] },
      zhang: { purchases: 0, lastPurchaseDay: 0, stories: [] },
    },
    runEndings: [],
    career: {
      products: ['plain', 'strawberry', 'chocolate'],
      photos: [],
      cgs: [],
      decorations: [],
      endings: [],
      labReports: {},
      activityRecords: { market: [], cafe: [] },
      newGamePlusRuns: 0,
    },
    labPending: null,
    newGamePlus: false,
    doneOrders: 0,
    customOrders: 0,
    onlineOrders: 0,
    festivalOrders: 0,
    monthSnap: { rep: 20, unlocked: [], skill: {} },
    deliveryDay: -1,
    helpers: 0,
    usedMomHelp: false,
    dayIndex: 1,
    cd: {},
    dayRev: 0,
    daySold: 0,
    dayLeft: 0,
    dayMade: 0,
    monthRev: 0,
    monthCost: 0,
    monthSold: {},
    played: [],
    storyChoices: {},
    photos: [],
    log: [],
    phase: 'playing',
    ending: null,
    acquired: false,
    autoStory: false,
    sqchatMonth: 0,
    stage: 1,
    report: null,
  };
}

export const state = reactive(newState());
export const queue = reactive({ events: [] });

/* ---------------- 派生值 ---------------- */

/* ---------------- 设备 ---------------- */

export function deviceTier(id) {
  return state.devices[id] || 0;
}

/** 当前等级带来的数值；0 级为 0 */
export function deviceValue(id) {
  const d = deviceById(id);
  const t = deviceTier(id);
  return t && d ? d.tiers[t - 1].value : 0;
}

export function deviceNext(id) {
  const d = deviceById(id);
  const t = deviceTier(id);
  return d && t < d.tiers.length ? d.tiers[t] : null;
}

export function upgradeDevice(id) {
  const next = deviceNext(id);
  if (!next || state.phase !== 'playing' || state.dayPhase !== 'prep' || state.cash < next.cost) return false;
  state.cash -= next.cost;
  state.devices[id] = deviceTier(id) + 1;
  if (id === 'warehouse') state.warehouseCapacity = [120, 180, 240, 320][state.devices[id]];
  state.monthCost += next.cost;
  state.daySpend += next.cost;
  log('升级了' + deviceById(id).name + '，' + next.text, 'good');
  save();
  return true;
}

export const availableProducts = computed(() =>
  PRODUCTS.filter((p) => state.unlocked.includes(p.id))
);

export function displayProductName(id) {
  return state.recipeNames?.[id] || productById(id).name;
}

export function nameResearchedRecipe(id, nickname) {
  if (!state.unlocked.includes(id)) return false;
  const name = String(nickname || '').trim().slice(0, 20);
  if (!name) return false;
  state.recipeNames = { ...(state.recipeNames || {}), [id]: name };
  save();
  return true;
}

export const capacity = computed(
  () =>
    state.stamina + MOM_CAPACITY + state.staff.length * STAFF_CAPACITY + deviceValue('oven')
);

export const decorationComfort = computed(() => Math.min(4, state.decorations.length));

export const pantryUnits = computed(() =>
  Object.values(state.pantry || {}).reduce((sum, quantity) => sum + Number(quantity || 0), 0)
);

export function ingredientTotals(plan = state.plan) {
  return Object.entries(plan || {}).reduce((totals, [productId, qty]) => {
    const bom = RECIPE_BOM[productId] || {};
    Object.entries(bom).forEach(([id, amount]) => {
      totals[id] = (totals[id] || 0) + amount * qty;
    });
    return totals;
  }, {});
}

export function missingIngredients(plan = state.plan) {
  const totals = {};
  let legacy = state.legacyStock || 0;
  Object.entries(plan || {}).forEach(([productId, qty]) => {
    for (let n = 0; n < qty; n++) {
      if (legacy >= 1) { legacy -= 1; continue; }
      Object.entries(RECIPE_BOM[productId] || {}).forEach(([id, amount]) => { totals[id] = (totals[id] || 0) + amount; });
    }
  });
  Object.keys(totals).forEach((id) => { totals[id] = Math.max(0, totals[id] - ((state.pantry || {})[id] || 0)); });
  return Object.fromEntries(Object.entries(totals).filter(([, need]) => need > 0));
}

export function canConsumeRecipe(productId, portion = 1) {
  if ((state.legacyStock || 0) >= portion) return true;
  return Object.entries(RECIPE_BOM[productId] || {}).every(([id, amount]) =>
    ((state.pantry || {})[id] || 0) + 0.0001 >= amount * portion
  );
}

function consumeRecipe(productId, portion = 1) {
  const bom = RECIPE_BOM[productId] || {};
  const need = Object.fromEntries(Object.entries(bom).map(([id, amount]) => [id, amount * portion]));
  if ((state.legacyStock || 0) >= portion) {
    state.legacyStock = Math.round((state.legacyStock - portion) * 100) / 100;
    return true;
  }
  if (!canConsumeRecipe(productId, portion)) return false;
  Object.entries(need).forEach(([id, amount]) => {
    state.pantry[id] = Math.round(((state.pantry[id] || 0) - amount) * 100) / 100;
  });
  return true;
}

export function buyIngredients(cart) {
  if (state.phase !== 'playing' || state.dayPhase !== 'prep' || state.ap < 1) {
    return { ok: false, message: '准备阶段需要 1 点行动力采购。' };
  }
  const entries = Object.entries(cart || {}).filter(([, qty]) => Number(qty) > 0);
  if (!entries.length || entries.some(([id, qty]) => {
    const item = INGREDIENTS.find((entry) => entry.id === id);
    return !item || item.month > state.month || !Number.isInteger(Number(qty));
  })) {
    return { ok: false, message: '请选择原料和整数购买数量。' };
  }
  const items = Object.fromEntries(entries.map(([id, qty]) => [id, Number(qty)]));
  const totalUnits = Object.values(items).reduce((sum, qty) => sum + qty, 0);
  const price = entries.reduce((sum, [id, qty]) => sum + INGREDIENTS.find((item) => item.id === id).price * qty, 0);
  const discount = state.newGamePlus && !state.ngpDiscountUsed ? Math.min(300, price) : 0;
  const payable = price - discount;
  if (pantryUnits.value + totalUnits > state.warehouseCapacity) return { ok: false, message: '仓库容量不足，请减少购买数量。' };
  if (state.cash < payable) return { ok: false, message: '资金不足。' };

  state.ap -= 1;
  state.cash -= payable;
  state.monthCost += payable;
  state.daySpend += payable;
  Object.entries(items).forEach(([id, qty]) => { state.pantry[id] = (state.pantry[id] || 0) + qty; });
  if (state.newGamePlus && !state.ngpDiscountUsed) state.ngpDiscountUsed = true;
  log('采购了 ' + entries.map(([id, qty]) => INGREDIENTS.find((item) => item.id === id).name + ' ×' + qty).join('、') + (discount ? '，二周目优惠 ¥' + discount : ''), 'good');
  save();
  return { ok: true, message: '采购完成，共 ¥' + payable + '。' };
}

export function restockPlan() {
  const missing = missingIngredients();
  const cart = {};
  Object.entries(missing).forEach(([id, qty]) => { cart[id] = Math.ceil(qty); });
  return cart;
}

export function customersToday() {
  return CUSTOMERS.filter((customer) => state.month >= customer.month && state.day === customer.day);
}

function recordCustomerPurchases(soldByProduct) {
  customersToday().forEach((customer) => {
    const visit = state.regularCustomers[customer.id];
    if (!soldByProduct[customer.product] || visit.lastPurchaseDay === state.dayIndex) return;

    visit.purchases += 1;
    visit.lastPurchaseDay = state.dayIndex;
    const storyIndex = visit.purchases === 1 ? 0 : visit.purchases === 3 ? 1 : -1;
    if (storyIndex >= 0 && !visit.stories.includes(storyIndex)) {
      visit.stories.push(storyIndex);
      log(customer.name + '和你聊起了老街坊的故事', 'story');
    } else {
      log(customer.name + '买走了一份' + productById(customer.product).name);
    }
  });
}

function customerChallenges() {
  const newProducts = PRODUCTS.filter((product) => product.month === state.month && state.unlocked.includes(product.id));
  const options = [
    { type: 'stock', target: '' },
    { type: 'custom', target: '' },
  ];
  if (newProducts.length) options.push({ type: 'new', target: newProducts[Math.floor(Math.random() * newProducts.length)].id });
  return options[Math.floor(Math.random() * options.length)];
}

function startChallengeForDay() {
  if (state.challengeDayIndex === state.dayIndex && state.challenge) return;
  state.challenge = customerChallenges();
  state.challengeDayIndex = state.dayIndex;
}

function addLegacyRecipe(pantry, productId, quantity) {
  Object.entries(RECIPE_BOM[productId] || {}).forEach(([ingredient, amount]) => {
    pantry[ingredient] = (pantry[ingredient] || 0) + amount * quantity;
  });
}

function priceTier(id) {
  return PRICE_TIERS[state.prices[id] || 'std'];
}

export function priceOf(id) {
  const p = productById(id);
  const lv = state.levels[id] || 1;
  return Math.round(p.price * priceTier(id).priceMul * (1 + (lv - 1) * 0.05) * (1 + deviceValue('cashier')));
}

export function demandOf(id) {
  const p = productById(id);
  const lv = state.levels[id] || 1;
  const mult =
    0.7 + state.reputation / 200 + state.popularity / 200 + state.loyalty / 250 + state.brand / 300;
  return Math.max(
    0,
    Math.round(
      p.demand *
        mult *
        priceTier(id).demandMul *
        (1 + (lv - 1) * 0.06) *
        (1 + (state.storeCount - 1) * 0.7) *
        (1 + decorationComfort.value * 0.02) *
        (1 + deviceValue('display'))
    )
  );
}

export const monthFixedCost = computed(
  () => 700 + state.shopLevel * 180 + state.staff.length * 500
);

export const stageInfo = computed(() => stageByMonth(state.month));

export const stageProgress = computed(() => {
  const st = stageInfo.value;
  if (!st || !st.goals || !st.goals.length) return { done: 0, need: 0, list: [] };
  const list = st.goals.map((g) => ({ text: g.text, done: g.check(state), expand: !!g.expand }));
  return { done: list.filter((x) => x.done).length, need: st.need, list };
});

export function planPoints() {
  let pts = 0;
  for (const id of Object.keys(state.plan)) {
    pts += state.plan[id] * productById(id).diff;
  }
  return pts;
}

/* ---------------- 存档 ---------------- */

function saveSnapshot() {
  recordCareer();
  const storyQueue = queue.events.map((event) =>
    STORY.events.some((storyEvent) => storyEvent.id === event.id) ? event.id : event
  );
  return { ...state, storyQueue, savedAt: Date.now() };
}

export function save() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveSnapshot()));
  } catch (e) {
    /* 隐私模式下忽略 */
  }
}

function validSaveData(data) {
  return !!data && typeof data === 'object' && [6, 7, 8, 9].includes(data.v) &&
    Number.isInteger(Number(data.month)) && Number(data.month) >= 1 && Number(data.month) <= 36 &&
    Number.isInteger(Number(data.day)) && Number(data.day) >= 1 && Number(data.day) <= DAYS_PER_MONTH &&
    Number.isFinite(Number(data.cash)) &&
    (data.unlocked === undefined || Array.isArray(data.unlocked)) &&
    (data.played === undefined || Array.isArray(data.played)) &&
    (data.storyChoices === undefined || (data.storyChoices && typeof data.storyChoices === 'object' && !Array.isArray(data.storyChoices))) &&
    (data.storyQueue === undefined || Array.isArray(data.storyQueue)) &&
    (data.career === undefined || (data.career && typeof data.career === 'object' && !Array.isArray(data.career)));
}

export function inspectSaveText(text) {
  try {
    const data = typeof text === 'string' ? JSON.parse(text) : text;
    if (!validSaveData(data)) return { ok: false, message: '存档格式无效或版本不受支持。' };
    return {
      ok: true,
      data,
      preview: {
        month: Number(data.month),
        day: Number(data.day),
        savedAt: Number(data.savedAt) || 0,
        cash: Number(data.cash) || 0,
        phase: data.phase || 'playing',
      },
    };
  } catch (e) {
    return { ok: false, message: '无法读取存档文件。' };
  }
}

function applySaveData(data) {
  if (!validSaveData(data)) return false;
  try {
    Object.assign(state, newState());
    const migrated = data.v !== 9;
    Object.keys(newState()).forEach((k) => {
      if (data[k] !== undefined && k !== 'regularCustomers' && k !== 'career') state[k] = data[k];
    });
    if (data.v === 6) {
      state.pantry = {};
      let legacy = Math.max(0, Number(data.stock || 0));
      Object.entries(data.plan || {}).forEach(([productId, quantity]) => {
        const planned = Math.min(legacy, Math.max(0, Number(quantity) || 0));
        if (planned) addLegacyRecipe(state.pantry, productId, planned);
        legacy -= planned;
      });
      const oldProducts = (data.unlocked || ['plain']).filter((id) => RECIPE_BOM[id]);
      const fallback = oldProducts.length ? oldProducts : ['plain'];
      const wholeCredits = Math.floor(legacy);
      for (let i = 0; i < wholeCredits; i++) addLegacyRecipe(state.pantry, fallback[i % fallback.length], 1);
      const fraction = legacy - wholeCredits;
      if (fraction) fallback.forEach((id) => addLegacyRecipe(state.pantry, id, fraction / fallback.length));
      state.legacyStock = 0;
      state.cash += Number(data.monthRev || 0);
      state.dayPhase = data.daySold || data.dayRev ? 'closing' : 'prep';
      state.sqchatMonth = Number(data.friendMonth || 0);
      state.batches = Object.entries(data.shelf || {}).filter(([, qty]) => qty > 0)
        .map(([product, qty], index) => ({ id: 'migrated-' + index, product, qty, quality: 'normal', decoration: null }));
      state.service = null;
      state.stock = undefined;
      delete state.friendship;
      delete state.friendMonth;
      state.ngpDiscountUsed = false;
      state.challenge = null;
      state.challengeDayIndex = 0;
    }
    state.v = 9;
    state.pantry = state.pantry || {};
    state.legacyStock = Number(state.legacyStock || 0);
    state.batches = state.batches || [];
    state.staffAssignments = { ...newState().staffAssignments, ...(state.staffAssignments || {}) };
    state.dayPhase = state.dayPhase || 'prep';
    state.regularCustomers = Object.fromEntries(
      CUSTOMERS.map((customer) => [
        customer.id,
        { ...newState().regularCustomers[customer.id], ...(data.regularCustomers || {})[customer.id] },
      ])
    );
    state.career = { ...newState().career, ...(data.career || {}) };
    state.career.labReports = { ...newState().career.labReports, ...((data.career || {}).labReports || {}) };
    state.activityRecords = { ...newState().activityRecords, ...(data.activityRecords || {}) };
    state.activityRecords.market = state.activityRecords.market || [];
    state.activityRecords.cafe = state.activityRecords.cafe || [];
    state.career.activityRecords = {
      ...newState().career.activityRecords,
      ...((data.career || {}).activityRecords || {}),
      market: [...new Set([...(data.career?.activityRecords?.market || []), ...state.activityRecords.market.map((row) => row.id)])],
      cafe: [...new Set([...(data.career?.activityRecords?.cafe || []), ...state.activityRecords.cafe.map((row) => row.id)])],
    };
    state.career.cgs = state.career.cgs || [];
    state.storyChoices = state.storyChoices || {};
    state.savedAt = Number(data.savedAt) || 0;
    const storyEvents = new Map(STORY.events.map((event) => [event.id, event]));
    const storyQueue = (data.storyQueue || []).map((event) =>
      typeof event === 'string' ? storyEvents.get(event) : event
    ).filter((event) =>
      event && typeof event === 'object' && typeof event.id === 'string' && Array.isArray(event.beats)
    );
    queue.events.splice(0, queue.events.length, ...storyQueue);
    state.challengeDayIndex = Number(state.challengeDayIndex || 0);
    const needsChallenge = state.dayPhase === 'prep' && (!state.challenge || state.challengeDayIndex !== state.dayIndex);
    if (needsChallenge) startChallengeForDay();
    recordCareer();
    if (migrated || needsChallenge) save();
    return true;
  } catch (e) {
    return false;
  }
}

function manualSlotKey(slot) {
  const index = Number(slot);
  return Number.isInteger(index) && index >= 1 && index <= MANUAL_SAVE_SLOTS
    ? MANUAL_SAVE_PREFIX + index
    : '';
}

export function hasSave(manual = false, slot = 1) {
  try {
    const raw = manual ? manualSaveText(slot) : localStorage.getItem(SAVE_KEY);
    return !!raw && inspectSaveText(raw).ok;
  } catch (e) {
    return false;
  }
}

export function saveManual(slot = 1) {
  const key = manualSlotKey(slot);
  if (!key) return false;
  try {
    localStorage.setItem(key, JSON.stringify(saveSnapshot()));
    return true;
  } catch (e) {
    return false;
  }
}

export function manualSaveText(slot = 1) {
  const key = manualSlotKey(slot);
  if (!key) return '';
  try {
    return localStorage.getItem(key) || (Number(slot) === 1 ? localStorage.getItem(MANUAL_SAVE_KEY) : '') || '';
  } catch (e) {
    return '';
  }
}

export function autoSaveText() {
  try {
    return localStorage.getItem(SAVE_KEY) || '';
  } catch (e) {
    return '';
  }
}

export function exportSaveText() {
  return JSON.stringify(saveSnapshot(), null, 2);
}

export function loadManualSave(persistToAuto = true, slot = 1) {
  try {
    const raw = manualSaveText(slot);
    if (!raw || !inspectSaveText(raw).ok) return false;
    const data = JSON.parse(raw);
    if (!applySaveData(data)) return false;
    if (persistToAuto) save();
    return true;
  } catch (e) {
    return false;
  }
}

export function importSaveText(text) {
  const inspected = inspectSaveText(text);
  if (!inspected.ok) return inspected;
  if (!applySaveData(inspected.data)) return { ok: false, message: '存档无法载入。' };
  save();
  return { ok: true, preview: inspected.preview };
}

export function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw || !inspectSaveText(raw).ok) return false;
    return applySaveData(JSON.parse(raw));
  } catch (e) {
    return false;
  }
}

export function reset() {
  const career = { ...recordCareer() };
  Object.assign(state, newState());
  state.career = career;
  queue.events.length = 0;
  // 开局的基线：现有三款蛋糕不算「本月新品」
  state.monthSnap = {
    rep: state.reputation,
    unlocked: state.unlocked.slice(),
    skill: Object.assign({}, state.partnerSkill),
  };
  startDay();
  save();
}

function recordCareer() {
  const career = state.career || newState().career;
  career.products = [...new Set([...(career.products || []), ...(state.unlocked || [])])];
  career.photos = [...new Set([...(career.photos || []), ...(state.photos || [])])];
  const collectedCgs = career.cgs || [];
  CG_COLLECTION.forEach((cg) => {
    if ((state.played || []).includes(cg.event) && !collectedCgs.includes(cg.id)) collectedCgs.push(cg.id);
  });
  career.cgs = collectedCgs;
  career.decorations = [...new Set([...(career.decorations || []), ...(state.decorations || [])])];
  if (state.phase === 'ended' && state.ending && state.ending.key) {
    state.runEndings = [...new Set([...(state.runEndings || []), state.ending.key])];
    career.endings = [...new Set([...(career.endings || []), state.ending.key])];
  }
  state.career = career;
  return career;
}

function recordLabReport(productId, kind, report) {
  const existing = state.career.labReports[productId] || {};
  state.career.labReports[productId] = {
    ...existing,
    [kind]: {
      ...report,
      run: (state.career.newGamePlusRuns || 0) + 1,
      month: state.month,
    },
  };
}

function labResult(ok, message) {
  return { ok, message };
}

export function beginResearchTrial(attempt) {
  if (state.phase !== 'playing') return labResult(false, '当前不能进行实验。');
  if (state.dayPhase !== 'prep') return labResult(false, '营业开始后不能进行研发。');
  if (state.labPending) return labResult(false, '请先处理上次试吃结果。');
  if (state.ap < 1) return labResult(false, '至少需要 1 点行动力才能开始试做。');

  const productId = attempt && attempt.productId;
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product || state.unlocked.includes(productId) || product.month <= 0 || product.month > state.month) {
    return labResult(false, '这款产品还未开放研发，或已经上架。');
  }
  if (productId === 'signature' && (!attempt || attempt.type !== 'signature')) {
    return labResult(false, '桂花栗子蛋糕需要进入 M26 专属复原。');
  }
  const trial = productId === 'signature'
    ? evaluateSignatureTrial(attempt)
    : evaluateResearchTrial(productId, attempt || {});
  if (!trial) return labResult(false, '实验参数不完整，请检查每一项选择。');
  if (!consumeRecipe(productId, 0.25)) return labResult(false, '这款蛋糕的试做原料不足，请先到食材铺采购。');

  state.ap -= 1;
  state.labPending = trial;
  log('试做「' + product.name + '」消耗 1 点行动力和四分之一配方材料', 'story');
  save();
  return labResult(true, '试吃完成。');
}

/** 把工作台的蛋糕胚/夹心选择也纳入真实试吃分数。 */
export function beginRecipeWorkshopTrial(attempt) {
  const result = beginResearchTrial(attempt);
  if (!result.ok || !state.labPending) return result;
  const bases = { taro: '戚风', matcha: '抹茶', mango: '原味', tiramisu: '原味', fig: '戚风', seasonal: '戚风', custom: '戚风', festival: '原味', signature: '戚风' };
  const creams = { taro: '栗子泥', matcha: '鲜奶油', mango: '鲜奶油', tiramisu: '芝士', fig: '鲜奶油', seasonal: '鲜奶油', custom: '鲜奶油', festival: '巧克力奶油', signature: '栗子泥' };
  const okBase = attempt.base === (bases[attempt.productId] || '戚风');
  const okCream = attempt.cream === (creams[attempt.productId] || '鲜奶油');
  const penalty = (okBase ? 0 : 15) + (okCream ? 0 : 15);
  const trial = state.labPending;
  trial.score = Math.max(0, trial.score - penalty);
  trial.passed = trial.passed && trial.score >= 75;
  trial.refined = trial.refined && trial.score >= 90;
  trial.base = attempt.base;
  trial.cream = attempt.cream;
  if (!okBase) trial.feedback.push('蛋糕胚与目标风味不够契合，试着换一种胚体。');
  if (!okCream) trial.feedback.push('夹心与主题不够协调，试着调整奶油或夹层。');
  save();
  return result;
}

export function publishResearch() {
  const trial = state.labPending;
  if (state.dayPhase !== 'prep') return labResult(false, '请在营业开始前完成上架。');
  if (state.phase !== 'playing' || !trial || !trial.passed) return labResult(false, '这份试吃结果还未达到上架要求。');
  if (state.ap < 1) return labResult(false, '行动力不足；试吃结果已保存，明天可以继续。');
  const product = PRODUCTS.find((item) => item.id === trial.productId);
  if (!product || product.month > state.month || state.unlocked.includes(trial.productId)) {
    return labResult(false, '产品状态已变化，请返回实验室确认。');
  }

  state.ap -= 1;
  state.unlocked.push(product.id);
  state.levels[product.id] = trial.refined ? 1.5 : 1;
  recordLabReport(product.id, 'development', {
    ...trial,
    type: trial.type === 'signature' ? 'signature' : 'development',
    feedback: trial.type === 'signature' ? ['外婆配方复原成功，桂香与秋栗的层次都找回来了。'] : trial.feedback,
  });
  state.labPending = null;
  log('「' + product.name + '」研发完成并正式上架，' + (trial.refined ? '精制品质，熟练度 Lv1.5' : '熟练度 Lv1'), 'good');
  save();
  return labResult(true, product.name + (trial.type === 'signature' ? '复原成功，已加入菜单。' : '已正式上架。'));
}

export function discardResearchTrial() {
  if (!state.labPending) return false;
  state.labPending = null;
  save();
  return true;
}

export function improveProduct(productId, answer) {
  if (state.phase !== 'playing') return labResult(false, '当前不能进行改良。');
  if (state.dayPhase !== 'prep') return labResult(false, '营业开始后不能进行改良。');
  const product = PRODUCTS.find((item) => item.id === productId);
  const diagnostic = improvementFor(productId);
  if (!product || !diagnostic || !state.unlocked.includes(productId)) return labResult(false, '这款产品目前不能改良。');
  const level = state.levels[productId] || 1;
  if (level >= 5) return labResult(false, '这款产品已达到熟练度上限。');
  if (!Number.isInteger(answer) || answer < 0 || answer >= diagnostic.options.length) return labResult(false, '请选择一个改良方案。');
  const correct = answer === diagnostic.correct;
  if (state.ap < (correct ? 2 : 1)) return labResult(false, correct ? '改良成功需要 2 点行动力。' : '改良试吃需要 1 点行动力。');
  if (!consumeRecipe(productId, 0.25)) return labResult(false, '这款蛋糕的试做原料不足，请先到食材铺采购。');

  state.ap -= 1;
  if (!correct) {
    const feedback = '这次试吃没有解决问题。' + diagnostic.feedback;
    log('改良「' + product.name + '」未通过试吃，消耗了四分之一配方材料', 'story');
    save();
    return { ...labResult(false, feedback), retry: true, feedback };
  }

  state.ap -= 1;
  state.levels[productId] = Math.min(5, level + 1);
  state.style.innovation += 3;
  const report = {
    type: 'improvement', score: 100,
    levelBefore: level, levelAfter: state.levels[productId],
    feedback: [diagnostic.feedback],
  };
  recordLabReport(productId, 'improvement', report);
  log('改良「' + product.name + '」成功，熟练度提升至 Lv' + state.levels[productId], 'good');
  save();
  return { ...labResult(true, diagnostic.feedback), feedback: diagnostic.feedback, level: state.levels[productId] };
}

export function startNewGamePlus() {
  if (state.phase !== 'ended' || !state.ending) return false;
  reset();
  state.newGamePlus = true;
  state.ngpDiscountUsed = false;
  state.career.newGamePlusRuns = (state.career.newGamePlusRuns || 0) + 1;
  save();
  return true;
}

export function skipToNextMonth() {
  if (state.phase !== 'playing') return false;
  const startingMonth = state.month;
  while (state.month === startingMonth && state.phase === 'playing') {
    state.dayPhase = 'closing';
    state.service = { tickets: [], current: 0 };
    closeDay('waste');
  }
  return state.month !== startingMonth;
}

export function continueAfterShortEnding() {
  const shortEnding = STAGES.find((stage) => !stage.final && stage.short.key === (state.ending && state.ending.key));
  if (state.phase !== 'ended' || !shortEnding) return false;
  state.phase = 'playing';
  state.ending = null;
  state.stamina = state.maxStamina;
  startDay();
  queueStory();
  save();
  return true;
}

export function buyDecoration(id) {
  const decoration = DECORATIONS.find((item) => item.id === id);
  if (!decoration || state.phase !== 'playing' || state.dayPhase !== 'prep' || state.decorations.includes(id)) return false;
  if (state.shopLevel < decoration.shopLevel || state.cash < decoration.cost) return false;
  state.cash -= decoration.cost;
  state.monthCost += decoration.cost;
  state.daySpend += decoration.cost;
  state.decorations.push(id);
  log('添置了' + decoration.name + '，店铺舒适度 +1', 'good');
  save();
  return true;
}

/* ---------------- 日志 ---------------- */

function log(text, tone) {
  state.log.unshift({ month: state.month, day: state.day, text, tone: tone || 'normal' });
  if (state.log.length > 60) state.log.pop();
}

function clamp(v) {
  return Math.max(0, Math.min(100, v));
}

/* ---------------- 剧情奖励兼容层 ----------------
 * 剧情 md 里的奖励名沿用旧写法，在这里映射到 V5 的字段。
 */

export function applyRewards(items) {
  const got = [];
  for (const it of items) {
    if (it.kind === 'num') {
      const v = it.value;
      switch (it.key) {
        case '资金': state.cash = Math.max(0, state.cash + v); break;
        case '口碑': state.reputation = clamp(state.reputation + v); break;
        case '知名度': state.popularity = clamp(state.popularity + v); break;
        case '友情值': break;
        case '门店': state.storeCount = Math.max(1, state.storeCount + v); break;
        case '员工': if (v > 0) joinNextPartner(); break;
        case '烘焙': levelUpLowest(v * 0.2); break;
        case '品质': levelUpAll(v * 0.05); break;
        default: break;
      }
      got.push(it.key + (v >= 0 ? '+' : '') + v);
    } else if (it.key === '配方') {
      if (!state.unlocked.includes(it.value)) {
        state.unlocked.push(it.value);
        got.push('解锁「' + productById(it.value).name + '」');
      }
    } else if (it.key === '照片') {
      if (!state.photos.includes(it.value)) {
        state.photos.push(it.value);
        got.push('获得纪念照片');
      }
    }
  }
  return got;
}

function levelUpLowest(amount) {
  const list = state.unlocked.slice().sort((a, b) => (state.levels[a] || 1) - (state.levels[b] || 1));
  const id = list[0];
  if (id) state.levels[id] = Math.min(5, (state.levels[id] || 1) + amount);
}

function levelUpAll(amount) {
  state.unlocked.forEach((id) => {
    state.levels[id] = Math.min(5, (state.levels[id] || 1) + amount);
  });
}

/* ---------------- 选项效果 ----------------
 * story.js 已经把「（`traditionScore + 5`，小雨信赖度 +10）」解析成结构化数组，
 * 这里只负责落到状态上。
 */

export function applyGains(gains) {
  const got = [];
  for (const g of gains || []) {
    switch (g.k) {
      case 'style':
        state.style[g.id] = (state.style[g.id] || 0) + g.v;
        break;
      case 'trust':
        if (!g.id) break;
        state.partnerTrust[g.id] = clamp((state.partnerTrust[g.id] || 0) + g.v);
        break;
      case 'skill':
        if (!g.id) break;
        state.partnerSkill[g.id] = Math.min(5, Math.round(((state.partnerSkill[g.id] || 1) + g.v) * 10) / 10);
        break;
      case 'loyalty':
        state.loyalty = clamp(state.loyalty + g.v);
        break;
      default:
        break;
    }
    if (g.k !== 'friend' && g.label) got.push(g.label);
  }
  return got;
}

/** 玩家在剧情里选了某个选项 */
export function applyChoice(choice, opt, index, eventId = '') {
  const node = choice.node || 'choice-' + index;
  const selected = state.storyChoices[eventId] || {};
  if (Object.prototype.hasOwnProperty.call(selected, node)) return [];
  const got = applyGains(opt.gains);
  state.storyChoices[eventId] = { ...selected, [node]: index };
  // M32 的收购邀约：选第二项就是接受转让
  if (choice && choice.node === '13.6' && index === 1) state.acquired = true;
  if (got.length) log('选择：' + opt.label + '（' + got.join('，') + '）', 'story');
  save();
  return got;
}

/* ---------------- 伙伴 ---------------- */

function joinPartner(id) {
  if (!id || state.staff.includes(id)) return;
  state.staff.push(id);
  if (state.partnerTrust[id] === undefined) state.partnerTrust[id] = 10;
  if (state.partnerSkill[id] === undefined) state.partnerSkill[id] = 1;
  const p = partnerById(id);
  if (p) log(p.name + ' 加入了林记', 'story');
}

function joinNextPartner() {
  const next = PARTNERS.find((p) => !state.staff.includes(p.id) && p.joinMonth <= state.month);
  if (next) joinPartner(next.id);
}

export function staffList() {
  return state.staff.map((id) => partnerById(id)).filter(Boolean);
}

/* ---------------- 行动 ---------------- */

const COOLDOWN = { feedback: 5, market: 3, talk: 2, train: 5 };

function cdLeft(id) {
  const until = state.cd[id] || 0;
  return Math.max(0, until - state.dayIndex);
}

export function actionInfo(id) {
  switch (id) {
    case 'restock': {
      return {
        name: '原料采购', ap: 1, cost: 0,
        note: '请前往老街食材铺选择原料', disabled: true,
      };
    }
    case 'feedback': {
      const left = cdLeft('feedback');
      return {
        name: '顾客反馈', ap: 1, cost: 0,
        note: left > 0 ? '还要等 ' + left + ' 天' : '听听顾客对店里的建议',
        disabled: left > 0,
      };
    }
    case 'talk': {
      const t = state.staff.length ? staffList()[0].nick : null;
      return {
        name: '伙伴交流', ap: 1, cost: 0,
        note: t ? '和 ' + t + ' 聊聊近况' : '和妈妈聊聊经营经验',
      };
    }
    case 'sqchat': {
      const used = state.sqchatMonth === state.month;
      const available = !!STORY.friend[state.month];
      return {
        name: '与苏晴互动', ap: 1, cost: 0,
        note: used ? '这个月已经聊过了' : available ? '本月专属相处剧情' : '本月没有新的互动剧情',
        disabled: used || !available,
      };
    }
    case 'market':
      return { name: '市场宣传', ap: 2, cost: 800, note: '发布新品内容，让更多人认识林记', disabled: state.cash < 800 };
    case 'train':
      return state.staff.length
        ? { name: '员工培训', ap: 2, cost: 400, note: '为一位伙伴安排专业训练', disabled: state.cash < 400 }
        : { name: '员工培训', ap: 2, cost: 0, note: '还没有伙伴可以培训', disabled: true };
    case 'decorate': {
      const next = SHOP_LEVELS.find((s) => s.lv === state.shopLevel + 1);
      if (!next) return { name: '店铺装修', ap: 2, cost: 0, note: '已经是最高等级', disabled: true };
      return {
        name: '装修到「' + next.name + '」', ap: 2, cost: next.cost,
        note: '展示位与产能提升', disabled: state.cash < next.cost,
      };
    }
    case 'survey': {
      const next = CITIES.find((c) => !state.cities.includes(c.id) && !state.surveyed.includes(c.id));
      if (!next) return { name: '外出考察', ap: 2, cost: 0, note: '没有新的城市可去', disabled: true };
      const ok = state.month >= next.month && state.reputation >= next.rep;
      return {
        name: '考察' + next.name, ap: 2, cost: 2000,
        note: ok ? '考察之后可以筹备开店' : '需要第 ' + next.month + ' 个月、口碑 ' + next.rep,
        disabled: !ok || state.cash < 2000,
      };
    }
    case 'branch': {
      if (!state.surveyed.length) {
        return { name: '分店筹备', ap: 3, cost: 0, note: '先外出考察一座城市', disabled: true };
      }
      const city = CITIES.find((c) => c.id === state.surveyed[0]);
      return {
        name: '在' + city.name + '开店', ap: 3, cost: city.cost,
        note: '在当地开设一间新店', disabled: state.cash < city.cost,
      };
    }
    case 'coffee':
      return {
        name: '喝一杯手冲', ap: 0, cost: 18,
        note: '喝杯热饮，歇一会儿', disabled: state.cash < 18,
      };
    case 'walk':
      return { name: '沿河散步', ap: 0, cost: 0, note: '吹吹河风，调整状态' };
    default:
      return { name: id, ap: 1, cost: 0, note: '' };
  }
}

export function doAction(id, opt) {
  if (state.phase !== 'playing' || state.dayPhase !== 'prep') return false;
  const info = actionInfo(id);
  if (info.disabled) return false;
  if (state.ap < info.ap) return false;
  if (info.cost && state.cash < info.cost) return false;

  const cashBefore = state.cash;

  switch (id) {
    case 'restock': {
      return false;
    }
      break;
    case 'feedback':
      state.reputation = clamp(state.reputation + 1.0);
      state.loyalty = clamp(state.loyalty + 2);
      log('认真听了顾客的意见，口碑上升');
      break;
    case 'coffee':
      state.cash -= 18;
      state.stamina = Math.min(state.maxStamina, state.stamina + 12);
      log('在栖木咖啡喝了杯手冲，体力回来了些');
      break;
    case 'walk':
      state.reputation = clamp(state.reputation + 0.5);
      state.loyalty = clamp(state.loyalty + 2);
      log('沿河走了一圈，脑子清醒多了');
      break;
    case 'talk':
      if (opt && opt.partner === 'mom') {
        state.momBond = clamp(state.momBond + 4);
        log('和妈妈聊了一会儿，家庭默契 +4');
      } else if (state.staff.length) {
        const pid = opt && opt.partner ? opt.partner : state.staff[0];
        if (!state.staff.includes(pid)) return false;
        state.partnerTrust[pid] = clamp((state.partnerTrust[pid] || 0) + 6);
        const p = partnerById(pid);
        log('和 ' + (p ? p.nick : '伙伴') + ' 聊了很久，信赖 +6');
      } else {
        state.momBond = clamp(state.momBond + 4);
        log('和妈妈聊了一会儿，家庭默契 +4');
      }
      break;
    case 'sqchat': {
      const ev = STORY.friend[state.month];
      if (!ev) return false;
      state.sqchatMonth = state.month;
      state.autoStory = true;
      const queued = queue.events.findIndex((event) => event.id === ev.id);
      if (queued >= 0) queue.events.splice(queued, 1);
      queue.events.unshift(ev);
      log('和苏晴度过了一段只属于两人的时间');
      break;
    }
    case 'market':
      state.cash -= 800;
      state.popularity = clamp(state.popularity + 2);
      state.brand = clamp(state.brand + 1.5);
      log('发了新品帖子，知名度上升');
      break;
    case 'train': {
      if (!state.staff.length) return false;
      const pid = opt && opt.partner ? opt.partner : state.staff[0];
      state.cash -= 400;
      state.partnerSkill[pid] = Math.min(5, (state.partnerSkill[pid] || 1) + 1);
      const p = partnerById(pid);
      log('培训了 ' + (p ? p.nick : '伙伴') + '，专业能力提升');
      break;
    }
    case 'decorate': {
      const next = SHOP_LEVELS.find((s) => s.lv === state.shopLevel + 1);
      if (!next) return false;
      state.cash -= next.cost;
      state.shopLevel = next.lv;
      state.maxAp = 8 + (next.ap || 0);
      state.reputation = clamp(state.reputation + 3);
      state.style.community += 2;
      log('店铺升级为「' + next.name + '」', 'good');
      break;
    }
    case 'survey': {
      const next = CITIES.find((c) => !state.cities.includes(c.id) && !state.surveyed.includes(c.id));
      if (!next) return false;
      state.cash -= 2000;
      state.surveyed.push(next.id);
      log('去' + next.name + '看了一圈，可以筹备开店了');
      break;
    }
    case 'branch': {
      const city = CITIES.find((c) => c.id === state.surveyed[0]);
      if (!city) return false;
      state.cash -= city.cost;
      state.storeCount += 1;
      state.cities.push(city.id);
      state.surveyed = state.surveyed.filter((x) => x !== city.id);
      state.brand = clamp(state.brand + 6);
      state.style.efficiency += 3;
      log('在' + city.name + '开了新店', 'good');
      break;
    }
    default:
      return false;
  }

  state.ap -= info.ap;
  if (COOLDOWN[id]) state.cd[id] = state.dayIndex + COOLDOWN[id];
  if (cashBefore > state.cash) state.monthCost += cashBefore - state.cash;
  if (cashBefore > state.cash) state.daySpend += cashBefore - state.cash;
  save();
  return true;
}

/* ---------------- 生产 ---------------- */

export function setPlan(productId, qty) {
  if (state.dayPhase !== 'prep' || !state.unlocked.includes(productId)) return;
  const n = Math.max(0, Math.min(12, Math.floor(qty || 0)));
  if (n === 0) delete state.plan[productId];
  else state.plan[productId] = n;
  save();
}

export function makeCakes() {
  if (state.phase !== 'playing' || state.dayPhase !== 'prep') return { ok: false, msg: '当前不是制作阶段。' };
  if (!state.productionResult) return { ok: false, msg: '先完成或跳过主打蛋糕小游戏。' };
  const ids = Object.keys(state.plan);
  if (!ids.length) return { ok: false, msg: '先去厨房排一下今天的产量' };

  const needStock = ids.reduce((a, id) => a + state.plan[id], 0);
  const missing = missingIngredients();
  if (Object.keys(missing).length) return { ok: false, msg: '原料不足：' + Object.entries(missing).map(([id, qty]) => INGREDIENTS.find((item) => item.id === id).name + ' ×' + Math.ceil(qty)).join('、') };

  const pts = planPoints();
  if (pts > capacity.value) {
    return { ok: false, msg: '产能不够。今天的产能是 ' + capacity.value + ' 点，还差 ' + (pts - capacity.value) };
  }

  const free = MOM_CAPACITY + state.staff.length * STAFF_CAPACITY + deviceValue('oven');
  const selfCost = Math.round(Math.max(0, pts - free) * (1 - deviceValue('mixer')));

  for (const id of ids) {
    for (let n = 0; n < state.plan[id]; n++) consumeRecipe(id, 1);
  }
  state.stamina = Math.max(0, state.stamina - selfCost);
  for (const id of ids) {
    state.shelf[id] = (state.shelf[id] || 0) + state.plan[id];
    state.dayMade += state.plan[id];
    state.levels[id] = Math.min(5, (state.levels[id] || 1) + state.plan[id] * 0.02);
    state.batches.push({
      id: 'b' + state.dayIndex + '-' + id + '-' + state.batches.length,
      product: id,
      qty: state.plan[id],
      quality: id === state.productionResult.product ? state.productionResult.quality : 'normal',
      decoration: id === state.productionResult.product ? state.productionResult.decoration : null,
    });
  }
  log('做了 ' + needStock + ' 个蛋糕，自己出了 ' + selfCost + ' 点体力');
  state.plan = {};
  state.productionMini = null;
  state.productionResult = null;
  state.dayPhase = 'service-ready';
  save();
  return { ok: true, msg: '做好了 ' + needStock + ' 个' };
}

const PRODUCTION_GAMES = ['mix', 'oven', 'piping', 'fruit'];

export function beginProductionTest() {
  if (state.dayPhase !== 'prep' || state.productionMini || !Object.keys(state.plan).length) return false;
  const product = Object.keys(state.plan).sort((a, b) => state.plan[b] - state.plan[a])[0];
  state.productionMini = {
    type: PRODUCTION_GAMES[Math.floor(Math.random() * PRODUCTION_GAMES.length)],
    product,
    window: 58 + Math.floor(Math.random() * 20),
    pattern: Math.floor(Math.random() * 3),
  };
  save();
  return true;
}

export function finishProductionTest(score = 0, skipped = false, decoration = null) {
  const mini = state.productionMini;
  if (!mini || state.productionResult) return { ok: false, message: '制作小游戏已结算。' };
  const points = skipped ? 0 : Math.max(0, Math.min(100, Math.round(score)));
  state.productionResult = {
    product: mini.product,
    quality: points >= 90 ? 'perfect' : points >= 70 ? 'fine' : 'normal',
    score: points,
    priceBonus: points >= 90 ? 0.1 : points >= 70 ? 0.05 : 0,
    decoration,
  };
  state.productionMini = null;
  const result = makeCakes();
  if (result.ok && !skipped) {
    const bonus = points >= 90 ? 30 : points >= 70 ? 12 : 0;
    state.cash += bonus;
    state.dayRev += bonus;
    state.monthRev += bonus;
    state.bakingRecords = [...(state.bakingRecords || []), { day: state.dayIndex, product: mini.product, score: points, bonus }].slice(-50);
    state.levels[mini.product] = Math.min(5, (state.levels[mini.product] || 1) + points / 1000);
    save();
    return { ...result, bonus, score: points };
  }
  return result;
}

function stockedProductIds() {
  return availableProducts.value
    .filter((product) => (state.shelf[product.id] || 0) > 0)
    .map((product) => product.id);
}

function makeActivityDemands(count, inventory) {
  const remaining = { ...inventory };
  const demands = [];
  for (let i = 0; i < count; i++) {
    const ids = Object.keys(remaining).filter((id) => remaining[id] > 0);
    if (!ids.length) break;
    const product = ids[Math.floor(Math.random() * ids.length)];
    const qty = 1 + Math.floor(Math.random() * Math.min(2, remaining[product]));
    remaining[product] -= qty;
    demands.push({ product, qty, customer: ['帶孩子的家長', '放學的學生', '散步的街坊', '外地遊客'][Math.floor(Math.random() * 4)] });
  }
  return demands;
}

function addGameRevenue(productId, quantity, unitPrice) {
  const batches = consumeBatchProduct(productId, quantity);
  const revenue = Math.round(batches.reduce((sum, batch) =>
    sum + unitPrice * batch.qty * (batch.quality === 'perfect' ? 1.1 : batch.quality === 'fine' ? 1.05 : 1), 0));
  state.shelf[productId] = Math.max(0, (state.shelf[productId] || 0) - quantity);
  state.cash += revenue;
  state.dayRev += revenue;
  state.monthRev += revenue;
  state.daySold += quantity;
  state.monthSold[productId] = (state.monthSold[productId] || 0) + quantity;
  if (state.challenge?.type === 'new' && state.challenge.target === productId) {
    state.marketRun && (state.marketRun.challengeNewSold = (state.marketRun.challengeNewSold || 0) + quantity);
    state.cafeRun && (state.cafeRun.challengeNewSold = (state.cafeRun.challengeNewSold || 0) + quantity);
  }
  return revenue;
}

function recordActivity(kind, run, success) {
  if (run.recorded) return;
  const id = kind + '-m' + run.month;
  const record = {
    id, month: run.month, day: run.day, sold: run.sold || 0,
    revenue: run.revenue || 0, success, score: run.score || 0,
    menu: run.menu || null,
  };
  state.activityRecords[kind] = [...(state.activityRecords[kind] || []).filter((row) => row.id !== id), record];
  state.career.activityRecords[kind] = [...new Set([...(state.career.activityRecords[kind] || []), id])];
  run.recorded = true;
  run.completed = true;
  if (kind === 'cafe') state.cafeCollab += record.sold;
  save();
}

export function startMarketGame(config = {}) {
  if (state.marketRun && !state.marketRun.completed) return { ok: true, resumed: true };
  if (state.dayPhase !== 'service-ready') return { ok: false, message: '先完成今天的制作，再带蛋糕去市集。' };
  if ((state.activityRecords.market || []).some((row) => row.month === state.month)) return { ok: false, message: '本月的市集活动已经结算。' };
  const inventory = Object.fromEntries(stockedProductIds().map((id) => [id, Math.min(state.shelf[id], Math.max(0, Math.floor(config.inventory?.[id] ?? state.shelf[id])))]).filter(([, qty]) => qty > 0));
  if (!Object.keys(inventory).length) return { ok: false, message: '展示柜里还没有可以带去市集的蛋糕。' };
  const demands = makeActivityDemands(5, inventory);
  state.marketRun = {
    month: state.month, day: state.day, inventory, theme: String(config.theme || '小镇甜品市集'), target: Math.ceil(demands.length * 0.6), demands, customerIndex: 0,
    sold: 0, revenue: 0, score: 0, misses: 0, completed: false, recorded: false,
  };
  save();
  return { ok: true, resumed: false };
}

export function marketDemand() {
  const run = state.marketRun;
  return run && !run.completed ? run.demands[run.customerIndex] || null : null;
}

export function serveMarketCustomer(productId) {
  const run = state.marketRun;
  const demand = marketDemand();
  if (!run || !demand || run.completed) return { ok: false, message: '今天的市集已经结束。' };
  if (productId !== demand.product) {
    run.misses += 1;
    run.customerIndex += 1;
    const finished = run.customerIndex >= run.demands.length;
    if (finished) finishMarketGame();
    else save();
    return { ok: false, message: '这位顾客想要' + productById(demand.product).name + '，只好先去别的摊位看看。' };
  }
  if ((state.shelf[productId] || 0) < demand.qty || (run.inventory[productId] || 0) < demand.qty) return { ok: false, message: '摊位配货不足，无法交付这么多份。' };
  const revenue = addGameRevenue(productId, demand.qty, priceOf(productId));
  run.inventory[productId] -= demand.qty;
  run.sold += demand.qty;
  run.revenue += revenue;
  run.score += 1;
  run.customerIndex += 1;
  const finished = run.customerIndex >= run.demands.length;
  if (finished) finishMarketGame();
  else save();
  return { ok: true, message: '市集成交：' + productById(productId).name + ' ×' + demand.qty + '，收入 ¥' + revenue + '。' };
}

export function leaveMarketCustomer() {
  const run = state.marketRun;
  if (!run || run.completed) return false;
  run.misses += 1;
  run.customerIndex += 1;
  if (run.customerIndex >= run.demands.length) finishMarketGame();
  else save();
  return true;
}

function finishMarketGame() {
  const run = state.marketRun;
  if (!run || run.recorded) return;
  const success = run.score >= Math.ceil(run.demands.length * 0.6);
  const bonus = success ? Math.round(run.revenue * 0.05) : 0;
  if (bonus) {
    state.cash += bonus;
    state.dayRev += bonus;
    state.monthRev += bonus;
    run.revenue += bonus;
  }
  if (success) state.marketPoints = (state.marketPoints || 0) + run.score * 10;
  recordActivity('market', run, success);
}

export function restockMarket(productId, qty = 1) {
  const run = state.marketRun;
  if (!run || run.completed || !state.unlocked.includes(productId)) return { ok: false, message: '当前无法补货。' };
  const available = (state.shelf[productId] || 0) - (run.inventory[productId] || 0);
  const amount = Math.max(1, Math.floor(qty));
  if (available < amount) return { ok: false, message: '店铺没有多余的现货可调拨。' };
  const fee = amount * 5;
  if (state.cash < fee) return { ok: false, message: '运货费用不足。' };
  state.cash -= fee;
  state.monthCost += fee;
  state.daySpend += fee;
  run.inventory[productId] = (run.inventory[productId] || 0) + amount;
  run.misses += 0.2;
  save();
  return { ok: true, message: `调拨了 ${amount} 份，运费 ¥${fee}。` };
}

const COFFEE_PROFILES = { americano: 'bold', latte: 'mellow', cappuccino: 'mellow', mocha: 'bold', iced: 'fresh' };
const CAKE_PROFILES = {
  plain: 'mellow', strawberry: 'mellow', chocolate: 'bold', taro: 'bold', matcha: 'fresh',
  mango: 'fresh', tiramisu: 'bold', fig: 'fresh', seasonal: 'fresh', custom: 'mellow', festival: 'bold', signature: 'bold',
};
const COFFEE_NAMES = { americano: '美式', latte: '拿铁', cappuccino: '卡布奇诺', mocha: '摩卡', iced: '冰咖啡' };
const SPECIAL_COFFEE_PAIRINGS = {
  matcha: ['latte', 'cappuccino', 'iced'],
  strawberry: ['latte', 'cappuccino', 'iced'],
  tiramisu: ['americano', 'mocha', 'cappuccino'],
};

export function coffeePairingFits(product, coffee) {
  if (!CAKE_PROFILES[product] || !COFFEE_PROFILES[coffee]) return false;
  const exception = SPECIAL_COFFEE_PAIRINGS[product];
  return exception ? exception.includes(coffee) : CAKE_PROFILES[product] === COFFEE_PROFILES[coffee];
}

export function startCafeGame({ product, coffee, price, theme } = {}) {
  if (state.cafeRun && !state.cafeRun.completed) return { ok: true, resumed: true };
  if (state.dayPhase !== 'service-ready') return { ok: false, message: '先完成今天的制作，再开始咖啡联名。' };
  if ((state.activityRecords.cafe || []).some((row) => row.month === state.month)) return { ok: false, message: '本月的咖啡联名已经结算。' };
  if (!state.unlocked.includes(product) || !COFFEE_PROFILES[coffee]) return { ok: false, message: '请选择已上架的蛋糕和咖啡。' };
  if ((state.shelf[product] || 0) < 1) return { ok: false, message: '展示柜里没有这款蛋糕。' };
  const menuPrice = Math.max(1, Math.round(Number(price) || 0));
  const coffeeProfile = COFFEE_PROFILES[coffee];
  const alternateProfile = { mellow: 'fresh', fresh: 'bold', bold: 'mellow' }[coffeeProfile];
  const customers = [coffeeProfile, coffeeProfile, alternateProfile].map((profile, index) => ({
    customer: ['附近居民', '年轻客人', '咖啡爱好者'][index], profile,
  }));
  state.cafeRun = {
    month: state.month, day: state.day, menu: { product, coffee, price: menuPrice, theme: String(theme || '栖云午后') },
    customers, customerIndex: 0, sold: 0, revenue: 0, score: 0, misses: 0, completed: false, recorded: false,
  };
  save();
  return { ok: true, resumed: false };
}

export function cafeDemand() {
  const run = state.cafeRun;
  return run && !run.completed ? run.customers[run.customerIndex] || null : null;
}

export function serveCafeCustomer(selection = null) {
  const run = state.cafeRun;
  const demand = cafeDemand();
  if (!run || !demand || run.completed) return { ok: false, message: '本次联名已经结束。' };
  const { price } = run.menu;
  const product = selection?.product || run.menu.product;
  const coffee = selection?.coffee || run.menu.coffee;
  if (!state.unlocked.includes(product) || !COFFEE_PROFILES[coffee]) return { ok: false, message: '请选择已解锁的蛋糕和咖啡。' };
  const pairing = coffeePairingFits(product, coffee);
  const fairPrice = price <= Math.round(priceOf(product) * 1.25 + 65);
  const fits = pairing && fairPrice && (demand.profile === COFFEE_PROFILES[coffee] || run.menu.theme === '四季果香');
  if (!fits) {
    run.misses += 1;
    save();
    return { ok: false, message: !pairing ? '蛋糕与咖啡的风味没有搭好，再试一份。' : !fairPrice ? '套餐价格超过了顾客预算，请在下一轮调整。' : '这位顾客想要另一种风味，请换搭配。' };
  }
  if ((state.shelf[product] || 0) < 1) return { ok: false, message: '这款蛋糕售罄，无法完成联名订单。' };
  const revenue = addGameRevenue(product, 1, price);
  state.cash -= 8;
  state.monthCost += 8;
  state.daySpend += 8;
  run.sold += 1;
  run.revenue += revenue;
  run.menu.lastServed = { product, coffee };
  run.score += 1;
  run.customerIndex += 1;
  if (run.customerIndex >= run.customers.length) finishCafeGame();
  else save();
  return { ok: true, message: '联名套餐交付：' + productById(product).name + ' + ' + COFFEE_NAMES[coffee] + '，收入 ¥' + revenue + '。' };
}

export function leaveCafeCustomer() {
  const run = state.cafeRun;
  if (!run || run.completed) return false;
  run.misses += 1;
  run.customerIndex += 1;
  if (run.customerIndex >= run.customers.length) finishCafeGame();
  else save();
  return true;
}

function finishCafeGame() {
  const run = state.cafeRun;
  if (!run || run.recorded) return;
  const success = run.score >= 2;
  const bonus = success ? Math.round(run.revenue * 0.05) : 0;
  if (bonus) {
    state.cash += bonus;
    state.dayRev += bonus;
    state.monthRev += bonus;
    run.revenue += bonus;
  }
  recordActivity('cafe', run, success);
}

/* ---------------- 订单 ---------------- */

export function rollOrders() {
  state.orders = [];
  const chance = Math.min(0.9, 0.55 + state.popularity / 350);
  const count = 1 + (Math.random() < chance ? 1 : 0);
  for (let i = 0; i < count; i++) {
    const pool = availableProducts.value;
    if (!pool.length) break;
    const p = pool[Math.floor(Math.random() * pool.length)];
    const roll = Math.random();
    const isCustom = roll < 0.35;
    const isOnline = !isCustom && roll < 0.68;
    const isFestival = !isCustom && !isOnline && roll < 0.8;
    const type = isCustom ? '定制' : isOnline ? '线上' : isFestival ? '节日' : '普通';
    const qty = isCustom ? 1 : 1 + Math.floor(Math.random() * 3);
    state.orders.push({
      id: 'o' + state.month + '-' + state.day + '-' + i,
      orderNo: 'LJ-' + String(state.month).padStart(2, '0') + String(state.day).padStart(2, '0') + '-' + String(i + 1).padStart(2, '0'),
      type,
      customer: isCustom ? '预约顾客' : isOnline ? '线上顾客' : isFestival ? '节日顾客' : '附近顾客',
      product: p.id,
      qty,
      pay: Math.round(priceOf(p.id) * qty * (isCustom ? 1.6 * (1 + deviceValue('packing')) : isOnline ? 1.25 : 1)),
      due: isCustom ? ['粉色小花', '清爽配色', '简洁裱花'][Math.floor(Math.random() * 3)] : '',
      blessing: isCustom ? ['生日快乐', '愿你每天都有好心情', '把今天的甜分享给你'][Math.floor(Math.random() * 3)] : '',
      taken: false,
    });
  }
}

export function takeOrder(orderId) {
  if (state.dayPhase !== 'prep') return false;
  const o = state.orders.find((x) => x.id === orderId);
  if (!o) return false;
  o.taken = !o.taken;
  save();
  return true;
}

/* ---------------- 营业 ---------------- */

function batchForProduct(productId, quantity = 1) {
  const batches = state.batches.filter((batch) => batch.product === productId && batch.qty > 0);
  return batches.reduce((sum, batch) => sum + batch.qty, 0) >= quantity ? batches[0] : null;
}

function consumeBatchProduct(productId, quantity) {
  const batches = state.batches.filter((item) => item.product === productId && item.qty > 0);
  if (batches.reduce((sum, batch) => sum + batch.qty, 0) < quantity) return [{ qty: quantity, quality: 'normal' }];
  let remaining = quantity;
  const used = [];
  for (const batch of batches) {
    const amount = Math.min(remaining, batch.qty);
    if (!amount) continue;
    batch.qty -= amount;
    used.push({ qty: amount, quality: batch.quality || 'normal' });
    remaining -= amount;
    if (!remaining) break;
  }
  return remaining ? [{ qty: quantity, quality: 'normal' }] : used;
}

export function openShop() {
  if (state.phase !== 'playing' || state.dayPhase !== 'service-ready' || state.service) return null;
  const service = { tickets: [], current: 0, unhappy: 0, startedAt: Date.now(), automationUnlocked: canAutomateService() };
  const reservations = state.orders.filter((order) => order.taken);
  reservations.forEach((order) => {
    const patience = 30 + 5 * (order.qty - 1);
    service.tickets.push({ ...order, kind: 'appointment', status: 'waiting', patience, remaining: patience, customSatisfied: true });
  });

  const lv = Math.max(1, Math.min(4, state.shopLevel));
  const ranges = [[3, 5], [5, 7], [7, 9], [9, 12]];
  const [minimum, maximum] = ranges[lv - 1];
  const baseTraffic = minimum + Math.floor(Math.random() * (maximum - minimum + 1));
  const influence = Math.max(0, state.reputation - 20) / 240 + Math.max(0, state.popularity - 10) / 350 + Math.max(0, state.loyalty - 20) / 400;
  const count = Math.max(minimum, Math.min(maximum, Math.round(baseTraffic * (1 + influence + decorationComfort.value * 0.02 + deviceValue('display')))));
  const walkins = Math.max(1, count - reservations.length);
  for (let i = 0; i < walkins; i++) {
    const regular = customersToday().find((customer) => i === 0);
    const available = availableProducts.value;
    const product = regular ? productById(regular.product) : available[Math.floor(Math.random() * available.length)];
    const qty = 1 + Math.floor(Math.random() * 3);
    const patience = 30 + 5 * (qty - 1);
    service.tickets.push({
      id: 'visit-' + state.dayIndex + '-' + i,
      kind: 'walkin',
      type: regular ? '熟客' : '到店',
      customer: regular ? regular.name : ['附近居民', '学生顾客', '路过的客人', '带孩子的家长', '年轻客人'][Math.floor(Math.random() * 5)],
      product: product.id,
      qty,
      pay: priceOf(product.id) * qty,
      clue: regular ? '我还是想买那款熟悉的蛋糕。' : customerClue(product.id),
      due: '',
      blessing: '',
      status: 'waiting',
      patience,
      remaining: patience,
      customSatisfied: true,
    });
  }
  state.orders = [];
  state.service = service;
  state.dayPhase = 'service';
  service.activeTicketId = service.tickets[0]?.id || null;
  if (service.automationUnlocked && state.staffAssignments.auto) autoDeliverTickets();
  save();
  return { customers: service.tickets.length };
}

const CUSTOMER_CLUES = {
  plain: '想吃一款奶油薄一点、味道熟悉的经典蛋糕。',
  strawberry: '今天想买草莓酸甜口的奶油蛋糕。',
  chocolate: '有偏浓的可可味蛋糕吗？',
  taro: '想尝尝芋泥和脆脆夹心的搭配。',
  matcha: '有清香的茶味吗？希望甜度低一些。',
  mango: '想要清爽一点的芒果甜点。',
  tiramisu: '今天想吃咖啡味和奶酪味的蛋糕。',
  fig: '有没有放新鲜水果、奶油又轻一点的蛋糕？',
  seasonal: '想挑一款能尝到当季水果的蛋糕。',
  custom: '想订一份适合庆祝的精致蛋糕。',
  festival: '最近过节，想带一份有节日气氛的点心。',
  signature: '听说有桂花和栗子的秋日招牌。',
};

function customerClue(productId) { return CUSTOMER_CLUES[productId] || '想挑一款店里受欢迎的蛋糕。'; }

export function canAutomateService() {
  return state.shopLevel >= 3 && state.staff.filter((id) => (state.partnerSkill[id] || 1) >= 3).length >= 3;
}

function serviceWindow(service = state.service) {
  if (!service) return [];
  const capacity = Math.max(1, Math.min(3, state.shopLevel));
  return service.tickets.slice(service.current, service.current + capacity)
    .filter((ticket) => !['delivered', 'unavailable'].includes(ticket.status));
}

function activeServiceTicket(service = state.service) {
  const window = serviceWindow(service);
  return window.find((ticket) => ticket.id === service?.activeTicketId) || window[0] || null;
}

export function selectServiceTicket(ticketId) {
  if (state.dayPhase !== 'service' || !state.service || !serviceWindow().some((ticket) => ticket.id === ticketId)) return false;
  state.service.activeTicketId = ticketId;
  save();
  return true;
}

function advanceServiceQueue(service) {
  while (service.current < service.tickets.length && ['delivered', 'unavailable'].includes(service.tickets[service.current].status)) service.current += 1;
  service.activeTicketId = serviceWindow(service)[0]?.id || null;
}

export function setServiceAssignments(assignments) {
  if (state.phase !== 'playing' || state.dayPhase !== 'prep') return false;
  const valid = new Set(state.staff);
  const next = { picker: null, packer: null, auto: false, ...(assignments || {}) };
  if (next.picker && !valid.has(next.picker)) next.picker = null;
  if (next.packer && !valid.has(next.packer)) next.packer = null;
  if (next.picker && next.picker === next.packer) next.packer = null;
  if (!canAutomateService()) next.auto = false;
  state.staffAssignments = next;
  save();
  return true;
}

export function findCake(ticketId, productId, qty) {
  if (state.dayPhase !== 'service' || !state.service) return { ok: false, message: '現在不是营业接待阶段。' };
  const ticket = activeServiceTicket();
  if (!ticket || ticket.id !== ticketId || ticket.status !== 'waiting') return { ok: false, message: '这位顾客的订单已在处理。' };
  if (productId !== ticket.product) return { ok: false, message: '口味不符合顾客需求，再找找看。' };
  if (qty !== ticket.qty) return { ok: false, message: '请按顾客的数量要求找蛋糕。' };
  if ((state.shelf[productId] || 0) < qty) return { ok: false, message: '展示柜里的数量不够。' };
  if (serviceWindow().filter((row) => row.status === 'searching').length >= 1 + (state.staffAssignments.picker ? 1 : 0)) return { ok: false, message: '找货工位正忙，先支援或处理另一位顾客。' };
  const batch = batchForProduct(productId, qty);
  if (!batch) return { ok: false, message: '展示柜里找不到这批蛋糕。' };
  ticket.selected = productId;
  ticket.selectedQty = qty;
  ticket.packBatchId = batch.id;
  ticket.findRemaining = 2 / serviceSpeed('picker');
  ticket.status = 'searching';
  save();
  return { ok: true, message: '在展示柜里找蛋糕。' };
}

export function packOrder(ticketId, decoration = null, blessing = null) {
  if (state.dayPhase !== 'service' || !state.service) return { ok: false, message: '現在不是营业接待阶段。' };
  const ticket = activeServiceTicket();
  if (!ticket || ticket.id !== ticketId || ticket.status !== 'found') return { ok: false, message: '先从展示柜取出正确的蛋糕。' };
  if (ticket.type === '定制' && decoration !== ticket.due) return { ok: false, message: '装饰还没有符合预订要求。' };
  if (ticket.type === '定制' && blessing !== ticket.blessing) return { ok: false, message: '祝福语还没有符合预订要求。' };
  if (serviceWindow().filter((row) => row.status === 'packing').length >= 1 + (state.staffAssignments.packer ? 1 : 0)) return { ok: false, message: '打包工位正忙，先支援或处理另一位顾客。' };
  ticket.decoration = decoration;
  ticket.packedBlessing = blessing;
  ticket.packRemaining = 3.6;
  ticket.packElapsed = 0;
  ticket.status = 'packing';
  save();
  return { ok: true, message: '开始打包。' };
}

function serviceSpeed(role) {
  const id = state.staffAssignments && state.staffAssignments[role];
  return id && state.staff.includes(id) ? 1 + Math.max(0, (state.partnerSkill[id] || 1) - 1) * 0.15 : 1;
}

export function advanceServiceTime(seconds = 1) {
  if (state.dayPhase !== 'service' || !state.service) return;
  const elapsed = Math.max(0, seconds);
  serviceWindow().forEach((ticket) => {
    ticket.remaining = Math.max(0, ticket.remaining - elapsed);
    if (ticket.status === 'searching') {
      ticket.findRemaining = Math.max(0, ticket.findRemaining - elapsed);
      if (ticket.findRemaining === 0) ticket.status = 'found';
    }
    if (ticket.status === 'packing') {
      ticket.packRemaining = Math.max(0, ticket.packRemaining - elapsed);
      ticket.packElapsed = Math.min(3.6, (ticket.packElapsed || 0) + elapsed);
      if (ticket.packRemaining === 0) ticket.status = 'ready';
    }
    if (ticket.remaining === 0 && !ticket.unhappy) {
      ticket.unhappy = true;
      state.service.unhappy += 1;
      const lost = Math.min(0.1, Math.max(0, 0.5 - (state.dayReputationLoss || 0)));
      state.dayReputationLoss = (state.dayReputationLoss || 0) + lost;
      state.reputation = clamp(state.reputation - lost);
      log(ticket.customer + '等得有些久，耐心少了一点。', 'bad');
    }
  });
  if (Math.floor(Date.now() / 1000) !== state.service.lastSavedSecond) {
    state.service.lastSavedSecond = Math.floor(Date.now() / 1000);
    save();
  }
}

export function deliverTicket(ticketId) {
  if (state.dayPhase !== 'service' || !state.service) return { ok: false, message: '营业已结束。' };
  const service = state.service;
  const ticket = activeServiceTicket(service);
  if (!ticket || ticket.id !== ticketId || ticket.status !== 'ready') return { ok: false, message: '蛋糕还没包好。' };
  if ((state.shelf[ticket.product] || 0) < ticket.qty) return { ok: false, message: '展示柜里的数量不够。' };
  const allocations = consumeBatchProduct(ticket.product, ticket.qty);
  state.shelf[ticket.product] -= ticket.qty;
  const unitPrice = ticket.pay / ticket.qty;
  const revenue = Math.round(allocations.reduce((sum, item) => sum + unitPrice * item.qty * (item.quality === 'perfect' ? 1.1 : item.quality === 'fine' ? 1.05 : 1), 0));
  state.cash += revenue;
  state.dayRev += revenue;
  state.monthRev += revenue;
  state.daySold += ticket.qty;
  state.monthSold[ticket.product] = (state.monthSold[ticket.product] || 0) + ticket.qty;
  state.doneOrders += 1;
  if (ticket.type === '定制') state.customOrders += 1;
  if (ticket.type === '线上') state.onlineOrders += 1;
  if (ticket.type === '节日') state.festivalOrders += 1;
  if (ticket.customer === '陈奶奶' || ticket.customer === '张叔') recordCustomerPurchases({ [ticket.product]: ticket.qty });
  state.loyalty = clamp(state.loyalty + 0.15);
  state.popularity = clamp(state.popularity + 0.02);
  ticket.revenue = revenue;
  ticket.status = 'delivered';
  log('交付「' + productById(ticket.product).name + '」×' + ticket.qty + '，收入 ¥' + revenue + ' 已到账', 'good');
  if (ticket.type === '定制') service.customDone = (service.customDone || 0) + 1;
  if (state.challenge && state.challenge.type === 'new' && state.challenge.target === ticket.product) service.challengeNewSold = (service.challengeNewSold || 0) + ticket.qty;
  advanceServiceQueue(service);
  finishServiceIfDone();
  save();
  return { ok: true, message: ticket.customer + '收下了蛋糕，¥' + revenue + ' 已到账。' };
}

export function declineTicket(ticketId) {
  const service = state.service;
  const ticket = activeServiceTicket(service);
  if (!ticket || ticket.id !== ticketId || state.dayPhase !== 'service') return false;
  ticket.status = 'unavailable';
  advanceServiceQueue(service);
  finishServiceIfDone();
  save();
  return true;
}

function autoDeliverTickets() {
  const service = state.service;
  if (!service) return;
  while (service.current < service.tickets.length) {
    const ticket = service.tickets[service.current];
    service.activeTicketId = ticket.id;
    if ((state.shelf[ticket.product] || 0) < ticket.qty) { ticket.status = 'unavailable'; service.current += 1; continue; }
    ticket.status = 'ready';
    ticket.packBatchId = (batchForProduct(ticket.product, ticket.qty) || {}).id;
    deliverTicket(ticket.id);
  }
  finishServiceIfDone();
}

function finishServiceIfDone() {
  const service = state.service;
  if (!service || service.current < service.tickets.length) return;
  state.dayPhase = 'closing';
  const delivered = service.tickets.filter((ticket) => ticket.status === 'delivered').length;
  if (delivered) {
    state.reputation = clamp(state.reputation + 0.06);
    state.loyalty = clamp(state.loyalty + 0.1);
  }
  if (!state.challengeDone && state.challenge) {
    const sold = state.daySold;
    const left = Object.values(state.shelf).reduce((sum, qty) => sum + qty, 0);
    const success = state.challenge.type === 'stock' ? left / Math.max(1, sold + left) <= 0.1
      : state.challenge.type === 'new' ? (service.challengeNewSold || 0) >= 3
        : (service.customDone || 0) > 0;
    if (success) {
      const bonus = Math.round(state.dayRev * 0.05);
      state.cash += bonus;
      state.dayRev += bonus;
      state.monthRev += bonus;
      log('今日经营挑战完成，额外收入 ¥' + bonus, 'good');
    }
    state.challengeDone = true;
    log('今日经营挑战：' + (success ? '完成' : '未完成'), success ? 'good' : 'normal');
  }
  log('营业结束，完成 ' + delivered + ' / ' + service.tickets.length + ' 位顾客', 'good');
  save();
}

/* ---------------- 打烊 ---------------- */

export const LEFTOVER_MODES = {
  discount: { label: '打折卖掉', cashRate: 0.5, community: 1 },
  staff: { label: '留给伙伴', cashRate: 0, community: 2 },
  share: { label: '社区分享', cashRate: 0, community: 3 },
  waste: { label: '报损处理', cashRate: 0, community: 0 },
};

export function closeDay(mode) {
  if (state.phase !== 'playing' || state.dayPhase !== 'closing') return null;
  const m = LEFTOVER_MODES[mode] || LEFTOVER_MODES.discount;
  let left = 0;
  let value = 0;
  for (const id of Object.keys(state.shelf)) {
    left += state.shelf[id] || 0;
    value += (state.shelf[id] || 0) * priceOf(id);
  }

  let gain = 0;
  if (left > 0) {
    // 冷藏柜只加成「打折卖掉」，其它处理方式不额外换钱
    const rate = m.cashRate > 0 ? m.cashRate + deviceValue('fridge') : 0;
    gain = Math.round(value * rate);
    state.cash += gain;
    if (m.community) {
      state.style.community += m.community * 0.3;
      // 分享/留伙伴按等级给一点口碑；原来 +1/天，36 个月能白送 100 多点
      state.reputation = clamp(state.reputation + m.community * 0.05);
    }
  }

  state.dayLeft = left;
  state.shelf = {};
  state.batches = [];

  const report = { day: state.day, rev: state.dayRev, sold: state.daySold, left, gain };
  state.dailyLedger.unshift({ month: state.month, day: state.day, rev: state.dayRev + gain, cost: state.daySpend, sold: state.daySold, orders: state.doneOrders });
  state.dailyLedger = state.dailyLedger.slice(0, 40);

  state.dayRev = 0;
  state.daySold = 0;
  state.dayMade = 0;
  state.dayPhase = 'report';
  state.service = null;

  advanceDay();
  save();
  return report;
}

/** 卧室可结束尚未开门的经营日；正在接待顾客时不能跳过流程。 */
export function restAtHome() {
  if (state.phase !== 'playing' || !['prep', 'service-ready', 'closing'].includes(state.dayPhase)) return null;
  state.dayPhase = 'closing';
  return closeDay('discount');
}

function advanceDay() {
  state.day += 1;
  state.dayIndex += 1;
  if (state.day > DAYS_PER_MONTH) {
    state.day = 1;
    endMonth();
  } else {
    startDay();
  }
}

function startDay() {
  state.daySpend = 0;
  state.ap = state.maxAp;
  state.stamina = Math.min(state.maxStamina, state.stamina + 70);
  state.plan = {};
  state.dayPhase = 'prep';
  state.service = null;
  state.productionMini = null;
  state.productionResult = null;
  state.dayReputationLoss = 0;
  state.challengeDone = false;
  startChallengeForDay();
  if (!state.shelf) state.shelf = {};
  rollOrders();
  save();
}

/* ---------------- 月末结算 ---------------- */

function endMonth() {
  const fixed = monthFixedCost.value;
  state.monthCost += fixed;
  state.cash -= fixed;

  let warn = null;
  if (state.cash < 0) {
    if (!state.usedMomHelp) {
      state.cash = 3000;
      state.usedMomHelp = true;
      warn = '资金见底，妈妈先垫了一笔周转';
    } else {
      state.cash = 0;
      state.reputation = clamp(state.reputation - 2);
      warn = '这个月很难，勉强撑过去了';
    }
    log(warn, 'bad');
  }

  let bestId = null;
  let bestN = 0;
  Object.keys(state.monthSold).forEach((id) => {
    if (state.monthSold[id] > bestN) {
      bestN = state.monthSold[id];
      bestId = id;
    }
  });

  // 和月初比，看看这个月到底长进了什么
  const snap = state.monthSnap || { rep: state.reputation, unlocked: [], skill: {} };
  const fresh = state.unlocked.filter((id) => snap.unlocked.indexOf(id) < 0);
  const grown = [];
  state.staff.forEach((pid) => {
    const before = snap.skill[pid] || 0;
    const now = state.partnerSkill[pid] || 0;
    if (now - before >= 0.3) {
      const info = partnerById(pid);
      grown.push((info ? info.nick || info.name : pid) + ' 专业 +' + (now - before).toFixed(1));
    }
  });

  state.report = {
    month: state.month,
    rev: state.monthRev,
    cost: state.monthCost,
    net: state.monthRev - state.monthCost,
    best: bestId ? productById(bestId).name : '—',
    bestN,
    warn,
    // 本月新增
    fresh: fresh.map((id) => (productById(id) || {}).name).filter(Boolean),
    repDelta: Math.round((state.reputation - snap.rep) * 10) / 10,
    rep: Math.round(state.reputation),
    grown,
    trust: Object.keys(state.partnerTrust).map((pid) => {
      const info = partnerById(pid);
      return { name: info ? info.nick || info.name : pid, v: Math.round(state.partnerTrust[pid] || 0) };
    }),
  };

  // 下个月重新记基线
  state.monthSnap = {
    rep: state.reputation,
    unlocked: state.unlocked.slice(),
    skill: Object.assign({}, state.partnerSkill),
  };

  const finishedMonth = state.month;
  state.month += 1;
  state.monthRev = 0;
  state.monthCost = 0;
  state.monthSold = {};
  state.shelf = {};

  PARTNERS.forEach((p) => {
    if (p.joinMonth === state.month) joinPartner(p.id);
  });

  // 第五章的危机月：统计有多少伙伴愿意主动出手
  if (finishedMonth === 29) {
    const trust = Object.values(state.partnerTrust).filter((x) => x >= 70).length;
    state.helpers = trust + (state.momBond >= 70 ? 1 : 0);
  }

  const stageDone = STAGES.find((s) => s.to === finishedMonth && !s.final);
  if (stageDone) {
    const sd = STORY.stages[stageDone.id];
    if (!checkStage(stageDone)) {
      state.phase = 'ended';
      state.ending = { ...stageDone.short, key: stageDone.short.key, text: '' };
      if (sd && sd.failId) pushEvent(STORY.find(sd.failId));
      log('阶段目标没有达成', 'bad');
      save();
      return;
    }
    state.stage = stageDone.id + 1;
    if (sd && sd.pass.length) {
      pushEvent({
        id: 'STAGE_PASS_' + stageDone.id,
        title: stageDone.name + ' · 阶段达成',
        chapter: stageDone.name,
        kind: 'stage',
        beats: sd.pass,
      });
    }
    log('第 ' + stageDone.id + ' 阶段目标达成', 'good');
  }

  if (state.month > 36) {
    state.month = 36;
    state.phase = 'ended';
    const key = finalEndingKey();
    state.ending = { ...ENDINGS[key], key };
    pushEvent(STORY.find(FINAL_EVENT[key]));
    save();
    return;
  }

  state.stamina = state.maxStamina;
  startDay();
  queueStory();
}

const FINAL_EVENT = {
  community: 'EVT_FINAL_END_COMMUNITY',
  tradition: 'EVT_FINAL_END_TRADITION',
  creative: 'EVT_FINAL_END_INNOVATION',
  regional: 'EVT_FINAL_END_REGIONAL',
  national: 'EVT_FINAL_END_NATIONAL',
  transfer: 'EVT_FINAL_END_TRANSFER',
};

export function checkStage(stage) {
  if (!stage.goals.length) return true;
  const done = stage.goals.filter((g) => g.check(state));
  if (done.length < stage.need) return false;
  if (stage.needExpand && !done.some((g) => g.expand)) return false;
  return true;
}

function finalEndingKey() {
  if (state.acquired) return 'transfer';
  if (state.storeCount >= 6) return 'national';
  if (state.storeCount >= 3) return 'regional';
  const s = state.style;
  const top = Object.keys(s).sort((a, b) => s[b] - s[a])[0];
  const map = {
    tradition: 'tradition',
    innovation: 'creative',
    community: 'community',
    efficiency: 'regional',
  };
  return map[top] || 'community';
}

/* ---------------- 剧情调度 ---------------- */

function pushEvent(ev) {
  if (!ev) return;
  if (queue.events.find((e) => e.id === ev.id)) return;
  queue.events.push(ev);
}

/** 主线事件：按月推进，条件不满足就继续等 */
export function queueStory() {
  const due = STORY.events.filter((ev) => {
    if (ev.kind !== 'main') return false;
    if (state.played.includes(ev.id)) return false;
    if (ev.month == null) return false;
    if (state.month < ev.month) return false;
    if (ev.test && !evalTest(ev.test, state)) return false;
    return true;
  });

  due.sort((a, b) => a.month - b.month || a.order - b.order);
  due.forEach(pushEvent);

  // 经营风格专属剧情：某项 ≥ 指定值且领先其他项
  STORY.events
    .filter((ev) => ev.kind === 'style' && !state.played.includes(ev.id) && evalTest(ev.test, state))
    .forEach(pushEvent);
}

/**
 * 新手教程：查看（T1—T6）或跳过（T7）。
 * 无论选哪个都把 tutorialSeen 置真，不再重复询问。
 */
export function startTutorial(show) {
  const list = STORY.events
    .filter((e) => e.kind === 'tutorial')
    .sort((a, b) => (a.order || 0) - (b.order || 0));
  const pick = show
    ? list.filter((e) => e.id !== 'EVT_TUTORIAL_SKIP')
    : list.filter((e) => e.id === 'EVT_TUTORIAL_SKIP');
  const queued = pick.filter((event) => !queue.events.some((item) => item.id === event.id));
  queue.events.unshift(...queued);
  state.tutorialSeen = true;
  state.tutorialPromptPending = false;
  state.tutorialProgress = show ? 1 : 0;
  save();
  return pick.length;
}

/* ---------------- 栖云镇：场景、日历和收藏 ---------------- */

export const TOWN_EVENTS = [
  { season: 0, title: '春日花卉节', place: '公园 · 小镇市集', materials: ['strawberry', 'decor'], detail: '草莓与花卉装饰是春季订单的主角。' },
  { season: 1, title: '夏日水果节', place: '咖啡店 · 小镇市集', materials: ['mango', 'strawberry'], detail: '准备新鲜水果，留意咖啡店的夏日联名邀请。' },
  { season: 2, title: '秋日丰收季', place: '小镇市集', materials: ['chestnut', 'decor'], detail: '秋栗与坚果风味适合节日摊位。' },
  { season: 3, title: '暖冬甜品节', place: '蛋糕店 · 咖啡店', materials: ['cocoa', 'decor'], detail: '巧克力与礼盒订单会更受欢迎。' },
];

export function seasonalEvent(month = state.month) {
  return TOWN_EVENTS[Math.floor(((month - 1) % 12) / 3)];
}

export function sceneAvailability(id) {
  switch (id) {
    case 'school': return { open: false, reason: '高中仅在回忆与主线剧情中出现，不作为日常地图。' };
    case 'home': return { open: state.dayIndex >= 2, reason: '第一天营业结束后，林念才有时间回家整理。' };
    case 'park': return { open: state.dayIndex >= 2, reason: '完成第一天经营后，苏晴会带你熟悉公园。' };
    case 'river': return { open: (state.sceneVisits.park || 0) > 0 && (state.sqchatMonth > 0 || state.dayIndex >= 3), reason: '先去公园散步，认识通往河岸的小路。' };
    case 'lab': return { open: state.month >= 3 && state.unlocked.length >= 3, reason: '掌握三款基础配方，并经营到第 3 个月。' };
    case 'staff': return { open: state.staff.length >= 1, reason: '招聘第一位伙伴后开放排班板。' };
    case 'studio': return { open: state.customOrders >= 1, reason: '完成第一份定制订单后，叶星河会邀请你来设计。' };
    case 'cafe': return { open: state.shopLevel >= 2 && state.month >= 6, reason: '店铺达到 Lv2 且进入第 6 个月，咖啡店主会提出合作。' };
    case 'market': return { open: state.shopLevel >= 3 && state.month >= 6, reason: '店铺达到 Lv3，并完成前期经营（第 6 个月起）。' };
    case 'store': return { open: state.shopLevel >= 4 && state.customOrders >= 2 && state.brand >= 25 && state.month >= 19, reason: '店铺 Lv4、完成 2 份定制、品牌 ≥25，并推进到第 19 个月。' };
    default: return { open: true, reason: '' };
  }
}

export function addTownNotice(title, detail, target = 'shop') {
  if ((state.notices || []).some((item) => item.title === title)) return;
  state.notices.unshift({ id: 'n-' + Date.now() + '-' + state.notices.length, title, detail, target, month: state.month, day: state.day, seen: false });
  state.notices = state.notices.slice(0, 60);
  save();
}

export function visitTownScene(id) {
  const gate = sceneAvailability(id);
  if (!gate.open) return false;
  state.sceneVisits[id] = (state.sceneVisits[id] || 0) + 1;
  if (id === 'park' && state.sceneVisits[id] === 1) addTownNotice('河边的小路', '公园通往河边。你可以去看看风景，也许会遇到特别的人。', 'river');
  if (id === 'cafe' && state.sceneVisits[id] === 1) addTownNotice('咖啡店的邀请', '主理人许沐禾想和林记烘焙推出第一份联名菜单。', 'cafe');
  if (id === 'studio' && state.sceneVisits[id] === 1) addTownNotice('叶星河的设计工作室', '定制订单带来了新的设计灵感，试着制作一份包装设计。', 'studio');
  save();
  return true;
}

export function takeTownPhoto(place) {
  if (!['park', 'river'].includes(place)) return { ok: false, message: '只能在风景地点拍照。' };
  const key = place + '-' + state.month;
  if (state.scenePhotos.some((entry) => entry.id === key)) return { ok: false, message: '这个月已经收集过这里的风景了。' };
  if (state.dayPhase !== 'prep' || state.ap < 1) return { ok: false, message: '拍摄风景需要准备阶段的 1 点行动力。' };
  state.ap -= 1;
  state.scenePhotos.push({ id: key, place, month: state.month, day: state.day, title: place === 'river' ? '河岸晚风' : '公园花影' });
  state.loyalty = Math.min(100, state.loyalty + 1);
  addTownNotice('新的风景照片', '拍摄的照片已经存入手机收藏。', place);
  save();
  return { ok: true, message: '拍到了「' + (place === 'river' ? '河岸晚风' : '公园花影') + '」，已收入收藏。' };
}

export const RIVER_EVENTS = [
  { id: 'walk', title: '河边的第一次散步', detail: '苏晴陪林念沿着水边慢慢走，聊起接手蛋糕店后忙碌的生活。', unlock: () => state.dayIndex >= 3, reward: '苏晴好感与河岸回忆' },
  { id: 'lost', title: '遗失的物品', detail: '在长椅下发现一枚小小的钥匙扣。循着线索找到失主，是常来林记的小镇居民。', unlock: () => (state.sceneVisits.river || 0) >= 2, reward: '小镇纪念物与人物线索' },
  { id: 'rain', title: '雨天的小插曲', detail: '约好见面的午后下起雨，林念和苏晴帮陌生人遮住了刚买的甜点。', unlock: () => state.month >= 5, reward: '特殊订单线索' },
  { id: 'festival', title: '河岸灯会', detail: '夜色里亮起一串串小灯，林记的节日甜点为小镇添上了温暖。', unlock: () => state.month >= 6, reward: '灯会纪念与限定照片' },
  { id: 'bridge', title: '旧桥边的回忆', detail: '苏晴在旧桥边提起那年一起走过的路，林念终于想起了很多珍贵的小事。', unlock: () => state.sqchatMonth >= 4, reward: '苏晴专属回忆' },
];

export function exploreRiver(id) {
  const ev = RIVER_EVENTS.find((entry) => entry.id === id);
  if (!ev || !ev.unlock()) return { ok: false, message: '这段故事还没有到来的时机。' };
  if (state.sceneEvents.includes(id)) return { ok: false, message: '这段回忆已经收藏。' };
  if (state.dayPhase !== 'prep' || state.ap < 1) return { ok: false, message: '今天先完成店里的营业，明天再来吧。' };
  state.ap -= 1;
  state.sceneEvents.push(id);
  if (id === 'walk' || id === 'bridge') state.loyalty = Math.min(100, state.loyalty + 3);
  if (id === 'festival') state.marketPoints += 2;
  addTownNotice('河边回忆 · ' + ev.title, ev.reward + '已记入手机收藏。', 'river');
  save();
  return { ok: true, message: ev.detail + '\n获得：' + ev.reward };
}

export function changeOutfit(id) {
  if (!state.unlockedOutfits.includes(id)) return false;
  state.outfit = id;
  save();
  return true;
}

export function submitDesign({ shape, color, decoration, packaging }) {
  if (!sceneAvailability('studio').open || state.dayPhase !== 'prep' || state.ap < 1) return { ok: false, message: '现在还无法进行设计。' };
  if ((state.pantry.decor || 0) < 1) return { ok: false, message: '需要 1 份裱花装饰料，请先去食材铺补货。' };
  const id = 'design-' + state.designWorks.length + '-' + state.dayIndex;
  state.pantry.decor -= 1;
  state.ap -= 1;
  state.designWorks.push({ id, shape, color, decoration, packaging, month: state.month, day: state.day });
  state.brand = Math.min(100, state.brand + 1);
  addTownNotice('设计作品已保存', '新设计已归入手机收藏，将为品牌形象积累经验。', 'studio');
  save();
  return { ok: true, message: '设计保存成功！消耗装饰料 ×1，品牌 +1。' };
}

export function chatCafeOwner() {
  if (!sceneAvailability('cafe').open || state.dayPhase !== 'prep' || state.ap < 1) return { ok: false, message: '当前无法交流。' };
  if (state.cafeLastTalk === state.dayIndex) return { ok: false, message: '今天已经和许沐禾聊过了。' };
  state.ap -= 1;
  state.cafeRelation += 3;
  state.cafeLastTalk = state.dayIndex;
  addTownNotice('街角咖啡馆', '许沐禾分享了咖啡与蛋糕搭配的心得，联名合作又近了一步。', 'cafe');
  save();
  return { ok: true, message: '和许沐禾聊了新品与小镇生活。咖啡店好感 +3。' };
}

export function startGame() {
  const pro = STORY.events.find((ev) => ev.kind === 'prologue');
  if (pro && !state.played.includes(pro.id)) {
    const queued = queue.events.findIndex((event) => event.id === pro.id);
    if (queued >= 0) queue.events.splice(queued, 1);
    queue.events.unshift(pro);
  }
  queueStory();
}

export function finishEvent(ev) {
  const ids = ev.ids && ev.ids.length ? ev.ids : [ev.id];
  ids.forEach((id) => {
    if (!state.played.includes(id)) state.played.push(id);
  });
  const got = applyRewards(ev.rewards || []);
  if (got.length) log('剧情：' + ev.title, 'story');
  save();
}

/**
 * 伙伴个人结局分档：按文案 13.7 的触发条件。
 * 每档按顺序试，第一个满足的生效；高档还可以要求某个剧情已播放。
 */
const ENDING_TIERS = {
  xiaoyu: [
    { trust: 80, skill: 4, done: 'EVT_M11_YUTONG_BOOK' },
    { trust: 80 },
    { skill: 4 },
    {},
  ],
  zhiyao: [{ trust: 75, skill: 4, done: 'EVT_M19_MAIN' }, {}],
  kexin: [{ trust: 75, skill: 4, done: 'EVT_M21_MAIN' }, {}],
  qinghe: [{ trust: 75, skill: 4, done: 'EVT_M25_MAIN' }, {}],
  mom: [{ bond: 75 }, {}],
};

/** 伙伴个人结局：按信赖 / 专业 / 家庭默契挑一档 */
export function partnerEndingOf(pid) {
  const list = (STORY.partnerEndings || {})[pid];
  if (!list || !list.length) return null;

  const trust = state.partnerTrust[pid] || 0;
  const skill = state.partnerSkill[pid] || 0;
  const bond = state.momBond || 0;

  const rule = ENDING_TIERS[pid];
  if (!rule) return trust >= 70 ? list[0] : list[1];

  for (const tier of rule) {
    if (tier.trust != null && trust < tier.trust) continue;
    if (tier.skill != null && skill < tier.skill) continue;
    if (tier.bond != null && bond < tier.bond) continue;
    if (tier.done && !state.played.includes(tier.done)) continue;
    return list[Math.min(rule.indexOf(tier), list.length - 1)];
  }
  return list[list.length - 1];
}

export { PRODUCTS, CITIES, SHOP_LEVELS, PARTNERS, ENDINGS, shopLevelInfo, DEVICES, deviceById };
