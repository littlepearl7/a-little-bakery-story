<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { art, artStatus } from '../../data';
import {
  state, availableProducts, openShop, findCake, completeCakeFinding, packOrder, advanceServiceTime,
  deliverTicket, declineTicket, selectServiceTicket, displayProductName, save,
} from '../../store';
import MiniShell from './MiniShell.vue';

const props = defineProps({ paused: { type: Boolean, default: false }, tutorial: { type: Boolean, default: false } });
const emit = defineEmits(['exit']);
const phase = ref('intro');
const demoTicket = ref(null);
const selected = ref('');
const selectedDecoration = ref('');
const selectedBlessing = ref('');
const misses = ref(0);
const message = ref('');
const phone = ref(false);
const query = ref('');
const orderFilter = ref('');
const inspectedOrderId = ref('');
const phoneNotice = ref('');
const packing = ref(false);
const packSerial = ref(0);
const packTime = ref(0);
const packLoaded = ref(false);
const packError = ref(false);
const packSettled = ref(false);
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

const tickets = computed(() => props.tutorial ? (demoTicket.value ? [demoTicket.value] : []) : state.service?.tickets || []);
const current = computed(() => props.tutorial
  ? demoTicket.value
  : tickets.value.find((ticket) => ticket.id === state.service?.activeTicketId)
    || tickets.value[state.service?.current || 0]
    || null);
const ticketIndex = computed(() => tickets.value.findIndex((ticket) => ticket.id === current.value?.id));
const activeTickets = computed(() => {
  if (props.tutorial) return current.value ? [current.value] : [];
  if (!state.service) return [];
  const capacity = Math.max(1, Math.min(3, state.shopLevel));
  return state.service.tickets
    .slice(state.service.current, state.service.current + capacity)
    .filter((ticket) => !['delivered', 'unavailable'].includes(ticket.status));
});
const isPickup = computed(() => current.value?.kind === 'appointment');
const shownOrders = computed(() => orderFilter.value
  ? tickets.value.filter((ticket) => ticket.orderNo?.toUpperCase() === orderFilter.value)
  : tickets.value);
const shelf = computed(() => availableProducts.value.map((product) => ({
  ...product,
  qty: props.tutorial ? (product.id === 'plain' ? 1 : 0) : state.shelf[product.id] || 0,
})).filter((product) => !props.tutorial || product.id === 'plain'));
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
  if (current.value.status === 'searching') return '完成找货';
  if (current.value.status === 'found') return '开始打包';
  if (current.value.status === 'packing') return '继续打包动画';
  if (current.value.status === 'ready') return '递交蛋糕 · 收款';
  return '处理下一位顾客';
});

function start() {
  if (props.tutorial) {
    demoTicket.value = {
      id: 'tutorial-order', kind: 'appointment', orderNo: 'LJ-DEMO', customer: '练习顾客',
      product: 'plain', qty: 1, patience: 30, remaining: 30, status: 'waiting',
      unhappy: false, type: '预约', due: '', blessing: '',
    };
    selected.value = '';
    inspectedOrderId.value = '';
    phase.value = 'play';
    message.value = '打开「手机订单」，查询顾客报的编号，或直接从列表选中对应的预约单。';
    return;
  }
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
  inspectedOrderId.value = '';
  selectedDecoration.value = '';
  selectedBlessing.value = '';
  if (['packing', 'ready'].includes(ticket.status)) resumePacking();
}

function showAllOrders() {
  query.value = '';
  orderFilter.value = '';
  phoneNotice.value = '';
}

function openOrderPhone() {
  showAllOrders();
  phone.value = true;
}

function inspectOrder(order) {
  inspectedOrderId.value = order.id;
  if (!isPickup.value) {
    phoneNotice.value = '已查看订单详情。';
  } else if (order.id === current.value.id) {
    phoneNotice.value = '订单编号已核对，记下蛋糕和份数，再返回柜台。';
  } else {
    phoneNotice.value = `这笔订单属于其他顾客。请找编号 ${current.value.orderNo}。`;
  }
  message.value = phoneNotice.value;
}

function lookup() {
  orderFilter.value = query.value.trim().toUpperCase();
  if (!orderFilter.value) {
    showAllOrders();
  } else if (shownOrders.value.length) {
    inspectOrder(shownOrders.value[0]);
  } else {
    phoneNotice.value = '没有找到这个编号。请核对后再试，或点「显示全部」查看列表。';
  }
}

function pick(id) {
  if (packing.value || !current.value || current.value.status !== 'waiting') return;
  selected.value = id;
  message.value = `已选${displayProductName(id)}，柜台现有 ${shelf.value.find((item) => item.id === id)?.qty || 0} 份。`;
}

function runMainAction() {
  const ticket = current.value;
  if (!ticket || packing.value) return;
  if (ticket.kind === 'appointment' && inspectedOrderId.value !== ticket.id) {
    message.value = '请先在手机中查询订单号，或点选列表里与顾客编号一致的订单。';
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
    if (!props.tutorial && (state.shelf[ticket.product] || 0) < ticket.qty) return message.value = '该款库存不足，请登记缺货结束这笔未成交订单。';
    if (props.tutorial) {
      ticket.status = 'found';
      message.value = '蛋糕与预约单吻合，开始打包。';
      return;
    }
    const result = findCake(ticket.id, selected.value, ticket.qty);
    message.value = result.message;
    return;
  }
  if (ticket.status === 'searching') {
    if (completeCakeFinding(ticket.id)) message.value = '已找到对应蛋糕，可以开始打包。';
    return;
  }
  if (ticket.status === 'found') {
    if (props.tutorial) {
      ticket.status = 'ready';
      resumePacking();
      return;
    }
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
  packSettled.value = false;
  message.value = '';
}

function onPackLoaded() {
  if (packing.value) packLoaded.value = true;
}

function onPackError() {
  packError.value = true;
  message.value = '';
}

function finishPack() {
  const ticket = current.value;
  if (!ticket || ticket.status !== 'ready' || packSettled.value) return;
  if (props.tutorial) {
    packSettled.value = true;
    packing.value = false;
    packLoaded.value = false;
    ticket.status = 'delivered';
    message.value = '练习订单已交付。正式营业时，库存和收入会在这一步结算。';
    phase.value = 'result';
    return;
  }
  const result = deliverTicket(ticket.id);
  if (!result.ok) {
    packing.value = false;
    packLoaded.value = false;
    message.value = result.message;
    return;
  }
  packSettled.value = true;
  packing.value = false;
  packLoaded.value = false;
  message.value = result.message;
  selected.value = '';
  inspectedOrderId.value = '';
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
  if (props.tutorial) {
    ticket.status = 'delivered';
    phase.value = 'result';
    return;
  }
  const result = deliverTicket(ticket.id);
  if (!result.ok) return message.value = result.message;
  message.value = result.message;
  selected.value = '';
  inspectedOrderId.value = '';
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
    inspectedOrderId.value = '';
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
  if (!props.tutorial) advanceServiceTime(elapsed);
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
    :sub="tutorial ? '小游戏体验 · 不消耗经营资源' : phase === 'play' ? '已完成 ' + steps + ' / ' + tickets.length + ' 单 · 今日 ¥' + state.dayRev : '顾客点单与预约取货'"
    @exit="emit('exit')"
  >
    <div v-if="phase === 'intro'" class="game-scroll">
      <div class="game-card">
        <h3 class="game-title">{{ tutorial ? '订单交付小游戏体验' : '接待今日顾客' }}</h3>
        <p class="game-lead">{{ tutorial ? '在手机里按编号查询或直接点订单，核对后从展示柜选蛋糕并打包。' : '普通客人会描述蛋糕外观，预约客人会报真实订单编号。取货、找货和打包都会推进耐心计时；离开游戏或切后台时会暂停。' }}</p>
        <div v-if="!tutorial" class="game-stats">
          <span>货架现货 {{ Object.values(state.shelf).reduce((sum, qty) => sum + qty, 0) }} 份</span>
          <span>预约订单 {{ state.orders.filter((order) => order.taken).length }} 笔</span>
        </div>
        <p v-if="message" class="game-message">{{ message }}</p>
        <button class="game-btn primary" style="width:100%;margin-top:10px" type="button" @click="start">
          {{ tutorial ? '开始订单练习' : state.service ? '继续当日营业' : '开始柜台营业' }}
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
          <button class="game-btn" type="button" :disabled="packing" @click="openOrderPhone">📱 手机订单</button>
          <button v-if="!tutorial" class="game-btn" type="button" :disabled="packing" @click="unavailable">登记缺货</button>
          <button class="game-btn primary" type="button" :disabled="packing" @click="runMainAction">
            {{ mainActionLabel }}
          </button>
        </div>
      </div>
    </template>

    <div v-if="phone" class="phone-backdrop" @click.self="phone = false">
      <section class="phone-screen game-card">
        <div class="game-row">
          <h3 class="game-title">📱 手机 · 当日订单</h3>
          <button class="game-btn" type="button" @click="phone = false">返回柜台</button>
        </div>
        <div class="game-row">
          <input v-model="query" class="order-input" type="search" aria-label="预约订单编号" placeholder="输入预约订单编号" @keyup.enter="lookup" />
          <button class="game-btn primary" type="button" @click="lookup">查询</button>
          <button v-if="orderFilter" class="game-btn" type="button" @click="showAllOrders">显示全部</button>
        </div>
        <p class="game-lead" role="status">{{ phoneNotice || '输入编号查询，或直接点选列表里的订单。' }}</p>
        <button
          v-for="ticket in shownOrders"
          :key="ticket.id"
          class="game-btn order-detail"
          :class="{ selected: inspectedOrderId === ticket.id }"
          :aria-pressed="inspectedOrderId === ticket.id"
          type="button"
          @click="inspectOrder(ticket)"
        >
          <strong>{{ ticket.orderNo || '到店单 · 无编号' }} · {{ ticket.customer }}</strong>
          <span>{{ displayProductName(ticket.product) }} × {{ ticket.qty }} · {{ ticket.type }} · {{ statusLabels[ticket.status] || ticket.status }}</span>
          <span v-if="LOOK[ticket.product]">外观：{{ LOOK[ticket.product] }}</span>
          <span>装饰：{{ ticket.due || '按标准配方' }} · 祝福：{{ ticket.blessing || '无' }}</span>
          <span>取货：第 {{ state.month }} 月第 {{ state.day }} 日<span v-if="ticket.pay"> · 报酬 ¥{{ ticket.pay }}</span></span>
        </button>
      </section>
    </div>

    <div v-if="packing" class="packing-mask">
      <div class="game-card pack-card">
        <h3 class="game-title">蛋糕正在打包……</h3>
        <img v-if="!packError" :key="packSerial" :src="art('minigame-packing.gif') + '?once=' + packSerial" alt="蛋糕打包动画" @load="onPackLoaded" @error="onPackError" />
        <template v-else>
          <p class="pack-error" role="status">打包动画加载失败</p>
          <button class="game-btn" style="width:100%" type="button" @click="resumePacking">重试</button>
        </template>
      </div>
    </div>

    <div v-if="phase === 'result'" class="game-scroll">
      <div class="game-card">
        <h3 class="game-title">{{ tutorial ? '订单练习完成' : '今日柜台结算' }}</h3>
        <div class="game-stats">
          <span>{{ tutorial ? '已体验订单核对、选货与打包' : '完成交付 ' + completed + ' 份' }}</span>
          <span>{{ tutorial ? '不影响正式经营' : '本局收入 ¥' + earned }}</span>
          <span>{{ tutorial ? '练习订单已交付' : '选错／缺货 ' + misses + ' 次' }}</span>
          <span>{{ tutorial ? '练习订单 LJ-DEMO' : '订单完成 ' + steps + ' / ' + tickets.length }}</span>
        </div>
        <p class="game-lead">{{ tutorial ? '普通顾客按外观描述选货；预约顾客先查订单号。正式交付时才会扣除成品并到账。' : '交付和缺货处理均已记入经营数据。已完成订单不会因刷新重复结算。' }}</p>
        <button class="game-btn primary" style="width:100%" type="button" @click="emit('exit')">{{ tutorial ? '完成小游戏练习' : '返回蛋糕店' }}</button>
      </div>
    </div>
  </MiniShell>
</template>

<style scoped>
.customer-queue{position:absolute;left:10px;right:10px;top:7%;z-index:6;display:flex;gap:5px;overflow-x:auto;max-width:100%;padding:2px}.queue-ticket{flex:0 0 96px;min-width:96px;min-height:48px;padding:5px 7px;border:1px solid #fffaf2a6;border-radius:9px;background:#fffaf2e8;color:#6b4a34;text-align:left}.queue-ticket.active{outline:2px solid #a9b99b}.queue-ticket.unhappy{border-color:#d95b67}.queue-ticket>span,.queue-ticket small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px}.queue-ticket small{font-size:9px;color:#8c6a50}.queue-ticket i{display:block;height:4px;margin-top:4px;border-radius:99px;background:#eadbca;overflow:hidden}.queue-ticket i b{display:block;height:100%;background:#a9b99b}.customer{position:absolute;left:12px;top:16%;width:57%;max-width:260px;animation:enter .35s ease both}.customer-name{font-size:11px;border-radius:99px;background:#6b4a34d9;color:#fffaf2;padding:5px 10px}.customer p{background:#fffaf2f5;border-radius:12px;padding:10px 12px;box-shadow:0 6px 18px #35241638;font-size:12px;line-height:1.65;color:#6b4a34}.customer small{display:block;text-align:right;color:#fffaf2;text-shadow:0 1px 4px #382719;font-size:9px}.patience{height:6px;margin:5px 0;border-radius:99px;background:#eadbca;overflow:hidden}.patience i{display:block;height:100%;background:#a9b99b;transition:width .15s linear}.case{position:absolute;left:61%;right:2%;top:17%;height:44%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px;overflow-y:auto;align-content:start}.cake-cell{min-width:0;min-height:78px;padding:4px 2px;border:1px solid #fffaf2b0;border-radius:9px;background:#fffaf2df;display:grid;justify-items:center;align-content:center;color:#6b4a34;cursor:pointer}.cake-cell.active{outline:2px solid #a9b99b}.cake-cell.empty{opacity:.5}.cake-cell:disabled{cursor:default}.cake-cell img{width:44px;height:42px;object-fit:contain}.cake-cell span{font-size:9px;text-align:center;line-height:1.3}.cake-cell small{font-size:8px;color:#8c6a50}.delivery-bar{position:absolute;left:8px;right:8px;bottom:8px;max-height:42%;overflow:auto;background:#fffaf2f5}.delivery-bar .game-row{font-size:11px}.delivery-bar .game-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:5px;margin-top:7px}.delivery-bar .game-btn{min-width:0;min-height:42px;padding:5px;font-size:10px}.custom-options{margin-top:5px}.custom-options .game-section{font-size:10px}.choice-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px;margin-top:5px}.choice-grid .game-btn{min-height:38px;padding:3px;font-size:9px}.choice-grid .game-btn.selected{background:#a9b99b;color:#fff}.delivery-bar .game-message{margin:4px 0;font-size:10px}.phone-backdrop,.packing-mask{position:absolute;inset:0;z-index:15;display:flex;align-items:center;justify-content:center;padding:14px;background:#352416a6}.phone-screen{width:100%;max-width:400px;max-height:87%;overflow-y:auto}.phone-screen .game-row{gap:5px}.order-input{flex:1;min-width:0;height:44px;padding:5px 9px;border:1px solid #d5b99e;border-radius:9px;font-size:13px}
.phone-screen .order-detail {
  display: grid;
  gap: 3px;
  width: 100%;
  margin-top: 8px;
  padding: 10px;
  text-align: left;
  font-size: 12px;
  line-height: 1.5;
}
.pack-card{width:min(88vw,350px);text-align:center}.pack-card img{display:block;width:100%;max-height:270px;object-fit:contain}.game-center{text-align:center}.game-message{white-space:normal;line-height:1.5}@keyframes enter{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}
</style>
