<script setup>
import { computed, reactive, ref } from 'vue';
import { INGREDIENTS } from '../data';
import { state, buyIngredients, pantryUnits, restockPlan } from '../store';

const cart = reactive({});
const notice = ref('');
const available = computed(() => INGREDIENTS.filter((item) => item.month <= state.month));
const total = computed(() => available.value.reduce((sum, item) => sum + (cart[item.id] || 0) * item.price, 0));

function bump(id, amount) {
  cart[id] = Math.max(0, Math.min(99, (cart[id] || 0) + amount));
}

function fillPlan() {
  Object.keys(cart).forEach((id) => { cart[id] = 0; });
  Object.assign(cart, restockPlan());
  notice.value = '已按今天的生产计划填入缺料数量。';
}

function submit() {
  const result = buyIngredients(cart);
  notice.value = result.message;
  if (result.ok) Object.keys(cart).forEach((id) => { cart[id] = 0; });
}
</script>

<template>
  <div>
    <div class="card card-pad">
      <div class="between"><div class="h2">食材铺</div><span class="chip">仓库 {{ pantryUnits }}/{{ state.warehouseCapacity }}</span></div>
      <p class="small muted">选好今天要用的原料，一次结账。采购消耗 1 点行动力；二周目优惠在首笔采购时抵扣，最高 ¥300。</p>
      <button class="btn" type="button" :disabled="state.dayPhase !== 'prep'" @click="fillPlan">按生产计划补齐缺料</button>
    </div>

    <div class="card ingredient-list">
      <div v-for="item in available" :key="item.id" class="ingredient">
        <div><strong>{{ item.name }}</strong><div class="small muted">库存 {{ state.pantry[item.id] || 0 }} · ¥{{ item.price }} / 份</div></div>
        <div class="stepper"><button type="button" :disabled="state.dayPhase !== 'prep'" @click="bump(item.id, -1)">−</button><span>{{ cart[item.id] || 0 }}</span><button type="button" :disabled="state.dayPhase !== 'prep'" @click="bump(item.id, 1)">+</button></div>
      </div>
    </div>
    <p v-if="notice" class="small" role="status">{{ notice }}</p>
    <div class="purchase-footer"><span>合计 ¥{{ total }}</span><button class="btn primary" type="button" :disabled="state.dayPhase !== 'prep' || state.ap < 1 || total <= 0" @click="submit">确认采购 · 1 点行动力</button></div>
  </div>
</template>

<style scoped>
.ingredient-list{margin-top:10px;padding:0 12px}.ingredient{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:61px;border-bottom:1px solid var(--line-soft)}.ingredient:last-child{border-bottom:0}.ingredient strong{font-size:13px}.stepper{display:flex;align-items:center;gap:8px}.stepper button{width:36px;height:36px;border:1px solid var(--line);border-radius:10px;background:var(--paper);color:var(--caramel);font-size:19px;cursor:pointer}.stepper button:disabled{opacity:.5}.stepper span{min-width:22px;text-align:center;font-variant-numeric:tabular-nums}.purchase-footer{position:sticky;bottom:0;display:flex;align-items:center;justify-content:space-between;gap:10px;margin:12px -2px 0;padding:10px;background:#fffaf2ed;border-radius:12px;font-weight:700;color:var(--caramel)}
</style>
