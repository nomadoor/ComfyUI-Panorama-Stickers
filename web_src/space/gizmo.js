// The gizmo of a world Sticker (docs/editor-interaction.md "`world` の Sticker の選択・ギズモ・選択メニュー"): the Lanes a
// drag sets and its uniform scale.
import { DEG2RAD, RAD2DEG } from "../pano_camera_math.js";
import { panoramaAngles, quaternionToRotation, worldRotation } from "../pano_world.js";
import { add, column, multiply, sub, transpose } from "./vec.js";

// The Lane a gizmo drag sets on a world Sticker, for the gizmo's mode ("translate", "rotate" or
// "scale"): the drag took the gizmo from `start` to `moved` (transforms as sceneTransform() gives them,
// moved.scale per axis), and that change applies to `base`, the Sticker's evaluated value where it is
// edited. They differ when playback stopped on the drag's first move, on another frame than the one the
// gizmo was grabbed on.
export function gizmoDragLanes(mode, base, start, moved) {
  if (mode === "translate") return { position: add(base.position, sub(moved.position, start.position)) };
  if (mode === "scale") return { scale: base.scale * uniformScale(start.scale, moved.scale) / start.scale };
  const turn = multiply(quaternionToRotation(moved.quaternion), transpose(quaternionToRotation(start.quaternion)));
  const rotation = multiply(turn, worldRotation(base.yaw_deg, base.pitch_deg, base.roll_deg));
  const { yawDeg, pitchDeg, rollDeg } = panoramaAngles(rotation);
  if (Math.abs(pitchDeg) <= POLE_PITCH) return { rotation: { yaw_deg: yawDeg + 0, pitch_deg: pitchDeg, roll_deg: rollDeg + 0 } };
  // Near a pole yaw and roll turn about the same axis, and the yaw panoramaAngles() reads there jumps.
  // The yaw stays the base's, and the roll takes the turn.
  return { rotation: { yaw_deg: base.yaw_deg, pitch_deg: pitchDeg, roll_deg: rollAtYaw(rotation, base.yaw_deg) } };
}

// Past this pitch a gizmo turn keeps the yaw (gizmoDragLanes).
const POLE_PITCH = 89.9;

// The roll of a World rotation read at a given yaw, as panoramaAngles() reads it at its own yaw. In the
// panorama convention right and up are World's columns 0 and 1 with Z flipped.
function rollAtYaw(rotation, yawDeg) {
  const right = column(rotation, 0);
  const up = column(rotation, 1);
  const cy = Math.cos(yawDeg * DEG2RAD);
  const sy = Math.sin(yawDeg * DEG2RAD);
  return Math.atan2(sy * -up[2] - cy * up[0], cy * right[0] - sy * -right[2]) * RAD2DEG + 0;
}

// A gizmo's scale is uniform: of the three axes the one the drag changed the most from `start`
// (a scale handle changes one axis, the center handle all three). Never 0 or below.
export function uniformScale(start, [x, y, z]) {
  const changed = [x, y, z].reduce((best, value) => (Math.abs(value - start) > Math.abs(best - start) ? value : best), start);
  return Math.max(changed, start * 1e-3, 1e-6);
}
