<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { monthLabel, PARTNERS, STAGES } from './data';
import {
  state, queue, load, reset, startGame, save, DAYS_PER_MONTH, stageInfo, partnerEndingOf,
  skipToNextMonth, continueAfterShortEnding, startNewGamePlus,
} from './store';
import StoryModal from './components/StoryModal.vue';
import { preloadSprites } from './vn';
import ShopPage from './pages/ShopPage.vue';
import KitchenPage from './pages/KitchenPage.vue';
import PartnersPage from './pages/PartnersPage.vue';
import ManagePage from './pages/ManagePage.vue';
import CodexPage from './pages/CodexPage.vue';
import SceneMapPage from './pages/SceneMapPage.vue';

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
const scene = ref('shop');
const activePanel = ref('');
function openPanel(name) { activePanel.value = name; }
function closePanel() { activePanel.value = ''; }
const activeEvent = ref(null);
const dayReport = ref(null);
const monthReport = ref(null);
const endingDismissed = ref(false);
const devEnabled = new URLSearchParams(location.search).get('dev') === '1';

function tabFromHash() {
  const h = location.hash.replace('#', '');
  return TABS.some((t) => t.id === h) ? h : 'shop';
}
tab.value = tabFromHash();
window.addEventListener('hashchange', () => (tab.value = tabFromHash()));

const ending = computed(() =>
  state.phase === 'ended' && state.ending && !queue.events.length && !endingDismissed.value ? state.ending : null
);
const canContinueStory = computed(() =>
  devEnabled && state.ending && STAGES.some((stage) => !stage.final && stage.short.key === state.ending.key)
);
const pending = computed(() => queue.events.length);

function openNext() {
  if (queue.events.length) activeEvent.value = queue.events[0];
}

function doneEvent() {
  queue.events.shift();
  activeEvent.value = null;
  save();
  // 本月还有剧情就接着演；跨月/旧月的留给「有 N 段剧情」角标，不打断经营
  const next = queue.events[0];
  if (next && next.month === state.month) setTimeout(openNext, 200);
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
  if (!startNewGamePlus()) return;
  tab.value = 'shop';
  endingDismissed.value = false;
  startGame();
  openNext();
}

function finishRun() {
  endingDismissed.value = true;
}

function continueStory() {
  if (!continueAfterShortEnding()) return;
  endingDismissed.value = false;
  dayReport.value = null;
  monthReport.value = null;
  startGame();
  openNext();
}

function devSkipMonth() {
  if (activeEvent.value || dayReport.value) return;
  if (!skipToNextMonth()) return;
  activeEvent.value = null;
  monthReport.value = null;
  dayReport.value = null;
  openNext();
}

// 只有玩家主动触发的剧情（比如和苏晴聊天）才立刻弹出来；
// 主线剧情一律等玩家点「有 N 段剧情」，演完就回去经营。
watch(
  () => state.autoStory,
  (v) => {
    if (!v) return;
    state.autoStory = false;
    setTimeout(() => {
      if (!activeEvent.value && queue.events.length) openNext();
    }, 90);
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
  preloadSprites();
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

    <div class="scroll scene-scroll">
      <div class="between scene-meta">
        <span class="small muted">{{ stageInfo.name }}</span>
        <span class="chip">行动力 {{ state.ap }} · 体力 {{ state.stamina }}</span>
      </div>

      <button
        v-if="devEnabled && state.phase === 'playing'"
        class="btn"
        type="button"
        style="width:100%;margin:0 0 8px"
        :disabled="!!activeEvent || !!dayReport"
        @click="devSkipMonth"
      >开发者后门 · 跳过本月</button>

      <SceneMapPage :scene="scene" @change-scene="scene = $event" @open-panel="openPanel" />

      <div v-if="activePanel" class="scene-panel-mask" @click.self="closePanel">
        <section class="scene-panel">
          <header class="scene-panel-head">
            <div>
              <div class="small muted">林记烘焙 · {{ monthLabel(state.month) }}</div>
              <strong>{{ ({shop:'店铺营业', kitchen:'今日制作', partners:'伙伴与员工', manage:'经营与研发', codex:'手账与图鉴'})[activePanel] || '经营' }}</strong>
            </div>
            <button type="button" class="scene-panel-close" @click="closePanel">✕</button>
          </header>
          <div class="scene-panel-content">
            <ShopPage v-if="activePanel === 'shop'" @closed="onClosed" />
            <KitchenPage v-else-if="activePanel === 'kitchen'" />
            <PartnersPage v-else-if="activePanel === 'partners'" />
            <ManagePage v-else-if="activePanel === 'manage'" />
            <CodexPage v-else-if="activePanel === 'codex'" />
          </div>
        </section>
      </div>
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

    <div class="nav scene-nav">
      <button :class="{ on: !activePanel && scene === 'shop' }" type="button" @click="closePanel(); scene = 'shop'">
        <span class="nav-emoji">🏠</span><span>店内</span>
      </button>
      <button :class="{ on: scene === 'street' && !activePanel }" type="button" @click="closePanel(); scene = 'street'">
        <span class="nav-emoji">🗺️</span><span>小镇</span>
      </button>
      <button :class="{ on: activePanel === 'partners' }" type="button" @click="openPanel('partners')">
        <span class="nav-emoji">👥</span><span>伙伴</span>
      </button>
      <button :class="{ on: activePanel === 'manage' }" type="button" @click="openPanel('manage')">
        <span class="nav-emoji">📋</span><span>任务</span>
      </button>
      <button :class="{ on: activePanel === 'codex' }" type="button" @click="openPanel('codex')">
        <span class="nav-emoji">📖</span><span>手账</span>
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
            <div class="between small" style="margin-top: 6px">
              <span class="muted">口碑</span>
              <span>
                {{ monthReport.rep }}
                <em v-if="monthReport.repDelta" class="delta">
                  {{ monthReport.repDelta > 0 ? '+' : '' }}{{ monthReport.repDelta }}
                </em>
              </span>
            </div>

            <div v-if="monthReport.fresh && monthReport.fresh.length" class="mrep">
              <div class="mrep-t">这个月新上了</div>
              <div class="mrep-b">{{ monthReport.fresh.join('、') }}</div>
            </div>
            <div v-if="monthReport.grown && monthReport.grown.length" class="mrep">
              <div class="mrep-t">伙伴长进了</div>
              <div class="mrep-b">{{ monthReport.grown.join(' · ') }}</div>
            </div>
            <div v-if="monthReport.trust && monthReport.trust.length" class="mrep">
              <div class="mrep-t">信赖</div>
              <div class="mrep-b">
                <span v-for="(t, i) in monthReport.trust" :key="t.name">
                  {{ i ? ' · ' : '' }}{{ t.name }} {{ t.v }}
                </span>
              </div>
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
          <button class="btn block" type="button" @click="finishRun">结束本局</button>
          <button
            v-if="canContinueStory"
            class="btn block"
            type="button"
            @click="continueStory"
          >
            继续剧情
          </button>
          <button class="btn primary block" type="button" @click="restart">开启二周目</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delta {
  margin-left: 4px;
  font-size: 11px;
  font-style: normal;
  color: var(--sage);
}
.mrep {
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px dashed var(--line-soft);
}
.mrep-t {
  font-size: 11.5px;
  color: var(--ink-2);
  margin-bottom: 2px;
}
.mrep-b {
  font-size: 13px;
  line-height: 1.7;
  color: var(--caramel);
}
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

.scene-scroll { padding: 8px 0 calc(var(--nav-h) + env(safe-area-inset-bottom, 0px) + 8px); overflow:hidden; display:flex; flex-direction:column; }
.scene-meta { padding: 0 14px 7px; flex:0 0 auto; }
.scene-nav { z-index:30; }
.scene-nav button { gap:1px; }
.scene-nav .nav-emoji { font-size:19px; line-height:1.2; }
.scene-panel-mask { position:absolute; inset:0; z-index:35; background:rgba(36,25,17,.45); display:flex; align-items:flex-end; }
.scene-panel { width:100%; max-height:88%; display:flex; flex-direction:column; overflow:hidden; border-radius:22px 22px 0 0; background:var(--cream); box-shadow:0 -10px 40px rgba(40,25,15,.24); }
.scene-panel-head { flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; padding:13px 17px 11px; border-bottom:1px solid var(--line); background:var(--paper); }
.scene-panel-head strong { display:block; font-size:18px; }
.scene-panel-close { width:34px; height:34px; border:1px solid var(--line); border-radius:50%; background:var(--cream); color:var(--caramel); font-size:16px; cursor:pointer; }
.scene-panel-content { overflow:auto; -webkit-overflow-scrolling:touch; padding:12px 14px calc(env(safe-area-inset-bottom,0px) + 20px); }
</style>
