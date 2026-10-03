// The editor's view of the World (#71): the Viewport camera's navigation in space, where the `scene`
// content and the world Stickers are placed, and the guides drawn around them. Positions are World
// glTF arrays [x, y, z] (ADR 0023); angles stay in the panorama convention and reach World only
// through worldRotation (pano_world.js).
//
// The Viewport camera is { position, yaw_deg, pitch_deg, hFOV_deg, distance }: the editor's own view,
// never saved (CONTEXT.md). distance is how far ahead its pivot is, the point it orbits around and
// dollies toward; it also sets how far a pan or a dolly step moves.
import { DEG2RAD, RAD2DEG, clamp, wrapYaw } from "./pano_camera_math.js";
import { evaluateLane } from "./pano_scene_eval.js";
import { quaternionToRotation, rotationToQuaternion, worldRotation } from "./pano_world.js";

// A dolly step is this part of the distance to the pivot.
export const DOLLY_STEP = 0.15;
// The pivot never comes closer than this part of the content's size (or of 1 without content); a dolly
// past it moves the pivot ahead with the view, so the view can fly through the content.
const MIN_DISTANCE_RATIO = 0.01;
// Pivot distance of a view that has nothing to frame yet.
export const DEFAULT_DISTANCE = 1;
// An SPLAT is in 3DGS coordinates (Y down, Z forward); the `scene` glTF frame turns it 180 degrees about
// X, as core's Load3D does with quaternion.set(1, 0, 0, 0) (docs/render-contract.md).
export const SPLAT_TO_SCENE = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });

function add(a, b, s = 1) {
  return [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];
}

function column(rotation, index) {
  return [rotation[0][index], rotation[1][index], rotation[2][index]];
}

function apply(rotation, p) {
  return rotation.map((row) => row[0] * p[0] + row[1] * p[1] + row[2] * p[2]);
}

// The World axes of a view turned yaw / pitch / roll: right, up and forward (local -Z).
export function viewAxes(yawDeg, pitchDeg, rollDeg = 0) {
  const rotation = worldRotation(yawDeg, pitchDeg, rollDeg);
  const back = column(rotation, 2);
  return { right: column(rotation, 0), up: column(rotation, 1), forward: [-back[0], -back[1], -back[2]] };
}

// The Viewport camera when the editor opens: at the World origin, where the Stickers ERP is taken from,
// looking where the panorama view looks.
export function initialSpaceView(yawDeg, pitchDeg, hFovDeg) {
  return { position: [0, 0, 0], yaw_deg: yawDeg, pitch_deg: pitchDeg, hFOV_deg: hFovDeg, distance: DEFAULT_DISTANCE };
}

// The view in a space view mode: 3DoF stands at the World origin, where the Stickers ERP is taken from,
// so it shows what the ERP shows; 6DoF moves freely.
export function spaceModeView(mode, view) {
  return mode === "6dof" ? view : { ...view, position: [0, 0, 0] };
}

// The space view's mode and place ({ mode, position, moved }) switched to mode. Back in 3DoF the view
// stands at the origin again and its pivot goes back to the content's size (moved false); 6DoF starts
// where 3DoF stands. The direction and the FOV are not here, so they stay.
export function switchSpaceMode(space, mode) {
  return mode === "3dof" ? { mode, position: [0, 0, 0], moved: false } : { ...space, mode };
}

// The same once it is known whether there is World content: without it a 6DoF view goes back to 3DoF,
// so content that shows again starts in 3DoF.
export function spaceModeWithContent(space, hasContent) {
  return hasContent || space.mode === "3dof" ? space : switchSpaceMode(space, "3dof");
}

export function pivotOf(view) {
  return add(view.position, viewAxes(view.yaw_deg, view.pitch_deg).forward, view.distance);
}

function tanHalfFov(view, width, height) {
  const tanX = Math.tan(view.hFOV_deg * 0.5 * DEG2RAD);
  return { tanX, tanY: tanX * height / width };
}

// Turns the view about its pivot by a pointer drag of (dx, dy) pixels on a view `height` pixels tall,
// like three.js OrbitControls (and core's Load3D): a drag across the view's height turns it a full turn,
// and the content follows the pointer.
export function orbitView(view, dx, dy, height) {
  const pivot = pivotOf(view);
  const yaw = wrapYaw(view.yaw_deg + dx / height * 360);
  const pitch = clamp(view.pitch_deg - dy / height * 360, -89.9, 89.9);
  const { forward } = viewAxes(yaw, pitch);
  return { ...view, yaw_deg: yaw, pitch_deg: pitch, position: add(pivot, forward, -view.distance) };
}

// A pan moves at least as if the pivot were this part of the content's size away, so a view whose pivot
// came close still pans through the content.
const MIN_PAN_RATIO = 0.05;

// Moves the view and its pivot across the view by a drag of (dx, dy) pixels, so the pivot's plane
// follows the pointer. scale is the content's size.
export function panView(view, dx, dy, width, height, scale = DEFAULT_DISTANCE) {
  const { right, up } = viewAxes(view.yaw_deg, view.pitch_deg);
  const depth = Math.max(view.distance, scale * MIN_PAN_RATIO);
  const perPixel = 2 * depth * tanHalfFov(view, width, height).tanY / height;
  return { ...view, position: add(add(view.position, right, -dx * perPixel), up, dy * perPixel) };
}

// One wheel step toward the pivot (direction > 0) or away from it. scale is the content's size.
export function dollyView(view, direction, scale = DEFAULT_DISTANCE) {
  const minimum = Math.max(scale, 1e-6) * MIN_DISTANCE_RATIO;
  const step = Math.max(view.distance * DOLLY_STEP, minimum) * Math.sign(direction);
  const { forward } = viewAxes(view.yaw_deg, view.pitch_deg);
  return { ...view, position: add(view.position, forward, step), distance: Math.max(view.distance - step, minimum) };
}

// The view keeping its direction that fits the sphere { center, radius } in a width x height view.
export function frameView(view, sphere, width, height) {
  const { tanX, tanY } = tanHalfFov(view, width, height);
  const halfAngle = Math.atan(Math.min(tanX, tanY));
  const distance = Math.max(sphere.radius, 1e-6) / Math.sin(halfAngle) * 1.1;
  const { forward } = viewAxes(view.yaw_deg, view.pitch_deg);
  return { ...view, position: add(sphere.center, forward, -distance), distance };
}

// The three.js camera of a view: its position, and its angles and FOV as viewportCamera() makes them.
// sphere is the content's boundingSphere() (a unit sphere at the origin without content). far reaches
// past the content and the grid around the origin (gridSpec(), at most 4 radii from it each way); near is
// a hundredth of the pivot distance but no less than a ten-thousandth of the content's size, so the depth
// buffer keeps its precision.
export function spaceCamera(view, width, height, sphere = null) {
  const { center, radius } = sphere ?? { center: [0, 0, 0], radius: DEFAULT_DISTANCE };
  const toCenter = Math.hypot(center[0] - view.position[0], center[1] - view.position[1], center[2] - view.position[2]);
  const reach = Math.max(toCenter + radius, Math.hypot(...view.position) + 6 * radius);
  return {
    position: [...view.position],
    quaternion: rotationToQuaternion(worldRotation(view.yaw_deg, view.pitch_deg, view.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(tanHalfFov(view, width, height).tanY) * RAD2DEG,
    aspect: width / height,
    near: Math.max(view.distance * 1e-2, radius * 1e-4),
    far: reach * 2,
  };
}

// Where the World point p lands in a width x height view drawn with a spaceCamera(), and its depth z
// along the view axis (null when it is not in front).
export function projectPoint(camera, p, width, height) {
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

function cameraAxes(camera) {
  const rotation = quaternionToRotation(camera.quaternion);
  const back = column(rotation, 2);
  return { right: column(rotation, 0), up: column(rotation, 1), forward: back.map((value) => -value) };
}

// The `scene` input's editor files in a node result (`pano_scene_files` and `pano_scene_meta`,
// docs/render-contract.md): the kind the editor loads and a URL per item (null for an empty item, by
// source(entry)), or null when the result has none.
export function sceneFilesOf(files, meta, source) {
  const kind = meta[0]?.kind;
  if (!files.length || (kind !== "splat" && kind !== "mesh")) return null;
  return { kind, urls: files.map((entry) => (entry ? source(entry) : null)) };
}

// Whether there is World content to show in space: a linked `scene` input, its files in the node's
// current result, or a world Sticker.
export function hasWorldContent({ sceneLinked, files, stickers }) {
  return sceneLinked || !!files || stickers.some((item) => item.placement === "world");
}

// What the space view asks pano_three_view.js to draw of the `scene` input at an evaluated state: the
// item the node draws at this frame (sceneItemIndex) with the next one to load ahead, or null outside the
// `scene` Clip range. url is null at a frame without an item (outside the batch, or an empty item).
export function sceneRequest(files, evaluatedScene) {
  if (!files || !evaluatedScene.active) return null;
  const index = sceneItemIndex(evaluatedScene.clip_frame, files.urls.length);
  const next = index === null ? null : files.urls[index + 1];
  return {
    kind: files.kind,
    url: index === null ? null : files.urls[index],
    urls: files.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: next ? [next] : [],
    transform: sceneTransform(evaluatedScene),
    itemQuaternion: files.kind === "splat" ? SPLAT_TO_SCENE : { x: 0, y: 0, z: 0, w: 1 },
  };
}

// What the space view asks pano_three_view.js to draw of the `sticker` input's 3D media (its editor files
// in the node result, sceneFilesOf of `pano_sticker_files`), as sceneRequest() does for `scene`: the item
// of the port Sticker's batch at its clip frame, with the Sticker's evaluated transform and opacity. null
// without files or a world port Sticker, or where the Sticker is not active.
export function stickerContentRequest(files, sceneState, evaluated) {
  const index = sceneState.stickers.findIndex((sticker) => sticker.source.kind === "port");
  const sticker = sceneState.stickers[index];
  if (!files || sticker?.placement !== "world") return null;
  const value = evaluated.stickers[index];
  const request = sceneRequest(files, value);
  return request && { ...request, id: sticker.id, opacity: value.opacity, value };
}

// The item URLs of the `sticker` input's 3D media the space view keeps loaded: none while the state has no
// world port Sticker, so its loaded items are freed.
export function stickerContentUrls(files, sceneState) {
  const port = sceneState.stickers.find((sticker) => sticker.source.kind === "port");
  return files && port?.placement === "world" ? files.urls.filter(Boolean) : [];
}

// The item of the `scene` input's `count` items shown at its clip frame: the nearest one, as the
// node picks it (sticker_media.py batch_index; the editor's Timeline fps is the state's). A single item
// shows throughout; null outside the batch.
export function sceneItemIndex(clipFrame, count) {
  if (count === 1) return 0;
  const index = Math.floor(clipFrame + 0.5);
  return index >= 0 && index < count ? index : null;
}

// The `scene` transform of an evaluated `scene`: an item's point x lands at
// position + scale * worldRotation(yaw, pitch, roll) x.
export function sceneTransform(scene) {
  return {
    position: [...scene.position],
    quaternion: rotationToQuaternion(worldRotation(scene.yaw_deg, scene.pitch_deg, scene.roll_deg)),
    scale: scene.scale,
  };
}

export function transformPoint(scene, p) {
  return add(scene.position, apply(worldRotation(scene.yaw_deg, scene.pitch_deg, scene.roll_deg), p), scene.scale);
}

// A box { min, max } of a loaded `scene` item in the item's own frame, in the `scene` glTF frame: a
// SPLAT's box is in 3DGS coordinates, turned by SPLAT_TO_SCENE ((x, y, z) -> (x, -y, -z)).
export function sceneItemBox(kind, box) {
  if (kind !== "splat") return box;
  return { min: [box.min[0], -box.max[1], -box.max[2]], max: [box.max[0], -box.min[1], -box.min[2]] };
}

function boxCorners({ min, max }) {
  const corners = [];
  for (const x of [min[0], max[0]]) for (const y of [min[1], max[1]]) for (const z of [min[2], max[2]]) corners.push([x, y, z]);
  return corners;
}

// The smallest axis-aligned sphere around points: the center of their box and the farthest point from
// it. null without points.
export function boundingSphere(points) {
  if (!points.length) return null;
  const min = [0, 1, 2].map((axis) => Math.min(...points.map((p) => p[axis])));
  const max = [0, 1, 2].map((axis) => Math.max(...points.map((p) => p[axis])));
  const center = min.map((value, axis) => (value + max[axis]) / 2);
  const radius = Math.max(...points.map((p) => Math.hypot(p[0] - center[0], p[1] - center[1], p[2] - center[2])));
  return { center, radius };
}

// The World points that bound the content at an evaluated state: the box of the shown `scene` item
// (its box in the `scene` frame, null while it loads) moved by the `scene` transform, the corners of
// the world Sticker planes, and the boxes of the 3D Stickers' items ({ box, value }: the item's box in
// the `scene` frame, and the Sticker's evaluated transform).
export function contentPoints(evaluated, sceneBox, planes, items = []) {
  const points = [];
  if (sceneBox && evaluated.scene.active) points.push(...boxCorners(sceneBox).map((p) => transformPoint(evaluated.scene, p)));
  for (const plane of planes) points.push(...planeCorners(plane));
  for (const { box, value } of items) points.push(...boxCorners(box).map((p) => transformPoint(value, p)));
  return points;
}

// The plane of a world Sticker evaluated at a frame: centered at its position, turned by its rotation,
// facing its local +Z. It is scale wide and as tall as its cropped media's aspect makes it (media sizes
// in pixels). null when the crop or the media is empty.
export function worldStickerPlane(value, crop, mediaWidth, mediaHeight) {
  const cropWidth = (crop.x1 - crop.x0) * mediaWidth;
  const cropHeight = (crop.y1 - crop.y0) * mediaHeight;
  if (!(cropWidth > 0 && cropHeight > 0)) return null;
  return {
    position: [...value.position],
    quaternion: rotationToQuaternion(worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg)),
    rotation: worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg),
    width: value.scale,
    height: value.scale * cropHeight / cropWidth,
  };
}

function planeCorners(plane) {
  const halfW = plane.width / 2;
  const halfH = plane.height / 2;
  return [[-halfW, -halfH], [halfW, -halfH], [halfW, halfH], [-halfW, halfH]]
    .map(([x, y]) => add(plane.position, apply(plane.rotation, [x, y, 0])));
}

// The ground grid on the World XZ plane for content of size radius: lines every power of ten that
// gives at least 10 cells across the content, 20 cells each way of the origin.
export function gridSpec(radius) {
  const step = 10 ** Math.floor(Math.log10(Math.max(radius, 1e-6) / 5));
  return { step, size: step * 40, divisions: 40 };
}

// --- Camera guides (#77): a Camera's frustum and its trajectory over the Timeline. The Stickers editor
// does not draw them (Stickers has no capture Camera); the Cutout editor draws them with renderSpace's
// `lines` and enters a Camera's view with cameraView().

// A Camera value's view: its position and angles, its hFOV across the view width.
export function cameraView(camera) {
  return {
    position: [...camera.position],
    yaw_deg: camera.yaw_deg,
    pitch_deg: camera.pitch_deg,
    roll_deg: camera.roll_deg,
    hFOV_deg: camera.hFOV_deg,
    distance: DEFAULT_DISTANCE,
  };
}

// Line segments [a, b] of a Camera value's frustum `length` ahead: the four edges from its position,
// the far rectangle at its hFOV and aspect, and a triangle above the rectangle that marks its up.
export function cameraFrustumSegments(camera, length) {
  const rotation = worldRotation(camera.yaw_deg, camera.pitch_deg, camera.roll_deg);
  const halfW = Math.tan(camera.hFOV_deg * 0.5 * DEG2RAD) * length;
  const halfH = halfW / camera.aspect;
  const at = (x, y, z) => add(camera.position, apply(rotation, [x, y, z]));
  const corners = [at(-halfW, -halfH, -length), at(halfW, -halfH, -length), at(halfW, halfH, -length), at(-halfW, halfH, -length)];
  const segments = corners.map((corner) => [camera.position, corner]);
  corners.forEach((corner, index) => segments.push([corner, corners[(index + 1) % 4]]));
  const top = [at(-halfW * 0.5, halfH * 1.1, -length), at(0, halfH * 1.5, -length), at(halfW * 0.5, halfH * 1.1, -length)];
  segments.push([top[0], top[1]], [top[1], top[2]], [top[2], top[0]]);
  return segments;
}

// The Camera's positions over the Timeline frames [0, frames), at most `samples` of them evenly spaced
// with the last frame included, from the evaluator; one position when its position Lane has no
// Keyframes.
export function cameraTrajectory(state, frames, samples = 2000) {
  const { camera } = state;
  if (!camera.position.keyframes.length) return [evaluateLane(camera, "position", 0)];
  const last = Math.max(frames - 1, 0);
  const count = Math.min(samples, last + 1);
  return Array.from({ length: count }, (_, index) => {
    const frame = count === 1 ? 0 : index * last / (count - 1);
    return evaluateLane(camera, "position", frame);
  });
}
