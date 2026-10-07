// The editor's view kept per node while the page lives (pano_node_bridge.js editorSession), so the editor
// opens again where it was closed: the tab (Panorama, Unwrap, Frame), 3DoF or 6DoF, the Viewport camera's
// place, direction, FOV and pivot distance. It is never saved: a page or workflow load opens at the origin
// in 3DoF.

const TABS = new Set(["pano", "unwrap", "frame"]);
const SPACE_MODES = new Set(["3dof", "6dof"]);

// The view of the editor's fields; a view on its way somewhere (a transition) is remembered where it goes,
// in the mode it ends in.
export function viewMemory(editor) {
  const transition = editor.viewTransition;
  const view = transition?.to ?? {
    position: editor.viewPosition,
    yaw_deg: editor.viewYaw,
    pitch_deg: editor.viewPitch,
    hFOV_deg: editor.viewFov,
    distance: editor.viewDistance,
  };
  return {
    mode: editor.mode,
    spaceMode: transition?.end?.mode ?? editor.spaceMode,
    position: [...view.position],
    yaw_deg: view.yaw_deg,
    pitch_deg: view.pitch_deg,
    hFOV_deg: view.hFOV_deg,
    distance: view.distance,
    moved: transition?.end ? transition.end.moved : editor.viewMoved,
  };
}

function inRange(value, min, max) {
  return Number.isFinite(value) && value >= min && value <= max;
}

// The editor's view fields from a remembered view, or null to open at the default view: nothing remembered,
// a value that is no number or out of the editor's range, or a tab the editor cannot show now (`frame`:
// whether the Frame view can open, which needs a Camera with a frame).
export function restoredView(memory, { frame }) {
  if (!memory) return null;
  const { mode, spaceMode, position, yaw_deg, pitch_deg, hFOV_deg, distance, moved } = memory;
  const valid = TABS.has(mode) && (mode !== "frame" || frame)
    && SPACE_MODES.has(spaceMode)
    && Array.isArray(position) && position.length === 3 && position.every(Number.isFinite)
    && Number.isFinite(yaw_deg)
    && inRange(pitch_deg, -89.9, 89.9)
    && inRange(hFOV_deg, 35, 140)
    && Number.isFinite(distance) && distance > 0
    && typeof moved === "boolean";
  if (!valid) return null;
  return {
    mode,
    spaceMode,
    viewPosition: [...position],
    viewYaw: yaw_deg,
    viewPitch: pitch_deg,
    viewFov: hFOV_deg,
    viewDistance: distance,
    viewMoved: moved,
  };
}
