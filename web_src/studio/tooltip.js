// The new UI's tooltip (docs/studio-ui.md "ツールチップ"): where the bubble goes beside a control, which side a control's
// group prefers, and the shortcut hint cut from the end of the text. Pure; the layer that shows it is
// components/studio/StudioTooltip.vue.

// Hover this long before the bubble shows (ms).
export const TIP_DELAY = 400;
// Within this long after a bubble hid, the next control's shows at once (ms).
export const TIP_SKIP = 300;
// The gap between the control and the bubble (px).
export const TIP_GAP = 8;
// The bubble stays this far inside the editor's frame (px).
export const TIP_EDGE = 8;

const OPPOSITE = { top: "bottom", bottom: "top", left: "right", right: "left" };

// The side each group of controls prefers: the first ancestor (or the control itself) matching a selector wins.
export const TIP_SIDES = [
  [".pano-studio-at-rail", "right"],
  [".pano-studio-at-edge-left", "right"],
  [".pano-studio-at-nav", "left"],
  [".pano-studio-at-edge-right", "left"],
  [".pano-studio-at-bar", "top"],
  [".pano-studio-at-buttons", "top"],
  [".pano-studio-at-edge-bottom", "top"],
  [".pano-studio-at-tabs", "bottom"],
  [".pano-studio-at-output", "bottom"],
  [".pano-studio-at-notice", "bottom"],
];

// The side the control's bubble goes first: its own `data-tip-side`, else its group's, else above.
export function tipSide(element) {
  const own = element?.getAttribute?.("data-tip-side");
  if (own && OPPOSITE[own]) return own;
  for (const [selector, side] of TIP_SIDES) {
    if (element?.closest?.(selector)) return side;
  }
  return "top";
}

// Where the bubble of `size` ({ width, height }) goes beside `anchor` (the control's rect: { left, top, width, height }),
// inside `bounds` (the editor's rect) less `edge`, `gap` away from the control. The preferred `side` first; the
// opposite one when it would leave the bounds; when both would, the side that leaves them less. Along the side it is
// centered on the control and pushed back inside the bounds. Returns { left, top, side } in the rects' coordinates.
export function placeTip({ anchor, size, bounds, side = "top", gap = TIP_GAP, edge = TIP_EDGE }) {
  const inner = {
    left: bounds.left + edge,
    top: bounds.top + edge,
    right: bounds.left + bounds.width - edge,
    bottom: bounds.top + bounds.height - edge,
  };
  const room = {
    top: anchor.top - gap - inner.top,
    bottom: inner.bottom - (anchor.top + anchor.height + gap),
    left: anchor.left - gap - inner.left,
    right: inner.right - (anchor.left + anchor.width + gap),
  };
  const need = (s) => (s === "top" || s === "bottom" ? size.height : size.width);
  const first = OPPOSITE[side] ? side : "top";
  const second = OPPOSITE[first];
  let chosen = first;
  if (room[first] < need(first)) {
    if (room[second] >= need(second)) chosen = second;
    else chosen = room[second] - need(second) > room[first] - need(first) ? second : first;
  }
  const clamp = (value, low, high) => Math.max(low, Math.min(value, Math.max(low, high)));
  let left;
  let top;
  if (chosen === "top" || chosen === "bottom") {
    left = clamp(anchor.left + (anchor.width - size.width) / 2, inner.left, inner.right - size.width);
    top = chosen === "top" ? anchor.top - gap - size.height : anchor.top + anchor.height + gap;
  } else {
    top = clamp(anchor.top + (anchor.height - size.height) / 2, inner.top, inner.bottom - size.height);
    left = chosen === "left" ? anchor.left - gap - size.width : anchor.left + anchor.width + gap;
  }
  return { left: Math.round(left), top: Math.round(top), side: chosen };
}

// The key names a shortcut hint may hold (besides a single character).
const KEY_NAMES = new Set([
  "Ctrl", "Shift", "Alt", "Cmd", "Meta", "Option", "Space", "Del", "Delete", "Esc", "Escape", "Enter", "Return", "Tab",
  "Backspace", "Home", "End", "PageUp", "PageDown", "Up", "Down", "Left", "Right",
  ...Array.from({ length: 12 }, (_, i) => `F${i + 1}`),
]);
const isKey = (token) => token.length === 1 ? /\S/.test(token) : KEY_NAMES.has(token);

// The text and the shortcut of a tip: "Move (1)" → { text: "Move", keys: "1" }. Only a trailing "(…)" whose every
// "+"-joined part is one character or a key name is a shortcut; other text stays as it is with keys "".
export function splitTipKeys(tip) {
  const text = String(tip ?? "").trim();
  const match = /^(.*\S)\s*\(([^()]+)\)$/.exec(text);
  if (!match) return { text, keys: "" };
  const keys = match[2].trim();
  const parts = keys.split("+").map((part) => part.trim());
  if (!parts.length || !parts.every((part) => part && isKey(part))) return { text, keys: "" };
  return { text: match[1], keys: parts.join("+") };
}
