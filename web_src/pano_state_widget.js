// Writing a node's `state_json` widget from the editors and the node surface: the value, the widget's callback, and a
// word to ComfyUI that the workflow changed. ComfyUI takes the workflow it keeps (and restores after a reload or a
// restart) on a window `mouseup` or `keyup`; a write that comes after one (the editor's close button writes on its
// `click`) would otherwise stay out of it until the next press. main.js gives the word (setWorkflowChangeNotifier);
// without one (tests, a page without ComfyUI) only the widget is written.

let notifyWorkflowChanged = () => {};

// `notify` is called after each write: ComfyUI's active workflow takes the graph as it is now.
export function setWorkflowChangeNotifier(notify) {
  notifyWorkflowChanged = typeof notify === "function" ? notify : () => {};
}

// Writes `text` to the state widget `widget` and tells ComfyUI the workflow changed.
export function writeStateWidget(widget, text) {
  widget.value = text;
  widget.callback?.(text);
  try {
    notifyWorkflowChanged();
  } catch (error) {
    console.warn("[PanoramaSuite] could not note the workflow change", error);
  }
}
