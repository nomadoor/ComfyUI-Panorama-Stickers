// The value math of a dragged number field in the new UI (docs/studio-ui.md "欄"): the field itself is dragged
// left and right, Shift makes the movement 1/10, a press that does not move is a click to type. Pure functions;
// components/studio/StudioNumberField.vue applies them to pointer events. Also what cancels the drag of a field,
// a slider, an Easing handle or an edge ruler besides Escape (watchDragCancel).

// How far (px) the pointer moves before a press on a field becomes a drag instead of a click to type.
const DRAG_THRESHOLD_PX = 3;
// The fraction of the movement that Shift keeps.
export const FINE_FACTOR = 0.1;
// A single pointer movement this large (px) is a jump of the browser (the first event after pointer lock), not a drag.
export const DRAG_JUMP_PX = 500;

export function clampValue(value, min = -Infinity, max = Infinity) {
  return Math.min(max, Math.max(min, value));
}

// The value rounded to `precision` decimals, without "-0".
export function roundValue(value, precision = 2) {
  const scale = 10 ** Math.max(0, Math.round(precision));
  const rounded = Math.round(value * scale) / scale;
  return Object.is(rounded, -0) ? 0 : rounded;
}

// Whether a press has moved far enough to be a drag.
export function passedDragThreshold(dx, dy, threshold = DRAG_THRESHOLD_PX) {
  return Math.hypot(dx, dy) >= threshold;
}

// One pointer movement of a drag. `raw` is the unrounded value the drag carries (so many small fine movements add
// up); it stays inside [min, max] so the value answers at once when the drag turns back at a limit.
export function dragStep(raw, movementX, { step = 0.01, fine = false, min = -Infinity, max = Infinity } = {}) {
  if (!Number.isFinite(movementX) || Math.abs(movementX) >= DRAG_JUMP_PX) return raw;
  return clampValue(raw + movementX * step * (fine ? FINE_FACTOR : 1), min, max);
}

// The value a drag shows and sends for its unrounded value.
export function dragValue(raw, { precision = 2, min = -Infinity, max = Infinity } = {}) {
  return clampValue(roundValue(raw, precision), min, max);
}

// The number typed into a field ("1.5", "-2", "60°", "72 %"), or null when it holds none.
export function parseNumber(text) {
  const match = String(text ?? "").trim().replace(/,/g, ".").match(/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i);
  if (!match) return null;
  const value = Number(match[0]);
  return Number.isFinite(value) ? value : null;
}

// The text a field shows for its value.
export function formatNumber(value, precision = 2) {
  return roundValue(Number(value) || 0, precision).toFixed(Math.max(0, Math.round(precision)));
}

// Calls cancel() when the drag of `pointerId` is cancelled besides Escape (docs/editor-interaction.md "ポインタの取り消しと
// フォーカスの喪失"): its pointercancel, the window's blur, and its lost capture (`element` lost it before the pointer went
// up). lostCapture: false for a drag that gives its capture up on purpose (a value box's pointer lock). Returns stop():
// call it when the drag ends, before letting the capture go.
export function watchDragCancel({ element, pointerId, cancel, win = globalThis.window, lostCapture = true }) {
  const onPointer = (event) => {
    if (event.pointerId === pointerId) cancel();
  };
  const onBlur = () => cancel();
  win?.addEventListener("pointercancel", onPointer, true);
  win?.addEventListener("blur", onBlur);
  if (lostCapture) element?.addEventListener("lostpointercapture", onPointer);
  return () => {
    win?.removeEventListener("pointercancel", onPointer, true);
    win?.removeEventListener("blur", onBlur);
    if (lostCapture) element?.removeEventListener("lostpointercapture", onPointer);
  };
}
