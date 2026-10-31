// The Camera's lens curve κ (docs/render-contract.md "カメラのレンズ", ADR 0042): a ray at an angle θ from the
// optical axis lands at `r = f·lens_radius(θ, κ)` from the image center, where `lens_radius(θ, κ) = tan(κθ) ÷ κ`
// (θ at κ = 0). κ = 1 is the pinhole (rectilinear) image, 0 the equidistant fisheye, 0.5 the stereographic one.
// comfyui_pano_suite/core/math.py has the same pair; tests/fixtures/lens/ binds the two.

export const LENS_CURVE_DEFAULT = 1;
export const LENS_CURVE_MIN = 0;
export const LENS_CURVE_MAX = 1;

// The decimals the inspector shows κ with (its Lens row and the Camera tab's Lens ruler).
export const LENS_CURVE_DIGITS = 2;
// Whether the Camera tab treats a Camera of κ `curve` as a lens Camera for its hits, guides, gizmo and pan
// (docs/space-and-view.md "レンズの Camera の当たり"): κ rounded to LENS_CURVE_DIGITS is not 1, so a κ shown as 1.00 is a
// pinhole there. What is drawn (the stage, the output, the Output window) keeps κ as it is.
export function lensCurveBent(curve) {
  const scale = 10 ** LENS_CURVE_DIGITS;
  return Math.round(Number(curve) * scale) / scale !== LENS_CURVE_DEFAULT;
}

const DEG2RAD = Math.PI / 180;

// Below this |κθ| (or |κρ|) the ratios take their series, as core/math.py's do (`_LENS_SERIES`).
const LENS_SERIES = 1e-4;

// tan(x) ÷ x and atan(x) ÷ x, 1 at x = 0 (core/math.py `_tan_ratio`, `_atan_ratio`).
function tanRatio(x) {
  return Math.abs(x) < LENS_SERIES ? 1 + x * x / 3 : Math.tan(x) / x;
}

function atanRatio(x) {
  return Math.abs(x) < LENS_SERIES ? 1 - x * x / 3 : Math.atan(x) / x;
}

// The distance on the image, in units of f, of a ray at `theta` radians from the axis (defined for κθ < π/2): tan θ
// for a pinhole, θ·tan(κθ) ÷ (κθ) otherwise, as core/math.py `lens_radius`.
export function lensRadius(theta, kappa) {
  return kappa === 1 ? Math.tan(theta) : theta * tanRatio(theta * kappa);
}

// The inverse of lensRadius: the angle in radians from the axis of the ray through a point `rho` (in units of f)
// from the image center, as core/math.py `lens_angle`. Closed form, so no iteration.
export function lensAngle(rho, kappa) {
  return kappa === 1 ? Math.atan(rho) : rho * atanRatio(rho * kappa);
}

// The largest hFOV (degrees) a κ allows, keeping the edge ray's κ·hFOV/2 under 90°: min(360, 179 ÷ κ).
export function lensFovLimit(kappa) {
  return kappa > 0 ? Math.min(360, 179 / kappa) : 360;
}

// The hFOV (degrees) at κ of an image whose center scale f is that of hFOV₀ at κ₀ (docs/editor-interaction.md
// "レンズの行"): f = r_edge ÷ lens_radius(hFOV₀ ÷ 2, κ₀) and hFOV = 2·lens_angle(r_edge ÷ f, κ), so r_edge cancels; under
// lensFovLimit(κ).
export function lensFovKeepingCenter(hFov0, kappa0, kappa) {
  const edge = lensRadius(hFov0 * 0.5 * DEG2RAD, kappa0);
  return Math.min(lensFovLimit(kappa), 2 * lensAngle(edge, kappa) / DEG2RAD);
}

// The image a lens Camera draws, as directions (ADR 0042). A film point is a point of the image in units of f from
// its center, x right and y up; directions are in the camera's own axes as three.js has them (x right, y up, looking
// down -z).

// The direction of the ray through the film point (x, y) at κ, of length 1, or null past 180° off the axis (where
// the output shows bg_color).
export function lensFilmDirection(x, y, kappa) {
  const rho = Math.hypot(x, y);
  const theta = lensAngle(rho, kappa);
  if (!(theta <= Math.PI)) return null;
  if (rho === 0) return [0, 0, -1];
  const s = Math.sin(theta) / rho;
  return [x * s, y * s, -Math.cos(theta)];
}

// The film point of a direction (any length) at κ, or null where the lens does not reach (κθ of 90° or more) and
// straight behind the axis (θ = 180°, imaged at κ < 0.5 as the whole ring at ρ = π·tan(κπ)/(κπ), not one point).
export function lensDirectionFilm(direction, kappa) {
  const [x, y, z] = direction;
  const side = Math.hypot(x, y);
  const theta = Math.atan2(side, -z);
  if (!(kappa * theta < Math.PI / 2)) return null;
  if (side === 0) return z > 0 ? null : { x: 0, y: 0 };
  const rho = lensRadius(theta, kappa);
  return { x: (x / side) * rho, y: (y / side) * rho };
}

// The editor draws a lens Camera's image in two steps (docs/threejs-spark-integration.md "Camera から見た空間の表示"):
// a pinhole image with overscan, or the six faces of a cube from the Camera's position, then a pass that samples it
// per output pixel along lensFilmDirection. The pinhole holds at most LENS_OVERSCAN_MAX_AREA times the output's
// pixels; past that, or where the image's corners are 90° or more off the axis, the cube draws.
export const LENS_OVERSCAN_MAX_AREA = 4;
// A view that drew through the cube goes back to the pinhole only below this part of that area, so a Lens curve or
// H FOV edit near the bound does not switch back and forth: the two draw a SPLAT's splats differently (each face
// projects them on its own plane), which shows as a jump at each switch.
export const LENS_PINHOLE_RETURN = 0.75;
// The widest half angle a pinhole draws; past it its image would be unbounded.
const PINHOLE_HALF_ANGLE_MAX = 89 * DEG2RAD;
// The cube's faces: their pixels per tan unit at the center are f (the lens's at its center), within these sides.
const CUBE_FACE_MIN = 64;
const CUBE_FACE_MAX = 2048;
const HALF = Math.SQRT1_2;
// The cube's faces as turns from the World's axes (looking down -z): front, right, left, up, down, back. The cube stands
// at the Camera's position aligned to the World, so a turn of the Camera alone leaves its faces as they are.
export const LENS_CUBE_FACES = Object.freeze([
  { x: 0, y: 0, z: 0, w: 1 },
  { x: 0, y: -HALF, z: 0, w: HALF },
  { x: 0, y: HALF, z: 0, w: HALF },
  { x: HALF, y: 0, z: 0, w: HALF },
  { x: -HALF, y: 0, z: 0, w: HALF },
  { x: 0, y: 1, z: 0, w: 0 },
].map(Object.freeze));
const IDENTITY = LENS_CUBE_FACES[0];

// a·b: the turn b, then a.
export function multiplyQuaternions(a, b) {
  return {
    x: a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
    y: a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
    z: a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w,
    w: a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
  };
}

// v turned by q.
export function rotateByQuaternion(q, v) {
  const [x, y, z] = v;
  const tx = 2 * (q.y * z - q.z * y);
  const ty = 2 * (q.z * x - q.x * z);
  const tz = 2 * (q.x * y - q.y * x);
  return [
    x + q.w * tx + (q.y * tz - q.z * ty),
    y + q.w * ty + (q.z * tx - q.x * tz),
    z + q.w * tz + (q.x * ty - q.y * tx),
  ];
}

const conjugate = (q) => ({ x: -q.x, y: -q.y, z: -q.z, w: q.w });

// Where a direction lands on a face { quaternion, tanX, tanY }: x and y from -1 to 1 across it, or null when it is
// not in front of it.
export function lensFaceCoordinates(face, direction) {
  const [x, y, z] = rotateByQuaternion(conjugate(face.quaternion), direction);
  if (!(z < 0)) return null;
  return { x: x / -z / face.tanX, y: y / -z / face.tanY };
}

// Whether the cone of directions within `thetaMax` radians of `forward` (a World direction of length 1) meets the
// face `quaternion` of the cube (its square, x and y from -1 to 1 at depth 1): the face's directions closest to the
// axis are inside it, or on one of its edges, each an arc of a great circle.
export function lensCubeFaceSeen(quaternion, forward, thetaMax) {
  if (thetaMax >= Math.PI) return true;
  const axis = rotateByQuaternion(quaternion, [0, 0, -1]);
  const right = rotateByQuaternion(quaternion, [1, 0, 0]);
  const up = rotateByQuaternion(quaternion, [0, 1, 0]);
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const unit = (v) => {
    const length = Math.hypot(...v);
    return v.map((value) => value / length);
  };
  const angle = (a, b) => Math.acos(Math.min(1, Math.max(-1, dot(a, b))));
  const depth = dot(forward, axis);
  if (depth > 0 && Math.abs(dot(forward, right)) <= depth && Math.abs(dot(forward, up)) <= depth) return true;
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([x, y]) => unit(axis.map((value, i) => value + x * right[i] + y * up[i])));
  let nearest = Math.PI;
  corners.forEach((a, index) => {
    const b = corners[(index + 1) % 4];
    nearest = Math.min(nearest, angle(forward, a));
    const normal = unit([a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]);
    const across = dot(forward, normal);
    const onCircle = forward.map((value, i) => value - across * normal[i]);
    if (Math.hypot(...onCircle) < 1e-12) return;
    const point = unit(onCircle);
    // The great circle's point nearest `forward` counts where it lies on the arc between the corners.
    if (Math.abs(angle(a, point) + angle(point, b) - angle(a, b)) < 1e-9) nearest = Math.min(nearest, angle(forward, point));
  });
  return nearest <= thetaMax + 1e-9;
}

// How the editor draws the image of a lens Camera (κ, f in pixels) of width x height pixels whose center is at
// (centerX, centerY) of it, the Camera turned by `quaternion` in the World: { kind: "pinhole" | "cube", faces:
// [{ quaternion, world, tanX, tanY, width, height, seen }] }, each face a pinhole image that spans tanX and tanY each
// way, turned by `quaternion` from the Camera (the pinhole) or from the World's axes (`world`, the cube's faces). The
// pinhole's f is the lens's at its center, so the sampling pass never enlarges it (κ ≤ 1). A cube face is `seen`
// when the image's cone of directions meets it (lensCubeFaceSeen); the others are not drawn. maxSide caps a face's
// side (the GPU's). `previous` is the kind the same view drew last ("pinhole", "cube" or null): after the cube the
// pinhole holds LENS_PINHOLE_RETURN of its area.
export function lensRenderPlan({ width, height, centerX = width / 2, centerY = height / 2, focal, curve, quaternion = null, maxSide = 4096, previous = null }) {
  const corners = [[0, 0], [width, 0], [0, height], [width, height]].map(([px, py]) => Math.hypot(px - centerX, py - centerY) / focal);
  const thetaMax = Math.max(...corners.map((rho) => lensAngle(rho, curve)));
  if (thetaMax < PINHOLE_HALF_ANGLE_MAX) {
    const pinhole = focal;
    // The image's edges on the pinhole's image: its farthest points from the axis each way.
    let halfX = 0;
    let halfY = 0;
    const steps = 64;
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      for (const [px, py] of [[t * width, 0], [t * width, height], [0, t * height], [width, t * height]]) {
        const direction = lensFilmDirection((px - centerX) / focal, (centerY - py) / focal, curve);
        halfX = Math.max(halfX, Math.abs(direction[0] / -direction[2]));
        halfY = Math.max(halfY, Math.abs(direction[1] / -direction[2]));
      }
    }
    // A pixel more each way, for the sampling's bilinear neighbours.
    const pixelsX = 2 * Math.ceil(halfX * pinhole + 1);
    const pixelsY = 2 * Math.ceil(halfY * pinhole + 1);
    const area = LENS_OVERSCAN_MAX_AREA * (previous === "cube" ? LENS_PINHOLE_RETURN : 1);
    if (pixelsX * pixelsY <= area * width * height) {
      const fit = Math.min(1, maxSide / Math.max(pixelsX, pixelsY));
      return {
        kind: "pinhole",
        faces: [{
          quaternion: IDENTITY,
          world: false,
          tanX: pixelsX / 2 / pinhole,
          tanY: pixelsY / 2 / pinhole,
          width: Math.max(1, Math.round(pixelsX * fit)),
          height: Math.max(1, Math.round(pixelsY * fit)),
          seen: true,
        }],
      };
    }
  }
  const side = Math.min(maxSide, CUBE_FACE_MAX, Math.max(CUBE_FACE_MIN, 2 * Math.ceil(focal)));
  // A face reaches a pixel past 90° so that its edge samples have their neighbours.
  const reach = 1 + 2 / side;
  // Without the Camera's turn every face counts as seen.
  const forward = quaternion ? rotateByQuaternion(quaternion, [0, 0, -1]) : null;
  return {
    kind: "cube",
    faces: LENS_CUBE_FACES.map((face) => ({
      quaternion: face, world: true, tanX: reach, tanY: reach, width: side, height: side,
      seen: !forward || lensCubeFaceSeen(face, forward, thetaMax),
    })),
  };
}

// Where the Frame view picks the ray through the film point (x, y) at κ of a Camera turned by `quaternion` in the
// World (docs/threejs-spark-integration.md "当たり判定"): the face of the World-aligned cube it goes through, as a
// pinhole camera turned by the face's `quaternion` in the World with a 90° square view, and its pixel { x, y } in a
// size x size image of that face; null past 180°.
export function lensPickWindow(x, y, kappa, size = 1024, quaternion = IDENTITY) {
  const film = lensFilmDirection(x, y, kappa);
  if (!film) return null;
  const direction = rotateByQuaternion(quaternion, film);
  const axes = direction.map(Math.abs);
  const major = axes.indexOf(Math.max(...axes));
  const index = major === 0 ? (direction[0] > 0 ? 1 : 2) : major === 1 ? (direction[1] > 0 ? 3 : 4) : (direction[2] < 0 ? 0 : 5);
  const face = LENS_CUBE_FACES[index];
  const at = lensFaceCoordinates({ quaternion: face, tanX: 1, tanY: 1 }, direction);
  return { quaternion: face, x: (at.x + 1) / 2 * size, y: (1 - at.y) / 2 * size, size };
}

// The same for an image whose axes are { fwd, right, up } ({ x, y, z } each, as pano_camera_math.js cameraBasis
// gives them): the World direction of its film point (x, y) at κ, of length 1 (null past 180°), and the film point
// of a World direction (null where the lens does not reach). A Camera's shot, a sky Sticker of a lens curve and the
// overlays drawn on a lens image all map through these.
export function lensAxesDirection(axes, x, y, kappa) {
  const ray = lensFilmDirection(x, y, kappa);
  if (!ray) return null;
  const along = (axis) => axes.right[axis] * ray[0] + axes.up[axis] * ray[1] - axes.fwd[axis] * ray[2];
  return { x: along("x"), y: along("y"), z: along("z") };
}

export function lensAxesFilm(axes, direction, kappa) {
  const on = (axis) => direction.x * axis.x + direction.y * axis.y + direction.z * axis.z;
  return lensDirectionFilm([on(axes.right), on(axes.up), -on(axes.fwd)], kappa);
}

// The Camera tab's Frame view of a lens Camera (docs/space-and-view.md "レンズの Camera の当たり"): the guides, the CPU
// hover, the gizmo and the sky images' handles map 3D points onto the bent picture with lensProjectPoint, the one
// function for it, and take the pointer back to a ray with lensStageRay. A camera (a three.js setup: position,
// quaternion, near) carries the picture's placement as `lensImage` ({ curve, focalPx, centerX, centerY }: f and the
// image center in the view's CSS px, pano_editor_view.js frameViewContext's `lens`); pano_space.js projectPoint,
// pano_editor_view.js viewProjection and studio/hit_test.js cameraRay go through these for such a camera.

// `camera` carrying the lens picture `lens`.
export function withLensImage(camera, lens) {
  return { ...camera, lensImage: lens };
}

// The half angle (radians) a lens of κ `curve` images in the Camera tab: half of lensFovLimit. Points farther off the
// axis are not drawn and not hit.
function lensHalfLimit(curve) {
  return lensFovLimit(curve) * 0.5 * DEG2RAD;
}

// Where a direction in the camera's own axes (x right, y up, looking down -z; any length) lands on the picture `lens`
// ({ x, y } in its CSS px), or null past its half limit.
export function lensImagePoint(lens, direction) {
  const [x, y, z] = direction;
  if (!(Math.atan2(Math.hypot(x, y), -z) <= lensHalfLimit(lens.curve))) return null;
  const film = lensDirectionFilm(direction, lens.curve);
  if (!film) return null;
  return { x: lens.centerX + film.x * lens.focalPx, y: lens.centerY - film.y * lens.focalPx };
}

// Where the World point `p` lands on the lens picture of `camera` (withLensImage): { x, y, z } with z its distance
// from the eye (the depth the hits and the gizmo's size go by), or null nearer than camera.near or past the half limit.
export function lensProjectPoint(camera, p) {
  const d = [p[0] - camera.position[0], p[1] - camera.position[1], p[2] - camera.position[2]];
  const distance = Math.hypot(...d);
  if (!(distance > camera.near)) return null;
  const at = lensImagePoint(camera.lensImage, rotateByQuaternion(conjugate(camera.quaternion), d));
  return at && { x: at.x, y: at.y, z: distance };
}

// The film point (units of f, x right and y up) of the point (x, y) of the lens picture `lens` ({ curve, focalPx,
// centerX, centerY }, in its px): the one rule for the picture's px and its film, which lensImagePoint inverts.
export function lensFilm(lens, x, y) {
  return { x: (x - lens.centerX) / lens.focalPx, y: (lens.centerY - y) / lens.focalPx };
}

// The ray from `camera` (withLensImage) through the point (x, y) of its picture: { origin, direction } with the
// direction one unit long in the World, or null past its half limit (lens_angle, pano_lens.js lensFilmDirection).
export function lensStageRay(camera, x, y) {
  const lens = camera.lensImage;
  const at = lensFilm(lens, x, y);
  const film = lensFilmDirection(at.x, at.y, lens.curve);
  if (!film || !(Math.acos(Math.max(-1, Math.min(1, -film[2]))) <= lensHalfLimit(lens.curve))) return null;
  return { origin: [...camera.position], direction: rotateByQuaternion(camera.quaternion, film) };
}

// Below this the curve of a mapped straight line is taken as drawn (CSS px between a piece's mapped middle and its
// chord's middle), and how many times a piece is halved at least and at most.
const LENS_LINE_TOLERANCE = 0.25;
const LENS_LINE_MIN_DEPTH = 3;
const LENS_LINE_MAX_DEPTH = 10;

// The 3D segment a-b on a lens picture: `project` (a World point -> { x, y } or null; lensProjectPoint) maps it piece
// by piece, each piece halved until its mapped middle lies within LENS_LINE_TOLERANCE px of its chord (at least
// 2^LENS_LINE_MIN_DEPTH pieces), so the curve does not look angular at any size. Returns the runs of mapped points
// ([[{ x, y, world }]], each of 2 or more), cut where the line leaves what the lens images (found by halving too).
export function lensPolylines(project, a, b) {
  const runs = [];
  let run = null;
  const emit = (point) => {
    if (!point) {
      run = null;
      return;
    }
    if (!run) {
      run = [point];
      runs.push(run);
    } else run.push(point);
  };
  const at = (world) => {
    const p = project(world);
    return p ? { x: p.x, y: p.y, world } : null;
  };
  const mid = (u, v) => u.map((value, axis) => (value + v[axis]) / 2);
  // Adds the points after `pa` up to `pb` of the piece u-v.
  const piece = (u, v, pa, pb, depth) => {
    const m = mid(u, v);
    const pm = at(m);
    const flat = pa && pb && pm && Math.hypot(pm.x - (pa.x + pb.x) / 2, pm.y - (pa.y + pb.y) / 2) <= LENS_LINE_TOLERANCE;
    if (depth >= LENS_LINE_MAX_DEPTH || (depth >= LENS_LINE_MIN_DEPTH && flat) || (!pa && !pb && !pm && depth >= LENS_LINE_MIN_DEPTH)) {
      if (pa && !pb) emit(null);
      else if (pb) {
        if (!pa) emit(null);
        emit(pb);
      }
      return;
    }
    piece(u, m, pa, pm, depth + 1);
    piece(m, v, pm, pb, depth + 1);
  };
  const first = at(a);
  if (first) emit(first);
  piece(a, b, first, at(b), 0);
  return runs.filter((points) => points.length >= 2);
}
