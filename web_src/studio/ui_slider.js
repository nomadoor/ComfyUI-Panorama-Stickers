// The position math of the new UI's sliders (docs/studio-ui.md "行の格子"): a value maps to a position 0..1 on
// the line, and a position near a tick snaps to it. Pure functions; components/studio/StudioSlider.vue uses them.

export function clamp01(value) {
  return Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
}

// The position of `value` on a linear slider from `min` to `max`.
export function valueToPos(value, min, max) {
  return max === min ? 0 : clamp01((value - min) / (max - min));
}

export function posToValue(pos, min, max) {
  return min + clamp01(pos) * (max - min);
}

// The position under a pointer at clientX on a line whose box is `rect` ({ left, width }).
export function pointerPos(clientX, rect) {
  return rect.width > 0 ? clamp01((clientX - rect.left) / rect.width) : 0;
}

// `pos` moved onto the nearest tick when one lies within `snap` (a fraction of the line), else `pos` as it is.
export function snapPos(pos, ticks = [], snap = 0) {
  let best = pos;
  let bestGap = snap;
  for (const tick of ticks) {
    const gap = Math.abs(tick - pos);
    if (gap <= bestGap) {
      best = tick;
      bestGap = gap;
    }
  }
  return best;
}
