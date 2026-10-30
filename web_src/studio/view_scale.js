// The new UI's quantities of the view (docs/space-and-view.md "量の一覧"): every number that sets how the view feels
// or where it stops lives here, under the table's name, and nowhere else. Lengths are World units (ADR 0023).
//
// A quantity takes one of three measures:
// - E, the eye height: the lengths below in eye heights, made World lengths by eyeLengths(E).
// - d, the distance from the view to its target T: the joystick and the wheel (their factors are here; view_camera.js
//   multiplies them by d).
// - absolute: pixels, degrees, seconds, World units.
// None of them changes with the size of the World content (ADR 0047).

// --- E: the eye height, from the state's ground height.

// The floor of E, so the bound and the sizes do not shrink to 0 with a ground near 0 (ADR 0048).
export const EYE_HEIGHT_MIN = 0.5;

// The lengths that are multiples of E (the values at E = 1.6 in the table's brackets).
const IN_EYE_HEIGHTS = Object.freeze({
  // The world bound's base radius.
  WORLD_BOUND_RADIUS: 30,
  // The room the world bound keeps around what it grows to hold.
  WORLD_BOUND_MARGIN: 2,
  // How far ahead the first T goes when its line hits nothing.
  TARGET_DEFAULT_DISTANCE: 5,
  // The range of d. TARGET_MAX_DISTANCE also caps a pan's grabbed depth and the wheel center's distance.
  TARGET_MIN_DISTANCE: 0.005,
  TARGET_MAX_DISTANCE: 30,
  // The radius of the sphere Frame Selected fits around a selected Camera (centered on its position).
  CAMERA_FRAME_RADIUS: 1,
  // How far ahead the Camera's mark in the 3D tab reaches (its frustum's length; the Panorama mode's ring is half
  // as wide).
  CAMERA_GUIDE_LENGTH: 0.5,
  // The height of an image placed in the World.
  WORLD_IMAGE_HEIGHT: 1,
  // Where the grid's 1-unit lines start to fade and where they are gone (horizontal distance from the view).
  GRID_MINOR_FADE: [8, 24],
  // The same for the 10-unit lines and the axes.
  GRID_MAJOR_FADE: [16, 30],
});

// E for the state's ground height: max(|ground|, EYE_HEIGHT_MIN). The origin is the eye the panorama was taken from,
// so E is the height from the eye to the ground.
export function eyeHeight(ground) {
  return Math.max(Math.abs(ground), EYE_HEIGHT_MIN);
}

// The lengths in E as World lengths for eye height `eye`, under the table's names.
export function eyeLengths(eye) {
  const lengths = {};
  for (const [name, value] of Object.entries(IN_EYE_HEIGHTS)) {
    lengths[name] = Array.isArray(value) ? Object.freeze(value.map((item) => item * eye)) : value * eye;
  }
  return Object.freeze(lengths);
}

// --- d: factors that view_camera.js multiplies by the distance d to T.

// The joystick's offset from the press, in CSS px, that moves d per second.
export const JOYSTICK_PIXELS = 100;
// One wheel step's scale (Blender's step).
export const WHEEL_FACTOR = 1.2;

// --- Absolute.

// The view's pitch stops at ± this many degrees.
export const PITCH_LIMIT = 89.9;
// The orbit's degrees per CSS px, for yaw and pitch alike.
export const ORBIT_DEG_PER_PIXEL = 0.3;
// How long one wheel step's eased move takes.
export const WHEEL_EASE_SECONDS = 0.4;
// How long a double click's turn, Frame Selected and Reset View take.
export const ACTION_EASE_SECONDS = 0.4;
// A continuous move (joystick, WASD / QE, the Preview's damping and inertia) counts a frame's time up to this; a gap
// this long or longer (a stopped tab) counts as FRAME_FALLBACK_SECONDS.
export const FRAME_GAP_LIMIT = 0.1;
export const FRAME_FALLBACK_SECONDS = 1 / 60;
// How long the stage's one-line notices (the bound stopped the view, an action that does nothing) stay after the
// last time they were shown.
export const BOUND_NOTICE_SECONDS = 2;
// Fine pixel wheel events (a trackpad) add up to one wheel step every this many px (provisional; ADR 0048).
export const WHEEL_STEP_PIXELS = 100;
// A run of wheel steps in the Frame view is one Undo step, taken once the wheel has rested this long (the old Frame
// view's 180 ms, editor/frame_view.js).
export const FRAME_WHEEL_REST_MS = 180;
// The least CSS px the Camera's mark in the 3D tab is long on screen (camera_marker.js cameraMarkerLength).
export const CAMERA_GUIDE_MIN_PIXELS = 80;
// The step (degrees) a turn held with Shift stops at, as a multiple of the absolute angle: the gizmo's Rotate, the sky
// image's rotate handle (docs/studio-ui.md "ギズモ", "下の中央のバー"), and the Camera tab's Roll ruler.
export const ROTATE_SNAP_DEG = 15;
// The mark of a 3D file dragged over the stage before its box is known: 1 x 1 x 1, the bottom's center at its origin.
export const DROP_PREVIEW_BOX = Object.freeze({ min: Object.freeze([-0.5, 0, -0.5]), max: Object.freeze([0.5, 1, 0.5]) });
// The Preview window's damping.
export const PREVIEW_DAMPING = 0.95;

// The seconds a continuous move takes for a frame that came `gap` seconds after the last one.
export function frameSeconds(gap) {
  if (!(gap > 0)) return 0;
  return gap < FRAME_GAP_LIMIT ? gap : FRAME_FALLBACK_SECONDS;
}

// --- The world bound (docs/space-and-view.md "世界の境界"): the sphere about the origin the view cannot leave.

function reach(point) {
  return Math.hypot(point[0], point[1], point[2]);
}

// Its radius R for eye height `eye`: the largest of WORLD_BOUND_RADIUS and, each with WORLD_BOUND_MARGIN to spare,
// what reaches the shown World content's bounding sphere (`content`, { center, radius }, null without content), the
// Camera's position (`camera`; in the Frame view, where it was when the gesture started) and the destination of the
// last eased action (`destination`, the view's position it goes to; null when none counts).
export function worldBoundRadius({ eye, content = null, camera = null, destination = null }) {
  const { WORLD_BOUND_RADIUS, WORLD_BOUND_MARGIN } = eyeLengths(eye);
  let radius = WORLD_BOUND_RADIUS;
  if (content) radius = Math.max(radius, reach(content.center) + content.radius + WORLD_BOUND_MARGIN);
  if (camera) radius = Math.max(radius, reach(camera) + WORLD_BOUND_MARGIN);
  if (destination) radius = Math.max(radius, reach(destination) + WORLD_BOUND_MARGIN);
  return radius;
}
