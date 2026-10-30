// A stand-in for ComfyUI's scripts/app.js for the browser pages that load the node runtime (tests/browser/vite.config.js
// points `../../scripts/app.js` here). A page fills in what it needs (graph, canvas).
export const app = { graph: null, canvas: { setDirty() {} }, nodeOutputs: {} };
export const ANIM_PREVIEW_WIDGET = "$$comfy_animation_preview";
