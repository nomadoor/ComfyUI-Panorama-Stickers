// The layers of an upstream Scene read from a node's result (`pano_upstream_layers`, docs/studio-node.md "上流の
// Scene") and what the views draw of them: their working copies (pano_upstream.js upstreamWorkingLayers, with the
// override records given), their Stickers' images, port media and paint, and each layer's view at a frame
// (upstreamLayerView). Studio's editor (editor/upstream.js, which also keeps and writes the overrides) and the
// Preview's viewer (pano_scene_viewer.js, without overrides) use it; it holds no editor state.
//
// list(): the `pano_upstream_layers` value of the current result, or null. fps(): the Timeline fps the working copies
// are at. records(): the override records (state v2 `upstream`; [] for none). mediaSource(entry) / mediaAssetSource
// (asset): URLs of `ui` file entries and of file Sources. revisionOf(media): a picture's revision. paintTarget():
// { width, height } of the paint. playing(): whether the playhead advances. editorFile(sticker): the editor file of a
// 3D file Sticker (or null). onMedia(): a picture changed (draw again). onRebuild(working): the working copies were
// made again.
import { createPanoCanvas, releasePanoCanvas } from "./pano_diagnostics.js";
import { sourceAsset } from "./pano_editor_state.js";
import { createPaintEngineManager } from "./pano_paint_engine.js";
import { drawRasterObjectErp, engineMask, skyPaintLayers } from "./pano_paint_layers.js";
import { EXTERNAL_STICKER_PREVIEW_KEY, portMediaMeta } from "./pano_port_media.js";
import { createPortPicture } from "./pano_port_picture.js";
import { layerUiList, upstreamLayersOf, upstreamLayerView, upstreamWorkingLayers } from "./pano_upstream.js";

export function createUpstreamLayers({
  list, fps, records, mediaSource, mediaAssetSource, revisionOf, paintTarget, playing, editorFile = null,
  onMedia = () => {}, onRebuild = () => {},
}) {
  // The layers of the result last read ({ list, entries, fps }): per layer its loaded state and media `ui`
  // (`layer`), its working copy (`working`), and what shows its media, made when first needed.
  let read = { list: null, entries: [], fps: null };
  // Sticker images by URL.
  const images = new Map();

  function image(src) {
    if (!src) return null;
    let img = images.get(src);
    if (!img) {
      img = new Image();
      img.onload = onMedia;
      img.onerror = onMedia;
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

  // The layers' entries of the current result ({ layer, working, ... }, see `read`), or null when it has none.
  function entries() {
    const value = list();
    const current = Array.isArray(value) ? value : null;
    if (read.list !== current) {
      read.entries.forEach(disposeEntry);
      read = { list: current, entries: current ? upstreamLayersOf(current).map((layer) => ({ layer })) : [], fps: null };
      // Images no layer shows any more are let go.
      const kept = new Set(read.entries.flatMap((entry) => layerImageUrls(entry.layer)));
      for (const src of [...images.keys()]) if (!kept.has(src)) images.delete(src);
    }
    if (current && read.fps !== fps()) rebuild();
    return current && read.entries;
  }

  // Makes the working copies again from the layers as they came and the override records.
  function rebuild() {
    if (!read.list) return;
    const working = upstreamWorkingLayers(read.entries.map((entry) => entry.layer), records(), fps());
    read.entries.forEach((entry, index) => {
      entry.working = working[index];
    });
    read.fps = fps();
    onRebuild(working);
  }

  // The result last read: { list, entries, fps }.
  function current() {
    return read;
  }

  function entryOf(layerKey) {
    return read.entries.find((item) => item.working?.key === layerKey) ?? null;
  }

  // The first frame of the port media of the layer with `layerKey`, or null while there is none.
  function portImage(layerKey) {
    const entry = entryOf(layerKey);
    return entry ? image(mediaSource(layerUiList(entry.layer.ui, EXTERNAL_STICKER_PREVIEW_KEY)[0] || null)) : null;
  }

  // The port media of the layer with `layerKey` (portMediaMeta), or null.
  function portMeta(layerKey) {
    const entry = entryOf(layerKey);
    return entry ? portMediaMeta((key) => layerUiList(entry.layer.ui, key)) : null;
  }

  // The port Sticker's picture of a layer at `frame` (pano_port_picture.js): its MP4 follows the playhead, an RGBA
  // IMAGE batch shows its PNGs, else the first frame. `sticker` is the working copy's, whose Clip range is in the
  // working frames.
  function portPicture(entry, sticker, frame) {
    entry.port ||= createPortPicture({ image, mediaSource, revisionOf, fps, playing, onMedia, label: "editor.upstream-port" });
    return entry.port.picture((key) => layerUiList(entry.layer.ui, key), sticker.clip, frame);
  }

  // The picture of a layer's Sticker: its port media, or the image of its file Source.
  function stickerMedia(entry, sticker, frame) {
    if (sticker.source.kind === "port") return portPicture(entry, sticker, frame);
    const img = image(mediaAssetSource(sourceAsset(sticker.source)));
    return img ? { media: img, revision: revisionOf(img) } : null;
  }

  // A layer's paint as Sky layers (skyPaintLayers of its working copy), drawn by a paint engine of its own at the
  // paint's size.
  function paintLayers(entry) {
    const { sceneState } = entry.working;
    const { painting } = sceneState;
    const strokes = painting.paint.strokes.length + painting.mask.strokes.length;
    if (!sceneState.painting_visible || (!strokes && !painting.raster_objects.length)) return [];
    const descriptor = paintTarget();
    const size = `${descriptor.width}x${descriptor.height}`;
    if (entry.paintSize !== size) {
      releasePaint(entry);
      entry.paintSize = size;
      entry.paintEngine = strokes ? createPaintEngineManager(descriptor) : null;
      entry.paintEngine?.rebuildCommitted({ painting });
      entry.rasters = new Map();
    }
    const engine = entry.paintEngine;
    return skyPaintLayers(sceneState, {
      // A painting with groups but no strokes has no engine, and its groups show nothing.
      group: (id) => {
        const media = engine?.getGroupDisplayCanvas(id);
        return media && { media, revision: size };
      },
      raster: (item) => {
        const media = rasterCanvas(entry, item, descriptor);
        return media && { media, revision: size };
      },
      mask: () => engineMask(engine),
    });
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

  // What the views draw of the layers at `frame` (upstreamLayerView of each working copy): their Sky layers, their
  // world Sticker planes and their 3D items. Empty without layers.
  function viewInput(frame) {
    const input = { sky: [], stickers: [], items: [] };
    (entries() ?? []).forEach((entry) => {
      const view = upstreamLayerView(entry.working, entry.working.key, frame, {
        media: (sticker) => stickerMedia(entry, sticker, frame),
        paintLayers: paintLayers(entry),
        source: mediaSource,
        editorFile,
      });
      input.sky.push(...view.sky);
      input.stickers.push(...view.stickers);
      input.items.push(...view.items);
    });
    return input;
  }

  function disposeEntry(entry) {
    entry.port?.dispose();
    releasePaint(entry);
  }

  // Lets go of the layers' media.
  function dispose() {
    read.entries.forEach(disposeEntry);
    read = { list: null, entries: [], fps: null };
    images.clear();
  }

  return { entries, rebuild, current, portImage, portMeta, viewInput, dispose };
}

// The 3D file Stickers of upstream layers' items (viewInput().items) whose editor file is gone (a 404 on its item,
// errorOf(key)): refresh(source) asks the route again.
export function refreshGoneUpstreamFiles(items, errorOf, refresh) {
  for (const item of items) {
    if (item.source && /\b404\b/.test(errorOf(item.urls[0]) ?? "")) refresh(item.source);
  }
}
