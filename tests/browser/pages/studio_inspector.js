// The new UI's inspector (web_src/components/studio/StudioInspector.vue) on a working state, for
// tests/browser/studio_inspector.spec.js: the page applies the inspector's edits with web_src/studio/inspector_actions.js
// as the editor does and reports through window.__check, window.__edits (each edit and its result) and window.__scene.
import { createApp } from "vue";
import StudioInspectorScene from "./StudioInspectorScene.vue";

const check = (window.__check = { done: false, error: null });
window.__edits = [];

try {
  createApp(StudioInspectorScene).mount("#app");
  await document.fonts.ready;
} catch (error) {
  check.error = String(error?.stack || error);
}
check.done = true;
