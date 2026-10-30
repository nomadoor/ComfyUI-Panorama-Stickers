// The upstream Scene on Panorama Studio's `scene` input (ADR 0029, ADR 0030): its layers from the node's
// current result, their working copies with the node's overrides applied (pano_upstream.js
// upstreamWorkingLayers), which the editor selects and edits like its own Stickers, the edits written back as
// the node's overrides (syncUpstreamEdits), what the views draw of them at the playhead (their Stickers' images,
// port media and paint, at the same resolution as the node's own), and whether the editor waits for a run to
// show them. The working copies never enter the state's Stickers.
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { portMediaMeta } from "../pano_port_media.js";
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
  upstreamOverriddenEnds,
  upstreamPending,
  upstreamPrunedRecords,
  upstreamRestoredRecords,
  upstreamRevertedRecords,
  upstreamRowId,
} from "../pano_upstream.js";
import { createUpstreamLayers } from "../pano_upstream_layers.js";

export function createUpstream(deps) {
  const {
    comfyMedia, editor, mediaAssetSource, mediaSource, node, state, studio,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let file3dEditorFile, getDesiredPaintTargetDescriptor, getMediaRevisionToken, playback, requestDraw;

  // The working copies' fields as the last write-back or rebuild left them (upstreamBaseline): an edit is what
  // differs from them.
  let baseline = new Map();

  const drawMedia = () => requestDraw({ cause: "frame_view", localOnly: true, reason: DRAW_REASON.MEDIA });

  // The layers of the node's current result, their working copies with the node's overrides and their media
  // (pano_upstream_layers.js).
  const layers = createUpstreamLayers({
    list: () => {
      const value = studio && isNodeOutputMediaCurrent(node, "scene") ? comfyMedia.uiValue(node, "pano_upstream_layers") : null;
      return Array.isArray(value) ? value : null;
    },
    fps: () => state.timeline.fps,
    records: () => state.upstream,
    mediaSource,
    mediaAssetSource,
    revisionOf: (media) => getMediaRevisionToken(media),
    paintTarget: () => getDesiredPaintTargetDescriptor(),
    playing: () => playback.advancing,
    editorFile: (sticker) => file3dEditorFile(sticker),
    onMedia: drawMedia,
    onRebuild: (working) => {
      baseline = upstreamBaseline(working);
    },
  });

  // Whether another Studio's Scene is linked to `scene`: by the link's type, or, when that is not known, by
  // the upstream layers of the node's current result.
  function upstreamLinked() {
    return studio && (linkedInputType(node, "scene") === PANO_SCENE_TYPE || !!upstreamEntries());
  }

  // The upstream layers' entries of the node's current result ({ layer, working, ... }, see `read`), or null
  // when it has none.
  function upstreamEntries() {
    return layers.entries();
  }

  // Makes the working copies of the upstream layers again from the layers as they came and the state's
  // `upstream` records: after a new result and after Undo or Redo restored the state.
  function rebuildUpstreamWorking() {
    layers.rebuild();
  }

  // Writes the edits of the working copies since the last write-back or rebuild into the state's `upstream`
  // records (pano_upstream.js upstreamEditedRecords), in the frames of the working copies. Called where the
  // editor writes its state: before each Undo step and each commit. Opening and closing without an edit writes
  // nothing.
  function syncUpstreamEdits() {
    const read = layers.current();
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
    return layers.portImage(sticker.origin.layer);
  }

  // The upstream Scene as the Auto length counts it (pano_timeline.js autoTimelineLength `upstream`), or null
  // without one: its output frame count (`pano_upstream_frames`; a result from before it was reported gives the
  // node's own output length, `pano_timeline_frames`, instead) and the ends of the Clip ranges this node overrides
  // in its layers (upstreamOverriddenEnds), as the node lengthens its output with them (ADR 0030). `openClip`,
  // the one being dragged, counts as one without a duration.
  function upstreamOutput(openClip = null) {
    const entries = upstreamEntries();
    if (!entries) return null;
    const [frames] = comfyMedia.uiValue(node, "pano_upstream_frames") || comfyMedia.uiValue(node, "pano_timeline_frames") || [];
    const working = entries.map((entry) => entry.working);
    const portMeta = (index) => portMediaMeta((key) => layerUiList(entries[index].layer.ui, key));
    return {
      frames: Number(frames) > 0 ? Number(frames) : 0,
      ends: upstreamOverriddenEnds(working, state.upstream, baseline, portMeta, state.timeline.fps, openClip),
    };
  }

  // The port media of the layer of an upstream working Sticker (portMediaMeta), or null.
  function upstreamPortMeta(sticker) {
    return layers.portMeta(sticker.origin.layer);
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

  // What the views draw of the upstream Scene at the playhead (pano_upstream.js upstreamLayerView of each
  // working copy, which is at the editor's fps): its Sky layers under the node's own, its world Sticker planes
  // and its 3D items. Empty without upstream layers.
  function upstreamViewInput() {
    return layers.viewInput(editor.frame);
  }

  // Lets go of the upstream media when the editor closes.
  function disposeUpstream() {
    layers.dispose();
    baseline = new Map();
  }

  return {
    connect(api) {
      ({ file3dEditorFile, getDesiredPaintTargetDescriptor, getMediaRevisionToken, playback, requestDraw } = api);
    },
    upstreamEntries, upstreamLinked, upstreamNotice, upstreamOutput, upstreamPortMeta, upstreamViewInput, rebuildUpstreamWorking,
    syncUpstreamEdits, pruneUpstreamRecords, deleteUpstreamStickers, revertUpstreamSticker, revertUpstreamLayer,
    restoreUpstreamDeleted, upstreamStickers, upstreamStickerImage, upstreamTimelineLayers,
    upstreamRow, disposeUpstream,
  };
}
