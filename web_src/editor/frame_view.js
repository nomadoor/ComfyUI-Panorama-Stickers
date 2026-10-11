// The Frame view: looking through the Camera's shot, its gate in the UI-safe rect, and moving the shot by
// panning, dragging and the wheel.
import {
  fitFocalPx,
  gateRectFromFocal,
  stepCutoutFovPairByWheel,
} from "../pano_cutout_view_math.js";
import { frameViewContext } from "../pano_editor_view.js";
import { lensPickWindow } from "../pano_lens.js";
import { clamp, wrapYaw } from "../pano_math.js";
import {
  DEFAULT_DISTANCE,
  navigationTarget,
  orbitView,
  panDepth,
  panView,
  reuseWheelPick,
  zoomView,
} from "../pano_space.js";
import { keyMoveView } from "../pano_view_keys.js";
import {
  FLOATING_RIGHT_RESERVED_PX,
  FRAME_GATE_EDGE_GAP_PX,
  FRAME_GATE_OCCUPANCY,
  FRAME_GATE_SIDE_GAP_PX,
} from "./constants.js";

// What the stage says after a wheel in the Frame view without World content, and for how long (ms).
export const FRAME_WHEEL_NOTICE = "The wheel moves the Camera; change the H FOV to zoom";
const FRAME_WHEEL_NOTICE_MS = 2000;

export function createFrameView(deps) {
  const {
    cameraV2, canvas, editor, editorView, floatingRightEl, floatingTopEl, frameRailEl, paintDockEl, readOnly,
    runtime, shotEditor, timers, toolRailEl, uiState, videoTransportEl,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let applySpaceMode, cancelViewTransition, commitAndRefreshNode, contentSphere, getActiveCutoutShot,
    hasSpaceContent, pushHistory, requestDraw, shotViewCamera,
    spaceScale, spaceViewState, stopTimelinePlayback, syncCutoutShot, updateCursor, updateSidePanel, writePose;

  let frameWheel = null;
  // Until when the stage shows frameWheelNotice(), and the timer that draws it away.
  let frameWheelNoticeUntil = 0;
  let frameWheelNoticeTimer = 0;
  // The movement keys moved the Camera since they went down (moveFrameByKeys); endFrameKeyMove() makes it
  // one Undo step.
  let frameKeyMoved = false;

  // The Frame view ends while it shows Panorama Studio's shot (its Camera went, or shoots a 360-degree
  // ERP): the panorama view looks where the shot looked, and in 6DoF stands where it stood, so the view does
  // not jump.
  function leaveFrameView(shot) {
    editor.mode = "pano";
    if (!shot) return;
    cancelViewTransition();
    const distance = spaceViewState().distance;
    editor.viewYaw = wrapYaw(shot.yaw_deg);
    editor.viewPitch = clamp(shot.pitch_deg, -89.9, 89.9);
    editor.viewFov = clamp(shot.hFOV_deg, 35, 140);
    if (editor.spaceMode === "6dof") applySpaceMode({ mode: "6dof", position: [...shot.position], moved: true });
    editor.viewDistance = distance;
    runtime.backgroundDirty = true;
  }

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
  // (docs/editor-interaction.md "Frame 表示のホイール"). Panorama Studio's Camera always dollies toward or away from the
  // point under the pointer; without World content the panorama is at infinity and a dolly changes nothing, so the
  // Camera stays and the stage says how to zoom. The legacy Cutout's shot, which has no position, changes its FOV.
  function wheelFrameView(p, direction) {
    if (cameraV2 && !isFreeFrameView()) {
      frameWheelNoticeUntil = performance.now() + FRAME_WHEEL_NOTICE_MS;
      timers.clear(frameWheelNoticeTimer);
      frameWheelNoticeTimer = timers.set(() => requestDraw({ localOnly: true }), FRAME_WHEEL_NOTICE_MS);
      requestDraw({ localOnly: true });
      return;
    }
    // Edits stop Panorama Studio's playback, so the wheel keys the frame shown.
    stopTimelinePlayback();
    if (cameraV2) zoomFrameAt(p, -direction);
    else if (zoomFrameViewAt(p, direction)) requestDraw({ localOnly: true });
  }

  // The stage's line after a wheel that could not move the picture (wheelFrameView), else nothing.
  function frameWheelNotice() {
    return editor.mode === "frame" && performance.now() < frameWheelNoticeUntil ? FRAME_WHEEL_NOTICE : "";
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
    syncCutoutShot();
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

  // --- The Frame view of Panorama Studio's Camera with World content: moving the view moves the Camera
  // itself, as Blender's camera locked to the view. The drags of the 3D view controls orbit and pan it
  // (pano_view_controls.js, pano_space.js), the wheel moves it toward the point under the pointer, and a
  // left drag still turns it where it stands, as in the Frame view of an ERP.
  function isFreeFrameView() {
    return cameraV2 && editor.mode === "frame" && hasSpaceContent();
  }

  // The Frame view's context (frameViewContext): the canvas rect drawn through the shot and the shot that
  // spans it, or null without a shot.
  function frameContext() {
    const shot = getActiveCutoutShot();
    const layout = getFrameViewLayout(shot);
    return shot && layout ? frameViewContext(shot, layout, { width: canvas.width, height: canvas.height }) : null;
  }

  // The pivot distance of the Frame view's moves: the content's size, whatever moves came before, so a
  // pan of the same length moves the Camera the same way after any zoom (like a Blender view locked to
  // its camera). Keyframes and playback move the Camera too, so a pivot left by the last move would not
  // stay where that move put it anyway.
  function frameViewDistance() {
    return contentSphere()?.radius || DEFAULT_DISTANCE;
  }

  // The Camera as a space view (pano_space.js) over the context rect.
  // A lens Camera's view (ADR 0042) moves at its image center's scale: a pinhole over the rect with the lens's f.
  function frameSpaceView(context) {
    const { position, yaw_deg, pitch_deg, roll_deg } = context.shot;
    const hFOV_deg = context.lens
      ? 2 * Math.atan(context.rect.w / 2 / context.lens.focalPx) * 180 / Math.PI
      : context.shot.hFOV_deg;
    return { position, yaw_deg, pitch_deg, roll_deg, hFOV_deg, distance: frameViewDistance() };
  }

  // The World point of the content under canvas point p in the Frame view that an orbit or a wheel step
  // works on, or null (also over a SPLAT's box, pano_three_view.js pickSurface).
  // On a lens Camera's image (ADR 0042) the pointer's pixel goes back along the lens to its ray, which is picked
  // through the face of the World-aligned cube it crosses (pano_lens.js lensPickWindow), as the view draws it; past
  // 180° off the axis nothing is hit.
  function pickFrame(context, p) {
    const { rect, lens } = context;
    if (!lens) return editorView.pickSurface(shotViewCamera(context.shot), p.x - rect.x, p.y - rect.y, rect.w, rect.h);
    const film = { x: (p.x - rect.x - lens.centerX) / lens.focalPx, y: (lens.centerY - (p.y - rect.y)) / lens.focalPx };
    const camera = shotViewCamera(context.shot);
    const face = lensPickWindow(film.x, film.y, lens.curve, 1024, camera.quaternion);
    if (!face) return null;
    const turned = { ...camera, quaternion: face.quaternion, fovY_deg: 90, aspect: 1 };
    return editorView.pickSurface(turned, face.x, face.y, face.size, face.size);
  }

  // The point a Frame view orbit or wheel step at canvas point p works on: the content under it, else the
  // pivot.
  function frameTarget(context, view, p) {
    return navigationTarget(view, pickFrame(context, p), null, spaceScale());
  }

  function frameViewKey(context) {
    return JSON.stringify([frameSpaceView(context), context.rect]);
  }

  function moveCutoutShot(view) {
    const shot = getActiveCutoutShot();
    shot.position = [...view.position];
    shot.yaw_deg = view.yaw_deg;
    shot.pitch_deg = view.pitch_deg;
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

  function startFrameDrag(action, p, pointerId) {
    const context = frameContext();
    if (!context || readOnly) return;
    const view = frameSpaceView(context);
    editor.interaction = action === "orbit"
      ? { kind: "frame_orbit", last: p, pivot: frameTarget(context, view, p), changed: false }
      : { kind: "frame_pan", last: p, depth: panDepth(view, spaceScale()), changed: false };
    updateCursor(p);
    canvas.setPointerCapture(pointerId);
  }

  function dragFrame(it, p) {
    const context = frameContext();
    if (!context) return;
    const view = frameSpaceView(context);
    const dx = p.x - it.last.x;
    const dy = p.y - it.last.y;
    moveCutoutShot(it.kind === "frame_pan"
      ? panView(view, dx, dy, context.rect.w, context.rect.h, it.depth)
      : orbitView(view, dx, dy, canvas.height, it.pivot));
    it.changed = it.changed || dx !== 0 || dy !== 0;
    it.last = p;
    requestDraw({ localOnly: true, cause: "frame_view" });
  }

  function zoomFrameAt(p, direction) {
    const context = frameContext();
    if (!context || readOnly) return;
    const view = frameSpaceView(context);
    // A step reuses the pick of an earlier one as reuseWheelPick() allows, like zoomSpaceAt().
    const now = performance.now();
    const next = { x: p.x, y: p.y, time: now, key: editorView.contentRevision(), view: frameViewKey(context) };
    if (!reuseWheelPick(frameWheel, next)) {
      const hit = pickFrame(context, p);
      frameWheel = { ...next, cost: performance.now() - now, hit };
    }
    moveCutoutShot(zoomView(view, navigationTarget(view, frameWheel.hit, null, spaceScale()), direction, spaceScale()));
    frameWheel.view = frameViewKey(frameContext() ?? context);
    frameWheel.wheelTime = now;
    scheduleFrameWheelCommit();
    updateSidePanel();
    requestDraw({ localOnly: true, cause: "frame_view" });
  }

  // The movement keys (space.js stepKeyMove) move the Camera itself, as the drags here do: its shot moves
  // `distance` toward `direction`, level whatever its pitch and roll, as in 6DoF. Only the position
  // changes, so syncCutoutShot() writes the position Lane alone, by the recording rule. The first move
  // stops playback, as a drag does. Returns whether it moved.
  function moveFrameByKeys(direction, distance) {
    const shot = getActiveCutoutShot();
    if (!shot || readOnly || shot.locked === true) return false;
    const moved = keyMoveView(shot, direction, distance);
    if (moved === shot) return false;
    stopTimelinePlayback();
    shot.position = moved.position;
    frameKeyMoved = true;
    return true;
  }

  // The movement keys were all let go (keyboard.js): what they moved the Camera by is one Undo step.
  function endFrameKeyMove() {
    if (!frameKeyMoved) return false;
    frameKeyMoved = false;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    return true;
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
        applySpaceMode, cancelViewTransition, commitAndRefreshNode, contentSphere, getActiveCutoutShot,
        hasSpaceContent, pushHistory, requestDraw, shotViewCamera,
        spaceScale, spaceViewState, stopTimelinePlayback, syncCutoutShot, updateCursor, updateSidePanel, writePose,
      } = api);
    },
    leaveFrameView, measureFrameSafeRect, getFrameViewLayout, getFrameViewRect, supportsFramePainting,
    wheelFrameView, frameWheelNotice, isFreeFrameView, frameContext, frameViewDistance, frameSpaceView, frameTarget,
    startPanFrame, startFrameDrag, dragFrame, flushFrameWheelCommit,
    moveFrameByKeys, endFrameKeyMove,
  };
}
