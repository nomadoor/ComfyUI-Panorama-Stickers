// The new UI's Timeline (web_src/components/studio/StudioTimeline.vue) in dark and light, for
// tests/browser/studio_timeline.spec.js. StudioTimelineScene.vue stands in for the shell: it applies the Timeline's
// edits and selections to its own state. Events are logged in window.__events; window.__scene reads the state.
import { createApp } from "vue";
import StudioTimelineScene from "./StudioTimelineScene.vue";

const check = (window.__check = { done: false, error: null });
window.__events = [];

try {
  createApp(StudioTimelineScene, { onEvent: (event) => window.__events.push(event) }).mount("#app");
  await document.fonts.ready;
} catch (error) {
  check.error = String(error?.stack || error);
}
check.done = true;
