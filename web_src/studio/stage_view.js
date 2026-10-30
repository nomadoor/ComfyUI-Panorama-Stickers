// What the new UI's stage draws and hits, from the viewpoint (view_camera.js) and the stage's size: the three.js
// camera of the view, the surface hit under a pixel (docs/space-and-view.md "注視点 `T`": the nearest of the GPU pick
// of the World content and the ground y = ground, which the GPU pick does not draw), and a render's input for the
// lower three.js view (pano_three_view.js render). Pure: the GPU pick comes in as a point.
import { placeDirection } from "../pano_editor_view.js";
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
// the ground grid (hidden with `gridHidden`) and, for now, no World content. Where nothing draws the canvas is
// `clearColor`, or see-through with null (the stage's loading gradient shows behind while the background loads).
export function stageRenderInput({ camera, canvasWidth, canvasHeight, background, ground, gridHidden, clearColor = STAGE_CLEAR_COLOR }) {
  return {
    rect: { x: 0, y: 0, w: canvasWidth, h: canvasHeight },
    camera,
    background: background ?? null,
    layers: [],
    owner: "studio-stage",
    clearColor,
    space: {
      grid: null,
      ground: groundGrid({ ground, hidden: gridHidden }),
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
      gizmo: null,
    },
  };
}
