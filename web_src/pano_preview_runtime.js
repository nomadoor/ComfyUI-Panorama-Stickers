import * as appModule from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { createApp, reactive } from "vue";
import { createPaintEngineManager } from "./pano_paint_engine.js";
import { createPanoInteractionController } from "./pano_interaction_controller.js";
import { clamp } from "./pano_math.js";
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "./pano_diagnostics.js";
import { yawPitchToDir } from "./pano_camera_math.js";
import { isPanoramaPreviewNodeName } from "./pano_preview_identity.js";
import { editorActive, editorStateText, parsePanoEditorState, parseSceneEditorState, sameEditorStateText, setEditorActive, sourceAsset } from "./pano_editor_state.js";
import { loadSceneState } from "./pano_scene_state.js";
import { shotCamera, viewProjection, workingSkyLayers } from "./pano_editor_view.js";
import { acquirePreviewView, previewNodeCamera } from "./pano_preview_view.js";
import { createComfyMediaAdapter } from "./pano_comfy_media.js";
import { createNodePlayback, surfaceShown } from "./pano_node_playback.js";
import { portMediaSource } from "./pano_port_media.js";
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
import { fitFocalPx, getCutoutCameraParams } from "./pano_cutout_view_math.js";
import PanoCutoutNodeSurface from "./components/PanoCutoutNodeSurface.vue";
import PanoStickersNodeSurface from "./components/PanoStickersNodeSurface.vue";
import {
  NODE_SURFACE_FRAME,
  createStickersNodeSurfaceSession,
  portStickerSyncValue,
  stickersNodeSurfaceModel,
  surfacePoseStickers,
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
  BACKGROUND_INPUT_NAMES,
  STICKER_INPUT_NAMES,
  createLoopingPreviewVideo,
  isNodeOutputMediaCurrent,
  isRepeatedOutput,
  isTrackedMediaInputConnectionChange,
  isVideoFile,
  outputSourceToken,
  restoreLoadedNodeOutput,
  resolvePreviewVideoSource,
  setNodeOutputLookup,
  sourceNodeIds,
  trackRunOutputs,
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
setNodeOutputLookup((node) => lookupNodeOutputEntry(node.id));
trackRunOutputs(api);
const sharedPreviewImageCache = createSharedImageCache();
const { linkedVideoFile } = createComfyMediaAdapter({ app, api });

function getAnimPreviewWidgetName() {
  return String(
    window?.comfyAPI?.app?.ANIM_PREVIEW_WIDGET
    || appModule?.ANIM_PREVIEW_WIDGET
    || "$$comfy_animation_preview"
  );
}

const SHARED_UI_SETTINGS_KEY = "pano_suite.ui_settings.v1";
const PANO_LOADING_MIN_MS = 120;
const NODE_STILL_MAX_WIDTH = 2048;

function loadSharedUiSettings() {
  const base = {
    invert_view_x: false,
    invert_view_y: false,
  };
  try {
    const text = String(window?.localStorage?.getItem(SHARED_UI_SETTINGS_KEY) || "").trim();
    if (!text) return base;
    const parsed = JSON.parse(text);
    return {
      invert_view_x: !!parsed?.invert_view_x,
      invert_view_y: !!parsed?.invert_view_y,
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
  const parsed = node.__panoSceneStateV2 && typeof source === "string"
    ? parseSceneEditorState(source, { backgroundColor: bg, coverage, active: editorActive(node) })
    : parseState(source, bg);
  parsed.coverage = coverage;
  node.__panoStateCache = { source, liveVersion, bg, coverage, parsed };
  return parsed;
}

function getWidget(node, name) { return node.widgets?.find((w) => w.name === name) || null; }

function getGraphNodeById(graph, id) {
  if (!graph || id == null) return null;
  if (typeof graph.getNodeById === "function") return graph.getNodeById(id);
  return graph._nodes_by_id?.[id] || graph._nodes_by_id?.[String(id)] || null;
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
    if (BACKGROUND_INPUT_NAMES.includes(name) && !out.includes(name)) out.push(name);
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

function originNodeOf(node, slot) {
  return resolveInputOriginNode(node, slot, node.graph ? node.getInputLink(slot)?.origin_id : null);
}

// The nodes whose outputs the media of a node is read from: the nodes its image inputs come from, and every
// node above them.
function getMediaSourceIds(node, preferredInputNames = BACKGROUND_INPUT_NAMES) {
  const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
  if (!inputs.length) return new Set();
  const preferredResolved = preferredImageInputsForNode(node, preferredInputNames);
  const preferred = preferredResolved
    .map((name) => inputs.findIndex((i) => String(i?.name || "") === String(name)))
    .filter((idx) => idx >= 0);
  const imageTyped = inputs
    .map((input, idx) => ({ input, idx }))
    .filter(({ input }) => String(input?.type || "").toUpperCase() === "IMAGE")
    .map(({ idx }) => idx);
  const indices = [...new Set([...preferred, ...imageTyped])];
  return sourceNodeIds(node, indices, originNodeOf);
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
        const mode = String(node.__panoPreviewMode || "");
        if (mode === "cutout" && !selfHit) return;
        // The output of a node that the media is not read from changes nothing on this node.
        if (!selfHit && ![...getMediaSourceIds(node)].some((id) => executionIdMatches(executedId, id))) return;
        const reason = selfHit ? "self" : "upstream";
        if (isRepeatedOutput(node.__panoExecutedOutputs ??= new Map(), executedId, detail.output)) return;
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
  const output = outputOverride || lookupNodeOutputEntry(node?.id);
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
  if (typeof HTMLCanvasElement !== "undefined" && media instanceof HTMLCanvasElement) {
    return ["canvas", media.width, media.height, Number(media.__panoFrameIdx || 0)].join("|");
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
  node?.__panoOwnOutputVideoCache?.player.destroy();
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
  if (cached && cached.key === cacheKey) return cached.player.failed() ? null : cached.player.video;
  disposeNodeOutputVideoCache(node);
  const player = createLoopingPreviewVideo({
    documentRef: document,
    src: srcKey,
    onFrame: onLoad,
  });
  if (!player) return null;
  node.__panoOwnOutputVideoCache = { key: cacheKey, player };
  return player.video;
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
    const link = node.graph ? node.getInputLink(idx) : null;
    if (link?.origin_id == null) continue;
    const originId = link.origin_id;
    const originNode = resolveInputOriginNode(node, idx, originId);
    if (!originNode) continue;
    const resolvedOriginSlot = Number(link.origin_slot ?? 0);

    const outputs = lookupNodeOutputEntry(originNode?.id ?? originId);
    // LoadVideo shows its file here, which an <img> cannot load.
    const outImgs = Array.isArray(outputs?.images) ? outputs.images : [];
    if (outImgs.length) {
      const ordered = [];
      if (resolvedOriginSlot >= 0 && resolvedOriginSlot < outImgs.length) ordered.push(outImgs[resolvedOriginSlot]);
      ordered.push(...outImgs);
      for (const cand of ordered.filter((image) => !isVideoFile(image))) {
        const src = imageSourceFromCandidate(cand);
        if (src) {
          panoPreviewLog(node, "image-resolve", {
            inputName: String(input?.name || ""),
            sourceType: "nodeOutputs",
            stage: "hit",
          });
          return { src: `${src}&pano_src=${outputSourceToken(outputs)}`, sourceType: "nodeOutputs", inputName: String(input?.name || "") };
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

function setCutoutEmptyHint(node, visible) {
  const el = node?.__panoDomPreview?.emptyHintEl;
  if (!el) return;
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

function removeNodeWidget(node, widget) {
  return removeTrackedDomWidget(node, widget);
}

function getNodePreviewImage(node, assetId, asset, sceneItem = null) {
  const key = String(assetId || "");
  if (!key) return null;
  let src = stickerAssetToPreviewSrc(asset);
  if (!src && sceneItem?.external) {
    if (!isNodeOutputMediaCurrent(node, "external-sticker")) return null;
    const ownOutput = lookupNodeOutputEntry(node?.id);
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
    if (sceneItem?.external && node.__panoOutputFromRun) runExternalStickerSync(node, "image-loaded");
    node.__panoDomPreview?.requestDraw?.();
  });
  return img || null;
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

function getSourcePixelSize(source) {
  return {
    width: Math.max(1, Number(source?.naturalWidth || source?.videoWidth || source?.width || 0)),
    height: Math.max(1, Number(source?.naturalHeight || source?.videoHeight || source?.height || 0)),
  };
}

function drawStickerFrame(ctx, item, projection) {
  const geometry = buildStickerGeometry(item, projection);
  if (geometry.visible) drawStickerSelectionBoundary(ctx, geometry.boundaryEdges, { selected: false });
}

function drawStickerSelectionOverlay(ctx, item, projection) {
  const geometry = buildStickerGeometry(item, projection);
  if (!geometry.visible) return;
  ctx.save();
  drawStickerSelectionBoundary(ctx, geometry.boundaryEdges, { selected: true });
  drawStickerSelectionHandles(ctx, geometry, { accent: stickerSelectionAccent(item) });
  ctx.restore();
}

// The camera projection of the on-node Stickers view, for its overlays and hit testing.
function stickersSurfaceProjection(node, width, height) {
  return viewProjection(previewNodeCamera(node.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, width, height), width, height);
}

// The Timeline frame the node shows: its playback's, NODE_SURFACE_FRAME until it plays.
function surfaceFrame(node) {
  return node.__panoSurfacePlayback?.playback.frame ?? NODE_SURFACE_FRAME;
}

// PanoramaStickersNode's background VIDEO, best first, as the editor picks it: the node's current
// result, else the file LoadVideo loads into the background input.
function backgroundVideoSources(node) {
  const own = isNodeOutputMediaCurrent(node, "background")
    ? resolvePreviewVideoSource(lookupNodeOutputEntry(node.id), ["pano_input_videos"], imageSourceFromCandidate)
    : "";
  return [own, linkedVideoFile(node, BACKGROUND_INPUT_NAMES)];
}

// The port Sticker's MP4 ({ src, meta }) or the PNGs of an RGBA IMAGE batch ({ frames, meta }) in the
// node's current result, or null.
function portStickerMedia(node) {
  if (!isNodeOutputMediaCurrent(node, "external-sticker")) return null;
  const output = lookupNodeOutputEntry(node.id);
  const meta = ownOutputUiValue(node, "pano_sticker_input_video_meta");
  if (!meta || typeof meta !== "object") return null;
  const frames = output?.ui?.pano_sticker_input_frames || output?.pano_sticker_input_frames;
  if (Array.isArray(frames) && frames.length) return { frames: frames.map(imageSourceFromCandidate), meta };
  const src = resolvePreviewVideoSource(output, ["pano_sticker_input_videos"], imageSourceFromCandidate);
  return src ? { src, meta } : null;
}

// ADR 0019: the played VIDEO once it shows a frame, else its still; null without a VIDEO.
function playbackBackground({ playback, video, still }) {
  if (!playback.source) return null;
  return !playback.showsVideo && still.__panoFrameIdx > 0 ? still : video;
}

// What the on-node surfaces draw with three.js: the background, and the Sky layers of the node's
// state (its sky Stickers and paint) from back to front, at surfaceFrame.
function surfaceViewInput(node, state, bgImg) {
  if (node.__panoSurfaceScene?.state !== state) {
    node.__panoSurfaceScene = { state, sceneState: loadSceneState({ ...state, painting: null }) };
  }
  const media = (item) => {
    if (item.visible === false) return null;
    let img;
    if (state.version === 2) {
      img = getNodePreviewImage(node, item.id, sourceAsset(item.source), { external: item.source.kind === "port" });
      const surfacePlayback = node.__panoSurfacePlayback;
      if (item.source.kind === "port" && surfacePlayback) {
        // The port Sticker's MP4 follows the playhead; the view keeps the texture before while the
        // same media has no picture, and drops it for other media on the port.
        const picture = surfacePlayback.playback.stickerPicture(surfacePlayback.stickerStill, img);
        const source = portMediaSource(surfacePlayback.playback.stickerMedia, img);
        return picture ? { media: picture, revision: getRenderableMediaRevisionToken(picture), source } : null;
      }
    } else {
      const external = item.type === "external_image" || item.source_kind === "external_image";
      const assetId = String(item.asset_id || "") || (external ? String(item.id || "") : "");
      img = getNodePreviewImage(node, assetId, state.assets?.[item.asset_id], { external });
    }
    return isRenderableMediaReady(img) ? { media: img, revision: getRenderableMediaRevisionToken(img) } : null;
  };
  // A hidden painting (state v2 `painting_visible`) is not drawn.
  const paintLayers = (state.painting_visible === false ? [] : buildRuntimeCutoutLayerEntries(node, state))
    .filter((entry) => entry.visible !== false)
    .map((entry) => ({ id: entry.id, media: entry.source, revision: entry.revision, opacity: entry.opacity, zIndex: entry.zIndex }));
  return {
    background: isRenderableMediaReady(bgImg)
      ? { media: bgImg, revision: getRenderableMediaRevisionToken(bgImg), coverage: Number(state.coverage) === 180 ? 180 : 360 }
      : null,
    layers: workingSkyLayers(node.__panoSurfaceScene.sceneState, surfaceFrame(node), state.stickers, { media, paintLayers }),
  };
}

function drawCanvas(node, canvas, surfaceView) {
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
  const surfW = Math.max(64, Math.round(Number(wrap?.clientWidth || canvas.clientWidth || 0)));
  const surfH = Math.max(64, Math.round(Number(wrap?.clientHeight || canvas.clientHeight || 0)));

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  if (canvas.width !== surfW || canvas.height !== surfH) {
    canvas.width = surfW;
    canvas.height = surfH;
  }
  const rect = { x: 0, y: 0, w: surfW, h: surfH };
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#070707";
  ctx.fillRect(0, 0, surfW, surfH);
  // PanoramaStickersNode plays its background VIDEO with its Timeline; the legacy node loops it.
  const bgImg = (node.__panoSurfacePlayback
    ? playbackBackground(node.__panoSurfacePlayback)
    : getNodeOwnOutputVideo(node, ["pano_input_videos"], () => node.__panoDomPreview?.requestDraw?.())
  ) || getLinkedInputImageForPreview(
    node,
    BACKGROUND_INPUT_NAMES,
    () => node.__panoDomPreview?.requestDraw?.(),
    { preserveReadyWhilePending: false },
  );
  const bgReady = isRenderableMediaReady(bgImg);
  // Draws what camera sees into target and reports whether the view could draw it.
  let input = null;
  const drawView = (target, camera) => {
    input ||= surfaceViewInput(node, state, bgImg);
    const surface = surfaceView.render({ width: target.w, height: target.h, camera, ...input });
    if (surface) ctx.drawImage(surface.canvas, surface.x, surface.y, surface.width, surface.height, target.x, target.y, target.w, target.h);
    return !!surface;
  };

  if (mode === "cutout") {
    const shot = getActiveShot(state);
    const bgSize = getSourcePixelSize(bgImg);
    const aspect = shot
      ? clamp(getCutoutCameraParams(shot).aspect, 0.1, 10)
      : (bgReady ? clamp(Number(bgSize.width / bgSize.height), 0.05, 20.0) : 1);
    const frame = fitCutoutNodeFrame(rect, aspect);
    node.__panoCutoutNodeFrame = frame;

    let statusType = "none";
    const loadingSrc = String(bgImg?.currentSrc || bgImg?.src || "");
    if (!shot) {
      const lastShot = node.__panoLastCutoutShot;
      if (lastShot) {
        node.__panoPreviewView = buildCutoutPanoramaViewFromShot(lastShot, { width: surfW, height: surfH });
        node.__panoLastCutoutShot = null;
      } else if (!node.__panoPreviewView) {
        node.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 };
      }
      if (bgReady) {
        if (!drawView(rect, previewNodeCamera(node.__panoPreviewView, surfW, surfH))) statusType = "loading";
      } else if (bgImg) {
        statusType = "loading";
      } else {
        statusType = "empty";
      }
    } else if (bgImg && !bgReady) {
      statusType = "loading";
    } else if (bgReady) {
      const contextLayout = layoutCutoutNodeContext({ width: surfW, height: surfH }, frame, shot);
      const drawn = [
        !contextLayout.fallback || drawView(contextLayout.fallback.rect, shotCamera(contextLayout.fallback.shot)),
        drawView(contextLayout.rect, shotCamera(contextLayout.shot)),
        !contextLayout.fallback || drawView(frame, shotCamera(shot)),
      ];
      if (!drawn.every(Boolean)) statusType = "loading";
    } else {
      statusType = "empty";
    }
    if (!bgReady) surfaceView.release();
    // The node surface shows a failed view itself.
    if (surfaceView.failed && statusType === "loading") statusType = "none";

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
      setCutoutEmptyHint(node, true);
      setRenderLoading(node, false, "");
    } else {
      setCutoutEmptyHint(node, false);
      setRenderLoading(node, false, "");
    }
    return;
  }

  if (!node.__panoPreviewView) node.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 };
  let panoramaDrawn = false;
  if (!bgImg || bgReady) {
    input = surfaceViewInput(node, state, bgImg);
    // With nothing to draw yet, the grid stands alone and the view is not loaded.
    if (!input.background && !input.layers.length) {
      surfaceView.release();
      panoramaDrawn = true;
    } else {
      panoramaDrawn = drawView(rect, previewNodeCamera(node.__panoPreviewView, surfW, surfH));
    }
  }
  // The node surface shows a failed view itself.
  const loading = !panoramaDrawn && !surfaceView.failed;
  setRenderLoading(node, loading, loading ? String(bgImg?.currentSrc || bgImg?.src || "") : "");
  if (loading) drawLoadingOverlay(ctx, rect, getNodeUiScale(canvas, rect));
  const projection = stickersSurfaceProjection(node, surfW, surfH);
  if (!bgImg && panoramaDrawn) drawPanoGrid(ctx, projection, getNodeUiScale(canvas, rect));
  const selectedId = String(state?.active?.selected_sticker_id || "");
  const poseStickers = surfacePoseStickers(state, surfaceFrame(node));
  const selected = panoramaDrawn
    ? poseStickers.find((item) => String(item?.id || "") === selectedId && item?.visible !== false)
    : null;
  if (panoramaDrawn) {
    // The Sticker of the sticker input shows as a frame until the node's result has its media.
    poseStickers
      .filter((item) => item !== selected && item?.visible !== false && (item.external || item.source_kind === "external_image"))
      .filter((item) => !isRenderableMediaReady(getNodePreviewImage(node, item.id, null, { external: true })))
      .forEach((item) => drawStickerFrame(ctx, item, projection));
  }
  if (selected) drawStickerSelectionOverlay(ctx, selected, projection);
}

function drawLineOnSphere(ctx, pointsDir, projection, color, width = 1) {
  let started = false;
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  for (const d of pointsDir) {
    const p = projection.project(d);
    if (p.z <= 1e-4) { started = false; continue; }
    if (!started) { ctx.moveTo(p.x, p.y); started = true; }
    else { ctx.lineTo(p.x, p.y); }
  }
  ctx.stroke();
}

function drawPanoGrid(ctx, projection, uiScale) {
  ctx.save();
  const gridColor = "#3f3f46";
  const equatorColor = "rgba(250, 250, 250, 0.86)";

  // Latitudes
  for (let lat = -75; lat <= 75; lat += 15) {
    const pts = [];
    for (let lon = -180; lon <= 180; lon += 4) pts.push(yawPitchToDir(lon, lat));
    drawLineOnSphere(ctx, pts, projection, lat === 0 ? equatorColor : gridColor, lat === 0 ? 1.5 : 1);
  }

  // Longitudes
  for (let lon = -180; lon <= 180; lon += 15) {
    const pts = [];
    for (let lat = -89; lat <= 89; lat += 4) pts.push(yawPitchToDir(lon, lat));
    drawLineOnSphere(ctx, pts, projection, gridColor, lon % 90 === 0 ? 1.3 : 1);
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
    const p = projection.project(l.dir);
    if (p.z > 1e-4) {
      ctx.fillText(l.name, p.x, p.y + 24 * uiScale);
    }
  });

  ctx.restore();
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

const shownOwnOutputs = new WeakMap();

// Shows the node's output as its media, and returns whether it is new.
function showOwnNodeOutput(node, output) {
  if (isRepeatedOutput(shownOwnOutputs, node, output)) return false;
  syncOwnOutputSourceFromExecuted(node, output);
  invalidatePreviewImageCaches(node);
  suppressBuiltInPreviewImgs(node);
  return true;
}

// A restored output is only shown: the port Sticker is synced into the state by a run of the node, so that
// opening a workflow does not change it.
export async function restoreNodeOutput(node) {
  const output = await restoreLoadedNodeOutput(node, app, api);
  if (!output) return;
  showOwnNodeOutput(node, output);
  node.__panoDomPreview?.requestDraw?.();
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

  const canvas = createPanoCanvas({ label: "node.surface" });
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
  // The on-node surface draws through the three.js view it shares with the Preview nodes.
  const surfaceView = acquirePreviewView(requestDraw);
  const nodeSurfaceUiModel = reactive(stickersMode
    ? { ...stickersNodeSurfaceModel(getCachedState(node)), importing: false, dropActive: false, viewUnavailable: false, playable: false, playing: false }
    : {
      ...cutoutNodeSurfaceModel(getCachedState(node)),
      viewUnavailable: false,
      aspectOpen: false,
      aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((value) => ({ value, label: value })),
    });
  // PanoramaStickersNode plays its Timeline on the node. requestVideoFrameCallback runs only for a
  // rendered VIDEO, so the muted elements stay in the surface, out of sight by their opacity: the
  // background VIDEO, and the port Sticker's MP4 that follows the playhead.
  let surfacePlayback = null;
  if (stickersMode && node.__panoSceneStateV2) {
    const [video, stickerVideo] = [0, 1].map(() => {
      const element = createPanoVideo(document, "node.playback");
      element.playsInline = true;
      element.preload = "auto";
      element.crossOrigin = "anonymous";
      element.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none";
      wrap.appendChild(element);
      return element;
    });
    const still = createPanoCanvas({ label: "node.still" });
    still.__panoFrameIdx = 0;
    const stickerStill = createPanoCanvas({ label: "node.port-still" });
    stickerStill.__panoFrameIdx = 0;
    const playback = createNodePlayback({
      video,
      stickerVideo,
      createImage: (src, onLoad) => {
        const image = new Image();
        image.onload = onLoad;
        image.onerror = onLoad;
        image.src = src;
        return image;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (callback) => requestAnimationFrame(callback),
        cancelFrame: (id) => cancelAnimationFrame(id),
      },
      readState: () => getCachedState(node),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: node.__panoStudio === true,
      onFrame: requestDraw,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        if (!(video.videoWidth > 0 && video.videoHeight > 0)) return;
        const scale = Math.min(1, NODE_STILL_MAX_WIDTH / video.videoWidth);
        still.width = Math.round(video.videoWidth * scale);
        still.height = Math.round(video.videoHeight * scale);
        still.getContext("2d")?.drawImage(video, 0, 0, still.width, still.height);
        still.__panoFrameIdx += 1;
        requestDraw();
      },
      onStickerCapture: () => {
        if (!(stickerVideo.videoWidth > 0 && stickerVideo.videoHeight > 0)) return;
        stickerStill.width = stickerVideo.videoWidth;
        stickerStill.height = stickerVideo.videoHeight;
        stickerStill.getContext("2d")?.drawImage(stickerVideo, 0, 0);
        stickerStill.__panoFrameIdx += 1;
        requestDraw();
      },
      onChange: () => {
        nodeSurfaceUiModel.playing = playback.playing;
        requestDraw();
      },
    });
    surfacePlayback = { playback, video, still, stickerVideo, stickerStill, stickerSource: "" };
    node.__panoSurfacePlayback = surfacePlayback;
  }
  // The Timeline plays on the node only while it is shown: collapsed, in a subgraph or another graph,
  // the node pauses and lets its VIDEO go.
  const syncSurfacePlayback = () => {
    const { playback, still, stickerStill } = surfacePlayback;
    const shown = surfaceShown(wrap, !!node.flags?.collapsed);
    const source = playback.source;
    const sticker = shown ? portStickerMedia(node) : null;
    const playable = playback.follow({
      shown,
      sources: shown ? backgroundVideoSources(node) : [],
      state: getCachedState(node),
      sticker,
    });
    // The still of the port Sticker's MP4 is released with its source.
    if ((sticker?.src || "") !== surfacePlayback.stickerSource) {
      surfacePlayback.stickerSource = sticker?.src || "";
      releasePanoCanvas(stickerStill);
    }
    // The still of one source must not show for the next, nor hold memory without one.
    if (playback.source !== source) {
      releasePanoCanvas(still);
      still.__panoFrameIdx = 0;
    }
    nodeSurfaceUiModel.playable = playable;
    nodeSurfaceUiModel.playing = playback.playing;
  };
  // The legacy nodes' background VIDEO (createLoopingPreviewVideo) shows its first frame and plays from
  // the play button (Stickers; the Cutout surface has none); out of sight it pauses, as the Timeline above.
  const syncLegacyVideo = () => {
    const player = node.__panoOwnOutputVideoCache?.player ?? null;
    if (player && !surfaceShown(wrap, !!node.flags?.collapsed)) player.pause();
    if (!stickersMode) return;
    nodeSurfaceUiModel.playable = !!player && !player.failed();
    nodeSurfaceUiModel.playing = !!player?.playing;
  };
  // Edits pause playback first, on the frame on screen.
  const pauseSurfacePlayback = () => {
    surfacePlayback?.playback.pause();
    node.__panoOwnOutputVideoCache?.player.pause();
  };
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
        setEditorActive(node, nextState.active);
        const text = editorStateText(node, nextState);
        if (sameEditorStateText(node, text, String(stateWidget.value ?? ""))) return;
        stateWidget.value = text;
        stateWidget.callback?.(text);
        node.__panoStateCache = null;
        node.setDirtyCanvas?.(true, true);
        node.graph?.setDirtyCanvas?.(true, true);
      },
      onChange: (nextModel) => Object.assign(nodeSurfaceUiModel, nextModel),
    });
  // The links of a node are in its graph: before the node is added (onNodeCreated), it has none to sync with.
  const syncExternalSticker = (reason = "sync", outputOverride = null) => {
    if (!stickersMode || !node.graph || !nodeSurfaceSession || nodeSurfaceSession.hasGestureChanges()) return false;
    if (node.__panoSceneStateV2) {
      const current = isNodeOutputMediaCurrent(node, "external-sticker");
      const port = getCachedState(node).stickers.find((item) => item.source.kind === "port");
      return nodeSurfaceSession.apply({
        type: "sync-port",
        value: portStickerSyncValue(node, {
          pose: current ? ownOutputUiValue(node, "pano_sticker_input_pose", outputOverride) : null,
          image: port ? getNodePreviewImage(node, port.id, null, { external: true }) : null,
        }),
      });
    }
    const slot = Array.isArray(node?.inputs)
      ? node.inputs.findIndex((entry) => String(entry?.name || "") === "sticker_image")
      : -1;
    const linkId = slot >= 0 ? node.getInputLink(slot)?.id ?? null : null;
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
    pauseSurfacePlayback();
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
          if (action?.type === "toggle-playback") {
            flushNodeSurfaceGesture();
            if (surfacePlayback) surfacePlayback.playback.toggle();
            else node.__panoOwnOutputVideoCache?.player.toggle();
            requestDraw();
            return;
          }
          pauseSurfacePlayback();
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
  // A surface that goes out of sight (collapse, subgraph, another graph) releases its playback at once.
  const resizeObserver = typeof ResizeObserver !== "undefined"
    ? new ResizeObserver(() => {
      if (surfacePlayback) syncSurfacePlayback();
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
        if (surfacePlayback) syncSurfacePlayback();
        else syncLegacyVideo();
        if (!node.flags?.collapsed) drawCanvas(node, canvas, surfaceView);
        nodeSurfaceUiModel.viewUnavailable = surfaceView.failed;
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
      surfacePoseStickers(currentState, surfaceFrame(node)),
      String(currentState?.active?.selected_sticker_id || ""),
      cutoutCanvasPoint(ev),
      stickersSurfaceProjection(node, canvas.width, canvas.height),
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
    const projection = stickersSurfaceProjection(node, canvas.width, canvas.height);
    root.focus?.({ preventScroll: true });
    const pick = () => pickStickerAtPoint(surfacePoseStickers(currentState, surfaceFrame(node)), selectedId, point, projection);
    let picked = pick();
    // A Sticker grabbed while the node plays pauses it on the frame on screen, where the grab goes on;
    // an empty drag only looks around.
    if (picked && surfacePlayback?.playback.playing) {
      pauseSurfacePlayback();
      picked = pick();
    }
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
        projection,
      };
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
          stickerDrag.projection,
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
    pauseSurfacePlayback();
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
    node.__panoOutputFromRun = true;
    const shown = showOwnNodeOutput(node, output);
    // While the editor is open, its sync handler wins and is the only writer of the state. An output sent
    // again by a run that took the node from ComfyUI's cache only syncs: the editor keeps its media.
    runExternalStickerSync(node, shown ? "executed" : "sync", output);
    requestDraw();
    const out = onExecutedPrev ? onExecutedPrev.apply(this, arguments) : undefined;
    suppressBuiltInPreviewImgs(node);
    return out;
  };
  node.onExecuted = onExecutedHook;
  const onConnectionsChangePrev = node.onConnectionsChange;
  const onConnectionsChangeHook = function (type, slotIndex) {
    const stickerInputChanged = isTrackedMediaInputConnectionChange(node, type, slotIndex, STICKER_INPUT_NAMES);
    const backgroundInputChanged = isTrackedMediaInputConnectionChange(node, type, slotIndex, BACKGROUND_INPUT_NAMES);
    const args = arguments;
    const out = onConnectionsChangePrev ? onConnectionsChangePrev.apply(this, args) : undefined;
    const refreshAfterConnectionMutation = () => {
      if (state.destroyed) return;
      if (backgroundInputChanged) invalidateBackgroundPreviewMedia(node);
      if (stickerInputChanged) runExternalStickerSync(node, "connection-change");
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
    if (surfacePlayback) {
      surfacePlayback.playback.dispose();
      surfacePlayback.video.remove();
      surfacePlayback.stickerVideo.remove();
      if (node.__panoSurfacePlayback === surfacePlayback) node.__panoSurfacePlayback = null;
    }
    surfaceView.dispose();
    node.__panoSurfaceScene = null;
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
  // A node attached before it is in a graph syncs from onAdded (pano_editor_extension.js).
  if (node.graph) runExternalStickerSync(node, "attach");
  requestDraw();
}

export function attachCutoutPreview(node, options = {}) {
  const controller = getPreviewController(node);
  controller.attach({
    ...options,
    mode: "cutout",
  });
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
