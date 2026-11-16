export const PIPING_TARGET_COUNT = 6;

export function createPipingRun(random = Math.random) {
  const offset = random() * 360;
  const targets = Array.from({ length: PIPING_TARGET_COUNT }, (_, index) =>
    (offset + index * 60 + (random() - 0.5) * 24 + 360) % 360,
  );
  for (let index = targets.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [targets[index], targets[swap]] = [targets[swap], targets[index]];
  }
  return {
    targets,
    speed: 54 + random() * 12,
    angle: random() * 360,
    current: 0,
    results: [],
  };
}

export function pipingThresholds(level = 1) {
  const value = Number(level);
  const progress = Math.max(0, Math.min(4, (Number.isFinite(value) ? value : 1) - 1)) / 4;
  return {
    perfect: 11 - 5 * progress,
    close: 18 - 7 * progress,
    poor: 26 - 10 * progress,
  };
}

export function shortestAngleDistance(left, right) {
  const difference = (((Number(left) - Number(right)) % 360) + 360) % 360;
  return Math.min(difference, 360 - difference);
}

export function scorePipingClick(angle, target, level = 1) {
  const difference = shortestAngleDistance(angle, target);
  const limits = pipingThresholds(level);
  if (difference <= limits.perfect) return { score: 100, tier: 'perfect', difference };
  if (difference <= limits.close) return { score: 70, tier: 'close', difference };
  if (difference <= limits.poor) return { score: 30, tier: 'poor', difference };
  return { score: 0, tier: 'miss', difference };
}

export function averagePipingScore(results) {
  if (!Array.isArray(results) || results.length !== PIPING_TARGET_COUNT) return null;
  return Math.round(results.reduce((sum, result) => sum + result.score, 0) / PIPING_TARGET_COUNT);
}

export function restorePipingCheckpoint(checkpoint, random = Math.random) {
  if (checkpoint?.phase === 'decoration') {
    return {
      ...checkpoint,
      phase: 'piping',
      garnish: '',
      scores: { ...checkpoint.scores, garnish: 0 },
      piping: createPipingRun(random),
      migrated: true,
    };
  }
  if (checkpoint?.phase !== 'piping') return checkpoint;
  const piping = checkpoint.piping;
  if (
    !piping || !Array.isArray(piping.targets) || piping.targets.length !== PIPING_TARGET_COUNT
    || !Array.isArray(piping.results) || piping.results.length > PIPING_TARGET_COUNT
  ) {
    return { ...checkpoint, piping: createPipingRun(random), migrated: true };
  }
  return { ...checkpoint, migrated: false };
}
