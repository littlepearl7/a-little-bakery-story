/**
 * 剧情解析器 V5。
 *
 * 唯一数据源是项目根目录的 v5_0.md —— 改那个文件就改剧情，不用动代码。
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

import raw from '../v5_0.md?raw';

/* ---------------- 名词表 ---------------- */

const NAMES = {
  林念: '林念',
  苏晴: '苏晴',
  林暖: '林暖',
  周雨桐: '周雨桐',
  小雨: '周雨桐',
  许知遥: '许知遥',
  知遥: '许知遥',
  唐可欣: '唐可欣',
  可欣: '唐可欣',
  叶清禾: '叶清禾',
  清禾: '叶清禾',
  陈奶奶: '陈奶奶',
  许佳宁: '许佳宁',
  沈妍: '沈妍',
  顾客: '顾客',
};

export const PARTNER_OF = { 周雨桐: 'xiaoyu', 许知遥: 'zhiyao', 唐可欣: 'kexin', 叶清禾: 'qinghe' };
export const PARTNER_NICK = { xiaoyu: '小雨', zhiyao: '知遥', kexin: '可欣', qinghe: '清禾' };

const STYLE_NAME = { tradition: '传统', innovation: '创新', efficiency: '效率', community: '社区' };
const NUM = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 };

/** 行首是已知角色名 + 可选表情 + 少量动作描写 + 冒号 → 台词 */
const SPEAK_RE =
  /^(林念|苏晴|林暖|周雨桐|许知遥|唐可欣|叶清禾|陈奶奶|许佳宁|沈妍|小雨|知遥|可欣|清禾|顾客)(?:（([^）]{1,12})）)?([^：:]{0,24})[：:]\s*(.+)$/;

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

function parseGains(text, ctxPartner) {
  const out = [];
  if (!text) return out;

  for (const m of text.matchAll(/(tradition|innovation|efficiency|community)Score\s*\+\s*(\d+)/g)) {
    out.push({ k: 'style', id: m[1], v: Number(m[2]), label: STYLE_NAME[m[1]] + ' +' + m[2] });
  }

  for (const m of text.matchAll(/(小雨|知遥|可欣|清禾|周雨桐|许知遥|唐可欣|叶清禾)信赖度\s*\+\s*(\d+)/g)) {
    const name = NAMES[m[1]];
    out.push({
      k: 'trust',
      id: PARTNER_OF[name],
      v: Number(m[2]),
      label: m[1] + '信赖 +' + m[2],
    });
  }

  for (const m of text.matchAll(/(小雨|知遥|可欣|清禾|周雨桐|许知遥|唐可欣|叶清禾)?专业能力\s*\+\s*(\d+)/g)) {
    const name = m[1] ? NAMES[m[1]] : ctxPartner;
    const pid = PARTNER_OF[name];
    if (!pid) continue;
    out.push({ k: 'skill', id: pid, v: Number(m[2]) / 10, label: (m[1] || PARTNER_NICK[pid]) + '专业 +' + m[2] });
  }

  // 不带名字的「信赖度 +N」按选项上下文里的角色算
  for (const m of text.matchAll(/(?<![小知可清])(?<![周许唐叶])信赖度\s*\+\s*(\d+)/g)) {
    const pid = PARTNER_OF[ctxPartner];
    if (!pid) continue;
    if (out.some((g) => g.k === 'trust' && g.id === pid)) continue;
    out.push({ k: 'trust', id: pid, v: Number(m[1]), label: PARTNER_NICK[pid] + '信赖 +' + m[1] });
  }

  if (/顾客忠诚度增加|忠诚度提升/.test(text)) out.push({ k: 'loyalty', v: 4, label: '忠诚 +4' });
  if (/友情值增加/.test(text)) out.push({ k: 'friend', v: 5, label: '友情 +5' });

  return out;
}

/* ---------------- 条件标记 ---------------- */

function parseCondText(text) {
  const test = {};
  let hit = false;

  const t = text.match(/(小雨|知遥|可欣|清禾|周雨桐|许知遥|唐可欣|叶清禾)信赖度\s*[≥>=]+\s*(\d+)/);
  if (t) {
    test.trust = { [PARTNER_OF[NAMES[t[1]]]]: Number(t[2]) };
    hit = true;
  }
  const mom = text.match(/家庭默契\s*[≥>=]+\s*(\d+)/);
  if (mom) {
    test.momBond = Number(mom[1]);
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
    target.push({
      t: 'say',
      who: NAMES[m[1]],
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

      const om = body.match(/^\*\s*\*\*选项([A-Z])[：:](.+?)\*\*(.*)$/);
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

      // 事件 ID / 触发条件 / 状态变更 / 初始状态 / 检查条件：元数据
      if (/^事件ID/.test(inner)) {
        const parts = inner.split('｜');
        parts.forEach((p) => {
          const idx = p.search(/[：:]/);
          if (idx < 0) return;
          const k = p.slice(0, idx).trim();
          const v = p.slice(idx + 1).trim();
          if (k === '事件ID') meta.ids.push(v);
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

      // 场景 / 回忆片段 → 场景分隔
      if (/^(场景|插入回忆|接续回忆|回忆片段|回到现在|闪回|时间|地点)/.test(inner)) {
        push({ t: 'scene', text: inner.replace(/^场景\s*[：:]\s*/, '') });
        if (rest) push({ t: 'nar', text: rest });
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

    pushProse(line, target());
    sawBlank = false;
  }

  // 选项没有分支时，用选项自身的 hint 当正文兜底
  if (curChoice) {
    curChoice.options.forEach((o) => {
      if (!o.branch.length) o.branch = [];
    });
  }

  meta.title = opts.title || '';
  return { beats, meta };
}

function guessPartner(text) {
  const m = text.match(/(小雨|知遥|可欣|清禾|周雨桐|许知遥|唐可欣|叶清禾)/);
  return m ? NAMES[m[1]] : '';
}

/* ---------------- 结构树 ---------------- */

function buildTree(md) {
  const root = { level: 1, text: '', lines: [], children: [] };
  const stack = [root];
  for (const raw of md.split(/\r?\n/)) {
    const h = raw.match(/^(#{1,4})\s+(.*)$/);
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
  const daily = [];
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

    /* 附篇二：苏晴日常互动 */
    if (/^附篇二/.test(chapTitle)) {
      let cur = null;
      for (const raw of chapter.lines) {
        const line = raw.trim();
        if (!line) continue;
        const h = line.match(/^(\d+)\.\s*\*\*【(.+?)】\*\*/);
        if (h) {
          cur = { id: 'DAILY_' + h[1], ids: ['DAILY_' + h[1]], title: h[2], kind: 'daily', month: null, test: null, beats: [] };
          daily.push(cur);
          continue;
        }
        if (!cur) continue;
        const b = [];
        pushProse(line.replace(/^[*\-]\s*/, ''), b);
        b.forEach((x) => cur.beats.push(x));
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
              const m = line.match(/^\*\s*\*\*【(.+?)】\*\*\s*(.*)$/);
              if (m) {
                list.push({ title: m[1], text: m[2] });
              } else if (list.length && line) {
                list[list.length - 1].text += line;
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

  const story = { events, stages, daily, codex, cityText, partnerEndings, warnings };
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
  if (/唐可欣/.test(text)) return 'kexin';
  if (/叶清禾/.test(text)) return 'qinghe';
  if (/林暖/.test(text)) return 'mom';
  return '';
}

export const STORY = parseStory(raw);

if (typeof console !== 'undefined') {
  const kinds = {};
  STORY.events.forEach((e) => (kinds[e.kind] = (kinds[e.kind] || 0) + 1));
  console.log(
    '[剧情] 已加载 ' + STORY.events.length + ' 个事件（' +
      Object.keys(kinds).map((k) => k + ' ' + kinds[k]).join('，') +
      '），日常互动 ' + STORY.daily.length + ' 段，阶段结算 ' + Object.keys(STORY.stages).length + ' 组'
  );
  if (STORY.warnings.length) STORY.warnings.forEach((w) => console.warn('[剧情] ' + w));
}
