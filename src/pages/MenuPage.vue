<script setup>
import { computed } from 'vue';
import { CAKES } from '../data';
import { state } from '../store';
import CakeArt from '../components/CakeArt.vue';

const list = computed(() =>
  CAKES.map((c) => ({
    ...c,
    owned: state.recipes.includes(c.id),
    reachable: state.skill >= c.skill,
  }))
);

const newest = computed(() => state.recipes[state.recipes.length - 1]);
</script>

<template>
  <div>
    <div class="card card-pad" style="margin-bottom: 12px">
      <div class="h2" style="margin-bottom: 4px">菜单</div>
      <div class="small muted">
        已解锁 {{ state.recipes.length }} / {{ CAKES.length }} 款。烘焙技能到 {{ Math.round(state.skill) }}，
        每一款都有自己的门槛。
      </div>
    </div>

    <div class="card">
      <div v-for="c in list" :key="c.id" class="cake" :class="{ locked: !c.owned }">
        <div class="art">
          <CakeArt :colors="c.colors" />
        </div>
        <div class="body">
          <div class="name">
            <span>{{ c.name }}</span>
            <span v-if="c.id === newest" class="new">新</span>
          </div>
          <div class="desc">{{ c.owned ? c.desc : '烘焙 ' + c.skill + ' 后可以研发' }}</div>
          <div class="nums">
            <span>售价 ¥{{ c.price }}</span>
            <span>成本 ¥{{ c.cost }}</span>
            <span>品质 +{{ c.quality }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
