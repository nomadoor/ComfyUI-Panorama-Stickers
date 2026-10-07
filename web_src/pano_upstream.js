// The upstream Scene (ADR 0029, ADR 0030) as Panorama Studio's editor shows it: the layers of the Scene on the
// `scene` input, from the node's result (`pano_upstream_layers`, docs/render-contract.md), with the node's own
// overrides of them applied in working copies apart from the node's own state, and drawn at the playhead as the
// node draws them. They never enter the node's Stickers, and nothing selects or picks them yet.
import { normalizeCoverageValue } from "./pano_editor_state.js";
import { skyLayers, worldStickerLayers } from "./pano_editor_view.js";
import { evaluateSceneState } from "./pano_scene_eval.js";
import { applyUpstreamOverrides } from "./pano_scene_inherit.js";
import { loadSceneState, rebaseSceneState } from "./pano_scene_state.js";
import { sceneFilesOf, sceneRequest, stickerContentRequest, stickerContentUrls } from "./pano_space.js";

// The type of the link that brings another Studio's `scene` output.
export const PANO_SCENE_TYPE = "PANO_SCENE";

// The layers of `pano_upstream_layers` (from the farthest upstream): each its loaded state and its media `ui`.
export function upstreamLayersOf(list) {
  return list
    .filter((entry) => entry && typeof entry === "object" && entry.state && typeof entry.state === "object")
    .map((entry) => ({ sceneState: loadSceneState(entry.state), ui: entry.ui && typeof entry.ui === "object" ? entry.ui : {} }));
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

// The key of each upstream layer (from upstreamLayersOf) in the ids and slots of what the views draw of it: its
// state's Scene id (ADR 0030), or its index when it has none (a state never written). When the chain holds
// the same id twice (a pasted Studio), the nearest downstream layer keeps it, as the node applies overrides
// to that one, and the others fall back to `#<index>` (a character a generated id never holds).
export function upstreamLayerKeys(layers) {
  return layers.map(({ sceneState: { id } }, index) => (
    id && !layers.slice(index + 1).some((later) => later.sceneState.id === id) ? id : `#${index}`
  ));
}

// The working copies of the upstream layers (from upstreamLayersOf) for an editor whose Timeline is at `fps`:
// per layer its key (upstreamLayerKeys), its `ui`, and in `sceneState` its state with the record of `records`
// (the node's own `upstream`) for its Scene id applied (applyUpstreamOverrides), rebased to `fps` when its own
// differs, so it is drawn at the editor's frame. As the node does, a record applies to the nearest downstream of
// the layers with its id, and a layer without an id has none. Each working Sticker has its `origin`: the layer's
// key and the upstream element's id, which is the editor's own and must be left out of anything written back to
// `state_json`. The copies share nothing with the layers or the records but the painting, which no override
// changes.
export function upstreamWorkingLayers(layers, records, fps) {
  const keys = upstreamLayerKeys(layers);
  return layers.map(({ sceneState, ui }, index) => {
    const nearest = sceneState.id !== null && keys[index] === sceneState.id;
    const record = nearest ? records.find((item) => item.layer === sceneState.id) ?? null : null;
    const applied = applyUpstreamOverrides(sceneState, record);
    const { painting } = applied;
    const copy = { ...structuredClone({ ...applied, painting: null }), painting };
    const working = copy.timeline.fps === fps ? copy : { ...rebaseSceneState(copy, fps), painting };
    for (const sticker of working.stickers) sticker.origin = { layer: keys[index], id: sticker.id };
    return { key: keys[index], sceneState: working, ui };
  });
}

function upstreamLayer(layer, key) {
  return { ...layer, id: `upstream:${key}:${layer.id}` };
}

// What the views draw of the upstream layer with `key` (upstreamLayerKeys) at its Timeline `frame`: `sky`, its Sky
// layers from back to front (skyLayers, with its paint layers `paintLayers`), `stickers`, its world Sticker
// planes (worldStickerLayers), and `items`, its 3D content to load and draw ({ slot, urls, request, value,
// opacity }: the `scene` item or the 3D port Sticker's, request as sceneRequest() makes it, null where none
// shows, and value the evaluated transform its box moves by).
// Ids are made apart from the node's own and from other layers'. Everything is drawn as the node draws it, at
// its own opacity: a hidden Sticker or `scene` is not drawn. media(sticker) is as skyLayers'; source(entry) is
// the URL of a `ui` file entry.
export function upstreamLayerView(layer, key, frame, { media, paintLayers, source }) {
  const { sceneState, ui } = layer;
  const evaluated = evaluateSceneState(sceneState, frame);
  const shown = (sticker) => (sticker.visible ? media(sticker) : null);
  const sky = skyLayers(sceneState, frame, { media: shown, zIndex: (sticker) => sticker.z_index, paintLayers, evaluated })
    .map((item) => upstreamLayer(item, key));
  const stickers = worldStickerLayers(sceneState, frame, sceneState.stickers, { media: shown, evaluated })
    .map((item) => upstreamLayer(item, key));
  const items = [];
  const sceneFiles = sceneFilesOf(layerUiList(ui, "pano_scene_files"), layerUiList(ui, "pano_scene_meta"), source);
  if (sceneFiles) {
    items.push({ slot: `${key}:scene`, urls: sceneFiles.urls.filter(Boolean), request: sceneRequest(sceneFiles, evaluated.scene), value: evaluated.scene, opacity: 1 });
  }
  const stickerFiles = sceneFilesOf(layerUiList(ui, "pano_sticker_files"), layerUiList(ui, "pano_sticker_meta"), source);
  if (stickerFiles) {
    const request = stickerContentRequest(stickerFiles, sceneState, evaluated);
    items.push({ slot: `${key}:sticker`, urls: stickerContentUrls(stickerFiles, sceneState), request, value: request?.value ?? null, opacity: request?.opacity ?? 1 });
  }
  return { evaluated, sky, stickers, items };
}
