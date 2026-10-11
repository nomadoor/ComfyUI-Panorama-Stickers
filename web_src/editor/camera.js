// The Cutout's shot and Panorama Studio's Camera (#89): its shot at the playhead and the edits written back
// to its Lanes (syncCutoutShot), adding and removing it, its aspect, and its roll knob.
import { parseCutoutAspectPair, updateCutoutRollGesture } from "../pano_cutout_node_surface.js";
import {
  aspectFitGateSize,
  createDefaultCutoutShot,
  deriveCutoutAspectFromFov,
  deriveCutoutAspectLabelFromFov,
  deriveHorizontalFovDeg,
  fitFocalPx,
  fovPairForGate,
  getCutoutCameraParams,
  resolveFrameRollDeg,
  shortestAngleDeltaRad,
  shotCurve,
} from "../pano_cutout_view_math.js";
import { CAMERA_SHOT_ID, cameraShot, newStudioCamera, setCameraShot } from "../pano_editor_state.js";
import { ASPECT_PRESETS, ERP_ASPECT, aspectPreset } from "../pano_editor_ui_state.js";
import { clamp, wrapYaw } from "../pano_math.js";
import { cameraFrustumSegments, segmentsHit } from "../pano_space.js";
import { FRAME_GATE_OCCUPANCY } from "./constants.js";
import { formatParamValue } from "./helpers.js";

export function createCamera(deps) {
  const {
    cameraV2, canvas, editor, frameRollKnobEl, initialShotBase, readOnly, runtime, shotEditor,
    stageWrap, state, studio, tooltip, type, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let applySpaceMode, cameraFrustumLength, cameraShoots, commitAndRefreshNode, currentSpaceCamera,
    cutoutCamera, editorViewInput, forceCursorTool, getFrameViewRect, hasCamera, hasSpaceContent, hideTooltip,
    isCameraSelected, isShotItem, leaveFrameView, pushHistory, requestDraw,
    screenPos, setSelectedItem, spaceScale, spaceViewState, stopTimelinePlayback, syncFrameRollKnob,
    syncViewToggleState, transitionView, turnViewTo, updateCursor, updateSelectionMenu, updateSidePanel,
    worldGizmoPointer;

  // The Camera's shot as it was last derived (null without a Camera); an edit since then is written back to
  // the Camera's Lanes (syncCutoutShot).
  let cutoutShotBase = initialShotBase;

  // A left press with the cursor tool in 6DoF on the selected Camera's gizmo grabs it; on the Camera's
  // frustum it selects the Camera. Returns whether the press was taken.
  function startCameraPress(e, p) {
    const gizmo = editorViewInput().space?.gizmo;
    if (isCameraSelected() && gizmo && worldGizmoPointer("hover", p) !== null && worldGizmoPointer("down", p)) {
      editor.interaction = { kind: "world_gizmo", camera: true, mode: gizmo.mode, start: gizmo.transform, base: cutoutCamera(), changed: false };
      canvas.setPointerCapture(e.pointerId);
      updateCursor(p);
      return true;
    }
    const frustum = cameraFrustumSegments(cutoutCamera(), cameraFrustumLength(spaceScale()));
    if (!segmentsHit(currentSpaceCamera(), frustum, p, canvas.width, canvas.height)) return false;
    if (!isCameraSelected()) {
      setSelectedItem(getActiveCutoutShot());
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
    }
    editor.interaction = { kind: "world_select" };
    canvas.setPointerCapture(e.pointerId);
    return true;
  }

  function addCutoutFrame() {
    if (readOnly || type !== "cutout") return;
    const existing = getActiveCutoutShot();
    if (existing) {
      setSelectedItem(existing);
      editor.mode = "pano";
      turnViewTo(wrapYaw(Number(existing.yaw_deg || 0)), clamp(Number(existing.pitch_deg || 0), -89.9, 89.9));
      updateSidePanel();
      updateSelectionMenu();
      requestDraw({ cause: "cutout_frame" });
      return;
    }
    const shot = createDefaultCutoutShot({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: wrapYaw(Number(editor.viewYaw || 0)),
      pitchDeg: Number(editor.viewPitch || 0),
      viewFovDeg: Number(editor.viewFov || 90),
    });
    state.shots = [shot];
    setSelectedItem(shot);
    forceCursorTool();
    editor.mode = "pano";
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw({ cause: "cutout_frame" });
  }

  // Add Camera (Panorama Studio, #89): one Camera where the Viewport camera stands and looks
  // (newStudioCamera), selected. The view stays where it is.
  function addStudioCamera() {
    if (readOnly || !studio || hasCamera()) return;
    stopTimelinePlayback();
    state.camera = newStudioCamera(spaceViewState());
    syncCutoutShot();
    setSelectedItem(getActiveCutoutShot());
    forceCursorTool();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw({ cause: "cutout_frame" });
  }

  // Delete on Panorama Studio's selected Camera: the state has no Camera (`camera: null`), and the Frame view
  // and 3DoF follow (followCameraChange). Undo brings it back.
  function deleteStudioCamera() {
    stopTimelinePlayback();
    state.camera = null;
    setSelectedItem(null);
    syncCutoutShot();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw({ cause: "cutout_frame" });
  }

  // An aspect preset of the selected shot. Panorama Studio's 360° preset makes its Camera shoot an ERP, and a
  // ratio makes it shoot through its frame again (ADR 0029).
  function setShotAspect(shot, aspect) {
    if (studio && isShotItem(shot)) {
      state.camera.projection = aspect === ERP_ASPECT ? "erp" : "perspective";
      if (aspect === ERP_ASPECT) return;
    }
    if (isStudioCamera(shot)) {
      if (shot.locked === true) return;
      // The preset in the frame's orientation.
      let [aw, ah] = aspectPreset(aspect);
      if ((aw >= ah) !== (state.camera.aspect >= 1)) [aw, ah] = [ah, aw];
      setCameraAspect(aw / ah);
      return;
    }
    applyCutoutAspect(shot, aspect);
  }

  // Panorama Studio's Camera (docs/editor-interaction.md): its frame's aspect is a field of its own, which the
  // presets, the portrait flip and a custom ratio write directly; its angle of view stays, and its shot is computed
  // from it again.
  function isStudioCamera(shot) {
    return cameraV2 && shot?.id === CAMERA_SHOT_ID && !!state.camera;
  }

  function setCameraAspect(ratio) {
    syncCutoutShot();
    state.camera.aspect = ratio;
    syncCutoutShot();
  }

  function clearCutoutFrame() {
    if (readOnly || type !== "cutout") return;
    state.shots = [];
    editor.selectedId = null;
    editor.selectedIds = [];
    if (editor.mode === "frame") editor.mode = "pano";
    editor.cutoutAspectOpen = false;
    state.active.selected_shot_id = null;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }

  // Resize the crop to the largest box of `ratio` the viewport allows, without
  // moving the ERP behind it.
  //
  // The presentation scale is `gate size / FOV`, so those three cannot all be
  // chosen freely. Holding the FOV makes the scale follow the aspect, which is
  // the background zooming on every aspect switch. Holding the scale and
  // re-deriving the FOV keeps the background nailed down and still gives each
  // aspect its maximal frame: landscape fills the width, portrait fills the
  // height. The captured solid angle changes, which is the right trade for
  // Frame view — it exists to compose a crop, not to conserve an area.
  //
  // Returns false when there is no measured viewport (aspect edits made from
  // the Panorama tab), so the caller can fall back to a plain FOV derivation.
  function applyGateAspectAtCurrentScale(selected, ratio) {
    const safeRect = runtime.frameSafeRect;
    if (!selected || !safeRect || editor.mode !== "frame") return false;
    const focal = FRAME_GATE_OCCUPANCY * fitFocalPx(safeRect, selected);
    const next = fovPairForGate(aspectFitGateSize(safeRect, ratio), focal, shotCurve(selected));
    selected.hFOV_deg = next.hFOV_deg;
    selected.vFOV_deg = next.vFOV_deg;
    return true;
  }

  function applyCutoutAspect(selected, aspect) {
    if (!selected || selected.locked === true) return;
    const currentLandscape = (() => {
      const stored = String(selected.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(stored)) {
        const [sw, sh] = stored.split(":").map((value) => Number(value));
        if (Number.isFinite(sw) && Number.isFinite(sh)) return sw >= sh;
      }
      const hf = Number(selected.hFOV_deg || 64);
      const vf = Number(selected.vFOV_deg || 40);
      if (Math.abs(hf - vf) > 1e-6) return hf >= vf;
      return deriveCutoutAspectFromFov(selected) >= 1;
    })();
    let [aw, ah] = aspectPreset(aspect);
    if ((aw >= ah) !== currentLandscape) [aw, ah] = [ah, aw];
    const ratio = aw / ah;
    if (!applyGateAspectAtCurrentScale(selected, ratio)) {
      const vf = clamp(Number(selected.vFOV_deg || 40), 1, 179);
      selected.vFOV_deg = vf;
      selected.hFOV_deg = deriveHorizontalFovDeg(vf, ratio, shotCurve(selected));
    }
    selected.aspect_id = `${aw}:${ah}`;
  }

  function applyCutoutAspectCustom(selected, w, h) {
    if (!selected || selected.locked === true) return false;
    const pair = parseCutoutAspectPair(w, h);
    if (!pair) return false;
    const ratio = pair.ratio;
    if (isStudioCamera(selected)) {
      setCameraAspect(ratio);
      return true;
    }
    if (!applyGateAspectAtCurrentScale(selected, ratio)) {
      const vf = clamp(Number(selected.vFOV_deg || 40), 1, 179);
      selected.vFOV_deg = vf;
      selected.hFOV_deg = deriveHorizontalFovDeg(vf, ratio, shotCurve(selected));
    }
    selected.aspect_id = pair.label;
    return true;
  }

  // Portrait/landscape toggle inverts the aspect while holding vFOV, exactly
  // like the aspect presets do.
  //
  // Swapping hFOV and vFOV instead would preserve the captured solid angle, but
  // a transposed landscape frame is taller than the viewport, so the whole view
  // has to zoom out to show it. Frame view is about the crop you are composing,
  // not about conserving the captured area, so hold the vertical extent and
  // narrow the horizontal one. The gate keeps filling the height, and the ERP
  // behind it does not move.
  function rotateCutoutAspect90(selected) {
    if (!selected || selected.locked === true) return;
    if (isStudioCamera(selected)) {
      // A preset's flip is its exact ratio flipped.
      const { aspect } = state.camera;
      const preset = Object.values(ASPECT_PRESETS).flatMap(([w, h]) => [[w, h], [h, w]]).find(([w, h]) => Math.abs(w / h - aspect) < 1e-9);
      setCameraAspect(preset ? preset[1] / preset[0] : 1 / aspect);
      return;
    }
    const storedAspect = String(selected.aspect_id || "").trim();
    const camera = getCutoutCameraParams(selected);
    const aspect = camera.tanHalfX / Math.max(1e-12, camera.tanHalfY);
    const inverted = 1 / Math.max(1e-12, aspect);
    if (!applyGateAspectAtCurrentScale(selected, inverted)) {
      const vf = clamp(Number(selected.vFOV_deg || 60), 1, 179);
      selected.vFOV_deg = vf;
      selected.hFOV_deg = deriveHorizontalFovDeg(vf, inverted, shotCurve(selected));
    }
    if (/^\d+:\d+$/.test(storedAspect)) {
      const [w, h] = storedAspect.split(":");
      selected.aspect_id = `${h}:${w}`;
    } else {
      selected.aspect_id = deriveCutoutAspectLabelFromFov(selected);
    }
  }

  // Panorama Studio: writes an edit of the shot since it was last derived to the Camera at the playhead
  // (setCameraShot, by the recording rule), then derives the shot from the Camera again, so it follows the
  // playhead, Keyframe edits and Undo. The shot stays the same object, which interactions hold. `keep`
  // false drops an edit instead (the state was replaced). The shot comes and goes with the Camera (#89).
  function syncCutoutShot(keep = true) {
    if (!cameraV2) return;
    const before = cutoutShotBase;
    if (!cameraShoots()) {
      cutoutShotBase = null;
      if (state.shots?.length) state.shots = [];
      if (before) followCameraChange(before, null);
      return;
    }
    const shot = state.shots?.[0];
    if (keep && shot && cutoutShotBase) setCameraShot(state.camera, editor.frame, shot, cutoutShotBase);
    cutoutShotBase = cameraShot(state.camera, editor.frame);
    if (shot) Object.assign(shot, cutoutShotBase, { position: [...cutoutShotBase.position] });
    else state.shots = [{ ...cutoutShotBase, position: [...cutoutShotBase.position] }];
    if (!before) followCameraChange(null, cutoutShotBase);
  }

  // Panorama Studio's Camera came or went (#89), by an edit or by Undo. The Frame view ends without one,
  // and 3DoF, which stands at the Camera (spaceOrigin), moves to where it stands now. The view goes there
  // over a transition instead of jumping.
  function followCameraChange(before, after) {
    if (!after && editor.mode === "frame") leaveFrameView(before);
    const to = after?.position ?? [0, 0, 0];
    // A way back to 3DoF on the way goes to where 3DoF stands now.
    if (editor.viewTransition?.end?.mode === "3dof") {
      transitionView({ ...spaceViewState(), position: to }, editor.viewTransition.end);
      return;
    }
    if (editor.mode !== "pano" || editor.spaceMode !== "3dof" || !hasSpaceContent()) return;
    const from = before?.position ?? [0, 0, 0];
    if (from.every((value, axis) => value === to[axis])) return;
    // The way there moves in 6DoF and enters 3DoF when it arrives, as the way back from 6DoF does.
    const view = { ...spaceViewState(), position: from };
    applySpaceMode({ mode: "6dof", position: from, moved: true });
    editor.viewDistance = view.distance;
    transitionView({ ...view, position: to }, { mode: "3dof", moved: false });
  }

  function getActiveCutoutShot() {
    if (!shotEditor) return null;
    const shots = Array.isArray(state.shots) ? state.shots : [];
    if (!shots.length) return null;
    const selectedId = String(state.active.selected_shot_id || "");
    return shots.find((item) => String(item?.id || "") === selectedId) || shots[0] || null;
  }

  function applyRollInteractionAngle(interaction, angle, event = {}) {
    if (interaction?.kind !== "roll_frame" || !interaction.shot) return;
    interaction.accumulatedRad += shortestAngleDeltaRad(angle, interaction.lastAngle);
    interaction.lastAngle = angle;
    const roll = resolveFrameRollDeg(interaction.start.roll_deg, interaction.accumulatedRad, {
      shiftKey: event.shiftKey,
      altKey: interaction.altStarted ? false : event.altKey,
    });
    interaction.shot.roll_deg = roll;
    interaction.changed = interaction.changed || Math.abs(interaction.accumulatedRad) > 1e-9;
    const rollParam = (uiState.sidePanel?.params || []).find((param) => param.key === "roll_deg");
    if (rollParam) {
      rollParam.value = roll;
      rollParam.displayValue = formatParamValue(roll);
      rollParam.fillPct = ((roll + 180) / 360) * 100;
    }
    syncFrameRollKnob();
    syncFrameRollTooltip(interaction);
    requestDraw({ localOnly: true });
  }

  function applySharedRollInteractionPoint(interaction, point, event = {}) {
    if (interaction?.kind !== "roll_frame" || !interaction.shot || !interaction.rollGesture) return;
    const result = updateCutoutRollGesture(interaction.rollGesture, point, event);
    if (!result) return;
    interaction.rollGesture = result.gesture;
    interaction.center = result.gesture.center;
    interaction.lastAngle = result.gesture.lastAngle;
    interaction.accumulatedRad = result.gesture.accumulatedRad;
    interaction.shot.roll_deg = result.rollDeg;
    interaction.changed = interaction.changed || Math.abs(result.gesture.accumulatedRad) > 1e-9;
    const rollParam = (uiState.sidePanel?.params || []).find((param) => param.key === "roll_deg");
    if (rollParam) {
      rollParam.value = result.rollDeg;
      rollParam.displayValue = formatParamValue(result.rollDeg);
      rollParam.fillPct = ((result.rollDeg + 180) / 360) * 100;
    }
    syncFrameRollKnob();
    syncFrameRollTooltip(interaction);
    requestDraw({ localOnly: true });
  }

  function frameRollAngleForEvent(event, center) {
    const point = screenPos(event);
    return Math.atan2(point.y - center.y, point.x - center.x);
  }
  function syncFrameRollTooltip(interaction) {
    if (interaction?.kind !== "roll_frame" || !interaction.shot) return;
    if (tooltip.timer) {
      clearTimeout(tooltip.timer);
      tooltip.timer = 0;
    }
    tooltip.target = null;
    const rect = getFrameViewRect(interaction.shot);
    const canvasBounds = canvas.getBoundingClientRect?.();
    const hostBounds = stageWrap.getBoundingClientRect?.();
    if (!rect || !canvasBounds || !hostBounds || canvas.width <= 0 || canvas.height <= 0) return;
    const scaleX = canvasBounds.width / canvas.width;
    const scaleY = canvasBounds.height / canvas.height;
    uiState.tooltip.text = `${formatParamValue(interaction.shot.roll_deg)}°`;
    uiState.tooltip.left = canvasBounds.left - hostBounds.left + (rect.x + rect.w * 0.5) * scaleX;
    uiState.tooltip.top = canvasBounds.top - hostBounds.top + (rect.y + rect.h * 0.5) * scaleY + 12;
    uiState.tooltip.variant = "roll";
    uiState.tooltip.visible = true;
  }
  function onFrameRollKnobPointerDown(event) {
    if (event.button !== 0 || readOnly || editor.mode !== "frame") return;
    const shot = getActiveCutoutShot();
    if (!shot || shot.locked === true) return;
    const rect = getFrameViewRect(shot);
    if (!rect) return;
    const center = { x: rect.x + rect.w * 0.5, y: rect.y + rect.h * 0.5 };
    const angle = frameRollAngleForEvent(event, center);
    editor.interaction = {
      kind: "roll_frame", shot, center, lastAngle: angle, accumulatedRad: 0,
      start: { roll_deg: Number(shot.roll_deg ?? shot.rot_deg ?? 0) },
      changed: false, altStarted: false, source: "knob",
    };
    frameRollKnobEl.setPointerCapture?.(event.pointerId);
    event.preventDefault();
    syncFrameRollKnob();
    syncFrameRollTooltip(editor.interaction);
    requestDraw({ localOnly: true });
  }
  function onFrameRollKnobPointerMove(event) {
    if (editor.interaction?.kind !== "roll_frame" || editor.interaction.source !== "knob") return;
    applyRollInteractionAngle(
      editor.interaction,
      frameRollAngleForEvent(event, editor.interaction.center),
      event,
    );
  }
  function finishKnobRoll() {
    const interaction = editor.interaction;
    if (interaction?.kind !== "roll_frame" || interaction.source !== "knob") return;
    if (interaction.changed) {
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
    }
    editor.interaction = null;
    hideTooltip();
    syncViewToggleState();
    syncFrameRollKnob();
    requestDraw();
  }
  function onFrameRollKnobDoubleClick(event) {
    const shot = editor.mode === "frame" && !readOnly ? getActiveCutoutShot() : null;
    if (!shot || shot.locked === true || Math.abs(Number(shot.roll_deg ?? shot.rot_deg ?? 0)) <= 1e-9) return;
    shot.roll_deg = 0;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    syncFrameRollKnob();
    requestDraw();
    event.preventDefault();
  }

  return {
    connect(api) {
      ({
        applySpaceMode, cameraFrustumLength, cameraShoots, commitAndRefreshNode, currentSpaceCamera,
        cutoutCamera, editorViewInput, forceCursorTool, getFrameViewRect, hasCamera, hasSpaceContent, hideTooltip,
        isCameraSelected, isShotItem, leaveFrameView, pushHistory, requestDraw,
        screenPos, setSelectedItem, spaceScale, spaceViewState, stopTimelinePlayback, syncFrameRollKnob,
        syncViewToggleState, transitionView, turnViewTo, updateCursor, updateSelectionMenu, updateSidePanel,
        worldGizmoPointer,
      } = api);
    },
    addCutoutFrame, addStudioCamera, deleteStudioCamera, setShotAspect, clearCutoutFrame,
    applyCutoutAspectCustom, rotateCutoutAspect90, syncCutoutShot, getActiveCutoutShot, startCameraPress,
    applySharedRollInteractionPoint, onFrameRollKnobPointerDown, onFrameRollKnobPointerMove, finishKnobRoll,
    onFrameRollKnobDoubleClick,
  };
}
