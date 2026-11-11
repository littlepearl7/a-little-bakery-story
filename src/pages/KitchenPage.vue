<script setup>
import { computed, ref } from 'vue';
import { PRICE_TIERS } from '../data';
import {
  state, availableProducts, capacity, planPoints, priceOf, demandOf, setPlan, makeCakes,
} from '../store';
import CakeArt from '../components/CakeArt.vue';

const msg = ref('');
const msgBad = ref(false);
let timer = 0;

const points = computed(() => planPoints());
const planCount = computed(() => Object.values(state.plan).reduce((a, b) => a + b, 0));
const rows = computed(() =>
  availableProducts.value.map((p) => ({
    ...p,
    lv: state.levels[p.id] || 1,
    price: priceOf(p.id),
    demand: demandOf(p.id),
    tier: state.prices[p.id] || 'std',
    qty: state.plan[p.id] || 0,
  }))
);

function bump(id, delta) {
  const cur = state.plan[id] || 0;
  setPlan(id, cur + delta);
}

function setTier(id, tier) {
  state.prices[id] = tier;
}

function doMake() {
  const r = makeCakes();
  msg.value = r.msg;
  msgBad.value = !r.ok;
  clearTimeout(timer);
  timer = setTimeout(() => (msg.value = ''), 2200);
}
</script>

<template>
  <div>
    <div class="card card-pad">
      <div class="between" style="margin-bottom: 8px">
        <div class="h2" style="margin: 0">厨房</div>
        <span class="chip" :class="points > capacity ? 'pink' : 'sage'">
          产能 {{ points }} / {{ capacity }}
        </span>
      </div>
      <div class="track" style="height: 8px; background: var(--apricot); border-radius: 999px; overflow: hidden">
        <div
          style="height: 100%; border-radius: 999px; transition: width .3s"
          :style="{
            width: Math.min(100, (points / Math.max(1, capacity)) * 100) + '%',
            background: points > capacity ? '#d95b67' : 'linear-gradient(90deg,#e9c9a3,#d9a06a)',
          }"
        ></div>
      </div>
      <div class="between small muted" style="margin-top: 8px">
        <span>原料 {{ state.stock }} 份 · 计划 {{ planCount }} 个</span>
        <span>体力 {{ state.stamina }}</span>
      </div>
    </div>

    <div class="card" style="margin-top: 12px">
      <div v-for="r in rows" :key="r.id" class="cake">
        <div class="art"><CakeArt :colors="r.colors" /></div>
        <div class="body">
          <div class="name">
            <span>{{ r.name }}</span>
            <span class="chip" style="font-size: 10px">Lv{{ Math.round(r.lv * 10) / 10 }}</span>
          </div>
          <div class="nums">
            <span>¥{{ r.price }}</span>
            <span>预计卖 {{ r.demand }} 个</span>
            <span>{{ r.diff }} 点/个</span>
          </div>
          <div class="tiers">
            <button
              v-for="(t, key) in PRICE_TIERS"
              :key="key"
              type="button"
              class="tier"
              :class="{ on: r.tier === key }"
              @click="setTier(r.id, key)"
            >
              {{ t.label }}
            </button>
          </div>
        </div>
        <div class="stepper">
          <button type="button" @click="bump(r.id, -1)">−</button>
          <span>{{ r.qty }}</span>
          <button type="button" @click="bump(r.id, 1)">+</button>
        </div>
      </div>
    </div>

    <p v-if="msg" class="small" :style="{ color: msgBad ? 'var(--berry)' : '#6c8a55', margin: '10px 2px 0' }">
      {{ msg }}
    </p>

    <button class="btn primary block" style="margin-top: 12px" type="button" @click="doMake">
      开始制作（消耗原料与体力）
    </button>
    <p class="small muted" style="margin: 9px 2px 0; text-align: center">
      妈妈每天帮 60 点产能，每位伙伴 40 点，超出部分才用你的体力
    </p>
  </div>
</template>

<style scoped>
.tiers {
  display: flex;
  margin-top: 6px;
}
.tier {
  height: 22px;
  padding: 0 9px;
  margin-right: 6px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  color: var(--ink-2);
  font-size: 11px;
  font-family: inherit;
  cursor: pointer;
}
.tier.on {
  background: var(--caramel);
  border-color: var(--caramel);
  color: #fff8ef;
}
.stepper {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 2px;
}
.stepper button {
  width: 28px;
  height: 28px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--paper);
  color: var(--caramel);
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
}
.stepper span {
  min-width: 22px;
  text-align: center;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
}
</style>
