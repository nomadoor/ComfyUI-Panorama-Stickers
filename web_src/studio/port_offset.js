// The offset of a port Sticker that a sticker_state places (docs/editor-interaction.md "`port` の Sticker の Pose handoff
// の表示と記録", the rule: docs/scene-state-v2.md "受け渡しの置き方"): the stage's drags of it, said as the turn and size
// it shows in the World, written as the offset Lanes (`offset_rotation`, `offset_fov`) from the Camera that shot it.
// Pure: values in, Lane writes out.
import { clipFrame, evaluateLane, ownerPeriod, shotCamera } from "../pano_scene_eval.js";
import { setLaneValue } from "../pano_timeline.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { lookRotation, worldRotation } from "../pano_world.js";

// The least Zoom of a returned shot the editor writes (its offset factor on the angle of view): the stage's corners and
// the inspector's field alike.
export const PORT_ZOOM_MIN = 0.01;

// Whether a sticker_state places the Sticker (pano_scene_eval.js, the `shot` argument): one the editor marked so
// (`placedByShot`: the node's own port Sticker, studio/session.js, and an upstream layer's, pano_upstream.js), or the
// node's own sky port Sticker with the node's sticker_state `shot`.
export function handedOff(sticker, shot = null) {
  if (sticker?.placedByShot === true) return true;
  return Boolean(shot) && sticker?.source?.kind === "port" && sticker.placement === "sky" && !isUpstreamSticker(sticker);
}

// The sticker_state that places the Sticker, or null: an upstream one's is its layer's (`upstream`, the working layers),
// the node's own the node's (`shot`).
export function placingShot(sticker, shot, upstream = []) {
  if (!handedOff(sticker, shot)) return null;
  if (!isUpstreamSticker(sticker)) return shot;
  return upstream.find((layer) => layer.sceneState.stickers.includes(sticker) || layer.sceneState.stickers.some((item) => item.id === sticker.id))?.shot ?? null;
}

// The Camera that shot what `shot` hands, at the port Sticker's Timeline frame `frame` on a Timeline of `fps`.
export function shotCameraAt(sticker, shot, frame, fps) {
  return shotCamera(shot, (clipFrame(sticker.clip, frame) * shot.fps) / fps);
}

// The forward direction (World) of a turn of yaw and pitch.
function forwardOf(yawDeg, pitchDeg) {
  const turn = worldRotation(yawDeg, pitchDeg, 0);
  return [-turn[0][2], -turn[1][2], -turn[2][2]];
}

// The offset turn's yaw and pitch that face the World direction of `yawDeg`, `pitchDeg` from the Camera `taken`: the
// direction in that Camera's own axes (its turn undone; a turn's transpose undoes it).
export function offsetDirection(taken, yawDeg, pitchDeg) {
  const turn = worldRotation(taken.yaw_deg, taken.pitch_deg, taken.roll_deg);
  const f = forwardOf(yawDeg, pitchDeg);
  const local = [0, 1, 2].map((axis) => turn[0][axis] * f[0] + turn[1][axis] * f[1] + turn[2][axis] * f[2]);
  const { yawDeg: yaw, pitchDeg: pitch } = lookRotation(local);
  return { yaw_deg: yaw, pitch_deg: pitch };
}

// Writes a stage drag of the handed-off port Sticker `sticker` at the Timeline frame `frame` as its offset Lanes, by the
// recording rule (setLaneValue). `pose` is what the drag asks for in the World: `yaw_deg` and `pitch_deg` (the body's
// drag: the direction it faces, its offset roll kept), `roll_delta` (the rotate handle: the turn about its own forward),
// `fov_factor` (a corner: its angle of view times this, from where the drag started, `start`). `start` is its offset
// at the frame when the drag started ({ offset_rotation, offset_fov }).
export function setPortOffsetPose(sticker, shot, fps, frame, pose, start, length = null) {
  const own = clipFrame(sticker.clip, frame);
  if (pose.yaw_deg !== undefined && pose.pitch_deg !== undefined) {
    const taken = shotCameraAt(sticker, shot, frame, fps);
    setLaneValue(sticker, "offset_rotation", own, offsetDirection(taken, pose.yaw_deg, pose.pitch_deg), length);
  }
  if (pose.roll_delta !== undefined) setLaneValue(sticker, "offset_rotation", own, { roll_deg: start.offset_rotation.roll_deg + pose.roll_delta }, length);
  if (pose.fov_factor !== undefined) setLaneValue(sticker, "offset_fov", own, Math.max(PORT_ZOOM_MIN, start.offset_fov * pose.fov_factor), length);
}

// The offset of the port Sticker `sticker` at the Timeline frame `frame` ({ offset_rotation, offset_fov }).
export function portOffsetAt(sticker, frame, length = null) {
  const own = clipFrame(sticker.clip, frame);
  const period = ownerPeriod(sticker, length);
  return { offset_rotation: evaluateLane(sticker, "offset_rotation", own, period), offset_fov: evaluateLane(sticker, "offset_fov", own, period) };
}
