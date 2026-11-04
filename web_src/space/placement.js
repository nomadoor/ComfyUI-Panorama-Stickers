// Placing world Stickers (docs/editor-interaction.md "Add to World の置き方"): where a new world image or 3D file goes
// and which way it faces.
import { DEG2RAD, RAD2DEG } from "../pano_camera_math.js";
import { fit3dPosition, NEW_WORLD_STICKER_DISTANCE } from "./fit.js";
import { add, sub } from "./vec.js";
import { viewAxes } from "./view.js";

// A new world image with World content goes this part of the radius of the content's bounding sphere ahead
// (NEW_WORLD_STICKER_DISTANCE, space/fit.js, without content).
const NEW_WORLD_STICKER_RADIUS_RATIO = 0.5;
// A new sky Sticker's hFOV (its vFOV follows its image's aspect, pano_editor_state.js stickerVfovFromAspect), and a new
// world Sticker is as wide as one seen from the view.
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

// Where a world Sticker added at a point of the view goes ({ position, rotation, scale }): on the World
// content under that point (hit, from pick()), else ahead of the view at half the radius of the
// content's bounding sphere (sphere, null without content), else NEW_WORLD_STICKER_DISTANCE ahead. It
// faces the view, and is as wide as a new sky Sticker looks from there.
export function newWorldStickerTransform(view, hit, sphere = null) {
  const radius = sphere?.radius > 0 ? sphere.radius : 0;
  const ahead = radius ? radius * NEW_WORLD_STICKER_RADIUS_RATIO : NEW_WORLD_STICKER_DISTANCE;
  const position = hit ? [...hit] : add(view.position, viewAxes(view.yaw_deg, view.pitch_deg).forward, ahead);
  const distance = Math.hypot(...sub(position, view.position));
  const rotation = distance > 0 ? facingRotation(view.position, position) : { yaw_deg: view.yaw_deg, pitch_deg: view.pitch_deg, roll_deg: 0 };
  const scale = 2 * Math.max(distance, 1e-3) * Math.tan(NEW_STICKER_HFOV * 0.5 * DEG2RAD);
  return { position, rotation, scale };
}

// Where a 3D file added along `dir` (pano_editor_view.js placeDirection) goes until its content is known: its
// origin NEW_WORLD_STICKER_DISTANCE along dir (fit3dPosition then fits it). It is turned about the vertical alone,
// so its front (glTF +Z) faces back along dir's horizontal (the view's yaw for a dir straight up or down) and it
// stands upright, at scale 1 (its own units are World units, as the node's 3D port Sticker).
export function newWorld3dStickerTransform(view, dir) {
  const level = Math.hypot(dir[0], dir[2]) > 1e-9;
  const yaw = level ? Math.atan2(dir[0], -dir[2]) * RAD2DEG + 0 : view.yaw_deg;
  const position = fit3dPosition(view.position, dir, null, { yaw_deg: yaw, pitch_deg: 0, roll_deg: 0 }, 0, 0);
  return { position, rotation: { yaw_deg: yaw, pitch_deg: 0, roll_deg: 0 }, scale: 1 };
}
