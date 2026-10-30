// The Camera's mark in the new UI's 3D tab (docs/studio-ui.md "エディタの中の Camera", the approved draft
// camera-1.html; its hit, docs/space-and-view.md "ホバーの判定"): the Frame mode's lightly filled frustum with the
// filled triangle that marks its up, the Panorama mode's lightly filled sphere with its equator ring and the arrow to
// its front, each with a white dot at the Camera's position. A press anywhere on the filled shape hits it, not only on
// its lines. Pure: the evaluated Camera in, World shapes and their screen form out; stage_overlay.js draws them.
import { cameraFrustumShape, projectPoint } from "../pano_space.js";
import { worldRotation } from "../pano_world.js";
import { CAMERA_GUIDE_MIN_PIXELS, eyeHeight, eyeLengths } from "./view_scale.js";
import { SELECTED_GUIDE_COLOR, distanceToSegment, focalPixels, pointInPolygon, rotateBy, screenSegment, viewDepth, viewForward } from "./world_guides.js";

// How it looks (docs/design.md "新しい UI の見た目" カメラの見た目): white lines over a darker, wider line, so it
// stands out from the ground grid and a light picture alike; faces filled lightly (each face on its own, so where they
// overlap the fill is denser); edges hidden behind the frustum drawn faintly. Selected, the lines turn the soft yellow
// of the selected guide and the faces take more of it.
export const MARKER_LOOKS = Object.freeze({
  normal: Object.freeze({
    line: "rgba(255, 255, 255, 0.85)",
    hiddenLine: "rgba(255, 255, 255, 0.35)",
    width: 1.5,
    fill: "rgba(255, 255, 255, 0.1)",
  }),
  selected: Object.freeze({
    line: SELECTED_GUIDE_COLOR,
    hiddenLine: "rgba(232, 207, 116, 0.35)",
    width: 2,
    fill: "rgba(232, 207, 116, 0.18)",
  }),
});
// The darker line under every line, the same in both looks.
export const MARKER_UNDER = Object.freeze({ color: "rgba(0, 0, 0, 0.3)", hiddenColor: "rgba(0, 0, 0, 0.12)", width: 3.5 });
// The fill of the triangle that marks the Frame mode's up (white in both looks, as the draft has it).
export const MARKER_TOP_FILL = "rgba(255, 255, 255, 0.35)";
// The white dot at the Camera's position (CSS px).
export const MARKER_DOT_RADIUS = 3;
// How near (CSS px) to a line of the mark a press hits it, besides anywhere inside its filled shape.
export const CAMERA_HIT_PIXELS = 6;

// The steps of the Panorama mode's equator ring.
const RING_STEPS = 48;

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scale = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const lerp = (a, b, t) => a.map((value, axis) => value + (b[axis] - value) * t);
const mean = (points) => scale(points.reduce(add, [0, 0, 0]), 1 / points.length);

// Whether the mark of the evaluated Camera `value` (with `visible`) shows from a view at `viewPosition`: not while it
// is hidden, nor while the view stands nearer to it than CAMERA_GUIDE_LENGTH (the view opens at the Camera's
// position, and the mark would wrap the view and catch every press).
export function cameraMarkerShown(value, viewPosition, ground) {
  if (value.visible === false) return false;
  const { CAMERA_GUIDE_LENGTH } = eyeLengths(eyeHeight(ground));
  return Math.hypot(...sub(value.position, viewPosition)) >= CAMERA_GUIDE_LENGTH;
}

// How long (World units) the mark of the evaluated Camera `value` is, seen from `view` (a stageCamera()) on a stage
// `height` CSS px high, for the eye height of `ground` (docs/space-and-view.md "量の一覧"): CAMERA_GUIDE_LENGTH, or
// longer where that would show shorter than CAMERA_GUIDE_MIN_PIXELS at the Camera's depth.
export function cameraMarkerLength(value, view, height, ground) {
  const { CAMERA_GUIDE_LENGTH } = eyeLengths(eyeHeight(ground));
  const depth = viewDepth(view, value.position);
  if (!(depth > 0)) return CAMERA_GUIDE_LENGTH;
  return Math.max(CAMERA_GUIDE_LENGTH, (CAMERA_GUIDE_MIN_PIXELS * depth) / focalPixels(view, height));
}

// The mark of the evaluated Camera `camera` (pano_scene_eval.js evaluateCamera) in World units, `length` long
// (cameraMarkerLength), for its `projection`:
// - Frame mode: { kind: "frame", apex, faces: [[points]], edges: [{ a, b, faces: [face indices] }], top } — the
//   frustum `length` deep (pano_space.js cameraFrustumShape), its side faces and its far face, the edges with the
//   faces beside them, the up triangle (or null), and `lens` (a lens Camera's: no edge is drawn as hidden);
// - Panorama mode ("erp"): { kind: "sphere", center, radius, ring: [points], arrow: [[a, b]] } — a sphere of a quarter
//   `length`, its equator, and an arrow from its surface toward its front (the middle of the ERP it makes).
export function cameraMarkerShape(camera, projection, length) {
  if (projection === "erp") {
    const rotation = worldRotation(camera.yaw_deg, camera.pitch_deg, camera.roll_deg);
    const at = (x, y, z) => add(rotateBy(rotation, [x, y, z]), camera.position);
    const radius = length * 0.25;
    const ring = Array.from({ length: RING_STEPS }, (_, index) => {
      const angle = (index / RING_STEPS) * Math.PI * 2;
      return at(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    });
    const tip = at(0, 0, -radius * 1.8);
    const arrow = [[at(0, 0, -radius), tip], [tip, at(-radius * 0.2, 0, -radius * 1.5)], [tip, at(radius * 0.2, 0, -radius * 1.5)]];
    return { kind: "sphere", center: [...camera.position], radius, ring, arrow };
  }
  const { apex, outline, spokes, top, lens } = cameraFrustumShape(camera, length);
  const count = outline.length;
  const faces = [];
  // Side face i joins the apex to outline points i and i + 1 (an edge point past 180° leaves its faces out).
  const side = [];
  for (let index = 0; index < count; index += 1) {
    const a = outline[index];
    const b = outline[(index + 1) % count];
    side.push(a && b ? faces.push([apex, a, b]) - 1 : -1);
  }
  const rim = outline.filter(Boolean);
  const far = rim.length >= 3 ? faces.push(rim) - 1 : -1;
  const edges = [];
  for (const index of spokes) {
    if (!outline[index]) continue;
    edges.push({ a: apex, b: outline[index], faces: [side[(index - 1 + count) % count], side[index]].filter((face) => face >= 0) });
  }
  outline.forEach((point, index) => {
    const next = outline[(index + 1) % count];
    if (point && next) edges.push({ a: point, b: next, faces: [side[index], far].filter((face) => face >= 0) });
  });
  return { kind: "frame", apex, faces, edges, top: top ?? null, lens };
}

// A World polygon cut to what lies in front of the near plane of `camera` (a stageCamera()), as CSS px points of a
// width x height stage, or null when less than a triangle is left.
function screenPolygon(camera, points, width, height) {
  const near = camera.near * 1.001;
  const depth = (p) => viewDepth(camera, p);
  const kept = [];
  points.forEach((point, index) => {
    const next = points[(index + 1) % points.length];
    const d0 = depth(point);
    const d1 = depth(next);
    if (d0 > near) kept.push(point);
    if ((d0 > near) !== (d1 > near)) kept.push(lerp(point, next, (near - d0) / (d1 - d0)));
  });
  if (kept.length < 3) return null;
  const projected = kept.map((point) => projectPoint(camera, point, width, height));
  return projected.every(Boolean) ? projected.map(({ x, y }) => ({ x, y })) : null;
}

// A World segment cut where it passes behind the near plane: two CSS px points or null (world_guides.js).
function screenLine(camera, a, b, width, height) {
  return screenSegment(camera, [a, b], width, height);
}

// The mark `shape` (cameraMarkerShape) on a width x height stage seen from `camera` (a stageCamera()), in CSS px:
// { fills: [[points]] far to near, lines: [{ a, b, hidden }], top: [points] | null, dot: { x, y } | null,
// circle: { x, y, r } | null }. A Frame edge whose faces all turn away from the view is `hidden`.
export function cameraMarkerScreen(shape, camera, width, height) {
  const eye = camera.position;
  const lines = [];
  const centerDot = (point) => {
    const p = projectPoint(camera, point, width, height);
    return p ? { x: p.x, y: p.y } : null;
  };
  if (shape.kind === "sphere") {
    const center = projectPoint(camera, shape.center, width, height);
    let circle = null;
    if (center && center.z > shape.radius) {
      circle = { x: center.x, y: center.y, r: (focalPixels(camera, height) * shape.radius) / Math.sqrt(center.z * center.z - shape.radius * shape.radius) };
    }
    shape.ring.forEach((point, index) => {
      const shown = screenLine(camera, point, shape.ring[(index + 1) % shape.ring.length], width, height);
      if (shown) lines.push({ a: shown[0], b: shown[1], hidden: false });
    });
    for (const [a, b] of shape.arrow) {
      const shown = screenLine(camera, a, b, width, height);
      if (shown) lines.push({ a: shown[0], b: shown[1], hidden: false });
    }
    return { fills: [], lines, top: null, dot: centerDot(shape.center), circle };
  }
  const inside = mean(shape.faces.flat());
  const facing = shape.faces.map((face) => {
    const middle = mean(face);
    // The face's normal (Newell's), turned outward, faces the view when the eye is on its outer side.
    let normal = [0, 0, 0];
    face.forEach((point, index) => {
      normal = add(normal, cross(point, face[(index + 1) % face.length]));
    });
    if (dot(normal, sub(middle, inside)) < 0) normal = scale(normal, -1);
    return { middle, front: dot(normal, sub(eye, middle)) > 0 };
  });
  const forward = viewForward(camera);
  const fills = shape.faces
    .map((face, index) => ({ points: screenPolygon(camera, face, width, height), depth: dot(sub(facing[index].middle, eye), forward) }))
    .filter((face) => face.points)
    .sort((a, b) => b.depth - a.depth)
    .map((face) => face.points);
  for (const edge of shape.edges) {
    const shown = screenLine(camera, edge.a, edge.b, width, height);
    if (!shown) continue;
    // A lens Camera's frustum need not be convex: its edges are all drawn as seen.
    const hidden = !shape.lens && edge.faces.length > 0 && edge.faces.every((face) => !facing[face].front);
    lines.push({ a: shown[0], b: shown[1], hidden });
  }
  const top = shape.top ? screenPolygon(camera, shape.top, width, height) : null;
  return { fills, lines, top, dot: centerDot(shape.apex), circle: null };
}

// Whether the CSS px point `point` hits the mark on screen (cameraMarkerScreen): inside one of its filled faces, its
// up triangle or its sphere, or within `tolerance` px of one of its lines.
export function cameraMarkerHit(screen, point, tolerance = CAMERA_HIT_PIXELS) {
  if (!screen) return false;
  if (screen.circle && Math.hypot(point.x - screen.circle.x, point.y - screen.circle.y) <= screen.circle.r) return true;
  if (screen.fills.some((face) => pointInPolygon(point, face))) return true;
  if (screen.top && pointInPolygon(point, screen.top)) return true;
  return screen.lines.some((line) => distanceToSegment(point, line.a, line.b) <= tolerance);
}
