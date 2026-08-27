const DEG2RAD = Math.PI / 180;
const TWO_PI = Math.PI * 2.0;
const MAX_RENDER_SIDE = 2048;

function panoGlDebugEnabled() {
  try {
    if (window?.__PANO_GL_DEBUG__ === true) return true;
    return String(window?.localStorage?.getItem("panoGlDebug") || "").trim() === "1";
  } catch {
    return false;
  }
}

function describeTextureSource(source) {
  if (!source) return { kind: "null" };
  const ctor = String(source?.constructor?.name || typeof source);
  return {
    kind: ctor,
    width: Number(source?.width || source?.videoWidth || source?.naturalWidth || 0),
    height: Number(source?.height || source?.videoHeight || source?.naturalHeight || 0),
    naturalWidth: Number(source?.naturalWidth || 0),
    naturalHeight: Number(source?.naturalHeight || 0),
    videoWidth: Number(source?.videoWidth || 0),
    videoHeight: Number(source?.videoHeight || 0),
    complete: source?.complete ?? null,
    isConnected: source?.isConnected ?? null,
    src: String(source?.currentSrc || source?.src || ""),
  };
}

function logTextureUploadIssue(which, phase, source, extra = {}) {
  void which;
  void phase;
  void source;
  void extra;
  return;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function vec3(x, y, z) {
  return { x, y, z };
}

function add(a, b) {
  return vec3(a.x + b.x, a.y + b.y, a.z + b.z);
}

function mul(a, s) {
  return vec3(a.x * s, a.y * s, a.z * s);
}

function dot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function cross(a, b) {
  return vec3(
    a.y * b.z - a.z * b.y,
    a.z * b.x - a.x * b.z,
    a.x * b.y - a.y * b.x,
  );
}

function norm(a) {
  const len = Math.hypot(a.x, a.y, a.z) || 1e-8;
  return vec3(a.x / len, a.y / len, a.z / len);
}

function yawPitchToDir(yawDeg, pitchDeg) {
  const yaw = Number(yawDeg || 0) * DEG2RAD;
  const pitch = Number(pitchDeg || 0) * DEG2RAD;
  const cp = Math.cos(pitch);
  return vec3(cp * Math.sin(yaw), Math.sin(pitch), cp * Math.cos(yaw));
}

function cameraBasis(yawDeg, pitchDeg, rollDeg = 0) {
  const fwd = yawPitchToDir(yawDeg, pitchDeg);
  let worldUp = vec3(0, 1, 0);
  if (Math.abs(dot(fwd, worldUp)) > 0.999) worldUp = vec3(0, 0, 1);
  let right = norm(cross(worldUp, fwd));
  let up = norm(cross(fwd, right));
  const rr = Number(rollDeg || 0) * DEG2RAD;
  const cr = Math.cos(rr);
  const sr = Math.sin(rr);
  const r2 = add(mul(right, cr), mul(up, sr));
  const u2 = add(mul(right, -sr), mul(up, cr));
  right = norm(r2);
  up = norm(u2);
  return { fwd, right, up };
}

function lonLatToDir(u, v) {
  const lon = (Number(u || 0) - 0.5) * TWO_PI;
  const lat = (0.5 - Number(v || 0)) * Math.PI;
  const cp = Math.cos(lat);
  return vec3(cp * Math.sin(lon), Math.sin(lat), cp * Math.cos(lon));
}

function deriveViewport(width, height, dpr = 1) {
  const srcWidth = Math.max(1, Math.round(Number(width || 1)));
  const srcHeight = Math.max(1, Math.round(Number(height || 1)));
  const sourceDpr = Math.max(1, Number(dpr || 1));
  const maxSide = Math.max(512, MAX_RENDER_SIDE);
  const scale = Math.min(1, maxSide / Math.max(srcWidth, srcHeight));
  return {
    sourceWidth: srcWidth,
    sourceHeight: srcHeight,
    sourceDpr,
    renderScale: scale,
    width: Math.max(1, Math.round(srcWidth * scale)),
    height: Math.max(1, Math.round(srcHeight * scale)),
  };
}

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader) || "shader compile failed";
    gl.deleteShader(shader);
    throw new Error(log);
  }
  return shader;
}

function createProgram(gl, vertexSource, fragmentSource) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
  let fragmentShader;
  try {
    fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  } catch (e) {
    gl.deleteShader(vertexShader);
    throw e;
  }
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program) || "program link failed";
    gl.deleteProgram(program);
    throw new Error(log);
  }
  return program;
}

const QUAD_VERTEX_SHADER = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`;

const BACKGROUND_FRAGMENT_SHADER = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_background;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
uniform vec2 u_viewport;
uniform float u_opacity;
uniform int u_coverage;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 rotateCameraForward(float yaw, float pitch) {
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  return vec3(cp * sy, sp, cp * cy);
}

mat3 cameraBasis(float yaw, float pitch, float roll) {
  vec3 fwd = normalize(rotateCameraForward(yaw, pitch));
  vec3 worldUp = vec3(0.0, 1.0, 0.0);
  if (abs(dot(fwd, worldUp)) > 0.999) worldUp = vec3(0.0, 0.0, 1.0);
  vec3 right = normalize(cross(worldUp, fwd));
  vec3 up = normalize(cross(fwd, right));
  float cr = cos(roll);
  float sr = sin(roll);
  vec3 r2 = normalize(right * cr + up * sr);
  vec3 u2 = normalize(right * (-sr) + up * cr);
  return mat3(r2, u2, fwd);
}

vec2 unwrapUv() {
  return vec2(v_uv.x, clamp(v_uv.y, 0.0, 1.0));
}

vec2 projectCameraUv(float yaw, float pitch, float roll, float hfov, float vfov) {
  mat3 basis = cameraBasis(yaw, pitch, roll);
  float nx = (v_uv.x * 2.0 - 1.0) * tan(hfov * 0.5);
  float ny = (1.0 - v_uv.y * 2.0) * tan(vfov * 0.5);
  vec3 dir = normalize(basis[2] + basis[0] * nx + basis[1] * ny);
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  if (u_coverage == 180) {
    if (abs(lon) > PI * 0.5) return vec2(-1.0, -1.0);
    float localU = clamp(lon / PI + 0.5, 0.0, 1.0);
    return vec2(localU, clamp(0.5 - lat / PI, 0.0, 1.0));
  }
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 sampleUv = unwrapUv();
  bool bgVisible = true;
  if (u_mode == 1 || u_mode == 2) {
    sampleUv = projectCameraUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  if (sampleUv.x < 0.0 || sampleUv.y < 0.0) {
    bgVisible = false;
    sampleUv = vec2(0.5, 0.5);
  }
  vec4 bg = bgVisible ? texture(u_background, sampleUv) : vec4(0.0);

  float bgAlpha = clamp(bg.a * u_opacity, 0.0, 1.0);
  vec3 premul = bg.rgb * u_opacity;
  float alpha = bgAlpha;
  outColor = vec4(premul, alpha);
}`;

const LAYER_FRAGMENT_SHADER = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_paint;
uniform sampler2D u_mask;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
uniform float u_paintOpacity;
uniform float u_maskOpacity;
uniform int u_hasPaint;
uniform int u_hasMask;
uniform int u_showMaskTint;
uniform vec3 u_maskTint;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 rotateCameraForward(float yaw, float pitch) {
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  return vec3(cp * sy, sp, cp * cy);
}

mat3 cameraBasis(float yaw, float pitch, float roll) {
  vec3 fwd = normalize(rotateCameraForward(yaw, pitch));
  vec3 worldUp = vec3(0.0, 1.0, 0.0);
  if (abs(dot(fwd, worldUp)) > 0.999) worldUp = vec3(0.0, 0.0, 1.0);
  vec3 right = normalize(cross(worldUp, fwd));
  vec3 up = normalize(cross(fwd, right));
  float cr = cos(roll);
  float sr = sin(roll);
  vec3 r2 = normalize(right * cr + up * sr);
  vec3 u2 = normalize(right * (-sr) + up * cr);
  return mat3(r2, u2, fwd);
}

vec2 unwrapUv() {
  return vec2(v_uv.x, clamp(v_uv.y, 0.0, 1.0));
}

vec2 projectLayerUv(float yaw, float pitch, float roll, float hfov, float vfov) {
  mat3 basis = cameraBasis(yaw, pitch, roll);
  float nx = (v_uv.x * 2.0 - 1.0) * tan(hfov * 0.5);
  float ny = (1.0 - v_uv.y * 2.0) * tan(vfov * 0.5);
  vec3 dir = normalize(basis[2] + basis[0] * nx + basis[1] * ny);
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 layerUv = unwrapUv();
  if (u_mode == 1 || u_mode == 2) {
    layerUv = projectLayerUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  vec4 paint = u_hasPaint == 1 ? texture(u_paint, layerUv) : vec4(0.0);
  vec4 mask = u_hasMask == 1 ? texture(u_mask, layerUv) : vec4(0.0);
  vec3 premul = vec3(0.0);
  float alpha = 0.0;
  if (u_hasPaint == 1) {
    float paintAlpha = clamp(paint.a * u_paintOpacity, 0.0, 1.0);
    premul = paint.rgb * u_paintOpacity + premul * (1.0 - paintAlpha);
    alpha = paintAlpha + alpha * (1.0 - paintAlpha);
  }
  if (u_hasMask == 1 && u_showMaskTint == 1) {
    float maskAlpha = clamp(mask.a * u_maskOpacity, 0.0, 1.0);
    premul = u_maskTint * maskAlpha + premul * (1.0 - maskAlpha);
    alpha = maskAlpha + alpha * (1.0 - maskAlpha);
  }
  outColor = vec4(premul, alpha);
}`;

const STICKER_FRAGMENT_SHADER = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_texture;
uniform int u_mode;

uniform vec3 u_viewRight;
uniform vec3 u_viewUp;
uniform vec3 u_viewFwd;
uniform float u_viewHfov;
uniform float u_viewVfov;

uniform vec3 u_stickerRight;
uniform vec3 u_stickerUp;
uniform vec3 u_stickerFwd;
uniform float u_stickerTanX;
uniform float u_stickerTanY;
uniform vec4 u_crop;
uniform float u_opacity;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 dirFromUnwrapUv(vec2 uv) {
  float lon = (uv.x - 0.5) * TWO_PI;
  float lat = (0.5 - uv.y) * PI;
  float cp = cos(lat);
  return vec3(cp * sin(lon), sin(lat), cp * cos(lon));
}

vec3 dirFromProjectedView(vec2 uv) {
  float nx = (uv.x * 2.0 - 1.0) * tan(u_viewHfov * 0.5);
  float ny = (1.0 - uv.y * 2.0) * tan(u_viewVfov * 0.5);
  return normalize(u_viewFwd + u_viewRight * nx + u_viewUp * ny);
}

void main() {
  vec3 dir = (u_mode == 0) ? dirFromUnwrapUv(v_uv) : dirFromProjectedView(v_uv);
  float dz = dot(dir, u_stickerFwd);
  if (dz <= 1e-5) discard;

  float px = dot(dir, u_stickerRight) / dz;
  float py = dot(dir, u_stickerUp) / dz;
  float fullU = px / max(u_stickerTanX, 1e-6) * 0.5 + 0.5;
  float fullV = 0.5 - py / max(u_stickerTanY, 1e-6) * 0.5;

  if (fullU < u_crop.x || fullU > u_crop.z || fullV < u_crop.y || fullV > u_crop.w) discard;

  vec2 cropSize = max(u_crop.zw - u_crop.xy, vec2(1e-4));
  vec2 texUv = vec2((fullU - u_crop.x) / cropSize.x, (fullV - u_crop.y) / cropSize.y);
  vec4 texel = texture(u_texture, texUv);
  float alpha = clamp(texel.a * u_opacity, 0.0, 1.0);
  outColor = vec4(texel.rgb * u_opacity, alpha);
}`;

function getViewAngles(view, width, height) {
  if (!view || view.mode === "unwrap") return null;
  const hFovDeg = Number(view.mode === "cutout" ? view.hFovDeg || 90 : view.fovDeg || 100);
  const vFovDeg = Number(view.mode === "cutout"
    ? view.vFovDeg || 60
    : (2 * Math.atan(Math.tan(clamp(hFovDeg, 1, 179) * DEG2RAD * 0.5) * (height / Math.max(width, 1)))) / DEG2RAD);
  return {
    yawDeg: Number(view.yawDeg || 0),
    pitchDeg: Number(view.pitchDeg || 0),
    rollDeg: Number(view.mode === "cutout" ? view.rollDeg || 0 : 0),
    hFovDeg: clamp(hFovDeg, 1, 179),
    vFovDeg: clamp(vFovDeg, 0.1, 179),
  };
}

function buildStickerBasis(sticker) {
  const basis = cameraBasis(
    Number(sticker.yawDeg || 0),
    Number(sticker.pitchDeg || 0),
    Number(sticker.rollDeg || 0),
  );
  return {
    right: basis.right,
    up: basis.up,
    fwd: basis.fwd,
    tanX: Math.tan(clamp(Number(sticker.hFovDeg || 30), 0.1, 179) * 0.5 * DEG2RAD),
    tanY: Math.tan(clamp(Number(sticker.vFovDeg || 30), 0.1, 179) * 0.5 * DEG2RAD),
    crop: sticker.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: clamp(Number(sticker.opacity ?? 1), 0, 1),
  };
}

export function createPanoGlRenderer(options = {}) {
  const surface = options?.targetCanvas || document.createElement("canvas");
  let gl = null;
  let backgroundProgram = null;
  let layerProgram = null;
  let stickerProgram = null;
  let quadBuffer = null;
  let backgroundTexture = null;
  let paintTexture = null;
  let maskTexture = null;
  let backgroundRevision = null;
  let paintRevision = null;
  let maskRevision = null;
  let initialized = false;
  let viewport = deriveViewport(1, 1, 1);
  let backgroundUniforms = null;
  let layerUniforms = null;
  let stickerUniforms = null;
  let uploadScratchCanvas = null;
  let uploadScratchCtx = null;
  const stickerTextureRegistry = new Map();
  let currentState = {
    objectPass: { objects: [], selectedId: null, hoveredId: null },
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: false,
    coverageDeg: 360,
  };
  let textureMeta = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 },
  };
  let layerDrawFlags = {
    paint: false,
    mask: false,
  };

  function createLayerTexture(wrapS = null, wrapT = null) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS ?? gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT ?? gl.CLAMP_TO_EDGE);
    return texture;
  }

  function init() {
    if (initialized) return true;
    try {
      gl = surface.getContext("webgl2", {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
      });
      if (!gl) return false;
      backgroundProgram = createProgram(gl, QUAD_VERTEX_SHADER, BACKGROUND_FRAGMENT_SHADER);
      layerProgram = createProgram(gl, QUAD_VERTEX_SHADER, LAYER_FRAGMENT_SHADER);
      stickerProgram = createProgram(gl, QUAD_VERTEX_SHADER, STICKER_FRAGMENT_SHADER);
      backgroundUniforms = {
        mode: gl.getUniformLocation(backgroundProgram, "u_mode"),
        yaw: gl.getUniformLocation(backgroundProgram, "u_yaw"),
        pitch: gl.getUniformLocation(backgroundProgram, "u_pitch"),
        roll: gl.getUniformLocation(backgroundProgram, "u_roll"),
        hFov: gl.getUniformLocation(backgroundProgram, "u_hfov"),
        vFov: gl.getUniformLocation(backgroundProgram, "u_vfov"),
        viewport: gl.getUniformLocation(backgroundProgram, "u_viewport"),
        opacity: gl.getUniformLocation(backgroundProgram, "u_opacity"),
        coverage: gl.getUniformLocation(backgroundProgram, "u_coverage"),
        background: gl.getUniformLocation(backgroundProgram, "u_background"),
      };
      layerUniforms = {
        mode: gl.getUniformLocation(layerProgram, "u_mode"),
        yaw: gl.getUniformLocation(layerProgram, "u_yaw"),
        pitch: gl.getUniformLocation(layerProgram, "u_pitch"),
        roll: gl.getUniformLocation(layerProgram, "u_roll"),
        hFov: gl.getUniformLocation(layerProgram, "u_hfov"),
        vFov: gl.getUniformLocation(layerProgram, "u_vfov"),
        paintOpacity: gl.getUniformLocation(layerProgram, "u_paintOpacity"),
        maskOpacity: gl.getUniformLocation(layerProgram, "u_maskOpacity"),
        hasPaint: gl.getUniformLocation(layerProgram, "u_hasPaint"),
        hasMask: gl.getUniformLocation(layerProgram, "u_hasMask"),
        showMaskTint: gl.getUniformLocation(layerProgram, "u_showMaskTint"),
        maskTint: gl.getUniformLocation(layerProgram, "u_maskTint"),
        paint: gl.getUniformLocation(layerProgram, "u_paint"),
        mask: gl.getUniformLocation(layerProgram, "u_mask"),
      };
      stickerUniforms = {
        texture: gl.getUniformLocation(stickerProgram, "u_texture"),
        mode: gl.getUniformLocation(stickerProgram, "u_mode"),
        viewRight: gl.getUniformLocation(stickerProgram, "u_viewRight"),
        viewUp: gl.getUniformLocation(stickerProgram, "u_viewUp"),
        viewFwd: gl.getUniformLocation(stickerProgram, "u_viewFwd"),
        viewHfov: gl.getUniformLocation(stickerProgram, "u_viewHfov"),
        viewVfov: gl.getUniformLocation(stickerProgram, "u_viewVfov"),
        stickerRight: gl.getUniformLocation(stickerProgram, "u_stickerRight"),
        stickerUp: gl.getUniformLocation(stickerProgram, "u_stickerUp"),
        stickerFwd: gl.getUniformLocation(stickerProgram, "u_stickerFwd"),
        stickerTanX: gl.getUniformLocation(stickerProgram, "u_stickerTanX"),
        stickerTanY: gl.getUniformLocation(stickerProgram, "u_stickerTanY"),
        crop: gl.getUniformLocation(stickerProgram, "u_crop"),
        opacity: gl.getUniformLocation(stickerProgram, "u_opacity"),
      };
      quadBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]), gl.STATIC_DRAW);
      backgroundTexture = createLayerTexture(gl.REPEAT, gl.CLAMP_TO_EDGE);
      paintTexture = createLayerTexture(gl.REPEAT, gl.CLAMP_TO_EDGE);
      maskTexture = createLayerTexture(gl.REPEAT, gl.CLAMP_TO_EDGE);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      initialized = true;
      return true;
    } catch {
      return false;
    }
  }

  function dispose() {
    if (!gl) return;
    try {
      if (quadBuffer) gl.deleteBuffer(quadBuffer);
      if (backgroundTexture) gl.deleteTexture(backgroundTexture);
      if (paintTexture) gl.deleteTexture(paintTexture);
      if (maskTexture) gl.deleteTexture(maskTexture);
      stickerTextureRegistry.forEach((entry) => {
        disposeStickerTextureEntry(entry);
      });
      if (backgroundProgram) gl.deleteProgram(backgroundProgram);
      if (layerProgram) gl.deleteProgram(layerProgram);
      if (stickerProgram) gl.deleteProgram(stickerProgram);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      // best effort
    }
    gl = null;
    backgroundProgram = null;
    layerProgram = null;
    stickerProgram = null;
    quadBuffer = null;
    backgroundTexture = null;
    paintTexture = null;
    maskTexture = null;
    stickerTextureRegistry.clear();
    backgroundRevision = null;
    paintRevision = null;
    maskRevision = null;
    textureMeta = {
      background: { width: 0, height: 0 },
      paint: { width: 0, height: 0 },
      mask: { width: 0, height: 0 },
    };
    layerDrawFlags = {
      paint: false,
      mask: false,
    };
    uploadScratchCanvas = null;
    uploadScratchCtx = null;
    initialized = false;
  }

  function setViewport(width, height, dpr = 1) {
    viewport = deriveViewport(width, height, dpr);
    if (surface.width !== viewport.width || surface.height !== viewport.height) {
      surface.width = viewport.width;
      surface.height = viewport.height;
    }
  }

  function clearLayerState(which) {
    if (which === "background") backgroundRevision = null;
    else if (which === "paint") paintRevision = null;
    else maskRevision = null;
    if (textureMeta[which]) {
      textureMeta[which].width = 0;
      textureMeta[which].height = 0;
    }
  }

  function clearLayerDrawFlags() {
    layerDrawFlags.paint = false;
    layerDrawFlags.mask = false;
  }

  function setActiveLayerDrawFlag(which) {
    clearLayerDrawFlags();
    if (which === "paint") layerDrawFlags.paint = true;
    else if (which === "mask") layerDrawFlags.mask = true;
  }

  function uploadPartialTexture(texture, source, rects = [], meta = { width: 0, height: 0 }, premultiplyAlpha = false) {
    if (!gl || !texture || !source) return false;
    const sourceWidth = Number(source.width || source.videoWidth || source.naturalWidth || 0);
    const sourceHeight = Number(source.height || source.videoHeight || source.naturalHeight || 0);
    // Partial uploads rely on a real decoded source region; keep 1x1 placeholders out of this path.
    if (!(sourceWidth > 1) || !(sourceHeight > 1)) return false;
    const validRects = Array.isArray(rects) ? rects.filter((rect) => rect && rect.w > 0 && rect.h > 0) : [];
    if (!validRects.length) return false;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, premultiplyAlpha ? 1 : 0);
    if (meta.width !== sourceWidth || meta.height !== sourceHeight) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      meta.width = sourceWidth;
      meta.height = sourceHeight;
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
      return true;
    }
    if (!uploadScratchCanvas) {
      uploadScratchCanvas = document.createElement("canvas");
      uploadScratchCtx = uploadScratchCanvas.getContext("2d");
    }
    if (!uploadScratchCtx) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
      return true;
    }
    for (const rect of validRects) {
      const rx = Math.max(0, Math.floor(Number(rect.x || 0)));
      const ry = Math.max(0, Math.floor(Number(rect.y || 0)));
      const rw = Math.min(sourceWidth - rx, Math.ceil(Number(rect.w || 0)));
      const rh = Math.min(sourceHeight - ry, Math.ceil(Number(rect.h || 0)));
      if (rw <= 0 || rh <= 0) continue;
      if (uploadScratchCanvas.width !== rw || uploadScratchCanvas.height !== rh) {
        uploadScratchCanvas.width = rw;
        uploadScratchCanvas.height = rh;
        uploadScratchCtx = uploadScratchCanvas.getContext("2d");
        if (!uploadScratchCtx) {
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
          gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
          return true;
        }
      } else {
        uploadScratchCtx.clearRect(0, 0, rw, rh);
      }
      uploadScratchCtx.drawImage(source, rx, ry, rw, rh, 0, 0, rw, rh);
      gl.texSubImage2D(gl.TEXTURE_2D, 0, rx, ry, gl.RGBA, gl.UNSIGNED_BYTE, uploadScratchCanvas);
    }
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
    return true;
  }

  function setLayerTexture(which, texture, source, revision, dirtyRects = null, premultiplyAlpha = false) {
    if (!init()) return false;
    if (!source) {
      clearLayerState(which);
      return false;
    }
    const nextRevision = String(revision ?? "");
    const prevRevision = which === "background" ? backgroundRevision : (which === "paint" ? paintRevision : maskRevision);
    const meta = textureMeta[which];
    const sourceWidth = Number(source.width || source.videoWidth || source.naturalWidth || 0);
    const sourceHeight = Number(source.height || source.videoHeight || source.naturalHeight || 0);
    const sizeChanged = meta.width !== sourceWidth || meta.height !== sourceHeight;
    if (prevRevision === nextRevision && !sizeChanged && !(Array.isArray(dirtyRects) && dirtyRects.length)) return true;
    if (!(sourceWidth > 0) || !(sourceHeight > 0)) {
      logTextureUploadIssue(which, "skip-invalid-size", source, { revision: nextRevision, sourceWidth, sourceHeight });
      clearLayerState(which);
      return false;
    }
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, premultiplyAlpha ? 1 : 0);
    const didPartial = Array.isArray(dirtyRects) && dirtyRects.length
      ? uploadPartialTexture(texture, source, dirtyRects, meta, premultiplyAlpha)
      : false;
    if (!didPartial) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      const glError = gl.getError();
      if (glError !== gl.NO_ERROR) {
        logTextureUploadIssue(which, "texImage2D-error", source, {
          revision: nextRevision,
          sourceWidth,
          sourceHeight,
          glError,
        });
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
        clearLayerState(which);
        return false;
      }
      meta.width = sourceWidth;
      meta.height = sourceHeight;
    }
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
    if (which === "background") backgroundRevision = nextRevision;
    else if (which === "paint") paintRevision = nextRevision;
    else maskRevision = nextRevision;
    return true;
  }

  function setBackgroundErp(source, revision) {
    return setLayerTexture("background", backgroundTexture, source, revision, null, true);
  }

  function setPaintErp(source, revision, dirtyRects = null) {
    return setLayerTexture("paint", paintTexture, source, revision, dirtyRects, true);
  }

  function setMaskErp(source, revision, dirtyRects = null) {
    return setLayerTexture("mask", maskTexture, source, revision, dirtyRects, true);
  }

  function disposeStickerTextureEntry(entry) {
    if (entry?.texture && gl) gl.deleteTexture(entry.texture);
  }

  function pruneStickerTextures(validAssetIds = new Set()) {
    stickerTextureRegistry.forEach((entry, assetId) => {
      if (validAssetIds.has(assetId)) return;
      disposeStickerTextureEntry(entry);
      stickerTextureRegistry.delete(assetId);
    });
  }

  function ensureStickerTexture(input) {
    if (!gl || !input?.assetId || !input?.source) return null;
    const assetId = String(input.assetId);
    const revision = String(input.revision ?? "");
    const source = input.source;
    const width = Number(source.width || source.naturalWidth || source.videoWidth || 0);
    const height = Number(source.height || source.naturalHeight || source.videoHeight || 0);
    if (width <= 0 || height <= 0) return null;
    let entry = stickerTextureRegistry.get(assetId);
    if (!entry) {
      entry = {
        texture: createLayerTexture(gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE),
        revision: "",
        width: 0,
        height: 0,
      };
      stickerTextureRegistry.set(assetId, entry);
    }
    if (entry.revision !== revision || entry.width !== width || entry.height !== height) {
      gl.bindTexture(gl.TEXTURE_2D, entry.texture);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      const glError = gl.getError();
      if (glError !== gl.NO_ERROR) {
        logTextureUploadIssue(`sticker:${assetId}`, "texImage2D-error", source, {
          revision,
          width,
          height,
          glError,
        });
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
        return null;
      }
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
      entry.revision = revision;
      entry.width = width;
      entry.height = height;
    }
    return entry.texture;
  }

  function syncStickerTextures(textures = []) {
    if (!init()) return false;
    const validAssetIds = new Set();
    textures.forEach((input) => {
      if (!input?.assetId || !input?.source) return;
      validAssetIds.add(String(input.assetId));
      ensureStickerTexture(input);
    });
    pruneStickerTextures(validAssetIds);
    return true;
  }

  function setupFrame() {
    if (!init()) return false;
    gl.viewport(0, 0, surface.width, surface.height);
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    return true;
  }

  function bindQuad(program) {
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  }

  function drawBackground(view, params = {}) {
    if (!backgroundRevision) return null;
    gl.disable(gl.BLEND);
    bindQuad(backgroundProgram);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, backgroundTexture);
    gl.uniform1i(backgroundUniforms.background, 0);
    gl.uniform2f(backgroundUniforms.viewport, Math.max(1, viewport.width), Math.max(1, viewport.height));
    gl.uniform1i(backgroundUniforms.mode, view?.mode === "unwrap" ? 0 : (view?.mode === "cutout" ? 2 : 1));
    const angles = getViewAngles(view, viewport.width, viewport.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90,
    };
    gl.uniform1f(backgroundUniforms.yaw, Number(angles.yawDeg || 0) * DEG2RAD);
    gl.uniform1f(backgroundUniforms.pitch, Number(angles.pitchDeg || 0) * DEG2RAD);
    gl.uniform1f(backgroundUniforms.roll, Number(angles.rollDeg || 0) * DEG2RAD);
    gl.uniform1f(backgroundUniforms.hFov, clamp(Number(angles.hFovDeg || 90), 0.1, 179) * DEG2RAD);
    gl.uniform1f(backgroundUniforms.vFov, clamp(Number(angles.vFovDeg || 60), 0.1, 179) * DEG2RAD);
    gl.uniform1f(backgroundUniforms.opacity, clamp(Number(params.backgroundOpacity ?? 1), 0, 1));
    const coverageDeg = Number(view?.coverageDeg || params?.coverageDeg || 360) === 180 ? 180 : 360;
    gl.uniform1i(backgroundUniforms.coverage, coverageDeg);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    return surface;
  }

  function drawLayers(view, params = {}) {
    const hasPaint = layerDrawFlags.paint && paintRevision != null;
    const hasMask = layerDrawFlags.mask && maskRevision != null;
    if (!hasPaint && !hasMask) return null;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    bindQuad(layerProgram);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, paintTexture);
    gl.uniform1i(layerUniforms.paint, 0);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, maskTexture);
    gl.uniform1i(layerUniforms.mask, 1);
    gl.uniform1i(layerUniforms.mode, view?.mode === "unwrap" ? 0 : (view?.mode === "cutout" ? 2 : 1));
    const angles = getViewAngles(view, viewport.width, viewport.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90,
    };
    gl.uniform1f(layerUniforms.yaw, Number(angles.yawDeg || 0) * DEG2RAD);
    gl.uniform1f(layerUniforms.pitch, Number(angles.pitchDeg || 0) * DEG2RAD);
    gl.uniform1f(layerUniforms.roll, Number(angles.rollDeg || 0) * DEG2RAD);
    gl.uniform1f(layerUniforms.hFov, clamp(Number(angles.hFovDeg || 90), 0.1, 179) * DEG2RAD);
    gl.uniform1f(layerUniforms.vFov, clamp(Number(angles.vFovDeg || 60), 0.1, 179) * DEG2RAD);
    gl.uniform1f(layerUniforms.paintOpacity, clamp(Number(params.paintOpacity ?? 1), 0, 1));
    gl.uniform1f(layerUniforms.maskOpacity, clamp(Number(params.maskOpacity ?? 0.55), 0, 1));
    gl.uniform1i(layerUniforms.hasPaint, hasPaint ? 1 : 0);
    gl.uniform1i(layerUniforms.hasMask, hasMask ? 1 : 0);
    gl.uniform1i(layerUniforms.showMaskTint, params.showMaskTint === false ? 0 : 1);
    gl.uniform3f(layerUniforms.maskTint, 34 / 255, 197 / 255, 94 / 255);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.disable(gl.BLEND);
    return surface;
  }

  function drawStickerScene(scene, textures, view) {
    if (!scene?.stickers?.length || !textures?.length) return;
    const mode = view?.mode === "unwrap" ? 0 : (view?.mode === "cutout" ? 2 : 1);
    const viewAngles = getViewAngles(view, viewport.width, viewport.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90,
    };
    const viewBasis = cameraBasis(viewAngles.yawDeg, viewAngles.pitchDeg, viewAngles.rollDeg);
    const textureMap = new Map();
    textures.forEach((input) => {
      const texture = ensureStickerTexture(input);
      if (texture) textureMap.set(String(input.assetId || ""), texture);
    });
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    bindQuad(stickerProgram);
    gl.uniform1i(stickerUniforms.texture, 0);
    gl.uniform1i(stickerUniforms.mode, mode);
    gl.uniform3f(stickerUniforms.viewRight, viewBasis.right.x, viewBasis.right.y, viewBasis.right.z);
    gl.uniform3f(stickerUniforms.viewUp, viewBasis.up.x, viewBasis.up.y, viewBasis.up.z);
    gl.uniform3f(stickerUniforms.viewFwd, viewBasis.fwd.x, viewBasis.fwd.y, viewBasis.fwd.z);
    gl.uniform1f(stickerUniforms.viewHfov, clamp(Number(viewAngles.hFovDeg || 90), 0.1, 179) * DEG2RAD);
    gl.uniform1f(stickerUniforms.viewVfov, clamp(Number(viewAngles.vFovDeg || 60), 0.1, 179) * DEG2RAD);

    const stickers = [...scene.stickers].sort((a, b) => Number(a?.zIndex || 0) - Number(b?.zIndex || 0));
    stickers.forEach((sticker) => {
      const texture = textureMap.get(String(sticker?.assetId || ""));
      if (!texture) return;
      const basis = buildStickerBasis(sticker);
      const crop = basis.crop;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform3f(stickerUniforms.stickerRight, basis.right.x, basis.right.y, basis.right.z);
      gl.uniform3f(stickerUniforms.stickerUp, basis.up.x, basis.up.y, basis.up.z);
      gl.uniform3f(stickerUniforms.stickerFwd, basis.fwd.x, basis.fwd.y, basis.fwd.z);
      gl.uniform1f(stickerUniforms.stickerTanX, Math.max(1e-6, basis.tanX));
      gl.uniform1f(stickerUniforms.stickerTanY, Math.max(1e-6, basis.tanY));
      gl.uniform4f(
        stickerUniforms.crop,
        clamp(Number(crop.x0 ?? 0), 0, 1),
        clamp(Number(crop.y0 ?? 0), 0, 1),
        clamp(Number(crop.x1 ?? 1), 0, 1),
        clamp(Number(crop.y1 ?? 1), 0, 1),
      );
      gl.uniform1f(stickerUniforms.opacity, basis.opacity);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    });
    gl.disable(gl.BLEND);
  }

  function drawObjectPass(objectPass, view) {
    const objects = Array.isArray(objectPass?.objects) ? objectPass.objects : [];
    if (!objects.length) {
      clearLayerDrawFlags();
      pruneStickerTextures(new Set());
      return;
    }
    const mode = view?.mode === "unwrap" ? 0 : (view?.mode === "cutout" ? 2 : 1);
    const viewAngles = getViewAngles(view, viewport.width, viewport.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90,
    };
    const viewBasis = cameraBasis(viewAngles.yawDeg, viewAngles.pitchDeg, viewAngles.rollDeg);
    const sorted = objects.slice().sort((a, b) => Number(a?.zIndex || 0) - Number(b?.zIndex || 0));
    const validStickerAssetIds = new Set();
    clearLayerDrawFlags();
    for (const object of sorted) {
      if (!object || object.visible === false) continue;
      if (object.type === "sticker") {
        const assetId = String(object?.params?.assetId || object?.id || "");
        if (!assetId) continue;
        validStickerAssetIds.add(assetId);
        const texture = ensureStickerTexture({
          assetId,
          source: object.source,
          revision: object.revision,
        });
        if (!texture) continue;
        const basis = buildStickerBasis({
          yawDeg: object?.transform?.yawDeg || 0,
          pitchDeg: object?.transform?.pitchDeg || 0,
          rollDeg: object?.transform?.rollDeg || 0,
          hFovDeg: object?.transform?.hFovDeg || 30,
          vFovDeg: object?.transform?.vFovDeg || 30,
          crop: object?.params?.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: object?.opacity ?? 1,
        });
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        bindQuad(stickerProgram);
        gl.uniform1i(stickerUniforms.texture, 0);
        gl.uniform1i(stickerUniforms.mode, mode);
        gl.uniform3f(stickerUniforms.viewRight, viewBasis.right.x, viewBasis.right.y, viewBasis.right.z);
        gl.uniform3f(stickerUniforms.viewUp, viewBasis.up.x, viewBasis.up.y, viewBasis.up.z);
        gl.uniform3f(stickerUniforms.viewFwd, viewBasis.fwd.x, viewBasis.fwd.y, viewBasis.fwd.z);
        gl.uniform1f(stickerUniforms.viewHfov, clamp(Number(viewAngles.hFovDeg || 90), 0.1, 179) * DEG2RAD);
        gl.uniform1f(stickerUniforms.viewVfov, clamp(Number(viewAngles.vFovDeg || 60), 0.1, 179) * DEG2RAD);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform3f(stickerUniforms.stickerRight, basis.right.x, basis.right.y, basis.right.z);
        gl.uniform3f(stickerUniforms.stickerUp, basis.up.x, basis.up.y, basis.up.z);
        gl.uniform3f(stickerUniforms.stickerFwd, basis.fwd.x, basis.fwd.y, basis.fwd.z);
        gl.uniform1f(stickerUniforms.stickerTanX, Math.max(1e-6, basis.tanX));
        gl.uniform1f(stickerUniforms.stickerTanY, Math.max(1e-6, basis.tanY));
        gl.uniform4f(
          stickerUniforms.crop,
          clamp(Number(basis.crop.x0 ?? 0), 0, 1),
          clamp(Number(basis.crop.y0 ?? 0), 0, 1),
          clamp(Number(basis.crop.x1 ?? 1), 0, 1),
          clamp(Number(basis.crop.y1 ?? 1), 0, 1),
        );
        gl.uniform1f(stickerUniforms.opacity, basis.opacity);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        gl.disable(gl.BLEND);
        continue;
      }
      if (object.type === "paint" || object.type === "raster") {
        if (!setPaintErp(object.source, object.revision ?? "")) continue;
        setActiveLayerDrawFlag("paint");
        drawLayers(view, {
          paintOpacity: Number(object.opacity ?? 1),
          maskOpacity: 0,
          showMaskTint: false,
        });
        continue;
      }
      if (object.type === "mask") {
        if (!setMaskErp(object.source, object.revision ?? "")) continue;
        setActiveLayerDrawFlag("mask");
        drawLayers(view, {
          paintOpacity: 0,
          maskOpacity: Number(object.opacity ?? 1),
          showMaskTint: true,
        });
      }
    }
    pruneStickerTextures(validStickerAssetIds);
    clearLayerDrawFlags();
  }

  function renderPanorama(params) {
    if (!setupFrame() || !backgroundRevision) return null;
    drawBackground({
      mode: "panorama",
      yawDeg: params?.yawDeg || 0,
      pitchDeg: params?.pitchDeg || 0,
      fovDeg: params?.fovDeg || 100,
    }, params);
    return surface;
  }

  function renderUnwrap(params) {
    if (!setupFrame() || !backgroundRevision) return null;
    drawBackground({ mode: "unwrap" }, params);
    return surface;
  }

  function renderCutout(params) {
    if (!setupFrame() || !backgroundRevision) return null;
    drawBackground({
      mode: "cutout",
      yawDeg: params?.yawDeg || 0,
      pitchDeg: params?.pitchDeg || 0,
      rollDeg: params?.rollDeg || 0,
      hFovDeg: params?.hFovDeg || 90,
      vFovDeg: params?.vFovDeg || 60,
    }, params);
    return surface;
  }

  function applySceneState(input = {}) {
    if (!init()) return false;
    const hasBackgroundSource = Object.prototype.hasOwnProperty.call(input, "backgroundSource");
    const hasPaintSource = Object.prototype.hasOwnProperty.call(input, "paintSource");
    const hasMaskSource = Object.prototype.hasOwnProperty.call(input, "maskSource");
    const hasTextures = Object.prototype.hasOwnProperty.call(input, "textures");
    const hasScene = Object.prototype.hasOwnProperty.call(input, "scene");
    if (hasBackgroundSource) {
      setBackgroundErp(input.backgroundSource, input.backgroundRevision ?? "");
    }
    if (hasPaintSource) {
      setPaintErp(input.paintSource, input.paintRevision ?? "");
    }
    if (hasMaskSource) {
      setMaskErp(input.maskSource, input.maskRevision ?? "");
    }
    if (hasTextures) {
      syncStickerTextures(input.textures || []);
      currentState.textures = input.textures || [];
    }
    if (hasScene) {
      currentState.scene = input.scene || { stickers: [], selectedId: null, hoveredId: null };
    }
    if (Object.prototype.hasOwnProperty.call(input, "objectPass")) {
      currentState.objectPass = input.objectPass || { objects: [], selectedId: null, hoveredId: null };
    }
    if (Object.prototype.hasOwnProperty.call(input, "backgroundOpacity")) {
      currentState.backgroundOpacity = Number(input.backgroundOpacity ?? 1);
    }
    if (Object.prototype.hasOwnProperty.call(input, "showMaskTint")) {
      currentState.showMaskTint = input.showMaskTint === true;
    }
    if (Object.prototype.hasOwnProperty.call(input, "coverageDeg")) {
      currentState.coverageDeg = Number(input.coverageDeg || 360) === 180 ? 180 : 360;
    }
    return true;
  }

  function renderScene(input = {}) {
    if (!init()) return null;
    setViewport(input.width, input.height, input.dpr || 1);
    if (!setupFrame()) return null;
    if (!applySceneState(input)) return null;
    if (backgroundRevision) {
      drawBackground(input.view, {
        ...currentState,
        ...input,
        backgroundOpacity: Number(input.backgroundOpacity ?? currentState.backgroundOpacity ?? 1),
        coverageDeg: Number(input.coverageDeg || currentState.coverageDeg || 360) === 180 ? 180 : 360,
      });
    }
    drawObjectPass(
      currentState.objectPass || { objects: [], selectedId: null, hoveredId: null },
      input.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 },
    );
    return surface;
  }

  function syncState(input = {}) {
    return applySceneState(input);
  }

  function screenToErpUv(params, x, y) {
    const width = Math.max(1, Number(params?.viewportWidth || viewport.sourceWidth || viewport.width || 1));
    const height = Math.max(1, Number(params?.viewportHeight || viewport.sourceHeight || viewport.height || 1));
    const px = Number(x);
    const py = Number(y);
    if (!Number.isFinite(px) || !Number.isFinite(py)) return null;
    if (params?.mode === "unwrap") {
      return { u: ((px / width) % 1 + 1) % 1, v: clamp(py / height, 0, 1) };
    }
    const angles = getViewAngles(params, width, height);
    if (!angles) return null;
    const basis = cameraBasis(angles.yawDeg, angles.pitchDeg, angles.rollDeg);
    const nx = ((px - width * 0.5) / (width * 0.5)) * Math.tan(clamp(angles.hFovDeg, 1, 179) * DEG2RAD * 0.5);
    const ny = ((height * 0.5 - py) / (height * 0.5)) * Math.tan(clamp(angles.vFovDeg, 0.1, 179) * DEG2RAD * 0.5);
    const dir = norm(add(add(mul(basis.right, nx), mul(basis.up, ny)), basis.fwd));
    return {
      u: ((Math.atan2(dir.x, dir.z) / TWO_PI) + 0.5 + 1.0) % 1.0,
      v: clamp(0.5 - Math.asin(clamp(dir.y, -1, 1)) / Math.PI, 0, 1),
    };
  }

  function erpUvToScreen(params, u, v) {
    const width = Math.max(1, Number(params?.viewportWidth || viewport.sourceWidth || viewport.width || 1));
    const height = Math.max(1, Number(params?.viewportHeight || viewport.sourceHeight || viewport.height || 1));
    if (params?.mode === "unwrap") {
      return {
        x: ((Number(u || 0) % 1 + 1) % 1) * width,
        y: clamp(Number(v || 0), 0, 1) * height,
        visible: true,
      };
    }
    const angles = getViewAngles(params, width, height);
    if (!angles) {
      return { x: width * 0.5, y: height * 0.5, visible: false };
    }
    const basis = cameraBasis(angles.yawDeg, angles.pitchDeg, angles.rollDeg);
    const dir = lonLatToDir(u, v);
    const cx = dot(dir, basis.right);
    const cy = dot(dir, basis.up);
    const cz = dot(dir, basis.fwd);
    if (cz <= 1e-5) return { x: 0, y: 0, visible: false };
    const x = width * 0.5 + (cx / cz) * ((width * 0.5) / Math.tan(clamp(angles.hFovDeg, 1, 179) * DEG2RAD * 0.5));
    const y = height * 0.5 - (cy / cz) * ((height * 0.5) / Math.tan(clamp(angles.vFovDeg, 0.1, 179) * DEG2RAD * 0.5));
    return { x, y, visible: x >= 0 && x <= width && y >= 0 && y <= height };
  }

  return {
    init,
    dispose,
    setViewport,
    setBackgroundErp,
    setPaintErp,
    setMaskErp,
    renderPanorama,
    renderUnwrap,
    renderCutout,
    renderScene,
    syncState,
    screenToErpUv,
    erpUvToScreen,
    getCanvas() {
      return surface;
    },
    isSupported() {
      return init();
    },
    getViewport() {
      return { ...viewport };
    },
  };
}
