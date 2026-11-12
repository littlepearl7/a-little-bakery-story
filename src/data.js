/** 静态数据：产品、伙伴、城市、装修、行动、阶段目标、结局。数值都在这调。 */

import { reactive } from 'vue';

const base = import.meta.env.BASE_URL;

export function art(file) {
  return base + 'art/' + file;
}

/**
 * 图片是否真的存在。缺图就返回空串，界面用兜底方案，不会出现破图。
 * pending 表示还在加载，调用方按「暂时没有」处理即可。
 */
const probes = reactive({});

export function artStatus(file) {
  if (!file) return 'no';
  const src = art(file);
  const s = probes[src];
  if (s) return s;
  probes[src] = 'pending';
  const im = new Image();
  im.onload = () => {
    probes[src] = 'ok';
  };
  im.onerror = () => {
    probes[src] = 'no';
  };
  im.src = src;
  return 'pending';
}

/* ---------------- 角色 ---------------- */

export const CHARACTERS = {
  ln: { name: '林念', full: art('ln-full.webp'), face: art('ln-face.webp'), emotions: {} },
  sq: {
    name: '苏晴',
    full: art('sq-full.webp'),
    face: art('sq-exp-1.webp'),
    emotions: { 开心: 1, 惊喜: 2, 思考: 3, 加油: 4, 好吃: 5, 满足: 6 },
  },
  nu: {
    name: '林暖',
    full: art('nu-full.webp'),
    face: art('nu-exp-6.webp'),
    emotions: { 开心: 1, 惊讶: 2, 欣慰: 3, 认真: 4, 担心: 5, 温柔: 6 },
  },
};

export function faceOf(charId, emotion) {
  const c = CHARACTERS[charId];
  if (!c) return art('ln-face.webp');
  const idx = emotion && c.emotions[emotion];
  if (idx) return art(charId + '-exp-' + idx + '.webp');
  return c.face;
}

/* ---------------- 产品 ----------------
 * month   第几个月自动解锁（0 表示开局就有）
 * diff    做一份消耗多少产能点数
 * price   标准定价下的售价
 * demand  标准价下的基础日需求
 */

export const PRODUCTS = [
  { id: 'plain', name: '原味奶油蛋糕', month: 0, diff: 8, price: 88, demand: 7,
    desc: '店里的老方子。戚风胚，薄薄一层奶油。',
    colors: { sponge: '#F0D9AE', cream: '#FFF8EE', accent: '#E8B86D' } },
  { id: 'strawberry', name: '草莓奶油蛋糕', month: 0, diff: 12, price: 128, demand: 6,
    desc: '整颗草莓夹在奶油里，切开时会掉下来两颗。',
    colors: { sponge: '#F4DDB6', cream: '#FFF8F2', accent: '#E05B66' } },
  { id: 'chocolate', name: '巧克力蛋糕', month: 0, diff: 12, price: 118, demand: 5,
    desc: '可可粉筛三遍，吃起来不苦，回味有点厚。',
    colors: { sponge: '#8A5A3B', cream: '#C89B72', accent: '#5C3823' } },
  { id: 'taro', name: '芋泥薄脆', month: 3, diff: 18, price: 168, demand: 5,
    desc: '林念的第一款新品。少一分糖，中间夹一层薄薄的芋泥。',
    colors: { sponge: '#E5D5E8', cream: '#FBF2FA', accent: '#B48FC0' } },
  { id: 'matcha', name: '抹茶蛋糕', month: 4, diff: 12, price: 148, demand: 4,
    desc: '宇治抹茶配红豆。火候差一点就会发苦。',
    colors: { sponge: '#C9D8A8', cream: '#F6FAEE', accent: '#7E9B52' } },
  { id: 'mango', name: '芒果慕斯', month: 6, diff: 18, price: 178, demand: 4,
    desc: '夏天限定。芒果要挑熟的，不然酸味会盖住奶香。',
    colors: { sponge: '#F7D98C', cream: '#FFF6E2', accent: '#E9A93C' } },
  { id: 'tiramisu', name: '提拉米苏', month: 8, diff: 18, price: 188, demand: 4,
    desc: '手指饼干浸得刚好，多一秒就散。',
    colors: { sponge: '#D8B98E', cream: '#F3E6D3', accent: '#6B4A34' } },
  { id: 'fig', name: '无花果奶油', month: 10, diff: 12, price: 198, demand: 3,
    desc: '白奶油，上面摆一层无花果。苏晴喜欢这个。',
    colors: { sponge: '#EFDCC0', cream: '#FFFAF4', accent: '#A5587B' } },
  { id: 'seasonal', name: '季节水果蛋糕', month: 12, diff: 18, price: 218, demand: 3,
    desc: '每个月换一次水果。春天莓果，秋天梨和无花果。',
    colors: { sponge: '#F6E4C4', cream: '#FFFAF0', accent: '#D9736A' } },
  { id: 'custom', name: '生日定制蛋糕', month: 16, diff: 22, price: 288, demand: 2,
    desc: '客人说什么就做什么。难的不是手艺，是听懂。',
    colors: { sponge: '#F3E2C6', cream: '#FFFCF7', accent: '#D98CA0' } },
  { id: 'festival', name: '节日限定蛋糕', month: 20, diff: 22, price: 328, demand: 2,
    desc: '一年只做几次。包装盒是专门订的。',
    colors: { sponge: '#EADCCB', cream: '#FFFBF5', accent: '#C2554F' } },
  { id: 'signature', name: '桂花栗子蛋糕', month: 26, diff: 22, price: 398, demand: 2,
    desc: '外婆旧配方与现代工艺的结晶。栗子甜则少放糖，桂花香淡则后撒。',
    colors: { sponge: '#EEDCBB', cream: '#FFFCF5', accent: '#C89B3C' } },
];

export function productById(id) {
  return PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
}

/* ---------------- 定价档位 ---------------- */

export const PRICE_TIERS = {
  low: { label: '亲民', priceMul: 0.85, demandMul: 1.35 },
  std: { label: '标准', priceMul: 1, demandMul: 1 },
  high: { label: '精品', priceMul: 1.22, demandMul: 0.72 },
};

/* ---------------- 伙伴 ----------------
 * joinMonth 到月自动加入（对应剧情月份）
 */

export const PARTNERS = [
  { id: 'xiaoyu', name: '周雨桐', nick: '小雨', role: '烘焙学徒', joinMonth: 8,
    color: '#C9A9C4', issue: '不敢相信自己的想法值得被认可', skillName: '烘焙' },
  { id: 'zhiyao', name: '许知遥', nick: '知遥', role: '门店运营', joinMonth: 14,
    color: '#A9C4C9', issue: '擅长沟通，但缺乏管理信心', skillName: '运营' },
  { id: 'kexin', name: '唐可欣', nick: '可欣', role: '资深烘焙师', joinMonth: 18,
    color: '#C9B58A', issue: '太追求标准化，差点丢掉研发的热情', skillName: '研发' },
  { id: 'qinghe', name: '叶清禾', nick: '清禾', role: '品牌设计师', joinMonth: 21,
    color: '#A8B99B', issue: '创意丰富，但不擅长商业设计', skillName: '设计' },
];

export function partnerById(id) {
  return PARTNERS.find((p) => p.id === id);
}

/* ---------------- 城市 ---------------- */

export const CITIES = [
  { id: 'qiyun', name: '栖云镇', month: 0, cost: 0, rep: 0, note: '初始门店。住了二十年的小镇。' },
  { id: 'linjiang', name: '临江市', month: 20, cost: 12000, rep: 34, note: '开车四十分钟。第一家分店。' },
  { id: 'hangzhou', name: '杭州', month: 24, cost: 26000, rep: 44, note: '第一家真正的外地店。' },
  { id: 'shanghai', name: '上海', month: 27, cost: 42000, rep: 54, note: '房租很贵，客单价也高。' },
  { id: 'nanjing', name: '南京', month: 30, cost: 58000, rep: 62, note: '老街上的店，保留木质结构。' },
  { id: 'chengdu', name: '成都', month: 32, cost: 74000, rep: 70, note: '本地团队自己跑起来的。' },
  { id: 'guangzhou', name: '广州', month: 34, cost: 92000, rep: 78, note: '第一次把季节水果换成热带水果。' },
  { id: 'beijing', name: '北京', month: 35, cost: 120000, rep: 85, note: '旗舰店。开业那天是我生日。' },
];

/* ---------------- 店铺等级 ---------------- */

export const SHOP_LEVELS = [
  { lv: 1, name: '社区老店', ap: 0, seats: 2, cost: 0,
    desc: '木地板，一个玻璃展示柜，两张旧木桌。手写价目牌。' },
  { lv: 2, name: '精致烘焙店', ap: 1, seats: 6, cost: 15000,
    desc: '暖黄吊灯，三层展示柜，奶油白墙面，小方砖地面。' },
  { lv: 3, name: '品牌旗舰店', ap: 1, seats: 12, cost: 45000,
    desc: '整面墙的木质货架，开放式厨房用玻璃隔断，有休息区。' },
  { lv: 4, name: '高端主题门店', ap: 1, seats: 20, cost: 90000,
    desc: '拱形门洞，大理石台面，花艺布置，像走进一本绘本。' },
];

export function shopLevelInfo(lv) {
  return SHOP_LEVELS.find((s) => s.lv === lv) || SHOP_LEVELS[0];
}

/* ---------------- 行动 ---------------- */

export const ACTIONS = [
  { id: 'restock', name: '原料采购', ap: 1, hint: '花钱补原料' },
  { id: 'feedback', name: '顾客反馈', ap: 1, hint: '口碑与忠诚度' },
  { id: 'talk', name: '伙伴交流', ap: 1, hint: '提升信赖度' },
  { id: 'research', name: '新品研发', ap: 2, hint: '提高产品熟练度' },
  { id: 'market', name: '市场宣传', ap: 2, hint: '知名度与品牌' },
  { id: 'train', name: '员工培训', ap: 2, hint: '专业能力' },
  { id: 'decorate', name: '店铺装修', ap: 2, hint: '升级店铺' },
  { id: 'survey', name: '外出考察', ap: 2, hint: '解锁下一座城市' },
  { id: 'branch', name: '分店筹备', ap: 3, hint: '开一家新店' },
];

/* ---------------- 阶段目标 ----------------
 * 每 6 个月结算一次，达成 need 项进入下一阶段，否则进入短线结局。
 */

function countLevel(s, lv) {
  return s.unlocked.filter((id) => (s.levels[id] || 1) >= lv).length;
}
function avgLevel(s) {
  if (!s.unlocked.length) return 1;
  return s.unlocked.reduce((a, id) => a + (s.levels[id] || 1), 0) / s.unlocked.length;
}
function maxSkill(s) {
  return Math.max(0, ...Object.values(s.partnerSkill));
}
function countTrust(s, v) {
  return Object.values(s.partnerTrust).filter((x) => x >= v).length;
}

export const STAGES = [
  {
    id: 1, from: 1, to: 6, name: '第一章 · 接手林记', need: 2,
    goals: [
      { text: '口碑达到 25', check: (s) => s.reputation >= 25 },
      { text: '解锁 2 款新品', check: (s) => s.unlocked.length >= 5 },
      { text: '完成 2 笔定制订单', check: (s) => s.customOrders >= 2 },
    ],
    short: {
      key: 'street_lamp', name: '短文结局 · 街角的灯',
      title: '一家小店，一种喜欢的生活',
      text: '林念发现自己其实很喜欢现在的生活。虽然没有做出惊人的成绩，但熟悉的顾客依然每天来买蛋糕。林暖看着忙碌的女儿，觉得她已经成长了不少。苏晴偶尔来店里，坐在窗边陪她聊天。',
    },
  },
  {
    id: 2, from: 7, to: 12, name: '第二章 · 熟悉的味道', need: 2,
    goals: [
      { text: '店铺升级到 LV2', check: (s) => s.shopLevel >= 2 },
      { text: '累计完成 8 笔线上订单', check: (s) => s.onlineOrders >= 8 },
      { text: '至少 3 款产品熟练度到 3 级', check: (s) => countLevel(s, 3) >= 3 },
      { text: '完成 3 笔节日订单', check: (s) => s.festivalOrders >= 3 },
    ],
    short: {
      key: 'familiar_taste', name: '短文结局 · 熟悉的味道',
      title: '没有成为大品牌，但林记依然是大家熟悉的林记',
      text: '一年过去，林记依然是栖云镇那家熟悉的老店。除夕夜，店里摆满提前预订的蛋糕。陈奶奶笑着说，还是你们家的蛋糕好吃，这么多年都没变。',
    },
  },
  {
    id: 3, from: 13, to: 18, name: '第三章 · 让林记走得更远', need: 2,
    goals: [
      { text: '产品平均熟练度达到 2.5 级', check: (s) => avgLevel(s) >= 2.5 },
      { text: '至少 3 款产品熟练度到 3 级', check: (s) => countLevel(s, 3) >= 3 },
      { text: '口碑达到 45', check: (s) => s.reputation >= 45 },
      { text: '有一名伙伴专业能力到 3 级', check: (s) => maxSkill(s) >= 3 },
    ],
    short: {
      key: 'small_team', name: '短文结局 · 小小的团队',
      title: '有一群可靠的伙伴，有一家喜欢的店，就已经很好',
      text: '林念发现经营一家店已经占据了自己大部分精力。她决定暂时放弃扩张，继续和伙伴们经营好栖云镇的林记。她第一次明白，经营事业不一定要不断扩大规模。',
    },
  },
  {
    id: 4, from: 19, to: 24, name: '第四章 · 从一家店到一支团队', need: 2, needExpand: true,
    goals: [
      { text: '成功开设第一家分店', check: (s) => s.storeCount >= 2, expand: true },
      { text: '线上订单累计 25 笔', check: (s) => s.onlineOrders >= 25, expand: true },
      { text: '口碑达到 55', check: (s) => s.reputation >= 55 },
      { text: '两名伙伴信赖度达到 50', check: (s) => countTrust(s, 50) >= 2 },
    ],
    short: {
      key: 'qiyun_sign', name: '短文结局 · 栖云镇的招牌',
      title: '没有走向全国，却成为一座小城里不可替代的存在',
      text: '林记逐渐成为栖云镇非常有名的烘焙店。林念尝试过扩张，但最终发现自己更喜欢现在的经营方式。苏晴拍下店铺最漂亮的照片，说，你已经把这里变成自己喜欢的样子了。',
    },
  },
  {
    id: 5, from: 25, to: 30, name: '第五章 · 找回林记的味道', need: 2,
    goals: [
      { text: '解锁「招牌 · 从一块开始」', check: (s) => s.unlocked.includes('signature') },
      { text: '招牌蛋糕熟练度到 2 级', check: (s) => (s.levels.signature || 1) >= 2 },
      { text: '口碑达到 65', check: (s) => s.reputation >= 65 },
      { text: '两名伙伴提供过专属协助', check: (s) => s.helpers >= 2 },
    ],
    short: {
      key: 'osmanthus', name: '短文结局 · 桂香留在栖云',
      title: '有些味道，不需要传遍全国，也值得一直保留下去',
      text: '秋日文化节之后，桂花栗子蛋糕获得当地顾客的喜爱。林念发现团队还不适合大规模扩张，于是把它定为每年秋天的限定。伙伴们坐在店里，吃着最后一批。',
    },
  },
  {
    id: 6, from: 31, to: 36, name: '第六章 · 把喜欢的味道带到全国', need: 0, goals: [], final: true,
  },
];

export function stageByMonth(month) {
  return STAGES.find((s) => month >= s.from && month <= s.to) || STAGES[0];
}

/* ---------------- 最终结局 ---------------- */

export const ENDINGS = {
  community: {
    name: '社区老店', title: '林记还是那条街上，那家一直亮着灯的店',
    text: '店铺规模不大，但拥有很高的顾客忠诚度。很多人从小在这里买蛋糕，现在带着孩子来。',
  },
  tradition: {
    name: '传统手作老字号', title: '有些味道，经过很多年依然不会忘记',
    text: '林记保留了外婆的经典配方，形成了自己的传统烘焙文化。桂花栗子蛋糕成了每年秋天的约定。',
  },
  creative: {
    name: '创意烘焙品牌', title: '把喜欢的东西，做成了别人也喜欢的样子',
    text: '林记以新品研发、季节限定和创意设计出名，吸引了很多年轻顾客。',
  },
  regional: {
    name: '区域连锁品牌', title: '这一片地方，都认识这家店',
    text: '林记在多个城市开设门店，有了成熟的团队和稳定的供应链。',
  },
  national: {
    name: '全国连锁品牌', title: '从一块蛋糕开始，慢慢成为更好的自己',
    text: '林记建立了完整的研发、生产、供应链和运营体系。高端主题旗舰店正式开业。',
  },
  transfer: {
    name: '转让', title: '招牌还挂在街口，只是不再由她掌舵',
    text: '林记的招牌依然会挂在各个城市的街口，经典配方的蛋糕依然每天出炉。苏晴在门口等她，接过她手里的纸箱。',
  },
};

/* ---------------- 相册 ---------------- */

export const PHOTOS = {
  sq_visit: { title: '第一次探店', caption: '她站在门口拍了一张。这张她留了三年。', img: art('sq-friends.webp') },
  first_order: { title: '第一张顾客回图', caption: '蛋糕上插着蜡烛，一位头发花白的阿姨在笑。', img: null },
  sq_birthday: { title: '九月的生日', caption: '白奶油，一层无花果。她吹蜡烛的时候闭着眼。', img: null },
  community: { title: '夏日生活节', caption: '价目牌是手写的，字歪歪扭扭，但很好看。', img: art('shop-exterior.webp') },
  ln_birthday: { title: '十二月的雪', caption: '蛋糕很朴素，切开是三层不同的颜色。', img: art('nu-duo.webp') },
  ln_birthday_2: { title: '二十四岁', caption: '小雨做的蛋糕，抹面不平，草莓摆得有点挤。', img: null },
  sq_birthday_3: { title: '第三年的九月', caption: '关了灯的门店里，两份外卖和一个小蛋糕。', img: null },
  album: { title: '一本相册', caption: '最后一页是空的。她说留给我自己贴。', img: art('sq-friends.webp') },
  finale: { title: '三周年', caption: '三个人在后厨分了一个很小的蛋糕。', img: art('shop-exterior.webp') },
};

export const MONTH_NAMES = [
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月',
];

export function monthLabel(month) {
  return MONTH_NAMES[(month - 1) % 12];
}
