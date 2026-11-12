import { PRODUCTS, RECIPE_INGREDIENTS } from './data';

export const FLAVOR_DIRECTIONS = ['清爽果香', '绵甜柔和', '醇厚浓香'];
export const RATIO_LEVELS = ['偏少', '均衡', '偏多'];
export const DECORATION_LEVELS = ['简约点缀', '日常装饰', '丰富装饰'];
export const DECORATION_SCORES = [72, 90, 100];
export const COST_SCORES = [100, 90, 72];

export const RESEARCH_TASKS = {
  taro: {
    direction: 1, ratio: 0, process: 1,
    theme: '做出绵软、微甜，又有清脆夹心的层次。',
    focus: '芋泥夹层要先冷却，薄脆尽量靠近售卖时再组合。',
    ratioLabel: '芋泥甜度',
    processes: ['趁热把薄脆拌进芋泥', '芋泥冷却后分层夹入薄脆', '把薄脆压碎拌入奶油'],
    distractors: ['蜜红豆', '轻盈慕斯'],
  },
  matcha: {
    direction: 0, ratio: 0, process: 1,
    theme: '让茶香清新微苦，红豆甜味恰好托住回甘。',
    focus: '抹茶少量多次加入，避免高温久烤带出苦味。',
    ratioLabel: '抹茶用量',
    processes: ['一次加入全部抹茶并延长烘烤', '分次拌入抹茶并缩短烘烤', '先加红豆再用热奶油冲抹茶'],
    distractors: ['台农芒果泥', '动物奶油'],
  },
  mango: {
    direction: 0, ratio: 1, process: 2,
    theme: '突出成熟芒果的清香，同时保留慕斯的轻盈。',
    focus: '尝过果泥再调甜度，冷藏定型后再装饰。',
    ratioLabel: '果泥与慕斯比例',
    processes: ['慕斯远多于果泥', '果泥和慕斯大致平衡', '大量果泥直接拌入温热慕斯'],
    distractors: ['蜜红豆', '轻奶油'],
  },
  tiramisu: {
    direction: 2, ratio: 1, process: 1,
    theme: '咖啡香醇厚，但奶酪仍要保留轻柔回甘。',
    focus: '手指饼干快速蘸取咖啡液，留住内部结构。',
    ratioLabel: '咖啡液浓度',
    processes: ['让饼干长时间浸泡', '快速蘸取后分层冷藏', '用咖啡液直接冲入奶酪'],
    distractors: ['可可胚', '金桂冻'],
  },
  fig: {
    direction: 0, ratio: 0, process: 2,
    theme: '让无花果的清甜成为主角，奶油只做轻柔衬托。',
    focus: '选熟度合适的无花果，最后轻放在冷却奶油上。',
    ratioLabel: '无花果用量',
    processes: ['无花果和奶油长时间打发', '烤前放入无花果', '奶油冷却后再铺鲜果'],
    distractors: ['浓缩咖啡液', '高山秋栗'],
  },
  seasonal: {
    direction: 0, ratio: 1, process: 1,
    theme: '让当季水果有层次，甜度不盖住果香。',
    focus: '按季节更换鲜果，果肉与夹心分层组合。',
    ratioLabel: '鲜果与夹心比例',
    processes: ['将所有水果打成同一层果泥', '保留果肉并与夹心分层', '增加糖浆并把水果提前烤干'],
    distractors: ['传统红曲', '蜜红豆'],
  },
  custom: {
    direction: 1, ratio: 1, process: 0,
    theme: '按顾客想要的口味设计，同时保证切分时结构稳定。',
    focus: '先确认承重胚，再固定夹层和手工裱花。',
    ratioLabel: '夹层与蛋糕胚比例',
    processes: ['使用双层承重胚，逐层固定裱花', '把全部夹层叠在单层软胚上', '先装饰外层再填入夹心'],
    distractors: ['金桂冻', '波姬红无花果'],
  },
  festival: {
    direction: 1, ratio: 1, process: 2,
    theme: '在节日氛围里保留熟悉的团圆风味。',
    focus: '传统红曲或栗蓉搭配节庆装饰，出炉冷却后再包装。',
    ratioLabel: '馅料与蛋糕胚比例',
    processes: ['热蛋糕出炉后立刻装入礼盒', '把装饰和馅料一同长时间烘烤', '冷却定型后装饰并包装'],
    distractors: ['鲜草莓', '浓缩咖啡液'],
  },
  signature: {
    direction: 2, ratio: 0, process: 1,
    theme: '复原外婆的桂花栗子蛋糕，让秋栗醇厚、金桂清雅。',
    focus: '栗子甜则少放糖，桂花冻冷却后分层夹入，装盒前现撒金桂。',
    ratioLabel: '额外糖量',
    processes: ['趁热把金桂干花拌进栗子泥', '桂花冻冷却后作为独立夹层', '桂花冻趁热浸入戚风胚'],
    distractors: ['桂花蜜', '动物奶油'],
  },
};

export const IMPROVEMENTS = {
  plain: {
    question: '原味奶油蛋糕切开后有些干，奶油也盖住了戚风的香气。',
    options: ['增加糖浆并厚涂奶油', '缩短烘烤，并减薄奶油层', '延长烘烤，让外皮更脆'],
    correct: 1,
    feedback: '先守住戚风的湿润度，再让奶油薄薄衬托。',
  },
  strawberry: {
    question: '顾客觉得奶油有些腻，草莓的酸甜味不够明显。',
    options: ['减少奶油，增加草莓夹层', '延长蛋糕胚烘烤时间', '改变表面装饰颜色'],
    correct: 0,
    feedback: '把奶油减薄，并增加草莓果味层。',
  },
  chocolate: {
    question: '巧克力蛋糕入口偏苦，回味也显得厚重。',
    options: ['加入更多纯可可粉', '减少甘纳许并调和可可浓度', '增加烘烤时间让水分散尽'],
    correct: 1,
    feedback: '适当收住甘纳许和可可的浓度，保留香气即可。',
  },
  taro: {
    question: '芋泥薄脆放一会儿就不脆了。',
    options: ['把薄脆提前拌进热芋泥', '芋泥冷却后分层，临近售卖再组合', '把薄脆泡进奶油里'],
    correct: 1,
    feedback: '减少水分接触，让薄脆临近售卖时再入层。',
  },
  matcha: {
    question: '抹茶的苦味有些突出，蜜红豆也不明显。',
    options: ['增加红豆层并略减抹茶', '增加抹茶粉并减少红豆', '把红豆打成糖浆淋面'],
    correct: 0,
    feedback: '略减抹茶浓度，让蜜红豆的甜味接住茶香。',
  },
  mango: {
    question: '芒果慕斯吃起来偏腻，果香不够明亮。',
    options: ['增加慕斯比例', '使用成熟芒果泥并平衡慕斯比例', '延长烘烤芒果泥的时间'],
    correct: 1,
    feedback: '用熟芒果的果香提亮口味，保持慕斯轻盈。',
  },
  tiramisu: {
    question: '提拉米苏底层的手指饼干湿软散开了。',
    options: ['延长咖啡浸泡时间', '快速蘸咖啡液后立即分层冷藏', '增加咖啡液并拌入奶酪'],
    correct: 1,
    feedback: '饼干快速蘸取咖啡液即可，避免吸水过多。',
  },
  fig: {
    question: '无花果奶油看起来漂亮，但吃不出鲜果香。',
    options: ['增加奶油厚度', '烘烤时加入更多无花果', '冷却后铺上新鲜无花果'],
    correct: 2,
    feedback: '最后加入新鲜果肉，保留无花果的香气和口感。',
  },
  seasonal: {
    question: '季节水果蛋糕层次混在一起，果味不够清楚。',
    options: ['保留果肉并和夹心分层', '把水果全部打成泥', '增加糖浆覆盖水果'],
    correct: 0,
    feedback: '保留果肉口感，再用独立夹层表现季节变化。',
  },
  custom: {
    question: '生日定制蛋糕切分时夹层容易倾斜。',
    options: ['改用双层承重胚并逐层固定', '增加顶部裱花重量', '使用单层软胚并增加夹心'],
    correct: 0,
    feedback: '先稳定承重结构，再逐层填入夹心和装饰。',
  },
  festival: {
    question: '节日限定蛋糕节庆感很足，味道却有些平淡。',
    options: ['增加礼盒装饰层数', '选择红曲或栗蓉馅料，冷却后再包装', '延长礼盒内的回温时间'],
    correct: 1,
    feedback: '用红曲或栗蓉明确节日风味，并在冷却后包装。',
  },
  signature: {
    question: '栗子甜度合适，但桂花香气不够鲜明。',
    options: ['增加糖量并提前烤入桂花', '桂花冻冷却分层，装盒前现撒金桂', '把桂花干花打碎混进戚风胚'],
    correct: 1,
    feedback: '沿用外婆手记：桂花冻冷却分层，装盒前再现撒金桂。',
  },
};

function sorted(values) {
  return [...new Set(Array.isArray(values) ? values : [])].sort();
}

function coreIngredientsCorrect(productId, ingredients) {
  const selected = sorted(ingredients);
  return (RECIPE_INGREDIENTS[productId] || []).some((combo) => {
    const answer = sorted(combo);
    return answer.length === selected.length && answer.every((item, index) => item === selected[index]);
  });
}

function feedbackFor({ coreCorrect, directionCorrect, ratioOffset, processCorrect, decoration }) {
  const feedback = [];
  if (!coreCorrect) feedback.push('核对图鉴中的核心食材，选齐后再做风味判断。');
  if (!directionCorrect) feedback.push('风味方向和产品主题不太协调。');
  if (ratioOffset) feedback.push('调整主料比例，让主要食材的味道更突出。');
  if (!processCorrect) feedback.push('工艺还需要照顾这款蛋糕的口感结构。');
  if (decoration === 2) feedback.push('装饰丰富，外观加分；制作成本也相应提高。');
  if (decoration === 0) feedback.push('简约装饰控制了成本，可以再考虑提升展示效果。');
  if (!feedback.length) feedback.push('四项都很协调，可以考虑正式上架。');
  return feedback;
}

export function evaluateResearchTrial(productId, attempt) {
  const task = RESEARCH_TASKS[productId];
  if (!task) return null;
  const coreCorrect = coreIngredientsCorrect(productId, attempt.ingredients);
  const directionCorrect = attempt.direction === task.direction;
  const ratioOffset = Math.abs(attempt.ratio - task.ratio);
  const processCorrect = attempt.process === task.process;
  const decoration = attempt.decoration;
  if (![0, 1, 2].includes(attempt.direction) || ![0, 1, 2].includes(attempt.ratio) ||
      ![0, 1, 2].includes(attempt.process) || ![0, 1, 2].includes(decoration)) return null;

  const flavor = Math.max(0, (directionCorrect ? 100 : 65) - ratioOffset * 15 - (coreCorrect ? 0 : 45));
  const texture = processCorrect ? 100 : 60;
  const appearance = DECORATION_SCORES[decoration];
  const cost = COST_SCORES[decoration];
  const score = Math.round((flavor + texture + appearance + cost) / 4);
  return {
    type: 'development', productId, ingredients: sorted(attempt.ingredients),
    direction: attempt.direction, ratio: attempt.ratio, process: attempt.process, decoration,
    coreCorrect, scores: { flavor, texture, appearance, cost }, score,
    passed: coreCorrect && score >= 75,
    refined: coreCorrect && score >= 90,
    feedback: feedbackFor({ coreCorrect, directionCorrect, ratioOffset, processCorrect, decoration }),
  };
}

export function evaluateSignatureTrial(attempt) {
  if (!attempt || ![0, 1, 2].includes(attempt.sugar) || ![0, 1, 2].includes(attempt.filling) ||
      ![0, 1, 2].includes(attempt.garnish)) return null;
  const coreCorrect = coreIngredientsCorrect('signature', attempt.ingredients);
  const sugarCorrect = attempt.sugar === 0;
  const fillingCorrect = attempt.filling === 1;
  const garnishCorrect = attempt.garnish === 2;
  const scores = {
    flavor: Math.max(0, (sugarCorrect ? 100 : 60) - (coreCorrect ? 0 : 45)),
    texture: fillingCorrect ? 100 : 55,
    appearance: garnishCorrect ? 100 : 65,
    cost: coreCorrect ? 90 : 65,
  };
  const score = Math.round(Object.values(scores).reduce((sum, value) => sum + value, 0) / 4);
  const feedback = [];
  if (!coreCorrect) feedback.push('请按手记选齐高山秋栗、金桂冻和戚风胚。');
  if (!sugarCorrect) feedback.push('甜栗本身够甜时，要减少额外糖量。');
  if (!fillingCorrect) feedback.push('桂花冻冷却后单独夹入，才能保留清楚的层次。');
  if (!garnishCorrect) feedback.push('装盒前现撒金桂，香气会更鲜明。');
  if (!feedback.length) feedback.push('外婆手记的风味与做法都复原了。');
  return {
    type: 'signature', productId: 'signature', ingredients: sorted(attempt.ingredients),
    sugar: attempt.sugar, filling: attempt.filling, garnish: attempt.garnish,
    coreCorrect, scores, score,
    passed: coreCorrect && sugarCorrect && fillingCorrect && garnishCorrect && score >= 75,
    refined: coreCorrect && sugarCorrect && fillingCorrect && garnishCorrect && score >= 90,
    feedback,
  };
}

export function recipeOptions(productId) {
  const task = RESEARCH_TASKS[productId];
  return [...new Set([...(RECIPE_INGREDIENTS[productId] || []).flat(), ...(task?.distractors || [])])];
}

export function availableResearchProducts(month, unlocked) {
  return PRODUCTS.filter((product) => product.month > 0 && product.month <= month && !unlocked.includes(product.id));
}

export function improvementFor(productId) {
  return IMPROVEMENTS[productId] || null;
}
