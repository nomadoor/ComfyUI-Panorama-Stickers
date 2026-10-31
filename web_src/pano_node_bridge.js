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
// - sceneViewer:   the Preview's viewer of a Scene on its node (pano_scene_viewer_node.js): its view and playhead
//                  (pano_scene_viewer.js sceneViewerRecord), which the window continues from, and its surface.
// - mediaCache:    media loaded for the node (its inputs' images, its output's VIDEO and ERP).
// - stateSync:     the working state the surfaces read, and what must reach state_json before a run.

const records = new WeakMap();

const GROUPS = {
  editorSession: () => ({
    // The modal editor of the node is open; it covers the node surface, which lets its VIDEO go meanwhile.
    open: false,
    // Writes the modal's state to state_json before the prompt is queued.
    flushBeforeQueue: null,
    // The view the editor was closed with (pano_view_memory.js viewMemory), which the next opening restores.
    view: null,
    // The new UI's placements of Add and the drop still uploading (studio/add_files.js `pending`): an editor opened
    // again before one ends takes it over from the closed one.
    placements: new Set(),
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
    // What Panorama Studio's picture draws of its inputs as the editor does: the depth grids' colors and the upstream
    // Scene's layers (pano_preview_runtime.js attachPanoramaPreviewImpl), null without a Studio surface.
    studioInputs: null,
    scene: null,
    renderCache: null,
    paintEngine: null,
    paintDescriptorKey: "",
    paintRevision: null,
    paintRevisionKey: "",
    paintState: null,
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
    // What the Preview (`PanoramaPreviewNode`) shows its `source` in: "scene" (the Scene viewer), "media" (this
    // runtime) or null before it is chosen.
    display: null,
  }),
  sceneViewer: () => ({
    // sceneViewerRecord() once the viewer is made; kept across the window and re-attaching, never saved.
    record: null,
    // The surface on the node: { detach() }.
    surface: null,
    // The window is open: the node does not draw meanwhile.
    windowOpen: false,
    // The open window: { close() }, or null.
    window: null,
  }),
  mediaCache: () => ({
    // Shared by the node surface and the editor (pano_comfy_media.js), each under its own keys.
    linkedImages: new Map(),
    // { key, player } of createLoopingPreviewVideo.
    ownOutputVideo: null,
    ownOutputRev: 0,
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
export const sceneViewer = (node) => group(node, "sceneViewer");
export const mediaCache = (node) => group(node, "mediaCache");
export const stateSync = (node) => group(node, "stateSync");

// The group if the node has one, else null: for readers that must not make it.
export const peekEditorSession = (node) => existing(node, "editorSession");
export const peekNodeSurface = (node) => existing(node, "nodeSurface");
export const peekPreviewNode = (node) => existing(node, "previewNode");
export const peekSceneViewer = (node) => existing(node, "sceneViewer");

// Whether the node's modal editor is open.
export const editorOpen = (node) => existing(node, "editorSession")?.open === true;

// The window on the node's Scene (pano_scene_viewer_window.js, { close() }) opened: the node does not draw while it
// is open.
export function sceneViewerWindowOpened(node, window) {
  const owner = group(node, "sceneViewer");
  owner.window = window;
  owner.windowOpen = true;
}

// The window closed: the node goes on from the view and playhead the window left in the record, as the one used last.
export function sceneViewerWindowClosed(node) {
  const owner = group(node, "sceneViewer");
  owner.window = null;
  owner.windowOpen = false;
  owner.surface?.activate();
}

// The nodes whose Studio editor is open, so the Preview's viewers on the graph stop drawing meanwhile.
const openStudioEditors = new Set();
export function noteStudioEditorOpen(node, open) {
  if (open) openStudioEditors.add(node);
  else openStudioEditors.delete(node);
}
export const anyStudioEditorOpen = () => openStudioEditors.size > 0;

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
  sceneViewer(viewer) {
    viewer.window?.close?.();
    viewer.surface?.detach?.();
  },
  mediaCache(media) {
    media.linkedImages.forEach((entry) => {
      releaseImage(entry?.img);
      releaseImage(entry?.pendingImg);
    });
    media.ownOutputVideo?.player?.destroy?.();
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
export const clearSceneViewer = (node) => clearGroup(node, "sceneViewer");
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
