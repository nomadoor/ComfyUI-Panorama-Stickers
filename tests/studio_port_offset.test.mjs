// The stage's drags of a returned shot (docs/editor-interaction.md "`port` の Sticker の Pose handoff の表示と記録"):
// said in the World, written as its offset from the Camera that shot it (web_src/studio/port_offset.js).
import assert from "node:assert/strict";
import test from "node:test";

import { evaluateSceneState } from "../web_src/pano_scene_eval.js";
import { loadSceneState, loadStickerState } from "../web_src/pano_scene_state.js";
import { laneNames } from "../web_src/pano_timeline.js";
import { worldRotation } from "../web_src/pano_world.js";
import { handedOff, portOffsetAt, setPortOffsetPose } from "../web_src/studio/port_offset.js";

// The Camera that shot it is turned and rolled, and moves: the drags must undo its turn at the frame.
const SHOT = loadStickerState(JSON.stringify({ kind: "pano_sticker_state", version: 3, fps: 30, camera: {
  rotation: [{ frame: 0, value: { yaw_deg: 30, pitch_deg: 10, roll_deg: 90 } }, { frame: 30, value: { yaw_deg: 80, pitch_deg: -5, roll_deg: 60 } }],
  fov: [{ frame: 0, value: 50 }],
} }));
const state = () => loadSceneState({ version: 2, timeline: { fps: 24 }, stickers: [{ id: "p", placement: "sky", source: { kind: "port" }, clip: { start: 3, in: 0, duration: null } }] });
const placed = (s, frame) => evaluateSceneState(s, frame, null, null, SHOT).stickers[0];
const forward = (value) => {
  const turn = worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg);
  return [-turn[0][2], -turn[1][2], -turn[2][2]];
};
const close = (a, b, tolerance = 1e-9) => a.every((value, index) => Math.abs(value - b[index]) <= tolerance);

test("the body's drag faces the World direction asked for and keeps the offset's roll", () => {
  const s = state();
  const sticker = s.stickers[0];
  sticker.offset_rotation.value.roll_deg = 15;
  const frame = 13;
  setPortOffsetPose(sticker, SHOT, 24, frame, { yaw_deg: -40, pitch_deg: 25 }, portOffsetAt(sticker, frame));
  assert.ok(close(forward(placed(s, frame)), forward({ yaw_deg: -40, pitch_deg: 25, roll_deg: 0 })));
  assert.equal(sticker.offset_rotation.value.roll_deg, 15);
});

test("the rotate handle turns it about its own forward by the change; a corner scales its angle of view", () => {
  const s = state();
  const sticker = s.stickers[0];
  const frame = 9;
  const before = placed(s, frame);
  const start = portOffsetAt(sticker, frame);
  setPortOffsetPose(sticker, SHOT, 24, frame, { roll_delta: 20, fov_factor: 1.5 }, start);
  const after = placed(s, frame);
  assert.ok(close(forward(after), forward(before)));
  assert.ok(Math.abs(((after.roll_deg - before.roll_deg - 20 + 540) % 360) - 180) < 1e-9);
  assert.ok(Math.abs(after.hFOV_deg - before.hFOV_deg * 1.5) < 1e-9);
});

test("only the node's own sky port Sticker is placed by the shot, and its Timeline Lanes are its offset's once marked", () => {
  const sticker = state().stickers[0];
  assert.equal(handedOff(sticker, SHOT), true);
  assert.equal(handedOff(sticker, null), false);
  assert.equal(handedOff({ ...sticker, origin: { layer: "a", id: "p" }, id: "upstream:a:p" }, SHOT), false);
  assert.equal(handedOff({ ...sticker, placement: "world" }, SHOT), false);
  assert.deepEqual(laneNames(sticker), ["direction", "roll", "size", "opacity", "curve"]);
  assert.deepEqual(laneNames({ ...sticker, placedByShot: true }), ["offset_rotation", "offset_fov", "opacity"]);
});

// docs/studio-ui.md "上流の物の編集": an upstream port Sticker its layer's shot places shows the Offset, Zoom and Opacity
// rows; a row's reset takes the override of that Lane off (back to the upstream value).
test("an upstream port Sticker placed by its layer's shot has the offset rows, and their reset reverts to upstream", async () => {
  const { upstreamLayersOf, upstreamWorkingLayers } = await import("../web_src/pano_upstream.js");
  const { buildInspectorModel } = await import("../web_src/studio/inspector_model.js");
  const { applyInspectorEdit } = await import("../web_src/studio/inspector_actions.js");
  const shot = { kind: "pano_sticker_state", version: 3, fps: 24, camera: { rotation: [{ frame: 0, value: { yaw_deg: 40 } }] } };
  const layers = upstreamLayersOf([{ state: { version: 2, id: "scene_a", stickers: [{ id: "sticker_1", placement: "sky", source: { kind: "port" } }] }, shot }]);
  const upstream = upstreamWorkingLayers(layers, [], 24);
  const own = loadSceneState({ version: 2 });
  const id = upstream[0].sceneState.stickers[0].id;
  const card = buildInspectorModel({ state: own, selection: { ids: [id] }, upstream }).cards[0];
  assert.deepEqual(card.rows.map((row) => row.id), ["offset", "zoom", "opacity"]);
  const edit = applyInspectorEdit(own, { type: "field", target: { kind: "sticker", id }, field: "offset_fov", value: 150, phase: "commit" }, { upstream });
  assert.equal(edit.changed, true);
  assert.equal(upstream[0].sceneState.stickers[0].offset_fov.value, 1.5);
  const reset = applyInspectorEdit(own, { type: "reset", target: { kind: "sticker", id }, row: "zoom" }, { upstream });
  assert.deepEqual(reset.upstreamRevert.lanes, ["offset_fov"]);
});

// CodeRabbit review: a corner scales the angle of view drawn when the drag began, also when the stored zoom puts it past
// the lens's limit (drawn at the limit).
test("a corner drag from a zoom past the lens's limit scales the drawn angle of view", () => {
  const s = state();
  const sticker = s.stickers[0];
  const frame = 9;
  sticker.offset_fov = { value: 100, keyframes: [] };
  const before = placed(s, frame);
  setPortOffsetPose(sticker, SHOT, 24, frame, { fov_factor: 0.5 }, portOffsetAt(sticker, frame));
  const after = placed(s, frame);
  assert.ok(Math.abs(after.hFOV_deg - before.hFOV_deg * 0.5) < 1e-9, `${before.hFOV_deg} → ${after.hFOV_deg}`);
});
