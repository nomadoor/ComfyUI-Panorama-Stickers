import * as appModule from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { createApp, reactive } from "vue";
import { createPanoramaRenderCore } from "./pano_render_core.js";
import { buildPanoramaCompositeDescriptor, buildStickerRenderDescriptor } from "./pano_render_descriptors.js";
import { createPaintEngineManager } from "./pano_paint_engine.js";
import {
  createPanoInteractionController,
  PANO_DRAG_SENSITIVITY,
  PANO_WHEEL_STEP,
  PANO_FOV_MIN,
  PANO_FOV_MAX,
  PANO_INERTIA_BLEND_INST,
  PANO_INERTIA_DAMPING,
  PANO_INERTIA_START_SPEED,
  PANO_INERTIA_STOP_SPEED,
  PANO_MODAL_PARITY_CONSTANTS,
} from "./pano_interaction_controller.js";
import { clamp, wrapYaw } from "./pano_math.js";
import { isPanoramaPreviewNodeName } from "./pano_preview_identity.js";
import {
  buildCutoutViewParamsFromShot,
  buildPreviewNodeViewParams,
  buildPanoramaViewParamsFromRuntime,
  buildStickerSceneFromState,
  buildStickerTexturesFromState,
  normalizeStickerItem,
} from "./pano_gl_scene.js";
import {
  beginCutoutRollGesture,
  buildCutoutAddFrameAction,
  buildCutoutPanoramaViewFromShot,
  createCutoutNodeSurfaceSession,
  CUTOUT_NODE_SURFACE_MIN_HEIGHT,
  cutoutNodeSurfaceModel,
  fitCutoutNodeFrame,
  layoutCutoutNodeContext,
  resolveCutoutNodeSurfaceShot,
  updateCutoutRollGesture,
} from "./pano_cutout_node_surface.js";
import { fitFocalPx } from "./pano_cutout_view_math.js";
import PanoCutoutNodeSurface from "./components/PanoCutoutNodeSurface.vue";
import PanoStickersNodeSurface from "./components/PanoStickersNodeSurface.vue";
import {
  createStickersNodeSurfaceSession,
  stickersNodeSurfaceModel,
} from "./pano_stickers_node_surface.js";
import {
  buildStickerGeometry,
  moveStickerToScreenPoint,
  pickStickerAtPoint,
  rotateStickerFromPointer,
  scaleStickerFromPointer,
} from "./pano_sticker_geometry.js";
import {
  drawStickerSelectionBoundary,
  drawStickerSelectionHandles,
  stickerSelectionAccent,
} from "./pano_sticker_affordance.js";
import { installPanoSuiteStylesheet } from "./pano_styles.js";
import {
  createRasterObjectSurfaceCache,
  resolveRasterPreviewSize,
} from "./pano_raster_object_surface.js";
import {
  buildSharedImageCacheKey,
  createSharedImageCache,
  nextMediaRevision,
} from "./pano_shared_image_cache.js";
import {
  createLoopingPreviewVideo,
  isNodeOutputMediaCurrent,
  isTrackedMediaInputConnectionChange,
  markNodeOutputMediaCurrent,
  markNodeOutputMediaStale,
  resolvePreviewVideoSource,
} from "./pano_preview_video.js";
import { bindWheelCaptureRoot, readWheelDirection } from "./pano_wheel.js";
import { queuePendingStickerOperation } from "./pano_editor_extension.js";
import {
  bindStickerDropTarget,
  decodeStickerImageFile,
  dragHasStickerImageFile,
  isStickerImageFile,
  uploadStickerAssetFile,
} from "./pano_sticker_file_import.js";
import {
  registerExternalStickerSync,
  runExternalStickerSync,
} from "./pano_external_sticker_sync.js";
import {
  assignFreshDomWidgetRenderIdentity,
  removeTrackedDomWidget,
  trackDomWidgetRemoval,
} from "./pano_dom_widget_lifecycle.js";
import { createViewportRestoreScheduler } from "./pano_viewport_restore.js";
const { app } = appModule;
const sharedPreviewImageCache = createSharedImageCache();

function getAnimPreviewWidgetName() {
  return String(
    window?.comfyAPI?.app?.ANIM_PREVIEW_WIDGET
    || appModule?.ANIM_PREVIEW_WIDGET
    || "$$comfy_animation_preview"
  );
}

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
const STANDALONE_DRAG_SENSITIVITY = PANO_DRAG_SENSITIVITY;
const STANDALONE_WHEEL_STEP = PANO_WHEEL_STEP;
const STANDALONE_FOV_MIN = PANO_FOV_MIN;
const STANDALONE_FOV_MAX = PANO_FOV_MAX;
const STANDALONE_INERTIA_BLEND = PANO_INERTIA_BLEND_INST;
const STANDALONE_INERTIA_DECAY = PANO_INERTIA_DAMPING;
const STANDALONE_INERTIA_START_SPEED = PANO_INERTIA_START_SPEED;
const STANDALONE_INERTIA_STOP_SPEED = PANO_INERTIA_STOP_SPEED;
export const STANDALONE_MESH_LOW = { Nu: 14, Nv: 9 };
const STANDALONE_MESH_BALANCED = { Nu: 24, Nv: 14 };
const STANDALONE_MESH_HIGH = { Nu: 32, Nv: 20 };
const STANDALONE_HQ_FRAMES_AFTER_INTERACTION = 10;
const STANDALONE_FRAME_EMA_ALPHA = 0.16;
const STANDALONE_FRAME_DEGRADE_MS = 26;
const STANDALONE_DOM_PROBE_FRAMES = 3;
const STANDALONE_DOM_PROBE_TIMEOUT_MS = 220;
const SHARED_UI_SETTINGS_KEY = "pano_suite.ui_settings.v1";
const PANO_LOADING_MIN_MS = 120;

function loadSharedUiSettings() {
  const base = {
    invert_view_x: false,
    invert_view_y: false,
    preview_quality: "balanced",
  };
  try {
    const text = String(window?.localStorage?.getItem(SHARED_UI_SETTINGS_KEY) || "").trim();
    if (!text) return base;
    const parsed = JSON.parse(text);
    const q = String(parsed?.preview_quality || "balanced");
    return {
      invert_view_x: !!parsed?.invert_view_x,
      invert_view_y: !!parsed?.invert_view_y,
      preview_quality: (q === "draft" || q === "high") ? q : "balanced",
    };
  } catch {
    return base;
  }
}

function panoPreviewDebugEnabled() {
  try {
    if (window?.__PANO_PREVIEW_DEBUG__ === true) return true;
    return String(window?.localStorage?.getItem("panoPreviewDebug") || "").trim() === "1";
  } catch {
    return false;
  }
}

function panoPreviewVerboseEnabled() {
  try {
    if (window?.__PANO_PREVIEW_DEBUG_VERBOSE__ === true) return true;
    return String(window?.localStorage?.getItem("panoPreviewDebugVerbose") || "").trim() === "1";
  } catch {
    return false;
  }
}

function panoPreviewLog(node, tag, payload = null) {
  void node;
  void tag;
  void payload;
  return;
}

function previewElementSnapshot(el) {
  if (!el) return null;
  const rect = el.getBoundingClientRect?.();
  return {
    tag: String(el.tagName || "").toLowerCase(),
    className: String(el.className || ""),
    clientW: Number(el.clientWidth || 0),
    clientH: Number(el.clientHeight || 0),
    offsetW: Number(el.offsetWidth || 0),
    offsetH: Number(el.offsetHeight || 0),
    rectW: Number(rect?.width || 0),
    rectH: Number(rect?.height || 0),
    styleHeight: String(el.style?.height || ""),
    styleWidth: String(el.style?.width || ""),
    stylePos: String(el.style?.position || ""),
    styleTransform: String(el.style?.transform || ""),
  };
}

function ensurePreviewModeCss() {
  if (document.getElementById("pano-node-preview-mode-style")) return;
  const style = document.createElement("style");
  style.id = "pano-node-preview-mode-style";
  style.textContent = `
    .pano-node-preview-dom {
      outline: none !important;
    }
    .pano-node-preview-dom.pano-node-preview--stickers canvas {
      object-fit: cover;
    }
    .pano-node-preview-dom.pano-node-preview--cutout canvas {
      object-fit: contain;
    }
    .pano-node-preview-dom button:hover {
      background: rgba(46,46,50,0.98) !important;
      border-color: rgba(120,120,130,1) !important;
      color: #fff !important;
      box-shadow: 0 0 8px rgba(0,0,0,0.4);
    }
  `;
  document.head.appendChild(style);
}

function inspectNodeLayout(node, label, context = {}) {
  if (!panoPreviewDebugEnabled()) return;
  const dom = node.__panoDomPreview;
  const widget = dom?.widget;
  const root = dom?.root;
  const wrap = root?.querySelector?.("div");
  const canvas = dom?.canvas;
  const parent = root?.parentElement;
  const grandparent = parent?.parentElement;

  const snap = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect?.();
    return {
      tag: el.tagName.toLowerCase(),
      cw: el.clientWidth, ch: el.clientHeight,
      ow: el.offsetWidth, oh: el.offsetHeight,
      rect: r ? { w: Math.round(r.width), h: Math.round(r.height), top: Math.round(r.top) } : null,
      styleH: el.style.height,
      styleW: el.style.width,
    };
  };

  const cvInt = canvas ? { w: canvas.width, h: canvas.height } : null;
  const nodeSize = getNodeSize(node);

  panoPreviewLog(node, `layout.${label}`, {
    ...context,
    nodeSize,
    widgetCompute: widget?.__lastComputeSize || null,
    dom: {
      root: snap(root),
      wrap: snap(wrap),
      canvas: snap(canvas),
      parent: snap(parent),
      grandparent: snap(grandparent),
    },
    canvasIntrinsic: cvInt,
    dpr: window.devicePixelRatio,
  });
}

function getNodeSize(node) {
  const raw = node?.size;
  if (raw == null) return null;
  const readPair = (a, b) => {
    const w = Number(a);
    const h = Number(b);
    if (!Number.isFinite(w) || !Number.isFinite(h)) return null;
    return [w, h];
  };
  // Simplified check: Access properties directly without strict prototype checks.
  // This handles Arrays, TypedArrays, Proxies, and plain objects robustly.
  if (typeof raw === "object" || typeof raw === "function") {
    if (raw[0] !== undefined || raw[1] !== undefined) {
      const p = readPair(raw[0], raw[1]);
      if (p) return p;
    }
    if (raw.width !== undefined || raw.height !== undefined) {
      const p = readPair(raw.width, raw.height);
      if (p) return p;
    }
    if (raw.w !== undefined || raw.h !== undefined) {
      const p = readPair(raw.w, raw.h);
      if (p) return p;
    }
  }
  return null;
}

function isNodeSizeInvalid(node) {
  const s = getNodeSize(node);
  return !s || s[0] < 10 || s[1] < 10;
}

function initNodeSizeIfInvalid(node, w, h) {
  if (!isNodeSizeInvalid(node)) return;
  node.size = [Math.max(1, Number(w || 1)), Math.max(1, Number(h || 1))];
}

function getActivePreviewBackend(node) {
  if (node?.__panoLegacyPreviewHooked) return "legacy_draw";
  if (node?.__panoDomPreview?.widget) return "dom";
  return "none";
}

function getNodeTypeName(node) {
  return String(node?.comfyClass || node?.type || node?.title || "");
}

function isStandalonePreviewNode(node) {
  return isPanoramaPreviewNodeName(getNodeTypeName(node));
}

function getFrontendSignature(node = null) {
  const frontendVersion = String(window?.__COMFYUI_FRONTEND_VERSION__ || "unknown");
  const forcePath = String(window?.__PANO_PREVIEW_FORCE_PATH__ || "");
  const domWidgetSignal = typeof node?.addDOMWidget === "function" ? "dom_widget" : "no_dom_widget";
  const canvasCtor = String(app?.canvas?.constructor?.name || "");
  return [frontendVersion, domWidgetSignal, forcePath, canvasCtor].join("|");
}

function isFrontendC25Compat() {
  const v = String(window?.__COMFYUI_FRONTEND_VERSION__ || "");
  return v.includes("c25f9a0e939145c155fbbd0fef24da4b02a40326");
}

function shouldEnableInputShield() {
  if (window?.__PANO_PREVIEW_INPUT_SHIELD__ === true) return true;
  if (window?.__PANO_PREVIEW_INPUT_SHIELD__ === false) return false;
  // Safe default: keep shield on unless explicitly disabled.
  return true;
}

function getPreviewController(node) {
  if (node?.__panoPreviewController) return node.__panoPreviewController;
  const controller = {
    activeBackend: "none",
    attach(options = {}) {
      const mode = String(options.mode || "stickers") === "cutout" ? "cutout" : "stickers";
      const targetBackend = "dom";
      const activeBackend = getActivePreviewBackend(node);
      this.activeBackend = activeBackend;
      const currentMode = String(node.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers";
      const currentNoPreview = node.__panoPreviewNoPreview === true;
      const requestedNoPreview = options.noPreview === true;
      const sameRoute = activeBackend === targetBackend
        && activeBackend !== "none"
        && currentMode === mode
        && currentNoPreview === requestedNoPreview;
      if (sameRoute) {
        node.__panoAttachOptions = { ...options, mode };
        node.__panoPreviewMode = mode;
        node.__panoPreviewNoPreview = requestedNoPreview;
        node.__panoPreviewButtonText = String(options.buttonText || (mode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor"));
        node.__panoOpenEditor = typeof options.onOpen === "function" ? options.onOpen : node.__panoOpenEditor;
        return;
      }
      if (activeBackend !== "none") teardownPreview(node);
      attachPanoramaPreviewImpl(node, { ...options, mode, __panoForcedPath: targetBackend });
      this.activeBackend = getActivePreviewBackend(node);
    },
    rebind(options = {}) {
      const mode = String(options.mode || node?.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers";
      teardownPreview(node);
      this.activeBackend = "none";
      this.attach({ ...options, mode });
    },
    teardown() {
      teardownPreview(node);
      this.activeBackend = "none";
    },
  };
  node.__panoPreviewController = controller;
  return controller;
}

function cancelDomMountProbe(node) {
  if (!node?.__panoDomMountProbe) return;
  const probe = node.__panoDomMountProbe;
  probe.cancelled = true;
  if (probe.timeoutId) {
    clearTimeout(probe.timeoutId);
    probe.timeoutId = 0;
  }
  node.__panoDomMountProbe = null;
}

function teardownPreview(node, options = {}) {
  if (!node) return;
  executedRefreshMonitor.unregister(node);
  cancelDomMountProbe(node);
  const hadDom = !!node.__panoDomPreview;
  const hadLegacy = !!node.__panoLegacyPreviewHooked;
  const hadDomRestore = typeof node.__panoDomRestore === "function";
  const hadLegacyRestore = typeof node.__panoLegacyRestore === "function";
  const dom = node.__panoDomPreview;
  try {
    node.__panoDomRestore?.();
  } catch {
    // ignore
  }
  node.__panoDomRestore = null;

  try {
    node.__panoLegacyRestore?.();
  } catch {
    // ignore
  }
  node.__panoLegacyRestore = null;

  if (dom) {
    try {
      if (dom.state?.raf) cancelAnimationFrame(dom.state.raf);
    } catch {
      // ignore
    }
    try {
      dom.root?.remove?.();
    } catch {
      // ignore
    }
  }
  try {
    if (Array.isArray(node.widgets)) {
      // Ensure we remove the DOM widget even if name/type mapping varies by frontend version.
      const removable = node.widgets.filter((w) => {
        if (w === dom?.widget) return true;
        const name = String(w?.name || "");
        const type = String(w?.type || "");
        const animWidgetName = getAnimPreviewWidgetName();
        if (name === animWidgetName || type === animWidgetName) return true;
        if (name === "pano_preview" || type === "pano_preview") return true;
        return name === "preview" && type === "pano_preview";
      });
      removable.forEach((widget) => removeNodeWidget(node, widget));
    }
  } catch {
    // ignore
  }

  node.__panoDomPreview = null;
  node.__panoLegacyPreviewHooked = false;
  node.__panoPreviewHooked = false;
  node.__panoPreviewDrag = null;
  node.__panoPreviewInertia = null;
  node.__panoDomHealth = null;
  node.__panoDomProbePending = false;
  node.__panoDomMountProbe = null;
  node.__panoPreviewNoPreview = false;
  if (node.__panoBootMinHeightTimer) {
    clearTimeout(node.__panoBootMinHeightTimer);
    node.__panoBootMinHeightTimer = null;
  }
  node.__panoBootMinHeightActive = false;
  node.__panoActiveBackend = "none";
  panoPreviewLog(node, "teardown.done", {
    reason: String(options.reason || ""),
    removedDom: hadDom || hadDomRestore,
    removedLegacy: hadLegacy || hadLegacyRestore,
    keepMonitor: !!options.keepMonitor,
  });

}

function cleanupPanoDomPreview(node) {
  teardownPreview(node);
}

function vec3(x, y, z) { return { x, y, z }; }
function add(a, b) { return vec3(a.x + b.x, a.y + b.y, a.z + b.z); }
function mul(a, s) { return vec3(a.x * s, a.y * s, a.z * s); }
function dot(a, b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
function cross(a, b) {
  return vec3(
    a.y * b.z - a.z * b.y,
    a.z * b.x - a.x * b.z,
    a.x * b.y - a.y * b.x,
  );
}
function norm(a) {
  const l = Math.hypot(a.x, a.y, a.z) || 1e-8;
  return vec3(a.x / l, a.y / l, a.z / l);
}
function yawPitchToDir(yawDeg, pitchDeg) {
  const yaw = yawDeg * DEG2RAD;
  const pitch = pitchDeg * DEG2RAD;
  const cp = Math.cos(pitch);
  return vec3(cp * Math.sin(yaw), Math.sin(pitch), cp * Math.cos(yaw));
}
function cameraBasis(yawDeg, pitchDeg, rollDeg = 0) {
  const fwd = yawPitchToDir(yawDeg, pitchDeg);
  const worldUp = vec3(0, 1, 0);
  let right = cross(worldUp, fwd);
  if (Math.hypot(right.x, right.y, right.z) < 1e-6) right = vec3(1, 0, 0);
  right = norm(right);
  let up = norm(cross(fwd, right));
  const rr = rollDeg * DEG2RAD;
  const cr = Math.cos(rr);
  const sr = Math.sin(rr);
  const r2 = add(mul(right, cr), mul(up, sr));
  const u2 = add(mul(right, -sr), mul(up, cr));
  return { fwd, right: norm(r2), up: norm(u2) };
}

function parseState(value, bg = "#00ff00") {
  const base = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: 360,
    bg_color: bg,
    output_preset: 2048,
    assets: {},
    stickers: [],
    shots: [],
    active: { selected_sticker_id: null },
  };
  let parsed = null;
  if (value && typeof value === "object") {
    parsed = value;
  } else if (typeof value === "string") {
    const text = value.trim();
    if (!text) return base;
    try {
      parsed = JSON.parse(text);
    } catch {
      return base;
    }
  } else {
    return base;
  }
  try {
    const p = parsed;
    if (!p || typeof p !== "object" || Array.isArray(p)) return base;
    return {
      ...base,
      ...p,
      coverage: Number(p.coverage) === 180 ? 180 : 360,
      assets: p.assets && typeof p.assets === "object" ? p.assets : {},
      stickers: Array.isArray(p.stickers) ? p.stickers : [],
      shots: Array.isArray(p.shots) ? p.shots : [],
      active: p.active && typeof p.active === "object" ? p.active : base.active,
    };
  } catch {
    return base;
  }
}

function getEffectiveStateSource(node) {
  const live = node?.__panoLiveStateOverride;
  if (live && typeof live === "object") return live;
  if (typeof live === "string" && live.trim()) return live;
  return String(getWidget(node, "state_json")?.value || "");
}

function getCachedState(node) {
  const source = getEffectiveStateSource(node);
  const liveVersion = Number(node?.__panoLiveStateVersion || 0);
  const bg = String(getWidget(node, "bg_color")?.value || "#1a1a1e");
  const coverage = Number(getWidget(node, "coverage")?.value || 360) === 180 ? 180 : 360;
  const cache = node.__panoStateCache;
  if (cache && cache.source === source && cache.liveVersion === liveVersion && cache.bg === bg && cache.coverage === coverage) {
    return cache.parsed;
  }
  const parsed = parseState(source, bg);
  parsed.coverage = coverage;
  node.__panoStateCache = { source, liveVersion, bg, coverage, parsed };
  return parsed;
}

function getWidget(node, name) { return node.widgets?.find((w) => w.name === name) || null; }
function pointInRect(x, y, r) { return !!r && x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h; }

function getGraphLinkById(graph, linkId) {
  if (!graph || linkId == null) return null;
  const links = graph.links;
  if (!links) return null;
  if (links instanceof Map) return links.get(linkId) || links.get(Number(linkId)) || links.get(String(linkId)) || null;
  return links[linkId] || links[String(linkId)] || null;
}

function getGraphNodeById(graph, id) {
  if (!graph || id == null) return null;
  if (typeof graph.getNodeById === "function") return graph.getNodeById(id);
  return graph._nodes_by_id?.[id] || graph._nodes_by_id?.[String(id)] || null;
}

function resolveOriginFromLinkInfo(linkInfo) {
  if (!linkInfo) return { originId: null, originSlot: 0 };
  if (typeof linkInfo === "object" && !Array.isArray(linkInfo)) {
    return {
      originId: linkInfo.origin_id ?? null,
      originSlot: Number(linkInfo.origin_slot ?? 0),
    };
  }
  if (Array.isArray(linkInfo)) {
    return {
      originId: linkInfo[1] ?? null,
      originSlot: Number(linkInfo[2] ?? 0),
    };
  }
  return { originId: null, originSlot: 0 };
}

function resolveInputOriginNode(node, inputIndex, fallbackOriginId = null) {
  let originNode = null;
  try {
    originNode = typeof node?.getInputNode === "function" ? node.getInputNode(inputIndex) : null;
  } catch {
    originNode = null;
  }
  if (originNode?.isSubgraphNode?.()) {
    try {
      const inputLink = typeof node?.getInputLink === "function" ? node.getInputLink(inputIndex) : null;
      const resolved = inputLink ? originNode.resolveSubgraphOutputLink?.(Number(inputLink.origin_slot ?? 0)) : null;
      if (resolved?.outputNode) originNode = resolved.outputNode;
    } catch {
      // ignore
    }
  }
  if (!originNode && fallbackOriginId != null) {
    originNode = getGraphNodeById(node?.graph, fallbackOriginId);
  }
  return originNode;
}

function listInputNames(node) {
  const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
  return inputs.map((i) => String(i?.name || "")).filter(Boolean);
}

export function preferredImageInputsForNode(node, preferredInputNames = []) {
  const names = listInputNames(node);
  const out = [];
  preferredInputNames.forEach((name) => {
    if (names.includes(String(name))) out.push(String(name));
  });
  names.forEach((name) => {
    if ((name === "erp_image" || name === "bg_erp") && !out.includes(name)) out.push(name);
  });
  return out.length ? out : preferredInputNames;
}

function normalizeExecutionId(value) {
  const id = String(value ?? "").trim();
  if (!id) return { full: "", tail: "" };
  const parts = id.split(":").map((p) => String(p).trim()).filter(Boolean);
  return { full: id, tail: parts.length ? parts[parts.length - 1] : id };
}

function executionIdMatches(value, target) {
  const a = normalizeExecutionId(value);
  const b = normalizeExecutionId(target);
  if (!a.full || !b.full) return false;
  return a.full === b.full || a.tail === b.full || a.full === b.tail || a.tail === b.tail;
}

function getLinkedOriginIds(node, preferredInputNames = ["erp_image", "bg_erp"]) {
  const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
  if (!inputs.length) return [];
  const preferredResolved = preferredImageInputsForNode(node, preferredInputNames);
  const preferred = preferredResolved
    .map((name) => inputs.findIndex((i) => String(i?.name || "") === String(name)))
    .filter((idx) => idx >= 0);
  const imageTyped = inputs
    .map((input, idx) => ({ input, idx }))
    .filter(({ input }) => String(input?.type || "").toUpperCase() === "IMAGE")
    .map(({ idx }) => idx);
  const indices = [...new Set([...preferred, ...imageTyped])];
  const ids = [];
  for (const idx of indices) {
    const originNode = resolveInputOriginNode(node, idx);
    if (originNode?.id != null) {
      ids.push(String(originNode.id));
      continue;
    }
    const linkId = inputs[idx]?.link;
    if (linkId == null) continue;
    const linkInfo = getGraphLinkById(node?.graph, linkId);
    const { originId } = resolveOriginFromLinkInfo(linkInfo);
    if (originId != null) ids.push(String(originId));
  }
  return [...new Set(ids)];
}

const executedRefreshMonitor = {
  nodes: new Set(),
  bound: false,
  listener: null,
  ensureBound() {
    if (this.bound || !api?.addEventListener) return;
    this.listener = (evt) => {
      const detail = evt?.detail || {};
      const executedId = String(detail?.display_node ?? detail?.node ?? "").trim();
      const targets = [...this.nodes];
      targets.forEach((node) => {
        if (!node) return;
        const selfHit = executionIdMatches(executedId, node?.id);
        const upstreamIds = getLinkedOriginIds(node, ["erp_image", "bg_erp"]);
        const upstreamHit = upstreamIds.some((id) => executionIdMatches(executedId, id));
        const reason = selfHit ? "self" : (upstreamHit ? "upstream" : "global_executed");
        const mode = String(node.__panoPreviewMode || "");
        if (mode === "cutout" && !selfHit) return;
        panoPreviewLog(node, "exec-refresh", { executedId, reason });
        invalidatePreviewImageCaches(node);
        panoPreviewLog(node, "invalidate", { cachesCleared: true });
        node.__panoDomPreview?.requestDraw?.();
        node.setDirtyCanvas?.(true, true);
        node.graph?.setDirtyCanvas?.(true, true);
        panoPreviewLog(node, "draw-request", {
          route: String(node.__panoPreviewMode || ""),
          mode: String(node.__panoPreviewMode || ""),
          reason,
        });
      });
    };
    api.addEventListener("executed", this.listener);
    this.bound = true;
  },
  ensureUnbound() {
    if (!this.bound || !this.listener || !api?.removeEventListener) return;
    api.removeEventListener("executed", this.listener);
    this.listener = null;
    this.bound = false;
  },
  register(node) {
    if (!node) return;
    this.nodes.add(node);
    this.ensureBound();
  },
  unregister(node) {
    if (node) this.nodes.delete(node);
    if (!this.nodes.size) this.ensureUnbound();
  },
};

function comfyImageEntryToUrl(entry) {
  if (!entry || typeof entry !== "object") return "";
  const filename = String(entry.filename || "");
  if (!filename) return "";
  const params = new URLSearchParams();
  params.set("filename", filename);
  const viewType = String(
    entry.storage
    || (String(entry.type || "").trim().toLowerCase() === "comfy_image" ? "output" : entry.type)
    || "output"
  );
  params.set("type", viewType);
  if (entry.subfolder) params.set("subfolder", String(entry.subfolder));
  const q = `/view?${params.toString()}`;
  return typeof api?.apiURL === "function" ? api.apiURL(q) : q;
}

function isDirectImageUrl(src) {
  const s = String(src || "").trim();
  if (!s) return false;
  return (
    /^https?:\/\//i.test(s)
    || s.startsWith("/")
    || s.startsWith("blob:")
    || s.startsWith("data:")
  );
}

function splitFilenameAndSubfolder(pathish) {
  const normalized = String(pathish || "").trim().replaceAll("\\", "/");
  const trimmed = normalized.replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!trimmed) return { filename: "", subfolder: "" };
  const parts = trimmed.split("/").filter(Boolean);
  if (!parts.length) return { filename: "", subfolder: "" };
  const filename = String(parts.pop() || "").trim();
  const subfolder = parts.join("/");
  return { filename, subfolder };
}

function uniqStrings(values) {
  const out = [];
  const seen = new Set();
  values.forEach((v) => {
    const s = String(v || "").trim();
    if (!s || seen.has(s)) return;
    seen.add(s);
    out.push(s);
  });
  return out;
}

function buildImageSrcCandidates(srcRaw) {
  const src = String(srcRaw || "").trim();
  if (!src) return [];
  if (isDirectImageUrl(src)) return [src];
  const { filename, subfolder } = splitFilenameAndSubfolder(src);
  if (!filename) return [src];
  const byView = ["temp", "output", "input"].map((type) => comfyImageEntryToUrl({
    filename,
    subfolder,
    type,
  }));
  return uniqStrings([...byView, src]);
}

function stickerAssetToPreviewSrc(asset) {
  if (!asset || typeof asset !== "object") return "";
  const type = String(asset.type || "").trim().toLowerCase();
  if (type === "dataurl") return String(asset.value || "");
  if (type === "comfy_image") {
    const filename = String(asset.filename || "").trim();
    if (!filename) return "";
    return comfyImageEntryToUrl({
      filename,
      subfolder: String(asset.subfolder || ""),
      type: String(asset.storage || "input"),
    });
  }
  return "";
}

function lookupNodeOutputEntry(nodeId) {
  const store = app?.nodeOutputs;
  if (!store || nodeId == null) return null;
  // Performance fix: Prefer strictly direct lookup.
  // Iterating all outputs every frame causes massive lag when many nodes are present.
  const raw = String(nodeId);
  let val = null;
  if (store instanceof Map) {
    val = store.get(nodeId) || store.get(raw) || store.get(Number(raw)) || null;
  } else {
    val = store[nodeId] || store[raw] || null;
  }
  if (val) return val;

  // Compatibility Fallback: Direct lookup failed, possibly due to execution-scoped keys (e.g. "promptId:nodeId").
  // We iterate keys ONLY if direct lookup misses.
  const targetId = raw;
  if (store instanceof Map) {
    for (const key of store.keys()) {
      if (executionIdMatches(key, targetId)) return store.get(key);
    }
  } else {
    const keys = Object.keys(store);
    for (const key of keys) {
      if (executionIdMatches(key, targetId)) return store[key];
    }
  }
  return null;
}

function ownOutputUiValue(node, key, outputOverride = null) {
  const output = outputOverride || node?.__panoLastExecutedOutput || lookupNodeOutputEntry(node?.id);
  const value = output?.ui && Object.prototype.hasOwnProperty.call(output.ui, key)
    ? output.ui[key]
    : output?.[key];
  return Array.isArray(value) ? value[0] : value;
}

function imageSourceFromCandidate(candidate) {
  if (!candidate) return "";
  if (typeof candidate === "string") {
    return String(candidate || "").trim();
  }
  if (Array.isArray(candidate)) {
    if (candidate.length === 0) return "";
    if (candidate.length === 1) return imageSourceFromCandidate(candidate[0]);
    const filename = String(candidate[0] || "").trim();
    if (filename) {
      const subfolder = String(candidate[1] || "").trim();
      const type = String(candidate[2] || "output").trim() || "output";
      return comfyImageEntryToUrl({ filename, subfolder, type });
    }
    for (const entry of candidate) {
      const src = imageSourceFromCandidate(entry);
      if (src) return src;
    }
    return "";
  }
  if (typeof candidate?.src === "string" && candidate.src) return candidate.src;
  if (typeof candidate?.url === "string" && candidate.url) return candidate.url;
  return comfyImageEntryToUrl(candidate);
}

function isRenderableMediaReady(media) {
  if (!media) return false;
  if (typeof HTMLCanvasElement !== "undefined" && media instanceof HTMLCanvasElement) {
    return Number(media.width || 0) > 0 && Number(media.height || 0) > 0;
  }
  if (media instanceof HTMLVideoElement) {
    return Number(media.videoWidth || 0) > 0
      && Number(media.videoHeight || 0) > 0
      && Number(media.readyState || 0) >= 2;
  }
  return !!media.complete && Number(media.naturalWidth || media.width || 0) > 0;
}

function getRenderableMediaRevisionToken(media) {
  if (!media) return "";
  if (media instanceof HTMLVideoElement) {
    return [
      String(media.currentSrc || media.src || ""),
      Number(media.videoWidth || 0),
      Number(media.videoHeight || 0),
      Number(media.currentTime || 0).toFixed(3),
      Number(media.readyState || 0),
      media.paused ? "paused" : "playing",
    ].join("|");
  }
  return [
    String(media.currentSrc || media.src || ""),
    Number(media.naturalWidth || media.width || 0),
    Number(media.naturalHeight || media.height || 0),
  ].join("|");
}

function appendImageRevision(src, rev) {
  const raw = String(src || "").trim();
  if (!raw) return "";
  try {
    const base = typeof window !== "undefined" && window?.location?.href ? window.location.href : "http://127.0.0.1/";
    const u = new URL(raw, base);
    if (rev > 0) u.searchParams.set("pano_rev", String(rev));
    return u.toString();
  } catch {
    const sep = raw.includes("?") ? "&" : "?";
    return rev > 0 ? `${raw}${sep}pano_rev=${rev}` : raw;
  }
}

function collectExecutedImageCandidates(output) {
  const out = [];
  const visited = new Set();
  const pushAll = (arr) => {
    if (!Array.isArray(arr)) return;
    arr.forEach((v) => out.push(v));
  };
  const walk = (obj, depth = 0) => {
    if (!obj || depth > 3) return;
    if (visited.has(obj)) return;
    if (typeof obj !== "object") return;
    visited.add(obj);
    pushAll(obj.images);
    walk(obj.output, depth + 1);
    walk(obj.ui, depth + 1);
    walk(obj.data, depth + 1);
    walk(obj.result, depth + 1);
  };
  walk(output, 0);
  return out;
}

function syncOwnOutputSourceFromExecuted(node, output) {
  try {
    node.__panoOwnOutputRev = nextMediaRevision(node.__panoOwnOutputRev);
    const images = collectExecutedImageCandidates(output);
    let src = "";
    for (const cand of images) {
      src = imageSourceFromCandidate(cand);
      if (src) break;
    }
    if (src) {
      node.__panoOwnOutputSrc = String(src || "");
      panoPreviewLog(node, "cutout.output-sync", {
        hasOutputImage: true,
        src: appendImageRevision(node.__panoOwnOutputSrc, node.__panoOwnOutputRev),
        rev: node.__panoOwnOutputRev,
      });
    } else {
      panoPreviewLog(node, "cutout.output-sync", { hasOutputImage: false, keys: Object.keys(output || {}) });
    }
  } catch {
    panoPreviewLog(node, "cutout.output-sync", { hasOutputImage: false });
  }
}

function disposeNodeOutputVideoCache(node) {
  node?.__panoOwnOutputVideoCache?.destroy?.();
  if (node) node.__panoOwnOutputVideoCache = null;
}

function getNodeOwnOutputVideo(node, videoKeys = ["pano_videos"], onLoad = null) {
  const id = node?.id;
  if (id == null) return null;
  if (!isNodeOutputMediaCurrent(node, "background")) {
    disposeNodeOutputVideoCache(node);
    return null;
  }
  const ownOutput = lookupNodeOutputEntry(id);
  const src = resolvePreviewVideoSource(ownOutput, videoKeys, imageSourceFromCandidate);
  if (!src) {
    disposeNodeOutputVideoCache(node);
    return null;
  }
  const rev = Number(node?.__panoOwnOutputRev || 0);
  const srcKey = appendImageRevision(src, rev);
  const cacheKey = `${videoKeys.join("|")}:${srcKey}`;
  const cached = node.__panoOwnOutputVideoCache;
  if (cached?.video && cached.key === cacheKey) return cached.video;
  disposeNodeOutputVideoCache(node);
  const player = createLoopingPreviewVideo({
    documentRef: document,
    src: srcKey,
    onFrame: onLoad,
  });
  if (!player) return null;
  node.__panoOwnOutputVideoCache = { key: cacheKey, ...player };
  return player.video;
}

function getNodeOwnOutputImage(node, onLoad = null) {
  const id = node?.id;
  if (id == null) return null;
  const ownSrc = String(node?.__panoOwnOutputSrc || "").trim();
  const ownOutput = lookupNodeOutputEntry(id);
  const outImgs = Array.isArray(ownOutput?.images) ? ownOutput.images : [];
  const nodeImgs = Array.isArray(node?.imgs) ? node.imgs : [];
  const candidates = ownSrc ? [ownSrc, ...outImgs, ...nodeImgs] : [...outImgs, ...nodeImgs];
  let src = "";
  for (const cand of candidates) {
    src = imageSourceFromCandidate(cand);
    if (src) break;
  }
  if (!src) return null;
  const rev = Number(node?.__panoOwnOutputRev || 0);
  const rawCandidates = buildImageSrcCandidates(src);
  const srcCandidates = rawCandidates.map((s) => appendImageRevision(s, rev));
  if (!srcCandidates.length) return null;
  const srcKey = `${src}|rev:${rev}`;
  if (!node.__panoOwnOutputImageCache) {
    node.__panoOwnOutputImageCache = {
      src: "",
      img: null,
      pendingSrc: "",
      pendingImg: null,
    };
  }
  const cached = node.__panoOwnOutputImageCache;
  if (cached.img && cached.src === srcKey) return cached.img;
  if (cached.pendingImg && cached.pendingSrc === srcKey) {
    return (cached.img && (cached.img.complete || cached.img.naturalWidth || cached.img.width))
      ? cached.img
      : cached.pendingImg;
  }
  const img = new Image();
  let attempt = -1;
  const tryLoadNext = () => {
    attempt += 1;
    if (attempt >= srcCandidates.length) {
      if (node.__panoOwnOutputImageCache === cached) {
        cached.pendingSrc = "";
        cached.pendingImg = null;
      }
      return;
    }
    img.src = srcCandidates[attempt];
  };
  img.onload = () => {
    if (node.__panoOwnOutputImageCache === cached && cached.pendingImg === img && cached.pendingSrc === srcKey) {
      cached.src = srcKey;
      cached.img = img;
      cached.pendingSrc = "";
      cached.pendingImg = null;
    }
    onLoad?.();
    node.setDirtyCanvas?.(true, true);
  };
  img.onerror = () => {
    if (attempt + 1 >= srcCandidates.length) {
      if (node.__panoOwnOutputImageCache === cached && cached.pendingImg === img) {
        cached.pendingSrc = "";
        cached.pendingImg = null;
      }
      return;
    }
    tryLoadNext();
  };
  cached.pendingSrc = srcKey;
  cached.pendingImg = img;
  tryLoadNext();
  return (cached.img && (cached.img.complete || cached.img.naturalWidth || cached.img.width))
    ? cached.img
    : img;
}

function findLinkedInputImageSource(node, preferredInputNames = []) {
  const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
  if (!inputs.length) return { src: "", sourceType: "", inputName: "" };
  const preferredResolved = preferredImageInputsForNode(node, preferredInputNames);
  const preferred = preferredResolved
    .map((name) => inputs.findIndex((i) => String(i?.name || "") === String(name)))
    .filter((idx) => idx >= 0);
  const imageTyped = inputs
    .map((input, idx) => ({ input, idx }))
    .filter(({ input }) => String(input?.type || "").toUpperCase() === "IMAGE")
    .map(({ idx }) => idx);
  const indices = [...new Set([...preferred, ...imageTyped])];
  panoPreviewLog(node, "image-resolve", {
    inputCandidates: preferredResolved,
    resolvedIndices: indices,
    stage: "start",
  });

  for (const idx of indices) {
    const input = inputs[idx];
    const linkId = input?.link;
    if (linkId == null) continue;
    const linkInfo = getGraphLinkById(node.graph, linkId);
    const { originId, originSlot } = resolveOriginFromLinkInfo(linkInfo);
    if (originId == null) continue;
    const originNode = resolveInputOriginNode(node, idx, originId);
    if (!originNode) continue;
    const resolvedOriginSlot = Number(originSlot || 0);

    const outputs = lookupNodeOutputEntry(originNode?.id ?? originId);
    const outImgs = Array.isArray(outputs?.images) ? outputs.images : [];
    if (outImgs.length) {
      const ordered = [];
      if (resolvedOriginSlot >= 0 && resolvedOriginSlot < outImgs.length) ordered.push(outImgs[resolvedOriginSlot]);
      ordered.push(...outImgs);
      for (const cand of ordered) {
        const src = imageSourceFromCandidate(cand);
        if (src) {
          panoPreviewLog(node, "image-resolve", {
            inputName: String(input?.name || ""),
            sourceType: "nodeOutputs",
            stage: "hit",
          });
          return { src, sourceType: "nodeOutputs", inputName: String(input?.name || "") };
        }
      }
    }

    let appNodeImageUrls = [];
    try {
      appNodeImageUrls = typeof app?.getNodeImageUrls === "function" ? (app.getNodeImageUrls(originNode) || []) : [];
    } catch {
      appNodeImageUrls = [];
    }
    if (Array.isArray(appNodeImageUrls) && appNodeImageUrls.length) {
      const ordered = [];
      if (resolvedOriginSlot >= 0 && resolvedOriginSlot < appNodeImageUrls.length) ordered.push(appNodeImageUrls[resolvedOriginSlot]);
      ordered.push(...appNodeImageUrls);
      for (const cand of ordered) {
        const src = imageSourceFromCandidate(cand);
        if (src) {
          panoPreviewLog(node, "image-resolve", {
            inputName: String(input?.name || ""),
            sourceType: "appNodeImageUrls",
            stage: "hit",
          });
          return { src, sourceType: "appNodeImageUrls", inputName: String(input?.name || "") };
        }
      }
    }

    const nodeImgs = Array.isArray(originNode?.imgs) ? originNode.imgs : [];
    if (nodeImgs.length) {
      const ordered = [];
      if (resolvedOriginSlot >= 0 && resolvedOriginSlot < nodeImgs.length) ordered.push(nodeImgs[resolvedOriginSlot]);
      ordered.push(...nodeImgs);
      for (const cand of ordered) {
        const src = imageSourceFromCandidate(cand);
        if (src) {
          panoPreviewLog(node, "image-resolve", {
            inputName: String(input?.name || ""),
            sourceType: "nodeImgs",
            stage: "hit",
          });
          return { src, sourceType: "nodeImgs", inputName: String(input?.name || "") };
        }
      }
    }

    const imageWidget = originNode?.widgets?.find((w) => String(w?.name || "").toLowerCase() === "image");
    if (imageWidget) {
      let src = imageSourceFromCandidate(imageWidget.value);
      if (src && !src.includes("/") && !src.includes(":") && (originNode.comfyClass === "LoadImage" || originNode.type === "LoadImage")) {
        src = api.apiURL(`/view?filename=${encodeURIComponent(src)}&type=input&subfolder=`);
      }
      if (src) {
        panoPreviewLog(node, "image-resolve", {
          inputName: String(input?.name || ""),
          sourceType: "widget",
          stage: "hit",
        });
        return { src, sourceType: "widget", inputName: String(input?.name || "") };
      }
    }
  }

  // Fallback: Check if the current node has explicitly saved input images (e.g. from upstream non-file nodes)
  // We do this check regardless of linked inputs if preferred inputs are exhausted, to support
  // scenarios where the link exists but provides no image data (e.g. some custom nodes).
  const selfOutput = isNodeOutputMediaCurrent(node, "background") ? lookupNodeOutputEntry(node?.id) : null;
  const fallbackCandidates = [];
  if (Array.isArray(selfOutput?.pano_input_images)) fallbackCandidates.push(...selfOutput.pano_input_images);
  if (Array.isArray(selfOutput?.ui?.pano_input_images)) fallbackCandidates.push(...selfOutput.ui.pano_input_images);

  if (fallbackCandidates.length > 0) {
    for (const item of fallbackCandidates) {
      const src = imageSourceFromCandidate(item);
      if (src) {
        panoPreviewLog(node, "image-resolve", { sourceType: "selfOutput", src, stage: "hit" });
        return { src, sourceType: "selfOutput", inputName: "fallback" };
      }
    }
  }

  panoPreviewLog(node, "image-resolve", { stage: "miss" });
  return { src: "", sourceType: "", inputName: "" };
}

function getLinkedInputImage(node, preferredInputNames = [], options = {}) {
  const resolved = findLinkedInputImageSource(node, preferredInputNames);
  const srcRaw = String(resolved?.src || "").trim();
  if (!srcRaw) return null;
  const candidates = buildImageSrcCandidates(srcRaw);
  if (!candidates.length) return null;
  const preserveReadyWhilePending = options?.preserveReadyWhilePending !== false;
  if (!node.__panoLinkedInputImageCache) node.__panoLinkedInputImageCache = new Map();
  const key = preferredInputNames.join("|") || "image";
  const cached = node.__panoLinkedInputImageCache.get(key);
  if (cached && cached.srcRaw === srcRaw && cached.img) return cached.img;
  if (cached && cached.pendingSrcRaw === srcRaw && cached.pendingImg) {
    return (preserveReadyWhilePending && cached.img && (cached.img.complete || cached.img.naturalWidth || cached.img.width))
      ? cached.img
      : cached.pendingImg;
  }

  const img = new Image();
  const cacheEntry = cached || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  cacheEntry.pendingSrcRaw = srcRaw;
  cacheEntry.pendingResolvedSrc = "";
  cacheEntry.pendingImg = img;
  node.__panoLinkedInputImageCache.set(key, cacheEntry);
  let attempt = -1;
  const tryLoadNext = () => {
    attempt += 1;
    if (attempt >= candidates.length) {
      if (node.__panoLinkedInputImageCache?.get?.(key) === cacheEntry && cacheEntry.pendingImg === img) {
        cacheEntry.pendingSrcRaw = "";
        cacheEntry.pendingResolvedSrc = "";
        cacheEntry.pendingImg = null;
        if (!cacheEntry.img) {
          try { node.__panoLinkedInputImageCache?.delete?.(key); } catch { }
        }
      }
      panoPreviewLog(node, "image-load", {
        ok: false,
        src: srcRaw,
        preferredInputNames,
        sourceType: String(resolved?.sourceType || ""),
        attemptCount: candidates.length,
        errorType: "all_candidates_failed",
      });
      return;
    }
    const nextSrc = candidates[attempt];
    cacheEntry.pendingResolvedSrc = nextSrc;
    img.src = nextSrc;
  };

  img.onload = () => {
    if (node.__panoLinkedInputImageCache?.get?.(key) === cacheEntry && cacheEntry.pendingImg === img) {
      cacheEntry.srcRaw = srcRaw;
      cacheEntry.resolvedSrc = String(cacheEntry.pendingResolvedSrc || img.src || "");
      cacheEntry.img = img;
      cacheEntry.pendingSrcRaw = "";
      cacheEntry.pendingResolvedSrc = "";
      cacheEntry.pendingImg = null;
    }
    panoPreviewLog(node, "image-load", {
      ok: true,
      src: srcRaw,
      resolvedSrc: String(cacheEntry.pendingResolvedSrc || cacheEntry.resolvedSrc || img.src || ""),
      preferredInputNames,
      sourceType: String(resolved?.sourceType || ""),
      attemptCount: attempt + 1,
    });
    node.setDirtyCanvas?.(true, true);
  };
  img.onerror = (ev) => {
    if (attempt + 1 < candidates.length) {
      tryLoadNext();
      return;
    }
    if (node.__panoLinkedInputImageCache?.get?.(key) === cacheEntry && cacheEntry.pendingImg === img) {
      cacheEntry.pendingSrcRaw = "";
      cacheEntry.pendingResolvedSrc = "";
      cacheEntry.pendingImg = null;
      if (!cacheEntry.img) {
        try { node.__panoLinkedInputImageCache?.delete?.(key); } catch { }
      }
    }
    panoPreviewLog(node, "image-load", {
      ok: false,
      src: srcRaw,
      resolvedSrc: String(cacheEntry.pendingResolvedSrc || cacheEntry.resolvedSrc || ""),
      preferredInputNames,
      sourceType: String(resolved?.sourceType || ""),
      attemptCount: attempt + 1,
      errorType: String(ev?.type || "error"),
    });
  };
  tryLoadNext();
  return (preserveReadyWhilePending && cacheEntry.img && (cacheEntry.img.complete || cacheEntry.img.naturalWidth || cacheEntry.img.width))
    ? cacheEntry.img
    : img;
}

export function getLinkedInputImageForPreview(node, preferredInputNames = [], onLoad = null, options = {}) {
  const img = getLinkedInputImage(node, preferredInputNames, options);
  if (!img) return null;
  if (typeof onLoad === "function") {
    if (!(img.complete && (img.naturalWidth || img.width))) {
      img.addEventListener("load", () => onLoad(), { once: true });
    }
  }
  return img;
}

function invalidatePreviewImageCaches(node) {
  if (!node) return;
  sharedPreviewImageCache.disposeOwner(node);
  try { node.__panoLinkedInputImageCache?.clear?.(); } catch { }
  try { node.__panoPreviewImageCache?.clear?.(); } catch { }
  node.__panoOwnOutputImageCache = null;
  disposeNodeOutputVideoCache(node);
  node.__panoWrappedErpCache = null;
}

function invalidateBackgroundPreviewMedia(node) {
  if (!node) return;
  try { node.__panoLinkedInputImageCache?.clear?.(); } catch { }
  node.__panoOwnOutputImageCache = null;
  disposeNodeOutputVideoCache(node);
  node.__panoWrappedErpCache = null;
}

function invalidateExternalStickerPreviewImage(node) {
  if (!node) return;
  try { node.__panoPreviewImageCache?.delete?.("sticker_image_1"); } catch { }
}

function ensureRenderCache(node, mode) {
  if (!node.__panoRenderCache) {
    node.__panoRenderCache = {
      mode: String(mode || ""),
      isLoading: false,
      loadingSinceTs: 0,
    };
  }
  const cache = node.__panoRenderCache;
  const nextMode = String(mode || "");
  if (cache.mode !== nextMode) {
    cache.mode = nextMode;
    cache.isLoading = false;
    cache.loadingSinceTs = 0;
  }
  return cache;
}

function setRenderLoading(node, isLoading, src = "") {
  const cache = ensureRenderCache(node, node?.__panoPreviewMode || "unknown");
  const now = performance.now();
  if (isLoading) {
    if (!cache.isLoading) {
      cache.isLoading = true;
      cache.loadingSinceTs = now;
      panoPreviewLog(node, "loading", { phase: "enter", src: String(src || "") });
    }
    return true;
  }
  if (!cache.isLoading) return false;
  const elapsed = now - Number(cache.loadingSinceTs || 0);
  if (elapsed < PANO_LOADING_MIN_MS) return true;
  cache.isLoading = false;
  cache.loadingSinceTs = 0;
  panoPreviewLog(node, "loading", { phase: "exit", src: String(src || "") });
  return false;
}

function getNodeUiScale(canvas, rect) {
  const rw = Math.max(1, Number(rect?.w || 1));
  const rh = Math.max(1, Number(rect?.h || 1));
  const cw = Math.max(1, Number(canvas?.clientWidth || rw));
  const ch = Math.max(1, Number(canvas?.clientHeight || rh));
  const sx = rw / cw;
  const sy = rh / ch;
  const scale = Math.min(sx, sy);
  return Number.isFinite(scale) && scale > 0 ? scale : 1;
}

function drawLoadingOverlay(ctx, rect, uiScale = 1) {
  const x = Number(rect?.x || 0);
  const y = Number(rect?.y || 0);
  const w = Number(rect?.w || 0);
  const h = Number(rect?.h || 0);
  if (w <= 0 || h <= 0) return;
  const fontPx = Math.max(14, Math.round(14 * uiScale));
  const bw = Math.min(Math.round(220 * uiScale), Math.max(Math.round(120 * uiScale), w * 0.44));
  const bh = Math.max(Math.round(34 * uiScale), fontPx + Math.round(14 * uiScale));
  const bx = x + (w - bw) * 0.5;
  const by = y + (h - bh) * 0.5;
  ctx.save();
  ctx.fillStyle = "rgba(20,20,24,0.72)";
  ctx.beginPath();
  ctx.roundRect(bx, by, bw, bh, 8);
  ctx.fill();
  ctx.fillStyle = "rgba(161,161,170,0.95)";
  ctx.font = `600 ${fontPx}px Plus Jakarta Sans, Geist, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Loading...", bx + bw * 0.5, by + bh * 0.5 + 0.5);
  ctx.restore();
}

function fitHintLines(ctx, text, maxWidth, maxFontPx, minFontPx = 12, maxLines = 2) {
  const phrase = String(text || "").trim();
  if (!phrase) {
    return { lines: [], fontPx: minFontPx, lineHeight: Math.round(minFontPx * 1.25) };
  }
  const words = phrase.split(/\s+/).filter(Boolean);
  const hi = Math.max(1, Math.round(maxFontPx));
  const lo = Math.max(1, Math.round(minFontPx));

  const tryWrap = (fontPx) => {
    ctx.font = `600 ${fontPx}px Plus Jakarta Sans, Geist, sans-serif`;
    if (ctx.measureText(phrase).width <= maxWidth) {
      return [phrase];
    }
    if (words.length <= 1) return null;
    const lines = [];
    let current = "";
    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      if (ctx.measureText(next).width <= maxWidth) {
        current = next;
      } else if (!current) {
        return null;
      } else {
        lines.push(current);
        current = word;
      }
    }
    if (current) lines.push(current);
    if (lines.length > maxLines) return null;
    if (lines.some((line) => ctx.measureText(line).width > maxWidth)) return null;
    return lines;
  };

  for (let fontPx = hi; fontPx >= lo; fontPx -= 1) {
    const lines = tryWrap(fontPx);
    if (lines) {
      return { lines, fontPx, lineHeight: Math.round(fontPx * 1.25) };
    }
  }

  const fontPx = lo;
  const lineHeight = Math.round(fontPx * 1.25);
  ctx.font = `600 ${fontPx}px Plus Jakarta Sans, Geist, sans-serif`;
  let fallback = phrase;
  const ellipsis = "...";
  while (fallback.length > 1 && ctx.measureText(`${fallback}${ellipsis}`).width > maxWidth) {
    fallback = fallback.slice(0, -1);
  }
  return { lines: [`${fallback}${ellipsis}`], fontPx, lineHeight };
}

function drawCenteredAutoFitHint(ctx, rect, text, options = {}) {
  const x = Number(rect?.x || 0);
  const y = Number(rect?.y || 0);
  const w = Math.max(1, Number(rect?.w || 0));
  const h = Math.max(1, Number(rect?.h || 0));
  const fontScale = Math.max(0.5, Math.min(2.0, Number(options.fontScale || 1.0)));
  const maxWidth = Math.max(40, w * Number(options.maxWidthRatio || 0.86));
  const maxFontPx = Math.max(10, Math.min(34, Math.round(Math.min(w * 0.09, h * 0.24) * fontScale)));
  const minFontPx = Math.max(8, Math.min(12, Math.round(h * 0.14 * fontScale)));
  const fit = fitHintLines(ctx, text, maxWidth, maxFontPx, minFontPx, 2);
  if (!fit.lines.length) return;

  const totalHeight = fit.lineHeight * fit.lines.length;
  const startY = y + h * 0.5 - totalHeight * 0.5 + fit.lineHeight * 0.5;

  ctx.save();
  ctx.fillStyle = String(options.color || "rgba(161,161,170,0.95)");
  ctx.font = `600 ${fit.fontPx}px Plus Jakarta Sans, Geist, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  fit.lines.forEach((line, idx) => {
    ctx.fillText(line, x + w * 0.5, startY + idx * fit.lineHeight);
  });
  ctx.restore();
}

function setCutoutEmptyHint(node, visible, text = "Connect ERP image") {
  const el = node?.__panoDomPreview?.emptyHintEl;
  if (!el) return;
  el.textContent = String(text || "Connect ERP image");
  el.style.display = visible ? "flex" : "none";
}

function getActiveShot(state) {
  const shots = Array.isArray(state?.shots) ? state.shots : [];
  if (!shots.length) return null;
  const selectedId = String(state?.active?.selected_shot_id || "");
  if (selectedId) {
    const hit = shots.find((s) => String(s?.id || "") === selectedId);
    if (hit) return hit;
  }
  return shots[0] || null;
}

function containRect(outer, aspect) {
  const ox = Number(outer?.x || 0);
  const oy = Number(outer?.y || 0);
  const ow = Math.max(1, Number(outer?.w || 0));
  const oh = Math.max(1, Number(outer?.h || 0));
  const a = Number(aspect) > 0 ? Number(aspect) : 1;
  let w = ow;
  let h = ow / a;
  if (h > oh) {
    h = oh;
    w = oh * a;
  }
  return {
    x: ox + (ow - w) * 0.5,
    y: oy + (oh - h) * 0.5,
    w,
    h,
  };
}

function drawContainedImagePreview(ctx, img, outerRect, dimAlpha = 0) {
  if (!ctx || !img || !outerRect) return false;
  const iw = Math.max(1, Number(img.naturalWidth || img.width || 0));
  const ih = Math.max(1, Number(img.naturalHeight || img.height || 0));
  if (iw <= 1 || ih <= 1) return false;
  const drawRect = containRect(outerRect, iw / ih);
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "low";
  ctx.drawImage(img, drawRect.x, drawRect.y, drawRect.w, drawRect.h);
  const alpha = Math.max(0, Math.min(1, Number(dimAlpha) || 0));
  if (alpha > 0) {
    ctx.fillStyle = `rgba(0,0,0,${alpha})`;
    ctx.fillRect(drawRect.x, drawRect.y, drawRect.w, drawRect.h);
  }
  ctx.restore();
  return true;
}

function getCutoutContainRect(baseRect, shot) {
  const w = Math.max(1, Number(baseRect?.w || 0));
  const h = Math.max(1, Number(baseRect?.h || 0));
  const fallback = { x: Number(baseRect?.x || 0), y: Number(baseRect?.y || 0), w, h };
  if (!shot) return { drawRect: fallback, targetAspect: null };
  const view = buildCutoutViewParamsFromShot(shot);
  const aspect = clamp(Number(view?.aspect || 1), 0.05, 20.0);
  return {
    drawRect: containRect(fallback, aspect),
    targetAspect: aspect,
  };
}

function hasValidCutoutStats(node) {
  const stats = node?.__panoCutoutProjectionStats;
  const tri = Number(stats?.drawnTriCount || 0);
  return Number.isFinite(tri) && tri > 0;
}

function getWrappedErpCanvas(node, img) {
  const state = getCachedState(node);
  if (Number(state?.coverage || 360) === 180) return null;
  if (!img || !img.complete || !(img.naturalWidth || img.width)) return null;
  const iw = Number(img.naturalWidth || img.width || 0);
  const ih = Number(img.naturalHeight || img.height || 0);
  if (iw <= 1 || ih <= 1) return null;
  if (!node.__panoWrappedErpCache) node.__panoWrappedErpCache = { src: "", w: 0, h: 0, canvas: null };
  const src = String(img.src || "");
  const cached = node.__panoWrappedErpCache;
  if (cached.canvas && cached.src === src && cached.w === iw && cached.h === ih) return cached.canvas;
  const cv = document.createElement("canvas");
  cv.width = iw * 2;
  cv.height = ih;
  const cctx = cv.getContext("2d");
  if (!cctx) return null;
  cctx.drawImage(img, 0, 0, iw, ih);
  cctx.drawImage(img, iw, 0, iw, ih);
  node.__panoWrappedErpCache = { src, w: iw, h: ih, canvas: cv };
  return cv;
}

function getNodeWidgetsBottom(node, excludeWidget = null) {
  const widgetTop = 32;
  const widgets = Array.isArray(node.widgets) ? node.widgets : [];
  let y = widgetTop;
  widgets.forEach((w) => {
    if (w === excludeWidget) return;
    if (!w || w.hidden || w.type === "hidden") return;
    let h = 22;
    try {
      const size = typeof w.computeSize === "function" ? w.computeSize(getNodeSize(node)?.[0] || 0) : null;
      if (Array.isArray(size) && Number.isFinite(Number(size[1]))) h = Number(size[1]);
    } catch {
      h = 22;
    }
    y += h;
  });
  return y;
}

function removeNodeWidget(node, widget) {
  return removeTrackedDomWidget(node, widget);
}

function getNodePreviewRect(node) {
  const pad = 8;
  const top = getNodeWidgetsBottom(node) + 2;
  const x = pad;
  const size = getNodeSize(node);
  const w = Math.max(120, Number(size?.[0] || 0) - pad * 2);
  const h = Math.max(84, Number(size?.[1] || 0) - top - pad);
  if (h < 40 || w < 80) return null;
  return { x, y: top, w, h };
}

function getNodeEditorButtonRect(node) {
  if (!node?.__panoPreviewButtonText) return null;
  const pad = 8;
  const y = getNodeWidgetsBottom(node) + 2;
  const size = getNodeSize(node);
  const w = Math.max(120, Number(size?.[0] || 0) - pad * 2);
  return { x: pad, y, w, h: 30 };
}

function getStandaloneLegacyPreviewRect(node) {
  const pad = 8;
  const btn = getNodeEditorButtonRect(node);
  const top = btn ? (btn.y + btn.h + 2) : (getNodeWidgetsBottom(node) + 2);
  const x = pad;
  const size = getNodeSize(node);
  const w = Math.max(120, Number(size?.[0] || 0) - pad * 2);
  const h = Math.max(84, Number(size?.[1] || 0) - top - pad);
  if (h < 40 || w < 80) return null;
  return { x, y: top, w, h };
}

function getNodePreviewResetButtonRect(rect) {
  const w = 50;
  const h = 20;
  const m = 8;
  return { x: rect.x + rect.w - w - m, y: rect.y + rect.h - h - m, w, h };
}

function drawNodeEditorButton(node, ctx) {
  const r = getNodeEditorButtonRect(node);
  if (!r) return;
  const hover = !!node.__panoPreviewBtnHover;
  ctx.save();
  ctx.fillStyle = hover ? "rgba(44, 44, 47, 0.96)" : "rgba(32, 32, 35, 0.96)";
  ctx.strokeStyle = "rgba(98, 98, 105, 0.9)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(r.x, r.y, r.w, r.h, 7);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "rgba(244, 244, 246, 0.95)";
  ctx.font = "500 12px Plus Jakarta Sans, Geist, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(node.__panoPreviewButtonText || "Open Editor"), r.x + r.w * 0.5, r.y + r.h * 0.5 + 0.5);
  ctx.restore();
}

function getNodePreviewImage(node, assetId, asset, sceneItem = null) {
  const key = String(assetId || "");
  if (!key) return null;
  let src = stickerAssetToPreviewSrc(asset);
  if (!src && sceneItem?.external) {
    if (!isNodeOutputMediaCurrent(node, "external-sticker")) return null;
    const ownOutput = node.__panoLastExecutedOutput || lookupNodeOutputEntry(node?.id);
    const candidates = ownOutput?.ui?.pano_sticker_input_images
      || ownOutput?.pano_sticker_input_images
      || [];
    for (const candidate of Array.isArray(candidates) ? candidates : [candidates]) {
      src = imageSourceFromCandidate(candidate);
      if (src) break;
    }
  }
  if (!src) return null;
  const stateHashValue = ownOutputUiValue(node, "pano_sticker_input_state_hash");
  const stateHash = sceneItem?.external ? String(stateHashValue ?? "") : "";
  const revision = sceneItem?.external ? Number(node.__panoOwnOutputRev || 0) : 0;
  const resolvedSrc = sceneItem?.external ? appendImageRevision(src, revision) : src;
  const sharedKey = buildSharedImageCacheKey(src, stateHash, revision);
  const img = sharedPreviewImageCache.get(node, sharedKey, resolvedSrc, (image, succeeded) => {
    if (!succeeded) return;
    if (sceneItem?.external) runExternalStickerSync(node, "image-loaded");
    node.__panoDomPreview?.requestDraw?.();
  });
  return img || null;
}

function waitForImageReady(img, timeoutMs = 3000) {
  if (!img) return Promise.resolve(false);
  if (img.complete && Number(img.naturalWidth || img.width || 0) > 0) return Promise.resolve(true);
  return new Promise((resolve) => {
    let settled = false;
    const finish = (ok) => {
      if (settled) return;
      settled = true;
      img.removeEventListener?.("load", onLoad);
      img.removeEventListener?.("error", onError);
      clearTimeout(timer);
      resolve(ok);
    };
    const onLoad = () => finish(true);
    const onError = () => finish(false);
    const timer = setTimeout(() => finish(!!(img.complete && Number(img.naturalWidth || img.width || 0) > 0)), timeoutMs);
    img.addEventListener?.("load", onLoad, { once: true });
    img.addEventListener?.("error", onError, { once: true });
  });
}

function getSortedStickers(node, state) {
  const stickers = Array.isArray(state?.stickers) ? state.stickers : [];
  const cache = node.__panoStickerSortCache;
  if (cache?.source === stickers && Array.isArray(cache.sorted)) return cache.sorted;
  const sorted = [...stickers].sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
  node.__panoStickerSortCache = { source: stickers, sorted };
  return sorted;
}

function buildRuntimePreviewScene(node, state) {
  return buildStickerSceneFromState(state, {
    selectedId: null,
    hoveredId: null,
  });
}

function buildRuntimePreviewTextures(node, state, scene) {
  return buildStickerTexturesFromState(
    state,
    (assetId, asset, item) => getNodePreviewImage(node, assetId, asset, item),
    { scene },
  );
}

async function ensureRuntimePreviewTextures(node, state, scene, timeoutMs = 3000) {
  const assets = (state && typeof state === "object" && state.assets && typeof state.assets === "object")
    ? state.assets
    : {};
  const seen = new Set();
  const pending = [];
  const stickers = Array.isArray(scene?.stickers) ? scene.stickers : [];
  stickers.forEach((item) => {
    const assetId = String(item?.assetId || "").trim();
    const textureId = assetId || (item?.external ? String(item?.id || "").trim() : "");
    if (!textureId || seen.has(textureId)) return;
    seen.add(textureId);
    const asset = assetId ? assets[assetId] : null;
    const img = getNodePreviewImage(node, textureId, asset);
    if (img) pending.push(waitForImageReady(img, timeoutMs));
  });
  if (pending.length > 0) {
    await Promise.allSettled(pending);
  }
  return buildRuntimePreviewTextures(node, state, scene);
}

function buildRuntimeCutoutLayerEntries(node, state) {
  const engine = getNodePreviewPaintEngine(node, state);
  const orderedGroups = getPreviewOrderedGroupIds(state);
  const groups = Array.isArray(state?.painting?.groups) ? state.painting.groups : [];
  const zByGroup = new Map(
    groups
      .filter((group) => group && typeof group === "object")
      .map((group) => [String(group?.actionGroupId || group?.id || "").trim(), Number(group?.z_index || 0)]),
  );
  const groupEntries = engine ? orderedGroups.map((gid) => {
    const source = engine.getGroupDisplayCanvas(gid);
    if (!source) return null;
    return {
      id: `paint_group:${gid}`,
      source,
      revision: `${String(node.__panoPreviewPaintRevisionKey || "")}:${gid}`,
      zIndex: Number(zByGroup.get(gid) || 0),
      opacity: 1,
      visible: true,
    };
  }).filter(Boolean) : [];
  const rasterObjects = Array.isArray(state?.painting?.raster_objects)
    ? state.painting.raster_objects
    : [];
  if (rasterObjects.length === 0) {
    node.__panoRasterObjectSurfaceCache?.retain?.([]);
    return groupEntries;
  }
  if (!node.__panoRasterObjectSurfaceCache) {
    node.__panoRasterObjectSurfaceCache = createRasterObjectSurfaceCache();
  }
  if (!node.__panoRasterObjectReady) {
    node.__panoRasterObjectReady = () => node.__panoDomPreview?.requestDraw?.();
  }
  const previewSize = resolveRasterPreviewSize(state?.output_preset);
  const retainedRasterIds = rasterObjects
    .filter((item) => item?.visible !== false && String(item?.layerKind || "paint") === "paint")
    .map((item) => String(item?.id || ""));
  node.__panoRasterObjectSurfaceCache.retain(retainedRasterIds);
  const rasterEntries = rasterObjects.map((item) => {
    const resolved = node.__panoRasterObjectSurfaceCache.get(
      item,
      previewSize.width,
      previewSize.height,
      node.__panoRasterObjectReady,
    );
    if (!resolved) return null;
    return {
      id: `raster:${String(item?.id || "")}`,
      source: resolved.source,
      revision: resolved.revision,
      zIndex: Number(item?.z_index || 0),
      opacity: 1,
      visible: item?.visible !== false,
    };
  }).filter(Boolean);
  return [...groupEntries, ...rasterEntries];
}

function syncRuntimeCutoutComposite(node, state, bgImg, revisionScope = "") {
  const scene = buildRuntimePreviewScene(node, state);
  const textures = buildRuntimePreviewTextures(node, state, scene);
  const layerEntries = buildRuntimeCutoutLayerEntries(node, state);
  const mediaRevision = getRenderableMediaRevisionToken(bgImg);
  const mediaSize = getSourcePixelSize(bgImg);
  const descriptor = buildPanoramaCompositeDescriptor({
    stateRevision: [
      "runtime_cutout_scene",
      mediaRevision,
      mediaSize.width,
      mediaSize.height,
      Number(state?.coverage || 360) === 180 ? 180 : 360,
      String(revisionScope || ""),
      Array.isArray(textures) ? textures.map((item) => `${String(item?.assetId || "")}:${String(item?.revision || "")}`).join(",") : "",
      Array.isArray(layerEntries) ? layerEntries.map((entry) => `${String(entry?.id || "")}:${String(entry?.revision || "")}:${Number(entry?.zIndex || 0)}`).join(",") : "",
    ].join("|"),
    backgroundSource: bgImg,
    backgroundRevision: mediaRevision,
    coverageDeg: Number(state?.coverage || 360) === 180 ? 180 : 360,
    scene,
    textures,
    rasterEntries: layerEntries,
    backgroundOpacity: 1,
    showMaskTint: false,
  });
  if (!node.__panoRuntimeCore) node.__panoRuntimeCore = createPanoramaRenderCore();
  node.__panoRuntimeCore.syncState(descriptor);
  return node.__panoRuntimeCore;
}


function expandTri(d0, d1, d2, px = 0.45) {
  const cx = (d0.x + d1.x + d2.x) / 3;
  const cy = (d0.y + d1.y + d2.y) / 3;
  const grow = (p) => {
    const vx = p.x - cx;
    const vy = p.y - cy;
    const ll = Math.hypot(vx, vy) || 1;
    return { x: p.x + (vx / ll) * px, y: p.y + (vy / ll) * px };
  };
  return [grow(d0), grow(d1), grow(d2)];
}

function drawImageTri(ctx, img, s0, s1, s2, d0, d1, d2) {
  const den = (s0.x * (s1.y - s2.y) + s1.x * (s2.y - s0.y) + s2.x * (s0.y - s1.y));
  if (Math.abs(den) < 1e-6) return;
  const [e0, e1, e2] = expandTri(d0, d1, d2, Number(ctx.__panoTriExpandPx || 0.45));
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(e0.x, e0.y);
  ctx.lineTo(e1.x, e1.y);
  ctx.lineTo(e2.x, e2.y);
  ctx.closePath();
  ctx.clip();
  const m11 = (d0.x * (s1.y - s2.y) + d1.x * (s2.y - s0.y) + d2.x * (s0.y - s1.y)) / den;
  const m12 = (d0.x * (s2.x - s1.x) + d1.x * (s0.x - s2.x) + d2.x * (s1.x - s0.x)) / den;
  const m13 = (d0.x * (s1.x * s2.y - s2.x * s1.y) + d1.x * (s2.x * s0.y - s0.x * s2.y) + d2.x * (s0.x * s1.y - s1.x * s0.y)) / den;
  const m21 = (d0.y * (s1.y - s2.y) + d1.y * (s2.y - s0.y) + d2.y * (s0.y - s1.y)) / den;
  const m22 = (d0.y * (s2.x - s1.x) + d1.y * (s0.x - s2.x) + d2.y * (s1.x - s0.x)) / den;
  const m23 = (d0.y * (s1.x * s2.y - s2.x * s1.y) + d1.y * (s2.x * s0.y - s0.x * s2.y) + d2.y * (s0.x * s1.y - s1.x * s0.y)) / den;
  ctx.transform(m11, m21, m12, m22, m13, m23);
  ctx.drawImage(img, 0, 0);
  ctx.restore();
}

function projectDirToPreview(dir, viewBasis, rect, tanHalfY) {
  const cx = dot(dir, viewBasis.right);
  const cy = dot(dir, viewBasis.up);
  const cz = dot(dir, viewBasis.fwd);
  if (cz <= 1e-4) return null;
  const sy = (cy / cz) / tanHalfY;
  const sx = (cx / cz) / tanHalfY;
  return { x: rect.x + rect.w * 0.5 + sx * rect.h * 0.5, y: rect.y + rect.h * 0.5 - sy * rect.h * 0.5 };
}



function drawSticker(ctx, node, rect, viewBasis, tanHalfY, state, item, Nu = 12, Nv = 9) {
  const previewItem = normalizeStickerItem(item);
  if (!previewItem || previewItem.visible === false) return;
  const hf = clamp(Number(item.hFOV_deg || 30), 1, 179) * DEG2RAD;
  const vf = clamp(Number(item.vFOV_deg || 30), 1, 179) * DEG2RAD;
  const tx = Math.tan(hf * 0.5);
  const ty = Math.tan(vf * 0.5);
  const crop = item.crop || {};
  const c0x = clamp(Number(crop.x0 ?? 0), 0, 1);
  const c0y = clamp(Number(crop.y0 ?? 0), 0, 1);
  const c1x = clamp(Number(crop.x1 ?? 1), 0, 1);
  const c1y = clamp(Number(crop.y1 ?? 1), 0, 1);
  const cw = Math.max(1e-4, c1x - c0x);
  const ch = Math.max(1e-4, c1y - c0y);
  const basis = cameraBasis(Number(item.yaw_deg || 0), Number(item.pitch_deg || 0), Number(item.rot_deg || item.roll_deg || 0));
  const vertsX = [];
  const vertsY = [];
  const sampleX = [];
  const sampleY = [];

  for (let j = 0; j <= Nv; j++) {
    const v = j / Nv;
    const vv = c0y + v * ch;
    const yScaled = (1 - vv * 2) * ty;

    for (let i = 0; i <= Nu; i++) {
      const u = i / Nu;
      const uu = c0x + u * cw;
      const xScaled = (uu * 2 - 1) * tx;

      // Inlined dot, add, mul, norm
      const dx = basis.fwd.x + basis.right.x * xScaled + basis.up.x * yScaled;
      const dy = basis.fwd.y + basis.right.y * xScaled + basis.up.y * yScaled;
      const dz = basis.fwd.z + basis.right.z * xScaled + basis.up.z * yScaled;
      const mag = Math.hypot(dx, dy, dz) || 1e-8;
      const nx = dx / mag;
      const ny = dy / mag;
      const nz = dz / mag;

      // Inlined projectDirToPreview
      const pcx = nx * viewBasis.right.x + ny * viewBasis.right.y + nz * viewBasis.right.z;
      const pcy = nx * viewBasis.up.x + ny * viewBasis.up.y + nz * viewBasis.up.z;
      const pcz = nx * viewBasis.fwd.x + ny * viewBasis.fwd.y + nz * viewBasis.fwd.z;

      if (pcz <= 1e-4) {
        if (!vertsX[j]) vertsX[j] = [];
        if (!vertsY[j]) vertsY[j] = [];
        vertsX[j][i] = null;
        vertsY[j][i] = null;
      } else {
        const sy = (pcy / pcz) / tanHalfY;
        const sx = (pcx / pcz) / tanHalfY;
        if (!vertsX[j]) vertsX[j] = [];
        if (!vertsY[j]) vertsY[j] = [];
        vertsX[j][i] = rect.x + rect.w * 0.5 + sx * rect.h * 0.5;
        vertsY[j][i] = rect.y + rect.h * 0.5 - sy * rect.h * 0.5;
      }
      if (!sampleX[j]) sampleX[j] = [];
      if (!sampleY[j]) sampleY[j] = [];
      sampleX[j][i] = u;
      sampleY[j][i] = v;
    }
  }

  const textureId = String(previewItem?.assetId || "");
  const asset = state.assets?.[textureId];
  const img = getNodePreviewImage(node, textureId, asset, previewItem);
  if (!img || !img.complete || !(img.naturalWidth || 0)) return;
  const iw = Number(img.naturalWidth || img.width || 1);
  const ih = Number(img.naturalHeight || img.height || 1);
  const triExpand = (Nu < 10) ? 0.35 : 0.45;
  ctx.__panoTriExpandPx = triExpand;

  for (let j = 0; j < Nv; j++) {
    for (let i = 0; i < Nu; i++) {
      const x00 = vertsX[j][i];
      const y00 = vertsY[j][i];
      const x10 = vertsX[j][i + 1];
      const y10 = vertsY[j][i + 1];
      const x01 = vertsX[j + 1][i];
      const y01 = vertsY[j + 1][i];
      const x11 = vertsX[j + 1][i + 1];
      const y11 = vertsY[j + 1][i + 1];
      if (x00 === null || x10 === null || x01 === null || x11 === null) continue;

      const s00x = sampleX[j][i] * iw, s00y = sampleY[j][i] * ih;
      const s10x = sampleX[j][i + 1] * iw, s10y = sampleY[j][i + 1] * ih;
      const s01x = sampleX[j + 1][i] * iw, s01y = sampleY[j + 1][i] * ih;
      const s11x = sampleX[j + 1][i + 1] * iw, s11y = sampleY[j + 1][i + 1] * ih;

      drawImageTri(ctx, img, { x: s00x, y: s00y }, { x: s10x, y: s10y }, { x: s11x, y: s11y }, { x: x00, y: y00 }, { x: x10, y: y10 }, { x: x11, y: y11 });
      drawImageTri(ctx, img, { x: s00x, y: s00y }, { x: s11x, y: s11y }, { x: s01x, y: s01y }, { x: x00, y: y00 }, { x: x11, y: y11 }, { x: x01, y: y01 });
    }
  }
}

function applyPreviewInertia(node, ts = performance.now()) {
  const m = node.__panoPreviewInertia;
  if (!m || !m.active || !node.__panoPreviewView) return;
  const dt = m.lastTs > 0 ? Math.max(0.001, (ts - m.lastTs) / 1000) : (1 / 60);
  m.lastTs = ts;
  node.__panoPreviewView.yaw = wrapYaw(Number(node.__panoPreviewView.yaw || 0) + m.vx * dt);
  node.__panoPreviewView.pitch = clamp(Number(node.__panoPreviewView.pitch || 0) + m.vy * dt, -89.9, 89.9);
  const damping = Math.exp(-5.5 * dt);
  m.vx *= damping;
  m.vy *= damping;
  if (Math.abs(m.vx) < 0.8 && Math.abs(m.vy) < 0.8) {
    m.vx = 0;
    m.vy = 0;
    m.active = false;
  } else {
    node.setDirtyCanvas?.(true, false);
  }
}

function drawPanoramaPreview(node, ctx, interaction = null) {
  const mode = String(node.__panoPreviewMode || "stickers");
  const state = getCachedState(node);
  const rect = getNodePreviewRect(node);
  if (!rect) return;

  if (!node.__panoPreviewView) node.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 };

  const viewBasis = cameraBasis(Number(node.__panoPreviewView.yaw || 0), Number(node.__panoPreviewView.pitch || 0), 0);
  const tanHalfY = Math.tan((Number(node.__panoPreviewView.fov || 100) * DEG2RAD) * 0.5);

  ctx.save();
  ctx.fillStyle = "#1a1a1e";
  ctx.strokeStyle = "#3f3f46";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(rect.x, rect.y, rect.w, rect.h, 8);
  ctx.fill();
  ctx.stroke();
  ctx.clip();

  const bgImg = getLinkedInputImageForPreview(
    node,
    preferredImageInputsForNode(node, ["erp_image", "bg_erp"]),
    () => { node.__panoDomPreview?.requestDraw?.(); node.setDirtyCanvas?.(true, false); }
  );
  const bgReady = !!(bgImg && bgImg.complete && (bgImg.naturalWidth || bgImg.width));

  const resizingNow = isPreviewResizing(node);
  const movingBase = interaction?.state ? (interaction.state.inertia.active || interaction.state.drag.active) : false;
  const moving = resizingNow || movingBase;
  const mesh = STANDALONE_MESH_LOW;

  const scene = buildRuntimePreviewScene(node, state);
  const textures = buildRuntimePreviewTextures(node, state, scene);
  const view = buildPanoramaViewParamsFromRuntime(node.__panoPreviewView, state?.coverage);
  let drawn = false;
  if (!node.__panoRuntimeCore) node.__panoRuntimeCore = createPanoramaRenderCore();
  if (bgReady) {
    const descriptor = buildStickerRenderDescriptor({
      stateRevision: [
        "runtime_panorama_scene",
        String(bgImg.currentSrc || bgImg.src || ""),
        Number(bgImg.naturalWidth || bgImg.width || 0),
        Number(bgImg.naturalHeight || bgImg.height || 0),
        Number(state?.coverage || 360) === 180 ? 180 : 360,
        Array.isArray(textures) ? textures.map((item) => `${String(item?.assetId || "")}:${String(item?.revision || "")}`).join(",") : "",
      ].join("|"),
      backgroundSource: bgImg,
      backgroundRevision: [
        String(bgImg.currentSrc || bgImg.src || ""),
        Number(bgImg.naturalWidth || bgImg.width || 0),
        Number(bgImg.naturalHeight || bgImg.height || 0),
      ].join("|"),
      coverageDeg: Number(state?.coverage || 360) === 180 ? 180 : 360,
      scene,
      textures,
      backgroundOpacity: 1,
      showMaskTint: false,
    });
    const synced = node.__panoRuntimeCore.syncState(descriptor);
    const surface = synced
      ? node.__panoRuntimeCore.renderToTarget("runtime_preview", view, {
        width: rect.w,
        height: rect.h,
        dpr: window.devicePixelRatio || 1,
      })
      : null;
    drawn = !!surface;
    if (surface) ctx.drawImage(surface, rect.x, rect.y, rect.w, rect.h);
  }
  const stickerNu = moving ? 8 : 12;
  const stickerNv = moving ? 6 : 9;
  const stickers = getSortedStickers(node, state);

  // Always draw grid if no background or if specifically needed for orientation
  if (!bgReady || stickers.length === 0) {
    const uiScale = getNodeUiScale(ctx?.canvas, rect);
    drawPanoGrid(ctx, rect, viewBasis, tanHalfY, uiScale);
  }

  if (!drawn && bgReady) {
    drawErpBackground(node, ctx, rect, viewBasis, tanHalfY, bgImg, mesh);
  }

  if (!drawn && stickers.length > 0) {
    stickers.forEach((item) => drawSticker(ctx, node, rect, viewBasis, tanHalfY, state, item, stickerNu, stickerNv));
  }
  ctx.restore();
}

function buildStickerPreviewDescriptor(bgImg, state, scene, textures, keyPrefix = "preview_scene", bgRevision = "") {
  const resolvedBgRevision = String(
    bgRevision
    || [
      String(bgImg?.currentSrc || bgImg?.src || ""),
      Number(bgImg?.naturalWidth || bgImg?.width || 0),
      Number(bgImg?.naturalHeight || bgImg?.height || 0),
    ].join("|")
  );
  return buildStickerRenderDescriptor({
    stateRevision: [
      keyPrefix,
      resolvedBgRevision,
      Number(state?.coverage || 360) === 180 ? 180 : 360,
      Array.isArray(textures) ? textures.map((item) => `${String(item?.assetId || "")}:${String(item?.revision || "")}`).join(",") : "",
    ].join("|"),
    backgroundSource: bgImg,
    backgroundRevision: resolvedBgRevision,
    coverageDeg: Number(state?.coverage || 360) === 180 ? 180 : 360,
    scene,
    textures,
    backgroundOpacity: 1,
    showMaskTint: false,
  });
}

export function localPosFromEvent(node, e, arg2, canvas) {
  if (Array.isArray(arg2) && arg2.length >= 2) return { x: arg2[0], y: arg2[1] };
  if (arg2 && typeof arg2 === "object" && Number.isFinite(Number(arg2.x)) && Number.isFinite(Number(arg2.y))) {
    return { x: Number(arg2.x), y: Number(arg2.y) };
  }
  if (canvas && Array.isArray(canvas.graph_mouse) && canvas.graph_mouse.length >= 2) {
    return {
      x: Number(canvas.graph_mouse[0]) - Number(node?.pos?.[0] || 0),
      y: Number(canvas.graph_mouse[1]) - Number(node?.pos?.[1] || 0),
    };
  }
  if (canvas && typeof canvas.convertEventToCanvasOffset === "function" && e) {
    try {
      const p = canvas.convertEventToCanvasOffset(e);
      if (Array.isArray(p) && p.length >= 2) {
        return {
          x: Number(p[0]) - Number(node?.pos?.[0] || 0),
          y: Number(p[1]) - Number(node?.pos?.[1] || 0),
        };
      }
    } catch {
      // ignore
    }
  }
  if (Number.isFinite(Number(e?.canvasX)) && Number.isFinite(Number(e?.canvasY))) {
    return {
      x: Number(e.canvasX) - Number(node?.pos?.[0] || 0),
      y: Number(e.canvasY) - Number(node?.pos?.[1] || 0),
    };
  }
  const fromClient = localPosFromClientEvent(node, e, canvas);
  if (fromClient) return fromClient;
  return null;
}

function canvasGraphPosFromClient(e, canvas) {
  const clientX = Number(e?.clientX);
  const clientY = Number(e?.clientY);
  if (!Number.isFinite(clientX) || !Number.isFinite(clientY)) return null;
  const cv = canvas?.canvas || canvas?.canvasEl || canvas?.canvas_element || canvas?.front_canvas || null;
  const rect = cv?.getBoundingClientRect?.();
  const ds = canvas?.ds || app?.canvas?.ds;
  if (!rect || !ds) return null;
  const scale = Number(ds.scale || 1);
  if (!Number.isFinite(scale) || Math.abs(scale) < 1e-6) return null;
  const off = Array.isArray(ds.offset) ? ds.offset : [0, 0];
  const gx = (clientX - Number(rect.left || 0)) / scale - Number(off[0] || 0);
  const gy = (clientY - Number(rect.top || 0)) / scale - Number(off[1] || 0);
  if (!Number.isFinite(gx) || !Number.isFinite(gy)) return null;
  return { x: gx, y: gy };
}

function localPosFromClientEvent(node, e, canvas) {
  const graphPos = canvasGraphPosFromClient(e, canvas || app?.canvas);
  if (!graphPos) return null;
  return {
    x: graphPos.x - Number(node?.pos?.[0] || 0),
    y: graphPos.y - Number(node?.pos?.[1] || 0),
  };
}

function isLeftButtonPressed(e) {
  if (Number(e?.button) === 0 && String(e?.type || "").toLowerCase().includes("down")) return true;
  if (String(e?.type || "").toLowerCase() === "mouseup") return false;
  if (typeof e?.buttons === "number") return (e.buttons & 1) === 1;
  if (typeof e?.which === "number") return e.which === 1;
  if (typeof e?.button === "number") return e.button === 0;
  return false;
}

// Returns the display paint canvas for a node's paint state, or null if there are no strokes.
// Creates and caches a lightweight paint engine per node; rebuilds only when the stroke list changes.
function getDesiredPreviewPaintDescriptor(node, state) {
  // Match the modal editor's ERP paint workspace exactly.
  // Paint strokes are authored in panorama UV space, so inheriting arbitrary
  // linked-image dimensions here can squash/stretch the node preview and any
  // browser-rendered cutout export built from this preview engine.
  const presetWidth = Math.max(1, Number(state?.output_preset || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: presetWidth,
    height: Math.max(1, Math.round(presetWidth * 0.5)),
  };
}

function getNodePreviewPaintEngine(node, state) {
  const strokes = state?.painting?.paint?.strokes;
  const maskStrokes = state?.painting?.mask?.strokes;
  const hasPaint = Array.isArray(strokes) && strokes.length > 0;
  const hasMask = Array.isArray(maskStrokes) && maskStrokes.length > 0;
  if (!hasPaint && !hasMask) return null;

  const descriptor = getDesiredPreviewPaintDescriptor(node, state);
  const descriptorKey = `${descriptor.width}x${descriptor.height}`;
  if (!node.__panoPreviewPaintEngine || node.__panoPreviewPaintDescriptorKey !== descriptorKey) {
    node.__panoPreviewPaintEngine = createPaintEngineManager(descriptor);
    node.__panoPreviewPaintDescriptorKey = descriptorKey;
    node.__panoPreviewPaintRevision = null;
    node.__panoPreviewPaintRevisionKey = "";
  }

  const revision = {
    paint: strokes || null,
    mask: maskStrokes || null,
    groups: state?.painting?.groups || null,
    rasterObjects: state?.painting?.raster_objects || null,
  };

  if (
    node.__panoPreviewPaintRevision?.paint !== revision.paint
    || node.__panoPreviewPaintRevision?.mask !== revision.mask
    || node.__panoPreviewPaintRevision?.groups !== revision.groups
    || node.__panoPreviewPaintRevision?.rasterObjects !== revision.rasterObjects
  ) {
    node.__panoPreviewPaintRevision = revision;
    node.__panoPreviewPaintRevisionKey = [
      hasPaint ? "p1" : "p0",
      hasMask ? "m1" : "m0",
      String(Array.isArray(state?.painting?.groups) ? state.painting.groups.length : 0),
      String(Array.isArray(state?.painting?.raster_objects) ? state.painting.raster_objects.length : 0),
    ].join(":");
    node.__panoPreviewPaintEngine.rebuildCommitted(state);
  }

  return node.__panoPreviewPaintEngine;
}

function getPreviewOrderedGroupIds(state) {
  const groups = Array.isArray(state?.painting?.groups) ? state.painting.groups : [];
  return groups
    .filter((group) => group && typeof group === "object")
    .slice()
    .sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0))
    .map((group) => String(group?.actionGroupId || group?.id || "").trim())
    .filter(Boolean);
}

function getNodePreviewPaintCanvas(node, state) {
  const engine = getNodePreviewPaintEngine(node, state);
  if (!engine) return null;
  const orderedGroupIds = getPreviewOrderedGroupIds(state);
  return engine.getErpTarget(orderedGroupIds).displayPaint.canvas;
}

function getPaintingLayerPaintImage(node, state, onLoad = null) {
  const asset = state?.painting_layer?.paint;
  const src = imageSourceFromCandidate(asset);
  if (!src) return null;
  if (!node.__panoPaintingLayerImageCache) node.__panoPaintingLayerImageCache = { src: "", img: null };
  const cached = node.__panoPaintingLayerImageCache;
  if (cached.img && cached.src === src) return cached.img;
  const img = new Image();
  img.onload = () => {
    onLoad?.();
    node.setDirtyCanvas?.(true, true);
  };
  img.onerror = () => {
    if (node.__panoPaintingLayerImageCache?.img === img) {
      node.__panoPaintingLayerImageCache = { src: "", img: null };
    }
  };
  img.src = src;
  node.__panoPaintingLayerImageCache = { src, img };
  return img;
}

function getNodePreviewPaintSurface(node, state) {
  const livePaint = node?.__panoLivePaintSurface;
  if (livePaint?.source) {
    return {
      source: livePaint.source,
      revision: String(livePaint.revision || ""),
    };
  }
  const hasRasterObjects = Array.isArray(state?.painting?.raster_objects) && state.painting.raster_objects.length > 0;
  if (hasRasterObjects) {
    const uploadedPaint = getPaintingLayerPaintImage(node, state, () => node.__panoDomPreview?.requestDraw?.());
    if (uploadedPaint && (uploadedPaint.complete || uploadedPaint.naturalWidth || uploadedPaint.width)) {
      return {
        source: uploadedPaint,
        revision: String(state?.painting_layer?.revision || uploadedPaint.currentSrc || uploadedPaint.src || ""),
      };
    }
  }
  const paintCanvas = getNodePreviewPaintCanvas(node, state);
  if (paintCanvas) {
    return {
      source: paintCanvas,
      revision: String(node.__panoPreviewPaintRevisionKey || ""),
    };
  }
  return null;
}

function getSourcePixelSize(source) {
  return {
    width: Math.max(1, Number(source?.naturalWidth || source?.videoWidth || source?.width || 0)),
    height: Math.max(1, Number(source?.naturalHeight || source?.videoHeight || source?.height || 0)),
  };
}

function getOrCreateSizedCanvas(owner, key, width, height) {
  let surface = owner?.[key] || null;
  if (!surface || surface.width !== width || surface.height !== height) {
    surface = document.createElement("canvas");
    surface.width = width;
    surface.height = height;
    owner[key] = surface;
  }
  return surface;
}

function compositeScaledOverlayOntoOpaqueCanvas(owner, targetCtx, overlaySource, dstW, dstH, scratchKey) {
  if (!targetCtx || !overlaySource || !(dstW > 0) || !(dstH > 0)) return;
  const srcSize = getSourcePixelSize(overlaySource);
  if (srcSize.width === dstW && srcSize.height === dstH) {
    targetCtx.drawImage(overlaySource, 0, 0, dstW, dstH);
    return;
  }
  const scratch = getOrCreateSizedCanvas(owner, scratchKey, srcSize.width, srcSize.height);
  const scratchCtx = scratch.getContext("2d", { willReadFrequently: true });
  if (!scratchCtx) {
    targetCtx.drawImage(overlaySource, 0, 0, dstW, dstH);
    return;
  }
  try {
    scratchCtx.clearRect(0, 0, srcSize.width, srcSize.height);
    scratchCtx.drawImage(overlaySource, 0, 0, srcSize.width, srcSize.height);
    const srcData = scratchCtx.getImageData(0, 0, srcSize.width, srcSize.height).data;
    const dstImage = targetCtx.getImageData(0, 0, dstW, dstH);
    const dstData = dstImage.data;
    const maxSrcX = Math.max(0, srcSize.width - 1);
    const maxSrcY = Math.max(0, srcSize.height - 1);
    for (let y = 0; y < dstH; y += 1) {
      const sy = ((y + 0.5) * srcSize.height) / dstH - 0.5;
      const y0 = clamp(Math.floor(sy), 0, maxSrcY);
      const y1 = clamp(y0 + 1, 0, maxSrcY);
      const ty = clamp(sy - y0, 0, 1);
      for (let x = 0; x < dstW; x += 1) {
        const sx = ((x + 0.5) * srcSize.width) / dstW - 0.5;
        const x0 = clamp(Math.floor(sx), 0, maxSrcX);
        const x1 = clamp(x0 + 1, 0, maxSrcX);
        const tx = clamp(sx - x0, 0, 1);
        let srcA = 0;
        let srcR = 0;
        let srcG = 0;
        let srcB = 0;
        const sample = (px, py, weight) => {
          const idx = (py * srcSize.width + px) * 4;
          const a = (srcData[idx + 3] || 0) / 255;
          srcA += a * weight;
          srcR += ((srcData[idx] || 0) / 255) * a * weight;
          srcG += ((srcData[idx + 1] || 0) / 255) * a * weight;
          srcB += ((srcData[idx + 2] || 0) / 255) * a * weight;
        };
        sample(x0, y0, (1 - tx) * (1 - ty));
        sample(x1, y0, tx * (1 - ty));
        sample(x0, y1, (1 - tx) * ty);
        sample(x1, y1, tx * ty);
        if (srcA <= 1e-6) continue;
        const dstIdx = (y * dstW + x) * 4;
        const invA = 1 - srcA;
        dstData[dstIdx] = Math.round(clamp((srcR + (dstData[dstIdx] / 255) * invA) * 255, 0, 255));
        dstData[dstIdx + 1] = Math.round(clamp((srcG + (dstData[dstIdx + 1] / 255) * invA) * 255, 0, 255));
        dstData[dstIdx + 2] = Math.round(clamp((srcB + (dstData[dstIdx + 2] / 255) * invA) * 255, 0, 255));
        dstData[dstIdx + 3] = 255;
      }
    }
    targetCtx.putImageData(dstImage, 0, 0);
  } catch {
    targetCtx.drawImage(overlaySource, 0, 0, dstW, dstH);
  }
}

// Returns a canvas with bgImg and the paint layer pre-composited (ERP space).
// Cached and invalidated when either bg or paint changes.
function buildBgPaintCanvas(node, bgImg, paintCanvas, paintRev) {
  const bgW = Math.max(1, Number(bgImg.naturalWidth || bgImg.width || 0));
  const bgH = Math.max(1, Number(bgImg.naturalHeight || bgImg.height || 0));
  const bgSrc = String(bgImg.currentSrc || bgImg.src || "");
  const revKey = `${bgSrc}|${bgW}x${bgH}|${paintRev}`;

  let comp = node.__panoPreviewBgPaint;
  if (!comp || comp.__revKey !== revKey || comp.width !== bgW || comp.height !== bgH) {
    if (!comp || comp.width !== bgW || comp.height !== bgH) {
      comp = document.createElement("canvas");
      comp.width = bgW;
      comp.height = bgH;
      node.__panoPreviewBgPaint = comp;
      // Canvas resize resets context state — revKey will also be stale, so always repaint below.
    }
    const compCtx = comp.getContext("2d");
    compCtx.clearRect(0, 0, bgW, bgH);
    compCtx.drawImage(bgImg, 0, 0, bgW, bgH);
    compositeScaledOverlayOntoOpaqueCanvas(node, compCtx, paintCanvas, bgW, bgH, "__panoPreviewOverlayScratch");
    comp.__revKey = revKey;
  }
  return comp;
}

function drawStickerSelectionOverlay(ctx, item, camera, viewport) {
  const geometry = buildStickerGeometry(item, camera, viewport);
  if (!geometry.visible) return null;
  const accent = stickerSelectionAccent(item);
  ctx.save();
  drawStickerSelectionBoundary(ctx, geometry.boundaryEdges, { selected: true });
  drawStickerSelectionHandles(ctx, geometry, { accent });
  ctx.restore();
  return geometry;
}

function drawCanvas(node, canvas, fovBtn, interaction = null) {
  const mode = String(node.__panoPreviewMode || "stickers");
  ensureRenderCache(node, mode);
  const state = getCachedState(node);
  if (mode === "cutout" && node.__panoCutoutNodeSurfaceState !== state) {
    node.__panoCutoutNodeSurfaceState = state;
    node.__panoCutoutNodeSurface?.session?.refresh?.();
  } else if (mode === "stickers" && node.__panoStickersNodeSurfaceState !== state) {
    node.__panoStickersNodeSurfaceState = state;
    node.__panoStickersNodeSurface?.session?.refresh?.();
  }
  const wrap = canvas.parentElement;
  const dpr = 1;
  const cw = Math.max(1, Number(wrap?.clientWidth || canvas.clientWidth || 0));
  const ch = Math.max(1, Number(wrap?.clientHeight || canvas.clientHeight || 0));
  const surfW = Math.max(64, Math.round(cw * dpr));
  const surfH = Math.max(64, Math.round(ch * dpr));

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  if (mode === "cutout") {
    const shot = getActiveShot(state);
    const bgImg = getNodeOwnOutputVideo(
      node,
      ["pano_input_videos"],
      () => node.__panoDomPreview?.requestDraw?.(),
    ) || getLinkedInputImageForPreview(
      node,
      ["erp_image", "bg_erp"],
      () => node.__panoDomPreview?.requestDraw?.(),
      { preserveReadyWhilePending: false },
    );
    const bgReady = isRenderableMediaReady(bgImg);
    if (canvas.width !== surfW || canvas.height !== surfH) {
      canvas.width = surfW;
      canvas.height = surfH;
    }
    const rect = { x: 0, y: 0, w: surfW, h: surfH };
    const bgSize = getSourcePixelSize(bgImg);
    const ownAspect = bgReady ? clamp(Number(bgSize.width / bgSize.height), 0.05, 20.0) : 1;
    const cutoutView = shot ? buildCutoutViewParamsFromShot(shot) : null;
    const aspect = clamp(Number(cutoutView?.aspect || ownAspect || 1), 0.05, 20.0);
    const frame = fitCutoutNodeFrame(rect, aspect);
    node.__panoCutoutNodeFrame = frame;
    const uiScale = getNodeUiScale(canvas, rect);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#070707";
    ctx.fillRect(0, 0, surfW, surfH);

    let statusType = "none";
    let hintText = "Connect ERP image";
    let loadingSrc = "";

    loadingSrc = String(bgImg?.currentSrc || bgImg?.src || "");
    if (!shot) {
      const lastShot = node.__panoLastCutoutShot;
      if (lastShot) {
        node.__panoPreviewView = buildCutoutPanoramaViewFromShot(lastShot, { width: surfW, height: surfH });
        node.__panoLastCutoutShot = null;
      } else if (!node.__panoPreviewView) {
        node.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 };
      }
      if (bgReady) {
        const runtimeCore = syncRuntimeCutoutComposite(node, state, bgImg, "zero_shot_viewer");
        const zeroShotRenderScale = (
          interaction?.state?.drag?.active === true
          || interaction?.state?.inertia?.active === true
        ) ? 0.5 : 1;
        const panoramaDrawn = runtimeCore.renderToContext(
          ctx,
          rect,
          buildPanoramaViewParamsFromRuntime(node.__panoPreviewView, state?.coverage),
          { width: rect.w, height: rect.h, dpr: 1, renderScale: zeroShotRenderScale },
        );
        if (!panoramaDrawn) {
          statusType = "empty";
          hintText = "Open editor or run node";
        }
      } else if (bgImg) {
        statusType = "loading";
      } else {
        statusType = "empty";
        hintText = "Connect ERP image";
      }
    } else if (bgImg && !bgReady) {
      statusType = "loading";
    } else if (bgReady) {
      const runtimeCore = syncRuntimeCutoutComposite(node, state, bgImg, shot?.id || "");
      const contextLayout = layoutCutoutNodeContext({ width: surfW, height: surfH }, frame, shot);
      const contextRect = contextLayout.rect;
      const contextShot = buildCutoutViewParamsFromShot(contextLayout.shot);
      let fallbackDrawn = true;
      if (contextLayout.fallback) {
        const fallbackRect = contextLayout.fallback.rect;
        const fallbackShot = buildCutoutViewParamsFromShot(contextLayout.fallback.shot);
        fallbackDrawn = runtimeCore.renderToContext(
          ctx,
          fallbackRect,
          fallbackShot,
          { width: fallbackRect.w, height: fallbackRect.h, dpr: 1 },
        );
      }
      const liveCutoutDrawn = runtimeCore.renderToContext(
        ctx,
        contextRect,
        contextShot,
        { width: contextRect.w, height: contextRect.h, dpr: 1 },
      );
      let exactFrameDrawn = true;
      if (contextLayout.fallback) {
        exactFrameDrawn = runtimeCore.renderToContext(
          ctx,
          frame,
          buildCutoutViewParamsFromShot(shot),
          { width: frame.w, height: frame.h, dpr: 1 },
        );
      }
      if (!fallbackDrawn || !liveCutoutDrawn || !exactFrameDrawn) {
        statusType = "empty";
        hintText = "Open editor or run node";
      }
    } else {
      statusType = "empty";
      hintText = "Connect ERP image";
    }

    if (shot) {
      node.__panoLastCutoutShot = { ...shot };
      ctx.save();
      ctx.fillStyle = "rgba(0,0,0,0.58)";
      ctx.beginPath();
      ctx.rect(0, 0, surfW, surfH);
      ctx.rect(frame.x, frame.y, frame.w, frame.h);
      ctx.fill("evenodd");
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = "rgba(255,221,87,0.72)";
      ctx.lineWidth = 2;
      ctx.strokeRect(frame.x + 0.5, frame.y + 0.5, Math.max(0, frame.w - 1), Math.max(0, frame.h - 1));
      ctx.restore();
    }

    if (statusType === "loading") {
      setCutoutEmptyHint(node, false);
      setRenderLoading(node, true, loadingSrc);
    } else if (statusType === "empty") {
      setCutoutEmptyHint(node, true, hintText);
      setRenderLoading(node, false, "");
    } else {
      setCutoutEmptyHint(node, false);
      setRenderLoading(node, false, "");
    }
  } else {
    setCutoutEmptyHint(node, false);
    // Stickers mode: Canvas resolution follows DOM size
    if (canvas.width !== surfW || canvas.height !== surfH) {
      canvas.width = surfW;
      canvas.height = surfH;
    }
    const rect = { x: 0, y: 0, w: surfW, h: surfH };
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#070707";
    ctx.fillRect(0, 0, surfW, surfH);

    if (!node.__panoPreviewView) node.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 };
    const connectedBg = getNodeOwnOutputVideo(
      node,
      ["pano_input_videos"],
      () => node.__panoDomPreview?.requestDraw?.(),
    ) || getLinkedInputImageForPreview(
      node,
      ["erp_image", "bg_erp"],
      () => node.__panoDomPreview?.requestDraw?.(),
      { preserveReadyWhilePending: false },
    );
    const bgImg = connectedBg || null;
    const backgroundReady = !connectedBg || isRenderableMediaReady(bgImg);
    const view = buildPanoramaViewParamsFromRuntime(node.__panoPreviewView, state?.coverage);
    let panoramaDrawn = false;
    if (backgroundReady) {
      const revisionScope = connectedBg ? "stickers_surface|background:input" : "stickers_surface|background:none";
      const runtimeCore = syncRuntimeCutoutComposite(node, state, bgImg, revisionScope);
      const moving = (
        isPreviewResizing(node)
        || interaction?.state?.drag?.active === true
        || interaction?.state?.inertia?.active === true
        || node.__panoStickerDrag?.active === true
      );
      panoramaDrawn = runtimeCore.renderToContext(
        ctx,
        rect,
        view,
        { width: rect.w, height: rect.h, dpr: 1, renderScale: moving ? 0.5 : 1 },
      );
    }

    if (backgroundReady && panoramaDrawn) {
      setRenderLoading(node, false, "");
    } else {
      const loading = !!connectedBg && !backgroundReady;
      setRenderLoading(node, loading, String(bgImg?.currentSrc || bgImg?.src || ""));
      if (loading) {
        drawLoadingOverlay(ctx, rect, getNodeUiScale(canvas, rect));
      }
      setCutoutEmptyHint(node, false);
    }
    if (!connectedBg && panoramaDrawn) {
      const horizontalFov = clamp(Number(view.fovDeg || 100), 1, 179) * DEG2RAD;
      const tanHalfY = Math.tan(horizontalFov * 0.5) * (rect.h / Math.max(1, rect.w));
      const viewBasis = cameraBasis(Number(view.yawDeg || 0), Number(view.pitchDeg || 0), 0);
      drawPanoGrid(ctx, rect, viewBasis, tanHalfY, getNodeUiScale(canvas, rect));
    }
    if (panoramaDrawn) {
      setCutoutEmptyHint(node, false);
      const selectedId = String(state?.active?.selected_sticker_id || "");
      const selected = (Array.isArray(state?.stickers) ? state.stickers : [])
        .find((item) => String(item?.id || "") === selectedId && item?.visible !== false);
      node.__panoSelectedStickerGeometry = selected
        ? drawStickerSelectionOverlay(ctx, selected, view, { width: surfW, height: surfH })
        : null;
    } else {
      node.__panoSelectedStickerGeometry = null;
    }

    if (fovBtn) {
      fovBtn.textContent = `FOV ${Math.round(Number(node.__panoPreviewView.fov || 100))}`;
    }
  }
}

export function drawErpBackground(node, ctx, rect, viewBasis, tanHalfY, img, mesh = STANDALONE_MESH_BALANCED) {
  void viewBasis;
  void tanHalfY;
  void mesh;
  const state = getCachedState(node);
  const view = node?.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
  if (!node.__panoBackgroundCore) node.__panoBackgroundCore = createPanoramaRenderCore();
  const bgRevision = getRenderableMediaRevisionToken(img);
  const descriptor = buildStickerRenderDescriptor({
      stateRevision: [
        "runtime_bg_only",
        bgRevision,
        Number(state?.coverage || 360) === 180 ? 180 : 360,
    ].join("|"),
    backgroundSource: img,
    backgroundRevision: bgRevision,
    coverageDeg: Number(state?.coverage || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: false,
  });
  const synced = node.__panoBackgroundCore.syncState(descriptor);
  if (!synced) return;
  const surface = node.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(view.yaw || 0),
    pitchDeg: Number(view.pitch || 0),
    fovDeg: Number(view.fov || 100),
    coverageDeg: Number(state?.coverage || 360) === 180 ? 180 : 360,
  }, {
    width: rect.w,
    height: rect.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: false,
  });
  if (surface) ctx.drawImage(surface, rect.x, rect.y, rect.w, rect.h);
}

function drawLineOnSphere(ctx, pointsDir, viewBasis, rect, tanHalfY, color, width = 1) {
  let started = false;
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  for (const d of pointsDir) {
    const p = projectDirToPreview(d, viewBasis, rect, tanHalfY);
    if (!p) { started = false; continue; }
    if (!started) { ctx.moveTo(p.x, p.y); started = true; }
    else { ctx.lineTo(p.x, p.y); }
  }
  ctx.stroke();
}

function drawPanoGrid(ctx, rect, viewBasis, tanHalfY, uiScale = 1) {
  ctx.save();
  const gridColor = "#3f3f46";
  const equatorColor = "rgba(250, 250, 250, 0.86)";

  // Latitudes
  for (let lat = -75; lat <= 75; lat += 15) {
    const pts = [];
    for (let lon = -180; lon <= 180; lon += 4) pts.push(yawPitchToDir(lon, lat));
    drawLineOnSphere(ctx, pts, viewBasis, rect, tanHalfY, lat === 0 ? equatorColor : gridColor, lat === 0 ? 1.5 : 1);
  }

  // Longitudes
  for (let lon = -180; lon <= 180; lon += 15) {
    const pts = [];
    for (let lat = -89; lat <= 89; lat += 4) pts.push(yawPitchToDir(lon, lat));
    drawLineOnSphere(ctx, pts, viewBasis, rect, tanHalfY, gridColor, lon % 90 === 0 ? 1.3 : 1);
  }

  // Labels
  const labels = [
    { name: "Front", dir: yawPitchToDir(0, 0) },
    { name: "Right", dir: yawPitchToDir(90, 0) },
    { name: "Back", dir: yawPitchToDir(180, 0) },
    { name: "Left", dir: yawPitchToDir(-90, 0) },
  ];

  ctx.fillStyle = "rgba(250, 250, 250, 0.42)";
  const fontSize = Math.max(9, Math.round(11 * uiScale));
  ctx.font = `500 ${fontSize}px Plus Jakarta Sans, Geist, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  labels.forEach((l) => {
    const p = projectDirToPreview(l.dir, viewBasis, rect, tanHalfY);
    if (p) {
      ctx.fillText(l.name, p.x, p.y + 24 * uiScale);
    }
  });

  ctx.restore();
}

function stepStandaloneInertia(node, ts = performance.now()) {
  const m = node.__panoPreviewInertia;
  if (!m || !m.active || !node.__panoPreviewView) return false;
  if (!Number.isFinite(Number(m.vx)) || !Number.isFinite(Number(m.vy))) {
    m.vx = 0;
    m.vy = 0;
    m.active = false;
    return false;
  }
  const dt = m.lastTs > 0 ? Math.max(0.001, (ts - m.lastTs) / 1000) : (1 / 60);
  m.lastTs = ts;
  node.__panoPreviewView.yaw = wrapYaw(Number(node.__panoPreviewView.yaw || 0) + m.vx * dt);
  node.__panoPreviewView.pitch = clamp(Number(node.__panoPreviewView.pitch || 0) + m.vy * dt, -89.9, 89.9);
  if (!Number.isFinite(Number(node.__panoPreviewView.yaw)) || !Number.isFinite(Number(node.__panoPreviewView.pitch))) {
    node.__panoPreviewView.yaw = 0;
    node.__panoPreviewView.pitch = 0;
    m.vx = 0;
    m.vy = 0;
    m.active = false;
    return false;
  }
  const damping = Math.exp(-STANDALONE_INERTIA_DECAY * dt);
  m.vx *= damping;
  m.vy *= damping;
  if (Math.abs(m.vx) < STANDALONE_INERTIA_STOP_SPEED && Math.abs(m.vy) < STANDALONE_INERTIA_STOP_SPEED) {
    m.vx = 0;
    m.vy = 0;
    m.active = false;
  }
  return m.active;
}

function ensureStandaloneRenderState(node) {
  if (!node.__panoStandaloneRenderState) {
    node.__panoStandaloneRenderState = { dragging: false, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" };
  }
  return node.__panoStandaloneRenderState;
}

function markStandaloneInteractionActive(node, active) {
  const st = ensureStandaloneRenderState(node);
  st.dragging = !!active;
  if (active) st.hqFrames = 0;
}

function markStandaloneInteractionSettled(node) {
  const st = ensureStandaloneRenderState(node);
  st.dragging = false;
  st.hqFrames = STANDALONE_HQ_FRAMES_AFTER_INTERACTION;
}

function markPreviewResizing(node, windowMs = 150, ts = performance.now()) {
  if (!node) return;
  node.__panoResizeUntil = Number(ts || performance.now()) + Math.max(0, Number(windowMs || 0));
}

function isPreviewResizing(node, ts = performance.now()) {
  return Number(ts || performance.now()) < Number(node?.__panoResizeUntil || 0);
}

function recordStandaloneFrame(node, ts = performance.now()) {
  const st = ensureStandaloneRenderState(node);
  if (st.lastFrameTs > 0) {
    const dt = Math.max(1, ts - st.lastFrameTs);
    if (st.frameEmaMs <= 0) st.frameEmaMs = dt;
    else st.frameEmaMs = st.frameEmaMs * (1 - STANDALONE_FRAME_EMA_ALPHA) + dt * STANDALONE_FRAME_EMA_ALPHA;
  }
  st.lastFrameTs = ts;
  return st.frameEmaMs;
}

function pickStandaloneMeshQuality(node, moving = false, frameEmaMs = 0) {
  const st = ensureStandaloneRenderState(node);
  const ui = loadSharedUiSettings();
  let tier = "balanced";
  if (st.dragging || moving) tier = "low";
  else if (st.hqFrames > 0) {
    st.hqFrames -= 1;
    tier = "high";
  } else if (ui.preview_quality === "draft") tier = "low";
  else if (ui.preview_quality === "high") tier = "high";

  if (Number(frameEmaMs || 0) > STANDALONE_FRAME_DEGRADE_MS) {
    if (tier === "high") tier = "balanced";
    else if (tier === "balanced") tier = "low";
  }
  st.qualityTier = tier;
  if (tier === "low") return STANDALONE_MESH_LOW;
  if (tier === "high") return STANDALONE_MESH_HIGH;
  return STANDALONE_MESH_BALANCED;
}

function beginStandaloneDrag(node, x, y, ts = performance.now()) {
  const drag = { active: true, lastX: Number(x || 0), lastY: Number(y || 0), lastTs: Number(ts || performance.now()) };
  node.__panoPreviewDrag = drag;
  node.__panoPreviewInertia = { vx: 0, vy: 0, active: false, lastTs: drag.lastTs };
  markStandaloneInteractionActive(node, true);
  return drag;
}

function updateStandaloneDrag(node, x, y, ts = performance.now(), uiSettings = null) {
  const d = node.__panoPreviewDrag;
  if (!d?.active) return false;
  const now = Number(ts || performance.now());
  const px = Number.isFinite(Number(x)) ? Number(x) : d.lastX;
  const py = Number.isFinite(Number(y)) ? Number(y) : d.lastY;
  const dt = Math.max(0.001, (now - (d.lastTs || now)) / 1000);
  const dx = px - d.lastX;
  const dy = py - d.lastY;
  d.lastX = px;
  d.lastY = py;
  d.lastTs = now;

  const ui = uiSettings || loadSharedUiSettings();
  const invX = ui.invert_view_x ? -1 : 1;
  const invY = ui.invert_view_y ? -1 : 1;
  const dYaw = -dx * STANDALONE_DRAG_SENSITIVITY * invX;
  const dPitch = dy * STANDALONE_DRAG_SENSITIVITY * invY;
  const v = ensureStandaloneView(node);
  v.yaw = wrapYaw(Number(v.yaw || 0) + dYaw);
  v.pitch = clamp(Number(v.pitch || 0) + dPitch, -89.9, 89.9);
  if (!node.__panoPreviewInertia) node.__panoPreviewInertia = { vx: 0, vy: 0, active: false, lastTs: now };
  node.__panoPreviewInertia.vx = node.__panoPreviewInertia.vx * (1 - STANDALONE_INERTIA_BLEND) + (dYaw / dt) * STANDALONE_INERTIA_BLEND;
  node.__panoPreviewInertia.vy = node.__panoPreviewInertia.vy * (1 - STANDALONE_INERTIA_BLEND) + (dPitch / dt) * STANDALONE_INERTIA_BLEND;
  node.__panoPreviewInertia.active = false;
  node.__panoPreviewInertia.lastTs = now;
  return true;
}

function endStandaloneDrag(node, ts = performance.now()) {
  const d = node.__panoPreviewDrag;
  if (!d?.active) return false;
  d.active = false;
  markStandaloneInteractionSettled(node);
  const m = node.__panoPreviewInertia;
  if (m) {
    const speed = Math.hypot(m.vx || 0, m.vy || 0);
    m.active = speed > STANDALONE_INERTIA_START_SPEED;
    m.lastTs = Number(ts || performance.now());
  }
  return true;
}

function resolveStandaloneLocalPos(node, e, arg2, canvas, lastPos = null) {
  const p = localPosFromEvent(node, e, arg2, canvas);
  if (p) return p;
  const cp = localPosFromClientEvent(node, e, canvas);
  if (cp) return cp;
  if (lastPos && Number.isFinite(Number(lastPos.x)) && Number.isFinite(Number(lastPos.y))) {
    return { x: Number(lastPos.x), y: Number(lastPos.y) };
  }
  if (canvas && Array.isArray(canvas.graph_mouse) && canvas.graph_mouse.length >= 2) {
    return {
      x: Number(canvas.graph_mouse[0]) - Number(node?.pos?.[0] || 0),
      y: Number(canvas.graph_mouse[1]) - Number(node?.pos?.[1] || 0),
    };
  }
  return null;
}

function stopCanvasEvent(ev) {
  ev.preventDefault();
  ev.stopPropagation();
  ev.stopImmediatePropagation?.();
}

function isResizeGripEventOnElement(ev, element, margin = 20) {
  if (!ev || !element || !Number.isFinite(Number(ev.clientX)) || !Number.isFinite(Number(ev.clientY))) return false;
  const rect = element.getBoundingClientRect?.();
  if (!rect) return false;
  const x = Number(ev.clientX) - Number(rect.left || 0);
  const y = Number(ev.clientY) - Number(rect.top || 0);
  return x >= (rect.width - margin) && y >= (rect.height - margin);
}

function stopCanvasEventUnlessResizeGrip(ev, element) {
  if (isResizeGripEventOnElement(ev, element)) return false;
  stopCanvasEvent(ev);
  return true;
}

function isWheelEventInside(root, ev) {
  if (!root || !ev) return false;
  const path = typeof ev.composedPath === "function" ? ev.composedPath() : null;
  if (Array.isArray(path) && path.includes(root)) return true;
  const target = ev.target;
  return !!(target && typeof root.contains === "function" && root.contains(target));
}

export function lockGraphViewportSnapshot() {
  const ds = app?.canvas?.ds;
  if (!ds) return null;
  const offset = Array.isArray(ds.offset) ? [Number(ds.offset[0] || 0), Number(ds.offset[1] || 0)] : [0, 0];
  return { scale: Number(ds.scale || 1), offset };
}

export function restoreGraphViewportSnapshot(snapshot) {
  if (!snapshot) return;
  const ds = app?.canvas?.ds;
  if (!ds) return;
  ds.scale = snapshot.scale;
  if (Array.isArray(ds.offset)) {
    ds.offset[0] = snapshot.offset[0];
    ds.offset[1] = snapshot.offset[1];
  }
}

function ensureNodeDefaultSize(node, minW = 320, minH = 260) {
  initNodeSizeIfInvalid(node, minW, minH);
}

function ensureStandalonePreviewBootstrapSize(node, minW = 360, minH = 260) {
  if (!node || node.__panoUserResized === true || node.__panoStandaloneBootSized === true) return;
  if (!isNodeSizeInvalid(node)) return;
  const next = [Math.max(1, Number(minW || 1)), Math.max(1, Number(minH || 1))];
  try {
    if (typeof node.setSize === "function") node.setSize(next);
    else node.size = next;
    node.__panoStandaloneBootSized = true;
    panoPreviewLog(node, "size.bootstrap", { to: next });
  } catch (err) {
    panoPreviewLog(node, "size.bootstrap.error", { message: String(err?.message || err || "unknown") });
  }
}

function armPreviewBootMinHeight(node, minHeight = 0, requestDraw = null, durationMs = 1200) {
  const height = Math.max(0, Number(minHeight || 0));
  if (node?.__panoBootMinHeightTimer) {
    clearTimeout(node.__panoBootMinHeightTimer);
    node.__panoBootMinHeightTimer = null;
  }
  node.__panoBootMinHeightActive = height > 0;
  if (height <= 0) return;
  node.__panoBootMinHeightTimer = setTimeout(() => {
    node.__panoBootMinHeightTimer = null;
    if (!node?.__panoDomPreview?.widget) return;
    if (!node.__panoBootMinHeightActive) return;
    node.__panoBootMinHeightActive = false;
    requestDraw?.();
    node.setDirtyCanvas?.(true, true);
  }, Math.max(0, Number(durationMs || 0)));
}

function createCoreManagedDomWidgetOptions(
  node,
  requestDraw = null,
  bootMinHeight = 0,
  minHeight = 0,
  invalidateHostCanvasOnResize = true,
) {
  const persistentMinHeight = Math.max(0, Number(minHeight || 0));
  return {
    serialize: false,
    hideOnZoom: false,
    getValue() { return ""; },
    setValue() { },
    getMinHeight() {
      if (node?.__panoBootMinHeightActive) {
        return Math.max(persistentMinHeight, Math.max(0, Number(bootMinHeight || 0)));
      }
      return persistentMinHeight;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      if (node?.__panoBootMinHeightActive) {
        return Math.max(persistentMinHeight, Math.max(0, Number(bootMinHeight || 0)));
      }
      if (persistentMinHeight > 0) return persistentMinHeight;
      return "auto";
    },
    afterResize() {
      node.__panoUserResized = true;
      markPreviewResizing(node, 150);
      requestDraw?.();
      if (invalidateHostCanvasOnResize) scheduleResizeSettleDraw(node, 180, requestDraw);
    },
  };
}

function scheduleResizeSettleDraw(node, delayMs = 180, drawCb = null) {
  if (!node) return;
  if (node.__panoResizeSettleTimer) {
    clearTimeout(node.__panoResizeSettleTimer);
    node.__panoResizeSettleTimer = null;
  }
  node.__panoResizeSettleTimer = setTimeout(() => {
    node.__panoResizeSettleTimer = null;
    drawCb?.();
    node.setDirtyCanvas?.(true, true);
  }, Math.max(0, Number(delayMs || 0)));
}

function suppressBuiltInPreviewImgs(node) {
  if (!node) return;
  if (Array.isArray(node.imgs) && node.imgs.length) node.imgs = [];
}

function ensureStandaloneView(node) {
  if (!node.__panoStandaloneView) node.__panoStandaloneView = { yaw: 0, pitch: 0, fov: 100 };
  return node.__panoStandaloneView;
}

function clearStandaloneUnavailableLabel(node) {
  if (!node) return;
  if (typeof node.__panoStandaloneUnavailableRestore === "function") {
    try {
      node.__panoStandaloneUnavailableRestore();
    } catch {
      // ignore
    }
  }
  node.__panoStandaloneUnavailableRestore = null;
  node.__panoStandaloneUnavailable = false;
}

function setStandaloneUnavailableLabel(node, text = "Node 2.0 preview unavailable") {
  if (!node) return;
  if (node.__panoStandaloneUnavailable) return;
  const prevDrawForeground = node.onDrawForeground;
  node.onDrawForeground = function (ctx) {
    const out = prevDrawForeground ? prevDrawForeground.apply(this, arguments) : undefined;
    if (!ctx || this.flags?.collapsed) return out;
    const x = 8;
    const y = 44;
    const w = Math.max(120, Number(this.size?.[0] || 320) - 16);
    const h = Math.max(70, Number(this.size?.[1] || 240) - 52);
    ctx.save();
    ctx.fillStyle = "rgba(20,20,24,0.94)";
    ctx.strokeStyle = "rgba(78,78,86,0.95)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, 8);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "rgba(236,236,242,0.92)";
    ctx.font = "600 12px Plus Jakarta Sans, Geist, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(text), x + w * 0.5, y + h * 0.5);
    ctx.restore();
    return out;
  };
  node.__panoStandaloneUnavailableRestore = () => {
    node.onDrawForeground = prevDrawForeground;
    node.__panoStandaloneUnavailableRestore = null;
    node.__panoStandaloneUnavailable = false;
  };
  node.__panoStandaloneUnavailable = true;
  node.setDirtyCanvas?.(true, true);
}

function drawStandalonePanorama(node, ctx, rect, imageInputName = "erp_image", mesh = STANDALONE_MESH_LOW) {
  ensureRenderCache(node, "standalone");
  const uiScale = getNodeUiScale(ctx?.canvas, rect);
  const view = ensureStandaloneView(node);
  const basis = cameraBasis(Number(view.yaw || 0), Number(view.pitch || 0), 0);
  const tanHalfY = Math.tan((Number(view.fov || 100) * DEG2RAD) * 0.5);
  const preferredInputs = preferredImageInputsForNode(node, [imageInputName, "erp_image", "bg_erp"]);
  const standalonePreview = isStandalonePreviewNode(node);
  const bgImg = standalonePreview
    ? (getNodeOwnOutputVideo(node, ["pano_videos"], () => node.__panoDomPreview?.requestDraw?.())
      || getNodeOwnOutputImage(node, () => node.__panoDomPreview?.requestDraw?.()))
    : getLinkedInputImageForPreview(
      node,
      preferredInputs,
      () => node.__panoDomPreview?.requestDraw?.(),
    );
  const bgReady = isRenderableMediaReady(bgImg);
  const src = String(bgImg?.currentSrc || bgImg?.src || "");
  const coverageDeg = Number(node?.widgets?.find?.((w) => w?.name === "coverage")?.value || 360) === 180 ? 180 : 360;
  const bgRevision = getRenderableMediaRevisionToken(bgImg);
  const lastFrameSrc = String(node.__panoStandaloneLastFrameSrc || "");
  const canReuseLastFrame = !!node.__panoStandaloneLastFrameCanvas
    && !!src
    && src === lastFrameSrc;
  if (!node.__panoStandaloneCore) node.__panoStandaloneCore = createPanoramaRenderCore();
  if (bgReady) {
    const descriptor = buildStickerRenderDescriptor({
      stateRevision: [
        "standalone_preview_scene",
        bgRevision,
        coverageDeg,
      ].join("|"),
      backgroundSource: bgImg,
      backgroundRevision: bgRevision,
      coverageDeg,
      scene: buildStickerSceneFromState(null, {}),
      textures: [],
      backgroundOpacity: 1,
      showMaskTint: false,
    });
    const synced = node.__panoStandaloneCore.syncState(descriptor);
    const surface = synced
      ? node.__panoStandaloneCore.renderToTarget("preview_node", buildPreviewNodeViewParams(view, coverageDeg), {
        width: rect.w,
        height: rect.h,
        dpr: window.devicePixelRatio || 1,
      })
      : null;
    const drawn = !!surface;
    if (surface) {
      ctx.drawImage(surface, rect.x, rect.y, rect.w, rect.h);
      const lastFrameCanvas = getOrCreateSizedCanvas(node, "__panoStandaloneLastFrameCanvas", rect.w, rect.h);
      const lastFrameCtx = lastFrameCanvas.getContext("2d");
      if (lastFrameCtx) {
        lastFrameCtx.clearRect(0, 0, rect.w, rect.h);
        lastFrameCtx.drawImage(surface, 0, 0, rect.w, rect.h);
        node.__panoStandaloneLastFrameSrc = src;
      }
    }
    if (!drawn) {
      if (canReuseLastFrame) {
        ctx.drawImage(node.__panoStandaloneLastFrameCanvas, rect.x, rect.y, rect.w, rect.h);
      } else {
        ctx.fillStyle = "#070707";
        ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        drawErpBackground(node, ctx, rect, basis, tanHalfY, bgImg, mesh);
      }
    }
  } else {
    if (canReuseLastFrame) {
      ctx.drawImage(node.__panoStandaloneLastFrameCanvas, rect.x, rect.y, rect.w, rect.h);
    } else {
      ctx.fillStyle = "#070707";
      ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    }
  }
  const overlay = setRenderLoading(node, !!bgImg && !bgReady, src);
  if (overlay) drawLoadingOverlay(ctx, rect, uiScale);
}

function openStandaloneModal(node, title, imageInputName = "erp_image") {
  if (typeof node?.__panoOpenEditor === "function") {
    node.__panoOpenEditor();
    return;
  }
  const _ = [title, imageInputName];
  void _;
}

function attachPanoramaPreviewImpl(node, options = {}) {
  const allowStandalone = options.__allowStandalone === true;
  const standalonePreview = isStandalonePreviewNode(node);
  if (standalonePreview && !allowStandalone) {
    panoPreviewLog(node, "attach.skip", { reason: "standalone_preview_node", route: "blocked_legacy_path", nodeType: getNodeTypeName(node) });
    return;
  }
  if (standalonePreview) {
    ensureStandalonePreviewBootstrapSize(node);
  }
  node.__panoPreviewMode = String(options.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const stickersMode = node.__panoPreviewMode === "stickers";
  const panoramaInteractiveView = node.__panoPreviewMode !== "cutout";
  node.__panoAttachOptions = { ...options, mode: node.__panoPreviewMode };
  node.__panoPreviewNoPreview = options.noPreview === true;
  node.__panoPreviewButtonText = String(options.buttonText || (node.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor"));
  node.__panoOpenEditor = typeof options.onOpen === "function" ? options.onOpen : null;
  const nodeType = String(node?.comfyClass || node?.type || node?.title || "");
  const forcedPath = String(options.__panoForcedPath || "").trim();
  const pathInfo = {
    chosenPath: "dom",
    reason: stickersMode ? "stickers_shared_dom_surface" : "cutout_dom_only",
    signature: getFrontendSignature(node),
    frontendVersionRaw: String(window?.__COMFYUI_FRONTEND_VERSION__ || ""),
  };
  const chosenPath = "dom";
  const signature = pathInfo.signature || getFrontendSignature(node);
  const generation = Number(node.__panoRebindGeneration || 0);
  const activeBackend = getActivePreviewBackend(node);
  panoPreviewLog(node, "attach.begin", {
    nodeId: node?.id ?? null,
    nodeType,
    mode: node.__panoPreviewMode,
    legacyFrontend: chosenPath === "legacy_draw",
    activeBackend,
    targetBackend: chosenPath,
    chosenPath,
    pathReason: pathInfo.reason,
    signature,
    generation,
    frontendVersionRaw: pathInfo.frontendVersionRaw,
    hasDomWidget: typeof node.addDOMWidget === "function",
    size: getNodeSize(node),
  });
  node.__panoFrontendSig = signature;
  node.__panoStickersPath = chosenPath;
  if (node.__panoDomPreview?.widget) return;
  if (node.__panoLegacyPreviewHooked) teardownPreview(node, { keepMonitor: true });
  if (typeof node.addDOMWidget !== "function") {
    return;
  }

  const noPreview = options.noPreview === true;
  const bootMinHeight = noPreview ? 0 : 56;
  const surfaceMinHeight = noPreview ? 0 : CUTOUT_NODE_SURFACE_MIN_HEIGHT;

  const root = document.createElement("div");
  ensurePreviewModeCss();
  root.className = "pano-node-preview-dom";
  root.classList.add(stickersMode ? "pano-node-preview--stickers" : "pano-node-preview--cutout");
  if (noPreview) root.classList.add("pano-node-preview--no-preview");
  root.setAttribute("data-capture-wheel", "true");
  root.tabIndex = 0;

  root.style.cssText = [
    "width:100%",
    noPreview ? "height:auto" : "height:100%",
    surfaceMinHeight > 0 ? `min-height:${surfaceMinHeight}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent",
  ].join(";");

  if (noPreview) {
    const widget = trackDomWidgetRemoval(assignFreshDomWidgetRenderIdentity(
      node.addDOMWidget(getAnimPreviewWidgetName(), "preview", root, createCoreManagedDomWidgetOptions(node, null)),
    ));
    suppressBuiltInPreviewImgs(node);
    node.__panoDomPreview = { widget, root, requestDraw: () => { } };
    node.__panoPreviewHooked = true;
    node.__panoActiveBackend = "dom";
    return;
  }

  const wrap = document.createElement("div");
  wrap.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707",
  ].join(";");

  const canvas = document.createElement("canvas");
  canvas.style.cssText = [
    "position:absolute",
    "inset:0",
    "width:100%",
    "height:100%",
    "object-position:center",
    "display:block",
    "touch-action:none",
    "cursor:grab",
    "user-select:none",
    "-webkit-user-select:none",
  ].join(";");

  const cutoutHint = document.createElement("div");
  cutoutHint.style.cssText = [
    "position:absolute",
    "inset:0",
    "display:none",
    "align-items:center",
    "justify-content:center",
    "pointer-events:none",
    "color:rgba(161,161,170,0.95)",
    "font:600 15px 'Plus Jakarta Sans', Geist, sans-serif",
    "text-align:center",
    "padding:0 10px",
    "z-index:2",
  ].join(";");
  cutoutHint.textContent = "Connect ERP image";

  wrap.appendChild(canvas);
  wrap.appendChild(cutoutHint);
  root.appendChild(wrap);

  // Node 2.0 decides whether the graph owns wheel input before the nested
  // listener runs. Match the supported frontend protocol used by the
  // Perspective Editor: focus the declared wheel-capture root on entry.
  const wheelCaptureCleanup = bindWheelCaptureRoot(root);

  const nodeSurfaceHost = document.createElement("div");
  if (nodeSurfaceHost) {
    nodeSurfaceHost.className = stickersMode
      ? "pano-stickers-node-surface-host"
      : "pano-cutout-node-surface-host";
    nodeSurfaceHost.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none";
    root.appendChild(nodeSurfaceHost);
  }

  initNodeSizeIfInvalid(node, 120, 120);
  suppressBuiltInPreviewImgs(node);

  let widget = null;
  try {
    armPreviewBootMinHeight(node, bootMinHeight, () => node.__panoDomPreview?.requestDraw?.());
    widget = trackDomWidgetRemoval(assignFreshDomWidgetRenderIdentity(node.addDOMWidget(
      getAnimPreviewWidgetName(),
      "preview",
      root,
      createCoreManagedDomWidgetOptions(
        node,
        () => node.__panoDomPreview?.requestDraw?.(),
        bootMinHeight,
      surfaceMinHeight,
      false,
      ),
    )));
  } catch {
    return;
  }
  const state = {
    raf: 0,
    inTick: false,
    destroyed: false,
    needsDraw: true,
    dragging: false,
    lastX: 0,
    lastY: 0,
    lastTs: 0,
  };

  const requestDraw = () => {
    if (state.destroyed) return;
    state.needsDraw = true;
    if (!state.inTick && !state.raf) state.raf = requestAnimationFrame(tick);
  };
  const nodeSurfaceUiModel = reactive(stickersMode
    ? { ...stickersNodeSurfaceModel(getCachedState(node)), importing: false, dropActive: false }
    : {
      ...cutoutNodeSurfaceModel(getCachedState(node)),
      aspectOpen: false,
      aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((value) => ({ value, label: value })),
    });
  let nodeSurfaceLiveState = null;
  const nodeSurfaceSession = (stickersMode
    ? createStickersNodeSurfaceSession
    : createCutoutNodeSurfaceSession)({
      readState: () => getCachedState(node),
      publishLiveState: (nextState) => {
        if (nextState) {
          nodeSurfaceLiveState = nextState;
          node.__panoLiveStateOverride = nextState;
        } else {
          if (node.__panoLiveStateOverride === nodeSurfaceLiveState) node.__panoLiveStateOverride = null;
          nodeSurfaceLiveState = null;
        }
        node.__panoLiveStateVersion = Number(node.__panoLiveStateVersion || 0) + 1;
        node.__panoStateCache = null;
        requestDraw();
      },
      commitState: (nextState) => {
        const stateWidget = getWidget(node, "state_json");
        if (!stateWidget) return;
        const text = JSON.stringify(nextState);
        stateWidget.value = text;
        stateWidget.callback?.(text);
        node.__panoStateCache = null;
        node.setDirtyCanvas?.(true, true);
        node.graph?.setDirtyCanvas?.(true, true);
      },
      onChange: (nextModel) => Object.assign(nodeSurfaceUiModel, nextModel),
    });
  const syncExternalSticker = (reason = "sync", outputOverride = null) => {
    if (!stickersMode || !nodeSurfaceSession || nodeSurfaceSession.hasGestureChanges()) return false;
    const input = Array.isArray(node?.inputs)
      ? node.inputs.find((entry) => String(entry?.name || "") === "sticker_image")
      : null;
    const linkId = input?.link ?? null;
    if (linkId == null) {
      return nodeSurfaceSession.apply({ type: "sync-external", value: { connected: false } });
    }
    if (!isNodeOutputMediaCurrent(node, "external-sticker")) return false;
    const rawPose = ownOutputUiValue(node, "pano_sticker_input_pose", outputOverride);
    const pose = Array.isArray(rawPose) ? rawPose[0] : rawPose;
    const stateHash = String(ownOutputUiValue(node, "pano_sticker_input_state_hash", outputOverride) ?? "");
    const fallbackView = node.__panoPreviewView || { yaw: 0, pitch: 0 };
    const current = getCachedState(node);
    const existing = (Array.isArray(current?.stickers) ? current.stickers : [])
      .find((item) => String(item?.id || "") === "sticker_image_1");
    const previewImage = getNodePreviewImage(node, "sticker_image_1", null, { external: true });
    const resolvedPose = pose && typeof pose === "object"
      ? pose
      : existing || { yaw_deg: fallbackView.yaw, pitch_deg: fallbackView.pitch, hFOV_deg: 30, rot_deg: 0 };
    const changed = nodeSurfaceSession.apply({
      type: "sync-external",
      value: {
        connected: true,
        linkId,
        stateHash,
        pose: resolvedPose,
        imageWidth: Number(previewImage?.naturalWidth || previewImage?.width || 0),
        imageHeight: Number(previewImage?.naturalHeight || previewImage?.height || 0),
      },
    });
    void reason;
    return changed;
  };
  const unregisterExternalStickerSync = stickersMode
    ? registerExternalStickerSync(node, syncExternalSticker)
    : () => {};
  let stickerImportCount = 0;
  const addNodeStickerFile = async (file) => {
    if (!stickersMode || !nodeSurfaceSession || !isStickerImageFile(file)) return false;
    const assetId = `asset_${Math.random().toString(16).slice(2, 10)}`;
    const stickerId = `st_${Math.random().toString(16).slice(2, 10)}`;
    const view = { ...(node.__panoPreviewView || { yaw: 0, pitch: 0 }) };
    stickerImportCount += 1;
    nodeSurfaceUiModel.importing = true;
    const operation = queuePendingStickerOperation(node, `add:${assetId}`, async () => {
      const decoded = await decodeStickerImageFile(file);
      const asset = await uploadStickerAssetFile(file, {
        fetchApi: (path, options) => api.fetchApi(path, options),
      });
      flushNodeSurfaceGesture();
      return nodeSurfaceSession.apply({
        type: "add-sticker",
        value: {
          stickerId,
          assetId,
          asset,
          imageWidth: decoded.width,
          imageHeight: decoded.height,
          yaw_deg: Number(view.yaw || 0),
          pitch_deg: Number(view.pitch || 0),
        },
      });
    });
    try {
      return await operation;
    } catch {
      return false;
    } finally {
      stickerImportCount = Math.max(0, stickerImportCount - 1);
      nodeSurfaceUiModel.importing = stickerImportCount > 0;
      requestDraw();
    }
  };
  let cutoutDrag = null;
  let stickerDrag = null;
  let nodeSurfaceWheelCommitTimer = null;
  let nodeSurfaceWheelActive = false;
  const commitNodeSurfaceWheel = () => {
    if (nodeSurfaceWheelCommitTimer) {
      clearTimeout(nodeSurfaceWheelCommitTimer);
      nodeSurfaceWheelCommitTimer = null;
    }
    if (!nodeSurfaceWheelActive) return false;
    nodeSurfaceWheelActive = false;
    return nodeSurfaceSession?.commitGesture?.() ?? false;
  };
  const flushNodeSurfaceGesture = () => {
    const wheelCommitted = commitNodeSurfaceWheel();
    const pointerId = cutoutDrag?.pointerId ?? stickerDrag?.pointerId;
    cutoutDrag = null;
    stickerDrag = null;
    node.__panoStickerDrag = null;
    if (pointerId != null) {
      try {
        if (canvas.hasPointerCapture?.(pointerId)) canvas.releasePointerCapture?.(pointerId);
      } catch { }
      canvas.style.cursor = "grab";
    }
    const pointerCommitted = nodeSurfaceSession?.commitGesture?.() ?? false;
    return wheelCommitted || pointerCommitted;
  };
  const cancelCutoutNodeSurfaceGesture = () => {
    const wheelCommitted = commitNodeSurfaceWheel();
    const pointerId = cutoutDrag?.pointerId;
    cutoutDrag = null;
    node.__panoStickerDrag = null;
    if (pointerId != null) {
      try {
        if (canvas.hasPointerCapture?.(pointerId)) canvas.releasePointerCapture?.(pointerId);
      } catch { }
      canvas.style.cursor = "grab";
    }
    const pointerCancelled = nodeSurfaceSession?.cancelGesture?.() ?? false;
    return wheelCommitted || pointerCancelled;
  };
  const nodeSurfaceQueueFlusher = () => flushNodeSurfaceGesture();
  if (nodeSurfaceSession) {
    if (!(node.__panoStateFlushers instanceof Set)) node.__panoStateFlushers = new Set();
    node.__panoStateFlushers.add(nodeSurfaceQueueFlusher);
  }
  let nodeSurfaceVueApp = null;
  let nodeSurfaceMounted = false;
  if (nodeSurfaceHost && nodeSurfaceSession) {
    try {
      void installPanoSuiteStylesheet();
      nodeSurfaceVueApp = createApp(stickersMode ? PanoStickersNodeSurface : PanoCutoutNodeSurface, {
        model: nodeSurfaceUiModel,
        onAction: (action) => {
          if (action?.type === "open-editor") {
            flushNodeSurfaceGesture();
            if (!stickersMode) nodeSurfaceUiModel.aspectOpen = false;
            node.__panoOpenEditor?.();
            return;
          }
          if (stickersMode) {
            if (action?.type === "add-image-file") {
              void addNodeStickerFile(action.file);
              return;
            }
            if (nodeSurfaceSession.apply(action)) requestDraw();
            return;
          }
          if (action?.type === "toggle-aspect") {
            nodeSurfaceUiModel.aspectOpen = !nodeSurfaceUiModel.aspectOpen;
            return;
          }
          if (action?.type === "close-aspect") {
            nodeSurfaceUiModel.aspectOpen = false;
            return;
          }
          let resolvedAction = action;
          if (action?.type === "add-frame") {
            const view = node.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            resolvedAction = {
              ...action,
              ...buildCutoutAddFrameAction(view, {
                width: canvas.width,
                height: canvas.height,
              }),
            };
          } else if (action?.type === "delete-frame") {
            const shot = resolveCutoutNodeSurfaceShot(getCachedState(node));
            if (shot) {
              node.__panoPreviewView = buildCutoutPanoramaViewFromShot(shot, {
                width: canvas.width,
                height: canvas.height,
              });
            }
          }
          const safeRect = node.__panoCutoutNodeFrame?.safeRect || null;
          nodeSurfaceUiModel.aspectOpen = false;
          if (nodeSurfaceSession.apply({ ...resolvedAction, safeRect })) requestDraw();
        },
      });
      nodeSurfaceVueApp.mount(nodeSurfaceHost);
      nodeSurfaceMounted = true;
    } catch {
      nodeSurfaceVueApp = null;
      nodeSurfaceMounted = false;
    }
  }
  const resizeObserver = typeof ResizeObserver !== "undefined"
    ? new ResizeObserver(() => {
      markPreviewResizing(node, 150);
      requestDraw();
    })
    : null;
  resizeObserver?.observe(wrap);

  const tick = (ts) => {
    state.raf = 0;
    state.inTick = true;
    let moving = false;
    try {
      moving = interaction.stepInertia(ts);
      if (state.needsDraw || moving) {
        state.needsDraw = false;
        if (!node.flags?.collapsed) drawCanvas(node, canvas, null, interaction);
      }
    } finally {
      state.inTick = false;
    }
    if ((moving || state.needsDraw) && !state.raf) state.raf = requestAnimationFrame(tick);
    if (panoPreviewDebugEnabled()) {
      if (!node.__panoDebugLastTs || (ts - node.__panoDebugLastTs) > 1200) {
        node.__panoDebugLastTs = ts;
        panoPreviewLog(node, "dom.snapshot", {
          mode: node.__panoPreviewMode,
          nodeSize: getNodeSize(node),
          root: previewElementSnapshot(root),
          wrap: previewElementSnapshot(wrap),
          canvas: previewElementSnapshot(canvas),
          rootParent: previewElementSnapshot(root.parentElement),
          rootGrandParent: previewElementSnapshot(root.parentElement?.parentElement),
          canvasIntrinsic: { width: Number(canvas.width || 0), height: Number(canvas.height || 0) },
        });
      }
    }
  };

  const interaction = createPanoInteractionController({
    getView: () => {
      if (!node.__panoPreviewView) node.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 };
      return node.__panoPreviewView;
    },
    setView: (v) => {
      node.__panoPreviewView = v;
    },
    getViewportSize: () => {
      const rect = canvas.getBoundingClientRect();
      return {
        w: Math.max(1, Number(rect.width || canvas.clientWidth || 0)),
        h: Math.max(1, Number(rect.height || canvas.clientHeight || 0)),
      };
    },
    getInvert: () => {
      const uiSettings = loadSharedUiSettings();
      return {
        x: uiSettings.invert_view_x ? -1 : 1,
        y: uiSettings.invert_view_y ? -1 : 1,
      };
    },
    onInteraction: () => {
      requestDraw();
    },
  });
  const eventSurface = stickersMode ? wrap : root;
  const cutoutCanvasPoint = (ev) => {
    const bounds = canvas.getBoundingClientRect();
    return {
      x: (Number(ev.clientX) - bounds.left) * (canvas.width / Math.max(1, bounds.width)),
      y: (Number(ev.clientY) - bounds.top) * (canvas.height / Math.max(1, bounds.height)),
    };
  };
  const updateStickerHoverCursor = (ev) => {
    if (!stickersMode || !panoramaInteractiveView) return;
    const currentState = getCachedState(node);
    const picked = pickStickerAtPoint(
      currentState?.stickers,
      String(currentState?.active?.selected_sticker_id || ""),
      cutoutCanvasPoint(ev),
      buildPanoramaViewParamsFromRuntime(node.__panoPreviewView, currentState?.coverage),
      { width: canvas.width, height: canvas.height },
    );
    if (!picked) {
      canvas.style.cursor = "grab";
      return;
    }
    if (picked.item?.locked === true) {
      canvas.style.cursor = "default";
      return;
    }
    canvas.style.cursor = picked.hit.cursor || "default";
  };

  canvas.addEventListener("pointerdown", (ev) => {
    if (!stopCanvasEventUnlessResizeGrip(ev, eventSurface)) return;
    if (ev.button !== 0) return;
    if (!stickersMode) {
      const shot = resolveCutoutNodeSurfaceShot(getCachedState(node));
      const frame = node.__panoCutoutNodeFrame;
      if (!shot) {
        root.focus?.({ preventScroll: true });
        canvas.setPointerCapture?.(ev.pointerId);
        canvas.style.cursor = "grabbing";
        interaction.startDrag(ev.clientX, ev.clientY, ev.pointerId);
        return;
      }
      if (shot.locked === true || !frame || !nodeSurfaceSession) return;
      const point = cutoutCanvasPoint(ev);
      let drag;
      if (ev.shiftKey) {
        const rollGesture = beginCutoutRollGesture({
          frame,
          point,
          startRollDeg: Number(shot.roll_deg ?? shot.rot_deg ?? 0),
          shiftKey: true,
        });
        if (!rollGesture) return;
        drag = { kind: "roll", pointerId: ev.pointerId, rollGesture };
      } else {
        const uiSettings = getCachedState(node)?.ui_settings || loadSharedUiSettings();
        drag = {
          kind: "pan",
          pointerId: ev.pointerId,
          startPoint: point,
          startShot: { ...shot },
          focalPx: fitFocalPx(frame, shot),
          invertX: uiSettings.invert_view_x === true,
          invertY: uiSettings.invert_view_y === true,
        };
      }
      flushNodeSurfaceGesture();
      root.focus?.({ preventScroll: true });
      canvas.setPointerCapture?.(ev.pointerId);
      canvas.style.cursor = "grabbing";
      nodeSurfaceSession.beginGesture();
      cutoutDrag = drag;
      return;
    }
    if (!panoramaInteractiveView) return;
    const point = cutoutCanvasPoint(ev);
    const currentState = getCachedState(node);
    const selectedId = String(currentState?.active?.selected_sticker_id || "");
    const camera = buildPanoramaViewParamsFromRuntime(node.__panoPreviewView, currentState?.coverage);
    const picked = pickStickerAtPoint(
      currentState?.stickers,
      selectedId,
      point,
      camera,
      { width: canvas.width, height: canvas.height },
    );
    root.focus?.({ preventScroll: true });
    if (picked && nodeSurfaceSession) {
      interaction.stopMotion();
      flushNodeSurfaceGesture();
      if (String(picked.item?.id || "") !== selectedId) {
        nodeSurfaceSession.apply({ type: "select-sticker", id: picked.item.id });
      }
      if (picked.item?.locked === true) {
        requestDraw();
        return;
      }
      const startPoint = point;
      const center = picked.geometry.center;
      stickerDrag = {
        active: true,
        kind: picked.hit.kind,
        pointerId: ev.pointerId,
        startPoint,
        startCenter: { ...center },
        startSticker: { ...picked.item },
        startDistance: Math.max(1, Math.hypot(startPoint.x - center.x, startPoint.y - center.y)),
        startAngle: Math.atan2(startPoint.y - center.y, startPoint.x - center.x),
        camera,
        viewport: { width: canvas.width, height: canvas.height },
      };
      node.__panoStickerDrag = stickerDrag;
      nodeSurfaceSession.beginGesture();
      canvas.setPointerCapture?.(ev.pointerId);
      canvas.style.cursor = picked.hit.kind === "rotate" ? "grabbing" : (picked.hit.kind === "move" ? "move" : picked.hit.cursor);
      requestDraw();
      return;
    }
    canvas.setPointerCapture?.(ev.pointerId);
    canvas.style.cursor = "grabbing";
    interaction.startDrag(ev.clientX, ev.clientY, ev.pointerId);
  });

  canvas.addEventListener("pointermove", (ev) => {
    if (!stickersMode) {
      if (!cutoutDrag) {
        if (!interaction.state.drag.active) return;
        stopCanvasEventUnlessResizeGrip(ev, eventSurface);
        interaction.moveDrag(ev.clientX, ev.clientY, "pano");
        return;
      }
      if (cutoutDrag.pointerId !== ev.pointerId || !nodeSurfaceSession) return;
      stopCanvasEventUnlessResizeGrip(ev, eventSurface);
      if (cutoutDrag.kind === "pan") {
        const point = cutoutCanvasPoint(ev);
        nodeSurfaceSession.updateGesture({
          type: "pan-camera",
          startShot: cutoutDrag.startShot,
          dx: point.x - cutoutDrag.startPoint.x,
          dy: point.y - cutoutDrag.startPoint.y,
          focalPx: cutoutDrag.focalPx,
          invertX: cutoutDrag.invertX,
          invertY: cutoutDrag.invertY,
        });
        return;
      }
      const next = updateCutoutRollGesture(cutoutDrag.rollGesture, cutoutCanvasPoint(ev), ev);
      if (!next) return;
      cutoutDrag.rollGesture = next.gesture;
      nodeSurfaceSession.updateGesture({ type: "set-roll", value: next.rollDeg });
      return;
    }
    if (!stickerDrag && !interaction.state.drag.active) {
      updateStickerHoverCursor(ev);
      return;
    }
    if (stickerDrag) {
      if (stickerDrag.pointerId !== ev.pointerId || !nodeSurfaceSession) return;
      stopCanvasEventUnlessResizeGrip(ev, eventSurface);
      const point = cutoutCanvasPoint(ev);
      let next = stickerDrag.startSticker;
      if (stickerDrag.kind === "move") {
        next = moveStickerToScreenPoint(
          stickerDrag.startSticker,
          {
            x: stickerDrag.startCenter.x + point.x - stickerDrag.startPoint.x,
            y: stickerDrag.startCenter.y + point.y - stickerDrag.startPoint.y,
          },
          stickerDrag.camera,
          stickerDrag.viewport,
        );
      } else if (stickerDrag.kind === "scale") {
        const distance = Math.hypot(point.x - stickerDrag.startCenter.x, point.y - stickerDrag.startCenter.y);
        next = scaleStickerFromPointer(stickerDrag.startSticker, stickerDrag.startDistance, distance);
      } else if (stickerDrag.kind === "rotate") {
        const angle = Math.atan2(point.y - stickerDrag.startCenter.y, point.x - stickerDrag.startCenter.x);
        next = rotateStickerFromPointer(stickerDrag.startSticker, stickerDrag.startAngle, angle, ev.shiftKey === true);
      }
      nodeSurfaceSession.updateGesture({ type: "set-transform", value: next });
      requestDraw();
      return;
    }
    if (!panoramaInteractiveView || !interaction.state.drag.active) return;
    stopCanvasEventUnlessResizeGrip(ev, eventSurface);
    interaction.moveDrag(ev.clientX, ev.clientY, "pano");
  });

  const cancelCutoutDrag = () => {
    if (!cutoutDrag && !stickerDrag) {
      if (!interaction.state.drag.active) return;
      interaction.endDrag();
      canvas.style.cursor = "grab";
      requestDraw();
      return;
    }
    if (!nodeSurfaceSession) return;
    const pointerId = cutoutDrag?.pointerId ?? stickerDrag?.pointerId;
    cutoutDrag = null;
    stickerDrag = null;
    node.__panoStickerDrag = null;
    try {
      if (canvas.hasPointerCapture?.(pointerId)) canvas.releasePointerCapture?.(pointerId);
    } catch { }
    nodeSurfaceSession.cancelGesture();
    canvas.style.cursor = "grab";
    requestDraw();
  };

  const endDrag = (ev, cancelled = false) => {
    if (!stickersMode) {
      if (!cutoutDrag) {
        if (!interaction.state.drag.active) return;
        stopCanvasEventUnlessResizeGrip(ev, eventSurface);
        canvas.releasePointerCapture?.(ev.pointerId);
        canvas.style.cursor = "grab";
        interaction.endDrag();
        requestDraw();
        return;
      }
      if (cutoutDrag.pointerId !== ev.pointerId || !nodeSurfaceSession) return;
      stopCanvasEventUnlessResizeGrip(ev, eventSurface);
      cutoutDrag = null;
      canvas.releasePointerCapture?.(ev.pointerId);
      canvas.style.cursor = "grab";
      if (cancelled) nodeSurfaceSession.cancelGesture();
      else nodeSurfaceSession.commitGesture();
      updateStickerHoverCursor(ev);
      requestDraw();
      return;
    }
    if (stickerDrag) {
      if (stickerDrag.pointerId !== ev.pointerId || !nodeSurfaceSession) return;
      stopCanvasEventUnlessResizeGrip(ev, eventSurface);
      stickerDrag = null;
      node.__panoStickerDrag = null;
      canvas.releasePointerCapture?.(ev.pointerId);
      canvas.style.cursor = "grab";
      if (cancelled) nodeSurfaceSession.cancelGesture();
      else nodeSurfaceSession.commitGesture();
      requestDraw();
      return;
    }
    if (!panoramaInteractiveView || !interaction.state.drag.active) return;
    stopCanvasEventUnlessResizeGrip(ev, eventSurface);
    canvas.releasePointerCapture?.(ev.pointerId);
    canvas.style.cursor = "grab";
    interaction.endDrag();
    markStandaloneInteractionSettled(node);
    requestDraw();
  };
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", (ev) => endDrag(ev, true));
  canvas.addEventListener("lostpointercapture", cancelCutoutDrag);
  canvas.addEventListener("pointerleave", (ev) => {
    if ((!stickersMode && cutoutDrag) || stickerDrag) return;
    if (!interaction.state.drag.active) return;
    endDrag(ev);
  });
  const onNodeSurfaceKeyDown = (ev) => {
    const activeElement = document.activeElement;
    if (activeElement !== root && !root.contains(activeElement)) return;
    if (ev.key === "Escape" && (cutoutDrag || stickerDrag) && nodeSurfaceSession) {
      cancelCutoutDrag();
      stopCanvasEvent(ev);
      return;
    }
    if (!stickersMode || (ev.key !== "Delete" && ev.key !== "Backspace") || !nodeSurfaceSession) return;
    const target = ev.target;
    const tag = String(target?.tagName || "").toUpperCase();
    if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;
    if (nodeSurfaceUiModel.canDelete !== true) return;
    flushNodeSurfaceGesture();
    if (nodeSurfaceSession.apply({ type: "delete-selected" })) requestDraw();
    stopCanvasEvent(ev);
  };
  window.addEventListener("keydown", onNodeSurfaceKeyDown, true);
  const viewportRestoreScheduler = createViewportRestoreScheduler({
    requestFrame: (callback) => requestAnimationFrame(callback),
    cancelFrame: (id) => cancelAnimationFrame(id),
    restore: (snapshot) => restoreGraphViewportSnapshot(snapshot),
  });

  const onPreviewWheel = (ev) => {
    panoPreviewLog(node, "event", { kind: "wheel", via: stickersMode ? "stickers" : "cutout", panoramaInteractiveView });
    if (!stopCanvasEventUnlessResizeGrip(ev, eventSurface)) return;
    if (!stickersMode) {
      const shot = resolveCutoutNodeSurfaceShot(getCachedState(node));
      if (shot && shot.locked !== true && nodeSurfaceSession) {
        const direction = readWheelDirection(ev);
        if (direction !== 0) {
          if (!nodeSurfaceWheelActive) {
            flushNodeSurfaceGesture();
            nodeSurfaceSession.beginGesture();
            nodeSurfaceWheelActive = true;
          }
          const changed = nodeSurfaceSession.updateGesture({
            type: "step-fov",
            direction,
          });
          if (changed) {
            if (nodeSurfaceWheelCommitTimer) clearTimeout(nodeSurfaceWheelCommitTimer);
            nodeSurfaceWheelCommitTimer = setTimeout(commitNodeSurfaceWheel, 180);
            requestDraw();
          } else if (!nodeSurfaceSession.hasGestureChanges()) {
            nodeSurfaceSession.cancelGesture();
            nodeSurfaceWheelActive = false;
          }
        }
      } else if (!shot) {
        const graphSnapshot = lockGraphViewportSnapshot();
        if (interaction.applyWheelEvent(ev)) requestDraw();
        viewportRestoreScheduler.schedule(graphSnapshot);
      }
      ev.preventDefault?.();
      ev.stopPropagation?.();
      ev.stopImmediatePropagation?.();
      return;
    }
    if (!panoramaInteractiveView) return;
    const graphSnapshot = lockGraphViewportSnapshot();
    if (interaction.applyWheelEvent(ev)) {
      requestDraw();
    }
    ev.preventDefault?.();
    ev.stopPropagation?.();
    ev.stopImmediatePropagation?.();
    viewportRestoreScheduler.schedule(graphSnapshot);
  };
  const wheelTargets = stickersMode ? [wrap, canvas] : [wrap];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((name) => {
    wheelTargets.forEach((target) => target.addEventListener(name, onPreviewWheel, { passive: false, capture: true }));
  });

  ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((name) => {
    canvas.addEventListener(name, (ev) => stopCanvasEventUnlessResizeGrip(ev, eventSurface));
    wrap.addEventListener(name, (ev) => stopCanvasEventUnlessResizeGrip(ev, eventSurface));
  });

  const sw = getWidget(node, "state_json");
  let swCallbackPrev = null;
  let swCallbackWrapper = null;
  if (sw && !sw.__panoPreviewPatchedCb) {
    swCallbackPrev = sw.callback;
    swCallbackWrapper = (v) => {
      const out = swCallbackPrev ? swCallbackPrev(v) : undefined;
      requestDraw();
      return out;
    };
    sw.callback = swCallbackWrapper;
    sw.__panoPreviewPatchedCb = swCallbackWrapper;
  }
  const bgw = getWidget(node, "bg_color");
  let bgwCallbackPrev = null;
  let bgwCallbackWrapper = null;
  if (bgw && !bgw.__panoPreviewPatchedCb) {
    bgwCallbackPrev = bgw.callback;
    bgwCallbackWrapper = (v) => {
      const out = bgwCallbackPrev ? bgwCallbackPrev(v) : undefined;
      requestDraw();
      return out;
    };
    bgw.callback = bgwCallbackWrapper;
    bgw.__panoPreviewPatchedCb = bgwCallbackWrapper;
  }

  const onRemovedPrev = node.onRemoved;
  const onResizePrev = node.onResize;
  const onExecutedPrev = node.onExecuted;
  const onDragOverPrev = node.onDragOver;
  const onDragDropPrev = node.onDragDrop;
  let dropCueTimer = null;
  const showDropCue = () => {
    if (!stickersMode) return;
    nodeSurfaceUiModel.dropActive = true;
    if (dropCueTimer) clearTimeout(dropCueTimer);
    dropCueTimer = setTimeout(() => {
      dropCueTimer = null;
      nodeSurfaceUiModel.dropActive = false;
    }, 140);
  };
  const stickerDragOverHook = stickersMode ? function (event) {
    const previous = onDragOverPrev ? onDragOverPrev.apply(this, arguments) : false;
    if (previous === true) return true;
    if (!dragHasStickerImageFile(event?.dataTransfer)) return false;
    showDropCue();
    return true;
  } : null;
  const stickerDragDropHook = stickersMode ? function (event) {
    const previous = onDragDropPrev ? onDragDropPrev.apply(this, arguments) : false;
    if (previous === true) return true;
    const file = Array.from(event?.dataTransfer?.files || []).find((entry) => isStickerImageFile(entry));
    if (!file) return false;
    if (dropCueTimer) clearTimeout(dropCueTimer);
    dropCueTimer = null;
    nodeSurfaceUiModel.dropActive = false;
    void addNodeStickerFile(file);
    return true;
  } : null;
  if (stickersMode) {
    node.onDragOver = stickerDragOverHook;
    node.onDragDrop = stickerDragDropHook;
  }
  const stickerDropTargetCleanup = stickersMode ? bindStickerDropTarget(root, {
    onActive: (active) => {
      if (active) {
        showDropCue();
        return;
      }
      if (dropCueTimer) clearTimeout(dropCueTimer);
      dropCueTimer = null;
      nodeSurfaceUiModel.dropActive = false;
    },
    onDrop: (file) => {
      void addNodeStickerFile(file);
    },
  }) : () => {};
  const onExecutedHook = function (output) {
    syncOwnOutputSourceFromExecuted(node, output);
    node.__panoLastExecutedOutput = output || null;
    invalidatePreviewImageCaches(node);
    markNodeOutputMediaCurrent(node);
    syncExternalSticker("executed", output);
    suppressBuiltInPreviewImgs(node);
    requestDraw();
    const out = onExecutedPrev ? onExecutedPrev.apply(this, arguments) : undefined;
    suppressBuiltInPreviewImgs(node);
    return out;
  };
  node.onExecuted = onExecutedHook;
  const onConnectionsChangePrev = node.onConnectionsChange;
  const onConnectionsChangeHook = function (type, slotIndex) {
    const stickerInputChanged = isTrackedMediaInputConnectionChange(node, type, slotIndex, ["sticker_image"]);
    const backgroundInputChanged = isTrackedMediaInputConnectionChange(
      node,
      type,
      slotIndex,
      ["erp_image", "bg_erp"],
    );
    const args = arguments;
    const out = onConnectionsChangePrev ? onConnectionsChangePrev.apply(this, args) : undefined;
    const refreshAfterConnectionMutation = () => {
      if (state.destroyed) return;
      if (backgroundInputChanged || stickerInputChanged) {
        if (backgroundInputChanged) {
          markNodeOutputMediaStale(node, "background");
          invalidateBackgroundPreviewMedia(node);
        }
        if (stickerInputChanged) {
          markNodeOutputMediaStale(node, "external-sticker");
          node.__panoLastExecutedOutput = null;
          invalidateExternalStickerPreviewImage(node);
        }
      }
      if (stickerInputChanged) syncExternalSticker("connection-change");
      suppressBuiltInPreviewImgs(node);
      requestDraw();
    };
    refreshAfterConnectionMutation();
    queueMicrotask(refreshAfterConnectionMutation);
    return out;
  };
  node.onConnectionsChange = onConnectionsChangeHook;
  const onResizeHook = function () {
    const out = onResizePrev ? onResizePrev.apply(this, arguments) : undefined;
    this.__panoUserResized = true;
    markPreviewResizing(this, 150);
    requestDraw();
    return out;
  };
  node.onResize = onResizeHook;
  const onRemovedHook = function () {
    restoreDom();
    executedRefreshMonitor.unregister(this);
    return onRemovedPrev ? onRemovedPrev.apply(this, arguments) : undefined;
  };
  node.onRemoved = onRemovedHook;

  const restoreDom = () => {
    state.destroyed = true;
    resizeObserver?.disconnect?.();
    stickersMode ? flushNodeSurfaceGesture() : cancelCutoutNodeSurfaceGesture();
    canvas.removeEventListener("lostpointercapture", cancelCutoutDrag);
    stickerDropTargetCleanup();
    wheelCaptureCleanup();
    window.removeEventListener("keydown", onNodeSurfaceKeyDown, true);
    node.__panoStateFlushers?.delete?.(nodeSurfaceQueueFlusher);
    if (node.__panoStateFlushers instanceof Set && node.__panoStateFlushers.size === 0) {
      node.__panoStateFlushers = null;
    }
    nodeSurfaceSession?.destroy?.();
    nodeSurfaceVueApp?.unmount?.();
    node.__panoRuntimeCore?.dispose?.();
    node.__panoRuntimeCore = null;
    node.__panoRasterObjectSurfaceCache?.dispose?.();
    node.__panoRasterObjectSurfaceCache = null;
    node.__panoRasterObjectReady = null;
    unregisterExternalStickerSync();
    viewportRestoreScheduler.dispose();
    if (dropCueTimer) clearTimeout(dropCueTimer);
    dropCueTimer = null;
    sharedPreviewImageCache.disposeOwner(node);
    disposeNodeOutputVideoCache(node);
    if (state.raf) cancelAnimationFrame(state.raf);
    state.raf = 0;
    if (node.__panoCutoutNodeSurface?.session === nodeSurfaceSession) node.__panoCutoutNodeSurface = null;
    if (node.__panoStickersNodeSurface?.session === nodeSurfaceSession) node.__panoStickersNodeSurface = null;
    node.__panoCutoutNodeSurfaceState = null;
    node.__panoStickersNodeSurfaceState = null;
    node.__panoCutoutNodeFrame = null;
    if (node.__panoResizeSettleTimer) {
      clearTimeout(node.__panoResizeSettleTimer);
      node.__panoResizeSettleTimer = null;
    }
    node.__panoDomPreview = null;
    node.__panoDomRestore = null;
    if (node.onResize === onResizeHook) node.onResize = onResizePrev;
    if (node.onExecuted === onExecutedHook) node.onExecuted = onExecutedPrev;
    if (node.onConnectionsChange === onConnectionsChangeHook) node.onConnectionsChange = onConnectionsChangePrev;
    if (swCallbackWrapper && sw?.callback === swCallbackWrapper) sw.callback = swCallbackPrev;
    if (swCallbackWrapper && sw?.__panoPreviewPatchedCb === swCallbackWrapper) delete sw.__panoPreviewPatchedCb;
    if (bgwCallbackWrapper && bgw?.callback === bgwCallbackWrapper) bgw.callback = bgwCallbackPrev;
    if (bgwCallbackWrapper && bgw?.__panoPreviewPatchedCb === bgwCallbackWrapper) delete bgw.__panoPreviewPatchedCb;
    if (node.onDragOver === stickerDragOverHook) node.onDragOver = onDragOverPrev;
    if (node.onDragDrop === stickerDragDropHook) node.onDragDrop = onDragDropPrev;
    if (node.onRemoved === onRemovedHook) node.onRemoved = onRemovedPrev;
  };
  node.__panoDomRestore = restoreDom;

  node.__panoPreviewHooked = true;
  node.__panoActiveBackend = "dom";
  node.__panoCutoutNodeSurface = nodeSurfaceSession && nodeSurfaceMounted
    && !stickersMode ? { session: nodeSurfaceSession, model: nodeSurfaceUiModel }
    : null;
  node.__panoStickersNodeSurface = nodeSurfaceSession && nodeSurfaceMounted
    && stickersMode ? { session: nodeSurfaceSession, model: nodeSurfaceUiModel }
    : null;
  node.__panoDomPreview = {
    widget,
    root,
    canvas,
    requestDraw,
    state,
    emptyHintEl: cutoutHint,
    nodeSurface: node.__panoCutoutNodeSurface,
  };

  executedRefreshMonitor.register(node);
  syncExternalSticker("attach");
  requestDraw();
}

export function attachStickersPreviewNode2(node, options = {}) {
  const controller = getPreviewController(node);
  controller.attach({
    ...options,
    mode: "stickers",
  });
}

export function attachCutoutPreview(node, options = {}) {
  const controller = getPreviewController(node);
  controller.attach({
    ...options,
    mode: "cutout",
  });
}

function standaloneDomIsMounted(domPreview) {
  const root = domPreview?.root;
  const wrap = root?.querySelector?.("div");
  const canvas = domPreview?.canvas;
  if (!root || !canvas) return false;
  if (!root.isConnected || !canvas.isConnected) return false;
  const cw = Number(canvas.clientWidth || 0);
  const ch = Number(canvas.clientHeight || 0);
  if (cw > 0 && ch > 0) return true;
  const rw = Number(root.clientWidth || 0);
  const rh = Number(root.clientHeight || 0);
  if (rw > 0 && rh > 0) return true;
  if (wrap) {
    const ww = Number(wrap.clientWidth || 0);
    const wh = Number(wrap.clientHeight || 0);
    if (ww > 0 && wh > 0) return true;
  }
  return false;
}

function tryAttachDomWithProbe(node, options = {}, mountKey = null) {
  let domOk = false;
  try {
    domOk = attachStandalonePreviewDom(node, {
      ...options,
      __noAutoFallback: true,
      __skipRouteLog: true,
    }) === true;
  } catch {
    domOk = false;
  }
  if (!domOk || !node.__panoDomPreview?.widget) {
    setStandaloneUnavailableLabel(node, "Preview mount failed");
    panoPreviewLog(node, "route.attach", {
      route: "unified_dom_error",
      reason: "dom_attach_exception",
      nodeType: getNodeTypeName(node),
    });
    return true;
  }

  cancelDomMountProbe(node);
  const probe = { cancelled: false, frame: 0, timeoutId: 0 };
  node.__panoDomMountProbe = probe;

  const fallback = (reason) => {
    if (probe.cancelled) return;
    probe.cancelled = true;
    if (probe.timeoutId) {
      clearTimeout(probe.timeoutId);
      probe.timeoutId = 0;
    }
    node.__panoDomMountProbe = null;
    setStandaloneUnavailableLabel(node, "Preview mount failed");
    node.__panoDomPreview?.requestDraw?.();
    node.setDirtyCanvas?.(true, true);
    if (mountKey) {
      node.__panoPreviewAttached = true;
      node.__panoPreviewMountKey = mountKey;
    }
    panoPreviewLog(node, "route.attach", {
      route: "unified_dom_error",
      reason,
      nodeType: getNodeTypeName(node),
    });
  };

  const confirmDom = () => {
    if (probe.cancelled) return;
    const domPreview = node.__panoDomPreview;
    const rootW = Number(domPreview?.root?.clientWidth || 0);
    const rootH = Number(domPreview?.root?.clientHeight || 0);
    const wrapEl = domPreview?.root?.querySelector?.("div");
    const wrapW = Number(wrapEl?.clientWidth || 0);
    const wrapH = Number(wrapEl?.clientHeight || 0);
    const canvasW = Number(domPreview?.canvas?.clientWidth || 0);
    const canvasH = Number(domPreview?.canvas?.clientHeight || 0);
    panoPreviewLog(node, "probe.frame", {
      frame: probe.frame,
      hasWidget: !!domPreview?.widget,
      connected: !!(domPreview?.root?.isConnected && domPreview?.canvas?.isConnected),
      rootW,
      rootH,
      wrapW,
      wrapH,
      canvasW,
      canvasH,
    });
    if (!domPreview?.widget || !domPreview.root?.isConnected || !domPreview.canvas?.isConnected) {
      fallback("dom_mount_detached");
      return;
    }
    if (standaloneDomIsMounted(domPreview)) {
      probe.cancelled = true;
      if (probe.timeoutId) {
        clearTimeout(probe.timeoutId);
        probe.timeoutId = 0;
      }
      node.__panoDomMountProbe = null;
      clearStandaloneUnavailableLabel(node);
      panoPreviewLog(node, "route.attach", {
        route: "unified_dom",
        nodeType: getNodeTypeName(node),
      });
      return;
    }
    probe.frame += 1;
    if (probe.frame >= STANDALONE_DOM_PROBE_FRAMES) {
      fallback("dom_probe_size_zero");
      return;
    }
    requestAnimationFrame(confirmDom);
  };

  probe.timeoutId = setTimeout(() => {
    fallback("dom_probe_timeout");
  }, STANDALONE_DOM_PROBE_TIMEOUT_MS);
  requestAnimationFrame(confirmDom);
  return true;
}

export function attachStandalonePreviewUnified(node, options = {}) {
  const mountKey = `standalone_unified|${String(options.imageInputName || "erp_image")}|${String(options.buttonText || "Open Preview")}`;
  if (node.__panoPreviewAttached === true && node.__panoPreviewMountKey === mountKey) return;
  panoPreviewLog(node, "attach.unified.begin", {
    nodeType: getNodeTypeName(node),
    nodeId: node?.id ?? null,
    mountKey,
    size: getNodeSize(node),
    sizeW: Number(getNodeSize(node)?.[0] || 0),
    sizeH: Number(getNodeSize(node)?.[1] || 0),
    hasDomWidget: typeof node?.addDOMWidget === "function",
  });
  teardownPreview(node, { keepMonitor: false, reason: "attach_standalone_unified_begin" });
  clearStandaloneUnavailableLabel(node);
  if (typeof node?.addDOMWidget === "function") {
    const domPending = tryAttachDomWithProbe(node, options, mountKey);
    if (domPending) {
      node.__panoPreviewAttached = true;
      node.__panoPreviewMountKey = mountKey;
      return;
    }
  }
  setStandaloneUnavailableLabel(node, "Preview mount failed");
  node.__panoPreviewAttached = true;
  node.__panoPreviewMountKey = mountKey;
  panoPreviewLog(node, "route.attach", {
    route: "unified_dom_error",
    reason: "dom_unavailable",
    nodeType: getNodeTypeName(node),
  });
}

export function attachStandalonePreviewDom(node, options = {}) {
  const mountKey = `standalone_dom|${String(options.imageInputName || "erp_image")}|${String(options.buttonText || "Open Preview")}`;
  if (node.__panoPreviewAttached === true && node.__panoPreviewMountKey === mountKey && node.__panoDomPreview?.widget) return true;
  teardownPreview(node, { keepMonitor: false, reason: "attach_standalone_dom_begin" });
  clearStandaloneUnavailableLabel(node);
  node.__panoPreviewMode = "standalone_dom";
  node.__panoPreviewButtonText = String(options.buttonText || "Open Preview");
  node.__panoOpenEditor = typeof options.onOpen === "function" ? options.onOpen : null;
  executedRefreshMonitor.register(node);
  if (options.__skipRouteLog !== true) {
    panoPreviewLog(node, "route.attach", { route: "standalone_dom", nodeType: getNodeTypeName(node) });
  }
  const imageInputName = String(options.imageInputName || "erp_image");
  ensurePreviewModeCss();
  try {
    if (typeof node.addDOMWidget !== "function") throw new Error("addDOMWidget unavailable");
    if (node.__panoDomPreview?.widget) return true;

    const root = document.createElement("div");
    root.className = "pano-node-preview-dom pano-node-preview--stickers";
    root.style.cssText = "width:100%;height:100%;position:relative;display:block;min-height:56px;overflow:hidden;";
    root.setAttribute("data-capture-wheel", "true");
    root.setAttribute("tabindex", "-1");
    const wheelCaptureCleanup = bindWheelCaptureRoot(root);
    const wrap = document.createElement("div");
    wrap.style.cssText = "position:absolute;inset:0;min-height:56px;border-radius:8px;overflow:hidden;border:1px solid rgba(63,63,70,1);background:#070707;";
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;touch-action:none;cursor:grab;";
    wrap.appendChild(canvas);
    root.appendChild(wrap);

    armPreviewBootMinHeight(node, 56, () => node.__panoDomPreview?.requestDraw?.());
    const widget = trackDomWidgetRemoval(assignFreshDomWidgetRenderIdentity(node.addDOMWidget(
      getAnimPreviewWidgetName(),
      "preview",
      root,
      createCoreManagedDomWidgetOptions(node, () => node.__panoDomPreview?.requestDraw?.(), 56),
    )));
    if (widget) widget.serialize = false;
    suppressBuiltInPreviewImgs(node);

    node.__panoBindSeq = Number(node.__panoBindSeq || 0) + 1;
    const bindingSeq = node.__panoBindSeq;
    panoPreviewLog(node, "bind", { nodeId: node?.id ?? null, bindingSeq, route: "standalone_dom" });
    panoPreviewLog(node, "modal-parity", PANO_MODAL_PARITY_CONSTANTS);
    const state = { raf: 0, needsDraw: true, dragging: false, pointerId: null };
    const viewportRestoreScheduler = createViewportRestoreScheduler({
      requestFrame: (callback) => requestAnimationFrame(callback),
      cancelFrame: (id) => cancelAnimationFrame(id),
      restore: (snapshot) => {
        restoreGraphViewportSnapshot(snapshot);
        app?.canvas?.setDirty?.(true, true);
      },
    });
    const disposeCounts = { listeners: 0, raf: 0, widget: 0 };
    const controller = createPanoInteractionController({
      getView: () => ensureStandaloneView(node),
      setView: (next) => {
        const view = ensureStandaloneView(node);
        view.yaw = wrapYaw(Number(next.yaw || 0));
        view.pitch = clamp(Number(next.pitch || 0), -89.9, 89.9);
        view.fov = clamp(Number(next.fov || 100), STANDALONE_FOV_MIN, STANDALONE_FOV_MAX);
      },
      getViewportSize: () => {
        const rect = canvas.getBoundingClientRect();
        return {
          w: Math.max(1, Number(rect.width || canvas.clientWidth || 0)),
          h: Math.max(1, Number(rect.height || canvas.clientHeight || 0)),
        };
      },
      getInvert: () => {
        const ui = loadSharedUiSettings();
        return {
          x: ui.invert_view_x ? -1 : 1,
          y: ui.invert_view_y ? -1 : 1,
        };
      },
      onInteraction: () => {
        markStandaloneInteractionSettled(node);
      },
      onDebug: (tag, payload) => {
        panoPreviewLog(node, tag, payload);
      },
    });
    node.__panoStandaloneController = controller;
    let detachWindowPointerBridge = null;
    const stopInputBubble = (ev) => {
      ev.preventDefault?.();
      ev.stopPropagation?.();
      ev.stopImmediatePropagation?.();
    };
    const bindWindowPointerBridge = () => {
      if (detachWindowPointerBridge) detachWindowPointerBridge();
      const onWinMove = (ev) => {
        if (!state.dragging) return;
        panoPreviewLog(node, "event", { kind: "pointermove", via: "window" });
        if (!isLeftButtonPressed(ev)) {
          endDrag(ev, ev?.type || "pointermove_buttons_released");
          return;
        }
        controller.moveDrag(ev.clientX, ev.clientY, "pano", performance.now());
        requestDraw();
        stopInputBubble(ev);
      };
      const onWinUp = (ev) => {
        if (!state.dragging) return;
        endDrag(ev, ev?.type || "pointerup");
        stopInputBubble(ev);
      };
      const onWinCancel = (ev) => {
        if (!state.dragging) return;
        endDrag(ev, ev?.type || "pointercancel");
        stopInputBubble(ev);
      };
      window.addEventListener("pointermove", onWinMove, true);
      window.addEventListener("pointerup", onWinUp, true);
      window.addEventListener("pointercancel", onWinCancel, true);
      disposeCounts.listeners += 3;
      detachWindowPointerBridge = () => {
        window.removeEventListener("pointermove", onWinMove, true);
        window.removeEventListener("pointerup", onWinUp, true);
        window.removeEventListener("pointercancel", onWinCancel, true);
        disposeCounts.listeners = Math.max(0, disposeCounts.listeners - 3);
        detachWindowPointerBridge = null;
      };
    };
    const requestDraw = () => {
      state.needsDraw = true;
      if (!state.raf) state.raf = requestAnimationFrame(tick);
    };
    const resizeObserver = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(() => {
        markPreviewResizing(node, 150);
        requestDraw();
      })
      : null;
    resizeObserver?.observe(wrap);
    let tickCount = 0;
    const tick = (ts = performance.now()) => {
      state.raf = 0;
      tickCount++;
      if (tickCount <= 20) inspectNodeLayout(node, `tick.${tickCount}`);

      const movingInertia = controller.stepInertia(ts);
      const resizingNow = isPreviewResizing(node, ts);
      const moving = movingInertia || resizingNow;
      recordStandaloneFrame(node, ts);
      if (!state.needsDraw && !moving && tickCount > 20) return;

      state.needsDraw = false;
      const dpr = 1;
      const clientW = Number(canvas.clientWidth || 0);
      const clientH = Number(canvas.clientHeight || 0);
      if (node.__panoBootMinHeightActive && clientW > 0 && clientH > 0) {
        node.__panoBootMinHeightActive = false;
      }
      const w = Math.max(64, Math.round(clientW * dpr));
      const h = Math.max(64, Math.round(clientH * dpr));

      if (tickCount <= 20 || w !== canvas.width || h !== canvas.height) {
         inspectNodeLayout(node, "tick.resize", { w, h, cw: canvas.clientWidth, ch: canvas.clientHeight });
      }

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const rect = { x: 0, y: 0, w, h };
      const mesh = STANDALONE_MESH_LOW;
      drawStandalonePanorama(node, ctx, rect, imageInputName, mesh);
      node.setDirtyCanvas?.(true, false);
      if (state.needsDraw || moving) state.raf = requestAnimationFrame(tick);
    };

    const onDown = (ev) => {
      if (!stopCanvasEventUnlessResizeGrip(ev, wrap)) return;
      if (ev.button !== 0) return;
      panoPreviewLog(node, "event", { kind: "pointerdown", via: "viewer" });
      root.focus?.();
      canvas.setPointerCapture?.(ev.pointerId);
      state.pointerId = ev.pointerId;
      state.dragging = true;
      canvas.style.cursor = "grabbing";
      controller.startDrag(ev.clientX, ev.clientY, ev.pointerId, performance.now());
      panoPreviewLog(node, "drag", { phase: "start", hasCapture: canvas.hasPointerCapture?.(ev.pointerId) === true });
      bindWindowPointerBridge();
      requestDraw();
    };
    const onMove = (ev) => {
      if (!state.dragging) return;
      panoPreviewLog(node, "event", { kind: "pointermove", via: "viewer" });
      stopCanvasEventUnlessResizeGrip(ev, wrap);
      if (!isLeftButtonPressed(ev)) {
        endDrag(ev);
        return;
      }
      controller.moveDrag(ev.clientX, ev.clientY, "pano", performance.now());
      requestDraw();
    };
    const endDrag = (ev, reason = "pointerup") => {
      if (!state.dragging) return;
      stopCanvasEventUnlessResizeGrip(ev, wrap);
      state.dragging = false;
      state.pointerId = null;
      canvas.style.cursor = "grab";
      controller.endDrag(performance.now());
      panoPreviewLog(node, "event", { kind: reason, via: "viewer" });
      panoPreviewLog(node, "drag", { phase: "end", reason, hasCapture: false });
      detachWindowPointerBridge?.();
      requestDraw();
    };
    const onUp = (ev) => endDrag(ev, ev?.type || "pointerup");
    const onLostCapture = () => {
      if (!state.dragging) return;
      state.dragging = false;
      state.pointerId = null;
      canvas.style.cursor = "grab";
      controller.endDrag(performance.now());
      panoPreviewLog(node, "event", { kind: "lostpointercapture", via: "viewer" });
      panoPreviewLog(node, "drag", { phase: "end", reason: "lostpointercapture", hasCapture: false });
      detachWindowPointerBridge?.();
      requestDraw();
    };
    const onWheel = (ev) => {
      if (!stopCanvasEventUnlessResizeGrip(ev, wrap)) return;
      panoPreviewLog(node, "event", { kind: "wheel", via: "viewer" });
      const graphSnapshot = lockGraphViewportSnapshot();
      const activeElement = document.activeElement;
      const before = Number(ensureStandaloneView(node).fov || 100);
      const changed = controller.applyWheelEvent(ev);
      const after = Number(ensureStandaloneView(node).fov || 100);
      panoPreviewLog(node, "wheel", {
        focused: !!activeElement,
        activeElementIsRoot: activeElement === root,
        deltaY: Number(ev.deltaY || 0),
        fovBefore: before,
        fovAfter: after,
      });
      if (changed) {
        requestDraw();
      }
      ev.preventDefault?.();
      ev.stopPropagation?.();
      ev.stopImmediatePropagation?.();
      viewportRestoreScheduler.schedule(graphSnapshot);
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("lostpointercapture", onLostCapture);
    canvas.addEventListener("wheel", onWheel, { passive: false, capture: true });
    wrap.addEventListener("wheel", onWheel, { passive: false, capture: true });
    disposeCounts.listeners += 7;
    const blockedEvents = ["contextmenu", "click", "dblclick"];
    blockedEvents.forEach((name) => {
      wrap.addEventListener(name, stopInputBubble, { capture: true });
      canvas.addEventListener(name, stopInputBubble, { capture: true });
      disposeCounts.listeners += 2;
    });

    const onRemovedPrev = node.onRemoved;
    const onResizePrev = node.onResize;
    const onExecutedPrev = node.onExecuted;
    const onConnectionsChangePrev = node.onConnectionsChange;
    node.onExecuted = function (output) {
      inspectNodeLayout(node, "onExecuted");
      syncOwnOutputSourceFromExecuted(node, output);
      invalidatePreviewImageCaches(node);
      markNodeOutputMediaCurrent(node);
      suppressBuiltInPreviewImgs(node);
      requestDraw();
      const out = onExecutedPrev ? onExecutedPrev.apply(this, arguments) : undefined;
      suppressBuiltInPreviewImgs(node);
      return out;
    };
    node.onConnectionsChange = function (type, slotIndex) {
      inspectNodeLayout(node, "onConnectionsChange");
      if (isTrackedMediaInputConnectionChange(node, type, slotIndex)) {
        markNodeOutputMediaStale(node, "background");
        invalidatePreviewImageCaches(node);
      }
      suppressBuiltInPreviewImgs(node);
      requestDraw();
      return onConnectionsChangePrev ? onConnectionsChangePrev.apply(this, arguments) : undefined;
    };
    node.onResize = function () {
      const out = onResizePrev ? onResizePrev.apply(this, arguments) : undefined;
      this.__panoUserResized = true;
      markPreviewResizing(this, 150);
      requestDraw();
      this.setDirtyCanvas?.(true, false);
      return out;
    };
    node.onRemoved = function () {
      node.__panoStandaloneModal?.dispose?.();
      node.__panoStandaloneModal = null;
      cancelDomMountProbe(node);
      if (state.raf) {
        cancelAnimationFrame(state.raf);
        disposeCounts.raf += 1;
      }
      detachWindowPointerBridge?.();
      viewportRestoreScheduler.dispose();
      wheelCaptureCleanup();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("lostpointercapture", onLostCapture);
      canvas.removeEventListener("wheel", onWheel, true);
      wrap.removeEventListener("wheel", onWheel, true);
      disposeCounts.listeners = Math.max(0, disposeCounts.listeners - 7);
      blockedEvents.forEach((name) => {
        wrap.removeEventListener(name, stopInputBubble, true);
        canvas.removeEventListener(name, stopInputBubble, true);
        disposeCounts.listeners = Math.max(0, disposeCounts.listeners - 2);
      });
      if (removeNodeWidget(node, widget)) disposeCounts.widget += 1;
      resizeObserver?.disconnect?.();
      if (node.__panoResizeSettleTimer) {
        clearTimeout(node.__panoResizeSettleTimer);
        node.__panoResizeSettleTimer = null;
      }
      if (node.__panoBootMinHeightTimer) {
        clearTimeout(node.__panoBootMinHeightTimer);
        node.__panoBootMinHeightTimer = null;
      }
      node.__panoBootMinHeightActive = false;

      node.__panoDomPreview = null;
      node.__panoDomRestore = null;
      node.__panoStandaloneController = null;
      node.__panoPreviewAttached = false;
      node.__panoPreviewMountKey = null;
      node.onResize = onResizePrev;
      node.onExecuted = onExecutedPrev;
      node.onConnectionsChange = onConnectionsChangePrev;
      executedRefreshMonitor.unregister(node);
      panoPreviewLog(node, "teardown", { route: "standalone_dom", bindingSeq, disposeCounts: { ...disposeCounts } });
      node.onRemoved = onRemovedPrev;
      return onRemovedPrev ? onRemovedPrev.apply(this, arguments) : undefined;
    };
    node.__panoDomRestore = () => {
      node.__panoStandaloneModal?.dispose?.();
      node.__panoStandaloneModal = null;
      cancelDomMountProbe(node);
      if (state.raf) {
        cancelAnimationFrame(state.raf);
        disposeCounts.raf += 1;
      }
      detachWindowPointerBridge?.();
      viewportRestoreScheduler.dispose();
      wheelCaptureCleanup();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("lostpointercapture", onLostCapture);
      canvas.removeEventListener("wheel", onWheel, true);
      wrap.removeEventListener("wheel", onWheel, true);
      disposeCounts.listeners = Math.max(0, disposeCounts.listeners - 7);
      blockedEvents.forEach((name) => {
        wrap.removeEventListener(name, stopInputBubble, true);
        canvas.removeEventListener(name, stopInputBubble, true);
        disposeCounts.listeners = Math.max(0, disposeCounts.listeners - 2);
      });
      if (removeNodeWidget(node, widget)) disposeCounts.widget += 1;
      if (node.__panoBootMinHeightTimer) {
        clearTimeout(node.__panoBootMinHeightTimer);
        node.__panoBootMinHeightTimer = null;
      }
      node.__panoBootMinHeightActive = false;
      node.__panoDomPreview = null;
      node.__panoDomRestore = null;
      node.__panoStandaloneController = null;
      node.__panoPreviewAttached = false;
      node.__panoPreviewMountKey = null;
      node.onResize = onResizePrev;
      node.onExecuted = onExecutedPrev;
      node.onConnectionsChange = onConnectionsChangePrev;
      node.onRemoved = onRemovedPrev;
      panoPreviewLog(node, "teardown", { route: "standalone_dom", bindingSeq, disposeCounts: { ...disposeCounts } });
      clearStandaloneUnavailableLabel(node);
    };
    node.__panoPreviewHooked = true;
    node.__panoPreviewAttached = true;
    node.__panoPreviewMountKey = mountKey;
    node.__panoDomPreview = { widget, root, canvas, requestDraw, state };
    requestDraw();
    return true;
  } catch {
    if (options.__noAutoFallback === true) {
      setStandaloneUnavailableLabel(node, "Node 2.0 preview unavailable");
      return false;
    }
    clearStandaloneUnavailableLabel(node);
    return false;
  }
}

export function attachStandalonePreviewAuto(node, options = {}) {
  attachStandalonePreviewUnified(node, options);
}

export function attachPanoramaPreview(node, options = {}) {
  const allowStandalone = options.__allowStandalone === true;
  if (isStandalonePreviewNode(node) && !allowStandalone) {
    panoPreviewLog(node, "attach.skip", { reason: "standalone_preview_node", route: "blocked_controller_attach", nodeType: getNodeTypeName(node) });
    return;
  }
  const controller = getPreviewController(node);
  controller.attach(options);
}
