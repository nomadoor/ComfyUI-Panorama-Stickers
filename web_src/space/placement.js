// Placing Stickers: a new sky Sticker's width, and which way a world Sticker faces a point.
import { RAD2DEG } from "../pano_camera_math.js";
import { sub } from "./vec.js";

// A new sky Sticker's hFOV (its vFOV follows its image's aspect, pano_editor_state.js stickerVfovFromAspect).
export const NEW_STICKER_HFOV = 30;

// The rotation of a world Sticker at `at` that faces the point `from`: its forward (local -Z) points
// from `from` to it, so its plane faces back at `from` upright, as a plane of rotation 0 faces a
// Camera of rotation 0 in front of it (docs/render-contract.md).
export function facingRotation(from, at) {
  const d = sub(at, from);
  // In the panorama convention forward is +Z, so World's -Z is the panorama's +Z.
  const yaw = Math.atan2(d[0], -d[2]) * RAD2DEG;
  const pitch = Math.atan2(d[1], Math.hypot(d[0], d[2])) * RAD2DEG;
  return { yaw_deg: yaw + 0, pitch_deg: pitch, roll_deg: 0 };
}
