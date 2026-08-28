import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { createApp, reactive } from "vue";
import { cameraBasis, DEG2RAD, clamp, wrapYaw } from "./pano_camera_math.js";
import { createPanoInteractionController } from "./pano_interaction_controller.js";
import {
  createPreviewFullscreenController,
  measurePreviewCanvasSize,
  shouldTogglePreviewPlaybackFromKey,
} from "./pano_preview_node_surface.js";
import { bindWheelCaptureRoot } from "./pano_wheel.js";
import { createPanoramaRenderCore } from "./pano_render_core.js";
import { buildStickerRenderDescriptor } from "./pano_render_descriptors.js";
import { buildPreviewNodeViewParams, buildStickerSceneFromState } from "./pano_gl_scene.js";
import { installPanoSuiteStylesheet } from "./pano_styles.js";
import {
  removeTrackedDomWidget,
  trackDomWidgetRemoval,
} from "./pano_dom_widget_lifecycle.js";
import PanoPreviewNodeSurface from "./components/PanoPreviewNodeSurface.vue";
import {
  drawErpBackground,
  STANDALONE_MESH_LOW,
  localPosFromEvent,
} from "./pano_preview_runtime.js";

const PREVIEW_MIN_HEIGHT = 140;
const PREVIEW_MIN_WIDTH = 180;
const LEGACY_TOP_OFFSET = 40;
const LEGACY_MARGIN = 10;

function normalizeExecutionId(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return { full: "", tail: "" };
  const parts = raw.split(":");
  return { full: raw, tail: String(parts[parts.length - 1] || "").trim() };
}

function executionIdMatches(value, target) {
  const a = normalizeExecutionId(value);
  const b = normalizeExecutionId(target);
  if (!a.full || !b.full) return false;
  return a.full === b.full || a.tail === b.full || a.full === b.tail || a.tail === b.tail;
}

function comfyImageEntryToUrl(entry) {
  if (!entry || typeof entry !== "object") return "";
  const filename = String(entry.filename || "").trim();
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

function imageSourceFromCandidate(candidate) {
  if (!candidate) return "";
  if (typeof candidate === "string") return String(candidate || "").trim();
  if (Array.isArray(candidate)) {
    if (candidate.length === 0) return "";
    if (candidate.length === 1) return imageSourceFromCandidate(candidate[0]);
    const filename = typeof candidate[0] === "string" ? String(candidate[0] || "").trim() : "";
    if (filename) {
      return comfyImageEntryToUrl({
        filename,
        subfolder: String(candidate[1] || "").trim(),
        type: String(candidate[2] || "output").trim() || "output",
      });
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
  if (media instanceof HTMLVideoElement) {
    return Number(media.videoWidth || 0) > 0
      && Number(media.videoHeight || 0) > 0
      && Number(media.readyState || 0) >= 2;
  }
  return !!media.complete && Number(media.naturalWidth || media.width || 0) > 0;
}

function getRenderableMediaRevisionToken(media) {
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
    String(media?.currentSrc || media?.src || ""),
    Number(media?.naturalWidth || media?.width || 0),
    Number(media?.naturalHeight || media?.height || 0),
  ].join("|");
}

function lookupNodeOutputEntry(nodeId) {
  const store = app?.nodeOutputs;
  if (!store || nodeId == null) return null;
  const raw = String(nodeId);
  let val = null;
  if (store instanceof Map) {
    val = store.get(nodeId) || store.get(raw) || store.get(Number(raw)) || null;
  } else {
    val = store[nodeId] || store[raw] || null;
  }
  if (val) return val;
  if (store instanceof Map) {
    for (const key of store.keys()) {
      if (executionIdMatches(key, raw)) return store.get(key);
    }
  } else {
    for (const key of Object.keys(store)) {
      if (executionIdMatches(key, raw)) return store[key];
    }
  }
  return null;
}

function getSelfVideoUrl(node) {
  const outputs = lookupNodeOutputEntry(node?.id);
  const groups = [
    outputs?.ui?.pano_videos,
    outputs?.pano_videos,
    outputs?.ui?.images,
    outputs?.images,
  ];
  for (const group of groups) {
    if (!Array.isArray(group)) continue;
    for (const cand of group) {
      const src = imageSourceFromCandidate(cand);
      if (src && /\.mp4(\?|$)/i.test(src)) return src;
      if (src && String(cand?.format || "").toLowerCase() === "video/mp4") return src;
    }
  }
  return "";
}

function getLinkedImageUrl(node, imageInputName = "erp_image") {
  const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
  let linkId = null;

  const preferred = inputs.find((input) => String(input?.name || "") === String(imageInputName));
  if (preferred?.link != null) linkId = preferred.link;
  if (linkId == null) {
    const anyImg = inputs.find((input) => String(input?.type || "").toUpperCase() === "IMAGE" && input?.link != null);
    if (anyImg?.link != null) linkId = anyImg.link;
  }
  if (linkId == null) return "";

  const link = node?.graph?.links?.[linkId] || app?.graph?.links?.[linkId];
  if (!link) return "";
  const originId = Number(link.origin_id);
  if (!Number.isFinite(originId)) return "";
  const originNode = app?.graph?.getNodeById?.(originId);

  const outputs = lookupNodeOutputEntry(originId);
  const selfOutput = lookupNodeOutputEntry(node?.id);
  const candidateGroups = [
    selfOutput?.ui?.pano_input_images,
    selfOutput?.pano_input_images,
    outputs?.images,
    outputs?.ui?.pano_input_images,
    outputs?.pano_input_images,
  ];
  for (const group of candidateGroups) {
    if (!Array.isArray(group)) continue;
    for (const cand of group) {
      const src = imageSourceFromCandidate(cand);
      if (src) return src;
    }
  }

  let appNodeImageUrls = [];
  try {
    appNodeImageUrls = typeof app?.getNodeImageUrls === "function" ? (app.getNodeImageUrls(originNode) || []) : [];
  } catch {
    appNodeImageUrls = [];
  }
  if (Array.isArray(appNodeImageUrls) && appNodeImageUrls.length > 0) {
    for (const cand of appNodeImageUrls) {
      const src = imageSourceFromCandidate(cand);
      if (src) return src;
    }
  }

  if (originNode) {
    const nodeImgs = Array.isArray(originNode?.imgs) ? originNode.imgs : [];
    for (const cand of nodeImgs) {
      const src = imageSourceFromCandidate(cand);
      if (src) return src;
    }
  }

  const imageWidget = originNode?.widgets?.find((widget) => String(widget?.name || "").toLowerCase() === "image");
  const imageName = String(imageWidget?.value || "").trim();
  if (!imageName) return "";
  return api.apiURL(`/view?filename=${encodeURIComponent(imageName)}&type=input&subfolder=`);
}

function drawGrid(ctx, width, height) {
  ctx.strokeStyle = "rgba(255,255,255,0.16)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(width * 0.5, 0);
  ctx.lineTo(width * 0.5, height);
  ctx.moveTo(0, height * 0.5);
  ctx.lineTo(width, height * 0.5);
  ctx.stroke();
}

function drawPreview(node, ctx, width, height, view, img) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#070707";
  ctx.fillRect(0, 0, width, height);

  if (!isRenderableMediaReady(img) || width <= 1 || height <= 1) {
    drawGrid(ctx, width, height);
    return;
  }
  const basis = cameraBasis(Number(view.yaw || 0), Number(view.pitch || 0), 0);
  const tanHalfY = Math.tan((Number(view.fov || 100) * DEG2RAD) * 0.5);
  const coverageDeg = Number(node?.widgets?.find?.((w) => w?.name === "coverage")?.value || 360) === 180 ? 180 : 360;
  if (!node.__panoStandaloneCore) node.__panoStandaloneCore = createPanoramaRenderCore();
  const mediaRevision = getRenderableMediaRevisionToken(img);
  const descriptor = buildStickerRenderDescriptor({
    stateRevision: [
      "standalone_preview_scene",
      mediaRevision,
      coverageDeg,
    ].join("|"),
    backgroundSource: img,
    backgroundRevision: mediaRevision,
    coverageDeg,
    scene: buildStickerSceneFromState(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: false,
  });
  const drawn = !!node.__panoStandaloneCore.syncState(descriptor)
    && (() => {
      const surface = node.__panoStandaloneCore.renderToTarget(
        "preview_node",
        buildPreviewNodeViewParams(view, coverageDeg),
        { width, height, dpr: window.devicePixelRatio || 1 },
      );
      if (!surface) return false;
      ctx.drawImage(surface, 0, 0, width, height);
      return true;
    })();
  if (!drawn) {
    drawErpBackground(node, ctx, { x: 0, y: 0, w: width, h: height }, basis, tanHalfY, img, STANDALONE_MESH_LOW);
    drawGrid(ctx, width, height);
  }
}

function isPointInRect(x, y, rect) {
  return x >= rect.x && x <= rect.x + rect.w && y >= rect.y && y <= rect.y + rect.h;
}

class PreviewNodeRuntime {
  constructor(node, options = {}) {
    this.node = node;
    this.options = options;
    this.imageInputName = String(options.imageInputName || "erp_image");
    this.buttonText = String(options.buttonText || "Open Preview");
    this.errorText = "";
    this.root = null;
    this.canvas = null;
    this.ctx = null;
    this.widget = null;
    this.surfaceHost = null;
    this.surfaceApp = null;
    this.surfaceModel = null;
    this.fullscreenController = null;
    this.wheelCaptureCleanup = null;
    this.tearingDown = false;
    this.resizeObserver = null;
    this.rafId = 0;
    this.needsDraw = false;
    this.inTick = false;
    this.queuedDuringTick = false;
    this.img = null;
    this.imgSrc = "";
    this.mediaCleanup = null;
    this.videoPaused = false;
    this.view = { yaw: 0, pitch: 0, fov: 100 };
    this.controller = createPanoInteractionController({
      getView: () => this.view,
      setView: (next) => {
        this.view = {
          yaw: wrapYaw(Number(next?.yaw || 0)),
          pitch: clamp(Number(next?.pitch || 0), -89.9, 89.9),
          fov: clamp(Number(next?.fov || 100), 35, 140),
        };
      },
      getViewportSize: () => {
        const rect = this.canvas?.getBoundingClientRect?.();
        return {
          w: Math.max(1, Number(rect?.width || this.canvas?.clientWidth || 0)),
          h: Math.max(1, Number(rect?.height || this.canvas?.clientHeight || 0)),
        };
      },
      onInteraction: () => this.requestDraw(),
    });
    this.orig = {
      onDrawForeground: node.onDrawForeground,
      onMouseDown: node.onMouseDown,
      onMouseMove: node.onMouseMove,
      onMouseUp: node.onMouseUp,
      onMouseWheel: node.onMouseWheel,
      onExecuted: node.onExecuted,
      onConnectionsChange: node.onConnectionsChange,
      onResize: node.onResize,
      onRemoved: node.onRemoved,
      coverageWidgetCallback: null,
    };
    this.legacyDragPointer = false;
    this.tick = this.tick.bind(this);
    this.onResizeDom = this.onResizeDom.bind(this);
  }

  attach() {
    if (typeof this.node?.addDOMWidget === "function") this.attachDom();
    else this.attachLegacy();
    this.installCommonHooks();
    this.refreshImage();
    this.requestDraw();
  }

  installCommonHooks() {
    const self = this;
    this.node.onExecuted = function () {
      const out = self.orig.onExecuted ? self.orig.onExecuted.apply(this, arguments) : undefined;
      self.refreshImage();
      return out;
    };
    this.node.onConnectionsChange = function () {
      const out = self.orig.onConnectionsChange ? self.orig.onConnectionsChange.apply(this, arguments) : undefined;
      self.refreshImage();
      return out;
    };
    this.node.onResize = function () {
      const out = self.orig.onResize ? self.orig.onResize.apply(this, arguments) : undefined;
      self.requestDraw();
      return out;
    };
    this.node.onRemoved = function () {
      const out = self.orig.onRemoved ? self.orig.onRemoved.apply(this, arguments) : undefined;
      self.teardown();
      return out;
    };
    const coverageWidget = this.node?.widgets?.find?.((widget) => widget?.name === "coverage") || null;
    if (coverageWidget) {
      this.orig.coverageWidgetCallback = typeof coverageWidget.callback === "function"
        ? coverageWidget.callback.bind(coverageWidget)
        : null;
      coverageWidget.callback = (...args) => {
        const out = self.orig.coverageWidgetCallback ? self.orig.coverageWidgetCallback(...args) : undefined;
        self.requestDraw();
        return out;
      };
    }
  }

  installErrorForeground() {
    const self = this;
    this.node.onDrawForeground = function (ctx) {
      const out = self.orig.onDrawForeground ? self.orig.onDrawForeground.apply(this, arguments) : undefined;
      if (!ctx || this.flags?.collapsed || !self.errorText) return out;
      const rect = self.getLegacyPreviewRect();
      ctx.save();
      ctx.fillStyle = "rgba(18,18,22,0.92)";
      ctx.strokeStyle = "rgba(82,82,89,1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(rect.x, rect.y, rect.w, rect.h, 8);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "rgba(236,236,242,0.92)";
      ctx.font = "600 12px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(self.errorText, rect.x + rect.w * 0.5, rect.y + rect.h * 0.5);
      ctx.restore();
      return out;
    };
  }

  attachDom() {
    try {
      this.root = document.createElement("div");
      this.root.className = "pano-node-preview-dom pano-node-preview--preview";
      this.root.setAttribute("data-capture-wheel", "true");
      this.root.setAttribute("tabindex", "0");
      this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${PREVIEW_MIN_HEIGHT}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)",
      ].join(";");

      this.canvas = document.createElement("canvas");
      this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
      this.root.appendChild(this.canvas);

      const widgetOptions = {
        serialize: false,
        hideOnZoom: false,
        getValue() { return ""; },
        setValue() {},
        getMinHeight() { return PREVIEW_MIN_HEIGHT; },
        getHeight() { return PREVIEW_MIN_HEIGHT; },
        afterResize: () => this.requestDraw(),
      };

      this.widget = trackDomWidgetRemoval(
        this.node.addDOMWidget("preview", "preview", this.root, widgetOptions),
      );
      if (this.widget) {
        this.widget.serialize = false;
        const prevComputeLayoutSize = typeof this.widget.computeLayoutSize === "function"
          ? this.widget.computeLayoutSize.bind(this.widget)
          : null;
        this.widget.computeLayoutSize = (targetNode) => {
          const prev = prevComputeLayoutSize ? (prevComputeLayoutSize(targetNode) || {}) : {};
          return {
            ...prev,
            minHeight: Math.max(PREVIEW_MIN_HEIGHT, Number(prev.minHeight || 0)),
            minWidth: Math.max(PREVIEW_MIN_WIDTH, Number(prev.minWidth || 0)),
          };
        };
      }

      this.ctx = this.canvas.getContext("2d");
      this.resizeObserver = typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => this.onResizeDom())
        : null;
      this.resizeObserver?.observe(this.root);
      this.bindDomInput(this.canvas, this.root);
      this.mountNodeSurface();
      this.onResizeDom();
    } catch (err) {
      this.errorText = "Preview mount failed";
      this.installErrorForeground();
    }
  }

  mountNodeSurface() {
    if (!this.root || this.surfaceApp) return false;
    try {
      void installPanoSuiteStylesheet();
      this.surfaceHost = document.createElement("div");
      this.surfaceHost.className = "pano-preview-node-surface-host";
      this.root.appendChild(this.surfaceHost);
      this.surfaceModel = reactive({ fullscreen: false });
      this.fullscreenController = createPreviewFullscreenController({
        root: this.root,
        documentRef: document,
        onChange: (fullscreen) => {
          if (this.surfaceModel) this.surfaceModel.fullscreen = fullscreen;
          this.requestDraw();
        },
        onFallback: () => this.options.onOpen?.(this.node),
      });
      this.surfaceApp = createApp(PanoPreviewNodeSurface, {
        model: this.surfaceModel,
        onAction: (action) => {
          if (action?.type === "toggle-fullscreen") void this.fullscreenController?.toggle?.();
        },
      });
      this.surfaceApp.mount(this.surfaceHost);
      this.node.__panoPreviewNodeSurface = {
        mounted: true,
        toggleFullscreen: () => this.fullscreenController?.toggle?.(),
      };
      return true;
    } catch {
      this.fullscreenController?.destroy?.();
      this.fullscreenController = null;
      this.surfaceApp?.unmount?.();
      this.surfaceApp = null;
      this.surfaceHost?.remove?.();
      this.surfaceHost = null;
      this.surfaceModel = null;
      this.node.__panoPreviewNodeSurface = null;
      return false;
    }
  }

  bindDomInput(canvas, root) {
    this.wheelCaptureCleanup?.();
    this.wheelCaptureCleanup = bindWheelCaptureRoot(root);
    canvas.addEventListener("pointerdown", (ev) => {
      if (ev.button !== 0) return;
      root.focus?.({ preventScroll: true });
      canvas.setPointerCapture?.(ev.pointerId);
      canvas.style.cursor = "grabbing";
      this.controller.startDrag(ev.clientX, ev.clientY, ev.pointerId);
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
    });
    canvas.addEventListener("pointermove", (ev) => {
      if (!this.controller.state.drag.active) return;
      this.controller.moveDrag(ev.clientX, ev.clientY, "pano");
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
    });
    const end = (ev) => {
      if (!this.controller.state.drag.active) return;
      canvas.releasePointerCapture?.(ev.pointerId);
      canvas.style.cursor = "grab";
      this.controller.endDrag();
      this.requestDraw();
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
    };
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);
    root.addEventListener("wheel", (ev) => {
      this.controller.applyWheelEvent(ev);
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
    }, { passive: false, capture: true });
    canvas.addEventListener("dblclick", (ev) => {
      this.togglePlayback();
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
    });
    root.addEventListener("keydown", (ev) => {
      if (!shouldTogglePreviewPlaybackFromKey(ev, root)) return;
      this.togglePlayback();
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
    });
  }

  togglePlayback() {
    if (!(this.img instanceof HTMLVideoElement) || !isRenderableMediaReady(this.img)) return;
    if (this.img.paused) {
      this.videoPaused = false;
      void this.img.play().catch(() => {});
    } else {
      this.videoPaused = true;
      this.img.pause();
    }
    this.requestDraw();
  }

  attachLegacy() {
    const self = this;
    this.node.onDrawForeground = function (ctx) {
      const out = self.orig.onDrawForeground ? self.orig.onDrawForeground.apply(this, arguments) : undefined;
      self.drawLegacy(ctx);
      return out;
    };
    this.node.onMouseDown = function (e, localPos) {
      const p = self.localPoint(localPos);
      if (!p) return self.orig.onMouseDown ? self.orig.onMouseDown.apply(this, arguments) : undefined;
      const previewRect = self.getLegacyPreviewRect();
      if (!isPointInRect(p.x, p.y, previewRect)) {
        return self.orig.onMouseDown ? self.orig.onMouseDown.apply(this, arguments) : undefined;
      }
      self.legacyDragPointer = true;
      self.controller.startDrag(p.x - previewRect.x, p.y - previewRect.y);
      this.setDirtyCanvas?.(true, false);
      return true;
    };
    this.node.onMouseMove = function (e, localPos) {
      if (!self.legacyDragPointer || !self.controller.state.drag.active) {
        return self.orig.onMouseMove ? self.orig.onMouseMove.apply(this, arguments) : undefined;
      }
      const p = self.localPoint(localPos);
      if (!p) return true;
      const previewRect = self.getLegacyPreviewRect();
      self.controller.moveDrag(p.x - previewRect.x, p.y - previewRect.y, "pano");
      this.setDirtyCanvas?.(true, false);
      return true;
    };
    this.node.onMouseUp = function () {
      if (!self.legacyDragPointer && !self.controller.state.drag.active) {
        return self.orig.onMouseUp ? self.orig.onMouseUp.apply(this, arguments) : undefined;
      }
      self.legacyDragPointer = false;
      self.controller.endDrag();
      this.setDirtyCanvas?.(true, false);
      return true;
    };
    this.node.onMouseWheel = function (e, arg2, canvasRef) {
      const p = localPosFromEvent(this, e, arg2, canvasRef);
      const previewRect = self.getLegacyPreviewRect();
      if (!p || !isPointInRect(p.x, p.y, previewRect)) {
        return self.orig.onMouseWheel ? self.orig.onMouseWheel.apply(this, arguments) : undefined;
      }
      const before = Number(self.view?.fov || 100);
      const changed = self.controller.applyWheelEvent(e, typeof arg2 === "number" ? arg2 : 0);
      const after = Number(self.view?.fov || 100);
      if (changed) this.setDirtyCanvas?.(true, false);
      e?.preventDefault?.();
      e?.stopPropagation?.();
      e?.stopImmediatePropagation?.();
      return true;
    };
  }

  localPoint(localPos) {
    if (!Array.isArray(localPos) || localPos.length < 2) return null;
    return { x: Number(localPos[0] || 0), y: Number(localPos[1] || 0) };
  }

  getLegacyPreviewRect() {
    const width = Math.max(80, Number(this.node?.size?.[0] || 0) - LEGACY_MARGIN * 2);
    const height = Math.max(60, Number(this.node?.size?.[1] || 0) - LEGACY_TOP_OFFSET - LEGACY_MARGIN);
    return { x: LEGACY_MARGIN, y: LEGACY_TOP_OFFSET, w: width, h: height };
  }

  drawLegacy(ctx) {
    if (!ctx || this.node?.flags?.collapsed) return;
    const rect = this.getLegacyPreviewRect();
    if (rect.w <= 2 || rect.h <= 2) return;

    ctx.save();
    ctx.translate(rect.x, rect.y);
    drawPreview(this.node, ctx, rect.w, rect.h, this.view, this.img);

    if (this.errorText) {
      ctx.fillStyle = "rgba(18,18,22,0.92)";
      ctx.fillRect(0, 0, rect.w, rect.h);
      ctx.fillStyle = "rgba(236,236,242,0.92)";
      ctx.font = "600 12px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.errorText, rect.w * 0.5, rect.h * 0.5);
    }
    ctx.restore();
  }

  onResizeDom() {
    if (!this.root || !this.canvas) return;
    // Keep the previous bitmap stretched by CSS until the next animation frame.
    // Changing an intrinsic canvas dimension here would clear it immediately.
    this.requestDraw();
  }

  syncCanvasSize() {
    if (!this.root || !this.canvas) return false;
    const rect = this.root.getBoundingClientRect();
    const { width, height } = measurePreviewCanvasSize(rect, window.devicePixelRatio || 1);
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      return true;
    }
    return false;
  }

  refreshImage() {
    const nextVideoSrc = getSelfVideoUrl(this.node);
    if (nextVideoSrc) {
      if (nextVideoSrc === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      this.mediaCleanup?.();
      this.imgSrc = nextVideoSrc;
      this.videoPaused = false;
      const video = document.createElement("video");
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.crossOrigin = "anonymous";
      const onReady = () => {
        if (this.imgSrc !== nextVideoSrc) return;
        this.img = video;
        if (!this.videoPaused) void video.play().catch(() => {});
        this.requestDraw();
      };
      const onTick = () => this.requestDraw();
      video.addEventListener("loadedmetadata", onReady);
      video.addEventListener("canplay", onReady);
      video.addEventListener("timeupdate", onTick);
      video.addEventListener("play", onTick);
      video.addEventListener("pause", onTick);
      video.src = nextVideoSrc;
      video.load();
      this.mediaCleanup = () => {
        video.pause();
        video.removeEventListener("loadedmetadata", onReady);
        video.removeEventListener("canplay", onReady);
        video.removeEventListener("timeupdate", onTick);
        video.removeEventListener("play", onTick);
        video.removeEventListener("pause", onTick);
      };
      return;
    }
    const nextSrc = getLinkedImageUrl(this.node, this.imageInputName);
    if (!nextSrc) {
      this.mediaCleanup?.();
      this.mediaCleanup = null;
      this.img = null;
      this.imgSrc = "";
      this.requestDraw();
      return;
    }
    if (nextSrc === this.imgSrc && this.img) return;
    this.mediaCleanup?.();
    this.mediaCleanup = null;
    this.imgSrc = nextSrc;
    const img = new Image();
    img.onload = () => {
      if (this.imgSrc !== nextSrc) return;
      this.img = img;
      this.requestDraw();
    };
    img.onerror = () => {
      if (this.imgSrc !== nextSrc) return;
      this.img = null;
      this.requestDraw();
    };
    this.mediaCleanup = () => {
      img.onload = null;
      img.onerror = null;
    };
    img.src = nextSrc;
  }

  requestDraw() {
    if (this.tearingDown) return;
    this.needsDraw = true;
    if (this.inTick) {
      this.queuedDuringTick = true;
      return;
    }
    if (!this.rafId) this.rafId = requestAnimationFrame(this.tick);
    if (!this.canvas) this.node.setDirtyCanvas?.(true, false);
  }

  tick(ts = performance.now()) {
    this.rafId = 0;
    this.inTick = true;
    this.queuedDuringTick = false;
    this.needsDraw = false;
    const moving = this.controller.stepInertia(ts);
    if (this.canvas && this.ctx) {
      // Resize and repaint in one frame so the cleared backing store is never
      // presented between a ResizeObserver callback and this draw.
      this.syncCanvasSize();
      drawPreview(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img);
      if (this.errorText) {
        this.ctx.fillStyle = "rgba(18,18,22,0.92)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgba(236,236,242,0.92)";
        this.ctx.font = "600 14px sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5);
      }
    } else {
      this.node.setDirtyCanvas?.(true, false);
    }
    this.inTick = false;
    const shouldContinue = moving
      || this.needsDraw
      || this.queuedDuringTick
      || (this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended);
    if (shouldContinue && !this.rafId) this.rafId = requestAnimationFrame(this.tick);
  }

  teardown() {
    if (this.node?.__panoPreviewNodeRuntime !== this) return;
    this.tearingDown = true;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
    this.resizeObserver?.disconnect?.();
    this.resizeObserver = null;
    this.fullscreenController?.destroy?.();
    this.fullscreenController = null;
    this.wheelCaptureCleanup?.();
    this.wheelCaptureCleanup = null;
    this.surfaceApp?.unmount?.();
    this.surfaceApp = null;
    this.surfaceHost?.remove?.();
    this.surfaceHost = null;
    this.surfaceModel = null;
    this.node.__panoPreviewNodeSurface = null;
    this.mediaCleanup?.();
    this.mediaCleanup = null;
    this.img = null;
    this.imgSrc = "";
    try {
      this.root?.remove?.();
    } catch {
      // ignore
    }
    try { removeTrackedDomWidget(this.node, this.widget); } catch { }
    this.node.onDrawForeground = this.orig.onDrawForeground;
    this.node.onMouseDown = this.orig.onMouseDown;
    this.node.onMouseMove = this.orig.onMouseMove;
    this.node.onMouseUp = this.orig.onMouseUp;
    this.node.onMouseWheel = this.orig.onMouseWheel;
    this.node.onExecuted = this.orig.onExecuted;
    this.node.onConnectionsChange = this.orig.onConnectionsChange;
    this.node.onResize = this.orig.onResize;
    this.node.onRemoved = this.orig.onRemoved;
    const coverageWidget = this.node?.widgets?.find?.((widget) => widget?.name === "coverage") || null;
    if (coverageWidget) {
      coverageWidget.callback = this.orig.coverageWidgetCallback;
    }
    this.node.__panoStandaloneCore?.dispose?.();
    this.node.__panoStandaloneCore = null;
    this.node.__panoPreviewNodeRuntime = null;
  }
}

export function attachPreviewNodeRuntime(node, options = {}) {
  if (!node || node.__panoPreviewNodeRuntime) return;
  const runtime = new PreviewNodeRuntime(node, options);
  node.__panoPreviewNodeRuntime = runtime;
  runtime.attach();
}
