// The regions of the new editor that the user sizes (docs/studio-ui.md "画面の区画", "Output の小窓"): the height of
// the timeline below the stage, the width of its row heads, and the size and fold of the Output window at the stage's
// top right. Each is kept per browser. The sizes' values are provisional (docs/design.md "大きさ": the timeline's and the stage's least heights
// and the Output window's least and largest sizes are not decided yet); they live here and nowhere else.

import { clamp } from "../pano_math.js";

// The timeline's height when nothing is remembered, and the least heights of the timeline and the stage.
export const TIMELINE_DEFAULT_HEIGHT = 176;
export const TIMELINE_MIN_HEIGHT = 120;
export const STAGE_MIN_HEIGHT = 240;
// The timeline folded shows its bar only.
export const TIMELINE_BAR_HEIGHT = 40;
// The width of the timeline's row heads when nothing is remembered, and its least and largest widths (docs/studio-ui.md
// "画面の区画" "タイムラインの行の頭の幅").
export const TIMELINE_HEAD_DEFAULT_WIDTH = 260;
export const TIMELINE_HEAD_MIN_WIDTH = 200;
export const TIMELINE_HEAD_MAX_WIDTH = 480;

// The Output window's width when nothing is remembered, and its least and largest widths; the picture fills the
// window, its height following the output's ratio (width / height). The line of the output's shape is
// OUTPUT_LINE_HEIGHT high (docs/design.md "Output の小窓の一行"): the folded pill, and open, laid over the picture's top.
// The least width holds the widest line (about 248px: "Frame 8192:1640  8192 × 1640" with the glyph and the fold button),
// so the open window never cuts its line and its width need not follow the mode (ADR 0051).
const OUTPUT_DEFAULT_WIDTH = 256;
export const OUTPUT_MIN_WIDTH = 256;
export const OUTPUT_MAX_WIDTH = 520;
export const OUTPUT_LINE_HEIGHT = 32;

const KEYS = Object.freeze({
  timeline: "PanoramaSuite.Studio.timelineHeight",
  timelineHead: "PanoramaSuite.Studio.timelineHeadWidth",
  output: "PanoramaSuite.Studio.outputWindow",
});

// The timeline's height for a wish of `wanted` px in an editor column of `total` px: at least TIMELINE_MIN_HEIGHT,
// and leaving the stage at least STAGE_MIN_HEIGHT (when both cannot be met, the timeline keeps its least
// height).
export function timelineHeight(wanted, total) {
  const most = Math.max(TIMELINE_MIN_HEIGHT, total - STAGE_MIN_HEIGHT);
  return Math.round(clamp(Number.isFinite(wanted) ? wanted : TIMELINE_DEFAULT_HEIGHT, TIMELINE_MIN_HEIGHT, most));
}

// The width of the timeline's row heads for a wish of `wanted` px: between its least and largest widths.
export function timelineHeadWidth(wanted) {
  return Math.round(clamp(Number.isFinite(wanted) ? wanted : TIMELINE_HEAD_DEFAULT_WIDTH, TIMELINE_HEAD_MIN_WIDTH, TIMELINE_HEAD_MAX_WIDTH));
}

// The open Output window's size for a wish of `wanted` px wide and an output of `ratio` (width / height): { width,
// height }, the picture's (it fills the window). The width is what is kept: the mode and the ratio change the height
// only (docs/studio-ui.md "Output の小窓": the line at the top does not move).
export function outputWindowSize(wanted, ratio) {
  const width = Math.round(clamp(Number.isFinite(wanted) ? wanted : OUTPUT_DEFAULT_WIDTH, OUTPUT_MIN_WIDTH, OUTPUT_MAX_WIDTH));
  const shape = ratio > 0 ? ratio : 2;
  return { width, height: Math.round(width / shape) };
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

export function loadTimelineHeadWidth(storage) {
  return timelineHeadWidth(read(storage, KEYS.timelineHead));
}

export function saveTimelineHeadWidth(storage, width) {
  write(storage, KEYS.timelineHead, timelineHeadWidth(width));
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

// The least gap (px) between the bar at the bottom center and the View group at the bottom right (docs/design.md
// "大きさ" BAR_VIEW_GAP).
export const BAR_VIEW_GAP = 8;

// Where the bar at the bottom center goes in a stage `stage` px wide (docs/studio-ui.md "下の中央のバー" "バーの置き場所"):
// centered; moved left where it would come nearer than BAR_VIEW_GAP to the View group (`view` px wide at the bottom
// right, `inset` from the edges); without its name's text (`name` px of it) where that is not enough; and scrolled inside
// itself where even that does not fit. `bar` is its width with the name. Returns { left (px from the stage's left),
// compact (no name text), maxWidth (px, or null: its own width) }.
export function barPosition({ stage, bar, name = 0, view = 0, inset = 16 }) {
  const right = stage - inset - view - BAR_VIEW_GAP;
  const fit = (width) => {
    const centered = (stage - width) / 2;
    if (centered + width <= right) return centered;
    const left = right - width;
    return left >= inset ? left : null;
  };
  const full = fit(bar);
  if (full !== null) return { left: full, compact: false, maxWidth: null };
  const compact = fit(bar - name);
  if (compact !== null) return { left: compact, compact: true, maxWidth: null };
  return { left: inset, compact: true, maxWidth: Math.max(0, right - inset) };
}
