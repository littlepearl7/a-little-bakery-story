<script setup>
import { computed, ref } from 'vue';
import { INGREDIENTS, productById } from '../data';
import { state, availableProducts, capacity, planPoints, priceOf, setPlan, makeCakes, pantryUnits, ingredientTotals, missingIngredients, save } from '../store';
import CakeArt from '../components/CakeArt.vue';

const emit = defineEmits(['open-panel']);
const notice = ref('');
const points = computed(() => planPoints());
const needs = computed(() => ingredientTotals());
const missing = computed(() => missingIngredients());
const rows = computed(() => availableProducts.value.map((product) => ({
  ...product,
  qty: state.plan[product.id] || 0,
  price: priceOf(product.id),
})));
const customRequests = computed(() => state.orders.filter((order) => order.taken));
const mini = computed(() => state.productionMini);
const qualityName = computed(() => state.productionResult?.quality === 'perfect' ? '完美 · 售价 +10%' : state.productionResult?.quality === 'fine' ? '精致 · 售价 +5%' : '普通品质');
const materials = computed(() => Object.entries(needs.value).map(([id, qty]) => ({ id, name: INGREDIENTS.find((item) => item.id === id)?.name || id, qty })));
const challengeText = computed(() => {
  if (!state.challenge) return '';
  if (state.challenge.type === 'stock') return '精准备货：预约优先，剩货率不超过 10%。';
  if (state.challenge.type === 'new') return '新品主题日：' + productById(state.challenge.target).name + ' 至少交付 3 个。';
  return '定制专场：完成当天定制要求。';
});

function bump(id, delta) {
  setPlan(id, (state.plan[id] || 0) + delta);
}

function smartStock() {
  const plan = {};
  customRequests.value.forEach((order) => { plan[order.product] = (plan[order.product] || 0) + order.qty; });
  const target = Math.max(3, Math.min(12, Math.round(({ 1: 4, 2: 6, 3: 8, 4: 10 })[state.shopLevel] + state.reputation / 35)));
  let remaining = Math.max(0, target - Object.values(plan).reduce((sum, qty) => sum + qty, 0));
  const popular = availableProducts.value.slice().sort((a, b) => ((state.monthSold[b.id] || 0) + b.demand) - ((state.monthSold[a.id] || 0) + a.demand));
  for (let i = 0; i < remaining && popular.length; i++) {
    const id = popular[i % Math.min(3, popular.length)].id;
    plan[id] = Math.min(12, (plan[id] || 0) + 1);
  }
  state.plan = plan;
  save();
}

function say(value) { notice.value = value; }

function clearPlan() { state.plan = {}; save(); }
</script>

<template>
  <div>
    <div class="card card-pad">
      <div class="between"><div class="h2" style="margin:0">今日生产计划</div><span class="chip" :class="points > capacity ? 'pink' : 'sage'">产能 {{ points }}/{{ capacity }}</span></div>
      <div class="between small muted" style="margin-top:7px"><span>库存 {{ pantryUnits }}/{{ state.warehouseCapacity }} 份</span><span>体力 {{ state.stamina }}</span></div>
      <button class="btn block" style="margin-top:9px" type="button" :disabled="state.dayPhase !== 'prep'" @click="smartStock">智能备货 · 先满足已接预约</button>
      <div v-if="state.dayPhase === 'prep' && challengeText" class="challenge-note small"><strong>今日经营挑战</strong><span>{{ challengeText }}成功后营业收入 +5%。</span></div>
    </div>

    <div v-if="customRequests.length" class="card card-pad compact-card"><strong>已接预约</strong><div v-for="order in customRequests" :key="order.id" class="small muted">{{ productById(order.product).name }} ×{{ order.qty }}{{ order.due ? ' · 装饰：' + order.due : '' }}</div></div>

    <div class="product-list">
      <div v-for="product in rows" :key="product.id" class="product-row">
        <div class="product-art"><CakeArt :id="product.id" :colors="product.colors" /></div>
        <div class="product-copy"><strong>{{ product.name }}</strong><span>¥{{ product.price }} · 产能 {{ product.diff }}</span><span>熟练度 Lv{{ Math.round((state.levels[product.id] || 1) * 10) / 10 }}</span></div>
        <div class="quantity"><button type="button" :disabled="state.dayPhase !== 'prep'" @click="bump(product.id, -1)">−</button><span>{{ product.qty }}</span><button type="button" :disabled="state.dayPhase !== 'prep'" @click="bump(product.id, 1)">+</button></div>
      </div>
    </div>

    <div class="card card-pad compact-card">
      <div class="between"><strong>材料预算</strong><span class="small muted">预计 {{ Object.values(state.plan).reduce((sum, qty) => sum + qty, 0) }} 个蛋糕</span></div>
      <div v-if="!materials.length" class="small muted" style="margin-top:5px">选择产品和数量后会列出配方用料。</div>
      <div v-for="item in materials" :key="item.id" class="between small" style="margin-top:5px"><span>{{ item.name }}</span><span :class="{ missing: missing[item.id] }">{{ item.qty }} 份 · 库存 {{ state.pantry[item.id] || 0 }}{{ missing[item.id] ? ' · 缺 ' + Math.ceil(missing[item.id]) : '' }}</span></div>
    </div>

    <div v-if="mini" class="card card-pad compact-card"><strong>今日主打工序已准备</strong><p class="small muted">请进入独立制作页面继续完成完整的食材、搅拌、烘烤和装饰流程。</p></div>

    <div v-else-if="state.productionResult" class="card card-pad compact-card"><strong>本批品质：{{ qualityName }}</strong><div class="small muted">{{ state.productionResult.quality === 'normal' ? '基础品质，不影响批量成品。' : '效果已记在主打蛋糕批次中。' }}</div></div>

    <button v-if="state.dayPhase === 'prep' && !state.productionResult" class="btn primary block" style="margin-top:10px" type="button" @click="emit('open-panel', 'game:baking')">进入独立蛋糕制作小游戏 →</button>
    <button v-if="state.dayPhase === 'prep' && state.productionResult" class="btn primary block" style="margin-top:10px" type="button" :disabled="points > capacity || Object.keys(missing).length > 0" @click="makeCakes">完成今日批量制作</button>
    <button v-if="state.dayPhase === 'prep' && Object.keys(state.plan).length" class="btn block" style="margin-top:8px" type="button" @click="clearPlan">清空计划</button>
    <div v-if="state.dayPhase === 'service-ready' || state.dayPhase === 'service' || state.dayPhase === 'closing'" class="card card-pad compact-card"><div class="h2">今日成品</div><div v-for="id in Object.keys(state.shelf).filter((key) => state.shelf[key] > 0)" :key="id" class="between small"><span>{{ productById(id).name }}</span><span>{{ state.shelf[id] }} 个</span></div><div v-if="state.dayPhase === 'service-ready'" class="small muted">前往柜台开门营业。</div></div>
    <p v-if="notice" class="small muted" role="status">{{ notice }}</p>
    <div class="small muted tips">设备、妈妈和伙伴提供产能；超出免费产能的部分才消耗体力。主打蛋糕小游戏只作用于这款产品的当日批次。</div>
  </div>
</template>

<style scoped>
.compact-card{margin-top:9px}.challenge-note{display:grid;gap:2px;margin-top:8px;padding:8px;border-radius:9px;background:#fff8ec}.challenge-note strong{color:var(--caramel)}.product-list{margin-top:9px;background:var(--paper);border-radius:12px;padding:0 10px;box-shadow:var(--shadow)}.product-row{display:flex;align-items:center;gap:8px;min-height:68px;border-bottom:1px solid var(--line-soft)}.product-row:last-child{border-bottom:0}.product-art{width:47px;height:47px;overflow:hidden;border-radius:9px;flex:0 0 47px}.product-art :deep(*){width:100%;height:100%}.product-copy{flex:1;display:flex;flex-direction:column;gap:2px;min-width:0}.product-copy strong{font-size:12px}.product-copy span{font-size:10px;color:var(--ink-2)}.quantity{display:flex;align-items:center;gap:4px}.quantity button{width:36px;height:42px;border:1px solid var(--line);border-radius:9px;background:#fffaf2;color:var(--caramel);font-size:18px}.quantity span{min-width:18px;text-align:center}.missing{color:var(--berry)}.tips{display:block;margin-top:10px;line-height:1.6}
</style>
