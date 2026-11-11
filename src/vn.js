/**
 * 演出层配置：场景背景、立绘站位、CG。
 *
 * 背景和 CG 都按文件名约定自动加载 —— 把图丢进 public/art/ 就会生效，不用改代码：
 *   背景：bg-<key>.webp        例 bg-shop.webp / bg-kitchen.webp
 *   CG  ：cg-<key>.webp        例 cg-festival.webp
 * 没图的时候用分层渐变兜底，不至于开天窗。
 */

import { reactive } from 'vue';
import { art } from './data';

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
  [/咖啡店|咖啡馆|下午茶/, 'cafe'],
  [/市集|生活节|文化节|展览|活动当天|摊位/, 'market'],
  [/旗舰店|新店|分店|开业|门店/, 'store'],
  [/教室|学校|晚自习|办公室|班会|走廊/, 'school'],
  [/河边|公园|街角|长椅|散步/, 'park'],
  [/宿舍|卧室|家里|房间|厨房里/, 'home'],
  [/打烊|深夜|晚上|夜里|关灯|路灯/, 'night'],
  [/工作室|设计室|画室/, 'studio'],
  [/店内|店里|店内景|展示柜|柜台|烘焙店|林记烘焙/, 'shop'],
  [/街上|街道|门口|路上|镇|巷/, 'street'],
];

export function sceneKey(text) {
  const t = text || '';
  for (const [re, key] of RULES) if (re.test(t)) return key;
  return 'shop';
}

/* ---------------- 立绘 ---------------- */

const SPRITE_DEF = {
  林念: { file: 'ln-sprite.webp', face: 'ln-face.webp' },
  苏晴: { file: 'sq-sprite.webp', face: 'sq-exp-1.webp' },
  林暖: { file: 'nu-sprite.webp', face: 'nu-exp-6.webp' },
  // 下面四位还没画，文件按这个名字丢进 public/art/ 就会自动出现
  周雨桐: { file: 'xy-sprite.webp', face: 'xy-face.webp' },
  许知遥: { file: 'zy-sprite.webp', face: 'zy-face.webp' },
  唐可欣: { file: 'kx-sprite.webp', face: 'kx-face.webp' },
  叶清禾: { file: 'qh-sprite.webp', face: 'qh-face.webp' },
};

export const SPRITE = SPRITE_DEF;

/* 图片是否真的存在：不存在就不占位，免得出现破图 */
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

/** 有立绘就返回地址，没有就返回空串（对话框仍然显示名字） */
export function spriteOf(name) {
  const d = SPRITE_DEF[name];
  if (!d) return '';
  return artStatus(d.file) === 'ok' ? art(d.file) : '';
}

export function faceOfName(name) {
  const d = SPRITE_DEF[name];
  if (!d) return '';
  return artStatus(d.face) === 'ok' ? art(d.face) : '';
}

export function spriteReady(name) {
  const d = SPRITE_DEF[name];
  return !!d && artStatus(d.file) === 'ok';
}

/* ---------------- CG ---------------- */

export const CG = {
  friends: { img: 'sq-friends.webp', name: '合影' },
  mom: { img: 'nu-duo.webp', name: '母亲' },
  shop: { img: 'shop-exterior.webp', name: '林记烘焙' },
};

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
