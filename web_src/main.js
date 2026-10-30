// The bundle's entry (vite.lib.config.js): registers the suite's nodes with ComfyUI and decides which editor
// opens for each node. It is the only module that imports both the old UI (pano_editor.js) and the new UI
// (web_src/studio/), ADR 0044 "新旧の境".
import { app } from "../../scripts/app.js";
import { createEditorChooser, NEW_UI_SETTING, NEW_UI_SETTING_ID } from "./editor_choice.js";
import { createPanoEditorExtension } from "./pano_editor_extension.js";
import { oldEditorHooks } from "./pano_editor.js";
import { openStudioEditor } from "./studio/editor.js";

const openEditor = createEditorChooser({
  newUiOn: () => app?.ui?.settings?.getSettingValue?.(NEW_UI_SETTING_ID),
  openOld: oldEditorHooks.openEditor,
  openStudio: openStudioEditor,
});

const extension = createPanoEditorExtension({
  ...oldEditorHooks,
  app,
  openEditor,
  requestFrame: requestAnimationFrame,
});
extension.settings = [...extension.settings, NEW_UI_SETTING];
app.registerExtension(extension);
