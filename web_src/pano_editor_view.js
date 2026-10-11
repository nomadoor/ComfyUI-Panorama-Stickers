// Editor view: derives what the three.js view draws from state v2 and loads the view on demand.
// The World (the `scene` input and the world Stickers) and the Viewport camera's movement in space
// are in pano_space.js.
import { skyStickerVfov } from "./pano_editor_state.js";
import { evaluateSceneState } from "./pano_scene_eval.js";
import { is3dFileSource } from "./pano_scene_state.js";
import { watchThreeView } from "./pano_diagnostics.js";
import { DEG2RAD, RAD2DEG, norm } from "./pano_camera_math.js";
import { contextHalfExtentsPx, getCutoutCameraParams, shotCurve } from "./pano_cutout_view_math.js";
import { lensRadius, lensRenderPlan } from "./pano_lens.js";
import { worldStickerPlane } from "./pano_space.js";
import { panoToWorld, quaternionToRotation, rotationToQuaternion, worldRotation, worldToPano } from "./pano_world.js";

// The device pixels a canvas of cssWidth x cssHeight draws at: its CSS size x devicePixelRatio, but no
// larger than the screen can show (the window's size x devicePixelRatio): a node surface on a graph zoomed
// in far, or a stage larger than the window, shows only that much at a time. A larger size is scaled down
// evenly, which loses no pixel that is seen.
export function screenRenderSize(cssWidth, cssHeight, devicePixelRatio, screenWidth, screenHeight) {
  const width = Math.max(0, cssWidth) * devicePixelRatio;
  const height = Math.max(0, cssHeight) * devicePixelRatio;
  const scale = Math.min(1, (screenWidth * devicePixelRatio) / Math.max(width, 1), (screenHeight * devicePixelRatio) / Math.max(height, 1));
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

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
// A lens Camera (κ ≠ 1, ADR 0042) draws its image over the whole canvas instead, as the lens maps it (θ past 180°
// shows bg_color): `lens` is then { curve, focalPx, centerX, centerY }, the image's f and its center in the rect.
export function frameViewContext(shot, gate, canvasSize) {
  const focal = Math.max(1, gate.focalPx);
  const centerX = gate.x + gate.w * 0.5;
  const centerY = gate.y + gate.h * 0.5;
  const curve = shotCurve(shot);
  if (curve !== 1) {
    const halfW = Math.max(centerX, (canvasSize.width ?? canvasSize.w) - centerX, 1);
    const halfH = Math.max(centerY, (canvasSize.height ?? canvasSize.h) - centerY, 1);
    return {
      rect: { x: centerX - halfW, y: centerY - halfH, w: halfW * 2, h: halfH * 2 },
      shot,
      lens: { curve, focalPx: focal, centerX: halfW, centerY: halfH },
    };
  }
  const { halfW, halfH } = contextHalfExtentsPx(canvasSize, focal);
  return {
    rect: { x: centerX - halfW, y: centerY - halfH, w: halfW * 2, h: halfH * 2 },
    shot: {
      ...shot,
      hFOV_deg: 2 * Math.atan(halfW / focal) * RAD2DEG,
      vFOV_deg: 2 * Math.atan(halfH / focal) * RAD2DEG,
    },
  };
}

// frameViewContext()'s lens in pixels `scale` times the overlay's (the three.js canvas's device pixels).
export function deviceLens(lens, scale) {
  return { ...lens, focalPx: lens.focalPx * scale, centerX: lens.centerX * scale, centerY: lens.centerY * scale };
}

// The lens of a shot drawn into a rect of width x height device pixels (render()'s input.lens, ADR 0042), or null
// for a pinhole: `lens` places the image (frameViewContext()'s, in those pixels), else it fills the rect. background
// is the node's bg_color as a hex RGB, which shows past 180° off the axis. `previous` is the kind of the lens the same
// view drew last (its `kind`; lensRenderPlan).
export function shotLensImage(shot, width, height, background, lens = null, previous = null) {
  const curve = shotCurve(shot);
  if (curve === 1) return null;
  const focal = lens?.focalPx ?? (width / 2) / lensRadius(getCutoutCameraParams(shot).hFovDeg * DEG2RAD * 0.5, curve);
  const centerX = lens?.centerX ?? width / 2;
  const centerY = lens?.centerY ?? height / 2;
  // The Camera's turn decides which faces of the World-aligned cube the image samples.
  const { kind, faces } = lensRenderPlan({ width, height, centerX, centerY, focal, curve, quaternion: shotCamera(shot).quaternion, previous });
  return { kind, curve, focal, centerX, centerY, background, faces };
}

// The direction, a World [x, y, z] of length 1, a new 3D Sticker is placed along from the view `camera` (a
// spaceCamera()) of width x height pixels: the ray through `point` (a drop, in those pixels), or through the view's
// center (the button). It is the direction of pano_pick.js pickRay, which the three.js chunk keeps to itself.
export function placeDirection(camera, point, width, height) {
  const at = point ?? { x: width / 2, y: height / 2 };
  const { x, y, z } = panoToWorld(viewProjection(camera, width, height).ray(at.x, at.y));
  return [x, y, z];
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

// Sky layers from back to front: the state's sky Stickers evaluated at the Timeline frame (a port
// Sticker at the vFOV of its media, skyStickerVfov), and the paint layers (ERP canvases). Sky Stickers
// and paint share one z_index axis; #52 adds z_index to the sky Stickers of state v2, and until then the
// editor's z_index is passed in.
// media(sticker) returns { media, revision, source? } for a Sticker (source: see pano_three_view.js
// createLayerTextures), or null. evaluated is evaluateSceneState(sceneState, frame), when the caller has it.
export function skyLayers(sceneState, frame, { media, zIndex, paintLayers, evaluated = evaluateSceneState(sceneState, frame) }) {
  const layers = [];
  sceneState.stickers.forEach((sticker, index) => {
    const value = evaluated.stickers[index];
    // A 3D file is no image; a sky Sticker with one is not drawn, as the node does not draw it.
    if (sticker.placement !== "sky" || is3dFileSource(sticker.source)) return;
    const hiddenPort = sticker.source.kind === "port" && !sticker.visible;
    if (!value.active && !hiddenPort) return;
    const shown = media(sticker);
    if (!shown) return;
    // At a lens curve other than 1 (ADR 0042) the rect is on that lens's image (pano_lens.js lensRadius).
    const curve = value.curve ?? 1;
    const tanX = lensRadius(value.hFOV_deg * 0.5 * DEG2RAD, curve);
    const tanY = lensRadius(skyStickerVfov(sticker, value, mediaSize(shown.media)) * 0.5 * DEG2RAD, curve);
    const { crop } = sticker;
    layers.push({
      kind: "sticker",
      id: sticker.id,
      media: shown.media,
      revision: shown.revision,
      source: shown.source,
      opacity: hiddenPort ? HIDDEN_PREVIEW_OPACITY : value.opacity,
      zIndex: zIndex(sticker),
      quaternion: rotationToQuaternion(worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg)),
      curve,
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

// skyLayers() over the editor's working Stickers (v1 for the legacy node, state v2 for
// Panorama Studio): media(item) gets the working Sticker a sky Sticker came from, and its
// z_index orders it. Loading renames a missing, non-string or repeated
// id (the first Sticker keeps it), so a renamed Sticker has no working Sticker and is left out.
export function workingSkyLayers(sceneState, frame, stickers, { media, paintLayers, evaluated }) {
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
    evaluated,
  });
}

function mediaSize(media) {
  return {
    width: Number(media.videoWidth || media.naturalWidth || media.width || 0),
    height: Number(media.videoHeight || media.naturalHeight || media.height || 0),
  };
}

// The planes of the world Stickers shown at a Timeline frame, for the space view's `stickers`: each is
// a worldStickerPlane() with its media (media(item) as in workingSkyLayers, by the working Sticker of
// the same id) and opacity. A Sticker without media, or whose media has no size yet, and a 3D file Sticker are
// left out.
// evaluated is evaluateSceneState(sceneState, frame), when the caller has it.
export function worldStickerLayers(sceneState, frame, stickers, { media, evaluated = evaluateSceneState(sceneState, frame) }) {
  const byId = new Map();
  for (const item of stickers) {
    if (typeof item?.id === "string" && item.id && !byId.has(item.id)) byId.set(item.id, item);
  }
  const layers = [];
  sceneState.stickers.forEach((sticker, index) => {
    const value = evaluated.stickers[index];
    // A 3D file Sticker draws its item (pano_space.js fileStickerRequests), not a plane.
    if (sticker.placement !== "world" || !value.active || is3dFileSource(sticker.source)) return;
    const item = byId.get(sticker.id);
    const shown = item ? media(item) : null;
    if (!shown) return;
    const { width, height } = mediaSize(shown.media);
    const plane = worldStickerPlane(value, sticker.crop, width, height);
    if (!plane) return;
    layers.push({
      id: sticker.id,
      media: shown.media,
      revision: shown.revision,
      source: shown.source,
      opacity: value.opacity,
      position: plane.position,
      quaternion: plane.quaternion,
      rotation: plane.rotation,
      width: plane.width,
      height: plane.height,
      crop: sticker.crop,
      ...(plane.patch ? { patch: plane.patch } : {}),
    });
  });
  return layers;
}

// The editor's three.js view, drawing on `canvas`, the stage's own canvas in the page (nothing copies its
// frames). onReady runs once the view can render. onFailed runs when the chunk or WebGL is unavailable;
// the editor then shows the failure instead of a frame. onUpdate runs when the space view changes by itself
// (a `scene` item or Spark loaded), so the editor draws again. onSplats(owner) runs when the Spark renderer
// of owner's view sorted its splats (pano_three_view.js createThreeView), so that view draws again.
//
// When the WebGL context is lost, the view lets go of what it held and renders nothing (render() returns
// null) until the context is restored; then a new view is made on the canvas and onRestored runs, so the
// editor draws everything again. load imports pano_three_view.js.
export function createEditorView({ canvas, onReady, onFailed, onUpdate = () => {}, onSplats = () => {}, onRestored = () => {}, load = () => import("./pano_three_view.js") }) {
  let module = null;
  let view = null;
  let disposed = false;
  // contentRevision() goes on from the views before, so a view made again never repeats a count.
  let revisionBase = 0;
  const start = () => {
    view = watchThreeView(module.createThreeView({ onUpdate, onSplats, createCanvas: () => canvas }), "editor");
  };
  const editorView = {
    ready: false,
    failed: false,
    // The WebGL context is lost; the view waits for it to come back.
    lost: false,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(input) {
      return view && !editorView.lost ? view.render(input) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(input) {
      return view && !editorView.lost ? view.renderUnwrap(input) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(width, height) {
      return view && !editorView.lost ? view.resize(width, height) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(color, rect) {
      if (view && !editorView.lost) view.clear(color, rect);
    },
    // Frees the Spark renderer of an owner that stops drawing SPLATs for now (pano_three_view.js
    // releaseSplats).
    releaseSplats(owner) {
      if (view && !editorView.lost) view.releaseSplats(owner);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(url) {
      return view ? view.sceneBox(url) : null;
    },
    // Why a `scene` or 3D Sticker item failed to load (pano_three_view.js sceneItemError), or null.
    sceneItemError(url) {
      return view ? view.sceneItemError(url) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(camera, x, y, width, height) {
      return view && !editorView.lost ? view.pick(camera, x, y, width, height) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(camera, x, y, width, height) {
      return view && !editorView.lost ? view.pickSurface(camera, x, y, width, height) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(camera, x, y, width, height) {
      return view && !editorView.lost ? view.pickSticker(camera, x, y, width, height) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(phase, camera, x, y, width, height) {
      return view && !editorView.lost ? view.gizmoPointer(phase, camera, x, y, width, height) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return revisionBase + (view ? view.contentRevision() : 0);
    },
    dispose() {
      disposed = true;
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestore);
      view?.dispose();
      view = null;
    },
  };
  // The browser restores a lost context only when its loss is prevented. The view lets go of its GPU
  // resources now, while every WebGL call does nothing; the diagnostics still count the context as the
  // view's until it is restored.
  function onLost(event) {
    event.preventDefault();
    if (disposed || editorView.lost) return;
    editorView.lost = true;
    editorView.ready = false;
    view?.dispose({ lost: true });
  }
  // After the diagnostics have counted the restore (their listener runs in the same dispatch), the old
  // view is dropped and a new one made on the canvas.
  function onRestore() {
    if (disposed || !editorView.lost) return;
    queueMicrotask(() => {
      if (disposed || !editorView.lost) return;
      if (view) revisionBase += view.contentRevision() + 1;
      view?.dispose();
      view = null;
      editorView.lost = false;
      if (!module) return;
      start();
      editorView.ready = true;
      onRestored();
    });
  }
  canvas.addEventListener("webglcontextlost", onLost);
  canvas.addEventListener("webglcontextrestored", onRestore);
  load().then((loaded) => {
    if (disposed) return;
    module = loaded;
    if (editorView.lost) return;
    start();
    editorView.ready = true;
    onReady();
  }).catch((error) => {
    console.error("[PanoramaStickers] three.js view is unavailable", error);
    editorView.failed = true;
    onFailed();
  });
  return editorView;
}
