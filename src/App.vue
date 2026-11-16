<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { monthLabel, PARTNERS, STAGES } from './data';
import {
  state, queue, startGame, save, DAYS_PER_MONTH, stageInfo, partnerEndingOf,
  skipToNextMonth, continueAfterShortEnding, startNewGamePlus, startTutorial, restAtHome, sceneAvailability, visitTownScene, addTownNotice,
} from './store';
import StoryModal from './components/StoryModal.vue';
import { preloadSprites } from './vn';
import { STORY } from './story';
import TitleScreen from './components/TitleScreen.vue';
import ShopPage from './pages/ShopPage.vue';
import KitchenPage from './pages/KitchenPage.vue';
import PartnersPage from './pages/PartnersPage.vue';
import ManagePage from './pages/ManagePage.vue';
import CodexPage from './pages/CodexPage.vue';
import SceneMapPage from './pages/SceneMapPage.vue';
import SceneFeaturePage from './pages/SceneFeaturePage.vue';
import PhonePage from './pages/PhonePage.vue';
import SupplierPage from './pages/SupplierPage.vue';
import RenovationPage from './pages/RenovationPage.vue';
import DeliveryGame from './pages/minigames/DeliveryGame.vue';
import MarketGame from './pages/minigames/MarketGame.vue';
import CafeGame from './pages/minigames/CafeGame.vue';
import BakingGame from './pages/minigames/BakingGame.vue';
import ResearchGame from './pages/minigames/ResearchGame.vue';
import TutorialPractice from './pages/TutorialPractice.vue';
import './pages/minigames/game-ui.css';
const scene = ref('shop');
const guideTarget = ref('');
const started = ref(false);
const saveCenterOpen = ref(false);
const activePanel = ref('');
const minigame = ref('');
const phoneOpen = ref(false);
const activeFeatureSection = ref('pantry');
const activeManageSection = ref('overview');
const activeShopSection = ref('counter');
function openPanel(name, section = 'overview') {
  if (typeof name === 'string' && name.indexOf('game:') === 0) {
    minigame.value = name.slice(5);
    return;
  }
  activePanel.value = name;
  if (name === 'manage') activeManageSection.value = section;
  if (name === 'shop') activeShopSection.value = section;
  if (name === 'feature') activeFeatureSection.value = section;
}

function navigateTown(target) {
  if (!sceneAvailability(target).open) return;
  visitTownScene(target);
  phoneOpen.value = false;
  scene.value = target;
}

function sleepAtHome() {
  const report = restAtHome();
  if (!report) return;
  closePanel();
  scene.value = 'home';
  onClosed(report);
}
function closePanel() {
  activePanel.value = '';
  activeManageSection.value = 'overview';
  activeShopSection.value = 'counter';
}
const activeEvent = ref(null);
const dayReport = ref(null);
const monthReport = ref(null);
const endingDismissed = ref(false);
const ending = computed(() =>
  state.phase === 'ended' && state.ending && !queue.events.length && !endingDismissed.value ? state.ending : null
);
const canContinueStory = computed(() =>
  state.ending && STAGES.some((stage) => !stage.final && stage.short.key === state.ending.key)
);
const pending = computed(() => queue.events.length);
const activeGuideTarget = computed(() =>
  started.value && state.tutorialPractice === 'phone' && !phoneOpen.value ? 'phone' : guideTarget.value
);

function enterGame(target = {}) {
  const freshStart = target.fresh === true;
  const opening = STORY.prologue || STORY.events.find((event) => event.kind === 'prologue');
  const prologueComplete = state.played.includes(opening.id);
  if (!state.tutorialPractice) startGame(freshStart || !prologueComplete);
  const prologuePending = !prologueComplete;
  if (prologuePending) {
    state.tutorialPractice = null;
    state.tutorialPracticeProgress = 0;
  }
  started.value = true;
  saveCenterOpen.value = false;
  scene.value = 'shop';
  activePanel.value = target.panel || '';
  phoneOpen.value = false;
  activeManageSection.value = target.section || 'overview';
  if (state.tutorialPromptPending) state.tutorialPromptPending = false;
  if (prologuePending) {
    state.tutorialSeen = false;
    for (let i = queue.events.length - 1; i >= 0; i--) {
      if (queue.events[i].kind === 'tutorial' || queue.events[i].id === opening.id) queue.events.splice(i, 1);
    }
    queue.events.unshift(opening);
    activeEvent.value = opening;
    save();
  }
  if (!prologuePending && !state.tutorialPractice && queue.events.length) {
    activeEvent.value = queue.events[0];
  }
  if (!state.tutorialPractice) {
    if (state.productionMini || state.productionResult) minigame.value = 'baking';
    else if (state.labPending) minigame.value = 'research';
    else if (state.dayPhase === 'service' && state.service) minigame.value = 'delivery';
    else if (state.marketRun && !state.marketRun.completed) minigame.value = 'market';
    else if (state.cafeRun && !state.cafeRun.completed) minigame.value = 'cafe';
  }
}

function returnToTitle() {
  save();
  started.value = false;
  saveCenterOpen.value = false;
  activePanel.value = '';
  phoneOpen.value = false;
  activeEvent.value = null;
  dayReport.value = null;
  monthReport.value = null;
  endingDismissed.value = false;
}

function openNext() {
  if (state.tutorialPractice) return;
  if (!queue.events.length) return;
  const next = queue.events[0];
  if (next.kind === 'tutorial') {
    if (next.id.includes('KITCHEN')) scene.value = 'kitchen';
    else if (next.id.includes('STREET') || next.id.includes('PHONE')) scene.value = 'street';
    else scene.value = 'shop';
  }
  activeEvent.value = next;
}

function doneEvent() {
  const completed = activeEvent.value;
  queue.events.shift();
  activeEvent.value = null;
  save();
  if (completed?.id === STORY.prologue.id) {
    const tutorialChoice = state.storyChoices[completed.id]?.['0.1'];
    state.tutorialPromptPending = false;
    startTutorial(tutorialChoice === 0);
    openNext();
    save();
    return;
  }
  const practiceAfter = {
    EVT_TUTORIAL_FRONT: 'counter',
    EVT_TUTORIAL_KITCHEN: 'production',
    EVT_TUTORIAL_STREET: 'purchase',
    EVT_TUTORIAL_PHONE: 'phone',
  }[completed?.id];
  if (practiceAfter) {
    state.tutorialPractice = practiceAfter;
    state.tutorialPracticeProgress = 0;
    save();
    return;
  }
  // 教程需要连续演出；普通剧情结束后回地图，由玩家决定何时继续待播剧情。
  const next = queue.events[0];
  if (next?.kind === 'tutorial') setTimeout(openNext, 200);

}

function finishTutorialPractice(step) {
  if (state.tutorialPractice !== step) return;
  state.tutorialPractice = null;
  state.tutorialPracticeProgress = 0;
  if (step === 'phone') phoneOpen.value = false;
  state.tutorialProgress += 1;
  save();
  setTimeout(openNext, 180);
}

function updatePhoneTutorialStep(step) {
  if (state.tutorialPractice !== 'phone') return;
  state.tutorialPracticeProgress = Math.max(0, Math.min(7, Number(step) || 0));
  save();
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
  scene.value = 'shop';
  activePanel.value = '';
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

const locationNotices = [
  ['home', '卧室与衣柜开放', '经营一天后，可以回家休息、更换林念的日常服装。', 'home'],
  ['park', '公园开放', '苏晴提起了小镇公园，空闲时可以去散步、拍照。', 'park'],
  ['river', '河岸开放', '公园尽头的小路通向河边，那里有新的故事。', 'river'],
  ['lab', '实验台开放', '基础配方逐渐熟练，现在可以在后厨研发新口味。', 'kitchen'],
  ['studio', '设计工作室开放', '完成定制订单后，叶星河邀请林念尝试蛋糕与包装设计。', 'studio'],
  ['cafe', '秋屿咖啡开放', '秋屿咖啡将于第 11 个月开放沈知秋剧情。', 'cafe'],
  ['staff', '员工排班板开放', '第一位伙伴加入后，可以安排岗位和培训。', 'kitchen'],
  ['market', '小镇市集开放', '林记烘焙收到了参加季节市集的邀请。', 'market'],
  ['store', '品牌新店开放', '林念已经有能力规划更远处的品牌门店。', 'store'],
];

watch(() => [state.dayIndex, state.month, state.shopLevel, state.brand, state.customOrders, state.staff.length, state.sqchatMonth, state.sceneVisits.park], () => {
  locationNotices.forEach(([key, title, detail, target]) => {
    if (sceneAvailability(key).open && !state.unlockNotified.includes(key)) {
      state.unlockNotified.push(key);
      addTownNotice(title, detail, target);
    }
  });
}, { immediate: true });

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
});
</script>

<template>
  <div class="app">
  <TitleScreen v-if="!started" @enter="enterGame" />

    <button
      v-if="started && state.phase === 'playing'"
      class="dev-backdoor"
      type="button"
      aria-label="开发者后门，跳到下个月"
      title="跳到下个月"
      :disabled="!!activeEvent || !!dayReport"
      @click="devSkipMonth"
    >开发者后门</button>

    <div v-if="started" class="topbar game-in">
      <div class="m serif">
        {{ monthLabel(state.month) }}
        <small>第 {{ state.month }} / 36 月 · 第 {{ state.day }} / {{ DAYS_PER_MONTH }} 日</small>
      </div>
      <div class="topbar-actions">
        <div class="purse"><span class="y">¥</span>{{ state.cash.toLocaleString() }}</div>
        <button class="topbar-save" type="button" @click="saveCenterOpen = true">设置</button>
      </div>
    </div>

    <div v-if="started" class="scroll scene-scroll game-in">
      <div class="between scene-meta">
        <span class="small muted">{{ stageInfo.name }}</span>
        <span class="chip">行动力 {{ state.ap }} · 体力 {{ state.stamina }}</span>
      </div>

      <SceneMapPage :scene="scene" :guide-target="activeGuideTarget" @change-scene="scene = $event" @open-panel="openPanel" />

      <div v-if="activePanel" class="scene-panel-mask" @click.self="closePanel">
        <section class="scene-panel">
          <header class="scene-panel-head">
            <div>
              <div class="small muted">林记烘焙 · {{ monthLabel(state.month) }}</div>
              <strong>{{ ({shop:'柜台营业', kitchen:'后厨操作台', partners:'员工排班板', manage:'经营手账', codex:'图鉴与相册', supplier:'食材采购', renovation:'店铺升级', feature:'小镇互动'})[activePanel] || '经营' }}</strong>
            </div>
            <button type="button" class="scene-panel-close" @click="closePanel">✕</button>
          </header>
          <div class="scene-panel-content">
            <ShopPage v-if="activePanel === 'shop'" @closed="onClosed" @open-panel="openPanel" />
            <RenovationPage v-else-if="activePanel === 'renovation'" />
            <SupplierPage v-else-if="activePanel === 'supplier'" />
            <KitchenPage v-else-if="activePanel === 'kitchen'" @open-panel="openPanel" />
            <PartnersPage v-else-if="activePanel === 'partners'" />
            <ManagePage v-else-if="activePanel === 'manage'" :initial-section="activeManageSection" @open-panel="openPanel" />
            <CodexPage v-else-if="activePanel === 'codex'" :initial-segment="activeManageSection === 'collection' ? 'collection' : 'product'" />
            <SceneFeaturePage v-else-if="activePanel === 'feature'" :section="activeFeatureSection" @open-panel="openPanel" @rest-day="sleepAtHome" />
          </div>
        </section>
      </div>

      <div v-if="started && state.tutorialPractice === 'purchase'" class="scene-panel-mask">
        <section class="scene-panel">
          <header class="scene-panel-head">
            <div>
              <div class="small muted">林记烘焙 · 新手教程</div>
              <strong>街道练习 · 采购原料</strong>
            </div>
          </header>
          <div class="scene-panel-content">
            <SupplierPage tutorial @done="finishTutorialPractice('purchase')" />
          </div>
        </section>
      </div>
    </div>

    <button v-if="started && !minigame" class="phone-fab" :class="{ 'phone-fab-guide-target': activeGuideTarget === 'phone' }" :data-guide-key="activeGuideTarget === 'phone' ? 'phone' : undefined" type="button" aria-label="打开常驻手机" @click="phoneOpen = true"><span>▣</span><small>手机</small></button>
    <PhonePage
      v-if="started && phoneOpen && !minigame"
      :tutorial="state.tutorialPractice === 'phone'"
      :tutorial-progress="state.tutorialPracticeProgress"
      @close="phoneOpen = false"
      @navigate="navigateTown"
      @open-panel="openPanel"
      @tutorial-step="updatePhoneTutorialStep"
      @tutorial-done="finishTutorialPractice('phone')"
    />

    <button
      v-if="started && pending"
      class="btn primary"
      type="button"
      style="position: absolute; right: 14px; bottom: 16px; z-index: 20; box-shadow: var(--shadow)"
      @click="openNext"
    >
      有 {{ pending }} 段剧情
    </button>

    <BakingGame v-if="minigame === 'baking'" @exit="minigame = ''" />
    <ResearchGame v-if="minigame === 'research'" @exit="minigame = ''" />
    <DeliveryGame v-if="minigame === 'delivery'" :paused="!!activeEvent" @exit="minigame = ''" />
    <TutorialPractice v-if="started && state.tutorialPractice && !['counter', 'production', 'purchase', 'phone'].includes(state.tutorialPractice)" :step="state.tutorialPractice" @done="finishTutorialPractice" />
    <MarketGame v-if="minigame === 'market'" @exit="minigame = ''" />
    <CafeGame v-if="minigame === 'cafe'" @exit="minigame = ''" />

    <DeliveryGame v-if="started && state.tutorialPractice === 'counter'" tutorial @exit="finishTutorialPractice('counter')" />
    <BakingGame v-if="started && state.tutorialPractice === 'production'" tutorial @exit="finishTutorialPractice('production')" />

    <StoryModal v-if="started && activeEvent" :ev="activeEvent" @guide-target="guideTarget = $event" @done="doneEvent" />

    <div v-if="started && dayReport" class="mask" @click.self="nextDay">
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

    <div v-if="started && ending" class="mask">
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

    <TitleScreen v-if="started && saveCenterOpen" in-game @close="saveCenterOpen = false" @title="returnToTitle" @enter="enterGame" />
  </div>
</template>

<style scoped>
.game-in {
  animation: gameIn 0.55s ease both;
}
@keyframes gameIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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
  /* 档案正文是多段（场景 + 对白 + 档案结语），保留换行 */
  white-space: pre-line;
  overflow-wrap: anywhere;
}

.dev-backdoor {
  position: absolute;
  left: env(safe-area-inset-left, 0px);
  top: 50%;
  z-index: 32;
  width: 38px;
  min-height: 94px;
  padding: 9px 5px;
  border: 1px solid rgba(255, 247, 235, 0.78);
  border-left: 0;
  border-radius: 0 12px 12px 0;
  background: rgba(74, 49, 34, 0.78);
  color: #fff9ee;
  box-shadow: 0 3px 12px rgba(37, 24, 16, 0.24);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  cursor: pointer;
  touch-action: manipulation;
}
.dev-backdoor:disabled {
  opacity: 0.42;
  cursor: default;
}
.dev-backdoor:not(:disabled):active {
  background: rgba(74, 49, 34, 0.96);
}

.scene-scroll { min-height:0; padding: 8px 0 calc(env(safe-area-inset-bottom, 0px) + 8px); overflow:hidden; display:flex; flex-direction:column; }
.scene-meta { padding: 0 14px 7px; flex:0 0 auto; }
.scene-panel-mask { position:absolute; inset:0; z-index:35; background:rgba(36,25,17,.45); display:flex; align-items:flex-end; }
.scene-panel { width:100%; max-height:88%; display:flex; flex-direction:column; overflow:hidden; border-radius:22px 22px 0 0; background:var(--cream); box-shadow:0 -10px 40px rgba(40,25,15,.24); }
.scene-panel-head { flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; padding:13px 17px 11px; border-bottom:1px solid var(--line); background:var(--paper); }
.scene-panel-head strong { display:block; font-size:18px; }
.scene-panel-close { width:34px; height:34px; border:1px solid var(--line); border-radius:50%; background:var(--cream); color:var(--caramel); font-size:16px; cursor:pointer; }
.scene-panel-content { overflow:auto; -webkit-overflow-scrolling:touch; padding:12px 14px calc(env(safe-area-inset-bottom,0px) + 20px); }
.topbar-actions{display:flex;align-items:center;gap:9px}.topbar-save{min-width:48px;min-height:40px;border:1px solid var(--line);border-radius:10px;background:var(--paper);color:var(--caramel);font:inherit;font-size:12px}
.phone-fab{position:absolute;left:12px;bottom:calc(env(safe-area-inset-bottom,0px) + 17px);z-index:26;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;width:55px;height:55px;border:2px solid #fff7eb;border-radius:17px;background:#6b4a34;color:#fff9ee;box-shadow:0 4px 13px #34241666;font:600 12px inherit;cursor:pointer;touch-action:manipulation}.phone-fab span{font-size:22px;line-height:1.1}.phone-fab small{font-size:10px;font-weight:700}.phone-fab:active{transform:scale(.96)}
.phone-fab-guide-target{outline:3px solid #fff2ad;outline-offset:4px;box-shadow:0 0 0 9px rgba(192,112,48,.7),0 0 26px rgba(255,223,139,.95);animation:phoneGuideSpotlight 1.35s ease-in-out infinite alternate}
@keyframes phoneGuideSpotlight{to{box-shadow:0 0 0 12px rgba(192,112,48,.38),0 0 34px rgba(255,223,139,.9)}}
</style>
