// What the new UI's stage draws and hits, from the viewpoint (view_camera.js) and the stage's size: the three.js
// camera of the view, the surface hit under a pixel (docs/space-and-view.md "注視点 `T`": the nearest of the GPU pick
// of the World content and the ground y = ground, which the GPU pick does not draw), and a render's input for the
// lower three.js view (pano_three_view.js render). Pure: the GPU pick comes in as a point.
import { getCutoutCameraParams, shotCurve } from "../pano_cutout_view_math.js";
import { frameViewContext, placeDirection, screenRenderSize, shotCamera } from "../pano_editor_view.js";
import { lensAngle, lensCurveBent, lensFilm, lensPickWindow, withLensImage } from "../pano_lens.js";
import { DEFAULT_VIEW_HFOV, placedCamera, spaceCamera } from "../pano_space.js";
import { cameraAt } from "./camera_state.js";
import { groundGrid } from "./grid.js";

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

// The output view of state v2 `state` at the Timeline frame `frame` (docs/space-and-view.md "開いたときの視点と
// Reset View"): the Camera's position and yaw there, looking level (pitch 0). A state without a Camera (an older
// one) has the default Camera, at the World's origin with yaw 0.
export function outputView(state, frame) {
  const value = cameraAt(state, frame);
  return { position: [...value.position], yaw_deg: value.yaw_deg, pitch_deg: 0 };
}

// The stage draws STAGE_RENDER_SCALE times the device pixels and the browser shrinks the picture, so the edges of the
// 3D objects are smooth (docs/design.md "新しい UI の見た目" "描画のくっきりさ"); a side never passes
// STAGE_RENDER_MAX_SIDE (pano_three_view.js resize also keeps it to what the GPU can draw to). The old UI does not use it.
export const STAGE_RENDER_SCALE = 1.5;
export const STAGE_RENDER_MAX_SIDE = 4096;

// The size of the stage's canvas, in pixels, for a stage of cssWidth x cssHeight on a screen of screenWidth x
// screenHeight CSS px at `devicePixelRatio`: the device pixels (pano_editor_view.js screenRenderSize, at most the
// screen's) times STAGE_RENDER_SCALE, the longer side at most STAGE_RENDER_MAX_SIDE.
export function stageRenderSize(cssWidth, cssHeight, devicePixelRatio, screenWidth, screenHeight) {
  const device = screenRenderSize(cssWidth, cssHeight, devicePixelRatio, screenWidth, screenHeight);
  const scale = Math.min(STAGE_RENDER_SCALE, STAGE_RENDER_MAX_SIDE / Math.max(device.width, device.height, 1));
  return {
    width: Math.max(1, Math.round(device.width * scale)),
    height: Math.max(1, Math.round(device.height * scale)),
  };
}

// The stage's background where nothing is drawn (no background, outside a 180° one).
export const STAGE_CLEAR_COLOR = 0x070707;

// The three.js camera (a spaceCamera()) of a pose seen on a stage of width x height CSS px: the horizontal FOV
// DEFAULT_VIEW_HFOV, near and far for the world bound of `radius` about the origin, so what the bound holds and the
// grid up to its farthest fade are not cut.
export function stageCamera(pose, width, height, radius) {
  const distance = Math.hypot(...sub(pose.target, pose.position));
  const view = { position: pose.position, yaw_deg: pose.yaw_deg, pitch_deg: pose.pitch_deg, roll_deg: pose.roll_deg ?? 0, hFOV_deg: DEFAULT_VIEW_HFOV, distance };
  return spaceCamera(view, width, height, { center: [0, 0, 0], radius });
}

// The Frame view of the Camera tab (docs/studio-ui.md "Camera タブ", docs/space-and-view.md "Frame 表示"): the Camera
// `shot` (pano_editor_state.js cameraShot, at the playhead) seen through the frame box `frame` ({ x, y, width, height }
// CSS px, frame_layout.js frameRect) of a stage of width x height CSS px, its picture going on past the box with the
// same focal length (the old Frame view's context, pano_editor_view.js frameViewContext). Returns { camera, rect, lens }:
// `camera` the three.js camera (a placedCamera(): near and far for the pivot `distance` ahead and the world bound of
// `radius` about the origin) that spans `rect` ({ x, y, w, h } CSS px, centered on the box, reaching past the stage
// where the box is off center), and `lens` frameViewContext's lens in those px for a lens Camera (κ ≠ 1), else null.
// A pinhole's rect covers the stage on both sides of the box's center, up to the context's angle limit.
export function cameraFrameView({ shot, frame, width, height, distance, radius }) {
  const { tanHalfX } = getCutoutCameraParams(shot);
  const gate = { x: frame.x, y: frame.y, w: frame.width, h: frame.height, focalPx: frame.width / (2 * tanHalfX) };
  const centerX = frame.x + frame.width / 2;
  const centerY = frame.y + frame.height / 2;
  // frameViewContext's pinhole context spans half the canvas each way from the box's center: the canvas it is given is
  // the one the stage would be with the box centered, so the context still reaches the stage's far edges.
  const canvas = shotCurve(shot) === 1
    ? { width: 2 * Math.max(centerX, width - centerX), height: 2 * Math.max(centerY, height - centerY) }
    : { width, height };
  const context = frameViewContext(shot, gate, canvas);
  const camera = placedCamera(shotCamera(context.shot), shot.position, distance, { center: [0, 0, 0], radius });
  return { camera, rect: context.rect, lens: context.lens ?? null, shot: context.shot };
}

// The Frame view of the Camera `shot` as cameraFrameView() takes it (`fit`: { frame, width, height, distance, radius }),
// with what its hits, guides and gizmo go by (docs/space-and-view.md "レンズの Camera の当たり"): { view (the picture's,
// cameraFrameView()), hit (the same at κ 1 for a κ shown as 1.00, pano_lens.js lensCurveBent; else `view`), hitLens
// (a lens Camera's picture, or null), objectCamera (hit's camera, carrying hitLens: pano_lens.js withLensImage) }.
export function cameraFrameHit(shot, fit) {
  const view = cameraFrameView({ shot, ...fit });
  const bent = !!view.lens && lensCurveBent(view.lens.curve);
  const hit = view.lens && !bent ? cameraFrameView({ shot: { ...shot, curve: 1 }, ...fit }) : view;
  return { view, hit, hitLens: bent ? view.lens : null, objectCamera: bent ? withLensImage(hit.camera, view.lens) : hit.camera };
}

// The H FOV (degrees) the Frame view's amounts take of `shot` (docs/space-and-view.md "レンズの Camera の当たり"): its own
// for a pinhole; for a lens Camera (κ ≠ 1) the pinhole of its image center's scale over the frame, 2·atan(W ÷ 2f), under
// 180° even where the lens's H FOV is past it.
export function frameViewFov(shot) {
  if (shotCurve(shot) === 1) return shot.hFOV_deg;
  return 2 * Math.atan(getCutoutCameraParams(shot).tanHalfX) * 180 / Math.PI;
}

// How far off a lens Camera's axis (degrees) a pan still takes the pointer (lensPinholePoint).
export const LENS_PAN_MAX_DEG = 89;
// The side (px) of the cube face a lens pick draws its pixel in (pano_lens.js lensPickWindow).
const LENS_PICK_SIZE = 1024;

// Where a lens Camera's Frame view (cameraFrameView()'s { camera, lens }) picks the point (x, y) of its rect: the World-
// aligned cube face the pointer's ray crosses, as a pinhole camera of a square view, and that ray's pixel in it —
// { camera, x, y, width, height } — or null past 180° off the axis (docs/space-and-view.md "レンズの Camera の当たり").
export function lensPickView({ camera, lens }, x, y) {
  const film = lensFilm(lens, x, y);
  const face = lensPickWindow(film.x, film.y, lens.curve, LENS_PICK_SIZE, camera.quaternion);
  if (!face) return null;
  return { camera: { ...camera, quaternion: face.quaternion, fovY_deg: 90, aspect: 1 }, x: face.x, y: face.y, width: face.size, height: face.size };
}

// The point a pan on a lens Camera's Frame view takes the pointer at (x, y) as: where a pinhole of the image center's
// scale f shows the pointer's ray (f·tan θ from the center along it), in the same px; null past LENS_PAN_MAX_DEG off the
// axis. A pan that does not turn the view keeps a point at its depth under the pointer when it moves by these points.
export function lensPinholePoint(lens, x, y) {
  const film = lensFilm(lens, x, y);
  const rho = Math.hypot(film.x, film.y);
  if (rho === 0) return { x, y };
  const theta = lensAngle(rho, lens.curve);
  if (!(theta < LENS_PAN_MAX_DEG * Math.PI / 180)) return null;
  const scale = Math.tan(theta) / rho * lens.focalPx;
  return { x: lens.centerX + film.x * scale, y: lens.centerY - film.y * scale };
}

// The ray from the view through (x, y) of a stage of width x height CSS px seen from `camera` (stageCamera()):
// { origin, direction }, the direction one unit long (pano_editor_view.js placeDirection; pano_pick.js pickRay is the
// three.js chunk's own).
export function stageRay(camera, x, y, width, height) {
  return { origin: [...camera.position], direction: placeDirection(camera, { x, y }, width, height) };
}

// How far along `ray` ({ origin, direction }) it meets the ground y = ground ahead, or null.
export function groundDepth(ray, ground) {
  const dy = ray.direction[1];
  if (Math.abs(dy) < 1e-12) return null;
  const t = (ground - ray.origin[1]) / dy;
  return t > 0 ? t : null;
}

// The surface hit at (x, y) of a stage of width x height CSS px seen from `camera` (stageCamera()): the nearest of
// `picked` (the GPU pick's World point there, or null) and the ground. null over nothing.
export function surfaceHit(camera, x, y, width, height, { ground, picked = null }) {
  const ray = stageRay(camera, x, y, width, height);
  const along = dot(ray.direction, ray.direction);
  const depths = [];
  const onGround = groundDepth(ray, ground);
  if (onGround !== null) depths.push(onGround);
  if (picked) {
    const depth = dot(sub(picked, ray.origin), ray.direction) / along;
    if (depth > 0) depths.push(depth);
  }
  if (!depths.length) return null;
  const depth = Math.min(...depths);
  return ray.origin.map((value, axis) => value + ray.direction[axis] * depth);
}

// The render input (pano_three_view.js render) of the stage: the view `camera` on the whole canvas of
// canvasWidth x canvasHeight device px, the background ({ media, revision, coverage } or null), and a space with
// the ground grid (hidden with `gridHidden`) and the working state's content at the playhead (`content`,
// stage_content.js stageContent(): its sky layers and its World part; null draws none). Where nothing draws the canvas is
// `clearColor`, or see-through with null (the stage's loading gradient shows behind while the background loads).
// The three.js view draws no gizmo: the new UI's is on the 2D overlay (gizmo_overlay.js).
// `rect` ({ x, y, w, h } device px, render()'s) draws the view into that part instead (the Camera tab's Frame view), and
// `lens` (pano_editor_view.js shotLensImage) draws it through a lens Camera's pass. `owner` is the draw's
// (pano_three_view.js; the Output window's picture draws for its own).
export function stageRenderInput({ camera, canvasWidth, canvasHeight, background, ground, gridHidden, clearColor = STAGE_CLEAR_COLOR, content = null, rect = null, lens = null, owner = "studio-stage" }) {
  const grid = groundGrid({ ground, hidden: gridHidden });
  return {
    rect: rect ?? { x: 0, y: 0, w: canvasWidth, h: canvasHeight },
    ...(lens ? { lens } : {}),
    camera,
    background: background ?? null,
    layers: content?.layers ?? [],
    owner,
    clearColor,
    space: {
      grid: null,
      // The grid's lines are drawn STAGE_RENDER_SCALE render pixels wide, one device pixel once the picture shrinks.
      ground: grid && { ...grid, linePx: STAGE_RENDER_SCALE },
      sceneUrls: [],
      scene: null,
      stickerUrls: [],
      sticker: null,
      fileStickers: [],
      fileStickerKeys: [],
      stickers: [],
      lines: [],
      upstreamItems: [],
      upstreamStickers: [],
      ...(content?.space ?? {}),
      gizmo: null,
    },
  };
}
