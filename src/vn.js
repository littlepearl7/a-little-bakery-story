/**
 * 演出层配置：场景背景、立绘站位、CG。
 *
 * 背景和 CG 都按文件名约定自动加载 —— 把图丢进 public/art/ 就会生效，不用改代码：
 *   背景：bg-<key>.webp        例 bg-shop.webp / bg-kitchen.webp
 *   CG  ：cg-<key>.webp        例 cg-festival.webp
 * 没图的时候用分层渐变兜底，不至于开天窗。
 */

import { art, artStatus } from './data';

/* ---------------- 场景 ---------------- */

const L = (...parts) => parts.join(',');

/**
 * 背景用「光 + 色 + 一点结构暗示」堆出来，不画具体家具 —— 硬边矩形一眼假。
 * 真实背景图按 bg-<key>.webp 丢进 public/art/ 就会自动顶掉这里的兜底。
 */
export const BG = {
  shop: {
    name: '林记烘焙 · 店内',
    img: 'bg-shop.webp',
    css: L(
      'radial-gradient(34% 26% at 24% 8%, rgba(255,232,170,.75), rgba(255,232,170,0) 72%)',
      'radial-gradient(30% 24% at 70% 6%, rgba(255,238,186,.55), rgba(255,238,186,0) 72%)',
      'linear-gradient(200deg, rgba(255,244,214,.55) 0%, rgba(255,244,214,0) 42%)',
      'radial-gradient(120% 70% at 50% 116%, rgba(120,74,42,.5), rgba(120,74,42,0) 72%)',
      'linear-gradient(180deg,#f8e6c9 0%,#eed3aa 40%,#cda279 74%,#9c7049 100%)'
    ),
  },
  kitchen: {
    name: '后厨',
    img: 'bg-kitchen.webp',
    css: L(
      'radial-gradient(38% 30% at 30% 6%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)',
      'linear-gradient(190deg, rgba(255,255,248,.5), rgba(255,255,248,0) 48%)',
      'radial-gradient(120% 64% at 50% 114%, rgba(96,120,110,.34), rgba(96,120,110,0) 72%)',
      'linear-gradient(180deg,#eef4ef 0%,#dde7e0 52%,#bcc9c1 100%)'
    ),
  },
  street: {
    name: '栖云镇 · 街上',
    img: 'bg-street.webp',
    css: L(
      'radial-gradient(40% 32% at 72% 22%, rgba(255,214,150,.9), rgba(255,214,150,0) 70%)',
      'radial-gradient(60% 40% at 20% 62%, rgba(120,86,86,.35), rgba(120,86,86,0) 72%)',
      'linear-gradient(180deg, rgba(96,66,72,.18) 40%, rgba(60,38,42,.5) 100%)',
      'linear-gradient(180deg,#ffeacb 0%,#f8c69c 34%,#dc9b85 62%,#8d6b72 100%)'
    ),
  },
  home: {
    name: '家里',
    img: 'bg-home.webp',
    css: L(
      'radial-gradient(46% 36% at 64% 12%, rgba(255,252,238,.9), rgba(255,252,238,0) 70%)',
      'linear-gradient(205deg, rgba(255,250,235,.5) 0%, rgba(255,250,235,0) 46%)',
      'radial-gradient(110% 60% at 50% 114%, rgba(96,112,140,.3), rgba(96,112,140,0) 72%)',
      'linear-gradient(180deg,#dfe7f3 0%,#cbd6e7 50%,#a4b0c6 100%)'
    ),
  },
  cafe: {
    name: '咖啡店',
    img: 'bg-cafe.webp',
    css: L(
      'radial-gradient(32% 26% at 64% 12%, rgba(255,226,170,.8), rgba(255,226,170,0) 72%)',
      'linear-gradient(200deg, rgba(255,238,206,.45), rgba(255,238,206,0) 44%)',
      'radial-gradient(120% 64% at 50% 114%, rgba(70,44,28,.45), rgba(70,44,28,0) 72%)',
      'linear-gradient(180deg,#e6d3bd 0%,#c9a889 48%,#8b674c 100%)'
    ),
  },
  market: {
    name: '市集 / 活动',
    img: 'bg-market.webp',
    css: L(
      'radial-gradient(circle at 18% 16%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)',
      'radial-gradient(circle at 48% 11%, rgba(255,228,160,.75), rgba(255,228,160,0) 10%)',
      'radial-gradient(circle at 78% 17%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)',
      'radial-gradient(70% 46% at 50% 26%, rgba(255,244,210,.55), rgba(255,244,210,0) 72%)',
      'radial-gradient(120% 66% at 50% 116%, rgba(96,56,36,.45), rgba(96,56,36,0) 72%)',
      'linear-gradient(180deg,#ffeccd 0%,#f7c894 40%,#cf9264 72%,#8f6146 100%)'
    ),
  },
  store: {
    name: '门店',
    img: 'bg-store.webp',
    css: L(
      'radial-gradient(46% 32% at 50% 6%, rgba(255,251,240,.95), rgba(255,251,240,0) 70%)',
      'linear-gradient(200deg, rgba(255,252,244,.6) 0%, rgba(255,252,244,0) 46%)',
      'radial-gradient(110% 56% at 50% 112%, rgba(140,102,64,.34), rgba(140,102,64,0) 72%)',
      'linear-gradient(180deg,#fdf7ec 0%,#efdcc2 52%,#caa983 100%)'
    ),
  },
  school: {
    name: '学校',
    img: 'bg-school.webp',
    css: L(
      'radial-gradient(44% 34% at 22% 10%, rgba(255,255,242,.85), rgba(255,255,242,0) 70%)',
      'linear-gradient(200deg, rgba(250,255,238,.5), rgba(250,255,238,0) 46%)',
      'radial-gradient(110% 58% at 50% 114%, rgba(96,110,70,.28), rgba(96,110,70,0) 72%)',
      'linear-gradient(180deg,#eef2e2 0%,#dae3c8 52%,#b0bd9c 100%)'
    ),
  },
  park: {
    name: '河边',
    img: 'bg-park.webp',
    css: L(
      'radial-gradient(46% 32% at 70% 12%, rgba(255,248,214,.85), rgba(255,248,214,0) 70%)',
      'linear-gradient(200deg, rgba(240,255,236,.4), rgba(240,255,236,0) 44%)',
      'radial-gradient(120% 62% at 50% 114%, rgba(70,96,88,.35), rgba(70,96,88,0) 72%)',
      'linear-gradient(180deg,#e6efe0 0%,#cbdcc4 42%,#9cb39a 74%,#778d83 100%)'
    ),
  },
  night: {
    name: '夜里',
    img: 'bg-night.webp',
    css: L(
      'radial-gradient(34% 28% at 62% 30%, rgba(255,204,138,.5), rgba(255,204,138,0) 72%)',
      'radial-gradient(26% 22% at 24% 44%, rgba(255,208,150,.32), rgba(255,208,150,0) 72%)',
      'linear-gradient(180deg,#2e3450 0%,#3a3e5a 46%,#222438 100%)'
    ),
  },
  studio: {
    name: '工作室',
    img: 'bg-studio.webp',
    css: L(
      'radial-gradient(48% 36% at 42% 8%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)',
      'linear-gradient(200deg, rgba(255,255,250,.5), rgba(255,255,250,0) 46%)',
      'radial-gradient(110% 56% at 50% 114%, rgba(120,112,96,.24), rgba(120,112,96,0) 72%)',
      'linear-gradient(180deg,#f5f3ef 0%,#e3dfd7 52%,#c2bcb2 100%)'
    ),
  },
};

const RULES = [
  [/后厨|厨房|研发室|操作台|烤箱|烤炉/, 'kitchen'],
  [/秋屿咖啡|咖啡店|咖啡馆|下午茶/, 'cafe'],
  [/市集|生活节|文化节|展览|活动当天|摊位/, 'market'],
  [/旗舰店|新店|分店|开业|门店/, 'store'],
  [/宿舍|卧室|家里|房间/, 'home'],
  [/教室|学校|晚自习|办公室|班会|走廊/, 'school'],
  [/河边|公园|街角|长椅|散步/, 'park'],
  [/打烊|深夜|晚上|夜里|关灯|路灯/, 'night'],
  [/工作室|设计室|画室/, 'studio'],
  [/店内|店里|店内景|展示柜|柜台|烘焙店|林记烘焙/, 'shop'],
  [/街上|街道|门口|路上|镇|巷/, 'street'],
];

/**
 * 事件 → 场景。文案里只有 2 处【场景】标记，其余靠这张表定，
 * 整段剧情背景保持不变，不会一句一换。
 */
const MAIN_SCENE = {
  1: 'home', 2: 'shop', 3: 'kitchen', 4: 'shop', 5: 'shop', 6: 'market',
  7: 'shop', 8: 'shop', 9: 'kitchen', 10: 'shop', 11: 'shop', 12: 'shop',
  13: 'kitchen', 14: 'shop', 15: 'shop', 16: 'market', 17: 'street', 18: 'shop',
  19: 'store', 20: 'shop', 21: 'shop', 22: 'store', 23: 'shop', 24: 'shop',
  25: 'shop', 26: 'kitchen', 27: 'kitchen', 28: 'street', 29: 'market', 30: 'shop',
  31: 'store', 32: 'street', 33: 'store', 34: 'store', 35: 'studio', 36: 'shop',
};

const FRIEND_SCENE = {
  1: 'shop', 2: 'street', 3: 'street', 4: 'shop', 5: 'park', 6: 'market',
  7: 'night', 8: 'shop', 9: 'studio', 10: 'cafe', 11: 'studio', 12: 'shop',
  13: 'kitchen', 14: 'shop', 15: 'street', 16: 'park', 17: 'street', 18: 'shop',
  19: 'store', 20: 'street', 21: 'cafe', 22: 'night', 23: 'cafe', 24: 'studio',
  25: 'street', 26: 'street', 27: 'kitchen', 28: 'shop', 29: 'park', 30: 'studio',
  31: 'cafe', 32: 'street', 33: 'store', 34: 'studio', 35: 'school', 36: 'shop',
};

/** 事件的默认场景；short/style/final 这类用标题关键词兜底 */
export function sceneKeyOfEvent(ev) {
  if (!ev) return 'shop';
  if (ev.storyline === 'mom') return 'shop';
  if (ev.storyline === 'zhiQiu') return ev.id === 'EVT_ZHIQIU_CH06_A' ? 'shop' : 'cafe';
  if (ev.kind === 'main' && MAIN_SCENE[ev.month]) return MAIN_SCENE[ev.month];
  if (ev.kind === 'friend' && FRIEND_SCENE[ev.month]) return FRIEND_SCENE[ev.month];
  return sceneKey(ev.title) || 'shop';
}

export function sceneKey(text) {
  const t = text || '';
  for (const [re, key] of RULES) if (re.test(t)) return key;
  return '';
}

/* ---------------- 立绘 ---------------- */

/**
 * 每个角色两套立绘：
 *   in  —— 在店里干活，穿围裙
 *   out —— 出门、在家、在别人地盘，穿便装
 * 用哪套由当前场景决定，见 SCENE_WEAR。
 */
const SPRITE_DEF = {
  林念: { in: 'ln-sprite-in.webp', out: 'ln-sprite-out.webp', face: 'ln-face.webp' },
  沈知秋: { in: 'zhiqiu-sprite-in.webp', out: 'zhiqiu-sprite-out.webp', face: '' },
  苏晴: { in: 'sq-sprite-in.webp', out: 'sq-sprite-out.webp', face: 'sq-face.webp' },
  林暖: { in: 'nu-sprite-in.webp', out: 'nu-sprite-out.webp', face: 'nu-face.webp' },
  周雨桐: { in: 'xy-sprite-in.webp', out: 'xy-sprite-out.webp', face: 'xy-face.webp' },
  许知遥: { in: 'zy-sprite-in.webp', out: 'zy-sprite-out.webp', face: 'zy-face.webp' },
  唐鸢: { in: 'ty-sprite-in.webp', out: 'ty-sprite-out.webp', face: 'ty-face.webp' },
  叶星河: { in: 'xh-sprite-in.webp', out: 'xh-sprite-out.webp', face: 'xh-face.webp' },
  张奶奶: { in: 'regular-granny-zhang.webp', out: 'regular-granny-zhang.webp', face: '' },
  陈叔: { in: 'regular-uncle-chen.webp', out: 'regular-uncle-chen.webp', face: '' },
  小满: { in: 'regular-xiaoman.webp', out: 'regular-xiaoman.webp', face: '' },
};

export const SPRITE = SPRITE_DEF;

/** 只有林记自己的店面才穿围裙；出门、家里、别人的店、学校都是便装 */
const SCENE_WEAR = {
  shop: 'in',
  kitchen: 'in',
  store: 'in',
  street: 'out',
  home: 'out',
  cafe: 'out',
  market: 'out',
  school: 'out',
  park: 'out',
  night: 'out',
  studio: 'out',
};

/** 场景 key → 'in' | 'out' */
export function wearOf(sceneKeyName) {
  return SCENE_WEAR[sceneKeyName] || 'out';
}

function spriteFile(name, wear) {
  const d = SPRITE_DEF[name];
  if (!d) return '';
  // 缺哪套就退回另一套，避免整个角色不上台
  if (artStatus(d[wear]) === 'ok') return d[wear];
  const other = wear === 'in' ? 'out' : 'in';
  return artStatus(d[other]) === 'ok' ? d[other] : '';
}

/** 有立绘就返回地址，没有就返回空串（对话框仍然显示名字） */
export function spriteOf(name, wear) {
  const f = spriteFile(name, wear || 'out');
  return f ? art(f) : '';
}

/** 开场就把立绘和头像拉进缓存，免得人物要等一拍才出现 */
export function preloadSprites() {
  Object.keys(SPRITE_DEF).forEach((name) => {
    const d = SPRITE_DEF[name];
    ['in', 'out', 'face'].forEach((k) => artStatus(d[k]));
  });
  Object.keys(BG).forEach((k) => artStatus(BG[k].img));
}

export function faceOfName(name) {
  const d = SPRITE_DEF[name];
  if (!d) return '';
  return artStatus(d.face) === 'ok' ? art(d.face) : '';
}

export function spriteReady(name, wear) {
  return !!spriteFile(name, wear || 'out');
}

/* ---------------- CG ---------------- */

export const CG = {
  friends: { img: 'sq-friends.webp', name: '合影' },
  mom: { img: 'nu-duo.webp', name: '母亲' },
  shop: { img: 'shop-exterior.webp', name: '林记烘焙' },
  'graduation-rejection': { img: 'cg-graduation-rejection.webp', name: '毕业季的拒信' },
  'mom-01': { img: 'cg-mom-01.webp', name: '交到你手上了' },
  'mom-02': { img: 'cg-mom-02.webp', name: '旧配方本的温度' },
  'mom-03': { img: 'cg-mom-03.webp', name: '复原桂花栗子香' },
  'mom-04': { img: 'cg-mom-04.webp', name: '第一个年末的账本' },
  'mom-05': { img: 'cg-mom-05.webp', name: '两周年的店门合影' },
  'mom-06': { img: 'cg-mom-06.webp', name: '三周年的初心老店' },
  'zhiqiu-01': { img: 'cg-zhiqiu-01.webp', name: '午后初见' },
  'zhiqiu-02': { img: 'cg-zhiqiu-02.webp', name: '第一次合作' },
  'zhiqiu-03': { img: 'cg-zhiqiu-03.webp', name: '忙碌的周末' },
  'zhiqiu-04': { img: 'cg-zhiqiu-04.webp', name: '雨天的故事' },
  'zhiqiu-05': { img: 'cg-zhiqiu-05.webp', name: '栖云四季' },
  'zhiqiu-06': { img: 'cg-zhiqiu-06.webp', name: '秋屿的夜晚' },
  osmanthus: { img: 'cg-osmanthus.webp', name: '桂花栗子蛋糕' },
  festival: { img: 'cg-festival.webp', name: '秋日文化节' },
  memory: { img: 'cg-memory.webp', name: '高三晚自习' },
  flagship: { img: 'cg-flagship.webp', name: '旗舰店方案' },
  album: { img: 'cg-album.webp', name: '三年相册' },
  finale: { img: 'cg-finale.webp', name: '三周年合影' },
};

export const CG_COLLECTION = [
  { id: 'graduation-rejection', event: 'EVT_PROLOGUE_01' },
  { id: 'osmanthus', event: 'EVT_M26_MAIN' },
  { id: 'festival', event: 'EVT_M29_MAIN' },
  { id: 'memory', event: 'EVT_M29_MAIN' },
  { id: 'flagship', event: 'EVT_M33_MAIN' },
  { id: 'album', event: 'EVT_M35_MAIN' },
  { id: 'finale', event: 'EVT_FINAL_END_NATIONAL' },
  { id: 'mom-01', event: 'EVT_MOM_M01' },
  { id: 'mom-02', event: 'EVT_MOM_M06' },
  { id: 'mom-03', event: 'EVT_MOM_M08' },
  { id: 'mom-04', event: 'EVT_MOM_M12' },
  { id: 'mom-05', event: 'EVT_MOM_M24' },
  { id: 'mom-06', event: 'EVT_MOM_M36' },
  { id: 'zhiqiu-01', event: 'EVT_ZHIQIU_CH01' },
  { id: 'zhiqiu-02', event: 'EVT_ZHIQIU_CH02' },
  { id: 'zhiqiu-03', event: 'EVT_ZHIQIU_CH04' },
  { id: 'zhiqiu-04', event: 'EVT_ZHIQIU_CH05' },
  { id: 'zhiqiu-05', event: 'EVT_ZHIQIU_CH06_WIN' },
  { id: 'zhiqiu-06', event: 'EVT_ZHIQIU_SP_NIGHT' },
];

export function cgOf(key) {
  const c = CG[key];
  const file = c ? c.img : 'cg-' + key + '.webp';
  return { src: artStatus(file) === 'ok' ? art(file) : '', name: c ? c.name : key };
}

/** 背景同理：没有对应图片就用渐变兜底 */
export function bgSrcOf(cfg) {
  if (!cfg || !cfg.img) return '';
  return artStatus(cfg.img) === 'ok' ? art(cfg.img) : '';
}


