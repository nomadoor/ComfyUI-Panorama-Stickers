// Which editor opens for a node (ADR 0044 "置き換えの進め方"). While the new UI is in development, Panorama
// Studio opens in it only when the setting below is on; otherwise every node opens in the old UI, as before.
// web_src/main.js puts this together with the two editors.

export const NEW_UI_SETTING_ID = "PanoramaSuite.Editor.NewUI";

// The ComfyUI setting (an extension's `settings`). Off by default: a user sees no change.
export const NEW_UI_SETTING = {
  id: NEW_UI_SETTING_ID,
  category: ["Panorama Suite", "Editor", "New editor"],
  name: "Panorama Studio: new editor (in development)",
  tooltip: "Opens Panorama Studio in the new editor while it is being built. It does not edit or save anything yet.",
  type: "boolean",
  defaultValue: false,
};

// openEditor(node, type, options) for the node registration. newUiOn(): whether the setting is on.
// openOld(node, type, options): the old UI's editor. openStudio(node): the new UI's Panorama Studio editor.
export function createEditorChooser({ newUiOn, openOld, openStudio }) {
  return (node, type, options = {}) => {
    const studio = node?.__panoStudio === true && type === "stickers" && !options.readOnly;
    if (studio && newUiOn() === true) return openStudio(node);
    return openOld(node, type, options);
  };
}
