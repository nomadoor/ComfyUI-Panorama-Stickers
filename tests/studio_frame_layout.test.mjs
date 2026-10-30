import assert from "node:assert/strict";
import test from "node:test";
import {
  CAMERA_FRAME_MARGIN,
  CAMERA_RULERS,
  ROLL_RULER_MIN,
  frameRect,
  rollRulerWidth,
  rulerDragValue,
  rulerLabel,
  rulerMarks,
} from "../web_src/studio/frame_layout.js";
import { cameraRulers, rulerEdit } from "../web_src/studio/frame_layout.js";
import { buildInspectorModel } from "../web_src/studio/inspector_model.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { FINE_FACTOR } from "../web_src/studio/ui_drag.js";

// docs/studio-ui.md "Camera タブ" and docs/design.md "大きさ": the frame in the stage less 120 / 60 / 84, the Roll ruler
// 70% of the frame and at least 380px, the edge rulers' marks and drag.

test("the margins and the Roll ruler's width are the design's", () => {
  assert.deepEqual({ ...CAMERA_FRAME_MARGIN }, { left: 120, right: 120, top: 60, bottom: 84 });
  assert.equal(ROLL_RULER_MIN, 380);
  assert.equal(rollRulerWidth(1000), 700);
  assert.equal(rollRulerWidth(300), 380);
});

test("the frame is the largest box of the ratio in the area, centered in it", () => {
  // 1180 x 560: the area is 940 x 416.
  assert.deepEqual(frameRect(1180, 560, 16 / 9), { x: 220, y: 60, width: 740, height: 416 });
  assert.deepEqual(frameRect(1180, 560, 1), { x: 382, y: 60, width: 416, height: 416 });
  assert.deepEqual(frameRect(1180, 560, 9 / 16), { x: 473, y: 60, width: 234, height: 416 });
  // A wide ratio fills the width and centers in the height.
  assert.deepEqual(frameRect(1180, 560, 4), { x: 120, y: 151, width: 940, height: 235 });
});

test("a stage too small for the margins gives an empty frame, and a bad ratio counts as 1", () => {
  assert.equal(frameRect(200, 100, 16 / 9).width, 0);
  assert.deepEqual(frameRect(1180, 560, 0), frameRect(1180, 560, 1));
  assert.deepEqual(frameRect(1180, 560, Number.NaN), frameRect(1180, 560, 1));
});

test("the marks put the value under the middle, grow toward the end, and number every major step", () => {
  const { ticks, labels } = rulerMarks({ value: 60, length: 400, ...CAMERA_RULERS.fov });
  // 4 px per degree: ±50° shown, a tick every 2°.
  assert.equal(ticks.length, 51);
  assert.deepEqual(labels.map((label) => [label.text, label.at]), [["20", 40], ["40", 120], ["60", 200], ["80", 280], ["100", 360]]);
  assert.equal(ticks.filter((tick) => tick.major).length, 5);
  // A value off the grid moves the marks with it.
  const shifted = rulerMarks({ value: 61, length: 400, ...CAMERA_RULERS.fov });
  assert.equal(shifted.labels.find((label) => label.text === "60").at, 196);
});

test("no marks past the limits, and the numbers keep their decimals without -0", () => {
  const { ticks, labels } = rulerMarks({ value: 1, length: 400, ...CAMERA_RULERS.lens, min: 0, max: 1 });
  assert.ok(ticks.every((tick) => tick.at <= 200 + 1e-9));
  assert.deepEqual(labels.map((label) => label.text), ["0.60", "0.80", "1.00"]);
  assert.equal(rulerLabel(-0.0001, 0), "0");
  assert.equal(rulerLabel(-0.0001, 2), "0.00");
  const roll = rulerMarks({ value: -4, length: 500, ...CAMERA_RULERS.roll });
  assert.deepEqual(roll.labels.map((label) => label.text), ["-30", "-20", "-10", "0", "10", "20"]);
});

test("a drag moves the ruler under the mark: toward the end brings smaller values, Shift a tenth, within the limits", () => {
  assert.equal(rulerDragValue(60, 40, 4), 50);
  assert.equal(rulerDragValue(60, -40, 4), 70);
  assert.equal(rulerDragValue(60, 40, 4, { fine: true }), 60 - 10 * FINE_FACTOR);
  assert.equal(rulerDragValue(60, -1000, 4, { max: 120 }), 120);
  assert.equal(rulerDragValue(0.5, 400, 400, { min: 0 }), 0);
});

const cameraState = (camera) => loadSceneState({ version: 2, camera: { aspect: 16 / 9, position: { value: [0, 0, 0] }, rotation: { value: { yaw_deg: 10, pitch_deg: 0, roll_deg: -4 } }, fov: { value: 60 }, ...camera } });
const rulersOf = (state, options = {}) => cameraRulers(buildInspectorModel({ state, tab: "camera", ...options }).cards[0]);

test("the edge rulers are the Camera card's H FOV, Lens and Roll: values, ranges, dots and gray rows", () => {
  const frame = rulersOf(cameraState({ projection: "perspective", fov: { value: 60, keyframes: [{ frame: 0, value: 60 }] } }));
  assert.deepEqual([frame.fov.value, frame.fov.min, frame.fov.max, frame.fov.valueText, frame.fov.row], [60, 1, 179, "60°", "hfov"]);
  assert.deepEqual([frame.lens.value, frame.lens.valueText, frame.lens.row, frame.lens.field], [1, "1.00", "lens", "curve"]);
  assert.deepEqual([frame.roll.value, frame.roll.valueText, frame.roll.row, frame.roll.min, frame.roll.max], [-4, "-4°", "rotation", -180, 180]);
  assert.equal(frame.fov.keyState, "now");
  assert.equal(frame.roll.keyState, "none");
  assert.ok(!frame.fov.disabled && !frame.lens.disabled && !frame.roll.disabled);
  // Panorama mode: FOV and Lens gray with the card's tooltip, Roll live.
  const panorama = rulersOf(cameraState({ projection: "erp" }));
  assert.ok(panorama.fov.disabled && panorama.lens.disabled && !panorama.roll.disabled);
  assert.equal(panorama.fov.tip, "Used in Frame mode");
  // Read-only or a locked Camera: all three gray.
  const readOnly = rulersOf(cameraState({ projection: "perspective" }), { readOnly: true });
  assert.ok(readOnly.fov.disabled && readOnly.lens.disabled && readOnly.roll.disabled);
  assert.equal(cameraRulers(buildInspectorModel({ state: cameraState({}), tab: "3d" }).cards[0]), null);
});

test("a ruler's events are the inspector's edits of its row: input live, change one step, cancel back, the dot keys the row", () => {
  const rulers = rulersOf(cameraState({ projection: "perspective" }));
  const target = { kind: "camera", id: "camera" };
  assert.deepEqual(rulerEdit(rulers, "fov", "input", 70), { type: "field", target, field: "hFOV_deg", value: 70, phase: "input" });
  assert.deepEqual(rulerEdit(rulers, "roll", "change", -9), { type: "field", target, field: "roll_deg", value: -9, phase: "commit" });
  assert.deepEqual(rulerEdit(rulers, "fov", "cancel"), { type: "field", target, field: "hFOV_deg", value: undefined, phase: "cancel" });
  assert.deepEqual(rulerEdit(rulers, "roll", "key"), { type: "key", target, row: "rotation" });
  assert.deepEqual(rulerEdit(rulers, "lens", "key"), { type: "key", target, row: "lens" });
  // A κ edit carries where it began (the image's center scale stays).
  const start = { hFOV_deg: 60, aspect: 16 / 9, curve: 1 };
  assert.deepEqual(rulerEdit(rulers, "lens", "input", 0.8, start).start, start);
  assert.deepEqual(rulerEdit(rulers, "lens", "input", 0.8).start, rulers.lens.lensStart);
});
