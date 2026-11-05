// How the new UI reads and writes the state's Camera (docs/studio-ui.md, the owner table's Camera row). A state always
// has its Camera (loadSceneState puts the default one there, ADR 0048). The recording rule is pano_editor_state.js
// setCameraShot's and pano_timeline.js setLaneValue's, called here. Pure: only the Camera it is given changes.
import { cameraShot, setCameraShot } from "../pano_editor_state.js";
import { evaluateCamera } from "../pano_scene_eval.js";
import { setLaneValue } from "../pano_timeline.js";

// The Camera of `state` at the Timeline frame `frame`: its evaluated values (pano_scene_eval.js evaluateCamera) with the
// fields that do not change in time.
export function cameraAt(state, frame) {
  const { camera } = state;
  return {
    ...evaluateCamera(camera, frame),
    projection: camera.projection,
    erp_range: camera.erp_range,
    visible: camera.visible !== false,
    locked: camera.locked === true,
  };
}

// A move of `camera` (changed in place) to `pose` ({ position, yaw_deg, pitch_deg }) at the Timeline frame `frame`, from
// its shot there (pano_editor_state.js cameraShot) by setCameraShot: only the Lanes that change, keyed at `frame` where
// they have Keyframes, each angle by the nearest turn. Roll, the FOV, the lens and the aspect stay. The Camera tab's
// Frame view drags and the Camera button. Returns whether its position or rotation changed.
export function moveCameraPose(camera, frame, pose) {
  const base = cameraShot(camera, frame);
  const before = JSON.stringify([camera.position, camera.rotation]);
  setCameraShot(camera, frame, { ...base, position: [...pose.position], yaw_deg: pose.yaw_deg, pitch_deg: pose.pitch_deg }, base);
  return JSON.stringify([camera.position, camera.rotation]) !== before;
}

// A gizmo drag of `camera` at the Timeline frame `frame`: each Lane of `lanes` (pano_space.js gizmoDragLanes) as it
// is given, by setLaneValue. Unlike moveCameraPose, a turn writes all three angles as gizmoDragLanes reads them.
export function setCameraLanes(camera, frame, lanes) {
  for (const [name, value] of Object.entries(lanes)) setLaneValue(camera, name, frame, value);
}
