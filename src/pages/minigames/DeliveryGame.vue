<script setup>
/**
 * 订单交付：顾客报需求，玩家从右边展示柜点蛋糕，打包后交付。
 * - 普通顾客：用外观描述点单（描述够具体，不能直接说名字）
 * - 预约顾客：报订单号，玩家开手机查单，再找对应蛋糕
 * - 打包必须把 8 帧动画完整播完（每帧 450ms，共 3.6 秒），期间不能重复点击
 */
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { art, artStatus, productById } from '../../data';
import { state, availableProducts, priceOf, save } from '../../store';
import MiniShell from './MiniShell.vue';

const emit = defineEmits(['exit', 'done']);

/* 每款蛋糕的外观描述：只描述长相，不提名字 */
const LOOK = {
  plain: '圆形浅黄色的戚风蛋糕胚，外头抹一层白色奶油，表面有细细的抹刀纹，顶上就一片薄奶油花。',
  strawberry: '圆形白奶油蛋糕，顶上整整齐齐摆着三颗红草莓，侧面能看见夹层里的草莓果肉。',
  chocolate: '深棕色的圆形蛋糕，外面裹着巧克力奶油，表面撒了一层深色巧克力碎屑。',
  taro: '淡紫色的圆蛋糕，表面是芋泥，顶面插着几片焦糖色的杏仁薄脆。',
  matcha: '浅绿色的圆蛋糕，抹面是抹茶奶油，顶上撒了一些暗红色的豆子。',
  mango: '金黄色的圆形慕斯，表面是很光的镜面，顶上铺着芒果丁和几片芒果。',
  tiramisu: '方形的一块，表面筛了一层深棕色的粉，边上露出一层白色奶酪。',
  fig: '白奶油蛋糕，顶上是紫红色的无花果瓣，摆成一朵花的形状。',
  seasonal: '圆奶油蛋糕，表面堆满了当季水果——草莓、奇异果、蓝莓，五颜六色的。',
  custom: '双层的大蛋糕，白奶油打底，顶上有裱花和一块小牌子。',
  festival: '圆蛋糕，红棕色的奶油，顶上有过节的装饰糖珠和小花。',
  signature: '棕黄色的圆形蛋糕，表面是栗子奶油挤出的螺旋纹路，撒了金桂花瓣。',
};

const FALLBACK = '圆形的奶油蛋糕，颜色偏浅。';

const COFFEE_ORDER_PREFIX = 'A';

const phase = ref('intro'); // intro | play | pack | result
const customers = ref([]);
const index = ref(0);
const selected = ref('');
const misses = ref(0);
const earned = ref(0);
const soldCount = ref(0);
const notice = ref('');
const phoneOpen = ref(false);
const packing = ref(false);
const frame = ref(0);
const lastResult = reactive({ rows: [] });

const PACK_FRAMES = 8;
const PACK_STEP = 450;

let packTimer = null;

const stock = computed(() => state.shelf || {});

/** 展示柜里放哪些：有库存的产品优先，最多 12 个 */
const shelf = computed(() =>
  availableProducts.value
    .filter((p) => (stock.value[p.id] || 0) > 0)
    .slice(0, 12)
    .map((p) => ({ ...p, n: stock.value[p.id] || 0 }))
);

const current = computed(() => customers.value[index.value] || null);
const cakeArt = (id) => (artStatus('cake-' + id + '.webp') === 'ok' ? art('cake-' + id + '.webp') : '');
const packArt = (i) => art('minigame-pack-' + i + '.png');

const line = computed(() => {
  const c = current.value;
  if (!c) return '';
  if (c.kind === 'walk') return c.text;
  return '你好，我来取之前预订的蛋糕，订单编号是 ' + c.order + '。';
});

function makeOrderNo(i) {
  const m = String(state.month).padStart(2, '0');
  return COFFEE_ORDER_PREFIX + m + String(100 + i * 7 + Math.floor(Math.random() * 90));
}

function start() {
  // 一天只亲自接待一局
  if (state.deliveryDay === state.dayIndex) {
    notice.value = '今天已经亲自接待过客人了，明天再来。';
    phase.value = 'result';
    return;
  }
  const pool = shelf.value;
  if (!pool.length) {
    notice.value = '展示柜是空的，先去厨房做点蛋糕再来。';
    return;
  }
  const list = [];
  const total = Math.min(4, Math.max(3, pool.length));
  for (let i = 0; i < total; i++) {
    const p = pool[Math.floor(Math.random() * pool.length)];
    const pickup = i >= Math.ceil(total / 2);
    if (pickup) {
      list.push({
        kind: 'pickup',
        product: p.id,
        qty: 1,
        order: makeOrderNo(i),
        customer: '预约顾客',
      });
    } else {
      list.push({
        kind: 'walk',
        product: p.id,
        qty: 1,
        text: '老板，' + (LOOK[p.id] || FALLBACK) + '那种，来一份。',
        customer: '到店顾客',
      });
    }
  }
  customers.value = list;
  index.value = 0;
  misses.value = 0;
  earned.value = 0;
  soldCount.value = 0;
  selected.value = '';
  phase.value = 'play';
  notice.value = '';
}

function pick(id) {
  if (phase.value !== 'play') return;
  if ((stock.value[id] || 0) < 1) {
    notice.value = '这款已经卖完了。';
    return;
  }
  selected.value = selected.value === id ? '' : id;
  notice.value = '';
}

/** 预约顾客：手机里能查到订单 */
function openPhone() {
  if (phase.value !== 'play') return;
  phoneOpen.value = !phoneOpen.value;
}

function doPack() {
  const c = current.value;
  if (!c || packing.value) return;
  if (!selected.value) {
    notice.value = '先在右边柜子里挑一份蛋糕。';
    return;
  }
  if (selected.value !== c.product) {
    misses.value += 1;
    notice.value = '不对，这位客人要的不是这款，再看看描述。';
    selected.value = '';
    return;
  }
  // 对上了：走打包动画
  packing.value = true;
  frame.value = 0;
  notice.value = '';
  packTimer = setInterval(() => {
    frame.value += 1;
    if (frame.value >= PACK_FRAMES) {
      clearInterval(packTimer);
      packTimer = null;
      finishOne();
    }
  }, PACK_STEP);
}

function finishOne() {
  const c = current.value;
  if (!c) return;
  const unit = priceOf(c.product);
  const money = unit * c.qty;
  state.shelf[c.product] = Math.max(0, (state.shelf[c.product] || 0) - c.qty);
  state.cash += money;
  state.dayRev += money;
  state.monthRev += money;
  earned.value += money;
  soldCount.value += c.qty;
  lastResult.rows.push({ name: productById(c.product).name, kind: c.kind, money });
  packing.value = false;
  selected.value = '';
  save();

  if (index.value + 1 >= customers.value.length) {
    phase.value = 'result';
    state.deliveryDay = state.dayIndex;
    save();
    emit('done', { earned: earned.value, sold: soldCount.value, misses: misses.value });
  } else {
    index.value += 1;
  }
}

const rating = computed(() => {
  const total = customers.value.length || 1;
  const wrong = misses.value;
  if (wrong === 0) return '一次没错，客人都在夸你眼力好';
  if (wrong <= 2) return '还算利落，就是找货时多看了几眼';
  return '有点手忙脚乱，明天再来练练';
});

onMounted(() => {
  // 进来自动开一局（展示柜空的情况由 start 里给提示）
  start();
});

onUnmounted(() => {
  if (packTimer) clearInterval(packTimer);
});
</script>

<template>
  <MiniShell
    bg="minigame-delivery"
    title="订单交付"
    :sub="phase === 'play' ? '第 ' + (index + 1) + ' / ' + customers.length + ' 位客人 · 已入账 ¥' + earned : '柜台接单'"
  >

    <!-- 顾客区 -->
    <div v-if="phase === 'play'" class="cust">
      <div class="cust-tag">{{ current.customer }}</div>
      <div class="bubble">{{ line }}</div>
      <div v-if="current.kind === 'pickup'" class="hint">打开手机，按订单号找到这份预订</div>
      <div v-else class="hint">照着描述，在右边柜子里挑出来</div>
    </div>

    <!-- 右侧展示柜 -->
    <div class="shelf" v-if="phase === 'play'">
      <button
        v-for="p in shelf"
        :key="p.id"
        type="button"
        class="cell"
        :class="{ on: selected === p.id }"
        @click="pick(p.id)"
      >
        <img v-if="cakeArt(p.id)" :src="cakeArt(p.id)" :alt="p.name" />
        <div class="cn">{{ p.name }}</div>
        <div class="cq">剩 {{ p.n }}</div>
      </button>
      <div v-if="!shelf.length" class="empty">柜子是空的</div>
    </div>

    <!-- 底部操作 -->
    <div class="bar" v-if="phase === 'play'">
      <button class="op" type="button" @click="openPhone">手机 · 查订单</button>
      <button class="op primary" type="button" :disabled="packing" @click="doPack">
        {{ packing ? '打包中…' : '打包交付' }}
      </button>
    </div>

    <p v-if="notice" class="notice">{{ notice }}</p>

    <!-- 打包动画 -->
    <div v-if="packing" class="packing">
      <div class="pk-title">正在打包</div>
      <img :src="packArt(frame)" alt="" />
      <div class="pk-bar"><i :style="{ width: ((frame + 1) / 8 * 100) + '%' }" /></div>
    </div>

    <!-- 手机订单面板 -->
    <div v-if="phoneOpen" class="phone" @click.self="phoneOpen = false">
      <div class="ph-card">
        <div class="ph-head">
          <span>订单详情</span>
          <button type="button" @click="phoneOpen = false">关闭</button>
        </div>
        <div v-for="(c, i) in customers" :key="i" class="ph-row" :class="{ now: i === index }">
          <div class="ph-no">{{ c.kind === 'pickup' ? c.order : '到店单 · 无编号' }}</div>
          <div class="ph-name">{{ productById(c.product).name }} × {{ c.qty }}</div>
          <div class="ph-desc">{{ LOOK[c.product] || FALLBACK }}</div>
        </div>
      </div>
    </div>

    <!-- 结算 -->
    <div v-if="phase === 'result'" class="result">
      <h3>今天接待完了</h3>
      <div class="rs-row"><span>交付</span><span>{{ soldCount }} 份</span></div>
      <div class="rs-row"><span>入账</span><span>¥{{ earned }}</span></div>
      <div class="rs-row"><span>拿错</span><span>{{ misses }} 次</span></div>
      <p class="rs-say">{{ rating }}</p>
      <button class="op primary" type="button" @click="emit('exit')">回店里</button>
    </div>
  </MiniShell>
</template>

<style scoped>
.pill {
  display: inline-block;
  white-space: nowrap;
  max-width: 96px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 96px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(255, 250, 242, 0.86);
  color: var(--caramel);
  font-size: 12px;
  font-weight: 600;
}

/* 顾客气泡：站在画面左侧 */
.cust {
  position: absolute;
  left: 12px;
  top: 12%;
  width: 58%;
  max-width: 250px;
}
.cust-tag {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(107, 74, 52, 0.72);
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
.hint {
  margin-top: 6px;
  font-size: 11px;
  color: #fff6e6;
  text-shadow: 0 1px 5px rgba(52, 32, 18, 0.6);
}

/* 展示柜：贴住背景右侧的三层玻璃柜 */
.shelf {
  position: absolute;
  left: 61%;
  right: 2%;
  top: 22%;
  box-sizing: border-box;
  max-height: 38%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4px;
  overflow-y: auto;
  padding: 2px;
}
.cell {
  min-width: 0;
  overflow: hidden;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 3px 2px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 9px;
  background: rgba(255, 252, 246, 0.62);
  cursor: pointer;
  backdrop-filter: blur(2px);
}
.cell img {
  width: 100%;
  min-width: 0;
  min-width: 0;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}
.cell .cn {
  font-size: 9px;
  line-height: 1.2;
  color: var(--caramel);
  text-align: center;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cell .cq {
  font-size: 8.5px;
  color: var(--ink-2);
}
.cell.on {
  border-color: var(--caramel);
  background: rgba(255, 238, 208, 0.95);
  box-shadow: 0 0 0 2px rgba(107, 74, 52, 0.45);
}
.empty {
  grid-column: 1 / -1;
  font-size: 12px;
  color: #fff6e6;
  text-align: center;
  padding: 10px 0;
}

/* 底部操作条 */
.bar {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 14px;
  display: flex;
  gap: 10px;
}
.op {
  flex: 1 1 0;
  height: 46px;
  border: 1px solid rgba(255, 250, 242, 0.7);
  border-radius: 13px;
  background: rgba(255, 250, 242, 0.9);
  color: var(--caramel);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.op.primary {
  background: linear-gradient(180deg, #8a6244, #6b4a34);
  color: #fff8ee;
  border-color: #6b4a34;
}
.op:disabled {
  opacity: 0.6;
}
.notice {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 70px;
  margin: 0;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255, 246, 232, 0.94);
  color: var(--berry);
  font-size: 12px;
  line-height: 1.6;
}

/* 打包动画 */
.packing {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: rgba(42, 26, 16, 0.52);
}
.pk-title {
  color: #fff8ee;
  font-size: 14px;
  letter-spacing: 0.1em;
}
.packing img {
  width: 62%;
  max-width: 260px;
  border-radius: 14px;
  background: #fffaf2;
  padding: 8px;
}
.pk-bar {
  width: 52%;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 250, 242, 0.35);
  overflow: hidden;
}
.pk-bar i {
  display: block;
  height: 100%;
  background: #ffe6b8;
  transition: width 0.4s linear;
}

/* 手机面板 */
.phone {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(42, 26, 16, 0.55);
  padding: 16px;
}
.ph-card {
  width: 100%;
  max-width: 340px;
  max-height: 72%;
  overflow-y: auto;
  border-radius: 16px;
  background: #fffaf2;
  padding: 14px;
}
.ph-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  color: var(--caramel);
  margin-bottom: 8px;
}
.ph-head button {
  border: 0;
  background: none;
  color: var(--ink-2);
  font-size: 12px;
  cursor: pointer;
}
.ph-row {
  padding: 9px 10px;
  border: 1px solid var(--line-soft);
  border-radius: 10px;
  margin-bottom: 7px;
}
.ph-row.now {
  border-color: var(--caramel);
  background: #fff3e0;
}
.ph-no {
  font-size: 12.5px;
  font-weight: 700;
  color: var(--caramel);
  letter-spacing: 0.04em;
}
.ph-name {
  font-size: 12px;
  margin-top: 2px;
}
.ph-desc {
  font-size: 11px;
  line-height: 1.6;
  color: var(--ink-2);
  margin-top: 2px;
}

/* 结算 */
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
.rs-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 4px 0;
  color: var(--ink-2);
}
.rs-say {
  margin: 10px 0 12px;
  font-size: 12.5px;
  line-height: 1.7;
  color: var(--caramel);
}
</style>
