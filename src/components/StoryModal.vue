<script setup>
import { computed, ref, watch, nextTick } from 'vue';
import { CHARACTERS, faceOf } from '../data';
import { state, finishEvent, applyChoice } from '../store';
import { resolveBeats } from '../story';

const props = defineProps({ ev: { type: Object, required: true } });
const emit = defineEmits(['done']);

const list = ref([]);
const idx = ref(0);
const bodyEl = ref(null);

watch(
  () => props.ev,
  () => {
    // 条件段落（伙伴信赖、家庭默契）在这里按当前存档展开
    list.value = resolveBeats(props.ev.beats || [], state);
    idx.value = 0;
    scrollDown();
  },
  { immediate: true }
);

const visible = computed(() => list.value.slice(0, idx.value + 1));
const cur = computed(() => list.value[idx.value] || null);
const atChoice = computed(() => !!cur.value && cur.value.t === 'choice');
const finished = computed(() => idx.value >= list.value.length - 1);

const NAME_MAP = { 林念: 'ln', 苏晴: 'sq', 林暖: 'nu' };

function avatarOf(b) {
  if (!b.who) return '';
  const cid = NAME_MAP[b.who];
  if (!cid || !CHARACTERS[cid]) return '';
  return faceOf(cid, b.emo);
}

async function scrollDown() {
  await nextTick();
  if (bodyEl.value) bodyEl.value.scrollTop = bodyEl.value.scrollHeight;
}

function advance() {
  if (atChoice.value || finished.value) return;
  idx.value += 1;
  scrollDown();
}

function choose(opt, i) {
  applyChoice(cur.value, opt, i);
  // 分支接在选项当前位置之后，直接替换掉选项本身
  const tail = (opt.branch || []).concat(cur.value.after || []);
  const wasLast = idx.value === list.value.length - 1;
  list.value.splice(idx.value, 1, ...tail);
  if (wasLast && tail.length === 0) idx.value = Math.max(0, list.value.length - 1);
  scrollDown();
}

function close() {
  finishEvent(props.ev);
  emit('done');
}
</script>

<template>
  <div class="mask" @click.self="advance">
    <div class="sheet">
      <div class="sheet-head">
        <div class="t serif">{{ ev.title }}</div>
        <div class="small muted" v-if="ev.chapter && ev.chapter !== ev.title">{{ ev.chapter }}</div>
      </div>

      <div class="sheet-body" ref="bodyEl" @click="advance">
        <template v-for="(b, i) in visible" :key="i">
          <div v-if="b.t === 'scene'" class="scene">
            <span>{{ b.text }}</span>
          </div>

          <div v-else-if="b.t === 'note'" class="note">{{ b.text }}</div>

          <div v-else-if="b.t === 'nar'" class="say narration">
            <div class="txt">{{ b.text }}</div>
          </div>

          <div v-else-if="b.t === 'say'" class="say">
            <div class="av">
              <img v-if="avatarOf(b)" :src="avatarOf(b)" :alt="b.who" />
              <span v-else class="fb">{{ b.who.slice(0, 1) }}</span>
            </div>
            <div class="bubble">
              <div class="who">
                {{ b.who }}
                <span v-if="b.emo && b.emo !== '视角'" class="emo">{{ b.emo }}</span>
              </div>
              <div class="txt">{{ b.text }}</div>
            </div>
          </div>

          <div v-else-if="b.t === 'choice'" class="ask">{{ b.prompt }}</div>
        </template>

        <div v-if="atChoice" class="opts">
          <button
            v-for="(o, i) in cur.options"
            :key="i"
            class="opt"
            type="button"
            @click.stop="choose(o, i)"
          >
            <span>{{ o.label }}</span>
            <span v-if="o.gains && o.gains.length" class="r">
              {{ o.gains.map((g) => g.label).join(' · ') }}
            </span>
            <span v-else-if="o.hint" class="r">{{ o.hint }}</span>
          </button>
          <p v-if="cur.note" class="small muted" style="margin: 6px 2px 0">{{ cur.note }}</p>
        </div>
      </div>

      <div class="sheet-foot">
        <div v-if="atChoice" class="small muted" style="text-align: center">选一个吧</div>
        <button v-else-if="finished" class="btn primary block" type="button" @click="close">结束</button>
        <button v-else class="btn block" type="button" @click="advance">继续</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fb {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--caramel-soft);
  background: var(--apricot);
}
.scene {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px 2px 10px;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--ink-2);
}
.scene::before,
.scene::after {
  content: '';
  flex: 1 1 auto;
  height: 1px;
  background: var(--line);
}
.note {
  margin: 2px 2px 10px;
  font-size: 11.5px;
  line-height: 1.7;
  color: var(--ink-2);
  font-style: italic;
}
.emo {
  margin-left: 5px;
  padding: 0 5px;
  border-radius: 999px;
  background: var(--apricot);
  font-size: 9.5px;
  font-weight: 400;
  color: var(--caramel-soft);
  vertical-align: 1px;
}
.ask {
  margin: 16px 2px 10px;
  font-size: 12.5px;
  line-height: 1.7;
  color: var(--ink-2);
  text-align: center;
}
.opts {
  margin: 4px 0 6px;
}
.opt {
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 11px 13px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
  font-family: inherit;
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--caramel);
  text-align: left;
  cursor: pointer;
}
.opt .r {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  color: var(--berry);
}
</style>
