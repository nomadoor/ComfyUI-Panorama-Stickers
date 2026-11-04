// The Camera in the new editor (docs/studio-ui.md "エディタの中の Camera"): the left column's Camera button, whether it
// can be pressed and what its tooltip says, and how it brings the Camera to the view. Pure; studio/session.js makes the
// move one Undo step, studio/editor.js hands it the view, components/studio/StudioToolRail.vue draws the button.
import { moveCameraPose } from "./camera_state.js";
import { VIEW_NOTICES } from "./view_camera.js";

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
export function cameraToView(camera, frame, pose) {
  let changed = false;
  if (camera.projection === "erp") {
    camera.projection = "perspective";
    changed = true;
  }
  return moveCameraPose(camera, frame, pose) || changed;
}
