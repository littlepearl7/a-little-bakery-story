<script setup>
import { computed, ref } from 'vue';
import { PRODUCTS, PHOTOS, CITIES } from '../data';
import { state, priceOf } from '../store';
import { STORY } from '../story';
import CakeArt from '../components/CakeArt.vue';

const seg = ref('product');

const products = computed(() =>
  PRODUCTS.map((p) => ({
    ...p,
    flavor: (STORY.codex[p.id] || {}).flavor || p.desc,
    hint: (STORY.codex[p.id] || {}).hint || '',
    owned: state.unlocked.includes(p.id),
    lv: Math.round((state.levels[p.id] || 1) * 10) / 10,
    price: priceOf(p.id),
    sold: state.monthSold[p.id] || 0,
  }))
);

const photos = computed(() =>
  Object.keys(PHOTOS).map((id) => ({ id, ...PHOTOS[id], owned: state.photos.includes(id) }))
);

const cities = computed(() =>
  CITIES.map((c) => ({
    ...c,
    owned: state.cities.includes(c.id),
    surveyed: state.surveyed.includes(c.id),
  }))
);
</script>

<template>
  <div>
    <div class="seg">
      <button
        v-for="s in [
          { k: 'product', t: '产品' },
          { k: 'photo', t: '相册' },
          { k: 'city', t: '门店' },
        ]"
        :key="s.k"
        type="button"
        :class="{ on: seg === s.k }"
        @click="seg = s.k"
      >
        {{ s.t }}
      </button>
    </div>

    <div v-if="seg === 'product'" class="card">
      <div v-for="p in products" :key="p.id" class="cake" :class="{ locked: !p.owned }">
        <div class="art"><CakeArt :colors="p.colors" /></div>
        <div class="body">
          <div class="name">
            <span>{{ p.name }}</span>
            <span v-if="p.owned" class="chip" style="font-size: 10px">Lv{{ p.lv }}</span>
          </div>
          <div class="desc">{{ p.owned ? p.flavor : '第 ' + p.month + ' 个月解锁' }}</div>
          <div v-if="p.owned && p.hint" class="hint">配方：{{ p.hint }}</div>
          <div v-if="p.owned" class="nums">
            <span>¥{{ p.price }}</span>
            <span>{{ p.diff }} 点/个</span>
            <span>本月卖出 {{ p.sold }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="seg === 'photo'">
      <div class="photos">
        <div v-for="p in photos" :key="p.id" class="photo">
          <div class="im">
            <img v-if="p.owned && p.img" :src="p.img" :alt="p.title" />
            <span v-else-if="p.owned" class="small muted">未冲印</span>
            <span v-else style="font-size: 20px; opacity: 0.3">?</span>
          </div>
          <div class="cp">
            <div class="ti">{{ p.owned ? p.title : '还没发生' }}</div>
            <div class="cc">{{ p.owned ? p.caption : '继续经营，它会出现' }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="card">
      <div
        v-for="c in cities"
        :key="c.id"
        class="city"
        :class="{ on: c.owned, off: !c.owned && !c.surveyed }"
      >
        <span class="dot"></span>
        <div style="flex: 1 1 auto; min-width: 0">
          <div class="nm">
            {{ c.name }}
            <span v-if="c.owned" class="chip sage" style="font-size: 10px">营业中</span>
            <span v-else-if="c.surveyed" class="chip pink" style="font-size: 10px">已考察</span>
          </div>
          <div class="nt">{{ c.note }}</div>
          <div v-if="!c.owned" class="nt">
            第 {{ c.month }} 个月可考察 · 口碑 {{ c.rep }} · 开店 ¥{{ c.cost }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.seg {
  display: flex;
  margin-bottom: 12px;
  padding: 3px;
  background: var(--apricot);
  border-radius: 999px;
}
.seg button {
  flex: 1 1 0;
  height: 32px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--caramel-soft);
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
}
.seg button.on {
  background: var(--paper);
  color: var(--caramel);
  font-weight: 600;
  box-shadow: var(--shadow);
}
</style>

<style scoped>
.hint {
  margin-top: 3px;
  font-size: 11px;
  color: var(--ink-2);
  opacity: 0.85;
}
</style>
