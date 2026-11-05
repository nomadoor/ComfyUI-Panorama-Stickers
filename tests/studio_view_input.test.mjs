// docs/space-and-view.md "マウスとキー", "カーソル", "視点の操作の部品", "ウィンドウがフォーカスを失ったとき": which
// button and modifier does what, the trackpad's wheel steps, the cursor, the knob that lights, and the reset on blur.
import assert from "node:assert/strict";
import test from "node:test";

import { KEY_MOVE_FAST } from "../web_src/pano_view_keys.js";
import {
  LOOK_CURSOR,
  ORBIT_CURSOR,
  createViewInput,
  fovNumberLit,
  fovRulerLit,
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

test("right pans anywhere, never touching an object (ADR 0060)", () => {
  assert.equal(press(2), "pan");
  assert.equal(press(2, {}, { overObject: true }), "pan");
});

test("middle looks around anywhere, never touching an object (ADR 0060)", () => {
  assert.equal(press(1), "look");
  assert.equal(press(1, {}, { overObject: true }), "look");
});

test("Alt + left and Alt + middle orbit anywhere, Alt + right is the joystick (ADR 0060)", () => {
  assert.equal(press(0, { altKey: true }), "orbit");
  assert.equal(press(0, { altKey: true }, { overObject: true }), "orbit");
  assert.equal(press(1, { altKey: true }, { overObject: true }), "orbit");
  assert.equal(press(2, { altKey: true }), "joystick");
  assert.equal(press(2, { altKey: true }, { overObject: true }), "joystick");
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
  // Once an operation starts, Alt's knobs go out and only its knob lights (docs/space-and-view.md "視点の操作の部品").
  assert.deepEqual(litKnobs({ altHeld: true, gesture: "pan" }), ["pan"]);
  assert.deepEqual(litKnobs({ altHeld: true, gesture: "orbit" }), ["orbit"]);
  assert.deepEqual(litKnobs({ altHeld: true, gesture: "joystick" }), ["move"]);
  assert.deepEqual(litKnobs({ altHeld: true, keysMoving: true }), ["move"]);
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

// docs/studio-ui.md "Camera タブ" (ADR 0061): the FOV ruler shows Alt + wheel while Alt is held with no view operation
// (a drag or the movement keys), in the Frame view, with a Camera that moves.
test("the FOV ruler lights with Alt, not during a view operation, only in the Frame view with a Camera that moves", () => {
  const on = { altHeld: true, operating: false, frame: true, movable: true };
  assert.equal(fovRulerLit(on), true);
  assert.equal(fovRulerLit({ ...on, altHeld: false }), false);
  assert.equal(fovRulerLit({ ...on, operating: true }), false);
  assert.equal(fovRulerLit({ ...on, frame: false }), false);
  assert.equal(fovRulerLit({ ...on, movable: false }), false);
});

test("the FOV number lights with Alt, not during a view operation, only where Alt + wheel changes the view's FOV", () => {
  const on = { altHeld: true, operating: false, space: true };
  assert.equal(fovNumberLit(on), true);
  assert.equal(fovNumberLit({ ...on, altHeld: false }), false);
  assert.equal(fovNumberLit({ ...on, operating: true }), false);
  // The Camera tab: the number is off there and the FOV ruler lights instead.
  assert.equal(fovNumberLit({ ...on, space: false }), false);
});
