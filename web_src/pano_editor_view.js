// Editor view: derives what the three.js view draws from state v2 and loads the view on demand.
// #71 adds the World layers and the Viewport camera's movement in space here.
import { evaluateSceneState } from "./pano_scene_eval.js";
import { DEG2RAD, RAD2DEG, norm } from "./pano_camera_math.js";
import { contextHalfExtentsPx, getCutoutCameraParams } from "./pano_cutout_view_math.js";
import { panoToWorld, quaternionToRotation, rotationToQuaternion, worldRotation, worldToPano } from "./pano_world.js";

// The three.js view renders at most this many pixels on a side.
export const MAX_RENDER_SIDE = 2048;
// A hidden port Sticker is drawn this faintly so it can be found and shown again.
export const HIDDEN_PREVIEW_OPACITY = 0.28;

// The three.js camera for a panorama view with the Camera value's angles. hFOV_deg spans the view
// width like the previous renderer, so the vertical FOV follows the view's aspect.
export function viewportCamera(view, width, height) {
  const aspect = width / height;
  const tanHalfH = Math.tan(view.hFOV_deg * 0.5 * DEG2RAD);
  return {
    quaternion: rotationToQuaternion(worldRotation(view.yaw_deg, view.pitch_deg, view.roll_deg)),
    fovY_deg: 2 * Math.atan(tanHalfH / aspect) * RAD2DEG,
    aspect,
  };
}

// The three.js camera that looks through a Cutout shot. hFOV_deg and vFOV_deg span the view
// whatever its pixel aspect, as the Cutout node stretches them over its output size.
export function shotCamera(shot) {
  const camera = getCutoutCameraParams(shot);
  return {
    quaternion: rotationToQuaternion(worldRotation(camera.yawDeg, camera.pitchDeg, camera.rollDeg)),
    fovY_deg: camera.vFovDeg,
    aspect: camera.aspect,
  };
}

// The Frame view (ADR 0021) looks through the shot over the whole canvas, not only its gate: the
// context around the gate keeps the gate's focal length and stops at 85 degrees off axis. gate is
// the gateRectFromFocal() layout. Returns the canvas rect to draw into and the shot that spans it.
export function frameViewContext(shot, gate, canvasSize) {
  const focal = Math.max(1, gate.focalPx);
  const { halfW, halfH } = contextHalfExtentsPx(canvasSize, focal);
  const centerX = gate.x + gate.w * 0.5;
  const centerY = gate.y + gate.h * 0.5;
  return {
    rect: { x: centerX - halfW, y: centerY - halfH, w: halfW * 2, h: halfH * 2 },
    shot: {
      ...shot,
      hFOV_deg: 2 * Math.atan(halfW / focal) * RAD2DEG,
      vFOV_deg: 2 * Math.atan(halfH / focal) * RAD2DEG,
    },
  };
}

// The screen mapping of a width x height view drawn with camera (a viewportCamera() or shotCamera()
// setup), the same projection the three.js camera renders with. Hit testing and the 2D overlays
// use it so they line up with the drawn frame. Directions are in the panorama convention.
export function viewProjection(camera, width, height) {
  const [[m11, m12, m13], [m21, m22, m23], [m31, m32, m33]] = quaternionToRotation(camera.quaternion);
  const tanY = Math.tan(camera.fovY_deg * 0.5 * DEG2RAD);
  const tanX = tanY * camera.aspect;
  return {
    width,
    height,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(dir, nearZ = 1e-4) {
      const world = panoToWorld(dir);
      const x = m11 * world.x + m21 * world.y + m31 * world.z;
      const y = m12 * world.x + m22 * world.y + m32 * world.z;
      const z = -(m13 * world.x + m23 * world.y + m33 * world.z);
      const depth = Math.max(z, nearZ);
      return {
        x: width * 0.5 * (1 + x / depth / tanX),
        y: height * 0.5 * (1 - y / depth / tanY),
        z,
      };
    },
    // The unit direction seen at the point (x, y).
    ray(x, y) {
      const px = (x / width * 2 - 1) * tanX;
      const py = (1 - y / height * 2) * tanY;
      return norm(worldToPano({
        x: m11 * px + m12 * py - m13,
        y: m21 * px + m22 * py - m23,
        z: m31 * px + m32 * py - m33,
      }));
    },
  };
}

// Sky layers from back to front: the state's sky Stickers evaluated at the Timeline frame, and the
// paint layers (ERP canvases). Sky Stickers and paint share one z_index axis; #52 adds z_index to
// the sky Stickers of state v2, and until then the editor's z_index is passed in.
// media(sticker) returns { media, revision } for a Sticker, or null.
export function skyLayers(sceneState, frame, { media, zIndex, paintLayers }) {
  const evaluated = evaluateSceneState(sceneState, frame);
  const layers = [];
  sceneState.stickers.forEach((sticker, index) => {
    const value = evaluated.stickers[index];
    if (sticker.placement !== "sky") return;
    const hiddenPort = sticker.source.kind === "port" && !sticker.visible;
    if (!value.active && !hiddenPort) return;
    const shown = media(sticker);
    if (!shown) return;
    const tanX = Math.tan(value.hFOV_deg * 0.5 * DEG2RAD);
    const tanY = Math.tan(value.vFOV_deg * 0.5 * DEG2RAD);
    const { crop } = sticker;
    layers.push({
      kind: "sticker",
      id: sticker.id,
      media: shown.media,
      revision: shown.revision,
      opacity: hiddenPort ? HIDDEN_PREVIEW_OPACITY : value.opacity,
      zIndex: zIndex(sticker),
      quaternion: rotationToQuaternion(worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * crop.x0 - 1) * tanX,
        x1: (2 * crop.x1 - 1) * tanX,
        y0: (1 - 2 * crop.y1) * tanY,
        y1: (1 - 2 * crop.y0) * tanY,
      },
    });
  });
  for (const layer of paintLayers) layers.push({ kind: "erp", ...layer });
  return layers.sort((a, b) => a.zIndex - b.zIndex);
}

// skyLayers() over the editor's working (v1) Stickers: media(item) gets the working Sticker a sky
// Sticker came from, and its z_index orders it. Loading renames a missing, non-string or repeated
// id (the first Sticker keeps it), so a renamed Sticker has no working Sticker and is left out.
export function workingSkyLayers(sceneState, frame, stickers, { media, paintLayers }) {
  const byId = new Map();
  for (const item of stickers) {
    if (typeof item?.id === "string" && item.id && !byId.has(item.id)) byId.set(item.id, item);
  }
  return skyLayers(sceneState, frame, {
    media: (sticker) => {
      const item = byId.get(sticker.id);
      return item ? media(item) : null;
    },
    zIndex: (sticker) => Number(byId.get(sticker.id)?.z_index || 0),
    paintLayers,
  });
}

const mediaIds = new WeakMap();
let nextMediaId = 1;

function mediaId(media) {
  if (!mediaIds.has(media)) mediaIds.set(media, nextMediaId++);
  return mediaIds.get(media);
}

// A key that changes whenever the frame drawn from { background, layers } can change: the media
// objects and revisions the view uploads textures by, and every placement it draws with.
export function viewInputKey({ background, layers }) {
  return JSON.stringify([
    background && [mediaId(background.media), background.revision, background.coverage],
    layers.map((layer) => [layer.kind, layer.id, mediaId(layer.media), layer.revision, layer.opacity, layer.quaternion, layer.rect]),
  ]);
}

// onReady runs once the view can render. onFailed runs when the chunk or WebGL is unavailable; the
// editor then shows the failure instead of a frame.
export function createEditorView({ onReady, onFailed }) {
  let view = null;
  let disposed = false;
  const editorView = {
    ready: false,
    failed: false,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded.
    render(input) {
      return view ? view.render(input) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(input) {
      return view ? view.renderUnwrap(input) : null;
    },
    dispose() {
      disposed = true;
      view?.dispose();
      view = null;
    },
  };
  import("./pano_three_view.js").then((module) => {
    if (disposed) return;
    view = module.createThreeView();
    editorView.ready = true;
    onReady();
  }).catch((error) => {
    console.error("[PanoramaStickers] three.js view is unavailable", error);
    editorView.failed = true;
    onFailed();
  });
  return editorView;
}
