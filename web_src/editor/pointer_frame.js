// The pointer gestures of the Frame view that edit the active Camera's shot: the middle button's pan
// ("pan_frame"; the left drag's is frame_view.js startPanFrame) and the Alt / Shift roll ("roll_frame";
// the roll knob's is camera.js). A gesture that changed the shot is one Undo step, as are the Frame view's
// drags of frame_view.js ("frame_pan", "frame_orbit").
import { beginCutoutRollGesture, panCutoutShotByScreenDelta } from "../pano_cutout_node_surface.js";

export function createPointerFrame(deps) {
  const { canvas, editor, readOnly, state } = deps;
  // Bound by connect() to the other modules and showEditor.
  let applySharedRollInteractionPoint, commitAndRefreshNode, getActiveCutoutShot, getFrameViewLayout,
    getFrameViewRect, pushHistory, requestDraw, syncFrameRollKnob, updateCursor, updateSidePanel;

  function startMiddlePanFrame(e, p) {
    const shot = getActiveCutoutShot();
    if (!shot || readOnly || shot.locked === true) return;
    editor.interaction = {
      kind: "pan_frame",
      shot,
      last: p,
      start: {
        yaw_deg: Number(shot.yaw_deg || 0),
        pitch_deg: Number(shot.pitch_deg || 0),
      },
      changed: false,
    };
    updateCursor(p);
    canvas.setPointerCapture(e.pointerId);
  }

  function startFrameRoll(e, p) {
    const shot = getActiveCutoutShot();
    const rect = getFrameViewRect(shot);
    if (!shot || shot.locked === true || !rect) return;
    const rollGesture = beginCutoutRollGesture({
      frame: rect,
      point: p,
      startRollDeg: Number(shot.roll_deg ?? shot.rot_deg ?? 0),
      shiftKey: e.shiftKey,
      altKey: e.altKey,
      allowAlt: true,
    });
    if (!rollGesture) return;
    editor.interaction = {
      kind: "roll_frame",
      shot,
      center: rollGesture.center,
      lastAngle: rollGesture.lastAngle,
      accumulatedRad: rollGesture.accumulatedRad,
      rollGesture,
      start: { roll_deg: Number(shot.roll_deg ?? shot.rot_deg ?? 0) },
      changed: false,
      altStarted: rollGesture.source === "alt",
      source: rollGesture.source,
    };
    canvas.setPointerCapture(e.pointerId);
    e.preventDefault();
    syncFrameRollKnob();
    requestDraw({ localOnly: true });
  }

  function movePanFrame(it, p) {
    const layout = getFrameViewLayout(it.shot);
    if (!layout || !it.shot) return;
    const dx = p.x - it.last.x;
    const dy = p.y - it.last.y;
    const nextShot = panCutoutShotByScreenDelta(it.shot, {
      dx,
      dy,
      focalPx: layout.focalPx,
      invertX: state.ui_settings?.invert_view_x === true,
      invertY: state.ui_settings?.invert_view_y === true,
    });
    it.shot.yaw_deg = nextShot.yaw_deg;
    it.shot.pitch_deg = nextShot.pitch_deg;
    it.changed = it.changed || Math.abs(dx) > 0 || Math.abs(dy) > 0;
    it.last = p;
    requestDraw({ localOnly: true });
  }

  // The knob's roll moves with the knob's own pointer (camera.js).
  function moveRollFrame(it, p, e) {
    if (it.source === "knob") return;
    applySharedRollInteractionPoint(it, p, e);
  }

  function endFrameGesture() {
    if (editor.interaction.changed) {
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
    }
  }

  return {
    connect(api) {
      ({
        applySharedRollInteractionPoint, commitAndRefreshNode, getActiveCutoutShot, getFrameViewLayout,
        getFrameViewRect, pushHistory, requestDraw, syncFrameRollKnob, updateCursor, updateSidePanel,
      } = api);
    },
    startMiddlePanFrame, startFrameRoll, movePanFrame, moveRollFrame, endFrameGesture,
  };
}
