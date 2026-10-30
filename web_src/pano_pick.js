// The math of picking the World content on the GPU (pano_three_view.js pick): the three.js view draws
// only the pixel under the pointer into a 1 x 1 target, each pickable object writing its pick id and its
// depth along the view axis, and reads that one pixel back. Everything here runs without WebGL, so Node
// tests it; drawing and reading the pixel is in pano_three_view.js. It is imported by the three.js chunk
// only and imports nothing, so the chunk stays free of modules the eager bundle uses.
//
// camera is a spaceCamera() setup (pano_space.js): { position, quaternion, fovY_deg, aspect, near, far }.

// Ids and depths written to an RGBA8 target are 24-bit integers in its red, green and blue bytes.
const PICK_24 = 16777215;

// The pick material's shaders. pickMode 0 writes to a float target (red the id, green the depth); 1 and 2
// write the id and the depth to an RGBA8 target in two draws, packed as packPick24() does. id 0 is
// nothing (the clear color). The depth is the distance along the view axis (view space -z); on an RGBA8
// target it is its part of `far`.
// A SkinnedMesh or a shape with morphs (an animated 3D file, ADR 0043) is picked in its pose: three.js defines
// USE_SKINNING and USE_MORPHTARGETS only for those, so a static shape's program is as before.
export const PICK_VERTEX = `
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
varying float vDepth;
void main() {
  vec3 transformed = vec3(position);
  #include <morphtarget_vertex>
  #include <skinbase_vertex>
  #include <skinning_vertex>
  vec4 local = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  local = instanceMatrix * local;
#endif
  vec4 view = modelViewMatrix * local;
  vDepth = -view.z;
  gl_Position = projectionMatrix * view;
}`;

export const PICK_FRAGMENT = `
uniform float pickId;
uniform int pickMode;
uniform float far;
varying float vDepth;
vec4 pack24(float n) {
  return vec4(mod(floor(n / vec3(65536.0, 256.0, 1.0)), 256.0) / 255.0, 1.0);
}
void main() {
  if (pickMode == 0) {
    gl_FragColor = vec4(pickId, vDepth, 0.0, 1.0);
  } else if (pickMode == 1) {
    gl_FragColor = pack24(pickId);
  } else {
    gl_FragColor = pack24(floor(clamp(vDepth / far, 0.0, 1.0) * ${PICK_24}.0 + 0.5));
  }
}`;

// The most objects one pick tells apart on an RGBA8 target.
export const PICK_ID_LIMIT = PICK_24;

// The red, green and blue bytes the pick shader's pack24() writes for the integer n (0 to PICK_24).
export function packPick24(n) {
  return [Math.floor(n / 65536) % 256, Math.floor(n / 256) % 256, n % 256];
}

export function unpackPick24(bytes) {
  return bytes[0] * 65536 + bytes[1] * 256 + bytes[2];
}

// The hit a float target's pixel holds, as { id, depth }, or null over nothing.
export function readPickFloat(pixel) {
  const id = Math.round(pixel[0]);
  return id > 0 ? { id, depth: pixel[1] } : null;
}

// The same from an RGBA8 target's two draws: the id pixel and the depth pixel, drawn with `far`.
export function readPickBytes(idPixel, depthPixel, far) {
  const id = unpackPick24(idPixel);
  return id > 0 ? { id, depth: unpackPick24(depthPixel) / PICK_24 * far } : null;
}

// The view offset (three.js PerspectiveCamera.setViewOffset) that draws the 1 x 1 pixel centered on
// (x, y) of a width x height view, so the pixel's center is the ray through (x, y).
export function pickWindow(x, y, width, height) {
  return { fullWidth: width, fullHeight: height, x: x - 0.5, y: y - 0.5, width: 1, height: 1 };
}

function rotate(q, v) {
  // v + 2 w (q x v) + 2 q x (q x v)
  const tx = 2 * (q.y * v[2] - q.z * v[1]);
  const ty = 2 * (q.z * v[0] - q.x * v[2]);
  const tz = 2 * (q.x * v[1] - q.y * v[0]);
  return [
    v[0] + q.w * tx + q.y * tz - q.z * ty,
    v[1] + q.w * ty + q.z * tx - q.x * tz,
    v[2] + q.w * tz + q.x * ty - q.y * tx,
  ];
}

// The ray through (x, y) of a width x height view from camera: its origin and a direction one unit
// long along the view axis, so the point at depth d (pick's depth) is origin + direction * d.
export function pickRay(camera, x, y, width, height) {
  const tanY = Math.tan(camera.fovY_deg * Math.PI / 360);
  const local = [(x / width * 2 - 1) * tanY * camera.aspect, (1 - y / height * 2) * tanY, -1];
  return { origin: [...camera.position], direction: rotate(camera.quaternion, local) };
}

export function pointAt(ray, depth) {
  return ray.origin.map((value, axis) => value + ray.direction[axis] * depth);
}

// Where the ray origin + direction * t enters the box { min, max } (both in the same frame): the least
// t >= 0 on it, so from inside the box it is where the ray leaves. null when it misses.
export function rayBoxDepth(origin, direction, box) {
  let enter = -Infinity;
  let leave = Infinity;
  for (let axis = 0; axis < 3; axis += 1) {
    if (direction[axis] === 0) {
      if (origin[axis] < box.min[axis] || origin[axis] > box.max[axis]) return null;
      continue;
    }
    const a = (box.min[axis] - origin[axis]) / direction[axis];
    const b = (box.max[axis] - origin[axis]) / direction[axis];
    enter = Math.max(enter, Math.min(a, b));
    leave = Math.min(leave, Math.max(a, b));
  }
  if (enter > leave || leave < 0) return null;
  return enter >= 0 ? enter : leave;
}

// The nearest of the hits ({ depth, ... }) within the camera's near and far, or null. With `preferred`, the
// nearest hit it accepts comes before any other.
export function nearestHit(hits, camera, preferred = () => false) {
  let best = null;
  for (const hit of hits) {
    if (!hit || hit.depth < camera.near || hit.depth > camera.far) continue;
    const rank = preferred(hit) ? 0 : 1;
    if (!best || rank < best.rank || (rank === best.rank && hit.depth < best.hit.depth)) best = { hit, rank };
  }
  return best?.hit ?? null;
}

// A pick is reused while this stays the same: the pixel, the view and what the view drew (contentKey). A
// change to what is drawn that moves what is hit (geometry, transforms, visibility) must change contentKey.
export function pickCacheKey(camera, x, y, width, height, contentKey) {
  return JSON.stringify([camera, x, y, width, height, contentKey]);
}

