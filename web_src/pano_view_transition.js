// The editor's view moving from one view to another over a short time instead of jumping, like Blender's
// Smooth View or Unity's F, so the user keeps their place: Reset View, Frame Selected, 6DoF back to 3DoF
// and turning to a picked item. A view is the Viewport camera ({ position, yaw_deg, pitch_deg, hFOV_deg,
// distance }, pano_space.js); without World content it stays at the origin.
//
// The editor draws a transition from its render loop. A drag or a wheel step on the view stops it where
// it shows, and a new one starts from the view shown then.
import { clamp, shortestYawDelta, wrapYaw } from "./pano_math.js";

export const VIEW_TRANSITION_MIN_MS = 250;
export const VIEW_TRANSITION_MAX_MS = 600;
// A transition takes the longest time when it turns this many degrees, or travels this many times the
// content's size; the two add up.
const FULL_TURN_DEG = 180;
const FULL_TRAVEL = 2;

export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// How long the move from `from` to `to` takes: longer the more it turns (yaw by its shortest way, pitch,
// FOV) and the farther it travels for the content's size (scale), between VIEW_TRANSITION_MIN_MS and
// VIEW_TRANSITION_MAX_MS.
export function viewTransitionDuration(from, to, scale = 1) {
  const turn = Math.max(
    Math.abs(shortestYawDelta(from.yaw_deg, to.yaw_deg)),
    Math.abs(to.pitch_deg - from.pitch_deg),
    Math.abs(to.hFOV_deg - from.hFOV_deg),
  );
  const travel = Math.hypot(...to.position.map((value, index) => value - from.position[index])) / Math.max(scale, 1e-6);
  const amount = Math.min(1, turn / FULL_TURN_DEG + travel / FULL_TRAVEL);
  return Math.round(lerp(VIEW_TRANSITION_MIN_MS, VIEW_TRANSITION_MAX_MS, amount));
}

// The view at progress t (0 to 1) of the move from `from` to `to`, eased in and out: the position and the
// pivot distance in a straight line, the yaw the shortest way round.
export function blendView(from, to, t) {
  const eased = easeInOutCubic(clamp(t, 0, 1));
  return {
    position: from.position.map((value, index) => lerp(value, to.position[index], eased)),
    yaw_deg: wrapYaw(from.yaw_deg + shortestYawDelta(from.yaw_deg, to.yaw_deg) * eased),
    pitch_deg: lerp(from.pitch_deg, to.pitch_deg, eased),
    hFOV_deg: lerp(from.hFOV_deg, to.hFOV_deg, eased),
    distance: lerp(from.distance, to.distance, eased),
  };
}

function sameView(a, b) {
  return a.position.every((value, index) => Math.abs(value - b.position[index]) < 1e-9)
    && Math.abs(shortestYawDelta(a.yaw_deg, b.yaw_deg)) < 1e-9
    && Math.abs(a.pitch_deg - b.pitch_deg) < 1e-9
    && Math.abs(a.hFOV_deg - b.hFOV_deg) < 1e-9
    && Math.abs(a.distance - b.distance) < 1e-9;
}

// A transition from the view shown now (`from`; while another runs, where that one shows, which this one
// replaces) to `to`, starting at time ts (ms). `end` is what the editor applies once it arrives (its space
// mode, say), and is dropped with the transition when it is stopped. null when there is nothing to move.
export function startViewTransition(from, to, ts, { scale = 1, end = null } = {}) {
  if (sameView(from, to)) return null;
  return { from, to, startTs: ts, durationMs: viewTransitionDuration(from, to, scale), end };
}

// The view a transition shows at time ts, and whether it has arrived (done: the view is `to`).
export function viewTransitionFrame(transition, ts) {
  const t = clamp((ts - transition.startTs) / transition.durationMs, 0, 1);
  return t >= 1 ? { view: transition.to, done: true } : { view: blendView(transition.from, transition.to, t), done: false };
}

// The space mode the 3DoF | 6DoF buttons show: the one a running transition ends in, else the current one.
export function shownSpaceMode(spaceMode, transition) {
  return transition?.end?.mode ?? spaceMode;
}
