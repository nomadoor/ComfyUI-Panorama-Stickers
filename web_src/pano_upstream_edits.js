// The edits of the upstream layers' working copies, written back as the node's `upstream` records (ADR 0030,
// docs/studio-ui.md "上流の物の編集" "書き戻し", docs/studio-node.md "エディタでの編集" "エディタでの消す・戻す"):
// the baseline the working copies are compared with (pano_upstream.js upstreamBaseline), when it is written back,
// and the operations that change the records (Delete, the reverts, Restore deleted, the pruning). The old editor
// (editor/upstream.js) and the new one (studio/upstream.js) use it alike; what is written where is pano_upstream.js's.
//
// records(): the node's `upstream` records (state v2; [] for none). setRecords(records): writes them (the old editor
// into its state, the new one replaces its working state). layers: the layers of the node's result with their working
// copies (pano_upstream_layers.js createUpstreamLayers: `entries`, `current`, `rebuild`), whose onRebuild calls
// rebuilt(working) here. fps(): the editor's Timeline fps.
import {
  upstreamBaseline,
  upstreamDeletedRecords,
  upstreamEditedRecords,
  upstreamLayerRevertedRecords,
  upstreamOverriddenEnds,
  upstreamPrunedRecords,
  upstreamRestoredRecords,
  upstreamRevertedRecords,
} from "./pano_upstream.js";

export function createUpstreamEdits({ records, setRecords, layers, fps }) {
  // The working copies' fields as the last write-back or rebuild left them (upstreamBaseline): an edit is what
  // differs from them.
  let baseline = new Map();

  // The working copies were made again (layers' onRebuild): they are the baseline.
  function rebuilt(working) {
    baseline = upstreamBaseline(working);
  }

  // Makes the working copies again from the layers as they came and the records: after a record changed, after Undo
  // or Redo restored them, and when a drag is given up.
  function rebuild() {
    layers.rebuild();
  }

  // Writes the edits of the working copies since the last write-back or rebuild into the records
  // (upstreamEditedRecords), in the frames of the working copies. Returns whether the records changed. Opening and
  // closing without an edit writes nothing.
  function sync() {
    const read = layers.current();
    if (!read.list) return false;
    const working = read.entries.map((entry) => entry.working);
    const current = records();
    const next = upstreamEditedRecords(current, read.entries.map((entry) => entry.layer), working, baseline, read.fps);
    if (next === current) return false;
    setRecords(next);
    baseline = upstreamBaseline(working);
    return true;
  }

  // Drops the overrides and deleted ids of elements no longer in their layers (upstreamPrunedRecords), while the
  // node's result is current. Called with each Undo step, after sync(): only an edit prunes, and opening and closing
  // never do. Returns whether the records changed.
  function prune() {
    const entries = layers.entries();
    if (!entries) return false;
    const current = records();
    const next = upstreamPrunedRecords(current, entries.map((entry) => entry.layer));
    if (next === current) return false;
    setRecords(next);
    return true;
  }

  // The records changed by `change(records)` with the edits written back first, and the working copies made again
  // from them (never the upstream values written into the working copies: the next write-back would take them for
  // edits). Returns whether they changed.
  function change(apply) {
    sync();
    const current = records();
    const next = apply(current);
    if (next === current) return false;
    setRecords(next);
    rebuild();
    return true;
  }

  return {
    rebuilt,
    rebuild,
    sync,
    prune,
    // Delete of the working Stickers `stickers`: their layers' records delete them.
    deleteStickers: (stickers) => change((current) => upstreamDeletedRecords(current, stickers.map((sticker) => sticker.origin), fps())),
    // "Revert to upstream" of the working Sticker `sticker`: all its overrides, or only its Lane `lanes`, or its Lanes
    // `lanes` (a list: a row of the new inspector, docs/studio-ui.md "上流の物の編集") in one change.
    revertSticker: (sticker, lanes = null) => change((current) => (
      Array.isArray(lanes) ? lanes.reduce((next, lane) => upstreamRevertedRecords(next, sticker, lane), current) : upstreamRevertedRecords(current, sticker, lanes)
    )),
    // "Revert" of the layer with `key`: its `scene` and painting follow upstream again.
    revertLayer: (key) => change((current) => upstreamLayerRevertedRecords(current, key)),
    // "Restore deleted" of the layer with `key`: its deleted elements show again.
    restoreDeleted: (key) => change((current) => upstreamRestoredRecords(current, key)),
    // The Timeline's new working copy `sceneState` of the layer with `key` (timeline_actions.js, an edit's
    // `upstream`), written back with the next sync(). Returns whether the layer is there.
    setWorking(key, sceneState) {
      const entry = layers.current().entries.find((item) => item.working?.key === key);
      if (!entry) return false;
      entry.working = { ...entry.working, sceneState };
      return true;
    },
    // The ends of the Clip ranges overridden in the working copies (upstreamOverriddenEnds), against this baseline:
    // what the Auto length counts. portMeta(index) is a layer's port media meta; `openClip` the one being dragged.
    overriddenEnds(working, portMeta, openClip = null) {
      return upstreamOverriddenEnds(working, records(), baseline, portMeta, fps(), openClip);
    },
    // Lets the baseline go (the editor closes).
    reset() {
      baseline = new Map();
    },
  };
}
