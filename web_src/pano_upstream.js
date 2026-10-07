// The upstream Scene (ADR 0029, ADR 0030) as Panorama Studio's editor shows it: the layers of the Scene on the
// `scene` input, from the node's result (`pano_upstream_layers`, docs/render-contract.md), with the node's own
// overrides of them applied in working copies apart from the node's own state, drawn at the playhead as the
// node draws them, and the edits of the working copies written back as the node's overrides. They never
// enter the node's Stickers.
import { normalizeCoverageValue } from "./pano_editor_state.js";
import { skyLayers, worldStickerLayers } from "./pano_editor_view.js";
import { portMediaFrames } from "./pano_port_media.js";
import { evaluateSceneState } from "./pano_scene_eval.js";
import { applyUpstreamOverrides } from "./pano_scene_inherit.js";
import {
  SKY_STICKER_LANES,
  WORLD_STICKER_LANES,
  loadSceneState,
  rebaseSceneState,
  rebaseUpstreamRecord,
} from "./pano_scene_state.js";
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
// the layers with its id, and a layer without an id has none. Each working Sticker has its `origin`, the layer's
// key and the upstream element's id, and the id `upstream:<key>:<id>`, apart from the node's own and other
// layers' ids, by which the editor selects it; both are the editor's own and are left out of what is written
// back to `state_json` (upstreamEditedRecords). The copies share nothing with the layers or the records but the
// painting, which no override changes. `received` is the layer's state as it came, without the overrides.
export function upstreamWorkingLayers(layers, records, fps) {
  const keys = upstreamLayerKeys(layers);
  return layers.map(({ sceneState, ui }, index) => {
    const nearest = sceneState.id !== null && keys[index] === sceneState.id;
    const record = nearest ? records.find((item) => item.layer === sceneState.id) ?? null : null;
    const applied = applyUpstreamOverrides(sceneState, record);
    const { painting } = applied;
    const copy = { ...structuredClone({ ...applied, painting: null }), painting };
    const working = copy.timeline.fps === fps ? copy : { ...rebaseSceneState(copy, fps), painting };
    for (const sticker of working.stickers) {
      sticker.origin = { layer: keys[index], id: sticker.id };
      sticker.id = upstreamId(keys[index], sticker.id);
    }
    return { key: keys[index], sceneState: working, ui, received: sceneState };
  });
}

function upstreamId(key, id) {
  return `upstream:${key}:${id}`;
}

// The id of the Timeline row of the `scene` (part "scene") or the painting (part "painting") of the upstream
// layer with `key`, as the node's own rows are "scene" and "painting".
export function upstreamRowId(key, part) {
  return upstreamId(key, part);
}

// Whether a Sticker is a working copy's (upstreamWorkingLayers): the node's own never have an `origin`.
export function isUpstreamSticker(item) {
  return !!item && typeof item === "object" && !!item.origin;
}

// Whether the node can keep edits of a working Sticker as overrides: its layer has a Scene id that is its key
// (upstreamLayerKeys). A layer without one, or not the nearest downstream with its id, is only inherited, and
// its elements are not edited, as a locked one is not.
export function upstreamStickerEditable(sticker) {
  return upstreamLayerEditable(sticker.origin.layer);
}

// Whether the node can keep overrides of the upstream layer with `key` (upstreamLayerKeys): its key is its Scene id.
export function upstreamLayerEditable(key) {
  return !key.startsWith("#");
}

// The fields of a Sticker an override holds (docs/scene-state-v2.md "上流の上書き"), in the record's order.
function overrideFields(sticker) {
  const world = sticker.placement === "world";
  const lanes = (world ? WORLD_STICKER_LANES : SKY_STICKER_LANES).map(([name]) => name);
  return ["clip", "visible", "locked", "crop", ...lanes, ...(world ? [] : ["z_index"])];
}

function fieldTexts(sticker) {
  return Object.fromEntries(overrideFields(sticker).map((name) => [name, JSON.stringify(sticker[name])]));
}

// What a working layer holds of the fields of its own a record overrides: its `scene`'s `visible` and `clip`, and
// `painting_visible`.
function layerTexts(sceneState) {
  return {
    visible: JSON.stringify(sceneState.scene.visible),
    clip: JSON.stringify(sceneState.scene.clip),
    painting_visible: JSON.stringify(sceneState.painting_visible),
  };
}

// The baseline entry of a working layer's own fields, apart from its Stickers' (whose ids start with `upstream:`).
function layerBaselineKey(key) {
  return `layer:${key}`;
}

// What the working copies (upstreamWorkingLayers) hold of the fields an override holds, by working Sticker id, and
// of each layer's own (its `scene` and painting): what upstreamEditedRecords compares them with to find the fields
// edited since.
export function upstreamBaseline(working) {
  return new Map(working.flatMap(({ key, sceneState }) => [
    [layerBaselineKey(key), layerTexts(sceneState)],
    ...sceneState.stickers.map((sticker) => [sticker.id, fieldTexts(sticker)]),
  ]));
}

// The node's `upstream` records (`records`) with the edits of the working copies `working` written in (ADR 0030),
// or `records` itself without any. An edit is a field of a working Sticker, or of a layer's `scene` (`visible`,
// `clip`) or painting (`painting_visible`), that differs from `baseline` (upstreamBaseline): a Lane is written whole,
// with its Keyframes, in the override of the Sticker's upstream id, and the fields not edited since are left as the
// records have them (an untouched field stays inherited). The frames written are those of the working copies, at
// `fps`, which the record of an edited layer takes; a record at another fps is rebased to it first
// (rebaseUpstreamRecord, with the layer as it came, `layers`, rebased to `fps`). The layers whose elements are only
// inherited (upstreamLayerEditable) get no record.
export function upstreamEditedRecords(records, layers, working, baseline, fps) {
  const next = [...records];
  let edited = false;
  // The index in `next` of the record of the layer at `index`, made or rebased to `fps` as needed.
  const recordOf = (key, index) => {
    edited = true;
    let at = next.findIndex((item) => item.layer === key);
    if (at < 0) at = next.push({ layer: key, fps, deleted: [], stickers: [], scene: {} }) - 1;
    if (next[at].fps !== fps) {
      const layer = layers[index].sceneState;
      next[at] = rebaseUpstreamRecord(next[at], layer.timeline.fps === fps ? layer : rebaseSceneState(layer, fps));
    }
    return at;
  };
  working.forEach(({ key, sceneState }, index) => {
    if (!upstreamLayerEditable(key)) return;
    const before = baseline.get(layerBaselineKey(key));
    if (before) {
      const texts = layerTexts(sceneState);
      const sceneFields = ["visible", "clip"].filter((name) => texts[name] !== before[name]);
      if (sceneFields.length) {
        const at = recordOf(key, index);
        const scene = { ...next[at].scene };
        for (const name of sceneFields) scene[name] = structuredClone(sceneState.scene[name]);
        next[at] = { ...next[at], scene };
      }
      if (texts.painting_visible !== before.painting_visible) {
        const at = recordOf(key, index);
        next[at] = { ...next[at], painting_visible: sceneState.painting_visible };
      }
    }
    for (const sticker of sceneState.stickers) {
      const stickerBefore = baseline.get(sticker.id);
      if (!stickerBefore) continue;
      const fields = overrideFields(sticker).filter((name) => JSON.stringify(sticker[name]) !== stickerBefore[name]);
      if (!fields.length) continue;
      const at = recordOf(key, index);
      const { id } = sticker.origin;
      // An override made for the other placement holds Lanes this Sticker does not have; this one replaces it.
      const overrides = [...next[at].stickers];
      const kept = overrides.findIndex((item) => item.id === id);
      const override = kept >= 0 && overrides[kept].placement === sticker.placement ? { ...overrides[kept] } : { id, placement: sticker.placement };
      for (const name of fields) override[name] = structuredClone(sticker[name]);
      if (kept >= 0) overrides[kept] = override;
      else overrides.push(override);
      next[at] = { ...next[at], stickers: overrides };
    }
  });
  return edited ? loadSceneState({ version: 2, upstream: next }).upstream : records;
}

// The Clip ranges of the working copies `working` (upstreamWorkingLayers) that the node's overrides set or an edit
// since `baseline` (upstreamBaseline) changed, as { index, clip, sticker } (`sticker` null for a layer's `scene`):
// those whose ends widen the node's output beyond the upstream Scene's length (docs/render-contract.md "上書き",
// `_override_layers`). The others are in the upstream Scene's length already.
export function upstreamOverriddenClips(working, records, baseline) {
  const clips = [];
  working.forEach(({ key, sceneState }, index) => {
    if (!upstreamLayerEditable(key)) return;
    const record = records.find((item) => item.layer === key);
    const before = baseline.get(layerBaselineKey(key));
    const sceneClip = sceneState.scene.clip;
    if ((record && Object.hasOwn(record.scene, "clip")) || (before && before.clip !== JSON.stringify(sceneClip))) {
      clips.push({ index, clip: sceneClip, sticker: null });
    }
    for (const sticker of sceneState.stickers) {
      const overridden = record?.stickers.some((item) => item.id === sticker.origin.id && item.placement === sticker.placement && Object.hasOwn(item, "clip"));
      const changed = baseline.has(sticker.id) && baseline.get(sticker.id).clip !== JSON.stringify(sticker.clip);
      if (overridden || changed) clips.push({ index, clip: sticker.clip, sticker });
    }
  });
  return clips;
}

// The ends of the Clip ranges of upstreamOverriddenClips, in the working copies' frames (the editor's, at `fps`),
// which lengthen the output past the upstream Scene's (`_override_layers`): `start + duration`, or without a
// duration the end of a port Sticker's media (its layer's port media meta `portMeta(index)`, null while not known),
// and none for another. `openClip`, the one being dragged, counts as one without a duration.
export function upstreamOverriddenEnds(working, records, baseline, portMeta, fps, openClip = null) {
  return upstreamOverriddenClips(working, records, baseline).flatMap(({ index, clip, sticker }) => {
    if (clip.duration !== null && clip !== openClip) return [clip.start + clip.duration];
    const meta = sticker?.source.kind === "port" ? portMeta(index) : null;
    return meta ? [portMediaFrames({ ...clip, duration: null }, fps, meta)] : [];
  });
}

// The node's `upstream` records with `change(record)` made to the record of the layer with `key`, one made at
// `fps` for a layer without a record, normalized: a record left without overrides is dropped.
function changedRecords(records, key, fps, change) {
  const at = records.findIndex((item) => item.layer === key);
  const next = [...records];
  if (at < 0) next.push(change({ layer: key, fps, deleted: [], stickers: [], scene: {} }));
  else next[at] = change(next[at]);
  return loadSceneState({ version: 2, upstream: next }).upstream;
}

// Delete of upstream elements (ADR 0030): the node's `upstream` records with each element of `origins` (the
// `origin` of a working Sticker) deleted in the record of its layer: its id in `deleted` and its override
// dropped. A layer without a record gets one at the editor's `fps`. The layers keep overrides
// (upstreamStickerEditable).
export function upstreamDeletedRecords(records, origins, fps) {
  return origins.reduce((next, { layer, id }) => changedRecords(next, layer, fps, (record) => ({
    ...record,
    deleted: [...record.deleted, id],
    stickers: record.stickers.filter((item) => item.id !== id),
  })), records);
}

const OVERRIDE_LANES = new Set([...SKY_STICKER_LANES, ...WORLD_STICKER_LANES].map(([name]) => name));

// The override the node's `upstream` records hold of the upstream element `origin`, or null.
export function upstreamOverrideOf(records, { layer, id }) {
  return records.find((item) => item.layer === layer)?.stickers.find((item) => item.id === id) ?? null;
}

// "Revert to upstream" (ADR 0030): the records without the override of the working Sticker `sticker`, or
// without only its Lane `lane`, so it inherits them again; `records` itself when there is nothing to revert. A
// Lane is reverted only from an override made for the Sticker's placement, the one that applies to it.
export function upstreamRevertedRecords(records, sticker, lane = null) {
  const { origin } = sticker;
  const override = upstreamOverrideOf(records, origin);
  if (!override) return records;
  if (lane !== null && !(OVERRIDE_LANES.has(lane) && override.placement === sticker.placement && Object.hasOwn(override, lane))) return records;
  return changedRecords(records, origin.layer, null, (record) => ({
    ...record,
    stickers: record.stickers.flatMap((item) => {
      if (item.id !== origin.id) return [item];
      if (lane === null) return [];
      const kept = { ...item };
      delete kept[lane];
      return [kept];
    }),
  }));
}

// How many elements of the working layer `working` (upstreamWorkingLayers) its record deletes: those its layer
// as it came still has, the ones "Restore deleted" brings back.
export function upstreamDeletedCount(records, working) {
  const deleted = new Set(records.find((item) => item.layer === working.key)?.deleted);
  return working.received.stickers.filter((sticker) => deleted.has(sticker.id)).length;
}

// "Restore deleted" (ADR 0030): the records with the deleted elements of the layer with `key` back, or
// `records` itself when it deletes none.
export function upstreamRestoredRecords(records, key) {
  if (!records.find((item) => item.layer === key)?.deleted.length) return records;
  return changedRecords(records, key, null, (record) => ({ ...record, deleted: [] }));
}

// Whether the record `record` (or null) overrides its layer's own fields: its `scene` or its painting_visible.
export function upstreamLayerOverridden(record) {
  return !!record && (Object.keys(record.scene).length > 0 || Object.hasOwn(record, "painting_visible"));
}

// "Revert" of the upstream layer with `key` (ADR 0030): the records without the overrides of its `scene`
// (`visible`, `clip`) and its `painting_visible`, its elements' overrides and deleted ones kept; `records` itself
// when there are none.
export function upstreamLayerRevertedRecords(records, key) {
  if (!upstreamLayerOverridden(records.find((item) => item.layer === key))) return records;
  return changedRecords(records, key, null, ({ painting_visible: _, ...record }) => ({ ...record, scene: {} }));
}

// The records without the overrides and deleted ids of elements no longer in their layer (ADR 0030): an
// element deleted upstream takes its overrides with it. Only the records of the layers in `layers`
// (upstreamLayersOf, the current result) that take them are pruned; a record of a layer that is not there (a
// relinked or not yet run Scene) is kept as it is. `records` itself when nothing is pruned.
export function upstreamPrunedRecords(records, layers) {
  const keys = upstreamLayerKeys(layers);
  const present = new Map(layers.flatMap(({ sceneState }, index) => (
    keys[index] === sceneState.id ? [[sceneState.id, new Set(sceneState.stickers.map((sticker) => sticker.id))]] : []
  )));
  let pruned = false;
  const next = records.map((record) => {
    const ids = present.get(record.layer);
    if (!ids) return record;
    const deleted = record.deleted.filter((id) => ids.has(id));
    const stickers = record.stickers.filter((item) => ids.has(item.id));
    if (deleted.length === record.deleted.length && stickers.length === record.stickers.length) return record;
    pruned = true;
    return { ...record, deleted, stickers };
  });
  return pruned ? loadSceneState({ version: 2, upstream: next }).upstream : records;
}

// What the views draw of the upstream layer with `key` (upstreamLayerKeys) at its Timeline `frame`: `sky`, its Sky
// layers from back to front (skyLayers, with its paint layers `paintLayers`), `stickers`, its world Sticker
// planes (worldStickerLayers), and `items`, its 3D content to load and draw ({ slot, urls, request, value,
// opacity }: the `scene` item or the 3D port Sticker's, request as sceneRequest() makes it, null where none
// shows, and value the evaluated transform its box moves by).
// `layer` is a working copy (upstreamWorkingLayers), whose Sticker ids are apart from the node's own and from other
// layers'; its paint layers' ids are made apart too. Everything is drawn as the node draws it, at its own
// opacity: a hidden Sticker or `scene` is not drawn. A deleted 3D port Sticker asks for nothing but keeps its
// items loaded, as a hidden one does, so undoing the delete does not load them again. media(sticker) is as
// skyLayers'; source(entry) is the URL of a `ui` file entry.
export function upstreamLayerView(layer, key, frame, { media, paintLayers, source }) {
  const { sceneState, ui, received } = layer;
  const evaluated = evaluateSceneState(sceneState, frame);
  const shown = (sticker) => (sticker.visible ? media(sticker) : null);
  const sky = skyLayers(sceneState, frame, { media: shown, zIndex: (sticker) => sticker.z_index, paintLayers, evaluated })
    .map((item) => (item.kind === "erp" ? { ...item, id: upstreamId(key, item.id) } : item));
  const stickers = worldStickerLayers(sceneState, frame, sceneState.stickers, { media: shown, evaluated });
  const items = [];
  const sceneFiles = sceneFilesOf(layerUiList(ui, "pano_scene_files"), layerUiList(ui, "pano_scene_meta"), source);
  if (sceneFiles) {
    items.push({ slot: `${key}:scene`, urls: sceneFiles.urls.filter(Boolean), request: sceneRequest(sceneFiles, evaluated.scene), value: evaluated.scene, opacity: 1 });
  }
  const stickerFiles = sceneFilesOf(layerUiList(ui, "pano_sticker_files"), layerUiList(ui, "pano_sticker_meta"), source);
  if (stickerFiles) {
    const request = stickerContentRequest(stickerFiles, sceneState, evaluated);
    items.push({ slot: `${key}:sticker`, urls: stickerContentUrls(stickerFiles, received), request, value: request?.value ?? null, opacity: request?.opacity ?? 1 });
  }
  return { evaluated, sky, stickers, items };
}
