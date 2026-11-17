// Constant speed (docs/timeline-ui.md "Constant speed", web_src/studio/constant_speed.js): the selected Keyframes moved
// in time by the distance the motion goes, Smooth inside, the stays kept.
import assert from "node:assert/strict";
import test from "node:test";

import { evaluateLane } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { planConstantSpeed } from "../web_src/studio/constant_speed.js";
import { buildStudioTimeline } from "../web_src/studio/timeline_model.js";

const camera = (position, extra = {}) => loadSceneState({ version: 2, camera: { position: { keyframes: position }, ...extra } }).camera;
const frames = (lane) => lane.keyframes.map((key) => key.frame);

test("the Keyframes between the ends go where the distance puts them, and the segments become Smooth", () => {
  // Distances 1, 2, 3 at frames 0, 10, 20, 30: the time is shared 1 : 2 : 3.
  const owner = camera([
    { frame: 0, value: [0, 0, 0], easing: [0.42, 0, 0.58, 1] }, { frame: 10, value: [1, 0, 0] }, { frame: 20, value: [3, 0, 0] }, { frame: 30, value: [6, 0, 0] },
  ]);
  const plan = planConstantSpeed(owner, ["position"], [0, 10, 20, 30]);
  assert.deepEqual(frames(plan.lanes.position), [0, 5, 15, 30]);
  assert.deepEqual([...plan.moves], [[10, 5], [20, 15]]);
  assert.deepEqual(plan.lanes.position.keyframes.map((key) => key.easing), ["smooth", "smooth", "smooth", "smooth"]);
  // One speed through the middle (the Keyframes 5 and 15 pass at it): the same distance in each frame there. The motion
  // starts and stops at the row's ends, by Smooth.
  const lane = { position: plan.lanes.position };
  const step = (f) => Math.abs(evaluateLane(lane, "position", f + 1)[0] - evaluateLane(lane, "position", f)[0]);
  for (const f of [5, 8, 11, 14]) assert.ok(Math.abs(step(f) - 0.2) < 0.005, `frame ${f}: ${step(f)}`);
  // Already even and Smooth: nothing changes.
  assert.equal(planConstantSpeed({ position: plan.lanes.position }, ["position"], [0, 5, 15, 30]), null);
});

test("a hold's ends stay, and a closed row moves every Lane's Keyframe at a frame together", () => {
  const owner = camera([
    { frame: 0, value: [0, 0, 0] }, { frame: 10, value: [3, 0, 0] }, { frame: 20, value: [4, 0, 0], easing: "hold" }, { frame: 30, value: [9, 0, 0] }, { frame: 40, value: [10, 0, 0] },
  ], { fov: { keyframes: [{ frame: 0, value: 60 }, { frame: 10, value: 70 }, { frame: 40, value: 80 }] } });
  const plan = planConstantSpeed(owner, ["position", "fov"], [0, 10, 20, 30, 40]);
  // 0..20 is one stretch (distances 3, 1): 10 goes to 15. The hold 20..30 stays; 30..40 has nothing between.
  assert.deepEqual(frames(plan.lanes.position), [0, 15, 20, 30, 40]);
  assert.deepEqual(frames(plan.lanes.fov), [0, 15, 40]);
  assert.equal(plan.lanes.position.keyframes[2].easing, "hold");
});

test("the bar's Constant speed is pressable as Simplify is, and not while Simplify adjusts", () => {
  const state = loadSceneState({ version: 2, camera: { position: { keyframes: [0, 10, 20].map((frame) => ({ frame, value: [frame, 0, 0] })) } } });
  const bar = (selection, simplify = null) => buildStudioTimeline({ state, fps: 24, length: 48 }, { selection, simplify }).bar.constantSpeed;
  assert.deepEqual(bar(null), { disabled: true, tip: "Constant speed · Select 3+ Keyframes" });
  const keys = [0, 10, 20].map((frame) => ({ row: "camera", lane: null, frame }));
  assert.deepEqual(bar({ row: "camera", keys }), { disabled: false, tip: "Constant speed · Moves the selected Keyframes in time" });
  assert.deepEqual(bar({ row: "camera", keys }, { row: "camera", lane: null, original: 3, least: 2, count: 2, going: [] }), { disabled: true, tip: "Constant speed · Finish Simplify first" });
});
