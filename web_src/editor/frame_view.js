// The Frame view: looking through the Camera's shot, its gate in the UI-safe rect, and moving the shot by
// panning, dragging and the wheel.
import {
  fitFocalPx,
  gateRectFromFocal,
  stepCutoutFovPairByWheel,
} from "../pano_cutout_view_math.js";
import {
  FLOATING_RIGHT_RESERVED_PX,
  FRAME_GATE_EDGE_GAP_PX,
  FRAME_GATE_OCCUPANCY,
  FRAME_GATE_SIDE_GAP_PX,
} from "./constants.js";

export function createFrameView(deps) {
  const {
    canvas, editor, floatingRightEl, floatingTopEl, frameRailEl, paintDockEl, readOnly,
    runtime, shotEditor, timers, toolRailEl, uiState, videoTransportEl,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let commitAndRefreshNode, getActiveCutoutShot, pushHistory, requestDraw, updateCursor,
    updateSidePanel, writePose;

  function measureFrameSafeRect() {
    if (!canvas) return null;
    const canvasBounds = canvas.getBoundingClientRect?.();
    const scaleX = Number(canvasBounds?.width || 0) > 0 ? canvas.width / canvasBounds.width : 1;
    const scaleY = Number(canvasBounds?.height || 0) > 0 ? canvas.height / canvasBounds.height : 1;
    runtime.frameCanvasScale = Math.min(scaleX, scaleY);
    let left = 24;
    let top = 24;
    const right = Math.max(left + 1, canvas.width - 24);
    let bottom = Math.max(top + 1, canvas.height - 24);
    const railBounds = toolRailEl?.getBoundingClientRect?.();
    const frameRailBounds = frameRailEl?.getBoundingClientRect?.();
    let reservedSide = 24;
    if (railBounds && canvasBounds && railBounds.width > 0 && railBounds.height > 0) {
      reservedSide = Math.max(reservedSide, (railBounds.right - canvasBounds.left) * scaleX + FRAME_GATE_SIDE_GAP_PX);
    }
    if (frameRailBounds && canvasBounds && frameRailBounds.width > 0 && frameRailBounds.height > 0
      && uiState.frameRail?.visible === true) {
      reservedSide = Math.max(reservedSide, (canvasBounds.right - frameRailBounds.left) * scaleX + FRAME_GATE_SIDE_GAP_PX);
    }
    left = Math.max(left, reservedSide);
    const symmetricRight = Math.min(right, canvas.width - reservedSide);
    let reservedVertical = 24;
    const topBounds = floatingTopEl?.getBoundingClientRect?.();
    if (topBounds && canvasBounds && topBounds.width > 0 && topBounds.height > 0) {
      reservedVertical = Math.max(reservedVertical, (topBounds.bottom - canvasBounds.top) * scaleY + FRAME_GATE_EDGE_GAP_PX);
    }
    // Only measure chrome whose size is independent of the active shot. The
    // gate scale is derived from this rect, so anything shot-dependent here
    // closes a feedback loop (shot -> layout -> safe rect -> scale -> the ERP
    // visibly zooming whenever the aspect changes). `.pano-floating-right`
    // hosts the cutout camera preview, whose box follows the shot aspect, so it
    // is reserved by its fixed collapsed height instead of its measured one.
    [paintDockEl, videoTransportEl].forEach((element) => {
      if (!element || !canvasBounds) return;
      const style = getComputedStyle(element);
      if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) <= 0) return;
      const bounds = element.getBoundingClientRect?.();
      if (!bounds || bounds.width <= 0 || bounds.height <= 0) return;
      reservedVertical = Math.max(reservedVertical, (canvasBounds.bottom - bounds.top) * scaleY + FRAME_GATE_EDGE_GAP_PX);
    });
    if (floatingRightEl && canvasBounds) {
      const style = getComputedStyle(floatingRightEl);
      const visible = style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) > 0;
      if (visible) {
        reservedVertical = Math.max(reservedVertical, (FLOATING_RIGHT_RESERVED_PX + FRAME_GATE_EDGE_GAP_PX) * scaleY);
      }
    }
    top = Math.max(top, reservedVertical);
    bottom = Math.max(top + 1, Math.min(bottom, canvas.height - reservedVertical));
    return {
      x: left,
      y: top,
      w: Math.max(1, symmetricRight - left),
      h: Math.max(1, bottom - top),
    };
  }

  // The presentation scale is a pure function of the UI-safe rect and the shot:
  // the gate is always the largest rectangle of the shot's aspect that fits.
  // There is no stored scale, so nothing can drift, ratchet, or go stale.
  //
  // Two useful properties fall out of this and need no special-case code:
  //   - Aspect changes hold vFOV, and every supported aspect is height-bound in
  //     a landscape viewport, so the fit is unchanged and the ERP does not move.
  //   - Wheel scales both tangents by k, which scales the fit by 1/k, so the
  //     gate keeps its screen size while the ERP behind it zooms.
  function getFrameViewLayout(shot = getActiveCutoutShot()) {
    if (!shot || !canvas) return null;
    const safeRect = runtime.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, canvas.width - 48),
      h: Math.max(1, canvas.height - 48),
    };
    return gateRectFromFocal(safeRect, shot, FRAME_GATE_OCCUPANCY * fitFocalPx(safeRect, shot));
  }

  function getFrameViewRect(shot = getActiveCutoutShot()) {
    const layout = getFrameViewLayout(shot);
    return layout ? { x: layout.x, y: layout.y, w: layout.w, h: layout.h } : null;
  }

  function supportsFramePainting() {
    return shotEditor && !!getActiveCutoutShot();
  }

  // One wheel step `direction` (readWheelDirection's: > 0 away) at canvas point p in the Frame view
  // (docs/editor-interaction.md "Frame 表示のホイール"): the legacy Cutout's shot, which has no position, changes its
  // FOV.
  function wheelFrameView(p, direction) {
    if (zoomFrameViewAt(p, direction)) requestDraw({ localOnly: true });
  }

  function zoomFrameViewAt(anchor, direction) {
    const shot = getActiveCutoutShot();
    if (!shot || shot.locked === true) return false;
    const next = stepCutoutFovPairByWheel(shot, direction);
    if (!next) return false;
    // The gate keeps its screen size on its own: scaling both tangents by k
    // scales the aspect fit by 1/k, so no presentation compensation is needed.
    // The ERP behind the gate zooms instead, which is the intent. Past the
    // context's 85-degree reach the canvas shows the neutral background
    // (frameViewContext, ADR 0021 D5), as it does for the inspector's angle.
    writePose(shot, next);
    void anchor;
    scheduleFrameWheelCommit();
    updateSidePanel();
    return true;
  }

  // A run of wheel steps in the Frame view is one Undo step, taken once the wheel rests.
  function scheduleFrameWheelCommit() {
    editor.frameWheelChanged = true;
    timers.clear(editor.frameWheelCommitTimer);
    editor.frameWheelCommitTimer = timers.set(() => {
      editor.frameWheelCommitTimer = 0;
      if (!editor.frameWheelChanged) return;
      editor.frameWheelChanged = false;
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
    }, 180);
  }

  // A drag that turns the Camera where it stands (the Frame view's left drag).
  function startPanFrame(p, pointerId) {
    const shot = getActiveCutoutShot();
    if (!shot || readOnly || shot.locked === true) return;
    editor.interaction = {
      kind: "pan_frame", shot, last: p, changed: false,
    };
    updateCursor(p);
    canvas.setPointerCapture(pointerId);
  }

  function flushFrameWheelCommit() {
    timers.clear(editor.frameWheelCommitTimer);
    editor.frameWheelCommitTimer = 0;
    if (!editor.frameWheelChanged) return false;
    editor.frameWheelChanged = false;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    return true;
  }

  return {
    connect(api) {
      ({
        commitAndRefreshNode, getActiveCutoutShot, pushHistory, requestDraw, updateCursor,
        updateSidePanel, writePose,
      } = api);
    },
    measureFrameSafeRect, getFrameViewLayout, getFrameViewRect, supportsFramePainting, wheelFrameView,
    startPanFrame, flushFrameWheelCommit,
  };
}
