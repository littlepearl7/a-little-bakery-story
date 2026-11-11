<script setup>
import { computed } from 'vue';
import { CHARACTERS, PHOTOS } from '../data';
import { state } from '../store';

defineEmits(['album']);

const sq = CHARACTERS.sq;
const owned = computed(() => state.photos.length);
const total = computed(() => Object.keys(PHOTOS).length);
const recent = computed(() =>
  state.photos.slice(-3).reverse().map((id) => ({ id, ...PHOTOS[id] }))
);
</script>

<template>
  <div>
    <div class="card" style="overflow: hidden">
      <div style="display: flex">
        <div class="portrait">
          <img :src="sq.full" alt="苏晴" />
        </div>
        <div style="flex: 1 1 auto; padding: 14px 14px 14px 13px">
          <div class="serif" style="font-size: 18px; font-weight: 600">苏晴</div>
          <div class="small muted">高中同学 · 22 岁 · 九月生日</div>
          <div class="small" style="margin-top: 8px; line-height: 1.6">
            不在店里上班，也不拿工资。她有自己的生活，只是在几个重要的时刻会出现。
          </div>
          <div class="stat" style="margin-top: 12px">
            <span class="k">友情值</span>
            <span class="track"><span class="fill pink" :style="{ width: state.friendship + '%' }"></span></span>
            <span class="v">{{ Math.round(state.friendship) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="between">
        <div>
          <div class="h2" style="margin: 0">友情相册</div>
          <div class="small muted" style="margin-top: 2px">
            已收集 {{ owned }} / {{ total }} 张
          </div>
        </div>
        <button class="btn" type="button" @click="$emit('album')">翻一翻</button>
      </div>

      <div v-if="recent.length" style="margin-top: 12px">
        <div
          v-for="p in recent"
          :key="p.id"
          class="between"
          style="padding: 7px 0; border-bottom: 1px dashed var(--line-soft)"
        >
          <span class="small">{{ p.title }}</span>
          <span class="small muted">{{ p.caption.slice(0, 12) }}…</span>
        </div>
      </div>
      <div v-else class="empty">还没有照片。剧情推进后会自动收进来。</div>
    </div>

    <div class="card card-pad" style="margin-top: 12px">
      <div class="h2">她发来的消息</div>
      <div class="small" style="line-height: 1.9; color: var(--caramel-soft)">
        <p style="margin: 0 0 8px">「今天路过一家花店，看到一束花特别适合你的店。」</p>
        <p style="margin: 0 0 8px">「最近是不是又在忙新品？记得休息。」</p>
        <p style="margin: 0">「下次见面记得给我留一块蛋糕。」</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portrait {
  flex: 0 0 132px;
  height: 300px;
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
</style>
