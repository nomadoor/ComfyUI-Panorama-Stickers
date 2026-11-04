// The Cutout's shot: adding and removing it, its aspect, and its roll knob.
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
import { aspectPreset } from "../pano_editor_ui_state.js";
import { clamp, wrapYaw } from "../pano_math.js";
import { VIEW_PITCH_LIMIT_DEG } from "../pano_camera_math.js";
import { FRAME_GATE_OCCUPANCY } from "./constants.js";
import { formatParamValue } from "./helpers.js";

export function createCamera(deps) {
  const {
    canvas, editor, frameRollKnobEl, readOnly, runtime, shotEditor,
    stageWrap, state, timers, tooltip, type, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let commitAndRefreshNode, forceCursorTool, getFrameViewRect, hideTooltip, pushHistory, requestDraw,
    screenPos, setSelectedItem, syncFrameRollKnob, syncViewToggleState, takeGestureSnapshot, turnViewTo,
    updateSelectionMenu, updateSidePanel;

  function addCutoutFrame() {
    if (readOnly || type !== "cutout") return;
    const existing = getActiveCutoutShot();
    if (existing) {
      setSelectedItem(existing);
      editor.mode = "pano";
      turnViewTo(wrapYaw(Number(existing.yaw_deg || 0)), clamp(Number(existing.pitch_deg || 0), -VIEW_PITCH_LIMIT_DEG, VIEW_PITCH_LIMIT_DEG));
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
    timers.clear(tooltip.timer);
    tooltip.timer = 0;
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
  // The knob's roll, a gesture of its own pointer: ignored while another gesture is under way, and cancelled
  // like the others (pointer_input.js cancelGesture).
  function onFrameRollKnobPointerDown(event) {
    if (event.button !== 0 || readOnly || editor.mode !== "frame" || editor.interaction) return;
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
    takeGestureSnapshot(editor.interaction);
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
        commitAndRefreshNode, forceCursorTool, getFrameViewRect, hideTooltip, pushHistory, requestDraw,
        screenPos, setSelectedItem, syncFrameRollKnob, syncViewToggleState, takeGestureSnapshot, turnViewTo,
        updateSelectionMenu, updateSidePanel,
      } = api);
    },
    addCutoutFrame, applyCutoutAspect, clearCutoutFrame,
    applyCutoutAspectCustom, rotateCutoutAspect90, getActiveCutoutShot,
    applySharedRollInteractionPoint, onFrameRollKnobPointerDown, onFrameRollKnobPointerMove, finishKnobRoll,
    onFrameRollKnobDoubleClick,
  };
}
