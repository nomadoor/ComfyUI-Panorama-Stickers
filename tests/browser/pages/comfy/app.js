// A stand-in for ComfyUI's `scripts/app.js` (tests/browser/vite.config.js points web_src's imports of it here), so a
// page can load the bundle's entry (web_src/main.js) and drive the extension it registers the way ComfyUI does.
// window.__comfySettings: the values of settings that were set (the others read as their defaultValue, as ComfyUI's
// settings store does).
const settings = (window.__comfySettings ??= {});
const defaults = {};

export const app = {
  extensions: [],
  nodeOutputs: {},
  canvas: { graph: null, setDirty() {} },
  ui: { settings: { getSettingValue: (id) => (id in settings ? settings[id] : defaults[id]) } },
  registerExtension(extension) {
    for (const setting of extension.settings ?? []) defaults[setting.id] = setting.defaultValue;
    this.extensions.push(extension);
  },
  getNodeImageUrls: () => [],
};
