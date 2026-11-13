<script setup>
/**
 * 咖啡店联名：先配一份「蛋糕 + 咖啡 + 价格」的套餐，再接待三位客人。
 * 蛋糕与咖啡的风味要对得上（浓郁配浓郁、清爽配清爽），价格也不能太离谱。
 */
import { computed, ref } from 'vue';
import { art, artStatus, productById } from '../../data';
import {
  state, availableProducts, priceOf, cafeDemand, serveCafeCustomer, startCafeGame,
} from '../../store';
import MiniShell from './MiniShell.vue';

const emit = defineEmits(['exit']);

const COFFEES = [
  { id: 'americano', name: '美式', flavor: '浓郁', note: '黑巧、深烘，压得住重口味' },
  { id: 'latte', name: '拿铁', flavor: '柔和', note: '奶香厚，和奶油系最搭' },
  { id: 'cappuccino', name: '卡布奇诺', flavor: '柔和', note: '奶泡轻，甜度更圆润' },
  { id: 'mocha', name: '摩卡', flavor: '浓郁', note: '巧克力底，甜感重' },
  { id: 'iced', name: '冰咖啡', flavor: '清爽', note: '酸度明亮，适合鲜果' },
];

const CAKE_FLAVOR = {
  plain: '柔和', strawberry: '柔和', chocolate: '浓郁', taro: '浓郁', matcha: '清爽',
  mango: '清爽', tiramisu: '浓郁', fig: '清爽', seasonal: '清爽', custom: '柔和',
  festival: '浓郁', signature: '浓郁',
};

const PROFIT = { 浓郁: 'bold', 柔和: 'mellow', 清爽: 'fresh' };

const phase = ref('setup'); // setup | play | result
const pickedCake = ref('');
const pickedCoffee = ref('latte');
const price = ref(0);
const msg = ref('');
const tick = ref(0);

const cakes = computed(() =>
  availableProducts.value
    .filter((p) => (state.shelf[p.id] || 0) > 0)
    .map((p) => ({ ...p, n: state.shelf[p.id], flavor: CAKE_FLAVOR[p.id] || '柔和' }))
);

const coffee = computed(() => COFFEES.find((c) => c.id === pickedCoffee.value) || COFFEES[1]);

const pairing = computed(() => {
  const c = cakes.value.find((x) => x.id === pickedCake.value);
  if (!c) return null;
  return c.flavor === coffee.value.flavor;
});

const fairMax = computed(() => {
  if (!pickedCake.value) return 0;
  return Math.round(priceOf(pickedCake.value) * 1.25 + 65);
});

const run = computed(() => {
  void tick.value;
  return state.cafeRun;
});
const demand = computed(() => {
  void tick.value;
  return cafeDemand();
});
const current = computed(() => {
  const d = demand.value;
  if (!d) return null;
  const map = { bold: '浓郁', mellow: '柔和', fresh: '清爽' };
  return { name: d.customer, want: map[d.profile] || '柔和' };
});

const cakeArt = (id) => (artStatus('cake-' + id + '.webp') === 'ok' ? art('cake-' + id + '.webp') : '');

function pickCake(id) {
  pickedCake.value = id;
  if (!price.value) price.value = Math.round(priceOf(id) * 1.2 + 18);
}

function start() {
  if (!pickedCake.value) {
    msg.value = '先选一款蛋糕。';
    return;
  }
  if (!pairing.value) {
    msg.value = '这款蛋糕和' + coffee.value.name + '的风味不搭，换一个试试。';
    return;
  }
  const r = startCafeGame({ product: pickedCake.value, coffee: pickedCoffee.value, price: price.value, theme: '栖云午后' });
  if (!r.ok) {
    msg.value = r.message;
    return;
  }
  msg.value = '';
  phase.value = 'play';
  tick.value += 1;
}

function serve() {
  const r = serveCafeCustomer();
  msg.value = r.message || '';
  tick.value += 1;
  if (state.cafeRun && state.cafeRun.completed) phase.value = 'result';
}

const rating = computed(() => {
  const r = run.value;
  if (!r) return '';
  if (r.misses === 0) return '三桌客人都吃得满意，栖木那边已经开始问下次联名了';
  if (r.misses === 1) return '大部分客人买账，有一桌口味没对上';
  return '风味组合还得再琢磨琢磨';
});
</script>

<template>
  <MiniShell
    bg="minigame-cafe"
    title="咖啡店联名"
    :sub="phase === 'setup' ? '配一份套餐，再招待客人' : phase === 'play' ? '第 ' + ((run && run.customerIndex) + 1) + ' / 3 位客人' : '联名小结'"
  >
    <!-- 配置套餐 -->
    <div class="panel setup" v-if="phase === 'setup'">
      <div class="block">
        <div class="lh">选蛋糕</div>
        <div class="cakes">
          <button
            v-for="c in cakes"
            :key="c.id"
            type="button"
            class="ck"
            :class="{ on: pickedCake === c.id }"
            @click="pickCake(c.id)"
          >
            <img v-if="cakeArt(c.id)" :src="cakeArt(c.id)" :alt="c.name" />
            <span class="cn">{{ c.name }}</span>
            <span class="cf">{{ c.flavor }} · 剩{{ c.n }}</span>
          </button>
          <div v-if="!cakes.length" class="empty">柜子里没有蛋糕，先去厨房做一点</div>
        </div>
      </div>

      <div class="block">
        <div class="lh">配咖啡</div>
        <div class="coffees">
          <button
            v-for="c in COFFEES"
            :key="c.id"
            type="button"
            class="cf-btn"
            :class="{ on: pickedCoffee === c.id }"
            @click="pickedCoffee = c.id"
          >
            <span class="t">{{ c.name }}</span>
            <span class="f">{{ c.flavor }}</span>
          </button>
        </div>
        <p class="tip">{{ coffee.note }}。蛋糕和咖啡的风味要一致才好卖。</p>
      </div>

      <div class="block">
        <div class="lh">定价 <span class="fair">顾客能接受到 ¥{{ fairMax }}</span></div>
        <div class="price-row">
          <button type="button" @click="price = Math.max(1, price - 5)">−5</button>
          <input v-model.number="price" type="number" inputmode="numeric" min="1" />
          <button type="button" @click="price = price + 5">+5</button>
        </div>
      </div>

      <p v-if="msg" class="msg">{{ msg }}</p>
      <button class="op primary" type="button" @click="start">开始联名</button>
    </div>

    <!-- 接待 -->
    <div class="panel play" v-if="phase === 'play' && current">
      <div class="cust">
        <div class="tag">{{ current.name }}</div>
        <div class="bubble">来一份你们那个套餐吧，我想要{{ current.want }}一点的。</div>
      </div>
      <div class="menu-card">
        <div class="m1">{{ productById(run.menu.product).name }}</div>
        <div class="m2">+ {{ COFFEES.find((c) => c.id === run.menu.coffee).name }}</div>
        <div class="m3">¥{{ run.menu.price }} · 已入账 ¥{{ run.revenue }}</div>
      </div>
      <p v-if="msg" class="msg">{{ msg }}</p>
      <button class="op primary" type="button" @click="serve">上这份套餐</button>
    </div>

    <!-- 结算 -->
    <div v-if="phase === 'result'" class="panel result">
      <h3>联名结束</h3>
      <div class="row"><span>成交</span><span>{{ (run && run.sold) || 0 }} 份</span></div>
      <div class="row"><span>入账</span><span>¥{{ (run && run.revenue) || 0 }}</span></div>
      <div class="row"><span>没对上</span><span>{{ (run && run.misses) || 0 }} 桌</span></div>
      <p class="say">{{ rating }}</p>
      <button class="op primary" type="button" @click="emit('exit')">回店里</button>
    </div>
  </MiniShell>
</template>

<style scoped>
.panel {
  position: absolute;
  left: 12px;
  right: 12px;
  width: auto;
  max-width: calc(100% - 24px);
  box-sizing: border-box;
  overflow-x: hidden;
  box-sizing: border-box;
  bottom: 12px;
  max-height: 84%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.block {
  min-width: 0;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(255, 251, 244, 0.95);
  box-shadow: 0 6px 18px rgba(52, 32, 18, 0.16);
}
.lh {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  min-width: 0;
  gap: 8px;
  min-width: 0;
  font-size: 12.5px;
  font-weight: 700;
  color: var(--caramel);
  margin-bottom: 7px;
}
.fair {
  flex: 0 1 auto;
  min-width: 0;
  font-weight: 400;
  font-size: 10px;
  color: var(--ink-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cakes {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
}
.ck {
  min-width: 0;
  padding: 5px 3px;
  border: 1px solid var(--line-soft);
  border-radius: 10px;
  background: #fffdf8;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ck img {
  width: 100%;
  object-fit: contain;
}
.ck .cn {
  font-size: 9px;
  color: var(--caramel);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ck .cf {
  font-size: 8.5px;
  color: var(--ink-2);
}
.ck.on {
  border-color: var(--caramel);
  background: #fff2dd;
  box-shadow: 0 0 0 2px rgba(107, 74, 52, 0.28);
}
.coffees {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 5px;
}
.cf-btn {
  min-width: 0;
  padding: 6px 2px;
  border: 1px solid var(--line-soft);
  border-radius: 9px;
  background: #fffdf8;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
}
.cf-btn .t {
  font-size: 10.5px;
  color: var(--caramel);
}
.cf-btn .f {
  font-size: 8.5px;
  color: var(--ink-2);
}
.cf-btn.on {
  border-color: var(--caramel);
  background: #fff2dd;
}
.tip {
  margin: 7px 0 0;
  font-size: 10.5px;
  line-height: 1.6;
  color: var(--ink-2);
}
.price-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.price-row button {
  width: 44px;
  height: 34px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: #fffdf8;
  color: var(--caramel);
  font-size: 13px;
  cursor: pointer;
}
.price-row input {
  flex: 1 1 0;
  min-width: 0;
  height: 34px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: var(--caramel);
  border: 1px solid var(--line);
  border-radius: 9px;
  background: #fffdf8;
}
.op {
  width: 100%;
  height: 46px;
  border: 1px solid rgba(255, 250, 242, 0.7);
  border-radius: 13px;
  background: rgba(255, 250, 242, 0.94);
  color: var(--caramel);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.op.primary {
  background: linear-gradient(180deg, #8a6244, #6b4a34);
  color: #fff8ee;
}
.msg {
  margin: 0;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255, 246, 232, 0.96);
  color: var(--berry);
  font-size: 12px;
  line-height: 1.6;
}
.empty {
  grid-column: 1 / -1;
  font-size: 12px;
  color: var(--ink-2);
  text-align: center;
  padding: 10px 0;
}

.play {
  bottom: 16px;
  gap: 12px;
}
.cust {
  align-self: flex-start;
  width: 74%;
  max-width: 280px;
}
.tag {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(107, 74, 52, 0.74);
  color: #fffaf2;
  font-size: 11px;
}
.bubble {
  margin-top: 6px;
  padding: 11px 13px;
  border-radius: 14px 14px 14px 4px;
  background: rgba(255, 252, 247, 0.96);
  box-shadow: 0 8px 20px rgba(52, 32, 18, 0.22);
  font-size: 13px;
  line-height: 1.7;
  color: var(--caramel);
}
.menu-card {
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(255, 251, 244, 0.95);
  text-align: center;
  box-shadow: 0 6px 18px rgba(52, 32, 18, 0.16);
}
.m1 {
  font-size: 14px;
  font-weight: 700;
  color: var(--caramel);
}
.m2 {
  font-size: 12.5px;
  color: var(--ink-2);
  margin-top: 2px;
}
.m3 {
  font-size: 11.5px;
  color: var(--berry);
  margin-top: 5px;
}
.result {
  bottom: 18px;
  padding: 16px;
  border-radius: 16px;
  background: #fffaf2;
}
.result h3 {
  margin: 0 0 10px;
  font-size: 16px;
  color: var(--caramel);
}
.row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 4px 0;
  color: var(--ink-2);
}
.say {
  margin: 10px 0 12px;
  font-size: 12.5px;
  line-height: 1.7;
  color: var(--caramel);
}
</style>
