// The three.js camera of a view in space (docs/threejs-spark-integration.md "空間の表示", "Camera 向けの部品"): its
// position, turn, FOV, near and far, and where a World point lands in it.
import { DEG2RAD, RAD2DEG } from "../pano_camera_math.js";
import { lensProjectPoint } from "../pano_lens.js";
import { quaternionToRotation, rotationToQuaternion, worldRotation } from "../pano_world.js";
import { DEFAULT_DISTANCE, tanHalfFov } from "./view.js";
import { column } from "./vec.js";

// The three.js camera of a view: its position, and its angles and FOV as viewportCamera() makes them.
// sphere is the content's boundingSphere() (a unit sphere at the origin without content). far reaches
// past the content and the grid around the origin (gridSpec(), at most 4 radii from it each way); near is
// a hundredth of the pivot distance but no less than a ten-thousandth of the content's size, so the depth
// buffer keeps its precision.
export function spaceCamera(view, width, height, sphere = null) {
  return placedCamera({
    quaternion: rotationToQuaternion(worldRotation(view.yaw_deg, view.pitch_deg, view.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(tanHalfFov(view, width, height).tanY) * RAD2DEG,
    aspect: width / height,
  }, view.position, view.distance, sphere);
}

// A three.js camera setup ({ quaternion, fovY_deg, aspect }, as pano_editor_view.js shotCamera() makes it)
// placed at a World position, with the near and far of spaceCamera() for a pivot `distance` ahead. Panorama
// Studio's Frame view and its camera preview look through the Camera this way.
export function placedCamera(camera, position, distance, sphere = null) {
  const { center, radius } = sphere ?? { center: [0, 0, 0], radius: DEFAULT_DISTANCE };
  const toCenter = Math.hypot(center[0] - position[0], center[1] - position[1], center[2] - position[2]);
  const reach = Math.max(toCenter + radius, Math.hypot(...position) + 6 * radius);
  return {
    ...camera,
    position: [...position],
    near: Math.max(distance * 1e-2, radius * 1e-4),
    far: reach * 2,
  };
}

// Where the World point p lands in a width x height view drawn with a spaceCamera(), and its depth z
// along the view axis (null when it is not in front). A camera carrying a lens picture (pano_lens.js withLensImage)
// maps through the lens instead (pano_lens.js lensProjectPoint: z is then the distance from the eye).
export function projectPoint(camera, p, width, height) {
  if (camera.lensImage) return lensProjectPoint(camera, p);
  const { right, up, forward } = cameraAxes(camera);
  const d = [p[0] - camera.position[0], p[1] - camera.position[1], p[2] - camera.position[2]];
  const z = d[0] * forward[0] + d[1] * forward[1] + d[2] * forward[2];
  if (!(z > camera.near)) return null;
  const tanY = Math.tan(camera.fovY_deg * 0.5 * DEG2RAD);
  const tanX = tanY * camera.aspect;
  const x = d[0] * right[0] + d[1] * right[1] + d[2] * right[2];
  const y = d[0] * up[0] + d[1] * up[1] + d[2] * up[2];
  return { x: width * 0.5 * (1 + x / z / tanX), y: height * 0.5 * (1 - y / z / tanY), z };
}

export function cameraAxes(camera) {
  const rotation = quaternionToRotation(camera.quaternion);
  const back = column(rotation, 2);
  return { right: column(rotation, 0), up: column(rotation, 1), forward: back.map((value) => -value) };
}

// The World direction a camera (spaceCamera()'s, placedCamera()'s) looks along.
export function cameraForward(camera) {
  return cameraAxes(camera).forward;
}
