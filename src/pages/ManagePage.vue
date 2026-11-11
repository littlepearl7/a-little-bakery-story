<script setup>
import { computed, ref } from 'vue';
import { ACTIONS } from '../data';
import {
  state,
  actionMeta,
  doAction,
  endMonth,
  monthlyIncome,
  monthlyExpense,
  avgPrice,
} from '../store';

const flash = ref('');
let flashTimer = 0;

const cards = computed(() =>
  ACTIONS.map((a) => {
    const m = actionMeta(a.id);
    return {
      ...a,
      meta: m,
      disabled:
        state.ap <= 0 || m.disabled || (m.cost > 0 && state.money < m.cost),
    };
  })
);

function run(id) {
  const ok = doAction(id);
  if (!ok) {
    flash.value = '现在做不了这件事';
  } else {
    flash.value = '';
  }
  clearTimeout(flashTimer);
  flashTimer = setTimeout(() => (flash.value = ''), 1600);
}

function settle() {
  endMonth();
}
</script>

<template>
  <div>
    <div class="card card-pad">
      <div class="between">
        <div>
          <div class="h2" style="margin: 0">本月行动力</div>
          <div class="small muted" style="margin-top: 2px">
            每个动作消耗 1 点，月底会重新给满
          </div>
        </div>
        <div class="row" style="gap: 5px">
          <span v-for="i in 3" :key="i" class="ap-dot" :class="{ on: i <= state.ap }"></span>
        </div>
      </div>
    </div>

    <div class="act-grid" style="margin-top: 10px">
      <button
        v-for="c in cards"
        :key="c.id"
        class="act"
        type="button"
        :disabled="c.disabled"
        @click="run(c.id)"
      >
        <span class="t">
          <span>{{ c.meta.title }}</span>
          <span class="c" v-if="c.meta.cost > 0">¥{{ c.meta.cost }}</span>
        </span>
        <span class="n">{{ c.meta.note }}</span>
      </button>
    </div>

    <p v-if="flash" class="small" style="color: var(--berry); margin: 10px 2px 0">
      {{ flash }}
    </p>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="h2">月底结算</div>
      <div class="between" style="margin-bottom: 5px">
        <span class="small muted">自动收入（门店流水）</span>
        <span class="small">+{{ monthlyIncome }}</span>
      </div>
      <div class="between" style="margin-bottom: 5px">
        <span class="small muted">固定支出（房租 / 工资 / 装修）</span>
        <span class="small">-{{ monthlyExpense }}</span>
      </div>
      <div class="between" style="margin-bottom: 12px">
        <span class="small muted">当前客单价（均值）</span>
        <span class="small">¥{{ avgPrice }}</span>
      </div>
      <button class="btn primary block" type="button" @click="settle">
        结束这个月
      </button>
      <p class="small muted" style="margin: 9px 2px 0; text-align: center">
        钱不够时不会倒闭，只会过得紧一点
      </p>
    </div>
  </div>
</template>
