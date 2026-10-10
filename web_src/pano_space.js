// The editor's view of the World (#71): the Viewport camera's navigation in space, where the `scene`
// content and the world Stickers are placed, and the guides drawn around them. Positions are World
// glTF arrays [x, y, z] (ADR 0023); angles stay in the panorama convention and reach World only
// through worldRotation (pano_world.js).
//
// The Viewport camera is { position, yaw_deg, pitch_deg, hFOV_deg, distance }: the editor's own view,
// never saved (CONTEXT.md). distance is how far ahead its pivot is: the point on its axis that a drag or a
// wheel step over empty space turns around and zooms toward. An orbit or a wheel step over the World
// content works on the point under the pointer instead (navigationTarget), and leaves the pivot at that
// point's depth, so the pivot stays in sight. A pan always moves at the pivot's depth (panDepth), never at
// the depth of what the pointer is over, so a drag of the same length moves the view the same way.
import { DEG2RAD, RAD2DEG, clamp, wrapYaw } from "./pano_camera_math.js";
import { lensFilmDirection, lensRadius } from "./pano_lens.js";
import { evaluateLane } from "./pano_scene_eval.js";
import { is3dFileSource } from "./pano_scene_state.js";
import { panoramaAngles, quaternionToRotation, rotationToQuaternion, worldRotation } from "./pano_world.js";

// A zoom step toward a point is this part of the distance to it.
export const ZOOM_STEP = 0.15;
// A zoom step is never shorter than this part of the content's size (or of 1 without content), so it
// keeps going as it comes close; it still stops ZOOM_STOP_RATIO of that size short of the point.
const MIN_ZOOM_RATIO = 0.01;
const ZOOM_STOP_RATIO = 0.001;
// Over empty space the point a drag or a wheel step works on is never closer than this part of the
// content's size, so a view that came up to its pivot or to the content's center still moves.
const MIN_TARGET_RATIO = 0.05;
// A wheel step reuses the point picked for an earlier one within this many pixels of the pointer and this
// many ms of the pick; a pick that took longer than the budget is reused while the wheel keeps turning.
const WHEEL_PICK_SLOP = 4;
const WHEEL_PICK_MS = 250;
const WHEEL_PICK_BUDGET_MS = 16;
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

// The view in a space view mode: 3DoF stands at `origin`, where the output is taken from (the World
// origin for the Stickers ERP, the Camera's position in the Cutout editor), so it shows what the output
// sees around; 6DoF moves freely.
export function spaceModeView(mode, view, origin = [0, 0, 0]) {
  return mode === "6dof" ? view : { ...view, position: [...origin] };
}

// The space view's mode and place ({ mode, position, moved }) switched to mode. Back in 3DoF the view
// stands at `origin` again and its pivot goes back to the content's size (moved false); 6DoF starts
// where 3DoF stands. The direction and the FOV are not here, so they stay.
export function switchSpaceMode(space, mode, origin = [0, 0, 0]) {
  return mode === "3dof" ? { mode, position: [...origin], moved: false } : { ...space, mode };
}

// The same once it is known whether there is World content: without it a 6DoF view goes back to 3DoF,
// so content that shows again starts in 3DoF.
export function spaceModeWithContent(space, hasContent, origin = [0, 0, 0]) {
  return hasContent || space.mode === "3dof" ? space : switchSpaceMode(space, "3dof", origin);
}

// The axes of a view, with its roll (the Frame view's Camera has one; the Viewport camera has none).
function axesOf(view) {
  return viewAxes(view.yaw_deg, view.pitch_deg, view.roll_deg ?? 0);
}

export function pivotOf(view) {
  return add(view.position, viewAxes(view.yaw_deg, view.pitch_deg).forward, view.distance);
}

function sub(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

// How far ahead of the view p is, along its axis.
export function depthOf(view, p) {
  return dot(sub(p, view.position), viewAxes(view.yaw_deg, view.pitch_deg).forward);
}

function minimumTarget(scale) {
  return Math.max(scale, 1e-6) * MIN_TARGET_RATIO;
}

// The point an orbit or a wheel step works on: the World content under the pointer (hit, from the
// three.js view's raycast), else the content's center while the view has not moved and the center is
// ahead (center is null once it has), else the view's pivot. Without a hit the point is at least
// MIN_TARGET_RATIO of the content's size (scale) away, so the view does not stick to it.
export function navigationTarget(view, hit, center = null, scale = DEFAULT_DISTANCE) {
  if (hit) return hit;
  const minimum = minimumTarget(scale);
  if (center && depthOf(view, center) > 0) {
    const offset = sub(center, view.position);
    const distance = Math.hypot(...offset);
    return distance >= minimum ? center : add(view.position, offset, minimum / distance);
  }
  return add(view.position, viewAxes(view.yaw_deg, view.pitch_deg).forward, Math.max(view.distance, minimum));
}

// The depth a pan moves at: the pivot's, at least MIN_TARGET_RATIO of the content's size (scale), like
// Blender's pan with Auto Depth off. What the pointer is over is not used: its depth ranges from a
// Sticker a few cm ahead to the far side of a SPLAT's box, so a drag of the same length would move the
// view by amounts hundreds of times apart.
export function panDepth(view, scale = DEFAULT_DISTANCE) {
  return Math.max(view.distance, minimumTarget(scale));
}

// Whether a wheel step `next` ({ x, y, time, key, view }) reuses the point the step `last` picked
// ({ x, y, time, cost, key, view, wheelTime, hit }: where and when it picked, how long the pick took, the
// content and the view after its last step, and when that step was). Picking a large mesh or SPLAT takes
// tens of ms, and a zoom keeps the point under a still pointer. The content (key) and the view must be as
// the last step left them, and the pointer within WHEEL_PICK_SLOP pixels of the pick; then it reuses the
// point for WHEEL_PICK_MS after the pick, or, after a pick over WHEEL_PICK_BUDGET_MS, for as long as the
// wheel keeps turning.
export function reuseWheelPick(last, next) {
  if (!last || last.key !== next.key || last.view !== next.view) return false;
  if (Math.hypot(next.x - last.x, next.y - last.y) > WHEEL_PICK_SLOP) return false;
  return next.time - last.time < WHEEL_PICK_MS || (last.cost > WHEEL_PICK_BUDGET_MS && next.time - last.wheelTime < WHEEL_PICK_MS);
}

function tanHalfFov(view, width, height) {
  const tanX = Math.tan(view.hFOV_deg * 0.5 * DEG2RAD);
  return { tanX, tanY: tanX * height / width };
}

// The FOV, in degrees, a view of width x height pixels fits content in: the smaller of its horizontal FOV
// (hFOV_deg) and its vertical one.
export function viewFitFov(view, width, height) {
  const { tanX, tanY } = tanHalfFov(view, width, height);
  return 2 * Math.atan(Math.min(tanX, tanY)) * RAD2DEG;
}

// --- Fitting a 3D Sticker in view (docs/editor-interaction.md "3D の Sticker を収めて置く"; core/world.py has the
// same values, both checked against tests/fixtures/place_3d/fit.json).

// The default horizontal FOV of Panorama Studio's view in the editor and on the node.
export const DEFAULT_VIEW_HFOV = 100;
// The space between a fitted sphere and the edges of the view.
export const FIT_MARGIN = 1.1;
// The nearest a new 3D Sticker goes, in World units (the editor keeps it past twice its near plane too).
export const FIT_3D_MIN_DISTANCE = 0.1;
// The FOV a fit takes when it is given none: DEFAULT_VIEW_HFOV made the vertical FOV of a 16:9 view (the node's
// PORT_3D_FIT_FOV_DEG).
export const FIT_FALLBACK_FOV_DEG = 2 * Math.atan(Math.tan(DEFAULT_VIEW_HFOV * 0.5 * DEG2RAD) * 9 / 16) * RAD2DEG;

function fitFov(fovDeg) {
  return Number.isFinite(fovDeg) && fovDeg > 0 ? fovDeg : FIT_FALLBACK_FOV_DEG;
}

// How far from its center a sphere of `radius` fits a view of `fovDeg` (the smaller of its FOVs), with
// FIT_MARGIN. Frame Selected (frameView) and the placing of a new 3D Sticker (fit3dPosition) both use it.
export function fitDistance(radius, fovDeg) {
  return radius / Math.sin(fitFov(fovDeg) * 0.5 * DEG2RAD) * FIT_MARGIN;
}

// The sphere a fit takes around a box { min, max } in the content's own (scene glTF) frame, as the route gives
// it: no sceneItemBox turn, which is for the boxes three.js loads. null for no box or a malformed one.
export function fitSphereOfBox(box) {
  const triple = (value) => Array.isArray(value) && value.length === 3 && value.every((item) => typeof item === "number" && Number.isFinite(item));
  if (!box || typeof box !== "object" || !triple(box.min) || !triple(box.max)) return null;
  if (box.min.some((value, axis) => value > box.max[axis])) return null;
  const center = box.min.map((value, axis) => (value + box.max[axis]) / 2);
  const radius = Math.hypot(...box.max.map((value, axis) => value - box.min[axis])) / 2;
  return { center, radius };
}

// Where a new 3D Sticker turned by `rotation` ({ yaw_deg, pitch_deg, roll_deg }) goes so its content, of bounding
// `sphere` ({ center, radius } in its own frame), fits a view at `eye` looking along `dir` with a FOV of `fovDeg`:
// the sphere's center lands at max(fitDistance, minDistance) along dir. Without a sphere (or a broken one) its
// origin goes NEW_WORLD_STICKER_DISTANCE along dir.
export function fit3dPosition(eye, dir, sphere, rotation, fovDeg, minDistance) {
  const length = Math.hypot(...dir);
  const unit = dir.map((value) => value / length);
  const valid = sphere && sphere.center.every(Number.isFinite) && Number.isFinite(sphere.radius) && sphere.radius >= 0;
  const center = valid ? sphere.center : [0, 0, 0];
  const distance = valid ? Math.max(fitDistance(sphere.radius, fovDeg), minDistance) : NEW_WORLD_STICKER_DISTANCE;
  const turned = apply(worldRotation(rotation.yaw_deg, rotation.pitch_deg, rotation.roll_deg), center);
  return add(eye, unit, distance).map((value, axis) => value - turned[axis]);
}

// Turns the view about the point `pivot` (its own pivot by default) by a pointer drag of (dx, dy) pixels
// on a view `height` pixels tall, like three.js OrbitControls (and core's Load3D): a drag across the view's
// height turns it a full turn, and the content follows the pointer. The pivot stays where it is on the
// screen, so turning about a point off the view's axis does not jump; the view's own pivot moves to its
// depth. A rolled view (the Frame view's Camera) keeps its roll and takes the drag in its own screen axes.
export function orbitView(view, dx, dy, height, pivot = pivotOf(view)) {
  const roll = view.roll_deg ?? 0;
  const [turnX, turnY] = unrolled(dx, dy, roll);
  const yaw = wrapYaw(view.yaw_deg + turnX / height * 360);
  const pitch = clamp(view.pitch_deg - turnY / height * 360, -89.9, 89.9);
  const before = worldRotation(view.yaw_deg, view.pitch_deg, roll);
  const after = worldRotation(yaw, pitch, roll);
  // The view's offset from the pivot in its own frame stays, so the pivot keeps its place on the screen.
  const offset = sub(view.position, pivot);
  const local = [0, 1, 2].map((axis) => dot(column(before, axis), offset));
  const turned = { ...view, yaw_deg: yaw, pitch_deg: pitch, position: add(pivot, apply(after, local)) };
  return { ...turned, distance: depthOf(turned, pivot) };
}

// A drag of (dx, dy) pixels on a view rolled rollDeg, in the axes of the same view without roll.
function unrolled(dx, dy, rollDeg) {
  const c = Math.cos(rollDeg * DEG2RAD);
  const s = Math.sin(rollDeg * DEG2RAD);
  return [dx * c + dy * s, dy * c - dx * s];
}

// Moves the view across itself by a drag of (dx, dy) pixels, so a point `depth` ahead (panDepth(), or
// the pivot's depth by default) follows the pointer exactly, along the view's own (rolled) screen axes.
// The pivot goes to that depth.
export function panView(view, dx, dy, width, height, depth = view.distance) {
  const { right, up } = axesOf(view);
  const perPixel = 2 * depth * tanHalfFov(view, width, height).tanY / height;
  return { ...view, position: add(add(view.position, right, -dx * perPixel), up, dy * perPixel), distance: depth };
}

// One wheel step toward the point `target` (direction > 0) or away from it, along the line from the view
// to it, so the point stays under the pointer (zoom to cursor). A step is ZOOM_STEP of the distance to
// the point, and at least a part of the content's size (scale) so it does not stall as it comes close,
// but never reaches the point: it stops just short of it. Out, a step of ZOOM_STEP undoes one in. The pivot goes to
// the point's depth, but no closer than MIN_TARGET_RATIO of the content's size, so wheel steps up to a
// wall do not leave a pivot that later moves the view hardly at all.
export function zoomView(view, target, direction, scale = DEFAULT_DISTANCE) {
  const offset = sub(target, view.position);
  const distance = Math.hypot(...offset);
  if (!(distance > 0) || !direction) return view;
  const size = Math.max(scale, 1e-6);
  const minimum = size * MIN_ZOOM_RATIO;
  const step = direction > 0
    ? Math.min(Math.max(distance * ZOOM_STEP, minimum), distance - size * ZOOM_STOP_RATIO)
    : -Math.max(distance * ZOOM_STEP / (1 - ZOOM_STEP), minimum);
  // Already as close as it goes.
  if (direction > 0 && step <= 0) return view;
  const moved = { ...view, position: add(view.position, offset, step / distance) };
  return { ...moved, distance: Math.max(depthOf(moved, target), minimumTarget(scale)) };
}

// The view keeping its direction that fits the sphere { center, radius } in a width x height view.
export function frameView(view, sphere, width, height) {
  const distance = fitDistance(Math.max(sphere.radius, 1e-6), viewFitFov(view, width, height));
  const { forward } = viewAxes(view.yaw_deg, view.pitch_deg);
  return { ...view, position: add(sphere.center, forward, -distance), distance };
}

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

// The key of an item made of several views (a DA3_GEOMETRY multiview element): its views' URLs, in order.
export function multiviewKey(urls) {
  return `views:${JSON.stringify(urls)}`;
}

// The `scene` input's editor files in a node result (`pano_scene_files` and `pano_scene_meta`,
// docs/studio-node.md): the kind the editor loads, whether its meshes draw without light (`unlit`; only a mesh
// marked false is lit, so a result without the mark draws as before), a key per item (its URL, by
// source(entry); null for an empty item), and `sources`, where the item of several views (an element whose value
// is a list of files, DA3_GEOMETRY multiview) loads from: its key (multiviewKey) -> its views' URLs. null when the
// result has none.
export function sceneFilesOf(files, meta, source) {
  const kind = meta[0]?.kind;
  if (kind === "depth_grid") return depthGridFilesOf(files, meta[0], source);
  if (!files.length || (kind !== "splat" && kind !== "mesh")) return null;
  const sources = {};
  const urls = files.map((entry) => {
    if (!Array.isArray(entry)) return entry ? source(entry) : null;
    const views = entry.filter(Boolean).map(source);
    if (!views.length) return null;
    const key = multiviewKey(views);
    sources[key] = views;
    return key;
  });
  return { kind, unlit: kind !== "mesh" || meta[0].unlit !== false, urls, sources };
}

// The items of a depth grid a request loads ahead: the next ones, as the item is small and playback must keep up
// (docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド"), within the budget's aheadFits.
export const DEPTH_GRID_PREFETCH = 8;

const positiveInteger = (value) => Number.isInteger(value) && value > 0;

// sceneFilesOf of a DA3_GEOMETRY mono result (kind `depth_grid`, docs/studio-node.md "DA3_GEOMETRY mono のエディタ用
// ファイル"): a key per item (the URL of its depth file, null for an empty item), `sources` with what each loads with
// ({ url, width, height, depth (the file's form), intrinsics (its own K, 9 numbers by rows) }), and `video`, the color
// proxy ({ src, fps }). null for a meta without its grid's form.
function depthGridFilesOf(files, meta, source) {
  const { width, height, depth, intrinsics } = meta;
  if (!files.length || !positiveInteger(width) || !positiveInteger(height) || !depth || typeof depth !== "object") return null;
  if (!Array.isArray(intrinsics) || intrinsics.length !== files.length) return null;
  const sources = {};
  const urls = files.map((entry, index) => {
    const url = entry && !Array.isArray(entry) ? source(entry) : null;
    if (url) sources[url] = { url, width, height, depth, intrinsics: intrinsics[index] };
    return url || null;
  });
  const video = meta.video ? source(meta.video) : null;
  const fps = Number(meta.video_fps);
  return { kind: "depth_grid", unlit: true, urls, sources, video: video && fps > 0 ? { src: video, fps } : null };
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
  const depthGrid = files.kind === "depth_grid";
  // The next item of a batch (a MoGe VIDEO) loads ahead for playback; DEPTH_GRID_PREFETCH of a depth grid.
  const ahead = index === null ? [] : files.urls.slice(index + 1, index + 1 + (depthGrid ? DEPTH_GRID_PREFETCH : 1));
  return {
    kind: files.kind,
    url: index === null ? null : files.urls[index],
    urls: files.urls.filter(Boolean),
    prefetch: ahead.filter(Boolean),
    // A depth grid's colors: its proxy MP4 at the item's time (i / video_fps).
    video: depthGrid && files.video && index !== null ? { ...files.video, time: index / files.video.fps } : null,
    transform: sceneTransform(evaluatedScene),
    itemQuaternion: files.kind === "splat" ? SPLAT_TO_SCENE : { x: 0, y: 0, z: 0, w: 1 },
    unlit: files.unlit !== false,
    // Where an item of several views loads from (sceneFilesOf).
    sources: files.sources ?? {},
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

// The key a 3D file Sticker's item loads under (docs/threejs-spark-integration.md): the Sticker's id, not the
// URL, so two Stickers of one file load apart, with the generation of its editor file, so the file asked for
// again (it was gone) loads anew.
export function fileStickerKey(id, generation) {
  return `file3d:${generation}:${id}`;
}

// What the space view asks pano_three_view.js to draw of the world Stickers whose Source is a 3D file: per
// Sticker whose editor file is there (editorFile(sticker): { kind, unlit, url, generation }, null while it is
// asked for or when it could not be read), its item's key (fileStickerKey) and a request as
// stickerContentRequest() makes one, the item keyed by that key and fetched from `src`; the request is null
// where the Sticker is not active (outside its Clip range, hidden), which keeps its item loaded.
export function fileStickerRequests(sceneState, evaluated, editorFile) {
  const entries = [];
  sceneState.stickers.forEach((sticker, index) => {
    if (sticker.placement !== "world" || !is3dFileSource(sticker.source)) return;
    const file = editorFile(sticker);
    if (!file) return;
    const key = fileStickerKey(sticker.id, file.generation);
    const value = evaluated.stickers[index];
    const request = value.active ? {
      kind: file.kind,
      unlit: file.unlit !== false,
      url: key,
      urls: [key],
      prefetch: [],
      src: file.url,
      transform: sceneTransform(value),
      itemQuaternion: file.kind === "splat" ? SPLAT_TO_SCENE : { x: 0, y: 0, z: 0, w: 1 },
      id: sticker.id,
      opacity: value.opacity,
      value,
    } : null;
    entries.push({ id: sticker.id, key, request });
  });
  return entries;
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
// A world Sticker with a `lens` (ADR 0042) is a patch of a sphere instead: `patch` (lensPatch()).
export function worldStickerPlane(value, crop, mediaWidth, mediaHeight) {
  const cropWidth = (crop.x1 - crop.x0) * mediaWidth;
  const cropHeight = (crop.y1 - crop.y0) * mediaHeight;
  if (!(cropWidth > 0 && cropHeight > 0)) return null;
  const plane = {
    position: [...value.position],
    quaternion: rotationToQuaternion(worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg)),
    rotation: worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg),
    width: value.scale,
    height: value.scale * cropHeight / cropWidth,
  };
  if (value.lens) plane.patch = lensPatch(plane, value.lens);
  return plane;
}

// The sphere patch of a world Sticker's lens { curve, hFOV_deg } (docs/render-contract.md "`world` の Sticker の板"):
// the lens's center `center` (the plane's middle `radius` behind it), the radius scale ÷ (2·g_κ(hFOV ÷ 2)), and the
// image's half extents in film units (halfX = g_κ(hFOV ÷ 2), halfY by the plane's aspect). The patch is the
// directions from the center the lens maps into the image; its middle is the plane's position.
export function lensPatch(plane, lens) {
  const halfX = lensRadius(lens.hFOV_deg * 0.5 * DEG2RAD, lens.curve);
  const radius = plane.width / (2 * halfX);
  return {
    curve: lens.curve,
    center: add(plane.position, apply(plane.rotation, [0, 0, radius])),
    radius,
    halfX,
    halfY: halfX * plane.height / plane.width,
  };
}

// The World point of a plane at (x, y), each -1 to 1 across it: on its sphere patch when it has one.
function planePoint(plane, x, y) {
  if (!plane.patch) return add(plane.position, apply(plane.rotation, [x * plane.width / 2, y * plane.height / 2, 0]));
  const { patch } = plane;
  const ray = lensFilmDirection(x * patch.halfX, y * patch.halfY, patch.curve);
  return ray && add(patch.center, apply(plane.rotation, ray.map((value) => value * patch.radius)));
}

// The World corners of a worldStickerPlane() (or a world Sticker layer of the same shape); a patch's past 180° off
// its lens's axis are left out.
export function planeCorners(plane) {
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([x, y]) => planePoint(plane, x, y)).filter(Boolean);
}

// The edge of a plane's image as World segments, `steps` per side: a lens patch's selection frame (ADR 0042), its
// image's edge on its sphere.
export function planeOutlineSegments(plane, steps = 24) {
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  const points = [];
  corners.forEach(([x0, y0], index) => {
    const [x1, y1] = corners[(index + 1) % 4];
    for (let step = 0; step < steps; step += 1) points.push(planePoint(plane, x0 + (x1 - x0) * step / steps, y0 + (y1 - y0) * step / steps));
  });
  return points.flatMap((point, index) => {
    const next = points[(index + 1) % points.length];
    return point && next ? [[point, next]] : [];
  });
}

// The sphere Frame Selected fits, like Blender's View Selected: around the selected Sticker where
// it shows in the World, else around all the content (content, null without content). selected is
// { sticker, value, plane, item }: the state v2 Sticker, its evaluated value at the playhead, its plane
// (a worldStickerPlane(), null before its media has a size), and its 3D item ({ kind, box }: the loaded
// item's own box, null while it loads). A plane is bounded by its corners and a 3D item by its box moved
// by the Sticker's transform; until either is known, a sphere as big as its scale at its position. A sky
// Sticker lies at infinity, so with one selected all the content is framed.
export function frameSphere(content, selected = null) {
  const { sticker, value, plane, item } = selected ?? {};
  if (sticker?.placement !== "world" || !value?.active) return content;
  if (plane) return boundingSphere(planeCorners(plane));
  if (item?.box) return boundingSphere(boxCorners(sceneItemBox(item.kind, item.box)).map((p) => transformPoint(value, p)));
  return { center: [...value.position], radius: value.scale };
}

// --- Placing and transforming world Stickers (#72).

// A new world image without World content goes this far ahead of the view; with content it goes half the radius
// of the content's bounding sphere ahead. A new 3D Sticker goes this far along its direction while its content is
// not known, or when it has none (fit3dPosition; core/world.py has the same constant).
export const NEW_WORLD_STICKER_DISTANCE = 2;
const NEW_WORLD_STICKER_RADIUS_RATIO = 0.5;
// A new world Sticker is as wide as a new sky Sticker (30 degrees) seen from the view.
const NEW_STICKER_HFOV = 30;

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

function multiply(a, b) {
  return a.map((row) => [0, 1, 2].map((index) => row[0] * b[0][index] + row[1] * b[1][index] + row[2] * b[2][index]));
}

function transpose(m) {
  return [0, 1, 2].map((index) => column(m, index));
}

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

// How far the handles of a gizmo (three.js TransformControls, pano_three_view.js createGizmo) reach from
// its center per mode, in its handle units, with the pickers that grab them: the translate and scale
// pickers (cones 0.6 long, 0.2 wide) to 0.64, the rotate view ring (0.75) with its picker's tube to 0.85.
const GIZMO_REACH = { translate: 0.64, rotate: 0.85, scale: 0.64 };

// The box that the gizmo at World point `position` in `mode` covers in a width x height view from camera
// (a spaceCamera()), as { minX, maxX, minY, maxY }, or null when its center is not in front. The gizmo
// keeps its size on screen: TransformControls scales a handle unit to distance * min(1.9 tan(fovY / 2),
// 7) / 4 World units (size 1), so its handles stay inside a sphere around its center. The box holds that
// sphere's outline, between the planes through the camera that touch the sphere; a sphere around the
// camera covers the whole view.
export function gizmoScreenBox(camera, position, mode, width, height) {
  if (!projectPoint(camera, position, width, height)) return null;
  const { right, up, forward } = cameraAxes(camera);
  const d = sub(position, camera.position);
  const x = dot(d, right);
  const y = dot(d, up);
  const z = dot(d, forward);
  const tanY = Math.tan(camera.fovY_deg * 0.5 * DEG2RAD);
  const tanX = tanY * camera.aspect;
  const r = Math.hypot(x, y, z) * GIZMO_REACH[mode] * Math.min(1.9 * tanY, 7) / 4;
  if (!(z > r)) return { minX: 0, maxX: width, minY: 0, maxY: height };
  // The slopes k (offset over depth) of the two touching planes along one axis.
  const slopes = (c) => {
    const root = r * Math.sqrt(c * c + z * z - r * r);
    return [(c * z - root) / (z * z - r * r), (c * z + root) / (z * z - r * r)];
  };
  const [left, rightSlope] = slopes(x);
  const [bottom, top] = slopes(y);
  return {
    minX: width * 0.5 * (1 + left / tanX),
    maxX: width * 0.5 * (1 + rightSlope / tanX),
    minY: height * 0.5 * (1 - top / tanY),
    maxY: height * 0.5 * (1 - bottom / tanY),
  };
}

// A gizmo's scale is uniform: of the three axes the one the drag changed the most from `start`
// (a scale handle changes one axis, the center handle all three). Never 0 or below.
export function uniformScale(start, [x, y, z]) {
  const changed = [x, y, z].reduce((best, value) => (Math.abs(value - start) > Math.abs(best - start) ? value : best), start);
  return Math.max(changed, start * 1e-3, 1e-6);
}

// The ground grid on the World XZ plane for content of size radius: lines every power of ten that
// gives at least 10 cells across the content, 20 cells each way of the origin.
export function gridSpec(radius) {
  const step = 10 ** Math.floor(Math.log10(Math.max(radius, 1e-6) / 5));
  return { step, size: step * 40, divisions: 40 };
}

// --- Camera guides: a Camera's frustum and its trajectory over the Timeline. Panorama Studio's editor
// draws them with renderSpace's `lines` and enters a Camera's view with cameraView().

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
  if (camera.curve !== undefined && camera.curve !== 1) return lensFrustumSegments(camera, rotation, length);
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

// A lens Camera's frustum (ADR 0042): its image's edges as the rays they shoot (pano_lens.js lensFilmDirection),
// `length` out, with lines from the Camera to the corners and the edges' middles, and the mark above the top. An
// edge point past 180° off the axis is left out.
const LENS_FRUSTUM_STEPS = 8;

function lensFrustumSegments(camera, rotation, length) {
  const halfX = lensRadius(camera.hFOV_deg * 0.5 * DEG2RAD, camera.curve);
  const halfY = halfX / camera.aspect;
  const at = (x, y) => {
    const ray = lensFilmDirection(x, y, camera.curve);
    return ray && add(camera.position, apply(rotation, ray.map((value) => value * length)));
  };
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  const outline = [];
  corners.forEach(([x0, y0], index) => {
    const [x1, y1] = corners[(index + 1) % 4];
    for (let step = 0; step < LENS_FRUSTUM_STEPS; step += 1) {
      const t = step / LENS_FRUSTUM_STEPS;
      outline.push(at((x0 + (x1 - x0) * t) * halfX, (y0 + (y1 - y0) * t) * halfY));
    }
  });
  const segments = [];
  outline.forEach((point, index) => {
    const next = outline[(index + 1) % outline.length];
    if (point && next) segments.push([point, next]);
    if (point && index % (LENS_FRUSTUM_STEPS / 2) === 0) segments.push([camera.position, point]);
  });
  const top = [at(-halfX * 0.5, halfY * 1.1), at(0, halfY * 1.5), at(halfX * 0.5, halfY * 1.1)];
  if (top.every(Boolean)) segments.push([top[0], top[1]], [top[1], top[2]], [top[2], top[0]]);
  return segments;
}

// Whether the canvas point p is within `tolerance` pixels of one of the World segments (a Camera's
// frustum, cameraFrustumSegments()) in a width x height view from camera (a spaceCamera()). A segment
// counts where both its ends are in front of the view.
export function segmentsHit(camera, segments, p, width, height, tolerance = 6) {
  return segments.some(([a, b]) => {
    const pa = projectPoint(camera, a, width, height);
    const pb = projectPoint(camera, b, width, height);
    if (!pa || !pb) return false;
    const dx = pb.x - pa.x;
    const dy = pb.y - pa.y;
    const t = clamp(((p.x - pa.x) * dx + (p.y - pa.y) * dy) / Math.max(dx * dx + dy * dy, 1e-12), 0, 1);
    return Math.hypot(pa.x + dx * t - p.x, pa.y + dy * t - p.y) <= tolerance;
  });
}

// The segments of a polyline through points (a cameraTrajectory()).
export function polylineSegments(points) {
  return points.slice(1).map((point, index) => [points[index], point]);
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
