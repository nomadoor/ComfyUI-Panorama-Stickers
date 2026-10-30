// The Camera's lens curve κ (docs/render-contract.md "カメラのレンズ", ADR 0042): a ray at an angle θ from the
// optical axis lands at `r = f·lens_radius(θ, κ)` from the image center, where `lens_radius(θ, κ) = tan(κθ) ÷ κ`
// (θ at κ = 0). κ = 1 is the pinhole (rectilinear) image, 0 the equidistant fisheye, 0.5 the stereographic one.
// comfyui_pano_suite/core/math.py has the same pair; tests/fixtures/lens/ binds the two.

export const LENS_CURVE_DEFAULT = 1;
export const LENS_CURVE_MIN = 0;
export const LENS_CURVE_MAX = 1;

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

// The film point of a direction (any length) at κ, or null where the lens does not reach (κθ of 90° or more).
export function lensDirectionFilm(direction, kappa) {
  const [x, y, z] = direction;
  const side = Math.hypot(x, y);
  const theta = Math.atan2(side, -z);
  if (!(kappa * theta < Math.PI / 2)) return null;
  if (side === 0) return { x: 0, y: 0 };
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
