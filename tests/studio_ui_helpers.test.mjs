import test from "node:test";
import assert from "node:assert/strict";
import {
  DRAG_JUMP_PX, clampValue, dragStep, dragValue, formatNumber, parseNumber, passedDragThreshold, roundValue,
} from "../web_src/studio/ui_drag.js";
import { clamp01, pointerPos, posToValue, snapPos, valueToPos } from "../web_src/studio/ui_slider.js";
import {
  ASPECT_PRESETS, ASPECT_TICK_POSITIONS, aspectLabel, aspectToPos, parseAspect, posToAspect, snapAspectPos, stepAspect,
} from "../web_src/studio/ui_aspect.js";

const near = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} ≉ ${b}`);

// docs/studio-ui.md "欄": the field is dragged left and right, Shift is 1/10.
test("a drag moves the value by step per pixel, and Shift by a tenth of it", () => {
  near(dragStep(1, 10, { step: 0.01 }), 1.1);
  near(dragStep(1, 10, { step: 0.01, fine: true }), 1.01);
  near(dragStep(1, -25, { step: 0.1 }), -1.5);
});

test("many fine movements add up instead of rounding away", () => {
  let raw = 0;
  for (let i = 0; i < 10; i += 1) raw = dragStep(raw, 1, { step: 0.01, fine: true });
  near(raw, 0.01);
  assert.equal(dragValue(raw, { precision: 2 }), 0.01);
});

test("a drag stays inside the limits and answers at once when it turns back", () => {
  let raw = dragStep(0.9, 50, { step: 0.01, min: 0, max: 1 });
  assert.equal(raw, 1);
  raw = dragStep(raw, -10, { step: 0.01, min: 0, max: 1 });
  near(raw, 0.9);
});

test("a jump of the browser's movement (the first event after pointer lock) is ignored", () => {
  assert.equal(dragStep(2, DRAG_JUMP_PX, { step: 1 }), 2);
  assert.equal(dragStep(2, Number.NaN, { step: 1 }), 2);
});

test("a press becomes a drag only past the threshold", () => {
  assert.equal(passedDragThreshold(2, 0), false);
  assert.equal(passedDragThreshold(3, 0), true);
  assert.equal(passedDragThreshold(2, 2.5), true);
});

test("values round to the precision without -0", () => {
  assert.equal(roundValue(1.005 + 1e-9, 2), 1.01);
  assert.ok(Object.is(roundValue(-0.001, 2), 0));
  assert.equal(dragValue(1.23456, { precision: 1 }), 1.2);
  assert.equal(clampValue(5, 0, 3), 3);
  assert.equal(formatNumber(-0.0001, 2), "0.00");
  assert.equal(formatNumber(60, 0), "60");
});

test("typed numbers are read with or without a unit", () => {
  assert.equal(parseNumber("1.5"), 1.5);
  assert.equal(parseNumber(" -2 "), -2);
  assert.equal(parseNumber("60°"), 60);
  assert.equal(parseNumber("72 %"), 72);
  assert.equal(parseNumber(".5"), 0.5);
  assert.equal(parseNumber("0,25"), 0.25);
  assert.equal(parseNumber("abc"), null);
  assert.equal(parseNumber(""), null);
});

test("a linear slider maps values to positions and back", () => {
  assert.equal(valueToPos(5, 0, 10), 0.5);
  assert.equal(valueToPos(20, 0, 10), 1);
  assert.equal(valueToPos(1, 1, 1), 0);
  assert.equal(posToValue(0.25, 0, 8), 2);
  assert.equal(clamp01(-1), 0);
  assert.equal(pointerPos(150, { left: 100, width: 200 }), 0.25);
  assert.equal(pointerPos(10, { left: 100, width: 0 }), 0);
});

test("a position near a tick snaps to the nearest one, and others stay", () => {
  assert.equal(snapPos(0.51, [0.25, 0.5, 0.75], 0.03), 0.5);
  assert.equal(snapPos(0.6, [0.25, 0.5, 0.75], 0.03), 0.6);
  assert.equal(snapPos(0.51, [0.5, 0.52], 0.03), 0.52);
  assert.equal(snapPos(0.51, [0.5], 0), 0.51);
});

// docs/studio-ui.md "行の格子" (the Aspect row).
test("the Aspect slider runs from 16:9 at the left through 1:1 in the middle to 9:16 at the right", () => {
  near(aspectToPos(16 / 9), 0);
  near(aspectToPos(1), 0.5);
  near(aspectToPos(9 / 16), 1);
  near(posToAspect(0), 16 / 9);
  near(posToAspect(1), 9 / 16);
  near(posToAspect(aspectToPos(1.3)), 1.3);
});

test("the Aspect slider is symmetric in log2: a ratio and its inverse mirror about the middle", () => {
  for (const ratio of [3 / 2, 4 / 3, 1.2, 1.7]) near(aspectToPos(ratio) + aspectToPos(1 / ratio), 1);
});

test("ratios outside the slider pin the knob to the end", () => {
  assert.equal(aspectToPos(2.39), 0);
  assert.equal(aspectToPos(0.25), 1);
  assert.equal(aspectToPos(0), 0.5);
});

test("the Aspect ticks are 3:2, 4:3, 1:1, 3:4, 2:3 in order", () => {
  const ticks = ASPECT_TICK_POSITIONS;
  assert.equal(ticks.length, 5);
  assert.ok(ticks.every((pos, i) => i === 0 || pos > ticks[i - 1]));
  near(ticks[2], 0.5);
  assert.deepEqual(ticks.map(posToAspect), [3 / 2, 4 / 3, 1, 3 / 4, 2 / 3]);
  assert.equal(posToAspect(0), 16 / 9);
});

// docs/studio-ui.md "行の格子": the slider picks a preset ratio only; values between come from the box.
test("the Aspect presets are the two ends and the five ticks", () => {
  assert.deepEqual([...ASPECT_PRESETS], [16 / 9, 3 / 2, 4 / 3, 1, 3 / 4, 2 / 3, 9 / 16]);
});

test("a slider position always lands on the nearest preset, never between them", () => {
  const presetPositions = ASPECT_PRESETS.map(aspectToPos);
  for (let i = 0; i <= 200; i += 1) {
    const pos = i / 200;
    const snapped = snapAspectPos(pos);
    assert.ok(presetPositions.includes(snapped), `${pos} → ${snapped}`);
    const nearest = Math.min(...presetPositions.map((p) => Math.abs(p - pos)));
    near(Math.abs(snapped - pos), nearest);
    assert.ok(ASPECT_PRESETS.includes(posToAspect(snapped)), `${pos} gives ${posToAspect(snapped)}`);
  }
  // Exact ratios, not 1.3333333333333335: a press just off 4:3 gives 4 / 3, one near the left end 16 / 9.
  assert.equal(posToAspect(snapAspectPos(ASPECT_TICK_POSITIONS[1] + 0.04)), 4 / 3);
  assert.equal(posToAspect(snapAspectPos(0.03)), 16 / 9);
  assert.equal(posToAspect(snapAspectPos(0.97)), 9 / 16);
});

test("the arrow keys step from preset to preset, and from a free ratio to the next preset that way", () => {
  // +1 is rightward on the slider: toward portrait.
  assert.equal(stepAspect(16 / 9, 1), 3 / 2);
  assert.equal(stepAspect(1, 1), 3 / 4);
  assert.equal(stepAspect(1, -1), 4 / 3);
  assert.equal(stepAspect(9 / 16, 1), null);
  assert.equal(stepAspect(16 / 9, -1), null);
  // A free ratio between 4:3 and 1:1.
  assert.equal(stepAspect(1.2, 1), 1);
  assert.equal(stepAspect(1.2, -1), 4 / 3);
  // A ratio beyond the slider's ends (typed in the box).
  assert.equal(stepAspect(2.39, 1), 16 / 9);
  assert.equal(stepAspect(2.39, -1), null);
  assert.equal(stepAspect(0.25, -1), 9 / 16);
  // A ratio a hair off a preset counts as that preset.
  assert.equal(stepAspect(4 / 3 + 1e-12, 1), 1);
});

test("the Aspect field names the common ratios and reads them back", () => {
  assert.equal(aspectLabel(16 / 9), "16:9");
  assert.equal(aspectLabel(2 / 3), "2:3");
  assert.equal(aspectLabel(2.39), "2.39");
  assert.equal(parseAspect("16:9"), 16 / 9);
  assert.equal(parseAspect("4/3"), 4 / 3);
  assert.equal(parseAspect("21x9"), 21 / 9);
  assert.equal(parseAspect("1.85"), 1.85);
  assert.equal(parseAspect("0:1"), null);
  assert.equal(parseAspect("wide"), null);
});

// docs/editor-interaction.md "ポインタの取り消しとフォーカスの喪失": what cancels a field's drag besides Escape.
test("a field's drag is cancelled by its pointer's pointercancel, the window's blur and its lost capture, until stopped", async () => {
  const { watchDragCancel } = await import("../web_src/studio/ui_drag.js");
  const target = () => {
    const listeners = new Map();
    return {
      addEventListener: (type, fn) => listeners.set(type, [...(listeners.get(type) ?? []), fn]),
      removeEventListener: (type, fn) => listeners.set(type, (listeners.get(type) ?? []).filter((item) => item !== fn)),
      fire: (type, event = {}) => (listeners.get(type) ?? []).forEach((fn) => fn({ type, ...event })),
      count: () => [...listeners.values()].reduce((sum, list) => sum + list.length, 0),
    };
  };
  const win = target();
  const element = target();
  let cancels = 0;
  const stop = watchDragCancel({ element, pointerId: 3, cancel: () => (cancels += 1), win });
  win.fire("pointercancel", { pointerId: 9 });
  element.fire("lostpointercapture", { pointerId: 9 });
  assert.equal(cancels, 0, "another pointer's events are not the drag's");
  win.fire("pointercancel", { pointerId: 3 });
  win.fire("blur");
  element.fire("lostpointercapture", { pointerId: 3 });
  assert.equal(cancels, 3);
  stop();
  assert.deepEqual([win.count(), element.count()], [0, 0]);

  // A drag that gives its capture up on purpose (the pointer lock of a value box) is not cancelled by losing it.
  const locked = watchDragCancel({ element, pointerId: 3, cancel: () => (cancels += 1), win, lostCapture: false });
  element.fire("lostpointercapture", { pointerId: 3 });
  assert.equal(cancels, 3);
  locked();
});

// docs/editor-interaction.md: Escape during a drag gives it up and is kept from the editor (ui_drag.js watchDragCancel).
test("Escape cancels a field's drag and is kept from the editor; other keys pass", async () => {
  const { watchDragCancel } = await import("../web_src/studio/ui_drag.js");
  const listeners = [];
  const win = {
    addEventListener: (type, fn, capture) => listeners.push({ type, fn, capture }),
    removeEventListener: (type, fn) => listeners.splice(listeners.findIndex((item) => item.type === type && item.fn === fn), 1),
  };
  let cancels = 0;
  const stop = watchDragCancel({ element: null, pointerId: 1, cancel: () => (cancels += 1), win, lostCapture: false });
  const keydown = listeners.find((item) => item.type === "keydown");
  assert.equal(keydown.capture, true);
  const press = (key) => {
    const event = { key, prevented: false, stopped: false, preventDefault() { this.prevented = true; }, stopPropagation() { this.stopped = true; } };
    keydown.fn(event);
    return event;
  };
  const other = press("a");
  assert.deepEqual([cancels, other.prevented, other.stopped], [0, false, false]);
  const escape = press("Escape");
  assert.deepEqual([cancels, escape.prevented, escape.stopped], [1, true, true]);
  stop();
  assert.equal(listeners.length, 0);
});
