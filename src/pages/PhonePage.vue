<script setup>
import { computed, ref } from 'vue';
import { PARTNERS, INGREDIENTS, RECIPE_BOM } from '../data';
import { state, save, takeOrder, displayProductName, seasonalEvent, sceneAvailability } from '../store';

const emit = defineEmits(['close', 'navigate', 'open-panel']);
const sections = [
  ['people', '人物'], ['online', '线上接单'], ['orders', '订单详情'],
  ['calendar', '日历'], ['collections', '收藏'], ['finance', '经营数据'], ['notices', '通知'],
];
const tab = ref('people');
const search = ref('');
const notice = ref('');
const currentOrders = computed(() => [...(state.orders || []), ...(state.service?.tickets || [])]);
const shownOrders = computed(() => currentOrders.value.filter((order) => {
  const key = search.value.trim().toLowerCase();
  return !key || String(order.orderNo || order.id).toLowerCase().includes(key) || String(order.customer || '').includes(key);
}));
const onlineOrders = computed(() => state.orders.filter((order) => ['线上', '定制', '节日'].includes(order.type)));
const event = computed(() => seasonalEvent());
const ingredients = computed(() => event.value.materials.map((id) => ({ ...INGREDIENTS.find((item) => item.id === id), stock: state.pantry[id] || 0 })));
const net = computed(() => (state.dayRev || 0) - (state.daySpend || 0));
const pendingAlerts = computed(() => [
  ...((state.notices || []).filter((item) => !item.seen)),
  ...(state.orders.filter((order) => !order.taken).length ? [{ id: 'pending-orders', title: '待接的线上订单', detail: `还有 ${state.orders.filter((order) => !order.taken).length} 笔订单等待确认。`, target: 'online' }] : []),
  ...(ingredients.value.some((item) => item.stock < 2) ? [{ id: 'low-stock', title: '节日材料提醒', detail: `${event.value.title}即将用到的材料不足，可提前采购。`, target: 'supplier' }] : []),
]);

function chooseOrder(order) {
  const ok = takeOrder(order.id);
  notice.value = ok ? (order.taken ? '已接受该订单，准备好蛋糕后会进入待交付列表。' : '已取消接受。') : '当前不是营业准备阶段，不能修改订单。';
}

function go(target) {
  if (target === 'online' || target === 'orders') { tab.value = target; return; }
  if (target === 'supplier') { emit('close'); emit('open-panel', 'supplier'); return; }
  const gate = sceneAvailability(target);
  if (!gate.open) { notice.value = gate.reason; return; }
  emit('navigate', target);
}

function readNotice(item) {
  if (!item.seen && state.notices.some((row) => row.id === item.id)) {
    item.seen = true;
    save();
  }
  if (item.target) go(item.target);
}

function formatStatus(order) {
  if (order.status === 'delivered' || order.status === 'done') return '已交付';
  if (order.status === 'waiting' || order.status === 'packing') return '待取货';
  return order.taken ? '已接单 · 待制作' : '待接单';
}
</script>

<template>
  <div class="phone-mask" @click.self="emit('close')">
    <section class="phone-body" role="dialog" aria-label="林念的手机">
      <header class="phone-top"><div><span>QIYUN · 林念的手机</span><h2>今天想做点什么？</h2></div><button type="button" aria-label="关闭手机" @click="emit('close')">✕</button></header>
      <nav class="phone-tabs" aria-label="手机功能">
        <button v-for="item in sections" :key="item[0]" type="button" :class="{ active: tab === item[0] }" @click="tab = item[0]">{{ item[1] }}<i v-if="item[0] === 'notices' && pendingAlerts.length">{{ pendingAlerts.length }}</i></button>
      </nav>
      <main class="phone-content">
        <p v-if="notice" class="phone-notice" role="status">{{ notice }}</p>

        <template v-if="tab === 'people'">
          <h3>认识的人</h3>
          <article class="phone-card"><strong>林暖 · 妈妈</strong><p>前任店主，家庭默契 {{ Math.round(state.momBond) }}。在店里和妈妈聊聊，可以听到她的经营建议。</p><button @click="go('shop')">回林记烘焙</button></article>
          <article class="phone-card"><strong>苏晴 · 重要的朋友</strong><p>本月互动 {{ state.sqchatMonth === state.month ? '已完成' : '尚未完成' }}。公园和河边藏着更多共同回忆。</p><button @click="go('park')">去公园</button></article>
          <article v-for="person in PARTNERS" :key="person.id" class="phone-card"><strong>{{ state.staff.includes(person.id) ? person.name : '尚未认识的伙伴' }}</strong><p>{{ state.staff.includes(person.id) ? person.role + ' · 信赖 ' + Math.round(state.partnerTrust[person.id] || 0) : '继续经营和探索，解锁这位伙伴的故事。' }}</p></article>
          <article v-if="state.played.includes('EVT_ZHIQIU_CH01')" class="phone-card"><strong>沈知秋 · 秋屿咖啡主理人</strong><p>熟悉度 {{ state.cafeRelation }}。喜欢研究咖啡与甜点搭配。</p><button @click="go('cafe')">去秋屿咖啡</button></article>
        </template>

        <template v-else-if="tab === 'online'">
          <h3>线上接单</h3><p class="phone-sub">订单由每日经营系统生成；接单后要制作对应商品，前往柜台交付。</p>
          <p v-if="!onlineOrders.length" class="phone-empty">今天暂时没有新的线上、定制或节日订单。</p>
          <article v-for="order in onlineOrders" :key="order.id" class="phone-card"><strong>{{ order.orderNo }} · {{ order.type }}</strong><p>{{ order.customer }}：{{ displayProductName(order.product) }} ×{{ order.qty }}<br />{{ order.due || order.blessing || '按约定品质制作' }} · 报酬 ¥{{ order.pay }}</p><button :disabled="state.dayPhase !== 'prep'" @click="chooseOrder(order)">{{ order.taken ? '已接受 · 点击撤销' : '接受订单' }}</button></article>
        </template>

        <template v-else-if="tab === 'orders'">
          <h3>订单详情</h3><input v-model="search" class="phone-search" type="search" placeholder="搜索订单号 / 顾客" aria-label="搜索订单" />
          <p v-if="!shownOrders.length" class="phone-empty">没有匹配的订单。已完成且结束营业的订单可在经营记录中查看。</p>
          <article v-for="order in shownOrders" :key="order.id + '-' + (order.kind || '')" class="phone-card"><div class="phone-card-title"><strong>{{ order.orderNo || order.id }}</strong><span>{{ formatStatus(order) }}</span></div><p>顾客：{{ order.customer || '到店顾客' }} · {{ order.type || '普通' }}<br />蛋糕：{{ displayProductName(order.product) }} ×{{ order.qty }}<br />规格：{{ order.qty > 1 ? '共 ' + order.qty + ' 份' : '标准规格' }}<br />特殊要求：{{ order.due || order.blessing || '按标准配方制作' }}<br />材料：{{ Object.entries(RECIPE_BOM[order.product] || {}).map(([id, n]) => (INGREDIENTS.find((item) => item.id === id)?.name || id) + '×' + n).join('、') }}<br />报酬：¥{{ order.pay || 0 }}</p></article>
          <button class="phone-primary" @click="emit('close'); emit('open-panel', 'game:delivery')">进入独立订单交付小游戏</button>
        </template>

        <template v-else-if="tab === 'calendar'">
          <h3>第 {{ state.month }} 月 · {{ event.title }}</h3><p class="phone-sub">第 {{ state.day }} / 5 个经营日 · {{ event.place }}</p>
          <article class="phone-card"><strong>本季活动</strong><p>{{ event.detail }}</p><p v-if="state.day === 5">明天将进入新的经营月，记得提前补齐材料。</p></article>
          <h3>材料准备清单</h3><div v-for="ingredient in ingredients" :key="ingredient.id" class="phone-material"><span>{{ ingredient.name }}</span><b :class="{ missing: ingredient.stock < 2 }">库存 {{ ingredient.stock }}</b></div>
          <button class="phone-primary" @click="go('supplier')">去食材铺采购</button>
        </template>

        <template v-else-if="tab === 'collections'">
          <h3>收藏 · 旅行与回忆</h3><div class="phone-stats"><span>风景 {{ state.scenePhotos.length }}</span><span>河岸故事 {{ state.sceneEvents.length }}/5</span><span>设计 {{ state.designWorks.length }}</span></div>
          <h3>风景相册</h3><p v-if="!state.scenePhotos.length" class="phone-empty">公园和河边可以拍摄第一张风景照。</p>
          <div v-for="photo in [...state.scenePhotos].reverse()" :key="photo.id" class="phone-entry">📷 {{ photo.title }} · 第{{ photo.month }}月</div>
          <h3>苏晴的河岸回忆</h3><div v-for="id in state.sceneEvents" :key="id" class="phone-entry">♡ {{ ({walk:'第一次散步',lost:'遗失的物品',rain:'雨天的小插曲',festival:'河岸灯会',bridge:'旧桥边的回忆'})[id] }}</div>
          <h3>研发与活动记录</h3><div class="phone-entry">已掌握 {{ state.unlocked.length }} 款蛋糕配方 · 制作记录 {{ state.bakingRecords.length }}</div><div class="phone-entry">市集 {{ state.activityRecords.market.length }} 次 · 秋屿联名 {{ state.activityRecords.cafe.length }} 次</div>
          <button class="phone-primary" @click="emit('close'); emit('open-panel', 'codex')">查看完整图鉴 / CG / 结局收藏</button>
        </template>

        <template v-else-if="tab === 'finance'">
          <h3>每日经营数据</h3><div class="phone-stats"><span>今日收入 ¥{{ state.dayRev }}</span><span>今日支出 ¥{{ state.daySpend }}</span><span>净额 ¥{{ net }}</span></div>
          <div class="phone-entry">今日销售 {{ state.daySold }} 份 · 累计完成订单 {{ state.doneOrders }} 笔</div>
          <div class="phone-entry">本月营业额 ¥{{ state.monthRev }} · 本月总支出 ¥{{ state.monthCost }}</div>
          <h3>最近经营日</h3><p v-if="!state.dailyLedger.length" class="phone-empty">完成第一天营业后开始记录日报。</p>
          <div v-for="day in state.dailyLedger.slice(0, 12)" :key="day.month + '-' + day.day" class="phone-ledger"><span>{{ day.month }}月{{ day.day }}日 · 卖出 {{ day.sold }} 份</span><b :class="{ missing: day.rev - day.cost < 0 }">净 ¥{{ day.rev - day.cost }}</b></div>
        </template>

        <template v-else-if="tab === 'notices'">
          <h3>消息与特别提醒</h3><p class="phone-sub">点击消息可直接前往对应场景；尚未开放的地点会提示解锁条件。</p>
          <article v-for="item in pendingAlerts" :key="item.id" class="phone-card phone-alert"><strong>{{ item.title }}</strong><p>{{ item.detail }}</p><button @click="readNotice(item)">查看并前往 →</button></article>
          <article v-for="item in state.notices.filter((row) => row.seen).slice(0, 25)" :key="item.id" class="phone-card"><strong>{{ item.title }} · 已读</strong><p>{{ item.detail }}</p><button @click="readNotice(item)">前往 →</button></article>
          <p v-if="!state.notices.length && !pendingAlerts.length" class="phone-empty">暂时没有新消息。经营与探索后会收到提醒。</p>
        </template>
      </main>
      <footer class="phone-foot"><span>林记烘焙 · 让每一天都有一点甜</span><button @click="emit('close')">返回游戏</button></footer>
    </section>
  </div>
</template>

<style scoped>
.phone-mask{position:absolute;inset:0;z-index:46;background:#2b211c9c;display:flex;align-items:flex-end;justify-content:center}.phone-body{display:flex;flex-direction:column;width:min(100%,440px);height:min(95%,860px);min-height:0;background:#fbf5ec;border-radius:22px 22px 0 0;box-shadow:0 -10px 45px #2b201a55;overflow:hidden}.phone-top{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:19px 17px 12px;background:#e8d1b5}.phone-top span{font-size:10px;letter-spacing:1.2px;color:#84664d}.phone-top h2{margin:2px 0 0;font-family:serif;font-size:20px;font-weight:600}.phone-top>button{width:44px;height:44px;border-radius:50%;border:1px solid #cfbaa2;background:#fff8ec;color:#6b4a34;font-size:18px}.phone-tabs{display:flex;gap:5px;overflow-x:auto;flex:0 0 auto;padding:9px 10px;border-bottom:1px solid #eadbca;background:#fffaf3;scrollbar-width:none}.phone-tabs button{position:relative;flex:0 0 auto;min-height:43px;padding:7px 12px;background:#f7e6d0;border:1px solid transparent;border-radius:14px;color:#6b4a34;font-size:12px;font-weight:600;white-space:nowrap}.phone-tabs button.active{background:#6b4a34;color:white}.phone-tabs i{position:absolute;right:0;top:-5px;min-width:16px;height:16px;border-radius:50%;background:#d95b67;color:#fff;font-size:10px;font-style:normal}.phone-content{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;padding:14px 15px}.phone-content h3{font-size:15px;margin:5px 0 10px}.phone-sub{font-size:12px;line-height:1.7;color:#8c6a50;margin:0 0 12px}.phone-card{background:#fffdf9;border:1px solid #e9d8c4;border-radius:13px;margin-bottom:9px;padding:12px;box-shadow:0 2px 6px #6b4a3410}.phone-card strong{font-size:13px}.phone-card p{font-size:12px;line-height:1.85;color:#8c6a50;margin:6px 0}.phone-card>button{border:1px solid #c9b298;background:#f7e6d0;border-radius:9px;min-height:40px;padding:6px 13px;color:#6b4a34;font-weight:600;font-size:12px}.phone-card>button:disabled{opacity:.4}.phone-card-title{display:flex;justify-content:space-between;gap:10px}.phone-card-title span{font-size:11px;color:#8a9a7e}.phone-search{display:block;width:100%;height:44px;border:1px solid #dec8b2;border-radius:10px;background:#fffdf8;padding:8px 12px;margin:0 0 12px;color:#6b4a34}.phone-primary{display:block;width:100%;min-height:44px;margin-top:12px;border:0;border-radius:10px;background:#6b4a34;color:#fffaf2;font-size:12px;font-weight:700}.phone-empty{padding:14px;color:#8c6a50;font-size:12px;border:1px dashed #d6c2ab;border-radius:10px}.phone-material,.phone-ledger{display:flex;justify-content:space-between;gap:10px;padding:10px 2px;border-bottom:1px solid #eadbca;font-size:12px}.phone-material b,.phone-ledger b{font-weight:600}.phone-material .missing,.phone-ledger .missing{color:#c6665c}.phone-stats{display:flex;gap:6px;flex-wrap:wrap;margin:9px 0 14px}.phone-stats span{background:#e8efdf;border-radius:8px;padding:8px 10px;color:#526747;font-size:11px}.phone-entry{font-size:12px;line-height:1.7;padding:8px 0;border-bottom:1px solid #eadbca}.phone-notice{font-size:12px;background:#e5efdf;color:#536d4c;border-radius:10px;padding:9px 10px;line-height:1.6}.phone-alert{border-color:#e6c1ad}.phone-foot{flex:0 0 auto;padding:10px 16px calc(env(safe-area-inset-bottom,0px) + 12px);border-top:1px solid #eadbca;background:#fffaf3;display:flex;justify-content:space-between;align-items:center;gap:8px}.phone-foot span{font-size:10px;color:#9b8573}.phone-foot button{min-height:44px;min-width:100px;border:0;border-radius:10px;background:#a9b99b;color:#32452c;font-weight:700}
</style>

