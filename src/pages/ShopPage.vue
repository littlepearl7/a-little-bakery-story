<script setup>
import { computed, ref } from 'vue';
import { art, artStatus, shopLevelInfo, monthLabel, productById, DEVICES, DECORATIONS } from '../data';
import {
  state, capacity, openShop, closeDay, takeOrder, DAYS_PER_MONTH,
  monthFixedCost, LEFTOVER_MODES, deviceTier, deviceNext, upgradeDevice,
  customersToday, decorationComfort, buyDecoration,
} from '../store';

const emit = defineEmits(['closed']);

const lv = computed(() => shopLevelInfo(state.shopLevel));
const shelfTotal = computed(() => Object.values(state.shelf || {}).reduce((a, b) => a + b, 0));
const opened = computed(() => state.dayRev > 0 || state.daySold > 0);
const shelfRows = computed(() =>
  Object.keys(state.shelf || {})
    .filter((id) => state.shelf[id] > 0)
    .map((id) => ({ id, name: productById(id).name, qty: state.shelf[id] }))
);
const showClose = ref(false);

/** 店铺插画按等级换：Lv1 社区小店 → Lv4 高端主题门店 */
const heroSrc = computed(() => {
  const f = 'shop-lv' + state.shopLevel + '.webp';
  return artStatus(f) === 'ok' ? art(f) : art('shop-exterior.webp');
});

const devices = computed(() =>
  DEVICES.map((d) => {
    const tier = deviceTier(d.id);
    return {
      id: d.id,
      name: d.name,
      note: d.note,
      desc: d.desc,
      tier,
      now: tier ? d.tiers[tier - 1].text : '',
      next: deviceNext(d.id),
    };
  })
);
const visitors = computed(() => customersToday().map((customer) => ({
  ...customer,
  productName: productById(customer.product).name,
  visit: state.regularCustomers[customer.id],
})));
const decorations = computed(() => DECORATIONS.map((item) => ({
  ...item,
  owned: state.decorations.includes(item.id),
  available: state.shopLevel >= item.shopLevel,
})));

function pick(mode) {
  const report = closeDay(mode);
  showClose.value = false;
  emit('closed', report);
}
</script>

<template>
  <div>
    <div class="shop-hero">
      <span class="tag">{{ lv.name }}</span>
      <img :src="heroSrc" alt="林记烘焙" />
      <div class="cap">
        <div class="n serif">林记烘焙</div>
        <div class="small muted">
          {{ monthLabel(state.month) }} · 第 {{ state.day }} / {{ DAYS_PER_MONTH }} 个经营日
          · 共 {{ state.storeCount }} 家店
        </div>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="h2">今天</div>
      <div class="between" style="margin-bottom: 6px">
        <span class="small muted">产能（体力 + 妈妈 + 伙伴）</span>
        <span class="small">{{ capacity }} 点</span>
      </div>
      <div class="between" style="margin-bottom: 6px">
        <span class="small muted">原料库存</span>
        <span class="small">{{ state.stock }} 份</span>
      </div>
      <div class="between" style="margin-bottom: 6px">
        <span class="small muted">待售成品</span>
        <span class="small">{{ shelfTotal }} 个</span>
      </div>
      <div class="between">
        <span class="small muted">本月固定成本</span>
        <span class="small">¥{{ monthFixedCost }}</span>
      </div>
    </div>

    <div v-if="visitors.length" class="card card-pad" style="margin-top: 12px">
      <div class="h2">今天的常客</div>
      <div v-for="visitor in visitors" :key="visitor.id" class="dev">
        <div class="dev-body">
          <div class="dev-name">{{ visitor.name }} · 想买 {{ visitor.productName }}</div>
          <div class="dev-desc">{{ visitor.preference }}</div>
          <div class="dev-next">
            已买 {{ visitor.visit.purchases }} 次 · 当天自然客流卖出后计入档案
          </div>
        </div>
      </div>
    </div>

    <div v-if="state.orders.length" class="card" style="margin-top: 12px">
      <div class="card-pad" style="padding-bottom: 2px">
        <div class="h2" style="margin: 0">今日订单 <span class="sub">接单后营业时优先交付</span></div>
      </div>
      <div v-for="o in state.orders" :key="o.id" class="cake" style="align-items: center">
        <div style="flex: 1 1 auto; min-width: 0">
          <div style="font-size: 14px; font-weight: 600">
            {{ o.type }} · {{ productById(o.product).name }} × {{ o.qty }}
          </div>
          <div class="small muted">交付可得 ¥{{ o.pay }}</div>
        </div>
        <button
          class="btn"
          :class="{ primary: o.taken }"
          style="height: 34px; padding: 0 14px; font-size: 13px"
          type="button"
          @click="takeOrder(o.id)"
        >
          {{ o.taken ? '已接' : '接单' }}
        </button>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="between" style="margin-bottom: 6px">
        <div class="h2" style="margin: 0">店铺装饰</div>
        <span class="small muted">舒适度 {{ decorationComfort }} / 4 · 自然客流 +{{ decorationComfort * 2 }}%</span>
      </div>
      <div v-for="d in decorations" :key="d.id" class="dev">
        <div class="dev-body">
          <div class="dev-name">{{ d.name }} <span class="chip" style="font-size: 10px">{{ d.category }}</span></div>
          <div class="dev-desc">舒适度 +1 · 店铺等级 {{ d.shopLevel }} 解锁</div>
        </div>
        <button
          class="btn"
          type="button"
          style="height: 34px; padding: 0 12px; font-size: 12.5px; flex: 0 0 auto"
          :disabled="d.owned || !d.available || state.cash < d.cost || state.phase !== 'playing'"
          @click="buyDecoration(d.id)"
        >
          {{ d.owned ? '已购' : !d.available ? '等级不足' : '¥' + d.cost }}
        </button>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div v-if="!opened">
        <div class="h2">营业</div>
        <p class="small muted" style="margin: 0 0 10px">
          开门之后先交付已接的订单，剩下的按客流卖出去。
        </p>
        <button class="btn primary block" type="button" :disabled="shelfTotal === 0" @click="openShop">
          {{ shelfTotal === 0 ? '还没有成品，先去厨房做' : '开门营业' }}
        </button>
      </div>

      <div v-else>
        <div class="h2">今天的成绩</div>
        <div class="between" style="margin-bottom: 6px">
          <span class="small muted">卖出</span><span class="small">{{ state.daySold }} 个</span>
        </div>
        <div class="between" style="margin-bottom: 10px">
          <span class="small muted">收入</span><span class="small">¥{{ state.dayRev }}</span>
        </div>

        <div v-if="shelfRows.length" class="shelf-left">
          <div class="small muted" style="margin-bottom: 6px">还剩</div>
          <div class="between" v-for="r in shelfRows" :key="r.id" style="margin-bottom: 4px">
            <span class="small">{{ r.name }}</span><span class="small muted">{{ r.qty }} 个</span>
          </div>
        </div>

        <button v-if="!showClose" class="btn primary block" type="button" @click="showClose = true">
          打烊结算
        </button>
        <div v-else>
          <div class="small muted" style="margin-bottom: 8px">剩下的怎么处理？</div>
          <button
            v-for="(m, key) in LEFTOVER_MODES"
            :key="key"
            class="opt"
            type="button"
            @click="pick(key)"
          >
            {{ m.label }}
            <span class="r">
              {{ m.cashRate ? '回收一半成本' : '不换钱' }}{{ m.community ? '，社区好感 +' + m.community : '' }}
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="between" style="margin-bottom: 6px">
        <div class="h2" style="margin: 0">设备</div>
        <span class="small muted">买了立刻生效</span>
      </div>
      <div v-for="d in devices" :key="d.id" class="dev">
        <div class="dev-body">
          <div class="dev-name">
            {{ d.name }}
            <span class="dots"><i v-for="i in 3" :key="i" :class="{ on: i <= d.tier }"></i></span>
            <span class="chip" style="font-size: 10px">{{ d.tier ? d.now : d.note }}</span>
          </div>
          <div class="dev-desc">{{ d.desc }}</div>
          <div class="dev-next" v-if="d.next">升级：{{ d.next.text }}</div>
          <div class="dev-next" v-else>已经是最好的了</div>
        </div>
        <button
          class="btn"
          type="button"
          style="height: 34px; padding: 0 12px; font-size: 12.5px; flex: 0 0 auto"
          :disabled="!d.next || state.cash < d.next.cost"
          @click="upgradeDevice(d.id)"
        >
          {{ d.next ? '¥' + d.next.cost : '满级' }}
        </button>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="h2">统计</div>
      <div
        class="stat"
        v-for="s in [
          { k: '口碑', v: state.reputation, cls: 'sage' },
          { k: '知名度', v: state.popularity, cls: 'sage' },
          { k: '顾客忠诚', v: state.loyalty, cls: '' },
          { k: '品牌影响', v: state.brand, cls: 'pink' },
        ]"
        :key="s.k"
      >
        <span class="k">{{ s.k }}</span>
        <span class="track"><span class="fill" :class="s.cls" :style="{ width: s.v + '%' }"></span></span>
        <span class="v">{{ Math.round(s.v) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dev {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  border-top: 1px dashed var(--line);
}
.dev:first-of-type {
  border-top: 0;
}
.dev-body {
  flex: 1 1 auto;
  min-width: 0;
}
.dev-name {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13.5px;
  font-weight: 600;
}
.dots {
  display: inline-flex;
  gap: 3px;
}
.dots i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--apricot-deep);
}
.dots i.on {
  background: var(--sage);
}
.dev-desc {
  margin-top: 2px;
  font-size: 11px;
  line-height: 1.6;
  color: var(--ink-2);
}
.dev-next {
  margin-top: 1px;
  font-size: 11px;
  color: var(--caramel-soft);
}
.shelf-left {
  padding: 10px 12px;
  border-radius: 12px;
  background: var(--apricot);
  margin-bottom: 12px;
}
</style>
