/** 游戏状态与规则。所有数值调整都在这里。 */

import { reactive, computed } from 'vue';
import { CAKES, CITIES, SHOP_LEVELS, cakeById } from './data';
import { STORY, matchTrigger } from './story';

const SAVE_KEY = 'alb-save-v2';

const NUM_KEYS = {
  资金: 'money',
  烘焙: 'skill',
  品质: 'quality',
  口碑: 'reputation',
  知名度: 'fame',
  友情值: 'friendship',
  门店: 'stores',
  员工: 'staff',
};

const RATE_KEYS = ['skill', 'quality', 'reputation', 'fame', 'friendship'];

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

export function newState() {
  return {
    month: 1,
    ap: 3,
    money: 6000,
    skill: 8,
    quality: 12,
    reputation: 16,
    fame: 6,
    stock: 18,
    friendship: 20,
    shopLevel: 1,
    staff: 0,
    stores: 1,
    recipes: ['plain'],
    photos: [],
    played: [],
    log: [],
    phase: 'playing',
    ending: null,
    lastNet: 0,
  };
}

export const state = reactive(newState());

export const queue = reactive({ events: [] });

/* ---------------- 派生数值 ---------------- */

export const avgPrice = computed(() => {
  const list = state.recipes.map(cakeById);
  if (!list.length) return 128;
  return Math.round(list.reduce((a, c) => a + c.price, 0) / list.length);
});

export const monthlyIncome = computed(() => {
  const lv = 1 + (state.shopLevel - 1) * 0.12;
  return Math.round(state.stores * (160 + state.reputation * 4.5 + state.fame * 3.5) * lv);
});

export const monthlyExpense = computed(() => {
  return Math.round(
    260 +
      state.staff * 650 +
      (state.stores - 1) * 320 +
      (state.shopLevel - 1) * 120
  );
});

export const nextCity = computed(() => CITIES[state.stores] || null);

export const nextShopLevel = computed(
  () => SHOP_LEVELS.find((s) => s.lv === state.shopLevel + 1) || null
);

export const nextCake = computed(
  () => CAKES.find((c) => !state.recipes.includes(c.id) && state.skill >= c.skill) || null
);

export const lockedCake = computed(
  () => CAKES.find((c) => !state.recipes.includes(c.id)) || null
);

/* ---------------- 存档 ---------------- */

export function save() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch (e) {
    /* 隐私模式下会失败，忽略 */
  }
}

export function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
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
  save();
}

/* ---------------- 日志 ---------------- */

function pushLog(text, tone) {
  state.log.unshift({ month: state.month, text, tone: tone || 'normal' });
  if (state.log.length > 40) state.log.pop();
}

/* ---------------- 奖励结算 ---------------- */

export function applyRewards(items) {
  const got = [];
  for (const it of items) {
    if (it.kind === 'num') {
      const field = NUM_KEYS[it.key];
      if (field) {
        state[field] = RATE_KEYS.includes(field)
          ? clamp(state[field] + it.value, 0, 100)
          : Math.max(0, state[field] + it.value);
        got.push(it.key + (it.value >= 0 ? '+' : '') + it.value);
      }
    } else if (it.key === '配方') {
      if (!state.recipes.includes(it.value)) {
        state.recipes.push(it.value);
        got.push('解锁「' + cakeById(it.value).name + '」');
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

/* ---------------- 行动 ---------------- */

function spend(n) {
  state.money -= n;
}

export function actionMeta(id) {
  switch (id) {
    case 'study':
      return {
        title: '学习烘焙',
        cost: 0,
        note: '烘焙 ' + Math.round(state.skill) + ' → ' + Math.round(clamp(state.skill + 3, 0, 100)),
      };
    case 'sell': {
      const consume = Math.min(state.stock, 2 + state.stores * 2 + Math.min(state.staff, state.stores * 2));
      return {
        title: '营业接单',
        cost: 0,
        note:
          state.stock < 1
            ? '没有库存，先去采购'
            : '消耗 ' + consume + ' 份原料，约收入 ' + estimateSale(consume),
        disabled: state.stock < 1,
      };
    }
    case 'market':
      return { title: '宣传推广', cost: 300 + state.stores * 120, note: '知名度 +3' };
    case 'restock':
      return { title: '采购原料', cost: 200 + state.stores * 110, note: '库存 +' + (12 + state.stores * 4) };
    case 'research':
      return nextCake.value
        ? { title: '研发「' + nextCake.value.name + '」', cost: 400 + nextCake.value.cost * 2, note: '解锁新配方' }
        : {
            title: '研发新品',
            cost: 0,
            note: lockedCake.value ? '烘焙技能不足，还做不出来' : '所有配方都解锁了',
            disabled: true,
          };
    case 'decorate':
      return nextShopLevel.value
        ? { title: '升级到「' + nextShopLevel.value.name + '」', cost: nextShopLevel.value.cost, note: '品质+3 口碑+3' }
        : { title: '装修升级', cost: 0, note: '已经是最高等级', disabled: true };
    case 'hire':
      return { title: '招聘一名员工', cost: 1500, note: '员工 +1，品质 +1' };
    case 'branch': {
      const c = nextCity.value;
      if (!c) return { title: '开设分店', cost: 0, note: '已经开满全国', disabled: true };
      const ok = state.reputation >= c.rep && state.fame >= c.fame;
      const short = c.cost - state.money;
      return {
        title: '在' + c.name + '开店',
        cost: c.cost,
        note: ok
          ? short > 0
            ? c.note + '（还差 ¥' + short + '）'
            : c.note
          : '需要口碑 ' + c.rep + '、知名度 ' + c.fame + '（当前 ' + Math.round(state.reputation) + ' / ' + Math.round(state.fame) + '）',
        disabled: !ok,
      };
    }
    case 'community':
      return { title: '参加社区活动', cost: 0, note: '口碑 +4，友情值 +3' };
    default:
      return { title: id, cost: 0, note: '' };
  }
}

function estimateSale(consume) {
  const mult = 1 + (state.shopLevel - 1) * 0.1;
  return Math.round(
    avgPrice.value *
      consume *
      (0.3 + state.quality / 300 + state.reputation / 450) *
      mult +
      state.fame * 1.8 * state.stores
  );
}

export function doAction(id) {
  if (state.ap <= 0 || state.phase !== 'playing') return false;
  const meta = actionMeta(id);
  if (meta.disabled) return false;
  if (meta.cost && state.money < meta.cost) return false;

  switch (id) {
    case 'study': {
      const gain = state.skill >= 80 ? 1.2 : 3;
      state.skill = clamp(state.skill + gain, 0, 100);
      state.quality = clamp(state.quality + 1.2, 0, 100);
      pushLog('在厨房待了一整天，烘焙 +' + gain.toFixed(1));
      break;
    }
    case 'sell': {
      const consume = Math.min(state.stock, 2 + state.stores * 2 + Math.min(state.staff, state.stores * 2));
      const income = estimateSale(consume);
      state.stock -= consume;
      state.money += income;
      state.reputation = clamp(state.reputation + 1 + 0.25 * state.stores, 0, 100);
      state.fame = clamp(state.fame + 0.8, 0, 100);
      pushLog('今天卖出 ' + consume + ' 份，收入 ' + income, 'good');
      break;
    }
    case 'market': {
      spend(meta.cost);
      state.fame = clamp(
        state.fame + 6 + state.stores * 1.2 + (state.reputation > 45 ? 2 : 0),
        0,
        100
      );
      pushLog('发了新帖子，知名度上升');
      break;
    }
    case 'restock': {
      spend(meta.cost);
      state.stock += 12 + state.stores * 4;
      pushLog('周叔送来一批原料，库存 +' + (12 + state.stores * 4));
      break;
    }
    case 'research': {
      const cake = nextCake.value;
      if (!cake) return false;
      spend(meta.cost);
      state.recipes.push(cake.id);
      state.quality = clamp(state.quality + 2, 0, 100);
      pushLog('研发成功：' + cake.name, 'good');
      break;
    }
    case 'decorate': {
      const lv = nextShopLevel.value;
      if (!lv) return false;
      spend(meta.cost);
      state.shopLevel = lv.lv;
      state.quality = clamp(state.quality + 3, 0, 100);
      state.reputation = clamp(state.reputation + 3, 0, 100);
      pushLog('门店升级为「' + lv.name + '」', 'good');
      break;
    }
    case 'hire': {
      spend(meta.cost);
      state.staff += 1;
      state.quality = clamp(state.quality + 1, 0, 100);
      pushLog('新的员工加入了，店里热闹了一点');
      break;
    }
    case 'branch': {
      const c = nextCity.value;
      if (!c) return false;
      spend(c.cost);
      state.stores += 1;
      state.reputation = clamp(state.reputation + 2, 0, 100);
      pushLog('在' + c.name + '开了新店', 'good');
      break;
    }
    case 'community': {
      state.reputation = clamp(state.reputation + 5, 0, 100);
      state.friendship = clamp(state.friendship + 3, 0, 100);
      state.fame = clamp(state.fame + 2, 0, 100);
      if (!state.photos.includes('community') && state.month >= 13) {
        state.photos.push('community');
        pushLog('社区活动很顺利，拍了一张照片', 'good');
      } else {
        pushLog('社区活动很顺利，口碑 +4');
      }
      break;
    }
    default:
      return false;
  }

  state.ap -= 1;
  save();
  return true;
}

/* ---------------- 月结算 ---------------- */

function pickEnding() {
  if (state.stores >= 6) return 'national';
  if (state.stores >= 3) return 'regional';
  return 'warm';
}

export const ENDINGS = {
  national: {
    name: '全国连锁',
    title: '把喜欢的味道，带到了很多地方',
    text: '三十六个月，八座城市。你从一间连招牌都旧的社区小店，做到了一个能被别人记住名字的品牌。',
  },
  regional: {
    name: '区域品牌',
    title: '在这片地方，大家都认识这家店',
    text: '你没有开到最远，但每一个店里的客人，都知道你今天做的是哪一款。这就够了。',
  },
  warm: {
    name: '温暖小店',
    title: '还是一家小店，但是一家很好的小店',
    text: '有人问你为什么不扩张。你说，我想亲手做每一块蛋糕。这一年，你做到了。',
  },
};

export function endMonth() {
  if (state.phase !== 'playing') return;

  const income = monthlyIncome.value;
  const expense = monthlyExpense.value;
  const net = income - expense;
  state.money += net;
  state.lastNet = net;

  if (state.money < 0) {
    state.money = 0;
    state.reputation = clamp(state.reputation - 3, 0, 100);
    pushLog('这个月入不敷出，勉强撑过去了（口碑 -3）', 'bad');
  } else if (net >= 0) {
    pushLog('月末结算 +' + net, 'good');
  } else {
    pushLog('月末结算 ' + net, 'bad');
  }

  // 库存自然损耗一点点，不至于玩家囤积到无意义
  state.stock = Math.max(0, Math.round(state.stock * 0.92));

  state.month += 1;
  state.ap = 3;

  if (state.month > 36) {
    state.month = 36;
    state.phase = 'ended';
    state.ending = pickEnding();
  }

  save();
  queueStory();
}

/* ---------------- 剧情调度 ---------------- */

export function queueStory() {
  if (state.phase === 'ended' && state.ending) {
    // 结局事件仍然要播，只是不再有经营操作
  }

  const due = STORY.events.filter(
    (ev) =>
      !state.played.includes(ev.id) &&
      ev.trigger &&
      ev.trigger.type === 'cond' &&
      matchTrigger(ev.trigger, state)
  );

  // 随机事件：每月最多一个，45% 概率
  const randoms = STORY.events.filter(
    (ev) => !state.played.includes(ev.id) && ev.trigger && ev.trigger.type === 'random'
  );
  if (randoms.length && Math.random() < 0.45) {
    due.push(randoms[Math.floor(Math.random() * randoms.length)]);
  }

  due.sort((a, b) => a.id.localeCompare(b.id));
  due.forEach((ev) => {
    if (!queue.events.find((e) => e.id === ev.id)) queue.events.push(ev);
  });
}

export function startGame() {
  queueStory();
  const prologue = STORY.events.find((ev) => ev.trigger && ev.trigger.type === 'start');
  if (prologue && !state.played.includes(prologue.id)) {
    queue.events.unshift(prologue);
  }
}

export function finishEvent(ev, chosenRewards) {
  if (!state.played.includes(ev.id)) state.played.push(ev.id);
  const got = applyRewards(ev.rewards || []);
  if (chosenRewards && chosenRewards.length) {
    got.push(...applyRewards(chosenRewards));
  }
  if (got.length) pushLog('剧情：' + ev.title, 'story');
  save();
}

export { CAKES, CITIES, SHOP_LEVELS, cakeById };
