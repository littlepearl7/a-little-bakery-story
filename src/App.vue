<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { monthLabel, PARTNERS } from './data';
import {
  state, queue, load, reset, startGame, save, DAYS_PER_MONTH, stageInfo, partnerEndingOf,
} from './store';
import StoryModal from './components/StoryModal.vue';
import ShopPage from './pages/ShopPage.vue';
import KitchenPage from './pages/KitchenPage.vue';
import PartnersPage from './pages/PartnersPage.vue';
import ManagePage from './pages/ManagePage.vue';
import CodexPage from './pages/CodexPage.vue';

const TABS = [
  { id: 'shop', label: '店铺', icon: 'house' },
  { id: 'kitchen', label: '厨房', icon: 'bowl' },
  { id: 'partners', label: '伙伴', icon: 'heart' },
  { id: 'manage', label: '经营', icon: 'list' },
  { id: 'codex', label: '图鉴', icon: 'book' },
];

const ICONS = {
  house: 'M3.5 10.8 12 4l8.5 6.8V20a1 1 0 0 1-1 1h-4.6v-6H9.1v6H4.5a1 1 0 0 1-1-1z',
  bowl: 'M4 11h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8zM9 7.5c0-1.5 1-2 1-3M13 7.5c0-1.5 1-2 1-3',
  heart: 'M12 20s-7.5-4.6-7.5-9.5A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7.5 2.9C19.5 15.4 12 20 12 20z',
  list: 'M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01',
  book: 'M5 4.5h11.5A2.5 2.5 0 0 1 19 7v13H7.5A2.5 2.5 0 0 1 5 17.5zM5 17.5A2.5 2.5 0 0 1 7.5 15H19',
};

const tab = ref('shop');
const activeEvent = ref(null);
const dayReport = ref(null);
const monthReport = ref(null);

function tabFromHash() {
  const h = location.hash.replace('#', '');
  return TABS.some((t) => t.id === h) ? h : 'shop';
}
tab.value = tabFromHash();
window.addEventListener('hashchange', () => (tab.value = tabFromHash()));

const ending = computed(() =>
  state.phase === 'ended' && state.ending && !queue.events.length ? state.ending : null
);
const pending = computed(() => queue.events.length);

function openNext() {
  if (queue.events.length) activeEvent.value = queue.events[0];
}

function doneEvent() {
  queue.events.shift();
  activeEvent.value = null;
  save();
  if (queue.events.length) setTimeout(openNext, 220);
}

function onClosed(report) {
  dayReport.value = report;
  if (report.day === DAYS_PER_MONTH) monthReport.value = state.report;
}

function nextDay() {
  dayReport.value = null;
  monthReport.value = null;
  if (queue.events.length) openNext();
}

function restart() {
  reset();
  tab.value = 'shop';
  startGame();
  openNext();
}

// 有新剧情（比如和苏晴聊了聊）就自动弹出来，不用手动点
watch(
  () => queue.events.length,
  (n, old) => {
    if (n > 0 && n > (old || 0) && !activeEvent.value && !dayReport.value && !monthReport.value) {
      setTimeout(() => {
        if (!activeEvent.value && queue.events.length) openNext();
      }, 90);
    }
  }
);

const partnerLines = computed(() => {
  if (!ending.value) return [];
  const out = PARTNERS.filter((p) => state.staff.includes(p.id)).map((p) => ({
    name: p.nick,
    role: p.role,
    ...(partnerEndingOf(p.id) || {}),
  }));
  const mom = partnerEndingOf('mom');
  if (mom) out.push({ name: '林暖', role: '母亲', ...mom });
  return out.filter((x) => x.title);
});

onMounted(() => {
  const had = load();
  if (!had) reset();
  startGame();
  openNext();
});
</script>

<template>
  <div class="app">
    <div class="topbar">
      <div class="m serif">
        {{ monthLabel(state.month) }}
        <small>第 {{ state.month }} / 36 月 · 第 {{ state.day }} / {{ DAYS_PER_MONTH }} 日</small>
      </div>
      <div class="purse"><span class="y">¥</span>{{ state.cash.toLocaleString() }}</div>
    </div>

    <div class="scroll">
      <div class="between" style="margin: -4px 2px 10px">
        <span class="small muted">{{ stageInfo.name }}</span>
        <span class="chip" style="font-size: 10px">行动力 {{ state.ap }}</span>
      </div>

      <ShopPage v-if="tab === 'shop'" @closed="onClosed" />
      <KitchenPage v-else-if="tab === 'kitchen'" />
      <PartnersPage v-else-if="tab === 'partners'" />
      <ManagePage v-else-if="tab === 'manage'" />
      <CodexPage v-else-if="tab === 'codex'" />
    </div>

    <button
      v-if="pending"
      class="btn primary"
      type="button"
      style="position: absolute; right: 14px; bottom: calc(var(--nav-h) + 16px); z-index: 20; box-shadow: var(--shadow)"
      @click="openNext"
    >
      有 {{ pending }} 段剧情
    </button>

    <div class="nav">
      <button
        v-for="t in TABS"
        :key="t.id"
        type="button"
        :class="{ on: tab === t.id }"
        @click="tab = t.id"
      >
        <svg
          class="ico"
          viewBox="0 0 24 24"
          width="19"
          height="19"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path :d="ICONS[t.icon]" />
        </svg>
        <span>{{ t.label }}</span>
      </button>
    </div>

    <StoryModal v-if="activeEvent" :ev="activeEvent" @done="doneEvent" />

    <div v-if="dayReport" class="mask" @click.self="nextDay">
      <div class="sheet">
        <div class="sheet-head">
          <div class="t serif">{{ monthReport ? '月末结算' : '打烊了' }}</div>
          <div class="small muted">{{ monthLabel(state.month) }} · 第 {{ dayReport.day }} 个经营日</div>
        </div>
        <div class="sheet-body">
          <div class="card card-pad">
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">今天卖出</span><span>{{ dayReport.sold }} 个</span>
            </div>
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">今日收入</span><span>¥{{ dayReport.rev }}</span>
            </div>
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">剩下</span><span>{{ dayReport.left }} 个</span>
            </div>
            <div class="between small">
              <span class="muted">剩货回收</span><span>¥{{ dayReport.gain }}</span>
            </div>
          </div>

          <div v-if="monthReport" class="card card-pad" style="margin-top: 12px">
            <div class="h2">{{ monthReport.month }} 月经营报告</div>
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">营业额</span><span>¥{{ monthReport.rev }}</span>
            </div>
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">支出</span><span>¥{{ monthReport.cost }}</span>
            </div>
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">净收入</span>
              <span :style="{ color: monthReport.net >= 0 ? '#6c8a55' : 'var(--berry)' }">
                {{ monthReport.net >= 0 ? '+' : '' }}{{ monthReport.net }}
              </span>
            </div>
            <div class="between small">
              <span class="muted">最受欢迎</span>
              <span>{{ monthReport.best }}（{{ monthReport.bestN }} 个）</span>
            </div>
            <p v-if="monthReport.warn" class="small" style="color: var(--berry); margin: 10px 0 0">
              {{ monthReport.warn }}
            </p>
          </div>
        </div>
        <div class="sheet-foot">
          <button class="btn primary block" type="button" @click="nextDay">
            {{ ending ? '看结局' : '继续' }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="ending" class="mask">
      <div class="sheet">
        <div class="sheet-body" style="padding-top: 22px">
          <div class="small muted serif">{{ ending.name }}</div>
          <h2 class="serif" style="font-size: 20px; margin: 6px 0 10px; line-height: 1.5">
            {{ ending.title }}
          </h2>
          <p
            v-if="ending.text"
            style="font-size: 14px; line-height: 1.85; color: var(--caramel-soft); margin: 0 0 18px"
          >
            {{ ending.text }}
          </p>
          <div class="card card-pad">
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">门店 / 伙伴</span>
              <span>{{ state.storeCount }} 家 · {{ state.staff.length }} 人</span>
            </div>
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">产品 / 相册</span>
              <span>{{ state.unlocked.length }} 款 · {{ state.photos.length }} 张</span>
            </div>
            <div class="between small">
              <span class="muted">口碑 / 知名度</span>
              <span>{{ Math.round(state.reputation) }} / {{ Math.round(state.popularity) }}</span>
            </div>
          </div>

          <div v-if="partnerLines.length" class="card card-pad" style="margin-top: 12px">
            <div class="h2">他们的后来</div>
            <div v-for="(p, i) in partnerLines" :key="i" class="pl">
              <div class="pn">
                {{ p.name }}<span class="muted small"> · {{ p.title }}</span>
              </div>
              <div class="pt">{{ p.text }}</div>
            </div>
          </div>
        </div>
        <div class="sheet-foot">
          <button class="btn primary block" type="button" @click="restart">再开一次</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pl {
  padding: 8px 0;
  border-top: 1px dashed var(--line);
}
.pl:first-of-type {
  border-top: 0;
}
.pn {
  font-size: 13px;
  font-weight: 600;
  color: var(--caramel);
}
.pt {
  margin-top: 3px;
  font-size: 12px;
  line-height: 1.75;
  color: var(--ink-2);
}
</style>
