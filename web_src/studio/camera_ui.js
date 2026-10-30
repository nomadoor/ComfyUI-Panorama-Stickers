// The Camera in the new editor (docs/studio-ui.md "エディタの中の Camera"): the left column's Camera button, whether it
// can be pressed and what its tooltip says, and how it brings the Camera to the view. Pure; studio/session.js makes the
// move one Undo step, studio/editor.js hands it the view, components/studio/StudioToolRail.vue draws the button.
import { cameraShot, setCameraShot } from "../pano_editor_state.js";

const LABEL = "Camera to view";

// The Camera button for a Camera of `projection` ("erp" is Panorama mode), `locked`, in a `readOnly` editor:
// { disabled, tip }. The Camera tab's disabling is the left column's (StudioToolRail.vue cameraTab).
export function cameraButton({ projection, locked = false, readOnly = false }) {
  if (readOnly) return { disabled: true, tip: `${LABEL} · Read-only` };
  if (locked) return { disabled: true, tip: `${LABEL} · Locked` };
  return { disabled: false, tip: projection === "erp" ? `${LABEL} · Switches to Frame mode` : LABEL };
}

// Brings `camera` (a state's, changed in place) to the view `pose` ({ position, yaw_deg, pitch_deg }) at the Timeline
// frame `frame`: Panorama mode switches to Frame mode, and the position, Yaw and Pitch go to the view's by the recording
// rule (pano_editor_state.js setCameraShot: only the Lanes that change, keyed at `frame` where they have Keyframes).
// Roll, the FOV, the lens and the aspect stay. Returns whether anything changed.
export function cameraToView(camera, frame, pose) {
  let changed = false;
  if (camera.projection === "erp") {
    camera.projection = "perspective";
    changed = true;
  }
  const base = cameraShot(camera, frame);
  const before = JSON.stringify([camera.position, camera.rotation]);
  setCameraShot(camera, frame, { ...base, position: [...pose.position], yaw_deg: pose.yaw_deg, pitch_deg: pose.pitch_deg }, base);
  return changed || JSON.stringify([camera.position, camera.rotation]) !== before;
}
