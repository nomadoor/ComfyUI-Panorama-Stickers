// The new UI's input of the view (docs/space-and-view.md "マウスとキー", "カーソル", "視点の操作の部品", "ウィンドウが
// フォーカスを失ったとき"): which button and modifier does which operation, the wheel's steps (a trackpad's fine
// events added up), the movement keys, the stage's cursor, the knob that lights for the operation under way, and what
// is cleared when the window loses focus. view_camera.js does the moves; this only decides which.
//
// The operations: "look" (look around in place), "orbit" (about T), "pan", "joystick" (forward / back), and "object"
// (the left button on an object: selecting and editing, the selection spec's).
import { createMoveKeys, isMoveKey } from "../pano_view_keys.js";
import { readWheelDirection } from "../pano_wheel.js";
import { WHEEL_STEP_PIXELS, frameSeconds } from "./view_scale.js";

// --- Buttons and modifiers: the same table in the Panorama view and the Frame view (where the moves move the Camera).

// button (MouseEvent.button) -> [without Alt, with Alt]. Buttons and modifiers not here do nothing.
const BUTTONS = Object.freeze({
  0: ["look", "orbit"],
  1: ["pan", "joystick"],
  2: ["look", "orbit"],
});

// The operation a press starts, or null for none: a combination not in the table, or with Ctrl, Meta (left to range
// selection and the browser) or Shift. overObject: the left button is over an object the stage can touch (the CPU
// hover test); objectsTouchable false where objects are not moved (the Camera tab, the Preview window), so the left
// button looks around there. The right button never touches an object.
export function navigationAction({ button, altKey, shiftKey, ctrlKey, metaKey, overObject = false, objectsTouchable = true }) {
  if (ctrlKey || metaKey || shiftKey) return null;
  const actions = BUTTONS[button];
  if (!actions) return null;
  if (altKey) return actions[1];
  if (button === 0 && overObject && objectsTouchable) return "object";
  return actions[0];
}

// --- The knobs on the stage's right: the sphere ("orbit"), the hand ("pan") and the arrows ("move").

const KNOB_ACTIONS = Object.freeze({ orbit: "orbit", pan: "pan", move: "joystick" });

// The operation a knob's drag does (the hand's grab is the surface hit at the screen center), or null.
export function knobAction(knob) {
  return KNOB_ACTIONS[knob] ?? null;
}

// The knobs that light (shown only; nothing is kept): the one of the operation under way however it is driven
// (`gesture`; the movement keys, `keysMoving`, are the arrows'), and while Alt is held the knobs of Alt's drags (the
// sphere and the arrows). Looking around has no knob. In the knobs' order.
export function litKnobs({ gesture = null, keysMoving = false, altHeld = false }) {
  const lit = new Set();
  for (const [knob, action] of Object.entries(KNOB_ACTIONS)) if (action === gesture) lit.add(knob);
  if (keysMoving) lit.add("move");
  if (altHeld) {
    lit.add("orbit");
    lit.add("move");
  }
  return Object.keys(KNOB_ACTIONS).filter((knob) => lit.has(knob));
}

// --- The cursor.

function svgCursor(paths, fallback) {
  const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke-linecap='round' stroke-linejoin='round'>"
    + `<g stroke='black' stroke-width='4'>${paths}</g><g stroke='white' stroke-width='1.6'>${paths}</g></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 12 12, ${fallback}`;
}

// The stage's look-around cursor (an eye; `grab` where an image cursor cannot be used).
export const LOOK_CURSOR = svgCursor(
  "<path d='M2.5 12c2.5-4.2 5.7-6.3 9.5-6.3s7 2.1 9.5 6.3c-2.5 4.2-5.7 6.3-9.5 6.3s-7-2.1-9.5-6.3z'/><circle cx='12' cy='12' r='2.6'/>",
  "grab",
);
// The orbit cursor (a ring; `move` where an image cursor cannot be used).
export const ORBIT_CURSOR = svgCursor("<circle cx='12' cy='12' r='8'/><ellipse cx='12' cy='12' rx='8' ry='3'/>", "move");

const DRAG_CURSORS = Object.freeze({ look: "grabbing", orbit: ORBIT_CURSOR, pan: "move", joystick: "ns-resize" });

// The knobs' cursor: `grab` over one, `grabbing` while it is dragged.
export const KNOB_CURSOR = Object.freeze({ hover: "grab", drag: "grabbing" });

// The stage's cursor: the drag's during one; else the orbit cursor while Alt is held (over objects too); else the
// object's cursor over a touchable object (`objectCursor`, the CPU hover test's, null over none); else look around.
export function stageCursor({ gesture = null, altHeld = false, objectCursor = null }) {
  if (gesture && DRAG_CURSORS[gesture]) return DRAG_CURSORS[gesture];
  if (altHeld) return ORBIT_CURSOR;
  return objectCursor ?? LOOK_CURSOR;
}

// --- The wheel.

// The wheel's steps: push(event) gives 1 (nearer: rolled away, deltaY < 0), -1 (farther) or 0. A line or page event
// (deltaMode != 0) and a pixel event of WHEEL_STEP_PIXELS or more are one step each. Finer pixel events (a trackpad)
// add up in one direction to a step every WHEEL_STEP_PIXELS; a change of direction drops what was added up.
export function createWheelSteps() {
  let added = 0;
  return {
    push(event) {
      const fine = (event.deltaMode ?? 0) === 0 && Math.abs(event.deltaY) < WHEEL_STEP_PIXELS;
      if (!fine) {
        added = 0;
        return -readWheelDirection(event) || 0;
      }
      if (!event.deltaY) return 0;
      if (Math.sign(event.deltaY) !== Math.sign(added)) added = 0;
      added += event.deltaY;
      if (Math.abs(added) < WHEEL_STEP_PIXELS) return 0;
      const direction = Math.sign(added);
      added -= direction * WHEEL_STEP_PIXELS;
      return -direction;
    },
    reset() {
      added = 0;
    },
  };
}

// --- The input state: Alt, the movement keys, the hover, the gesture under way.

export function createViewInput() {
  const keys = createMoveKeys();
  let alt = false;
  let hover = null;
  let gesture = null;

  return {
    // Alt as an input event has it; pressing it clears the hover highlight at once (an Alt drag always orbits).
    modifiers(event) {
      alt = !!event.altKey;
      if (alt) hover = null;
    },
    altHeld: () => alt,
    // The hover (the guides', the gizmo handle's, a knob's); none while Alt is held.
    setHover(next) {
      hover = alt ? null : next;
    },
    hover: () => hover,

    // A key went down at `ts` ms: whether it is a movement key the view takes (KeyboardEvent.code; not with Ctrl or
    // Meta, which go to the browser). Shift makes the move fast; Alt does not slow it (ADR 0048). Which keys the
    // stage receives at all is the caller's (stageOwnsKey).
    keyDown(event, ts) {
      if (event.ctrlKey || event.metaKey || !isMoveKey(event.code)) return false;
      keys.modifiers({ shiftKey: event.shiftKey, altKey: false });
      return keys.press(event.code, ts);
    },
    keyUp(event) {
      keys.modifiers({ shiftKey: event.shiftKey, altKey: false });
      return keys.release(event.code);
    },
    // The keys' move for the frame at `ts` ms: { direction, seconds, fast }, or null with no key held. seconds counts
    // up to FRAME_GAP_LIMIT (view_scale.js frameSeconds).
    keyMotion(ts) {
      if (!keys.held) return null;
      return { direction: keys.direction(), seconds: frameSeconds(keys.elapsed(ts)), fast: keys.speed(1) > 1 };
    },

    beginGesture(action) {
      gesture = action;
    },
    // Ends the gesture; the one that ended.
    endGesture() {
      const ended = gesture;
      gesture = null;
      return ended;
    },
    gesture: () => gesture,

    // The window lost focus (`blur`) or the page was hidden (`visibilitychange`): Alt counts as up, every key as
    // released, the hover goes, and the gesture under way ends as if released there. What ended: { gesture, keys }
    // (the caller ends the move; in the Frame view, what moved the Camera so far is one Undo step).
    lostFocus() {
      const ended = { gesture, keys: keys.held };
      alt = false;
      hover = null;
      gesture = null;
      keys.releaseAll();
      return ended;
    },
  };
}
