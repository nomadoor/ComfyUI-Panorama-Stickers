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

const openEditor = createEditorChooser({
  openOld: oldEditorHooks.openEditor,
  openStudio: (node) => openStudioEditor(node, { app, api }),
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
// skips that take at times (mid-gesture, loading, another tab in front); then its `graphChanged` is sent here, which
// writes the draft a reload restores from the graph as it is, and the console says why (docs/studio-ui.md "閉じ方").
setWorkflowChangeNotifier(() => {
  const tracker = app.extensionManager?.workflow?.activeWorkflow?.changeTracker;
  if (!tracker) return;
  const before = tracker.activeState;
  if (typeof tracker.captureCanvasState === "function") tracker.captureCanvasState();
  else tracker.checkState?.();
  if (tracker.activeState !== before) return;
  console.warn("[PanoramaSuite] ComfyUI did not take the state_json change; saving the workflow draft directly.", {
    changeCount: tracker.changeCount,
    restoring: !!tracker._restoringState,
    activeTab: app.extensionManager?.workflow?.activeWorkflow?.changeTracker === tracker,
  });
  api.dispatchCustomEvent?.("graphChanged", tracker.activeState);
});
app.registerExtension(extension);
