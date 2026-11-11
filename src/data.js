/** 静态数据：蛋糕、城市、装修、行动、角色、相册。数值都在这里调。 */

const base = import.meta.env.BASE_URL;

export function art(file) {
  return base + 'art/' + file;
}

/* ---------------- 角色 ---------------- */

export const CHARACTERS = {
  ln: {
    name: '林念',
    full: art('ln-full.webp'),
    face: art('ln-face.webp'),
    emotions: {},
  },
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
  if (idx) {
    return art(charId + '-exp-' + idx + '.webp');
  }
  return c.face;
}

/* ---------------- 蛋糕 ---------------- */

export const CAKES = [
  {
    id: 'plain', name: '原味奶油蛋糕', skill: 0, cost: 80, price: 128, quality: 3, stock: 2,
    desc: '店里最老的方子。戚风胚，薄薄一层奶油，什么装饰都没有。',
    colors: { sponge: '#F0D9AE', cream: '#FFF8EE', accent: '#E8B86D' },
  },
  {
    id: 'strawberry', name: '草莓奶油蛋糕', skill: 10, cost: 130, price: 198, quality: 5, stock: 3,
    desc: '整颗草莓夹在奶油里，切开的时候会掉下来两颗。',
    colors: { sponge: '#F4DDB6', cream: '#FFF8F2', accent: '#E05B66' },
  },
  {
    id: 'chocolate', name: '巧克力蛋糕', skill: 16, cost: 150, price: 218, quality: 6, stock: 3,
    desc: '可可粉筛了三遍，吃起来不苦，回味有点厚。',
    colors: { sponge: '#8A5A3B', cream: '#C89B72', accent: '#5C3823' },
  },
  {
    id: 'taro', name: '芋泥薄脆', skill: 24, cost: 180, price: 268, quality: 8, stock: 3,
    desc: '第一款属于我自己的蛋糕。少一分糖，中间夹一层薄薄的芋泥。',
    colors: { sponge: '#E5D5E8', cream: '#FBF2FA', accent: '#B48FC0' },
  },
  {
    id: 'matcha', name: '抹茶蛋糕', skill: 30, cost: 210, price: 298, quality: 9, stock: 4,
    desc: '宇治抹茶配红豆。颜色好看，但火候差一点就会发苦。',
    colors: { sponge: '#C9D8A8', cream: '#F6FAEE', accent: '#7E9B52' },
  },
  {
    id: 'mango', name: '芒果慕斯', skill: 36, cost: 250, price: 348, quality: 10, stock: 4,
    desc: '夏天限定。芒果要挑熟的，不然酸味会盖住奶香。',
    colors: { sponge: '#F7D98C', cream: '#FFF6E2', accent: '#E9A93C' },
  },
  {
    id: 'tiramisu', name: '提拉米苏', skill: 44, cost: 300, price: 398, quality: 12, stock: 4,
    desc: '手指饼干要浸得刚好，多一秒就散，少一秒就干。',
    colors: { sponge: '#D8B98E', cream: '#F3E6D3', accent: '#6B4A34' },
  },
  {
    id: 'fig', name: '无花果奶油', skill: 50, cost: 340, price: 448, quality: 13, stock: 4,
    desc: '苏晴生日那天做的那款。白奶油，上面摆一层无花果。',
    colors: { sponge: '#EFDCC0', cream: '#FFFAF4', accent: '#A5587B' },
  },
  {
    id: 'seasonal', name: '季节水果蛋糕', skill: 58, cost: 380, price: 498, quality: 14, stock: 5,
    desc: '每个月换一次水果。春天是莓果，秋天是梨和无花果。',
    colors: { sponge: '#F6E4C4', cream: '#FFFAF0', accent: '#D9736A' },
  },
  {
    id: 'festival', name: '节日限定蛋糕', skill: 68, cost: 460, price: 598, quality: 16, stock: 5,
    desc: '一年只做几次。包装盒是专门订的，比蛋糕还贵。',
    colors: { sponge: '#EADCCB', cream: '#FFFBF5', accent: '#C2554F' },
  },
  {
    id: 'custom', name: '生日定制蛋糕', skill: 76, cost: 520, price: 688, quality: 18, stock: 5,
    desc: '客人说什么，就做什么。最难的不是手艺，是听懂他要什么。',
    colors: { sponge: '#F3E2C6', cream: '#FFFCF7', accent: '#D98CA0' },
  },
  {
    id: 'signature', name: '招牌 · 从一块开始', skill: 88, cost: 620, price: 828, quality: 20, stock: 6,
    desc: '店里的招牌。三层夹心，切开是三种颜色，像三年。',
    colors: { sponge: '#F0D9AE', cream: '#FFFDF8', accent: '#8A6A4F' },
  },
];

export function cakeById(id) {
  return CAKES.find((c) => c.id === id) || CAKES[0];
}

/* ---------------- 城市 / 门店 ---------------- */

export const CITIES = [
  { id: 'qiyun', name: '栖云镇', cost: 0, rep: 0, fame: 0, note: '初始门店。住了二十年的小镇。' },
  { id: 'linjiang', name: '临江市', cost: 5000, rep: 26, fame: 20, note: '开车一小时能到的城市，第一家分店。' },
  { id: 'hangzhou', name: '杭州', cost: 11000, rep: 38, fame: 32, note: '第一家真正意义上的「外地店」。' },
  { id: 'shanghai', name: '上海', cost: 16000, rep: 48, fame: 44, note: '房租很贵，但客单价也高。' },
  { id: 'nanjing', name: '南京', cost: 23000, rep: 58, fame: 55, note: '老街上的店，装修保留了木质结构。' },
  { id: 'chengdu', name: '成都', cost: 31000, rep: 68, fame: 64, note: '本地团队自己跑起来的。' },
  { id: 'guangzhou', name: '广州', cost: 40000, rep: 78, fame: 74, note: '第一次把季节水果换成热带水果。' },
  { id: 'beijing', name: '北京', cost: 52000, rep: 88, fame: 84, note: '旗舰店。开业那天正好是我的生日。' },
];

/* ---------------- 装修等级 ---------------- */

export const SHOP_LEVELS = [
  {
    lv: 1, name: '社区小店', cost: 0,
    desc: '木门，玻璃展示柜，两张桌子。下雨天会有点潮。',
  },
  {
    lv: 2, name: '精致烘焙店', cost: 9000,
    desc: '换了灯，加了花，展示柜换成三层的。口碑会好看一些。',
  },
  {
    lv: 3, name: '品牌旗舰店', cost: 26000,
    desc: '整面墙的木质货架，后面是开放式厨房。客人能看见我们做蛋糕。',
  },
  {
    lv: 4, name: '高端主题门店', cost: 62000,
    desc: '每个季节换一次主题。有人说进来像走进一本绘本。',
  },
];

export function shopLevelInfo(lv) {
  return SHOP_LEVELS.find((s) => s.lv === lv) || SHOP_LEVELS[0];
}

/* ---------------- 行动 ---------------- */

export const ACTIONS = [
  {
    id: 'study', name: '学习烘焙', en: 'Study',
    hint: '提升烘焙技能与产品品质',
    detail: '翻笔记、试配方、抹面。慢，但是最稳的。',
  },
  {
    id: 'sell', name: '营业接单', en: 'Serve',
    hint: '消耗库存，换取收入与口碑',
    detail: '开门做生意。今天来的客人会记住味道。',
  },
  {
    id: 'market', name: '宣传推广', en: 'Promote',
    hint: '花一点钱，换品牌知名度',
    detail: '发帖子、发传单、请人试吃。总得有人知道。',
  },
  {
    id: 'restock', name: '采购原料', en: 'Stock',
    hint: '补充奶油、面粉和水果',
    detail: '周叔说这批奶油不错，多拿两箱。',
  },
  {
    id: 'research', name: '研发新品', en: 'Create',
    hint: '解锁新的蛋糕配方',
    detail: '失败了就再试一次。反正面粉不贵。',
  },
  {
    id: 'decorate', name: '装修升级', en: 'Renovate',
    hint: '提升门店等级',
    detail: '换灯、换柜台、换墙。客人会感觉到。',
  },
  {
    id: 'hire', name: '招聘员工', en: 'Hire',
    hint: '增加人手，支撑更多门店',
    detail: '一个人做不完的时候，就得找人。',
  },
  {
    id: 'branch', name: '开设分店', en: 'Expand',
    hint: '在新城市开店',
    detail: '把喜欢的味道带到更多地方。',
  },
  {
    id: 'community', name: '社区活动', en: 'Community',
    hint: '提升口碑，偶尔获得纪念照片',
    detail: '摆个摊，做点小蛋糕。邻居们都会来。',
  },
];

/* ---------------- 相册 ---------------- */

export const PHOTOS = {
  sq_visit: { title: '第一次探店', caption: '她站在门口拍了一张。这张她留了三年。', img: art('sq-friends.webp') },
  first_order: { title: '第一张顾客回图', caption: '蛋糕上插着蜡烛，一位头发花白的阿姨在笑。', img: null },
  sq_birthday: { title: '九月的生日', caption: '白奶油，一层无花果。她吹蜡烛的时候眼睛闭着。', img: null },
  ln_birthday: { title: '十二月的雪', caption: '蛋糕很朴素，切开是三层不同的颜色。', img: art('nu-duo.webp') },
  community: { title: '社区美食活动', caption: '价目牌是手写的，字歪歪扭扭，但很好看。', img: art('shop-exterior.webp') },
  package: { title: '礼盒尺寸', caption: '桌上堆了一整片纸板，最后定下来的是她挑的那个。', img: null },
  weekend: { title: '久违的周末', caption: '河边，天快黑了。最后一张。', img: null },
  sq_birthday_3: { title: '第三年的九月', caption: '关了灯的门店里，两份外卖和一个小蛋糕。', img: null },
  ln_birthday_2: { title: '二十四岁', caption: '小雨做的蛋糕，抹面不平，草莓摆得有点挤。', img: null },
  album: { title: '一本相册', caption: '最后一页是空的。她说留给我自己贴。', img: art('sq-friends.webp') },
  finale: { title: '旗舰店开业', caption: '三个人在后厨分了一个很小的蛋糕。', img: art('shop-exterior.webp') },
};

/* ---------------- 阶段 ---------------- */

export const STAGES = [
  { from: 1, to: 6, name: '第一章 · 接手林记' },
  { from: 7, to: 12, name: '第二章 · 熟悉的味道' },
  { from: 13, to: 18, name: '第三章 · 让林记走得更远' },
  { from: 19, to: 24, name: '第四章 · 从一家店到一支团队' },
  { from: 25, to: 30, name: '第五章 · 找回林记的味道' },
  { from: 31, to: 36, name: '第六章 · 把喜欢的味道带到全国' },
];

export function stageOf(month) {
  return STAGES.find((s) => month >= s.from && month <= s.to) || STAGES[STAGES.length - 1];
}

export const MONTH_NAMES = [
  '一月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月',
];

export function monthLabel(month) {
  return MONTH_NAMES[(month - 1) % 12];
}
