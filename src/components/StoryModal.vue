<script setup>
import { computed, onUnmounted, ref, watch } from 'vue';
import { state, finishEvent, applyChoice } from '../store';
import { resolveBeats } from '../story';
import { BG, SPRITE, bgSrcOf, cgOf, faceOfName, sceneKey, sceneKeyOfEvent, spriteOf, spriteReady, wearOf } from '../vn';

const props = defineProps({ ev: { type: Object, required: true } });
const emit = defineEmits(['done']);

const list = ref([]);
const idx = ref(0);
const typed = ref(0);
const auto = ref(false);
let timer = 0;
let autoTimer = 0;

/* ---------------- 初始化 ---------------- */

function firstContent(beats) {
  for (let i = 0; i < beats.length; i++) {
    const t = beats[i].t;
    if (t !== 'scene' && t !== 'cg' && t !== 'cgend' && t !== 'act') return i;
  }
  return Math.max(0, beats.length - 1);
}

const cur = computed(() => list.value[idx.value] || null);
const finished = computed(() => idx.value >= list.value.length - 1);
const atChoice = computed(() => !!cur.value && cur.value.t === 'choice');
const isSay = computed(() => !!cur.value && cur.value.t === 'say');
const isNar = computed(() => !!cur.value && cur.value.t === 'nar');
const text = computed(() => (cur.value && cur.value.text) || '');
const shown = computed(() => text.value.slice(0, typed.value));
const typing = computed(() => typed.value < text.value.length);

/* ---------------- 场景 / 立绘 / CG ---------------- */

const sceneIdx = computed(() => {
  for (let i = idx.value; i >= 0; i--) if (list.value[i].t === 'scene') return i;
  return -1;
});
const scene = computed(() => (sceneIdx.value >= 0 ? list.value[sceneIdx.value] : null));
const actLabel = computed(() => {
  for (let i = idx.value; i >= 0; i--) {
    if (list.value[i].t === 'act') return list.value[i].text;
    if (list.value[i].t === 'scene') return '';
  }
  return '';
});
const baseKey = computed(() => sceneKeyOfEvent(props.ev));
const bgKey = computed(() => {
  // 文案里写了【场景：…】就以它为准，认不出来再用事件默认场景
  if (scene.value) {
    const k = sceneKey(scene.value.text);
    if (k) return k;
  }
  return baseKey.value;
});
const bg = computed(() => BG[bgKey.value] || BG.shop);
const bgSrc = computed(() => bgSrcOf(bg.value));
/** 店里穿围裙、出门换便装 */
const wear = computed(() => wearOf(bgKey.value));
const flashback = computed(
  () => !!scene.value && /回忆|闪回|高中|高三|晚自习|那年|那一年/.test(scene.value.text)
);

const cgKey = computed(() => {
  let at = -1;
  for (let i = idx.value; i >= 0; i--) {
    const t = list.value[i].t;
    if (t === 'cg') {
      at = i;
      break;
    }
    if (t === 'cgend') return '';
  }
  if (at < 0) return '';
  // 换场景就等于收掉 CG
  if (at < sceneIdx.value) return '';
  return list.value[at].key;
});
const cg = computed(() => (cgKey.value ? cgOf(cgKey.value) : null));

/**
 * 台上只站一个人：谁在说话就站谁。
 * 旁白时保留上一位开口的角色，不至于画面突然空掉。
 */
/** 旁白里的常见称呼 → 角色名 */
const NICKNAME = {
  念念: '林念',
  小雨: '周雨桐',
  知遥: '许知遥',
  阿鸢: '唐鸢',
  鸢姐: '唐鸢',
  星河: '叶星河',
  妈妈: '林暖',
};

const cast = computed(() => {
  const can = (who) => who && SPRITE[who] && spriteReady(who, wear.value);

  // 有人说话就站他
  if (isSay.value && can(cur.value.who)) return [cur.value.who];

  // 旁白里点了谁的名字，就让谁上台 —— 这样「林暖皱起眉」不会还站着苏晴
  const t = (cur.value && cur.value.text) || '';
  for (const name of Object.keys(SPRITE)) {
    if (can(name) && t.indexOf(name) >= 0) return [name];
  }
  for (const nick of Object.keys(NICKNAME)) {
    if (t.indexOf(nick) >= 0 && can(NICKNAME[nick])) return [NICKNAME[nick]];
  }

  // 谁都没提到：保留上一位开口的角色，别让画面空掉
  for (let i = idx.value; i >= 0; i--) {
    const b = list.value[i];
    if (b.t === 'say' && can(b.who)) return [b.who];
  }
  for (const b of list.value) {
    if (b.t === 'say' && can(b.who)) return [b.who];
  }
  return [];
});

const speaker = computed(() => (isSay.value ? cur.value.who : ''));

watch(
  () => props.ev,
  () => {
    // 条件段落（伙伴信赖、家庭默契）在这里按当前存档展开
    list.value = resolveBeats(props.ev.beats || [], state);
    idx.value = firstContent(list.value);
    typed.value = 0;
    auto.value = false;
    startType();
  },
  { immediate: true }
);


const SLOTS = { 1: [50], 2: [31, 69], 3: [22, 50, 78] };

function slotStyle(i) {
  // 单人演出：固定在偏中间的位置
  return { left: '50%', zIndex: 10 + i };
}

/* ---------------- 打字机 ---------------- */

function startType() {
  clearInterval(timer);
  typed.value = 0;
  if (atChoice.value || !text.value) {
    typed.value = text.value.length;
    return;
  }
  const step = Math.max(1, Math.round(text.value.length / 40));
  timer = setInterval(() => {
    typed.value = Math.min(text.value.length, typed.value + step);
    if (typed.value >= text.value.length) clearInterval(timer);
  }, 18);
}

watch(() => idx.value, startType);

/* ---------------- 推进 ---------------- */

function nextIndex(from) {
  let i = from + 1;
  while (i < list.value.length) {
    const t = list.value[i].t;
    if (t === 'scene' || t === 'cg' || t === 'cgend' || t === 'act') i++;
    else break;
  }
  return Math.min(i, list.value.length - 1);
}

function advance() {
  if (atChoice.value) return;
  if (typing.value) {
    typed.value = text.value.length;
    clearInterval(timer);
    return;
  }
  if (finished.value) return;
  idx.value = nextIndex(idx.value);
}

function choose(opt, i) {
  applyChoice(cur.value, opt, i);
  const tail = (opt.branch || []).concat(cur.value.after || []);
  list.value.splice(idx.value, 1, ...tail);
  // 分支接在原位，落到第一段正文
  let at = Math.max(0, idx.value - 1);
  idx.value = nextIndex(at);
}

function skipAhead() {
  for (let i = idx.value + 1; i < list.value.length; i++) {
    if (list.value[i].t === 'choice') {
      idx.value = i;
      return;
    }
  }
  idx.value = list.value.length - 1;
  typed.value = text.value.length;
}

function close() {
  clearInterval(timer);
  clearInterval(autoTimer);
  finishEvent(props.ev);
  emit('done');
}

function toggleAuto() {
  auto.value = !auto.value;
  clearInterval(autoTimer);
  if (!auto.value) return;
  autoTimer = setInterval(() => {
    if (finished.value) {
      clearInterval(autoTimer);
      auto.value = false;
      return;
    }
    if (atChoice.value) {
      clearInterval(autoTimer);
      auto.value = false;
      return;
    }
    if (typing.value) typed.value = text.value.length;
    else idx.value = nextIndex(idx.value);
  }, 1400);
}

onUnmounted(() => {
  clearInterval(timer);
  clearInterval(autoTimer);
});
</script>

<template>
  <div class="vn">
    <div class="vn-stage" :class="{ flash: flashback }">
      <!-- 背景 -->
      <div class="vn-bg" :style="{ background: bg.css }">
        <img v-if="bgSrc" :src="bgSrc" alt="" class="vn-bg-img" />
        <div class="vn-veil"></div>
      </div>

      <!-- CG -->
      <transition name="cgfade">
        <div v-if="cg && cg.src" class="vn-cg">
          <img :src="cg.src" alt="" />
          <div class="vn-cg-cap">{{ cg.name }}</div>
        </div>
      </transition>

      <!-- 立绘 -->
      <div class="vn-cast">
        <div
          v-for="(c, i) in cast"
          :key="c"
          class="vn-actor"
          :class="{ dim: speaker && speaker !== c, off: !speaker }"
          :style="slotStyle(i)"
        >
          <img :src="spriteOf(c, wear)" :alt="c" />
        </div>
      </div>

      <!-- 顶栏 -->
      <div class="vn-top">
        <div class="vn-titles">
          <div class="vn-chapter">{{ ev.title }}</div>
          <div class="vn-scene" v-if="actLabel">{{ actLabel }}</div>
          <div class="vn-scene" v-else-if="scene">{{ scene.text }}</div>
        </div>
        <div class="vn-tools">
          <button type="button" :class="{ on: auto }" @click.stop="toggleAuto">自动</button>
          <button type="button" @click.stop="skipAhead">跳过</button>
        </div>
      </div>

      <!-- 选项 -->
      <div v-if="atChoice" class="vn-choice">
        <div class="vn-ask">{{ cur.prompt }}</div>
        <button
          v-for="(o, i) in cur.options"
          :key="i"
          type="button"
          class="vn-opt"
          @click.stop="choose(o, i)"
        >
          <span class="t">{{ o.label }}</span>
          <span class="r" v-if="o.gains && o.gains.length">
            {{ o.gains.map((g) => g.label).join(' · ') }}
          </span>
          <span class="r" v-else-if="o.hint">{{ o.hint }}</span>
        </button>
        <p v-if="cur.note" class="vn-note">{{ cur.note }}</p>
      </div>

      <!-- 对话框 -->
      <div v-else class="vn-box" :class="{ nar: isNar }" @click="advance">
        <div class="vn-name" v-if="isSay">
          <img v-if="faceOfName(cur.who)" :src="faceOfName(cur.who)" alt="" />
          <span>{{ cur.who }}</span>
          <em v-if="cur.emo && cur.emo !== '视角'">{{ cur.emo }}</em>
        </div>
        <div class="vn-text">{{ shown }}<span v-if="typing" class="caret"></span></div>
        <div class="vn-foot">
          <span v-if="finished && !typing" class="vn-end" @click.stop="close">结束 ←</span>
          <span v-else class="vn-dot">▾</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vn {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 300;
  display: flex;
  justify-content: center;
  background: #1a1410;
}
.vn-stage {
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 100%;
  overflow: hidden;
  transition: filter 0.5s ease;
}
.vn-stage.flash {
  filter: sepia(0.3) saturate(0.85) contrast(0.97);
}

/* 背景 */
.vn-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
}
.vn-bg-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.vn-veil {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background:
    radial-gradient(120% 80% at 50% 6%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 55%),
    radial-gradient(130% 100% at 50% 46%, rgba(0, 0, 0, 0) 42%, rgba(58, 34, 20, 0.34) 100%),
    linear-gradient(180deg, rgba(60, 36, 22, 0) 38%, rgba(52, 31, 20, 0.46) 100%);
  box-shadow: inset 0 0 140px rgba(58, 34, 20, 0.36);
}
/* 胶片颗粒：让没图的纯渐变也有质感 */
.vn-stage::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none; /* TEST */
  z-index: 5;
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='140' height='140' filter='url(%23n)'/></svg>");
}

/* CG */
.vn-cg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background: #1a1410;
}
.vn-cg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.vn-cg-cap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 44%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 16px;
  font-size: 9.5px;
  letter-spacing: 0.22em;
  color: rgba(255, 246, 232, 0.45);
  background: linear-gradient(180deg, rgba(20, 12, 8, 0) 0%, rgba(20, 12, 8, 0.5) 100%);
  pointer-events: none;
}
.cgfade-enter-active,
.cgfade-leave-active {
  transition: opacity 0.7s ease;
}
.cgfade-enter-from,
.cgfade-leave-to {
  opacity: 0;
}

/* 立绘 */
.vn-cast {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 6;
  pointer-events: none;
}
.vn-actor {
  position: absolute;
  /* 脚正好落在对话框上沿，露在画面里的部分才是完整的 */
  bottom: 19%;
  height: 60%;
  transform: translateX(-50%);
  transition: opacity 0.3s ease, transform 0.3s ease;
  animation: actorIn 0.4s ease both;
}
.vn-actor img {
  height: 100%;
  width: auto;
  display: block;
  filter: drop-shadow(0 10px 18px rgba(40, 24, 14, 0.35));
}
.vn-actor.dim {
  opacity: 0.9;
}
@keyframes actorIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* 顶栏 */
.vn-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px 12px 26px;
  background: linear-gradient(180deg, rgba(30, 18, 12, 0.35), rgba(30, 18, 12, 0));
  pointer-events: none;
}
.vn-titles {
  min-width: 0;
}
.vn-chapter {
  font-family: 'Songti SC', 'Noto Serif SC', Georgia, serif;
  font-size: 14px;
  color: #fff7ea;
  text-shadow: 0 1px 6px rgba(30, 18, 12, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 210px;
}
.vn-scene {
  margin-top: 2px;
  font-size: 10.5px;
  color: rgba(255, 243, 228, 0.72);
  text-shadow: 0 1px 4px rgba(30, 18, 12, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 210px;
}
.vn-tools {
  display: flex;
  gap: 6px;
  flex: 0 0 auto;
  pointer-events: auto;
}
.vn-tools button {
  height: 26px;
  padding: 0 10px;
  border: 1px solid rgba(255, 240, 224, 0.35);
  border-radius: 999px;
  background: rgba(40, 24, 16, 0.28);
  color: rgba(255, 246, 234, 0.9);
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  backdrop-filter: blur(4px);
}
.vn-tools button.on {
  background: rgba(255, 240, 220, 0.85);
  color: #6b4a34;
}

/* 对话框 */
.vn-box {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  min-height: 166px;
  padding: 18px 20px 20px;
  background: linear-gradient(180deg, rgba(255, 252, 247, 0.96), rgba(251, 243, 232, 0.985));
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -12px 30px rgba(52, 31, 20, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.9);
  cursor: pointer;
}
.vn-box::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(107, 74, 52, 0.22), transparent);
}
.vn-name {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--caramel);
  letter-spacing: 0.03em;
}
.vn-name img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(107, 74, 52, 0.18);
}
.vn-name em {
  font-style: normal;
  font-size: 10px;
  font-weight: 400;
  padding: 1px 6px;
  border-radius: 999px;
  background: var(--apricot);
  color: var(--ink-2);
}
.vn-text {
  font-size: 15px;
  line-height: 1.85;
  color: #4d3524;
  min-height: 58px;
  white-space: pre-wrap;
}
.vn-box.nar .vn-text {
  color: #7a5c45;
}
.caret {
  display: inline-block;
  width: 6px;
  height: 15px;
  margin-left: 2px;
  vertical-align: -2px;
  background: rgba(107, 74, 52, 0.35);
}
.vn-foot {
  height: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.vn-dot {
  font-size: 12px;
  color: var(--ink-2);
  animation: bob 1.1s ease-in-out infinite;
}
@keyframes bob {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.55;
  }
  50% {
    transform: translateY(3px);
    opacity: 1;
  }
}
.vn-end {
  font-size: 12px;
  color: var(--caramel);
  background: var(--apricot);
  padding: 3px 12px;
  border-radius: 999px;
}

/* 选项 */
.vn-choice {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  padding: 30px 18px 30px;
  background: linear-gradient(180deg, rgba(30, 18, 12, 0) 0%, rgba(30, 18, 12, 0.55) 30%, rgba(30, 18, 12, 0.74) 100%);
  animation: askIn 0.3s ease both;
}
@keyframes askIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.vn-ask {
  margin: 0 2px 12px;
  font-size: 12.5px;
  color: rgba(255, 246, 232, 0.88);
  text-align: center;
  text-shadow: 0 1px 4px rgba(20, 12, 8, 0.5);
}
.vn-opt {
  display: block;
  width: 100%;
  margin-bottom: 9px;
  padding: 12px 15px;
  border: 1px solid rgba(255, 240, 222, 0.4);
  border-radius: 14px;
  background: rgba(255, 250, 242, 0.93);
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(24, 14, 8, 0.22);
}
.vn-opt .t {
  display: block;
  font-size: 14px;
  color: #4d3524;
}
.vn-opt .r {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  color: var(--berry);
}
.vn-note {
  margin: 4px 2px 0;
  font-size: 10.5px;
  color: rgba(255, 246, 232, 0.6);
  text-align: center;
}
</style>
