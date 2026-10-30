// The Aspect slider of the Camera card (docs/studio-ui.md "行の格子"): from landscape 16:9 at the left to portrait
// 9:16 at the right, positions spaced by log2(ratio) so 1:1 is the middle and the two sides mirror, with ticks
// at 3:2, 4:3, 1:1, 3:4, 2:3. The slider picks a preset (an end or a tick) and nothing between; ratios between
// come from the value box. Ratios are width ÷ height. The range a typed ratio may take is not here
// (CAMERA_ASPECT_MIN/MAX in pano_editor_state.js); the field gets it as props.
import { clamp01, snapPos } from "./ui_slider.js";

// The ratio at the left end of the slider; the right end is its inverse.
export const ASPECT_SLIDER_WIDE = 16 / 9;
// The ticks drawn on the slider.
export const ASPECT_TICKS = Object.freeze([3 / 2, 4 / 3, 1, 3 / 4, 2 / 3]);
// The ratios the slider lands on, left to right: the two ends and the ticks.
export const ASPECT_PRESETS = Object.freeze([ASPECT_SLIDER_WIDE, ...ASPECT_TICKS, 1 / ASPECT_SLIDER_WIDE]);
// How far from a preset a ratio still counts as that preset when stepping.
const PRESET_TOLERANCE = 1e-9;

// Ratios shown by name in the field.
const NAMED = [[16, 9], [3, 2], [4, 3], [1, 1], [3, 4], [2, 3], [9, 16]];
const NAME_TOLERANCE = 0.005;

const SPAN = 2 * Math.log2(ASPECT_SLIDER_WIDE);

export function aspectToPos(ratio) {
  if (!(ratio > 0)) return 0.5;
  return clamp01(0.5 - Math.log2(ratio) / SPAN);
}

export const ASPECT_TICK_POSITIONS = Object.freeze(ASPECT_TICKS.map(aspectToPos));
const PRESET_POSITIONS = Object.freeze([0, ...ASPECT_TICK_POSITIONS, 1]);

// The position of the preset nearest to `pos`: where a press or a drag on the slider lands.
export function snapAspectPos(pos) {
  return snapPos(clamp01(pos), PRESET_POSITIONS, Infinity);
}

// The preset next to `ratio` in direction `dir` (+1 rightward, toward portrait; -1 leftward), or null past the
// end. A free ratio steps to the nearest preset that way; one a hair off a preset counts as that preset.
export function stepAspect(ratio, dir) {
  const value = Number(ratio);
  if (!(value > 0)) return null;
  const next = dir > 0
    ? ASPECT_PRESETS.find((preset) => preset < value - PRESET_TOLERANCE)
    : [...ASPECT_PRESETS].reverse().find((preset) => preset > value + PRESET_TOLERANCE);
  return next ?? null;
}

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
