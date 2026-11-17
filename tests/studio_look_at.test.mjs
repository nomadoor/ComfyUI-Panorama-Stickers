// docs/studio-ui.md "Look at" (web_src/studio/look_at.js, camera_state.js, camera_ui.js): the content boxes the
// evaluation reads, the target a click picks, the mark's point, the target switching, the Camera tab's orbit and the
// Camera button while looking.
import assert from "node:assert/strict";
import test from "node:test";

import { lookAtPoint } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { cameraLooks, orbitCameraLooking } from "../web_src/studio/camera_state.js";
import { cameraToView } from "../web_src/studio/camera_ui.js";
import { lookAtBoxes, lookAtTargets, lookMarkPoint, lookSwitching, lookTargetName, pickedTarget } from "../web_src/studio/look_at.js";

const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });
const close = (a, b, eps = 1e-9) => a.every((value, i) => Math.abs(value - b[i]) <= eps);
const board = (extra = {}) => ({ id: "board", placement: "world", source: file("board.png"), crop: { x0: 0, y0: 0, x1: 0.5, y1: 1 }, ...extra });

test("the boxes are of what the Camera looks at: a cropped image plane's, a 3D content's once loaded", () => {
  const state = loadSceneState({ version: 2, camera: { look_at: { value: { sticker: "board", offset: [0, 0, 0] }, keyframes: [{ frame: 5, value: { sticker: "robot", offset: [0, 0, 0] } }] } },
    stickers: [board(), { id: "robot", placement: "world", source: file("robot.glb") }, { id: "sky", source: file("sky.png") }] });
  assert.deepEqual(lookAtTargets(state.camera), ["board", "robot"]);
  const boxes = lookAtBoxes(state, {
    image: () => ({ width: 400, height: 100 }),
    content: (sticker) => (sticker.id === "robot" ? { min: [-1, 0, -1], max: [1, 2, 1] } : null),
  });
  assert.deepEqual(boxes, { board: { center: [0, 0, 0], size: [1, 0.5, 0] }, robot: { center: [0, 1, 0], size: [2, 2, 2] } });
  // Not loaded yet: left out (its point is its position until it loads).
  assert.deepEqual(lookAtBoxes(state), {});
});

test("a click picks the point as the share of the box, and the Camera then looks right at that point", () => {
  const sticker = board({ position: { value: [1, 0.5, -2] }, rotation: { value: { yaw_deg: 30, pitch_deg: 10, roll_deg: 5 } }, scale: { value: 1.5 } });
  const state = loadSceneState({ version: 2, camera: { position: { value: [0, 0, 5] } }, stickers: [sticker] });
  const box = { center: [0, 0.1, 0], size: [1, 0.5, 0] };
  const point = lookAtPoint({ ...state.camera, look_at: { value: { sticker: "board", offset: [0.3, -0.2, 0] }, keyframes: [] } }, 0, null, { stickers: state.stickers, boxes: { board: box } });
  const target = pickedTarget(state.stickers[0], point, 0, box);
  assert.equal(target.sticker, "board");
  assert.ok(close(target.offset, [0.3, -0.2, 0]), `${target.offset}`);
});

test("the mark is at the target of the Lane now, and the name is the Sticker's row name", () => {
  const state = loadSceneState({ version: 2, camera: { look_at: { keyframes: [
    { frame: 0, value: { point: [1, 2, 3] }, easing: "hold" },
    { frame: 10, value: { sticker: "board", offset: [0, 0, 0] } },
  ] } }, stickers: [board({ position: { value: [4, 0, -1] } })] });
  assert.deepEqual(lookMarkPoint(state, 5), [1, 2, 3]);
  assert.deepEqual(lookMarkPoint(state, 12), [4, 0, -1]);
  assert.equal(lookTargetName(state, 5), "Point");
  assert.equal(lookTargetName(state, 12), "board.png");
  assert.equal(lookTargetName(loadSceneState({ version: 2 }), 0), null);
});

test("the target switches only inside a segment between two different targets that is not a hold", () => {
  const camera = loadSceneState({ version: 2, camera: { look_at: { keyframes: [
    { frame: 0, value: { point: [0, 0, 0] } },
    { frame: 10, value: { point: [1, 0, 0] }, easing: "hold" },
    { frame: 20, value: { point: [2, 0, 0] } },
    { frame: 30, value: { point: [2, 0, 0] } },
  ] } } }).camera;
  assert.equal(lookSwitching(camera, 5), true);
  assert.equal(lookSwitching(camera, 0), false);
  assert.equal(lookSwitching(camera, 15), false, "a hold cuts");
  assert.equal(lookSwitching(camera, 25), false, "the same target");
  assert.equal(lookSwitching(camera, 35), false);
});

test("the Camera tab's drag goes round the target and the wheel changes the distance, writing the position only", () => {
  const state = loadSceneState({ version: 2, camera: { position: { value: [0, 0, 5] }, look_at: { value: { point: [0, 0, 0] } } } });
  const camera = state.camera;
  assert.equal(cameraLooks(camera, 0), true);
  // Turned 90° to the right from looking at it: the Camera goes round to its left side, still 5 away.
  orbitCameraLooking(camera, 0, { position: [0, 0, 5], yaw_deg: 90, pitch_deg: 0 });
  assert.ok(close(camera.position.value, [-5, 0, 0]), `${camera.position.value}`);
  assert.deepEqual(camera.rotation.value, { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 });
  // The wheel moved it 2 toward the target along the view: 3 away.
  orbitCameraLooking(camera, 0, { position: [-3, 0, 0], yaw_deg: 90, pitch_deg: 0 });
  assert.ok(close(camera.position.value, [-3, 0, 0]));
});

test("the Camera button brings only the position while the Camera looks at a target", () => {
  const camera = loadSceneState({ version: 2, camera: { projection: "perspective", look_at: { value: { point: [0, 0, 0] } } } }).camera;
  assert.equal(cameraToView(camera, 0, { position: [1, 2, 3], yaw_deg: 40, pitch_deg: -10 }), true);
  assert.deepEqual(camera.position.value, [1, 2, 3]);
  assert.deepEqual(camera.rotation.value, { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 });
});

// docs/studio-ui.md "Look at": the Offset row writes the shown target's offset; its reset is the box's center.
test("the Look at Offset row edits the shown target's offset, resets to the center, and is off without a Sticker target", async () => {
  const { applyInspectorEdit } = await import("../web_src/studio/inspector_actions.js");
  const { buildCameraCard } = await import("../web_src/studio/inspector_model.js");
  const { loadSceneState: load } = await import("../web_src/pano_scene_state.js");
  const target = { kind: "camera", id: "camera" };
  const row = (state, playhead = 0) => buildCameraCard({ state, playhead }).rows.find((item) => item.id === "look_offset");
  const looking = load({ version: 2, camera: { look_at: { value: { sticker: "s", offset: [0.2, 0.3, 0] } } }, stickers: [{ id: "s", placement: "world", source: { kind: "file", filename: "a.png" } }] });
  assert.deepEqual(row(looking).fields.map((field) => [field.axis, field.value]), [["X", 0.2], ["Y", 0.3], ["Z", 0]]);
  assert.deepEqual([row(looking).disabled, row(looking).atDefault], [false, false]);
  assert.equal(applyInspectorEdit(looking, { type: "field", target, field: "look_offset_y", value: 0.5, phase: "commit" }, { playhead: 0 }).history, true);
  assert.deepEqual(looking.camera.look_at.value, { sticker: "s", offset: [0.2, 0.5, 0] });
  assert.equal(applyInspectorEdit(looking, { type: "reset", target, row: "look_offset" }, { playhead: 0 }).changed, true);
  assert.deepEqual(looking.camera.look_at.value.offset, [0, 0, 0]);
  assert.equal(row(looking).atDefault, true);
  // With Keyframes, the recording rule: the shown target, its offset changed, keyed at the playhead.
  const keyed = load({ version: 2, camera: { look_at: { keyframes: [{ frame: 0, value: { point: [0, 0, -1] } }, { frame: 10, value: { sticker: "s", offset: [0, 0, 0] } }, { frame: 20, value: { sticker: "s", offset: [0.1, 0, 0] } }] } }, stickers: [{ id: "s", placement: "world", source: { kind: "file", filename: "a.png" } }] });
  applyInspectorEdit(keyed, { type: "field", target, field: "look_offset_x", value: 0.4, phase: "commit" }, { playhead: 15 });
  assert.deepEqual(keyed.camera.look_at.keyframes.map((key) => [key.frame, key.value.offset ?? null]), [[0, null], [10, [0, 0, 0]], [15, [0.4, 0, 0]], [20, [0.1, 0, 0]]]);
  // A point target and no target turn the row off, with the reason.
  assert.deepEqual([row(keyed, 5).disabled, row(keyed, 5).tip], [true, "Offset · Looking at a point"]);
  const none = load({ version: 2 });
  assert.deepEqual([row(none).disabled, row(none).tip], [true, "Offset · No target"]);
});

// docs/studio-ui.md "Look at": Pick, the clear and the dot follow the recording rule of the look_at Lane.
test("Look at writes by the recording rule: the value without Keyframes, else a Keyframe at the playhead; the dot keys the shown target", async () => {
  const { applyInspectorEdit } = await import("../web_src/studio/inspector_actions.js");
  const { createStudioSession } = await import("../web_src/studio/session.js");
  const { loadSceneState: load } = await import("../web_src/pano_scene_state.js");
  const target = { kind: "camera", id: "camera" };
  const board = { id: "s", placement: "world", source: { kind: "file", filename: "a.png" } };
  const a = { sticker: "s", offset: [0, 0, 0] };
  const b = { point: [1, 0, -3] };
  // No Keyframes: Pick writes the value; the clear takes it off.
  const plain = createStudioSession({ state: load({ version: 2, stickers: [board] }) });
  assert.equal(plain.setLookAt(a, 12).changed, true);
  assert.deepEqual([plain.state.camera.look_at.value, plain.state.camera.look_at.keyframes], [a, []]);
  // The dot keys the shown target at the playhead; Pick then writes "from here, this" at another frame.
  const state = load({ version: 2, camera: { look_at: { value: a } }, stickers: [board] });
  assert.equal(applyInspectorEdit(state, { type: "key", target, row: "look_at" }, { playhead: 0 }).changed, true);
  assert.deepEqual(state.camera.look_at.keyframes.map((key) => [key.frame, key.value]), [[0, a]]);
  const session = createStudioSession({ state });
  session.setLookAt(b, 24);
  assert.deepEqual(session.state.camera.look_at.keyframes.map((key) => [key.frame, key.value]), [[0, a], [24, b]]);
  // The reset at 40: "stop looking here", a Keyframe without a target; the earlier ones stay.
  const cleared = structuredClone(session.state);
  assert.equal(applyInspectorEdit(cleared, { type: "reset", target, row: "look_at" }, { playhead: 40 }).changed, true);
  assert.deepEqual(cleared.camera.look_at.keyframes.map((key) => [key.frame, key.value]), [[0, a], [24, b], [40, null]]);
  // Nothing shown at 50 (no target): the clear does nothing more.
  assert.equal(applyInspectorEdit(cleared, { type: "reset", target, row: "look_at" }, { playhead: 50 }).changed, false);
});

// docs/studio-ui.md "Easing のパネル": a Look at segment's curve is read by the turns toward its targets (as the Camera
// turns), not as numbers (its values are targets).
test("the Easing panel reads a Look at segment by the turns toward its targets", async () => {
  const { buildInspectorModel } = await import("../web_src/studio/inspector_model.js");
  const { evaluateSceneState } = await import("../web_src/pano_scene_eval.js");
  const { loadSceneState: load } = await import("../web_src/pano_scene_state.js");
  const state = load({ version: 2, camera: { position: { value: [0, 0, 5] }, look_at: { keyframes: [
    { frame: 0, value: { point: [-3, 0, 0] } }, { frame: 20, value: { point: [3, 0, 0] } }, { frame: 30, value: { point: [3, 2, 0] } },
  ] } } });
  const easingOf = (frames) => buildInspectorModel({ state, selection: { ids: ["camera"], keyframes: { owner: "camera", lane: "look_at", frames } } }).easing;
  const one = easingOf([0, 20]);
  assert.ok(one.curve.every(Number.isFinite), JSON.stringify(one.curve));
  // The curve is the Camera's turn: halfway in time, the share of the angle turned is the curve's progress there.
  const yaw = (frame) => evaluateSceneState(state, frame).camera.yaw_deg;
  const turned = (yaw(10) - yaw(0)) / (yaw(20) - yaw(0));
  const { cubicProgress } = await import("../web_src/pano_scene_eval.js");
  assert.ok(Math.abs(cubicProgress(one.curve, 0.5) - turned) < 0.02, `${cubicProgress(one.curve, 0.5)} vs ${turned}`);
  const range = easingOf([0, 20, 30]);
  assert.ok(range.progress.points.every(([x, y]) => Number.isFinite(x) && Number.isFinite(y)));
});

// docs/studio-ui.md "Look at": the Camera tab's drag stops while the target changes, also in a looping Camera's segment
// from the last Look at Keyframe back to the first.
test("Look at switching is read as the evaluation reads it, a loop's last segment included", () => {
  const camera = loadSceneState({ version: 2, camera: { loop: true, look_at: { keyframes: [{ frame: 0, value: { point: [0, 0, -1] } }, { frame: 10, value: { point: [1, 0, -1] } }] } } }).camera;
  assert.equal(lookSwitching(camera, 5, 40), true);
  assert.equal(lookSwitching(camera, 25, 40), true, "the segment back to the first target");
  assert.equal(lookSwitching(camera, 25, null), false, "without a loop, after the last Keyframe");
  assert.equal(lookSwitching(camera, 10, 40), false, "on a Keyframe");
});
