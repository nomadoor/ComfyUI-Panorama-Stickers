// The upstream Scene (ADR 0029) as Panorama Studio's editor shows it: the layers of the Scene on the `scene`
// input, from the node's result (`pano_upstream_layers`, docs/render-contract.md), drawn at the playhead apart
// from the node's own state. They are shown, not edited: they never enter the state, the Timeline, the
// selection or the picks.
import { normalizeCoverageValue } from "./pano_editor_state.js";
import { skyLayers, worldStickerLayers } from "./pano_editor_view.js";
import { evaluateSceneState } from "./pano_scene_eval.js";
import { loadSceneState } from "./pano_scene_state.js";
import { sceneFilesOf, sceneRequest, stickerContentRequest, stickerContentUrls } from "./pano_space.js";

// Upstream elements draw this faintly over their own opacity, so they are told from the node's own.
export const UPSTREAM_OPACITY = 0.5;

// The type of the link that brings another Studio's `scene` output.
export const PANO_SCENE_TYPE = "PANO_SCENE";

// The layers of `pano_upstream_layers` (from the farthest upstream): each its loaded state and its media `ui`.
export function upstreamLayersOf(list) {
  return list
    .filter((entry) => entry && typeof entry === "object" && entry.state && typeof entry.state === "object")
    .map((entry) => ({ sceneState: loadSceneState(entry.state), ui: entry.ui && typeof entry.ui === "object" ? entry.ui : {} }));
}

// The Timeline frame of a layer at `layerFps` that shows at `frame` of the node's Timeline at `fps`: the same
// time in seconds. The layer's state is not rebased; its frame may be fractional.
export function upstreamFrame(frame, fps, layerFps) {
  return frame * layerFps / fps;
}

// The background of the upstream Scene in a result, used in place of the node's own bg_media (ADR 0029): the
// `ui` keys of its image and VIDEO and its coverage, or null when the upstream Scene has none. uiList(key) reads
// a list of the result.
export function upstreamBackgroundOf(uiList) {
  if (!uiList("pano_upstream_input_images").length && !uiList("pano_upstream_input_videos").length) return null;
  return {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: normalizeCoverageValue(uiList("pano_upstream_coverage")[0]),
  };
}

// The warning of a result that the node's own bg_media is not used (the start of the node's text).
export const UPSTREAM_BACKGROUND_WARNING = "bg_media is not used";

// Whether the editor waits for a run to show the upstream Scene: a Scene is linked to `scene` and the node's
// current result has no upstream layers (null).
export function upstreamPending(linkType, layers) {
  return linkType === PANO_SCENE_TYPE && layers === null;
}

// The paint of an upstream layer's state as its Sky layers, in the order the node draws them (docs/scene-state-v2.md
// "Sky の重なり順"): `group` entries for the stroke groups and `raster` entries for the raster objects at their
// z_index, then the strokes of the paint engine's groups `groupIds` that no group of the painting holds, and the
// mask when `mask`, over everything. None while the painting is hidden.
export function upstreamPaintEntries(sceneState, groupIds, mask) {
  if (!sceneState.painting_visible) return [];
  const { groups, raster_objects: rasters } = sceneState.painting;
  const entries = [
    ...groups.map((group) => ({ kind: "group", id: group.actionGroupId, zIndex: group.z_index })),
    ...rasters.filter((item) => item.layerKind === "paint").map((item) => ({ kind: "raster", id: item.id, zIndex: item.z_index, item })),
  ];
  const top = Math.max(-1, ...entries.map((entry) => entry.zIndex), ...sceneState.stickers.map((sticker) => sticker.z_index ?? 0)) + 1;
  const grouped = new Set(groups.map((group) => group.actionGroupId));
  for (const id of groupIds) if (!grouped.has(id)) entries.push({ kind: "group", id, zIndex: top });
  if (mask) entries.push({ kind: "mask", id: "mask", zIndex: top });
  return entries;
}

// The list under `key` of a layer's media `ui`, empty without one.
export function layerUiList(ui, key) {
  return Array.isArray(ui[key]) ? ui[key] : [];
}

function dimmed(layer, index) {
  return { ...layer, id: `upstream:${index}:${layer.id}`, opacity: layer.opacity * UPSTREAM_OPACITY };
}

// What the views draw of upstream layer `index` at its Timeline `frame` (upstreamFrame): `sky`, its Sky
// layers from back to front (skyLayers, with its paint layers `paintLayers`), `stickers`, its world Sticker
// planes (worldStickerLayers), and `items`, its 3D content to load and draw ({ slot, urls, request, value,
// opacity }: the `scene` item or the 3D port Sticker's, request as sceneRequest() makes it, null where none
// shows, and value the evaluated transform its box moves by).
// Ids are made apart from the node's own and from other layers', and everything is dimmed by
// UPSTREAM_OPACITY. A hidden Sticker is not drawn, as the node does not draw it. media(sticker) is as
// skyLayers'; source(entry) is the URL of a `ui` file entry.
export function upstreamLayerView(layer, index, frame, { media, paintLayers, source }) {
  const { sceneState, ui } = layer;
  const evaluated = evaluateSceneState(sceneState, frame);
  const shown = (sticker) => (sticker.visible ? media(sticker) : null);
  const sky = skyLayers(sceneState, frame, { media: shown, zIndex: (sticker) => sticker.z_index, paintLayers, evaluated })
    .map((item) => dimmed(item, index));
  const stickers = worldStickerLayers(sceneState, frame, sceneState.stickers, { media: shown, evaluated })
    .map((item) => dimmed(item, index));
  const items = [];
  const sceneFiles = sceneFilesOf(layerUiList(ui, "pano_scene_files"), layerUiList(ui, "pano_scene_meta"), source);
  if (sceneFiles) {
    items.push({ slot: `${index}:scene`, urls: sceneFiles.urls.filter(Boolean), request: sceneRequest(sceneFiles, evaluated.scene), value: evaluated.scene, opacity: UPSTREAM_OPACITY });
  }
  const stickerFiles = sceneFilesOf(layerUiList(ui, "pano_sticker_files"), layerUiList(ui, "pano_sticker_meta"), source);
  if (stickerFiles) {
    const request = stickerContentRequest(stickerFiles, sceneState, evaluated);
    items.push({ slot: `${index}:sticker`, urls: stickerContentUrls(stickerFiles, sceneState), request, value: request?.value ?? null, opacity: (request?.opacity ?? 1) * UPSTREAM_OPACITY });
  }
  return { evaluated, sky, stickers, items };
}
