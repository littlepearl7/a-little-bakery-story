<script setup>
import { computed, ref, watch } from 'vue';
import { art, artStatus } from '../data';
import { state, actionInfo, doAction, stageInfo, stageProgress } from '../store';

const props = defineProps({ scene: { type: String, default: 'shop' } });
const emit = defineEmits(['change-scene', 'open-panel']);

const LOCATIONS = {
  shop: { name: '林记烘焙', sub: '熟悉的木门后，总有蛋糕香', img: 'bg-shop.webp', icon: '🏠' },
  kitchen: { name: '烘焙后厨', sub: '今天也要做出好吃的蛋糕', img: 'bg-kitchen.webp', icon: '🥣' },
  street: { name: '栖云镇老街', sub: '沿着青石板路，去熟悉的地方', img: 'bg-street.webp', icon: '🌿' },
  home: { name: '林念的家', sub: '家里的灯总为你留着', img: 'bg-home.webp', icon: '🪴' },
  cafe: { name: '街角咖啡馆', sub: '一杯咖啡与一点新灵感', img: 'bg-cafe.webp', icon: '☕' },
  park: { name: '河边公园', sub: '适合散步、看看河面', img: 'bg-park.webp', icon: '🍃' },
  market: { name: '小镇市集', sub: '季节活动的摊位已经摆好', img: 'bg-market.webp', icon: '🎪' },
  studio: { name: '设计工作室', sub: '配色、包装与有趣的创意', img: 'bg-studio.webp', icon: '🎨' },
  school: { name: '熟悉的高中', sub: '那些一起走过的旧时光', img: 'bg-school.webp', icon: '📚' },
  store: { name: '品牌新店', sub: '林记走向更远的地方', img: 'bg-store.webp', icon: '🏬' },
};

function unlocked(id) {
  if (id === 'studio') return state.month >= 21;
  if (id === 'market') return state.month >= 6;
  if (id === 'store') return state.month >= 19;
  if (id === 'school') return state.month >= 4;
  return true;
}

const places = computed(() => Object.entries(LOCATIONS)
  .filter(([id]) => unlocked(id))
  .map(([id, data]) => ({ id, ...data })));
const current = computed(() => LOCATIONS[props.scene] || LOCATIONS.shop);
const currentImage = computed(() => props.scene === 'shop' ? 'bg-shop-lv' + state.shopLevel + '.webp' : current.value.img);
const displayImage = computed(() => artStatus(currentImage.value) === 'ok' ? currentImage.value : current.value.img);
const hotspots = computed(() => {
  const shopLayout = {
    1: { counter: [56, 55], mom: [22, 68], phone: [29, 51], book: [82, 80], diary: [13, 82], kitchen: [88, 38], door: [92, 92] },
    2: { counter: [57, 57], mom: [30, 75], phone: [8, 64], book: [13, 83], diary: [84, 77], kitchen: [82, 40], door: [92, 93] },
    3: { counter: [64, 58], mom: [20, 67], phone: [32, 55], book: [85, 84], diary: [14, 84], kitchen: [82, 40], door: [92, 93] },
    4: { counter: [78, 59], mom: [20, 67], phone: [31, 56], book: [26, 47], diary: [15, 84], kitchen: [79, 40], door: [92, 94] },
  }[state.shopLevel] || { counter: [56, 55], mom: [22, 68], phone: [29, 51], book: [82, 80], diary: [13, 82], kitchen: [88, 38], door: [92, 92] };
  const layouts = {
    shop: [
      { id: 'counter', x: shopLayout.counter[0], y: shopLayout.counter[1], text: '柜台 · 预约与营业', kind: 'panel', value: 'shop', section: 'counter' },
      { id: 'mom', x: shopLayout.mom[0], y: shopLayout.mom[1], text: '和妈妈聊聊', kind: 'action', value: 'momchat' },
      { id: 'phone', x: shopLayout.phone[0], y: shopLayout.phone[1], text: '手机 · 宣传', kind: 'action', value: 'market' },
      { id: 'book', x: shopLayout.book[0], y: shopLayout.book[1], text: '装修册 · 店铺升级', kind: 'panel', value: 'renovation' },
      { id: 'diary', x: shopLayout.diary[0], y: shopLayout.diary[1], text: '手账 · 目标与图鉴', kind: 'panel', value: 'manage' },
      { id: 'kitchen', x: shopLayout.kitchen[0], y: shopLayout.kitchen[1], text: '去后厨 →', kind: 'scene', value: 'kitchen' },
      { id: 'door', x: shopLayout.door[0], y: shopLayout.door[1], text: '出门 →', kind: 'scene', value: 'street' },
    ],
    kitchen: [
      { id: 'workbench', x: 48, y: 63, text: '操作台 · 今日排产', kind: 'panel', value: 'kitchen' },
      { id: 'baking', x: 52, y: 81, text: '开始制作 · 小游戏', kind: 'panel', value: 'game:baking' },
      { id: 'lab', x: 76, y: 44, text: '实验台 · 配方研发', kind: 'panel', value: 'game:research' },
      { id: 'staff', x: 20, y: 39, text: '排班板 · 员工与培训', kind: 'panel', value: 'partners' },
      { id: 'back', x: 7, y: 53, text: '← 回店内', kind: 'scene', value: 'shop' },
    ],
    street: [
      { id: 'supplier', x: 83, y: 56, text: '食材铺 · 采购', kind: 'panel', value: 'supplier' },
      { id: 'sq', x: 70, y: 78, text: '和苏晴聊聊', kind: 'action', value: 'sqchat' },
      { id: 'bakery', x: 16, y: 55, text: '← 回林记', kind: 'scene', value: 'shop' },
      { id: 'park', x: 40, y: 90, text: '去公园 →', kind: 'scene', value: 'park' },
      { id: 'home', x: 80, y: 90, text: '回家 →', kind: 'scene', value: 'home' },
    ],
    store: [
      { id: 'expansion', x: 54, y: 67, text: '新店规划桌 · 城市与分店', kind: 'panel', value: 'manage', section: 'branch' },
      { id: 'exit', x: 8, y: 91, text: '← 回栖云镇', kind: 'scene', value: 'street' },
    ],
    market: [
      { id: 'stall', x: 48, y: 58, text: '林记摊位 · 参加市集', kind: 'panel', value: 'game:market' },
      { id: 'back', x: 10, y: 90, text: '← 回老街', kind: 'scene', value: 'street' },
    ],
    cafe: [
      { id: 'collab', x: 52, y: 56, text: '联名活动 · 咖啡与蛋糕', kind: 'panel', value: 'game:cafe' },
      { id: 'coffee', x: 22, y: 74, text: '喝一杯（体力 +12）', kind: 'action', value: 'coffee' },
      { id: 'back', x: 10, y: 90, text: '← 回老街', kind: 'scene', value: 'street' },
    ],
    park: [
      { id: 'walk', x: 50, y: 66, text: '在河边走走（心情 +8）', kind: 'action', value: 'walk' },
      { id: 'back', x: 10, y: 90, text: '← 回老街', kind: 'scene', value: 'street' },
    ],
    studio: [
      { id: 'album', x: 52, y: 60, text: '看看设计稿与相册', kind: 'panel', value: 'codex' },
      { id: 'back', x: 10, y: 90, text: '← 回老街', kind: 'scene', value: 'street' },
    ],
    school: [
      { id: 'memories', x: 50, y: 62, text: '翻翻旧相册', kind: 'panel', value: 'codex' },
      { id: 'back', x: 10, y: 90, text: '← 回老街', kind: 'scene', value: 'street' },
    ],
  };
  if (layouts[props.scene]) return layouts[props.scene];
  if (props.scene === 'home') return [{ id: 'exit', x: 10, y: 90, text: '← 出门', kind: 'scene', value: 'street' }];
  return [{ id: 'exit', x: 10, y: 90, text: '← 回老街', kind: 'scene', value: 'street' }];
});

const travelOpen = ref(false);
const selected = ref(null);
const notice = ref('');
let noticeTimer;

watch(() => props.scene, () => { selected.value = null; travelOpen.value = false; });

function toast(message) {
  notice.value = message;
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => { notice.value = ''; }, 2400);
}

function go(id) {
  if (!unlocked(id)) return toast('這個地方還沒有開放。');
  selected.value = null;
  travelOpen.value = false;
  emit('change-scene', id);
}

const chosenInfo = computed(() => {
  if (!selected.value || selected.value.kind !== 'action') return null;
  if (selected.value.value === 'momchat') return { ap: 1, cost: 0, disabled: false, note: '家庭默契 +4' };
  return actionInfo(selected.value.value);
});

function activate(item) {
  if (item.kind === 'scene') return go(item.value);
  if (item.kind === 'panel') return emit('open-panel', item.value, item.section || 'overview');
  selected.value = item;
}

function confirm() {
  const item = selected.value;
  if (!item || state.phase !== 'playing') return;
  if (state.dayPhase !== 'prep') return toast('今天已经开门，打烊后再行动。');
  const info = chosenInfo.value;
  if (!info || info.disabled || state.ap < info.ap || state.cash < info.cost) return toast(info?.note || '现在暂时无法行动。');
  const ok = item.value === 'momchat'
    ? doAction('talk', { partner: 'mom' })
    : doAction(item.value, {});
  if (ok) { toast(item.text + ' · 已完成'); selected.value = null; }
  else toast('暂时无法执行，请检查行动力或触发条件。');
}

function lockedLabel(id) {
  return id === 'studio' ? '21' : id === 'market' ? '6' : id === 'store' ? '19' : '4';
}
</script>

<template>
  <section class="world">
    <div class="world-canvas" :class="'world-' + scene">
      <img v-if="artStatus(displayImage) !== 'no'" class="world-background" :src="art(displayImage)" :alt="current.name" />
      <div class="world-vignette" aria-hidden="true"></div>
      <header class="world-heading">
        <div>
          <span class="world-eyebrow">{{ scene === 'shop' ? 'HOME' : 'QIYUN TOWN' }} · 第 {{ state.month }} 月</span>
          <h1 class="world-title">{{ current.name }}</h1>
          <div class="world-subtitle">{{ current.sub }}</div>
        </div>
        <button class="world-compass" type="button" aria-label="打开地点地图" @click="travelOpen = !travelOpen">地图</button>
      </header>

      <button v-for="item in hotspots" :key="item.id" class="world-hotspot" type="button" :style="{ left: item.x + '%', top: item.y + '%', transform: item.x > 80 ? 'translate(-100%,-50%)' : item.x < 15 ? 'translate(0,-50%)' : 'translate(-50%,-50%)' }" @click="activate(item)">
        {{ item.text }}
      </button>

      <div class="world-status">
        <span>{{ stageInfo.name }}</span>
        <span>阶段目标 {{ stageProgress.done }}/{{ stageProgress.need || '—' }}</span>
        <span>口碑 {{ Math.round(state.reputation) }}</span>
      </div>
      <div v-if="notice" class="world-toast" role="status">{{ notice }}</div>

      <div v-if="travelOpen" class="world-travel">
        <div class="world-travel-head"><span>选择地点</span><button type="button" aria-label="关闭地点地图" @click="travelOpen = false">✕</button></div>
        <div class="world-travel-grid">
          <button v-for="place in places" :key="place.id" type="button" class="world-travel-place" :class="{ current: scene === place.id }" @click="go(place.id)">
            <img :src="art(place.img)" alt="" />
            <span>{{ place.icon }} {{ place.name }}</span>
          </button>
          <div v-for="id in ['school', 'market', 'store', 'studio'].filter((key) => !unlocked(key))" :key="'locked-' + id" class="world-travel-place locked">
            <span class="locked-avatar">?</span>
            <span>未解锁 · M{{ lockedLabel(id) }}</span>
          </div>
        </div>
      </div>

      <div v-if="selected" class="world-action-mask" @click.self="selected = null">
        <div class="world-action-sheet">
          <strong>{{ selected.text }}</strong>
          <span>{{ chosenInfo?.note }}</span>
          <small v-if="chosenInfo">消耗 {{ chosenInfo.ap }} 点行动力{{ chosenInfo.cost ? ' · ¥' + chosenInfo.cost : '' }}</small>
          <div class="world-action-buttons">
            <button class="world-action-cancel" type="button" @click="selected = null">取消</button>
            <button class="world-action-confirm" type="button" :disabled="state.dayPhase !== 'prep' || chosenInfo?.disabled || state.ap < (chosenInfo?.ap || 0) || state.cash < (chosenInfo?.cost || 0)" @click="confirm">开始行动</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.world{flex:1 1 auto;min-height:0;min-width:0;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#f3e6d4;container-type:size}
/* 按地图区域的实际剩余空间缩放，顶部状态栏、开发按钮和浏览器工具栏都不再挤掉底部热点。 */
.world-canvas{position:relative;aspect-ratio:9/16;width:min(100cqw,56.25cqh);max-width:100%;max-height:100%;margin:auto;overflow:hidden;background:radial-gradient(ellipse at 50% 20%,#f7e6d0,#bd997c)}
.world-background{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;pointer-events:none}
.world-vignette{position:absolute;inset:0;background:linear-gradient(180deg,rgba(44,30,23,.47),transparent 30%,transparent 74%,rgba(41,30,19,.27));pointer-events:none}
.world-heading{position:absolute;top:0;left:0;right:0;z-index:8;padding:16px 15px 10px;display:flex;justify-content:space-between;align-items:flex-start;gap:8px;color:#fff9ed;text-shadow:0 1px 6px #3b2918a8;pointer-events:none}
.world-eyebrow{font-size:9px;letter-spacing:1.6px;opacity:.85}.world-title{margin:0;font-size:24px;line-height:1.4;font-weight:600;font-family:'Songti SC','Noto Serif SC',serif;letter-spacing:1px}.world-subtitle{font-size:11px;opacity:.94}
.world-compass{pointer-events:auto;min-width:54px;height:48px;border:0;border-bottom:1px solid #fff9ed;border-radius:0;background:#fff9ed2e;color:#fffaf2;font-size:14px;font-weight:700;text-shadow:0 1px 5px #3b2918;cursor:pointer;touch-action:manipulation}
.world-hotspot{position:absolute;z-index:5;transform:translate(-50%,-50%);min-width:44px;min-height:48px;padding:4px 9px;border:0;border-bottom:1px solid #fff4;background:linear-gradient(90deg,#fffaf0e8,#fffaf0c4);color:#563a27;font:600 12px/1.5 inherit;white-space:nowrap;text-shadow:0 1px 0 #fff;box-shadow:0 2px 10px #39271b2b;cursor:pointer;touch-action:manipulation}
.world-hotspot:active{background:#fff7e3;color:#9a5b35}
.world-status{position:absolute;left:8px;right:8px;bottom:8px;z-index:5;display:flex;justify-content:center;gap:4px;pointer-events:none}.world-status span{color:#6b4a34;background:#fffaf0ed;border-radius:10px;padding:5px 7px;font-size:9px;font-weight:600;box-shadow:0 2px 8px #44312233;white-space:nowrap}
.world-toast{position:absolute;left:8%;right:8%;bottom:45px;text-align:center;z-index:25;background:#fffaf5f5;color:#6b4a34;padding:10px;border-radius:12px;box-shadow:0 7px 25px #35241650;font-size:12px}
.world-travel{position:absolute;z-index:20;left:10px;right:10px;top:17%;bottom:9%;padding:12px;background:#fffaf0f7;border:1px solid #f2ddc6;border-radius:16px;box-shadow:0 12px 40px #3423178c;display:flex;flex-direction:column}.world-travel-head{flex:0 0 auto;display:flex;justify-content:space-between;align-items:center;color:#6b4a34;font-size:14px;font-weight:700;padding-bottom:10px}.world-travel-head button{background:transparent;border:0;color:#6b4a34;font-size:18px;min-width:44px;min-height:44px;cursor:pointer}.world-travel-grid{min-height:0;overflow-y:auto;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;align-content:start}.world-travel-place{position:relative;padding:0;height:95px;border:1px solid #dfc6a8;border-radius:10px;overflow:hidden;background:#eed9c1;cursor:pointer;text-align:left}.world-travel-place img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 35%}.world-travel-place>span:last-child{position:absolute;left:0;right:0;bottom:0;padding:8px 6px 4px;background:linear-gradient(0deg,#2c1d16dc,#2c1d1600);font-size:11px;color:#fffaf2;font-weight:700;white-space:nowrap}.world-travel-place.current{outline:2px solid #a9b99b}.world-travel-place.locked{display:grid;place-items:center;background:#292522;color:#fffaf2;font-size:11px}.locked-avatar{color:white;font-size:32px}
.world-action-mask{position:absolute;inset:0;z-index:30;background:#24191055;display:flex;align-items:flex-end}.world-action-sheet{width:100%;max-height:100%;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;padding:17px 16px calc(14px + env(safe-area-inset-bottom));background:#fffaf2;border-radius:18px 18px 0 0;box-shadow:0 -8px 30px #34231744;display:flex;flex-direction:column;gap:7px;color:#6b4a34}.world-action-sheet>strong{font-size:15px}.world-action-sheet>span{font-size:12px;color:#866b54}.world-action-sheet small{font-size:11px;color:#b26853}.world-action-buttons{display:flex;gap:10px;margin-top:7px}.world-action-buttons button{min-height:46px;border-radius:11px;border:1px solid #c9a98c;padding:10px 14px;font-size:13px;font-weight:600;cursor:pointer;flex:1}.world-action-cancel{background:#fffdf8;color:#6b4a34}.world-action-confirm{background:#6b4a34;color:#fffaf2}.world-action-confirm:disabled{opacity:.45;cursor:default}
@media(max-width:370px){.world-title{font-size:21px}.world-hotspot{font-size:11px;padding-inline:6px}.world-status{gap:2px}.world-status span{font-size:8px;padding:4px}}
</style>
