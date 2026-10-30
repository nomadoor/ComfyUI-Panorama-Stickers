// The new UI's one viewpoint (docs/space-and-view.md "視点は一つ", "世界の境界", "注視点 `T`", "直接の操作",
// "なめらかに動く操作", "Frame 表示"): the view's position P, its direction (yaw, pitch; roll only for the Frame view's
// Camera) and its target T, and how every operation moves them. The quantities are view_scale.js's.
//
// A pose is { position, yaw_deg, pitch_deg, roll_deg, target } (World glTF arrays, degrees; pano_space.js viewAxes).
// d is |P - T|. Nothing here reads the GPU: the hits a pan's press, a wheel step and a double click need (the GPU
// pick, pano_three_view.js pick) come in as arguments, so the rules stay pure. The first T is found here on the CPU.
//
// createViewCamera() holds one viewpoint: the Panorama view's (and the Preview window's), or, with `frame`, the Frame
// view's, where the pose is the Camera itself and its moves go to the Camera's Lane (the caller writes them).
import { DEG2RAD, RAD2DEG, clamp, shortestYawDelta, wrapYaw } from "../pano_camera_math.js";
import { rayBoxDepth } from "../pano_ray_box.js";
import { DEFAULT_VIEW_HFOV, frameView, orbitView, viewAxes } from "../pano_space.js";
import { KEY_MOVE_FAST, keyMoveView } from "../pano_view_keys.js";
import { restoredView, viewMemory } from "../pano_view_memory.js";
import { worldRotation } from "../pano_world.js";
import {
  ACTION_EASE_SECONDS,
  BOUND_NOTICE_SECONDS,
  JOYSTICK_PIXELS,
  ORBIT_DEG_PER_PIXEL,
  PITCH_LIMIT,
  WHEEL_EASE_SECONDS,
  WHEEL_FACTOR,
  eyeHeight,
  eyeLengths,
  worldBoundRadius,
} from "./view_scale.js";

// The stage's one-line notices (docs/space-and-view.md "世界の境界", "黙って何もしない操作").
export const VIEW_NOTICES = Object.freeze({
  bound: "The view can't go farther",
  "nothing-to-focus": "Nothing to focus on",
  "nothing-to-frame": "Nothing to frame",
});

const add = (a, b, s = 1) => [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const length = (a) => Math.hypot(a[0], a[1], a[2]);
const lerp = (a, b, t) => a + (b - a) * t;
const EPSILON = 1e-12;

function copyPose(p) {
  return { position: [...p.position], yaw_deg: p.yaw_deg, pitch_deg: p.pitch_deg, roll_deg: p.roll_deg ?? 0, target: [...p.target] };
}

function forwardOf(p) {
  return viewAxes(p.yaw_deg, p.pitch_deg).forward;
}

// The pose as pano_space.js and pano_view_keys.js take a view.
function asView(p, hFovDeg = DEFAULT_VIEW_HFOV) {
  return { position: p.position, yaw_deg: p.yaw_deg, pitch_deg: p.pitch_deg, roll_deg: p.roll_deg ?? 0, hFOV_deg: hFovDeg, distance: length(sub(p.target, p.position)) };
}

// The eased moves' curve: 1 - (1 - t)^3.
export function easeOut(t) {
  return 1 - Math.pow(1 - clamp(t, 0, 1), 3);
}

// --- The world bound.

// The world bound's radius for `world` ({ ground, content, camera }) and an eased destination.
function boundOf(world, destination = null, camera = world.camera ?? null) {
  return worldBoundRadius({ eye: eyeHeight(world.ground), content: world.content ?? null, camera, destination });
}

// Where a move from `from` to `to` ends in the world bound of `radius` about the origin: `to` when it is inside;
// from inside, where the move crosses the bound; from outside, `to` when it comes nearer, else `from`. stopped: the
// bound cut it short.
export function clipToBound(from, to, radius) {
  if (length(to) <= radius) return { position: [...to], stopped: false };
  if (length(from) > radius) {
    return length(to) < length(from) ? { position: [...to], stopped: false } : { position: [...from], stopped: true };
  }
  // |from + t (to - from)| = radius, the root in [0, 1] where it leaves.
  const way = sub(to, from);
  const a = dot(way, way);
  const b = 2 * dot(from, way);
  const c = dot(from, from) - radius * radius;
  const t = clamp((-b + Math.sqrt(Math.max(0, b * b - 4 * a * c))) / (2 * a), 0, 1);
  return { position: add(from, way, t), stopped: true };
}

// --- T.

// `point` as T for a view at `position`: on the line from it, at a distance within [TARGET_MIN_DISTANCE,
// TARGET_MAX_DISTANCE] (along `forward` when the point is the position itself).
function targetWithin(position, point, eye, forward) {
  const { TARGET_MIN_DISTANCE, TARGET_MAX_DISTANCE } = eyeLengths(eye);
  const offset = sub(point, position);
  const away = length(offset);
  const direction = away > EPSILON ? offset.map((value) => value / away) : forward;
  return add(position, direction, clamp(away, TARGET_MIN_DISTANCE, TARGET_MAX_DISTANCE));
}

// T on the screen center's line at the distance `distance` (within the range).
function centered(p, distance, eye) {
  const forward = forwardOf(p);
  return { ...p, target: targetWithin(p.position, add(p.position, forward, distance), eye, forward) };
}

// How far along the ray origin + t direction (direction of length 1) it enters a box ({ box: { min, max }, transform }
// with the item's transform { position, yaw_deg, pitch_deg, roll_deg, scale } taking it to the World, as pano_space.js
// transformPoint does; no transform for a box in the World frame). null when it misses.
function boxDepth(origin, direction, { box, transform = null }) {
  if (!transform) return rayBoxDepth(origin, direction, box);
  const rotation = worldRotation(transform.yaw_deg, transform.pitch_deg, transform.roll_deg);
  const scale = transform.scale;
  if (!(scale > 0)) return null;
  // The inverse of position + scale R x: R^T (p - position) / scale; t keeps its meaning as the map is affine.
  const local = (v) => [0, 1, 2].map((axis) => (rotation[0][axis] * v[0] + rotation[1][axis] * v[1] + rotation[2][axis] * v[2]) / scale);
  return rayBoxDepth(local(sub(origin, transform.position)), local(direction), box);
}

// The first T of a view `p` (opening, Reset View, entering the Frame view): where the screen center's line first hits
// the ground (y = ground) or a 3D box (`boxes`: the 3D Stickers' turned item boxes and the `scene` items' boxes, as
// boxDepth() takes them) inside the world bound of `radius`, on the CPU; without a hit, TARGET_DEFAULT_DISTANCE along
// the line. Either is kept within the distance range.
export function initialTarget(p, world, radius = boundOf(world)) {
  const eye = eyeHeight(world.ground);
  const forward = forwardOf(p);
  const depths = [];
  if (Math.abs(forward[1]) > EPSILON) depths.push((world.ground - p.position[1]) / forward[1]);
  for (const item of world.boxes ?? []) depths.push(boxDepth(p.position, forward, item));
  let nearest = null;
  for (const depth of depths) {
    if (depth === null || !(depth >= 0)) continue;
    if (length(add(p.position, forward, depth)) > radius) continue;
    if (nearest === null || depth < nearest) nearest = depth;
  }
  const distance = nearest ?? eyeLengths(eye).TARGET_DEFAULT_DISTANCE;
  return targetWithin(p.position, add(p.position, forward, distance), eye, forward);
}

// The center an orbit turns about when it starts, or null to turn about the current T: the selected World object's
// center (its Frame Selected sphere, pano_space.js frameSphere; `sphere` null while it does not show or its center is
// not known), or the selected Camera's position in the 3D tab (`frame` false). In the Camera tab the Camera itself does
// not count. selection: null, { kind: "object", sphere } or { kind: "camera", position }.
export function orbitCenter({ selection, frame = false }) {
  if (selection?.kind === "object") return selection.sphere ? [...selection.sphere.center] : null;
  if (selection?.kind === "camera" && !frame) return [...selection.position];
  return null;
}

// The sphere Frame Selected fits: around a selected Camera's position with CAMERA_FRAME_RADIUS, the selected World
// object's (selection.sphere, frameSphere's, which is the content's for a sky Sticker or an object that does not
// show), else the whole World content (`content`; null without it, when Frame Selected does nothing).
export function frameSelectedSphere({ selection, content, ground }) {
  if (selection?.kind === "camera") return { center: [...selection.position], radius: eyeLengths(eyeHeight(ground)).CAMERA_FRAME_RADIUS };
  if (selection?.kind === "object" && selection.sphere) return selection.sphere;
  return content ?? null;
}

// --- Opening and the view memory (kept per node for the page, pano_node_bridge.js editorSession(node).view).

const TABS = { panorama: "pano", frame: "frame" };

// What the memory keeps of a pose closed in `tab` ("panorama" or "frame"): P, yaw, pitch and d (pass the pose an
// eased move goes to, so a move under way is remembered where it ends). The shape is pano_view_memory.js viewMemory's.
export function rememberView(p, tab) {
  return viewMemory({
    mode: TABS[tab],
    spaceMode: "6dof",
    viewPosition: p.position,
    viewYaw: p.yaw_deg,
    viewPitch: p.pitch_deg,
    viewFov: DEFAULT_VIEW_HFOV,
    viewDistance: length(sub(p.target, p.position)),
    viewMoved: true,
  });
}

// The { tab, pose } a memory opens with, T d ahead; null when it cannot be used (a value that is no number, a tab the
// new UI does not have, the Frame view when it cannot open), and then everything opens at the output.
export function recallView(memory, { frameAvailable, ground }) {
  const restored = restoredView(memory, { frame: frameAvailable });
  if (!restored || (restored.mode !== "pano" && restored.mode !== "frame")) return null;
  const p = { position: restored.viewPosition, yaw_deg: wrapYaw(restored.viewYaw), pitch_deg: restored.viewPitch, roll_deg: 0, target: restored.viewPosition };
  return { tab: restored.mode === "frame" ? "frame" : "panorama", pose: centered(p, restored.viewDistance, eyeHeight(ground)) };
}

// The view the editor opens with: the memory's when it can be used, else the output's (`output`: the Camera's
// position and yaw at the playhead) looking level, with the first T.
export function openingView({ memory = null, output, world, frameAvailable = false }) {
  const recalled = memory ? recallView(memory, { frameAvailable, ground: world.ground }) : null;
  if (recalled) return recalled;
  const p = { position: [...output.position], yaw_deg: wrapYaw(output.yaw_deg), pitch_deg: 0, roll_deg: 0 };
  return { tab: "panorama", pose: { ...p, target: initialTarget({ ...p, target: p.position }, world) } };
}

// --- The stage's notice: shown for BOUND_NOTICE_SECONDS after the last time.

export function createNotice() {
  let code = null;
  let since = 0;
  return {
    // Shows the notice `code` (a VIEW_NOTICES key; null shows nothing) at `now` seconds.
    show(next, now) {
      if (!next) return;
      code = next;
      since = now;
    },
    // The text shown at `now`, or null.
    current(now) {
      return code && now - since < BOUND_NOTICE_SECONDS ? VIEW_NOTICES[code] : null;
    },
    clear() {
      code = null;
    },
  };
}

// --- The viewpoint.

// A drag of (dx, dy) pixels on a view rolled rollDeg, in the axes of the same view without roll (as orbitView takes it).
function unrolled(dx, dy, rollDeg) {
  const c = Math.cos(rollDeg * DEG2RAD);
  const s = Math.sin(rollDeg * DEG2RAD);
  return [dx * c + dy * s, dy * c - dx * s];
}

// The viewpoint, from `pose`. frame: the Frame view's, where the pose is the Camera: wheel steps and Frame Selected
// apply at once, there is no double click and no Reset View, the Camera keeps its roll, and the world bound counts the
// Camera where the gesture started. Every move returns { moved, notice } (notice: a VIEW_NOTICES key or null).
export function createViewCamera({ pose: start, frame = false }) {
  let pose = copyPose(start);
  if (!frame) pose.roll_deg = 0;
  // An eased move: { from, to, elapsed, seconds }.
  let ease = null;
  // The destination of the last eased action, which the world bound holds until the next one.
  let destination = null;
  let world = { ground: -1.6, boxes: [], content: null, camera: null };
  let screen = { width: 1, height: 1, hFOV_deg: DEFAULT_VIEW_HFOV };
  // The gesture under way: the Camera's position when it started (Frame view) and the pan's depth.
  let gestureCamera = null;
  let panDepth = null;

  const eye = () => eyeHeight(world.ground);
  const result = (moved, notice = null) => ({ moved, notice });

  function bound() {
    const camera = frame ? (gestureCamera ?? pose.position) : (world.camera ?? null);
    return boundOf(world, destination, camera);
  }

  function shown() {
    if (!ease) return pose;
    const k = easeOut(ease.elapsed / ease.seconds);
    const { from, to } = ease;
    return {
      position: from.position.map((value, axis) => lerp(value, to.position[axis], k)),
      yaw_deg: wrapYaw(from.yaw_deg + shortestYawDelta(from.yaw_deg, to.yaw_deg) * k),
      pitch_deg: lerp(from.pitch_deg, to.pitch_deg, k),
      roll_deg: to.roll_deg,
      target: from.target.map((value, axis) => lerp(value, to.target[axis], k)),
    };
  }

  // A direct operation starts from what shows: an eased move stops there.
  function direct() {
    if (ease) {
      pose = shown();
      ease = null;
    }
    return pose;
  }

  // The pose a new eased action starts from: where the eased move under way goes.
  function aim() {
    return ease ? ease.to : pose;
  }

  // Goes to `to`: eased over `seconds` from what shows, or at once in the Frame view (or with no seconds).
  function go(to, seconds) {
    if (frame || !seconds) {
      pose = to;
      ease = null;
      return;
    }
    ease = { from: shown(), to, elapsed: 0, seconds };
    pose = to;
  }

  // Moves P to `wanted` within the world bound, T following on the center line at d before the move.
  function moveTo(base, wanted) {
    const d = length(sub(base.target, base.position));
    const { position, stopped } = clipToBound(base.position, wanted, bound());
    const moved = length(sub(position, base.position)) > EPSILON;
    pose = centered({ ...base, position }, d, eye());
    return result(moved, stopped ? "bound" : null);
  }

  function hFov() {
    return screen.hFOV_deg;
  }

  function tanHalf() {
    const tanX = Math.tan(hFov() * 0.5 * DEG2RAD);
    return { tanX, tanY: tanX * screen.height / screen.width };
  }

  return {
    // The World around the view: { ground, boxes, content, camera } (the ground height, the 3D boxes the first T hits,
    // the shown content's bounding sphere, and the Camera's position at the playhead).
    setWorld(next) {
      world = { ...world, ...next };
    },
    // The view's size in CSS px and its horizontal FOV (DEFAULT_VIEW_HFOV; in the Frame view the Camera's H FOV and
    // the width of the Camera's frame on the stage).
    setScreen(next) {
      screen = { ...screen, ...next };
    },
    // The pose shown now, and the one an eased move goes to.
    pose: () => copyPose(shown()),
    destination: () => copyPose(pose),
    animating: () => !!ease,
    // The world bound's radius now.
    bound,

    // Starts the pose at `next` at once, with T at its first T (entering the Frame view, opening).
    enter(next) {
      ease = null;
      const p = { position: [...next.position], yaw_deg: wrapYaw(next.yaw_deg), pitch_deg: clamp(next.pitch_deg, -PITCH_LIMIT, PITCH_LIMIT), roll_deg: frame ? (next.roll_deg ?? 0) : 0 };
      pose = { ...p, target: initialTarget({ ...p, target: p.position }, world, bound()) };
    },

    // --- Direct operations (1:1, at once).

    // Looking around in place by a drag of (dx, dy) px: yaw by dx / width x H FOV, pitch by dy / height x V FOV.
    look(dx, dy) {
      const base = direct();
      const d = length(sub(base.target, base.position));
      const [x, y] = unrolled(dx, dy, base.roll_deg);
      const { tanY } = tanHalf();
      const vFov = 2 * Math.atan(tanY) * RAD2DEG;
      const yaw = wrapYaw(base.yaw_deg - x / screen.width * hFov());
      const pitch = clamp(base.pitch_deg + y / screen.height * vFov, -PITCH_LIMIT, PITCH_LIMIT);
      pose = centered({ ...base, yaw_deg: yaw, pitch_deg: pitch }, d, eye());
      return result(true);
    },

    // An orbit starts: `center` (orbitCenter()'s, or null) becomes T, within the range, without turning the view.
    beginOrbit(center) {
      const base = direct();
      if (center) pose = { ...base, target: targetWithin(base.position, center, eye(), forwardOf(base)) };
      return result(false);
    },
    // Turns about T by a drag of (dx, dy) px at ORBIT_DEG_PER_PIXEL (pano_space.js orbitView); T stays in the World and
    // on the screen. The world bound does not stop it.
    orbit(dx, dy) {
      const base = direct();
      const turned = orbitView(asView(base), dx, dy, 360 / ORBIT_DEG_PER_PIXEL, base.target);
      pose = { ...base, position: turned.position, yaw_deg: turned.yaw_deg, pitch_deg: turned.pitch_deg };
      return result(true);
    },

    // A pan starts on `grab`, the surface hit under the pointer (null over nothing): its depth along the view axis,
    // T's when there is none or it is not ahead, at most TARGET_MAX_DISTANCE.
    beginPan(grab) {
      const base = direct();
      gestureCamera = [...base.position];
      const forward = forwardOf(base);
      const grabbed = grab ? dot(sub(grab, base.position), forward) : 0;
      const depth = grabbed > 0 ? grabbed : dot(sub(base.target, base.position), forward);
      const { TARGET_MIN_DISTANCE, TARGET_MAX_DISTANCE } = eyeLengths(eye());
      panDepth = clamp(depth, TARGET_MIN_DISTANCE, TARGET_MAX_DISTANCE);
      return result(false);
    },
    // Moves P and T across the view by a drag of (dx, dy) px, so the grabbed point stays under the pointer: a pixel
    // is 2 z tan(H FOV / 2) / W at the depth z.
    pan(dx, dy) {
      const base = direct();
      if (panDepth === null) this.beginPan(null);
      const perPixel = 2 * panDepth * tanHalf().tanX / screen.width;
      const { right, up } = viewAxes(base.yaw_deg, base.pitch_deg, base.roll_deg);
      return moveTo(base, add(add(base.position, right, -dx * perPixel), up, dy * perPixel));
    },

    // The joystick starts (and the keys: beginKeys).
    beginJoystick() {
      gestureCamera = [...direct().position];
      return result(false);
    },
    // Moves along forward by d x offset / JOYSTICK_PIXELS per second for `seconds` (view_scale.js frameSeconds);
    // offset: the pointer's px above the press (below goes back).
    joystick(offset, seconds) {
      const base = direct();
      const d = length(sub(base.target, base.position));
      return moveTo(base, add(base.position, forwardOf(base), d * offset / JOYSTICK_PIXELS * seconds));
    },
    beginKeys() {
      gestureCamera = [...direct().position];
      return result(false);
    },
    // WASD / QE: d per second toward `direction` (pano_view_keys.js createMoveKeys().direction()) for `seconds`,
    // KEY_MOVE_FAST times that with Shift (`fast`). Alt does not slow it.
    keys(direction, seconds, fast) {
      const base = direct();
      const d = length(sub(base.target, base.position));
      const moved = keyMoveView(asView(base), direction, d * (fast ? KEY_MOVE_FAST : 1) * seconds);
      return moveTo(base, moved.position);
    },
    // The gesture (drag, joystick, keys) ended.
    endGesture() {
      gestureCamera = null;
      panDepth = null;
    },

    // --- Wheel and eased actions.

    // One wheel step toward the pointer (step > 0) or away, about `hit`, the surface hit under the pointer: P and T
    // scale about G by k (P' = G + k (P - G)). G is T when there is no hit, it is farther than TARGET_MAX_DISTANCE
    // from the view, or outside the world bound. k is the WHEEL_FACTOR step within [1 / WHEEL_FACTOR, 1] in or
    // [1, WHEEL_FACTOR] out and within the distance range; when that leaves 1, nothing moves and the bound's notice
    // shows. The bound stops P, and T moves by the same share. A step during an eased move starts from the view shown,
    // where G was picked, and eases on from there to its own destination; a step that moves nothing leaves the move.
    wheel(step, hit) {
      if (!step) return result(false);
      const base = copyPose(shown());
      // In the Frame view a wheel step is a gesture of its own: the bound counts the Camera where it starts.
      const radius = frame ? boundOf(world, destination, gestureCamera ?? base.position) : bound();
      const { TARGET_MIN_DISTANCE, TARGET_MAX_DISTANCE } = eyeLengths(eye());
      const usable = hit && length(sub(hit, base.position)) <= TARGET_MAX_DISTANCE && length(hit) <= radius;
      const G = usable ? hit : base.target;
      const d = length(sub(base.target, base.position));
      const low = Math.max(step > 0 ? 1 / WHEEL_FACTOR : 1, TARGET_MIN_DISTANCE / d);
      const high = Math.min(step > 0 ? 1 : WHEEL_FACTOR, TARGET_MAX_DISTANCE / d);
      const k = low <= high ? clamp(step > 0 ? 1 / WHEEL_FACTOR : WHEEL_FACTOR, low, high) : 1;
      if (Math.abs(k - 1) < 1e-9) return result(false, "bound");
      const scaled = (point) => add(G, sub(point, G), k);
      const wanted = scaled(base.position);
      const { position, stopped } = clipToBound(base.position, wanted, radius);
      const way = length(sub(wanted, base.position));
      const share = way > EPSILON ? length(sub(position, base.position)) / way : 1;
      const target = add(base.target, sub(scaled(base.target), base.target), Math.min(1, share));
      const moved = length(sub(position, base.position)) > EPSILON;
      if (moved) go({ ...base, position, target }, WHEEL_EASE_SECONDS);
      return result(moved, stopped || !moved ? "bound" : null);
    },

    // A double click on `hit` (the GPU hit under the pointer, World image planes included; null over nothing): it
    // becomes T and the view turns to center it over ACTION_EASE_SECONDS, P staying. Not in the Frame view.
    focus(hit) {
      if (frame) return result(false);
      if (!hit) return result(false, "nothing-to-focus");
      const base = aim();
      const target = targetWithin(base.position, hit, eye(), forwardOf(base));
      const offset = sub(target, base.position);
      const away = length(offset);
      const yaw = Math.atan2(offset[0], -offset[2]) * RAD2DEG;
      const pitch = clamp(Math.asin(clamp(offset[1] / away, -1, 1)) * RAD2DEG, -PITCH_LIMIT, PITCH_LIMIT);
      const to = { ...base, yaw_deg: wrapYaw(yaw + 0), pitch_deg: pitch, target };
      destination = [...to.position];
      go(to, ACTION_EASE_SECONDS);
      return result(true);
    },

    // Frame Selected: keeping the direction, to where `sphere` (frameSelectedSphere()'s; null: nothing to frame) fits
    // the view (pano_space.js frameView), with T at its center within the range. Eased; at once in the Frame view.
    frameSelected(sphere) {
      if (!sphere) return result(false, "nothing-to-frame");
      const base = aim();
      const framed = frameView(asView(base, hFov()), sphere, screen.width, screen.height);
      const to = { ...base, position: framed.position, target: targetWithin(framed.position, sphere.center, eye(), forwardOf(base)) };
      destination = [...to.position];
      go(to, ACTION_EASE_SECONDS);
      return result(true);
    },

    // Reset View: eases to `to` ({ position, yaw_deg, pitch_deg }: the output view the editor opened with, or the
    // Preview's origin), T at the first T found there. Not in the Frame view.
    reset(to) {
      if (frame) return result(false);
      const p = { position: [...to.position], yaw_deg: wrapYaw(to.yaw_deg), pitch_deg: clamp(to.pitch_deg, -PITCH_LIMIT, PITCH_LIMIT), roll_deg: 0 };
      destination = [...p.position];
      const target = initialTarget({ ...p, target: p.position }, world, bound());
      go({ ...p, target }, ACTION_EASE_SECONDS);
      return result(true);
    },

    // Moves an eased move on by `seconds` (the render loop's frame time); whether one is still under way.
    step(seconds) {
      if (!ease) return false;
      ease.elapsed += seconds;
      if (ease.elapsed >= ease.seconds) ease = null;
      return !!ease;
    },
    // Stops an eased move where it shows (closing the editor stops it).
    stop() {
      direct();
    },
  };
}
