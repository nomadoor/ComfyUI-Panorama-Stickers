import assert from "node:assert/strict";
import test from "node:test";

import {
  WHEEL_STEP_PIXELS,
  bindWheelCaptureRoot,
  createWheelSteps,
  readWheelDirection,
  wheelMeaning,
} from "../web_src/pano_wheel.js";

test("wheel direction is normalized across modern and legacy event fields", () => {
  assert.equal(readWheelDirection({ deltaY: 12 }), 1);
  assert.equal(readWheelDirection({ deltaY: -0.25 }), -1);
  assert.equal(readWheelDirection({ deltaY: 0 }), 0);
  assert.equal(readWheelDirection({ wheelDeltaY: 120 }), -1);
  assert.equal(readWheelDirection({ wheelDelta: -120 }), 1);
  assert.equal(readWheelDirection({ detail: -3 }), -1);
  assert.equal(readWheelDirection({}, 40), 1);
});

test("wheel capture focuses the Node2 root on pointer entry and cleans up", () => {
  const listeners = new Map();
  const focusCalls = [];
  const root = {
    addEventListener(name, listener) { listeners.set(name, listener); },
    removeEventListener(name, listener) {
      if (listeners.get(name) === listener) listeners.delete(name);
    },
    focus(options) { focusCalls.push(options); },
  };

  const unbind = bindWheelCaptureRoot(root);
  listeners.get("pointerenter")?.();
  assert.deepEqual(focusCalls, [{ preventScroll: true }]);
  unbind();
  assert.equal(listeners.has("pointerenter"), false);
});

// docs/space-and-view.md "なめらかに動く操作" (the wheel), "寄る": the wheel's steps and meaning.
test("WHEEL_STEP_PIXELS is 100 px", () => {
  assert.equal(WHEEL_STEP_PIXELS, 100);
});

// --- The wheel.

test("a line or page wheel event is one step; rolling away comes nearer", () => {
  const wheel = createWheelSteps();
  assert.equal(wheel.push({ deltaY: -3, deltaMode: 1 }), 1);
  assert.equal(wheel.push({ deltaY: 3, deltaMode: 1 }), -1);
  assert.equal(wheel.push({ deltaY: 1, deltaMode: 2 }), -1);
  assert.equal(wheel.push({ deltaY: 0, deltaMode: 1 }), 0);
});

test("a pixel event of WHEEL_STEP_PIXELS or more is one step", () => {
  const wheel = createWheelSteps();
  assert.equal(wheel.push({ deltaY: -100, deltaMode: 0 }), 1);
  assert.equal(wheel.push({ deltaY: 240, deltaMode: 0 }), -1);
});

test("fine pixel events add up to a step every WHEEL_STEP_PIXELS in the same direction", () => {
  const wheel = createWheelSteps();
  assert.equal(wheel.push({ deltaY: -30, deltaMode: 0 }), 0);
  assert.equal(wheel.push({ deltaY: -30, deltaMode: 0 }), 0);
  assert.equal(wheel.push({ deltaY: -30, deltaMode: 0 }), 0);
  assert.equal(wheel.push({ deltaY: -30, deltaMode: 0 }), 1);
  // 20 px are left over.
  assert.equal(wheel.push({ deltaY: -80, deltaMode: 0 }), 1);
});

test("a change of direction drops what was added up", () => {
  const wheel = createWheelSteps();
  wheel.push({ deltaY: -90, deltaMode: 0 });
  assert.equal(wheel.push({ deltaY: 20, deltaMode: 0 }), 0);
  assert.equal(wheel.push({ deltaY: -20, deltaMode: 0 }), 0);
  assert.equal(wheel.push({ deltaY: -79, deltaMode: 0 }), 0);
  assert.equal(wheel.push({ deltaY: -1, deltaMode: 0 }), 1);
});

// docs/space-and-view.md "マウスとキー", "寄る" (ADR 0061): the wheel moves forward; Alt + wheel and a pinch (Ctrl + wheel,
// a mouse's Ctrl + wheel too) zoom; with Meta it stays the browser's. Shift changes nothing.
test("the wheel moves, Alt or Ctrl + wheel zooms, Meta + wheel is the browser's", () => {
  const wheel = (mods = {}) => ({ deltaY: -100, deltaMode: 0, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, ...mods });
  assert.equal(wheelMeaning(wheel()), "move");
  assert.equal(wheelMeaning(wheel({ shiftKey: true })), "move");
  assert.equal(wheelMeaning(wheel({ altKey: true })), "zoom");
  assert.equal(wheelMeaning(wheel({ ctrlKey: true })), "zoom");
  assert.equal(wheelMeaning(wheel({ altKey: true, shiftKey: true })), "zoom");
  assert.equal(wheelMeaning(wheel({ metaKey: true })), null);
  assert.equal(wheelMeaning(wheel({ metaKey: true, altKey: true })), null);
});

// Shift is not looked at (docs/space-and-view.md "寄る"): a browser that turns Shift + wheel into a sideways scroll
// (Chromium on Windows) sends deltaY 0 with the amount in deltaX, which counts as the wheel's.
test("Shift + wheel that came sideways (deltaY 0, the amount in deltaX) steps as the wheel does", () => {
  assert.equal(readWheelDirection({ deltaY: 0, deltaX: 120, shiftKey: true }), 1);
  assert.equal(readWheelDirection({ deltaY: 0, deltaX: -4, shiftKey: true }), -1);
  // Without Shift a sideways scroll is not the wheel's.
  assert.equal(readWheelDirection({ deltaY: 0, deltaX: 120 }), 0);
  // With deltaY there, deltaY is the amount.
  assert.equal(readWheelDirection({ deltaY: -3, deltaX: 120, shiftKey: true }), -1);

  const wheel = createWheelSteps();
  assert.equal(wheel.push({ deltaY: 0, deltaX: -100, deltaMode: 0, shiftKey: true, altKey: true }), 1);
  assert.equal(wheel.push({ deltaY: 0, deltaX: 3, deltaMode: 1, shiftKey: true, altKey: true }), -1);
  assert.equal(wheel.push({ deltaY: 0, deltaX: -60, deltaMode: 0, shiftKey: true }), 0);
  assert.equal(wheel.push({ deltaY: 0, deltaX: -40, deltaMode: 0, shiftKey: true }), 1);
  assert.equal(wheel.push({ deltaY: 0, deltaX: -100, deltaMode: 0 }), 0);
});

test("a change of the wheel's meaning drops what was added up", () => {
  const wheel = createWheelSteps();
  wheel.push({ deltaY: -90, deltaMode: 0 });
  // Alt went down: the 90 px of moving forward do not count toward the zoom.
  assert.equal(wheel.push({ deltaY: -20, deltaMode: 0, altKey: true }), 0);
  assert.equal(wheel.push({ deltaY: -79, deltaMode: 0, altKey: true }), 0);
  assert.equal(wheel.push({ deltaY: -1, deltaMode: 0, altKey: true }), 1);
  // Alt and Ctrl are the same meaning: nothing is dropped between them.
  assert.equal(wheel.push({ deltaY: -60, deltaMode: 0, altKey: true }), 0);
  assert.equal(wheel.push({ deltaY: -40, deltaMode: 0, ctrlKey: true }), 1);
  // Ctrl came off: the pinch's 50 px do not move forward.
  wheel.push({ deltaY: -50, deltaMode: 0, ctrlKey: true });
  assert.equal(wheel.push({ deltaY: -60, deltaMode: 0 }), 0);
  assert.equal(wheel.push({ deltaY: -40, deltaMode: 0 }), 1);
});

