// docs/space-and-view.md "マウスとキー", "カーソル", "視点の操作の部品", "ウィンドウがフォーカスを失ったとき": which
// button and modifier does what, the trackpad's wheel steps, the cursor, the knob that lights, and the reset on blur.
import assert from "node:assert/strict";
import test from "node:test";

import { KEY_MOVE_FAST } from "../web_src/pano_view_keys.js";
import {
  LOOK_CURSOR,
  ORBIT_CURSOR,
  createViewInput,
  createWheelSteps,
  knobAction,
  litKnobs,
  navigationAction,
  stageCursor,
} from "../web_src/studio/view_input.js";

const press = (button, mods = {}, over = {}) => navigationAction({ button, altKey: false, shiftKey: false, ctrlKey: false, metaKey: false, ...mods, ...over });

// --- Buttons and modifiers.

test("left on nothing looks around, left on an object selects and edits", () => {
  assert.equal(press(0), "look");
  assert.equal(press(0, {}, { overObject: true }), "object");
});

test("right looks around anywhere, never touching an object", () => {
  assert.equal(press(2), "look");
  assert.equal(press(2, {}, { overObject: true }), "look");
});

test("middle pans", () => {
  assert.equal(press(1), "pan");
  assert.equal(press(1, {}, { overObject: true }), "pan");
});

test("Alt + left and Alt + right orbit anywhere, Alt + middle is the joystick", () => {
  assert.equal(press(0, { altKey: true }), "orbit");
  assert.equal(press(0, { altKey: true }, { overObject: true }), "orbit");
  assert.equal(press(2, { altKey: true }, { overObject: true }), "orbit");
  assert.equal(press(1, { altKey: true }), "joystick");
});

test("Ctrl, Meta, Shift and other buttons do nothing to the view", () => {
  for (const mods of [{ ctrlKey: true }, { metaKey: true }, { shiftKey: true }, { altKey: true, ctrlKey: true }]) {
    assert.equal(press(0, mods), null);
    assert.equal(press(1, mods), null);
    assert.equal(press(2, mods), null);
  }
  assert.equal(press(3), null);
  assert.equal(press(4, { altKey: true }), null);
});

test("where objects cannot be touched (the Camera tab, the Preview), left always looks around", () => {
  assert.equal(press(0, {}, { overObject: true, objectsTouchable: false }), "look");
  assert.equal(press(0, { altKey: true }, { overObject: true, objectsTouchable: false }), "orbit");
});

// --- The knobs.

test("each knob's drag is its operation", () => {
  assert.equal(knobAction("orbit"), "orbit");
  assert.equal(knobAction("pan"), "pan");
  assert.equal(knobAction("move"), "joystick");
  assert.equal(knobAction("other"), null);
});

test("the knob of the operation under way lights, whatever drives it", () => {
  assert.deepEqual(litKnobs({ gesture: "orbit" }), ["orbit"]);
  assert.deepEqual(litKnobs({ gesture: "pan" }), ["pan"]);
  assert.deepEqual(litKnobs({ gesture: "joystick" }), ["move"]);
  assert.deepEqual(litKnobs({ keysMoving: true }), ["move"]);
  assert.deepEqual(litKnobs({ gesture: "look" }), []);
  assert.deepEqual(litKnobs({}), []);
});

test("while Alt is held, the knobs of Alt's drags (sphere and arrows) light", () => {
  assert.deepEqual(litKnobs({ altHeld: true }), ["orbit", "move"]);
  assert.deepEqual(litKnobs({ altHeld: true, gesture: "pan" }), ["orbit", "pan", "move"]);
});

// --- The cursor.

test("the stage's cursor: look by default, the object's over a touchable object, orbit while Alt is held", () => {
  assert.equal(stageCursor({}), LOOK_CURSOR);
  assert.match(LOOK_CURSOR, /, grab$/);
  assert.match(ORBIT_CURSOR, /, move$/);
  assert.equal(stageCursor({ objectCursor: "pointer" }), "pointer");
  assert.equal(stageCursor({ altHeld: true }), ORBIT_CURSOR);
  assert.equal(stageCursor({ altHeld: true, objectCursor: "pointer" }), ORBIT_CURSOR);
});

test("the cursor during a drag", () => {
  assert.equal(stageCursor({ gesture: "look", objectCursor: "pointer" }), "grabbing");
  assert.equal(stageCursor({ gesture: "orbit" }), ORBIT_CURSOR);
  assert.equal(stageCursor({ gesture: "pan", altHeld: true }), "move");
  assert.equal(stageCursor({ gesture: "joystick" }), "ns-resize");
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

// --- Keys.

const key = (code, mods = {}) => ({ code, shiftKey: false, altKey: false, ctrlKey: false, metaKey: false, ...mods });

test("WASD / QE move while held, by the frame time with FRAME_GAP_LIMIT", () => {
  const input = createViewInput();
  assert.equal(input.keyDown(key("KeyW"), 1000), true);
  const motion = input.keyMotion(1016);
  assert.deepEqual(motion.direction, { forward: 1, right: 0, up: 0 });
  assert.equal(motion.seconds, 0.016);
  assert.equal(motion.fast, false);
  // A stalled frame counts as 1/60 s.
  assert.equal(input.keyMotion(3000).seconds, 1 / 60);
  input.keyUp(key("KeyW"));
  assert.equal(input.keyMotion(3016), null);
});

test("Shift is fast, Alt does not slow, Ctrl and Meta go to the browser", () => {
  const input = createViewInput();
  input.keyDown(key("KeyD", { shiftKey: true }), 0);
  assert.equal(input.keyMotion(10).fast, true);
  input.keyDown(key("KeyD", { altKey: true }), 20);
  const motion = input.keyMotion(30);
  assert.equal(motion.fast, false);
  assert.equal(motion.slow, undefined);
  assert.equal(input.keyDown(key("KeyS", { ctrlKey: true }), 40), false);
  assert.equal(input.keyDown(key("KeyS", { metaKey: true }), 40), false);
  assert.equal(input.keyDown(key("KeyX"), 40), false);
  assert.ok(KEY_MOVE_FAST > 1);
});

// --- Alt and hover.

test("pressing Alt turns the hover highlight off at once", () => {
  const input = createViewInput();
  input.setHover({ id: "sticker-1" });
  assert.deepEqual(input.hover(), { id: "sticker-1" });
  input.modifiers({ altKey: true });
  assert.equal(input.altHeld(), true);
  assert.equal(input.hover(), null);
  input.setHover({ id: "sticker-2" });
  assert.equal(input.hover(), null);
  input.modifiers({ altKey: false });
  input.setHover({ id: "sticker-2" });
  assert.deepEqual(input.hover(), { id: "sticker-2" });
});

// --- Losing focus.

test("blur and a hidden page clear Alt, the held keys, the hover and end the gesture", () => {
  for (const event of ["blur", "visibilitychange"]) {
    const input = createViewInput();
    input.modifiers({ altKey: true });
    input.keyDown(key("KeyW"), 0);
    input.beginGesture("orbit");
    const ended = input.lostFocus(event);
    assert.deepEqual(ended, { gesture: "orbit", keys: true });
    assert.equal(input.altHeld(), false);
    assert.equal(input.keyMotion(16), null);
    assert.equal(input.gesture(), null);
    input.setHover({ id: "a" });
    assert.deepEqual(input.hover(), { id: "a" });
  }
  const idle = createViewInput();
  idle.setHover({ id: "a" });
  assert.deepEqual(idle.lostFocus("blur"), { gesture: null, keys: false });
  assert.equal(idle.hover(), null);
});

test("a gesture begins and ends", () => {
  const input = createViewInput();
  input.beginGesture("pan");
  assert.equal(input.gesture(), "pan");
  assert.equal(input.endGesture(), "pan");
  assert.equal(input.gesture(), null);
});
