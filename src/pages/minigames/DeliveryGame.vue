<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { art, artStatus } from '../../data';
import {
  state, availableProducts, openShop, findCake, packOrder, advanceServiceTime,
  deliverTicket, declineTicket, selectServiceTicket, displayProductName, save,
} from '../../store';
import MiniShell from './MiniShell.vue';

const props = defineProps({ paused: { type: Boolean, default: false } });
const emit = defineEmits(['exit']);
const phase = ref('intro');
const selected = ref('');
const selectedDecoration = ref('');
const selectedBlessing = ref('');
const misses = ref(0);
const message = ref('');
const phone = ref(false);
const query = ref('');
const found = ref(null);
const checked = ref(false);
const packing = ref(false);
const packSerial = ref(0);
const packTime = ref(0);
const packLoaded = ref(false);
const packError = ref(false);
const PACK_DURATION = 3600;
const DECORATIONS = ['粉色小花', '清爽配色', '简洁裱花'];
const BLESSINGS = ['生日快乐', '愿你每天都有好心情', '把今天的甜分享给你'];
const LOOK = {
  plain: '圆形浅黄色戚风胚，外层抹薄薄的白奶油，顶端只有奶油花。',
  strawberry: '圆形白奶油蛋糕，顶部摆三颗红草莓，侧面能看到草莓果肉夹层。',
  chocolate: '深棕色圆形蛋糕，巧克力奶油抹面，顶上撒细碎的可可巧克力屑。',
  taro: '淡紫色圆蛋糕，夹着芋泥，顶端有焦糖杏仁薄脆。',
  matcha: '浅绿色茶香奶油蛋糕，顶部点缀蜜红豆颗粒。',
  mango: '金黄色圆形慕斯，顶部有芒果丁和切成薄片的芒果。',
  tiramisu: '方形蛋糕，表面深棕色可可粉，侧面白色奶酪层清晰可见。',
  fig: '白奶油蛋糕，顶部的紫红色无花果果瓣排成花形。',
  seasonal: '圆形奶油蛋糕，顶部装饰多种当季水果，颜色丰富。',
  custom: '双层圆形奶油蛋糕，有精致裱花、庆祝小牌和专属装饰。',
  festival: '红棕色奶油蛋糕，顶部布满节庆糖珠和糖花。',
  signature: '棕黄色圆形蛋糕，表层栗子奶油呈螺旋纹，撒有细小金桂。',
};

const tickets = computed(() => state.service?.tickets || []);
const current = computed(() => tickets.value.find((ticket) => ticket.id === state.service?.activeTicketId)
  || tickets.value[state.service?.current || 0]
  || null);
const ticketIndex = computed(() => tickets.value.findIndex((ticket) => ticket.id === current.value?.id));
const activeTickets = computed(() => {
  if (!state.service) return [];
  const capacity = Math.max(1, Math.min(3, state.shopLevel));
  return state.service.tickets
    .slice(state.service.current, state.service.current + capacity)
    .filter((ticket) => !['delivered', 'unavailable'].includes(ticket.status));
});
const isPickup = computed(() => current.value?.kind === 'appointment');
const shelf = computed(() => availableProducts.value.map((product) => ({
  ...product,
  qty: state.shelf[product.id] || 0,
})));
const cakeArt = (id) => artStatus(`cake-${id}.webp`) === 'ok' ? art(`cake-${id}.webp`) : '';
const deliveredTickets = computed(() => tickets.value.filter((ticket) => ticket.status === 'delivered'));
const steps = computed(() => deliveredTickets.value.length);
const completed = computed(() => deliveredTickets.value.reduce((sum, ticket) => sum + ticket.qty, 0));
const earned = computed(() => deliveredTickets.value.reduce((sum, ticket) => sum + Number(ticket.revenue || 0), 0));
const patiencePercent = computed(() => current.value
  ? Math.max(0, Math.min(100, current.value.remaining / Math.max(1, current.value.patience) * 100))
  : 0);
const regularDescription = computed(() => current.value
  ? LOOK[current.value.product] || `我想要一份${displayProductName(current.value.product)}。`
  : '');
const deliveryLine = computed(() => !current.value ? '' : isPickup.value
  ? `你好，我来取预订的蛋糕，订单编号是 ${current.value.orderNo}。`
  : `你好，想要这种蛋糕：${regularDescription.value} 请给我 ${current.value.qty} 份。`);
const statusLabels = {
  waiting: '等候', searching: '找货中', found: '待打包', packing: '打包中',
  ready: '待递交', delivered: '已交付', unavailable: '已结束',
};
const mainActionLabel = computed(() => {
  if (!current.value) return '';
  if (current.value.status === 'waiting') return '核对蛋糕并取货';
  if (current.value.status === 'searching') return '员工正在找货';
  if (current.value.status === 'found') return '开始打包';
  if (current.value.status === 'packing') return '继续打包动画';
  if (current.value.status === 'ready') return '递交蛋糕 · 收款';
  return '处理下一位顾客';
});

function start() {
  if (state.dayPhase === 'service-ready' && !state.service) {
    const result = openShop();
    if (!result) return message.value = '请先制作蛋糕、接好预约单，再开始柜台接待。';
  }
  if (!state.service) {
    message.value = state.dayPhase === 'closing' ? '今天营业已经结束。' : '当前不能开始营业，请先在后厨制作蛋糕。';
    return;
  }
  if (!current.value) {
    phase.value = 'result';
    return;
  }
  selectServiceTicket(current.value.id);
  phase.value = 'play';
  message.value = '根据顾客描述挑选蛋糕；预约顾客请先在手机里核对订单。';
  if (['packing', 'ready'].includes(current.value.status)) resumePacking();
}

function selectTicket(ticket) {
  if (packing.value || !selectServiceTicket(ticket.id)) return;
  selected.value = '';
  checked.value = false;
  found.value = null;
  selectedDecoration.value = '';
  selectedBlessing.value = '';
  if (['packing', 'ready'].includes(ticket.status)) resumePacking();
}

function lookup() {
  const key = query.value.trim().toUpperCase();
  found.value = tickets.value.find((ticket) => ticket.orderNo?.toUpperCase() === key) || null;
  message.value = found.value ? '订单已找到，请核对蛋糕、数量和特别要求。' : '没有找到这个编号，请核对后再试。';
  checked.value = found.value?.id === current.value?.id;
}

function pick(id) {
  if (packing.value || !current.value || current.value.status !== 'waiting') return;
  selected.value = id;
  message.value = `已选${displayProductName(id)}，柜台现有 ${state.shelf[id] || 0} 份。`;
}

function runMainAction() {
  const ticket = current.value;
  if (!ticket || packing.value) return;
  if (ticket.kind === 'appointment' && !checked.value) {
    message.value = '预约取货必须先在手机里输入订单编号并核对详情。';
    return;
  }
  if (ticket.status === 'waiting') {
    if (!selected.value) return message.value = '先从右侧展示柜选择一款蛋糕。';
    if (selected.value !== ticket.product) {
      misses.value += 1;
      selected.value = '';
      message.value = '这款蛋糕的外观或口味不符合需求，请重新看描述。';
      return;
    }
    if ((state.shelf[ticket.product] || 0) < ticket.qty) return message.value = '该款库存不足，请登记缺货结束这笔未成交订单。';
    const result = findCake(ticket.id, selected.value, ticket.qty);
    message.value = result.message;
    return;
  }
  if (ticket.status === 'searching') return message.value = '找货还在进行中，稍等片刻。';
  if (ticket.status === 'found') {
    const result = packOrder(
      ticket.id,
      ticket.type === '定制' ? selectedDecoration.value : null,
      ticket.type === '定制' ? selectedBlessing.value : null,
    );
    if (!result.ok) return message.value = result.message;
    message.value = result.message;
    resumePacking();
    return;
  }
  if (ticket.status === 'packing') return resumePacking();
  if (ticket.status === 'ready') return deliver();
  message.value = '请从当前等候队列里选择一位顾客。';
}

function resumePacking() {
  packing.value = true;
  packSerial.value += 1;
  packTime.value = 0;
  packLoaded.value = false;
  packError.value = false;
  message.value = '需要完整播放一遍打包动画，完成后才能递交。';
}

function onPackLoaded() {
  if (packing.value) packLoaded.value = true;
}

function onPackError() {
  packError.value = true;
  message.value = '打包素材加载失败，请重试。未完成动画不会交付蛋糕。';
}

function finishPack() {
  const ticket = current.value;
  if (!ticket || ticket.status !== 'ready') return;
  packing.value = false;
  packLoaded.value = false;
  const result = deliverTicket(ticket.id);
  if (!result.ok) {
    message.value = result.message;
    return;
  }
  message.value = result.message;
  selected.value = '';
  checked.value = false;
  found.value = null;
  query.value = '';
  selectedDecoration.value = '';
  selectedBlessing.value = '';
  if (!current.value) {
    state.deliveryDay = state.dayIndex;
    save();
    phase.value = 'result';
  } else {
    selectServiceTicket(current.value.id);
  }
}

function deliver() {
  const ticket = current.value;
  if (!ticket || packing.value) return;
  const result = deliverTicket(ticket.id);
  if (!result.ok) return message.value = result.message;
  message.value = result.message;
  selected.value = '';
  checked.value = false;
  found.value = null;
  query.value = '';
  if (!current.value) {
    state.deliveryDay = state.dayIndex;
    save();
    phase.value = 'result';
  } else {
    selectServiceTicket(current.value.id);
  }
}

function unavailable() {
  const ticket = current.value;
  if (!ticket || packing.value) return;
  if (declineTicket(ticket.id)) {
    misses.value += 1;
    message.value = '缺货已记录，当前订单不会扣除库存。';
    selected.value = '';
    checked.value = false;
    found.value = null;
    query.value = '';
    if (!current.value) {
      state.deliveryDay = state.dayIndex;
      save();
      phase.value = 'result';
    } else {
      selectServiceTicket(current.value.id);
    }
  }
}

let serviceClock = 0;
let lastTick = 0;
function tick() {
  const now = performance.now();
  if (phase.value !== 'play' || props.paused || document.hidden || phone.value) {
    lastTick = now;
    return;
  }
  const elapsed = lastTick ? Math.min(0.2, (now - lastTick) / 1000) : 0;
  lastTick = now;
  if (elapsed <= 0) return;
  advanceServiceTime(elapsed);
  if (packing.value && packLoaded.value && !packError.value) {
    packTime.value = Math.min(PACK_DURATION, packTime.value + elapsed * 1000);
    if (packTime.value >= PACK_DURATION && current.value?.status === 'ready') finishPack();
  }
}

watch(() => props.paused, (paused, wasPaused) => {
  if (wasPaused && !paused && packing.value) resumePacking();
});

onMounted(() => {
  lastTick = performance.now();
  serviceClock = window.setInterval(tick, 50);
});

onUnmounted(() => {
  if (serviceClock) window.clearInterval(serviceClock);
});
</script>

<template>
  <MiniShell
    bg="minigame-delivery"
    title="订单交付"
    :sub="phase === 'play' ? '已完成 ' + steps + ' / ' + tickets.length + ' 单 · 今日 ¥' + state.dayRev : '顾客点单与预约取货'"
    @exit="emit('exit')"
  >
    <div v-if="phase === 'intro'" class="game-scroll">
      <div class="game-card">
        <h3 class="game-title">接待今日顾客</h3>
        <p class="game-lead">普通客人会描述蛋糕外观，预约客人会报真实订单编号。取货、找货和打包都会推进耐心计时；离开游戏或切后台时会暂停。</p>
        <div class="game-stats">
          <span>货架现货 {{ Object.values(state.shelf).reduce((sum, qty) => sum + qty, 0) }} 份</span>
          <span>预约订单 {{ state.orders.filter((order) => order.taken).length }} 笔</span>
        </div>
        <p v-if="message" class="game-message">{{ message }}</p>
        <button class="game-btn primary" style="width:100%;margin-top:10px" type="button" @click="start">
          {{ state.service ? '继续当日营业' : '开始柜台营业' }}
        </button>
      </div>
    </div>

    <template v-if="phase === 'play' && current">
      <div v-if="activeTickets.length > 1" class="customer-queue">
        <button
          v-for="ticket in activeTickets"
          :key="ticket.id"
          class="queue-ticket"
          :class="{ active: ticket.id === current.id, unhappy: ticket.unhappy }"
          type="button"
          :disabled="packing"
          @click="selectTicket(ticket)"
        >
          <span>{{ ticket.customer }}</span>
          <small>{{ ticket.qty }} 份 · {{ statusLabels[ticket.status] }}{{ ticket.unhappy ? ' · 有些着急' : '' }}</small>
          <i><b :style="{ width: Math.max(0, ticket.remaining / Math.max(1, ticket.patience) * 100) + '%' }" /></i>
        </button>
      </div>

      <div class="customer">
        <span class="customer-name">{{ current.customer }} · {{ isPickup ? '预约取货' : '到店购买' }} · {{ ticketIndex + 1 }}/{{ tickets.length }}</span>
        <p>{{ deliveryLine }}</p>
        <div class="patience"><i :style="{ width: patiencePercent + '%' }" /></div>
        <small>{{ current.unhappy ? '顾客有点着急，但仍会等你' : '耐心倒计时' }} · {{ Math.ceil(current.remaining) }} 秒</small>
      </div>

      <div class="case">
        <button
          v-for="product in shelf"
          :key="product.id"
          class="cake-cell"
          :class="{ active: selected === product.id, empty: product.qty < current.qty }"
          type="button"
          :disabled="packing || current.status !== 'waiting'"
          @click="pick(product.id)"
        >
          <img v-if="cakeArt(product.id)" :src="cakeArt(product.id)" :alt="product.name" />
          <span>{{ displayProductName(product.id) }}</span>
          <small>{{ product.qty < current.qty ? '缺货' : '剩 ' + product.qty }}</small>
        </button>
      </div>

      <div class="delivery-bar game-card">
        <div class="game-row">
          <span>当前需求 {{ current.qty }} 份</span>
          <span>{{ selected ? displayProductName(selected) : '请选择展示柜蛋糕' }}</span>
        </div>

        <div v-if="current.status === 'searching'" class="game-lead">
          {{ state.staffAssignments.picker ? '员工正在找蛋糕' : '正在核对展示柜' }} · 还需 {{ Math.ceil(current.findRemaining || 0) }} 秒
        </div>
        <div v-if="current.status === 'found' && current.type === '定制'" class="custom-options">
          <div class="game-section">预约要求 · 装饰：{{ current.due }} · 祝福：{{ current.blessing }}</div>
          <div class="choice-grid">
            <button v-for="item in DECORATIONS" :key="item" class="game-btn" :class="{ selected: selectedDecoration === item }" type="button" @click="selectedDecoration = item">{{ item }}</button>
          </div>
          <div class="choice-grid">
            <button v-for="item in BLESSINGS" :key="item" class="game-btn" :class="{ selected: selectedBlessing === item }" type="button" @click="selectedBlessing = item">{{ item }}</button>
          </div>
        </div>

        <p v-if="message" class="game-message" role="status">{{ message }}</p>
        <div class="game-grid">
          <button class="game-btn" type="button" :disabled="packing" @click="phone = true">📱 手机订单</button>
          <button class="game-btn" type="button" :disabled="packing" @click="unavailable">登记缺货</button>
          <button class="game-btn primary" type="button" :disabled="packing || current.status === 'searching'" @click="runMainAction">
            {{ mainActionLabel }}
          </button>
        </div>
      </div>
    </template>

    <div v-if="phone" class="phone-backdrop" @click.self="phone = false">
      <section class="phone-screen game-card">
        <div class="game-row">
          <h3 class="game-title">📱 手机 · 订单详情</h3>
          <button class="game-btn" type="button" @click="phone = false">返回柜台</button>
        </div>
        <div class="game-row">
          <input v-model="query" class="order-input" type="search" placeholder="输入预约订单编号" @keyup.enter="lookup" />
          <button class="game-btn primary" type="button" @click="lookup">查询</button>
        </div>
        <div v-if="found" class="order-detail">
          <b>{{ found.orderNo }} · {{ found.customer }}</b>
          <p>蛋糕：{{ displayProductName(found.product) }} × {{ found.qty }}</p>
          <p>外观：{{ LOOK[found.product] || '按该产品图鉴所示制作' }}</p>
          <p>规格：{{ found.qty }} 份 · {{ found.type }}</p>
          <p>装饰：{{ found.due || '按标准配方' }}</p>
          <p>祝福：{{ found.blessing || '无' }}</p>
          <p>取货：第 {{ state.month }} 月第 {{ state.day }} 日</p>
          <p>状态：{{ statusLabels[found.status] || found.status }}</p>
        </div>
        <div class="game-section">当日预约单</div>
        <div v-for="ticket in tickets.filter((item) => item.kind === 'appointment')" :key="ticket.id" class="order-list">
          <span>{{ ticket.orderNo }} · {{ ticket.customer }}</span>
          <span>{{ statusLabels[ticket.status] || ticket.status }}</span>
        </div>
        <p class="game-lead">核对当前顾客的预约单后，回到柜台选取蛋糕。</p>
      </section>
    </div>

    <div v-if="packing" class="packing-mask">
      <div class="game-card pack-card">
        <h3 class="game-title">蛋糕正在打包……</h3>
        <img :key="packSerial" :src="art('minigame-packing.gif') + '?once=' + packSerial" alt="草莓蛋糕完整打包动画" @load="onPackLoaded" @error="onPackError" />
        <div class="game-progress"><i :style="{ width: Math.round(packTime / PACK_DURATION * 100) + '%' }" /></div>
        <p class="game-lead game-center">
          {{ packError ? '动画加载失败，暂不交付。' : packLoaded ? (Math.max(0, PACK_DURATION - packTime) / 1000).toFixed(1) + ' 秒 · 完整播放一遍后递交' : '正在加载打包动画……' }}
        </p>
        <button v-if="packError" class="game-btn" style="width:100%" type="button" @click="resumePacking">重新加载动画</button>
      </div>
    </div>

    <div v-if="phase === 'result'" class="game-scroll">
      <div class="game-card">
        <h3 class="game-title">今日柜台结算</h3>
        <div class="game-stats">
          <span>完成交付 {{ completed }} 份</span>
          <span>本局收入 ¥{{ earned }}</span>
          <span>选错／缺货 {{ misses }} 次</span>
          <span>订单完成 {{ steps }} / {{ tickets.length }}</span>
        </div>
        <p class="game-lead">交付和缺货处理均已记入经营数据。已完成订单不会因刷新重复结算。</p>
        <button class="game-btn primary" style="width:100%" type="button" @click="emit('exit')">返回蛋糕店</button>
      </div>
    </div>
  </MiniShell>
</template>

<style scoped>
.customer-queue{position:absolute;left:10px;right:10px;top:7%;z-index:6;display:flex;gap:5px;overflow-x:auto;max-width:100%;padding:2px}.queue-ticket{flex:0 0 96px;min-width:96px;min-height:48px;padding:5px 7px;border:1px solid #fffaf2a6;border-radius:9px;background:#fffaf2e8;color:#6b4a34;text-align:left}.queue-ticket.active{outline:2px solid #a9b99b}.queue-ticket.unhappy{border-color:#d95b67}.queue-ticket>span,.queue-ticket small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px}.queue-ticket small{font-size:9px;color:#8c6a50}.queue-ticket i{display:block;height:4px;margin-top:4px;border-radius:99px;background:#eadbca;overflow:hidden}.queue-ticket i b{display:block;height:100%;background:#a9b99b}.customer{position:absolute;left:12px;top:16%;width:57%;max-width:260px;animation:enter .35s ease both}.customer-name{font-size:11px;border-radius:99px;background:#6b4a34d9;color:#fffaf2;padding:5px 10px}.customer p{background:#fffaf2f5;border-radius:12px;padding:10px 12px;box-shadow:0 6px 18px #35241638;font-size:12px;line-height:1.65;color:#6b4a34}.customer small{display:block;text-align:right;color:#fffaf2;text-shadow:0 1px 4px #382719;font-size:9px}.patience{height:6px;margin:5px 0;border-radius:99px;background:#eadbca;overflow:hidden}.patience i{display:block;height:100%;background:#a9b99b;transition:width .15s linear}.case{position:absolute;left:61%;right:2%;top:17%;height:44%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px;overflow-y:auto;align-content:start}.cake-cell{min-width:0;min-height:78px;padding:4px 2px;border:1px solid #fffaf2b0;border-radius:9px;background:#fffaf2df;display:grid;justify-items:center;align-content:center;color:#6b4a34;cursor:pointer}.cake-cell.active{outline:2px solid #a9b99b}.cake-cell.empty{opacity:.5}.cake-cell:disabled{cursor:default}.cake-cell img{width:44px;height:42px;object-fit:contain}.cake-cell span{font-size:9px;text-align:center;line-height:1.3}.cake-cell small{font-size:8px;color:#8c6a50}.delivery-bar{position:absolute;left:8px;right:8px;bottom:8px;max-height:42%;overflow:auto;background:#fffaf2f5}.delivery-bar .game-row{font-size:11px}.delivery-bar .game-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:5px;margin-top:7px}.delivery-bar .game-btn{min-width:0;min-height:42px;padding:5px;font-size:10px}.custom-options{margin-top:5px}.custom-options .game-section{font-size:10px}.choice-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px;margin-top:5px}.choice-grid .game-btn{min-height:38px;padding:3px;font-size:9px}.choice-grid .game-btn.selected{background:#a9b99b;color:#fff}.delivery-bar .game-message{margin:4px 0;font-size:10px}.phone-backdrop,.packing-mask{position:absolute;inset:0;z-index:15;display:flex;align-items:center;justify-content:center;padding:14px;background:#352416a6}.phone-screen{width:100%;max-width:400px;max-height:87%;overflow-y:auto}.phone-screen .game-row{gap:5px}.order-input{flex:1;min-width:0;height:44px;padding:5px 9px;border:1px solid #d5b99e;border-radius:9px;font-size:13px}.order-detail{margin-top:10px;padding:10px;border-radius:10px;background:#fffaf2;color:#6b4a34;font-size:12px}.order-detail p{margin:4px 0;line-height:1.6}.order-list{display:flex;justify-content:space-between;gap:8px;padding:7px 0;border-top:1px solid #eadbca;font-size:10px;color:#6b4a34}.pack-card{width:min(88vw,350px);text-align:center}.pack-card img{display:block;width:100%;max-height:270px;object-fit:contain}.game-center{text-align:center}.game-message{white-space:normal;line-height:1.5}@keyframes enter{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}
</style>
