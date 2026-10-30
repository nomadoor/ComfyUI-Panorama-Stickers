import assert from "node:assert/strict";
import test from "node:test";

import {
  KEY_MOVE_FAST,
  KEY_MOVE_SLOW,
  createMoveKeys,
  keyMoveView,
} from "../web_src/pano_view_keys.js";

function near(actual, expected, message) {
  actual.forEach((value, index) => assert.ok(Math.abs(value - expected[index]) < 1e-9, `${message}: ${actual} != ${expected}`));
}

const view = { position: [1, 2, 3], yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, distance: 4 };

test("W and S move along the view's direction laid flat, whatever the pitch", () => {
  near(keyMoveView(view, { forward: 1, right: 0, up: 0 }, 2).position, [1, 2, 1], "forward at pitch 0");
  near(keyMoveView({ ...view, pitch_deg: 60 }, { forward: 1, right: 0, up: 0 }, 2).position, [1, 2, 1], "forward looking up");
  near(keyMoveView({ ...view, pitch_deg: -89.9 }, { forward: -1, right: 0, up: 0 }, 2).position, [1, 2, 5], "back looking down");
  near(keyMoveView({ ...view, yaw_deg: 90 }, { forward: 1, right: 0, up: 0 }, 2).position, [3, 2, 3], "forward turned");
});

test("A and D strafe along the level right axis, Q and E along the World's up", () => {
  near(keyMoveView({ ...view, pitch_deg: 45 }, { forward: 0, right: 1, up: 0 }, 2).position, [3, 2, 3], "right");
  near(keyMoveView({ ...view, yaw_deg: 90 }, { forward: 0, right: -1, up: 0 }, 2).position, [1, 2, 1], "left turned");
  near(keyMoveView({ ...view, pitch_deg: 60 }, { forward: 0, right: 0, up: 1 }, 2).position, [1, 4, 3], "up");
  near(keyMoveView(view, { forward: 0, right: 0, up: -1 }, 2).position, [1, 0, 3], "down");
});

test("a diagonal moves as far as a straight move, and the rest of the view stays", () => {
  const moved = keyMoveView(view, { forward: 1, right: 1, up: 0 }, 2);
  const step = Math.SQRT2;
  near(moved.position, [1 + step, 2, 3 - step], "diagonal");
  assert.deepEqual({ ...moved, position: null }, { ...view, position: null });
  assert.equal(keyMoveView(view, { forward: 1, right: 0, up: 0 }, 0), view);
  assert.equal(keyMoveView(view, { forward: 0, right: 0, up: 0 }, 2), view);
});

test("held keys give the direction; opposite keys cancel out", () => {
  const keys = createMoveKeys();
  assert.equal(keys.held, false);
  assert.equal(keys.press("KeyW", 0), true);
  assert.equal(keys.press("KeyD", 0), true);
  assert.equal(keys.press("KeyE", 0), true);
  assert.equal(keys.press("KeyX", 0), false, "not a movement key");
  assert.equal(keys.press("Space", 0), false);
  assert.equal(keys.held, true);
  assert.deepEqual(keys.direction(), { forward: 1, right: 1, up: 1 });
  keys.press("KeyS", 0);
  keys.press("KeyA", 0);
  keys.press("KeyQ", 0);
  assert.deepEqual(keys.direction(), { forward: 0, right: 0, up: 0 });
  assert.equal(keys.release("KeyW"), true);
  assert.equal(keys.release("KeyW"), false, "released already");
  assert.equal(keys.release("KeyX"), false);
  assert.deepEqual(keys.direction(), { forward: -1, right: 0, up: 0 });
  keys.releaseAll();
  assert.equal(keys.held, false);
  assert.deepEqual(keys.direction(), { forward: 0, right: 0, up: 0 });
});

test("the speed is the content's size per second, Shift faster and Alt slower", () => {
  const keys = createMoveKeys();
  keys.press("KeyW", 1000);
  assert.equal(keys.speed(3), 3);
  keys.modifiers({ shiftKey: true, altKey: false });
  assert.equal(keys.speed(3), 3 * KEY_MOVE_FAST);
  keys.modifiers({ shiftKey: false, altKey: true });
  assert.equal(keys.speed(3), 3 * KEY_MOVE_SLOW);
  keys.modifiers({ shiftKey: true, altKey: true });
  assert.equal(keys.speed(3), 3 * KEY_MOVE_FAST * KEY_MOVE_SLOW);
  keys.releaseAll();
  assert.equal(keys.speed(3), 3, "the modifiers are let go with the keys");
  assert.equal(KEY_MOVE_FAST, 4);
  assert.equal(KEY_MOVE_SLOW, 0.25);
});

test("the clock runs from the first key's press, frame to frame, and stops when all are let go", () => {
  const keys = createMoveKeys();
  assert.equal(keys.elapsed(500), 0, "nothing held");
  keys.press("KeyW", 1000);
  assert.equal(keys.elapsed(1016), 0.016);
  keys.press("KeyD", 1020);
  assert.equal(keys.elapsed(1050), 0.034, "a second key keeps the clock");
  assert.equal(keys.elapsed(1050), 0);
  assert.equal(keys.elapsed(1040), 0, "never backwards");
  keys.release("KeyW");
  keys.release("KeyD");
  assert.equal(keys.elapsed(5000), 0);
  keys.press("KeyQ", 6000);
  assert.equal(keys.elapsed(6100), 0.1, "a new press starts the clock again");
});

test("the same move takes the same way at any frame rate", () => {
  const at = (fps) => {
    const keys = createMoveKeys();
    keys.press("KeyW", 0);
    let current = view;
    for (let frame = 1; frame <= fps; frame += 1) {
      current = keyMoveView(current, keys.direction(), keys.speed(2) * keys.elapsed(frame * 1000 / fps));
    }
    return current.position;
  };
  near(at(30), at(144), "30 fps and 144 fps");
  near(at(60), [1, 2, 1], "two content radii in a second");
});
