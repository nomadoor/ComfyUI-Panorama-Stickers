// The frontend's runtime state of a LiteGraph node, kept beside the node instead of on it.
//
// One record per node in a WeakMap, in groups by owner. Each group has a getter that makes it on first use
// and a clear function; disposeNodeRuntime(node) tears all of them down when the node leaves the graph
// (onRemoved, which LiteGraph also calls for each node on graph.clear() and a workflow load).
// Nothing here is serialized or copied by LGraphNode.clone(): both go through serialize(), which writes
// only LiteGraph's own fields.
//
// Groups and owners:
// - editorSession: the open modal editor (pano_editor.js), and the view it was last closed with.
// - nodeSurface:   the on-node surface of Stickers, Cutout and Panorama Studio (pano_preview_runtime.js),
//                  and whether pano_editor_extension.js attached it.
// - previewNode:   the Preview nodes' runtime (pano_preview_previewnode.js) and its install probe.
// - mediaCache:    media loaded for the node (its inputs' images, its output's VIDEO and ERP).
// - stateSync:     the working state the surfaces read, and what must reach state_json before a run.

const records = new WeakMap();

const GROUPS = {
  editorSession: () => ({
    // Writes the modal's state to state_json before the prompt is queued.
    flushBeforeQueue: null,
    // The view the editor was closed with (pano_view_memory.js viewMemory), which the next opening restores.
    view: null,
  }),
  nodeSurface: () => ({
    attached: false,
    mountKey: null,
    controller: null,
    // "stickers" or "cutout" once attached.
    mode: "",
    noPreview: false,
    openEditor: null,
    // { widget, root, canvas, requestDraw, state, emptyHintEl, nodeSurface }
    dom: null,
    // Undoes the attach of `dom`.
    restore: null,
    cutout: null,
    stickers: null,
    cutoutState: null,
    stickersState: null,
    cutoutFrame: null,
    lastCutoutShot: null,
    view: null,
    playback: null,
    // The ends of the Clip ranges Panorama Studio overrides upstream, for its Timeline's length, with the result
    // list and state they were made from (pano_preview_runtime.js surfaceTimelineMedia).
    upstreamLength: null,
    scene: null,
    renderCache: null,
    paintEngine: null,
    paintDescriptorKey: "",
    paintRevision: null,
    paintRevisionKey: "",
    rasterCache: null,
    rasterReady: null,
    bootMinHeightActive: false,
    bootMinHeightTimer: null,
    resizeSettleTimer: null,
    userResized: false,
    standaloneBootSized: false,
    debugLastTs: 0,
  }),
  previewNode: () => ({
    runtime: null,
    surface: null,
    installDone: false,
    installProbeActive: false,
    installProbeTries: 0,
  }),
  mediaCache: () => ({
    // Shared by the node surface and the editor (pano_comfy_media.js), each under its own keys.
    linkedImages: new Map(),
    // { key, player } of createLoopingPreviewVideo.
    ownOutputVideo: null,
    ownOutputRev: 0,
    // { src, image, ready, failed } of Panorama Studio's last run output (an ERP or a first frame).
    studioRunImage: null,
    executedOutputs: new Map(),
    outputFromRun: false,
  }),
  stateSync: () => ({
    liveState: null,
    liveStateVersion: 0,
    parsedState: null,
    flushers: new Set(),
    pendingStickerUploads: new Map(),
    stickerOperationTail: null,
    coverageSyncInstalled: false,
  }),
};

function group(node, name) {
  if (!node || typeof node !== "object") return null;
  let record = records.get(node);
  if (!record) {
    record = {};
    records.set(node, record);
  }
  return record[name] ??= GROUPS[name]();
}

function existing(node, name) {
  return (node && typeof node === "object" && records.get(node)?.[name]) || null;
}

export const editorSession = (node) => group(node, "editorSession");
export const nodeSurface = (node) => group(node, "nodeSurface");
export const previewNode = (node) => group(node, "previewNode");
export const mediaCache = (node) => group(node, "mediaCache");
export const stateSync = (node) => group(node, "stateSync");

// The group if the node has one, else null: for readers that must not make it.
export const peekEditorSession = (node) => existing(node, "editorSession");
export const peekNodeSurface = (node) => existing(node, "nodeSurface");
export const peekPreviewNode = (node) => existing(node, "previewNode");

function releaseImage(image) {
  if (!image) return;
  image.onload = null;
  image.onerror = null;
  image.removeAttribute?.("src");
}

const CLEAR = {
  editorSession() {},
  nodeSurface(surface) {
    try { surface.restore?.(); } catch { }
    clearTimeout(surface.bootMinHeightTimer);
    clearTimeout(surface.resizeSettleTimer);
    surface.rasterCache?.dispose?.();
  },
  previewNode(preview) {
    preview.runtime?.teardown?.();
  },
  mediaCache(media) {
    media.linkedImages.forEach((entry) => {
      releaseImage(entry?.img);
      releaseImage(entry?.pendingImg);
    });
    media.ownOutputVideo?.player?.destroy?.();
    releaseImage(media.studioRunImage?.image);
  },
  stateSync() {},
};

// Tears the group down and forgets it; the next getter call makes it again.
function clearGroup(node, name) {
  const value = existing(node, name);
  if (!value) return;
  try {
    CLEAR[name](value);
  } finally {
    delete records.get(node)[name];
  }
}

export const clearEditorSession = (node) => clearGroup(node, "editorSession");
export const clearNodeSurface = (node) => clearGroup(node, "nodeSurface");
export const clearPreviewNode = (node) => clearGroup(node, "previewNode");
export const clearMediaCache = (node) => clearGroup(node, "mediaCache");
export const clearStateSync = (node) => clearGroup(node, "stateSync");

// Everything the frontend keeps for the node: the surfaces are detached (their Vue apps unmounted), timers
// and animation frames cancelled, loading images and VIDEOs let go. A group a teardown fails in does not
// keep the others.
export function disposeNodeRuntime(node) {
  for (const name of Object.keys(GROUPS)) {
    try {
      clearGroup(node, name);
    } catch (error) {
      console.error(`[PanoramaSuite] disposing ${name} of a node failed`, error);
    }
  }
  if (node && typeof node === "object") records.delete(node);
}
