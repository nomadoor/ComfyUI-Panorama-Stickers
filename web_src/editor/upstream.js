// The upstream Scene on Panorama Studio's `scene` input (#90, ADR 0029, ADR 0030): its layers from the node's
// current result, their working copies with the node's overrides applied (pano_upstream.js
// upstreamWorkingLayers), which the editor selects and edits like its own Stickers, the edits written back as
// the node's overrides (syncUpstreamEdits), what the views draw of them at the playhead (their Stickers' images,
// port media and paint, at the same resolution as the node's own), and whether the editor waits for a run to
// show them. The working copies never enter the state's Stickers.
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "../pano_diagnostics.js";
import { sourceAsset } from "../pano_editor_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { createPaintEngineManager } from "../pano_paint_engine.js";
import { createFrameSequence, portMediaFrames, portMediaSource, portMediaTime } from "../pano_port_media.js";
import { isNodeOutputMediaCurrent, linkedInputType } from "../pano_preview_video.js";
import {
  PANO_SCENE_TYPE,
  UPSTREAM_BACKGROUND_WARNING,
  layerUiList,
  upstreamBaseline,
  upstreamDeletedCount,
  upstreamDeletedRecords,
  upstreamEditedRecords,
  upstreamLayerEditable,
  upstreamLayerRevertedRecords,
  upstreamLayersOf,
  upstreamLayerView,
  upstreamOverriddenClips,
  upstreamPaintEntries,
  upstreamPending,
  upstreamPrunedRecords,
  upstreamRestoredRecords,
  upstreamRevertedRecords,
  upstreamRowId,
  upstreamWorkingLayers,
} from "../pano_upstream.js";
import { createVideoFollower } from "../pano_video_playback.js";
import { EXTERNAL_STICKER_PREVIEW_KEY, PORT_FRAMES_KEY, PORT_VIDEO_KEY, PORT_VIDEO_META_KEY } from "./constants.js";
import { drawRasterObjectErp } from "./helpers.js";

export function createUpstream(deps) {
  const {
    comfyMedia, editor, mediaAssetSource, mediaSource, node, state, studio,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let getDesiredPaintTargetDescriptor, getMediaRevisionToken, playback, requestDraw;

  // The layers of the result last read ({ list, entries, fps }): per layer its loaded state and media `ui`
  // (`layer`), its working copy (`working`, upstreamWorkingLayers at the Timeline `fps`), and what shows its
  // media, made when first needed.
  let read = { list: null, entries: [], fps: null };
  // The working copies' fields as the last write-back or rebuild left them (upstreamBaseline): an edit is what
  // differs from them.
  let baseline = new Map();
  // Sticker images by URL.
  const images = new Map();

  const drawMedia = () => requestDraw({ cause: "frame_view", localOnly: true, reason: DRAW_REASON.MEDIA });

  function image(src) {
    if (!src) return null;
    let img = images.get(src);
    if (!img) {
      img = new Image();
      img.onload = drawMedia;
      img.onerror = drawMedia;
      img.src = src;
      images.set(src, img);
    }
    return img;
  }

  // The URLs of the images a layer shows: its file Sources, its port's first frame and its raster objects.
  function layerImageUrls({ sceneState, ui }) {
    return [
      ...sceneState.stickers.filter((sticker) => sticker.source.kind !== "port").map((sticker) => mediaAssetSource(sourceAsset(sticker.source))),
      mediaSource(layerUiList(ui, EXTERNAL_STICKER_PREVIEW_KEY)[0] || null),
      ...sceneState.painting.raster_objects.map((item) => item.rasterDataUrl),
    ].filter(Boolean);
  }

  // Whether another Studio's Scene is linked to `scene`: by the link's type, or, when that is not known, by
  // the upstream layers of the node's current result.
  function upstreamLinked() {
    return studio && (linkedInputType(node, "scene") === PANO_SCENE_TYPE || !!upstreamEntries());
  }

  // The upstream layers' entries of the node's current result ({ layer, working, ... }, see `read`), or null
  // when it has none.
  function upstreamEntries() {
    const value = studio && isNodeOutputMediaCurrent(node, "scene") ? comfyMedia.uiValue(node, "pano_upstream_layers") : null;
    const list = Array.isArray(value) ? value : null;
    if (read.list !== list) {
      read.entries.forEach(disposeEntry);
      read = { list, entries: list ? upstreamLayersOf(list).map((layer) => ({ layer })) : [], fps: null };
      // Images no layer shows any more are let go.
      const kept = new Set(read.entries.flatMap((entry) => layerImageUrls(entry.layer)));
      for (const src of [...images.keys()]) if (!kept.has(src)) images.delete(src);
    }
    if (list && read.fps !== state.timeline.fps) rebuildUpstreamWorking();
    return list && read.entries;
  }

  // Makes the working copies of the upstream layers again from the layers as they came and the state's
  // `upstream` records: after a new result and after Undo or Redo restored the state.
  function rebuildUpstreamWorking() {
    if (!read.list) return;
    const working = upstreamWorkingLayers(read.entries.map((entry) => entry.layer), state.upstream, state.timeline.fps);
    read.entries.forEach((entry, index) => {
      entry.working = working[index];
    });
    read.fps = state.timeline.fps;
    baseline = upstreamBaseline(working);
  }

  // Writes the edits of the working copies since the last write-back or rebuild into the state's `upstream`
  // records (pano_upstream.js upstreamEditedRecords), in the frames of the working copies. Called where the
  // editor writes its state: before each Undo step and each commit. Opening and closing without an edit writes
  // nothing.
  function syncUpstreamEdits() {
    if (!read.list) return;
    const working = read.entries.map((entry) => entry.working);
    const records = upstreamEditedRecords(state.upstream, read.entries.map((entry) => entry.layer), working, baseline, read.fps);
    if (records === state.upstream) return;
    state.upstream = records;
    baseline = upstreamBaseline(working);
  }

  // Drops the overrides and deleted ids of elements no longer in their layers (upstreamPrunedRecords), while
  // the node's result is current. Called with each Undo step, after syncUpstreamEdits: only an edit prunes,
  // and opening and closing never do.
  function pruneUpstreamRecords() {
    const entries = upstreamEntries();
    if (entries) state.upstream = upstreamPrunedRecords(state.upstream, entries.map((entry) => entry.layer));
  }

  // The `upstream` records changed by `change(records)` with the edits written back first, and the working
  // copies made again from them. Returns whether they changed.
  function changeUpstreamRecords(change) {
    syncUpstreamEdits();
    const records = change(state.upstream);
    if (records === state.upstream) return false;
    state.upstream = records;
    rebuildUpstreamWorking();
    return true;
  }

  // Delete of the working Stickers `stickers` (ADR 0030): their layers' records delete them, so they are drawn
  // and written downstream no more. The caller adds the Undo step.
  function deleteUpstreamStickers(stickers) {
    const origins = stickers.map((sticker) => sticker.origin);
    return changeUpstreamRecords((records) => upstreamDeletedRecords(records, origins, state.timeline.fps));
  }

  // "Revert to upstream" of the working Sticker `sticker`: all its overrides, or only its Lane `lane`.
  function revertUpstreamSticker(sticker, lane = null) {
    return changeUpstreamRecords((records) => upstreamRevertedRecords(records, sticker, lane));
  }

  // "Revert" of the upstream layer with `key`: its `scene` and painting follow upstream again.
  function revertUpstreamLayer(key) {
    return changeUpstreamRecords((records) => upstreamLayerRevertedRecords(records, key));
  }

  // "Restore deleted" of the layer with `key`: its deleted elements show again.
  function restoreUpstreamDeleted(key) {
    return changeUpstreamRecords((records) => upstreamRestoredRecords(records, key));
  }

  // The working Stickers of the upstream layers, from the farthest upstream layer's to the nearest's, each
  // layer's in its order; none without upstream layers.
  function upstreamStickers() {
    return (upstreamEntries() ?? []).flatMap((entry) => entry.working.sceneState.stickers);
  }

  // The first frame of the port media of a working Sticker's layer, which sizes its port Sticker as the
  // editor's own port media sizes its own; null while there is none.
  function upstreamStickerImage(sticker) {
    const entry = read.entries.find((item) => item.working?.key === sticker.origin.layer);
    return entry ? image(mediaSource(layerUiList(entry.layer.ui, EXTERNAL_STICKER_PREVIEW_KEY)[0] || null)) : null;
  }

  // The output's frame count while the upstream Scene shows (`pano_timeline_frames`: the longer of the upstream
  // Scene and this node's own, ADR 0029), so the Timeline reaches every upstream element, widened to the ends of
  // the Clip ranges this node overrides (upstreamOverriddenClips), as the node widens its output (ADR 0030): one
  // without a duration ends with its layer's port media, and `openClip`, the one being dragged, counts as open.
  // Else 0.
  function upstreamSpanFrames(openClip = null) {
    const entries = upstreamEntries();
    if (!entries) return 0;
    const [frames] = comfyMedia.uiValue(node, "pano_timeline_frames") || [];
    let span = Number(frames) > 0 ? Number(frames) : 0;
    const working = entries.map((entry) => entry.working);
    for (const { index, clip, sticker } of upstreamOverriddenClips(working, state.upstream, baseline)) {
      const meta = layerUiList(entries[index].layer.ui, PORT_VIDEO_META_KEY)[0];
      const end = clip === openClip ? clip.start + 1
        : clip.duration !== null ? clip.start + clip.duration
          : sticker?.source.kind === "port" && meta && typeof meta === "object" ? portMediaFrames(clip, state.timeline.fps, meta) : 0;
      span = Math.max(span, end);
    }
    return span;
  }

  // What has a Clip range and Keyframes on the upstream rows of the Timeline: the working Stickers and `scene`s
  // of the upstream layers; none without them.
  function upstreamTimelineOwners() {
    return (upstreamEntries() ?? []).flatMap(({ working }) => [working.sceneState.scene, ...working.sceneState.stickers]);
  }

  // The upstream layers as the Timeline shows them (pano_editor_ui_state.js buildTimelineModel `upstream`): per
  // layer its key, its working state, whether the node can keep overrides of it, its record in the state's
  // `upstream` (null without one), whether it has 3D `scene` content, and how many of its elements are deleted
  // here and can be restored (upstreamDeletedCount). None without upstream layers.
  function upstreamTimelineLayers() {
    return (upstreamEntries() ?? []).map(({ layer, working }) => {
      const editable = upstreamLayerEditable(working.key);
      return {
        key: working.key,
        sceneState: working.sceneState,
        editable,
        record: editable ? state.upstream.find((item) => item.layer === working.key) ?? null : null,
        scene: layerUiList(layer.ui, "pano_scene_files").length > 0,
        deleted: editable ? upstreamDeletedCount(state.upstream, working) : 0,
      };
    });
  }

  // What the Timeline row with `id` is of the upstream layers: { editable, part, owner, sceneState } with part
  // "sticker" (owner the working Sticker), "scene" (owner the working `scene`) or "painting" (owner null; it is the
  // working state's `painting_visible`), editable when the node can keep overrides of its layer. null for a row of
  // the node's own.
  function upstreamRow(id) {
    for (const { working } of upstreamEntries() ?? []) {
      const { key, sceneState } = working;
      const editable = upstreamLayerEditable(key);
      if (id === upstreamRowId(key, "scene")) return { editable, part: "scene", owner: sceneState.scene, sceneState };
      if (id === upstreamRowId(key, "painting")) return { editable, part: "painting", owner: null, sceneState };
      const sticker = sceneState.stickers.find((item) => item.id === id);
      if (sticker) return { editable, part: "sticker", owner: sticker, sceneState };
    }
    return null;
  }

  // The note the stage shows about the upstream Scene, or "": that the editor waits for a run to show it, or
  // the result's warning that the node's own bg_media is not used.
  function upstreamNotice() {
    if (!studio) return "";
    const entries = upstreamEntries();
    if (upstreamPending(linkedInputType(node, "scene"), entries)) return "Run the workflow to show the upstream scene.";
    if (!entries) return "";
    const warnings = comfyMedia.uiList(node, "pano_sticker_warnings");
    return String(warnings.find((text) => String(text).startsWith(UPSTREAM_BACKGROUND_WARNING)) ?? "");
  }

  // The port Sticker's picture of a layer at the editor's `frame`, as followPortSticker gives the node's own:
  // its MP4 follows the playhead, an RGBA IMAGE batch shows its PNGs, else the first frame. `sticker` is the
  // working copy's, whose Clip range is in the editor's frames.
  function portPicture(entry, sticker, frame) {
    const { ui } = entry.layer;
    const fps = state.timeline.fps;
    const meta = layerUiList(ui, PORT_VIDEO_META_KEY)[0];
    const frames = layerUiList(ui, PORT_FRAMES_KEY).map(mediaSource).filter(Boolean);
    const src = mediaSource(layerUiList(ui, PORT_VIDEO_KEY)[0] || null);
    const media = meta && typeof meta === "object" ? (frames.length ? { frames, meta } : src ? { src, meta } : null) : null;
    const first = image(mediaSource(layerUiList(ui, EXTERNAL_STICKER_PREVIEW_KEY)[0] || null));
    const time = media ? portMediaTime(sticker.clip, frame, fps, media.meta) : null;
    let picture = first;
    if (media?.frames) {
      entry.frames ||= createFrameSequence({
        createImage: (url, onLoad) => {
          const img = new Image();
          img.onload = onLoad;
          img.onerror = onLoad;
          img.src = url;
          return img;
        },
        onLoad: drawMedia,
      });
      picture = entry.frames.picture(media.frames, time, media.meta, first);
    } else if (media?.src) {
      const follower = portFollower(entry);
      follower.follow({ src: media.src, time, playing: playback.advancing, fps });
      picture = follower.picture(entry.still, first);
    }
    return picture ? { media: picture, revision: getMediaRevisionToken(picture), source: portMediaSource(media, first) } : null;
  }

  function portFollower(entry) {
    if (entry.follower) return entry.follower;
    const video = createPanoVideo(document, "editor.upstream-port-video");
    video.playsInline = true;
    video.preload = "auto";
    const still = createPanoCanvas({ label: "editor.upstream-port-still" });
    still.__panoFrameIdx = 0;
    entry.video = video;
    entry.still = still;
    entry.follower = createVideoFollower({
      video,
      onCapture: () => {
        const width = Number(video.videoWidth || 0);
        const height = Number(video.videoHeight || 0);
        if (width < 1 || height < 1) return;
        still.width = width;
        still.height = height;
        still.getContext("2d")?.drawImage(video, 0, 0);
        still.__panoFrameIdx += 1;
        drawMedia();
      },
      onChange: drawMedia,
    });
    return entry.follower;
  }

  // The picture of a layer's Sticker: its port media, or the image of its file Source.
  function stickerMedia(entry, sticker, frame) {
    if (sticker.source.kind === "port") return portPicture(entry, sticker, frame);
    const img = image(mediaAssetSource(sourceAsset(sticker.source)));
    return img ? { media: img, revision: getMediaRevisionToken(img) } : null;
  }

  // A layer's paint as Sky layers (upstreamPaintEntries of its working copy), drawn by a paint engine of its
  // own at the size of the node's own paint.
  function paintLayers(entry) {
    const { sceneState } = entry.working;
    const { painting } = sceneState;
    const strokes = painting.paint.strokes.length + painting.mask.strokes.length;
    if (!sceneState.painting_visible || (!strokes && !painting.raster_objects.length)) return [];
    const descriptor = getDesiredPaintTargetDescriptor();
    const size = `${descriptor.width}x${descriptor.height}`;
    if (entry.paintSize !== size) {
      releasePaint(entry);
      entry.paintSize = size;
      entry.paintEngine = strokes ? createPaintEngineManager(descriptor) : null;
      entry.paintEngine?.rebuildCommitted({ painting });
      entry.rasters = new Map();
    }
    const engine = entry.paintEngine;
    const mask = engine?.getMaskDisplayCanvas() || null;
    const layers = [];
    for (const item of upstreamPaintEntries(sceneState, engine ? engine.getAllGroupIds() : [], !!mask)) {
      // A painting with groups but no strokes has no engine, and its groups show nothing.
      const media = item.kind === "group" ? engine?.getGroupDisplayCanvas(item.id)
        : item.kind === "mask" ? mask
          : rasterCanvas(entry, item.item, descriptor);
      if (media) layers.push({ id: `${item.kind}:${item.id}`, media, revision: size, opacity: 1, zIndex: item.zIndex });
    }
    return layers;
  }

  // A raster object of a layer on an ERP canvas of the paint's size, once its image has loaded.
  function rasterCanvas(entry, item, { width, height }) {
    if (entry.rasters.has(item.id)) return entry.rasters.get(item.id);
    const img = image(item.rasterDataUrl);
    if (!img.complete || !img.naturalWidth) return null;
    const canvas = createPanoCanvas({ label: "editor.upstream-raster-erp", width, height });
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    drawRasterObjectErp(ctx, img, item, width, height);
    entry.rasters.set(item.id, canvas);
    return canvas;
  }

  function releasePaint(entry) {
    entry.rasters?.forEach((canvas) => releasePanoCanvas(canvas));
    entry.rasters = null;
    entry.paintEngine = null;
    entry.paintSize = null;
  }

  // What the views draw of the upstream Scene at the playhead (pano_upstream.js upstreamLayerView of each
  // working copy, which is at the editor's fps): its Sky layers under the node's own, its world Sticker planes
  // and its 3D items. Empty without upstream layers.
  function upstreamViewInput() {
    const entries = upstreamEntries() ?? [];
    const input = { sky: [], stickers: [], items: [] };
    const frame = editor.frame;
    entries.forEach((entry) => {
      const view = upstreamLayerView(entry.working, entry.working.key, frame, {
        media: (sticker) => stickerMedia(entry, sticker, frame),
        paintLayers: paintLayers(entry),
        source: mediaSource,
      });
      input.sky.push(...view.sky);
      input.stickers.push(...view.stickers);
      input.items.push(...view.items);
    });
    return input;
  }

  function disposeEntry(entry) {
    entry.follower?.dispose();
    if (entry.still) releasePanoCanvas(entry.still);
    releasePaint(entry);
  }

  // Lets go of the upstream media when the editor closes.
  function disposeUpstream() {
    read.entries.forEach(disposeEntry);
    read = { list: null, entries: [], fps: null };
    baseline = new Map();
    images.clear();
  }

  return {
    connect(api) {
      ({ getDesiredPaintTargetDescriptor, getMediaRevisionToken, playback, requestDraw } = api);
    },
    upstreamEntries, upstreamLinked, upstreamNotice, upstreamSpanFrames, upstreamViewInput, rebuildUpstreamWorking,
    syncUpstreamEdits, pruneUpstreamRecords, deleteUpstreamStickers, revertUpstreamSticker, revertUpstreamLayer,
    restoreUpstreamDeleted, upstreamStickers, upstreamStickerImage, upstreamTimelineLayers, upstreamTimelineOwners,
    upstreamRow, disposeUpstream,
  };
}
