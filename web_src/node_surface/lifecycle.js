// The on-node surface of Stickers, Cutout and Panorama Studio from attach to teardown (docs/studio-node-surface.md "描画と
// 後始末", docs/legacy-node-surfaces.md): the controller that picks the route, the attach that puts the parts of
// node_surface/ together around one context object, the animation frame loop, the node's hooks, and the teardown.
import { acquirePreviewView } from "../pano_preview_view.js";
import { isPanoramaPreviewNodeName } from "../pano_preview_identity.js";
import { createPanoCanvas, releasePanoCanvas } from "../pano_diagnostics.js";
import { CUTOUT_NODE_SURFACE_MIN_HEIGHT } from "../pano_cutout_node_surface.js";
import { createStudioStatus } from "../pano_studio_status.js";
import { studioSurfaceLayout } from "../pano_studio_surface.js";
import {
  BACKGROUND_COLOR_WIDGET_NAMES,
  BACKGROUND_INPUT_NAMES,
  HANDOFF_INPUT_NAMES,
  STICKER_INPUT_NAMES,
  isTrackedMediaInputConnectionChange,
} from "../pano_preview_video.js";
import { chainWidgetCallback } from "../pano_widget_callback.js";
import { bindStickerDropTarget, dragHasStickerImageFile, isStickerImageFile } from "../pano_sticker_file_import.js";
import { runExternalStickerSync } from "../pano_external_sticker_sync.js";
import { editorOpen, mediaCache, nodeSurface, stateSync } from "../pano_node_bridge.js";
import {
  disposeNodeOutputVideoCache,
  executedRefreshMonitor,
  invalidateBackgroundPreviewMedia,
  sharedPreviewImageCache,
  showOwnNodeOutput,
  studioSurfaceDraws,
  suppressBuiltInPreviewImgs,
} from "./media.js";
import { getCachedState, getWidget, surfaceSceneState } from "./state.js";
import { createSurfaceDom, createSurfaceModel, getAnimPreviewWidgetName, mountSurfaceVue, removeNodeWidget } from "./dom.js";
import { createSurfacePlayback, syncLegacyVideo, syncSurfacePlayback } from "./playback.js";
import { createSurfaceEditing } from "./editing.js";
import { bindSurfacePointer, createSurfaceGestures } from "./pointer.js";
import { drawStudioPicture, studioStatusOptions } from "./studio_picture.js";
import { drawCanvas } from "./legacy_picture.js";

function getActivePreviewBackend(node) {
  return nodeSurface(node)?.dom?.widget ? "dom" : "none";
}

function getNodeTypeName(node) {
  return String(node?.comfyClass || node?.type || node?.title || "");
}

function isStandalonePreviewNode(node) {
  return isPanoramaPreviewNodeName(getNodeTypeName(node));
}

function getPreviewController(node) {
  const surface = nodeSurface(node);
  if (surface.controller) return surface.controller;
  const controller = {
    activeBackend: "none",
    attach(options = {}) {
      const mode = String(options.mode || "stickers") === "cutout" ? "cutout" : "stickers";
      const targetBackend = "dom";
      const activeBackend = getActivePreviewBackend(node);
      this.activeBackend = activeBackend;
      const currentMode = String(surface.mode || "stickers") === "cutout" ? "cutout" : "stickers";
      const currentNoPreview = surface.noPreview === true;
      const requestedNoPreview = options.noPreview === true;
      const sameRoute = activeBackend === targetBackend
        && activeBackend !== "none"
        && currentMode === mode
        && currentNoPreview === requestedNoPreview;
      if (sameRoute) {
        surface.mode = mode;
        surface.noPreview = requestedNoPreview;
        surface.openEditor = typeof options.onOpen === "function" ? options.onOpen : surface.openEditor;
        return;
      }
      if (activeBackend !== "none") teardownPreview(node);
      attachPanoramaPreviewImpl(node, { ...options, mode });
      this.activeBackend = getActivePreviewBackend(node);
    },
    rebind(options = {}) {
      const mode = String(options.mode || nodeSurface(node).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      teardownPreview(node);
      this.activeBackend = "none";
      this.attach({ ...options, mode });
    },
    teardown() {
      teardownPreview(node);
      this.activeBackend = "none";
    },
  };
  surface.controller = controller;
  return controller;
}

function teardownPreview(node, options = {}) {
  if (!node) return;
  executedRefreshMonitor.unregister(node);
  const surface = nodeSurface(node);
  const dom = surface.dom;
  try {
    surface.restore?.();
  } catch {
    // ignore
  }
  surface.restore = null;

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

  surface.dom = null;
  surface.noPreview = false;
  if (surface.bootMinHeightTimer) {
    clearTimeout(surface.bootMinHeightTimer);
    surface.bootMinHeightTimer = null;
  }
  surface.bootMinHeightActive = false;

}

function attachPanoramaPreviewImpl(node, options = {}) {
  const surface = nodeSurface(node);
  const media = mediaCache(node);
  const sync = stateSync(node);
  if (isStandalonePreviewNode(node)) return;
  surface.mode = String(options.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const stickersMode = surface.mode === "stickers";
  // Panorama Studio's surface shows the Camera's output, without editing; it plays from its play button (ADR 0052).
  const studioSurface = stickersMode && node.__panoStudio === true;
  const stickerDrop = stickersMode && !studioSurface;
  // Panorama Studio's surface is the Camera's output: it does not look around (ADR 0049).
  const panoramaInteractiveView = surface.mode !== "cutout" && !studioSurface;
  surface.noPreview = options.noPreview === true;
  surface.openEditor = typeof options.onOpen === "function" ? options.onOpen : null;
  if (surface.dom?.widget) return;
  if (typeof node.addDOMWidget !== "function") {
    return;
  }

  const noPreview = options.noPreview === true;
  const bootMinHeight = noPreview ? 0 : 56;
  const surfaceMinHeight = noPreview ? 0 : CUTOUT_NODE_SURFACE_MIN_HEIGHT;

  // The surface's context: what the parts of node_surface/ share for this attach, under the names they had as one closure.
  // Each part reads what the parts before it made and adds its own, in the order the surface is put together.
  const ctx = {
    node,
    surface,
    media,
    sync,
    stickersMode,
    studioSurface,
    stickerDrop,
    panoramaInteractiveView,
    noPreview,
    bootMinHeight,
    surfaceMinHeight,
  };
  if (!createSurfaceDom(ctx)) return;
  createDrawLoop(ctx);
  ctx.nodeSurfaceUiModel = createSurfaceModel(ctx);
  ctx.surfacePlayback = createSurfacePlayback(ctx);
  createSurfaceEditing(ctx);
  createSurfaceGestures(ctx);
  mountSurfaceVue(ctx);
  observeSurfaceSize(ctx);
  bindSurfacePointer(ctx);
  chainNodeHooks(ctx);
  surface.restore = () => restoreDom(ctx);

  const { nodeSurfaceSession, nodeSurfaceMounted, nodeSurfaceUiModel, widget, root, canvas, requestDraw, state, cutoutHint } = ctx;
  surface.cutout = nodeSurfaceSession && nodeSurfaceMounted
    && !stickersMode ? { session: nodeSurfaceSession, model: nodeSurfaceUiModel }
    : null;
  surface.stickers = nodeSurfaceSession && nodeSurfaceMounted
    && stickersMode ? { session: nodeSurfaceSession, model: nodeSurfaceUiModel }
    : null;
  surface.dom = {
    widget,
    root,
    canvas,
    requestDraw,
    state,
    emptyHintEl: cutoutHint,
    nodeSurface: surface.cutout,
  };

  executedRefreshMonitor.register(node);
  // A node attached before it is in a graph syncs from onAdded (pano_editor_extension.js).
  if (node.graph) runExternalStickerSync(node, "attach");
  requestDraw();
}

// The animation frame loop: its state (the surface's `dom.state`), requestDraw and the frame callback, and the shared
// three.js view the surface draws through.
function createDrawLoop(ctx) {
  const { studioSurface } = ctx;
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

  // Panorama Studio's status, worked out again only when what it is made from changes.
  const studioStatus = createStudioStatus();
  const requestDraw = () => {
    if (state.destroyed) return;
    state.needsDraw = true;
    if (!state.inTick && !state.raf) state.raf = requestAnimationFrame(ctx.tick);
  };
  // The on-node surface draws through the three.js view it shares with the Preview nodes.
  // Panorama Studio draws 3D items too, so it hears when one loads or its splats are sorted again.
  const surfaceView = acquirePreviewView(requestDraw, { items: studioSurface });
  // Open Studio's width with its label (studioSurfaceLayout's openWidth), measured once the new UI's stylesheet applies;
  // null until then (Open Studio alone at the center, the play button after).
  ctx.studioOpenWidth = null;
  ctx.studioStyled = false;
  // Panorama Studio's live ERP (Panorama mode) is put here, then copied into the surface's canvas.
  const studioErpCanvas = studioSurface ? createPanoCanvas({ label: "node.surface.erp" }) : null;
  if (studioSurface) studioSurfaceDraws.add(requestDraw);
  ctx.tick = (ts) => tickSurface(ctx, ts);
  Object.assign(ctx, { state, studioStatus, requestDraw, surfaceView, studioErpCanvas });
}

// One animation frame (ctx.tick): the view's inertia, the playback, Panorama Studio's line, then the picture.
function tickSurface(ctx, ts) {
  const {
    node, canvas, wrap, state, studioSurface, surfaceView, studioErpCanvas, surfacePlayback, studioStatus,
    nodeSurfaceUiModel, interaction, studioOpenButton,
  } = ctx;
  state.raf = 0;
  state.inTick = true;
  let moving = false;
  try {
    moving = interaction.stepInertia(ts);
    if (state.needsDraw || moving) {
      state.needsDraw = false;
      if (surfacePlayback) syncSurfacePlayback(ctx);
      else syncLegacyVideo(ctx);
      // Panorama Studio's line first: the picture takes the output's shape from it.
      if (studioSurface) {
        const status = studioStatus(studioStatusOptions(node), () => surfaceSceneState(node, getCachedState(node)));
        if (status) nodeSurfaceUiModel.status = status;
      }
      // Collapsed or under the node's open editor, the surface does not draw and frees its textures and loaded 3D items.
      if (node.flags?.collapsed || editorOpen(node)) {
        surfaceView.release();
        surfaceView.releaseWorld();
      }
      else if (studioSurface) {
        // Open Studio's width with its label, from the button while it shows it.
        if (ctx.studioStyled && studioOpenButton?.offsetWidth > 0 && !studioOpenButton.classList.contains("is-compact")) ctx.studioOpenWidth = studioOpenButton.offsetWidth;
        const layout = studioSurfaceLayout(wrap.clientWidth, wrap.clientHeight, nodeSurfaceUiModel.status.ratio, {
          playable: nodeSurfaceUiModel.playable,
          openWidth: ctx.studioOpenWidth,
        });
        if (JSON.stringify(layout) !== JSON.stringify(nodeSurfaceUiModel.layout)) nodeSurfaceUiModel.layout = layout;
        drawStudioPicture(node, canvas, surfaceView, layout, studioErpCanvas);
      } else drawCanvas(node, canvas, surfaceView);
      nodeSurfaceUiModel.viewUnavailable = surfaceView.failed;
    }
  } finally {
    state.inTick = false;
  }
  if ((moving || state.needsDraw) && !state.raf) state.raf = requestAnimationFrame(ctx.tick);
}

// Draws again when the surface's frame or Open Studio's button changes size.
function observeSurfaceSize(ctx) {
  const { wrap, studioSurface, nodeSurfaceHost, surfacePlayback, requestDraw, state } = ctx;
  // A surface that goes out of sight (collapse, subgraph, another graph) releases its playback at once.
  // Panorama Studio's surface draws a new size at once: resizing its canvas clears it, and this callback comes after this
  // frame's animation frame callbacks, so a draw left for the next frame would show the cleared or stretched picture
  // once (docs/studio-node-surface.md "描画と後始末"; the stage's flush, pano_frame_scheduler.js).
  const drawResized = () => {
    if (surfacePlayback) syncSurfacePlayback(ctx);
    requestDraw();
    if (studioSurface && state.raf && !state.inTick) {
      cancelAnimationFrame(state.raf);
      ctx.tick(performance.now());
    }
  };
  const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(drawResized) : null;
  resizeObserver?.observe(wrap);
  // Open Studio's width changes with its label (a narrow node, the font loading): the buttons are laid out again with it,
  // in the same frame.
  const studioOpenButton = studioSurface ? nodeSurfaceHost?.querySelector(".pano-studio-node-open") : null;
  const openObserver = studioOpenButton && typeof ResizeObserver !== "undefined" ? new ResizeObserver(drawResized) : null;
  if (studioOpenButton) openObserver?.observe(studioOpenButton);
  Object.assign(ctx, { drawResized, resizeObserver, studioOpenButton, openObserver });
}

// The node's hooks and widget callbacks the surface chains (each calls the one before with the node's `this` and
// arguments), and the drop of an image file on the legacy Stickers node.
function chainNodeHooks(ctx) {
  const { node, root, media, state, stickersMode, stickerDrop, studioSurface, requestDraw, nodeSurfaceUiModel, addNodeStickerFile } = ctx;
  // The widgets the surface draws from: a change ComfyUI reports through the widget's callback draws again
  // (chained with the callback's own `this` and arguments, pano_widget_callback.js). Panorama Studio's status follows
  // its size and background widgets too.
  const watchedWidgets = (studioSurface
    ? ["state_json", "background_color", "background_range", "megapixels", "multiple"]
    : ["state_json", ...BACKGROUND_COLOR_WIDGET_NAMES]
  ).map((name) => getWidget(node, name)).filter(Boolean);
  const widgetRestores = watchedWidgets.map((widget) => chainWidgetCallback(widget, () => requestDraw()));

  const onRemovedPrev = node.onRemoved;
  const onResizePrev = node.onResize;
  const onExecutedPrev = node.onExecuted;
  const onDragOverPrev = node.onDragOver;
  const onDragDropPrev = node.onDragDrop;
  ctx.dropCueTimer = null;
  const showDropCue = () => {
    if (!stickersMode) return;
    nodeSurfaceUiModel.dropActive = true;
    if (ctx.dropCueTimer) clearTimeout(ctx.dropCueTimer);
    ctx.dropCueTimer = setTimeout(() => {
      ctx.dropCueTimer = null;
      nodeSurfaceUiModel.dropActive = false;
    }, 140);
  };
  const stickerDragOverHook = stickerDrop ? function (event) {
    const previous = onDragOverPrev ? onDragOverPrev.apply(this, arguments) : false;
    if (previous === true) return true;
    if (!dragHasStickerImageFile(event?.dataTransfer)) return false;
    showDropCue();
    return true;
  } : null;
  const stickerDragDropHook = stickerDrop ? function (event) {
    const previous = onDragDropPrev ? onDragDropPrev.apply(this, arguments) : false;
    if (previous === true) return true;
    const file = Array.from(event?.dataTransfer?.files || []).find((entry) => isStickerImageFile(entry));
    if (!file) return false;
    if (ctx.dropCueTimer) clearTimeout(ctx.dropCueTimer);
    ctx.dropCueTimer = null;
    nodeSurfaceUiModel.dropActive = false;
    void addNodeStickerFile(file);
    return true;
  } : null;
  if (stickerDrop) {
    node.onDragOver = stickerDragOverHook;
    node.onDragDrop = stickerDragDropHook;
  }
  const stickerDropTargetCleanup = stickerDrop ? bindStickerDropTarget(root, {
    onActive: (active) => {
      if (active) {
        showDropCue();
        return;
      }
      if (ctx.dropCueTimer) clearTimeout(ctx.dropCueTimer);
      ctx.dropCueTimer = null;
      nodeSurfaceUiModel.dropActive = false;
    },
    onDrop: (file) => {
      void addNodeStickerFile(file);
    },
  }) : () => {};
  const onExecutedHook = function (output) {
    media.outputFromRun = true;
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
    // `sticker_state` decides whether the result's Pose handoff applies (ADR 0030).
    const stickerInputChanged = isTrackedMediaInputConnectionChange(node, type, slotIndex, [...STICKER_INPUT_NAMES, ...HANDOFF_INPUT_NAMES]);
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
    nodeSurface(this).userResized = true;
    requestDraw();
    return out;
  };
  node.onResize = onResizeHook;
  const onRemovedHook = function () {
    restoreDom(ctx);
    executedRefreshMonitor.unregister(this);
    return onRemovedPrev ? onRemovedPrev.apply(this, arguments) : undefined;
  };
  node.onRemoved = onRemovedHook;
  Object.assign(ctx, { widgetRestores, stickerDropTargetCleanup });
  ctx.hooks = {
    onRemovedPrev,
    onResizePrev,
    onExecutedPrev,
    onDragOverPrev,
    onDragDropPrev,
    onConnectionsChangePrev,
    stickerDragOverHook,
    stickerDragDropHook,
    onExecutedHook,
    onConnectionsChangeHook,
    onResizeHook,
    onRemovedHook,
  };
}

// Takes the surface off the node, in this order (docs/studio-node-surface.md "描画と後始末").
function restoreDom(ctx) {
  const {
    node, surface, sync, state, canvas, stickersMode, surfaceView, studioErpCanvas, requestDraw, surfacePlayback,
    nodeSurfaceSession, nodeSurfaceVueApp, resizeObserver, openObserver, flushNodeSurfaceGesture,
    cancelCutoutNodeSurfaceGesture, cancelCutoutDrag, stickerDropTargetCleanup, wheelCaptureCleanup, onNodeSurfaceKeyDown,
    nodeSurfaceQueueFlusher, unregisterExternalStickerSync, viewportRestoreScheduler, widgetRestores,
  } = ctx;
  const {
    onRemovedPrev, onResizePrev, onExecutedPrev, onDragOverPrev, onDragDropPrev, onConnectionsChangePrev,
    stickerDragOverHook, stickerDragDropHook, onExecutedHook, onConnectionsChangeHook, onResizeHook, onRemovedHook,
  } = ctx.hooks;
  state.destroyed = true;
  resizeObserver?.disconnect?.();
  openObserver?.disconnect?.();
  stickersMode ? flushNodeSurfaceGesture() : cancelCutoutNodeSurfaceGesture();
  canvas.removeEventListener("lostpointercapture", cancelCutoutDrag);
  stickerDropTargetCleanup();
  wheelCaptureCleanup();
  window.removeEventListener("keydown", onNodeSurfaceKeyDown, true);
  sync.flushers.delete(nodeSurfaceQueueFlusher);
  nodeSurfaceSession?.destroy?.();
  nodeSurfaceVueApp?.unmount?.();
  if (surfacePlayback) {
    // dispose() removes the VIDEOs' src and load()s them, which frees their decoders now instead of
    // when the detached elements are collected.
    surfacePlayback.playback.dispose();
    surfacePlayback.video.remove();
    surfacePlayback.stickerVideo.remove();
    releasePanoCanvas(surfacePlayback.still);
    releasePanoCanvas(surfacePlayback.stickerStill);
    if (surface.playback === surfacePlayback) surface.playback = null;
  }
  surface.studioInputs?.dispose();
  surface.studioInputs = null;
  surfaceView.dispose();
  if (studioErpCanvas) releasePanoCanvas(studioErpCanvas);
  studioSurfaceDraws.delete(requestDraw);
  surface.scene = null;
  // The paint display (its engine and raster canvases) goes with the surface; a surface attached again makes it again.
  surface.paintDisplay?.dispose?.();
  surface.paintDisplay = null;
  surface.paintInput = null;
  unregisterExternalStickerSync();
  viewportRestoreScheduler.dispose();
  if (ctx.dropCueTimer) clearTimeout(ctx.dropCueTimer);
  ctx.dropCueTimer = null;
  sharedPreviewImageCache.disposeOwner(node);
  disposeNodeOutputVideoCache(node);
  if (state.raf) cancelAnimationFrame(state.raf);
  state.raf = 0;
  if (surface.cutout?.session === nodeSurfaceSession) surface.cutout = null;
  if (surface.stickers?.session === nodeSurfaceSession) surface.stickers = null;
  surface.cutoutState = null;
  surface.stickersState = null;
  surface.cutoutFrame = null;
  if (surface.resizeSettleTimer) {
    clearTimeout(surface.resizeSettleTimer);
    surface.resizeSettleTimer = null;
  }
  surface.dom = null;
  surface.restore = null;
  if (node.onResize === onResizeHook) node.onResize = onResizePrev;
  if (node.onExecuted === onExecutedHook) node.onExecuted = onExecutedPrev;
  if (node.onConnectionsChange === onConnectionsChangeHook) node.onConnectionsChange = onConnectionsChangePrev;
  widgetRestores.forEach((restore) => restore());
  if (node.onDragOver === stickerDragOverHook) node.onDragOver = onDragOverPrev;
  if (node.onDragDrop === stickerDragDropHook) node.onDragDrop = onDragDropPrev;
  if (node.onRemoved === onRemovedHook) node.onRemoved = onRemovedPrev;
}

export function attachCutoutPreview(node, options = {}) {
  const controller = getPreviewController(node);
  controller.attach({
    ...options,
    mode: "cutout",
  });
}

export function attachPanoramaPreview(node, options = {}) {
  if (isStandalonePreviewNode(node)) return;
  const controller = getPreviewController(node);
  controller.attach(options);
}
