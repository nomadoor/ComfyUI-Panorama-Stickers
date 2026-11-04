// The legacy on-node surfaces' picture (PanoramaStickers, PanoramaCutout; docs/legacy-node-surfaces.md): the panorama
// with its Sky layers and the selected Sticker's handles, or the Cutout's frame over its context, drawn into the DOM
// canvas through the shared three.js view.
import { clamp } from "../pano_math.js";
import { yawPitchToDir } from "../pano_camera_math.js";
import { normalizeCoverageValue } from "../pano_editor_state.js";
import { surfacePaintLayers } from "../pano_surface_paint.js";
import { shotCamera, viewProjection, workingSkyLayers } from "../pano_editor_view.js";
import { previewNodeCamera } from "../pano_preview_view.js";
import { isRenderableMediaReady, mediaPlayheadRevisionToken as getRenderableMediaRevisionToken } from "../pano_media_session.js";
import { buildCutoutPanoramaViewFromShot, fitCutoutNodeFrame, layoutCutoutNodeContext } from "../pano_cutout_node_surface.js";
import { getCutoutCameraParams } from "../pano_cutout_view_math.js";
import { surfacePoseStickers } from "../pano_stickers_node_surface.js";
import { buildStickerGeometry } from "../pano_sticker_geometry.js";
import {
  drawStickerSelectionBoundary,
  drawStickerSelectionHandles,
  stickerSelectionAccent,
} from "../pano_sticker_affordance.js";
import { DEFAULT_VIEW_HFOV } from "../pano_space.js";
import { nodeSurface } from "../pano_node_bridge.js";
import { getNodePreviewImage, surfaceBackgroundMedia, surfaceStickerMedia } from "./media.js";
import { ensureRenderCache, getCachedState, setRenderLoading, surfaceFrame, surfaceSceneState } from "./state.js";

function getNodeUiScale(canvas, rect) {
  const rw = Math.max(1, Number(rect?.w || 1));
  const rh = Math.max(1, Number(rect?.h || 1));
  const cw = Math.max(1, Number(canvas?.clientWidth || rw));
  const ch = Math.max(1, Number(canvas?.clientHeight || rh));
  const sx = rw / cw;
  const sy = rh / ch;
  const scale = Math.min(sx, sy);
  return Number.isFinite(scale) && scale > 0 ? scale : 1;
}

function drawLoadingOverlay(ctx, rect, uiScale = 1) {
  const x = Number(rect?.x || 0);
  const y = Number(rect?.y || 0);
  const w = Number(rect?.w || 0);
  const h = Number(rect?.h || 0);
  if (w <= 0 || h <= 0) return;
  const fontPx = Math.max(14, Math.round(14 * uiScale));
  const bw = Math.min(Math.round(220 * uiScale), Math.max(Math.round(120 * uiScale), w * 0.44));
  const bh = Math.max(Math.round(34 * uiScale), fontPx + Math.round(14 * uiScale));
  const bx = x + (w - bw) * 0.5;
  const by = y + (h - bh) * 0.5;
  ctx.save();
  ctx.fillStyle = "rgba(20,20,24,0.72)";
  ctx.beginPath();
  ctx.roundRect(bx, by, bw, bh, 8);
  ctx.fill();
  ctx.fillStyle = "rgba(161,161,170,0.95)";
  ctx.font = `600 ${fontPx}px Plus Jakarta Sans, Geist, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Loading...", bx + bw * 0.5, by + bh * 0.5 + 0.5);
  ctx.restore();
}

function setCutoutEmptyHint(node, visible) {
  const el = nodeSurface(node)?.dom?.emptyHintEl;
  if (!el) return;
  el.style.display = visible ? "flex" : "none";
}

function getActiveShot(state) {
  const shots = Array.isArray(state?.shots) ? state.shots : [];
  if (!shots.length) return null;
  const selectedId = String(state?.active?.selected_shot_id || "");
  if (selectedId) {
    const hit = shots.find((s) => String(s?.id || "") === selectedId);
    if (hit) return hit;
  }
  return shots[0] || null;
}

function getSourcePixelSize(source) {
  return {
    width: Math.max(1, Number(source?.naturalWidth || source?.videoWidth || source?.width || 0)),
    height: Math.max(1, Number(source?.naturalHeight || source?.videoHeight || source?.height || 0)),
  };
}

function drawStickerFrame(ctx, item, projection) {
  const geometry = buildStickerGeometry(item, projection);
  if (geometry.visible) drawStickerSelectionBoundary(ctx, geometry.boundaryEdges, { selected: false });
}

function drawStickerSelectionOverlay(ctx, item, projection) {
  const geometry = buildStickerGeometry(item, projection);
  if (!geometry.visible) return;
  ctx.save();
  drawStickerSelectionBoundary(ctx, geometry.boundaryEdges, { selected: true });
  drawStickerSelectionHandles(ctx, geometry, { accent: stickerSelectionAccent(item) });
  ctx.restore();
}

// The camera projection of the on-node Stickers view, for its overlays and hit testing.
export function stickersSurfaceProjection(node, width, height) {
  return viewProjection(previewNodeCamera(nodeSurface(node).view || { yaw: 0, pitch: 0, fov: DEFAULT_VIEW_HFOV }, width, height), width, height);
}

// The background a legacy on-node surface draws (`bgImg`, its looping VIDEO or the linked image) once it has a picture,
// over the node's coverage; null while it loads or without one.
function surfaceBackground(state, bgImg) {
  return isRenderableMediaReady(bgImg) ? { media: bgImg, revision: getRenderableMediaRevisionToken(bgImg), coverage: normalizeCoverageValue(state.coverage) } : null;
}

// What the on-node surfaces draw with three.js: the background, and the Sky layers of the node's
// state (its sky Stickers and paint) from back to front, at surfaceFrame.
function surfaceViewInput(node, state, bgImg) {
  const sceneState = surfaceSceneState(node, state);
  const paintLayers = surfacePaintLayers(nodeSurface(node), state);
  return {
    background: surfaceBackground(state, bgImg),
    layers: workingSkyLayers(sceneState, surfaceFrame(node), state.stickers, { media: (item) => surfaceStickerMedia(node, state, item), paintLayers }),
  };
}

// The legacy on-node surfaces (PanoramaStickers, PanoramaCutout); Panorama Studio draws drawStudioPicture.
export function drawCanvas(node, canvas, surfaceView) {
  const surface = nodeSurface(node);
  const mode = String(surface.mode || "stickers");
  ensureRenderCache(node, mode);
  const state = getCachedState(node);
  if (mode === "cutout" && surface.cutoutState !== state) {
    surface.cutoutState = state;
    surface.cutout?.session?.refresh?.();
  } else if (mode === "stickers" && surface.stickersState !== state) {
    surface.stickersState = state;
    surface.stickers?.session?.refresh?.();
  }
  const wrap = canvas.parentElement;
  const surfW = Math.max(64, Math.round(Number(wrap?.clientWidth || canvas.clientWidth || 0)));
  const surfH = Math.max(64, Math.round(Number(wrap?.clientHeight || canvas.clientHeight || 0)));

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  if (canvas.width !== surfW || canvas.height !== surfH) {
    canvas.width = surfW;
    canvas.height = surfH;
  }
  const rect = { x: 0, y: 0, w: surfW, h: surfH };
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#070707";
  ctx.fillRect(0, 0, surfW, surfH);
  // The legacy node loops its background VIDEO.
  const bgImg = surfaceBackgroundMedia(node);
  const bgReady = isRenderableMediaReady(bgImg);
  // Draws what camera sees into target and reports whether the view could draw it.
  let input = null;
  const viewInput = () => surfaceViewInput(node, state, bgImg);
  const drawView = (target, camera) => {
    input ||= viewInput();
    const rendered = surfaceView.render({ width: target.w, height: target.h, camera, ...input });
    if (rendered) ctx.drawImage(rendered.canvas, rendered.x, rendered.y, rendered.width, rendered.height, target.x, target.y, target.w, target.h);
    return !!rendered;
  };

  if (mode === "cutout") {
    const shot = getActiveShot(state);
    const bgSize = getSourcePixelSize(bgImg);
    const aspect = shot
      ? clamp(getCutoutCameraParams(shot).aspect, 0.1, 10)
      : (bgReady ? clamp(Number(bgSize.width / bgSize.height), 0.05, 20.0) : 1);
    const frame = fitCutoutNodeFrame(rect, aspect);
    surface.cutoutFrame = frame;

    let statusType = "none";
    const loadingSrc = String(bgImg?.currentSrc || bgImg?.src || "");
    if (!shot) {
      const lastShot = surface.lastCutoutShot;
      if (lastShot) {
        surface.view = buildCutoutPanoramaViewFromShot(lastShot, { width: surfW, height: surfH });
        surface.lastCutoutShot = null;
      } else if (!surface.view) {
        surface.view = { yaw: 0, pitch: 0, fov: DEFAULT_VIEW_HFOV };
      }
      if (bgReady) {
        if (!drawView(rect, previewNodeCamera(surface.view, surfW, surfH))) statusType = "loading";
      } else if (bgImg) {
        statusType = "loading";
      } else {
        statusType = "empty";
      }
    } else if (bgImg && !bgReady) {
      statusType = "loading";
    } else if (bgReady) {
      const contextLayout = layoutCutoutNodeContext({ width: surfW, height: surfH }, frame, shot);
      const drawn = [
        !contextLayout.fallback || drawView(contextLayout.fallback.rect, shotCamera(contextLayout.fallback.shot)),
        drawView(contextLayout.rect, shotCamera(contextLayout.shot)),
        !contextLayout.fallback || drawView(frame, shotCamera(shot)),
      ];
      if (!drawn.every(Boolean)) statusType = "loading";
    } else {
      statusType = "empty";
    }
    if (!bgReady) surfaceView.release();
    // The node surface shows a failed view itself.
    if (surfaceView.failed && statusType === "loading") statusType = "none";

    if (shot) {
      surface.lastCutoutShot = { ...shot };
      ctx.save();
      ctx.fillStyle = "rgba(0,0,0,0.58)";
      ctx.beginPath();
      ctx.rect(0, 0, surfW, surfH);
      ctx.rect(frame.x, frame.y, frame.w, frame.h);
      ctx.fill("evenodd");
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = "rgba(255,221,87,0.72)";
      ctx.lineWidth = 2;
      ctx.strokeRect(frame.x + 0.5, frame.y + 0.5, Math.max(0, frame.w - 1), Math.max(0, frame.h - 1));
      ctx.restore();
    }

    if (statusType === "loading") {
      setCutoutEmptyHint(node, false);
      setRenderLoading(node, true, loadingSrc);
    } else if (statusType === "empty") {
      setCutoutEmptyHint(node, true);
      setRenderLoading(node, false, "");
    } else {
      setCutoutEmptyHint(node, false);
      setRenderLoading(node, false, "");
    }
    return;
  }

  if (!surface.view) surface.view = { yaw: 0, pitch: 0, fov: DEFAULT_VIEW_HFOV };
  let panoramaDrawn = false;
  if (!bgImg || bgReady) {
    input = viewInput();
    // With nothing to draw yet, the grid stands alone and the view is not loaded.
    if (!input.background && !input.layers.length) {
      surfaceView.release();
      panoramaDrawn = true;
    } else {
      panoramaDrawn = drawView(rect, previewNodeCamera(surface.view, surfW, surfH));
    }
  }
  // The node surface shows a failed view itself.
  const loading = !panoramaDrawn && !surfaceView.failed;
  setRenderLoading(node, loading, loading ? String(bgImg?.currentSrc || bgImg?.src || "") : "");
  if (loading) drawLoadingOverlay(ctx, rect, getNodeUiScale(canvas, rect));
  const projection = stickersSurfaceProjection(node, surfW, surfH);
  if (!bgImg && panoramaDrawn) drawPanoGrid(ctx, projection, getNodeUiScale(canvas, rect));
  const selectedId = String(state?.active?.selected_sticker_id || "");
  const poseStickers = surfacePoseStickers(state, surfaceFrame(node));
  const selected = panoramaDrawn
    ? poseStickers.find((item) => String(item?.id || "") === selectedId && item?.visible !== false)
    : null;
  if (panoramaDrawn) {
    // The Sticker of the sticker input shows as a frame until the node's result has its media.
    poseStickers
      .filter((item) => item !== selected && item?.visible !== false && (item.external || item.source_kind === "external_image"))
      .filter((item) => !isRenderableMediaReady(getNodePreviewImage(node, item.id, null, { external: true })))
      .forEach((item) => drawStickerFrame(ctx, item, projection));
  }
  if (selected) drawStickerSelectionOverlay(ctx, selected, projection);
}

function drawLineOnSphere(ctx, pointsDir, projection, color, width = 1) {
  let started = false;
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  for (const d of pointsDir) {
    const p = projection.project(d);
    if (p.z <= 1e-4) { started = false; continue; }
    if (!started) { ctx.moveTo(p.x, p.y); started = true; }
    else { ctx.lineTo(p.x, p.y); }
  }
  ctx.stroke();
}

function drawPanoGrid(ctx, projection, uiScale) {
  ctx.save();
  const gridColor = "#3f3f46";
  const equatorColor = "rgba(250, 250, 250, 0.86)";

  // Latitudes
  for (let lat = -75; lat <= 75; lat += 15) {
    const pts = [];
    for (let lon = -180; lon <= 180; lon += 4) pts.push(yawPitchToDir(lon, lat));
    drawLineOnSphere(ctx, pts, projection, lat === 0 ? equatorColor : gridColor, lat === 0 ? 1.5 : 1);
  }

  // Longitudes
  for (let lon = -180; lon <= 180; lon += 15) {
    const pts = [];
    for (let lat = -89; lat <= 89; lat += 4) pts.push(yawPitchToDir(lon, lat));
    drawLineOnSphere(ctx, pts, projection, gridColor, lon % 90 === 0 ? 1.3 : 1);
  }

  // Labels
  const labels = [
    { name: "Front", dir: yawPitchToDir(0, 0) },
    { name: "Right", dir: yawPitchToDir(90, 0) },
    { name: "Back", dir: yawPitchToDir(180, 0) },
    { name: "Left", dir: yawPitchToDir(-90, 0) },
  ];

  ctx.fillStyle = "rgba(250, 250, 250, 0.42)";
  const fontSize = Math.max(9, Math.round(11 * uiScale));
  ctx.font = `500 ${fontSize}px Plus Jakarta Sans, Geist, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  labels.forEach((l) => {
    const p = projection.project(l.dir);
    if (p.z > 1e-4) {
      ctx.fillText(l.name, p.x, p.y + 24 * uiScale);
    }
  });

  ctx.restore();
}
