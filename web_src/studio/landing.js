// Where a file added or dropped on the new UI's stage lands, and the mark that shows it while a file is dragged
// (docs/space-and-view.md "Add とドロップ", "着く所", "ドラッグ中の印"; the mark's look: docs/design.md "新しい UI の見た目"
// "大きさ"). Pure: rays, hits and the stage's camera (stage_view.js stageCamera()) in, World values and screen
// polylines out. add_files.js places with it; StudioDropMarker.vue draws the mark.
import { stickerVfovFromAspect } from "../pano_editor_state.js";
import { viewProjection } from "../pano_editor_view.js";
import { NEW_STICKER_HFOV, boxCorners, projectPoint, sceneContentBox, transformPoint } from "../pano_space.js";
import { buildStickerGeometry } from "../pano_sticker_geometry.js";
import { worldRotation } from "../pano_world.js";
import { groundDepth } from "./stage_view.js";
import { boxDepth } from "./view_camera.js";
import { DROP_PREVIEW_BOX, eyeHeight, eyeLengths } from "./view_scale.js";

const RAD2DEG = 180 / Math.PI;
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const along = (origin, direction, t) => origin.map((value, axis) => value + direction[axis] * t);
const lerp = (a, b, t) => a.map((value, axis) => value + (b[axis] - value) * t);
const reach = (p) => Math.hypot(p[0], p[1], p[2]);

// The drop mark's look (docs/design.md "色", "大きさ" "ドロップの印", "ドロップのラベル"; the mock drop-3.html): brackets in
// the color of where it goes (World the soft yellow, Sky ice) over a darker line, that color's 25% inside, the
// bracket's share of an edge; how far the label keeps from the mark (`labelGap`) and from the stage's edges
// (`labelMargin`), in CSS px.
export const DROP_LOOK = Object.freeze({
  colors: Object.freeze({
    world: Object.freeze({ line: "#e8cf74", fill: "rgba(232, 207, 116, 0.25)" }),
    sky: Object.freeze({ line: "#aecedb", fill: "rgba(174, 206, 219, 0.25)" }),
  }),
  under: "rgba(0, 0, 0, 0.28)",
  width: 2.5,
  underWidth: 4.5,
  bracket: 0.2,
  boxBracket: 0.25,
  labelGap: 12,
  labelMargin: 8,
});

// --- Hits.

// The surface hit along `ray` ({ origin, direction }, the direction one unit long) for a landing: the nearest of the
// ground y = ground, the 3D boxes (`boxes`, as view_camera.js boxDepth takes them: the CPU test while a file is
// dragged) and `picked` (the GPU pick's World point on that ray, or null: the drop and Add). A hit outside the world
// bound of `radius` counts as none (a far drop means the sky, ADR 0047). null over nothing.
export function landingHit(ray, { ground, boxes = [], picked = null, radius = Infinity }) {
  const depths = [];
  const onGround = groundDepth(ray, ground);
  if (onGround !== null) depths.push(onGround);
  for (const item of boxes) {
    const depth = boxDepth(ray.origin, ray.direction, item);
    if (depth !== null && depth > 0) depths.push(depth);
  }
  if (picked) {
    const depth = dot(sub(picked, ray.origin), ray.direction) / dot(ray.direction, ray.direction);
    if (depth > 0) depths.push(depth);
  }
  if (!depths.length) return null;
  const point = along(ray.origin, ray.direction, Math.min(...depths));
  return reach(point) > radius ? null : point;
}

// The 3D boxes of the CPU test while a file is dragged (docs/space-and-view.md "ドラッグ中の印"): the shown 3D Stickers'
// item boxes with their transforms, from `content` (stage_content.js stageContent()) and `sceneBox(url)` (a loaded
// item's box, null while it loads). The `scene` content is left to the GPU pick at the drop.
export function landingBoxes(content, sceneBox = () => null) {
  const boxes = [];
  for (const request of content?.space?.fileStickers ?? []) {
    const box = sceneContentBox(request, sceneBox(request.url));
    if (box) boxes.push({ box, transform: request.value });
  }
  return boxes;
}

// Where a 3D file dropped on nothing goes (docs/space-and-view.md "着く所"): on the ground, along the ray's level
// direction (the view's yaw for a ray straight up or down), the farthest point inside the world bound of `radius`;
// when the point of the ground below the view is outside the bound, the nearest ground point inside it that way.
// null when that line meets no ground inside the bound.
export function groundLanding(ray, { ground, radius, viewYaw = 0 }) {
  let h = [ray.direction[0], 0, ray.direction[2]];
  let level = Math.hypot(h[0], h[2]);
  if (level < 1e-9) {
    const yaw = viewYaw / RAD2DEG;
    h = [Math.sin(yaw), 0, -Math.cos(yaw)];
    level = 1;
  }
  h = [h[0] / level, 0, h[2] / level];
  const start = [ray.origin[0], ground, ray.origin[2]];
  // |start + h t|^2 = radius^2: t^2 + 2 b t + c = 0.
  const b = dot(start, h);
  const c = dot(start, start) - radius * radius;
  const disc = b * b - c;
  if (disc < 0) return null;
  const root = Math.sqrt(disc);
  const t = c <= 0 ? -b + root : -b - root;
  if (!(t >= 0)) return null;
  return along(start, h, t);
}

// The point of the ground right below T (docs/space-and-view.md "Add とドロップ": Add's landing when the screen
// center's ray hits nothing).
export function groundBelow(target, ground) {
  return [target[0], ground, target[2]];
}

// --- What a placed object's values are.

// The yaw (degrees) that turns an object at `point` level toward `eye`: atan2(x, −z) of the level direction from the
// eye to it; `viewYaw` when the point is right above or below the eye.
export function facingYaw(eye, point, viewYaw = 0) {
  const d = sub(point, eye);
  return Math.hypot(d[0], d[2]) > 1e-9 ? Math.atan2(d[0], -d[2]) * RAD2DEG + 0 : viewYaw;
}

// A sky image along the World `direction` (docs/space-and-view.md "着く所" "当たり無し"): its pose in the editor's
// fields (pano_editor_state.js newSceneSticker), NEW_STICKER_HFOV wide, as tall as the image's aspect (`size`,
// { width, height } px) makes it, unturned.
export function skyPose(direction, size) {
  const yaw = Math.atan2(direction[0], -direction[2]) * RAD2DEG + 0;
  const pitch = Math.atan2(direction[1], Math.hypot(direction[0], direction[2])) * RAD2DEG;
  return {
    yaw_deg: yaw,
    pitch_deg: pitch,
    rot_deg: 0,
    hFOV_deg: NEW_STICKER_HFOV,
    vFOV_deg: stickerVfovFromAspect(NEW_STICKER_HFOV, size?.width || 1, size?.height || 1),
  };
}

// A World image landing at `point` (docs/space-and-view.md "World の画像"): WORLD_IMAGE_HEIGHT tall (E of the ground
// height `ground`), as wide as the image's aspect makes it (`scale` is the width), standing on the ground below the
// point, turned level toward `eye`. { position, rotation, scale } (pano_editor_state.js newWorldSceneSticker).
export function worldImageTransform(point, { ground, eye, size, viewYaw = 0 }) {
  const height = eyeLengths(eyeHeight(ground)).WORLD_IMAGE_HEIGHT;
  const aspect = size?.width > 0 && size?.height > 0 ? size.width / size.height : 1;
  const position = [point[0], ground + height / 2, point[2]];
  return { position, rotation: { yaw_deg: facingYaw(eye, position, viewYaw), pitch_deg: 0, roll_deg: 0 }, scale: height * aspect };
}

// A 3D file landing at `point` until its box is known (docs/space-and-view.md "3D ファイル"): its origin at the point
// (the provisional place), turned level so its front (glTF +Z) faces `eye`, at scale 1.
export function file3dTransform(point, { eye, viewYaw = 0 }) {
  return { position: [...point], rotation: { yaw_deg: facingYaw(eye, point, viewYaw), pitch_deg: 0, roll_deg: 0 }, scale: 1 };
}

const finiteTriple = (value) => Array.isArray(value) && value.length === 3 && value.every(Number.isFinite);

// Where a 3D file landing at `point` goes once its box ({ min, max }, the route's, in its own frame) is known: the
// lowest point of the box turned by `value` (the Sticker's { yaw_deg, pitch_deg, roll_deg, scale } at the playhead)
// at the point's height, the middle of its level extent on the point. null for a missing or malformed box.
export function file3dPosition(point, box, value) {
  if (!box || !finiteTriple(box.min) || !finiteTriple(box.max) || box.min.some((v, axis) => v > box.max[axis])) return null;
  const turned = boxCorners(box).map((corner) => transformPoint({ ...value, position: [0, 0, 0], scale: value.scale ?? 1 }, corner));
  const low = Math.min(...turned.map((p) => p[1]));
  const mid = (axis) => (Math.min(...turned.map((p) => p[axis])) + Math.max(...turned.map((p) => p[axis]))) / 2;
  return [point[0] - mid(0), point[1] - low, point[2] - mid(2)];
}

// --- The mark while a file is dragged.

function screen(camera, width, height, p) {
  const q = projectPoint(camera, p, width, height);
  return q ? { x: q.x, y: q.y } : null;
}

// A polyline's part of length `share` of its whole length, from its start (or from its end, reversed: it then still
// starts at the polyline's end).
function polylinePart(points, share, fromEnd = false) {
  const list = fromEnd ? [...points].reverse() : points;
  let total = 0;
  for (let i = 1; i < list.length; i += 1) total += Math.hypot(list[i].x - list[i - 1].x, list[i].y - list[i - 1].y);
  let left = total * share;
  const out = [list[0]];
  for (let i = 1; i < list.length && left > 0; i += 1) {
    const a = list[i - 1];
    const b = list[i];
    const step = Math.hypot(b.x - a.x, b.y - a.y);
    if (step >= left) {
      const t = step > 0 ? left / step : 0;
      out.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
      break;
    }
    out.push(b);
    left -= step;
  }
  return out;
}

// A flat outline's brackets: at each corner, `share` of each edge toward its neighbors, measured in the World.
function cornerBrackets(camera, width, height, corners, share) {
  const brackets = [];
  for (let i = 0; i < corners.length; i += 1) {
    const prev = corners[(i + corners.length - 1) % corners.length];
    const next = corners[(i + 1) % corners.length];
    const line = [lerp(corners[i], prev, share), corners[i], lerp(corners[i], next, share)].map((p) => screen(camera, width, height, p));
    if (line.some((p) => !p)) return null;
    brackets.push(line);
  }
  return brackets;
}

// The image plane a dropped image shows before its aspect is known: 1:1, WORLD_IMAGE_HEIGHT tall, as placed.
function planeMark(point, { camera, width, height, ground, viewYaw }) {
  const eye = camera.position;
  const t = worldImageTransform(point, { ground, eye, size: { width: 1, height: 1 }, viewYaw });
  const rotation = worldRotation(t.rotation.yaw_deg, 0, 0);
  const half = t.scale / 2;
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([x, y]) => [0, 1, 2].map((axis) => t.position[axis] + rotation[axis][0] * x * half + rotation[axis][1] * y * half));
  const outline = corners.map((p) => screen(camera, width, height, p));
  if (outline.some((p) => !p)) return null;
  const brackets = cornerBrackets(camera, width, height, corners, DROP_LOOK.bracket);
  return brackets ? { fills: [outline], brackets } : null;
}

// The sky frame NEW_STICKER_HFOV wide (1:1 while dragging) along `direction`, drawn on the sphere: its edges curve as
// the sky image's do (pano_sticker_geometry.js buildStickerGeometry), and so do the brackets along them.
function skyMark(direction, { camera, width, height }) {
  const pose = skyPose(direction, { width: 1, height: 1 });
  const geometry = buildStickerGeometry({ ...pose, roll_deg: 0 }, viewProjection(camera, width, height));
  if (!geometry.visible || geometry.boundaryEdges.some((edge) => edge.length < 2)) return null;
  const edges = geometry.boundaryEdges;
  // Edge k runs from corner k to corner k + 1 (top-left, top-right, bottom-right, bottom-left).
  const brackets = edges.map((edge, k) => {
    const before = polylinePart(edges[(k + 3) % 4], DROP_LOOK.bracket, true).reverse();
    return [...before.slice(0, -1), ...polylinePart(edge, DROP_LOOK.bracket)];
  });
  return { fills: [edges.flat()], brackets };
}

// The faces of a box of boxCorners() order (index = 4x + 2y + z), each a loop of corners, and its outward normal.
const BOX_FACES = [
  { loop: [0, 1, 3, 2], normal: [-1, 0, 0] },
  { loop: [4, 5, 7, 6], normal: [1, 0, 0] },
  { loop: [0, 1, 5, 4], normal: [0, -1, 0] },
  { loop: [2, 3, 7, 6], normal: [0, 1, 0] },
  { loop: [0, 2, 6, 4], normal: [0, 0, -1] },
  { loop: [1, 3, 7, 5], normal: [0, 0, 1] },
];

// The 3D file's provisional box (DROP_PREVIEW_BOX) at `point`, turned as it lands: its faces toward the view filled,
// and from each corner the view sees, a short line along each of its edges (docs/space-and-view.md "ドラッグ中の印").
function boxMark(point, { camera, width, height, viewYaw }) {
  const eye = camera.position;
  const t = file3dTransform(point, { eye, viewYaw });
  const value = { position: t.position, ...t.rotation, scale: 1 };
  const rotation = worldRotation(t.rotation.yaw_deg, 0, 0);
  const corners = boxCorners(DROP_PREVIEW_BOX).map((corner) => transformPoint(value, corner));
  const shown = new Set();
  const fills = [];
  for (const face of BOX_FACES) {
    const normal = [0, 1, 2].map((axis) => dot(rotation[axis], face.normal));
    const center = face.loop.map((index) => corners[index]).reduce((sum, p) => sum.map((v, axis) => v + p[axis] / 4), [0, 0, 0]);
    if (dot(normal, sub(eye, center)) <= 0) continue;
    const outline = face.loop.map((index) => screen(camera, width, height, corners[index]));
    if (outline.some((p) => !p)) return null;
    fills.push(outline);
    face.loop.forEach((index) => shown.add(index));
  }
  const brackets = [];
  for (const index of [...shown].sort((a, b) => a - b)) {
    for (const bit of [4, 2, 1]) {
      const line = [corners[index], lerp(corners[index], corners[index ^ bit], DROP_LOOK.boxBracket)].map((p) => screen(camera, width, height, p));
      if (line.some((p) => !p)) return null;
      brackets.push(line);
    }
  }
  return { fills, brackets };
}

// The mark of a file dragged over the stage (docs/space-and-view.md "ドラッグ中の印"): `kind` "image" or "3d", the
// ray through the pointer, its CPU `hit` (landingHit() with the boxes, or null), seen from `camera` on a stage of
// width x height CSS px. { placement ("sky" | "world"), fills, brackets } with screen polylines ([{ x, y }]), or
// null when nothing can be shown (a 3D file over no ground inside the bound, an outline behind the view).
export function dropMarker({ kind, ray, hit, camera, width, height, ground, radius, viewYaw = 0 }) {
  const view = { camera, width, height, ground, viewYaw };
  if (kind === "3d") {
    const point = hit ?? groundLanding(ray, { ground, radius, viewYaw });
    const mark = point ? boxMark(point, view) : null;
    return mark ? { placement: "world", ...mark } : null;
  }
  const mark = hit ? planeMark(hit, view) : skyMark(ray.direction, view);
  return mark ? { placement: hit ? "world" : "sky", ...mark } : null;
}

// --- Where the label goes.

// The screen rectangle around a mark's points (dropMarker()'s fills and brackets): { left, top, right, bottom }, or null
// without points.
export function markRect(mark) {
  const points = [...(mark?.fills ?? []), ...(mark?.brackets ?? [])].flat();
  if (!points.length) return null;
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  return { left: Math.min(...xs), top: Math.min(...ys), right: Math.max(...xs), bottom: Math.max(...ys) };
}

function overlap(a, b) {
  const w = Math.min(a.right, b.right) - Math.max(a.left, b.left);
  const h = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
  return w > 0 && h > 0 ? w * h : 0;
}

// The top left corner ({ x, y }, CSS px of the stage) of the drop label `size` ({ width, height }) for the mark `mark`
// (dropMarker()'s) with the pointer at `pointer`, on a stage `stage` ({ width, height }) (docs/space-and-view.md
// "ドラッグ中の印" "ラベルの置き場所"): never on the mark. DROP_LOOK.labelGap off the mark's screen rectangle, tried right
// (level with the pointer), left, below (centered on the pointer), above; the first one inside the stage by
// DROP_LOOK.labelMargin wins. A label is kept inside the stage only along the side of the rectangle it does not
// cross. When none fits, the one kept inside the stage that overlaps the mark least.
export function dropLabelPlace({ mark, pointer, size, stage }) {
  const gap = DROP_LOOK.labelGap;
  const margin = DROP_LOOK.labelMargin;
  const { width, height } = size;
  const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
  const box = markRect(mark) ?? { left: pointer.x, top: pointer.y, right: pointer.x, bottom: pointer.y };
  const fitX = (x) => clamp(x, margin, stage.width - margin - width);
  const fitY = (y) => clamp(y, margin, stage.height - margin - height);
  const level = fitY(pointer.y - height / 2);
  const centered = fitX(pointer.x - width / 2);
  const tries = [
    { x: box.right + gap, y: level },
    { x: box.left - gap - width, y: level },
    { x: centered, y: box.bottom + gap },
    { x: centered, y: box.top - gap - height },
  ];
  const inside = (p) => p.x >= margin - 1e-9 && p.y >= margin - 1e-9 && p.x + width <= stage.width - margin + 1e-9 && p.y + height <= stage.height - margin + 1e-9;
  const fits = tries.find(inside);
  if (fits) return fits;
  let best = null;
  for (const p of tries) {
    const kept = { x: fitX(p.x), y: fitY(p.y) };
    const covered = overlap({ left: kept.x, top: kept.y, right: kept.x + width, bottom: kept.y + height }, box);
    if (!best || covered < best.covered) best = { ...kept, covered };
  }
  return { x: best.x, y: best.y };
}
