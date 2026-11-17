// How the new UI reads and writes the state's Camera (docs/studio-ui.md, the owner table's Camera row). A state always
// has its Camera (loadSceneState puts the default one there, ADR 0048). The recording rule is pano_editor_state.js
// setCameraShot's and pano_timeline.js setLaneValue's, called here. Pure: only the Camera it is given changes.
import { cameraShot, setCameraShot } from "../pano_editor_state.js";
import { evaluateCamera, evaluateLane, lookAtPoint, ownerPeriod } from "../pano_scene_eval.js";
import { setLaneValue } from "../pano_timeline.js";

// The Camera of `state` at the Timeline frame `frame`: its evaluated values (pano_scene_eval.js evaluateCamera) with the
// fields that do not change in time. `length` (here and below) is the output length, the loop period of a looping Camera.
// `boxes` is the content boxes of what it looks at (look_at.js lookAtBoxes), by Sticker id.
export function cameraAt(state, frame, length = null, boxes = null) {
  const { camera } = state;
  return {
    ...evaluateCamera(camera, frame, length, { stickers: state.stickers, boxes }),
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
export function moveCameraPose(camera, frame, pose, length = null) {
  const base = cameraShot(camera, frame, length);
  const before = JSON.stringify([camera.position, camera.rotation]);
  setCameraShot(camera, frame, { ...base, position: [...pose.position], yaw_deg: pose.yaw_deg, pitch_deg: pose.pitch_deg }, base, length);
  return JSON.stringify([camera.position, camera.rotation]) !== before;
}

// Whether `camera` looks at a target at the Timeline frame `frame` (its Look at Lane has one there).
export function cameraLooks(camera, frame, length = null) {
  return !!camera.look_at && evaluateLane(camera, "look_at", frame, ownerPeriod(camera, length)) !== null;
}

// A Camera tab move of `camera` while it looks at a target (docs/studio-ui.md "Look at" "Camera タブのドラッグとホイール"):
// the Camera goes to look at the target along the view `pose` ({ position, yaw_deg, pitch_deg }) from as far as
// `pose.position` is from it, so a drag (which turns the view) goes round the target and the wheel (which moves along
// the view) changes the distance. Only the position Lane is written, by the recording rule. `scene` is { stickers,
// boxes }. Returns whether it moved.
export function orbitCameraLooking(camera, frame, pose, length = null, scene = null) {
  const target = lookAtPoint(camera, frame, length, scene);
  if (!target) return false;
  const distance = Math.hypot(...pose.position.map((value, axis) => value - target[axis]));
  const yaw = pose.yaw_deg * Math.PI / 180;
  const pitch = pose.pitch_deg * Math.PI / 180;
  const forward = [Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch)];
  const before = JSON.stringify(camera.position);
  setLaneValue(camera, "position", frame, target.map((value, axis) => value - forward[axis] * distance), length);
  return JSON.stringify(camera.position) !== before;
}

// A gizmo drag of `camera` at the Timeline frame `frame`: each Lane of `lanes` (pano_space.js gizmoDragLanes) as it
// is given, by setLaneValue. Unlike moveCameraPose, a turn writes all three angles as gizmoDragLanes reads them.
export function setCameraLanes(camera, frame, lanes, length = null) {
  for (const [name, value] of Object.entries(lanes)) setLaneValue(camera, name, frame, value, length);
}
