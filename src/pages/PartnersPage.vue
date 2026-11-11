<script setup>
import { computed } from 'vue';
import { CHARACTERS, PARTNERS, PHOTOS } from '../data';
import { state } from '../store';

const mom = CHARACTERS.nu;
const sq = CHARACTERS.sq;

const rows = computed(() =>
  PARTNERS.map((p) => {
    const joined = state.staff.includes(p.id);
    return {
      ...p,
      joined,
      trust: Math.round(state.partnerTrust[p.id] || 0),
      skill: Math.round((state.partnerSkill[p.id] || 0) * 10) / 10,
    };
  })
);

const photoCount = computed(() => state.photos.length);
const photoTotal = computed(() => Object.keys(PHOTOS).length);
</script>

<template>
  <div>
    <div class="card" style="overflow: hidden">
      <div style="display: flex">
        <div class="portrait"><img :src="mom.full" alt="林暖" /></div>
        <div style="flex: 1 1 auto; padding: 14px">
          <div class="serif" style="font-size: 18px; font-weight: 600">林暖</div>
          <div class="small muted">母亲 · 林记上一任经营者</div>
          <div class="stat" style="margin-top: 12px">
            <span class="k">家庭默契</span>
            <span class="track"><span class="fill" :style="{ width: state.momBond + '%' }"></span></span>
            <span class="v">{{ Math.round(state.momBond) }}</span>
          </div>
          <div class="small muted" style="margin-top: 6px; line-height: 1.6">
            前期仍在店里帮忙，每天能搭 60 点产能。她不会替你把所有事都做完。
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top: 12px; overflow: hidden">
      <div style="display: flex">
        <div class="portrait"><img :src="sq.full" alt="苏晴" /></div>
        <div style="flex: 1 1 auto; padding: 14px">
          <div class="serif" style="font-size: 18px; font-weight: 600">苏晴</div>
          <div class="small muted">高中好友 · 摄影从业者</div>
          <div class="stat" style="margin-top: 12px">
            <span class="k">友情</span>
            <span class="track"><span class="fill pink" :style="{ width: state.friendship + '%' }"></span></span>
            <span class="v">{{ Math.round(state.friendship) }}</span>
          </div>
          <div class="small muted" style="margin-top: 6px; line-height: 1.6">
            不在员工名单里。相册 {{ photoCount }} / {{ photoTotal }} 张。
          </div>
        </div>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="h2">伙伴 <span class="sub">{{ state.staff.length }} / {{ PARTNERS.length }} 人</span></div>
      <div v-for="p in rows" :key="p.id" class="mate" :class="{ off: !p.joined }">
        <div class="ava" :style="{ background: p.color }">{{ p.name.slice(0, 1) }}</div>
        <div style="flex: 1 1 auto; min-width: 0">
          <div class="nm">
            {{ p.name }}
            <span class="chip" style="font-size: 10px">{{ p.role }}</span>
            <span v-if="!p.joined" class="chip pink" style="font-size: 10px">第 {{ p.joinMonth }} 个月加入</span>
          </div>
          <div class="nt">{{ p.issue }}</div>
          <div v-if="p.joined" class="bars">
            <span class="b">
              <span class="bl">信赖</span>
              <span class="bt"><span class="bf" :style="{ width: p.trust + '%' }"></span></span>
              <span class="bv">{{ p.trust }}</span>
            </span>
            <span class="b">
              <span class="bl">{{ p.skillName }}</span>
              <span class="bt"><span class="bf sage" :style="{ width: p.skill * 20 + '%' }"></span></span>
              <span class="bv">{{ p.skill }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="h2">经营偏好 <span class="sub">长期选择积累出的风格</span></div>
      <div
        class="stat"
        v-for="s in [
          { k: '传统', v: state.style.tradition },
          { k: '创新', v: state.style.innovation },
          { k: '效率', v: state.style.efficiency },
          { k: '社区', v: state.style.community },
        ]"
        :key="s.k"
      >
        <span class="k">{{ s.k }}</span>
        <span class="track"><span class="fill" :style="{ width: Math.min(100, s.v) + '%' }"></span></span>
        <span class="v">{{ Math.round(s.v) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portrait {
  flex: 0 0 120px;
  height: 250px;
  background: var(--apricot);
  overflow: hidden;
}
.portrait img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 4%;
}
.mate {
  display: flex;
  gap: 11px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line-soft);
}
.mate:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.mate.off {
  opacity: 0.55;
}
.ava {
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
}
.nm {
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.nt {
  font-size: 11.5px;
  color: var(--ink-2);
  margin-top: 3px;
  line-height: 1.5;
}
.bars {
  margin-top: 7px;
}
.b {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}
.bl {
  flex: 0 0 32px;
  font-size: 11px;
  color: var(--ink-2);
}
.bt {
  flex: 1 1 auto;
  height: 5px;
  background: var(--apricot);
  border-radius: 999px;
  overflow: hidden;
}
.bf {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #f7cbd3, #e79aa8);
}
.bf.sage {
  background: linear-gradient(90deg, #cfdcbb, #9fb184);
}
.bv {
  flex: 0 0 24px;
  text-align: right;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}
</style>
