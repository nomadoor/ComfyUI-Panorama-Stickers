// What the new UI's stage draws of the working state at the playhead (docs/studio-ui.md "画面の区画",
// docs/threejs-spark-integration.md): the sky Stickers' images, the world image planes, the 3D file Stickers' items
// and the `scene` input's item, through the lower view's layer builders (pano_editor_view.js skyLayers,
// worldStickerLayers; pano_space.js fileStickerRequests, sceneRequest), and the sphere around the World content
// that frames it (Frame Selected) and scales the view (view_camera.js setWorld).
//
// createStageMedia loads what the state names (the Stickers' images, the 3D files' editor files from the file route)
// once per source while the editor is open; stageContent() is pure over what has loaded.
//
// Not drawn yet: the painting, the port Sticker (its media and its 3D item), the upstream Scene's layers, a `scene`
// input that is a depth grid (its colors come from a proxy video the editor does not play yet).
import { skyLayers, worldStickerLayers } from "../pano_editor_view.js";
import { sourceAsset } from "../pano_editor_state.js";
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
// 3D file Stickers' items, the world image planes); `sphere` the sphere around the World content, null without any.
export function stageContent(state, frame, { media, editorFile = () => null, sceneFiles = null, sceneBox = () => null }) {
  const evaluated = evaluateSceneState(state, frame);
  const layers = skyLayers(state, frame, { media, zIndex: (sticker) => Number(sticker.z_index || 0), paintLayers: [], evaluated });
  const stickers = worldStickerLayers(state, frame, state.stickers, { media, evaluated });
  const files = sceneFiles && sceneFiles.kind !== "depth_grid" ? sceneFiles : null;
  const scene = sceneRequest(files, evaluated.scene, state.scene.animation, state.timeline.fps);
  const box = scene?.url ? sceneContentBox(scene, sceneBox(scene.url)) : null;
  const fileStickers = fileStickerRequests(state, evaluated, editorFile);
  const items = [];
  for (const { request } of fileStickers) {
    const itemBox = request ? sceneContentBox(request, sceneBox(request.url)) : null;
    if (itemBox) items.push({ box: itemBox, value: request.value });
  }
  const sphere = boundingSphere(contentPoints(evaluated, box, stickers, items));
  return {
    evaluated,
    layers,
    sphere,
    space: {
      sceneUrls: files ? files.urls.filter(Boolean) : [],
      scene,
      stickerUrls: [],
      sticker: null,
      fileStickers: fileStickers.map((entry) => entry.request).filter(Boolean),
      fileStickerKeys: fileStickers.map((entry) => entry.key),
      stickers,
    },
  };
}

// The sphere Frame Selected fits for the Sticker `id` (pano_space.js frameSphere): around it where it shows in the
// World (its plane, or its 3D item's box), else around all the content (`content`, stageContent()'s).
export function stickerFrameSphere(state, content, id, { media, sceneBox = () => null, editorFile = () => null }) {
  const index = state.stickers.findIndex((item) => item.id === id);
  if (index < 0) return content.sphere;
  const sticker = state.stickers[index];
  const value = content.evaluated.stickers[index];
  const shown = sticker.placement === "world" && !is3dFileSource(sticker.source) ? media(sticker) : null;
  const size = shown ? mediaSize(shown.media) : null;
  const plane = size ? worldStickerPlane(value, sticker.crop, size.width, size.height) : null;
  const request = is3dFileSource(sticker.source) ? fileStickerRequests({ ...state, stickers: [sticker] }, { ...content.evaluated, stickers: [value] }, editorFile)[0]?.request : null;
  const box = request ? sceneContentBox(request, sceneBox(request.url)) : null;
  return frameSphere(content.sphere, { sticker, value, plane, box });
}
