// Panorama Studio's picture on its node (docs/studio-node-surface.md "撮る Camera の出力をその場で描く"): the Camera's
// output drawn live at the display frame, the background it shows, and what the line under it is made from.
import { cameraShot, normalizeCoverageValue } from "../pano_editor_state.js";
import { sceneGround } from "../pano_scene_state.js";
import { surfacePaintLayers } from "../pano_surface_paint.js";
import { isRenderableMediaReady, mediaPlayheadRevisionToken as getRenderableMediaRevisionToken } from "../pano_media_session.js";
import { backgroundAt, chooseBackground } from "../pano_background_choice.js";
import { studioSizeWidgets } from "../pano_studio_status.js";
import { STUDIO_PICTURE_RADIUS } from "../pano_studio_surface.js";
import { outputErpInput, outputFrameInput } from "../studio/output_picture.js";
import { groundOf } from "../studio/defaults.js";
import { stageContent } from "../studio/stage_content.js";
import { eyeHeight, worldBoundRadius } from "../studio/view_scale.js";
import { backgroundColorWidget, isNodeOutputMediaCurrent } from "../pano_preview_video.js";
import { sceneFilesOf } from "../pano_space.js";
import { file3dEditorFileOf } from "../pano_file_3d.js";
import { nodeSurface } from "../pano_node_bridge.js";
import {
  comfy,
  mediaSource,
  ownOutputUiList,
  ownOutputUiValue,
  playbackBackground,
  surfaceBackgroundMedia,
  surfaceStickerMedia,
} from "./media.js";
import { ensureRenderCache, getCachedState, getWidget, setRenderLoading, surfaceFrame, surfaceSceneState } from "./state.js";

// Which background Panorama Studio's surface shows (pano_background_choice.js, caller "surface"), from the node's
// result, its widgets and its working state (`state`, getCachedState's).
export function surfaceBackgroundChoice(node, state) {
  return chooseBackground("surface", {
    uiList: (key) => ownOutputUiList(node, key),
    current: (channel) => isNodeOutputMediaCurrent(node, channel),
    widget: (name) => getWidget(node, name),
    clip: state.background?.clip ?? null,
    fps: state.timeline.fps,
  });
}

// What Panorama Studio's status is made from (studioNodeStatus): its state_json text and widgets, and the size its last
// run reported while that run's media are still the inputs'.
export function studioStatusOptions(node) {
  const current = ["background", "external-sticker", "scene"].every((channel) => isNodeOutputMediaCurrent(node, channel));
  return {
    stateText: String(getWidget(node, "state_json")?.value ?? ""),
    ...studioSizeWidgets((name) => getWidget(node, name)?.value),
    backgroundRange: normalizeCoverageValue(getWidget(node, "background_range")?.value),
    backgroundColor: String(getWidget(node, "background_color")?.value ?? ""),
    run: (current && ownOutputUiValue(node, "pano_output_size")) || null,
  };
}

// The node's background_color (Panorama Studio; the legacy nodes' bg_color).
function surfaceBackgroundColor(node, fallback = "#000000") {
  return String(backgroundColorWidget((name) => getWidget(node, name))?.value || fallback);
}

// Panorama Studio's background at the display frame (pano_background_choice.js backgroundAt): background_color (an
// upstream Scene's while its background stands in) outside its Clip range and media, and without any background, as in
// the output; the played VIDEO, its still or the linked image once it has a picture; null while one loads.
function studioBackground(node, choice) {
  // An upstream background that no longer stands in lets its image go, shown or not (the own image is kept elsewhere).
  if (choice.from !== "upstream") nodeSurface(node).studioInputs?.releaseBackgroundImages();
  const bgImg = choice.from === "upstream" ? upstreamBackgroundMedia(node, choice) : surfaceBackgroundMedia(node);
  const ready = isRenderableMediaReady(bgImg);
  return backgroundAt(choice, {
    shows: nodeSurface(node).playback?.playback.backgroundShows !== false,
    picture: ready ? { media: bgImg, revision: getRenderableMediaRevisionToken(bgImg) } : null,
    pending: !!bgImg && !ready,
  });
}

// The upstream Scene's background standing in on Panorama Studio's surface (docs/studio-node-surface.md "表示フレームと
// VIDEO"): its played VIDEO (the playback's candidates are its VIDEO only), else the first image of the result's
// pano_upstream_input_images, which the surface's studioInputs hold and let go out of sight; null for an image that
// did not load (its bg_color shows).
function upstreamBackgroundMedia(node, choice) {
  const surface = nodeSurface(node);
  const played = surface.playback ? playbackBackground(surface.playback) : null;
  if (played) return played;
  const image = surface.studioInputs?.backgroundImage(choice.keys.image) ?? null;
  return image?.complete && !image.naturalWidth ? null : image;
}

// Panorama Studio's picture (docs/studio-node-surface.md "撮る Camera の出力をその場で描く"): the Camera's output at the
// display frame, drawn live from the state and the inputs into `layout.picture` (pano_studio_surface.js) of the surface's
// canvas, through the editor's Output window inputs (studio/output_picture.js), with what the editor draws of the inputs
// (the surface's `studioInputs`: the upstream Scene's layers and the depth grids in their proxies' colors). Panorama mode draws the live ERP on
// `erpCanvas`, then copies it. Returns whether the view drew it (false while the three.js view loads or fails).
export function drawStudioPicture(node, canvas, surfaceView, layout, erpCanvas) {
  const surface = nodeSurface(node);
  ensureRenderCache(node, "stickers");
  const state = getCachedState(node);
  const sceneState = surfaceSceneState(node, state);
  const ratio = window.devicePixelRatio || 1;
  const wrap = canvas.parentElement;
  const surfW = Math.max(1, Math.round(Number(wrap?.clientWidth || canvas.clientWidth || 0) * ratio));
  const surfH = Math.max(1, Math.round(Number(wrap?.clientHeight || canvas.clientHeight || 0) * ratio));
  if (canvas.width !== surfW || canvas.height !== surfH) {
    canvas.width = surfW;
    canvas.height = surfH;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) return false;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, surfW, surfH);
  const box = {
    x: Math.round(layout.picture.x * ratio),
    y: Math.round(layout.picture.y * ratio),
    w: Math.round(layout.picture.w * ratio),
    h: Math.round(layout.picture.h * ratio),
  };
  // Too small to draw: the depth grids' color VIDEOs are let go as for a picture without them.
  if (box.w < 2 || box.h < 2) {
    surface.studioInputs?.depthColors.retain([]);
    return true;
  }
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(box.x, box.y, box.w, box.h, STUDIO_PICTURE_RADIUS * ratio);
  ctx.clip();

  const frame = surfaceFrame(node);
  const shot = cameraShot(sceneState.camera, frame);
  // What the inputs bring that the editor draws too: the upstream Scene's layers and the depth grids' colors.
  const inputs = surface.studioInputs;
  const ground = inputs ? groundOf(sceneState, inputs.upstream.working()) : sceneGround(sceneState);
  const list = (key) => ownOutputUiList(node, key);
  const content = stageContent(sceneState, frame, {
    media: (sticker) => surfaceStickerMedia(node, sceneState, sticker),
    editorFile: (sticker) => file3dEditorFileOf(comfy.file3dFiles, sticker, mediaSource),
    sceneFiles: isNodeOutputMediaCurrent(node, "scene") ? sceneFilesOf(list("pano_scene_files"), list("pano_scene_meta"), mediaSource) : null,
    stickerFiles: isNodeOutputMediaCurrent(node, "external-sticker") ? sceneFilesOf(list("pano_sticker_files"), list("pano_sticker_meta"), mediaSource) : null,
    sceneBox: (url) => surfaceView.sceneBox(url),
    paintLayers: surfacePaintLayers(surface, state),
    upstream: inputs?.upstream.viewInput(frame) ?? null,
    depthColor: inputs?.depthColor ?? null,
    playing: !!surface.playback?.playback.advancing,
  });
  inputs?.depthColors.retain(content.space.depthSlots);
  const background = studioBackground(node, surfaceBackgroundChoice(node, state));
  const radius = worldBoundRadius({ eye: eyeHeight(ground), content: content.sphere, camera: shot.position });
  let drawn = false;
  // A change of mode lets go of what the other mode held (the live ERP and its canvas, or the lens faces), as the
  // editor's Output window does.
  const kind = sceneState.camera.projection === "erp" ? "erp" : "frame";
  if (surface.studioKind && surface.studioKind !== kind) {
    surfaceView.release();
    if (kind === "frame") {
      erpCanvas.width = 0;
      erpCanvas.height = 0;
    }
  }
  surface.studioKind = kind;
  if (kind === "erp") {
    const drawnErp = surfaceView.renderLiveErp(outputErpInput({
      shot,
      erpRange: normalizeCoverageValue(sceneState.camera.erp_range),
      ground,
      radius,
      width: box.w,
      height: box.h,
      background,
      content,
      canvas: erpCanvas,
    }));
    if (drawnErp && erpCanvas.width > 1) {
      ctx.drawImage(erpCanvas, 0, 0, erpCanvas.width, erpCanvas.height, box.x, box.y, box.w, box.h);
      drawn = true;
    }
  } else {
    const input = outputFrameInput({
      shot,
      ground,
      radius,
      width: box.w,
      height: box.h,
      background,
      content,
      backgroundColor: surfaceBackgroundColor(node),
      lensKind: surface.studioLensKind ?? null,
    });
    surface.studioLensKind = input.lens?.kind ?? null;
    const rendered = surfaceView.render(input);
    if (rendered) {
      ctx.drawImage(rendered.canvas, rendered.x, rendered.y, rendered.width, rendered.height, box.x, box.y, box.w, box.h);
      drawn = true;
    }
  }
  ctx.restore();
  setRenderLoading(node, !drawn && !surfaceView.failed, "");
  return drawn;
}
