// The Camera's lens curve κ (docs/render-contract.md "カメラのレンズ", ADR 0042): a ray at an angle θ from the
// optical axis lands at `r = f·lens_radius(θ, κ)` from the image center, where `lens_radius(θ, κ) = tan(κθ) ÷ κ`
// (θ at κ = 0). κ = 1 is the pinhole (rectilinear) image, 0 the equidistant fisheye, 0.5 the stereographic one.
// comfyui_pano_suite/core/math.py has the same pair; tests/fixtures/lens/ binds the two.

export const LENS_CURVE_DEFAULT = 1;
export const LENS_CURVE_MIN = 0;
export const LENS_CURVE_MAX = 1.5;

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
// The widest half angle a pinhole draws; past it its image would be unbounded.
const PINHOLE_HALF_ANGLE_MAX = 89 * DEG2RAD;
// The cube's faces: their pixels per tan unit at the center are f (the lens's at its center), within these sides.
const CUBE_FACE_MIN = 64;
const CUBE_FACE_MAX = 2048;
const HALF = Math.SQRT1_2;
// The cube's faces as turns of the camera (quaternions in its own axes): front, right, left, up, down, back.
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

// How the editor draws the image of a lens Camera (κ, f in pixels) of width x height pixels whose center is at
// (centerX, centerY) of it: { kind: "pinhole" | "cube", faces: [{ quaternion, tanX, tanY, width, height }] }, each
// face a pinhole image turned by `quaternion` from the Camera that spans tanX and tanY each way. A pinhole is chosen
// so that the sampling pass never enlarges it (its pixels per radian are at least the lens's everywhere in the
// image): f at κ < 1, larger toward the corners at κ > 1. maxSide caps a face's side (the GPU's).
export function lensRenderPlan({ width, height, centerX = width / 2, centerY = height / 2, focal, curve, maxSide = 4096 }) {
  const corners = [[0, 0], [width, 0], [0, height], [width, height]].map(([px, py]) => Math.hypot(px - centerX, py - centerY) / focal);
  const thetaMax = Math.max(...corners.map((rho) => lensAngle(rho, curve)));
  if (thetaMax < PINHOLE_HALF_ANGLE_MAX) {
    // The pinhole's f against the lens's: radially f·sec²θ against f·sec²(κθ), across tanθ against tan(κθ) ÷ κ.
    const scale = curve > 1
      ? Math.max(1, (Math.cos(thetaMax) / Math.cos(curve * thetaMax)) ** 2, lensRadius(thetaMax, curve) / Math.tan(thetaMax))
      : 1;
    const pinhole = focal * scale;
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
    if (pixelsX * pixelsY <= LENS_OVERSCAN_MAX_AREA * width * height) {
      const fit = Math.min(1, maxSide / Math.max(pixelsX, pixelsY));
      return {
        kind: "pinhole",
        faces: [{
          quaternion: IDENTITY,
          tanX: pixelsX / 2 / pinhole,
          tanY: pixelsY / 2 / pinhole,
          width: Math.max(1, Math.round(pixelsX * fit)),
          height: Math.max(1, Math.round(pixelsY * fit)),
        }],
      };
    }
  }
  const side = Math.min(maxSide, CUBE_FACE_MAX, Math.max(CUBE_FACE_MIN, 2 * Math.ceil(focal)));
  // A face reaches a pixel past 90° so that its edge samples have their neighbours.
  const reach = 1 + 2 / side;
  return {
    kind: "cube",
    faces: LENS_CUBE_FACES.map((quaternion) => ({ quaternion, tanX: reach, tanY: reach, width: side, height: side })),
  };
}

// Where the Frame view picks the ray through the film point (x, y) at κ (docs/threejs-spark-integration.md
// "当たり判定"): the face of the cube it goes through, as a pinhole camera turned by `quaternion` from the Camera
// with a 90° square view, and its pixel { x, y } in a size x size image of that face; null past 180°.
export function lensPickWindow(x, y, kappa, size = 1024) {
  const direction = lensFilmDirection(x, y, kappa);
  if (!direction) return null;
  const axes = direction.map(Math.abs);
  const major = axes.indexOf(Math.max(...axes));
  const index = major === 0 ? (direction[0] > 0 ? 1 : 2) : major === 1 ? (direction[1] > 0 ? 3 : 4) : (direction[2] < 0 ? 0 : 5);
  const quaternion = LENS_CUBE_FACES[index];
  const at = lensFaceCoordinates({ quaternion, tanX: 1, tanY: 1 }, direction);
  return { quaternion, x: (at.x + 1) / 2 * size, y: (1 - at.y) / 2 * size, size };
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
