// The GLSL of the three.js view (pano_three_view.js createThreeView): the Sky's, the world Sticker planes' and lens
// patches', the Unwrap view's and the lens pass's shaders. Part of the three.js chunk (pano_three_view.js).
import { PICK_FRAGMENT } from "../pano_pick.js";
import { LENS_GLSL } from "../pano_lens_glsl.js";

// The Sky's and the world Sticker planes' shaders write their images' (sRGB) values as they are, which the canvas
// shows as they are. The lens and live ERP faces hold the canvas's values (pano_live_erp.js canvasValueTarget), so
// the same values go there.

// The ERP is laid out in the panorama convention (forward +Z); World is glTF (forward -Z).
export const ERP_VERTEX = `
varying vec3 vDirection;
void main() {
  vDirection = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

export const ERP_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
uniform bool halfCoverage;
varying vec3 vDirection;
const float PI = 3.1415926535897932384626433832795;
void main() {
  vec3 dir = normalize(vec3(vDirection.xy, -vDirection.z));
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  vec2 uv = vec2(lon / (2.0 * PI) + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
  if (halfCoverage) {
    if (abs(lon) > PI * 0.5) {
      gl_FragColor = vec4(0.0);
      return;
    }
    uv.x = clamp(lon / PI + 0.5, 0.0, 1.0);
  }
  gl_FragColor = texture2D(map, uv) * opacity;
}`;

export const STICKER_VERTEX = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

export const STICKER_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
varying vec2 vUv;
void main() {
  gl_FragColor = texture2D(map, vUv) * opacity;
}`;

// A world Sticker's plane shows its crop (x0, v of y1, x1, v of y0) of the image; v runs up the image.
export const WORLD_STICKER_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
uniform vec4 crop;
varying vec2 vUv;
void main() {
  vec4 color = texture2D(map, vec2(mix(crop.x, crop.z, vUv.x), mix(crop.y, crop.w, vUv.y))) * opacity;
  if (color.a <= 0.0) discard;
  gl_FragColor = color;
}`;

// The Unwrap view draws every layer on a full-view quad in the ERP layout: longitude runs across
// the view and latitude down it, with the ERP's own pixels for the ERP layers.
export const UNWRAP_VERTEX = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

export const UNWRAP_ERP_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
varying vec2 vUv;
void main() {
  gl_FragColor = texture2D(map, vec2(vUv.x, 1.0 - vUv.y)) * opacity;
}`;

// A sky Sticker seen along each ERP pixel's World direction, in the Sticker's own frame (looking
// down -Z) where its image plane is rect one unit ahead.
// A sky Sticker's image at a direction in its own axes (toSticker of the World direction): on its image plane one
// unit ahead, or at a lens curve other than 1 (ADR 0042) on the image of that lens, whose film rect it covers.
const STICKER_IMAGE_GLSL = `
${LENS_GLSL}
uniform mat3 toSticker;
uniform vec4 rect;
uniform float curve;
bool stickerImage(vec3 local, out vec2 uv) {
  vec2 plane;
  if (curve == 1.0) {
    if (local.z >= -1e-5) return false;
    plane = local.xy / -local.z;
  } else if (!lensFilm(local, curve, plane)) {
    return false;
  }
  if (plane.x < rect.x || plane.x > rect.z || plane.y < rect.y || plane.y > rect.w) return false;
  uv = (plane - rect.xy) / (rect.zw - rect.xy);
  return true;
}
`;

export const UNWRAP_STICKER_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
varying vec2 vUv;
${STICKER_IMAGE_GLSL}
const float PI = 3.1415926535897932384626433832795;
void main() {
  float lon = (vUv.x - 0.5) * 2.0 * PI;
  float lat = (vUv.y - 0.5) * PI;
  vec2 uv;
  if (!stickerImage(toSticker * vec3(cos(lat) * sin(lon), sin(lat), -cos(lat) * cos(lon)), uv)) discard;
  gl_FragColor = texture2D(map, uv) * opacity;
}`;

// A sky Sticker of a lens curve other than 1 in the panorama view: drawn on the dome, as its image covers more than a
// plane can hold (past 90° off its axis).
export const LENS_STICKER_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
varying vec3 vDirection;
${STICKER_IMAGE_GLSL}
void main() {
  vec2 uv;
  if (!stickerImage(toSticker * normalize(vDirection), uv)) discard;
  gl_FragColor = texture2D(map, uv) * opacity;
}`;

// A world Sticker with a lens (ADR 0042): the part of a sphere around its lens's center whose directions, in the
// Sticker's own axes, the lens maps into its image (x of halfX, y of halfY each way); the rest is discarded. The
// mesh is a unit sphere scaled to the radius and placed at the center.
export const LENS_PATCH_VERTEX = `
varying vec3 vLocal;
void main() {
  vLocal = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const LENS_PATCH_GLSL = `
${LENS_GLSL}
uniform float curve;
uniform vec2 patchHalf;
varying vec3 vLocal;
bool patchPoint(out vec2 at) {
  vec2 film;
  if (!lensFilm(vLocal, curve, film)) return false;
  at = film / patchHalf;
  return abs(at.x) <= 1.0 && abs(at.y) <= 1.0;
}
`;

export const LENS_PATCH_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
uniform vec4 crop;
${LENS_PATCH_GLSL}
void main() {
  vec2 at;
  if (!patchPoint(at)) discard;
  vec2 uv = at * 0.5 + 0.5;
  vec4 color = texture2D(map, vec2(mix(crop.x, crop.z, uv.x), mix(crop.y, crop.w, uv.y))) * opacity;
  if (color.a <= 0.0) discard;
  gl_FragColor = color;
}`;

// Its pick material: the same part of the sphere, writing what PICK_FRAGMENT writes.
export const LENS_PATCH_PICK_VERTEX = `
varying vec3 vLocal;
varying float vDepth;
void main() {
  vLocal = position;
  vec4 view = modelViewMatrix * vec4(position, 1.0);
  vDepth = -view.z;
  gl_Position = projectionMatrix * view;
}`;

export const LENS_PATCH_PICK_FRAGMENT = PICK_FRAGMENT
  .replace("varying float vDepth;", `varying float vDepth;\n${LENS_PATCH_GLSL}`)
  .replace("void main() {", "void main() {\n  vec2 at;\n  if (!patchPoint(at)) discard;");

// The lens pass (ADR 0042): each output pixel's ray by lens_angle, sampled from the face of the pinhole or the cube
// it goes through (pano_lens.js lensRenderPlan); past 180° off the axis, and where no face reaches, the background.
export const LENS_FACES = 6;
export const LENS_FRAGMENT = `
${Array.from({ length: LENS_FACES }, (_, index) => `uniform sampler2D face${index};`).join("\n")}
uniform mat3 cameraTurn;
uniform mat3 faceTurn[${LENS_FACES}];
uniform vec2 faceTan[${LENS_FACES}];
uniform int faceCount;
uniform float curve;
uniform float focal;
uniform vec2 center;
uniform vec4 window;
uniform float windowHeight;
uniform vec4 background;
${LENS_GLSL}
vec4 sampleFace(int index, vec2 uv) {
${Array.from({ length: LENS_FACES }, (_, index) => `  if (index == ${index}) return texture2D(face${index}, uv);`).join("\n")}
  return vec4(0.0);
}
void main() {
  vec2 local = gl_FragCoord.xy - window.xy;
  vec2 pixel = vec2(window.z + local.x, window.w + windowHeight - local.y);
  vec2 film = vec2(pixel.x - center.x, center.y - pixel.y) / focal;
  float rho = length(film);
  float theta = lensAngle(rho, curve);
  if (theta > 3.141592653589793) {
    gl_FragColor = background;
    return;
  }
  vec3 direction = rho > 0.0 ? vec3(film / rho * sin(theta), -cos(theta)) : vec3(0.0, 0.0, -1.0);
  for (int index = 0; index < ${LENS_FACES}; index++) {
    if (index >= faceCount) break;
    vec3 seen = faceTurn[index] * (cameraTurn * direction);
    if (seen.z >= 0.0) continue;
    vec2 at = seen.xy / -seen.z / faceTan[index];
    if (abs(at.x) > 1.0 || abs(at.y) > 1.0) continue;
    // The faces hold the canvas's values (canvasValueTarget).
    gl_FragColor = sampleFace(index, at * 0.5 + 0.5);
    return;
  }
  gl_FragColor = background;
}`;
