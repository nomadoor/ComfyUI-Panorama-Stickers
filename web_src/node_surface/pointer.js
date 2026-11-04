// The on-node surface's input: the gesture in progress and its commit, the pointer, key and wheel handlers, and the graph
// viewport kept still while the wheel looks around.
import { createPanoInteractionController } from "../pano_interaction_controller.js";
import {
  beginCutoutRollGesture,
  resolveCutoutNodeSurfaceShot,
  updateCutoutRollGesture,
} from "../pano_cutout_node_surface.js";
import { fitFocalPx } from "../pano_cutout_view_math.js";
import { surfacePoseStickers } from "../pano_stickers_node_surface.js";
import {
  moveStickerToScreenPoint,
  pickStickerAtPoint,
  rotateStickerFromPointer,
  scaleStickerFromPointer,
} from "../pano_sticker_geometry.js";
import { readWheelDirection } from "../pano_wheel.js";
import { createViewportRestoreScheduler } from "../pano_viewport_restore.js";
import { DEFAULT_VIEW_HFOV } from "../pano_space.js";
import { comfy } from "./media.js";
import { getCachedState, loadSharedUiSettings, surfaceFrame } from "./state.js";
import { stickersSurfaceProjection } from "./legacy_picture.js";
import { pauseSurfacePlayback } from "./playback.js";

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

function lockGraphViewportSnapshot() {
  const ds = comfy.app?.canvas?.ds;
  if (!ds) return null;
  const offset = Array.isArray(ds.offset) ? [Number(ds.offset[0] || 0), Number(ds.offset[1] || 0)] : [0, 0];
  return { scale: Number(ds.scale || 1), offset };
}

function restoreGraphViewportSnapshot(snapshot) {
  if (!snapshot) return;
  const ds = comfy.app?.canvas?.ds;
  if (!ds) return;
  ds.scale = snapshot.scale;
  if (Array.isArray(ds.offset)) {
    ds.offset[0] = snapshot.offset[0];
    ds.offset[1] = snapshot.offset[1];
  }
}

// The gesture in progress (a drag on the canvas, or the Cutout's wheel until it settles) and how it ends: committed
// before anything else edits the state, or cancelled.
export function createSurfaceGestures(ctx) {
  const { canvas, sync, nodeSurfaceSession } = ctx;
  ctx.cutoutDrag = null;
  ctx.stickerDrag = null;
  ctx.nodeSurfaceWheelCommitTimer = null;
  ctx.nodeSurfaceWheelActive = false;
  const commitNodeSurfaceWheel = () => {
    if (ctx.nodeSurfaceWheelCommitTimer) {
      clearTimeout(ctx.nodeSurfaceWheelCommitTimer);
      ctx.nodeSurfaceWheelCommitTimer = null;
    }
    if (!ctx.nodeSurfaceWheelActive) return false;
    ctx.nodeSurfaceWheelActive = false;
    return nodeSurfaceSession?.commitGesture?.() ?? false;
  };
  const flushNodeSurfaceGesture = () => {
    const wheelCommitted = commitNodeSurfaceWheel();
    const pointerId = ctx.cutoutDrag?.pointerId ?? ctx.stickerDrag?.pointerId;
    ctx.cutoutDrag = null;
    ctx.stickerDrag = null;
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
    const pointerId = ctx.cutoutDrag?.pointerId;
    ctx.cutoutDrag = null;
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
    sync.flushers.add(nodeSurfaceQueueFlusher);
  }
  Object.assign(ctx, { commitNodeSurfaceWheel, flushNodeSurfaceGesture, cancelCutoutNodeSurfaceGesture, nodeSurfaceQueueFlusher });
}

// The pointer, key and wheel input of the surface: looking around, the legacy Stickers' grab handles and the Cutout's
// frame, and the events kept from the graph.
export function bindSurfacePointer(ctx) {
  const {
    node, surface, root, wrap, canvas, stickersMode, studioSurface, panoramaInteractiveView, requestDraw,
    nodeSurfaceUiModel, nodeSurfaceSession, surfacePlayback, flushNodeSurfaceGesture, commitNodeSurfaceWheel,
  } = ctx;
  const interaction = createPanoInteractionController({
    getView: () => {
      if (!surface.view) surface.view = { yaw: 0, pitch: 0, fov: DEFAULT_VIEW_HFOV };
      return surface.view;
    },
    setView: (v) => {
      surface.view = v;
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
    if (!stickersMode || studioSurface || !panoramaInteractiveView) return;
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
      const frame = surface.cutoutFrame;
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
      ctx.cutoutDrag = drag;
      return;
    }
    if (!panoramaInteractiveView) return;
    const point = cutoutCanvasPoint(ev);
    const currentState = getCachedState(node);
    const selectedId = String(currentState?.active?.selected_sticker_id || "");
    const projection = stickersSurfaceProjection(node, canvas.width, canvas.height);
    root.focus?.({ preventScroll: true });
    const pick = () => pickStickerAtPoint(surfacePoseStickers(currentState, surfaceFrame(node)), selectedId, point, projection);
    let picked = studioSurface ? null : pick();
    // A Sticker grabbed while the node plays pauses it on the frame on screen, where the grab goes on;
    // an empty drag only looks around.
    if (picked && surfacePlayback?.playback.playing) {
      pauseSurfacePlayback(ctx);
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
      ctx.stickerDrag = {
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
      if (!ctx.cutoutDrag) {
        if (!interaction.state.drag.active) return;
        stopCanvasEventUnlessResizeGrip(ev, eventSurface);
        interaction.moveDrag(ev.clientX, ev.clientY, "pano");
        return;
      }
      if (ctx.cutoutDrag.pointerId !== ev.pointerId || !nodeSurfaceSession) return;
      stopCanvasEventUnlessResizeGrip(ev, eventSurface);
      if (ctx.cutoutDrag.kind === "pan") {
        const point = cutoutCanvasPoint(ev);
        nodeSurfaceSession.updateGesture({
          type: "pan-camera",
          startShot: ctx.cutoutDrag.startShot,
          dx: point.x - ctx.cutoutDrag.startPoint.x,
          dy: point.y - ctx.cutoutDrag.startPoint.y,
          focalPx: ctx.cutoutDrag.focalPx,
          invertX: ctx.cutoutDrag.invertX,
          invertY: ctx.cutoutDrag.invertY,
        });
        return;
      }
      const next = updateCutoutRollGesture(ctx.cutoutDrag.rollGesture, cutoutCanvasPoint(ev), ev);
      if (!next) return;
      ctx.cutoutDrag.rollGesture = next.gesture;
      nodeSurfaceSession.updateGesture({ type: "set-roll", value: next.rollDeg });
      return;
    }
    if (!ctx.stickerDrag && !interaction.state.drag.active) {
      updateStickerHoverCursor(ev);
      return;
    }
    if (ctx.stickerDrag) {
      if (ctx.stickerDrag.pointerId !== ev.pointerId || !nodeSurfaceSession) return;
      stopCanvasEventUnlessResizeGrip(ev, eventSurface);
      const point = cutoutCanvasPoint(ev);
      let next = ctx.stickerDrag.startSticker;
      if (ctx.stickerDrag.kind === "move") {
        next = moveStickerToScreenPoint(
          ctx.stickerDrag.startSticker,
          {
            x: ctx.stickerDrag.startCenter.x + point.x - ctx.stickerDrag.startPoint.x,
            y: ctx.stickerDrag.startCenter.y + point.y - ctx.stickerDrag.startPoint.y,
          },
          ctx.stickerDrag.projection,
        ) ?? next;
      } else if (ctx.stickerDrag.kind === "scale") {
        const distance = Math.hypot(point.x - ctx.stickerDrag.startCenter.x, point.y - ctx.stickerDrag.startCenter.y);
        next = scaleStickerFromPointer(ctx.stickerDrag.startSticker, ctx.stickerDrag.startDistance, distance);
      } else if (ctx.stickerDrag.kind === "rotate") {
        const angle = Math.atan2(point.y - ctx.stickerDrag.startCenter.y, point.x - ctx.stickerDrag.startCenter.x);
        next = rotateStickerFromPointer(ctx.stickerDrag.startSticker, ctx.stickerDrag.startAngle, angle, ev.shiftKey === true);
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
    if (!ctx.cutoutDrag && !ctx.stickerDrag) {
      if (!interaction.state.drag.active) return;
      interaction.endDrag();
      canvas.style.cursor = "grab";
      requestDraw();
      return;
    }
    if (!nodeSurfaceSession) return;
    const pointerId = ctx.cutoutDrag?.pointerId ?? ctx.stickerDrag?.pointerId;
    ctx.cutoutDrag = null;
    ctx.stickerDrag = null;
    try {
      if (canvas.hasPointerCapture?.(pointerId)) canvas.releasePointerCapture?.(pointerId);
    } catch { }
    nodeSurfaceSession.cancelGesture();
    canvas.style.cursor = "grab";
    requestDraw();
  };

  const endDrag = (ev, cancelled = false) => {
    if (!stickersMode) {
      if (!ctx.cutoutDrag) {
        if (!interaction.state.drag.active) return;
        stopCanvasEventUnlessResizeGrip(ev, eventSurface);
        canvas.releasePointerCapture?.(ev.pointerId);
        canvas.style.cursor = "grab";
        interaction.endDrag();
        requestDraw();
        return;
      }
      if (ctx.cutoutDrag.pointerId !== ev.pointerId || !nodeSurfaceSession) return;
      stopCanvasEventUnlessResizeGrip(ev, eventSurface);
      ctx.cutoutDrag = null;
      canvas.releasePointerCapture?.(ev.pointerId);
      canvas.style.cursor = "grab";
      if (cancelled) nodeSurfaceSession.cancelGesture();
      else nodeSurfaceSession.commitGesture();
      updateStickerHoverCursor(ev);
      requestDraw();
      return;
    }
    if (ctx.stickerDrag) {
      if (ctx.stickerDrag.pointerId !== ev.pointerId || !nodeSurfaceSession) return;
      stopCanvasEventUnlessResizeGrip(ev, eventSurface);
      ctx.stickerDrag = null;
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
    if ((!stickersMode && ctx.cutoutDrag) || ctx.stickerDrag) return;
    if (!interaction.state.drag.active) return;
    endDrag(ev);
  });
  const onNodeSurfaceKeyDown = (ev) => {
    const activeElement = document.activeElement;
    if (activeElement !== root && !root.contains(activeElement)) return;
    if (ev.key === "Escape" && (ctx.cutoutDrag || ctx.stickerDrag) && nodeSurfaceSession) {
      cancelCutoutDrag();
      stopCanvasEvent(ev);
      return;
    }
    if (!stickersMode || studioSurface || (ev.key !== "Delete" && ev.key !== "Backspace") || !nodeSurfaceSession) return;
    const target = ev.target;
    const tag = String(target?.tagName || "").toUpperCase();
    if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;
    if (nodeSurfaceUiModel.canDelete !== true) return;
    pauseSurfacePlayback(ctx);
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
    if (!stopCanvasEventUnlessResizeGrip(ev, eventSurface)) return;
    if (!stickersMode) {
      const shot = resolveCutoutNodeSurfaceShot(getCachedState(node));
      if (shot && shot.locked !== true && nodeSurfaceSession) {
        const direction = readWheelDirection(ev);
        if (direction !== 0) {
          if (!ctx.nodeSurfaceWheelActive) {
            flushNodeSurfaceGesture();
            nodeSurfaceSession.beginGesture();
            ctx.nodeSurfaceWheelActive = true;
          }
          const changed = nodeSurfaceSession.updateGesture({
            type: "step-fov",
            direction,
          });
          if (changed) {
            if (ctx.nodeSurfaceWheelCommitTimer) clearTimeout(ctx.nodeSurfaceWheelCommitTimer);
            ctx.nodeSurfaceWheelCommitTimer = setTimeout(commitNodeSurfaceWheel, 180);
            requestDraw();
          } else if (!nodeSurfaceSession.hasGestureChanges()) {
            nodeSurfaceSession.cancelGesture();
            ctx.nodeSurfaceWheelActive = false;
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
  const wheelTargets = studioSurface ? [] : stickersMode ? [wrap, canvas] : [wrap];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((name) => {
    wheelTargets.forEach((target) => target.addEventListener(name, onPreviewWheel, { passive: false, capture: true }));
  });

  ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((name) => {
    canvas.addEventListener(name, (ev) => stopCanvasEventUnlessResizeGrip(ev, eventSurface));
    wrap.addEventListener(name, (ev) => stopCanvasEventUnlessResizeGrip(ev, eventSurface));
  });
  Object.assign(ctx, { interaction, cancelCutoutDrag, onNodeSurfaceKeyDown, viewportRestoreScheduler });
}
