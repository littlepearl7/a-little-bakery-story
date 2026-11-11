<script setup>
import { computed, ref, watch, nextTick } from 'vue';
import { CHARACTERS, faceOf } from '../data';
import { finishEvent } from '../store';

const props = defineProps({ ev: { type: Object, required: true } });
const emit = defineEmits(['done']);

const idx = ref(0);
const chosen = ref([]);
const bodyEl = ref(null);

watch(
  () => props.ev.id,
  () => {
    idx.value = props.ev.beats.length ? 1 : 0;
    chosen.value = [];
  },
  { immediate: true }
);

const beat = computed(() => props.ev.beats[idx.value - 1] || null);
const visible = computed(() => props.ev.beats.slice(0, idx.value));
const finished = computed(() => idx.value >= props.ev.beats.length);
const waitingChoice = computed(() => beat.value && beat.value.type === 'ask');

const NAME_MAP = { 林念: 'ln', 苏晴: 'sq', 林暖: 'nu' };

function charOf(name) {
  return CHARACTERS[NAME_MAP[name]] || null;
}

function avatarOf(b) {
  if (!b.speaker) return '';
  const c = CHARACTERS[NAME_MAP[b.speaker]];
  if (!c) return '';
  return faceOf(NAME_MAP[b.speaker], b.emotion);
}

function rewardText(list) {
  return list
    .map((r) =>
      r.kind === 'num'
        ? r.key + (r.value >= 0 ? '+' : '') + r.value
        : r.key + '：' + r.value
    )
    .join('，');
}

async function scrollDown() {
  await nextTick();
  if (bodyEl.value) bodyEl.value.scrollTop = bodyEl.value.scrollHeight;
}

function advance() {
  if (waitingChoice.value || finished.value) return;
  idx.value += 1;
  scrollDown();
}

function choose(opt) {
  chosen.value = chosen.value.concat(opt.rewards || []);
  idx.value += 1;
  scrollDown();
}

function close() {
  finishEvent(props.ev, chosen.value);
  emit('done');
}
</script>

<template>
  <div class="mask" @click.self="advance">
    <div class="sheet">
      <div class="sheet-head">
        <div class="t serif">{{ ev.title }}</div>
        <div class="small muted" v-if="ev.scene">{{ ev.scene }}</div>
      </div>

      <div class="sheet-body" ref="bodyEl" @click="advance">
        <template v-for="(b, i) in visible" :key="i">
          <div v-if="b.type === 'say' && !b.speaker" class="say narration">
            <div class="txt">{{ b.text }}</div>
          </div>

          <div v-else-if="b.type === 'say'" class="say">
            <div class="av">
              <img v-if="avatarOf(b)" :src="avatarOf(b)" :alt="b.speaker" />
              <span v-else class="fb">{{ b.speaker.slice(0, 1) }}</span>
            </div>
            <div class="bubble">
              <div class="who">{{ b.speaker }}</div>
              <div class="txt">{{ b.text }}</div>
            </div>
          </div>

          <div v-else-if="b.type === 'ask'" class="say">
            <div class="bubble" style="width: 100%">
              <div class="who">选择</div>
              <div class="txt" style="margin-bottom: 10px">{{ b.text }}</div>
            </div>
          </div>
        </template>

        <div v-if="waitingChoice" class="opts">
          <button
            v-for="(o, i) in beat.options"
            :key="i"
            class="opt"
            type="button"
            @click.stop="choose(o)"
          >
            {{ o.text }}
            <span class="r" v-if="o.rewards.length">{{ rewardText(o.rewards) }}</span>
          </button>
        </div>
      </div>

      <div class="sheet-foot">
        <button v-if="finished" class="btn primary block" type="button" @click="close">
          结束
        </button>
        <button
          v-else-if="!waitingChoice"
          class="btn block"
          type="button"
          @click="advance"
        >
          继续
        </button>
        <div v-else class="small muted" style="text-align: center">选一个吧</div>
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
</style>
