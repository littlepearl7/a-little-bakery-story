<script setup>
import { computed, ref } from 'vue';
import { PRODUCTS, RECIPE_INGREDIENTS, productById } from '../data';
import { state, actionInfo, doAction, stageInfo, stageProgress, staffList } from '../store';
import { STORY } from '../story';

const open = ref('');
const flash = ref('');
const selectedRecipe = ref('');
const selectedIngredients = ref([]);
let timer = 0;

const actions = computed(() =>
  ['restock', 'feedback', 'talk', 'sqchat', 'recipe', 'research', 'market', 'train', 'decorate', 'survey', 'branch'].map(
    (id) => ({ id, info: actionInfo(id) })
  )
);

const targets = computed(() => {
  if (open.value === 'research') {
    return state.unlocked.filter((id) => (state.levels[id] || 1) < 5).map((id) => ({
      id,
      label: productById(id).name,
      sub: 'Lv' + Math.round((state.levels[id] || 1) * 10) / 10,
    }));
  }
  if (open.value === 'train' || open.value === 'talk') {
    return staffList().map((p) => ({
      id: p.id,
      label: p.nick,
      sub: '信赖 ' + Math.round(state.partnerTrust[p.id] || 0),
    }));
  }
  return [];
});
const recipeTargets = computed(() =>
  PRODUCTS.filter((p) => p.month > 0 && p.month <= state.month && !state.unlocked.includes(p.id)).map((p) => ({
    ...p,
    hint: (STORY.codex[p.id] || {}).hint || '',
  }))
);
const ingredientOptions = computed(() => [...new Set(Object.values(RECIPE_INGREDIENTS).flat(2))]);

function needTarget(id) {
  if (id === 'recipe') return true;
  if (id === 'research') return state.unlocked.length > 1;
  if (id === 'train') return state.staff.length > 1;
  if (id === 'talk') return state.staff.length > 1;
  return false;
}

function tap(id) {
  const info = actionInfo(id);
  if (info.disabled || state.ap < info.ap || (info.cost && state.cash < info.cost)) {
    say('现在做不了：' + info.note);
    return;
  }
  if (needTarget(id)) {
    if (id === 'recipe' && open.value !== id) {
      selectedRecipe.value = '';
      selectedIngredients.value = [];
    }
    open.value = open.value === id ? '' : id;
    return;
  }
  run(id, {});
}

function run(id, opt) {
  const ok = doAction(id, opt);
  open.value = '';
  if (!ok) say('没有执行成功，检查一下行动力或资金');
}

function toggleIngredient(ingredient) {
  selectedIngredients.value = selectedIngredients.value.includes(ingredient)
    ? selectedIngredients.value.filter((item) => item !== ingredient)
    : [...selectedIngredients.value, ingredient];
}

function submitRecipe() {
  if (!selectedRecipe.value) return;
  const ok = doAction('recipe', {
    product: selectedRecipe.value,
    ingredients: selectedIngredients.value,
  });
  if (!ok) {
    say('组合不对或行动力不足；研发失败不会扣除资源，请再核对配方提示');
    return;
  }
  open.value = '';
  selectedRecipe.value = '';
  selectedIngredients.value = [];
}

function say(t) {
  flash.value = t;
  clearTimeout(timer);
  timer = setTimeout(() => (flash.value = ''), 2000);
}
</script>

<template>
  <div>
    <div class="card card-pad">
      <div class="between">
        <div>
          <div class="h2" style="margin: 0">今天的行动力</div>
          <div class="small muted" style="margin-top: 2px">
            每个经营日开始回满，不累积
          </div>
        </div>
        <div class="row" style="gap: 4px; flex-wrap: wrap; max-width: 150px; justify-content: flex-end">
          <span v-for="i in state.maxAp" :key="i" class="ap-dot" :class="{ on: i <= state.ap }"></span>
        </div>
      </div>
      <div class="between small muted" style="margin-top: 8px">
        <span>剩余 {{ state.ap }} / {{ state.maxAp }} 点</span>
        <span>体力 {{ state.stamina }} / {{ state.maxStamina }}</span>
      </div>
    </div>

    <div class="act-grid" style="margin-top: 10px">
      <button
        v-for="a in actions"
        :key="a.id"
        class="act"
        type="button"
        :class="{ on: open === a.id }"
        :disabled="a.info.disabled || state.ap < a.info.ap || (a.info.cost > 0 && state.cash < a.info.cost)"
        @click="tap(a.id)"
      >
        <span class="t">
          <span>{{ a.info.name }}</span>
          <span class="c">{{ a.info.ap }}点</span>
        </span>
        <span class="n">{{ a.info.note }}</span>
        <span class="n cost" v-if="a.info.cost > 0">花费 ¥{{ a.info.cost }}</span>
      </button>
    </div>

    <div v-if="open === 'recipe'" class="card card-pad" style="margin-top: 10px">
      <div class="h2">新品研发</div>
      <div class="small muted" style="margin-bottom: 8px">先选产品，再按图鉴提示挑选食材。顺序不限。</div>
      <div class="pills">
        <button
          v-for="t in recipeTargets"
          :key="t.id"
          type="button"
          class="pill"
          :class="{ chosen: selectedRecipe === t.id }"
          @click="selectedRecipe = t.id; selectedIngredients = []"
        >
          {{ t.name }} <span class="muted">M{{ t.month }}</span>
        </button>
      </div>
      <template v-if="selectedRecipe">
        <div class="small muted" style="margin: 8px 0">图鉴提示：{{ recipeTargets.find((item) => item.id === selectedRecipe)?.hint }}</div>
        <div class="pills">
          <button
            v-for="ingredient in ingredientOptions"
            :key="ingredient"
            type="button"
            class="pill"
            :class="{ chosen: selectedIngredients.includes(ingredient) }"
            @click="toggleIngredient(ingredient)"
          >
            {{ ingredient }}
          </button>
        </div>
        <button class="btn primary block" type="button" @click="submitRecipe">
          试做配方 · 消耗 2 点行动力
        </button>
      </template>
    </div>

    <div v-else-if="open && targets.length" class="card card-pad" style="margin-top: 10px">
      <div class="h2">{{ open === 'research' ? '提升哪款熟练度？' : '和谁？' }}</div>
      <div class="pills">
        <button
          v-for="t in targets"
          :key="t.id"
          type="button"
          class="pill"
          @click="run(open, open === 'research' ? { product: t.id } : { partner: t.id })"
        >
          {{ t.label }} <span class="muted">{{ t.sub }}</span>
        </button>
      </div>
    </div>

    <p v-if="flash" class="small" style="color: var(--berry); margin: 10px 2px 0">{{ flash }}</p>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="between" style="margin-bottom: 8px">
        <div class="h2" style="margin: 0">阶段目标</div>
        <span class="chip" :class="stageProgress.done >= stageProgress.need ? 'sage' : ''">
          {{ stageProgress.done }} / {{ stageProgress.need || '—' }}
        </span>
      </div>
      <div class="small muted" style="margin-bottom: 8px">
        {{ stageInfo.name }} · 完成 {{ stageProgress.need }} 项即可进入下一阶段，否则本局提前结束
      </div>
      <div v-for="g in stageProgress.list" :key="g.text" class="goal" :class="{ done: g.done }">
        <span class="dot"></span>
        <span>{{ g.text }}</span>
        <span v-if="g.expand" class="chip pink" style="font-size: 10px">扩张</span>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="h2">最近发生的事</div>
      <div v-if="!state.log.length" class="empty">还没有记录。</div>
      <div v-for="(l, i) in state.log.slice(0, 10)" :key="i" class="logline" :class="l.tone">
        <span class="d">{{ l.month }}月{{ l.day }}日</span>
        <span class="x">{{ l.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.act .cost {
  display: block;
  margin-top: 3px;
  color: var(--berry);
}
.act.on {
  border-color: var(--caramel);
  box-shadow: 0 0 0 1px var(--caramel) inset;
}
.pills {
  display: flex;
  flex-wrap: wrap;
}
.pill {
  height: 32px;
  padding: 0 12px;
  margin: 0 7px 7px 0;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  color: var(--caramel);
  font-size: 13px;
  font-family: inherit;
  cursor: pointer;
}
.pill.chosen {
  border-color: var(--sage);
  background: var(--sage);
  color: #fff;
}
.pill .muted {
  color: var(--ink-2);
  font-size: 11px;
  margin-left: 3px;
}
.goal {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  font-size: 13px;
  color: var(--ink-2);
}
.goal .dot {
  flex: 0 0 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--apricot-deep);
  border: 1px solid rgba(107, 74, 52, 0.2);
}
.goal.done {
  color: var(--caramel);
}
.goal.done .dot {
  background: var(--sage);
  border-color: #8ea078;
}
</style>
