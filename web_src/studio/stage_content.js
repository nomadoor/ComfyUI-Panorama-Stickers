// What the new UI's stage draws of the working state at the playhead (docs/studio-ui.md "画面の区画",
// docs/threejs-spark-integration.md): the sky Stickers' images, the world image planes, the 3D file Stickers' items
// and the `scene` input's item, through the lower view's layer builders (pano_editor_view.js skyLayers,
// worldStickerLayers; pano_space.js fileStickerRequests, sceneRequest), and the sphere around the World content
// that frames it (Frame Selected) and scales the view (view_camera.js setWorld).
//
// createStageMedia loads what the state names (the Stickers' images, the 3D files' editor files from the file route)
// once per source while the editor is open; stageContent() is pure over what has loaded.
//
// [inputs] What comes from the node's inputs is drawn too (docs/studio-ui.md "ノードの入力から来た物"): the port
// Sticker through `media` (studio/port_media.js) and its 3D media (`stickerFiles`), and the upstream Scene's layers
// (`upstream`, studio/upstream.js).
//
// The painting comes in as its Sky layers (`paintLayers`, studio/paint.js layers()).
//
// A depth grid (a `scene`, `sticker` or upstream item whose kind is `depth_grid`, docs/threejs-spark-integration.md
// "DA3_GEOMETRY mono の深度のグリッド") draws with the colors of its input's proxy video, which the caller plays
// (`depthColor`, pano_depth_color.js createDepthColors picture()); the editor and Panorama Studio's node surface both
// give it (ADR 0052). Without `depthColor` depth grids are left out.
import { depthGridNotice, withDepthColor } from "../pano_depth_color.js";
import { skyLayers, worldStickerLayers } from "../pano_editor_view.js";
import { skyStickerVfov, sourceAsset } from "../pano_editor_state.js";
import { createFile3dEditorFiles, file3dEditorFileOf } from "../pano_file_3d.js";
import { evaluateSceneState } from "../pano_scene_eval.js";
import { is3dFileSource } from "../pano_scene_state.js";
import {
  boundingSphere,
  contentPoints,
  fileStickerRequests,
  frameSphere,
  sceneContentBox,
  sceneRequest,
  stickerAnimationClips,
  stickerContentRequest,
  stickerContentUrls,
  worldStickerPlane,
} from "../pano_space.js";

const mediaSize = (media) => ({
  width: Number(media?.naturalWidth || media?.videoWidth || media?.width || 0),
  height: Number(media?.naturalHeight || media?.videoHeight || media?.height || 0),
});

const loaded = (image) => !!image?.complete && mediaSize(image).width > 0;

// The media of the editor: `assetSource(asset)` and `source(entry)` are pano_comfy_media.js's (the URL of a Sticker's
// file, of a route's or a result's file entry); `fetchApi` asks the 3D file route (pano_file_3d.js), null to ask
// nothing; onChange() runs when something loads. ImageCtor makes the images.
export function createStageMedia({ assetSource, source, fetchApi = null, onChange = () => {}, ImageCtor = globalThis.Image }) {
  // Images by URL: a Sticker's file shows wherever it is used.
  const images = new Map();
  const files = fetchApi ? createFile3dEditorFiles({ fetchApi, onUpdate: () => onChange() }) : null;
  let closed = false;

  function imageOf(sticker) {
    if (sticker.source.kind === "port" || is3dFileSource(sticker.source)) return null;
    const src = assetSource(sourceAsset(sticker.source));
    if (!src) return null;
    let image = images.get(src);
    if (!image) {
      image = new ImageCtor();
      const settle = () => {
        if (!closed) onChange();
      };
      image.onload = settle;
      image.onerror = settle;
      image.src = src;
      images.set(src, image);
    }
    return image;
  }

  return {
    // The layer media of a Sticker ({ media, revision }) once its image has loaded, else null.
    media(sticker) {
      const image = imageOf(sticker);
      return loaded(image) ? { media: image, revision: image.currentSrc || image.src } : null;
    },
    // The sizes of the Stickers' loaded images by id ({ width, height } px).
    imageSizes(state) {
      const sizes = {};
      for (const sticker of state.stickers) {
        const image = imageOf(sticker);
        if (loaded(image)) sizes[sticker.id] = mediaSize(image);
      }
      return sizes;
    },
    // The editor file of a 3D file Sticker (pano_file_3d.js file3dEditorFileOf), or null.
    editorFile: (sticker) => file3dEditorFileOf(files, sticker, source),
    // [add-drop] The route's answer for a 3D file's Source once it came ({ state "ready" or "failed", box, error }),
    // asked once with the editor files above (studio/add_files.js places a new 3D file by its box).
    request: (source) => (files ? files.request(source) : Promise.resolve({ state: "failed", error: "The 3D file route is not available." })),
    // The clips of the animated 3D files by Sticker id (for the inspector's Animation rows and the Auto length).
    animations(state) {
      const out = {};
      for (const sticker of state.stickers) {
        const clips = stickerAnimationClips(sticker, { editorFile: (item) => file3dEditorFileOf(files, item, source) });
        if (clips) out[sticker.id] = clips;
      }
      return out;
    },
    dispose() {
      closed = true;
      files?.close();
      for (const image of images.values()) {
        image.onload = null;
        image.onerror = null;
        image.removeAttribute?.("src");
      }
      images.clear();
    },
  };
}

// What the stage draws of `state` at the Timeline frame `frame`: { layers, space, sphere, evaluated }. `media(sticker)`
// and `editorFile(sticker)` are createStageMedia's; `sceneFiles` the `scene` input's files in the node's current result
// (pano_space.js sceneFilesOf) or null; `sceneBox(url)` the box of a loaded item (the lower view's), null while it
// loads. `layers` are the sky layers back to front; `space` the World part of a render's space (the `scene` item, the
// 3D file Stickers' items, the world image planes); `sphere` the sphere around the World content, null without any; `boxes` the loaded 3D items' boxes for the first T.
// [inputs] `stickerFiles` is the `sticker` input's 3D media (studio/port_media.js files()) or null; `upstream` what the
// upstream layers draw at `frame` ({ sky, stickers, items }, pano_upstream_layers.js viewInput) or null. A sky port
// Sticker's evaluated vFOV is the one its media's aspect gives (pano_editor_state.js skyStickerVfov), as drawn.
// `paintLayers` are the painting's Sky layers (pano_paint_layers.js skyPaintLayers' shape), put among the sky Stickers.
// `depthColor(slot, video)` is the picture of the proxy video of the depth grid input `slot` ("scene", "sticker" or an
// upstream layer's slot) at `video` (sceneRequest's), or null while it has none; null leaves depth grids out.
// `space.depthSlots` are the slots of the depth grids drawn, whose videos the caller keeps (retain()).
// `playing`: whether the playhead advances (space.playing: which loaded items go first over the budget,
// pano_scene_items.js overBudget); `idle`: the editor at rest loads the `scene` and upstream items on (space.idle,
// docs/threejs-spark-integration.md "止まっている間の先読み"); `lean`: ComfyUI runs a job, so only the items drawn and
// prefetched stay (space.lean, "生成を邪魔しない").
export function stageContent(state, frame, { media, editorFile = () => null, sceneFiles = null, sceneBox = () => null, stickerFiles = null, upstream = null, paintLayers = [], depthColor = null, playing = false, idle = false, lean = false }) {
  const evaluated = evaluateSceneState(state, frame);
  // Each Sticker's media once per content: the port Sticker's follows the playhead (one follow per frame).
  const shown = new Map();
  const mediaOnce = (sticker) => {
    if (!shown.has(sticker)) shown.set(sticker, media(sticker));
    return shown.get(sticker);
  };
  state.stickers.forEach((sticker, index) => {
    if (sticker.placement !== "sky" || sticker.source.kind !== "port") return;
    const picture = mediaOnce(sticker);
    if (picture) evaluated.stickers[index].vFOV_deg = skyStickerVfov(sticker, evaluated.stickers[index], mediaSize(picture.media));
  });
  const ownLayers = skyLayers(state, frame, { media: mediaOnce, zIndex: (sticker) => Number(sticker.z_index || 0), paintLayers, evaluated });
  // The upstream Scene's sky lies under the node's own (each layer keeps its own order).
  const layers = upstream ? [...upstream.sky, ...ownLayers] : ownLayers;
  const stickers = worldStickerLayers(state, frame, state.stickers, { media: mediaOnce, evaluated });
  const drawn = (files) => (files && (files.kind !== "depth_grid" || depthColor) ? files : null);
  const depthSlots = [];
  const withColors = (slot, request) => withDepthColor(request, slot, depthColor, depthSlots);
  const files = drawn(sceneFiles);
  const scene = withColors("scene", sceneRequest(files, evaluated.scene, state.scene.animation, state.timeline.fps));
  const box = scene?.url ? sceneContentBox(scene, sceneBox(scene.url)) : null;
  const portFiles = drawn(stickerFiles);
  const sticker = withColors("sticker", stickerContentRequest(portFiles, state, evaluated));
  const items = [];
  const stickerBox = sticker?.url ? sceneContentBox(sticker, sceneBox(sticker.url)) : null;
  if (stickerBox) items.push({ box: stickerBox, value: sticker.value });
  const fileStickers = fileStickerRequests(state, evaluated, editorFile);
  for (const { request } of fileStickers) {
    const itemBox = request ? sceneContentBox(request, sceneBox(request.url)) : null;
    if (itemBox) items.push({ box: itemBox, value: request.value });
  }
  const upstreamItems = (upstream?.items ?? []).flatMap((entry) => {
    if (entry.request?.kind !== "depth_grid") return [entry];
    return depthColor ? [{ ...entry, request: withColors(entry.slot, entry.request) }] : [];
  });
  for (const { request, value } of upstreamItems) {
    const itemBox = request?.url ? sceneContentBox(request, sceneBox(request.url)) : null;
    if (itemBox) items.push({ box: itemBox, value });
  }
  const upstreamStickers = upstream?.stickers ?? [];
  const sphere = boundingSphere(contentPoints(evaluated, box, [...stickers, ...upstreamStickers], items));
  // The 3D boxes the first T can hit (view_camera.js boxDepth): each item's box with the transform it is drawn with (the
  // `scene` item's is the `scene` transform, as contentPoints takes it).
  const boxes = [...(box && evaluated.scene.active ? [{ box, transform: evaluated.scene }] : []), ...items.map((item) => ({ box: item.box, transform: item.value }))];
  return {
    evaluated,
    boxes,
    layers,
    sphere,
    space: {
      sceneUrls: files ? files.urls.filter(Boolean) : [],
      scene,
      stickerUrls: stickerContentUrls(portFiles, state),
      sticker,
      fileStickers: fileStickers.map((entry) => entry.request).filter(Boolean),
      fileStickerKeys: fileStickers.map((entry) => entry.key),
      stickers,
      upstreamStickers,
      upstreamItems,
      depthSlots,
      playing,
      idle,
      lean,
    },
  };
}

// The stage's line for the depth grids `content` (stageContent()'s) draws (pano_depth_color.js depthGridNotice):
// errorOf(key) is why an item failed to load, loaded(key) whether it loaded.
export function stageDepthNotice(content, errorOf, loaded) {
  const { scene, sticker, upstreamItems } = content.space;
  return depthGridNotice([scene, sticker, ...upstreamItems.map((entry) => entry.request)], errorOf, loaded);
}

// The sphere Frame Selected fits for the Sticker `id` (pano_space.js frameSphere): around it where it shows in the
// World (its plane, or its 3D item's box), else around all the content (`content`, stageContent()'s). [inputs] The
// port Sticker's 3D item is the `sticker` input's (content.space.sticker).
export function stickerFrameSphere(state, content, id, { media, sceneBox = () => null, editorFile = () => null }) {
  const index = state.stickers.findIndex((item) => item.id === id);
  if (index < 0) return content.sphere;
  const sticker = state.stickers[index];
  const value = content.evaluated.stickers[index];
  const shown = sticker.placement === "world" && !is3dFileSource(sticker.source) ? media(sticker) : null;
  const size = shown ? mediaSize(shown.media) : null;
  const plane = size ? worldStickerPlane(value, sticker.crop, size.width, size.height) : null;
  const portItem = sticker.source.kind === "port" && content.space.sticker?.id === id ? content.space.sticker : null;
  const request = is3dFileSource(sticker.source) ? fileStickerRequests({ ...state, stickers: [sticker] }, { ...content.evaluated, stickers: [value] }, editorFile)[0]?.request : portItem;
  const box = request ? sceneContentBox(request, sceneBox(request.url)) : null;
  return frameSphere(content.sphere, { sticker, value, plane, box });
}
