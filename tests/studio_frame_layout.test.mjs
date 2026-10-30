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
