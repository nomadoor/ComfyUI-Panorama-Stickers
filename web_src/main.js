// The bundle's entry (vite.lib.config.js): registers the suite's nodes with ComfyUI and decides which editor
// opens for each node. It is the only module that imports both the old UI (pano_editor.js) and the new UI
// (web_src/studio/), ADR 0044 "新旧の境".
import { app } from "../../scripts/app.js";
import { createPanoEditorExtension } from "./pano_editor_extension.js";
import { oldEditorHooks } from "./pano_editor.js";

app.registerExtension(createPanoEditorExtension({
  ...oldEditorHooks,
  app,
  requestFrame: requestAnimationFrame,
}));
