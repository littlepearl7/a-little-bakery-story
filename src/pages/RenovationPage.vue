<script setup>
import { computed } from 'vue';
import { DEVICES, DECORATIONS, SHOP_LEVELS, shopLevelInfo } from '../data';
import { state, actionInfo, doAction, deviceTier, deviceNext, upgradeDevice, buyDecoration, decorationComfort } from '../store';

const nextShop = computed(() => SHOP_LEVELS.find((level) => level.lv === state.shopLevel + 1));
const devices = computed(() => DEVICES.map((item) => ({ ...item, tier: deviceTier(item.id), next: deviceNext(item.id) })));
const decorations = computed(() => DECORATIONS.map((item) => ({ ...item, owned: state.decorations.includes(item.id), available: state.shopLevel >= item.shopLevel })));

function upgradeShop() {
  if (state.dayPhase !== 'prep') return;
  const info = actionInfo('decorate');
  if (!info.disabled && state.ap >= info.ap && state.cash >= info.cost) doAction('decorate', {});
}
</script>

<template>
  <div>
    <div class="card card-pad">
      <div class="between"><div class="h2">店铺升级</div><span class="chip">{{ shopLevelInfo(state.shopLevel).name }}</span></div>
      <div class="small muted">舒适度 {{ decorationComfort }}/4 · 自然客流 +{{ decorationComfort * 2 }}%</div>
      <button class="btn primary block" style="margin-top:10px" type="button" :disabled="state.dayPhase !== 'prep' || !nextShop || actionInfo('decorate').disabled || state.ap < 2" @click="upgradeShop">{{ nextShop ? '升级到 ' + nextShop.name + ' · ¥' + nextShop.cost + ' · 2 点行动力' : '已达到最高等级' }}</button>
    </div>
    <div class="card card-pad section-card">
      <div class="h2">装饰</div>
      <div v-for="item in decorations" :key="item.id" class="row-item">
        <div><strong>{{ item.name }}</strong><div class="small muted">改善店内环境 · 店铺等级 {{ item.shopLevel }} · ¥{{ item.cost }}</div></div>
        <button class="btn" type="button" :disabled="state.dayPhase !== 'prep' || item.owned || !item.available || state.cash < item.cost || state.phase !== 'playing'" @click="buyDecoration(item.id)">{{ item.owned ? '已购' : item.available ? '购买' : '等级不足' }}</button>
      </div>
    </div>
    <div class="card card-pad section-card">
      <div class="between"><div class="h2">设备</div><span class="small muted">升级后立即生效</span></div>
      <div v-for="item in devices" :key="item.id" class="row-item">
        <div><strong>{{ item.name }} · {{ item.tier }}/3</strong><div class="small muted">{{ item.desc }} · {{ item.next?.text || '已经满级' }}</div></div>
        <button class="btn" type="button" :disabled="state.dayPhase !== 'prep' || !item.next || state.cash < item.next.cost" @click="upgradeDevice(item.id)">{{ item.next ? '¥' + item.next.cost : '满级' }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-card{margin-top:10px}.row-item{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid var(--line-soft)}.row-item:last-child{border-bottom:0}.row-item strong{font-size:13px}.row-item .small{margin-top:3px;max-width:225px;line-height:1.5}
</style>
