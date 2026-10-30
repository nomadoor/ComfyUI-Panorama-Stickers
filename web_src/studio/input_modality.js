// Whether the viewer is working the editor with the pointer or the keyboard (docs/design.md "フォーカス"): the focus
// look (`:focus-visible`, web/pano_studio.css) shows only for the keyboard, so a pressed button shows nothing, nor
// one the focus comes back to from a file picker or a dialog (Chromium counts that focus as visible).

// The keys that move the focus or work the focused part. Other keys (Ctrl+Z and the like) leave the mode as it is.
const KEYBOARD_KEYS = new Set(["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown", "Enter", " "]);

// The mode an event puts the editor in: "pointer", "keyboard", or null to keep the one it has.
export function inputModeOf(event) {
  if (event.type === "pointerdown") return "pointer";
  if (event.type === "keydown" && KEYBOARD_KEYS.has(event.key)) return "keyboard";
  return null;
}

// Keeps `root.dataset.input` ("pointer" | "keyboard") up to date, from the events that reach it (captured, so a part
// that stops them still counts). Returns the function that stops it.
export function trackInputMode(root) {
  const update = (event) => {
    const mode = inputModeOf(event);
    if (mode && root.dataset.input !== mode) root.dataset.input = mode;
  };
  root.addEventListener("pointerdown", update, true);
  root.addEventListener("keydown", update, true);
  return () => {
    root.removeEventListener("pointerdown", update, true);
    root.removeEventListener("keydown", update, true);
  };
}
