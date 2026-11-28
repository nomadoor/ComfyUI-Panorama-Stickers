// The bundle's entry (vite.lib.config.js): registers the suite's nodes with ComfyUI and decides which editor
// opens for each node. It is the only module that imports both the old UI (pano_editor.js) and the new UI
// (web_src/studio/), ADR 0044 "新旧の境".
import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { createEditorChooser, createStudioPreloader, previewUsesNewWindow } from "./editor_choice.js";
import { createPanoEditorExtension } from "./pano_editor_extension.js";
import { oldEditorHooks } from "./pano_editor.js";
import { inputLinked, linkedInputType } from "./pano_preview_video.js";
import { openStudioEditor, preloadStudioEditor } from "./studio/editor.js";
import { openPreviewWindow } from "./studio/preview_window.js";
import { setWorkflowChangeNotifier } from "./pano_state_widget.js";
import { comfy } from "./node_surface/media.js";

// The box the node surfaces' route answer gave for a 3D file's Source, read without asking the route again
// (docs/space-and-view.md "World の物のガイド"), or null.
const nodeFile3dBox = (source) => {
  const entry = comfy.file3dFiles?.peek(source) ?? null;
  return entry?.state === "ready" ? entry.box ?? null : null;
};

const openEditor = createEditorChooser({
  openOld: oldEditorHooks.openEditor,
  openStudio: (node) => openStudioEditor(node, { app, api, nodeFile3dBox }),
  openPreview: (node) => openPreviewWindow(node, { app, api }),
  previewTakes: (node) => previewUsesNewWindow({
    type: node?.comfyClass ?? node?.type,
    sourceType: linkedInputType(node, "source"),
    sourceLinked: inputLinked(node, ["source"]),
  }),
});

// The Preview's Scene opens in the new window too (docs/studio-ui.md "Preview のウィンドウ").
oldEditorHooks.setSceneViewerOpener((node) => openPreviewWindow(node, { app, api }));

const extension = createPanoEditorExtension({
  ...oldEditorHooks,
  app,
  openEditor,
  requestFrame: requestAnimationFrame,
});
// The new editor's stylesheet and the three.js chunk load while the page is idle, so its stage shows at once when it
// opens (docs/studio-ui.md "読み込み中と空の画面").
const preloadStudio = createStudioPreloader({
  preload: preloadStudioEditor,
  whenIdle: (callback) => (globalThis.requestIdleCallback ? requestIdleCallback(callback, { timeout: 5000 }) : setTimeout(callback, 1500)),
});
const setup = extension.setup;
extension.setup = async function (...args) {
  await setup?.apply(this, args);
  preloadStudio();
};
// A write of a state_json widget tells ComfyUI's active workflow to take the graph again (pano_state_widget.js). ComfyUI
// skips that take at times (mid-gesture, loading); then it is tried again each 100 ms for up to 3 s, so the workflow is
// marked changed and its draft kept, and only after that is its `graphChanged` sent here, which writes the draft a
// reload restores from the graph as it is. The console says why (docs/studio-ui.md "閉じ方").
const TAKE_RETRY_MS = 100;
const TAKE_RETRY_LIMIT_MS = 3000;
let takeRetry = null;
function takeWorkflowChange() {
  const tracker = app.extensionManager?.workflow?.activeWorkflow?.changeTracker;
  if (!tracker) return true;
  // While ComfyUI holds its takes (a gesture, Undo or Redo under way), no take can happen: no need to read the graph.
  if (tracker.changeCount > 0 || tracker._restoringState) return false;
  const before = tracker.activeState;
  if (typeof tracker.captureCanvasState === "function") tracker.captureCanvasState();
  else tracker.checkState?.();
  if (tracker.activeState !== before) return true;
  // Unchanged: the graph was already as taken (a write of the same text), or the take was skipped.
  const equal = tracker.constructor?.graphEqual;
  if (typeof equal !== "function" || !app.rootGraph) return false;
  return equal(tracker.activeState, JSON.parse(JSON.stringify(app.rootGraph.serialize())));
}
setWorkflowChangeNotifier(() => {
  if (takeRetry) return;
  if (takeWorkflowChange()) return;
  const tracker = app.extensionManager?.workflow?.activeWorkflow?.changeTracker;
  console.warn("[PanoramaStickers] ComfyUI did not take the state_json change; trying again.", {
    changeCount: tracker?.changeCount,
    restoring: !!tracker?._restoringState,
  });
  const started = Date.now();
  takeRetry = setInterval(() => {
    if (takeWorkflowChange()) {
      clearInterval(takeRetry);
      takeRetry = null;
      return;
    }
    if (Date.now() - started < TAKE_RETRY_LIMIT_MS) return;
    clearInterval(takeRetry);
    takeRetry = null;
    const current = app.extensionManager?.workflow?.activeWorkflow?.changeTracker;
    console.warn("[PanoramaStickers] ComfyUI still did not take the state_json change; saving the workflow draft directly.");
    api.dispatchCustomEvent?.("graphChanged", current?.activeState);
  }, TAKE_RETRY_MS);
});
app.registerExtension(extension);
