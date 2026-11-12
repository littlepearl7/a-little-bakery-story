<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { art, artStatus, productById } from '../data';
import {
  state, availableProducts, openShop, closeDay, takeOrder, DAYS_PER_MONTH, monthFixedCost,
  LEFTOVER_MODES, advanceServiceTime, findCake, packOrder, deliverTicket, declineTicket,
  canAutomateService, selectServiceTicket, actionInfo, doAction, customersToday,
} from '../store';
import CakeArt from '../components/CakeArt.vue';

const props = defineProps({ paused: { type: Boolean, default: false } });
const emit = defineEmits(['closed']);
const notice = ref('');
const selectedDecoration = ref('');
const selectedBlessing = ref('');
let clock = 0;
const tickets = computed(() => state.service?.tickets || []);
const ticket = computed(() => tickets.value[state.service?.current || 0] || null);
const activeTickets = computed(() => state.service ? state.service.tickets.slice(state.service.current, state.service.current + Math.max(1, Math.min(3, state.shopLevel))).filter((row) => !['delivered', 'unavailable'].includes(row.status)) : []);
const currentTicket = computed(() => activeTickets.value.find((row) => row.id === state.service?.activeTicketId) || activeTickets.value[0] || ticket.value);
const ticketIndex = computed(() => tickets.value.findIndex((row) => row.id === currentTicket.value?.id));
const shelfTotal = computed(() => Object.values(state.shelf || {}).reduce((sum, qty) => sum + qty, 0));
const shelfProducts = computed(() => availableProducts.value.filter((product) => (state.shelf[product.id] || 0) > 0));
const appointmentOrders = computed(() => state.orders);
const days = computed(() => state.day);
const regularVisits = computed(() => customersToday());
const feedbackInfo = computed(() => actionInfo('feedback'));
const ticketPercent = computed(() => currentTicket.value ? Math.max(0, Math.min(100, currentTicket.value.remaining / Math.max(1, currentTicket.value.patience || currentTicket.value.remaining) * 100)) : 0);

function begin() {
  if (!shelfTotal.value) return say('展示柜还是空的，先去后厨制作蛋糕。');
  const started = openShop();
  if (started) say(started.customers + ' 位顾客陆续来到柜台。');
}

function chooseCake(product) {
  if (!currentTicket.value) return;
  const result = findCake(currentTicket.value.id, product.id, currentTicket.value.qty);
  say(result.message);
}

function beginPack() {
  if (!currentTicket.value) return;
  const result = packOrder(currentTicket.value.id, selectedDecoration.value || null, selectedBlessing.value || null);
  say(result.message);
}

function deliver() {
  if (!currentTicket.value) return;
  say(deliverTicket(currentTicket.value.id).message);
  selectedDecoration.value = '';
  selectedBlessing.value = '';
}

function turnAway() {
  if (!currentTicket.value) return;
  declineTicket(currentTicket.value.id);
  say('今天这款已经售罄，订单没有成交。');
}

function selectTicket(row) {
  selectServiceTicket(row.id);
  selectedDecoration.value = row.decoration || '';
  selectedBlessing.value = row.packedBlessing || '';
}

function statusName(status) {
  return ({ waiting: '等候', searching: '找货', found: '待打包', packing: '打包中', ready: '待递交' })[status] || status;
}

function guestAvatar(row) {
  if (row.customer === '陈奶奶') return 'customer-chen.webp';
  if (row.customer === '张叔') return 'customer-zhang.webp';
  if (row.kind === 'appointment') return 'customer-custom.webp';
  const index = Math.max(1, (Number(row.id.match(/(\d+)$/)?.[1] || 0) % 5) + 1);
  return 'customer-guest-' + index + '.webp';
}

function hearFeedback() {
  if (state.dayPhase !== 'prep' || state.ap < feedbackInfo.value.ap || feedbackInfo.value.disabled) return say(feedbackInfo.value.note);
  say(doAction('feedback', {}) ? '顾客反馈已记下，口碑 +1。' : '现在无法收集反馈。');
}

function finish(mode) {
  const report = closeDay(mode);
  if (!report) return;
  emit('closed', report);
}

function say(text) {
  notice.value = text;
}

function tick() {
  if (!props.paused && !document.hidden && state.dayPhase === 'service') advanceServiceTime(0.1);
}

watch(() => state.dayPhase, (phase) => {
  if (phase === 'service' && !clock) clock = window.setInterval(tick, 100);
  if (phase !== 'service' && clock) { clearInterval(clock); clock = 0; }
}, { immediate: true });
watch(() => props.paused, (paused) => { if (paused) notice.value = ''; });
onBeforeUnmount(() => { if (clock) clearInterval(clock); });
</script>

<template>
  <div>
    <div class="card card-pad">
      <div class="between"><div><div class="h2" style="margin:0">柜台营业</div><div class="small muted">{{ state.month }} 月 · 第 {{ days }}/{{ DAYS_PER_MONTH }} 个经营日</div></div><span class="chip">口碑 {{ Math.round(state.reputation) }}</span></div>
      <img v-if="artStatus('bg-counter.webp') === 'ok'" class="counter-art" :src="art('bg-counter.webp')" alt="林记烘焙营业柜台" />
      <div class="counter-stats small muted"><span>待售 {{ shelfTotal }} 个</span><span>预约 {{ appointmentOrders.length }} 笔</span><span>今日收入 ¥{{ state.dayRev }}</span></div>
      <div v-if="state.dayPhase === 'service-ready'" class="small muted">蛋糕已经摆进展示柜，准备好就开门接待。</div>
      <button v-if="state.dayPhase === 'prep'" class="btn block" style="margin-top:9px" type="button" :disabled="feedbackInfo.disabled || state.ap < feedbackInfo.ap" @click="hearFeedback">顾客反馈 · {{ feedbackInfo.note }}</button>
      <div v-if="state.dayPhase === 'prep' && regularVisits.length" class="small regular-visit"><strong>今日常客来访</strong><span v-for="customer in regularVisits" :key="customer.id">{{ customer.name }} · 想买{{ productById(customer.product).name }}</span></div>
      <div v-if="state.dayPhase === 'prep' && state.challenge" class="small regular-visit"><strong>今日经营挑战</strong><span>{{ state.challenge.type === 'stock' ? '精准备货 · 剩货率不超过 10%' : state.challenge.type === 'new' ? '新品主题日 · ' + productById(state.challenge.target).name + ' 销售至少 3 份' : '定制专场 · 完成当天定制要求' }}</span></div>
      <button v-if="state.dayPhase === 'service-ready'" class="btn primary block" style="margin-top:10px" type="button" @click="begin">开门营业</button>
      <button v-if="state.dayPhase === 'prep' && !shelfTotal" class="btn block" style="margin-top:10px" type="button" disabled>先去后厨制作蛋糕</button>
    </div>

    <div v-if="state.dayPhase === 'prep' && appointmentOrders.length" class="card card-pad section-card">
      <div class="h2">今日预约</div>
      <div v-for="order in appointmentOrders" :key="order.id" class="order-row">
        <div><strong>{{ order.customer }} · {{ productById(order.product).name }} ×{{ order.qty }}</strong><div class="small muted">{{ order.type === '定制' ? '要求：' + order.due + ' · 祝福：' + order.blessing + ' · ' : '' }}预计收入 ¥{{ order.pay }}</div></div>
        <button class="btn" type="button" @click="takeOrder(order.id)">{{ order.taken ? '已接' : '接单' }}</button>
      </div>
      <p class="small muted">先接下的预约会在营业队列中优先出现。没有接的预约不会加入今天的营业。</p>
    </div>

    <div v-if="state.dayPhase === 'service' && activeTickets.length > 1" class="active-queue card card-pad">
      <div class="small muted">正在等候 · 最多同时接待 {{ Math.min(3, state.shopLevel) }} 位</div>
      <button v-for="row in activeTickets" :key="row.id" class="queue-guest" :class="{ chosen: row.id === currentTicket?.id, unhappy: row.unhappy }" type="button" @click="selectTicket(row)">
        <span class="guest-face"><img v-if="artStatus(guestAvatar(row)) === 'ok'" :src="art(guestAvatar(row))" alt="" /><b v-else>{{ row.customer.slice(0, 1) }}</b></span>
        <span><strong>{{ row.customer }}</strong><small>{{ row.qty }} 个 · {{ statusName(row.status) }}{{ row.unhappy ? ' · 着急了' : '' }}</small></span>
        <i class="mini-patience"><b :style="{ width: Math.max(0, row.remaining / Math.max(1, row.patience) * 100) + '%' }"></b></i>
      </button>
    </div>

    <div v-if="state.dayPhase === 'service' && currentTicket" class="service-card">
      <div class="card card-pad customer-card">
        <div class="between"><div><div class="h2" style="margin:0">{{ currentTicket.customer }}</div><div class="small muted">{{ currentTicket.type }} · 想买 {{ currentTicket.qty }} 个</div></div><span class="chip">{{ ticketIndex + 1 }}/{{ tickets.length }}</span></div>
        <p class="customer-clue">“{{ currentTicket.clue || ('我想要一份' + productById(currentTicket.product).name + '。') }}”</p>
        <div class="patience"><span :style="{ width: ticketPercent + '%', background: ticketPercent < 33 ? 'var(--berry)' : 'var(--sage)' }"></span></div>
        <div class="small muted between"><span>{{ currentTicket.unhappy ? '顾客有点着急，但仍会等你' : '耐心倒计时' }}</span><span>{{ Math.ceil(currentTicket.remaining) }} 秒</span></div>
      </div>

      <div v-if="currentTicket.status === 'waiting'" class="card card-pad section-card">
        <div class="h2">从展示柜找蛋糕</div>
        <div v-if="!shelfProducts.length" class="small muted">展示柜已经售罄。</div>
        <button v-for="product in shelfProducts" :key="product.id" class="cake-pick" type="button" @click="chooseCake(product)">
          <span class="cake-thumb"><CakeArt :id="product.id" :colors="product.colors" /></span>
          <span class="cake-pick-copy"><strong>{{ product.name }}</strong><span>柜中 {{ state.shelf[product.id] }} 个</span></span>
          <span>找 ×{{ currentTicket.qty }} →</span>
        </button>
        <button v-if="!shelfProducts.some((product) => product.id === currentTicket.product && state.shelf[product.id] >= currentTicket.qty)" class="btn block" type="button" @click="turnAway">告知售罄，结束这笔未成交订单</button>
      </div>

      <div v-else-if="currentTicket.status === 'searching'" class="card card-pad section-card process-status">
        <div class="h2">{{ state.staffAssignments.picker ? '员工正在找蛋糕' : '在展示柜里找蛋糕…' }}</div><p class="small muted">{{ Math.ceil(currentTicket.findRemaining || 0) }} 秒后取出。</p>
      </div>

      <div v-else-if="currentTicket.status === 'found'" class="card card-pad section-card">
        <div class="h2">蛋糕找到了，开始打包</div>
        <div class="small muted">{{ productById(currentTicket.product).name }} ×{{ currentTicket.qty }} · 包装约 {{ 2 + currentTicket.qty }} 秒</div>
        <div v-if="currentTicket.type === '定制'" class="decoration-options"><div class="small muted">预约装饰：{{ currentTicket.due }}</div><button v-for="option in ['粉色小花','清爽配色','简洁裱花']" :key="option" class="pill" :class="{ chosen: selectedDecoration === option }" type="button" @click="selectedDecoration = option">{{ option }}</button><div class="small muted" style="margin-top:7px">祝福语：{{ currentTicket.blessing }}</div><button v-for="option in ['生日快乐','愿你每天都有好心情','把今天的甜分享给你']" :key="option" class="pill" :class="{ chosen: selectedBlessing === option }" type="button" @click="selectedBlessing = option">{{ option }}</button></div>
        <button class="btn primary block" style="margin-top:10px" type="button" :disabled="currentTicket.type === '定制' && (!selectedDecoration || !selectedBlessing)" @click="beginPack">开始打包</button>
      </div>

      <div v-else-if="currentTicket.status === 'packing'" class="card card-pad section-card process-status">
        <div class="h2">{{ state.staffAssignments.packer ? '员工正在打包' : '正在打包蛋糕…' }}</div><div class="small muted">还需 {{ Math.ceil(currentTicket.packRemaining || 0) }} 秒</div><div class="patience"><span class="pack-progress" :style="{ width: (100 - (currentTicket.packRemaining / (2 + currentTicket.qty) * 100)) + '%' }"></span></div>
      </div>

      <div v-else-if="currentTicket.status === 'ready'" class="card card-pad section-card">
        <div class="h2">包装好了</div><div class="small muted">顾客还在等，递给 {{ currentTicket.customer }}。</div><button class="btn primary block" style="margin-top:10px" type="button" @click="deliver">递交蛋糕 · 收款</button>
      </div>
    </div>

    <div v-if="state.dayPhase === 'service' && currentTicket && canAutomateService()" class="card card-pad section-card">
      <div class="h2">员工营业协作</div><div class="small muted">{{ state.staffAssignments.auto ? '员工自动完成找蛋糕、打包和交付。' : '员工可分担找蛋糕和打包；你来负责递交。' }}</div>
    </div>

    <div v-if="state.dayPhase === 'closing'" class="card card-pad section-card">
      <div class="h2">今日接待完成</div>
      <div class="between small"><span class="muted">完成订单</span><span>{{ state.daySold }} 个蛋糕 · ¥{{ state.dayRev }} 已到账</span></div>
      <div v-if="shelfTotal" class="leftovers"><div class="small muted">剩下的蛋糕怎么处理？</div><button v-for="(mode,key) in LEFTOVER_MODES" :key="key" class="leftover-button" type="button" @click="finish(key)">{{ mode.label }}<span>{{ mode.cashRate ? ' · 回收部分成本' : mode.community ? ' · 社区好感 +' + mode.community : '' }}</span></button></div>
      <button v-else class="btn primary block" style="margin-top:10px" type="button" @click="finish('waste')">打烊，进入下一经营日</button>
    </div>

    <p v-if="notice" class="small notice" role="status">{{ notice }}</p>
    <div class="card card-pad section-card small muted"><div>本月固定成本 ¥{{ monthFixedCost }}</div><div style="margin-top:4px">顾客超时只影响口碑，不影响成交收入；切到其他页面或后台时倒计时暂停。</div></div>
  </div>
</template>

<style scoped>
.counter-stats{display:flex;justify-content:space-between;gap:5px;margin:10px 0}.counter-art{display:block;width:100%;height:110px;margin-top:8px;border-radius:10px;object-fit:cover;object-position:center 62%}.section-card{margin-top:10px}.order-row{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:9px 0;border-top:1px solid var(--line-soft)}.order-row strong{font-size:12px}.regular-visit{display:grid;gap:2px;margin-top:8px;padding:8px;border-radius:9px;background:#fff8ec}.regular-visit strong{color:var(--caramel)}.active-queue{margin-top:10px}.queue-guest{display:flex;align-items:center;gap:10px;width:100%;min-height:50px;padding:7px 5px;border:0;border-top:1px solid var(--line-soft);background:transparent;color:var(--caramel);text-align:left}.queue-guest>span{display:grid;gap:2px;flex:1}.queue-guest>.guest-face{width:34px;height:34px;flex:0 0 34px;display:grid;place-items:center;border-radius:50%;overflow:hidden;background:var(--apricot);color:var(--caramel)}.guest-face img{width:100%;height:100%;object-fit:cover}.guest-face b{font-size:13px}.queue-guest strong{font-size:12px}.queue-guest small{font-size:10px;color:var(--ink-2)}.queue-guest.chosen{background:#fff8ec}.queue-guest.unhappy strong{color:var(--berry)}.mini-patience{height:5px;width:48px;border-radius:99px;background:#efe2d3;overflow:hidden}.mini-patience b{display:block;height:100%;background:var(--sage)}.customer-card{border:1px solid #e6c29c}.customer-clue{font-family:'Songti SC',serif;font-size:16px;line-height:1.6;color:#6b4a34;margin:10px 0}.patience{height:7px;border-radius:999px;background:#efe2d3;overflow:hidden;margin:9px 0 5px}.patience>span{display:block;height:100%;transition:width .1s linear}.pack-progress{background:var(--caramel)}.cake-pick{display:flex;align-items:center;gap:9px;width:100%;min-height:66px;padding:8px 0;border:0;border-top:1px solid var(--line-soft);background:transparent;color:var(--caramel);text-align:left;cursor:pointer}.cake-thumb{width:42px;height:42px;overflow:hidden;border-radius:9px;flex:0 0 42px}.cake-thumb :deep(*){width:100%;height:100%}.cake-pick-copy{display:flex;flex:1;flex-direction:column;gap:3px}.cake-pick-copy strong{font-size:12px}.cake-pick-copy span{font-size:10px;color:var(--ink-2)}.cake-pick>span:last-child{font-size:11px}.process-status{min-height:90px}.process-status .patience{margin-top:12px}.decoration-options{margin-top:10px}.pill{min-height:40px;padding:0 11px;margin:5px 5px 0 0;border:1px solid var(--line);border-radius:999px;background:var(--paper);color:var(--caramel);font-size:12px}.pill.chosen{background:var(--sage);color:white}.leftovers{margin-top:10px}.leftover-button{width:100%;min-height:42px;margin-top:5px;text-align:left;padding:8px 10px;border:1px solid var(--line-soft);border-radius:9px;background:var(--paper);color:var(--caramel)}.leftover-button span{font-size:10px;color:var(--ink-2)}.notice{padding:8px;background:#fff8ec;border-radius:8px}
</style>
