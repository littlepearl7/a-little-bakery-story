<script setup>
/**
 * 小镇市集：把今天做好的蛋糕带到摊位上卖。
 * 顾客一位位来，点对商品就成交；点错或跳过会算一次失误。
 */
import { computed, onMounted, ref } from 'vue';
import { art, artStatus, productById } from '../../data';
import {
  state, priceOf, marketDemand, serveMarketCustomer, leaveMarketCustomer, startMarketGame,
} from '../../store';
import MiniShell from './MiniShell.vue';

const emit = defineEmits(['exit']);

const msg = ref('');
const tick = ref(0); // 用来触发重算
const phase = ref('loading'); // loading | play | result

const run = computed(() => {
  void tick.value;
  return state.marketRun;
});
const demand = computed(() => {
  void tick.value;
  return marketDemand();
});
const total = computed(() => (run.value ? run.value.demands.length : 0));
const done = computed(() => (run.value ? run.value.customerIndex : 0));

/** 带去市集的商品，按剩余库存显示 */
const goods = computed(() => {
  void tick.value;
  const inv = (run.value && run.value.inventory) || {};
  return Object.keys(inv)
    .filter((id) => (state.shelf[id] || 0) > 0)
    .map((id) => ({
      id,
      name: productById(id).name,
      price: priceOf(id),
      left: state.shelf[id] || 0,
    }));
});

const cakeArt = (id) => (artStatus('cake-' + id + '.webp') === 'ok' ? art('cake-' + id + '.webp') : '');

function begin() {
  const r = startMarketGame();
  if (!r.ok) {
    msg.value = r.message;
    phase.value = 'result';
    return;
  }
  phase.value = 'play';
  tick.value += 1;
}

function sell(id) {
  const r = serveMarketCustomer(id);
  msg.value = r.message || '';
  tick.value += 1;
  if (state.marketRun && state.marketRun.completed) phase.value = 'result';
}

function skip() {
  leaveMarketCustomer();
  msg.value = '这位客人去了别家摊位。';
  tick.value += 1;
  if (state.marketRun && state.marketRun.completed) phase.value = 'result';
}

const rating = computed(() => {
  const r = run.value;
  if (!r) return '';
  const rate = total.value ? r.score / total.value : 0;
  if (rate >= 0.9) return '摊位前排起了小队，今天算是打了个漂亮仗';
  if (rate >= 0.6) return '卖得还行，几款招牌都被问到了';
  return '有点乱，下次记得先把货摆清楚';
});

onMounted(begin);
</script>

<template>
  <MiniShell
    bg="minigame-market"
    title="小镇市集"
    :sub="phase === 'play' ? '第 ' + (done + 1) + ' / ' + total + ' 位客人 · 已卖 ¥' + ((run && run.revenue) || 0) : '林记摊位'"
  >
    <!-- 顾客 -->
    <div class="cust" v-if="phase === 'play' && demand">
      <div class="tag">{{ demand.customer }}</div>
      <div class="bubble">
        我要 <b>{{ productById(demand.product).name }}</b> × {{ demand.qty }}，还有吗？
      </div>
    </div>

    <!-- 摊位商品 -->
    <div class="stand" v-if="phase === 'play'">
      <button v-for="g in goods" :key="g.id" type="button" class="item" @click="sell(g.id)">
        <img v-if="cakeArt(g.id)" :src="cakeArt(g.id)" :alt="g.name" />
        <div class="n">{{ g.name }}</div>
        <div class="p">¥{{ g.price }} · 剩 {{ g.left }}</div>
      </button>
      <div v-if="!goods.length" class="empty">摊位上没货了</div>
    </div>

    <div class="bar" v-if="phase === 'play'">
      <button class="op" type="button" @click="skip">这位客人先看看别家</button>
    </div>

    <p v-if="msg && phase === 'play'" class="msg">{{ msg }}</p>

    <!-- 结算 -->
    <div v-if="phase === 'result'" class="result">
      <h3>{{ run && run.completed ? '今天收摊了' : '还没法出摊' }}</h3>
      <template v-if="run">
        <div class="row"><span>卖出</span><span>{{ run.sold }} 份</span></div>
        <div class="row"><span>收入</span><span>¥{{ run.revenue }}</span></div>
        <div class="row"><span>错过</span><span>{{ run.misses }} 位</span></div>
        <p class="say">{{ rating }}</p>
      </template>
      <p v-else class="say">{{ msg }}</p>
      <button class="op primary" type="button" @click="emit('exit')">回店里</button>
    </div>
  </MiniShell>
</template>

<style scoped>
.cust {
  position: absolute;
  left: 14px;
  top: 13%;
  width: 62%;
  max-width: 260px;
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
  margin-top: 7px;
  padding: 12px 14px;
  border-radius: 14px 14px 14px 4px;
  background: rgba(255, 252, 247, 0.95);
  box-shadow: 0 8px 20px rgba(52, 32, 18, 0.24);
  font-size: 13px;
  line-height: 1.75;
  color: var(--caramel);
}
.bubble b {
  color: var(--berry);
}

/* 摊位桌：铺在画面中部的桌面区域 */
.stand {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 78px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 7px;
  max-height: 42%;
  overflow-y: auto;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  padding: 5px 3px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 11px;
  background: rgba(255, 252, 246, 0.9);
  box-shadow: 0 4px 12px rgba(52, 32, 18, 0.16);
  cursor: pointer;
}
.item:active {
  transform: scale(0.96);
}
.item img {
  width: 100%;
  object-fit: contain;
}
.item .n {
  font-size: 9.5px;
  color: var(--caramel);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
.item .p {
  font-size: 9px;
  color: var(--ink-2);
}
.empty {
  grid-column: 1 / -1;
  text-align: center;
  color: #fff6e6;
  font-size: 12px;
  padding: 12px 0;
}

.bar {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 14px;
}
.op {
  width: 100%;
  height: 46px;
  border: 1px solid rgba(255, 250, 242, 0.7);
  border-radius: 13px;
  background: rgba(255, 250, 242, 0.92);
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
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 70px;
  margin: 0;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255, 246, 232, 0.94);
  color: var(--caramel);
  font-size: 12px;
  line-height: 1.6;
}

.result {
  position: absolute;
  left: 16px;
  right: 16px;
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
