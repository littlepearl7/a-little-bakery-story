import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { readFile } from 'node:fs/promises';

const storage = new Map();
globalThis.localStorage = {
  setItem: (key, value) => storage.set(key, value),
  getItem: (key) => storage.get(key) || null,
  removeItem: (key) => storage.delete(key),
};

const vite = await createServer({
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true, include: [] },
  appType: 'custom',
});

try {
  const store = await vite.ssrLoadModule('/src/store.js');
  const story = await vite.ssrLoadModule('/src/story.js');
  const phone = await vite.ssrLoadModule('/src/phone.js');
  const vn = await vite.ssrLoadModule('/src/vn.js');

  const prologue = story.STORY.find('EVT_PROLOGUE_01');
  const sms = prologue.beats.filter((beat) => beat.t === 'phoneMessage');
  assert.equal(sms.length, 2, '序幕中的苏晴消息和林念回复都解析为手机消息');
  assert.equal(sms[0].who, '苏晴');
  assert.equal(sms[1].who, '林念');
  assert.equal(phone.phoneConversationId(sms, 1), 'sura', '林念回复进入苏晴会话');

  const zhiqiuInvite = story.STORY.zhiQiu.find((event) => event.id === 'EVT_ZHIQIU_CH02');
  assert.equal(zhiqiuInvite.beats[0].t, 'phoneMessage', '沈知秋 M13 邀约在章节开头打开手机');
  assert.match(zhiqiuInvite.beats[0].text, /试饮咖啡豆/);
  const fourSeasonsInvite = story.STORY.zhiQiu.find((event) => event.id === 'EVT_ZHIQIU_CH06_A');
  assert.equal(fourSeasonsInvite.beats[0].t, 'phoneMessage', '沈知秋 M21 邀约在章节开头打开手机');
  const winter = story.STORY.zhiQiu.find((event) => event.id === 'EVT_ZHIQIU_CH06_WIN');
  assert(winter.beats.some((beat) => beat.t === 'cg' && beat.key === 'zhiqiu-menu'), '菜单特写 CG 接入冬季收尾剧情');
  assert(vn.CG_COLLECTION.some((cg) => cg.id === 'zhiqiu-menu' && cg.event === winter.id));

  store.reset();
  store.state.played = ['EVT_PROLOGUE_01'];
  const oldSave = JSON.parse(store.exportSaveText());
  oldSave.v = 9;
  delete oldSave.phoneMessages;
  storage.set('alb-save-v6', JSON.stringify(oldSave));
  assert(store.load(), 'V9 旧档仍可载入');
  assert.equal(store.state.phoneMessages.length, 2, '旧档已读序幕自动补录两条短信');
  assert.equal(store.state.phoneMessages[1].sender, 'player');
  assert(store.state.phoneMessages.every((message) => message.read), '旧档补录短信标记已读');

  const repeated = phone.appendPhoneMessage(store.state, {
    id: phone.storyPhoneMessageId('EVT_PROLOGUE_01', 0),
    eventId: 'EVT_PROLOGUE_01', contactId: 'sura', sender: 'sura', text: sms[0].text, read: true,
  });
  assert.equal(store.state.phoneMessages.length, 2, '重播同一短信不会重复入账');
  assert.equal(repeated.text, sms[0].text);
  store.save();
  store.state.phoneMessages = [];
  assert(store.load(), '含聊天记录的存档可以重新读取');
  assert.equal(store.state.phoneMessages.length, 2, '刷新后聊天记录仍保留');

  const phoneUi = await readFile(new URL('../src/pages/PhonePage.vue', import.meta.url), 'utf8');
  const storyModal = await readFile(new URL('../src/components/StoryModal.vue', import.meta.url), 'utf8');
  const app = await readFile(new URL('../src/App.vue', import.meta.url), 'utf8');
  const codex = await readFile(new URL('../src/pages/CodexPage.vue', import.meta.url), 'utf8');
  assert(phoneUi.includes('tutorialProgress') && phoneUi.includes('tutorial-step') && phoneUi.includes('Teleport to="body"'));
  assert(app.includes("state.tutorialPractice === 'phone'") && app.includes("'phone'].includes(state.tutorialPractice)"));
  assert(phoneUi.includes("state.staff.includes(person.id)"), '未入队伙伴不出现在人物列表');
  assert(phoneUi.includes('phone-story-foot') && phoneUi.includes('storyBeat'), '手机剧情期间对白在手机底部继续');
  assert(storyModal.includes(':story-beat="cur?.t === \'phoneMessage\' ? null : cur"'), '短信之间保留手机页面并显示对白');
  assert(phoneUi.includes("state.played.includes('EVT_ZHIQIU_CH01')"), '沈知秋首章读完后才解锁联系人');
  assert(codex.includes('state.regularCustomers[customer.id]?.purchases || 0) > 0'), '常客首次购买前不显示顾客档案');
  console.log('phone smoke passed: story SMS, tutorial gating, legacy backfill, deduplication, and CG collection');
} finally {
  await vite.close();
}
