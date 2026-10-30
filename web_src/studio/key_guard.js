// Keeps the editor's key and clipboard events from ComfyUI behind it (docs/studio-ui.md "キーとクリップボードを ComfyUI
// に渡さない"). ComfyUI listens on window and document (its keybindings, the node paste and copy, Delete), so an event
// that bubbled out of the editor changed the graph behind it: Ctrl+V pasted a node.
//
// Only the propagation stops, never the default: a text field still types, copies and pastes. The guard listens on the
// bubbling side, after the editor's own parts and its listeners on the window's capture have had the event.

export const GUARDED_EVENTS = Object.freeze(["keydown", "keyup", "keypress", "copy", "cut", "paste"]);

// root: the editor's root element (the events from inside it stop there); doc: its document (the events from its body,
// where the focus falls when a focused part goes away, stop at body). Returns the function that takes the guard away.
export function guardEditorKeys(root, doc = root?.ownerDocument ?? globalThis.document) {
  const body = doc?.body ?? null;
  const fromEditor = (event) => event.stopPropagation();
  const fromPage = (event) => {
    if (event.target === body) event.stopPropagation();
  };
  for (const type of GUARDED_EVENTS) {
    root?.addEventListener(type, fromEditor, false);
    body?.addEventListener(type, fromPage, false);
  }
  return () => {
    for (const type of GUARDED_EVENTS) {
      root?.removeEventListener(type, fromEditor, false);
      body?.removeEventListener(type, fromPage, false);
    }
  };
}
