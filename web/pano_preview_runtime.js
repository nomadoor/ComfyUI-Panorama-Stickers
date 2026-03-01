import * as appModule from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { drawCutoutProjectionPreview, getCutoutShotParams } from "./pano_cutout_projection.js";
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
const { app } = appModule;

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
  if (!panoPreviewDebugEnabled()) return;
  const nodeId = node?.id ?? "?";
  if (payload == null) {
    console.info(`[PANO_PREVIEW][${tag}] node=${nodeId}`);
    return;
  }
  console.info(`[PANO_PREVIEW][${tag}] node=${nodeId}`, payload);
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
    .pano-node-preview-dom button:active {
      background: rgba(28,28,30,1) !important;
      transform: translateY(1px);
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

function isLegacyFrontendRuntime() {
  const v = String(window?.__COMFYUI_FRONTEND_VERSION__ || "").trim();
  return !v || v === "unknown";
}

function shouldEnableInputShield() {
  if (window?.__PANO_PREVIEW_INPUT_SHIELD__ === true) return true;
  if (window?.__PANO_PREVIEW_INPUT_SHIELD__ === false) return false;
  // Safe default: keep shield on unless explicitly disabled.
  return true;
}

function resolveStickersPreviewPath(mode, node = null) {
  const forceRaw = String(window?.__PANO_PREVIEW_FORCE_PATH__ || "").trim();
  if (forceRaw === "legacy_draw" || forceRaw === "dom") {
    return {
      chosenPath: forceRaw,
      reason: "forced",
      frontendVersionRaw: String(window?.__COMFYUI_FRONTEND_VERSION__ || ""),
      signature: getFrontendSignature(node),
    };
  }
  if (String(mode) === "cutout") {
    return {
      chosenPath: "dom",
      reason: "cutout_always_dom",
      frontendVersionRaw: String(window?.__COMFYUI_FRONTEND_VERSION__ || ""),
      signature: getFrontendSignature(node),
    };
  }
  return {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String(window?.__COMFYUI_FRONTEND_VERSION__ || ""),
    signature: getFrontendSignature(node),
  };
}

const previewMonitor = {
  nodes: new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(node) {
    if (!node || String(node.__panoPreviewMode || "") !== "stickers") return;
    this.nodes.add(node);
    if (!this.lastSignature) this.lastSignature = getFrontendSignature(node);
    if (!this.intervalId) {
      this.intervalId = window.setInterval(() => this.check(), 1000);
    }
  },
  unregister(node) {
    if (node) this.nodes.delete(node);
    if (!this.nodes.size && this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = 0;
    }
    if (!this.nodes.size && this.debounceId) {
      window.clearTimeout(this.debounceId);
      this.debounceId = 0;
    }
  },
  check() {
    const sampleNode = this.nodes.values().next().value || null;
    const sig = getFrontendSignature(sampleNode);
    if (sig === this.lastSignature) return;
    this.lastSignature = sig;
    if (this.debounceId) window.clearTimeout(this.debounceId);
    this.debounceId = window.setTimeout(() => {
      this.debounceId = 0;
      this.generation += 1;
      const nodes = [...this.nodes];
      nodes.forEach((node) => {
        if (!node || String(node.__panoPreviewMode || "") !== "stickers") return;
        try {
          node.__panoRebindGeneration = this.generation;
          panoPreviewLog(node, "path.switch", {
            from: String(node.__panoStickersPath || "unknown"),
            to: "rebind",
            reason: "frontend_signature_changed",
            signature: sig,
            generation: this.generation,
          });
          getPreviewController(node).rebind(node.__panoAttachOptions || { mode: "stickers" });
        } catch (err) {
          panoPreviewLog(node, "path.switch.error", { message: String(err?.message || err || "unknown") });
        }
      });
    }, 300);
  },
};

function getPreviewController(node) {
  if (node?.__panoPreviewController) return node.__panoPreviewController;
  const controller = {
    activeBackend: "none",
    attach(options = {}) {
      const mode = String(options.mode || "stickers") === "cutout" ? "cutout" : "stickers";
      const pathInfo = resolveStickersPreviewPath(mode, node);
      const targetBackend = mode === "cutout" ? "dom" : pathInfo.chosenPath;
      const activeBackend = getActivePreviewBackend(node);
      this.activeBackend = activeBackend;
      const sameRoute = activeBackend === targetBackend && activeBackend !== "none";
      if (sameRoute) {
        node.__panoAttachOptions = { ...options, mode };
        node.__panoPreviewMode = mode;
        node.__panoPreviewButtonText = String(options.buttonText || (mode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor"));
        node.__panoOpenEditor = typeof options.onOpen === "function" ? options.onOpen : node.__panoOpenEditor;
        return;
      }
      if (activeBackend !== "none") teardownPreview(node, { keepMonitor: mode === "stickers" });
      attachPanoramaPreviewImpl(node, { ...options, mode, __panoForcedPath: targetBackend });
      this.activeBackend = getActivePreviewBackend(node);
    },
    rebind(options = {}) {
      const mode = String(options.mode || node?.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers";
      teardownPreview(node, { keepMonitor: mode === "stickers" });
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

  const dom = node.__panoDomPreview;
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
      node.widgets = node.widgets.filter((w) => {
        if (w === dom?.widget) return false;
        const name = String(w?.name || "");
        const type = String(w?.type || "");
        const animWidgetName = getAnimPreviewWidgetName();
        if (name === animWidgetName || type === animWidgetName) return false;
        if (name === "pano_preview" || type === "pano_preview") return false;
        if (name === "preview" && type === "pano_preview") return false;
        return true;
      });
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

  if (!options.keepMonitor) previewMonitor.unregister(node);
}

function cleanupPanoDomPreview(node) {
  teardownPreview(node, { keepMonitor: true });
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

function parseState(text, bg = "#00ff00") {
  const base = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    bg_color: bg,
    output_preset: 2048,
    assets: {},
    stickers: [],
    shots: [],
    active: { selected_sticker_id: null },
  };
  if (!text || !text.trim()) return base;
  try {
    const p = JSON.parse(text);
    if (!p || typeof p !== "object") return base;
    return {
      ...base,
      ...p,
      assets: p.assets && typeof p.assets === "object" ? p.assets : {},
      stickers: Array.isArray(p.stickers) ? p.stickers : [],
      shots: Array.isArray(p.shots) ? p.shots : [],
      active: p.active && typeof p.active === "object" ? p.active : base.active,
    };
  } catch {
    return base;
  }
}

function getEffectiveStateText(node) {
  const live = node?.__panoLiveStateOverride;
  if (typeof live === "string" && live.trim()) return live;
  return String(getWidget(node, "state_json")?.value || "");
}

function getCachedState(node) {
  const text = getEffectiveStateText(node);
  const bg = String(getWidget(node, "bg_color")?.value || "#1a1a1e");
  const cache = node.__panoStateCache;
  if (cache && cache.text === text && cache.bg === bg) {
    return cache.parsed;
  }
  const parsed = parseState(text, bg);
  node.__panoStateCache = { text, bg, parsed };
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

function preferredImageInputsForNode(node, preferredInputNames = []) {
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
  params.set("type", String(entry.type || "output"));
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
    const images = collectExecutedImageCandidates(output);
    let src = "";
    for (const cand of images) {
      src = imageSourceFromCandidate(cand);
      if (src) break;
    }
    if (src) {
      node.__panoOwnOutputRev = Number(node.__panoOwnOutputRev || 0) + 1;
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
  if (!node.__panoOwnOutputImageCache) node.__panoOwnOutputImageCache = { src: "", img: null };
  const cached = node.__panoOwnOutputImageCache;
  if (cached.img && cached.src === srcKey) return cached.img;
  const img = new Image();
  let attempt = -1;
  const tryLoadNext = () => {
    attempt += 1;
    if (attempt >= srcCandidates.length) {
      node.__panoOwnOutputImageCache = null;
      return;
    }
    img.src = srcCandidates[attempt];
  };
  img.onload = () => {
    onLoad?.();
    node.setDirtyCanvas?.(true, true);
  };
  img.onerror = () => {
    if (attempt + 1 >= srcCandidates.length) {
      node.__panoOwnOutputImageCache = null;
      return;
    }
    tryLoadNext();
  };
  tryLoadNext();
  node.__panoOwnOutputImageCache = { src: srcKey, img };
  return img;
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
  const selfOutput = lookupNodeOutputEntry(node?.id);
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

function getLinkedInputImage(node, preferredInputNames = []) {
  const resolved = findLinkedInputImageSource(node, preferredInputNames);
  const srcRaw = String(resolved?.src || "").trim();
  if (!srcRaw) return null;
  const candidates = buildImageSrcCandidates(srcRaw);
  if (!candidates.length) return null;
  if (!node.__panoLinkedInputImageCache) node.__panoLinkedInputImageCache = new Map();
  const key = preferredInputNames.join("|") || "image";
  const cached = node.__panoLinkedInputImageCache.get(key);
  if (cached && cached.srcRaw === srcRaw && cached.img) return cached.img;

  const img = new Image();
  const cacheEntry = { srcRaw, resolvedSrc: "", img };
  node.__panoLinkedInputImageCache.set(key, cacheEntry);
  let attempt = -1;
  const tryLoadNext = () => {
    attempt += 1;
    if (attempt >= candidates.length) {
      try { node.__panoLinkedInputImageCache?.delete?.(key); } catch { }
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
    cacheEntry.resolvedSrc = nextSrc;
    img.src = nextSrc;
  };

  img.onload = () => {
    panoPreviewLog(node, "image-load", {
      ok: true,
      src: srcRaw,
      resolvedSrc: String(cacheEntry.resolvedSrc || img.src || ""),
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
    try { node.__panoLinkedInputImageCache?.delete?.(key); } catch { }
    panoPreviewLog(node, "image-load", {
      ok: false,
      src: srcRaw,
      resolvedSrc: String(cacheEntry.resolvedSrc || ""),
      preferredInputNames,
      sourceType: String(resolved?.sourceType || ""),
      attemptCount: attempt + 1,
      errorType: String(ev?.type || "error"),
    });
  };
  tryLoadNext();
  return img;
}

function getLinkedInputImageForPreview(node, preferredInputNames = [], onLoad = null) {
  const img = getLinkedInputImage(node, preferredInputNames);
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
  try { node.__panoLinkedInputImageCache?.clear?.(); } catch { }
  node.__panoOwnOutputImageCache = null;
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

function setCutoutEmptyHint(node, visible, text = "Open editor and add frame") {
  const el = node?.__panoDomPreview?.emptyHintEl;
  if (!el) return;
  el.textContent = String(text || "Open editor and add frame");
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

function getCutoutContainRect(baseRect, shot) {
  const w = Math.max(1, Number(baseRect?.w || 0));
  const h = Math.max(1, Number(baseRect?.h || 0));
  const fallback = { x: Number(baseRect?.x || 0), y: Number(baseRect?.y || 0), w, h };
  if (!shot) return { drawRect: fallback, targetAspect: null };
  const params = getCutoutShotParams(shot);
  const aspect = clamp(Number(params?.aspect || 1), 0.05, 20.0);
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
  if (!node || !widget || !Array.isArray(node.widgets)) return false;
  const idx = node.widgets.indexOf(widget);
  if (idx < 0) return false;
  node.widgets.splice(idx, 1);
  if (Array.isArray(node.widgets_values) && node.widgets_values.length > idx) {
    node.widgets_values.splice(idx, 1);
  }
  return true;
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

function getNodePreviewImage(node, assetId, asset) {
  if (!node.__panoPreviewImageCache) node.__panoPreviewImageCache = new Map();
  const key = String(assetId || "");
  if (!key) return null;
  const src = stickerAssetToPreviewSrc(asset);
  if (!src) return null;
  if (!window.__panoSharedImageCache) window.__panoSharedImageCache = new Map();
  const shared = window.__panoSharedImageCache.get(src);
  if (shared?.img) {
    node.__panoPreviewImageCache.set(key, { src, img: shared.img });
    return shared.img;
  }
  const cached = node.__panoPreviewImageCache.get(key);
  if (cached && cached.src === src) return cached.img;
  const img = new Image();
  img.src = src;
  img.onload = () => node.setDirtyCanvas?.(true, true);
  window.__panoSharedImageCache.set(src, { img });
  node.__panoPreviewImageCache.set(key, { src, img });
  return img;
}

function getSortedStickers(node, state) {
  const stickers = Array.isArray(state?.stickers) ? state.stickers : [];
  const cache = node.__panoStickerSortCache;
  if (cache?.source === stickers && Array.isArray(cache.sorted)) return cache.sorted;
  const sorted = [...stickers].sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
  node.__panoStickerSortCache = { source: stickers, sorted };
  return sorted;
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

  const asset = state.assets?.[item.asset_id];
  const img = getNodePreviewImage(node, item.asset_id, asset);
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
    () => node.setDirtyCanvas?.(true, false)
  );
  const bgReady = !!(bgImg && bgImg.complete && (bgImg.naturalWidth || bgImg.width));

  const resizingNow = isPreviewResizing(node);
  const movingBase = interaction?.state ? (interaction.state.inertia.active || interaction.state.drag.active) : false;
  const moving = resizingNow || movingBase;
  const mesh = STANDALONE_MESH_LOW;

  if (bgReady) {
    drawErpBackground(node, ctx, rect, viewBasis, tanHalfY, bgImg, mesh);
  }

  const stickerNu = moving ? 8 : 12;
  const stickerNv = moving ? 6 : 9;
  const stickers = getSortedStickers(node, state);

  // Always draw grid if no background or if specifically needed for orientation
  if (!bgReady || stickers.length === 0) {
    const uiScale = getNodeUiScale(ctx?.canvas, rect);
    drawPanoGrid(ctx, rect, viewBasis, tanHalfY, uiScale);
  }

  if (stickers.length > 0) {
    stickers.forEach((item) => drawSticker(ctx, node, rect, viewBasis, tanHalfY, state, item, stickerNu, stickerNv));
  }
  ctx.restore();
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

function attachLegacyStickersPreview(node) {
  if (node.__panoLegacyPreviewHooked) return;
  panoPreviewLog(node, "legacy.attach", {
    mode: node.__panoPreviewMode,
    nodeType: String(node?.comfyClass || node?.type || node?.title || ""),
    nodeSize: getNodeSize(node),
  });
  node.__panoLegacyPreviewHooked = true;
  node.__panoPreviewHooked = true;
  node.__panoActiveBackend = "legacy_draw";
  initNodeSizeIfInvalid(node, 320, 180);
  suppressBuiltInPreviewImgs(node);

  const prevDrawForeground = node.onDrawForeground;
  const prevResize = node.onResize;
  node.onDrawForeground = function () {
    const r = prevDrawForeground ? prevDrawForeground.apply(this, arguments) : undefined;
    try {
      const ctx = arguments[0];
      if (ctx && !this.flags?.collapsed) {
        if (interaction.stepInertia(performance.now())) {
          this.setDirtyCanvas?.(true, false);
        }
        drawPanoramaPreview(this, ctx, interaction);
      }
    } catch {
      // keep resilient
    }
    return r;
  };
  node.onResize = function () {
    const r = prevResize ? prevResize.apply(this, arguments) : undefined;
    this.__panoUserResized = true;
    markPreviewResizing(this, 150);
    this.setDirtyCanvas?.(true, true);
    scheduleResizeSettleDraw(this, 220, null);
    return r;
  };

  const interaction = createPanoInteractionController({
    getView: () => {
      if (!node.__panoPreviewView) node.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 };
      return node.__panoPreviewView;
    },
    setView: (v) => {
      node.__panoPreviewView = v;
    },
    onInteraction: () => {
      markStandaloneInteractionSettled(node);
      node.setDirtyCanvas?.(true, false);
    },
  });

  const prevMouseDown = node.onMouseDown;
  node.onMouseDown = function (e, localPos, canvas) {
    try {
      if (!this.flags?.collapsed) {
        const p = localPosFromEvent(this, e, localPos, canvas) || { x: 0, y: 0 };
        const nodeSize = getNodeSize(this);
        const nodeW = Number(nodeSize?.[0] || 0);
        const nodeH = Number(nodeSize?.[1] || 0);
        const gripHit = p.x >= nodeW - 20 && p.y >= nodeH - 20;
        if (gripHit) {
          return prevMouseDown ? prevMouseDown.apply(this, arguments) : undefined;
        }
        const rect = getNodePreviewRect(this);
        if (pointInRect(p.x, p.y, rect)) {
          if (e?.button === 0) {
            interaction.startDrag(p.x, p.y);
            return true;
          }
          return true;
        }
      }
    } catch { }
    return prevMouseDown ? prevMouseDown.apply(this, arguments) : undefined;
  };

  const prevMouseMove = node.onMouseMove;
  node.onMouseMove = function (e, localPos, canvas) {
    try {
      const p = localPosFromEvent(this, e, localPos, canvas);
      if (interaction.state.drag.active) {
        if (typeof e?.buttons === "number" && (e.buttons & 1) === 0) {
          interaction.endDrag();
          return true;
        }
        const pp = p || interaction.state.drag;
        interaction.moveDrag(pp.x, pp.y, "pano");
        return true;
      }
    } catch { }
    return prevMouseMove ? prevMouseMove.apply(this, arguments) : undefined;
  };

  const prevMouseUp = node.onMouseUp;
  node.onMouseUp = function () {
    if (interaction.state.drag.active) {
      interaction.endDrag();
      return true;
    }
    return prevMouseUp ? prevMouseUp.apply(this, arguments) : undefined;
  };

  const prevMouseLeave = node.onMouseLeave;
  node.onMouseLeave = function () {
    const r = prevMouseLeave ? prevMouseLeave.apply(this, arguments) : undefined;
    if (interaction.state.drag.active) {
      interaction.endDrag();
    }
    return r;
  };

  const prevMouseWheel = node.onMouseWheel;
  node.onMouseWheel = function (e, arg2, canvas) {
    try {
      if (this.flags?.collapsed) return prevMouseWheel ? prevMouseWheel.apply(this, arguments) : undefined;
      const p = localPosFromEvent(this, e, arg2, canvas);
      const rect = getNodePreviewRect(this);
      if (!p || !pointInRect(p.x, p.y, rect)) return prevMouseWheel ? prevMouseWheel.apply(this, arguments) : undefined;

      const raw = Number(e?.deltaY ?? e?.wheelDeltaY ?? (typeof arg2 === "number" ? arg2 : 0));
      if (interaction.applyWheel(Math.sign(raw))) {
        this.setDirtyCanvas?.(true, false);
      }
      if (typeof e?.preventDefault === "function") e.preventDefault();
      if (typeof e?.stopPropagation === "function") e.stopPropagation();
      return true;
    } catch {
      return prevMouseWheel ? prevMouseWheel.apply(this, arguments) : undefined;
    }
  };

  const prevRemoved = node.onRemoved;
  const restoreLegacy = () => {
    if (!node.__panoLegacyPreviewHooked) return;
    if (node.__panoResizeSettleTimer) {
      clearTimeout(node.__panoResizeSettleTimer);
      node.__panoResizeSettleTimer = null;
    }
    node.onResize = prevResize;
    node.onDrawForeground = prevDrawForeground;
    node.onMouseDown = prevMouseDown;
    node.onMouseMove = prevMouseMove;
    node.onMouseUp = prevMouseUp;
    node.onMouseLeave = prevMouseLeave;
    node.onMouseWheel = prevMouseWheel;
    node.onRemoved = prevRemoved;
    node.__panoLegacyPreviewHooked = false;
    node.__panoPreviewHooked = false;
    node.__panoPreviewDrag = null;
    node.__panoLegacyRestore = null;
  };
  node.__panoLegacyRestore = restoreLegacy;
  node.onRemoved = function () {
    restoreLegacy();
    previewMonitor.unregister(this);
    executedRefreshMonitor.unregister(this);
    return prevRemoved ? prevRemoved.apply(this, arguments) : undefined;
  };
}

function drawCanvas(node, canvas, fovBtn, interaction = null) {
  const mode = String(node.__panoPreviewMode || "stickers");
  ensureRenderCache(node, mode);
  const state = getCachedState(node);
  const ownOut = mode === "cutout"
    ? getNodeOwnOutputImage(node, () => node.__panoDomPreview?.requestDraw?.())
    : null;
  const ownOutReady = !!(ownOut && ownOut.complete && (ownOut.naturalWidth || ownOut.width));
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
    if (canvas.width !== surfW || canvas.height !== surfH) {
      canvas.width = surfW;
      canvas.height = surfH;
    }
    const rect = { x: 0, y: 0, w: surfW, h: surfH };
    const ownAspect = ownOutReady
      ? clamp(Number((ownOut.naturalWidth || ownOut.width) / Math.max(1, Number(ownOut.naturalHeight || ownOut.height || 1))), 0.05, 20.0)
      : 1;
    const params = shot ? getCutoutShotParams(shot) : null;
    const aspect = clamp(Number(params?.aspect || ownAspect || 1), 0.05, 20.0);
    const contain = containRect(rect, aspect);
    const uiScale = getNodeUiScale(canvas, rect);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#070707";
    ctx.fillRect(0, 0, surfW, surfH);

    const bgImg = getLinkedInputImageForPreview(
      node,
      ["erp_image", "bg_erp"],
      () => node.__panoDomPreview?.requestDraw?.(),
    );
    const bgReady = !!(bgImg && bgImg.complete && (bgImg.naturalWidth || bgImg.width));
    let statusType = "none";
    let hintText = "Open editor and add frame";

    if (!shot) {
      if (ownOutReady) {
        ctx.drawImage(ownOut, contain.x, contain.y, contain.w, contain.h);
      } else {
        statusType = "empty";
        hintText = "Open editor and add frame";
      }
    } else if (bgReady) {
      const rawLiveDrawn = !!drawCutoutProjectionPreview(ctx, node, bgImg, contain, shot, "draft");
      const liveDrawnValidated = rawLiveDrawn && hasValidCutoutStats(node);
      if (liveDrawnValidated) {
      } else if (ownOutReady) {
        ctx.drawImage(ownOut, contain.x, contain.y, contain.w, contain.h);
      } else {
        statusType = "empty";
        hintText = "Cutout preview unavailable";
      }
    } else if (ownOutReady) {
      ctx.drawImage(ownOut, contain.x, contain.y, contain.w, contain.h);
    } else if (bgImg && !bgReady) {
      statusType = "loading";
    } else {
      statusType = "empty";
      hintText = "Connect ERP image";
    }

    if (statusType === "loading") {
      drawLoadingOverlay(ctx, contain, uiScale);
      setCutoutEmptyHint(node, false);
      setRenderLoading(node, true, String(bgImg?.src || ""));
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
    const uiScale = getNodeUiScale(canvas, rect);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, surfW, surfH);

    if (!node.__panoPreviewView) node.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 };
    const viewBasis = cameraBasis(Number(node.__panoPreviewView.yaw || 0), Number(node.__panoPreviewView.pitch || 0), 0);
    const tanHalfY = Math.tan((Number(node.__panoPreviewView.fov || 100) * DEG2RAD) * 0.5);
    const bgImg = getLinkedInputImageForPreview(
      node,
      ["erp_image", "bg_erp"],
      () => node.__panoDomPreview?.requestDraw?.()
    );
    const bgReady = !!(bgImg && bgImg.complete && (bgImg.naturalWidth || bgImg.width));

    // Base background (distinct from pure black to indicate active rendering)
    ctx.fillStyle = "#1a1a1e";
    ctx.fillRect(0, 0, surfW, surfH);

    const resizingNow = isPreviewResizing(node);
    const movingBase = interaction?.state ? (interaction.state.inertia.active || interaction.state.drag.active) : false;
    const moving = resizingNow || movingBase;
    const mesh = STANDALONE_MESH_LOW;

    if (bgReady) {
      drawErpBackground(node, ctx, rect, viewBasis, tanHalfY, bgImg, mesh);
      setRenderLoading(node, false, "");
    } else {
      const loading = !!bgImg && !bgReady;
      setRenderLoading(node, loading, String(bgImg?.src || ""));
      if (loading) {
        drawLoadingOverlay(ctx, rect, uiScale);
      }
    }

    // Dynamic sticker mesh quality
    const stickerNu = moving ? 8 : 12;
    const stickerNv = moving ? 6 : 9;

    // Always draw guide grid when no background or just to assist orientation
    const stickers = getSortedStickers(node, state);
    if (!bgReady || stickers.length === 0) {
      drawPanoGrid(ctx, rect, viewBasis, tanHalfY, uiScale);
    }
    if (stickers.length > 0) {
      stickers.forEach((item) => drawSticker(ctx, node, rect, viewBasis, tanHalfY, state, item, stickerNu, stickerNv));
    } else if (!bgImg || !bgReady) {
      const hintPx = Math.max(14, Math.round(16 * uiScale));
      ctx.fillStyle = "rgba(212,212,216,0.85)";
      ctx.font = `600 ${hintPx}px Plus Jakarta Sans, Geist, sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText("Open editor to add stickers", surfW * 0.5, surfH * 0.5 + 24 * uiScale);
    }

    if (fovBtn) {
      fovBtn.textContent = `FOV ${Math.round(Number(node.__panoPreviewView.fov || 100))}`;
    }
  }
}

export function drawErpBackground(node, ctx, rect, viewBasis, tanHalfY, img, mesh = STANDALONE_MESH_BALANCED) {
  if (!img || !img.complete || !(img.naturalWidth || img.width)) return;
  const iw = Number(img.naturalWidth || img.width || 0);
  const ih = Number(img.naturalHeight || img.height || 0);
  if (iw <= 1 || ih <= 1) return;
  const wrapped = getWrappedErpCanvas(node, img);
  const source = wrapped || img;
  const Nu = Math.max(4, Number(mesh?.Nu || STANDALONE_MESH_BALANCED.Nu));
  const Nv = Math.max(4, Number(mesh?.Nv || STANDALONE_MESH_BALANCED.Nv));
  const triExpand = (Nu <= STANDALONE_MESH_LOW.Nu && Nv <= STANDALONE_MESH_LOW.Nv) ? 0.24 : ((Nu >= STANDALONE_MESH_HIGH.Nu && Nv >= STANDALONE_MESH_HIGH.Nv) ? 0.42 : 0.34);

  const verts = [];
  const sample = [];
  for (let j = 0; j <= Nv; j++) {
    verts[j] = [];
    sample[j] = [];
  }

  const cx = rect.x + rect.w * 0.5;
  const cy = rect.y + rect.h * 0.5;
  const hRectH = rect.h * 0.5;

  for (let j = 0; j <= Nv; j++) {
    const y = rect.y + (rect.h * j) / Nv;
    const sy = ((cy - y) / hRectH) * tanHalfY;

    for (let i = 0; i <= Nu; i++) {
      const x = rect.x + (rect.w * i) / Nu;
      const sx = ((x - cx) / hRectH) * tanHalfY;

      // Inlined dot, add, mul, norm for d
      const dx = viewBasis.fwd.x + viewBasis.right.x * sx + viewBasis.up.x * sy;
      const dy = viewBasis.fwd.y + viewBasis.right.y * sx + viewBasis.up.y * sy;
      const dz = viewBasis.fwd.z + viewBasis.right.z * sx + viewBasis.up.z * sy;
      const dmag = Math.hypot(dx, dy, dz) || 1e-8;
      const dnx = dx / dmag;
      const dny = dy / dmag;
      const dnz = dz / dmag;

      const lon = Math.atan2(dnx, dnz);
      const lat = Math.asin(clamp(dny, -1, 1));
      let u = (lon / (2 * Math.PI) + 0.5) * iw;
      while (u < 0) u += iw;
      while (u >= iw) u -= iw;
      const v = (0.5 - lat / Math.PI) * ih;
      verts[j][i] = { x, y };
      sample[j][i] = { x: u, y: v };
    }
  }
  ctx.save();
  ctx.__panoTriExpandPx = triExpand;
  // Use opaque rendering for background to avoid seam transparency.
  ctx.globalAlpha = 1.0;
  for (let j = 0; j < Nv; j += 1) {
    for (let i = 0; i < Nu; i += 1) {
      const p00 = verts[j][i];
      const p10 = verts[j][i + 1];
      const p01 = verts[j + 1][i];
      const p11 = verts[j + 1][i + 1];
      if (!p00 || !p10 || !p01 || !p11) continue;
      const s00 = { ...sample[j][i] };
      const s10 = { ...sample[j][i + 1] };
      const s01 = { ...sample[j + 1][i] };
      const s11 = { ...sample[j + 1][i + 1] };
      const umin = Math.min(s00.x, s10.x, s01.x, s11.x);
      const umax = Math.max(s00.x, s10.x, s01.x, s11.x);
      if (umax - umin > iw * 0.5) {
        [s00, s10, s01, s11].forEach((s) => {
          if (s.x < iw * 0.5) s.x += iw;
        });
      }
      drawImageTri(ctx, source, s00, s10, s11, p00, p10, p11);
      drawImageTri(ctx, source, s00, s11, s01, p00, p11, p01);
    }
  }
  ctx.__panoTriExpandPx = 0.45;
  ctx.restore();
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
  const gridColor = "rgba(63, 63, 70, 0.5)";
  const equatorColor = "rgba(250, 250, 250, 0.35)";

  // Latitudes
  for (let lat = -75; lat <= 75; lat += 15) {
    const pts = [];
    for (let lon = -180; lon <= 180; lon += 15) pts.push(yawPitchToDir(lon, lat));
    drawLineOnSphere(ctx, pts, viewBasis, rect, tanHalfY, lat === 0 ? equatorColor : gridColor, lat === 0 ? 1.5 : 1);
  }

  // Longitudes
  for (let lon = -180; lon <= 180; lon += 45) {
    const pts = [];
    for (let lat = -89; lat <= 89; lat += 15) pts.push(yawPitchToDir(lon, lat));
    drawLineOnSphere(ctx, pts, viewBasis, rect, tanHalfY, lon % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : gridColor, lon % 90 === 0 ? 1.2 : 1);
  }

  // Labels
  const labels = [
    { name: "Front", dir: yawPitchToDir(0, 0) },
    { name: "Right", dir: yawPitchToDir(90, 0) },
    { name: "Back", dir: yawPitchToDir(180, 0) },
    { name: "Left", dir: yawPitchToDir(-90, 0) },
  ];

  ctx.fillStyle = "rgba(250, 250, 250, 0.32)";
  const fontSize = Math.max(9, Math.round(11 * uiScale));
  ctx.font = `500 ${fontSize}px Plus Jakarta Sans, Geist, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  labels.forEach((l) => {
    const p = projectDirToPreview(l.dir, viewBasis, rect, tanHalfY);
    if (p) {
      ctx.fillText(l.name, p.x, p.y + 20 * uiScale);
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

function readWheelDelta(ev) {
  if (Number.isFinite(Number(ev?.deltaY))) return Number(ev.deltaY);
  if (Number.isFinite(Number(ev?.wheelDelta))) return -Number(ev.wheelDelta);
  if (Number.isFinite(Number(ev?.detail))) return Number(ev.detail) * 40;
  return 0;
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
  const size = getNodeSize(node);
  const w = Number(size?.[0] || 0);
  const h = Number(size?.[1] || 0);
  if (!Number.isFinite(w) || !Number.isFinite(h)) return;
  if (w >= minW && h >= minH) return;
  const next = [Math.max(minW, w), Math.max(minH, h)];
  try {
    if (typeof node.setSize === "function") node.setSize(next);
    else node.size = next;
    node.__panoStandaloneBootSized = true;
    panoPreviewLog(node, "size.bootstrap", { from: [w, h], to: next });
  } catch (err) {
    panoPreviewLog(node, "size.bootstrap.error", { message: String(err?.message || err || "unknown") });
  }
}

function createCoreManagedDomWidgetOptions(node, requestDraw = null, bootMinHeight = 0) {
  return {
    serialize: false,
    hideOnZoom: false,
    getValue() { return ""; },
    setValue() { },
    getMinHeight() {
      if (node?.__panoBootMinHeightActive) return Math.max(0, Number(bootMinHeight || 0));
      return 0;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      if (node?.__panoBootMinHeightActive) return Math.max(0, Number(bootMinHeight || 0));
      return "auto";
    },
    afterResize() {
      node.__panoUserResized = true;
      markPreviewResizing(node, 150);
      requestDraw?.();
      scheduleResizeSettleDraw(node, 180, requestDraw);
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
  const bgImg = getLinkedInputImageForPreview(
    node,
    preferredInputs,
    () => node.__panoDomPreview?.requestDraw?.(),
  );
  const bgReady = !!(bgImg && bgImg.complete && (bgImg.naturalWidth || bgImg.width));
  const src = String(bgImg?.src || "");
  if (bgReady) {
    ctx.fillStyle = "#070707";
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    drawErpBackground(node, ctx, rect, basis, tanHalfY, bgImg, mesh);
  } else {
    ctx.fillStyle = "#070707";
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
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
  executedRefreshMonitor.register(node);
  const stickersMode = node.__panoPreviewMode === "stickers";
  const noLegacyFallback = options.__noLegacyFallback === true;
  const interactiveView = node.__panoPreviewMode !== "cutout";
  node.__panoAttachOptions = { ...options, mode: node.__panoPreviewMode };
  node.__panoPreviewButtonText = String(options.buttonText || (node.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor"));
  node.__panoOpenEditor = typeof options.onOpen === "function" ? options.onOpen : null;
  const nodeType = String(node?.comfyClass || node?.type || node?.title || "");
  if (!stickersMode) previewMonitor.unregister(node);
  const forcedPath = String(options.__panoForcedPath || "").trim();
  const pathInfo = resolveStickersPreviewPath(node.__panoPreviewMode, node);
  if (stickersMode && (forcedPath === "dom" || forcedPath === "legacy_draw")) {
    pathInfo.chosenPath = forcedPath;
    pathInfo.reason = "controller_target_backend";
  }
  const chosenPath = stickersMode ? pathInfo.chosenPath : "dom";
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
  if (stickersMode) previewMonitor.register(node);
  if (stickersMode && chosenPath === "legacy_draw") {
    if (noLegacyFallback) return;
    teardownPreview(node, { keepMonitor: true });
    attachLegacyStickersPreview(node);
    return;
  }
  if (node.__panoDomPreview?.widget) return;
  if (node.__panoLegacyPreviewHooked) teardownPreview(node, { keepMonitor: true });
  if (typeof node.addDOMWidget !== "function") {
    if (stickersMode && !noLegacyFallback) attachLegacyStickersPreview(node);
    return;
  }

  const noPreview = options.noPreview === true;

  const root = document.createElement("div");
  ensurePreviewModeCss();
  root.className = "pano-node-preview-dom";
  root.classList.add(stickersMode ? "pano-node-preview--stickers" : "pano-node-preview--cutout");
  if (noPreview) root.classList.add("pano-node-preview--no-preview");
  root.setAttribute("data-capture-wheel", "true");
  root.setAttribute("tabindex", "-1");

  root.style.cssText = [
    "width:100%",
    noPreview ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent",
  ].join(";");

  if (noPreview) {
    const widget = node.addDOMWidget(getAnimPreviewWidgetName(), "preview", root, createCoreManagedDomWidgetOptions(node, null));
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
  cutoutHint.textContent = "Open editor and add frame";

  wrap.appendChild(canvas);
  wrap.appendChild(cutoutHint);
  root.appendChild(wrap);

  initNodeSizeIfInvalid(node, 120, 120);
  suppressBuiltInPreviewImgs(node);

  let widget = null;
  try {
    widget = node.addDOMWidget(getAnimPreviewWidgetName(), "preview", root, createCoreManagedDomWidgetOptions(node, () => node.__panoDomPreview?.requestDraw?.()));
  } catch {
    if (stickersMode) {
      attachLegacyStickersPreview(node);
    }
    return;
  }
  const state = {
    raf: 0,
    needsDraw: true,
    dragging: false,
    lastX: 0,
    lastY: 0,
    lastTs: 0,
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

  const runDomProbeForStickers = () => {
    if (!stickersMode || node.__panoDomProbePending) return;
    node.__panoDomProbePending = true;
    const maxAttempts = 3;
    const probeOnce = (attempt) => {
      requestAnimationFrame(() => {
        const domOk = !!(root?.isConnected && wrap?.isConnected && canvas?.isConnected
          && Number(wrap.clientHeight || 0) > 0 && Number(canvas.clientHeight || 0) > 0);
        if (!domOk && attempt < maxAttempts) {
          probeOnce(attempt + 1);
          return;
        }
        node.__panoDomProbePending = false;
        panoPreviewLog(node, "probe.result", {
          mode: node.__panoPreviewMode,
          result: domOk ? "dom_ok" : "dom_fail",
          wrapH: Number(wrap?.clientHeight || 0),
          canvasH: Number(canvas?.clientHeight || 0),
          attempt,
        });
        if (!domOk) {
          if (noLegacyFallback) {
            panoPreviewLog(node, "path.keep", {
              route: "dom",
              reason: "probe_dom_not_ready",
              mode: node.__panoPreviewMode,
              wrapH: Number(wrap?.clientHeight || 0),
              canvasH: Number(canvas?.clientHeight || 0),
            });
            return;
          }
          panoPreviewLog(node, "path.switch", {
            from: "dom",
            to: "legacy_draw",
            reason: "probe_dom_fail_fallback_legacy",
          });
          teardownPreview(node, { keepMonitor: true });
          node.__panoStickersPath = "legacy_draw_auto";
          attachLegacyStickersPreview(node);
          node.setDirtyCanvas?.(true, true);
        }
      });
    };
    probeOnce(1);
  };

  const tick = (ts) => {
    state.raf = 0;
    const moving = interaction.stepInertia(ts);
    if (state.needsDraw || moving) {
      state.needsDraw = false;
      if (!node.flags?.collapsed) drawCanvas(node, canvas, null, interaction);
      node.setDirtyCanvas?.(true, false);
    }
    if (moving || state.needsDraw) state.raf = requestAnimationFrame(tick);
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
    onInteraction: () => {
      requestDraw();
    },
  });

  canvas.addEventListener("pointerdown", (ev) => {
    if (!stopCanvasEventUnlessResizeGrip(ev, wrap)) return;
    if (!interactiveView) return;
    if (ev.button !== 0) return;
    root.focus?.();
    canvas.setPointerCapture?.(ev.pointerId);
    canvas.style.cursor = "grabbing";
    interaction.startDrag(ev.clientX, ev.clientY, ev.pointerId);
  });

  canvas.addEventListener("pointermove", (ev) => {
    if (!interactiveView || !interaction.state.drag.active) return;
    stopCanvasEventUnlessResizeGrip(ev, wrap);
    interaction.moveDrag(ev.clientX, ev.clientY, "pano");
  });

  const endDrag = (ev) => {
    if (!interactiveView || !interaction.state.drag.active) return;
    stopCanvasEventUnlessResizeGrip(ev, wrap);
    canvas.releasePointerCapture?.(ev.pointerId);
    canvas.style.cursor = "grab";
    interaction.endDrag();
    markStandaloneInteractionSettled(node);
    requestDraw();
  };
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", endDrag);
  canvas.addEventListener("pointerleave", (ev) => {
    if (!interaction.state.drag.active) return;
    endDrag(ev);
  });

  const onPreviewWheel = (ev) => {
    panoPreviewLog(node, "event", { kind: "wheel", via: "stickers", interactiveView });
    if (!stopCanvasEventUnlessResizeGrip(ev, wrap)) return;
    if (!interactiveView) return;
    const graphSnapshot = lockGraphViewportSnapshot();
    if (interaction.applyWheelEvent(ev)) {
      requestDraw();
    }
    ev.preventDefault?.();
    ev.stopPropagation?.();
    ev.stopImmediatePropagation?.();
    requestAnimationFrame(() => {
      restoreGraphViewportSnapshot(graphSnapshot);
      app?.canvas?.setDirty?.(true, true);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((name) => {
    wrap.addEventListener(name, onPreviewWheel, { passive: false, capture: true });
    canvas.addEventListener(name, onPreviewWheel, { passive: false, capture: true });
  });

  ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((name) => {
    canvas.addEventListener(name, (ev) => stopCanvasEventUnlessResizeGrip(ev, wrap));
    wrap.addEventListener(name, (ev) => stopCanvasEventUnlessResizeGrip(ev, wrap));
  });

  const sw = getWidget(node, "state_json");
  if (sw && !sw.__panoPreviewPatchedCb) {
    sw.__panoPreviewPatchedCb = true;
    const prevCb = sw.callback;
    sw.callback = (v) => {
      const out = prevCb ? prevCb(v) : undefined;
      requestDraw();
      return out;
    };
  }
  const bgw = getWidget(node, "bg_color");
  if (bgw && !bgw.__panoPreviewPatchedCb) {
    bgw.__panoPreviewPatchedCb = true;
    const prevCb = bgw.callback;
    bgw.callback = (v) => {
      const out = prevCb ? prevCb(v) : undefined;
      requestDraw();
      return out;
    };
  }

  const onRemovedPrev = node.onRemoved;
  const onResizePrev = node.onResize;
  const onExecutedPrev = node.onExecuted;
  node.onExecuted = function (output) {
    syncOwnOutputSourceFromExecuted(node, output);
    invalidatePreviewImageCaches(node);
    suppressBuiltInPreviewImgs(node);
    requestDraw();
    const out = onExecutedPrev ? onExecutedPrev.apply(this, arguments) : undefined;
    suppressBuiltInPreviewImgs(node);
    return out;
  };
  const onConnectionsChangePrev = node.onConnectionsChange;
  node.onConnectionsChange = function () {
    invalidatePreviewImageCaches(node);
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
    restoreDom();
    previewMonitor.unregister(this);
    executedRefreshMonitor.unregister(this);
    return onRemovedPrev ? onRemovedPrev.apply(this, arguments) : undefined;
  };

  const restoreDom = () => {
    if (state.raf) cancelAnimationFrame(state.raf);
    resizeObserver?.disconnect?.();
    if (node.__panoResizeSettleTimer) {
      clearTimeout(node.__panoResizeSettleTimer);
      node.__panoResizeSettleTimer = null;
    }
    node.__panoDomPreview = null;
    node.__panoDomRestore = null;
    node.onResize = onResizePrev;
    node.onExecuted = onExecutedPrev;
    node.onConnectionsChange = onConnectionsChangePrev;
    node.onRemoved = onRemovedPrev;
  };
  node.__panoDomRestore = restoreDom;

  node.__panoPreviewHooked = true;
  node.__panoActiveBackend = "dom";
  node.__panoDomPreview = { widget, root, canvas, requestDraw, state, emptyHintEl: cutoutHint };

  runDomProbeForStickers();
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
  const allowLegacyFallback = !isStandalonePreviewNode(node) || isLegacyFrontendRuntime();
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
    if (!allowLegacyFallback) {
      setStandaloneUnavailableLabel(node, "Preview mount failed");
      panoPreviewLog(node, "route.attach", {
        route: "unified_dom_error",
        reason: "dom_attach_exception",
        nodeType: getNodeTypeName(node),
      });
      return true;
    }
    panoPreviewLog(node, "route.attach", {
      route: "unified_legacy_fallback",
      reason: "dom_attach_exception",
      nodeType: getNodeTypeName(node),
    });
    return false;
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
    if (allowLegacyFallback) {
      teardownPreview(node, { keepMonitor: false, reason });
      clearStandaloneUnavailableLabel(node);
      attachStandalonePreviewLegacy(node, options);
      if (mountKey) {
        node.__panoPreviewAttached = true;
        node.__panoPreviewMountKey = mountKey;
      }
      panoPreviewLog(node, "route.attach", {
        route: "unified_legacy_fallback",
        reason,
        nodeType: getNodeTypeName(node),
      });
      return;
    }

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
  ensureStandalonePreviewBootstrapSize(node);
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
  if (isStandalonePreviewNode(node) && !isLegacyFrontendRuntime()) {
    setStandaloneUnavailableLabel(node, "Preview mount failed");
    node.__panoPreviewAttached = true;
    node.__panoPreviewMountKey = mountKey;
    panoPreviewLog(node, "route.attach", {
      route: "unified_dom_error",
      reason: "dom_unavailable",
      nodeType: getNodeTypeName(node),
    });
    return;
  }
  attachStandalonePreviewLegacy(node, options);
  node.__panoPreviewAttached = true;
  node.__panoPreviewMountKey = mountKey;
  panoPreviewLog(node, "route.attach", {
    route: "unified_legacy_fallback",
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
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = node.__panoPreviewButtonText;
    btn.style.cssText = "height:34px;position:absolute;top:8px;left:8px;z-index:4;border:1px solid rgba(98,98,105,0.9);background:rgba(32,32,35,0.96);color:rgba(244,244,246,0.95);border-radius:8px;font:500 12px 'Plus Jakarta Sans', Geist, sans-serif;cursor:pointer;";
    const wrap = document.createElement("div");
    wrap.style.cssText = "position:absolute;inset:0;min-height:56px;border-radius:8px;overflow:hidden;border:1px solid rgba(63,63,70,1);background:#070707;";
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;touch-action:none;cursor:grab;";
    wrap.appendChild(canvas);
    root.appendChild(wrap);
    root.appendChild(btn);
    btn.addEventListener("click", (ev) => {
      stopCanvasEvent(ev);
      openStandaloneModal(node, String(options.modalTitle || "Panorama Preview"), imageInputName);
    });

    node.__panoBootMinHeightActive = true;
    if (node.__panoBootMinHeightTimer) {
      clearTimeout(node.__panoBootMinHeightTimer);
      node.__panoBootMinHeightTimer = null;
    }
    const widget = node.addDOMWidget(
      getAnimPreviewWidgetName(),
      "preview",
      root,
      createCoreManagedDomWidgetOptions(node, () => node.__panoDomPreview?.requestDraw?.(), 56),
    );
    if (widget) widget.serialize = false;
    node.__panoBootMinHeightTimer = setTimeout(() => {
      node.__panoBootMinHeightTimer = null;
      if (!node?.__panoDomPreview?.widget) return;
      if (!node.__panoBootMinHeightActive) return;
      node.__panoBootMinHeightActive = false;
      node.__panoDomPreview?.requestDraw?.();
      node.setDirtyCanvas?.(true, true);
    }, 1200);
    suppressBuiltInPreviewImgs(node);

    node.__panoBindSeq = Number(node.__panoBindSeq || 0) + 1;
    const bindingSeq = node.__panoBindSeq;
    panoPreviewLog(node, "bind", { nodeId: node?.id ?? null, bindingSeq, route: "standalone_dom" });
    panoPreviewLog(node, "modal-parity", PANO_MODAL_PARITY_CONSTANTS);
    const state = { raf: 0, needsDraw: true, dragging: false, pointerId: null };
    const disposeCounts = { listeners: 0, raf: 0, widget: 0 };
    const controller = createPanoInteractionController({
      getView: () => ensureStandaloneView(node),
      setView: (next) => {
        const view = ensureStandaloneView(node);
        view.yaw = wrapYaw(Number(next.yaw || 0));
        view.pitch = clamp(Number(next.pitch || 0), -89.9, 89.9);
        view.fov = clamp(Number(next.fov || 100), STANDALONE_FOV_MIN, STANDALONE_FOV_MAX);
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
      requestAnimationFrame(() => {
        restoreGraphViewportSnapshot(graphSnapshot);
        app?.canvas?.setDirty?.(true, true);
      });
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
      suppressBuiltInPreviewImgs(node);
      requestDraw();
      const out = onExecutedPrev ? onExecutedPrev.apply(this, arguments) : undefined;
      suppressBuiltInPreviewImgs(node);
      return out;
    };
    node.onConnectionsChange = function () {
      inspectNodeLayout(node, "onConnectionsChange");
      invalidatePreviewImageCaches(node);
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

export function attachStandalonePreviewLegacy(node, options = {}) {
  const mountKey = `standalone_legacy|${String(options.imageInputName || "erp_image")}|${String(options.buttonText || "Open Preview")}`;
  if (node.__panoPreviewAttached === true && node.__panoPreviewMountKey === mountKey && node.__panoLegacyPreviewHooked) return;
  teardownPreview(node, { keepMonitor: false, reason: "attach_standalone_legacy_begin" });
  clearStandaloneUnavailableLabel(node);
  node.__panoPreviewMode = "standalone_legacy";
  node.__panoPreviewButtonText = String(options.buttonText || "Open Preview");
  node.__panoOpenEditor = typeof options.onOpen === "function" ? options.onOpen : null;
  executedRefreshMonitor.register(node);
  panoPreviewLog(node, "route.attach", { route: "standalone_legacy", nodeType: getNodeTypeName(node) });
  const imageInputName = String(options.imageInputName || "erp_image");
  if (node.__panoLegacyPreviewHooked) return;
  node.__panoLegacyPreviewHooked = true;
  suppressBuiltInPreviewImgs(node);

  const prevDrawForeground = node.onDrawForeground;
  const prevMouseDown = node.onMouseDown;
  const prevMouseMove = node.onMouseMove;
  const prevMouseUp = node.onMouseUp;
  const prevMouseWheel = node.onMouseWheel;
  const prevResize = node.onResize;
  const prevRemoved = node.onRemoved;
  const prevExecuted = node.onExecuted;
  const prevConnectionsChange = node.onConnectionsChange;
  let detachWindowDragListeners = null;

  const updateStandaloneLegacyDragFromEvent = (targetNode, e, localPos, canvasRef) => {
    const d = targetNode.__panoPreviewDrag;
    if (!d?.active) return false;
    if (!isLeftButtonPressed(e)) {
      endStandaloneDrag(targetNode, performance.now());
      targetNode.setDirtyCanvas?.(true, false);
      detachWindowDragListeners?.();
      return true;
    }
    const p = resolveStandaloneLocalPos(targetNode, e, localPos, canvasRef || app?.canvas, { x: d.lastX, y: d.lastY });
    if (!p) return true;
    updateStandaloneDrag(targetNode, p.x, p.y, performance.now());
    targetNode.setDirtyCanvas?.(true, false);
    return true;
  };

  const endStandaloneLegacyDrag = (targetNode) => {
    const ended = endStandaloneDrag(targetNode, performance.now());
    if (!ended) return false;
    targetNode.setDirtyCanvas?.(true, false);
    detachWindowDragListeners?.();
    return true;
  };

  const bindWindowDragListeners = (targetNode) => {
    if (detachWindowDragListeners) detachWindowDragListeners();
    const onWinMove = (ev) => {
      if (!targetNode.__panoPreviewDrag?.active) return;
      updateStandaloneLegacyDragFromEvent(targetNode, ev, null, app?.canvas);
      ev.preventDefault?.();
    };
    const onWinUp = () => {
      endStandaloneLegacyDrag(targetNode);
    };
    const onWinBlur = () => {
      endStandaloneLegacyDrag(targetNode);
    };
    window.addEventListener("mousemove", onWinMove, true);
    window.addEventListener("mouseup", onWinUp, true);
    window.addEventListener("blur", onWinBlur, true);
    detachWindowDragListeners = () => {
      window.removeEventListener("mousemove", onWinMove, true);
      window.removeEventListener("mouseup", onWinUp, true);
      window.removeEventListener("blur", onWinBlur, true);
      detachWindowDragListeners = null;
    };
  };

  node.onDrawForeground = function (ctx) {
    const r = prevDrawForeground ? prevDrawForeground.apply(this, arguments) : undefined;
    if (!ctx || this.flags?.collapsed) return r;
    const rect = getStandaloneLegacyPreviewRect(this);
    const ts = performance.now();
    const movingBase = stepStandaloneInertia(this, ts);
    const resizingNow = isPreviewResizing(this, ts);
    const moving = movingBase || resizingNow;
    recordStandaloneFrame(this, ts);
    drawNodeEditorButton(this, ctx);
    if (rect) {
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(rect.x, rect.y, rect.w, rect.h, 8);
      ctx.clip();
      const mesh = STANDALONE_MESH_LOW;
      drawStandalonePanorama(this, ctx, rect, imageInputName, mesh);
      ctx.restore();
    }
    if (moving) this.setDirtyCanvas?.(true, false);
    return r;
  };
  node.onResize = function () {
    const r = prevResize ? prevResize.apply(this, arguments) : undefined;
    this.__panoUserResized = true;
    markPreviewResizing(this, 150);
    this.setDirtyCanvas?.(true, true);
    scheduleResizeSettleDraw(this, 220, null);
    return r;
  };

  node.onMouseDown = function (e, localPos, canvas) {
    const p = resolveStandaloneLocalPos(this, e, localPos, canvas || app?.canvas, this.__panoLastLocalPos);
    if (p) this.__panoLastLocalPos = { x: p.x, y: p.y };
    const btn = getNodeEditorButtonRect(this);
    const rect = getStandaloneLegacyPreviewRect(this);
    if (p && pointInRect(p.x, p.y, btn)) {
      if (e?.button === 0) openStandaloneModal(this, String(options.modalTitle || "Panorama Preview"), imageInputName);
      return true;
    }
    if (p && rect && pointInRect(p.x, p.y, rect) && e?.button === 0) {
      const now = performance.now();
      beginStandaloneDrag(this, p.x, p.y, now);
      bindWindowDragListeners(this);
      return true;
    }
    return prevMouseDown ? prevMouseDown.apply(this, arguments) : undefined;
  };
  node.onMouseMove = function (e, localPos, canvas) {
    const currentPos = resolveStandaloneLocalPos(this, e, localPos, canvas || app?.canvas, this.__panoLastLocalPos);
    if (currentPos) this.__panoLastLocalPos = { x: currentPos.x, y: currentPos.y };
    const d = this.__panoPreviewDrag;
    if (!d?.active) return prevMouseMove ? prevMouseMove.apply(this, arguments) : undefined;
    if (!isLeftButtonPressed(e)) {
      endStandaloneLegacyDrag(this);
      return true;
    }
    updateStandaloneLegacyDragFromEvent(this, e, currentPos, canvas || app?.canvas);
    return true;
  };
  node.onMouseUp = function () {
    if (endStandaloneLegacyDrag(this)) return true;
    return prevMouseUp ? prevMouseUp.apply(this, arguments) : undefined;
  };
  node.onMouseWheel = function (e, arg2, canvas) {
    const p = resolveStandaloneLocalPos(this, e, arg2, canvas || app?.canvas, this.__panoLastLocalPos);
    if (p) this.__panoLastLocalPos = { x: p.x, y: p.y };
    const rect = getNodePreviewRect(this);
    if (p && rect && pointInRect(p.x, p.y, rect)) {
      const v = ensureStandaloneView(this);
      const graphSnapshot = lockGraphViewportSnapshot();
      const delta = Math.sign(readWheelDelta(e));
      if (delta !== 0) {
        v.fov = clamp(Number(v.fov || 100) + delta * STANDALONE_WHEEL_STEP, STANDALONE_FOV_MIN, STANDALONE_FOV_MAX);
        markStandaloneInteractionSettled(this);
        this.setDirtyCanvas?.(true, false);
      }
      requestAnimationFrame(() => {
        restoreGraphViewportSnapshot(graphSnapshot);
        app?.canvas?.setDirty?.(true, true);
      });
      e?.preventDefault?.();
      e?.stopPropagation?.();
      e?.stopImmediatePropagation?.();
      return true;
    }
    return prevMouseWheel ? prevMouseWheel.apply(this, arguments) : undefined;
  };
  node.onExecuted = function (output) {
    syncOwnOutputSourceFromExecuted(this, output);
    invalidatePreviewImageCaches(this);
    suppressBuiltInPreviewImgs(this);
    this.setDirtyCanvas?.(true, false);
    const out = prevExecuted ? prevExecuted.apply(this, arguments) : undefined;
    suppressBuiltInPreviewImgs(this);
    return out;
  };
  node.onConnectionsChange = function () {
    invalidatePreviewImageCaches(this);
    suppressBuiltInPreviewImgs(this);
    this.setDirtyCanvas?.(true, false);
    return prevConnectionsChange ? prevConnectionsChange.apply(this, arguments) : undefined;
  };

  const restoreLegacy = () => {
    detachWindowDragListeners?.();
    if (node.__panoResizeSettleTimer) {
      clearTimeout(node.__panoResizeSettleTimer);
      node.__panoResizeSettleTimer = null;
    }
    node.__panoStandaloneModal?.dispose?.();
    node.__panoStandaloneModal = null;
    node.onDrawForeground = prevDrawForeground;
    node.onMouseDown = prevMouseDown;
    node.onMouseMove = prevMouseMove;
    node.onMouseUp = prevMouseUp;
    node.onMouseWheel = prevMouseWheel;
    node.onResize = prevResize;
    node.onExecuted = prevExecuted;
    node.onConnectionsChange = prevConnectionsChange;
    node.onRemoved = prevRemoved;
    node.__panoLegacyPreviewHooked = false;
    node.__panoPreviewHooked = false;
    node.__panoPreviewDrag = null;
    node.__panoLastLocalPos = null;
    node.__panoPreviewAttached = false;
    node.__panoPreviewMountKey = null;
  };
  node.__panoLegacyRestore = restoreLegacy;
  node.onRemoved = function () {
    restoreLegacy();
    executedRefreshMonitor.unregister(node);
    return prevRemoved ? prevRemoved.apply(this, arguments) : undefined;
  };
  node.__panoPreviewAttached = true;
  node.__panoPreviewMountKey = mountKey;
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
