// The bundle's entry (vite.lib.config.js): registers the suite's nodes with ComfyUI and decides which editor
// opens for each node. It is the only module that imports both the old UI (pano_editor.js) and the new UI
// (web_src/studio/), ADR 0044 "新旧の境".
import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { createEditorChooser, createStudioPreloader, NEW_UI_SETTING, NEW_UI_SETTING_ID, previewUsesNewWindow } from "./editor_choice.js";
import { createPanoEditorExtension } from "./pano_editor_extension.js";
import { oldEditorHooks } from "./pano_editor.js";
import { linkedInputType } from "./pano_preview_video.js";
import { openStudioEditor, preloadStudioEditor } from "./studio/editor.js";
import { openPreviewWindow } from "./studio/preview_window.js";

const newUiOn = () => app?.ui?.settings?.getSettingValue?.(NEW_UI_SETTING_ID);

const openEditor = createEditorChooser({
  newUiOn,
  openOld: oldEditorHooks.openEditor,
  openStudio: (node) => openStudioEditor(node, { app, api }),
  openPreview: (node) => openPreviewWindow(node, { app, api }),
  previewTakes: (node) => previewUsesNewWindow({
    type: node?.comfyClass ?? node?.type,
    sourceType: linkedInputType(node, "source"),
    sourceLinked: (node?.inputs ?? []).find((input) => input?.name === "source")?.link != null,
  }),
});

// With the setting on, the Preview's Scene opens in the new window too (docs/studio-ui.md "Preview のウィンドウ").
oldEditorHooks.takeSceneViewer((node) => {
  if (newUiOn() !== true) return false;
  openPreviewWindow(node, { app, api });
  return true;
});

const extension = createPanoEditorExtension({
  ...oldEditorHooks,
  app,
  openEditor,
  requestFrame: requestAnimationFrame,
});
// With the new editor on, its stylesheet and the three.js chunk load while the page is idle, so its stage shows at
// once when it opens (docs/studio-ui.md "読み込み中と空の画面").
const preloadStudio = createStudioPreloader({
  newUiOn,
  preload: preloadStudioEditor,
  whenIdle: (callback) => (globalThis.requestIdleCallback ? requestIdleCallback(callback, { timeout: 5000 }) : setTimeout(callback, 1500)),
});
const setup = extension.setup;
extension.setup = async function (...args) {
  await setup?.apply(this, args);
  preloadStudio();
};
extension.settings = [...extension.settings, { ...NEW_UI_SETTING, onChange: (value) => value === true && setTimeout(preloadStudio) }];
app.registerExtension(extension);
