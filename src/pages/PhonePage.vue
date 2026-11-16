<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { PARTNERS, INGREDIENTS, RECIPE_BOM, art } from '../data';
import { state, save, takeOrder, displayProductName, seasonalEvent, sceneAvailability } from '../store';
import { STORY } from '../story';
import { faceOfName } from '../vn';
import { appendPhoneMessage } from '../phone';

const props = defineProps({
  tutorial: { type: Boolean, default: false },
  tutorialProgress: { type: Number, default: 0 },
  storyMessage: { type: Object, default: null },
  storyBeat: { type: Object, default: null },
});
const emit = defineEmits(['close', 'navigate', 'open-panel', 'tutorial-step', 'tutorial-done', 'story-message-done']);
const sections = [
  ['messages', '消息'], ['people', '人物'], ['notices', '通知'], ['online', '线上接单'],
  ['orders', '订单详情'], ['calendar', '日历'], ['collections', '收藏'], ['finance', '经营数据'],
];
const GUIDE_STEPS = [
  { tab: 'messages', text: '先看看苏晴发来的祝贺。以后收到的剧情短信也会保存在这里，点联系人就能回看。' },
  { tab: 'people', text: '人物页只会显示你已经认识的人。点开人物卡，可以查看资料和与对方的聊天。' },
  { tab: 'notices', text: '通知会提醒你新订单、活动和材料情况。点开提醒可以查看详情。' },
  { tab: 'online', text: '线上接单会列出远处客人下的订单。接单后，要备好对应蛋糕再按时交付。' },
  { tab: 'orders', text: '订单详情里能核对编号、蛋糕、份数和特别要求。预约客人来取货时，也可以在这儿查单。' },
  { tab: 'calendar', text: '日历标着接下来的节日和活动，提前备料会从容一些。' },
  { tab: 'collections', text: '收藏里能回看图鉴、相册、CG、结局和实验记录。' },
  { tab: 'finance', text: '经营数据记录每天的收入、支出和销量，打烊后可以看看本日情况。' },
];
const tab = ref(props.tutorial ? 'messages' : 'messages');
const selectedContactId = ref('');
const search = ref('');
const notice = ref('');
const regularPeople = [
  { id: 'granny', name: '张奶奶', detail: '67岁 · 退休小学教师', preference: '桂花栗子蛋糕、少糖原味奶油蛋糕与柠檬磅蛋糕。', note: '她把耐心留给讲台，又在林记的下午茶里重新遇见老友。', avatar: art('regular-granny-zhang.webp'), firstEvent: 'EVT_GRANNY_M02' },
  { id: 'uncle', name: '陈叔', detail: '63岁 · 退休木工', preference: '传统海绵蛋糕、减糖巧克力蛋糕与栗子蛋糕。', note: '他用一双布满老茧的手，替老街守住招牌，也重新拾起木工手艺。', avatar: art('regular-uncle-chen.webp'), firstEvent: 'EVT_UNCLE_M03' },
  { id: 'xiaoman', name: '小满', detail: '9岁到12岁 · 栖云镇小学生', preference: '草莓奶油蛋糕、芒果慕斯与造型可爱的小切块。', note: '她在林记的奶油香气里长大，用画笔记下三年的甜味。', avatar: art('regular-xiaoman.webp'), firstEvent: 'EVT_XIAOMAN_M01' },
];
const unlockedPeople = computed(() => {
  const people = [{ id: 'mom', name: '林暖', detail: '妈妈 · 林记前任店主', summary: `家庭默契 ${Math.round(state.momBond)}。在店里和妈妈聊聊，可以听到她的经营建议。`, avatar: faceOfName('林暖') }];
  if (state.played.includes('EVT_PROLOGUE_01') || state.phoneMessages.some((message) => message.contactId === 'sura')) {
    people.push({ id: 'sura', name: '苏晴', detail: '高中好友 · 摄影师', summary: `本月互动${state.sqchatMonth === state.month ? '已完成' : '尚未完成'}。公园和河边藏着更多共同回忆。`, avatar: faceOfName('苏晴') });
  }
  PARTNERS.filter((person) => state.staff.includes(person.id)).forEach((person) => people.push({
    id: person.id, name: person.name, detail: person.role, summary: `信赖 ${Math.round(state.partnerTrust[person.id] || 0)} · 专业 ${Math.round(state.partnerSkill[person.id] || 0)}`, avatar: faceOfName(person.name),
  }));
  if (state.played.includes('EVT_ZHIQIU_CH01')) people.push({ id: 'zhiqiu', name: '沈知秋', detail: '秋屿咖啡主理人', summary: `熟悉度 ${state.cafeRelation}。喜欢研究咖啡与甜点搭配。`, avatar: faceOfName('沈知秋') || art('zhiqiu-sprite-out.webp') });
  regularPeople.forEach((person) => {
    if (state.played.includes(person.firstEvent)) people.push({ ...person, detail: `${person.detail} · 常客`, summary: `${person.note}\n常买：${person.preference}` });
  });
  return people;
});
const selectedPerson = computed(() => unlockedPeople.value.find((person) => person.id === selectedContactId.value) || null);
const conversationMessages = computed(() => state.phoneMessages.filter((message) => message.contactId === selectedContactId.value));
const inboxRows = computed(() => unlockedPeople.value.map((person) => {
  const messages = state.phoneMessages.filter((message) => message.contactId === person.id);
  return { ...person, last: messages[messages.length - 1] || null, unread: messages.filter((message) => !message.read).length };
}));
function customerStoryCount(person) {
  return STORY.customers.filter((event) => event.regularPerson === person).length;
}
function customerStoryRead(person) {
  return STORY.customers.filter((event) => event.regularPerson === person && state.played.includes(event.id)).length;
}
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

function markContactRead(contactId) {
  let changed = false;
  state.phoneMessages.forEach((message) => {
    if (message.contactId === contactId && !message.read) {
      message.read = true;
      changed = true;
    }
  });
  if (changed) save();
}

function openConversation(contactId) {
  selectedContactId.value = contactId;
  tab.value = 'messages';
  markContactRead(contactId);
}

function selectSection(id) {
  if (props.storyMessage) return;
  selectedContactId.value = '';
  tab.value = id;
  const step = GUIDE_STEPS.findIndex((item) => item.tab === id);
  if (props.tutorial && step >= 0 && step !== props.tutorialProgress) emit('tutorial-step', step);
  scrollActiveTab();
}

function scrollActiveTab() {
  nextTick(() => {
    const active = document.querySelector('.phone-tabs .active');
    if (active?.scrollIntoView) active.scrollIntoView({ block: 'nearest', inline: 'center' });
  });
}

function advanceTutorial() {
  if (props.tutorialProgress >= GUIDE_STEPS.length - 1) {
    emit('tutorial-done');
    return;
  }
  const next = props.tutorialProgress + 1;
  const nextTab = GUIDE_STEPS[next].tab;
  tab.value = nextTab;
  selectedContactId.value = '';
  emit('tutorial-step', next);
  scrollActiveTab();
}

function closePhone() {
  if (props.storyMessage) emit('story-message-done');
  else emit('close');
}

function addTutorialMessage() {
  if (!props.tutorial) return;
  appendPhoneMessage(state, {
    id: 'tutorial:EVT_TUTORIAL_PHONE:sura-congratulations',
    eventId: 'EVT_TUTORIAL_PHONE',
    contactId: 'sura',
    sender: 'sura',
    text: '恭喜林老板正式上任！下午有空来街上找我玩呀！',
    read: true,
  });
  save();
}

onMounted(() => {
  if (props.tutorial) addTutorialMessage();
  if (props.tutorial) selectedContactId.value = props.tutorialProgress === 0 ? 'sura' : '';
  if (props.storyMessage) {
    selectedContactId.value = props.storyMessage.contactId;
    markContactRead(props.storyMessage.contactId);
  }
  scrollActiveTab();
});

watch(() => [props.tutorial, props.tutorialProgress], ([tutorial, progress]) => {
  if (!tutorial) {
    notice.value = '';
    return;
  }
  addTutorialMessage();
  tab.value = GUIDE_STEPS[Math.max(0, Math.min(GUIDE_STEPS.length - 1, progress))].tab;
  selectedContactId.value = progress === 0 ? 'sura' : '';
  scrollActiveTab();
});

watch(() => props.storyMessage, (message) => {
  if (!message) return;
  tab.value = 'messages';
  selectedContactId.value = message.contactId;
  markContactRead(message.contactId);
});

watch(() => props.storyBeat, () => { notice.value = ''; });

const guideText = computed(() => GUIDE_STEPS[Math.max(0, Math.min(GUIDE_STEPS.length - 1, props.tutorialProgress))].text);

function chooseOrder(order) {
  if (props.tutorial || props.storyMessage) return;
  const ok = takeOrder(order.id);
  notice.value = ok ? (order.taken ? '已接受该订单，准备好蛋糕后会进入待交付列表。' : '已取消接受。') : '当前不是营业准备阶段，不能修改订单。';
}

function go(target) {
  if (props.tutorial || props.storyMessage) { notice.value = '讲解期间可以查看页面，暂不能执行店务操作。'; return; }
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
  <Teleport to="body">
  <div class="phone-mask" @click.self="closePhone">
    <section class="phone-body" role="dialog" aria-label="林念的手机">
      <header class="phone-top"><div><span>QIYUN · 林念的手机</span><h2>{{ storyMessage ? '剧情消息' : selectedPerson ? selectedPerson.name : '今天想做点什么？' }}</h2></div><button type="button" :aria-label="storyMessage ? '继续剧情' : '关闭手机'" @click="closePhone">{{ storyMessage ? '›' : '✕' }}</button></header>
      <nav v-if="!storyMessage" class="phone-tabs" aria-label="手机功能">
        <button v-for="item in sections" :key="item[0]" :data-tab-id="item[0]" type="button" :class="{ active: tab === item[0] }" @click="selectSection(item[0])">{{ item[1] }}<i v-if="item[0] === 'notices' && pendingAlerts.length">{{ pendingAlerts.length }}</i><i v-if="item[0] === 'messages' && state.phoneMessages.filter((message) => !message.read).length">{{ state.phoneMessages.filter((message) => !message.read).length }}</i></button>
      </nav>
      <main class="phone-content">
        <p v-if="notice" class="phone-notice" role="status">{{ notice }}</p>

        <template v-if="tab === 'messages'">
          <template v-if="selectedPerson">
            <button class="phone-back" type="button" @click="selectedContactId = ''">‹ 返回消息列表</button>
            <div class="chat-heading"><img v-if="selectedPerson.avatar" :src="selectedPerson.avatar" :alt="selectedPerson.name" /><div><strong>{{ selectedPerson.name }}</strong><small>{{ selectedPerson.detail }}</small></div></div>
            <div v-if="!conversationMessages.length" class="phone-empty">暂无消息</div>
            <div v-for="message in conversationMessages" :key="message.id" class="chat-row" :class="{ sent: message.sender === 'player' }"><small>{{ message.sender === 'player' ? '林念' : selectedPerson.name }}</small><div class="chat-bubble">{{ message.text }}</div></div>
          </template>
          <template v-else>
            <h3>消息</h3><p v-if="!inboxRows.length" class="phone-empty">暂无消息</p>
            <button v-for="person in inboxRows" :key="person.id" type="button" class="phone-card inbox-card" @click="openConversation(person.id)">
              <img v-if="person.avatar" :src="person.avatar" :alt="person.name" /><span class="inbox-copy"><strong>{{ person.name }}</strong><small>{{ person.last ? person.last.text : '暂无消息' }}</small></span><i v-if="person.unread">{{ person.unread }}</i>
            </button>
          </template>
        </template>

        <template v-if="tab === 'people'">
          <h3>认识的人</h3>
          <p v-if="!unlockedPeople.length" class="phone-empty">认识新朋友后，她们会出现在这里。</p>
          <article v-for="person in unlockedPeople" :key="person.id" class="phone-card person-card">
            <img v-if="person.avatar" :src="person.avatar" :alt="person.name" />
            <div class="person-copy"><strong>{{ person.name }} · {{ person.detail }}</strong><p>{{ person.summary }}</p><small v-if="['granny','uncle','xiaoman'].includes(person.id)">已读常客故事 {{ customerStoryRead(person.name) }} / {{ customerStoryCount(person.name) }}</small></div>
            <div class="person-actions"><button type="button" @click="openConversation(person.id)">打开对话</button><button v-if="person.id === 'mom'" type="button" @click="go('shop')">回林记烘焙</button><button v-else-if="person.id === 'sura'" type="button" @click="go('park')">去公园</button><button v-else-if="person.id === 'zhiqiu'" type="button" @click="go('cafe')">去秋屿咖啡</button></div>
          </article>
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
          <button v-if="!tutorial && !storyMessage" class="phone-primary" @click="emit('close'); emit('open-panel', 'game:delivery')">进入独立订单交付小游戏</button>
        </template>

        <template v-else-if="tab === 'calendar'">
          <h3>第 {{ state.month }} 月 · {{ event.title }}</h3><p class="phone-sub">第 {{ state.day }} / 5 个经营日 · {{ event.place }}</p>
          <article class="phone-card"><strong>本季活动</strong><p>{{ event.detail }}</p><p v-if="state.day === 5">明天将进入新的经营月，记得提前补齐材料。</p></article>
          <h3>材料准备清单</h3><div v-for="ingredient in ingredients" :key="ingredient.id" class="phone-material"><span>{{ ingredient.name }}</span><b :class="{ missing: ingredient.stock < 2 }">库存 {{ ingredient.stock }}</b></div>
          <button v-if="!tutorial && !storyMessage" class="phone-primary" @click="go('supplier')">去食材铺采购</button>
        </template>

        <template v-else-if="tab === 'collections'">
          <h3>收藏 · 旅行与回忆</h3><div class="phone-stats"><span>风景 {{ state.scenePhotos.length }}</span><span>河岸故事 {{ state.sceneEvents.length }}/5</span><span>设计 {{ state.designWorks.length }}</span></div>
          <h3>风景相册</h3><p v-if="!state.scenePhotos.length" class="phone-empty">公园和河边可以拍摄第一张风景照。</p>
          <div v-for="photo in [...state.scenePhotos].reverse()" :key="photo.id" class="phone-entry">📷 {{ photo.title }} · 第{{ photo.month }}月</div>
          <h3>苏晴的河岸回忆</h3><div v-for="id in state.sceneEvents" :key="id" class="phone-entry">♡ {{ ({walk:'第一次散步',lost:'遗失的物品',rain:'雨天的小插曲',festival:'河岸灯会',bridge:'旧桥边的回忆'})[id] }}</div>
          <h3>研发与活动记录</h3><div class="phone-entry">已掌握 {{ state.unlocked.length }} 款蛋糕配方 · 制作记录 {{ state.bakingRecords.length }}</div><div class="phone-entry">市集 {{ state.activityRecords.market.length }} 次 · 秋屿联名 {{ state.activityRecords.cafe.length }} 次</div>
          <button v-if="!tutorial && !storyMessage" class="phone-primary" @click="emit('close'); emit('open-panel', 'codex')">查看完整图鉴 / CG / 结局收藏</button>
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
      <footer v-if="storyMessage" class="phone-story-foot">
        <div v-if="storyBeat?.t === 'say'" class="phone-story-speaker"><img v-if="faceOfName(storyBeat.who)" :src="faceOfName(storyBeat.who)" alt="" /><strong>{{ storyBeat.who }}</strong></div>
        <p v-if="storyBeat && storyBeat.t !== 'phoneMessage'">{{ storyBeat.text }}</p>
        <p v-else-if="!storyBeat">手机收到了一条新消息。</p>
        <button type="button" aria-label="继续剧情" @click="emit('story-message-done')">继续</button>
      </footer>
      <footer v-if="tutorial" class="phone-guide-foot">
        <div class="phone-guide-copy"><img v-if="faceOfName('林暖')" :src="faceOfName('林暖')" alt="林暖" /><div><strong>林暖 · {{ sections.find((item) => item[0] === GUIDE_STEPS[tutorialProgress]?.tab)?.[1] || '手机讲解' }}</strong><p>{{ guideText }}</p></div></div>
        <button type="button" @click="advanceTutorial">{{ tutorialProgress >= GUIDE_STEPS.length - 1 ? '完成讲解' : '下一项' }}</button>
      </footer>
      <footer v-else-if="!storyMessage" class="phone-foot"><span>林记烘焙 · 让每一天都有一点甜</span><button @click="closePhone">返回游戏</button></footer>
    </section>
  </div>
  </Teleport>
</template>

<style scoped>
.phone-mask{position:fixed;inset:0;z-index:1000;background:#2b211c9c;display:flex;align-items:flex-end;justify-content:center}.phone-body{display:flex;flex-direction:column;width:min(100%,440px);height:min(95%,860px);min-height:0;background:#fbf5ec;border-radius:22px 22px 0 0;box-shadow:0 -10px 45px #2b201a55;overflow:hidden}.phone-top{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:19px 17px 12px;background:#e8d1b5}.phone-top span{font-size:10px;letter-spacing:1.2px;color:#84664d}.phone-top h2{margin:2px 0 0;font-family:serif;font-size:20px;font-weight:600}.phone-top>button{width:44px;height:44px;border-radius:50%;border:1px solid #cfbaa2;background:#fff8ec;color:#6b4a34;font-size:18px}.phone-tabs{display:flex;gap:5px;overflow-x:auto;flex:0 0 auto;padding:9px 10px;border-bottom:1px solid #eadbca;background:#fffaf3;scrollbar-width:none}.phone-tabs button{position:relative;flex:0 0 auto;min-height:43px;padding:7px 12px;background:#f7e6d0;border:1px solid transparent;border-radius:14px;color:#6b4a34;font-size:12px;font-weight:600;white-space:nowrap}.phone-tabs button.active{background:#6b4a34;color:white}.phone-tabs i{position:absolute;right:0;top:-5px;min-width:16px;height:16px;border-radius:50%;background:#d95b67;color:#fff;font-size:10px;font-style:normal}.phone-content{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;padding:14px 15px}.phone-content h3{font-size:15px;margin:5px 0 10px}.phone-sub{font-size:12px;line-height:1.7;color:#8c6a50;margin:0 0 12px}.phone-card{background:#fffdf9;border:1px solid #e9d8c4;border-radius:13px;margin-bottom:9px;padding:12px;box-shadow:0 2px 6px #6b4a3410}.phone-card strong{font-size:13px}.phone-card p{font-size:12px;line-height:1.85;color:#8c6a50;margin:6px 0}.phone-card>button{border:1px solid #c9b298;background:#f7e6d0;border-radius:9px;min-height:40px;padding:6px 13px;color:#6b4a34;font-weight:600;font-size:12px}.phone-card>button:disabled{opacity:.4}.phone-card-title{display:flex;justify-content:space-between;gap:10px}.phone-card-title span{font-size:11px;color:#8a9a7e}.phone-search{display:block;width:100%;height:44px;border:1px solid #dec8b2;border-radius:10px;background:#fffdf8;padding:8px 12px;margin:0 0 12px;color:#6b4a34}.phone-primary{display:block;width:100%;min-height:44px;margin-top:12px;border:0;border-radius:10px;background:#6b4a34;color:#fffaf2;font-size:12px;font-weight:700}.phone-empty{padding:14px;color:#8c6a50;font-size:12px;border:1px dashed #d6c2ab;border-radius:10px}.phone-material,.phone-ledger{display:flex;justify-content:space-between;gap:10px;padding:10px 2px;border-bottom:1px solid #eadbca;font-size:12px}.phone-material b,.phone-ledger b{font-weight:600}.phone-material .missing,.phone-ledger .missing{color:#c6665c}.phone-stats{display:flex;gap:6px;flex-wrap:wrap;margin:9px 0 14px}.phone-stats span{background:#e8efdf;border-radius:8px;padding:8px 10px;color:#526747;font-size:11px}.phone-entry{font-size:12px;line-height:1.7;padding:8px 0;border-bottom:1px solid #eadbca}.phone-notice{font-size:12px;background:#e5efdf;color:#536d4c;border-radius:10px;padding:9px 10px;line-height:1.6}.phone-alert{border-color:#e6c1ad}.phone-foot{flex:0 0 auto;padding:10px 16px calc(env(safe-area-inset-bottom,0px) + 12px);border-top:1px solid #eadbca;background:#fffaf3;display:flex;justify-content:space-between;align-items:center;gap:8px}.phone-foot span{font-size:10px;color:#9b8573}.phone-foot button{min-height:44px;min-width:100px;border:0;border-radius:10px;background:#a9b99b;color:#32452c;font-weight:700}
.phone-back{min-height:40px;margin-bottom:10px;padding:0 12px;border:0;border-radius:10px;background:#f1e2d0;color:#6b4a34;font-size:12px;font-weight:700}.chat-heading{display:flex;align-items:center;gap:10px;margin:4px 0 16px;padding-bottom:12px;border-bottom:1px solid #eadbca}.chat-heading img,.inbox-card>img,.person-card>img,.phone-guide-copy>img{width:46px;height:46px;border-radius:50%;object-fit:cover;background:#f2e4d3}.chat-heading div,.inbox-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.chat-heading small{font-size:11px;color:#92765e}.chat-row{display:flex;flex-direction:column;align-items:flex-start;margin:12px 0}.chat-row.sent{align-items:flex-end}.chat-row>small{margin:0 5px 4px;color:#987d66;font-size:10px}.chat-bubble{max-width:86%;padding:10px 13px;border-radius:15px 15px 15px 4px;background:#fffdf9;color:#5d4939;font-size:13px;line-height:1.7;white-space:pre-wrap}.chat-row.sent .chat-bubble{border-radius:15px 15px 4px 15px;background:#e5efdf}.inbox-card{display:flex;width:100%;align-items:center;gap:10px;text-align:left;color:#6b4a34}.inbox-copy{flex:1}.inbox-copy small{overflow:hidden;color:#92765e;font-size:11px;text-overflow:ellipsis;white-space:nowrap}.inbox-card>i{min-width:19px;height:19px;border-radius:50%;background:#d95b67;color:white;text-align:center;font-size:11px;font-style:normal;line-height:19px}.person-card{display:grid;grid-template-columns:48px minmax(0,1fr);gap:9px;align-items:start}.person-card>img{width:48px;height:58px;border-radius:10px;object-position:center 15%}.person-copy{min-width:0}.person-copy p{white-space:pre-line}.person-copy small{font-size:11px;color:#718260}.person-actions{grid-column:2;display:flex;flex-wrap:wrap;gap:6px}.person-actions button{min-height:40px;padding:6px 11px;border:1px solid #c9b298;border-radius:9px;background:#f7e6d0;color:#6b4a34;font-size:12px;font-weight:600}.phone-guide-foot{flex:0 0 auto;padding:10px 14px calc(env(safe-area-inset-bottom,0px) + 12px);border-top:1px solid #eadbca;background:#fffaf3}.phone-guide-copy{display:flex;align-items:flex-start;gap:9px;margin-bottom:9px}.phone-guide-copy>img{flex:0 0 38px;width:38px;height:38px}.phone-guide-copy strong{font-size:12px;color:#6b4a34}.phone-guide-copy p{margin:3px 0 0;color:#80634c;font-size:11px;line-height:1.55}.phone-guide-foot>button{width:100%;min-height:44px;border:0;border-radius:11px;background:#6b4a34;color:#fff8ee;font-size:14px;font-weight:700}.phone-guide-foot>button:active{transform:scale(.99)}
</style>

<style scoped>
.phone-story-foot{flex:0 0 auto;padding:12px 15px calc(env(safe-area-inset-bottom,0px) + 12px);border-top:1px solid #eadbca;background:#fffaf3}
.phone-story-foot p{margin:5px 0 10px;color:#604a38;font-size:14px;line-height:1.7;white-space:pre-wrap}
.phone-story-speaker{display:flex;align-items:center;gap:8px;color:#6b4a34;font-size:13px}
.phone-story-speaker img{width:32px;height:32px;border-radius:50%;object-fit:cover}
.phone-story-foot button{width:100%;min-height:44px;border:0;border-radius:10px;background:#6b4a34;color:#fff8ee;font-size:14px;font-weight:700}
</style>

