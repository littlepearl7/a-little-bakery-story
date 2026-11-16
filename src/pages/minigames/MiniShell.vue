<script setup>
/**
 * 小游戏通用外壳：整屏背景 + 顶部返回 + 标题。
 * 所有小游戏都套这一层，保证进去是独立页面，而不是在主界面上弹窗。
 */
import { art, artStatus } from '../../data';

const props = defineProps({
  bg: { type: String, required: true },      // minigame-delivery 之类
  title: { type: String, default: '' },
  sub: { type: String, default: '' },
});
defineEmits(['exit']);

const base = art(props.bg + '.webp');
const src = artStatus(props.bg + '.webp') === 'ok' ? base : art(props.bg + '.png');
</script>

<template>
  <div class="mg" role="region" :aria-label="title + '独立游戏界面'">
    <div class="mg-frame">
      <img class="mg-bg" :src="src" alt="" />
      <div class="mg-shade" />

      <header class="mg-top">
        <button class="mg-back" type="button" @click="$emit('exit')" aria-label="返回">←</button>
        <div class="mg-title">
          <div class="t">{{ title }}</div>
          <div class="s" v-if="sub">{{ sub }}</div>
        </div>
        <div class="mg-slot"><slot name="top" /></div>
      </header>

      <div class="mg-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.mg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 400;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100dvh;
  width: 100vw;
  touch-action: pan-y;
  overscroll-behavior: contain;
  background: #3e2c22;
  font-family: inherit;
}
.mg-frame {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(100vw, 56.25dvh);
  height: 100dvh;
  max-width: 100vw;
  flex: 0 0 auto;
  overflow: hidden;
  background: #f7e6d0;
  box-shadow: 0 0 55px rgba(18, 9, 5, 0.35);
}
.mg-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mg-shade {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(60, 38, 22, 0.34) 0%, rgba(60, 38, 22, 0) 26%, rgba(60, 38, 22, 0) 62%, rgba(52, 32, 18, 0.42) 100%);
  pointer-events: none;
}
.mg-top {
  position: relative;
  min-width: 0;
  box-sizing: border-box;
  width: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: calc(8px + env(safe-area-inset-top)) 12px 6px;
}
.mg-back {
  flex: 0 0 auto;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 250, 242, 0.55);
  border-radius: 50%;
  background: rgba(255, 250, 242, 0.82);
  color: var(--caramel);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}
.mg-back:active {
  transform: scale(0.94);
}
.mg-title {
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  color: #fffaf2;
  text-shadow: 0 1px 6px rgba(52, 32, 18, 0.45);
}
.mg-title .t {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.mg-title .s {
  font-size: 11px;
  opacity: 0.88;
  margin-top: 1px;
}
.mg-slot {
  flex: 0 0 auto;
  min-width: 0;
}
.mg-body {
  position: relative;
  z-index: 4;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
</style>
