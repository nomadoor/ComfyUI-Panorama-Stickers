// The guides of the World objects on the new UI's stage (docs/space-and-view.md "World の物のガイド", "ホバーの判定"):
// what outline each shown World object has (a world image plane's edge, a 3D Sticker's turned box), which one the
// pointer is over by the CPU test (no GPU read on a pointer move), how each is drawn now (normal, hovered, selected,
// or not at all). The Camera's mark is camera_marker.js's. Pure: World segments in, screen segments out;
// stage_overlay.js draws them.
import { boxCorners, planeCorners, planeOutlineSegments, projectPoint, sceneContentBox, transformPoint } from "../pano_space.js";
import { quaternionToRotation } from "../pano_world.js";

// The looks of a guide (docs/design.md "新しい UI の見た目"): a light line over a dark line 2px wider, so it shows on
// a light and a dark picture alike. The selected look's color is the soft yellow of the drop mark.
export const SELECTED_GUIDE_COLOR = "#e8cf74";
export const GUIDE_LOOKS = Object.freeze({
  normal: Object.freeze({ light: "rgba(255, 255, 255, 0.32)", dark: "rgba(0, 0, 0, 0.32)", width: 1 }),
  hover: Object.freeze({ light: "rgba(255, 255, 255, 0.9)", dark: "rgba(0, 0, 0, 0.6)", width: 1.5 }),
  selected: Object.freeze({ light: SELECTED_GUIDE_COLOR, dark: "rgba(0, 0, 0, 0.7)", width: 1.5 }),
});
// How much wider the dark line under a guide is than the light one.
export const GUIDE_UNDER_EXTRA = 2;

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const lerp = (a, b, t) => a.map((value, axis) => value + (b[axis] - value) * t);

const BOX_EDGES = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];

function loop(points) {
  return points.map((point, index) => [point, points[(index + 1) % points.length]]);
}

// The World objects that have a guide in `content` (stage_content.js stageContent(): the shown world image planes and
// the shown 3D Stickers' items) of `state`: [{ id, kind ("plane" | "box"), locked, segments, corners, center }] in
// World units. `sceneBox(url)` is the box of a loaded item (null while it loads: that object has no guide yet).
// Hidden objects and those outside their Clip range are not in `content`; the `scene` content and the Camera have
// no guide.
export function worldGuideItems(state, content, sceneBox = () => null) {
  if (!content) return [];
  const byId = new Map(state.stickers.map((sticker) => [sticker.id, sticker]));
  const items = [];
  for (const plane of content.space?.stickers ?? []) {
    const sticker = byId.get(plane.id);
    if (!sticker) continue;
    const corners = planeCorners(plane);
    if (corners.length < 4) continue;
    items.push({
      id: plane.id,
      kind: "plane",
      locked: sticker.locked === true,
      segments: plane.patch ? planeOutlineSegments(plane) : loop(corners),
      corners,
      center: [...plane.position],
    });
  }
  for (const request of content.space?.fileStickers ?? []) {
    const sticker = byId.get(request.id);
    const box = sticker ? sceneContentBox(request, sceneBox(request.url)) : null;
    if (!box) continue;
    const corners = boxCorners(box).map((point) => transformPoint(request.value, point));
    items.push({
      id: request.id,
      kind: "box",
      locked: sticker.locked === true,
      segments: BOX_EDGES.map(([a, b]) => [corners[a], corners[b]]),
      corners,
      center: transformPoint(request.value, box.min.map((value, axis) => (value + box.max[axis]) / 2)),
    });
  }
  return items;
}

// Whether `point` is inside `polygon` ([{ x, y }]).
export function pointInPolygon(point, polygon) {
  let inside = false;
  for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index, index += 1) {
    const a = polygon[index];
    const b = polygon[previous];
    if ((a.y > point.y) !== (b.y > point.y) && point.x < ((b.x - a.x) * (point.y - a.y)) / ((b.y - a.y) || 1e-12) + a.x) inside = !inside;
  }
  return inside;
}

// The id of the guide object under `point` (CSS px of a width x height stage seen from `camera`, a stageCamera()), or
// null: a plane where the point is inside its projected corners, a box inside the screen rectangle around its 8
// projected corners. An object with a corner behind the view is not hit. Of several, the one whose center is
// shallowest along the view axis.
export function hoverGuide(items, camera, point, width, height) {
  let best = null;
  for (const item of items) {
    const projected = item.corners.map((corner) => projectPoint(camera, corner, width, height));
    if (projected.some((p) => !p)) continue;
    let inside;
    if (item.kind === "plane") {
      inside = pointInPolygon(point, projected);
    } else {
      const xs = projected.map((p) => p.x);
      const ys = projected.map((p) => p.y);
      inside = point.x >= Math.min(...xs) && point.x <= Math.max(...xs) && point.y >= Math.min(...ys) && point.y <= Math.max(...ys);
    }
    if (!inside) continue;
    const center = projectPoint(camera, item.center, width, height);
    const depth = center ? center.z : Infinity;
    if (!best || depth < best.depth) best = { id: item.id, depth };
  }
  return best?.id ?? null;
}

// How a guide is drawn now: "selected", "hover", "normal", or null (not drawn). In the Camera tab (`tab` "camera") and
// while the grid is hidden only the selected one is drawn. A locked object does not light up under the pointer, and
// nothing does while Alt is held (an Alt drag always orbits).
export function guideLook({ selected = false, hovered = false, locked = false, altHeld = false, gridHidden = false, tab = "3d" }) {
  if (selected) return "selected";
  if (tab === "camera" || gridHidden) return null;
  if (hovered && !locked && !altHeld) return "hover";
  return "normal";
}

// The 3-vector v turned by the 3x3 `rotation`.
export function rotateBy(rotation, v) {
  return [0, 1, 2].map((row) => rotation[row][0] * v[0] + rotation[row][1] * v[1] + rotation[row][2] * v[2]);
}

// The direction `camera` (a stageCamera()) looks along, one unit long.
export function viewForward(camera) {
  return rotateBy(quaternionToRotation(camera.quaternion), [0, 0, -1]);
}

// The depth of the World point p along the view axis of `camera` (a stageCamera()).
export function viewDepth(camera, p) {
  return dot(sub(p, camera.position), viewForward(camera));
}

// How many CSS px one World unit spans across the view at depth 1, on a stage `height` CSS px high seen from `camera`.
export function focalPixels(camera, height) {
  return (height * 0.5) / Math.tan(camera.fovY_deg * 0.5 * Math.PI / 180);
}

// The distance (CSS px) from the point p to the screen segment a-b.
export function distanceToSegment(p, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / Math.max(dx * dx + dy * dy, 1e-12)));
  return Math.hypot(a.x + dx * t - p.x, a.y + dy * t - p.y);
}

// A World segment [a, b] on a width x height stage seen from `camera`, cut where it passes behind the near plane:
// [{ x, y }, { x, y }] in CSS px, or null when all of it is behind.
export function screenSegment(camera, [a, b], width, height) {
  const near = camera.near * 1.001;
  const da = viewDepth(camera, a);
  const db = viewDepth(camera, b);
  if (da <= near && db <= near) return null;
  let from = a;
  let to = b;
  if (da <= near) from = lerp(a, b, (near - da) / (db - da));
  else if (db <= near) to = lerp(a, b, (near - da) / (db - da));
  const pa = projectPoint(camera, from, width, height);
  const pb = projectPoint(camera, to, width, height);
  return pa && pb ? [{ x: pa.x, y: pa.y }, { x: pb.x, y: pb.y }] : null;
}
