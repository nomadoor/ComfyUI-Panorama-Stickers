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
  // An open row: the Keyframes of one Lane only (docs/timeline-ui.md "Simplify").
  const mixed = [{ row: "camera", lane: "position", frame: 0 }, { row: "camera", lane: "position", frame: 10 }, { row: "camera", lane: "fov", frame: 20 }];
  assert.deepEqual(bar({ row: "camera", keys: mixed }), { disabled: true, tip: "Constant speed · Select Keyframes in one Lane" });
});

// docs/timeline-ui.md "Constant speed": a looping row with all its Keyframes selected is one turn, the segment back to
// the first included; only the first stays.
test("on a looping row with every Keyframe selected, one turn of the loop goes at one speed, the way back included", () => {
  const point = (deg) => [5 * Math.sin(deg * Math.PI / 180), 1.6, 5 * Math.cos(deg * Math.PI / 180)];
  const owner = camera([0, 75, 126].map((frame, i) => ({ frame, value: point(120 * i) })), { loop: true });
  const plan = planConstantSpeed(owner, ["position"], [0, 75, 126], { period: 152 });
  const moved = frames(plan.lanes.position);
  assert.equal(moved[0], 0);
  assert.ok(Math.abs(moved[1] - 51) <= 1 && Math.abs(moved[2] - 101) <= 1, JSON.stringify(moved));
  // The speed over the whole turn, the way back to the first Keyframe included, varies by little.
  const lane = { loop: true, position: plan.lanes.position };
  const steps = [];
  for (let f = 0; f < 152; f += 1) {
    const a = evaluateLane(lane, "position", f, 152);
    const b = evaluateLane(lane, "position", f + 1, 152);
    steps.push(Math.hypot(b[0] - a[0], b[2] - a[2]));
  }
  assert.ok(Math.max(...steps) / Math.min(...steps) < 1.1, `${Math.min(...steps)}..${Math.max(...steps)}`);
  // Part of the Keyframes selected: the stretch only, its ends kept as before.
  assert.equal(planConstantSpeed(owner, ["position"], [0, 75], { period: 152 }), null);
});

// Fable review: "all selected" means every Keyframe of the row is selected, not every Keyframe between the picked ends.
test("on a looping row, the ends of the row selected without the ones between are a stretch, not one turn", () => {
  const point = (deg) => [5 * Math.sin(deg * Math.PI / 180), 1.6, 5 * Math.cos(deg * Math.PI / 180)];
  const owner = camera([0, 30, 75, 126].map((frame, i) => ({ frame, value: point(90 * i) })), { loop: true });
  const plan = planConstantSpeed(owner, ["position"], [0, 75, 126], { period: 152 });
  // A stretch keeps both its ends; one turn would have moved the last Keyframe.
  const moved = frames(plan.lanes.position);
  assert.equal(moved[0], 0);
  assert.equal(moved[3], 126);
});

// Fable review: a Lane's last Keyframe in the stretch whose next Keyframe is past the stretch keeps its Easing; that
// segment is not in the stretch.
test("a segment running past the stretch keeps its Easing", () => {
  const owner = camera([
    { frame: 0, value: [0, 0, 0] }, { frame: 10, value: [1, 0, 0] }, { frame: 20, value: [3, 0, 0] }, { frame: 30, value: [6, 0, 0] },
  ], { fov: { keyframes: [{ frame: 0, value: 60, easing: [0.42, 0, 0.58, 1] }, { frame: 15, value: 70, easing: [0, 0, 1, 1] }, { frame: 40, value: 80 }] } });
  const plan = planConstantSpeed(owner, ["position", "fov"], [0, 10, 20, 30]);
  assert.deepEqual(plan.lanes.fov.keyframes.map((key) => key.easing), ["smooth", [0, 0, 1, 1], "smooth"]);
});

// Fable review: retiming a turn keeps its shape, as retiming a position does (docs/scene-state-v2.md "形（回転・direction）").
test("Constant speed on a Camera's rotation keeps the orientations it passes", async () => {
  const { rotationToQuaternion, worldRotation } = await import("../web_src/pano_world.js");
  const values = [[0, 0], [40, 30], [80, -20], [120, 10]];
  const owner = loadSceneState({ version: 2, camera: { rotation: { keyframes: [0, 5, 30, 40].map((frame, i) => ({ frame, value: { yaw_deg: values[i][0], pitch_deg: values[i][1], roll_deg: 0 } })) } } }).camera;
  const plan = planConstantSpeed(owner, ["rotation"], [0, 5, 30, 40], { camera: true, hfov: 60 });
  assert.notDeepEqual(frames(plan.lanes.rotation), [0, 5, 30, 40]);
  const path = (lane) => Array.from({ length: 401 }, (_, j) => {
    const r = evaluateLane(lane, "rotation", (40 * j) / 400);
    return rotationToQuaternion(worldRotation(r.yaw_deg, r.pitch_deg, r.roll_deg));
  });
  const angle = (a, b) => 2 * Math.acos(Math.min(1, Math.abs(a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w))) * 180 / Math.PI;
  const before = path(owner);
  const after = path({ rotation: plan.lanes.rotation });
  const farthest = (from, to) => Math.max(...from.map((a) => Math.min(...to.map((b) => angle(a, b)))));
  // Within the samples' own spacing; the time-aware shape strayed by about 18°.
  assert.ok(farthest(after, before) < 2 && farthest(before, after) < 2, `${farthest(after, before)} ${farthest(before, after)}`);
});
