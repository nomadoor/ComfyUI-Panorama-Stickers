// What the new UI's stage draws and hits, from the viewpoint (view_camera.js) and the stage's size: the three.js
// camera of the view, the surface hit under a pixel (docs/space-and-view.md "注視点 `T`": the nearest of the GPU pick
// of the World content and the ground y = ground, which the GPU pick does not draw), and a render's input for the
// lower three.js view (pano_three_view.js render). Pure: the GPU pick comes in as a point.
import { placeDirection, screenRenderSize } from "../pano_editor_view.js";
import { evaluateCamera } from "../pano_scene_eval.js";
import { DEFAULT_VIEW_HFOV, spaceCamera } from "../pano_space.js";
import { groundGrid } from "./grid.js";

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

// The output view of state v2 `state` at the Timeline frame `frame` (docs/space-and-view.md "開いたときの視点と
// Reset View"): the Camera's position and yaw there, looking level (pitch 0). A state without a Camera (an older
// one) has the default Camera, at the World's origin with yaw 0.
export function outputView(state, frame) {
  const value = state.camera ? evaluateCamera(state.camera, frame) : null;
  return { position: value ? [...value.position] : [0, 0, 0], yaw_deg: value?.yaw_deg ?? 0, pitch_deg: 0 };
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
export function stageRenderInput({ camera, canvasWidth, canvasHeight, background, ground, gridHidden, clearColor = STAGE_CLEAR_COLOR, content = null }) {
  const grid = groundGrid({ ground, hidden: gridHidden });
  return {
    rect: { x: 0, y: 0, w: canvasWidth, h: canvasHeight },
    camera,
    background: background ?? null,
    layers: content?.layers ?? [],
    owner: "studio-stage",
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
