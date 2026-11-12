/** 游戏规则 V5：经营日循环、行动力、体力、生产与销售、阶段结算、存档。 */

import { reactive, computed } from 'vue';
import {
  PRODUCTS, productById, PRICE_TIERS, CITIES, SHOP_LEVELS, PARTNERS, partnerById,
  STAGES, ENDINGS, stageByMonth, shopLevelInfo, DEVICES, deviceById,
} from './data';
import { STORY, evalTest, PARTNER_OF } from './story';

const SAVE_KEY = 'alb-save-v6';
export const DAYS_PER_MONTH = 5;

const MOM_CAPACITY = 60; // 林暖每天的免费产能
const STAFF_CAPACITY = 40; // 每位伙伴的产能

export function newState() {
  return {
    v: 6,
    month: 1,
    day: 1,
    cash: 12000,
    reputation: 20,
    popularity: 10,
    loyalty: 20,
    brand: 5,
    friendship: 20,
    shopLevel: 1,
    storeCount: 1,
    cities: ['qiyun'],
    surveyed: [],
    ap: 8,
    maxAp: 8,
    stamina: 100,
    maxStamina: 100,
    stock: 60,
    devices: {},
    shelf: {},
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
    doneOrders: 0,
    customOrders: 0,
    onlineOrders: 0,
    festivalOrders: 0,
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
    photos: [],
    log: [],
    phase: 'playing',
    ending: null,
    acquired: false,
    friendMonth: 0,
    autoStory: false,
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
  if (!next || state.cash < next.cost) return false;
  state.cash -= next.cost;
  state.devices[id] = deviceTier(id) + 1;
  state.monthCost += next.cost;
  log('升级了' + deviceById(id).name + '，' + next.text, 'good');
  save();
  return true;
}

export const availableProducts = computed(() =>
  PRODUCTS.filter((p) => state.unlocked.includes(p.id))
);

export const capacity = computed(
  () =>
    state.stamina + MOM_CAPACITY + state.staff.length * STAFF_CAPACITY + deviceValue('oven')
);

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

export function save() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch (e) {
    /* 隐私模式下忽略 */
  }
}

export function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (data.v !== 6) return false;
    Object.keys(newState()).forEach((k) => {
      if (data[k] !== undefined) state[k] = data[k];
    });
    return true;
  } catch (e) {
    return false;
  }
}

export function reset() {
  Object.assign(state, newState());
  queue.events.length = 0;
  startDay();
  save();
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
        case '友情值': state.friendship = clamp(state.friendship + v); break;
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
      case 'friend':
        state.friendship = clamp(state.friendship + g.v);
        break;
      default:
        break;
    }
    if (g.label) got.push(g.label);
  }
  return got;
}

/** 玩家在剧情里选了某个选项 */
export function applyChoice(choice, opt, index) {
  const got = applyGains(opt.gains);
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
    case 'restock':
      return { name: '原料采购', ap: 1, cost: 600, note: '原料 +' + (12 + deviceValue('warehouse')) + ' 份', disabled: state.cash < 600 };
    case 'feedback': {
      const left = cdLeft('feedback');
      return {
        name: '顾客反馈', ap: 1, cost: 0,
        note: left > 0 ? '还要等 ' + left + ' 天' : '口碑 +1.5，忠诚 +2',
        disabled: left > 0,
      };
    }
    case 'talk': {
      const t = state.staff.length ? staffList()[0].nick : null;
      return {
        name: '伙伴交流', ap: 1, cost: 0,
        note: t ? '和 ' + t + ' 聊聊，信赖 +6' : '和妈妈聊聊，家庭默契 +4',
      };
    }
    case 'sqchat': {
      const used = state.friendMonth === state.month;
      return {
        name: '与苏晴互动', ap: 1, cost: 0,
        note: used ? '这个月已经聊过了' : '本月专属剧情，友情 +3',
        disabled: used,
      };
    }
    case 'research':
      return { name: '新品研发', ap: 2, cost: 0, note: '选一款产品，熟练度 +1' };
    case 'market':
      return { name: '市场宣传', ap: 2, cost: 800, note: '知名度 +3，品牌 +2', disabled: state.cash < 800 };
    case 'train':
      return state.staff.length
        ? { name: '员工培训', ap: 2, cost: 400, note: '选一位伙伴，专业 +1', disabled: state.cash < 400 }
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
        note: '门店 +1', disabled: state.cash < city.cost,
      };
    }
    default:
      return { name: id, ap: 1, cost: 0, note: '' };
  }
}

export function doAction(id, opt) {
  if (state.phase !== 'playing') return false;
  const info = actionInfo(id);
  if (info.disabled) return false;
  if (state.ap < info.ap) return false;
  if (info.cost && state.cash < info.cost) return false;

  const cashBefore = state.cash;

  switch (id) {
    case 'restock': {
      const qty = 12 + deviceValue('warehouse');
      state.cash -= 600;
      state.stock += qty;
      log('原料 +' + qty + ' 份');
      break;
    }
      break;
    case 'feedback':
      state.reputation = clamp(state.reputation + 1.5);
      state.loyalty = clamp(state.loyalty + 2);
      log('认真听了顾客的意见，口碑上升');
      break;
    case 'talk':
      if (state.staff.length) {
        const pid = opt && opt.partner ? opt.partner : state.staff[0];
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
      if (!ev) break;
      state.friendMonth = state.month;
      state.friendship = clamp(state.friendship + 3);
      state.autoStory = true;
      pushEvent(ev);
      log('和苏晴聊了一晚，友情 +3');
      break;
    }
    case 'research': {
      const pid = opt && opt.product ? opt.product : state.unlocked[0];
      const lv = state.levels[pid] || 1;
      if (lv >= 5) return false;
      state.levels[pid] = Math.min(5, lv + 1);
      state.style.innovation += 3;
      log('推进了「' + productById(pid).name + '」的做法，熟练度提升');
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
  save();
  return true;
}

/* ---------------- 生产 ---------------- */

export function setPlan(productId, qty) {
  const n = Math.max(0, Math.min(99, Math.floor(qty || 0)));
  if (n === 0) delete state.plan[productId];
  else state.plan[productId] = n;
}

export function makeCakes() {
  if (state.phase !== 'playing') return { ok: false, msg: '游戏已经结束了' };
  const ids = Object.keys(state.plan);
  if (!ids.length) return { ok: false, msg: '先去厨房排一下今天的产量' };

  const needStock = ids.reduce((a, id) => a + state.plan[id], 0);
  if (needStock > state.stock) {
    return { ok: false, msg: '原料不够，还差 ' + (needStock - state.stock) + ' 份' };
  }

  const pts = planPoints();
  if (pts > capacity.value) {
    return { ok: false, msg: '产能不够。今天的产能是 ' + capacity.value + ' 点，还差 ' + (pts - capacity.value) };
  }

  const free = MOM_CAPACITY + state.staff.length * STAFF_CAPACITY + deviceValue('oven');
  const selfCost = Math.round(Math.max(0, pts - free) * (1 - deviceValue('mixer')));

  state.stock -= needStock;
  state.stamina = Math.max(0, state.stamina - selfCost);
  for (const id of ids) {
    state.shelf[id] = (state.shelf[id] || 0) + state.plan[id];
    state.dayMade += state.plan[id];
    state.levels[id] = Math.min(5, (state.levels[id] || 1) + state.plan[id] * 0.02);
  }
  log('做了 ' + needStock + ' 个蛋糕，自己出了 ' + selfCost + ' 点体力');
  state.plan = {};
  save();
  return { ok: true, msg: '做好了 ' + needStock + ' 个' };
}

/* ---------------- 订单 ---------------- */

export function rollOrders() {
  state.orders = [];
  const chance = 0.35 + state.popularity / 300;
  const count = Math.random() < chance ? (Math.random() < 0.35 ? 2 : 1) : 0;
  for (let i = 0; i < count; i++) {
    const pool = availableProducts.value;
    if (!pool.length) break;
    const p = pool[Math.floor(Math.random() * pool.length)];
    const roll = Math.random();
    const isCustom = roll < 0.28;
    const isOnline = !isCustom && roll < 0.66;
    const isFestival = !isCustom && !isOnline && roll < 0.75;
    const type = isCustom ? '定制' : isOnline ? '线上' : isFestival ? '节日' : '普通';
    const qty = isCustom ? 1 : 1 + Math.floor(Math.random() * 2);
    state.orders.push({
      id: 'o' + state.month + '-' + state.day + '-' + i,
      type,
      product: p.id,
      qty,
      pay: Math.round(priceOf(p.id) * qty * (isCustom ? 1.6 * (1 + deviceValue('packing')) : 1.25)),
      taken: false,
    });
  }
}

export function takeOrder(orderId) {
  const o = state.orders.find((x) => x.id === orderId);
  if (!o) return false;
  o.taken = !o.taken;
  save();
  return true;
}

/* ---------------- 营业 ---------------- */

export function openShop() {
  if (state.phase !== 'playing') return null;
  if (state.daySold > 0 || state.dayRev > 0) return null;

  let rev = 0;
  let sold = 0;
  const soldMap = {};

  // 先交付已接的订单
  for (const o of state.orders) {
    if (!o.taken) continue;
    const have = state.shelf[o.product] || 0;
    if (have < o.qty) continue;
    state.shelf[o.product] = have - o.qty;
    rev += o.pay;
    sold += o.qty;
    soldMap[o.product] = (soldMap[o.product] || 0) + o.qty;
    state.doneOrders += 1;
    if (o.type === '定制') state.customOrders += 1;
    if (o.type === '线上') state.onlineOrders += 1;
    if (o.type === '节日') state.festivalOrders += 1;
    state.loyalty = clamp(state.loyalty + 2);
  }

  // 再走自然客流
  for (const id of Object.keys(state.shelf)) {
    const have = state.shelf[id] || 0;
    if (have <= 0) continue;
    const n = Math.min(have, demandOf(id));
    state.shelf[id] = have - n;
    rev += n * priceOf(id);
    sold += n;
    soldMap[id] = (soldMap[id] || 0) + n;
  }

  state.dayRev = rev;
  state.daySold = sold;
  state.monthRev += rev;
  Object.keys(soldMap).forEach((id) => {
    state.monthSold[id] = (state.monthSold[id] || 0) + soldMap[id];
  });

  if (sold > 0) {
    state.reputation = clamp(state.reputation + 0.12);
    state.loyalty = clamp(state.loyalty + 0.1);
    state.popularity = clamp(state.popularity + 0.05);
  }

  log('今天卖出 ' + sold + ' 个，收入 ' + rev, sold > 0 ? 'good' : 'bad');
  save();
  return { rev, sold };
}

/* ---------------- 打烊 ---------------- */

export const LEFTOVER_MODES = {
  discount: { label: '打折卖掉', cashRate: 0.5, community: 1 },
  staff: { label: '留给伙伴', cashRate: 0, community: 2 },
  share: { label: '社区分享', cashRate: 0, community: 3 },
  waste: { label: '报损处理', cashRate: 0, community: 0 },
};

export function closeDay(mode) {
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
    if (m.community) state.style.community += m.community * 0.3;
  }
  if (m.community >= 2) state.reputation = clamp(state.reputation + 1);

  state.dayLeft = left;
  state.shelf = {};

  const report = { day: state.day, rev: state.dayRev, sold: state.daySold, left, gain };

  state.dayRev = 0;
  state.daySold = 0;
  state.dayMade = 0;

  advanceDay();
  save();
  return report;
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
  state.ap = state.maxAp;
  state.stamina = Math.min(state.maxStamina, state.stamina + 70);
  state.plan = {};
  if (!state.shelf) state.shelf = {};
  rollOrders();
  save();
}

/* ---------------- 月末结算 ---------------- */

function endMonth() {
  const fixed = monthFixedCost.value;
  state.monthCost += fixed;
  state.cash += state.monthRev - fixed;

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

  state.report = {
    month: state.month,
    rev: state.monthRev,
    cost: state.monthCost,
    net: state.monthRev - state.monthCost,
    best: bestId ? productById(bestId).name : '—',
    bestN,
    warn,
  };

  const finishedMonth = state.month;
  state.month += 1;
  state.monthRev = 0;
  state.monthCost = 0;
  state.monthSold = {};
  state.shelf = {};

  PRODUCTS.forEach((p) => {
    if (p.month > 0 && p.month <= state.month && !state.unlocked.includes(p.id)) {
      state.unlocked.push(p.id);
      log('新配方入手：' + p.name, 'story');
    }
  });
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

export function startGame() {
  const pro = STORY.events.find((ev) => ev.kind === 'prologue');
  if (pro && !state.played.includes(pro.id)) pushEvent(pro);
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

/** 伙伴个人结局：按信赖 / 专业挑一档 */
export function partnerEndingOf(pid) {
  const list = (STORY.partnerEndings || {})[pid];
  if (!list || !list.length) return null;
  if (list.length === 1) return list[0];
  const trust = state.partnerTrust[pid] || 0;
  const skill = state.partnerSkill[pid] || 0;
  if (list.length >= 4) {
    if (trust >= 70 && skill >= 3) return list[0];
    if (trust >= 70) return list[1];
    if (skill >= 3) return list[2];
    return list[3];
  }
  return trust >= 70 ? list[0] : list[1];
}

export { PRODUCTS, CITIES, SHOP_LEVELS, PARTNERS, ENDINGS, shopLevelInfo, DEVICES, deviceById };
