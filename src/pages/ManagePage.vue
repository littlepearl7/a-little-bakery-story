<script setup>
import { computed, ref, watch } from 'vue';
import { state, actionInfo, doAction, stageInfo, stageProgress, staffList } from '../store';
import ResearchLab from './ResearchLab.vue';

const props = defineProps({ initialSection: { type: String, default: 'overview' } });
const open = ref(props.initialSection);
const flash = ref('');
let timer = 0;

watch(() => props.initialSection, (value) => (open.value = value));

const actions = computed(() =>
  ['restock', 'feedback', 'talk', 'sqchat', 'market', 'train', 'decorate', 'survey', 'branch'].map(
    (id) => ({ id, info: actionInfo(id) })
  )
);

const targets = computed(() => {
  if (open.value === 'train' || open.value === 'talk') {
    return staffList().map((p) => ({
      id: p.id,
      label: p.nick,
      sub: '信赖 ' + Math.round(state.partnerTrust[p.id] || 0),
    }));
  }
  return [];
});
function needTarget(id) {
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
    open.value = open.value === id ? 'overview' : id;
    return;
  }
  run(id, {});
}

function run(id, opt) {
  const ok = doAction(id, opt);
  open.value = 'overview';
  if (!ok) say('没有执行成功，检查一下行动力或资金');
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

    <div v-if="open === 'overview'" class="card card-pad lab-entry">
      <div>
        <div class="h2" style="margin: 0">林记烘焙实验室</div>
        <div class="small muted">亲手研发新品、改良旧配方，回看每次成功实验。</div>
      </div>
      <button class="btn primary" type="button" @click="open = 'lab'">进入实验室</button>
    </div>

    <div v-if="open === 'overview'" class="act-grid" style="margin-top: 10px">
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

    <div v-if="open !== 'overview' && open !== 'lab' && targets.length" class="card card-pad" style="margin-top: 10px">
      <div class="h2">和谁？</div>
      <div class="pills">
        <button
          v-for="t in targets"
          :key="t.id"
          type="button"
          class="pill"
          @click="run(open, { partner: t.id })"
        >
          {{ t.label }} <span class="muted">{{ t.sub }}</span>
        </button>
      </div>
    </div>

    <p v-if="flash" class="small" style="color: var(--berry); margin: 10px 2px 0">{{ flash }}</p>

    <div v-if="open === 'overview'" class="card card-pad" style="margin-top: 12px">
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

    <div v-if="open === 'overview'" class="card card-pad" style="margin-top: 12px">
      <div class="h2">最近发生的事</div>
      <div v-if="!state.log.length" class="empty">还没有记录。</div>
      <div v-for="(l, i) in state.log.slice(0, 10)" :key="i" class="logline" :class="l.tone">
        <span class="d">{{ l.month }}月{{ l.day }}日</span>
        <span class="x">{{ l.text }}</span>
      </div>
    </div>

    <ResearchLab v-else-if="open === 'lab'" />
  </div>
</template>

<style scoped>
.act .cost {
  display: block;
  margin-top: 3px;
  color: var(--berry);
}
.lab-entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
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
