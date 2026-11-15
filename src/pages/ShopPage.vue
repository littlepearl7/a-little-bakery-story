<script setup>
import { computed, ref } from 'vue';
import { art, artStatus, productById } from '../data';
import {
  state, openShop, closeDay, takeOrder, DAYS_PER_MONTH, monthFixedCost,
  LEFTOVER_MODES, actionInfo, doAction, customersToday,
} from '../store';

const emit = defineEmits(['closed', 'open-panel']);
const notice = ref('');
const shelfTotal = computed(() => Object.values(state.shelf || {}).reduce((sum, qty) => sum + qty, 0));
const appointmentOrders = computed(() => state.orders);
const regularVisits = computed(() => customersToday());
const feedbackInfo = computed(() => actionInfo('feedback'));
const leftoverDescriptions = { discount: '整理并打折售出', staff: '留给一起工作的伙伴', share: '分享给街坊邻居', waste: '妥善报损处理' };

function begin() {
  if (!shelfTotal.value) {
    notice.value = '展示柜还是空的，先去后厨制作蛋糕。';
    return;
  }
  if (openShop()) emit('open-panel', 'game:delivery');
}

function hearFeedback() {
  if (state.dayPhase !== 'prep' || state.ap < feedbackInfo.value.ap || feedbackInfo.value.disabled) {
    notice.value = feedbackInfo.value.note;
    return;
  }
  notice.value = doAction('feedback', {}) ? '谢谢你把顾客的意见认真记了下来。' : '现在无法收集反馈。';
}

function finish(mode) {
  const report = closeDay(mode);
  if (report) emit('closed', report);
}
</script>

<template>
  <div>
    <div class="card card-pad">
      <div class="between"><div><div class="h2" style="margin:0">柜台营业</div><div class="small muted">{{ state.month }} 月 · 第 {{ state.day }}/{{ DAYS_PER_MONTH }} 个经营日</div></div><span class="chip">口碑 {{ Math.round(state.reputation) }}</span></div>
      <img v-if="artStatus('bg-counter.webp') === 'ok'" class="counter-art" :src="art('bg-counter.webp')" alt="林记烘焙营业柜台" />
      <div class="counter-stats small muted"><span>待售 {{ shelfTotal }} 个</span><span>预约 {{ appointmentOrders.length }} 笔</span><span>今日收入 ¥{{ state.dayRev.toLocaleString() }}</span></div>
      <div v-if="state.dayPhase === 'service-ready'" class="small muted">蛋糕已经摆进展示柜，准备好就开门接待。</div>
      <button v-if="state.dayPhase === 'prep'" class="btn block" style="margin-top:9px" type="button" :disabled="feedbackInfo.disabled || state.ap < feedbackInfo.ap" @click="hearFeedback">顾客反馈 · {{ feedbackInfo.note }}</button>
      <div v-if="state.dayPhase === 'prep' && regularVisits.length" class="small regular-visit"><strong>今日常客来访</strong><span v-for="customer in regularVisits" :key="customer.id">{{ customer.name }} · 想买{{ productById(customer.product).name }}</span></div>
      <div v-if="state.dayPhase === 'prep' && state.challenge" class="small regular-visit"><strong>今日经营挑战</strong><span>{{ state.challenge.type === 'stock' ? '精准备货 · 剩货率不超过 10%' : state.challenge.type === 'new' ? '新品主题日 · ' + productById(state.challenge.target).name + ' 销售至少 3 份' : '定制专场 · 完成当天定制要求' }}</span></div>
      <button v-if="state.dayPhase === 'service-ready'" class="btn primary block" style="margin-top:10px" type="button" @click="begin">开门营业 · 开始接待</button>
      <button v-if="state.dayPhase === 'service'" class="btn primary block" style="margin-top:10px" type="button" @click="emit('open-panel', 'game:delivery')">继续全屏订单交付</button>
      <button v-if="state.dayPhase === 'prep' && !shelfTotal" class="btn block" style="margin-top:10px" type="button" disabled>先去后厨制作蛋糕</button>
    </div>

    <div v-if="state.dayPhase === 'prep' && appointmentOrders.length" class="card card-pad section-card">
      <div class="h2">今日预约</div>
      <div v-for="order in appointmentOrders" :key="order.id" class="order-row">
        <div><strong>{{ order.customer }} · {{ productById(order.product).name }} ×{{ order.qty }}</strong><div class="small muted">{{ order.type === '定制' ? '装饰：' + order.due + ' · 祝福：' + order.blessing + ' · ' : '' }}预计收入 ¥{{ order.pay }}</div></div>
        <button class="btn" type="button" :disabled="order.taken" @click="takeOrder(order.id)">{{ order.taken ? '已接单' : '接下预约' }}</button>
      </div>
      <p class="small muted">接下的预约会在营业队列中优先出现。</p>
    </div>

    <div v-if="state.dayPhase === 'service'" class="card card-pad section-card small muted">顾客正在等待。请进入全屏订单交付继续营业；离开交付页面时，耐心计时会暂停。</div>

    <div v-if="state.dayPhase === 'closing'" class="card card-pad section-card">
      <div class="h2">今日接待完成</div>
      <div class="between small"><span class="muted">营业结果</span><span>{{ state.daySold }} 个蛋糕 · ¥{{ state.dayRev.toLocaleString() }} 已到账</span></div>
      <div v-if="shelfTotal" class="leftovers">
        <div class="small muted">选择剩余成品的处理方式</div>
        <button v-for="(mode,key) in LEFTOVER_MODES" :key="key" class="leftover-button" type="button" @click="finish(key)">{{ mode.label }}<span>{{ leftoverDescriptions[key] }}</span></button>
      </div>
      <button v-else class="btn primary block" style="margin-top:10px" type="button" @click="finish('waste')">打烊，进入下一经营日</button>
    </div>

    <p v-if="notice" class="small notice" role="status">{{ notice }}</p>
    <div class="card card-pad section-card small muted"><div>本月固定成本 ¥{{ monthFixedCost }}</div><div style="margin-top:4px">顾客超时会影响口碑，完成订单仍按原价结算。</div></div>
  </div>
</template>

<style scoped>
.counter-stats{display:flex;justify-content:space-between;gap:5px;margin:10px 0}.counter-art{display:block;width:100%;height:110px;margin-top:8px;border-radius:10px;object-fit:cover;object-position:center 62%}.section-card{margin-top:10px}.order-row{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:9px 0;border-top:1px solid var(--line-soft)}.order-row strong{font-size:12px}.regular-visit{display:grid;gap:2px;margin-top:8px;padding:8px;border-radius:9px;background:#fff8ec}.regular-visit strong{color:var(--caramel)}.leftovers{margin-top:10px}.leftover-button{width:100%;min-height:44px;margin-top:5px;text-align:left;padding:8px 10px;border:1px solid var(--line-soft);border-radius:9px;background:var(--paper);color:var(--caramel)}.leftover-button span{display:block;margin-top:2px;font-size:10px;color:var(--ink-2)}.notice{padding:8px;background:#fff8ec;border-radius:8px}
</style>
