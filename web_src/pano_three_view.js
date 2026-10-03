// three.js view of the editor. Vite emits this module, three.js (with its GLTFLoader) and the `scene`
// item loading as a chunk in web/.lazy/, which ComfyUI does not load as an extension, and
// pano_editor_view.js imports it when an editor opens. Spark is a chunk of its own, imported when a
// SPLAT first loads. Keep it free of modules the eager bundle also uses, so the chunk holds only these
// libraries and these files instead of importing back from panorama_suite.js; pano_editor_view.js and
// pano_space.js do the math.
//
// Every render rebuilds the scene from the given layers. Only GPU resources (meshes, materials,
// textures and the loaded `scene` items) are reused between renders; nothing here is saved.
import {
  AxesHelper,
  BackSide,
  BufferGeometry,
  ClampToEdgeWrapping,
  CustomBlending,
  DoubleSide,
  Float32BufferAttribute,
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
  PlaneGeometry,
  Quaternion,
  Raycaster,
  RepeatWrapping,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Texture,
  Vector2,
  Vector4,
  VideoTexture,
  WebGLRenderer,
} from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import { createSceneItems } from "./pano_scene_items.js";
import { disposeObject, disposeSceneItem, loadSceneItem, loadSpark } from "./pano_scene_loaders.js";

// MAX_RENDER_SIDE in pano_editor_view.js; the chunk cannot import it back from the eager bundle.
const MAX_RENDER_SIDE = 2048;
const DOME_RADIUS = 100;
const STICKER_DISTANCE = 50;
// Loaded `scene` items kept at once (a MoGe VIDEO has one GLB per frame).
const SCENE_ITEM_LIMIT = 8;
const ORIGIN_COLOR = 0xffdd57;

// The ERP is laid out in the panorama convention (forward +Z); World is glTF (forward -Z).
const ERP_VERTEX = `
varying vec3 vDirection;
void main() {
  vDirection = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const ERP_FRAGMENT = `
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
void main() {
  gl_FragColor = texture2D(map, vUv) * opacity;
}`;

// A world Sticker's plane shows its crop (x0, v of y1, x1, v of y0) of the image; v runs up the image.
const WORLD_STICKER_FRAGMENT = `
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
const UNWRAP_STICKER_FRAGMENT = `
uniform sampler2D map;
uniform float opacity;
uniform mat3 toSticker;
uniform vec4 rect;
varying vec2 vUv;
const float PI = 3.1415926535897932384626433832795;
void main() {
  float lon = (vUv.x - 0.5) * 2.0 * PI;
  float lat = (vUv.y - 0.5) * PI;
  vec3 local = toSticker * vec3(cos(lat) * sin(lon), sin(lat), -cos(lat) * cos(lon));
  if (local.z >= -1e-5) discard;
  vec2 plane = local.xy / -local.z;
  if (plane.x < rect.x || plane.x > rect.z || plane.y < rect.y || plane.y > rect.w) discard;
  gl_FragColor = texture2D(map, (plane - rect.xy) / (rect.zw - rect.xy)) * opacity;
}`;

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

// A <video> has a picture to upload from HAVE_CURRENT_DATA on; before that (loading, seeking) its
// upload is empty.
export function hasContent(media) {
  const size = mediaSize(media);
  if (!(size.width > 0 && size.height > 0)) return false;
  return !(media instanceof HTMLVideoElement) || media.readyState >= HTMLVideoElement.HAVE_CURRENT_DATA;
}

// The texture of a layer, from `owned` (layer id -> entry). `source` names what the media shows (a
// VIDEO's URL for the VIDEO, its stills and its first frame; the media itself by default). A layer whose
// media changes within its source keeps its texture until the new media has a picture, so a VIDEO that
// is loading or seeking never shows an empty upload in place of the frame before. Another source never
// shows the picture of the one before. A 360 ERP wraps around horizontally; a 180 ERP and a Sticker
// clamp at their edges.
export function layerTexture(owned, id, media, revision, wrapS, flipY, source = media) {
  const size = mediaSize(media);
  let entry = owned.get(id);
  if (entry && (entry.source !== source || entry.media !== media || entry.width !== size.width || entry.height !== size.height)) {
    if (entry.source === source && !hasContent(media)) {
      entry.used = true;
      return entry.texture;
    }
    entry.texture.dispose();
    owned.delete(id);
    entry = null;
  }
  if (!entry) {
    entry = { texture: createTexture(media, flipY), media, source, revision, ...size };
    owned.set(id, entry);
  } else if (entry.revision !== revision || entry.texture.wrapS !== wrapS) {
    entry.revision = revision;
    entry.texture.needsUpdate = true;
  }
  entry.texture.wrapS = wrapS;
  entry.used = true;
  return entry.texture;
}

// Whether a layer draws: once its media has a picture, or with the texture its source had (in
// `owned`) while the new media has none.
export function layerDrawable(owned, { id, media, source }) {
  return hasContent(media) || owned.get(id)?.source === (source ?? media);
}

function createMaterial(vertexShader, fragmentShader, uniforms, blending = CustomBlending) {
  return new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: { map: { value: null }, opacity: { value: 1 }, ...uniforms },
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

function setCamera(target, setup) {
  applyViewportCamera(target, setup);
  target.position.set(...setup.position);
  target.near = setup.near;
  target.far = setup.far;
  target.updateProjectionMatrix();
  target.updateMatrixWorld();
}

// (x, y) of a width x height view as three.js normalized device coordinates.
function devicePoint(x, y, width, height) {
  return new Vector2(x / width * 2 - 1, 1 - y / height * 2);
}

// The nearest intersection of `objects` (three.js objects in the World, searched with their children)
// seen at (x, y) of a width x height view drawn with camera (a spaceCamera() setup, pano_space.js), or
// undefined. Meshes and planes hit on their triangles; a SPLAT's SplatMesh hits with Spark's own raycast
// (its splats with enough opacity). The objects' World matrices must be current.
function raycastHit(objects, camera, x, y, width, height) {
  const ray = new PerspectiveCamera();
  setCamera(ray, camera);
  const raycaster = new Raycaster();
  raycaster.setFromCamera(devicePoint(x, y, width, height), ray);
  return raycaster.intersectObjects(objects, true)[0];
}

// The World point of raycastHit() as [x, y, z], or null.
export function raycastPoint(objects, camera, x, y, width, height) {
  const hit = raycastHit(objects, camera, x, y, width, height);
  return hit ? hit.point.toArray() : null;
}

// The world Sticker of the nearest intersection at (x, y), as raycastHit() finds it: the id its object or
// an ancestor carries (userData.stickerId), or null when the nearest is not a Sticker (the `scene`
// content) or nothing is there.
export function raycastStickerId(objects, camera, x, y, width, height) {
  for (let object = raycastHit(objects, camera, x, y, width, height)?.object; object; object = object.parent) {
    if (object.userData.stickerId) return object.userData.stickerId;
  }
  return null;
}

// onUpdate runs when something the view draws changes by itself: a `scene` item finished loading, or
// Spark finished sorting the splats for the last view.
// Loads of `scene` items running at once; scrubbing a MoGe VIDEO queues the rest.
const SCENE_LOADS = 2;

export function createThreeView({ onUpdate = () => {} } = {}) {
  const canvas = document.createElement("canvas");
  // The World is depth tested, so the canvas has a depth buffer; the Sky draws without it.
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: true,
    stencil: false,
  });
  renderer.setClearColor(0x000000, 0);
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
  let lines = [];
  // The World content the last space render drew, which pick() hits: the `scene` and 3D Sticker items
  // and the world Sticker planes, not the guides. pickKey names what they are and where, so a point
  // picked before can be reused while it stays the same.
  let pickable = [];
  let pickParts = [];
  let pickKey = "";
  let spark = null;
  let closed = false;
  // The gizmo of the selected world Sticker (#72): three.js TransformControls on a stand-in object that
  // takes the Sticker's transform each render. The editor feeds it the pointer (gizmoPointer) and writes
  // what it moved back to the state, which the next render draws. Made the first time one shows.
  let gizmo = null;
  let gizmoShown = false;
  const sceneItems = createSceneItems({
    load: loadSceneItem,
    dispose: disposeSceneItem,
    onUpdate,
    concurrency: SCENE_LOADS,
    limit: SCENE_ITEM_LIMIT,
  });
  // The items of the `sticker` input's 3D media (#63), loaded the same way. An item loads here even when
  // `scene` has the same file, since an object has one parent.
  const stickerItems = createSceneItems({
    load: loadSceneItem,
    dispose: disposeSceneItem,
    onUpdate,
    concurrency: SCENE_LOADS,
    limit: SCENE_ITEM_LIMIT,
  });
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
    placeErp(mesh, halfCoverage) {
      mesh.material.uniforms.halfCoverage.value = halfCoverage;
    },
    placeSticker,
  };
  // The Unwrap view lays a 180 ERP over the whole width like the previous renderer.
  const unwrap = {
    background: createQuad(quadGeometry, UNWRAP_ERP_FRAGMENT, {}, NoBlending),
    erp: [],
    sticker: [],
    createErp: () => createQuad(quadGeometry, UNWRAP_ERP_FRAGMENT, {}),
    createSticker: () => createQuad(quadGeometry, UNWRAP_STICKER_FRAGMENT, { toSticker: { value: null }, rect: { value: null } }),
    placeErp() {},
    placeSticker(mesh, layer) {
      const { toSticker, rect } = unwrapStickerUniforms(layer);
      mesh.material.uniforms.toSticker.value = toSticker;
      mesh.material.uniforms.rect.value = rect;
    },
  };
  // Per owner: its textures by layer id and the size it last rendered at. Surfaces that share this
  // view (the on-node Previews, the Cutout camera preview) pass their own owner, so rendering one
  // does not drop the textures of the others, and the canvas keeps the largest size in use instead
  // of resizing per owner.
  const owners = new Map();
  renderer.setScissorTest(true);

  function pooled(meshes, index, create) {
    if (!meshes[index]) meshes[index] = create();
    return meshes[index];
  }

  function addErp(owned, projection, mesh, layer, halfCoverage) {
    mesh.material.uniforms.map.value = layerTexture(owned, layer.id, layer.media, layer.revision, halfCoverage ? ClampToEdgeWrapping : RepeatWrapping, false, layer.source ?? layer.media);
    mesh.material.uniforms.opacity.value = layer.opacity;
    projection.placeErp(mesh, halfCoverage);
    scene.add(mesh);
    return mesh;
  }

  function addSticker(owned, projection, mesh, layer) {
    mesh.material.uniforms.map.value = layerTexture(owned, layer.id, layer.media, layer.revision, ClampToEdgeWrapping, true, layer.source ?? layer.media);
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
  // loads (an item of the same input), in a group with the input's transform.
  function contentGroup(items, input) {
    const { transform, itemQuaternion } = input;
    const item = items.request(input);
    if (!item) return null;
    item.object.quaternion.set(itemQuaternion.x, itemQuaternion.y, itemQuaternion.z, itemQuaternion.w);
    const group = new Group();
    group.position.set(...transform.position);
    group.quaternion.set(transform.quaternion.x, transform.quaternion.y, transform.quaternion.z, transform.quaternion.w);
    group.scale.setScalar(transform.scale);
    group.add(item.object);
    // A 3D Sticker is picked as that Sticker.
    if (input.id) group.userData.stickerId = input.id;
    return { group, splat: item.kind === "splat", object: item.object, transform };
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

  function addWorldSticker(owned, mesh, layer) {
    mesh.userData.stickerId = layer.id;
    pickable.push(mesh);
    pickParts.push([layer.id, layer.position, layer.quaternion, layer.width, layer.height]);
    const { uniforms } = mesh.material;
    uniforms.map.value = layerTexture(owned, layer.id, layer.media, layer.revision, ClampToEdgeWrapping, true, layer.source ?? layer.media);
    uniforms.opacity.value = layer.opacity;
    uniforms.crop.value.set(layer.crop.x0, 1 - layer.crop.y1, layer.crop.x1, 1 - layer.crop.y0);
    mesh.position.set(...layer.position);
    mesh.quaternion.set(layer.quaternion.x, layer.quaternion.y, layer.quaternion.z, layer.quaternion.w);
    mesh.scale.set(layer.width, layer.height, 1);
    world.add(mesh);
  }

  // The World of a space input: the guides, the `scene` item, the 3D Sticker's item, the world Sticker
  // planes and lines.
  function buildWorld(owned, space) {
    world.clear();
    lines.forEach((line) => disposeObject(line));
    lines = [];
    pickable = [];
    pickParts = [];
    if (space.grid) world.add(guideGroup(space.grid));
    sceneItems.retain(space.sceneUrls ?? []);
    stickerItems.retain(space.stickerUrls ?? []);
    const sticker = space.sticker ? contentGroup(stickerItems, space.sticker) : null;
    if (sticker) setContentOpacity(sticker, space.sticker.opacity);
    const contents = [space.scene ? contentGroup(sceneItems, space.scene) : null, sticker].filter(Boolean);
    // A SPLAT draws through Spark's renderer, made the first time one shows (its module is loaded by
    // then); until it is there the SPLATs wait a render.
    const splat = contents.some((content) => content.splat);
    if (splat && !spark) {
      loadSpark().then(({ SparkRenderer }) => {
        if (closed) return;
        spark ||= new SparkRenderer({ renderer, onDirty: onUpdate });
        onUpdate();
      }).catch((error) => console.error("[PanoramaStickers] Spark is unavailable", error));
    }
    for (const content of contents) {
      if (content.splat && !spark) continue;
      world.add(content.group);
      pickable.push(content.group);
      pickParts.push([content.object.uuid, content.transform]);
    }
    if (splat && spark) world.add(spark);
    let index = 0;
    for (const layer of space.stickers) {
      if (layerDrawable(owned, layer)) addWorldSticker(owned, pooled(worldStickers, index++, createWorldSticker), layer);
    }
    for (const set of space.lines ?? []) {
      const line = createLines(set);
      lines.push(line);
      world.add(line);
    }
    pickKey = JSON.stringify(pickParts);
    gizmoShown = !!space.gizmo;
    if (gizmoShown) addGizmo(space.gizmo);
  }

  // The gizmo at a { mode, transform } (mode "translate", "rotate" or "scale"; transform
  // { position, quaternion, scale } as pano_space.js sceneTransform() gives it). It draws over the World
  // (its materials do not test depth).
  function addGizmo({ mode, transform }) {
    if (!gizmo) {
      const controls = new TransformControls(worldCamera);
      const target = new Object3D();
      controls.attach(target);
      gizmo = { controls, target };
    }
    const { controls, target } = gizmo;
    controls.mode = mode;
    target.position.set(...transform.position);
    target.quaternion.set(transform.quaternion.x, transform.quaternion.y, transform.quaternion.z, transform.quaternion.w);
    target.scale.setScalar(transform.scale);
    world.add(target);
    world.add(controls.getHelper());
  }

  function draw(projection, input, space = null) {
    const scale = Math.min(1, MAX_RENDER_SIDE / Math.max(input.width, input.height));
    const width = Math.max(1, Math.round(input.width * scale));
    const height = Math.max(1, Math.round(input.height * scale));
    let entry = owners.get(input.owner);
    if (!entry) owners.set(input.owner, entry = { textures: new Map() });
    entry.width = width;
    entry.height = height;
    let canvasWidth = 1;
    let canvasHeight = 1;
    owners.forEach((other) => {
      canvasWidth = Math.max(canvasWidth, other.width);
      canvasHeight = Math.max(canvasHeight, other.height);
    });
    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) renderer.setSize(canvasWidth, canvasHeight, false);
    renderer.setViewport(0, 0, width, height);
    renderer.setScissor(0, 0, width, height);
    scene.clear();
    const owned = entry.textures;
    owned.forEach((item) => { item.used = false; });
    const background = input.background;
    if (background && layerDrawable(owned, { id: "background", ...background })) {
      addErp(owned, projection, projection.background, { id: "background", opacity: 1, ...background }, background.coverage === 180);
    }
    let erpIndex = 0;
    let stickerIndex = 0;
    input.layers.forEach((layer, index) => {
      if (!layerDrawable(owned, layer)) return;
      const mesh = layer.kind === "erp"
        ? addErp(owned, projection, pooled(projection.erp, erpIndex++, projection.createErp), layer, false)
        : addSticker(owned, projection, pooled(projection.sticker, stickerIndex++, projection.createSticker), layer);
      mesh.renderOrder = index + 1;
    });
    if (space) buildWorld(owned, space);
    owned.forEach((item, id) => {
      if (item.used) return;
      item.texture.dispose();
      owned.delete(id);
    });
    renderer.render(scene, camera);
    if (space) {
      setCamera(worldCamera, input.camera);
      renderer.autoClear = false;
      renderer.clearDepth();
      renderer.render(world, worldCamera);
      renderer.autoClear = true;
    }
    // The viewport starts at the bottom left of the WebGL canvas.
    return { canvas, x: 0, y: canvas.height - height, width, height };
  }

  // input: { width, height, camera, background, layers, owner }. camera is a viewportCamera() or
  // shotCamera() setup, background is { media, revision, coverage } or null, and layers are the Sky
  // layers from back to front: { kind: "erp", id, media, revision, opacity } or
  // { kind: "sticker", id, media, revision, opacity, quaternion, rect }. Each may name its `source`
  // (see layerTexture). owner is optional.
  // With `space`, the view stands at camera.position (a spaceCamera(), pano_space.js) and draws the World
  // over the Sky, which stays at infinity: space is { grid, sceneUrls, scene, stickerUrls, sticker,
  // stickers, lines }. sceneUrls are the item URLs of the `scene` input; loaded items of other URLs are
  // dropped. grid is a gridSpec() or null. scene is null or { kind ("splat" or "mesh"), url, urls (every item of the input), prefetch
  // (urls to load ahead), transform ({ position, quaternion, scale }), itemQuaternion (the item's turn into
  // the `scene` frame) }. sticker is the same for the `sticker` input's 3D media with its opacity, and
  // stickerUrls its item URLs. stickers are world Sticker planes { id, media, revision, source, opacity,
  // position, quaternion, width, height, crop }, and lines are { segments: [[a, b], ...], color }. gizmo is
  // null or the selected world Sticker's gizmo { mode, transform } (addGizmo).
  // Returns the canvas and the rectangle of it that holds the frame, in drawImage coordinates.
  function render(input) {
    applyViewportCamera(camera, input.camera);
    return draw(panorama, input, input.space ?? null);
  }

  // The box of the loaded `scene` or 3D Sticker item at url in its own frame ({ min, max }; a SPLAT's in
  // 3DGS coordinates), or null while it loads.
  function sceneBox(url) {
    return sceneItems.box(url) ?? stickerItems.box(url);
  }

  // The World point of the content the last space render drew at (x, y) of a width x height view from
  // camera (a spaceCamera()), or null over empty space (raycastPoint).
  function pick(camera, x, y, width, height) {
    world.updateMatrixWorld();
    return raycastPoint(pickable, camera, x, y, width, height);
  }

  // The id of the world Sticker under (x, y) in the last space render (raycastStickerId), or null.
  function pickSticker(camera, x, y, width, height) {
    world.updateMatrixWorld();
    return raycastStickerId(pickable, camera, x, y, width, height);
  }

  // The pointer at (x, y) of a width x height view from camera (a spaceCamera()) on the gizmo of the last
  // space render. phase "hover" finds the handle under it and returns its axis (null over none), "down"
  // grabs that handle and returns whether it did, "move" drags it and returns the stand-in's transform
  // ({ position, quaternion, scale: [x, y, z] }) or null when nothing is grabbed, and "up" lets go.
  // Without a gizmo shown, every phase returns null.
  function gizmoPointer(phase, camera, x, y, width, height) {
    if (!gizmo || !gizmoShown) return null;
    const { controls, target } = gizmo;
    setCamera(worldCamera, camera);
    controls.getHelper().updateMatrixWorld(true);
    const { x: px, y: py } = devicePoint(x, y, width, height);
    if (phase === "hover") {
      controls.pointerHover({ x: px, y: py, button: -1 });
      return controls.axis;
    }
    if (phase === "down") {
      controls.pointerDown({ x: px, y: py, button: 0 });
      return controls.dragging;
    }
    if (phase === "move") {
      if (!controls.dragging) return null;
      controls.pointerMove({ x: px, y: py, button: -1 });
      return {
        position: target.position.toArray(),
        quaternion: { x: target.quaternion.x, y: target.quaternion.y, z: target.quaternion.z, w: target.quaternion.w },
        scale: target.scale.toArray(),
      };
    }
    controls.pointerUp({ x: px, y: py, button: 0 });
    return null;
  }

  // What pick() hits in the last space render, as a string that changes with it (a MoGe VIDEO's next
  // item, a moved Sticker).
  function contentKey() {
    return pickKey;
  }

  // input: render()'s input without camera; the frame is the layers laid out as an ERP.
  function renderUnwrap(input) {
    return draw(unwrap, input);
  }

  // Frees the textures of an owner that stops drawing; the canvas shrinks on the next render if
  // this owner was the largest.
  function release(owner) {
    owners.get(owner)?.textures.forEach((entry) => entry.texture.dispose());
    owners.delete(owner);
  }

  function dispose() {
    closed = true;
    sceneItems.close();
    stickerItems.close();
    if (guides) disposeObject(guides.group);
    lines.forEach((line) => disposeObject(line));
    // TransformControls.dispose() would unhook pointer listeners it never had (no DOM element here).
    gizmo?.controls.getHelper().dispose();
    worldStickers.forEach((mesh) => mesh.material.dispose());
    spark?.dispose();
    owners.forEach((entry) => entry.textures.forEach((item) => item.texture.dispose()));
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
    renderer.forceContextLoss();
  }

  return { render, renderUnwrap, sceneBox, pick, pickSticker, gizmoPointer, contentKey, release, dispose };
}
