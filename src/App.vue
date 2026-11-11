<script setup>
import { computed, onMounted, ref } from 'vue';
import { monthLabel, stageOf } from './data';
import { state, queue, load, reset, startGame, ENDINGS, save } from './store';
import StoryModal from './components/StoryModal.vue';
import AlbumPage from './pages/AlbumPage.vue';
import ShopPage from './pages/ShopPage.vue';
import ManagePage from './pages/ManagePage.vue';
import MenuPage from './pages/MenuPage.vue';
import DecorPage from './pages/DecorPage.vue';
import MapPage from './pages/MapPage.vue';
import FriendPage from './pages/FriendPage.vue';

const TABS = [
  { id: 'shop', label: '店铺', icon: 'house' },
  { id: 'manage', label: '经营', icon: 'tray' },
  { id: 'menu', label: '菜单', icon: 'book' },
  { id: 'decor', label: '装修', icon: 'brush' },
  { id: 'map', label: '地图', icon: 'pin' },
  { id: 'friend', label: '好友', icon: 'heart' },
];

const tab = ref('manage');
const albumOpen = ref(false);
const activeEvent = ref(null);

function tabFromHash() {
  const h = location.hash.replace('#', '');
  return TABS.some((t) => t.id === h) ? h : 'manage';
}
tab.value = tabFromHash();
window.addEventListener('hashchange', () => (tab.value = tabFromHash()));

const stage = computed(() => stageOf(state.month));
const pending = computed(() => queue.events.length);
const ending = computed(() => (state.phase === 'ended' && !queue.events.length ? ENDINGS[state.ending] : null));

const ICONS = {
  house: 'M3.5 10.8 12 4l8.5 6.8V20a1 1 0 0 1-1 1h-4.6v-6H9.1v6H4.5a1 1 0 0 1-1-1z',
  tray: 'M4 9h16M5.5 9V19a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9M8 9V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V9',
  book: 'M5 4.5h11.5A2.5 2.5 0 0 1 19 7v13H7.5A2.5 2.5 0 0 1 5 17.5zM5 17.5A2.5 2.5 0 0 1 7.5 15H19',
  brush: 'M14.5 4 20 9.5 11 18.5l-5.5.5.5-5.5zM4 21c1.5 0 3-.8 3-2.5',
  pin: 'M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z',
  heart: 'M12 20s-7.5-4.6-7.5-9.5A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7.5 2.9C19.5 15.4 12 20 12 20z',
};

function openNext() {
  if (queue.events.length) {
    activeEvent.value = queue.events[0];
  }
}

function doneEvent() {
  queue.events.shift();
  activeEvent.value = null;
  save();
  if (queue.events.length) {
    setTimeout(openNext, 220);
  }
}

function restart() {
  reset();
  tab.value = 'manage';
  startGame();
  openNext();
}

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
        <small>第 {{ state.month }} / 36 个月</small>
      </div>
      <div class="purse">
        <span class="y">¥</span>{{ state.money.toLocaleString() }}
      </div>
    </div>

    <div class="scroll">
      <div class="small muted" style="margin: -4px 2px 10px">{{ stage.name }}</div>

      <ShopPage v-if="tab === 'shop'" />
      <ManagePage v-else-if="tab === 'manage'" />
      <MenuPage v-else-if="tab === 'menu'" />
      <DecorPage v-else-if="tab === 'decor'" />
      <MapPage v-else-if="tab === 'map'" />
      <FriendPage v-else-if="tab === 'friend'" @album="albumOpen = true" />
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
        <svg class="ico" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path :d="ICONS[t.icon]" />
        </svg>
        <span>{{ t.label }}</span>
      </button>
    </div>

    <StoryModal v-if="activeEvent" :ev="activeEvent" @done="doneEvent" />
    <AlbumPage v-if="albumOpen" @close="albumOpen = false" />

    <div v-if="ending" class="mask">
      <div class="sheet">
        <div class="sheet-body" style="padding-top: 22px">
          <div class="small muted serif">结局 · {{ ending.name }}</div>
          <h2 class="serif" style="font-size: 20px; margin: 6px 0 10px; line-height: 1.5">
            {{ ending.title }}
          </h2>
          <p style="font-size: 14px; line-height: 1.85; color: var(--caramel-soft); margin: 0 0 18px">
            {{ ending.text }}
          </p>
          <div class="card card-pad">
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">门店 / 员工</span><span>{{ state.stores }} 家 · {{ state.staff }} 人</span>
            </div>
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">配方</span><span>{{ state.recipes.length }} / 12 款</span>
            </div>
            <div class="between small" style="margin-bottom: 6px">
              <span class="muted">口碑 / 知名度</span>
              <span>{{ Math.round(state.reputation) }} / {{ Math.round(state.fame) }}</span>
            </div>
            <div class="between small">
              <span class="muted">友情相册</span><span>{{ state.photos.length }} 张</span>
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
