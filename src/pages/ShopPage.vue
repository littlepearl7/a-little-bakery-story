<script setup>
import { computed } from 'vue';
import { art, shopLevelInfo, stageOf, monthLabel } from '../data';
import { state } from '../store';

const lv = computed(() => shopLevelInfo(state.shopLevel));
const stage = computed(() => stageOf(state.month));

const stats = computed(() => [
  { k: '烘焙', v: state.skill, cls: '' },
  { k: '品质', v: state.quality, cls: '' },
  { k: '口碑', v: state.reputation, cls: 'sage' },
  { k: '知名度', v: state.fame, cls: 'sage' },
  { k: '友情', v: state.friendship, cls: 'pink' },
]);
</script>

<template>
  <div>
    <div class="shop-hero">
      <span class="tag">{{ lv.name }}</span>
      <img :src="art('shop-exterior.webp')" alt="林记糕点铺" />
      <div class="cap">
        <div class="n serif">林记烘焙</div>
        <div class="small muted">
          {{ stage.name }} · {{ monthLabel(state.month) }}
        </div>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="h2">店里的情况</div>
      <div
        class="stat"
        v-for="s in stats"
        :key="s.k"
      >
        <span class="k">{{ s.k }}</span>
        <span class="track"><span class="fill" :class="s.cls" :style="{ width: s.v + '%' }"></span></span>
        <span class="v">{{ Math.round(s.v) }}</span>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="h2">经营概况</div>
      <div class="between" style="margin-bottom: 6px">
        <span class="small muted">门店 / 员工</span>
        <span class="small">{{ state.stores }} 家 · {{ state.staff }} 人</span>
      </div>
      <div class="between" style="margin-bottom: 6px">
        <span class="small muted">原料库存</span>
        <span class="small">{{ state.stock }} 份</span>
      </div>
      <div class="between" style="margin-bottom: 6px">
        <span class="small muted">已解锁配方</span>
        <span class="small">{{ state.recipes.length }} 款</span>
      </div>
      <div class="between">
        <span class="small muted">本月收支（预计）</span>
        <span class="small">{{ state.lastNet >= 0 ? '+' : '' }}{{ state.lastNet }}</span>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="h2">最近发生的事 <span class="sub">最新在上</span></div>
      <div v-if="!state.log.length" class="empty">还没有记录。去「经营」做点什么吧。</div>
      <div
        v-for="(l, i) in state.log.slice(0, 8)"
        :key="i"
        class="logline"
        :class="l.tone"
      >
        <span class="d">{{ l.month }}月</span>
        <span class="x">{{ l.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stat .fill {
  min-width: 3px;
}
</style>
