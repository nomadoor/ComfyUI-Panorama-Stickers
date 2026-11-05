// Which editor opens for a node (ADR 0044 "置き換えの進め方", ADR 0062). Panorama Studio always opens in the new UI,
// read-only too; the legacy nodes open in the old UI.
// web_src/main.js puts this together with the two editors.

// The Preview's read-only opening of an IMAGE or a VIDEO source, or of a `source` with nothing linked (an empty black
// stage), goes to the new window (a PANO_SCENE source opens through the Scene viewer's opener instead, which
// web_src/main.js hands to the new window: pano_editor.js oldEditorHooks.setSceneViewerOpener). A link whose type is not
// known (an untyped Reroute) keeps the old opening (docs/preview-node.md "ノード上").
// type: the class of the node, sourceType: the type linked to its `source` input, sourceLinked: whether its slot has a
// link.
export function previewUsesNewWindow({ type, sourceType, sourceLinked = true }) {
  if (type !== "PanoramaPreviewNode") return false;
  if (sourceLinked === false) return true;
  return sourceType === "IMAGE" || sourceType === "VIDEO";
}

// Preloading the new editor (docs/studio-ui.md "読み込み中と空の画面"): returns check(), which asks `whenIdle` to run
// preload() once (later checks do nothing). main.js calls it after ComfyUI has set up. whenIdle(callback): runs
// callback when the page is idle.
export function createStudioPreloader({ preload, whenIdle }) {
  let asked = false;
  return () => {
    if (asked) return;
    asked = true;
    whenIdle(() => preload());
  };
}

// openEditor(node, type, options) for the node registration. openOld(node, type, options): the old UI's editor.
// openStudio(node): the new UI's Panorama Studio editor. openPreview(node): the new UI's Preview window
// (docs/studio-ui.md "Preview のウィンドウ"); previewTakes(node): whether it shows this node's read-only opening (the
// Panorama Preview node with what the window shows so far linked).
// The returned function carries previewWindowTakes(node): whether a read-only opening of `node` goes to the new
// window, for an entry point that shows something else when it does not (the node surface's top-right button,
// docs/preview-node.md "ノード上").
export function createEditorChooser({ openOld, openStudio, openPreview = null, previewTakes = () => false }) {
  const previewWindowTakes = (node) => !!openPreview && previewTakes(node) === true;
  const openEditor = (node, type, options = {}) => {
    if (node?.__panoStudio === true && type === "stickers") return openStudio(node);
    if (type === "stickers" && options.readOnly && previewWindowTakes(node)) return openPreview(node);
    return openOld(node, type, options);
  };
  openEditor.previewWindowTakes = previewWindowTakes;
  return openEditor;
}
