import assert from "node:assert/strict";
import test from "node:test";

import { stickerVfovFromAspect } from "../web_src/pano_editor_state.js";
import { evaluateLane } from "../web_src/pano_scene_eval.js";
import { NEW_STICKER_HFOV } from "../web_src/pano_space.js";
import { DEFAULT_EASING, loadSceneState } from "../web_src/pano_scene_state.js";
import { upstreamWorkingLayers } from "../web_src/pano_upstream.js";
import { applyInspectorEdit } from "../web_src/studio/inspector_actions.js";
import { buildInspectorModel } from "../web_src/studio/inspector_model.js";

// The inspector's edits (web_src/studio/inspector_actions.js) by docs/timeline-ui.md "記録の規則" and "インスペクタの
// Keyframe のポチ", and docs/studio-ui.md "リセットと Keyframe のポチ" and "Easing のパネル".

const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });

function world(id, extra = {}) {
  return {
    id,
    placement: "world",
    source: file(`${id}.glb`),
    position: { value: [1, 2, 3] },
    rotation: { value: { yaw_deg: 10, pitch_deg: 0, roll_deg: 0 } },
    scale: { value: 2 },
    opacity: { value: 1 },
    ...extra,
  };
}

function sky(id, extra = {}) {
  return {
    id,
    placement: "sky",
    source: file(`${id}.png`),
    direction: { value: { yaw_deg: 30, pitch_deg: 10 } },
    roll: { value: 5 },
    size: { value: { hFOV_deg: 40, vFOV_deg: 30 } },
    opacity: { value: 0.5 },
    ...extra,
  };
}

const load = (raw = {}) => loadSceneState({ version: 2, ...raw });
const sticker = { kind: "sticker", id: "sticker_1" };
const camera = { kind: "camera", id: "camera" };
const keys = (lane) => lane.keyframes.map((key) => [key.frame, key.value]);

test("a field edit without Keyframes changes the static value; input is live, commit is one Undo step", () => {
  const state = load({ stickers: [world("sticker_1")] });
  let result = applyInspectorEdit(state, { type: "field", target: sticker, field: "position_x", value: 4, phase: "input" }, { playhead: 0 });
  assert.deepEqual(state.stickers[0].position.value, [4, 2, 3]);
  assert.deepEqual(result, { changed: true, history: false, stopPlayback: false, upstreamChanged: false });
  result = applyInspectorEdit(state, { type: "field", target: sticker, field: "position_x", value: 4, phase: "commit" }, { playhead: 0 });
  assert.equal(result.history, true);
  assert.deepEqual(state.stickers[0].position.keyframes, []);
});

test("a field edit on a keyed Lane updates the Keyframe at the playhead, or adds one there; only that Lane", () => {
  const state = load({
    stickers: [world("sticker_1", {
      clip: { start: 10, in: 0, duration: null },
      position: { value: [0, 0, 0], keyframes: [{ frame: 0, value: [0, 0, 0] }] },
    })],
  });
  // Timeline frame 10 is material frame 0: the Keyframe there is updated.
  applyInspectorEdit(state, { type: "field", target: sticker, field: "position_y", value: 5, phase: "commit" }, { playhead: 10 });
  assert.deepEqual(keys(state.stickers[0].position), [[0, [0, 5, 0]]]);
  // At Timeline frame 30 (material 20) a Keyframe is added.
  applyInspectorEdit(state, { type: "field", target: sticker, field: "position_x", value: 2, phase: "commit" }, { playhead: 30 });
  assert.deepEqual(keys(state.stickers[0].position), [[0, [0, 5, 0]], [20, [2, 5, 0]]]);
  assert.deepEqual(state.stickers[0].position.value, [0, 0, 0]);
  // The other Lanes get no Keyframe.
  assert.deepEqual(state.stickers[0].rotation.keyframes, []);
});

test("sky fields write their own Lanes: Y P to direction, R to roll, H V to size, opacity in percent", () => {
  const state = load({ stickers: [sky("sticker_1")] });
  const edit = (field, value) => applyInspectorEdit(state, { type: "field", target: sticker, field, value, phase: "commit" }, { playhead: 0 });
  edit("yaw_deg", 45);
  edit("rot_deg", -20);
  edit("vFOV_deg", 25);
  edit("opacity", 80);
  const s = state.stickers[0];
  assert.deepEqual(s.direction.value, { yaw_deg: 45, pitch_deg: 10 });
  assert.equal(s.roll.value, -20);
  assert.deepEqual(s.size.value, { hFOV_deg: 40, vFOV_deg: 25 });
  assert.equal(s.opacity.value, 0.8);
});

test("a world Sticker's scale is held at the smallest scale, and its opacity is in percent", () => {
  const state = load({ stickers: [world("sticker_1")] });
  applyInspectorEdit(state, { type: "field", target: sticker, field: "scale", value: 0, phase: "commit" }, { playhead: 0 });
  assert.equal(state.stickers[0].scale.value, 0.01);
  applyInspectorEdit(state, { type: "field", target: sticker, field: "opacity", value: 25, phase: "commit" }, { playhead: 0 });
  assert.equal(state.stickers[0].opacity.value, 0.25);
});

test("the first Camera edit of a state without one makes the default Camera with that edit", () => {
  const state = load();
  assert.equal(state.camera, null);
  applyInspectorEdit(state, { type: "field", target: camera, field: "position_y", value: 1.5, phase: "commit" }, { playhead: 0 });
  assert.equal(state.camera.projection, "erp");
  assert.equal(state.camera.aspect, 16 / 9);
  assert.deepEqual(state.camera.position.value, [0, 1.5, 0]);
  assert.equal(state.camera.fov.value, 90);
});

test("the Camera's Mode and Range are set as chosen; they keep the other mode's values", () => {
  const state = load({ camera: { projection: "perspective", fov: { value: 50 }, aspect: 4 / 3 } });
  let result = applyInspectorEdit(state, { type: "choice", target: camera, field: "projection", value: "erp" }, { playhead: 0 });
  assert.equal(result.history, true);
  assert.equal(state.camera.projection, "erp");
  assert.equal(state.camera.fov.value, 50);
  result = applyInspectorEdit(state, { type: "choice", target: camera, field: "erp_range", value: 180 }, { playhead: 0 });
  assert.equal(state.camera.erp_range, 180);
});

test("the Camera's Aspect and H FOV and the lens κ keeping the center scale", () => {
  const state = load({ camera: { projection: "perspective", fov: { value: 60 }, aspect: 16 / 9 } });
  applyInspectorEdit(state, { type: "field", target: camera, field: "aspect", value: 1, phase: "commit" }, { playhead: 0 });
  assert.equal(state.camera.aspect, 1);
  applyInspectorEdit(state, { type: "field", target: camera, field: "hFOV_deg", value: 70, phase: "commit" }, { playhead: 0 });
  assert.equal(state.camera.fov.value, 70);
  const start = { hFOV_deg: 70, aspect: 1, curve: 1 };
  applyInspectorEdit(state, { type: "field", target: camera, field: "curve", value: 0.5, start, phase: "input" }, { playhead: 0 });
  applyInspectorEdit(state, { type: "field", target: camera, field: "curve", value: 0.4, start, phase: "commit" }, { playhead: 0 });
  assert.equal(state.camera.curve.value, 0.4);
  // The hFOV follows the curve from where the edit began, not from the input before.
  assert.ok(state.camera.fov.value > 70);
});

test("the key dot adds a Keyframe on its row's Lanes only, at the current value, and stops playback", () => {
  const state = load({ stickers: [world("sticker_1", { clip: { start: 5, in: 0, duration: null } })] });
  const result = applyInspectorEdit(state, { type: "key", target: sticker, row: "position" }, { playhead: 15 });
  assert.deepEqual(result, { changed: true, history: true, stopPlayback: true, upstreamChanged: false });
  assert.deepEqual(keys(state.stickers[0].position), [[10, [1, 2, 3]]]);
  for (const lane of ["rotation", "scale", "opacity"]) assert.deepEqual(state.stickers[0][lane].keyframes, [], lane);
});

test("the key dot on a Keyframe at the playhead removes it; the last one leaves its value as the static value", () => {
  const state = load({ stickers: [world("sticker_1", { scale: { value: 1, keyframes: [{ frame: 0, value: 3 }, { frame: 10, value: 5 }] } })] });
  applyInspectorEdit(state, { type: "key", target: sticker, row: "scale" }, { playhead: 10 });
  assert.deepEqual(keys(state.stickers[0].scale), [[0, 3]]);
  applyInspectorEdit(state, { type: "key", target: sticker, row: "scale" }, { playhead: 0 });
  assert.deepEqual(state.stickers[0].scale.keyframes, []);
  assert.equal(state.stickers[0].scale.value, 3);
});

test("a sky Rotation dot with one of its two Lanes keyed at the playhead keys the other; with both, it removes both", () => {
  const state = load({ stickers: [sky("sticker_1", { roll: { value: 0, keyframes: [{ frame: 4, value: 10 }] } })] });
  applyInspectorEdit(state, { type: "key", target: sticker, row: "rotation" }, { playhead: 4 });
  assert.deepEqual(keys(state.stickers[0].direction), [[4, { yaw_deg: 30, pitch_deg: 10 }]]);
  assert.deepEqual(keys(state.stickers[0].roll), [[4, 10]]);
  applyInspectorEdit(state, { type: "key", target: sticker, row: "rotation" }, { playhead: 4 });
  assert.deepEqual(state.stickers[0].direction.keyframes, []);
  assert.deepEqual(state.stickers[0].roll.keyframes, []);
});

test("the Camera's Lens dot keys the curve Lane, which the Timeline row's dot leaves out", () => {
  const state = load({ camera: { projection: "perspective" } });
  applyInspectorEdit(state, { type: "key", target: camera, row: "lens" }, { playhead: 3 });
  assert.deepEqual(keys(state.camera.curve), [[3, 1]]);
  assert.deepEqual(state.camera.fov.keyframes, []);
});

test("a row reset returns its Lanes to their defaults by the recording rule, and Camera Position to the origin", () => {
  const state = load({
    stickers: [world("sticker_1", { rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, keyframes: [{ frame: 0, value: { yaw_deg: 40, pitch_deg: 0, roll_deg: 0 } }] } })],
    camera: { position: { value: [3, 1, 2] } },
  });
  applyInspectorEdit(state, { type: "reset", target: sticker, row: "position" }, { playhead: 0 });
  assert.deepEqual(state.stickers[0].position.value, [0, 0, 0]);
  // A keyed Lane: the reset is an edit at the playhead (a Keyframe at frame 8).
  applyInspectorEdit(state, { type: "reset", target: sticker, row: "rotation" }, { playhead: 8 });
  assert.deepEqual(keys(state.stickers[0].rotation), [[0, { yaw_deg: 40, pitch_deg: 0, roll_deg: 0 }], [8, { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }]]);
  applyInspectorEdit(state, { type: "reset", target: sticker, row: "scale" }, { playhead: 0 });
  assert.equal(state.stickers[0].scale.value, 1);
  applyInspectorEdit(state, { type: "reset", target: camera, row: "position" }, { playhead: 0 });
  assert.deepEqual(state.camera.position.value, [0, 0, 0]);
});

test("the Camera tab's Roll reset returns the Roll alone to 0, one Undo step, keyed by the recording rule", () => {
  const state = load({ camera: { projection: "perspective", rotation: { value: { yaw_deg: 30, pitch_deg: 6, roll_deg: -14 } } } });
  const result = applyInspectorEdit(state, { type: "reset", target: camera, row: "roll" }, { playhead: 0 });
  assert.equal(result.changed, true);
  assert.equal(result.history, true);
  assert.deepEqual(state.camera.rotation.value, { yaw_deg: 30, pitch_deg: 6, roll_deg: 0 });
  // A keyed rotation Lane: a Keyframe at the playhead, Yaw and Pitch as they are there.
  const keyed = load({ camera: { projection: "perspective", rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, keyframes: [{ frame: 0, value: { yaw_deg: 30, pitch_deg: 6, roll_deg: -14 } }] } } });
  applyInspectorEdit(keyed, { type: "reset", target: camera, row: "roll" }, { playhead: 8 });
  assert.deepEqual(keys(keyed.camera.rotation), [[0, { yaw_deg: 30, pitch_deg: 6, roll_deg: -14 }], [8, { yaw_deg: 30, pitch_deg: 6, roll_deg: 0 }]]);
  // Read-only: nothing.
  const readOnly = load({ camera: { rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 5 } } } });
  assert.equal(applyInspectorEdit(readOnly, { type: "reset", target: camera, row: "roll" }, { playhead: 0, readOnly: true }).changed, false);
});

test("the Camera's Aspect reset returns to 16:9; Ground's reset leaves the state without a ground", () => {
  const state = load({ camera: { projection: "perspective", aspect: 1 } });
  state.ground = -0.5;
  applyInspectorEdit(state, { type: "reset", target: camera, row: "aspect" }, { playhead: 0 });
  assert.equal(state.camera.aspect, 16 / 9);
  applyInspectorEdit(state, { type: "reset", target: { kind: "scene", id: "scene" }, row: "ground" }, { playhead: 0 });
  assert.equal(Object.hasOwn(state, "ground"), false);
  applyInspectorEdit(state, { type: "field", target: { kind: "scene", id: "scene" }, field: "ground", value: -1.2, phase: "commit" }, { playhead: 0 });
  assert.equal(state.ground, -1.2);
});

test("a sky image's FOV reset returns the size it was placed at: H NEW_STICKER_HFOV, V from its image's aspect", () => {
  const state = load({ stickers: [sky("sticker_1", { size: { value: { hFOV_deg: 50, vFOV_deg: 10 } } })] });
  const result = applyInspectorEdit(state, { type: "reset", target: sticker, row: "fov" }, { playhead: 0, imageSizes: { sticker_1: { width: 400, height: 200 } } });
  assert.equal(result.history, true);
  assert.equal(NEW_STICKER_HFOV, 30);
  assert.deepEqual(state.stickers[0].size.value, { hFOV_deg: 30, vFOV_deg: stickerVfovFromAspect(30, 400, 200) });
  // The row is then at the value its reset returns to.
  const fov = buildInspectorModel({ state, selection: { ids: ["sticker_1"] }, imageSizes: { sticker_1: { width: 400, height: 200 } } }).cards[0].rows.find((item) => item.id === "fov");
  assert.equal(fov.atDefault, true);
});

test("a sky image's FOV reset before its image has a size keeps the aspect it is drawn at", () => {
  const state = load({ stickers: [sky("sticker_1", { size: { value: { hFOV_deg: 60, vFOV_deg: 2 * Math.atan(Math.tan(30 * Math.PI / 180) / 2) * 180 / Math.PI } } })] });
  applyInspectorEdit(state, { type: "reset", target: sticker, row: "fov" }, { playhead: 0 });
  const { hFOV_deg, vFOV_deg } = state.stickers[0].size.value;
  assert.equal(hFOV_deg, 30);
  assert.ok(Math.abs(vFOV_deg - stickerVfovFromAspect(30, 2, 1)) < 1e-9, `${vFOV_deg}`);
});

test("a port sky Sticker's FOV reset returns its hFOV only", () => {
  const state = load({ stickers: [sky("sticker_1", { source: { kind: "port" } })] });
  applyInspectorEdit(state, { type: "reset", target: sticker, row: "fov" }, { playhead: 0 });
  assert.deepEqual(state.stickers[0].size.value, { hFOV_deg: 20, vFOV_deg: 30 });
});

test("Animation: Clip by index stores the clip's name, Speed is held to its range, their resets go back to the default", () => {
  const state = load({ stickers: [world("sticker_1")] });
  const clips = [{ name: "Idle" }, { name: "Run" }];
  const context = { playhead: 0, animations: { sticker_1: clips } };
  applyInspectorEdit(state, { type: "choice", target: sticker, field: "anim_clip", value: 1 }, context);
  assert.deepEqual(state.stickers[0].animation, { clip: "Run", speed: 1 });
  applyInspectorEdit(state, { type: "field", target: sticker, field: "anim_speed", value: 50, phase: "commit" }, context);
  assert.equal(state.stickers[0].animation.speed, 10);
  applyInspectorEdit(state, { type: "reset", target: sticker, row: "anim_clip" }, context);
  assert.deepEqual(state.stickers[0].animation, { clip: null, speed: 10 });
  applyInspectorEdit(state, { type: "reset", target: sticker, row: "anim_speed" }, context);
  assert.deepEqual(state.stickers[0].animation, { clip: null, speed: 1 });
});

test("a locked Sticker and a read-only editor take no edit", () => {
  const state = load({ stickers: [world("sticker_1", { locked: true })] });
  const before = JSON.stringify(state);
  for (const edit of [
    { type: "field", target: sticker, field: "position_x", value: 9, phase: "commit" },
    { type: "key", target: sticker, row: "position" },
    { type: "reset", target: sticker, row: "position" },
  ]) assert.equal(applyInspectorEdit(state, edit, { playhead: 0 }).changed, false);
  const free = load({ stickers: [world("sticker_1")] });
  assert.equal(applyInspectorEdit(free, { type: "key", target: sticker, row: "position" }, { playhead: 0, readOnly: true }).changed, false);
  assert.equal(JSON.stringify(state), before);
});

test("a cancel changes nothing here: the shell puts back the state from before the gesture", () => {
  const state = load({ stickers: [world("sticker_1")] });
  const result = applyInspectorEdit(state, { type: "field", target: sticker, field: "position_x", phase: "cancel" }, { playhead: 0 });
  assert.deepEqual(result, { changed: false, history: false, stopPlayback: false, upstreamChanged: false, cancel: true });
});

test("Easing: a preset or a bezier sets every selected segment; the reset goes back to ease-in-out", () => {
  const keyed = (easing) => [{ frame: 0, value: 1, easing }, { frame: 10, value: 2, easing }, { frame: 20, value: 3, easing }];
  const state = load({ stickers: [world("sticker_1", { scale: { value: 1, keyframes: keyed([0, 0, 1, 1]) }, opacity: { value: 1, keyframes: keyed([0, 0, 1, 1]) } })] });
  const keyframes = { owner: "sticker_1", lane: null, frames: [0, 20] };
  applyInspectorEdit(state, { type: "easing", keyframes, easing: "hold", phase: "commit" }, { playhead: 0 });
  const easings = (lane) => state.stickers[0][lane].keyframes.map((key) => key.easing);
  assert.deepEqual(easings("scale").slice(0, 2), ["hold", "hold"]);
  assert.deepEqual(easings("opacity").slice(0, 2), ["hold", "hold"]);
  applyInspectorEdit(state, { type: "easing", keyframes: { ...keyframes, lane: "scale", frames: [10] }, easing: [0.1, 0.2, 0.3, 0.4], phase: "commit" }, { playhead: 0 });
  assert.deepEqual(easings("scale").slice(0, 2), ["hold", [0.1, 0.2, 0.3, 0.4]]);
  applyInspectorEdit(state, { type: "easing-reset", keyframes }, { playhead: 0 });
  assert.deepEqual(easings("scale").slice(0, 2), [DEFAULT_EASING, DEFAULT_EASING]);
});

function upstreamFixture() {
  const layerState = load({ id: "scene_up", stickers: [world("sticker_1")] });
  const records = load({
    upstream: [{ layer: "scene_up", fps: 24, deleted: [], stickers: [{ id: "sticker_1", placement: "world", position: { value: [5, 5, 5], keyframes: [] }, scale: { value: 3, keyframes: [] } }] }],
  }).upstream;
  const state = load();
  state.upstream = records;
  const upstream = upstreamWorkingLayers([{ sceneState: layerState, ui: {} }], records, state.timeline.fps);
  return { state, upstream };
}

test("an upstream element's row reset drops the override of that row's Lanes and shows the upstream value", () => {
  const { state, upstream } = upstreamFixture();
  const target = { kind: "sticker", id: "upstream:scene_up:sticker_1" };
  const result = applyInspectorEdit(state, { type: "reset", target, row: "position" }, { playhead: 0, upstream });
  assert.equal(result.upstreamChanged, true);
  assert.equal(result.history, true);
  const override = state.upstream[0].stickers[0];
  assert.equal(Object.hasOwn(override, "position"), false);
  assert.equal(override.scale.value, 3);
  const working = upstream[0].sceneState.stickers[0];
  assert.deepEqual(working.position.value, [1, 2, 3]);
  // The model now shows it at the upstream value, without the mark.
  const card = buildInspectorModel({ state, selection: { ids: [target.id] }, playhead: 0, upstream }).cards[0];
  const position = card.rows.find((row) => row.id === "position");
  assert.equal(position.marked, false);
  assert.equal(position.atDefault, true);
  assert.equal(card.rows.find((row) => row.id === "scale").marked, true);
});

test("an upstream element's field edit changes its working copy (the shell writes it as an override on its Undo step)", () => {
  const { state, upstream } = upstreamFixture();
  const target = { kind: "sticker", id: "upstream:scene_up:sticker_1" };
  applyInspectorEdit(state, { type: "field", target, field: "position_z", value: 9, phase: "commit" }, { playhead: 0, upstream });
  assert.deepEqual(upstream[0].sceneState.stickers[0].position.value, [5, 5, 9]);
  assert.deepEqual(evaluateLane(upstream[0].sceneState.stickers[0], "position", 0), [5, 5, 9]);
});
