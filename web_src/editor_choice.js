// Which editor opens for a node (ADR 0044 "置き換えの進め方"). Panorama Studio opens in the new UI while the setting
// below is on (the default); turned off, every node opens in the old UI, which keeps painting and masks until the
// new UI has them.
// web_src/main.js puts this together with the two editors.

// The new Preview window shows an IMAGE or a VIDEO source so far; a PANO_SCENE source opens the old window.
// type: the class of the node, sourceType: the type linked to its `source` input.
export function previewUsesNewWindow({ type, sourceType }) {
  return type === "PanoramaPreviewNode" && (sourceType === "IMAGE" || sourceType === "VIDEO");
}

export const NEW_UI_SETTING_ID = "PanoramaSuite.Editor.NewUI";

// The ComfyUI setting (an extension's `settings`). On by default (docs/studio-ui.md "入口").
export const NEW_UI_SETTING = {
  id: NEW_UI_SETTING_ID,
  category: ["Panorama Suite", "Editor", "New editor"],
  name: "Panorama Studio: new editor",
  tooltip: "Opens Panorama Studio in the new editor. Turn it off to use the previous editor, which still has painting and masks.",
  type: "boolean",
  defaultValue: true,
};

// Preloading the new editor (docs/studio-ui.md "読み込み中と空の画面"): returns check(), which, while the setting is on,
// asks `whenIdle` to run preload() once (later checks do nothing). main.js calls it after ComfyUI has set up and when
// the setting changes. newUiOn(): whether the setting is on; whenIdle(callback): runs callback when the page is idle.
export function createStudioPreloader({ newUiOn, preload, whenIdle }) {
  let asked = false;
  return () => {
    if (asked || newUiOn() !== true) return;
    asked = true;
    whenIdle(() => preload());
  };
}

// openEditor(node, type, options) for the node registration. newUiOn(): whether the setting is on.
// openOld(node, type, options): the old UI's editor. openStudio(node): the new UI's Panorama Studio editor.
// openPreview(node): the new UI's Preview window (docs/studio-ui.md "Preview のウィンドウ"); previewTakes(node): whether
// it shows this node's read-only opening (the Panorama Preview node with what the window shows so far linked).
export function createEditorChooser({ newUiOn, openOld, openStudio, openPreview = null, previewTakes = () => false }) {
  return (node, type, options = {}) => {
    const studio = node?.__panoStudio === true && type === "stickers" && !options.readOnly;
    if (studio && newUiOn() === true) return openStudio(node);
    if (openPreview && type === "stickers" && options.readOnly && newUiOn() === true && previewTakes(node)) return openPreview(node);
    return openOld(node, type, options);
  };
}
