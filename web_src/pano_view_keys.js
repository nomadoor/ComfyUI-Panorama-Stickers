// Moving the 6DoF Viewport camera with the keyboard, in any navigation preset and during any drag: W / S
// forward and back along the view's direction laid flat, A / D sideways along its level right axis, Q / E
// down and up along the World's up (glTF +Y). Keys are the physical keys (KeyboardEvent.code), so other
// layouts and Option on macOS keep them.
//
// The speed is the content's size (the radius the wheel steps scale with) per second, KEY_MOVE_FAST times
// that with Shift and KEY_MOVE_SLOW with Alt. The editor moves the view in its render loop by the time
// since the last frame (elapsed), so the way taken does not depend on the frame rate.
import { viewAxes } from "./pano_space.js";

export const KEY_MOVE_FAST = 4;
export const KEY_MOVE_SLOW = 0.25;

// code -> [axis, sign]
const MOVE_KEYS = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1],
};

export function isMoveKey(code) {
  return Object.hasOwn(MOVE_KEYS, code);
}

// The view moved `distance` toward `direction` ({ forward, right, up }, each -1 to 1), which counts as
// one move however many axes it takes. Forward and right are level whatever the pitch, as in SuperSplat,
// so looking down does not sink the view; the rest of the view stays.
export function keyMoveView(view, direction, distance) {
  const { forward, right } = viewAxes(view.yaw_deg, 0);
  const move = [0, 1, 2].map((index) => forward[index] * direction.forward + right[index] * direction.right + (index === 1 ? direction.up : 0));
  const length = Math.hypot(...move);
  if (!(length > 0) || !(distance > 0)) return view;
  return { ...view, position: view.position.map((value, index) => value + move[index] * distance / length) };
}

// The movement keys held down, the speed modifiers and the clock of the move.
export function createMoveKeys() {
  const held = new Set();
  let fast = false;
  let slow = false;
  let lastTs = 0;

  function releaseAll() {
    held.clear();
    fast = false;
    slow = false;
  }

  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(code, ts) {
      if (!isMoveKey(code)) return false;
      if (!held.size) lastTs = ts;
      held.add(code);
      return true;
    },
    // Lets a held key go; false when it was not held.
    release(code) {
      return held.delete(code);
    },
    releaseAll,
    // Shift and Alt as a key event has them.
    modifiers(ev) {
      fast = !!ev.shiftKey;
      slow = !!ev.altKey;
    },
    get held() {
      return held.size > 0;
    },
    direction() {
      const direction = { forward: 0, right: 0, up: 0 };
      for (const code of held) {
        const [axis, sign] = MOVE_KEYS[code];
        direction[axis] += sign;
      }
      return direction;
    },
    // How far a second takes the view for content of size `scale`.
    speed(scale) {
      return scale * (fast ? KEY_MOVE_FAST : 1) * (slow ? KEY_MOVE_SLOW : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(ts) {
      if (!held.size) return 0;
      const seconds = Math.max(0, ts - lastTs) / 1000;
      lastTs = Math.max(lastTs, ts);
      return seconds;
    },
  };
}
