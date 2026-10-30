// The Aspect slider of the Camera card (docs/studio-ui.md "行の格子"): from landscape 16:9 at the left to portrait
// 9:16 at the right, positions spaced by log2(ratio) so 1:1 is the middle and the two sides mirror, with ticks
// at 3:2, 4:3, 1:1, 3:4, 2:3 that the knob snaps to. Ratios are width ÷ height. The range a typed ratio may take
// is not here (CAMERA_ASPECT_MIN/MAX in pano_editor_state.js); the field gets it as props.
import { clamp01 } from "./ui_slider.js";

// The ratio at the left end of the slider; the right end is its inverse.
export const ASPECT_SLIDER_WIDE = 16 / 9;
// The ticks the knob snaps to.
export const ASPECT_TICKS = Object.freeze([3 / 2, 4 / 3, 1, 3 / 4, 2 / 3]);
// How near a tick (a fraction of the slider) the knob snaps to it.
export const ASPECT_SNAP = 0.03;

// Ratios shown by name in the field.
const NAMED = [[16, 9], [3, 2], [4, 3], [1, 1], [3, 4], [2, 3], [9, 16]];
const NAME_TOLERANCE = 0.005;

const SPAN = 2 * Math.log2(ASPECT_SLIDER_WIDE);

export function aspectToPos(ratio) {
  if (!(ratio > 0)) return 0.5;
  return clamp01(0.5 - Math.log2(ratio) / SPAN);
}

export const ASPECT_TICK_POSITIONS = Object.freeze(ASPECT_TICKS.map(aspectToPos));

// The ratio at a position; a tick or an end gives its exact ratio (4 / 3, not 1.3333333333333335).
export function posToAspect(pos) {
  const p = clamp01(pos);
  const tick = ASPECT_TICK_POSITIONS.indexOf(p);
  if (tick >= 0) return ASPECT_TICKS[tick];
  if (p === 0) return ASPECT_SLIDER_WIDE;
  if (p === 1) return 1 / ASPECT_SLIDER_WIDE;
  return 2 ** ((0.5 - p) * SPAN);
}

// "16:9" for a named ratio, else the ratio with two decimals.
export function aspectLabel(ratio) {
  const value = Number(ratio);
  for (const [w, h] of NAMED) {
    if (Math.abs(value - w / h) < NAME_TOLERANCE) return `${w}:${h}`;
  }
  return Number.isFinite(value) ? value.toFixed(2) : "";
}

// The ratio typed as "16:9", "16/9", "16x9" or "1.78", or null.
export function parseAspect(text) {
  const source = String(text ?? "").trim().replace(/,/g, ".");
  const pair = source.match(/^(\d+\.?\d*|\.\d+)\s*[:/x×]\s*(\d+\.?\d*|\.\d+)$/i);
  if (pair) {
    const ratio = Number(pair[1]) / Number(pair[2]);
    return Number.isFinite(ratio) && ratio > 0 ? ratio : null;
  }
  if (!/^(\d+\.?\d*|\.\d+)$/.test(source)) return null;
  const ratio = Number(source);
  return ratio > 0 ? ratio : null;
}
