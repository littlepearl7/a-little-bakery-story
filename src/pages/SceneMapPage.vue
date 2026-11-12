<script setup>
import { computed, ref, watch } from 'vue';
import { art, artStatus } from '../data';
import { state, actionInfo, doAction, stageInfo, stageProgress } from '../store';

const props = defineProps({
  scene: { type: String, default: 'shop' },
});
const emit = defineEmits(['change-scene', 'open-panel']);

const LOCATIONS = {
  shop:    { name: '林记烘焙', sub: '熟悉的木门后，总有蛋糕香', img: 'bg-shop.webp', icon: '🏠' },
  kitchen: { name: '烘焙后厨', sub: '今天也要做出好吃的蛋糕', img: 'bg-kitchen.webp', icon: '🥣' },
  street:  { name: '栖云镇老街', sub: '出门走走，看看小镇的生活', img: 'bg-street.webp', icon: '🌿' },
  home:    { name: '林念的家', sub: '家里的灯总为你留着', img: 'bg-home.webp', icon: '🪴' },
  cafe:    { name: '街角咖啡馆', sub: '一杯咖啡与一点新灵感', img: 'bg-cafe.webp', icon: '☕' },
  park:    { name: '河边公园', sub: '适合散步、说说心里话', img: 'bg-park.webp', icon: '🍃' },
  market:  { name: '小镇市集', sub: '看看今天有什么新鲜事', img: 'bg-market.webp', icon: '🎪' },
  studio:  { name: '星河的工作室', sub: '配色、包装与有趣的创意', img: 'bg-studio.webp', icon: '🎨' },
  school:  { name: '熟悉的高中', sub: '那几年，课间总有人来找我', img: 'bg-school.webp', icon: '📚' },
  store:   { name: '品牌新店', sub: '林记走向了更远的地方', img: 'bg-store.webp', icon: '🏬' },
};
const places = Object.entries(LOCATIONS).map(([id, data]) => ({ id, ...data }));
const current = computed(() => LOCATIONS[props.scene] || LOCATIONS.shop);
const travelOpen = ref(false);
const selected = ref(null);
const notice = ref('');

let noticeTimer;
function toast(message) {
  notice.value = message;
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => (notice.value = ''), 2600);
}

watch(() => props.scene, () => {
  selected.value = null;
  travelOpen.value = false;
});

function unlocked(id) {
  if (id === 'studio') return state.month >= 21;
  if (id === 'market') return state.month >= 6;
  if (id === 'store') return state.month >= 19;
  if (id === 'school') return state.month >= 4;
  return true;
}
function lockedText(id) {
  if (id === 'studio') return '第 21 个月解锁';
  if (id === 'market') return '第 6 个月解锁';
  if (id === 'store') return '第 19 个月解锁';
  if (id === 'school') return '第 4 个月解锁';
  return '';
}

const layouts = {
  shop: [
    { id:'shop-kitchen', x:23, y:37, icon:'🥣', label:'去后厨', kind:'scene', value:'kitchen', desc:'准备食材、制作蛋糕与研发新品' },
    { id:'shop-mom', x:66, y:48, icon:'💬', label:'和妈妈聊聊', kind:'action', value:'momchat', desc:'听听林暖的经营心得，增进家庭默契' },
    { id:'shop-register', x:35, y:63, icon:'🧾', label:'柜台营业', kind:'panel', value:'shop', desc:'接待顾客、查看订单与打烊结算' },
    { id:'shop-phone', x:73, y:22, icon:'📱', label:'自媒体宣传', kind:'action', value:'market', desc:'发布蛋糕新品和店铺动态' },
    { id:'shop-decor', x:27, y:79, icon:'🪑', label:'装修与设备', kind:'panel', value:'shop', desc:'升级林记烘焙的店铺与设施' },
    { id:'shop-exit', x:83, y:76, icon:'🚶', label:'出门逛逛', kind:'scene', value:'street', desc:'前往栖云镇老街' },
  ],
  kitchen: [
    { id:'kitchen-make', x:31, y:50, icon:'🍰', label:'制作蛋糕', kind:'panel', value:'kitchen', desc:'安排今天的生产和定价' },
    { id:'kitchen-recipe', x:73, y:31, icon:'🧪', label:'研发实验室', kind:'panel', value:'manage', desc:'研发新品、改良配方与提升熟练度' },
    { id:'kitchen-mom', x:62, y:65, icon:'💬', label:'问问妈妈', kind:'action', value:'momchat', desc:'和林暖交流烘焙心得' },
    { id:'kitchen-back', x:18, y:79, icon:'↩', label:'返回店内', kind:'scene', value:'shop', desc:'回到蛋糕店前厅' },
  ],
  street: [
    { id:'street-shop', x:19, y:32, icon:'🏠', label:'林记烘焙', kind:'scene', value:'shop', desc:'回自己的蛋糕店' },
    { id:'street-supplier', x:76, y:39, icon:'🧺', label:'食材铺', kind:'action', value:'restock', desc:'采购新鲜原料，补充库存' },
    { id:'street-cafe', x:39, y:51, icon:'☕', label:'咖啡馆', kind:'scene', value:'cafe', desc:'街角的独立咖啡店' },
    { id:'street-suqing', x:66, y:61, icon:'📷', label:'找苏晴', kind:'action', value:'sqchat', desc:'和一直陪伴你的好朋友聊聊天' },
    { id:'street-park', x:26, y:72, icon:'🌳', label:'河边公园', kind:'scene', value:'park', desc:'去河边走走' },
    { id:'street-home', x:79, y:80, icon:'🪴', label:'回家', kind:'scene', value:'home', desc:'回家休息一下' },
  ],
  home: [
    { id:'home-mom', x:39, y:50, icon:'💬', label:'与妈妈谈心', kind:'action', value:'momchat', desc:'聊聊最近的经营和生活' },
    { id:'home-memory', x:70, y:29, icon:'📖', label:'翻看旧照片', kind:'panel', value:'codex', desc:'回顾林记和朋友们的故事' },
    { id:'home-street', x:72, y:79, icon:'🚶', label:'走出家门', kind:'scene', value:'street', desc:'回到老街' },
  ],
  cafe: [
    { id:'cafe-suqing', x:70, y:56, icon:'📷', label:'约苏晴聊天', kind:'action', value:'sqchat', desc:'找苏晴聊聊近况' },
    { id:'cafe-market', x:31, y:43, icon:'📱', label:'合作推广', kind:'action', value:'market', desc:'与周边商家交流宣传' },
    { id:'cafe-back', x:75, y:80, icon:'↩', label:'返回老街', kind:'scene', value:'street', desc:'离开咖啡馆' },
  ],
  park: [
    { id:'park-suqing', x:51, y:51, icon:'📷', label:'与苏晴散步', kind:'action', value:'sqchat', desc:'在河边说说近况' },
    { id:'park-memory', x:28, y:34, icon:'📒', label:'小镇手账', kind:'panel', value:'codex', desc:'回看收集的生活记忆' },
    { id:'park-back', x:73, y:79, icon:'↩', label:'回到老街', kind:'scene', value:'street', desc:'结束散步' },
  ],
  market: [
    { id:'market-order', x:25, y:47, icon:'🧾', label:'市集营业', kind:'panel', value:'shop', desc:'接待顾客与完成订单' },
    { id:'market-post', x:70, y:46, icon:'📱', label:'活动宣传', kind:'action', value:'market', desc:'分享林记参加市集的消息' },
    { id:'market-back', x:74, y:80, icon:'↩', label:'返回老街', kind:'scene', value:'street', desc:'离开市集' },
  ],
  studio: [
    { id:'studio-xinghe', x:32, y:52, icon:'🎨', label:'找星河聊聊', kind:'partner', value:'qinghe', desc:'聊聊品牌包装与她的设计工作' },
    { id:'studio-design', x:70, y:37, icon:'📔', label:'设计图鉴', kind:'panel', value:'codex', desc:'查看蛋糕与装饰收藏' },
    { id:'studio-back', x:73, y:79, icon:'↩', label:'返回老街', kind:'scene', value:'street', desc:'离开工作室' },
  ],
  school: [
    { id:'school-photo', x:48, y:43, icon:'📒', label:'高中回忆', kind:'panel', value:'codex', desc:'回顾与苏晴相识的时光' },
    { id:'school-back', x:72, y:81, icon:'↩', label:'回到老街', kind:'scene', value:'street', desc:'走出校园' },
  ],
  store: [
    { id:'store-operation', x:29, y:55, icon:'🏬', label:'管理门店', kind:'panel', value:'shop', desc:'查看新店和装修进度' },
    { id:'store-expand', x:74, y:42, icon:'🗺️', label:'城市经营', kind:'panel', value:'manage', desc:'考察城市、筹备分店' },
    { id:'store-back', x:74, y:80, icon:'↩', label:'返回老街', kind:'scene', value:'street', desc:'返回栖云镇' },
  ],
};
const hotspots = computed(() => layouts[props.scene] || layouts.shop);
const sceneActor = computed(() => {
  if (props.scene === 'shop') return { file: 'nu-sprite-in.webp', x: 57, h: 37 };
  if (props.scene === 'street' || props.scene === 'cafe' || props.scene === 'park') return { file: 'sq-sprite-out.webp', x: 70, h: 36 };
  if (props.scene === 'kitchen' && state.staff.includes('xiaoyu')) return { file: 'xy-sprite-in.webp', x: 69, h: 34 };
  if (props.scene === 'studio' && state.month >= 21) return { file: 'xh-sprite-out.webp', x: 70, h: 36 };
  return null;
});

function go(id) {
  if (!unlocked(id)) {
    toast(lockedText(id));
    return;
  }
  selected.value = null;
  travelOpen.value = false;
  emit('change-scene', id);
}
function activate(spot) {
  if (spot.kind === 'scene') {
    go(spot.value);
    return;
  }
  if (spot.kind === 'panel') {
    emit('open-panel', spot.value);
    return;
  }
  selected.value = spot;
}
const chosenInfo = computed(() => {
  if (!selected.value) return null;
  if (selected.value.kind === 'partner') {
    const exists = state.staff.includes(selected.value.value);
    return { ap: 1, cost: 0, disabled: !exists, note: exists ? '和伙伴交流，提升信赖' : '她还没有加入林记的合作团队' };
  }
  return actionInfo(selected.value.value);
});
function confirm() {
  if (!selected.value) return;
  if (state.phase !== 'playing') return toast('本轮经营已经结束');
  const h = selected.value;
  const info = chosenInfo.value;
  if (!info || info.disabled || state.ap < info.ap || (info.cost && state.cash < info.cost)) {
    return toast(info?.note || '当前资源不足，暂时无法执行');
  }
  const success = h.kind === 'partner'
    ? doAction('talk', { partner: h.value })
    : doAction(h.value, {});
  if (success) {
    toast(h.label + ' · 已完成');
    selected.value = null;
  } else {
    toast('暂时无法执行，请检查行动力或触发条件');
  }
}
</script>

<template>
  <section class="world">
    <div class="world-canvas" :class="'world-' + scene">
      <img
        v-if="artStatus(current.img) !== 'no'"
        class="world-background"
        :src="art(current.img)"
        :alt="current.name"
      />
      <div class="world-vignette" aria-hidden="true"></div>

      <header class="world-heading">
        <div class="world-heading-text">
          <span class="world-eyebrow">{{ scene === 'shop' ? 'HOME' : 'QIYUN TOWN' }} · 第 {{ state.month }} 月</span>
          <h1 class="world-title">{{ current.name }}</h1>
          <div class="world-subtitle">{{ current.sub }}</div>
        </div>
        <button type="button" class="world-compass" aria-label="打开地点地图" @click="travelOpen = !travelOpen">
          🗺️
        </button>
      </header>

      <img
        v-if="sceneActor && artStatus(sceneActor.file) === 'ok'"
        class="world-actor"
        :src="art(sceneActor.file)"
        alt=""
        :style="{ left: sceneActor.x + '%', height: sceneActor.h + '%' }"
      />

      <button
        v-for="spot in hotspots"
        :key="spot.id"
        type="button"
        class="world-hotspot"
        :style="{ left: spot.x + '%', top: spot.y + '%' }"
        :aria-label="spot.label"
        @click="activate(spot)"
      >
        <span class="world-hotspot-symbol">{{ spot.icon }}</span>
        <span class="world-hotspot-label">{{ spot.label }}</span>
      </button>

      <div class="world-status">
        <span>活力 {{ state.stamina }}/{{ state.maxStamina }}</span>
        <span>行动力 {{ state.ap }}/{{ state.maxAp }}</span>
        <span>口碑 {{ Math.round(state.reputation) }}</span>
      </div>

      <div v-if="notice" class="world-toast" role="status">{{ notice }}</div>

      <div v-if="travelOpen" class="world-travel">
        <div class="world-travel-head">
          <span>栖云镇 · 地点地图</span>
          <button type="button" aria-label="关闭地点地图" @click="travelOpen = false">✕</button>
        </div>
        <div class="world-travel-grid">
          <button
            v-for="place in places"
            :key="place.id"
            type="button"
            class="world-travel-place"
            :class="{ locked: !unlocked(place.id), current: scene === place.id }"
            @click="go(place.id)"
          >
            <img :src="art(place.img)" alt="" />
            <span class="world-travel-name">{{ place.icon }} {{ place.name }}</span>
            <span v-if="!unlocked(place.id)" class="world-travel-lock">未开放</span>
          </button>
        </div>
      </div>

      <div v-if="selected" class="world-action-mask" @click.self="selected = null">
        <div class="world-action-sheet">
          <div class="world-action-icon">{{ selected.icon }}</div>
          <div class="world-action-copy">
            <strong>{{ selected.label }}</strong>
            <span>{{ selected.desc }}</span>
            <small v-if="chosenInfo">
              {{ chosenInfo.ap }} 点行动力
              <template v-if="chosenInfo.cost"> · ¥{{ chosenInfo.cost }}</template>
            </small>
          </div>
          <div class="world-action-buttons">
            <button type="button" class="world-action-cancel" @click="selected = null">取消</button>
            <button type="button" class="world-action-confirm" :disabled="state.phase !== 'playing' || chosenInfo?.disabled || state.ap < (chosenInfo?.ap || 0) || state.cash < (chosenInfo?.cost || 0)" @click="confirm">
              {{ chosenInfo?.disabled ? '暂未开放' : '开始行动' }}
            </button>
          </div>
          <p v-if="chosenInfo?.disabled" class="world-action-tip">{{ chosenInfo.note }}</p>
        </div>
      </div>
    </div>

    <div class="world-footer">
      <div class="world-chapter">
        <span class="world-chapter-label">{{ stageInfo?.name || '今日经营' }}</span>
        <span>阶段目标 {{ stageProgress.done }}/{{ stageProgress.need }}</span>
      </div>
      <button class="world-travel-button" type="button" @click="travelOpen = !travelOpen">
        <span>🧭</span> 地点地图
      </button>
      <span class="world-help">点击场景中的标记进行互动</span>
    </div>
  </section>
</template>

<style scoped>
.world { flex: 1 1 auto; display: flex; flex-direction: column; min-height: 0; position: relative; background: #f3e6d4; overflow: hidden; }
.world-canvas { flex: 1 1 auto; position: relative; overflow: hidden; min-height: 0; background: radial-gradient(ellipse at 50% 20%,#f7e6d0,#bd997c); }
.world-background { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center center; pointer-events: none; }
.world-vignette { position:absolute;inset:0;background:linear-gradient(180deg,rgba(44,30,23,.52),transparent 29%,transparent 61%,rgba(41,30,19,.34));pointer-events:none; }
.world-heading { position:absolute;top:0;left:0;right:0;z-index:8;padding:17px 18px 12px;display:flex;justify-content:space-between;align-items:flex-start;color:#fff9ed;text-shadow:0 1px 6px #3b2918a8;pointer-events:none; }
.world-heading-text { min-width:0; }
.world-eyebrow { font-size:10px;letter-spacing:2px;opacity:.8; }
.world-title { margin:0;font-size:25px;line-height:1.45;font-weight:600;font-family:'Songti SC','Noto Serif SC',serif;letter-spacing:1px; }
.world-subtitle { font-size:11px;opacity:.92; }
.world-compass { pointer-events:auto;width:42px;height:42px;border-radius:50%;border:1px solid #ffffff9e;background:#fff9ebeb;box-shadow:0 4px 18px #50341e55;font-size:21px;cursor:pointer;flex:0 0 auto; }
.world-actor { position:absolute;bottom:18%;transform:translateX(-50%);z-index:2;object-fit:contain;filter:drop-shadow(1px 5px 9px #38271b55);pointer-events:none;opacity:.96; }
.world-hotspot { position:absolute;z-index:5;transform:translate(-50%,-50%);border:0;background:transparent;padding:0;min-width:71px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;touch-action:manipulation; }
.world-hotspot-symbol { display:flex;width:44px;height:44px;align-items:center;justify-content:center;border:2px solid #fffdf6e8;border-radius:50%;background:rgba(255,248,232,.94);font-size:21px;box-shadow:0 4px 15px rgba(70,45,27,.4);transition:transform .14s;animation:worldPulse 2.5s ease-in-out infinite; }
.world-hotspot:active .world-hotspot-symbol { transform:scale(.9);animation:none; }
.world-hotspot-label { white-space:nowrap;color:#5b3b26;background:rgba(255,252,244,.96);border:1px solid #ffffffbd;border-radius:999px;padding:2px 8px;font-size:11px;line-height:1.6;font-weight:600;box-shadow:0 2px 8px #42302233;text-shadow:none; }
@keyframes worldPulse { 0%,100%{box-shadow:0 3px 12px #52331e66} 50%{box-shadow:0 3px 17px #52331e88,0 0 0 5px #fffaec33} }
.world-status { position:absolute;left:10px;bottom:11px;right:10px;z-index:5;display:flex;justify-content:center;gap:5px;pointer-events:none; }
.world-status span { color:#6b4a34;background:#fffaf0ef;border-radius:999px;padding:5px 9px;font-size:10px;font-weight:600;box-shadow:0 3px 10px #44312244;white-space:nowrap; }
.world-toast { position:absolute;left:10%;right:10%;bottom:64px;text-align:center;z-index:25;background:#fffaf5f5;color:#6b4a34;padding:10px;border-radius:12px;box-shadow:0 7px 25px #35241650;font-size:12px; }
.world-footer { position:relative;flex:0 0 auto;padding:10px 14px 11px;background:linear-gradient(180deg,#fffaf0,#f9eddb);display:flex;align-items:center;gap:10px;flex-wrap:wrap;box-shadow:0 -3px 15px #43312320; }
.world-chapter { display:flex;flex-direction:column;gap:1px;flex:1 1 auto;min-width:140px;font-size:10px;color:#8e725a; }
.world-chapter-label { font-size:12px;font-weight:700;color:#6b4a34; }
.world-travel-button { border:1px solid #d8b99b;background:#6b4a34;color:#fffaf2;border-radius:999px;padding:8px 12px;font-weight:600;font-size:12px;cursor:pointer;white-space:nowrap; }
.world-help { flex:1 0 100%;text-align:center;font-size:10px;color:#a18b75;line-height:1.25; }
.world-travel { position:absolute;z-index:20;left:12px;right:12px;top:18%;bottom:10%;padding:12px;background:#fffaf0f5;border:1px solid #f2ddc6;border-radius:16px;box-shadow:0 12px 40px #3423178c;display:flex;flex-direction:column; }
.world-travel-head { flex:0 0 auto;display:flex;justify-content:space-between;align-items:center;color:#6b4a34;font-size:14px;font-weight:700;padding:0 0 10px; }
.world-travel-head button { background:transparent;border:0;color:#6b4a34;font-size:18px;cursor:pointer; }
.world-travel-grid { min-height:0;overflow-y:auto;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;align-content:start; }
.world-travel-place { position:relative;padding:0;height:107px;border:1px solid #dfc6a8;border-radius:11px;overflow:hidden;background:#eed9c1;cursor:pointer;text-align:left; }
.world-travel-place img { display:block;width:100%;height:100%;object-fit:cover;object-position:center 35%; }
.world-travel-name { position:absolute;left:0;right:0;bottom:0;padding:9px 7px 5px;background:linear-gradient(0deg,#2c1d16dc,#2c1d1600);font-size:11px;color:#fffaf2;font-weight:700;white-space:nowrap; }
.world-travel-place.locked img { filter:grayscale(.75) brightness(.65); }
.world-travel-lock { position:absolute;right:5px;top:5px;border-radius:9px;background:#fff5e5e6;padding:3px 6px;font-size:10px;color:#725742; }
.world-travel-place.current { outline:2px solid #a9b99b; }
.world-action-mask { position:absolute;inset:0;z-index:25;display:flex;align-items:flex-end;background:#251b1459; }
.world-action-sheet { width:100%;padding:19px 18px 21px;border-radius:22px 22px 0 0;background:#fffaf1;color:#6b4a34;display:grid;grid-template-columns:50px 1fr;gap:8px 12px;box-shadow:0 -8px 28px #36241a4d; }
.world-action-icon { background:#f7e6d0;width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:25px; }
.world-action-copy { display:flex;flex-direction:column;gap:2px; }
.world-action-copy strong { font-size:17px; }
.world-action-copy span { font-size:12px;color:#99795f; }
.world-action-copy small { font-size:11px;color:#b26853; }
.world-action-buttons { grid-column:1/-1;display:flex;gap:10px;margin-top:8px; }
.world-action-buttons button { border-radius:11px;border:1px solid #c9a98c;padding:10px 14px;font-size:13px;font-weight:600;cursor:pointer;flex:1; }
.world-action-cancel { background:#fffdf8;color:#6b4a34; }
.world-action-confirm { background:#6b4a34;color:#fffaf2; }
.world-action-confirm:disabled { opacity:.45;cursor:default; }
.world-action-tip { grid-column:1/-1;font-size:11px;color:#b36b54;margin:0;text-align:center; }
@media (max-height: 660px) { .world-title {font-size:21px} .world-hotspot-symbol{width:36px;height:36px;font-size:17px} .world-hotspot-label{font-size:10px}.world-footer{padding:7px 10px}.world-actor{max-height:34%} }
@media (prefers-reduced-motion: reduce) { .world-hotspot-symbol {animation:none} }
</style>
