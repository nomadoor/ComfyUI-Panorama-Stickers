// The on-node surface's DOM: the DOM widget and its element tree, its sizes in Node 2.0 and the Legacy renderer, the
// stylesheet the surface builds itself, and the Vue component mounted over the canvas.
import { createApp, reactive } from "vue";
import { createPanoCanvas } from "../pano_diagnostics.js";
import {
  buildCutoutAddFrameAction,
  buildCutoutPanoramaViewFromShot,
  cutoutNodeSurfaceModel,
  resolveCutoutNodeSurfaceShot,
} from "../pano_cutout_node_surface.js";
import PanoCutoutNodeSurface from "../components/PanoCutoutNodeSurface.vue";
import PanoStickersNodeSurface from "../components/PanoStickersNodeSurface.vue";
import PanoStudioNodeSurface from "../components/PanoStudioNodeSurface.vue";
import { STUDIO_PICTURE_RADIUS, STUDIO_SURFACE_FILL } from "../pano_studio_surface.js";
import { stickersNodeSurfaceModel } from "../pano_stickers_node_surface.js";
import { installPanoSuiteStylesheet } from "../pano_styles.js";
import { installStudioStylesheet } from "../studio/stylesheet.js";
import { bindWheelCaptureRoot } from "../pano_wheel.js";
import {
  assignFreshDomWidgetRenderIdentity,
  removeTrackedDomWidget,
  trackDomWidgetRemoval,
} from "../pano_dom_widget_lifecycle.js";
import { DEFAULT_VIEW_HFOV } from "../pano_space.js";
import { nodeSurface } from "../pano_node_bridge.js";
import { comfy, suppressBuiltInPreviewImgs } from "./media.js";
import { getCachedState } from "./state.js";
import { pauseSurfacePlayback } from "./playback.js";

export function getAnimPreviewWidgetName() {
  return String(
    window?.comfyAPI?.app?.ANIM_PREVIEW_WIDGET
    || comfy.appModule?.ANIM_PREVIEW_WIDGET
    || "$$comfy_animation_preview"
  );
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

export function removeNodeWidget(node, widget) {
  return removeTrackedDomWidget(node, widget);
}

function armPreviewBootMinHeight(node, minHeight = 0, requestDraw = null, durationMs = 1200) {
  const height = Math.max(0, Number(minHeight || 0));
  const surface = nodeSurface(node);
  if (surface.bootMinHeightTimer) {
    clearTimeout(surface.bootMinHeightTimer);
    surface.bootMinHeightTimer = null;
  }
  surface.bootMinHeightActive = height > 0;
  if (height <= 0) return;
  surface.bootMinHeightTimer = setTimeout(() => {
    surface.bootMinHeightTimer = null;
    if (!surface.dom?.widget) return;
    if (!surface.bootMinHeightActive) return;
    surface.bootMinHeightActive = false;
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
  const surface = nodeSurface(node);
  return {
    serialize: false,
    hideOnZoom: false,
    getValue() { return ""; },
    setValue() { },
    getMinHeight() {
      if (surface.bootMinHeightActive) {
        return Math.max(persistentMinHeight, Math.max(0, Number(bootMinHeight || 0)));
      }
      return persistentMinHeight;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      if (surface.bootMinHeightActive) {
        return Math.max(persistentMinHeight, Math.max(0, Number(bootMinHeight || 0)));
      }
      if (persistentMinHeight > 0) return persistentMinHeight;
      return "auto";
    },
    afterResize() {
      surface.userResized = true;
      requestDraw?.();
      if (invalidateHostCanvasOnResize) scheduleResizeSettleDraw(node, 180, requestDraw);
    },
  };
}

function scheduleResizeSettleDraw(node, delayMs = 180, drawCb = null) {
  if (!node) return;
  const surface = nodeSurface(node);
  if (surface.resizeSettleTimer) {
    clearTimeout(surface.resizeSettleTimer);
    surface.resizeSettleTimer = null;
  }
  surface.resizeSettleTimer = setTimeout(() => {
    surface.resizeSettleTimer = null;
    drawCb?.();
    node.setDirtyCanvas?.(true, true);
  }, Math.max(0, Number(delayMs || 0)));
}

// The surface's DOM: its root (the DOM widget's element), the frame, the canvas, the Cutout hint and the host Vue mounts
// into, added to the node as its DOM widget. Returns false when the attach stops here (no preview, or the widget
// could not be added).
export function createSurfaceDom(ctx) {
  const { node, surface, stickersMode, studioSurface, noPreview, bootMinHeight, surfaceMinHeight } = ctx;
  const root = document.createElement("div");
  ensurePreviewModeCss();
  root.className = "pano-node-preview-dom";
  root.classList.add(stickersMode ? "pano-node-preview--stickers" : "pano-node-preview--cutout");
  if (noPreview) root.classList.add("pano-node-preview--no-preview");
  // The wheel over Panorama Studio's surface goes to the graph: it does not look around.
  if (!studioSurface) root.setAttribute("data-capture-wheel", "true");
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
    surface.dom = { widget, root, requestDraw: () => { } };
    return false;
  }

  const wrap = document.createElement("div");
  // The frame's radius, border and background come from .pano-node-frame (web/pano_editor.css); Panorama Studio's
  // surface is its dark fill with the picture's corners (pano_studio_surface.js), the picture centered on it.
  wrap.className = studioSurface ? "pano-studio-node-frame" : "pano-node-frame";
  wrap.style.cssText = [
    "position:absolute",
    "inset:0",
    "overflow:hidden",
    ...(studioSurface ? [`background:${STUDIO_SURFACE_FILL}`, `border-radius:${STUDIO_PICTURE_RADIUS}px`] : []),
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
    studioSurface ? "cursor:default" : "cursor:grab",
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
    "font:600 15px var(--pano-font-family-compact)",
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
  const wheelCaptureCleanup = studioSurface ? () => {} : bindWheelCaptureRoot(root);

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
    armPreviewBootMinHeight(node, bootMinHeight, () => surface.dom?.requestDraw?.());
    widget = trackDomWidgetRemoval(assignFreshDomWidgetRenderIdentity(node.addDOMWidget(
      getAnimPreviewWidgetName(),
      "preview",
      root,
      createCoreManagedDomWidgetOptions(
        node,
        () => surface.dom?.requestDraw?.(),
        bootMinHeight,
      surfaceMinHeight,
      false,
      ),
    )));
  } catch {
    return false;
  }
  Object.assign(ctx, { root, wrap, canvas, cutoutHint, nodeSurfaceHost, wheelCaptureCleanup, widget });
  return true;
}

// The model the surface's Vue component shows.
export function createSurfaceModel(ctx) {
  const { node, stickersMode, studioSurface } = ctx;
  return reactive(stickersMode
    ? {
      ...stickersNodeSurfaceModel(getCachedState(node)),
      importing: false,
      dropActive: false,
      viewUnavailable: false,
      playable: false,
      playing: false,
      ...(studioSurface ? { status: { mode: "panorama", shot: "", size: "", ratio: 2, cap: "" }, layout: null } : {}),
    }
    : {
      ...cutoutNodeSurfaceModel(getCachedState(node)),
      viewUnavailable: false,
      aspectOpen: false,
      aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((value) => ({ value, label: value })),
    });
}

// Mounts the surface's Vue component into its host, and routes the component's actions.
export function mountSurfaceVue(ctx) {
  const {
    node, surface, media, canvas, stickersMode, studioSurface, nodeSurfaceHost, nodeSurfaceSession, nodeSurfaceUiModel,
    surfacePlayback, requestDraw, flushNodeSurfaceGesture, addNodeStickerFile,
  } = ctx;
  ctx.nodeSurfaceVueApp = null;
  ctx.nodeSurfaceMounted = false;
  if (nodeSurfaceHost && nodeSurfaceSession) {
    try {
      void installPanoSuiteStylesheet();
      // Panorama Studio's surface takes the new UI's look (docs/design.md "Panorama Studio のノード上の表示").
      if (studioSurface) {
        installStudioStylesheet().then(() => {
          ctx.studioStyled = true;
          requestDraw();
        });
      }
      ctx.nodeSurfaceVueApp = createApp(studioSurface ? PanoStudioNodeSurface : (stickersMode ? PanoStickersNodeSurface : PanoCutoutNodeSurface), {
        model: nodeSurfaceUiModel,
        onAction: (action) => {
          if (action?.type === "toggle-playback") {
            flushNodeSurfaceGesture();
            if (surfacePlayback) surfacePlayback.playback.toggle();
            else media.ownOutputVideo?.player.toggle();
            requestDraw();
            return;
          }
          pauseSurfacePlayback(ctx);
          if (action?.type === "open-editor") {
            flushNodeSurfaceGesture();
            if (!stickersMode) nodeSurfaceUiModel.aspectOpen = false;
            surface.openEditor?.();
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
            const view = surface.view || { yaw: 0, pitch: 0, fov: DEFAULT_VIEW_HFOV };
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
              surface.view = buildCutoutPanoramaViewFromShot(shot, {
                width: canvas.width,
                height: canvas.height,
              });
            }
          }
          const safeRect = surface.cutoutFrame?.safeRect || null;
          nodeSurfaceUiModel.aspectOpen = false;
          if (nodeSurfaceSession.apply({ ...resolvedAction, safeRect })) requestDraw();
        },
      });
      ctx.nodeSurfaceVueApp.mount(nodeSurfaceHost);
      ctx.nodeSurfaceMounted = true;
    } catch {
      ctx.nodeSurfaceVueApp = null;
      ctx.nodeSurfaceMounted = false;
    }
  }
}
