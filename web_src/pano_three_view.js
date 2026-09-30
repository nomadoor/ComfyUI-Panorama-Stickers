// three.js view of the editor. Vite emits this module and three.js as a chunk in web/.lazy/, which
// ComfyUI does not load as an extension, and pano_editor_view.js imports it when an editor opens.
// Keep it free of modules the eager bundle also uses, so the chunk holds only three.js and this
// file instead of importing back from panorama_suite.js; pano_editor_view.js does the math.
//
// Every render rebuilds the scene from the given layers. Only GPU resources (meshes, materials and
// textures) are reused between renders; nothing here is saved.
import {
  BackSide,
  ClampToEdgeWrapping,
  CustomBlending,
  LinearFilter,
  Matrix3,
  Matrix4,
  Mesh,
  NoBlending,
  OneFactor,
  OneMinusSrcAlphaFactor,
  PerspectiveCamera,
  PlaneGeometry,
  Quaternion,
  RepeatWrapping,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Texture,
  Vector4,
  WebGLRenderer,
} from "three";

// MAX_RENDER_SIDE in pano_editor_view.js; the chunk cannot import it back from the eager bundle.
const MAX_RENDER_SIDE = 2048;
const DOME_RADIUS = 100;
const STICKER_DISTANCE = 50;

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
// renderer, so the blend below composites them the same way.
function createTexture(media, flipY) {
  const texture = new Texture(media);
  texture.premultiplyAlpha = true;
  texture.generateMipmaps = false;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapT = ClampToEdgeWrapping;
  texture.flipY = flipY;
  texture.needsUpdate = true;
  return texture;
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

export function createThreeView() {
  const canvas = document.createElement("canvas");
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: false,
    stencil: false,
  });
  renderer.setClearColor(0x000000, 0);
  const camera = new PerspectiveCamera(60, 1, 0.1, 100000);
  const scene = new Scene();
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

  // A 360 ERP wraps around horizontally; a 180 ERP and a Sticker clamp at their edges.
  function texture(owned, id, media, revision, wrapS, flipY) {
    const size = mediaSize(media);
    let entry = owned.get(id);
    if (entry && (entry.media !== media || entry.width !== size.width || entry.height !== size.height)) {
      entry.texture.dispose();
      entry = null;
    }
    if (!entry) {
      entry = { texture: createTexture(media, flipY), media, revision, ...size };
      owned.set(id, entry);
    } else if (entry.revision !== revision || entry.texture.wrapS !== wrapS) {
      entry.revision = revision;
      entry.texture.needsUpdate = true;
    }
    entry.texture.wrapS = wrapS;
    entry.used = true;
    return entry.texture;
  }

  function pooled(meshes, index, create) {
    if (!meshes[index]) meshes[index] = create();
    return meshes[index];
  }

  function addErp(owned, projection, mesh, layer, halfCoverage) {
    mesh.material.uniforms.map.value = texture(owned, layer.id, layer.media, layer.revision, halfCoverage ? ClampToEdgeWrapping : RepeatWrapping, false);
    mesh.material.uniforms.opacity.value = layer.opacity;
    projection.placeErp(mesh, halfCoverage);
    scene.add(mesh);
    return mesh;
  }

  function addSticker(owned, projection, mesh, layer) {
    mesh.material.uniforms.map.value = texture(owned, layer.id, layer.media, layer.revision, ClampToEdgeWrapping, true);
    mesh.material.uniforms.opacity.value = layer.opacity;
    projection.placeSticker(mesh, layer);
    scene.add(mesh);
    return mesh;
  }

  function hasSize(media) {
    const size = mediaSize(media);
    return size.width > 0 && size.height > 0;
  }

  function draw(projection, input) {
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
    if (background && hasSize(background.media)) {
      addErp(owned, projection, projection.background, { id: "background", opacity: 1, ...background }, background.coverage === 180);
    }
    let erpIndex = 0;
    let stickerIndex = 0;
    input.layers.forEach((layer, index) => {
      if (!hasSize(layer.media)) return;
      const mesh = layer.kind === "erp"
        ? addErp(owned, projection, pooled(projection.erp, erpIndex++, projection.createErp), layer, false)
        : addSticker(owned, projection, pooled(projection.sticker, stickerIndex++, projection.createSticker), layer);
      mesh.renderOrder = index + 1;
    });
    owned.forEach((item, id) => {
      if (item.used) return;
      item.texture.dispose();
      owned.delete(id);
    });
    renderer.render(scene, camera);
    // The viewport starts at the bottom left of the WebGL canvas.
    return { canvas, x: 0, y: canvas.height - height, width, height };
  }

  // input: { width, height, camera, background, layers, owner }. camera is a viewportCamera() or
  // shotCamera() setup, background is { media, revision, coverage } or null, and layers are the Sky
  // layers from back to front: { kind: "erp", id, media, revision, opacity } or
  // { kind: "sticker", id, media, revision, opacity, quaternion, rect }. owner is optional.
  // Returns the canvas and the rectangle of it that holds the frame, in drawImage coordinates.
  function render(input) {
    applyViewportCamera(camera, input.camera);
    return draw(panorama, input);
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

  return { render, renderUnwrap, release, dispose };
}
