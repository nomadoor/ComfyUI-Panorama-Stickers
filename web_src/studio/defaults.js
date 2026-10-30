// The new UI's stand-ins for two defaults of state v2 that pano_scene_state.js does not hold yet (docs/scene-state-v2.md
// `ground` and "既定の Camera"; they come with the node's change, docs/studio-node.md "入れる順番"). Until then they live
// here and nowhere else in the new UI; when the lower layer has them, this reads them from there.
import { loadSceneState } from "../pano_scene_state.js";

// The ground height a state without `ground` stands on (GROUND_DEFAULT).
export const GROUND_DEFAULT = -1.6;

// The Camera a state without one is read as: in Panorama mode at the origin, unturned, its Lanes without Keyframes.
// Reading a state does not write it (the inspector's or the Timeline's first edit of the Camera does).
export const DEFAULT_CAMERA_RAW = Object.freeze({
  aspect: 16 / 9,
  projection: "erp",
  erp_range: 360,
  visible: true,
  locked: false,
  position: { value: [0, 0, 0] },
  rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } },
  fov: { value: 90 },
  curve: { value: 1 },
});

// A new working Camera with the default values (a state's `camera`, normalized). The loader does not keep
// `erp_range` and `locked` yet, so they are put back.
export function defaultCamera() {
  const camera = loadSceneState({ version: 2, camera: structuredClone(DEFAULT_CAMERA_RAW) }).camera;
  return { ...camera, erp_range: DEFAULT_CAMERA_RAW.erp_range, locked: DEFAULT_CAMERA_RAW.locked };
}

// The Camera a state shows: its own, or a new default one.
export function cameraOf(state) {
  return state.camera ?? defaultCamera();
}

// The ground height a state stands on.
export function groundOf(state) {
  return Number.isFinite(state.ground) ? state.ground : GROUND_DEFAULT;
}
