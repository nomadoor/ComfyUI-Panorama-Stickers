// Panorama Studio's editor in the new UI (ADR 0044). In development: web_src/main.js opens it only while the
// setting PanoramaSuite.Editor.NewUI is on. For now it is an empty window that saves nothing when it closes.
import { createApp } from "vue";
import StudioEditor from "../components/studio/StudioEditor.vue";
import { installStudioStylesheet } from "./stylesheet.js";

// The nodes whose editor is open, so a second open does not stack a second window.
const openNodes = new WeakSet();

export async function openStudioEditor(node) {
  if (!node || openNodes.has(node)) return;
  openNodes.add(node);
  await installStudioStylesheet();
  const mountHost = document.createElement("div");
  document.body.appendChild(mountHost);
  const close = () => {
    vueApp.unmount();
    mountHost.remove();
    openNodes.delete(node);
  };
  const vueApp = createApp(StudioEditor, {
    nodeTitle: String(node.title || "Panorama Studio"),
    onClose: close,
  });
  vueApp.mount(mountHost);
}
