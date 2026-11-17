// docs/timeline-ui.md "Simplify" (web_src/studio/simplify.js): fewer Keyframes over a stretch that keep the shape and the
// times; the kept ones never move in time; a smaller count is a part of a larger one; must-keeps stay.
import assert from "node:assert/strict";
import test from "node:test";

import { evaluateLane } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { SIMPLIFY_MIN_TURN_DEG, SIMPLIFY_TOLERANCE, fitEasing, planSimplify } from "../web_src/studio/simplify.js";
import { cubicProgress } from "../web_src/pano_scene_eval.js";

// A Camera that an estimate from video wrote: a key every 2 frames along a curve, a little jitter.
function dense({ jitter = 0.02, every = 2, length = 48 } = {}) {
  let seed = 7;
  const noise = () => ((seed = (seed * 16807) % 2147483647) / 2147483647 - 0.5) * jitter;
  const keys = [];
  for (let frame = 0; frame <= length; frame += every) {
    const t = frame / length;
    keys.push({ frame, value: [-6 + 12 * t + noise(), 1.5 + Math.sin(t * 3) + noise(), 3 - 2 * Math.sin(t * 6) + noise()] });
  }
  return loadSceneState({ version: 2, camera: { position: { keyframes: keys } } }).camera;
}

test("the amounts are the spec's", () => {
  assert.equal(SIMPLIFY_TOLERANCE, 0.012);
  assert.equal(SIMPLIFY_MIN_TURN_DEG, 5);
});

test("the plan keeps the ends, brings Keyframes back in an order, and its default stays within the tolerance", () => {
  const camera = dense();
  const frames = camera.position.keyframes.map((key) => key.frame);
  const plan = planSimplify(camera, ["position"], frames, { camera: true });
  assert.equal(plan.original, frames.length);
  assert.equal(plan.least, 2);
  assert.deepEqual(plan.order.slice(0, 2), [0, 48]);
  assert.equal(new Set(plan.order).size, frames.length);
  assert.ok(plan.fallback < frames.length / 2, `${plan.fallback} of ${frames.length}`);
  assert.ok(plan.errors[plan.fallback] <= SIMPLIFY_TOLERANCE);
  // A smaller result is a part of a larger one, and the kept Keyframes keep their frames.
  const small = plan.build(plan.fallback).position.keyframes.map((key) => key.frame);
  const large = plan.build(plan.fallback + 3).position.keyframes.map((key) => key.frame);
  assert.ok(small.every((frame) => large.includes(frame)));
  assert.ok(small.every((frame) => frames.includes(frame)));
  // The original count gives the Lane as it was.
  assert.deepEqual(plan.build(plan.original).position, camera.position);
});

test("the default result follows the original path within the tolerance at every frame", () => {
  const camera = dense({ jitter: 0 });
  const plan = planSimplify(camera, ["position"], camera.position.keyframes.map((key) => key.frame), { camera: true, ground: -1.6 });
  const lane = plan.build(plan.fallback);
  for (let frame = 0; frame <= 48; frame += 1) {
    const a = evaluateLane(camera, "position", frame);
    const b = evaluateLane(lane, "position", frame);
    // The measure is at least the eye height (1.6) or the path's box diagonal.
    assert.ok(Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) <= SIMPLIFY_TOLERANCE * 15, `${frame}`);
  }
});

test("a hold's ends, corners and the Look at Keyframes are never removed", () => {
  const keys = [];
  for (let frame = 0; frame <= 40; frame += 2) keys.push({ frame, value: [frame / 10, 0, 0], ...(frame === 10 ? { easing: "hold" } : {}), ...(frame === 24 ? { corner: true } : {}) });
  const camera = loadSceneState({ version: 2, camera: { position: { keyframes: keys }, look_at: { keyframes: [{ frame: 30, value: { point: [0, 0, 0] } }] } } }).camera;
  const plan = planSimplify(camera, ["position"], [0, 40], { camera: true, lookAt: camera.look_at });
  for (const frame of [0, 10, 12, 24, 30, 40]) assert.ok(plan.mustKeep.has(frame), `${frame}`);
  const kept = plan.build(plan.least).position.keyframes.map((key) => key.frame);
  assert.deepEqual(kept, [0, 10, 12, 24, 30, 40]);
  assert.equal(plan.build(plan.least).position.keyframes[1].easing, "hold");
});

test("fewer than three Keyframes in the stretch has no plan", () => {
  const camera = dense();
  assert.equal(planSimplify(camera, ["position"], [0, 2], { camera: true }), null);
  assert.equal(planSimplify(camera, ["position"], [], { camera: true }), null);
});

test("the fitted curve follows a progress it can follow", () => {
  const target = [0.2, 0.05, 0.4, 0.9];
  const samples = Array.from({ length: 21 }, (_, i) => ({ u: i / 20, p: cubicProgress(target, i / 20) }));
  const fitted = fitEasing(samples);
  for (const { u, p } of samples) assert.ok(Math.abs(cubicProgress(fitted, u) - p) < 0.01, `${u}`);
});

// docs/timeline-ui.md "Simplify" "ずれの測り方": a returned shot's offset Lanes are measured as a turn and a ratio, so
// a straight ramp of offset Keyframes reduces as the same ramp on a rotation Lane does.
test("Simplify measures a returned shot's offset Lanes as a turn and a ratio", async () => {
  const { planSimplify } = await import("../web_src/studio/simplify.js");
  const { loadSceneState: load } = await import("../web_src/pano_scene_state.js");
  const keys = Array.from({ length: 11 }, (_, i) => ({ frame: i * 2, value: { yaw_deg: i * 3, pitch_deg: 0, roll_deg: 0 }, easing: [0, 0, 1, 1] }));
  const fovKeys = Array.from({ length: 11 }, (_, i) => ({ frame: i * 2, value: 1 + i * 0.05, easing: [0, 0, 1, 1] }));
  const port = load({ version: 2, stickers: [{ id: "p", placement: "sky", source: { kind: "port" }, offset_rotation: { keyframes: keys }, offset_fov: { keyframes: fovKeys } }] }).stickers[0];
  const plan = planSimplify(port, ["offset_rotation", "offset_fov"], keys.map((key) => key.frame));
  assert.ok(plan.errors.every((value) => value === undefined || Number.isFinite(value)), JSON.stringify(plan.errors));
  assert.ok(plan.fallback < 11, `kept ${plan.fallback}`);
});

// The memo of per-segment decisions and the measure of only the frames that can change give exactly what deciding and
// measuring everything again gives (docs/timeline-ui.md "Simplify": every count is made again from the original).
test("Simplify's memo gives exactly the full recompute on random lanes", async () => {
  const { planSimplify } = await import("../web_src/studio/simplify.js");
  const { loadSceneState: load } = await import("../web_src/pano_scene_state.js");
  let seed = 12345;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  const easings = ["smooth", "smooth", "smooth", [0, 0, 1, 1], [0.42, 0, 0.58, 1], [0.3, 0, 1, 1], "hold"];
  let compared = 0;
  for (let c = 0; c < 120; c += 1) {
    const n = 4 + Math.floor(rand() * 10);
    let frame = 0;
    const position = [];
    const rotation = [];
    let p = [0, 0, 0];
    for (let i = 0; i < n; i += 1) {
      p = p.map((v) => v + (rand() - 0.3) * 3);
      const key = { frame, value: [...p], easing: easings[Math.floor(rand() * easings.length)] };
      if (rand() < 0.15) key.corner = true;
      if (rand() < 0.15) key.handles = { out: [rand(), rand() - 0.5, rand()] };
      position.push(key);
      rotation.push({ frame, value: { yaw_deg: rand() * 200 - 100, pitch_deg: rand() * 40 - 20, roll_deg: 0 }, easing: easings[Math.floor(rand() * 4)] });
      frame += 1 + Math.floor(rand() * 8);
    }
    const loop = rand() < 0.25;
    const owner = load({ version: 2, camera: { loop, position: { keyframes: position }, rotation: { keyframes: rotation } } }).camera;
    const frames = position.map((key) => key.frame);
    const options = { period: loop ? frame + 4 : null, camera: true, hfov: 60 };
    const fast = planSimplify(owner, ["position", "rotation"], frames, options);
    const full = planSimplify(owner, ["position", "rotation"], frames, { ...options, memo: false });
    if (!full) continue;
    compared += 1;
    assert.deepEqual(fast.order, full.order, `case ${c}: order`);
    assert.deepEqual(fast.errors, full.errors, `case ${c}: errors`);
    assert.equal(fast.fallback, full.fallback, `case ${c}: default count`);
    for (let k = full.least; k <= full.original; k += 1) assert.deepEqual(fast.build(k), full.build(k), `case ${c}: build(${k})`);
  }
  assert.ok(compared > 60, `compared ${compared}`);
});

test("Simplify's memo gives exactly the full recompute where a pick changes a segment four keys away", async () => {
  // A case the earlier memo (two keys before, three after) got wrong: its default count was 8, the full recompute's 9.
  const frames = [0, 2, 8, 13, 17, 21, 26, 32, 35, 42, 46];
  const values = [
    [0, 0, 0], [-0.478, -0.067, 1.949], [-0.431, -0.137, 2.494], [0.148, -0.237, 4.587], [1.059, -0.144, 6.618],
    [1.477, -0.11, 6.926], [1.794, -0.081, 7.168], [3.389, -0.099, 7.308], [5.239, -0.075, 6.629], [5.894, -0.01, 6.674],
    [8.094, 0.018, 6.828],
  ];
  const easing = { 17: [0.3, 0, 1, 1], 21: [0.42, 0, 0.58, 1], 32: [0.42, 0, 0.58, 1], 42: [0.42, 0, 0.58, 1], 35: [0, 0, 1, 1] };
  const keyframes = frames.map((frame, i) => ({ frame, value: values[i], easing: easing[frame] ?? "smooth" }));
  const owner = loadSceneState({ version: 2, camera: { position: { keyframes } } }).camera;
  const options = { camera: true, hfov: 60 };
  const fast = planSimplify(owner, ["position"], frames, options);
  const full = planSimplify(owner, ["position"], frames, { ...options, memo: false });
  assert.equal(full.fallback, 9);
  assert.deepEqual(fast.order, full.order);
  assert.deepEqual(fast.errors, full.errors);
  assert.equal(fast.fallback, full.fallback);
});

// CodeRabbit review: a size with only its hFOV (a port Sticker's) is measured by the hFOV, not NaN.
test("a size without a vFOV is measured by its hFOV", async () => {
  const { laneMeasure } = await import("../web_src/studio/simplify.js");
  const { distance } = laneMeasure("size", [{ hFOV_deg: 30 }, { hFOV_deg: 60 }], { camera: false, ground: -1.6, hfov: 90 });
  assert.ok(Math.abs(distance({ hFOV_deg: 30 }, { hFOV_deg: 60 }) - Math.log(2)) < 1e-12);
});

// CodeRabbit review: a looping Lane's first segments read its last Keyframes across the seam, which the memo's context
// does not hold; a looping row gives exactly the full recompute.
test("Simplify on looping Lanes gives exactly the full recompute", async () => {
  const { planSimplify } = await import("../web_src/studio/simplify.js");
  let seed = 99;
  const rand = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
  const easings = ["smooth", "smooth", "smooth", [0, 0, 1, 1], [0.42, 0, 0.58, 1]];
  let compared = 0;
  for (let c = 0; c < 30; c += 1) {
    const n = 6 + Math.floor(rand() * 14);
    let frame = 0;
    let p = [0, 0, 0];
    const keys = [];
    for (let i = 0; i < n; i += 1) {
      p = p.map((v) => v + (rand() - 0.5) * 4);
      keys.push({ frame, value: [...p], easing: easings[Math.floor(rand() * easings.length)] });
      frame += 1 + Math.floor(rand() * 6);
    }
    if (rand() < 0.5) keys[keys.length - 1].value = [...keys[0].value];
    const owner = loadSceneState({ version: 2, camera: { loop: true, position: { keyframes: keys } } }).camera;
    const frames = keys.map((key) => key.frame);
    const options = { period: frame + 3, camera: true, hfov: 60 };
    const fast = planSimplify(owner, ["position"], frames, options);
    const full = planSimplify(owner, ["position"], frames, { ...options, memo: false });
    if (!full) continue;
    compared += 1;
    assert.deepEqual(fast.order, full.order, `case ${c}: order`);
    assert.deepEqual(fast.errors, full.errors, `case ${c}: errors`);
  }
  assert.ok(compared > 20, `compared ${compared}`);
});
