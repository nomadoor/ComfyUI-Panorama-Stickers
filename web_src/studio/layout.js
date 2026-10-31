// The regions of the new editor that the user sizes (docs/studio-ui.md "画面の区画", "Output の小窓"): the height of
// the timeline below the stage, and the size and fold of the Output window at the stage's top right. Each is kept per
// browser. The sizes' values are provisional (docs/design.md "大きさ": the timeline's and the stage's least heights
// and the Output window's least and largest sizes are not decided yet); they live here and nowhere else.

// The timeline's height when nothing is remembered, and the least heights of the timeline and the stage.
export const TIMELINE_DEFAULT_HEIGHT = 176;
export const TIMELINE_MIN_HEIGHT = 120;
export const STAGE_MIN_HEIGHT = 240;
// The timeline folded shows its bar only.
export const TIMELINE_BAR_HEIGHT = 40;

// The Output window's width when nothing is remembered, and its least and largest widths (the picture's); the
// picture's height follows the output's ratio (width / height), and the line of the output's shape sits above it,
// OUTPUT_LINE_HEIGHT high (docs/design.md "Output の小窓の一行": the folded pill's height too).
// The least width holds the widest line (about 248px: "Frame 8192:1640  8192 × 1640" with the glyph and the fold button),
// so the open window never cuts its line and its width need not follow the mode (ADR 0051).
export const OUTPUT_DEFAULT_WIDTH = 256;
export const OUTPUT_MIN_WIDTH = 256;
export const OUTPUT_MAX_WIDTH = 520;
export const OUTPUT_LINE_HEIGHT = 32;

const KEYS = Object.freeze({
  timeline: "PanoramaSuite.Studio.timelineHeight",
  output: "PanoramaSuite.Studio.outputWindow",
});

const clamp = (value, low, high) => Math.min(high, Math.max(low, value));

// The timeline's height for a wish of `wanted` px in an editor column of `total` px: at least TIMELINE_MIN_HEIGHT,
// and leaving the stage at least STAGE_MIN_HEIGHT (when both cannot be met, the timeline keeps its least
// height).
export function timelineHeight(wanted, total) {
  const most = Math.max(TIMELINE_MIN_HEIGHT, total - STAGE_MIN_HEIGHT);
  return Math.round(clamp(Number.isFinite(wanted) ? wanted : TIMELINE_DEFAULT_HEIGHT, TIMELINE_MIN_HEIGHT, most));
}

// The open Output window's size for a wish of `wanted` px wide and an output of `ratio` (width / height): { width,
// height, picture: { width, height } }. The width is what is kept: the mode and the ratio change the height only
// (docs/studio-ui.md "Output の小窓": the line at the top does not move), which is the picture's and the line's.
export function outputWindowSize(wanted, ratio) {
  const width = Math.round(clamp(Number.isFinite(wanted) ? wanted : OUTPUT_DEFAULT_WIDTH, OUTPUT_MIN_WIDTH, OUTPUT_MAX_WIDTH));
  const shape = ratio > 0 ? ratio : 2;
  const picture = { width, height: Math.round(width / shape) };
  return { width, height: picture.height + OUTPUT_LINE_HEIGHT, picture };
}

// --- Kept per browser. Storage may be missing or refuse (a private window); then nothing is kept.

function read(storage, key) {
  try {
    const text = storage?.getItem(key);
    return text ? JSON.parse(text) : null;
  } catch {
    return null;
  }
}

function write(storage, key, value) {
  try {
    storage?.setItem(key, JSON.stringify(value));
  } catch {
    // Not kept.
  }
}

export function loadTimelineHeight(storage) {
  const value = read(storage, KEYS.timeline);
  return Number.isFinite(value) ? value : TIMELINE_DEFAULT_HEIGHT;
}

export function saveTimelineHeight(storage, height) {
  write(storage, KEYS.timeline, Math.round(height));
}

// { width, collapsed } of the Output window.
export function loadOutputWindow(storage) {
  const value = read(storage, KEYS.output);
  return {
    width: Number.isFinite(value?.width) ? value.width : OUTPUT_DEFAULT_WIDTH,
    // Folded unless the viewer opened it before (owner, 2026-10-30: no need to open it by default).
    collapsed: value ? value.collapsed === true : true,
  };
}

export function saveOutputWindow(storage, { width, collapsed }) {
  write(storage, KEYS.output, { width: Math.round(width), collapsed: !!collapsed });
}

// How the Output window shows (docs/studio-ui.md "Output の小窓"): `collapsed` is what the viewer chose and the browser
// keeps; `suspended` is the Camera tab, which folds it (its line still shown as in the 3D tab), makes its fold button
// inert and stops its picture, without touching `collapsed`, so leaving the tab brings back the viewer's choice.
// { folded, open (its picture is drawn), foldable }.
export function outputWindowView({ collapsed, suspended = false }) {
  return { folded: !!collapsed || !!suspended, open: !collapsed && !suspended, foldable: !suspended };
}
