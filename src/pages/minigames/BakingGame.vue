<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { art, artStatus, INGREDIENTS, RECIPE_BOM } from '../../data';
import { state, availableProducts, setPlan, missingIngredients, beginProductionTest, finishProductionTest, canConsumeRecipe, capacity, planPoints, save, displayProductName } from '../../store';
import MiniShell from './MiniShell.vue';

const props = defineProps({ tutorial: { type: Boolean, default: false } });
const emit = defineEmits(['exit']);
const phase = ref('intro');
const chosen = ref(props.tutorial ? 'plain' : Object.keys(state.plan)[0] || 'strawberry');
const quantity = ref(props.tutorial ? 1 : Math.max(1, state.plan[chosen.value] || 2));
const picked = ref([]);
const mix = ref(0);
const bake = ref(0);
const heat = ref(175);
const garnish = ref('');
const wrong = ref(0);
const scores = ref({ materials: 0, mix: 0, oven: 0, garnish: 0 });
const message = ref('');
const settlement = ref(null);
let timer;
const recipe = computed(() => RECIPE_BOM[chosen.value] || {});
const ingredients = computed(() => Object.keys(recipe.value));
const ingredientChoices = computed(() => [...new Set([...ingredients.value, 'base', 'dairy', 'decor', 'cocoa', 'strawberry', 'matcha', 'mango', 'chestnut'])].map(id => INGREDIENTS.find(x => x.id === id)).filter(Boolean));
const materialName = (id) => INGREDIENTS.find(x => x.id === id)?.name || id;
const cakeArt = (id) => artStatus(`cake-${id}.webp`) === 'ok' ? art(`cake-${id}.webp`) : '';
const garnishOptions = computed(() => ['奶油裱花', '新鲜草莓', '巧克力碎', '芒果果粒', '抹茶红豆', '桂花栗子', '坚果薄脆', '时令鲜果']);
const rightGarnish = computed(() => ({ plain: '奶油裱花', strawberry: '新鲜草莓', chocolate: '巧克力碎', mango: '芒果果粒', matcha: '抹茶红豆', signature: '桂花栗子', taro: '坚果薄脆', seasonal: '时令鲜果', fig: '时令鲜果', festival: '奶油裱花', custom: '奶油裱花', tiramisu: '巧克力碎' })[chosen.value] || '奶油裱花');
const progress = computed(() => phase.value === 'ingredients' ? 20 : phase.value === 'mix' ? 40 : phase.value === 'oven' ? 60 : phase.value === 'decoration' ? 85 : phase.value === 'result' ? 100 : 0);

function checkpoint() {
  if (props.tutorial || !state.productionMini || phase.value === 'intro' || phase.value === 'result') return;
  state.productionMini.checkpoint = {
    phase: phase.value, picked: [...picked.value], mix: mix.value, bake: bake.value,
    heat: heat.value, garnish: garnish.value, wrong: wrong.value, scores: { ...scores.value },
  };
  save();
}

function resume() {
  if (props.tutorial) return false;
  const mini = state.productionMini;
  const cp = mini?.checkpoint;
  if (!mini || !cp || !['ingredients', 'mix', 'oven', 'decoration'].includes(cp.phase)) return false;
  chosen.value = mini.product;
  quantity.value = state.plan[mini.product] || quantity.value;
  picked.value = [...(cp.picked || [])];
  mix.value = Number(cp.mix) || 0;
  bake.value = Number(cp.bake) || 0;
  heat.value = Number(cp.heat) || 175;
  garnish.value = cp.garnish || '';
  wrong.value = Number(cp.wrong) || 0;
  scores.value = { materials: 0, mix: 0, oven: 0, garnish: 0, ...cp.scores };
  phase.value = cp.phase;
  message.value = '已恢复上次完成的操作步骤，可以接着制作。';
  return true;
}

function begin() {
  if (props.tutorial) {
    chosen.value = 'plain';
    quantity.value = 1;
    picked.value = [];
    wrong.value = 0;
    message.value = '选取原味奶油蛋糕需要的材料，接着完成搅拌、烘烤和装饰。所有操作都是练习数据。';
    phase.value = 'ingredients';
    return;
  }
  if (state.dayPhase !== 'prep') return message.value = '今天已经完成制作，请在下一个营业日再来。';
  if (resume()) return;
  if (!state.unlocked.includes(chosen.value)) return message.value = '配方还未解锁。';
  setPlan(chosen.value, quantity.value);
  if (Object.keys(missingIngredients()).length) return message.value = '材料不足，请先到街上的食材铺采购，再来制作。';
  if (planPoints() > capacity.value) return message.value = '今天的产能不足，请降低排产数量。';
  if (!canConsumeRecipe(chosen.value)) return message.value = '请先补齐这款蛋糕所需的材料。';
  if (!state.productionMini && !beginProductionTest()) return message.value = '请先完成排产后再开始制作。';
  if (state.productionMini.product !== chosen.value) {
    // 排产包含多个产品时，按主打产品的实际配方闯关。
    chosen.value = state.productionMini.product;
  }
  picked.value = [];
  wrong.value = 0;
  message.value = '按配方逐一准备原料。其他批次会由店里的伙伴协助完成。';
  phase.value = 'ingredients';
  checkpoint();
}

function chooseIngredient(id) {
  if (picked.value.includes(id)) return;
  if (!ingredients.value.includes(id)) { wrong.value++; message.value = `${materialName(id)}不是本次配方需要的原料。`; return; }
  if (id !== ingredients.value[picked.value.length]) {
    wrong.value++;
    message.value = `请按操作单的顺序放入：先取${materialName(ingredients.value[picked.value.length])}。`;
    checkpoint();
    return;
  }
  if (!props.tutorial && (state.pantry[id] || 0) + (state.legacyStock || 0) < recipe.value[id] * quantity.value) {
    message.value = `${materialName(id)}余量不足，请检查排产或购买材料。`; return;
  }
  picked.value = [...picked.value, id];
  message.value = `${materialName(id)}已放到操作台。`;
  checkpoint();
}

function toMix() {
  if (picked.value.length !== ingredients.value.length) return message.value = '还有食材没有放到操作台。';
  scores.value.materials = Math.max(40, 100 - wrong.value * 15);
  message.value = '按住搅拌按钮，到绿色的最佳区间（72%～86%）松开。';
  phase.value = 'mix';
  checkpoint();
}

function stopHold() { if (timer) { clearInterval(timer); timer = undefined; checkpoint(); } }
function startHold(kind) {
  if (timer) return;
  timer = setInterval(() => {
    const target = kind === 'mix' ? mix : bake;
    target.value = Math.min(100, target.value + 1.8);
    if (target.value >= 100) stopHold();
  }, 46);
}
function finishMix() {
  stopHold();
  if (mix.value < 8) return message.value = '再多搅拌一会儿才能成型。';
  scores.value.mix = Math.max(0, 100 - Math.abs(mix.value - 79) * 2.8);
  phase.value = 'oven';
  message.value = '设定炉温，再按住烘烤按钮，在 72%～86% 停止。';
  checkpoint();
}
function finishOven() {
  stopHold();
  if (bake.value < 8) return message.value = '蛋糕胚还没有烤熟。';
  scores.value.oven = Math.max(0, 100 - Math.abs(bake.value - 79) * 2.8 - Math.abs(heat.value - 175) * 1.4);
  phase.value = 'decoration';
  message.value = '依据目标蛋糕的外观，选择最合适的顶部装饰。';
  checkpoint();
}
function finish() {
  if (!garnish.value) return message.value = '还没有完成装饰。';
  scores.value.garnish = garnish.value === rightGarnish.value ? 100 : 45;
  const points = Math.round(scores.value.materials * .3 + scores.value.mix * .25 + scores.value.oven * .25 + scores.value.garnish * .2);
  if (props.tutorial) {
    settlement.value = { score: points, bonus: 0, name: displayProductName(chosen.value), qty: 1, grade: points >= 90 ? '优秀' : points >= 70 ? '良好' : '普通' };
    phase.value = 'result';
    return;
  }
  const r = finishProductionTest(points, false, garnish.value);
  if (!r.ok) { message.value = r.msg || r.message; return; }
  settlement.value = { score: points, bonus: r.bonus || 0, name: displayProductName(chosen.value), qty: state.dayMade, grade: points >= 90 ? '优秀' : points >= 70 ? '良好' : '普通' };
  save();
  phase.value = 'result';
}

onMounted(resume);
onUnmounted(stopHold);
</script>

<template>
  <MiniShell bg="minigame-production" title="蛋糕制作" :sub="tutorial ? '小游戏体验 · 不消耗经营资源' : phase === 'intro' ? '每日制作 · 一天只需完成一次' : '制作进度 ' + progress + '%'" @exit="emit('exit')">
    <div v-if="phase !== 'intro' && phase !== 'result'" class="game-banner">{{ displayProductName(chosen) }} · {{ ({ ingredients: '准备材料', mix: '搅拌蛋糕胚', oven: '烘烤定型', decoration: '完成装饰' })[phase] }} <div class="game-progress"><i :style="{ width: progress + '%' }" /></div></div>
    <div class="game-scroll">
      <div v-if="phase === 'intro'" class="game-card">
        <h3 class="game-title">{{ tutorial ? '跟着做一份原味奶油蛋糕' : '今天的主打蛋糕' }}</h3>
        <p class="game-lead">{{ tutorial ? '小游戏会依次练习选材料、搅拌、烘烤和装饰。按住操作按钮控制进度，练习不会扣材料或增加成品。' : '选择配方并安排数量。完成一次材料、搅拌、烘烤和装饰操作，即可为今天整批蛋糕定级。' }}</p>
        <div v-if="!tutorial" class="game-grid">
          <button v-for="p in availableProducts" :key="p.id" type="button" class="game-btn game-tile" :class="{selected:chosen===p.id}" @click="chosen=p.id;quantity=state.plan[p.id]||2">
            <img v-if="cakeArt(p.id)" :src="cakeArt(p.id)" :alt="p.name"><span>{{ displayProductName(p.id) }}</span><small>难度 {{ p.diff }}</small>
          </button>
        </div>
        <div v-if="!tutorial" class="game-row"><strong>制作数量</strong><input class="game-number" type="number" min="1" max="12" v-model.number="quantity"></div>
        <p class="game-lead">配方原料：{{ Object.entries(recipe).map(([id,n])=> materialName(id)+' ×'+(n*quantity)).join('、') }}</p>
        <p v-if="!tutorial" class="game-lead">已有排产 {{ Object.values(state.plan).reduce((a,b)=>a+b,0) }} 份 · 体力 {{ state.stamina }} · 优秀额外奖励 ¥30</p>
        <div v-if="message" class="game-message">{{ message }}</div>
        <button class="game-btn primary" type="button" style="width:100%;margin-top:10px" @click="begin">{{ tutorial ? '开始小游戏体验' : '进入操作台' }}</button>
      </div>

      <div v-if="phase === 'ingredients'" class="game-card">
        <h3 class="game-title">① 备齐制作材料</h3>
        <p class="game-lead">按顺序取用：{{ ingredients.map(materialName).join(' → ') }}。已取 {{ picked.length }} / {{ ingredients.length }} 种</p>
        <div class="game-grid"><button v-for="item in ingredientChoices" :key="item.id" type="button" class="game-btn" :class="{selected:picked.includes(item.id)}" @click="chooseIngredient(item.id)">{{ item.name }}<br>{{ tutorial ? '练习材料' : '仓库 ' + (state.pantry[item.id]||0) }}</button></div>
        <button class="game-btn primary" type="button" style="width:100%" :disabled="picked.length<ingredients.length" @click="toMix">原料齐了 · 开始搅拌</button>
      </div>

      <div v-if="phase === 'mix'" class="game-card">
        <h3 class="game-title">② 掌握搅拌程度</h3><p class="game-lead">绿色区间是理想程度；过早和过晚都会降低松软度。</p>
        <div class="game-progress"><i :style="{width:mix+'%',background:mix>=72&&mix<=86?'#719776':'#d1aa78'}"/></div><div class="game-center">{{ Math.round(mix) }}%</div>
        <button class="game-btn primary" type="button" style="width:100%;touch-action:none" @pointerdown.prevent="startHold('mix')" @pointerup="stopHold" @pointercancel="stopHold" @pointerleave="stopHold">按住搅拌 · 松开停止</button>
        <button class="game-btn" type="button" style="width:100%;margin-top:7px" @click="finishMix">确认搅拌结果 →</button>
      </div>

      <div v-if="phase === 'oven'" class="game-card">
        <h3 class="game-title">③ 炉温和烘烤时间</h3><div class="game-row"><span>设定温度</span><div class="game-grid" style="flex:1;margin:0"><button v-for="v in [160,175,190]" :key="v" type="button" class="game-btn" :class="{selected:heat===v}" @click="heat=v">{{ v }}°C</button></div></div>
        <div class="game-progress"><i :style="{width:bake+'%',background:bake>=72&&bake<=86?'#719776':'#d1aa78'}"/></div><div class="game-center">烘烤 {{ Math.round(bake) }}%</div>
        <button class="game-btn primary" type="button" style="width:100%;touch-action:none" @pointerdown.prevent="startHold('bake')" @pointerup="stopHold" @pointercancel="stopHold" @pointerleave="stopHold">按住烘烤计时 · 松开停炉</button>
        <button class="game-btn" type="button" style="width:100%;margin-top:7px" @click="finishOven">蛋糕胚出炉 →</button>
      </div>

      <div v-if="phase === 'decoration'" class="game-card">
        <h3 class="game-title">④ 选择表面装饰</h3><p class="game-lead">参考成品外观，选择适合的装饰，选错也可以继续完成。</p>
        <div class="game-center"><img v-if="cakeArt(chosen)" :src="cakeArt(chosen)" style="height:115px;max-width:60%;object-fit:contain" alt="目标蛋糕"></div>
        <div class="game-grid two"><button v-for="opt in garnishOptions" :key="opt" type="button" class="game-btn" :class="{selected:garnish===opt}" @click="garnish=opt">{{ opt }}</button></div>
        <button class="game-btn primary" type="button" style="width:100%" @click="finish">完成制作并入库</button>
      </div>

      <div v-if="phase === 'result' && settlement" class="game-card">
        <h3 class="game-title">制作完成 · {{ settlement.grade }}</h3>
        <div class="game-center"><img v-if="cakeArt(chosen)" :src="cakeArt(chosen)" style="height:130px;max-width:75%;object-fit:contain" alt="完成蛋糕"></div>
        <div class="game-stats"><span>综合得分 {{ settlement.score }}</span><span>蛋糕 {{ settlement.name }}</span><span>{{ tutorial ? '练习完成' : '今日累计制作 ' + settlement.qty + ' 份' }}</span><span>{{ tutorial ? '不影响正式经营' : '额外奖励 ¥' + settlement.bonus }}</span></div>
        <p class="game-lead">{{ tutorial ? '你已经体验了选料、搅拌、烘烤和装饰。正式营业时，小游戏成绩会影响当日主打批次品质。' : '已入库，可用于订单、市集和联名。今天完成一次制作小游戏即可。' }}</p>
        <button class="game-btn primary" type="button" style="width:100%" @click="emit('exit')">{{ tutorial ? '完成小游戏练习' : '返回烘焙后厨' }}</button>
      </div>
      <div v-if="message && phase !== 'intro' && phase !== 'result'" class="game-message">{{ message }}</div>
    </div>
  </MiniShell>
</template>


