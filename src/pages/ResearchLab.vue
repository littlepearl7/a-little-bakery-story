<script setup>
import { computed, ref } from 'vue';
import { PRODUCTS, productById } from '../data';
import { STORY } from '../story';
import {
  COST_SCORES, DECORATION_LEVELS, FLAVOR_DIRECTIONS, IMPROVEMENTS, RATIO_LEVELS,
  RESEARCH_TASKS, recipeOptions,
} from '../lab';
import {
  state, beginResearchTrial, publishResearch, discardResearchTrial, improveProduct, pantryUnits, canConsumeRecipe,
} from '../store';
import { cgOf } from '../vn';

const page = ref('home');
const selectedProduct = ref('');
const ingredients = ref([]);
const direction = ref(-1);
const ratio = ref(-1);
const process = ref(-1);
const decoration = ref(1);
const improvementProduct = ref('');
const improvementAnswer = ref(-1);
const improvementFeedback = ref('');
const notice = ref('');
const submitting = ref(false);

const products = computed(() => PRODUCTS.filter((product) => product.month > 0));
const improvable = computed(() => PRODUCTS.filter((product) =>
  state.unlocked.includes(product.id) && (state.levels[product.id] || 1) < 5
));
const reportRows = computed(() => PRODUCTS.map((product) => ({
  product,
  reports: state.career.labReports[product.id] || {},
})).filter((row) => row.reports.development || row.reports.improvement));
const task = computed(() => RESEARCH_TASKS[selectedProduct.value]);
const pendingImage = computed(() =>
  state.labPending?.type === 'signature' ? cgOf('osmanthus').src : ''
);
const trialSelectionsReady = computed(() =>
  ingredients.value.length > 0 && direction.value >= 0 && ratio.value >= 0 && process.value >= 0
);
const signatureSelectionsReady = computed(() =>
  ingredients.value.length > 0 && direction.value >= 0 && ratio.value >= 0 && process.value >= 0
);
const improveActionCost = computed(() =>
  improvementAnswer.value === IMPROVEMENTS[improvementProduct.value]?.correct ? 2 : 1
);
function say(message) {
  notice.value = message;
}

function selectProduct(product) {
  if (state.labPending) return;
  if (product.id === 'signature') {
    if (state.month < 26) return say('M26 起开放外婆配方复原。');
    page.value = 'signature';
  } else {
    selectedProduct.value = product.id;
    page.value = 'develop';
  }
  ingredients.value = [];
  direction.value = -1;
  ratio.value = -1;
  process.value = -1;
  decoration.value = 1;
  notice.value = '';
}

function toggleIngredient(ingredient) {
  ingredients.value = ingredients.value.includes(ingredient)
    ? ingredients.value.filter((item) => item !== ingredient)
    : [...ingredients.value, ingredient];
}

function startTaste() {
  const result = beginResearchTrial({
    productId: selectedProduct.value,
    ingredients: ingredients.value,
    direction: direction.value,
    ratio: ratio.value,
    process: process.value,
    decoration: decoration.value,
  });
  if (!result.ok) say(result.message);
  else say('试吃完成：本次样品已计入原料消耗。');
}

function startSignatureTaste() {
  const result = beginResearchTrial({
    productId: 'signature',
    type: 'signature',
    ingredients: ingredients.value,
    sugar: direction.value,
    filling: ratio.value,
    garnish: process.value,
  });
  if (!result.ok) say(result.message);
  else say('复原试吃完成：本次样品已计入原料消耗。');
}

function publish() {
  const result = publishResearch();
  say(result.message);
  if (result.ok) page.value = 'home';
}

function adjustPending() {
  const trial = state.labPending;
  if (!trial) return;
  discardResearchTrial();
  selectedProduct.value = trial.productId;
  ingredients.value = trial.ingredients.slice();
  if (trial.type === 'signature') {
    direction.value = trial.sugar;
    ratio.value = trial.filling;
    process.value = trial.garnish;
    page.value = 'signature';
  } else {
    direction.value = trial.direction;
    ratio.value = trial.ratio;
    process.value = trial.process;
    decoration.value = trial.decoration;
    page.value = 'develop';
  }
  say('保留了本次试做思路，修改后重试会再消耗一份样品。');
}

function clearPending() {
  discardResearchTrial();
  page.value = 'home';
  say('试吃结果已收起，已消耗的样品不返还。');
}

function selectImprovement(product) {
  if (state.labPending) return;
  improvementProduct.value = product.id;
  improvementAnswer.value = -1;
  improvementFeedback.value = '';
  notice.value = '';
  page.value = 'improve';
}

function submitImprovement() {
  if (submitting.value || improvementAnswer.value < 0) return;
  submitting.value = true;
  const result = improveProduct(improvementProduct.value, improvementAnswer.value);
  submitting.value = false;
  improvementFeedback.value = result.feedback || '';
  if (result.ok) {
    say(result.message);
    page.value = 'home';
  } else if (result.retry) {
    improvementAnswer.value = -1;
  }
}

function back() {
  page.value = 'home';
  notice.value = '';
}

function stageLabel(report) {
  if (report.type === 'signature') return '外婆配方复原';
  if (report.type === 'improvement') return `配方改良 · Lv${report.levelAfter}`;
  return `${report.refined ? '精制上架' : '新品上架'} · ${report.score} 分`;
}
</script>

<template>
  <section class="lab">
    <header class="lab-head">
      <div>
        <div class="lab-title">林记烘焙实验室</div>
        <div class="lab-sub">行动力 {{ state.ap }}/{{ state.maxAp }} · 分类原料 {{ pantryUnits }} 份 · 试做消耗所选蛋糕配方用料的四分之一</div>
      </div>
      <button v-if="page !== 'home' && !state.labPending" class="back" type="button" @click="back">返回</button>
    </header>

    <div v-if="state.labPending" class="card card-pad result">
      <div class="result-title">{{ state.labPending.passed ? '试吃合格' : '还需要调整' }}</div>
      <div class="small muted">{{ productById(state.labPending.productId).name }} · 本次 {{ state.labPending.score }} 分</div>
      <img v-if="pendingImage" class="signature-cg" :src="pendingImage" alt="桂花栗子蛋糕复原插画" />
      <div class="scores">
        <div v-for="item in [
          { key: 'flavor', name: '风味' },
          { key: 'texture', name: '口感' },
          { key: 'appearance', name: '外观' },
          { key: 'cost', name: '成本控制' },
        ]" :key="item.key" class="score">
          <span>{{ item.name }}</span><strong>{{ state.labPending.scores[item.key] }}</strong>
        </div>
      </div>
      <ul class="feedback">
        <li v-for="item in state.labPending.feedback" :key="item">{{ item }}</li>
      </ul>
      <div class="result-actions">
        <button
          v-if="state.labPending.passed"
          class="btn primary block"
          type="button"
          :disabled="state.ap < 1 || state.phase !== 'playing'"
          @click="publish"
        >
          {{ state.labPending.type === 'signature' ? '完成复原' : '正式上架' }} · 再消耗 1 点行动力
        </button>
        <div v-if="state.labPending.passed && state.ap < 1" class="small muted">行动力不足，结果已保存，明天可以继续。</div>
        <button class="btn block" type="button" :disabled="state.phase !== 'playing'" @click="adjustPending">按反馈调整并重试 · 再用 1 份样品</button>
        <button class="text-button" type="button" @click="clearPending">收起结果</button>
      </div>
    </div>

    <template v-else-if="page === 'home'">
      <div class="card card-pad intro">
        <strong>从配方到上架</strong>
        <div class="small muted">选配方、做试验、看试吃反馈。合格品可以生产，精制品以更高熟练度起步。</div>
      </div>

      <div class="section-title">配方改良</div>
      <div v-if="improvable.length" class="product-list">
        <button v-for="product in improvable" :key="product.id" class="card product-row" type="button" @click="selectImprovement(product)">
          <span class="product-info"><strong>{{ product.name }}</strong><span class="small muted">当前 Lv{{ state.levels[product.id] || 1 }}</span></span>
          <span class="chip">诊断问题</span>
        </button>
      </div>
      <div v-else class="card card-pad small muted">目前没有可改良的产品。</div>

      <div class="section-title">新品研发</div>
      <button
        v-for="product in products"
        :key="product.id"
        class="card product-row"
        type="button"
        :disabled="product.month > state.month || state.unlocked.includes(product.id)"
        @click="selectProduct(product)"
      >
        <span class="product-info">
          <strong>{{ product.name }}</strong>
          <span class="small muted">{{ product.id === 'signature' ? 'M26 · 外婆旧配方复原' : `M${product.month} 起 · ${product.desc}` }}</span>
        </span>
        <span class="chip">{{ state.unlocked.includes(product.id) ? '已上架' : product.month > state.month ? `M${product.month}开放` : product.id === 'signature' ? '复原' : '开始实验' }}</span>
      </button>

      <div class="section-title">实验档案</div>
      <div v-if="reportRows.length" class="report-list">
        <div v-for="row in reportRows" :key="row.product.id" class="card card-pad report-row">
          <strong>{{ row.product.name }}</strong>
          <div v-for="key in ['development', 'improvement']" :key="key" class="report-entry">
            <template v-if="row.reports[key]">
              <span>{{ stageLabel(row.reports[key]) }}</span>
              <span class="small muted">第 {{ row.reports[key].run }} 轮 · M{{ row.reports[key].month }}</span>
              <div v-if="row.reports[key].feedback?.length" class="small muted">{{ row.reports[key].feedback.join(' ') }}</div>
            </template>
          </div>
        </div>
      </div>
      <div v-else class="card card-pad small muted">完成实验后，报告会保存到这里并跨周目保留。</div>
    </template>

    <div v-else-if="page === 'develop' && task" class="card card-pad form">
      <h2>{{ productById(selectedProduct).name }} · 新品设计</h2>
      <p class="small muted">{{ task.theme }} {{ task.focus }}</p>
      <div class="hint">图鉴线索：{{ (STORY.codex[selectedProduct] || {}).hint || productById(selectedProduct).desc }}</div>

      <div class="field">
        <div class="field-title">风味方向</div>
        <button v-for="(option, index) in FLAVOR_DIRECTIONS" :key="option" type="button" class="choice" :class="{ chosen: direction === index }" @click="direction = index">{{ option }}</button>
      </div>
      <div class="field">
        <div class="field-title">核心食材 <span class="small muted">可多选</span></div>
        <button v-for="ingredient in recipeOptions(selectedProduct)" :key="ingredient" type="button" class="choice" :class="{ chosen: ingredients.includes(ingredient) }" @click="toggleIngredient(ingredient)">{{ ingredient }}</button>
        <div class="small muted">配方提示：{{ (STORY.codex[selectedProduct] || {}).hint || '' }}</div>
      </div>
      <div class="field">
        <div class="field-title">{{ task.ratioLabel }}</div>
        <button v-for="(option, index) in RATIO_LEVELS" :key="option" type="button" class="choice" :class="{ chosen: ratio === index }" @click="ratio = index">{{ option }}</button>
      </div>
      <div class="field">
        <div class="field-title">制作工艺</div>
        <button v-for="(option, index) in task.processes" :key="option" type="button" class="choice" :class="{ chosen: process === index }" @click="process = index">{{ option }}</button>
      </div>
      <div class="field">
        <div class="field-title">装饰取舍 <span class="small muted">越丰富，外观越高，成本分越低</span></div>
        <button v-for="(option, index) in DECORATION_LEVELS" :key="option" type="button" class="choice" :class="{ chosen: decoration === index }" @click="decoration = index">{{ option }} · 外观 {{ [72, 90, 100][index] }} / 成本 {{ COST_SCORES[index] }}</button>
      </div>
      <button class="btn primary block" type="button" :disabled="!trialSelectionsReady || state.ap < 1 || !canConsumeRecipe(selectedProduct, 0.25) || state.dayPhase !== 'prep' || state.phase !== 'playing'" @click="startTaste">开始试吃 · 1 点行动力</button>
      <div class="small muted">{{ !trialSelectionsReady ? '请先选择风味、食材、主料比例和制作工艺。' : !canConsumeRecipe(selectedProduct, 0.25) ? '配方材料不足，请先采购。' : state.ap < 1 ? '当前行动力不足。' : state.dayPhase !== 'prep' ? '营业阶段不能试做，请先结束营业日。' : '' }}失败消耗 1 点行动力和四分之一份配方材料；合格后上架再消耗 1 点行动力。</div>
    </div>

    <div v-else-if="page === 'signature'" class="card card-pad form">
      <h2>外婆的桂花栗子蛋糕 · 复原试验</h2>
      <p class="small muted">手记线索：「栗子甜则少放糖，桂花香淡则后撒。」先选核心材料，再完成三项判断。</p>
      <div class="field">
        <div class="field-title">核心食材</div>
        <button v-for="ingredient in recipeOptions('signature')" :key="ingredient" type="button" class="choice" :class="{ chosen: ingredients.includes(ingredient) }" @click="toggleIngredient(ingredient)">{{ ingredient }}</button>
      </div>
      <div class="field">
        <div class="field-title">栗子甜度</div>
        <button v-for="(option, index) in ['减少额外糖量', '维持标准糖量', '再增加一些糖']" :key="option" type="button" class="choice" :class="{ chosen: direction === index }" @click="direction = index">{{ option }}</button>
      </div>
      <div class="field">
        <div class="field-title">桂花冻的处理</div>
        <button v-for="(option, index) in ['趁热拌进栗子泥', '冷却后单独夹层', '趁热浸入戚风胚']" :key="option" type="button" class="choice" :class="{ chosen: ratio === index }" @click="ratio = index">{{ option }}</button>
      </div>
      <div class="field">
        <div class="field-title">金桂的加入时间</div>
        <button v-for="(option, index) in ['烘烤前加入', '蛋糕冷却后撒', '装盒前现撒']" :key="option" type="button" class="choice" :class="{ chosen: process === index }" @click="process = index">{{ option }}</button>
      </div>
      <button class="btn primary block" type="button" :disabled="!signatureSelectionsReady || state.ap < 1 || !canConsumeRecipe('signature', 0.25) || state.dayPhase !== 'prep' || state.phase !== 'playing'" @click="startSignatureTaste">试吃复原配方 · 1 点行动力</button>
      <div class="small muted">{{ !signatureSelectionsReady ? '请选齐复原食材和三项判断。' : !canConsumeRecipe('signature', 0.25) ? '配方材料不足，请先采购。' : state.ap < 1 ? '当前行动力不足。' : state.dayPhase !== 'prep' ? '营业阶段不能试做，请先结束营业日。' : '' }}失败消耗 1 点行动力和四分之一份配方材料，复原成功再消耗 1 点行动力。</div>
    </div>

    <div v-else-if="page === 'improve'" class="card card-pad form">
      <h2>{{ productById(improvementProduct).name }} · 改良诊断</h2>
      <p class="small muted">{{ IMPROVEMENTS[improvementProduct].question }}</p>
      <label v-for="(option, index) in IMPROVEMENTS[improvementProduct].options" :key="option" class="answer">
        <input v-model.number="improvementAnswer" type="radio" :value="index" />
        <span>{{ option }}</span>
      </label>
      <p v-if="improvementFeedback" class="small feedback-line">{{ improvementFeedback }}</p>
      <button class="btn primary block" type="button" :disabled="improvementAnswer < 0 || state.ap < improveActionCost || !canConsumeRecipe(improvementProduct, 0.25) || submitting || state.dayPhase !== 'prep' || state.phase !== 'playing'" @click="submitImprovement">提交改良试验 · 失败 1 / 成功 2 点行动力</button>
      <div class="small muted">{{ improvementAnswer < 0 ? '请选择一个改良方案。' : !canConsumeRecipe(improvementProduct, 0.25) ? '配方材料不足，请先采购。' : state.ap < improveActionCost ? `当前行动力不足：本次至少需要 ${improveActionCost} 点。` : state.dayPhase !== 'prep' ? '营业阶段不能进行改良。' : '' }}试验消耗四分之一份配方材料；选错消耗 1 点行动力，可免费重选；选对消耗 2 点行动力并提升 1 级。</div>
    </div>

    <p v-if="notice" class="small notice">{{ notice }}</p>
  </section>
</template>

<style scoped>
.lab { display: grid; gap: 10px; }
.lab-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.lab-title { color: var(--caramel); font-size: 18px; font-weight: 700; }
.lab-sub,.small { font-size: 11px; line-height: 1.65; }
.muted { color: var(--ink-2); }
.back,.text-button { border: 0; background: transparent; color: var(--caramel); font: inherit; cursor: pointer; }
.intro { display: grid; gap: 4px; }
.section-title { margin: 5px 2px -4px; color: var(--caramel); font-size: 14px; font-weight: 700; }
.product-list,.report-list { display: grid; gap: 7px; }
.product-row { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 8px; padding: 11px 12px; border: 1px solid var(--line); text-align: left; cursor: pointer; }
.product-row:disabled { opacity: .58; cursor: default; }
.product-info { display: grid; gap: 3px; min-width: 0; }
.product-info .small { overflow-wrap: anywhere; }
.chip { flex: 0 0 auto; padding: 4px 8px; border-radius: 999px; background: var(--apricot); color: var(--caramel); font-size: 10px; }
.form h2 { margin: 0 0 6px; color: var(--caramel); font-size: 17px; }
.form p { margin: 0 0 10px; line-height: 1.7; }
.hint { margin: 6px 0 10px; padding: 8px; border-radius: 9px; background: var(--apricot); color: var(--ink-2); font-size: 11px; line-height: 1.7; }
.field { margin: 11px 0; }
.field-title { margin-bottom: 6px; color: var(--ink); font-size: 12px; font-weight: 650; }
.choice { display: block; width: 100%; min-height: 36px; margin: 0 0 6px; padding: 7px 10px; border: 1px solid var(--line); border-radius: 10px; background: var(--paper); color: var(--caramel); font: inherit; font-size: 12px; text-align: left; cursor: pointer; }
.choice.chosen { border-color: var(--sage); background: var(--sage); color: white; }
.btn.block { margin-top: 10px; }
.result-title { color: var(--caramel); font-size: 18px; font-weight: 700; }
.scores { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 7px; margin: 12px 0; }
.score { display: flex; justify-content: space-between; padding: 9px 10px; border-radius: 9px; background: var(--apricot); color: var(--ink-2); font-size: 12px; }
.score strong { color: var(--caramel); font-size: 16px; }
.feedback { margin: 8px 0; padding-left: 18px; color: var(--ink-2); font-size: 12px; line-height: 1.8; }
.result-actions { display: grid; gap: 6px; }
.signature-cg { display: block; width: 100%; max-height: 240px; margin-top: 10px; border-radius: 12px; object-fit: cover; }
.report-row { display: grid; gap: 7px; font-size: 12px; }
.report-entry { display: grid; gap: 3px; padding-top: 7px; border-top: 1px dashed var(--line); }
.answer { display: flex; align-items: flex-start; gap: 8px; margin: 8px 0; padding: 10px; border: 1px solid var(--line); border-radius: 10px; color: var(--caramel); font-size: 12px; line-height: 1.6; }
.answer input { margin: 3px 0 0; accent-color: var(--sage); }
.feedback-line,.notice { color: var(--berry); }
.notice { margin: 0 3px; }
</style>
