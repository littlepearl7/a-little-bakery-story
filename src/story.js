/**
 * 剧情解析器 V5。
 *
 * 唯一数据源是 story/文案v6.md —— 改那个文件就改剧情，不用动代码。
 * 解析目标：把剧本拆成 [{ id, title, month, kind, test, beats }]。
 *
 * 支持的写法（都在 v5_0.md 里实际用到）：
 *   ## / ### / ####        章节、事件、小节
 *   **【事件ID：EVT_X｜触发月份：M1第1个经营日】**
 *   **【场景：...】****【插入回忆片段 ...】****【回到现在：...】**
 *   **【分支A：...】****【汇合】**
 *   **【高养成解锁分支：...】****【普通保底分支：...】**
 *   **【若X信赖度 ≥ 60，...】**     单条件段落
 *   > **【玩家选择节点 11.1（M5）：...】** + > * **选项A：...**（效果）
 *   角色：台词 / 角色（表情）：台词 / 旁白（视角）：...
 */

import raw from '../story/文案v6.md?raw';
import momRaw from '../story/林暖剧情.md?raw';
import zhiQiuRaw from '../story/秋屿来信.md?raw';
import regularRaw from '../story/常客剧情.md?raw';
import { phoneContactId } from './phone';

/* ---------------- 名词表 ---------------- */

const NAMES = {
  林念: '林念',
  苏晴: '苏晴',
  林暖: '林暖',
  周雨桐: '周雨桐',
  小雨: '周雨桐',
  许知遥: '许知遥',
  知遥: '许知遥',
  唐鸢: '唐鸢',
  阿鸢: '唐鸢',
  叶星河: '叶星河',
  星河: '叶星河',
  陈奶奶: '陈奶奶',
  张叔: '张叔',
  李婶: '李婶',
  赵叔: '赵叔',
  沈知夏: '沈知夏',
  许佳宁: '许佳宁',
  沈妍: '沈妍',
  沈知秋: '沈知秋',
  张奶奶: '张奶奶',
  陈叔: '陈叔',
  小满: '小满',
  顾客: '顾客',
};

export const PARTNER_OF = { 周雨桐: 'xiaoyu', 许知遥: 'zhiyao', 唐鸢: 'kexin', 叶星河: 'qinghe' };
export const PARTNER_NICK = { xiaoyu: '小雨', zhiyao: '知遥', kexin: '阿鸢', qinghe: '星河' };

const STYLE_NAME = { tradition: '传统', innovation: '创新', efficiency: '效率', community: '社区' };
const NUM = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 };

/** 行首是已知角色名 + 可选表情 + 少量动作描写 + 冒号 → 台词 */
const SPEAK_RE =
  /^(林念|苏晴|林暖|沈知秋|周雨桐|许知遥|唐鸢|叶星河|张奶奶|陈叔|小满|陈奶奶|张叔|李婶|赵叔|沈知夏|许佳宁|沈妍|小雨|知遥|阿鸢|星河|顾客)(?:（([^）]{1,12})）)?([^：:]{0,24})[：:]\s*(.+)$/;

/* ---------------- 条件 ---------------- */

export function evalTest(test, st) {
  if (!test) return true;
  if (test.trust) {
    for (const pid of Object.keys(test.trust)) {
      if ((st.partnerTrust[pid] || 0) < test.trust[pid]) return false;
    }
  }
  if (test.momBond && (st.momBond || 0) < test.momBond) return false;
  if (test.played) {
    for (const key of test.played) {
      if (!st.played.some((id) => id.indexOf(key) >= 0)) return false;
    }
  }
  if (test.style) {
    const s = st.style || {};
    const mine = s[test.style.id] || 0;
    if (mine < test.style.min) return false;
    const others = Object.keys(s)
      .filter((k) => k !== test.style.id)
      .map((k) => s[k] || 0);
    if (mine - Math.max(0, ...others) < test.style.lead) return false;
  }
  return true;
}

/** 把带条件的节拍展开成线性列表（选项里的分支也一起展开） */
export function resolveBeats(beats, st) {
  const out = [];
  for (const b of beats || []) {
    if (b.t === 'cond') {
      out.push(...resolveBeats(evalTest(b.test, st) ? b.then : b.else, st));
    } else if (b.t === 'choice') {
      out.push({
        ...b,
        options: (b.options || []).map((o) => ({ ...o, branch: resolveBeats(o.branch || [], st) })),
        after: resolveBeats(b.after || [], st),
      });
    } else {
      out.push(b);
    }
  }
  return out;
}

/* ---------------- 效果（选项里的括号说明） ---------------- */

function eachMatch(re, text, fn) {
  // Chrome 61 没有 String.prototype.matchAll，用 exec 循环代替
  re.lastIndex = 0;
  let m = re.exec(text);
  while (m) {
    fn(m);
    m = re.exec(text);
  }
}

function parseGains(text, ctxPartner) {
  const out = [];
  if (!text) return out;

  eachMatch(/(tradition|innovation|efficiency|community)Score\s*\+\s*(\d+)/g, text, (m) => {
    out.push({ k: 'style', id: m[1], v: Number(m[2]), label: STYLE_NAME[m[1]] + ' +' + m[2] });
  });

  eachMatch(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*\+\s*(\d+)/g, text, (m) => {
    const name = NAMES[m[1]];
    out.push({
      k: 'trust',
      id: PARTNER_OF[name],
      v: Number(m[2]),
      label: m[1] + '信赖 +' + m[2],
    });
  });

  eachMatch(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)?专业能力\s*\+\s*(\d+)/g, text, (m) => {
    const name = m[1] ? NAMES[m[1]] : ctxPartner;
    const pid = PARTNER_OF[name];
    if (!pid) return;
    out.push({ k: 'skill', id: pid, v: Number(m[2]) / 10, label: (m[1] || PARTNER_NICK[pid]) + '专业 +' + m[2] });
  });

  // 不带名字的「信赖度 +N」按选项上下文里的角色算。
  // 用「前文是否以某个角色名结尾」判断，避免用后行断言（Chrome 61 不支持）
  const nameWords = Object.keys(NAMES);
  eachMatch(/信赖度\s*\+\s*(\d+)/g, text, (m) => {
    const prev = text.slice(0, m.index);
    if (nameWords.some((n) => prev.endsWith(n))) return;
    const pid = PARTNER_OF[ctxPartner];
    if (!pid) return;
    if (out.some((g) => g.k === 'trust' && g.id === pid)) return;
    out.push({ k: 'trust', id: pid, v: Number(m[1]), label: PARTNER_NICK[pid] + '信赖 +' + m[1] });
  });

  if (/顾客忠诚度增加|忠诚度提升/.test(text)) out.push({ k: 'loyalty', v: 4, label: '忠诚 +4' });
  return out;
}

/* ---------------- 条件标记 ---------------- */

function parseCondText(text) {
  const test = {};
  let hit = false;

  const t = text.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*[≥>=]+\s*(\d+)/);
  if (t) {
    test.trust = { [PARTNER_OF[NAMES[t[1]]]]: Number(t[2]) };
    hit = true;
  }
  const mom = text.match(/家庭默契\s*[≥>=]+\s*(\d+)/);
  if (mom) {
    test.momBond = Number(mom[1]);
    hit = true;
  }
  const family = text.match(/familyHarmony\s*[≥>=]+\s*(\d+)/);
  if (family) {
    test.momBond = Number(family[1]);
    hit = true;
  }
  const st = text.match(/(tradition|innovation|efficiency|community)Score\s*[≥>=]+\s*(\d+)/);
  if (st) {
    test.style = { id: st[1], min: Number(st[2]), lead: 15 };
    hit = true;
  }
  const lead = text.match(/领先[^0-9]{0,4}(\d+)/);
  if (lead && test.style) test.style.lead = Number(lead[1]);

  const mm = text.match(/M(\d+)/);
  if (mm && /已完成|完成M/.test(text)) {
    test.played = ['M' + mm[1]];
    hit = true;
  } else if (/原创配方研发剧情/.test(text)) {
    test.played = ['M21'];
    hit = true;
  } else if (/个人作品展/.test(text)) {
    test.played = ['M25'];
    hit = true;
  }

  return hit ? test : null;
}

/* ---------------- 正文行 ---------------- */

function cleanText(s) {
  return s
    .replace(/[（(]\s*`?(?:cake|city|EVT|shop)-?[A-Za-z0-9_]*`?\s*[）)]/g, '')
    .replace(/`/g, '')
    .trim();
}

function pushProse(line, target) {
  const s = line.trim();
  if (!s) return;
  if (/^\|/.test(s)) return; // 表格

  // 旁白（含「旁白（苏晴视角）：」）
  if (s.startsWith('旁白')) {
    const m = s.match(/^旁白\s*(?:（([^）]*)）)?\s*[：:]\s*(.*)$/);
    target.push({ t: 'nar', who: m && m[1] ? m[1] : '', text: cleanText(m ? m[2] : s) });
    return;
  }

  // 整行加粗 → 内心独白 / 强调，按旁白处理
  if (/^\*\*[^*]+\*\*$/.test(s)) {
    target.push({ t: 'nar', text: cleanText(s.replace(/\*\*/g, '')) });
    return;
  }

  // *（效果好）*
  if (/^\*（.+）\*$/.test(s) || /^\*\(.+\)\*$/.test(s)) {
    target.push({ t: 'note', text: s.replace(/^\*[（(]|[）)]\*$/g, '').trim() });
    return;
  }

  const m = s.match(SPEAK_RE);
  if (m) {
    const who = NAMES[m[1]];
    target.push({
      t: /手机消息|短信/.test(m[2] || '') && phoneContactId(who) ? 'phoneMessage' : 'say',
      who,
      emo: m[2] || '',
      text: cleanText(m[4].replace(/\*\*/g, '')),
    });
    return;
  }

  target.push({ t: 'nar', text: cleanText(s.replace(/\*\*/g, '')) });
}

/* ---------------- 单个块 ---------------- */

function parseBlock(lines, opts = {}) {
  const beats = [];
  const meta = { ids: [], month: null, kind: null, test: null, title: '', cond: null };

  let mode = 'main'; // main | branch | then | else | inline
  let mainTarget = beats;
  let curChoice = null;
  let curOpt = null;
  let curCond = null;
  let lastCond = null;
  let inlineCond = null;
  let pendingGuideTarget = '';
  let para = 0;
  let sawBlank = true;

  const target = () => {
    if (mode === 'branch' && curOpt) return curOpt.branch;
    if (mode === 'then' && curCond) return curCond.then;
    if (mode === 'else' && curCond) return curCond.else;
    if (mode === 'inline' && inlineCond) return inlineCond.then;
    return mainTarget;
  };

  const push = (b) => target().push(b);
  const pushMarkedProse = (line, dest) => {
    const before = dest.length;
    pushProse(line, dest);
    if (pendingGuideTarget && dest.length > before) {
      dest[before].guideTarget = pendingGuideTarget;
      pendingGuideTarget = '';
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      sawBlank = true;
      continue;
    }

    /* --- 引用块：玩家选择 --- */
    if (line.startsWith('>')) {
      let body = line.replace(/^>+\s*/, '').trim();
      if (!body) continue;

      const mk = body.match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);
      if (mk && /玩家选择节点/.test(mk[1])) {
        mode = 'main';
        inlineCond = null;
        const inner = mk[1];
        const nodeM = inner.match(/节点\s*([\d.\-]+)/);
        const promptM = inner.match(/[：:]\s*(.+)$/);
        curChoice = {
          t: 'choice',
          node: nodeM ? nodeM[1] : '',
          prompt: promptM ? promptM[1].trim() : inner,
          options: [],
          after: [],
        };
        push(curChoice);
        continue;
      }

      const om = body.match(/^[-*]\s*\*\*选项([A-Z])[：:](.+?)\*\*(.*)$/);
      if (om && curChoice) {
        const ctxName = guessPartner([body, curChoice.prompt].join(' '));
        const rest = om[3] || '';
        curChoice.options.push({
          label: om[2].trim(),
          hint: rest.replace(/^[（(]|[）)]$/g, '').trim(),
          gains: parseGains(rest, ctxName),
          branch: [],
        });
        continue;
      }

      if (/^\*[（(].+[）)]\*$/.test(body) && curChoice) {
        curChoice.note = body.replace(/^\*[（(]|[）)]\*$/g, '').trim();
      }
      continue;
    }

    /* --- 列表符号 + 【...】标记行 --- */
    const bare = line.replace(/^[*-]\s+/, '').trim();
    const mark = bare.match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);
    if (mark) {
      const inner = mark[1];
      const rest = (mark[2] || '').replace(/^[：:]\s*/, '').trim();

      const guide = inner.match(/^教学指向\s*[：:]\s*([a-z-]+)$/);
      if (guide) {
        pendingGuideTarget = guide[1];
        continue;
      }

      // 事件 ID / 触发条件 / 状态变更 / 初始状态 / 检查条件：元数据
      // 注意：事件ID 有时跟在「触发条件｜」后面，所以不能只看行首
      if (inner.indexOf('事件ID') >= 0) {
        const parts = inner.split('｜');
        parts.forEach((p) => {
          const idx = p.search(/[：:]/);
          if (idx < 0) return;
          const k = p.slice(0, idx).trim();
          const v = p.slice(idx + 1).trim();
          if (k === '事件ID') meta.ids.push(v.replace(/`/g, ''));
          else if (k === '场景') push({ t: 'scene', text: v });
          else if (k === '触发月份' || k === '触发时间') {
            const m = v.match(/M(\d+)/);
            if (m) meta.month = Number(m[1]);
          } else if (k === '触发条件') {
            if (/新游戏开始|开始游戏/.test(v)) meta.kind = 'prologue';
            const t = parseCondText(v);
            if (t) meta.cond = t;
          }
        });
        continue;
      }
      if (/^(触发条件|状态变更|初始状态|检查条件|注意|系统提示)/.test(inner)) continue;

      const regularCg = inner.match(/^触发(张奶奶|陈叔|小满|群像)(?:专属)?CG\s*[｜|：:]\s*([^：:｜|]+)/);
      if (regularCg) {
        const key = {
          '张奶奶|没有取消的聚会': 'regular-granny-m17',
          '陈叔|市集的准备': 'regular-uncle-m24',
          '小满|失败的作品': 'regular-xiaoman-m10',
          '群像|我们都在这里': 'group',
        }[regularCg[1] + '|' + regularCg[2].trim()];
        if (key) push({ t: 'cg', key });
        continue;
      }

      // 场景 / 回忆片段 → 场景分隔
      if (/^(场景|插入回忆|接续回忆|回忆片段|回到现在|闪回|时间|地点)/.test(inner)) {
        push({ t: 'scene', text: inner.replace(/^场景\s*[：:]\s*/, '') });
        if (rest) push({ t: 'nar', text: rest });
        continue;
      }

      // 新增人物支线 CG：素材未到位时由演出层自动隐藏画面，继续播放对白。
      const sideCg = inner.match(/^触发(母女)?CG\s*(\d+)\s*[｜|：:]\s*([^：:｜|]+)/);
      if (sideCg) {
        const prefix = sideCg[1] ? 'mom' : 'zhiqiu';
        push({ t: 'cg', key: prefix + '-' + String(sideCg[2]).padStart(2, '0') });
        continue;
      }

      // CG：整屏插画，用于重要场面
      const cg = inner.match(/^CG\s*[：:]\s*(.+)$/i);
      if (cg) {
        push({ t: 'cg', key: cg[1].trim() });
        continue;
      }
      if (/^CG\s*(结束|收起)/.test(inner)) {
        push({ t: 'cgend' });
        continue;
      }

      // 分支
      const bm = inner.match(/^分支([A-Z])(?:[：:](.*))?$/);
      if (bm && curChoice) {
        const i = bm[1].charCodeAt(0) - 65;
        while (curChoice.options.length <= i) {
          curChoice.options.push({ label: '选项' + String.fromCharCode(65 + curChoice.options.length), hint: '', gains: [], branch: [] });
        }
        curOpt = curChoice.options[i];
        mode = 'branch';
        inlineCond = null;
        if (rest) push({ t: 'nar', text: cleanText(rest) });
        continue;
      }

      if (/^(主线汇合|汇合|汇合点)$/.test(inner)) {
        mode = 'main';
        inlineCond = null;
        if (curChoice) mainTarget = curChoice.after;
        if (rest) push({ t: 'nar', text: rest });
        continue;
      }

      // 伙伴协助的高低分支
      const hi = inner.match(/^高养成解锁分支[：:]\s*(.*)$/);
      const lo = inner.match(/^普通保底分支[：:]\s*(.*)$/);
      if (hi || lo) {
        if (hi) {
          inlineCond = null;
          curCond = { t: 'cond', test: parseCondText(hi[1]) || {}, then: [], else: [] };
          lastCond = curCond;
          beats.push(curCond);
          mode = 'then';
        } else {
          const host = lastCond && lastCond.else.length === 0 ? lastCond : null;
          if (host) {
            curCond = host;
            mode = 'else';
          } else {
            // 没有配对的高分支，就直接当正文
            mode = 'main';
          }
        }
        continue;
      }

      // 单条件段落：若 X信赖度 ≥ 70，...
      if (/^若/.test(inner)) {
        const test = parseCondText(inner);
        if (test) {
          curCond = { t: 'cond', test, then: [], else: [] };
          beats.push(curCond);
          inlineCond = curCond;
          mode = 'inline';
          para = 0;
          sawBlank = false;
          if (rest) pushProse(rest, target());
        }
        continue;
      }

      // 第X幕：幕内分节，可能带「（若某人信赖度 ≥ N）」
      const act = inner.match(/^第[一二三四五六七八九十]+幕[：:]\s*(.*)$/);
      if (act) {
        const cond = parseCondText(act[1]);
        const label = act[1].replace(/[（(]\s*若[^）)]*[）)]/g, '').trim();
        push({ t: 'act', text: label, test: cond || null });
        if (rest) push({ t: 'nar', text: rest });
        continue;
      }

      // 机制说明 / 其他标记：当作小标题
      if (rest) push({ t: 'nar', text: rest });
      continue;
    }

    /* --- 小标题：**1. 周雨桐（小雨）的协助：** --- */
    const sub = line.match(/^\*\*\s*(\d+\.\s*)?(.+?)\s*\*\*$/);
    if (sub && /协助|结局|相册|档案/.test(sub[2])) {
      mode = 'main';
      inlineCond = null;
      push({ t: 'scene', text: sub[2].replace(/[：:]\s*$/, '') });
      continue;
    }

    /* --- 正文 --- */
    if (mode === 'inline' && inlineCond) {
      const b = [];
      pushProse(line, b);
      const first = b[0];
      const isNar = first && first.t === 'nar';
      if (sawBlank && para > 0 && isNar) {
        // 条件段落结束，回到正文
        mode = 'main';
        inlineCond = null;
        pushProse(line, mainTarget);
        sawBlank = false;
        continue;
      }
      b.forEach((x) => inlineCond.then.push(x));
      if (sawBlank) para += 1;
      sawBlank = false;
      continue;
    }

    pushMarkedProse(line, target());
    sawBlank = false;
  }

  // 选项没有分支时，用选项自身的 hint 当正文兜底
  if (curChoice) {
    curChoice.options.forEach((o) => {
      if (!o.branch.length) o.branch = [];
    });
  }

  meta.title = opts.title || '';
  return { beats: wrapActs(beats), meta };
}

/** 幕级条件：把这个 act 到下一个 act 之间的内容整体包成 cond */
function wrapActs(beats) {
  const out = [];
  let i = 0;
  while (i < beats.length) {
    const b = beats[i];
    if (b.t === 'act' && b.test) {
      let j = i + 1;
      while (j < beats.length && beats[j].t !== 'act') j++;
      out.push({ t: 'cond', test: b.test, then: beats.slice(i, j), else: [] });
      i = j;
    } else {
      out.push(b);
      i++;
    }
  }
  return out;
}

function guessPartner(text) {
  const m = text.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)/);
  return m ? NAMES[m[1]] : '';
}

/* ---------------- 结构树 ---------------- */

function buildTree(md) {
  const root = { level: 1, text: '', lines: [], children: [] };
  const stack = [root];
  for (const raw of md.split(/\r?\n/)) {
    const h = raw.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      while (stack.length > 1 && stack[stack.length - 1].level >= level) stack.pop();
      const node = { level, text: h[2].trim(), lines: [], children: [] };
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    } else {
      stack[stack.length - 1].lines.push(raw);
    }
  }
  return root;
}

/* ---------------- 主解析 ---------------- */

function parseStory(md) {
  const tree = buildTree(md);
  const events = [];
  const stages = {};
  const friend = {};
  const codex = {};
  const cityText = {};
  const partnerEndings = {};
  const warnings = [];
  let order = 0;

  const add = (ev) => {
    ev.order = order++;
    events.push(ev);
    return ev;
  };

  // 文章标题一般是 # 级，章节是 ## 级；两种写法都兼容
  const chapters = [];
  for (const node of tree.children) {
    if (node.level === 1) chapters.push(...node.children);
    else chapters.push(node);
  }

  for (const chapter of chapters) {
    const chapTitle = chapter.text || '';

    /* 序幕 */
    if (/^序幕/.test(chapTitle)) {
      const { beats, meta } = parseBlock(chapter.lines, { title: '序幕 · 回家' });
      add({
        id: meta.ids[0] || 'EVT_PROLOGUE_01',
        ids: meta.ids,
        title: '序幕 · 回家',
        chapter: '',
        month: 0,
        kind: 'prologue',
        test: null,
        beats,
      });
      continue;
    }

    /* 主干章节 */
    if (/^第[一二三四五六]章/.test(chapTitle)) {
      for (const node of chapter.children) {
        const t = node.text;
        const isStage = /结算/.test(t) && /(月末|目标)/.test(t);
        const monthM = t.match(/M(\d+)/);
        const month = monthM ? Number(monthM[1]) : null;

        if (isStage && !monthM) continue;

        if (isStage) {
          // M30 这种「事件 + 阶段结算」写在同一块里的，先解析正文，再读 #### 分支
          const stageNo = stageOf(t, month);
          const parsed = parseBlock(node.lines, { title: t });
          const beats = parsed.beats;
          if (parsed.meta.ids.length) {
            add({
              id: parsed.meta.ids[0],
              ids: parsed.meta.ids,
              title: cleanTitle(t),
              chapter: chapTitle,
              month,
              kind: 'main',
              test: parsed.meta.cond,
              beats,
            });
          }
          if (!stageNo) continue;
          stages[stageNo] = stages[stageNo] || { pass: [], failId: '', failBeats: [] };
          for (const sub of node.children) {
            const kind = sectionKind(sub.text);
            if (!kind) continue;
            const r = parseBlock(sub.lines, { title: sub.text });
            if (kind === 'pass') {
              stages[stageNo].pass = r.beats;
            } else {
              stages[stageNo].failBeats = r.beats;
              stages[stageNo].failId = r.meta.ids[0] || '';
              if (r.meta.ids.length) {
                add({
                  id: r.meta.ids[0],
                  ids: r.meta.ids,
                  title: shortTitle(sub.text, r.beats),
                  chapter: chapTitle,
                  month: null,
                  kind: 'short',
                  test: null,
                  beats: r.beats,
                });
              }
            }
          }
          continue;
        }

        // 普通 M## 事件
        const { beats, meta } = parseBlock(node.lines, { title: t });
        if (!meta.ids.length) {
          // 没有事件 ID 的小节（如「M6月末」标题被别处吸收）跳过
          continue;
        }
        let test = meta.cond;
        let monthFinal = month != null ? month : meta.month;
        // 条件事件从自己声明的月份起算
        if (test && !monthFinal) monthFinal = meta.month;

        // #### 子节：不是阶段结算的，就接在正文后面
        // （M27 的「伙伴专属协助判定」就写在这里）
        for (const sub of node.children) {
          if (sectionKind(sub.text)) continue;
          const r = parseBlock(sub.lines, { title: sub.text });
          if (!r.beats.length) continue;
          beats.push({ t: 'scene', text: sub.text.replace(/^【|】$/g, '') });
          beats.push(...r.beats);
        }

        add({
          id: meta.ids[0],
          ids: meta.ids,
          title: cleanTitle(t),
          chapter: chapTitle,
          month: monthFinal,
          kind: 'main',
          test,
          beats,
        });

        // M30 之外，若块内还有 #### 结算分支（章节末），也收
        if (node.children.length) {
          const stageNo = stageOf(t, monthFinal);
          const subs = node.children.filter((c) => sectionKind(c.text));
          if (stageNo && subs.length) {
            stages[stageNo] = stages[stageNo] || { pass: [], failId: '', failBeats: [] };
            for (const sub of subs) {
              const kind = sectionKind(sub.text);
              const r = parseBlock(sub.lines, { title: sub.text });
              if (kind === 'pass') stages[stageNo].pass = r.beats;
              else {
                stages[stageNo].failBeats = r.beats;
                stages[stageNo].failId = r.meta.ids[0] || '';
                if (r.meta.ids.length) {
                  add({
                    id: r.meta.ids[0],
                    ids: r.meta.ids,
                    title: shortTitle(sub.text, r.beats),
                    chapter: chapTitle,
                    month: null,
                    kind: 'short',
                    test: null,
                    beats: r.beats,
                  });
                }
              }
            }
          }
        }
      }
      continue;
    }

    /* 附篇一：四种经营风格 */
    if (/^附篇一/.test(chapTitle)) {
      for (const node of chapter.children) {
        const { beats, meta } = parseBlock(node.lines, { title: node.text });
        const test = meta.cond || parseCondText(node.text) || {};
        add({
          id: meta.ids[0] || 'EVT_STYLE_' + order,
          ids: meta.ids,
          title: cleanTitle(node.text),
          chapter: chapTitle,
          month: null,
          kind: 'style',
          test,
          beats,
        });
      }
      continue;
    }

    /* 附篇二：与苏晴的每月友情互动（每月一段，按月份索引） */
    if (/^附篇二/.test(chapTitle)) {
      for (const node of chapter.children) {
        const m = node.text.match(/^M(\d+)\s*[｜|]\s*(.+)$/);
        if (!m) continue;
        const month = Number(m[1]);
        // 「第一章互动：…」这类分组标题只是排版用，不进台词
        const lines = node.lines.filter((l) => !/^\*\*第.+章互动/.test(l.trim()));
        const r = parseBlock(lines, { title: m[2] });
        const id = r.meta.ids[0] || 'EVT_FRIEND_M' + month;
        const ev = {
          id,
          ids: r.meta.ids.length ? r.meta.ids : [id],
          title: m[2],
          chapter: '与苏晴的每月互动',
          month,
          kind: 'friend',
          test: null,
          beats: r.beats,
        };
        friend[month] = ev;
        add(ev);
      }
      continue;
    }

    /* 附篇三：新手教程（按 T1—T7 顺序，不参与月份推进） */
    if (/^附篇三/.test(chapTitle)) {
      let order = 0;
      for (const node of chapter.children) {
        const m = node.text.match(/^(T\d+)\s*[｜|]\s*(.+)$/);
        if (!m) continue;
        const r = parseBlock(node.lines, { title: m[2] });
        const id = r.meta.ids[0] || 'EVT_TUTORIAL_' + m[1];
        add({
          id,
          ids: r.meta.ids.length ? r.meta.ids : [id],
          title: m[2],
          chapter: '新手教程',
          month: null,
          kind: 'tutorial',
          order: order++,
          test: null,
          beats: r.beats,
        });
      }
      continue;
    }

    /* 附篇三：新手教程（按 T1—T7 顺序，不参与月份推进） */
    if (/^附篇三/.test(chapTitle)) {
      let order = 0;
      for (const node of chapter.children) {
        const m = node.text.match(/^(T\d+)\s*[｜|]\s*(.+)$/);
        if (!m) continue;
        const r = parseBlock(node.lines, { title: m[2] });
        const id = r.meta.ids[0] || 'EVT_TUTORIAL_' + m[1];
        add({
          id,
          ids: r.meta.ids.length ? r.meta.ids : [id],
          title: m[2],
          chapter: '新手教程',
          month: null,
          kind: 'tutorial',
          order: order++,
          test: null,
          beats: r.beats,
        });
      }
      continue;
    }

    /* 第十三章：最终结局 + 伙伴个人结局 */
    if (/^第十三章/.test(chapTitle)) {
      for (const node of chapter.children) {
        if (/^13\.7/.test(node.text)) {
          // 伙伴个人结局档案
          for (const sub of node.children) {
            const pid = partnerKeyFromTitle(sub.text);
            if (!pid) continue;
            const list = [];
            for (const raw of sub.lines) {
              const line = raw.trim();
              // 触发条件只是给编辑者看的说明，不进展示文本
              if (/^【触发条件/.test(line)) continue;
              const m = line.match(/^[-*]\s*\*\*【(.+?)】\*\*\s*(.*)$/);
              if (m) {
                list.push({ title: m[1], text: (m[2] || '').trim() });
              } else if (list.length && line && !/^[-*#]/.test(line)) {
                // 多行正文按段落换行拼起来，弹层里会保留分行
                list[list.length - 1].text += (list[list.length - 1].text ? '\n' : '') + line;
              }
            }
            if (list.length) partnerEndings[pid] = list;
          }
          continue;
        }
        const { beats, meta } = parseBlock(node.lines, { title: node.text });
        if (!meta.ids.length) continue;
        add({
          id: meta.ids[0],
          ids: meta.ids,
          title: cleanTitle(node.text),
          chapter: chapTitle,
          month: null,
          kind: 'final',
          test: null,
          beats,
        });
      }
      continue;
    }

    /* 第十四章：图鉴附录 */
    if (/^第十四章/.test(chapTitle)) {
      for (const node of chapter.children) {
        for (const raw of node.lines) {
          const line = raw.trim();
          const row = line.match(/^\|\s*(M\d+|初始)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/);
          if (row) {
            const file = row[3].replace(/`/g, '').trim();
            const id = file.replace(/^cake-/, '');
            if (id) codex[id] = { hint: row[4].trim(), flavor: row[5].trim() };
            continue;
          }
          const city = line.match(/^\d+\.\s*\*\*(.+?)（.*?）\*\*[：:]\s*(.+)$/);
          if (city) cityText[city[1]] = city[2];
        }
      }
      continue;
    }

    // 其他章节（如「## 第一章」之外的说明）忽略
  }

  if (!events.length) warnings.push('没有解析出任何事件，检查 v5_0.md 是否还在根目录');

  const story = { events, stages, friend, codex, cityText, partnerEndings, warnings };
  story.find = (id) => events.find((e) => e.id === id || (e.ids || []).includes(id)) || null;
  return story;
}

function cleanTitle(t) {
  return t
    .replace(/^M\d+\s*[｜|]\s*/, '')
    .replace(/[（(]\s*(?:含|可选)[^）)]*[）)]/g, '')
    .replace(/^【|】$/g, '')
    .trim();
}

function shortTitle(heading, beats) {
  const m = heading.match(/《(.+?)》/);
  if (m) return m[1];
  const first = beats.find((b) => b.t === 'nar');
  return first ? first.text.slice(0, 12) : heading;
}

function sectionKind(text) {
  if (!text) return '';
  if (/未达标/.test(text)) return 'fail';
  if (/达标/.test(text)) return 'pass';
  return '';
}

function stageOf(text, month) {
  const m = text.match(/第([一二三四五六])阶段/);
  if (m) return NUM[m[1]];
  if (month) return Math.ceil(month / 6);
  return null;
}

function partnerKeyFromTitle(text) {
  if (/周雨桐|小雨/.test(text)) return 'xiaoyu';
  if (/许知遥/.test(text)) return 'zhiyao';
  if (/唐鸢/.test(text)) return 'kexin';
  if (/叶星河/.test(text)) return 'qinghe';
  if (/林暖/.test(text)) return 'mom';
  return '';
}

function parseSideEvents(md, storyline, orderStart) {
  const events = [];
  const tree = buildTree(md);
  const walk = (node) => {
    const text = node.lines.join('\n');
    const idMatch = text.match(/【[^】]*事件ID[：:]\s*`?(EVT_(?:MOM|ZHIQIU)_[A-Z0-9_]+)/);
    if (idMatch) {
      const id = idMatch[1];
      const parsed = parseBlock(node.lines, { title: node.text });
      const source = node.text + '\n' + text;
      const monthMatch = source.match(/M(\d+)/);
      const headingTitle = node.text.split(/[｜|]/).pop().trim();
      const bond = source.match(/familyHarmony\s*\+\s*(\d+)/);
      const keepsake = source.match(/(?:解锁|补全)旧物收藏《([^》]+)》/);
      const trigger = source.match(/(?:插入节点|具体插入节点)[^\n】]*第(\d+)个经营日/);
      const cgNum = source.match(/(?:母女)?CG\s*(\d+)/);
      const bondGate = source.match(/familyHarmony\s*[≥>=]+\s*(\d+)/);
      const keepsakeName = keepsake ? keepsake[1].replace(/[（(].*?[）)]/g, '') : '';
      events.push({
        id,
        ids: [id],
        title: headingTitle || cleanTitle(node.text),
        chapter: storyline === 'mom' ? '林暖 · 和妈妈聊聊' : '沈知秋 · 秋屿来信',
        month: monthMatch ? Number(monthMatch[1]) : null,
        day: trigger ? Number(trigger[1]) : 1,
        kind: storyline,
        storyline,
        bondGain: bond ? Number(bond[1]) : 0,
        bondRequired: bondGate ? Number(bondGate[1]) : 0,
        keepsake: keepsakeName,
        cgId: cgNum ? (storyline === 'zhiQiu' ? 'zhiqiu' : 'mom') + '-' + String(cgNum[1]).padStart(2, '0') : '',
        beats: parsed.beats,
        order: orderStart + events.length,
      });
    }
    node.children.forEach(walk);
  };
  tree.children.forEach(walk);
  if (storyline === 'zhiQiu') {
    const invitations = {
      EVT_ZHIQIU_CH02: '念念，这周的试饮咖啡豆已经养好豆了，今天下午四点带几款标准蛋糕样品来秋屿坐坐吧。',
      EVT_ZHIQIU_CH06_A: '念念，关于我一直想做的那份《栖云四季》菜单，今天上午忙完备料我有空过来找你聊聊吗？',
    };
    events.forEach((event) => {
      if (invitations[event.id]) event.beats.unshift({ t: 'phoneMessage', who: '沈知秋', emo: '手机消息', text: invitations[event.id] });
    });
    const findFinale = (node) => {
      if (/第三幕：心愿达成/.test(node.text)) return node;
      for (const child of node.children) {
        const found = findFinale(child);
        if (found) return found;
      }
      return null;
    };
    const finale = findFinale(tree);
    const winter = events.find((event) => event.id === 'EVT_ZHIQIU_CH06_WIN');
    if (finale && winter) {
      const closing = parseBlock(finale.lines, { title: finale.text });
      winter.beats.push({ t: 'scene', text: '秋屿咖啡 · 四季菜单发布' }, ...closing.beats);
    }
  }
  return events;
}

function parseCustomerEvents(md, orderStart) {
  const events = [];
  const tree = buildTree(md);
  const people = {
    GRANNY: '张奶奶',
    UNCLE: '陈叔',
    XIAOMAN: '小满',
    CROSS: '常客们',
  };
  const walk = (node) => {
    if (node.level >= 3 && /^(?:\d+\.\s*)?M\d+/.test(node.text) && !/详见/.test(node.text)) {
      const text = node.lines.join('\n');
      const idMatch = text.match(/事件ID[：:]\s*`?(EVT_(?:GRANNY|UNCLE|XIAOMAN|CROSS)_[A-Z0-9_]+)/);
      if (idMatch && idMatch[1] !== 'EVT_UNCLE_M28') {
        const id = idMatch[1];
        const parsed = parseBlock(node.lines, { title: node.text });
        const source = node.text + '\n' + text;
        const month = source.match(/M(\d+)/);
        const trigger = source.match(/(?:插入节点|具体插入节点)[^\n】]*第(\d+)个经营日/);
        const heading = node.text.replace(/^\d+\.\s*/, '').split(/[｜|]/).pop().trim();
        const titled = heading.match(/《([^》]+)》/);
        const title = titled ? titled[1] : heading.replace(/^M\d+\s*/, '').replace(/^共同剧情[：:]?\s*/, '').replace(/[（(].*/, '').trim();
        const group = id.indexOf('EVT_CROSS_') === 0;
        const owner = id.match(/^EVT_(GRANNY|UNCLE|XIAOMAN|CROSS)_/);
        events.push({
          id,
          ids: [id],
          title: title || cleanTitle(node.text),
          chapter: '常客 · ' + people[owner ? owner[1] : 'CROSS'],
          month: month ? Number(month[1]) : null,
          day: trigger ? Number(trigger[1]) : 1,
          kind: 'regular',
          storyline: 'regular',
          regularPerson: people[owner ? owner[1] : 'CROSS'],
          group,
          beats: parsed.beats,
          order: orderStart + events.length,
        });
      }
    }
    node.children.forEach(walk);
  };
  tree.children.forEach(walk);
  return events;
}

const parsedStory = parseStory(raw);
const momEvents = parseSideEvents(momRaw, 'mom', parsedStory.events.length);
const zhiQiuEvents = parseSideEvents(zhiQiuRaw, 'zhiQiu', parsedStory.events.length + momEvents.length);
const customerEvents = parseCustomerEvents(regularRaw, parsedStory.events.length + momEvents.length + zhiQiuEvents.length);
const bySchedule = (a, b) => a.month - b.month || a.day - b.day || a.order - b.order;
momEvents.sort(bySchedule);
zhiQiuEvents.sort(bySchedule);
customerEvents.sort(bySchedule);
parsedStory.events.push(...momEvents, ...zhiQiuEvents, ...customerEvents);
parsedStory.mom = momEvents;
parsedStory.zhiQiu = zhiQiuEvents;
parsedStory.customers = customerEvents;
parsedStory.prologue = parsedStory.events.find((event) => event.kind === 'prologue' && event.beats.length) || {
  id: 'EVT_PROLOGUE_01',
  ids: ['EVT_PROLOGUE_01'],
  title: '序幕 · 回家',
  month: 0,
  kind: 'prologue',
  beats: [
    { t: 'cg', key: 'graduation-rejection' },
    { t: 'scene', text: '大学宿舍' },
    { t: 'nar', text: '六月的阳光透过宿舍窗帘照在书桌上。林念刷新邮箱后，又收到了一封婉拒信。她收拾好行李，决定先回栖云镇看看。' },
  ],
};
parsedStory.find = (id) => parsedStory.events.find((e) => e.id === id || (e.ids || []).includes(id)) || null;

export const STORY = parsedStory;

if (typeof console !== 'undefined') {
  const kinds = {};
  STORY.events.forEach((e) => (kinds[e.kind] = (kinds[e.kind] || 0) + 1));
  let choices = 0;
  let options = 0;
  STORY.events.forEach((e) => {
    (e.beats || []).forEach((b) => {
      if (b.t === 'choice') {
        choices += 1;
        options += b.options.length;
      }
    });
  });
  console.log(
    '[剧情] 已加载 ' + STORY.events.length + ' 个事件（' +
      Object.keys(kinds).map((k) => k + ' ' + kinds[k]).join('，') +
      '），友情互动 ' + Object.keys(STORY.friend).length + ' 段，阶段结算 ' + Object.keys(STORY.stages).length +
      ' 组，选择 ' + choices + ' 处 / ' + options + ' 项'
  );
  if (STORY.warnings.length) STORY.warnings.forEach((w) => console.warn('[剧情] ' + w));
}
