import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  averagePipingScore,
  createPipingRun,
  pipingThresholds,
  restorePipingCheckpoint,
  scorePipingClick,
  shortestAngleDistance,
} from '../src/pages/minigames/piping.js';

const levelOne = pipingThresholds(1);
const levelFive = pipingThresholds(5);
assert.deepEqual(levelOne, { perfect: 11, close: 18, poor: 26 });
assert.deepEqual(levelFive, { perfect: 6, close: 11, poor: 16 });
assert.equal(shortestAngleDistance(359, 0), 1);
assert.equal(shortestAngleDistance(0, 359), 1);
assert.deepEqual([11, 18, 26, 27].map((angle) => scorePipingClick(angle, 0).score), [100, 70, 30, 0]);
assert.deepEqual([6, 11, 16, 17].map((angle) => scorePipingClick(angle, 0, 5).score), [100, 70, 30, 0]);

const run = createPipingRun(() => 0.5);
assert.equal(run.targets.length, 6);
assert.equal(run.speed, 60);
assert(run.speed >= 54 && run.speed <= 66);
assert.equal(run.current, 0);
assert.equal(new Set(run.targets).size, 6);
for (let i = 0; i < run.targets.length; i += 1) {
  for (let j = i + 1; j < run.targets.length; j += 1) {
    assert(shortestAngleDistance(run.targets[i], run.targets[j]) >= 35);
  }
}
assert.equal(averagePipingScore(Array.from({ length: 6 }, () => ({ score: 0 }))), 0);
assert.equal(averagePipingScore(Array.from({ length: 6 }, () => ({ score: 100 }))), 100);
assert.equal(averagePipingScore([{ score: 100 }]), null);

const legacy = restorePipingCheckpoint({
  phase: 'decoration', picked: ['base'], mix: 79, bake: 80, heat: 175,
  scores: { materials: 100, mix: 100, oven: 97, garnish: 45 },
}, () => 0.5);
assert.equal(legacy.phase, 'piping');
assert.equal(legacy.migrated, true);
assert.equal(legacy.scores.garnish, 0);
assert.equal(legacy.scores.oven, 97);
assert.equal(legacy.piping.results.length, 0);

const savedRun = { ...run, current: 2, results: [{ score: 70 }, { score: 0 }] };
const savedCheckpoint = JSON.parse(JSON.stringify({ phase: 'piping', scores: { mix: 90 }, piping: savedRun }));
const restored = restorePipingCheckpoint(savedCheckpoint);
assert.equal(restored.migrated, false);
assert.deepEqual(restored.piping, savedRun);

const bakingSource = await readFile(new URL('../src/pages/minigames/BakingGame.vue', import.meta.url), 'utf8');
const deliverySource = await readFile(new URL('../src/pages/minigames/DeliveryGame.vue', import.meta.url), 'utf8');
assert.match(bakingSource, /class="quality-zone"/);
assert.match(bakingSource, /left:72%;top:-1px;width:14%/);
for (const flower of ['classic', 'berry', 'cocoa', 'taro', 'matcha', 'mango', 'tiramisu', 'fig', 'seasonal', 'custom', 'festival', 'signature']) {
  assert(bakingSource.includes(`flower: '${flower}'`), `缺少 ${flower} 蛋糕裱花样式`);
}
assert.match(bakingSource, /\['ingredients', 'mix', 'oven', 'decoration', 'piping'\]/);
assert.match(bakingSource, /results: \[\.\.\.piping\.value\.results\]/);
assert.match(bakingSource, /@pointerup="finishMix"/);
assert.match(bakingSource, /@pointerup="finishOven"/);
assert.doesNotMatch(bakingSource, /确认搅拌结果|蛋糕胚出炉 →|转速 \{\{ piping\?\.speed/);
assert.match(bakingSource, /if \(entries\.length === 6\) finish\(\)/);
const packingScreen = deliverySource.match(/<div v-if="packing" class="packing-mask">([\s\S]*?)<div v-if="phase === 'result'/)?.[1] || '';
assert(packingScreen, '打包遮罩应有独立显示层');
assert.doesNotMatch(packingScreen, /game-progress|packTime|秒|完整播放后递交/);
assert.match(packingScreen, /packError[\s\S]*?重试/);
assert.match(deliverySource, /ticket\.status !== 'ready' \|\| packSettled\.value/);
console.log('✓ 裱花目标、角度判定、四档评分、六次平均和旧存档迁移验证通过');
