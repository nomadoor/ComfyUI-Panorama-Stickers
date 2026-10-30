// Which keys an editor's stage takes (docs/editor-interaction.md "キーボードの移動", "受けないとき"; docs/space-and-view.md
// "直接の操作"): Space, Delete and the movement keys are the stage's while the focus is on the stage or on a button or
// slider of the editor, not in a field being typed in, and no dialog is over the editor. The old UI's editor
// (editor/keyboard.js) and the new UI's (studio/) both ask here.

// Inputs that are typed into: Space types a space there, and the stage does not take their keys.
export const TEXT_INPUT_TYPES = new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]);

// A field being typed in: a text-like input, a textarea, a select or editable text (not a slider, a checkbox or a
// button).
export function isTextField(target) {
  const tag = (target?.tagName || "").toUpperCase();
  if (tag === "INPUT") return TEXT_INPUT_TYPES.has(String(target.type || "text").toLowerCase());
  return tag === "TEXTAREA" || tag === "SELECT" || !!target?.isContentEditable;
}

// Any input of an editor's form (a field, a slider, a checkbox).
export function isFormControl(target) {
  return (target?.tagName || "").toUpperCase() === "INPUT" || isTextField(target);
}

// Whether the key event `event` is the stage's for the editor whose root element is `root`: the focus is on the
// page itself or inside the editor, not in a field being typed in, and no dialog is over it (`dialogOpen`: the
// editor's own confirm dialog; another ComfyUI dialog on top holds the focus outside the editor).
export function stageOwnsKey(event, root, { dialogOpen = false } = {}) {
  if (dialogOpen) return false;
  const target = event.composedPath()[0];
  const doc = root?.ownerDocument ?? globalThis.document;
  if (target !== doc?.body && target !== doc?.documentElement && !root?.contains(target)) return false;
  return !isTextField(target);
}
