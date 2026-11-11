<script setup>
import { computed } from 'vue';
import { CITIES } from '../data';
import { state, doAction } from '../store';

const rows = computed(() =>
  CITIES.map((c, i) => {
    const opened = i < state.stores;
    const isNext = i === state.stores;
    const met = state.reputation >= c.rep && state.fame >= c.fame;
    return { ...c, opened, isNext, met, can: isNext && met && state.money >= c.cost && state.ap > 0 };
  })
);

function open(city) {
  if (city.can) doAction('branch');
}
</script>

<template>
  <div>
    <div class="card card-pad" style="margin-bottom: 12px">
      <div class="h2" style="margin-bottom: 4px">门店地图</div>
      <div class="small muted">
        已开 {{ state.stores }} / {{ CITIES.length }} 家。开店需要钱、口碑和知名度，还要花 1 点行动力。
      </div>
    </div>

    <div class="card">
      <div v-for="c in rows" :key="c.id" class="city" :class="{ on: c.opened, off: !c.opened && !c.isNext }">
        <span class="dot"></span>
        <div style="flex: 1 1 auto; min-width: 0">
          <div class="nm">
            {{ c.name }}
            <span class="chip sage" v-if="c.opened && c.id !== 'qiyun'">营业中</span>
            <span class="chip pink" v-else-if="c.isNext">下一家</span>
          </div>
          <div class="nt">{{ c.note }}</div>
          <div class="nt" v-if="!c.opened">
            需要 口碑 {{ c.rep }} · 知名度 {{ c.fame }} · ¥{{ c.cost }}
          </div>
        </div>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <template v-if="rows[state.stores]">
        <div class="h2">在 {{ rows[state.stores].name }} 开店</div>
        <p class="small muted" style="margin: 0 0 10px">{{ rows[state.stores].note }}</p>
        <div class="between small" style="margin-bottom: 6px">
          <span class="muted">资金</span>
          <span>¥{{ state.money }} / ¥{{ rows[state.stores].cost }}</span>
        </div>
        <div class="between small" style="margin-bottom: 6px">
          <span class="muted">口碑</span>
          <span>{{ Math.round(state.reputation) }} / {{ rows[state.stores].rep }}</span>
        </div>
        <div class="between small" style="margin-bottom: 12px">
          <span class="muted">知名度</span>
          <span>{{ Math.round(state.fame) }} / {{ rows[state.stores].fame }}</span>
        </div>
        <button
          class="btn primary block"
          type="button"
          :disabled="!rows[state.stores].can"
          @click="open(rows[state.stores])"
        >
          {{ rows[state.stores].met ? '签约开店' : '条件还没到' }}
        </button>
      </template>
      <div v-else class="empty">八座城市都开了。全国布局完成。</div>
    </div>
  </div>
</template>
