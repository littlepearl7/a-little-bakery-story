<script setup>
import { computed, ref, watch } from 'vue';
import { CITIES } from '../data';
import { state, actionInfo, doAction, stageInfo, stageProgress } from '../store';
import ResearchLab from './ResearchLab.vue';

const props = defineProps({ initialSection: { type: String, default: 'overview' } });
const emit = defineEmits(['open-panel']);
const open = ref(props.initialSection);
const flash = ref('');
let timer = 0;
watch(() => props.initialSection, (value) => (open.value = value));

const nextCity = computed(() => CITIES.find((city) => !state.cities.includes(city.id) && !state.surveyed.includes(city.id)));
const survey = computed(() => actionInfo('survey'));
const branch = computed(() => actionInfo('branch'));

function run(id) {
  const info = actionInfo(id);
  if (state.dayPhase !== 'prep' || info.disabled || state.ap < info.ap || state.cash < info.cost) {
    say(state.dayPhase !== 'prep' ? '请在营业前筹备。' : info.note);
    return;
  }
  if (doAction(id, {})) say(id === 'survey' ? '城市考察完成，可以安排开店。' : '新店筹备完成。');
  else say('暂时无法完成这项筹备。');
}

function say(text) {
  flash.value = text;
  clearTimeout(timer);
  timer = setTimeout(() => (flash.value = ''), 2200);
}
</script>

<template>
  <div>
    <ResearchLab v-if="open === 'lab'" />

    <template v-else-if="open === 'branch'">
      <div class="card card-pad">
        <div class="h2">城市考察与分店筹备</div>
        <p class="small muted">在准备阶段安排考察和开店。下一站：{{ nextCity?.name || '所有城市已纳入版图' }}</p>
        <div class="between small"><span>{{ survey.name }}</span><span>行动力 {{ survey.ap }} · ¥{{ survey.cost }}</span></div>
        <div class="small muted">{{ survey.note }}</div>
        <button class="btn block" type="button" :disabled="state.dayPhase !== 'prep' || survey.disabled || state.ap < survey.ap" @click="run('survey')">开始城市考察</button>
        <div v-if="state.surveyed.length" class="branch-row">
          <div class="between small"><strong>{{ branch.name }}</strong><span>行动力 {{ branch.ap }} · ¥{{ branch.cost }}</span></div>
          <div class="small muted">{{ branch.note }}</div>
          <button class="btn primary block" type="button" :disabled="state.dayPhase !== 'prep' || branch.disabled || state.ap < branch.ap" @click="run('branch')">筹备并开店</button>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="card card-pad">
        <div class="between">
          <div><div class="h2" style="margin:0">经营手账</div><div class="small muted">记录阶段目标、经营结果与重要收藏。</div></div>
          <span class="chip">行动力 {{ state.ap }}/{{ state.maxAp }}</span>
        </div>
        <button class="btn primary block" style="margin-top:10px" type="button" @click="emit('open-panel', 'codex')">打开产品图鉴、顾客档案与相册</button>
      </div>

      <div class="card card-pad" style="margin-top:10px">
        <div class="between" style="margin-bottom:8px"><div class="h2" style="margin:0">阶段目标</div><span class="chip" :class="stageProgress.done >= stageProgress.need ? 'sage' : ''">{{ stageProgress.done }} / {{ stageProgress.need || '—' }}</span></div>
        <div class="small muted" style="margin-bottom:8px">{{ stageInfo.name }} · 完成 {{ stageProgress.need }} 项即可进入下一阶段。</div>
        <div v-for="goal in stageProgress.list" :key="goal.text" class="goal" :class="{ done: goal.done }"><span class="dot"></span><span>{{ goal.text }}</span><span v-if="goal.expand" class="chip pink" style="font-size:10px">扩张</span></div>
      </div>

      <div class="card card-pad" style="margin-top:10px">
        <div class="between"><div class="h2">本月经营</div><span class="chip">第 {{ state.day }}/5 日</span></div>
        <div class="between small"><span class="muted">本月已到账</span><span>¥{{ state.monthRev.toLocaleString() }}</span></div>
        <div class="between small"><span class="muted">本月销量</span><span>{{ Object.values(state.monthSold).reduce((sum, qty) => sum + qty, 0) }} 个</span></div>
        <div class="between small"><span class="muted">口碑 / 知名度</span><span>{{ Math.round(state.reputation) }} / {{ Math.round(state.popularity) }}</span></div>
      </div>

      <div class="card card-pad" style="margin-top:10px">
        <div class="h2">最近发生的事</div>
        <div v-if="!state.log.length" class="empty">还没有记录。</div>
        <div v-for="(line, index) in state.log.slice(0, 12)" :key="index" class="logline" :class="line.tone"><span class="d">{{ line.month }}月{{ line.day }}日</span><span class="x">{{ line.text }}</span></div>
      </div>
    </template>

    <p v-if="flash" class="small" style="color:var(--berry);margin:10px 2px 0" role="status">{{ flash }}</p>
  </div>
</template>

<style scoped>
.branch-row{margin-top:12px;padding-top:12px;border-top:1px solid var(--line-soft)}
</style>
