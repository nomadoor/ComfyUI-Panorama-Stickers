// three.js view of the editor. Vite emits this module, three.js (with its GLTFLoader) and the `scene`
// item loading as a chunk in web/.lazy/, which ComfyUI does not load as an extension, and
// pano_editor_view.js imports it when an editor opens. Spark is a chunk of its own, imported when a
// SPLAT first loads. Keep it free of modules the eager bundle also uses, so the chunk holds only these
// libraries and these files instead of importing back from panorama_suite.js; pano_editor_view.js and
// pano_space.js do the math.
//
// Every render sets the scene up from the given layers. Only GPU resources (meshes, materials, textures,
// the loaded `scene` items and the World's objects) are reused between renders; nothing here is saved.
import {
  AmbientLight,
  AxesHelper,
  BackSide,
  BufferGeometry,
  ClampToEdgeWrapping,
  Color,
  CustomBlending,
  DirectionalLight,
  DoubleSide,
  Float32BufferAttribute,
  FloatType,
  GridHelper,
  Group,
  LineBasicMaterial,
  LineSegments,
  LinearFilter,
  Matrix3,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  NoBlending,
  Object3D,
  OneFactor,
  OneMinusSrcAlphaFactor,
  PerspectiveCamera,
  NearestFilter,
  PlaneGeometry,
  Quaternion,
  RGBAFormat,
  RepeatWrapping,
  SRGBColorSpace,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Texture,
  UnsignedByteType,
  Vector2,
  Vector3,
  Vector4,
  VideoTexture,
  WebGLRenderTarget,
  WebGLRenderer,
} from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import { PICK_FRAGMENT, PICK_VERTEX, nearestHit, pickCacheKey, pickRay, pickWindow, pointAt, rayBoxDepth, readPickBytes, readPickFloat } from "./pano_pick.js";
import { createSceneItems } from "./pano_scene_items.js";
import { disposeObject, disposeSceneItem, loadSceneItem, loadSpark } from "./pano_scene_loaders.js";
import { createSparkViews } from "./pano_spark_views.js";
import { createDepthGridPickMaterial } from "./pano_depth_grid.js";
import { LENS_GLSL } from "./pano_lens_glsl.js";

// The lights of the World pass (docs/render-contract.md "既定の照明", which owns the values; Python's
// mesh_render.py has the same, both checked against tests/fixtures/default_lighting.json). No shadows.
const light = (type, intensity, position = null) => Object.freeze({
  type,
  color: Object.freeze([1, 1, 1]),
  intensity,
  ...(position ? { position: Object.freeze(position) } : {}),
});
export const DEFAULT_LIGHTS = Object.freeze([
  light("ambient", 1.5),
  light("directional", 2.4, [0, 10, 10]),
  light("directional", 1.5, [0, 10, -10]),
  light("directional", 0.9, [-10, 0, 0]),
  light("directional", 0.9, [10, 0, 0]),
  light("directional", 0.6, [0, -10, 0]),
]);

// The default lights in a group the World holds as it is, apart from the `scene` and Sticker transforms: each
// directional light shines from its position toward the World origin, where its target is. They fall only on
// the MeshStandardMaterial of a lit GLB; MeshBasicMaterial and Spark do not see them.
export function createDefaultLights(lights = DEFAULT_LIGHTS) {
  const group = new Group();
  for (const { type, color, intensity, position } of lights) {
    const rgb = new Color(...color);
    if (type === "ambient") {
      group.add(new AmbientLight(rgb, intensity));
      continue;
    }
    const directional = new DirectionalLight(rgb, intensity);
    directional.position.set(...position);
    directional.target.position.set(0, 0, 0);
    group.add(directional, directional.target);
  }
  return group;
}

// What the 3D Sticker queue (createSceneItems requestMany) is asked for in one render of a space input: `drawn`,
// the requests of the port Sticker's item and the 3D file Stickers' items shown at this frame, and `inputs`, those
// with a keep-only input of every key whose item stays loaded (stickerUrls, fileStickerKeys), so a 3D Sticker hidden
// or outside its Clip range keeps its item and shows it again without loading.
export function stickerItemInputs(space) {
  const drawn = [...(space.sticker ? [space.sticker] : []), ...(space.fileStickers ?? [])];
  return { drawn, inputs: [...drawn, { urls: [...(space.stickerUrls ?? []), ...(space.fileStickerKeys ?? [])] }] };
}

const DOME_RADIUS = 100;
const STICKER_DISTANCE = 50;
const ORIGIN_COLOR = 0xffdd57;

// The Sky's and the world Sticker planes' shaders write their images' (sRGB) values as they are, which the canvas
// shows as they are. Into a lens face (drawLens), a target three keeps in sRGB like any color-managed output, they
// write linear light as three's own materials do there: `linearOutput` (shared by all of them) is on only then.
const linearOutput = { value: false };
const LINEAR_OUTPUT_GLSL = `
uniform bool linearOutput;
vec4 outputColor(vec4 color) {
  if (!linearOutput || color.a <= 0.0) return color;
  return vec4(sRGBTransferEOTF(vec4(color.rgb / color.a, 1.0)).rgb * color.a, color.a);
}
`;

// The ERP is laid out in the panorama convention (forward +Z); World is glTF (forward -Z).
const ERP_VERTEX = `
varying vec3 vDirection;
void main() {
  vDirection = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const ERP_FRAGMENT = `
${LINEAR_OUTPUT_GLSL}
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
  gl_FragColor = outputColor(texture2D(map, uv) * opacity);
}`;

const STICKER_VERTEX = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const STICKER_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
varying vec2 vUv;
${LINEAR_OUTPUT_GLSL}
void main() {
  gl_FragColor = outputColor(texture2D(map, vUv) * opacity);
}`;

// A world Sticker's plane shows its crop (x0, v of y1, x1, v of y0) of the image; v runs up the image.
const WORLD_STICKER_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
uniform vec4 crop;
varying vec2 vUv;
${LINEAR_OUTPUT_GLSL}
void main() {
  vec4 color = texture2D(map, vec2(mix(crop.x, crop.z, vUv.x), mix(crop.y, crop.w, vUv.y))) * opacity;
  if (color.a <= 0.0) discard;
  gl_FragColor = outputColor(color);
}`;

// The Unwrap view draws every layer on a full-view quad in the ERP layout: longitude runs across
// the view and latitude down it, with the ERP's own pixels for the ERP layers.
const UNWRAP_VERTEX = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const UNWRAP_ERP_FRAGMENT = `
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

const UNWRAP_STICKER_FRAGMENT = `
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
const LENS_STICKER_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
varying vec3 vDirection;
${STICKER_IMAGE_GLSL}
${LINEAR_OUTPUT_GLSL}
void main() {
  vec2 uv;
  if (!stickerImage(toSticker * normalize(vDirection), uv)) discard;
  gl_FragColor = outputColor(texture2D(map, uv) * opacity);
}`;

// A world Sticker with a lens (ADR 0042): the part of a sphere around its lens's center whose directions, in the
// Sticker's own axes, the lens maps into its image (x of halfX, y of halfY each way); the rest is discarded. The
// mesh is a unit sphere scaled to the radius and placed at the center.
const LENS_PATCH_VERTEX = `
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

const LENS_PATCH_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
uniform vec4 crop;
${LENS_PATCH_GLSL}
${LINEAR_OUTPUT_GLSL}
void main() {
  vec2 at;
  if (!patchPoint(at)) discard;
  vec2 uv = at * 0.5 + 0.5;
  vec4 color = texture2D(map, vec2(mix(crop.x, crop.z, uv.x), mix(crop.y, crop.w, uv.y))) * opacity;
  if (color.a <= 0.0) discard;
  gl_FragColor = outputColor(color);
}`;

// Its pick material: the same part of the sphere, writing what PICK_FRAGMENT writes.
const LENS_PATCH_PICK_VERTEX = `
varying vec3 vLocal;
varying float vDepth;
void main() {
  vLocal = position;
  vec4 view = modelViewMatrix * vec4(position, 1.0);
  vDepth = -view.z;
  gl_Position = projectionMatrix * view;
}`;

const LENS_PATCH_PICK_FRAGMENT = PICK_FRAGMENT
  .replace("varying float vDepth;", `varying float vDepth;\n${LENS_PATCH_GLSL}`)
  .replace("void main() {", "void main() {\n  vec2 at;\n  if (!patchPoint(at)) discard;");

export function applyViewportCamera(camera, setup) {
  const { quaternion } = setup;
  camera.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  camera.fov = setup.fovY_deg;
  camera.aspect = setup.aspect;
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
}

// A sky Sticker is its gnomonic image plane at STICKER_DISTANCE along the Sticker's forward axis;
// seen from the camera at the center it covers the same rays as the previous per-pixel shader.
export function placeSticker(mesh, layer) {
  const { rect, quaternion } = layer;
  mesh.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  mesh.position.set((rect.x0 + rect.x1) * 0.5, (rect.y0 + rect.y1) * 0.5, -1)
    .multiplyScalar(STICKER_DISTANCE)
    .applyQuaternion(mesh.quaternion);
  mesh.scale.set((rect.x1 - rect.x0) * STICKER_DISTANCE, (rect.y1 - rect.y0) * STICKER_DISTANCE, 1);
}

// The Unwrap sticker shader's uniforms: World to the Sticker's frame, and its rect as (x0, y0, x1, y1).
export function unwrapStickerUniforms(layer) {
  const { quaternion, rect } = layer;
  const rotation = new Matrix4().makeRotationFromQuaternion(new Quaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w));
  return {
    toSticker: new Matrix3().setFromMatrix4(rotation).transpose(),
    rect: new Vector4(rect.x0, rect.y0, rect.x1, rect.y1),
    curve: layer.curve ?? 1,
  };
}

function mediaSize(media) {
  return {
    width: Number(media.videoWidth || media.naturalWidth || media.width || 0),
    height: Number(media.videoHeight || media.naturalHeight || media.height || 0),
  };
}

// Textures are premultiplied on upload and sampled without mipmaps, like the previous WebGL
// renderer, so the blend below composites them the same way. A plain Texture sizes its storage from
// width/height, which a <video> leaves at 0, so a VIDEO takes a VideoTexture. A VideoTexture uploads
// each frame the video presents by itself, so a layer's revision does not decide when it updates.
function createTexture(media, flipY) {
  const texture = media instanceof HTMLVideoElement ? new VideoTexture(media) : new Texture(media);
  texture.premultiplyAlpha = true;
  texture.generateMipmaps = false;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapT = ClampToEdgeWrapping;
  texture.flipY = flipY;
  texture.needsUpdate = true;
  return texture;
}

// The texture of a depth grid's colors (the proxy's picture, pano_depth_color.js): sRGB, linear, clamped, without
// mips, as the GLBs' sampler (docs/render-contract.md "テクスチャの標本化"). Never flipped (the shader reads the
// picture's top row at v 0): three.js cannot flip an ImageBitmap, so a flip would turn a bitmap's colors upside down
// against a VIDEO's or a canvas's.
function depthColorTexture(media) {
  const texture = media instanceof HTMLVideoElement ? new VideoTexture(media) : new Texture(media);
  texture.colorSpace = SRGBColorSpace;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.generateMipmaps = false;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.flipY = false;
  texture.needsUpdate = true;
  return texture;
}

// The color textures of the depth grids: one per input (`slot`: the `scene`, a 3D Sticker, an upstream layer's),
// which every item of that input draws with, made by make(media). texture(slot, { media, revision }) gives the
// slot's texture for its picture: uploaded again for a new revision, made anew (the old one freed) for another
// picture (the playing VIDEO in place of the still) or another size. retain(slots) frees the textures of the other
// slots. They are not counted against SCENE_ITEM_BUDGET: one picture per input.
export function createDepthColorTextures(make) {
  const slots = new Map();
  return {
    texture(slot, { media, revision }) {
      let entry = slots.get(slot);
      const size = mediaSize(media);
      if (entry && (entry.media !== media || entry.width !== size.width || entry.height !== size.height)) {
        entry.texture.dispose();
        entry = null;
      }
      if (!entry) {
        entry = { media, revision, texture: make(media), ...size };
        slots.set(slot, entry);
      } else if (entry.revision !== revision) {
        entry.revision = revision;
        entry.texture.needsUpdate = true;
      }
      return entry.texture;
    },
    retain(keep) {
      for (const [slot, entry] of [...slots]) {
        if (keep.includes(slot)) continue;
        entry.texture.dispose();
        slots.delete(slot);
      }
    },
    get size() {
      return slots.size;
    },
    dispose() {
      this.retain([]);
    },
  };
}

// A <video> has a picture to upload from HAVE_CURRENT_DATA on; before that (loading, seeking) its
// upload is empty.
export function hasContent(media) {
  const size = mediaSize(media);
  if (!(size.width > 0 && size.height > 0)) return false;
  return !(media instanceof HTMLVideoElement) || media.readyState >= HTMLVideoElement.HAVE_CURRENT_DATA;
}

// The layer textures of one view, which its owners share: one texture per media, flipY and wrapS however
// many owners draw it, so the editor's stage and its camera preview upload one 1080p background, and a
// playing VIDEO has one VideoTexture. They are one WebGL context's, so any owner can draw with them.
// `source` names what the media shows (a VIDEO's URL for the VIDEO, its stills and its first frame; the
// media itself by default). A layer whose media changes within its source keeps the texture of its owner's
// draw before until the new media has a picture, so a VIDEO that is loading or seeking never shows an empty
// upload in place of the frame before. Another source never shows the picture of the one before: a media
// that shows another source, or changes size, gets a new texture, and the one before stays for the owners
// that drew it until they move on. Each draw marks the textures its owner uses; a texture no owner uses any
// more is disposed.
//
// draw(owner) starts a draw of owner: { drawable(layer), texture(layer, wrapS, flipY), end() }. A 360 ERP
// wraps around horizontally; a 180 ERP and a Sticker clamp at their edges. release(owner) drops the marks
// of an owner that stops drawing.
export function createLayerTextures() {
  // media -> "flipY:wrapS" -> the current { texture, media, key, source, revision, width, height, users }
  const entries = new Map();
  // Every entry whose texture is held: the current ones and those replaced while an owner still draws them.
  const held = new Set();
  // owner -> layer id -> the entry its last draw used
  const shown = new Map();

  function forget(entry) {
    entry.texture.dispose();
    held.delete(entry);
    const byKey = entries.get(entry.media);
    if (byKey?.get(entry.key) !== entry) return;
    byKey.delete(entry.key);
    if (!byKey.size) entries.delete(entry.media);
  }

  function unuse(entry, owner) {
    entry.users.delete(owner);
    if (!entry.users.size) forget(entry);
  }

  function texture(previous, used, { id, media, revision, source: named }, wrapS, flipY) {
    const source = named ?? media;
    const size = mediaSize(media);
    const before = previous.get(id);
    if (before?.source === source && before.media !== media && !hasContent(media)) {
      used.set(id, before);
      return before.texture;
    }
    let byKey = entries.get(media);
    if (!byKey) entries.set(media, byKey = new Map());
    const key = `${flipY}:${wrapS}`;
    let entry = byKey.get(key);
    if (entry && (entry.source !== source || entry.width !== size.width || entry.height !== size.height)) {
      byKey.delete(key);
      if (!entry.users.size) forget(entry);
      entry = null;
    }
    if (!entry) {
      const created = createTexture(media, flipY);
      created.wrapS = wrapS;
      entry = { texture: created, media, key, source, revision, ...size, users: new Set() };
      byKey.set(key, entry);
      held.add(entry);
    } else if (entry.revision !== revision) {
      entry.revision = revision;
      entry.texture.needsUpdate = true;
    }
    used.set(id, entry);
    return entry.texture;
  }

  return {
    draw(owner) {
      const previous = shown.get(owner) ?? new Map();
      const used = new Map();
      return {
        // Whether a layer draws: once its media has a picture, or with the texture its source had in the
        // owner's draw before while the new media has none.
        drawable: ({ id, media, source }) => hasContent(media) || previous.get(id)?.source === (source ?? media),
        texture: (layer, wrapS, flipY) => texture(previous, used, layer, wrapS, flipY),
        end() {
          const kept = new Set(used.values());
          kept.forEach((entry) => entry.users.add(owner));
          previous.forEach((entry) => {
            if (!kept.has(entry) && entry.users.has(owner)) unuse(entry, owner);
          });
          shown.set(owner, used);
        },
      };
    },
    release(owner) {
      shown.get(owner)?.forEach((entry) => {
        if (entry.users.has(owner)) unuse(entry, owner);
      });
      shown.delete(owner);
    },
    // How many textures it holds (the diagnostics' layerTextures).
    get size() {
      return held.size;
    },
    dispose() {
      held.forEach((entry) => entry.texture.dispose());
      held.clear();
      entries.clear();
      shown.clear();
    },
  };
}

// The lens pass (ADR 0042): each output pixel's ray by lens_angle, sampled from the face of the pinhole or the cube
// it goes through (pano_lens.js lensRenderPlan); past 180° off the axis, and where no face reaches, the background.
const LENS_FACES = 6;
const LENS_FRAGMENT = `
${Array.from({ length: LENS_FACES }, (_, index) => `uniform sampler2D face${index};`).join("\n")}
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
    vec3 seen = faceTurn[index] * direction;
    if (seen.z >= 0.0) continue;
    vec2 at = seen.xy / -seen.z / faceTan[index];
    if (abs(at.x) > 1.0 || abs(at.y) > 1.0) continue;
    // The faces hold linear light (three draws into an sRGB target so); the canvas takes sRGB values.
    vec4 color = sampleFace(index, at * 0.5 + 0.5);
    gl_FragColor = color.a > 0.0 ? vec4(sRGBTransferOETF(vec4(color.rgb / color.a, 1.0)).rgb * color.a, color.a) : vec4(0.0);
    return;
  }
  gl_FragColor = background;
}`;

function createMaterial(vertexShader, fragmentShader, uniforms, blending = CustomBlending) {
  return new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: { map: { value: null }, opacity: { value: 1 }, linearOutput, ...uniforms },
    depthTest: false,
    depthWrite: false,
    transparent: true,
    blending,
    blendSrc: OneFactor,
    blendDst: OneMinusSrcAlphaFactor,
    blendSrcAlpha: OneFactor,
    blendDstAlpha: OneMinusSrcAlphaFactor,
  });
}

function createErpMesh(geometry, blending) {
  const material = createMaterial(ERP_VERTEX, ERP_FRAGMENT, { halfCoverage: { value: false } }, blending);
  material.side = BackSide;
  return new Mesh(geometry, material);
}

function createQuad(geometry, fragmentShader, uniforms, blending = CustomBlending) {
  const mesh = new Mesh(geometry, createMaterial(UNWRAP_VERTEX, fragmentShader, uniforms, blending));
  mesh.frustumCulled = false;
  return mesh;
}

// Line segments [[a, b], ...] in one color.
function createLines({ segments, color }) {
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(segments.flat(2), 3));
  return new LineSegments(geometry, new LineBasicMaterial({ color }));
}

// The camera of setup, drawing the part `offset` of its view (visibleWindow() with the whole view's size as
// fullWidth and fullHeight), or all of it.
function setView(target, setup, offset = null) {
  if (offset) target.setViewOffset(offset.fullWidth, offset.fullHeight, offset.offsetX, offset.offsetY, offset.width, offset.height);
  else target.clearViewOffset();
  applyViewportCamera(target, setup);
}

function setCamera(target, setup, offset = null) {
  setView(target, setup, offset);
  target.position.set(...setup.position);
  target.near = setup.near;
  target.far = setup.far;
  target.updateProjectionMatrix();
  target.updateMatrixWorld();
}

// width x height in device pixels, kept to what the GPU can draw to (maxSide, the smaller of
// MAX_RENDERBUFFER_SIZE and MAX_TEXTURE_SIZE): a larger size is scaled down evenly. Nothing else limits it.
export function fitRenderSize(width, height, maxSide) {
  const scale = Math.min(1, maxSide / Math.max(width, height, 1));
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

// Where a view drawn into rect ({ x, y, w, h } in canvas pixels from the top left, which may reach past
// the canvas) shows on a canvasWidth x canvasHeight canvas: { x, y, width, height } of the canvas in
// whole pixels, and offsetX, offsetY of that part in the whole view (three.js setViewOffset), or null when
// none of it shows. Only the part on the canvas is drawn, at the canvas's own pixels.
export function visibleWindow(rect, canvasWidth, canvasHeight) {
  const x0 = Math.max(0, Math.round(rect.x));
  const y0 = Math.max(0, Math.round(rect.y));
  const x1 = Math.min(canvasWidth, Math.round(rect.x + rect.w));
  const y1 = Math.min(canvasHeight, Math.round(rect.y + rect.h));
  if (x1 <= x0 || y1 <= y0) return null;
  return { x: x0, y: y0, width: x1 - x0, height: y1 - y0, offsetX: x0 - rect.x, offsetY: y0 - rect.y };
}

// (x, y) of a width x height view as three.js normalized device coordinates.
function devicePoint(x, y, width, height) {
  return new Vector2(x / width * 2 - 1, 1 - y / height * 2);
}

// The pick of the World content (pick() below) draws the pixel under the pointer with only the pickable
// objects of `world`: entries are { object, stickerId } for its children that are hit on their
// triangles, and entry i draws its meshes in materialOf(i). The other children of `world` (the guides,
// the lines, the gizmo, Spark's renderer) and the lines or points inside an entry are hidden meanwhile.
// Runs draw() and puts every object and material back after it, also when it throws (a lost WebGL
// context, a target the GPU will not draw to), so the next render draws the World as it is.
export function pickPass(world, entries, materialOf, draw) {
  const roots = new Set(entries.map((entry) => entry.object));
  const hidden = world.children.filter((child) => child.visible && !roots.has(child));
  const swapped = [];
  entries.forEach((entry, index) => {
    entry.object.traverse((object) => {
      if (object.isMesh) {
        swapped.push([object, object.material]);
        // A mesh may have a pick material of its own (a depth grid, which makes its positions in its shader).
        object.material = materialOf(index, object);
      } else if ((object.isLine || object.isPoints || object.isSprite) && object.visible) {
        hidden.push(object);
      }
    });
  });
  hidden.forEach((object) => { object.visible = false; });
  try {
    return draw();
  } finally {
    hidden.forEach((object) => { object.visible = true; });
    swapped.forEach(([object, material]) => { object.material = material; });
  }
}

// Puts children in parent in this order, unless it holds them so already. Returns whether it changed.
export function setChildren(parent, children) {
  if (parent.children.length === children.length && children.every((child, index) => parent.children[index] === child)) return false;
  parent.clear();
  if (children.length) parent.add(...children);
  return true;
}

// Whether a and b hold the same numbers, strings and booleans in the same arrays and objects.
export function sameValue(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((key) => sameValue(a[key], b[key]));
}

// The line objects of `sets` ([{ segments, color }], createLines) kept in cache ({ sets, lines }): made
// again only when the sets change, and the ones before are freed then.
export function cachedLines(cache, sets) {
  if (sameValue(cache.sets, sets)) return cache.lines;
  cache.lines.forEach((line) => disposeObject(line));
  cache.sets = sets;
  cache.lines = sets.map(createLines);
  return cache.lines;
}

// The gizmo of the selected world Sticker (#72): three.js TransformControls seen from camera, on a
// stand-in object. The editor feeds it the pointer and writes what it moved back to the state, which the
// next render draws. It is not hooked to DOM events.
export function createGizmo(camera) {
  const controls = new TransformControls(camera);
  const target = new Object3D();
  controls.attach(target);
  let shown = false;
  return {
    // Shows it at { mode ("translate", "rotate" or "scale"), transform ({ position, quaternion, scale }, as
    // pano_space.js sceneTransform() gives it) }, and returns the objects to add to the World. It draws
    // over the World (its materials do not test depth). While a handle is dragged the stand-in keeps
    // where the drag took it, so it follows the pointer even when the Sticker's value is taken at another
    // frame.
    show({ mode, transform }) {
      shown = true;
      if (!controls.dragging) {
        controls.mode = mode;
        target.position.set(...transform.position);
        target.quaternion.set(transform.quaternion.x, transform.quaternion.y, transform.quaternion.z, transform.quaternion.w);
        target.scale.setScalar(transform.scale);
      }
      return [target, controls.getHelper()];
    },
    // Not shown in this frame: a drag in progress ends, so the gizmo can be grabbed when it shows again.
    hide() {
      shown = false;
      if (controls.dragging) controls.pointerUp(null);
    },
    // The pointer at (x, y) in normalized device coordinates, with the camera where the frame was drawn
    // from. phase "hover" finds the handle under it and returns its axis (null over none), "down" grabs
    // that handle and returns whether it did, "move" drags it and returns the stand-in's transform
    // ({ position, quaternion, scale: [x, y, z] }) or null when nothing is grabbed, and "up" lets go,
    // shown or not. While it is not shown the other phases return null.
    pointer(phase, x, y) {
      if (phase === "up") {
        controls.pointerUp({ x, y, button: 0 });
        return null;
      }
      if (!shown) return null;
      controls.getHelper().updateMatrixWorld(true);
      if (phase === "hover") {
        controls.pointerHover({ x, y, button: -1 });
        return controls.axis;
      }
      if (phase === "down") {
        controls.pointerDown({ x, y, button: 0 });
        return controls.dragging;
      }
      if (!controls.dragging) return null;
      controls.pointerMove({ x, y, button: -1 });
      return {
        position: target.position.toArray(),
        quaternion: { x: target.quaternion.x, y: target.quaternion.y, z: target.quaternion.z, w: target.quaternion.w },
        scale: target.scale.toArray(),
      };
    },
    // TransformControls.dispose() would unhook pointer listeners it never had (no DOM element here).
    dispose() {
      controls.getHelper().dispose();
    },
  };
}

// onUpdate runs when something every view draws changes by itself: a `scene` item finished loading, or Spark
// loaded. onSplats(owner) runs when the Spark renderer of owner's view (pano_spark_views.js) has new splats or
// a new order to draw: only that view draws again. createCanvas makes the view's canvas
// (pano_diagnostics.js createPanoCanvas; the chunk does not import from the eager bundle).
// Loads of `scene` items running at once; scrubbing a MoGe VIDEO queues the rest.
const SCENE_LOADS = 2;

export function createThreeView({ onUpdate = () => {}, onSplats = () => {}, createCanvas }) {
  const canvas = createCanvas();
  // The World is depth tested, so the canvas has a depth buffer; the Sky draws without it.
  // three leaves the context's unpack state at its last texture upload (premultiplied Sky layers), and Spark
  // later uploads its sort order (an RGBA32UI texture from a Uint32Array) with raw texSubImage2D outside any
  // render, resetting only UNPACK_FLIP_Y. Chrome crashes the tab (STATUS_BREAKPOINT) on an integer upload
  // with UNPACK_PREMULTIPLY_ALPHA set, so each draw leaves both unpack flags off, through three's state so
  // its cache stays true.
  function settleUnpack() {
    const gl = renderer.getContext();
    renderer.state.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    renderer.state.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  }

  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: true,
    stencil: false,
  });
  renderer.setClearColor(0x000000, 0);
  // The largest side the GPU draws to: the canvas and every texture stay within it.
  const gl = renderer.getContext();
  const maxSide = Math.min(renderer.capabilities.maxTextureSize, gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
  const camera = new PerspectiveCamera(60, 1, 0.1, 100000);
  const scene = new Scene();
  // The World draws over the Sky in a second pass, from the view's position.
  const worldCamera = new PerspectiveCamera();
  const world = new Scene();
  const worldStickers = [];
  const createWorldSticker = () => {
    const material = createMaterial(STICKER_VERTEX, WORLD_STICKER_FRAGMENT, { crop: { value: new Vector4() } });
    material.side = DoubleSide;
    material.depthTest = true;
    material.depthWrite = true;
    return new Mesh(planeGeometry, material);
  };
  let guides = null;
  // The default lights, always in the World (they change nothing that is not lit).
  const lights = createDefaultLights();
  const lines = { sets: null, lines: [] };
  // The `scene` and 3D Sticker items' groups (by item object), kept while the item is drawn.
  const contentGroups = new WeakMap();
  // The World content the last space render drew, which pick() hits, not the guides: pickable are
  // pickPass() entries of what is hit on its triangles, pickBoxes the SPLATs, hit on their boxes
  // ({ object, box, stickerId }). contentParts are what they are and where, and contentRevision counts
  // their changes.
  let pickable = [];
  let pickBoxes = [];
  let contentParts = [];
  let contentRevision = 0;
  // The last pick ({ key, hit }, pickCacheKey()) and what it draws with: a 1 x 1 target (a float one
  // where the GPU can draw to it), its camera and the pick materials by entry.
  let lastPick = { key: null, hit: null };
  let pickTarget = null;
  // After a float target failed picks use RGBA8; after that failed too only the SPLAT boxes are picked.
  let pickFloat = true;
  let pickFailed = false;
  const pickCamera = new PerspectiveCamera();
  const pickMaterials = [];
  // Spark's module once it has loaded (when a SPLAT first shows), and per view that draws SPLATs a renderer
  // and SplatMeshes that see only that view's camera.
  let Spark = null;
  const sparkViews = createSparkViews({
    // The editor does not page or LoD its SPLATs, so Spark's LoD worker is not started.
    create: (onDirty) => new Spark.SparkRenderer({ renderer, onDirty, enableLod: false }),
    // A SplatMesh made on loaded PackedSplats sets their encoding (to the default without one given); the
    // loaded encoding is put back.
    cloneSplat: (loaded) => {
      const { packedSplats } = loaded;
      const encoding = packedSplats.splatEncoding;
      const mesh = new Spark.SplatMesh({ packedSplats, raycastable: false });
      packedSplats.splatEncoding = encoding;
      return mesh;
    },
    // A lens face's renderer draws for the view it is a face of.
    onDirty: (owner) => onSplats(lensFaceBase.has(owner) ? lensFaceBase.get(owner).base : owner),
  });

  // A loaded SPLAT that goes takes the views' SplatMeshes of it along.
  const disposeItem = (item) => {
    if (item.kind === "splat" && item.object) sparkViews.forget(item.object);
    disposeSceneItem(item);
  };
  // The colors of the depth grids: one texture per input, which its items draw with.
  const depthColors = createDepthColorTextures(depthColorTexture);
  // The GPU's largest texture side: a depth grid larger than it does not load.
  const loadItem = (kind, url, signal, options) => loadSceneItem(kind, url, signal, { ...options, maxTextureSize: renderer.capabilities.maxTextureSize });
  let closed = false;
  // The selected world Sticker's gizmo (createGizmo), made the first time one shows.
  let gizmo = null;
  const sceneItems = createSceneItems({
    load: loadItem,
    dispose: disposeItem,
    onUpdate,
    concurrency: SCENE_LOADS,
  });
  // The items of the `sticker` input's 3D media (#63), loaded the same way. An item loads here even when
  // `scene` has the same file, since an object has one parent.
  const stickerItems = createSceneItems({
    load: loadItem,
    dispose: disposeItem,
    onUpdate,
    concurrency: SCENE_LOADS,
  });
  // The 3D items of the upstream Scene's layers (#90), by slot (a layer and its `scene` or 3D Sticker), loaded
  // the same way; a slot no render asks for any more is closed.
  const upstreamItems = new Map();
  const upstreamItemsOf = (slot) => {
    let items = upstreamItems.get(slot);
    if (!items) {
      items = createSceneItems({ load: loadItem, dispose: disposeItem, onUpdate, concurrency: SCENE_LOADS });
      upstreamItems.set(slot, items);
    }
    return items;
  };
  const domeGeometry = new SphereGeometry(DOME_RADIUS, 64, 32);
  const planeGeometry = new PlaneGeometry(1, 1);
  const quadGeometry = new PlaneGeometry(2, 2);
  // The background replaces what is below it like the previous renderer; the other layers blend.
  // Each projection keeps its meshes: the background, and pools of ERP and Sticker meshes.
  const panorama = {
    background: createErpMesh(domeGeometry, NoBlending),
    erp: [],
    sticker: [],
    createErp: () => createErpMesh(domeGeometry, CustomBlending),
    createSticker: () => new Mesh(planeGeometry, createMaterial(STICKER_VERTEX, STICKER_FRAGMENT, {})),
    // A sky Sticker of a lens curve other than 1, on the dome (ADR 0042).
    lensSticker: [],
    createLensSticker: () => {
      const material = createMaterial(ERP_VERTEX, LENS_STICKER_FRAGMENT, { toSticker: { value: null }, rect: { value: null }, curve: { value: 1 } });
      material.side = BackSide;
      return new Mesh(domeGeometry, material);
    },
    placeLensSticker(mesh, layer) {
      Object.entries(unwrapStickerUniforms(layer)).forEach(([name, value]) => { mesh.material.uniforms[name].value = value; });
    },
    // An ERP may come turned (Panorama Studio's run output, shot by a Camera): its dome takes the rotation.
    placeErp(mesh, halfCoverage, quaternion) {
      mesh.material.uniforms.halfCoverage.value = halfCoverage;
      mesh.quaternion.set(quaternion?.x ?? 0, quaternion?.y ?? 0, quaternion?.z ?? 0, quaternion?.w ?? 1);
    },
    placeSticker,
  };
  // The Unwrap view lays a 180 ERP over the whole width like the previous renderer.
  const unwrap = {
    background: createQuad(quadGeometry, UNWRAP_ERP_FRAGMENT, {}, NoBlending),
    erp: [],
    sticker: [],
    createErp: () => createQuad(quadGeometry, UNWRAP_ERP_FRAGMENT, {}),
    createSticker: () => createQuad(quadGeometry, UNWRAP_STICKER_FRAGMENT, { toSticker: { value: null }, rect: { value: null }, curve: { value: 1 } }),
    placeErp() {},
    placeSticker(mesh, layer) {
      Object.entries(unwrapStickerUniforms(layer)).forEach(([name, value]) => { mesh.material.uniforms[name].value = value; });
    },
  };
  // Per owner: the size it last rendered at. Surfaces that share this view (the on-node Previews, the
  // Cutout camera preview) pass their own owner, so the canvas keeps the largest size in use instead of
  // resizing per owner. The layer textures are the view's (createLayerTextures): rendering one owner does
  // not drop the textures of the others, and owners that show the same media share its texture.
  const owners = new Map();
  const layerTextures = createLayerTextures();
  renderer.setScissorTest(true);

  function pooled(meshes, index, create) {
    if (!meshes[index]) meshes[index] = create();
    return meshes[index];
  }

  function addErp(owned, projection, mesh, layer, halfCoverage) {
    mesh.material.uniforms.map.value = owned.texture(layer, halfCoverage ? ClampToEdgeWrapping : RepeatWrapping, false);
    mesh.material.uniforms.opacity.value = layer.opacity;
    projection.placeErp(mesh, halfCoverage, layer.quaternion);
    scene.add(mesh);
    return mesh;
  }

  function addSticker(owned, projection, mesh, layer) {
    mesh.material.uniforms.map.value = owned.texture(layer, ClampToEdgeWrapping, true);
    mesh.material.uniforms.opacity.value = layer.opacity;
    projection.placeSticker(mesh, layer);
    scene.add(mesh);
    return mesh;
  }

  // The grid, axes and origin marker for a gridSpec(); rebuilt when the spacing changes.
  function guideGroup(grid) {
    if (guides?.step === grid.step) return guides.group;
    if (guides) disposeObject(guides.group);
    const group = new Group();
    group.add(new GridHelper(grid.size, grid.divisions, 0x52525b, 0x3f3f46));
    group.add(new AxesHelper(grid.step * 2));
    const origin = new Mesh(new SphereGeometry(1, 16, 8), new MeshBasicMaterial({ color: ORIGIN_COLOR }));
    origin.scale.setScalar(grid.step * 0.12);
    group.add(origin);
    guides = { step: grid.step, group };
    return group;
  }

  // The item of `items` for input (a `scene` or 3D Sticker request), or the one shown before while it
  // loads (an item of the same input), in a group with the input's transform. `item` is what
  // items.request(input) gave, when the caller asked for several inputs at once.
  function contentGroup(items, input, item = items.request(input)) {
    const { transform, itemQuaternion } = input;
    if (!item) return null;
    item.object.quaternion.set(itemQuaternion.x, itemQuaternion.y, itemQuaternion.z, itemQuaternion.w);
    let group = contentGroups.get(item.object);
    if (!group) {
      group = new Group();
      group.add(item.object);
      contentGroups.set(item.object, group);
    }
    group.position.set(...transform.position);
    group.quaternion.set(transform.quaternion.x, transform.quaternion.y, transform.quaternion.z, transform.quaternion.w);
    group.scale.setScalar(transform.scale);
    // A 3D Sticker is picked as that Sticker.
    return { group, splat: item.kind === "splat", depthGrid: item.kind === "depth_grid", object: item.object, box: item.box, transform, stickerId: input.id ?? null };
  }

  // A 3D Sticker's opacity: a SPLAT's own, a GLB's on its unlit materials. A see-through GLB does not
  // write depth, so its faces behind show through it instead of hiding.
  function setContentOpacity(content, opacity) {
    if (content.splat) {
      content.object.opacity = opacity;
      return;
    }
    content.object.traverse((object) => {
      for (const material of object.isMesh ? [object.material].flat() : []) {
        material.opacity = opacity;
        material.transparent = opacity < 1;
        material.depthWrite = opacity >= 1;
      }
    });
  }


  // A world Sticker with a lens (ADR 0042): its sphere patch (LENS_PATCH_FRAGMENT) at its lens's center
  // (pano_space.js lensPatch: center, radius and the image's half extents), picked with a pick material of its own
  // shape.
  const worldLensStickers = [];
  const lensPatchGeometry = new SphereGeometry(1, 192, 96);
  const createWorldLensSticker = () => {
    const material = createMaterial(LENS_PATCH_VERTEX, LENS_PATCH_FRAGMENT, { crop: { value: new Vector4() }, curve: { value: 1 }, patchHalf: { value: new Vector2(1, 1) } });
    material.side = DoubleSide;
    material.depthTest = true;
    material.depthWrite = true;
    const mesh = new Mesh(lensPatchGeometry, material);
    mesh.userData.lensPatch = true;
    return mesh;
  };

  function addWorldLensSticker(owned, mesh, layer) {
    const { uniforms } = mesh.material;
    uniforms.map.value = owned.texture(layer, ClampToEdgeWrapping, true);
    uniforms.opacity.value = layer.opacity;
    uniforms.crop.value.set(layer.crop.x0, 1 - layer.crop.y1, layer.crop.x1, 1 - layer.crop.y0);
    uniforms.curve.value = layer.patch.curve;
    uniforms.patchHalf.value.set(layer.patch.halfX, layer.patch.halfY);
    mesh.position.set(...layer.patch.center);
    mesh.quaternion.set(layer.quaternion.x, layer.quaternion.y, layer.quaternion.z, layer.quaternion.w);
    mesh.scale.setScalar(layer.patch.radius);
    return mesh;
  }

  function addWorldSticker(owned, mesh, layer) {
    const { uniforms } = mesh.material;
    uniforms.map.value = owned.texture(layer, ClampToEdgeWrapping, true);
    uniforms.opacity.value = layer.opacity;
    uniforms.crop.value.set(layer.crop.x0, 1 - layer.crop.y1, layer.crop.x1, 1 - layer.crop.y0);
    mesh.position.set(...layer.position);
    mesh.quaternion.set(layer.quaternion.x, layer.quaternion.y, layer.quaternion.z, layer.quaternion.w);
    mesh.scale.set(layer.width, layer.height, 1);
    return mesh;
  }

  // The World of a space input: the default lights, the guides, the `scene` item, the 3D Stickers' items (the
  // port Sticker's and the 3D file Stickers', in one queue), the world Sticker planes and lines, with the Spark
  // renderer of owner's view, and the upstream Scene's items and planes (ADR 0030), which are drawn and picked
  // as the node's own. The objects are kept between renders, and `world` is filled again only when they
  // change. What is not seen (opacity 0) is not picked.
  function buildWorld(owned, space, owner) {
    const children = [lights];
    const parts = [];
    pickable = [];
    pickBoxes = [];
    if (space.grid) children.push(guideGroup(space.grid));
    sceneItems.retain(space.sceneUrls ?? []);
    // Each content with its opacity, which the `scene` item's materials keep as they are (opaque).
    const contents = [];
    if (space.scene) contents.push({ content: contentGroup(sceneItems, space.scene), input: space.scene, opacity: 1, keepMaterials: true });
    const stickerInputs = stickerItemInputs(space);
    const stickerShown = stickerItems.requestMany(stickerInputs.inputs);
    stickerInputs.drawn.forEach((input, index) => {
      contents.push({ content: contentGroup(stickerItems, input, stickerShown[index]), input, opacity: input.opacity });
    });
    const slots = new Set();
    for (const entry of space.upstreamItems ?? []) {
      slots.add(entry.slot);
      const items = upstreamItemsOf(entry.slot);
      items.retain(entry.urls);
      if (entry.request) contents.push({ content: contentGroup(items, entry.request), input: entry.request, opacity: entry.opacity });
    }
    for (const [slot, items] of upstreamItems) {
      if (slots.has(slot)) continue;
      items.close();
      upstreamItems.delete(slot);
    }
    // A SPLAT draws through the Spark renderer and a SplatMesh of the view (pano_spark_views.js), made the
    // first time it shows one; until Spark's module is there the SPLATs wait a render.
    const splat = contents.some(({ content }) => content?.splat);
    if (splat && !Spark) {
      loadSpark().then((module) => {
        if (closed) return;
        Spark = module;
        onUpdate();
      }).catch((error) => console.error("[PanoramaStickers] Spark is unavailable", error));
    }
    // The inputs whose depth grids draw now; the color textures of the others go.
    const colorSlots = [];
    for (const { content, input, opacity, keepMaterials } of contents) {
      if (!content) continue;
      // A depth grid draws only with its colors (the proxy's picture, which the editor gives as input.color).
      if (content.depthGrid) {
        if (!input.color) continue;
        content.object.material.uniforms.colorMap.value = depthColors.texture(input.color.slot ?? input.color.source, input.color);
        colorSlots.push(input.color.slot ?? input.color.source);
      }
      if (!keepMaterials) setContentOpacity(content, opacity);
      if (content.splat && !Spark) continue;
      if (content.splat) sparkViews.splat(owner, content.object);
      children.push(content.group);
      if (!(opacity > 0)) continue;
      if (content.splat) pickBoxes.push({ object: content.object, box: content.box, stickerId: content.stickerId });
      else pickable.push({ object: content.group, stickerId: content.stickerId, plane: false });
      parts.push([content.object.uuid, content.transform]);
    }
    depthColors.retain(colorSlots);
    if (splat && Spark) children.push(sparkViews.renderer(owner));
    let index = 0;
    let lensIndex = 0;
    for (const layer of [...space.stickers, ...(space.upstreamStickers ?? [])]) {
      if (!owned.drawable(layer)) continue;
      const mesh = layer.patch
        ? addWorldLensSticker(owned, pooled(worldLensStickers, lensIndex++, createWorldLensSticker), layer)
        : addWorldSticker(owned, pooled(worldStickers, index++, createWorldSticker), layer);
      children.push(mesh);
      if (!(layer.opacity > 0)) continue;
      pickable.push({ object: mesh, stickerId: layer.id, plane: true });
      parts.push([layer.id, layer.position, layer.quaternion, layer.width, layer.height, layer.patch ?? null]);
    }
    children.push(...cachedLines(lines, space.lines ?? []));
    // Picks are reused while the revision stays (pickCacheKey): whatever changes what is hit (an item's
    // object or geometry, a transform, a plane's place or size, what is pickable) must be in the parts.
    if (!sameValue(parts, contentParts)) {
      contentParts = parts;
      contentRevision += 1;
    }
    // A space without `gizmo` (the Cutout's camera preview, #77) leaves the gizmo of the view as it is, so
    // drawing the preview between two frames of the view does not end a drag.
    if (space.gizmo) children.push(...(gizmo ||= createGizmo(worldCamera)).show(space.gizmo));
    else if (space.gizmo === null) gizmo?.hide();
    setChildren(world, children);
  }

  // Where a render draws (visibleWindow(), with the whole view's size as fullWidth and fullHeight). With
  // input.rect it draws there on the canvas as resize() sized it (the editor's stage, shown as it is).
  // Without, the views shared by the nodes draw the owner's width x height from the bottom left of a
  // canvas as large as the largest owner, and each node copies its rectangle out.
  function place(input, entry) {
    if (input.rect) {
      const window = visibleWindow(input.rect, canvas.width, canvas.height);
      return window && { ...window, fullWidth: input.rect.w, fullHeight: input.rect.h };
    }
    const { width, height } = fitRenderSize(input.width, input.height, maxSide);
    entry.width = width;
    entry.height = height;
    let canvasWidth = 1;
    let canvasHeight = 1;
    owners.forEach((other) => {
      canvasWidth = Math.max(canvasWidth, other.width ?? 0);
      canvasHeight = Math.max(canvasHeight, other.height ?? 0);
    });
    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) renderer.setSize(canvasWidth, canvasHeight, false);
    return { x: 0, y: canvas.height - height, width, height, offsetX: 0, offsetY: 0, fullWidth: width, fullHeight: height };
  }

  // The Sky of input (its background and layers) in `scene`.
  function fillSky(owned, projection, input) {
    scene.clear();
    const background = input.background;
    if (background && owned.drawable({ id: "background", ...background })) {
      addErp(owned, projection, projection.background, { id: "background", opacity: 1, ...background }, background.coverage === 180);
    }
    let erpIndex = 0;
    let stickerIndex = 0;
    let lensIndex = 0;
    input.layers.forEach((layer, index) => {
      if (!owned.drawable(layer)) return;
      let mesh;
      if (layer.kind === "erp") mesh = addErp(owned, projection, pooled(projection.erp, erpIndex++, projection.createErp), layer, false);
      else if (projection.lensSticker && layer.curve !== undefined && layer.curve !== 1) {
        mesh = pooled(projection.lensSticker, lensIndex++, projection.createLensSticker);
        mesh.material.uniforms.map.value = owned.texture(layer, ClampToEdgeWrapping, true);
        mesh.material.uniforms.opacity.value = layer.opacity;
        projection.placeLensSticker(mesh, layer);
        scene.add(mesh);
      } else mesh = addSticker(owned, projection, pooled(projection.sticker, stickerIndex++, projection.createSticker), layer);
      mesh.renderOrder = index + 1;
    });
  }

  // The lens images (ADR 0042): the faces a lens render draws into, by index, and the owners each face's Spark
  // renderer draws for (one per face, so each sorts for its own camera), by owner.
  const lensTargets = [];
  const lensFaceOwners = new Map();
  const lensFaceBase = new WeakMap();
  const lensScene = new Scene();
  const lensQuad = createQuad(quadGeometry, LENS_FRAGMENT, {
    ...Object.fromEntries(Array.from({ length: LENS_FACES }, (_, index) => [`face${index}`, { value: null }])),
    faceTurn: { value: Array.from({ length: LENS_FACES }, () => new Matrix3()) },
    faceTan: { value: Array.from({ length: LENS_FACES }, () => new Vector2(1, 1)) },
    faceCount: { value: 0 },
    curve: { value: 1 },
    focal: { value: 1 },
    center: { value: new Vector2() },
    window: { value: new Vector4() },
    windowHeight: { value: 1 },
    background: { value: new Vector4(0, 0, 0, 1) },
  }, NoBlending);
  lensScene.add(lensQuad);
  const lensCamera = new PerspectiveCamera();
  const faceTurn = new Quaternion();
  const faceRotation = new Matrix4();

  // A face's target: sRGB (three draws linear light into it and the GPU stores it in sRGB, as three documents for a
  // render target), which the pass reads back as linear light and encodes for the canvas.
  function lensTarget(index, width, height) {
    let target = lensTargets[index];
    if (!target) {
      target = new WebGLRenderTarget(width, height, { format: RGBAFormat, type: UnsignedByteType, depthBuffer: true, minFilter: LinearFilter, magFilter: LinearFilter, generateMipmaps: false });
      target.texture.colorSpace = SRGBColorSpace;
      lensTargets[index] = target;
    } else if (target.width !== width || target.height !== height) {
      target.setSize(width, height);
    }
    return target;
  }

  // The owners of base's faces, made the first time; a Spark renderer of a face tells base's view to draw again.
  function lensFaceOwner(base, index) {
    let faces = lensFaceOwners.get(base);
    if (!faces) lensFaceOwners.set(base, faces = []);
    if (!faces[index]) {
      faces[index] = { lensFace: index };
      lensFaceBase.set(faces[index], { base });
    }
    return faces[index];
  }

  // The face renderers of base past `count` faces (all of them without a lens) let go.
  function releaseLensFaces(base, count = 0) {
    const faces = lensFaceOwners.get(base);
    if (!faces) return;
    faces.slice(count).forEach((owner) => owner && sparkViews.release(owner));
    faces.length = Math.min(faces.length, count);
    if (!faces.length) lensFaceOwners.delete(base);
  }

  // A lens Camera's image (input.lens: { curve, focal, centerX, centerY, background, faces }, the faces of
  // pano_lens.js lensRenderPlan; focal and the center in pixels of the whole view): each face drawn from the Camera
  // as a pinhole turned by the face, then the pass samples them per pixel of the part on the canvas.
  function drawLens(input, space) {
    let entry = owners.get(input.owner);
    if (!entry) owners.set(input.owner, entry = {});
    const at = place(input, entry);
    if (!at) return null;
    const { lens } = input;
    const base = new Quaternion(input.camera.quaternion.x, input.camera.quaternion.y, input.camera.quaternion.z, input.camera.quaternion.w);
    releaseLensFaces(input.owner, lens.faces.length);
    const owned = layerTextures.draw(input.owner);
    linearOutput.value = true;
    try {
      fillSky(owned, panorama, input);
      lens.faces.forEach((face, index) => {
        const q = face.quaternion;
        faceTurn.set(q.x, q.y, q.z, q.w);
        const turned = base.clone().multiply(faceTurn);
        const setup = {
          ...input.camera,
          quaternion: { x: turned.x, y: turned.y, z: turned.z, w: turned.w },
          fovY_deg: 2 * Math.atan(face.tanY) * 180 / Math.PI,
          aspect: face.tanX / face.tanY,
        };
        renderer.setRenderTarget(lensTarget(index, face.width, face.height));
        renderer.setViewport(0, 0, face.width, face.height);
        renderer.setScissor(0, 0, face.width, face.height);
        if (input.clearColor != null) renderer.setClearColor(new Color(input.clearColor), 1);
        renderer.clear(true, true, false);
        setView(camera, setup);
        renderer.autoClear = false;
        renderer.render(scene, camera);
        if (space) {
          const faceOwner = lensFaceOwner(input.owner, index);
          buildWorld(owned, space, faceOwner);
          setCamera(worldCamera, setup);
          sparkViews.aim(worldCamera, faceOwner);
          // Spark writes its splats' sRGB colors as they are unless told to write linear light. Its linear is
          // pow(rgb, 2.2), not the exact sRGB curve the pass encodes with, so under a lens other than 1 the editor
          // shows splats' dark tones up to about 7 levels off; the node's output is not affected. Accepted (a target
          // of their own would lose their depth order against the meshes).
          const spark = sparkViews.has(faceOwner) ? sparkViews.renderer(faceOwner) : null;
          if (spark) spark.encodeLinear = true;
          renderer.clearDepth();
          renderer.render(world, worldCamera);
        }
        renderer.autoClear = true;
        if (input.clearColor != null) renderer.setClearColor(0x000000, 0);
        const uniforms = lensQuad.material.uniforms;
        uniforms[`face${index}`].value = lensTargets[index].texture;
        faceRotation.makeRotationFromQuaternion(faceTurn.clone().invert());
        uniforms.faceTurn.value[index].setFromMatrix4(faceRotation);
        uniforms.faceTan.value[index].set(face.tanX, face.tanY);
      });
    } finally {
      linearOutput.value = false;
      owned.end();
      renderer.setRenderTarget(null);
    }
    const uniforms = lensQuad.material.uniforms;
    uniforms.faceCount.value = lens.faces.length;
    uniforms.curve.value = lens.curve;
    uniforms.focal.value = lens.focal;
    uniforms.center.value.set(lens.centerX, lens.centerY);
    const bottom = canvas.height - at.y - at.height;
    uniforms.window.value.set(at.x, bottom, at.offsetX, at.offsetY);
    uniforms.windowHeight.value = at.height;
    const color = Number(lens.background ?? 0);
    uniforms.background.value.set(((color >> 16) & 255) / 255, ((color >> 8) & 255) / 255, (color & 255) / 255, 1);
    renderer.setViewport(at.x, bottom, at.width, at.height);
    renderer.setScissor(at.x, bottom, at.width, at.height);
    renderer.render(lensScene, lensCamera);
    settleUnpack();
    return { canvas, x: at.x, y: at.y, width: at.width, height: at.height };
  }

  function draw(projection, input, space = null) {
    if (projection === panorama && input.lens) return drawLens(input, space);
    releaseLensFaces(input.owner);
    let entry = owners.get(input.owner);
    if (!entry) owners.set(input.owner, entry = {});
    const at = place(input, entry);
    if (!at) return null;
    // The viewport starts at the bottom left of the WebGL canvas.
    const bottom = canvas.height - at.y - at.height;
    renderer.setViewport(at.x, bottom, at.width, at.height);
    renderer.setScissor(at.x, bottom, at.width, at.height);
    if (input.camera) setView(camera, input.camera, at);
    // A draw that throws still marks what it used, so no texture is left without an owner.
    const owned = layerTextures.draw(input.owner);
    try {
      fillSky(owned, projection, input);
      if (space) buildWorld(owned, space, input.owner);
    } finally {
      owned.end();
    }
    // The part is cleared to input.clearColor (a hex RGB, opaque) before it is drawn, or to transparent.
    if (input.clearColor != null) renderer.setClearColor(new Color(input.clearColor), 1);
    renderer.render(scene, camera);
    if (input.clearColor != null) renderer.setClearColor(0x000000, 0);
    if (space) {
      setCamera(worldCamera, input.camera, at);
      // This draw's camera is the only one the view's Spark renderer sees in this frame.
      sparkViews.aim(worldCamera, input.owner);
      renderer.autoClear = false;
      renderer.clearDepth();
      renderer.render(world, worldCamera);
      renderer.autoClear = true;
    }
    settleUnpack();
    return { canvas, x: at.x, y: at.y, width: at.width, height: at.height };
  }

  // input: { width, height, camera, background, layers, owner }. camera is a viewportCamera() or
  // shotCamera() setup, background is { media, revision, coverage } or null, and layers are the Sky
  // layers from back to front: { kind: "erp", id, media, revision, opacity } or
  // { kind: "sticker", id, media, revision, opacity, quaternion, rect }. Each may name its `source`
  // (see createLayerTextures). owner is optional.
  // With `space`, the view stands at camera.position (a spaceCamera(), pano_space.js) and draws the World
  // over the Sky, which stays at infinity: space is { grid, sceneUrls, scene, stickerUrls, sticker, fileStickers, fileStickerKeys,
  // stickers, lines }. sceneUrls are the item URLs of the `scene` input; loaded items of other URLs are
  // dropped. grid is a gridSpec() or null. scene is null or { kind ("splat" or "mesh"), url, urls (every item of the input), prefetch
  // (urls to load ahead), transform ({ position, quaternion, scale }), itemQuaternion (the item's turn into
  // the `scene` frame), unlit (its meshes draw without light; false: lit by the default lights) }. sticker is the
  // same for the `sticker` input's 3D media with its opacity, and stickerUrls its item URLs. fileStickers are the
  // requests of the 3D file Stickers (pano_space.js fileStickerRequests: by the Sticker's key, loaded from
  // `src`), and fileStickerKeys the keys of every one whose item stays loaded. stickers are world Sticker planes { id, media, revision, source, opacity,
  // position, quaternion, width, height, crop }, and lines are { segments: [[a, b], ...], color }.
  // upstreamItems ([{ slot, urls, request, opacity }], pano_upstream.js upstreamLayerView) and upstreamStickers
  // (planes as `stickers`) are the upstream Scene's, drawn and picked as the own ones (ADR 0030). gizmo is
  // null or the selected world Sticker's gizmo { mode, transform } (createGizmo's show).
  // With rect ({ x, y, w, h } in canvas pixels from the top left), the view of that size is drawn there on
  // the canvas as resize() sized it, only the part on the canvas, at the canvas's pixels; width and height
  // are not used then. Returns the canvas and the rectangle of it that holds the frame (from the top
  // left), or null when none of rect is on the canvas.
  function render(input) {
    return draw(panorama, input, input.space ?? null);
  }

  // Sizes the canvas to width x height device pixels, within what the GPU draws to (fitRenderSize), for
  // the renders with a rect. Returns the size it has.
  function resize(width, height) {
    const size = fitRenderSize(width, height, maxSide);
    if (canvas.width !== size.width || canvas.height !== size.height) renderer.setSize(size.width, size.height, false);
    return size;
  }

  // Clears the canvas, or the part of it in rect (as render()'s), to color (a hex RGB, opaque) or, without
  // one, to transparent.
  function clear(color = null, rect = null) {
    const at = rect ? visibleWindow(rect, canvas.width, canvas.height) : { x: 0, y: 0, width: canvas.width, height: canvas.height };
    if (!at) return;
    const bottom = canvas.height - at.y - at.height;
    renderer.setViewport(at.x, bottom, at.width, at.height);
    renderer.setScissor(at.x, bottom, at.width, at.height);
    if (color !== null) renderer.setClearColor(new Color(color), 1);
    renderer.clear(true, true, false);
    if (color !== null) renderer.setClearColor(0x000000, 0);
  }

  // The box of the loaded `scene` or 3D Sticker item at url (or a 3D file Sticker's key) in its own frame
  // ({ min, max }; a SPLAT's in 3DGS coordinates), or null while it loads.
  function sceneBox(url) {
    for (const items of [sceneItems, stickerItems, ...upstreamItems.values()]) {
      const box = items.box(url);
      if (box) return box;
    }
    return null;
  }

  // Why the `scene` or 3D Sticker item at url (or key) failed to load ("HTTP 404" when its file is gone), or null.
  function sceneItemError(url) {
    for (const items of [sceneItems, stickerItems, ...upstreamItems.values()]) {
      const error = items.error(url);
      if (error) return error;
    }
    return null;
  }

  // The pick pass's mode and far, which the depth grids' pick materials share.
  const pickShared = { pickMode: { value: 0 }, far: { value: 1 } };

  // The pick material of pickable entry `index` for one of its meshes: one per entry, or a depth grid's own (its
  // uniforms are its item's), kept on the mesh and freed with it.
  function pickMaterial(index, object) {
    // A world Sticker's lens patch is hit where it shows: its own shape, with its uniforms.
    if (object?.userData.lensPatch) {
      object.userData.pickMaterial ||= new ShaderMaterial({
        vertexShader: LENS_PATCH_PICK_VERTEX,
        fragmentShader: LENS_PATCH_PICK_FRAGMENT,
        uniforms: { pickId: { value: 0 }, ...pickShared, curve: object.material.uniforms.curve, patchHalf: object.material.uniforms.patchHalf },
        side: DoubleSide,
        blending: NoBlending,
      });
      object.userData.pickMaterial.uniforms.pickId.value = index + 1;
      return object.userData.pickMaterial;
    }
    if (object?.userData.depthGrid) {
      object.userData.pickMaterial ||= createDepthGridPickMaterial(object.material, pickShared);
      object.userData.pickMaterial.uniforms.pickId.value = index + 1;
      return object.userData.pickMaterial;
    }
    if (!pickMaterials[index]) {
      pickMaterials[index] = new ShaderMaterial({
        vertexShader: PICK_VERTEX,
        fragmentShader: PICK_FRAGMENT,
        uniforms: { pickId: { value: index + 1 }, pickMode: { value: 0 }, far: { value: 1 } },
        side: DoubleSide,
        blending: NoBlending,
      });
    }
    return pickMaterials[index];
  }

  // The 1 x 1 target picks draw to: RGBA float where the GPU can draw to it, else RGBA8.
  function ensurePickTarget() {
    if (pickTarget) return pickTarget;
    const float = pickFloat && renderer.extensions.has("EXT_color_buffer_float");
    pickTarget = new WebGLRenderTarget(1, 1, {
      type: float ? FloatType : UnsignedByteType,
      format: RGBAFormat,
      minFilter: NearestFilter,
      magFilter: NearestFilter,
      generateMipmaps: false,
      depthBuffer: true,
    });
    return pickTarget;
  }

  // Draws the pixel at (x, y) with the pickable meshes and reads it back: { id (1 + pickable index),
  // depth }, null over nothing, or false when drawing failed (the next pick tries RGBA8, then gives up).
  function drawPick(camera, x, y, width, height) {
    if (!pickable.length || pickFailed) return null;
    const target = ensurePickTarget();
    const float = target.texture.type === FloatType;
    setCamera(pickCamera, camera);
    const offset = pickWindow(x, y, width, height);
    pickCamera.setViewOffset(offset.fullWidth, offset.fullHeight, offset.x, offset.y, offset.width, offset.height);
    const pixel = float ? new Float32Array(4) : new Uint8Array(4);
    const read = (mode) => {
      pickMaterials.forEach((material) => {
        material.uniforms.pickMode.value = mode;
        material.uniforms.far.value = camera.far;
      });
      pickShared.pickMode.value = mode;
      pickShared.far.value = camera.far;
      renderer.setRenderTarget(target);
      try {
        renderer.render(world, pickCamera);
      } finally {
        renderer.setRenderTarget(null);
      }
      renderer.readRenderTargetPixels(target, 0, 0, 1, 1, pixel);
      return [...pixel];
    };
    try {
      return pickPass(world, pickable, pickMaterial, () => (float ? readPickFloat(read(0)) : readPickBytes(read(1), read(2), camera.far)));
    } catch (error) {
      console.error("[PanoramaStickers] Picking on the GPU failed", error);
      target.dispose();
      pickTarget = null;
      if (float) pickFloat = false;
      else pickFailed = true;
      return false;
    }
  }

  // The nearest content of the last space render at (x, y) of a width x height view from camera (a
  // spaceCamera()): { point (World [x, y, z]), stickerId (the Sticker it is, or null for the `scene`
  // content), box (whether the point is on a SPLAT's box) } or null over empty space. Meshes and planes
  // hit on their triangles, from both sides; a SPLAT on its box. The same pixel of the same view over the
  // same content gives the pick before.
  function pickAt(camera, x, y, width, height) {
    const key = pickCacheKey(camera, x, y, width, height, contentRevision);
    if (lastPick.key === key) return lastPick.hit;
    world.updateMatrixWorld();
    const ray = pickRay(camera, x, y, width, height);
    const hits = [];
    const drawn = drawPick(camera, x, y, width, height);
    const entry = drawn && pickable[drawn.id - 1];
    if (entry) hits.push({ depth: drawn.depth, stickerId: entry.stickerId, plane: entry.plane });
    for (const { object, box, stickerId } of pickBoxes) {
      if (!box) continue;
      // The ray in the SPLAT's own frame keeps its parameter, which is the depth along the view axis.
      const inverse = new Matrix4().copy(object.matrixWorld).invert();
      const origin = new Vector3(...ray.origin).applyMatrix4(inverse).toArray();
      const direction = new Vector3(...ray.direction).applyMatrix3(new Matrix3().setFromMatrix4(inverse)).toArray();
      const depth = rayBoxDepth(origin, direction, box);
      if (depth !== null) hits.push({ depth, stickerId, box: true });
    }
    // The point is the nearest hit. A SPLAT's box is larger than what shows of it, so a world Sticker plane
    // hit takes the Sticker before a nearer box.
    const nearest = nearestHit(hits, camera);
    const hit = nearest && {
      point: pointAt(ray, nearest.depth),
      stickerId: nearestHit(hits, camera, (each) => each.plane).stickerId,
      box: nearest.box === true,
    };
    // A failed draw is not kept, so the next pick draws again.
    if (drawn !== false) lastPick = { key, hit };
    return hit;
  }

  // The World point of the content under (x, y) in the last space render (pickAt), or null.
  function pick(camera, x, y, width, height) {
    return pickAt(camera, x, y, width, height)?.point ?? null;
  }

  // The same on a surface only: null where the nearest content is a SPLAT's box, whose point (inside the
  // box, where the ray leaves it) is not where the splats show, so an orbit or a wheel step there works
  // on the view's pivot instead.
  function pickSurface(camera, x, y, width, height) {
    const hit = pickAt(camera, x, y, width, height);
    return hit && !hit.box ? hit.point : null;
  }

  // The id of the world or 3D Sticker under (x, y) in the last space render (pickAt), or null over the
  // `scene` content or empty space.
  function pickSticker(camera, x, y, width, height) {
    return pickAt(camera, x, y, width, height)?.stickerId ?? null;
  }

  // The pointer at (x, y) of a width x height view from camera (a spaceCamera()) on the gizmo of the last
  // space render (createGizmo's pointer).
  function gizmoPointer(phase, camera, x, y, width, height) {
    if (!gizmo) return null;
    setCamera(worldCamera, camera);
    const { x: px, y: py } = devicePoint(x, y, width, height);
    return gizmo.pointer(phase, px, py);
  }

  // Frees the Spark renderer of an owner that stops drawing for now (the camera preview hides) and drops
  // its marks on the layer textures, so those no other owner uses are disposed; it gets a new renderer and
  // its textures again when it draws again.
  function releaseSplats(owner) {
    releaseLensFaces(owner);
    sparkViews.release(owner);
    layerTextures.release(owner);
  }

  // input: render()'s input without camera; the frame is the layers laid out as an ERP. Its rect, if any,
  // lies on the canvas.
  function renderUnwrap(input) {
    return draw(unwrap, input);
  }

  // Frees the textures and the Spark renderer of an owner that stops drawing; the canvas shrinks on the next
  // render if this owner was the largest.
  function release(owner) {
    releaseLensFaces(owner);
    layerTextures.release(owner);
    owners.delete(owner);
    sparkViews.release(owner);
  }

  // What the diagnostics sample (pano_diagnostics.js watchThreeView): renderer.info (calls and
  // triangles of the last pass drawn), the layer textures the owners share, the `scene` and 3D Sticker items,
  // and the Spark renderers.
  function stats() {
    const { memory, render: drawn, programs } = renderer.info;
    const items = [sceneItems, stickerItems, ...upstreamItems.values()].flatMap((each) => [...each.items.values()]);
    return {
      textures: memory.textures,
      layerTextures: layerTextures.size,
      geometries: memory.geometries,
      programs: programs?.length ?? 0,
      calls: drawn.calls,
      triangles: drawn.triangles,
      size: [canvas.width, canvas.height],
      sceneItems: {
        count: items.length,
        loaded: items.filter((item) => item.state === "loaded").length,
        loading: items.filter((item) => item.state === "loading").length,
        mb: Math.round(items.reduce((total, item) => total + (item.state === "loaded" ? item.size : 0), 0) / 1024 ** 2),
      },
      sparks: sparkViews.stats(),
      depthColorTextures: depthColors.size,
    };
  }

  // Frees what the view holds. The WebGL context is let go now too, unless it is lost already (lost):
  // then nothing reaches the GPU, and the canvas can make a new view once the context is restored.
  function dispose({ lost = false } = {}) {
    if (closed) return;
    closed = true;
    sceneItems.close();
    stickerItems.close();
    depthColors.dispose();
    upstreamItems.forEach((items) => items.close());
    upstreamItems.clear();
    if (guides) disposeObject(guides.group);
    lines.lines.forEach((line) => disposeObject(line));
    gizmo?.dispose();
    worldStickers.forEach((mesh) => mesh.material.dispose());
    worldLensStickers.forEach((mesh) => {
      mesh.material.dispose();
      mesh.userData.pickMaterial?.dispose();
    });
    lensPatchGeometry.dispose();
    panorama.lensSticker.forEach((mesh) => mesh.material.dispose());
    pickMaterials.forEach((material) => material.dispose());
    pickTarget?.dispose();
    lensTargets.forEach((target) => target.dispose());
    lensQuad.material.dispose();
    sparkViews.dispose();
    layerTextures.dispose();
    owners.clear();
    [panorama, unwrap].forEach((projection) => {
      [projection.background, ...projection.erp, ...projection.sticker].forEach((mesh) => mesh.material.dispose());
    });
    domeGeometry.dispose();
    planeGeometry.dispose();
    quadGeometry.dispose();
    renderer.dispose();
    // Release the WebGL context now instead of when the canvas is collected, so reopening the
    // editor does not pile up contexts.
    if (!lost) renderer.forceContextLoss();
  }

  return { canvas, render, renderUnwrap, resize, clear, sceneBox, sceneItemError, pick, pickSurface, pickSticker, gizmoPointer, contentRevision: () => contentRevision, release, releaseSplats, stats, dispose };
}
