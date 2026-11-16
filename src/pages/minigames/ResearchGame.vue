<script setup>
import { computed, ref } from 'vue';
import { PRODUCTS, RECIPE_INGREDIENTS, art, artStatus } from '../../data';
import { RESEARCH_TASKS, FLAVOR_DIRECTIONS, RATIO_LEVELS, DECORATION_LEVELS, recipeOptions } from '../../lab';
import { state, availableProducts, beginRecipeWorkshopTrial, publishResearch, discardResearchTrial, nameResearchedRecipe, displayProductName } from '../../store';
import MiniShell from './MiniShell.vue';

const emit = defineEmits(['exit']);
const phase = ref('intro');
const selected = ref('');
const cakeBase = ref('戚风');
const cream = ref('鲜奶油');
const ingredients = ref([]);
const direction = ref(0);
const ratio = ref(1);
const process = ref(1);
const decoration = ref(1);
const proposedName = ref('');
const message = ref('');
const result = ref(null);
const targets = computed(() => PRODUCTS.filter(p=>p.month>0 && !state.unlocked.includes(p.id)));
const task = computed(()=> RESEARCH_TASKS[selected.value]);
const options = computed(()=> recipeOptions(selected.value));
const target = computed(()=>PRODUCTS.find(p=>p.id===selected.value));
const cakeArt = (id)=> artStatus(`cake-${id}.webp`)==='ok' ? art(`cake-${id}.webp`) : '';
const season = computed(()=>['冬日暖心','春日花园','夏日果香','秋日收获'][Math.floor((state.month-1)%12/3)]);

function openTarget(id) {
  if (state.labPending) return message.value = '先处理保留的试吃结果，再开始新实验。';
  const p = PRODUCTS.find(x=>x.id===id);
  if (!p || p.month>state.month) return message.value = `这款配方要第 ${p?.month||'?'} 个月才能研发。`;
  selected.value=id;
  ingredients.value=[];
  proposedName.value=p.name;
  message.value='根据目标风味，先选四类食材，再调整制作细节。';
  phase.value='compose';
}
function toggle(id) { ingredients.value=ingredients.value.includes(id)? ingredients.value.filter(x=>x!==id):[...ingredients.value,id]; }
function experiment() {
  if (!ingredients.value.length) return message.value='请至少选择一种特色原料。';
  const r = beginRecipeWorkshopTrial({ productId:selected.value, type:selected.value==='signature'?'signature':undefined, ingredients:ingredients.value, base:cakeBase.value, cream:cream.value, direction:direction.value, ratio:ratio.value, process:process.value, decoration:decoration.value, sugar:direction.value, filling:ratio.value, garnish:process.value });
  if (!r.ok) return message.value=r.message;
  result.value={...state.labPending};
  phase.value='result';
  message.value='已消耗 1 点行动力与四分之一配方原料。';
}
function publish() {
  const r=publishResearch();
  if(!r.ok) return message.value=r.message;
  nameResearchedRecipe(selected.value,proposedName.value||target.value.name);
  message.value='新配方已永久收藏，能用于制作、交付、市集和联名。';
  phase.value='unlocked';
}
function revise() {
  if(state.labPending)discardResearchTrial();
  phase.value='compose';
  message.value='已保留选择，修改后可再次试做（重新消耗少量原料）。';
}
function resume() {
  if(!state.labPending)return;
  selected.value=state.labPending.productId;
  proposedName.value=PRODUCTS.find(p=>p.id===selected.value)?.name||'';
  result.value={...state.labPending};
  phase.value='result';
}
const unlockedCount=computed(()=>availableProducts.value.length);
</script>

<template>
  <MiniShell bg="minigame-research" title="配方研发" :sub="season+' · 已有配方 '+unlockedCount+' 款'" @exit="emit('exit')">
    <div class="game-scroll">
      <div v-if="phase==='intro'" class="game-card">
        <h3 class="game-title">从灵感到新配方</h3>
        <p class="game-lead">选择研发目标，在配方本里组合蛋糕胚、奶油、风味材料和装饰，反复试做。实验真正消耗食材与行动力，成功后永久解锁商品。</p>
        <div class="game-stats"><span>研发行动力 {{ state.ap }}</span><span>已收藏 {{ unlockedCount }} / {{ PRODUCTS.length }}</span></div>
        <button v-if="state.labPending" class="game-btn primary" type="button" style="width:100%;margin:10px 0" @click="resume">继续上次试吃（{{ state.labPending.score }} 分）</button>
        <div class="game-section">可研发目标及解锁时间</div>
        <div class="game-grid two"><button v-for="p in targets" :key="p.id" type="button" class="game-btn game-tile" :disabled="p.month>state.month || !!state.labPending" @click="openTarget(p.id)"><img v-if="cakeArt(p.id)" :src="cakeArt(p.id)" alt=""><span>{{p.name}}</span><small>{{p.month>state.month?`第 ${p.month} 月开放`:'可开始试做'}}</small></button></div>
      </div>

      <div v-if="phase==='compose'" class="game-card">
        <h3 class="game-title">{{ target?.name }} · 配方本</h3>
        <p class="game-lead">研发主题：{{ task?.theme }}<br>提示：{{ task?.focus }}</p>
        <div class="game-section">① 蛋糕胚</div><div class="game-grid four"><button v-for="v in ['原味','巧克力','抹茶','戚风']" :key="v" class="game-btn" :class="{selected:cakeBase===v}" type="button" @click="cakeBase=v">{{ v }}</button></div>
        <div class="game-section">② 奶油与夹心</div><div class="game-grid two"><button v-for="v in ['鲜奶油','巧克力奶油','栗子泥','芝士']" :key="v" class="game-btn" :class="{selected:cream===v}" type="button" @click="cream=v">{{ v }}</button></div>
        <div class="game-section">③ 水果与风味 · 可多选</div><div class="game-grid two"><button v-for="v in options" :key="v" class="game-btn" :class="{selected:ingredients.includes(v)}" type="button" @click="toggle(v)">{{v}}</button></div>
        <div class="game-section">④ 表面装饰</div><div class="game-grid"><button v-for="(v,i) in DECORATION_LEVELS" :key="v" class="game-btn" :class="{selected:decoration===i}" type="button" @click="decoration=i">{{v}}</button></div>
        <div class="game-section">风味方向</div><div class="game-grid"><button v-for="(v,i) in FLAVOR_DIRECTIONS" :key="v" class="game-btn" :class="{selected:direction===i}" type="button" @click="direction=i">{{v}}</button></div>
        <div class="game-section">{{task?.ratioLabel||'主料比例'}}</div><div class="game-grid"><button v-for="(v,i) in RATIO_LEVELS" :key="v" class="game-btn" :class="{selected:ratio===i}" type="button" @click="ratio=i">{{v}}</button></div>
        <div class="game-section">制作工艺</div><div class="game-grid"><button v-for="(v,i) in task?.processes||[]" :key="v" class="game-btn" :class="{selected:process===i}" type="button" @click="process=i">{{v}}</button></div>
        <p class="game-lead">核心原料线索：{{ (RECIPE_INGREDIENTS[selected]||[]).flat().length }} 种 · 实验消耗四分之一配方材料与 1 点行动力。</p>
        <button class="game-btn primary" style="width:100%" type="button" @click="experiment">开始试做 · 查看品鉴</button>
      </div>

      <div v-if="phase==='result' && result" class="game-card">
        <h3 class="game-title">{{result.passed?'试吃合格 · 可以上架':'研发线索 · 需要调整'}}</h3>
        <div class="game-center"><img v-if="cakeArt(result.productId)" :src="cakeArt(result.productId)" style="height:110px;max-width:70%;object-fit:contain" alt="试做成品"></div>
        <div class="game-stats"><span>综合 {{ result.score }} 分</span><span>口味 {{ result.scores?.flavor }}</span><span>口感 {{ result.scores?.texture }}</span><span>外观 {{ result.scores?.appearance }}</span></div>
        <p v-for="(text,i) in result.feedback" :key="i" class="game-lead">• {{text}}</p>
        <div v-if="result.passed"><div class="game-section">给新蛋糕命名</div><input class="game-number" style="width:100%;text-align:left;padding:0 10px;box-sizing:border-box" v-model="proposedName" maxlength="20" aria-label="新配方名称"><button class="game-btn primary" style="width:100%;margin-top:9px" type="button" @click="publish">确认上架 · 消耗 1 点行动力</button></div>
        <button class="game-btn" style="width:100%;margin-top:8px" type="button" @click="revise">调整搭配后再试</button>
      </div>

      <div v-if="phase==='unlocked'" class="game-card game-center"><h3 class="game-title">🎂 新配方研发成功</h3><p>{{displayProductName(selected)}}</p><p class="game-lead">已加入永久配方收藏，未来生产与经营均可使用。</p><button class="game-btn primary" style="width:100%" type="button" @click="emit('exit')">返回后厨</button></div>
      <div v-if="message" class="game-message">{{message}}</div>
    </div>
  </MiniShell>
</template>

