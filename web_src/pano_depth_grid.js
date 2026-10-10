// The depth grid of a DA3_GEOMETRY mono item or of a MOGE_GEOMETRY perspective sequence's (docs/threejs-spark-integration.md
// "DA3_GEOMETRY mono の深度のグリッド", ADR 0039 and 0040; the editor does not tell them apart), in the three.js chunk: one static grid per size, raised from the item's depth texture in the vertex
// shader, so an item is its R32F depth texture and a few uniforms. WebGL2 (gl_VertexID, gl_InstanceID, texelFetch):
// three.js compiles its shaders as GLSL ES 3.0 there, with `varying` and gl_FragColor defined for it.
// The file's form is docs/studio-node.md "DA3_GEOMETRY mono のエディタ用ファイル": no header, float32 little-endian,
// W × H by rows, row 0 the image's top; a pixel of depth 0 is outside `keep`.
import {
  ColorManagement,
  DoubleSide,
  InstancedBufferGeometry,
  Matrix3,
  NoBlending,
  SRGBTransfer,
  ShaderMaterial,
  Vector2,
} from "three";
import { PICK_FRAGMENT } from "./pano_pick.js";

// The corners (0 a, 1 b, 2 c, 3 d) of a quad's 6 vertices: the triangles (a, b, c) and (a, c, d) of the core's
// triangulate_grid_mesh (docs/render-contract.md "mono の残す画素"), a = (x, y), b = (x+1, y), c = (x+1, y+1),
// d = (x, y+1).
export const DEPTH_GRID_CORNERS = Object.freeze([0, 1, 2, 0, 2, 3]);
const CORNER_OFFSETS = [[0, 0], [1, 0], [1, 1], [0, 1]];

// The vertex part the material and its pick material share: depthGridPosition() is the glTF position of this
// vertex (gl_InstanceID the quad, gl_VertexID its corner), and sets `depthGridUv` (the corner's color, (x ÷ (W−1),
// y ÷ (H−1)) with the image's top at 0: the color texture is uploaded without flipY, as the depth texture, so the
// picture's top row is the texture's first whatever the picture is) and `depthGridDrawn` (false when a corner of the
// quad has depth 0 or less: the vertex then goes outside the clip space, as the quad's other 5).
export const DEPTH_GRID_VERTEX = `
uniform highp sampler2D depthMap;
uniform mat3 inverseK;
uniform vec2 gridSize;
varying vec2 depthGridUv;
const int DEPTH_GRID_CORNERS[6] = int[6](${DEPTH_GRID_CORNERS.join(", ")});
const ivec2 DEPTH_GRID_OFFSETS[4] = ivec2[4](ivec2(0, 0), ivec2(1, 0), ivec2(1, 1), ivec2(0, 1));
bool depthGridDrawn;
vec3 depthGridPosition() {
  int width = int(gridSize.x);
  ivec2 a = ivec2(gl_InstanceID % (width - 1), gl_InstanceID / (width - 1));
  float lowest = texelFetch(depthMap, a, 0).r;
  lowest = min(lowest, texelFetch(depthMap, a + ivec2(1, 0), 0).r);
  lowest = min(lowest, texelFetch(depthMap, a + ivec2(1, 1), 0).r);
  lowest = min(lowest, texelFetch(depthMap, a + ivec2(0, 1), 0).r);
  ivec2 corner = a + DEPTH_GRID_OFFSETS[DEPTH_GRID_CORNERS[gl_VertexID]];
  depthGridUv = vec2(float(corner.x) / (gridSize.x - 1.0), float(corner.y) / (gridSize.y - 1.0));
  depthGridDrawn = lowest > 0.0;
  vec3 p = texelFetch(depthMap, corner, 0).r * (inverseK * vec3(vec2(corner), 1.0));
  return vec3(p.x, -p.y, -p.z);
}
// A point outside the clip space, the same for every vertex of a quad that is not drawn.
const vec4 DEPTH_GRID_OUTSIDE = vec4(2.0, 2.0, 2.0, 1.0);
`;

const VERTEX = `${DEPTH_GRID_VERTEX}
void main() {
  vec3 position = depthGridPosition();
  gl_Position = depthGridDrawn ? projectionMatrix * modelViewMatrix * vec4(position, 1.0) : DEPTH_GRID_OUTSIDE;
}`;

// Without light (unlit, as the meta says): the proxy's color in linear space, out through the renderer's output color
// space as MeshBasicMaterial does. A still is an SRGB8_ALPHA8 texture: the GPU decodes it and blends in linear space,
// as the GLBs' sampler and the node do (docs/render-contract.md "テクスチャの標本化"). three uploads a VideoTexture as
// RGBA8 whatever its color space (WebGLTextures.js getInternalFormat, forceLinearTransfer), and the hardware would
// blend its sRGB values; so a playing sRGB VIDEO is sampled here by hand: its 4 nearest texels (clamped to the edge,
// as ClampToEdgeWrapping), each decoded (sRGBTransferEOTF), blended in linear space.
const FRAGMENT = `
uniform sampler2D colorMap;
uniform bool decodeVideoSrgb;
uniform float opacity;
varying vec2 depthGridUv;
vec4 linearColor(vec2 uv) {
  if (!decodeVideoSrgb) return texture(colorMap, uv);
  ivec2 size = textureSize(colorMap, 0);
  ivec2 last = size - 1;
  vec2 p = uv * vec2(size) - 0.5;
  ivec2 i = ivec2(floor(p));
  vec2 f = p - floor(p);
  vec4 a = sRGBTransferEOTF(texelFetch(colorMap, clamp(i, ivec2(0), last), 0));
  vec4 b = sRGBTransferEOTF(texelFetch(colorMap, clamp(i + ivec2(1, 0), ivec2(0), last), 0));
  vec4 c = sRGBTransferEOTF(texelFetch(colorMap, clamp(i + ivec2(0, 1), ivec2(0), last), 0));
  vec4 d = sRGBTransferEOTF(texelFetch(colorMap, clamp(i + ivec2(1, 1), ivec2(0), last), 0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
void main() {
  gl_FragColor = vec4(linearColor(depthGridUv).rgb, opacity);
  #include <colorspace_fragment>
}`;

const PICK_VERTEX_GRID = `${DEPTH_GRID_VERTEX}
varying float vDepth;
void main() {
  vec3 position = depthGridPosition();
  vec4 view = modelViewMatrix * vec4(position, 1.0);
  vDepth = -view.z;
  gl_Position = depthGridDrawn ? projectionMatrix * view : DEPTH_GRID_OUTSIDE;
}`;

// The corner [x, y] of vertex `vertex` (0 to 5, gl_VertexID) of quad `quad` (gl_InstanceID) in a grid `width` pixels
// wide, as the shader picks it.
export function quadCorner(quad, vertex, width) {
  const [dx, dy] = CORNER_OFFSETS[DEPTH_GRID_CORNERS[vertex]];
  return [quad % (width - 1) + dx, Math.floor(quad / (width - 1)) + dy];
}

// Whether quad `quad` of the depth `values` (width pixels wide) draws: all 4 of its corners have depth above 0.
export function quadDrawn(values, width, quad) {
  const [x, y] = quadCorner(quad, 0, width);
  return CORNER_OFFSETS.every(([dx, dy]) => values[(y + dy) * width + x + dx] > 0);
}

// K⁻¹ of an item's K (9 numbers by rows), by rows, in double precision; null when K has no inverse.
export function inverseIntrinsics(k) {
  if (!Array.isArray(k) || k.length !== 9 || !k.every(Number.isFinite)) return null;
  const [a, b, c, d, e, f, g, h, i] = k;
  const A = e * i - f * h;
  const B = -(d * i - f * g);
  const C = d * h - e * g;
  const det = a * A + b * B + c * C;
  if (!det || !Number.isFinite(det)) return null;
  // + 0 turns -0 into 0.
  return [
    A / det, -(b * i - c * h) / det, (b * f - c * e) / det,
    B / det, (a * i - c * g) / det, -(a * f - c * d) / det,
    C / det, -(a * h - b * g) / det, (a * e - b * d) / det,
  ].map((value) => value + 0);
}

// The glTF point of pixel (x, y) at `depth`: depth × K⁻¹ (x, y, 1) as (X, −Y, −Z).
export function depthGridPoint(inverse, x, y, depth) {
  const p = [0, 1, 2].map((row) => depth * (inverse[row * 3] * x + inverse[row * 3 + 1] * y + inverse[row * 3 + 2]));
  return [p[0] + 0, -p[1] + 0, -p[2] + 0];
}

// The depth values of a depth file, checked against the meta's form ({ width, height, depth: { dtype, byte_order,
// bytes } }). Throws the reason when the file is not that form.
export function readDepthGrid(buffer, { width, height, depth }) {
  if (depth?.dtype !== "float32") throw new Error(`The depth file is ${depth?.dtype}, not float32.`);
  if (depth.byte_order !== "little") throw new Error(`The depth file is ${depth.byte_order}-endian, not little-endian.`);
  const bytes = width * height * 4;
  if (depth.bytes !== bytes) throw new Error(`The depth meta says ${depth.bytes} bytes, not ${width} × ${height} × 4.`);
  if (buffer.byteLength !== bytes) throw new Error(`The depth file is ${buffer.byteLength} bytes, not ${bytes}.`);
  const values = new Float32Array(buffer);
  // A big-endian machine would read the little-endian file wrong; every platform the editor runs on is little-endian.
  if (new Uint8Array(new Uint16Array([1]).buffer)[0] !== 1) {
    const view = new DataView(buffer);
    for (let index = 0; index < values.length; index += 1) values[index] = view.getFloat32(index * 4, true);
  }
  return values;
}

// The box of an item: around the points of its pixels with depth above 0 (the node's content box), or null.
export function depthGridBox(values, width, height, inverse) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  let any = false;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const depth = values[y * width + x];
      if (!(depth > 0)) continue;
      any = true;
      const point = depthGridPoint(inverse, x, y, depth);
      for (let axis = 0; axis < 3; axis += 1) {
        if (point[axis] < min[axis]) min[axis] = point[axis];
        if (point[axis] > max[axis]) max[axis] = point[axis];
      }
    }
  }
  return any ? { min, max } : null;
}

// Why a grid of width × height does not load on a GPU whose textures are at most maxTextureSize on a side, or null.
export function depthGridTooLarge(width, height, maxTextureSize) {
  if (!(maxTextureSize > 0) || (width <= maxTextureSize && height <= maxTextureSize)) return null;
  return `The depth of this 3D content is ${width} × ${height}, larger than this GPU's textures (MAX_TEXTURE_SIZE ${maxTextureSize}).`;
}

// The one grid of each size, shared by its items: no vertex data, (W − 1) × (H − 1) instances of 6 vertices. It has
// no bounds (the shader makes the positions), so its meshes are never frustum culled.
const geometries = new Map();
export function depthGridGeometry(width, height) {
  const key = `${width}x${height}`;
  let geometry = geometries.get(key);
  if (!geometry) {
    geometry = new InstancedBufferGeometry();
    geometry.instanceCount = (width - 1) * (height - 1);
    geometry.setDrawRange(0, DEPTH_GRID_CORNERS.length);
    geometries.set(key, geometry);
  }
  return geometry;
}

function rowsMatrix(rows) {
  return new Matrix3().set(...rows);
}

// The material of an item: its depth texture (R32F), K⁻¹ (by rows) and size; `colorMap` is set to its proxy's
// picture when it draws. Both sides, without light; its opacity is the material's.
export function createDepthGridMaterial({ depthMap, inverseK, width, height }) {
  const material = new ShaderMaterial({
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
    uniforms: {
      depthMap: { value: depthMap },
      inverseK: { value: rowsMatrix(inverseK) },
      gridSize: { value: new Vector2(width, height) },
      colorMap: { value: null },
    },
    side: DoubleSide,
  });
  material.uniforms.opacity = { get value() { return material.opacity; } };
  // three's rule for decoding in the shader (WebGLPrograms.js decodeVideoTexture), read from the texture it draws.
  material.uniforms.decodeVideoSrgb = {
    get value() {
      const texture = material.uniforms.colorMap.value;
      return texture?.isVideoTexture === true && ColorManagement.getTransfer(texture.colorSpace) === SRGBTransfer;
    },
  };
  return material;
}

// The pick material of an item (pano_three_view.js pick): the same vertex part and uniforms as its material, the
// pick fragment of pano_pick.js, and the pick pass's mode and far (`shared`, the same for every pick material).
export function createDepthGridPickMaterial(material, shared) {
  return new ShaderMaterial({
    vertexShader: PICK_VERTEX_GRID,
    fragmentShader: PICK_FRAGMENT,
    uniforms: {
      depthMap: material.uniforms.depthMap,
      inverseK: material.uniforms.inverseK,
      gridSize: material.uniforms.gridSize,
      pickId: { value: 1 },
      pickMode: shared.pickMode,
      far: shared.far,
    },
    side: DoubleSide,
    blending: NoBlending,
  });
}
