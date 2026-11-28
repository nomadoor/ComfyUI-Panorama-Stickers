// The Camera in the new editor (docs/studio-ui.md "エディタの中の Camera"): the left column's Camera button, whether it
// can be pressed and what its tooltip says, and how it brings the Camera to the view; and how the H FOV's unit shows an
// FOV in mm (docs/studio-ui.md "H FOV の単位": the Camera's, and the view's number in the 3D tab and the Preview window).
// Pure; studio/session.js makes the
// move one Undo step, studio/editor.js hands it the view, components/studio/StudioToolRail.vue draws the button.
import { setLaneValue } from "../pano_timeline.js";
import { cameraLooks, moveCameraPose } from "./camera_state.js";
import { VIEW_NOTICES } from "./view_camera.js";
import { parseNumber } from "./ui_drag.js";
import { focalMmToFov, fovToFocalMm } from "../pano_lens.js";

const LABEL = "Camera to view";

// The tooltip of the Camera tab's parts a locked Camera grays (the edge rulers, Frame Selected, the view knobs): the
// Camera tab has no Lock of the Camera, so it says where to unlock it (ADR 0055, docs/studio-ui.md "Camera タブ").
export const CAMERA_TAB_LOCKED_TIP = "Locked · Unlock in the 3D tab";
// The tooltip of what the Camera tab grays whatever the Camera (the left column, the Output window, the view knobs).
export const CAMERA_TAB_TIP = "Not available in the Camera view";
// The tooltip of what the Camera tab's Panorama mode grays (the view knobs, Frame Selected, the FOV number): the text
// of Alt + wheel's notice there (view_camera.js VIEW_NOTICES).
export const PANORAMA_MODE_TIP = VIEW_NOTICES["fov-panorama"];
// The FOV number's tooltip in the Camera tab's Frame mode: it shows the Camera's H FOV, which the FOV ruler changes
// (docs/studio-ui.md "Camera タブ", ADR 0061).
export const CAMERA_FOV_TIP = "Camera FOV · Change it with the FOV ruler";

// The H FOV box's tooltip while it shows mm.
export const FOCAL_FIELD_TIP = "Focal length · 36 mm wide sensor";
// The widest mm text (the H FOV field's 1°, the same at any κ; tests/studio_camera_ui.test.mjs binds it), which the
// ruler head and the FOV number keep room for.
export const FOCAL_WIDEST_TEXT = "2063";

// A focal length as the H FOV shows it: one decimal under 100 mm, whole from 100 mm.
export function formatFocalMm(focalMm) {
  const tenths = Math.round(focalMm * 10) / 10;
  return tenths < 100 ? tenths.toFixed(1) : String(Math.round(focalMm));
}

// The H FOV box's text in mm for `hFov` degrees at κ `curve`, and the degrees of a typed mm (pano_lens.js focalMmToFov:
// unrounded, kept in the field's range), or null when the text holds no positive number (the value stays).
export function focalFieldText(hFov, curve) {
  return formatFocalMm(fovToFocalMm(hFov, curve));
}

// The View group's FOV number for the view's `fov` (whole degrees) in `unit` (docs/studio-ui.md "右下の View の群"): its
// text, its tooltip, and the widest text it keeps room for ("" for the degrees' own). The view has no lens curve (κ 1).
export function viewFovText(fov, unit) {
  return unit === "mm" ? `${formatFocalMm(fovToFocalMm(fov, 1))}mm` : `${fov}°`;
}

export function viewFovTip(unit) {
  return unit === "mm" ? "Focal length · 36 mm wide sensor (Alt+Wheel)" : "Field of view (Alt+Wheel)";
}

export function viewFovWidest(unit) {
  return unit === "mm" ? `${FOCAL_WIDEST_TEXT}mm` : "";
}

export function focalFieldValue(text, curve) {
  const focal = parseNumber(text);
  return focal > 0 ? focalMmToFov(focal, curve) : null;
}

// The Camera button for a Camera of `projection` ("erp" is Panorama mode), `locked`, in a `readOnly` editor:
// { disabled, tip }. The Camera tab's disabling is the left column's (StudioToolRail.vue cameraTab).
export function cameraButton({ projection, locked = false, readOnly = false }) {
  if (readOnly) return { disabled: true, tip: `${LABEL} · Read-only` };
  if (locked) return { disabled: true, tip: `${LABEL} · Locked` };
  return { disabled: false, tip: projection === "erp" ? `${LABEL} · Switches to Frame mode` : LABEL };
}

// Brings `camera` (a state's, changed in place) to the view `pose` ({ position, yaw_deg, pitch_deg }) at the Timeline
// frame `frame`: Panorama mode switches to Frame mode, and the position, Yaw and Pitch go to the view's by the recording
// rule (camera_state.js moveCameraPose: only the Lanes that change, keyed at `frame` where they have Keyframes).
// Roll, the FOV, the lens and the aspect stay. Returns whether anything changed.
export function cameraToView(camera, frame, pose, length = null, stickers = []) {
  let changed = false;
  if (camera.projection === "erp") {
    camera.projection = "perspective";
    changed = true;
  }
  // Looking at a target, the Camera's turn is the target's: only its position comes (docs/studio-ui.md "Look at").
  if (cameraLooks(camera, frame, length, stickers)) {
    const before = JSON.stringify(camera.position);
    setLaneValue(camera, "position", frame, [...pose.position], length);
    return JSON.stringify(camera.position) !== before || changed;
  }
  return moveCameraPose(camera, frame, pose, length) || changed;
}
