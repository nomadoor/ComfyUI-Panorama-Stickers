// How the new UI reads and writes the state's Camera (docs/studio-ui.md, the owner table's Camera row): a state without
// a Camera reads as the default Camera, and a write to such a state puts the default Camera there first. The default
// Camera's values are docs/scene-state-v2.md's (pano_scene_state.js defaultCamera); the recording rule is
// pano_editor_state.js setCameraShot's and pano_timeline.js setLaneValue's, called here. Pure: only the draft or the
// Camera it is given changes.
//
// Not here, each kept as it reads today: the Easing panel's owner
// (inspector_actions.js applyEasing, nothing without a Camera), the Timeline's copy-on-write Camera
// (timeline_actions.js createDraft) and the reads of `locked`.
import { cameraShot, setCameraShot } from "../pano_editor_state.js";
import { evaluateCamera } from "../pano_scene_eval.js";
import { defaultCamera } from "../pano_scene_state.js";
import { setLaneValue } from "../pano_timeline.js";

// The Camera a state shows: its own (a loaded state always has one, ADR 0048), or a new default one.
export function cameraOf(state) {
  return state.camera ?? defaultCamera();
}

// The Camera of `state` at the Timeline frame `frame`: its evaluated values (pano_scene_eval.js evaluateCamera) with the
// fields that do not change in time.
export function cameraAt(state, frame) {
  const camera = cameraOf(state);
  return {
    ...evaluateCamera(camera, frame),
    projection: camera.projection,
    erp_range: camera.erp_range,
    visible: camera.visible !== false,
    locked: camera.locked === true,
  };
}

// The Camera of a draft to write to: a draft without one gets the default Camera first.
export function editableCamera(draft) {
  draft.camera ??= defaultCamera();
  return draft.camera;
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
