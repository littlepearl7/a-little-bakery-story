<script setup>
import { computed } from 'vue';
import { SHOP_LEVELS, art } from '../data';
import { state, nextShopLevel, doAction, actionMeta } from '../store';

const cur = computed(() => SHOP_LEVELS.find((s) => s.lv === state.shopLevel));
const nxt = computed(() => nextShopLevel.value);
const meta = computed(() => actionMeta('decorate'));
const canPay = computed(() => nxt.value && state.money >= nxt.value.cost && state.ap > 0);

function upgrade() {
  if (canPay.value) doAction('decorate');
}
</script>

<template>
  <div>
    <div class="shop-hero">
      <span class="tag">Lv.{{ state.shopLevel }}</span>
      <img :src="art('shop-exterior.webp')" alt="店铺" />
      <div class="cap">
        <div class="n serif">{{ cur.name }}</div>
        <div class="small muted">{{ cur.desc }}</div>
      </div>
    </div>

    <div class="card" style="margin-top: 12px">
      <div
        v-for="s in SHOP_LEVELS"
        :key="s.lv"
        class="city"
        :class="{ on: s.lv <= state.shopLevel, off: s.lv > state.shopLevel }"
      >
        <span class="dot"></span>
        <div style="flex: 1 1 auto">
          <div class="nm">Lv.{{ s.lv }} {{ s.name }}</div>
          <div class="nt">{{ s.desc }}</div>
        </div>
        <span class="chip" v-if="s.lv === state.shopLevel">当前</span>
        <span class="chip" v-else-if="s.cost">¥{{ s.cost }}</span>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <template v-if="nxt">
        <div class="h2">升级到 {{ nxt.name }}</div>
        <p class="small muted" style="margin: 0 0 10px">
          装修会让客人愿意多坐一会儿。品质 +3，口碑 +3，流水上限也会高一点。
        </p>
        <button class="btn primary block" type="button" :disabled="!canPay" @click="upgrade">
          {{ state.money >= nxt.cost ? '花 ¥' + nxt.cost + ' 装修' : '还差 ¥' + (nxt.cost - state.money) }}
        </button>
        <p class="small muted" style="margin: 8px 2px 0; text-align: center">
          装修要花掉本月 1 点行动力
        </p>
      </template>
      <div v-else class="empty">已经是最高等级了。这家店现在是你能做到的最好的样子。</div>
    </div>
  </div>
</template>
