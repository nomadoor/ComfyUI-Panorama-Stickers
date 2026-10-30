// A stand-in for ComfyUI's scripts/app.js for the browser pages that load the node runtime or the bundle's entry
// (tests/browser/vite.config.js points `../../scripts/app.js` here). A page fills in what it needs (graph, canvas).
// registerExtension keeps what web_src/main.js registers, so a page can drive the extension the way ComfyUI does.
// window.__comfySettings: the values of settings that were set; the others read as their defaultValue, as
// ComfyUI's settings store does.
const defaults = {};
const setting = (id) => {
  const settings = window.__comfySettings ?? {};
  return id in settings ? settings[id] : defaults[id];
};

export const app = {
  graph: null,
  canvas: { setDirty() {} },
  nodeOutputs: {},
  extensions: [],
  ui: { settings: { getSettingValue: (id) => setting(id) } },
  registerExtension(extension) {
    for (const entry of extension.settings ?? []) defaults[entry.id] = entry.defaultValue;
    this.extensions.push(extension);
  },
  getNodeImageUrls: () => [],
};
export const ANIM_PREVIEW_WIDGET = "$$comfy_animation_preview";
