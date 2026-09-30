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
  Mesh,
  NoBlending,
  OneFactor,
  OneMinusSrcAlphaFactor,
  PerspectiveCamera,
  PlaneGeometry,
  RepeatWrapping,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Texture,
  WebGLRenderer,
} from "three";

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
  // The background replaces what is below it like the previous renderer; the other layers blend.
  const backgroundMesh = createErpMesh(domeGeometry, NoBlending);
  const erpMeshes = [];
  const stickerMeshes = [];
  const textures = new Map();

  // A 360 ERP wraps around horizontally; a 180 ERP and a Sticker clamp at their edges.
  function texture(id, media, revision, wrapS, flipY) {
    const size = mediaSize(media);
    let entry = textures.get(id);
    if (entry && (entry.media !== media || entry.width !== size.width || entry.height !== size.height)) {
      entry.texture.dispose();
      entry = null;
    }
    if (!entry) {
      entry = { texture: createTexture(media, flipY), media, revision, ...size };
      textures.set(id, entry);
    } else if (entry.revision !== revision || entry.texture.wrapS !== wrapS) {
      entry.revision = revision;
      entry.texture.needsUpdate = true;
    }
    entry.texture.wrapS = wrapS;
    entry.used = true;
    return entry.texture;
  }

  function erpMesh(index) {
    if (!erpMeshes[index]) erpMeshes[index] = createErpMesh(domeGeometry, CustomBlending);
    return erpMeshes[index];
  }

  function stickerMesh(index) {
    if (!stickerMeshes[index]) {
      stickerMeshes[index] = new Mesh(planeGeometry, createMaterial(STICKER_VERTEX, STICKER_FRAGMENT, {}));
    }
    return stickerMeshes[index];
  }

  function addErp(mesh, layer, halfCoverage) {
    mesh.material.uniforms.map.value = texture(layer.id, layer.media, layer.revision, halfCoverage ? ClampToEdgeWrapping : RepeatWrapping, false);
    mesh.material.uniforms.opacity.value = layer.opacity;
    mesh.material.uniforms.halfCoverage.value = halfCoverage;
    scene.add(mesh);
    return mesh;
  }

  function addSticker(layer, stickerIndex) {
    const mesh = stickerMesh(stickerIndex);
    mesh.material.uniforms.map.value = texture(layer.id, layer.media, layer.revision, ClampToEdgeWrapping, true);
    mesh.material.uniforms.opacity.value = layer.opacity;
    placeSticker(mesh, layer);
    scene.add(mesh);
    return mesh;
  }

  function hasSize(media) {
    const size = mediaSize(media);
    return size.width > 0 && size.height > 0;
  }

  // input: { width, height, camera, background, layers }. camera is a viewportCamera() setup,
  // background is { media, revision, coverage } or null, and layers are the Sky layers from back to
  // front: { kind: "erp", id, media, revision, opacity } or
  // { kind: "sticker", id, media, revision, opacity, quaternion, rect }.
  function render(input) {
    const scale = Math.min(1, MAX_RENDER_SIDE / Math.max(input.width, input.height));
    const width = Math.max(1, Math.round(input.width * scale));
    const height = Math.max(1, Math.round(input.height * scale));
    if (canvas.width !== width || canvas.height !== height) renderer.setSize(width, height, false);
    applyViewportCamera(camera, input.camera);
    scene.clear();
    textures.forEach((entry) => { entry.used = false; });
    const background = input.background;
    if (background && hasSize(background.media)) {
      addErp(backgroundMesh, { id: "background", opacity: 1, ...background }, background.coverage === 180);
    }
    let erpIndex = 0;
    let stickerIndex = 0;
    input.layers.forEach((layer, index) => {
      if (!hasSize(layer.media)) return;
      const mesh = layer.kind === "erp"
        ? addErp(erpMesh(erpIndex++), layer, false)
        : addSticker(layer, stickerIndex++);
      mesh.renderOrder = index + 1;
    });
    textures.forEach((entry, id) => {
      if (entry.used) return;
      entry.texture.dispose();
      textures.delete(id);
    });
    renderer.render(scene, camera);
    return canvas;
  }

  function dispose() {
    textures.forEach((entry) => entry.texture.dispose());
    textures.clear();
    [backgroundMesh, ...erpMeshes, ...stickerMeshes].forEach((mesh) => mesh.material.dispose());
    domeGeometry.dispose();
    planeGeometry.dispose();
    renderer.dispose();
    // Release the WebGL context now instead of when the canvas is collected, so reopening the
    // editor does not pile up contexts.
    renderer.forceContextLoss();
  }

  return { render, dispose };
}
