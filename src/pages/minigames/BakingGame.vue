<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { art, artStatus, INGREDIENTS, RECIPE_BOM } from '../../data';
import { state, availableProducts, setPlan, missingIngredients, beginProductionTest, finishProductionTest, canConsumeRecipe, capacity, planPoints, save, displayProductName } from '../../store';
import { averagePipingScore, createPipingRun, restorePipingCheckpoint, scorePipingClick } from './piping';
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
const wrong = ref(0);
const scores = ref({ materials: 0, mix: 0, oven: 0, garnish: 0 });
const piping = ref(null);
const pointerAngle = ref(0);
const message = ref('');
const settlement = ref(null);
let timer;
let pointerFrame;
let pointerFrameTime = 0;
let pointerSaveTime = 0;
const recipe = computed(() => RECIPE_BOM[chosen.value] || {});
const ingredients = computed(() => Object.keys(recipe.value));
const ingredientChoices = computed(() => [...new Set([...ingredients.value, 'base', 'dairy', 'decor', 'cocoa', 'strawberry', 'matcha', 'mango', 'chestnut'])].map(id => INGREDIENTS.find(x => x.id === id)).filter(Boolean));
const materialName = (id) => INGREDIENTS.find(x => x.id === id)?.name || id;
const cakeArt = (id) => artStatus(`cake-${id}.webp`) === 'ok' ? art(`cake-${id}.webp`) : '';
const progress = computed(() => phase.value === 'ingredients' ? 20 : phase.value === 'mix' ? 40 : phase.value === 'oven' ? 60 : phase.value === 'piping' ? 70 + (piping.value?.results.length || 0) * 5 : phase.value === 'result' ? 100 : 0);
const pipingPalette = computed(() => ({
  plain: ['#f4dfb2', '#fff7e7', '#d6b775'], strawberry: ['#f7d3d1', '#fff1eb', '#cf777e'],
  chocolate: ['#704c43', '#e8c5a5', '#4a302a'], taro: ['#d6c3df', '#fff1fa', '#92739f'],
  matcha: ['#b9c49b', '#fff8e2', '#738457'], mango: ['#f3c779', '#fff2cf', '#c08228'],
  tiramisu: ['#ad7b60', '#f5dec4', '#694233'], fig: ['#e5c5ca', '#fff0f1', '#9c596b'],
  seasonal: ['#e3d09a', '#fff2d8', '#a56e4b'], custom: ['#f5ccd8', '#fff2f5', '#a36d81'],
  festival: ['#c9856e', '#ffebdc', '#8c493d'], signature: ['#d2a868', '#fff0ca', '#98703e'],
}[chosen.value] || ['#f4dfb2', '#fff7e7', '#d6b775']));
const pipingCakeStyle = computed(() => ({ '--cake-color': pipingPalette.value[0], '--cream-color': pipingPalette.value[1], '--cake-edge': pipingPalette.value[2] }));
const pointerStyle = computed(() => ({ transform: `rotate(${pointerAngle.value}deg)` }));
const skillLevel = computed(() => props.tutorial ? 1 : Number(state.levels[chosen.value]) || 1);

function checkpoint() {
  if (props.tutorial || !state.productionMini || phase.value === 'intro' || phase.value === 'result') return;
  state.productionMini.checkpoint = {
    phase: phase.value, picked: [...picked.value], mix: mix.value, bake: bake.value,
    heat: heat.value, wrong: wrong.value, scores: { ...scores.value },
    piping: piping.value ? { ...piping.value, angle: pointerAngle.value, targets: [...piping.value.targets], results: [...piping.value.results] } : null,
  };
  save();
}

function resume() {
  if (props.tutorial) return false;
  const mini = state.productionMini;
  const savedCheckpoint = mini?.checkpoint;
  if (!mini || !savedCheckpoint || !['ingredients', 'mix', 'oven', 'decoration', 'piping'].includes(savedCheckpoint.phase)) return false;
  const cp = restorePipingCheckpoint(savedCheckpoint);
  chosen.value = mini.product;
  quantity.value = state.plan[mini.product] || quantity.value;
  picked.value = [...(cp.picked || [])];
  mix.value = Number(cp.mix) || 0;
  bake.value = Number(cp.bake) || 0;
  heat.value = Number(cp.heat) || 175;
  wrong.value = Number(cp.wrong) || 0;
  scores.value = { materials: 0, mix: 0, oven: 0, garnish: 0, ...cp.scores };
  phase.value = cp.phase;
  piping.value = cp.piping || null;
  pointerAngle.value = Number(piping.value?.angle) || 0;
  message.value = '已恢复上次完成的操作步骤，可以接着制作。';
  if (cp.migrated) checkpoint();
  return true;
}

function begin() {
  if (props.tutorial) {
    chosen.value = 'plain';
    quantity.value = 1;
    picked.value = [];
    piping.value = null;
    wrong.value = 0;
    message.value = '选取原味奶油蛋糕需要的材料，接着完成搅拌、烘烤和六次裱花练习。练习不会消耗经营资源。';
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
  piping.value = createPipingRun();
  pointerAngle.value = piping.value.angle;
  phase.value = 'piping';
  message.value = '指针对准亮起的位置就点一下，一共六次。';
  checkpoint();
}
function targetPosition(angle) {
  const radians = Number(angle) * Math.PI / 180;
  return { left: `${50 + 42 * Math.cos(radians)}%`, top: `${50 + 42 * Math.sin(radians)}%` };
}
function animatePointer(now) {
  if (phase.value !== 'piping' || !piping.value) { pointerFrame = undefined; return; }
  if (!pointerFrameTime) pointerFrameTime = now;
  const elapsed = Math.min(80, now - pointerFrameTime);
  pointerFrameTime = now;
  pointerAngle.value = (pointerAngle.value + elapsed * piping.value.speed / 1000) % 360;
  if (now - pointerSaveTime >= 1500) {
    piping.value.angle = pointerAngle.value;
    checkpoint();
    pointerSaveTime = now;
  }
  pointerFrame = requestAnimationFrame(animatePointer);
}
function syncPointer() {
  if (phase.value === 'piping' && piping.value && pointerFrame === undefined) {
    pointerFrameTime = 0;
    pointerFrame = requestAnimationFrame(animatePointer);
  } else if (phase.value !== 'piping' && pointerFrame !== undefined) {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = undefined;
    pointerFrameTime = 0;
  }
}
function resetPointerClock() { pointerFrameTime = 0; }
function attemptPiping() {
  if (!piping.value || piping.value.results.length >= 6) return;
  const index = piping.value.current;
  const result = scorePipingClick(pointerAngle.value, piping.value.targets[index], skillLevel.value);
  const entries = [...piping.value.results, result];
  piping.value = { ...piping.value, current: entries.length, angle: pointerAngle.value, results: entries };
  const labels = { perfect: '精准命中', close: '接近目标', poor: '偏差较大', miss: '没有命中' };
  message.value = `${labels[result.tier]} · ${result.score} 分`;
  if (entries.length === 6) {
    scores.value.garnish = averagePipingScore(entries);
    message.value = `六次裱花完成 · 平均 ${scores.value.garnish} 分`;
  }
  checkpoint();
}
function finish() {
  if (!piping.value || piping.value.results.length !== 6) return message.value = '完成六次裱花后才能入库。';
  const points = Math.round(scores.value.materials * .3 + scores.value.mix * .25 + scores.value.oven * .25 + scores.value.garnish * .2);
  if (props.tutorial) {
    settlement.value = { score: points, bonus: 0, name: displayProductName(chosen.value), qty: 1, grade: points >= 90 ? '优秀' : points >= 70 ? '良好' : '普通' };
    phase.value = 'result';
    return;
  }
  const r = finishProductionTest(points, false, '转盘裱花');
  if (!r.ok) { message.value = r.msg || r.message; return; }
  settlement.value = { score: points, bonus: r.bonus || 0, name: displayProductName(chosen.value), qty: state.dayMade, grade: points >= 90 ? '优秀' : points >= 70 ? '良好' : '普通' };
  save();
  phase.value = 'result';
}

watch(phase, syncPointer);
onMounted(() => {
  resume();
  document.addEventListener('visibilitychange', resetPointerClock);
  syncPointer();
});
onUnmounted(() => {
  stopHold();
  checkpoint();
  document.removeEventListener('visibilitychange', resetPointerClock);
  if (pointerFrame !== undefined) cancelAnimationFrame(pointerFrame);
});
</script>

<template>
  <MiniShell bg="minigame-production" title="蛋糕制作" :sub="tutorial ? '小游戏体验 · 不消耗经营资源' : phase === 'intro' ? '每日制作 · 一天只需完成一次' : '制作进度 ' + progress + '%'" @exit="emit('exit')">
    <div v-if="phase !== 'intro' && phase !== 'result'" class="game-banner">{{ displayProductName(chosen) }} · {{ ({ ingredients: '准备材料', mix: '搅拌蛋糕胚', oven: '烘烤定型', piping: '转盘裱花' })[phase] }} <div class="game-progress"><i :style="{ width: progress + '%' }" /></div></div>
    <div class="game-scroll">
      <div v-if="phase === 'intro'" class="game-card">
        <h3 class="game-title">{{ tutorial ? '跟着做一份原味奶油蛋糕' : '今天的主打蛋糕' }}</h3>
        <p class="game-lead">{{ tutorial ? '小游戏会依次练习选材料、搅拌、烘烤和六次裱花。按住按钮控制搅拌和烘烤；裱花时看准指针与亮起的位置重合再点击，练习不会消耗材料。' : '选择配方并安排数量。完成选料、搅拌、烘烤和六次裱花，即可为今天整批蛋糕定级。' }}</p>
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
        <div class="quality-track" role="progressbar" :aria-valuenow="Math.round(mix)" aria-valuemin="0" aria-valuemax="100" aria-label="搅拌进度">
          <span class="quality-zone" /><span class="quality-cursor" :style="{ left: mix + '%' }" />
        </div><div class="game-center">{{ Math.round(mix) }}%</div>
        <button class="game-btn primary" type="button" style="width:100%;touch-action:none" @pointerdown.prevent="startHold('mix')" @pointerup="stopHold" @pointercancel="stopHold" @pointerleave="stopHold">按住搅拌 · 松开停止</button>
        <button class="game-btn" type="button" style="width:100%;margin-top:7px" @click="finishMix">确认搅拌结果 →</button>
      </div>

      <div v-if="phase === 'oven'" class="game-card">
        <h3 class="game-title">③ 炉温和烘烤时间</h3><div class="game-row"><span>设定温度</span><div class="game-grid" style="flex:1;margin:0"><button v-for="v in [160,175,190]" :key="v" type="button" class="game-btn" :class="{selected:heat===v}" @click="heat=v">{{ v }}°C</button></div></div>
        <div class="quality-track" role="progressbar" :aria-valuenow="Math.round(bake)" aria-valuemin="0" aria-valuemax="100" aria-label="烘烤进度">
          <span class="quality-zone" /><span class="quality-cursor" :style="{ left: bake + '%' }" />
        </div><div class="game-center">烘烤 {{ Math.round(bake) }}%</div>
        <button class="game-btn primary" type="button" style="width:100%;touch-action:none" @pointerdown.prevent="startHold('bake')" @pointerup="stopHold" @pointercancel="stopHold" @pointerleave="stopHold">按住烘烤计时 · 松开停炉</button>
        <button class="game-btn" type="button" style="width:100%;margin-top:7px" @click="finishOven">蛋糕胚出炉 →</button>
      </div>

      <div v-if="phase === 'piping'" class="game-card piping-card">
        <h3 class="game-title">④ 裱花挑战 · 还需完成 {{ 6 - (piping?.results.length || 0) }} 次</h3>
        <p class="game-lead">等指针经过亮起的位置时，点蛋糕或下方按钮。错过也计入本轮，可以等它再转回来。</p>
        <button class="piping-board" :style="pipingCakeStyle" type="button" aria-label="点击蛋糕进行裱花" @click="attemptPiping">
          <span class="piping-ring" />
          <span class="piping-cake"><i class="piping-cream" /></span>
          <span class="piping-target" v-for="(angle, index) in piping.targets" :key="index" :style="targetPosition(angle)" :class="{ active: index === piping.current, completed: index < piping.results.length, missed: piping.results[index]?.tier === 'miss' }">
            <i v-if="piping.results[index]?.tier === 'perfect' || piping.results[index]?.tier === 'close'" class="piping-flower" />
            <i v-else-if="piping.results[index]?.tier === 'poor'" class="piping-dot" />
            <b v-else-if="index === piping.current" />
          </span>
          <span class="piping-pointer" :style="pointerStyle"><i /></span>
        </button>
        <div class="piping-count"><strong>{{ piping?.results.length || 0 }} / 6</strong><span>本轮操作进度</span><span>熟练度 Lv{{ skillLevel }} · 指针转速 {{ piping?.speed.toFixed(0) }}°/秒</span></div>
        <p v-if="message" class="piping-feedback" role="status">{{ message }}</p>
        <button class="game-btn primary piping-click" type="button" :disabled="piping?.results.length >= 6" @click="attemptPiping">裱花</button>
        <button v-if="piping?.results.length === 6" class="game-btn primary" type="button" style="width:100%;margin-top:8px" @click="finish">完成制作并入库</button>
      </div>

      <div v-if="phase === 'result' && settlement" class="game-card">
        <h3 class="game-title">制作完成 · {{ settlement.grade }}</h3>
        <div class="game-center"><img v-if="cakeArt(chosen)" :src="cakeArt(chosen)" style="height:130px;max-width:75%;object-fit:contain" alt="完成蛋糕"></div>
        <div class="game-stats"><span>综合得分 {{ settlement.score }}</span><span>蛋糕 {{ settlement.name }}</span><span>{{ tutorial ? '练习完成' : '今日累计制作 ' + settlement.qty + ' 份' }}</span><span>{{ tutorial ? '不影响正式经营' : '额外奖励 ¥' + settlement.bonus }}</span></div>
        <p class="game-lead">{{ tutorial ? '你已经体验了选料、搅拌、烘烤和六次裱花。正式营业时，小游戏成绩会影响当日主打批次品质。' : '已入库，可用于订单、市集和联名。今天完成一次制作小游戏即可。' }}</p>
        <button class="game-btn primary" type="button" style="width:100%" @click="emit('exit')">{{ tutorial ? '完成小游戏练习' : '返回烘焙后厨' }}</button>
      </div>
      <div v-if="message && phase !== 'intro' && phase !== 'result' && phase !== 'piping'" class="game-message">{{ message }}</div>
    </div>
  </MiniShell>
</template>

<style scoped>
.quality-track{position:relative;height:16px;margin:16px 0 8px;border:1px solid #b99c78;border-radius:99px;background:#f0e4d5;overflow:visible}
.quality-zone{position:absolute;left:72%;top:-1px;width:14%;height:calc(100% + 2px);box-sizing:border-box;border-left:2px solid #4e7857;border-right:2px solid #4e7857;border-radius:3px;background:#8dbb8f}
.quality-cursor{position:absolute;top:-6px;bottom:-6px;width:3px;transform:translateX(-50%);border-radius:3px;background:#754a30;box-shadow:0 0 0 1px #fff8ea;z-index:1}
.piping-card{text-align:center}
.piping-board{position:relative;display:block;width:min(76vw,310px);aspect-ratio:1;margin:4px auto 10px;padding:0;border:0;border-radius:50%;background:radial-gradient(circle,#e7cfa8 0 68%,#c7a879 69% 73%,#f3e5cf 74% 80%,#b58b61 81% 83%,transparent 84%);touch-action:manipulation;cursor:pointer}
.piping-ring{position:absolute;inset:7%;border:2px solid #9d7850;border-radius:50%;box-shadow:inset 0 0 0 5px #f4e4cb,0 2px 5px #55392335;pointer-events:none}
.piping-cake{position:absolute;left:50%;top:50%;width:65%;height:65%;transform:translate(-50%,-50%);border:8px solid var(--cake-edge);border-radius:50%;box-sizing:border-box;background:radial-gradient(circle at 34% 30%,#ffffff88 0 3%,transparent 4%),radial-gradient(circle at 64% 67%,#ffffff55 0 2%,transparent 3%),var(--cake-color);box-shadow:0 5px 8px #523b2855,inset 0 0 0 4px #ffffff54;pointer-events:none}
.piping-cream{position:absolute;inset:22%;border:1px dashed var(--cream-color);border-radius:50%;opacity:.75}
.piping-target{position:absolute;display:grid;place-items:center;width:24px;height:24px;transform:translate(-50%,-50%);border:2px solid #fff5dc;border-radius:50%;box-sizing:border-box;background:#8b674b;color:#fff7e6;z-index:3;pointer-events:none;box-shadow:0 1px 4px #39291c85}
.piping-target.active{width:31px;height:31px;border:3px solid #fff4a8;background:#f6bf55;box-shadow:0 0 0 5px #f6bf5550,0 0 17px #fff2b7;animation:piping-pulse 1.2s ease-in-out infinite}
.piping-target.completed,.piping-target.missed{background:transparent;border-color:transparent;box-shadow:none}
.piping-pointer{position:absolute;left:50%;top:50%;width:45%;height:3px;transform-origin:left center;z-index:4;pointer-events:none}
.piping-pointer i{position:absolute;inset:0;border-radius:3px;background:#9b3f42;box-shadow:0 0 4px #fff}
.piping-pointer:after{content:"";position:absolute;right:-4px;top:50%;width:10px;height:10px;transform:translateY(-50%);border:2px solid #fff4e0;border-radius:50%;background:#d7514d;box-shadow:0 1px 4px #493021}
.piping-flower{display:block;width:22px;height:22px;border-radius:50%;background:radial-gradient(circle at 50% 50%,#edbf61 0 19%,transparent 21%),radial-gradient(circle at 50% 12%,var(--cream-color) 0 22%,transparent 24%),radial-gradient(circle at 84% 38%,var(--cream-color) 0 22%,transparent 24%),radial-gradient(circle at 72% 82%,var(--cream-color) 0 22%,transparent 24%),radial-gradient(circle at 28% 82%,var(--cream-color) 0 22%,transparent 24%),radial-gradient(circle at 16% 38%,var(--cream-color) 0 22%,transparent 24%);filter:drop-shadow(0 1px 1px #6b4a3470)}
.piping-dot{display:block;width:8px;height:8px;border:1px solid #fff8e7;border-radius:50%;background:var(--cream-color);box-shadow:0 1px 3px #523b28}
.piping-target.active b{width:7px;height:7px;border-radius:50%;background:#fff}
.piping-count{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:5px 10px;color:#866b54;font-size:11px}
.piping-count strong{font-size:17px;color:#6b4a34}
.piping-feedback{min-height:22px;margin:5px 0;color:#6b4a34;font-size:13px;font-weight:700}
.piping-click{width:100%;min-height:48px}
@keyframes piping-pulse{50%{transform:translate(-50%,-50%) scale(1.12)}}
</style>

