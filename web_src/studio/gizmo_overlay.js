// The gizmo of the new UI's stage (docs/studio-ui.md "ギズモ", the approved draft specimen-11.html): its handles on
// the 2D overlay, projected from the selected object's center and kept the same size on screen, which handle a point
// hits, and what a drag of a handle does to the object's transform. The old UI keeps three.js TransformControls
// (pano_three_view.js createGizmo); this module does not use it. Pure: transforms and screen points in, handles and
// transforms out; stage_objects.js wires it, stage_overlay.js draws it, pano_space.js gizmoDragLanes turns a drag
// into Lanes.
import { projectPoint, uniformScale } from "../pano_space.js";
import { placeDirection } from "../pano_editor_view.js";
import { quaternionToRotation, rotationToQuaternion } from "../pano_world.js";
import { distanceToSegment, focalPixels, pointInPolygon, viewForward } from "./world_guides.js";

// The gizmo's colors (docs/design.md "新しい UI の見た目": X coral, Y lime, Z ice). The handle under the pointer and the
// one dragged keep their axis's color, brought GIZMO_LOOK.activeMix of the way to white (gizmoColor): white vanished on
// a light picture.
export const GIZMO_COLORS = Object.freeze({ x: "#f37159", y: "#d6e797", z: "#aecedb" });

// The color of the axis `name` ("x", "y", "z"), lit (`active`) or not, as "#rrggbb".
export function gizmoColor(name, active = false) {
  const base = GIZMO_COLORS[name];
  if (!active) return base;
  const mix = (offset) => {
    const value = parseInt(base.slice(offset, offset + 2), 16);
    return Math.round(value + (255 - value) * GIZMO_LOOK.activeMix).toString(16).padStart(2, "0");
  };
  return `#${mix(1)}${mix(3)}${mix(5)}`;
}

// Its sizes in CSS px (docs/design.md "新しい UI の見た目" ギズモ): how far a bar reaches from the center and the
// rings' radius, the line, Move's balls, the white center dot, Scale's rounded squares, how faint a ring's far half
// is, below which share of the reach a bar's screen length hides it (the axis runs nearly along the view), and how
// near a point hits a ball, square or the center dot, or a bar or ring; and the axis guide line a drag shows.
export const GIZMO_HIDE_RATIO = 0.2;
export const GIZMO_LOOK = Object.freeze({
  reach: 52,
  lineWidth: 2.5,
  ballRadius: 5,
  centerRadius: 4,
  squareSize: 9,
  squareRadius: 2,
  ringBackAlpha: 0.35,
  hideRatio: GIZMO_HIDE_RATIO,
  pointHit: 9,
  lineHit: 6,
  guideWidth: 1.5,
  guideAlpha: 0.8,
  // A lit handle: its color toward white by activeMix, a thicker line, a bigger ball and square; the center dot while
  // Move's center drag lasts.
  activeMix: 0.35,
  activeLineWidth: 3.5,
  activeBallRadius: 6.5,
  activeSquareSize: 11,
  activeCenterRadius: 5.5,
  // The dark underlay under every handle (wider than its line by underExtra, 1px out round a ball or square) and the
  // dark rim round the center dot, so the gizmo shows on a light picture.
  under: "rgba(0, 0, 0, 0.4)",
  underExtra: 2,
  centerRim: 1.5,
  // Move's plane squares: from GIZMO_PLANE_FROM to GIZMO_PLANE_TO of the reach along both of their axes, filled in the
  // color of the axis across the plane at planeAlpha with a planeLine px edge; lit, white at planeActiveAlpha.
  planeFrom: 0.28,
  planeTo: 0.52,
  planeAlpha: 0.4,
  planeActiveAlpha: 0.6,
  planeLine: 1,
});

// Move's plane squares (docs/studio-ui.md "ギズモ" "Move の平面の取っ手"): each named by its two axes, colored by the axis
// across it (Blender's way: XY the Z color, YZ the X color, XZ the Y color).
export const GIZMO_PLANES = Object.freeze([
  Object.freeze({ name: "xy", axes: [0, 1], normal: "z" }),
  Object.freeze({ name: "yz", axes: [1, 2], normal: "x" }),
  Object.freeze({ name: "xz", axes: [0, 2], normal: "y" }),
]);

const RING_STEPS = 64;
const AXIS_NAMES = ["x", "y", "z"];
const WORLD_AXES = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scale = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = (a) => scale(a, 1 / (Math.hypot(...a) || 1));
const column = (m, index) => [m[0][index], m[1][index], m[2][index]];

// The World point the gizmo sits on, and that Rotate and Scale keep in place (docs/studio-ui.md "ギズモ" "物の中心").
function pivotOf(gizmo) {
  return gizmo.center ? [...gizmo.center] : [...gizmo.transform.position];
}

// How many World units one CSS px spans at depth `depth` of a `height` px stage seen from `camera`.
function unitsPerPixel(camera, depth, height) {
  return depth / focalPixels(camera, height);
}

// The handles of the gizmo `gizmo` ({ mode ("translate", "rotate", "scale"), transform (pano_space.js sceneTransform's
// { position, quaternion, scale }), center (the World point it sits on: the object's guide's center, world_guides.js
// worldGuideItems; the transform's position without one) }) on a width x height CSS px stage seen from `camera` (a
// stageCamera()), or null when its center is not in front: { mode, center: { x, y }, length (World units of the reach), axes: [{ name, dir,
// end: { x, y }, depth, shown }], rings: [{ name, dir, points: [{ x, y, world, front }] }], planes (Move only):
// [{ name ("xy" | "yz" | "xz"), normal (the name of the axis across it), points (its 4 screen corners), shown }] }.
// Move and Rotate use the World axes, Scale the object's own.
export function gizmoHandles(gizmo, camera, width, height) {
  if (!gizmo) return null;
  const centerWorld = pivotOf(gizmo);
  const center = projectPoint(camera, centerWorld, width, height);
  if (!center) return null;
  const length = GIZMO_LOOK.reach * unitsPerPixel(camera, center.z, height);
  const rotation = quaternionToRotation(gizmo.transform.quaternion);
  const dirs = gizmo.mode === "scale" ? [0, 1, 2].map((index) => unit(column(rotation, index))) : WORLD_AXES;
  const eye = camera.position;
  const axes = dirs.map((dir, index) => {
    const end = projectPoint(camera, add(centerWorld, scale(dir, length)), width, height);
    const screenLength = end ? Math.hypot(end.x - center.x, end.y - center.y) : 0;
    return {
      name: AXIS_NAMES[index],
      dir,
      end: end ? { x: end.x, y: end.y } : null,
      depth: end ? end.z : Infinity,
      shown: gizmo.mode !== "rotate" && !!end && screenLength >= GIZMO_LOOK.hideRatio * GIZMO_LOOK.reach,
    };
  });
  const rings = gizmo.mode !== "rotate" ? [] : dirs.map((dir, index) => {
    // Two directions across the axis, for the ring's points.
    const u = unit(cross(dir, Math.abs(dir[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0]));
    const v = cross(dir, u);
    const toEye = sub(eye, centerWorld);
    const points = [];
    for (let step = 0; step <= RING_STEPS; step += 1) {
      const angle = (step / RING_STEPS) * Math.PI * 2;
      const offset = add(scale(u, Math.cos(angle) * length), scale(v, Math.sin(angle) * length));
      const world = add(centerWorld, offset);
      const p = projectPoint(camera, world, width, height);
      // The near half faces the view: the side of the plane through the center across the line of sight.
      points.push(p ? { x: p.x, y: p.y, world, front: dot(offset, toEye) >= 0 } : null);
    }
    return { name: AXIS_NAMES[index], dir, points };
  });
  const sight = unit(sub(centerWorld, eye));
  const planes = gizmo.mode !== "translate" ? [] : GIZMO_PLANES.map((plane) => {
    const [a, b] = plane.axes.map((index) => dirs[index]);
    const across = dirs[AXIS_NAMES.indexOf(plane.normal)];
    const near = GIZMO_LOOK.planeFrom * length;
    const far = GIZMO_LOOK.planeTo * length;
    const corners = [[near, near], [far, near], [far, far], [near, far]]
      .map(([u, v]) => projectPoint(camera, add(centerWorld, add(scale(a, u), scale(b, v))), width, height));
    // Seen edge on, the square is a sliver: it hides, as an axis along the view does.
    const shown = corners.every(Boolean) && Math.abs(dot(across, sight)) >= GIZMO_LOOK.hideRatio;
    return { name: plane.name, normal: plane.normal, points: shown ? corners.map((p) => ({ x: p.x, y: p.y })) : null, shown };
  });
  return { mode: gizmo.mode, center: { x: center.x, y: center.y }, length, axes, rings, planes };
}

// The handle of `handles` (gizmoHandles) that the CSS px point `point` hits: "x", "y", "z", "center" (Move's center
// dot), "xy", "yz", "xz" (Move's plane squares) or null. The balls, Scale's squares and the center dot come first,
// then a plane square the point is inside, then the bars and rings; of several, the nearest. A Scale bar is hit only
// farther than GIZMO_LOOK.pointHit from the center (its drag measures from the center).
export function gizmoHit(handles, point) {
  if (!handles) return null;
  let best = null;
  const consider = (name, distance, limit) => {
    if (distance <= limit && (!best || distance < best.distance)) best = { name, distance };
  };
  if (handles.mode !== "rotate") {
    for (const axis of handles.axes) if (axis.shown) consider(axis.name, Math.hypot(point.x - axis.end.x, point.y - axis.end.y), GIZMO_LOOK.pointHit);
  }
  if (handles.mode === "translate") consider("center", Math.hypot(point.x - handles.center.x, point.y - handles.center.y), GIZMO_LOOK.pointHit);
  if (best) return best.name;
  for (const plane of handles.planes ?? []) if (plane.shown && pointInPolygon(point, plane.points)) return plane.name;
  if (handles.mode === "rotate") {
    for (const ring of handles.rings) {
      ring.points.forEach((p, index) => {
        const next = ring.points[index + 1];
        if (p && next && p.front && next.front) consider(ring.name, distanceToSegment(point, p, next), GIZMO_LOOK.lineHit);
      });
    }
  } else {
    const fromCenter = Math.hypot(point.x - handles.center.x, point.y - handles.center.y);
    if (handles.mode === "scale" && fromCenter <= GIZMO_LOOK.pointHit) return null;
    for (const axis of handles.axes) if (axis.shown) consider(axis.name, distanceToSegment(point, handles.center, axis.end), GIZMO_LOOK.lineHit);
  }
  return best?.name ?? null;
}

function ray(camera, point, width, height) {
  return { origin: camera.position, direction: placeDirection(camera, point, width, height) };
}

// The parameter t of the point on the line `origin` + t `dir` (dir one unit long) nearest to the ray, or null when
// they run nearly parallel or that point is not in front of the view (nearer than `near` along the ray: the pointer is
// past the axis's vanishing point).
function lineParameter(origin, dir, { origin: from, direction }, near) {
  const d = unit(direction);
  const w = sub(origin, from);
  const b = dot(dir, d);
  const denominator = 1 - b * b;
  if (denominator < 1e-6) return null;
  const along = (dot(d, w) - b * dot(dir, w)) / denominator;
  if (!(along > near)) return null;
  return (b * dot(d, w) - dot(dir, w)) / denominator;
}

// Where the ray meets the plane through `origin` across `normal` (one unit long), or null when it runs nearly along
// the plane or meets it nearer than `near` along the ray.
export function planeHit({ origin: from, direction }, origin, normal, near = 0) {
  const d = unit(direction);
  const along = dot(d, normal);
  if (Math.abs(along) < 1e-6) return null;
  const t = dot(sub(origin, from), normal) / along;
  return t > near ? add(from, scale(d, t)) : null;
}

function axisAngle(dir, angle) {
  const [x, y, z] = dir;
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const t = 1 - c;
  return [
    [t * x * x + c, t * x * y - s * z, t * x * z + s * y],
    [t * x * y + s * z, t * y * y + c, t * y * z - s * x],
    [t * x * z - s * y, t * y * z + s * x, t * z * z + c],
  ];
}

function multiply(a, b) {
  return a.map((row) => [0, 1, 2].map((index) => row[0] * b[0][index] + row[1] * b[1][index] + row[2] * b[2][index]));
}

// A drag of the handle `name` (gizmoHit) of the gizmo `gizmo` (as gizmoHandles takes it) grabbed at the CSS px point
// `point` of a width x height stage seen from `camera`, or null when the handle cannot be dragged from here. Its
// `guide` ({ name, origin, dir }, or none for Move's center dot) is the axis guide line to draw while it lasts
// (gizmoGuideSegment). Its move(camera, point, width, height) gives the transform the drag has taken the gizmo to ({ position, quaternion,
// scale: [x, y, z] }, what pano_space.js gizmoDragLanes reads), or null to keep the last one. Every move is measured
// from where the drag began.
export function gizmoDrag(gizmo, name, camera, point, width, height) {
  const handles = gizmoHandles(gizmo, camera, width, height);
  if (!handles || !name) return null;
  const start = gizmo.transform;
  const pivot = pivotOf(gizmo);
  const result = (changes) => ({
    position: [...start.position],
    quaternion: { ...start.quaternion },
    scale: [start.scale, start.scale, start.scale],
    ...changes,
  });
  if (handles.mode === "translate" && name === "center") {
    // Across the line of sight where it was grabbed.
    const normal = viewForward(camera);
    const hitPlane = (r) => {
      const along = dot(r.direction, normal);
      if (Math.abs(along) < 1e-9) return null;
      const t = dot(sub(pivot, r.origin), normal) / along;
      return t > 0 ? add(r.origin, scale(r.direction, t)) : null;
    };
    const grabbed = hitPlane(ray(camera, point, width, height));
    if (!grabbed) return null;
    return {
      name,
      move(view, next, w, h) {
        const at = hitPlane(ray(view, next, w, h));
        return at ? result({ position: add(start.position, sub(at, grabbed)) }) : null;
      },
    };
  }
  const plane = GIZMO_PLANES.find((entry) => entry.name === name);
  if (handles.mode === "translate" && plane) {
    // On the plane through the pivot across the plane's normal axis (a ray-plane intersection), from where it was
    // grabbed; nothing while the ray runs along the plane or meets it behind the near plane.
    const normal = WORLD_AXES[AXIS_NAMES.indexOf(plane.normal)];
    const hitPlane = (r, near) => planeHit(r, pivot, normal, near);
    const grabbed = hitPlane(ray(camera, point, width, height), camera.near);
    if (!grabbed) return null;
    return {
      name,
      move(view, next, w, h) {
        const at = hitPlane(ray(view, next, w, h), view.near);
        return at ? result({ position: add(start.position, sub(at, grabbed)) }) : null;
      },
    };
  }
  const axis = handles.axes.find((entry) => entry.name === name);
  if (!axis) return null;
  // The axis guide line the drag shows: through the center where it was grabbed, along the axis.
  const guide = { name, origin: [...pivot], dir: axis.dir };
  if (handles.mode === "translate") {
    const t0 = lineParameter(pivot, axis.dir, ray(camera, point, width, height), camera.near);
    if (t0 === null) return null;
    return {
      name,
      guide,
      move(view, next, w, h) {
        const t = lineParameter(pivot, axis.dir, ray(view, next, w, h), view.near);
        return t === null ? null : result({ position: add(start.position, scale(axis.dir, t - t0)) });
      },
    };
  }
  if (handles.mode === "scale") {
    const along = unit([axis.end.x - handles.center.x, axis.end.y - handles.center.y, 0]);
    const reach = (p) => (p.x - handles.center.x) * along[0] + (p.y - handles.center.y) * along[1];
    const from = Math.max(reach(point), 1);
    const index = AXIS_NAMES.indexOf(name);
    return {
      name,
      guide,
      move(_view, next) {
        const scaled = [start.scale, start.scale, start.scale];
        scaled[index] = start.scale * (reach(next) / from);
        // About the pivot: the origin moves toward or away from it by the uniform scale gizmoDragLanes takes.
        const ratio = uniformScale(start.scale, scaled) / start.scale;
        return result({ scale: scaled, position: add(pivot, scale(sub(start.position, pivot), ratio)) });
      },
    };
  }
  // Rotate: the ring's point nearest to where it was grabbed, and the screen direction its turn takes that point.
  const ring = handles.rings.find((entry) => entry.name === name);
  let grabbed = null;
  for (const p of ring.points) {
    if (p && p.front && (!grabbed || Math.hypot(p.x - point.x, p.y - point.y) < Math.hypot(grabbed.x - point.x, grabbed.y - point.y))) grabbed = p;
  }
  if (!grabbed) return null;
  const tangent = unit(cross(axis.dir, sub(grabbed.world, pivot)));
  const ahead = projectPoint(camera, add(grabbed.world, scale(tangent, handles.length * 0.05)), width, height);
  let direction = ahead ? [ahead.x - grabbed.x, ahead.y - grabbed.y] : [0, 0];
  if (Math.hypot(...direction) < 1e-6) {
    // Grabbed where the ring runs along the line of sight: the turn goes across the axis on screen.
    const across = cross(viewForward(camera), axis.dir);
    const tip = projectPoint(camera, add(pivot, scale(across, handles.length)), width, height);
    direction = tip ? [tip.x - handles.center.x, tip.y - handles.center.y] : [1, 0];
  }
  const length = Math.hypot(...direction) || 1;
  const unitDirection = [direction[0] / length, direction[1] / length];
  const base = quaternionToRotation(start.quaternion);
  return {
    name,
    guide,
    move(_view, next) {
      const pixels = (next.x - point.x) * unitDirection[0] + (next.y - point.y) * unitDirection[1];
      const angle = pixels / GIZMO_LOOK.reach;
      const turn = axisAngle(axis.dir, angle);
      // About the pivot: the origin turns around it with the object.
      const arm = sub(start.position, pivot);
      const turned = [0, 1, 2].map((row) => dot(turn[row], arm));
      return result({ quaternion: rotationToQuaternion(multiply(turn, base)), position: add(pivot, turned) });
    },
  };
}

// The axis guide line `guide` (a gizmoDrag's) as a World segment reaching far past the stage's edges both ways: the
// overlay cuts it at the near plane (world_guides.js screenSegment). `camera` is a stageCamera().
export function gizmoGuideSegment(guide, camera) {
  const reach = Math.max(camera.far, 1);
  return [sub(guide.origin, scale(guide.dir, reach)), add(guide.origin, scale(guide.dir, reach))];
}
