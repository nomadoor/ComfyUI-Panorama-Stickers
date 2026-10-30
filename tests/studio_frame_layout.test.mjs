import assert from "node:assert/strict";
import test from "node:test";
import {
  CAMERA_FRAME_MARGIN,
  CAMERA_RULERS,
  RULER_HEADS,
  RULER_HEAD_ROOM,
  frameRect,
  rulerStrips,
  rulerDragValue,
  rulerSnapStep,
  rulerSnapValue,
  rulerLabel,
  rulerMarks,
} from "../web_src/studio/frame_layout.js";
import { cameraRulers, rulerEdit } from "../web_src/studio/frame_layout.js";
import { buildInspectorModel } from "../web_src/studio/inspector_model.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { FINE_FACTOR } from "../web_src/studio/ui_drag.js";

// docs/studio-ui.md "Camera タブ" and docs/design.md "大きさ": the frame in the stage less 150 / 88 / 84, the edge rulers'
// fixed lengths centered on the frame's edges, their marks and drag.

test("the margins and the rulers' lengths and value widths are the design's", () => {
  assert.deepEqual({ ...CAMERA_FRAME_MARGIN }, { left: 150, right: 150, top: 88, bottom: 84 });
  assert.deepEqual([CAMERA_RULERS.fov.length, CAMERA_RULERS.lens.length, CAMERA_RULERS.roll.length], [200, 200, 320]);
  assert.deepEqual([CAMERA_RULERS.fov.valueChars, CAMERA_RULERS.lens.valueChars, CAMERA_RULERS.roll.valueChars], [4, 4, 5]);
  // The heads: name and value above (30 + 8), the dot and the reset below (42 + 4); the strip leaves the larger at both ends.
  assert.deepEqual(JSON.parse(JSON.stringify(RULER_HEADS)), { label: { height: 30, gap: 8 }, acts: { height: 42, gap: 4 } });
  assert.equal(RULER_HEAD_ROOM, 46);
});

test("the frame is the largest box of the ratio in the area, centered in it", () => {
  // 1180 x 588: the area is 880 x 416.
  assert.deepEqual(frameRect(1180, 588, 16 / 9), { x: 220, y: 88, width: 740, height: 416 });
  assert.deepEqual(frameRect(1180, 588, 1), { x: 382, y: 88, width: 416, height: 416 });
  assert.deepEqual(frameRect(1180, 588, 9 / 16), { x: 473, y: 88, width: 234, height: 416 });
  // A wide ratio fills the width and centers in the height.
  assert.deepEqual(frameRect(1180, 588, 4), { x: 150, y: 186, width: 880, height: 220 });
});

test("each tick strip keeps its fixed length, its middle on the middle of the frame's edge", () => {
  const middle = (place) => place.offset + place.length / 2;
  // A large frame: the fixed lengths, whatever the frame's size.
  for (const rect of [{ x: 0, y: 0, width: 740, height: 416 }, { x: 0, y: 0, width: 1200, height: 900 }]) {
    const place = rulerStrips(rect);
    assert.equal(place.vertical.length, 200);
    assert.equal(place.roll.length, 320);
    assert.ok(Math.abs(middle(place.vertical) - rect.height / 2) <= 0.5);
    assert.ok(Math.abs(middle(place.roll) - rect.width / 2) <= 0.5);
  }
  // A short edge: the strip shrinks to it (a vertical one leaves the head's room at both ends), still centered.
  const small = rulerStrips({ x: 0, y: 0, width: 193, height: 287 });
  assert.equal(small.roll.length, 193);
  assert.equal(small.roll.offset, 0);
  assert.equal(small.vertical.length, 287 - 2 * RULER_HEAD_ROOM);
  assert.equal(small.vertical.offset, RULER_HEAD_ROOM);
  // Odd differences round to whole px, within half a px of the middle.
  const odd = rulerStrips({ x: 0, y: 0, width: 501, height: 401 });
  assert.ok(Number.isInteger(odd.roll.offset) && Number.isInteger(odd.vertical.offset));
  assert.ok(Math.abs(middle(odd.roll) - 250.5) <= 0.5);
  assert.ok(Math.abs(middle(odd.vertical) - 200.5) <= 0.5);
  // 1440 x 860 at 16:9 (a 286px tall frame): both heads fit inside the frame's height, the strip 194px.
  const wide = rulerStrips({ x: 0, y: 0, width: 508, height: 286 });
  assert.equal(wide.vertical.length, 194);
  assert.ok(wide.vertical.offset >= RULER_HEADS.label.height + RULER_HEADS.label.gap);
  assert.ok(286 - wide.vertical.offset - wide.vertical.length >= RULER_HEADS.acts.height + RULER_HEADS.acts.gap);
  // An empty frame: nothing to place.
  assert.equal(rulerStrips({ x: 0, y: 0, width: 0, height: 0 }).vertical.length, 0);
});

test("a stage too small for the margins gives an empty frame, and a bad ratio counts as 1", () => {
  assert.equal(frameRect(200, 100, 16 / 9).width, 0);
  assert.deepEqual(frameRect(1180, 560, 0), frameRect(1180, 560, 1));
  assert.deepEqual(frameRect(1180, 560, Number.NaN), frameRect(1180, 560, 1));
});

test("the marks put the value under the middle, grow toward the end, and number every major step", () => {
  const { ticks, labels } = rulerMarks({ value: 60, ...CAMERA_RULERS.fov, length: 400 });
  // 4 px per degree: ±50° shown, a tick every 2°.
  assert.equal(ticks.length, 51);
  assert.deepEqual(labels.map((label) => [label.text, label.at]), [["20", 40], ["40", 120], ["60", 200], ["80", 280], ["100", 360]]);
  assert.equal(ticks.filter((tick) => tick.major).length, 5);
  // A value off the grid moves the marks with it.
  const shifted = rulerMarks({ value: 61, ...CAMERA_RULERS.fov, length: 400 });
  assert.equal(shifted.labels.find((label) => label.text === "60").at, 196);
});

test("no marks past the limits, and the numbers keep their decimals without -0", () => {
  const { ticks, labels } = rulerMarks({ value: 1, ...CAMERA_RULERS.lens, length: 400, min: 0, max: 1 });
  assert.ok(ticks.every((tick) => tick.at <= 200 + 1e-9));
  assert.deepEqual(labels.map((label) => label.text), ["0.60", "0.80", "1.00"]);
  assert.equal(rulerLabel(-0.0001, 0), "0");
  assert.equal(rulerLabel(-0.0001, 2), "0.00");
  const roll = rulerMarks({ value: -4, ...CAMERA_RULERS.roll, length: 500 });
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
  // The resets: FOV and Lens the inspector's rows, Roll its own.
  assert.deepEqual(rulerEdit(rulers, "fov", "reset"), { type: "reset", target, row: "hfov" });
  assert.deepEqual(rulerEdit(rulers, "lens", "reset"), { type: "reset", target, row: "lens" });
  assert.deepEqual(rulerEdit(rulers, "roll", "reset"), { type: "reset", target, row: "roll" });
  // A κ edit carries where it began (the image's center scale stays).
  const start = { hFOV_deg: 60, aspect: 16 / 9, curve: 1 };
  assert.deepEqual(rulerEdit(rulers, "lens", "input", 0.8, start).start, start);
  assert.deepEqual(rulerEdit(rulers, "lens", "input", 0.8).start, rulers.lens.lensStart);
});

test("a ruler's reset is grayed where the inspector's is: at the default, or while the ruler is", () => {
  const moved = rulersOf(cameraState({ projection: "perspective" }));
  // This Camera: FOV 60 (the default is 90), Lens at 1 (the default), Roll -4.
  assert.deepEqual([moved.fov.atDefault, moved.lens.atDefault, moved.roll.atDefault], [false, true, false]);
  const home = rulersOf(cameraState({ projection: "perspective", fov: { value: 90 }, rotation: { value: { yaw_deg: 30, pitch_deg: 5, roll_deg: 0 } } }));
  // Roll at 0 is at its default though Yaw and Pitch are not (its reset is Roll's alone).
  assert.deepEqual([home.fov.atDefault, home.roll.atDefault], [true, true]);
  const panorama = rulersOf(cameraState({ projection: "erp" }));
  assert.ok(panorama.fov.atDefault && panorama.lens.atDefault && !panorama.roll.atDefault);
});

test("Roll with Shift stops at multiples of ROTATE_SNAP_DEG, by drag and by arrow key", () => {
  assert.equal(rulerSnapValue(-4, 15), 0);
  assert.equal(rulerSnapValue(8, 15), 15);
  assert.equal(rulerSnapValue(-172, 15, { min: -180, max: 180 }), -180);
  assert.equal(rulerSnapStep(-4, 1, 15), 0);
  assert.equal(rulerSnapStep(-4, -1, 15), -15);
  assert.equal(rulerSnapStep(0, 1, 15), 15);
  assert.equal(rulerSnapStep(15, -1, 15), 0);
  assert.equal(rulerSnapStep(175, 1, 15, { min: -180, max: 180 }), 180);
});
