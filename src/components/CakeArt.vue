<script setup>
import { computed } from 'vue';
import { art, artStatus } from '../data';

const props = defineProps({
  id: { type: String, default: '' },
  colors: { type: Object, default: () => ({ sponge: '#F0D9AE', cream: '#FFF8EE', accent: '#E8B86D' }) },
});

// 有产品图就用图，没有就退回手绘 SVG
const src = computed(() =>
  props.id && artStatus('cake-' + props.id + '.webp') === 'ok'
    ? art('cake-' + props.id + '.webp')
    : ''
);
</script>

<template>
  <img v-if="src" :src="src" alt="" class="cakeart photo" />
  <svg v-else viewBox="0 0 120 120" class="cakeart" aria-hidden="true">
    <ellipse cx="60" cy="104" rx="39" ry="6" fill="rgba(107,74,52,0.10)" />
    <ellipse cx="60" cy="97" rx="43" ry="9" fill="#FFFDF9" stroke="rgba(107,74,52,0.12)" />
    <path d="M21 56 L99 56 L99 90 A39 8 0 0 1 21 90 Z" :fill="colors.sponge" />
    <rect x="21" y="56" width="78" height="15" :fill="colors.cream" />
    <circle cx="32" cy="71" r="4" :fill="colors.cream" />
    <circle cx="48" cy="71" r="5.4" :fill="colors.cream" />
    <circle cx="66" cy="71" r="4" :fill="colors.cream" />
    <circle cx="84" cy="71" r="5" :fill="colors.cream" />
    <ellipse cx="60" cy="56" rx="39" ry="9.5" :fill="colors.cream" stroke="rgba(107,74,52,0.10)" />
    <circle cx="46" cy="54" r="5" :fill="colors.accent" />
    <circle cx="66" cy="52" r="4.4" :fill="colors.accent" opacity="0.85" />
    <circle cx="76" cy="57" r="3.4" :fill="colors.accent" opacity="0.7" />
    <circle cx="55" cy="58" r="3" :fill="colors.accent" opacity="0.55" />
  </svg>
</template>

<style scoped>
.cakeart {
  display: block;
  width: 100%;
  height: 100%;
}
.cakeart.photo {
  object-fit: contain;
}
</style>
