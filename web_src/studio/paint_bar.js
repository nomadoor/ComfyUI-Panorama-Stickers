// The paint tools of the new UI (docs/studio-ui.md "左の列", "ペイントの道具"): which tool of the left column is chosen
// (Cursor, Paint, Mask), the brush of each of Paint and Mask, the size per brush preset, the paint color and the
// Custom color with its recent colors, and what the bar at the bottom center shows for them. The tools are the old
// editor's (their colors, presets, sizes and the records they make are the lower paint strokes', pano_paint_strokes.js);
// they live while the editor is open and are not written to the state. Pure: studio/editor.js holds one and
// components/studio/StudioPaintBar.vue draws paintBar().
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID } from "../pano_brush_presets.js";
import { ICON } from "../icons.js";
import {
  PAINT_COLOR_SWATCHES, brushPresetIdForTool, cloneColor, colorToCss, colorsApproximatelyEqual, isPresetPaintColor,
} from "../pano_paint_strokes.js";

// The brushes of each tool, in the bar's order (the old editor's tools).
export const PAINT_BRUSHES = Object.freeze([
  Object.freeze({ key: "pen", label: "Pen", icon: ICON.pencil_tool }),
  Object.freeze({ key: "brush", label: "Soft Brush", icon: ICON.spray_can_tool }),
  Object.freeze({ key: "marker", label: "Marker", icon: ICON.highlighter_tool }),
  Object.freeze({ key: "crayon", label: "Pastel", icon: ICON.paintbrush_vertical_tool }),
  Object.freeze({ key: "eraser", label: "Eraser", icon: ICON.eraser_tool }),
  Object.freeze({ key: "lasso_fill", label: "Lasso", icon: ICON.lasso_tool }),
]);
export const MASK_BRUSHES = Object.freeze([
  Object.freeze({ key: "pen", label: "Mask pen", icon: ICON.pencil_tool }),
  Object.freeze({ key: "eraser", label: "Mask eraser", icon: ICON.eraser_tool }),
  Object.freeze({ key: "lasso_fill", label: "Mask lasso", icon: ICON.lasso_tool }),
]);

// The size slider's range, and how many recent Custom colors are kept.
export const BRUSH_SIZE_MIN = 1;
export const BRUSH_SIZE_MAX = 120;
export const RECENT_COLORS = 8;

// The tools as the editor opens: Cursor; Pen for Paint and for Mask; size 20 for every preset; Green.
export function createPaintTools() {
  return {
    tool: "cursor",
    paintBrush: "pen",
    maskBrush: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activePresetId: DEFAULT_BRUSH_PRESET_ID,
    paintColor: { r: 0, g: 1, b: 0, a: 1 },
    customColor: { r: 0, g: 1, b: 0, a: 1 },
    recentColors: [],
    // The Custom color as its popover opened (null while it is closed).
    colorStart: null,
  };
}

// Whether a painting tool (Paint or Mask) is chosen.
export const painting = (tools) => tools.tool === "paint" || tools.tool === "mask";

// The layer the chosen tool draws on ("paint" or "mask"), and its brush.
export const toolLayer = (tools) => (tools.tool === "mask" ? "mask" : "paint");
export const toolBrush = (tools) => (tools.tool === "mask" ? tools.maskBrush : tools.paintBrush);

// What a stroke's record takes of the tools (pano_paint_strokes.js freehandStrokeRecord's `brush`).
export function brushOf(tools) {
  return { brushSizes: tools.brushSizes, activePresetId: tools.activePresetId, paintColor: tools.paintColor, viewMode: "pano" };
}

// The preset whose size the slider shows and sets for the chosen brush.
export const sizePreset = (tools) => brushPresetIdForTool(toolBrush(tools), tools.activePresetId);

// --- Changes (each returns the tools changed in place; the caller syncs its view).

// Chooses Cursor, Paint or Mask. A painting tool's popover closes with it.
export function chooseTool(tools, tool) {
  if (tool !== "cursor" && tool !== "paint" && tool !== "mask") return tools;
  if (tool !== tools.tool) closeColor(tools);
  tools.tool = tool;
  return tools;
}

// Chooses a brush of the chosen tool's layer (a brush preset becomes the one the lasso draws with, as the old editor).
export function chooseBrush(tools, key) {
  if (tools.tool === "mask") {
    if (MASK_BRUSHES.some((item) => item.key === key)) tools.maskBrush = key;
    return tools;
  }
  if (!PAINT_BRUSHES.some((item) => item.key === key)) return tools;
  tools.paintBrush = key;
  if (BRUSH_PRESETS[key]) tools.activePresetId = key;
  if (key === "eraser") closeColor(tools);
  return tools;
}

export function setBrushSize(tools, value) {
  const size = Math.max(BRUSH_SIZE_MIN, Math.min(BRUSH_SIZE_MAX, Math.round(Number(value) || BRUSH_SIZE_MIN)));
  tools.brushSizes = { ...tools.brushSizes, [sizePreset(tools)]: size };
  return tools;
}

// A color dot: the paint color becomes it, and the popover closes (keeping its color among the recent ones).
export function chooseSwatch(tools, id) {
  const swatch = PAINT_COLOR_SWATCHES.find((item) => item.id === id);
  if (!swatch) return tools;
  tools.paintColor = cloneColor(swatch.color);
  closeColor(tools, true);
  return tools;
}

export function openColor(tools) {
  if (!tools.colorStart) tools.colorStart = cloneColor(tools.customColor);
  return tools;
}

// Closes the Custom color's popover. With `keep`, a Custom color other than the one it opened with and than every dot
// goes first among the recent colors (the same color once).
export function closeColor(tools, keep = false) {
  const start = tools.colorStart;
  if (!start) return tools;
  tools.colorStart = null;
  if (!keep || colorsApproximatelyEqual(start, tools.customColor) || isPresetPaintColor(tools.customColor)) return tools;
  tools.recentColors = [
    cloneColor(tools.customColor),
    ...tools.recentColors.filter((item) => !colorsApproximatelyEqual(item, tools.customColor)),
  ].slice(0, RECENT_COLORS);
  return tools;
}

// The popover's color (its field, its hue, its Opacity, a recent color): it is the paint color at once.
export function setCustomColor(tools, color) {
  tools.customColor = cloneColor(color);
  tools.paintColor = cloneColor(color);
  return tools;
}

// --- The bar.

// The bar at the bottom center for the chosen painting tool (null for Cursor): { kind, icon, name, brushes: [{ key,
// icon, label, active }], size: { value, min, max, disabled }, colors: null (Mask) or { enabled, swatches: [{ id,
// label, css, active }], custom: { css, active, open }, picker: { color, recent: [css|null] } }, clear: { key, label } }.
// `readOnly` disables the edits (Clear).
export function paintBar(tools, { readOnly = false } = {}) {
  if (!painting(tools)) return null;
  const mask = tools.tool === "mask";
  const brush = toolBrush(tools);
  const brushes = (mask ? MASK_BRUSHES : PAINT_BRUSHES).map((item) => ({ ...item, active: item.key === brush }));
  const size = { value: tools.brushSizes[sizePreset(tools)] ?? 10, min: BRUSH_SIZE_MIN, max: BRUSH_SIZE_MAX, disabled: brush === "lasso_fill" };
  const matched = PAINT_COLOR_SWATCHES.find((swatch) => colorsApproximatelyEqual(tools.paintColor, swatch.color))?.id ?? "";
  const colors = mask ? null : {
    enabled: tools.paintBrush !== "eraser",
    swatches: PAINT_COLOR_SWATCHES.map((swatch) => ({ id: swatch.id, label: swatch.label, css: colorToCss(swatch.color, 1), active: swatch.id === matched })),
    custom: { css: colorToCss(tools.customColor, 1), active: !matched, open: !!tools.colorStart },
    picker: {
      color: cloneColor(tools.customColor),
      recent: Array.from({ length: RECENT_COLORS }, (_, index) => (tools.recentColors[index] ? colorToCss(tools.recentColors[index], 1) : null)),
    },
  };
  return {
    kind: tools.tool,
    icon: mask ? ICON.circle_dashed_tool : ICON.palette_tool,
    name: mask ? "Mask" : "Paint",
    brushes,
    size,
    colors,
    clear: { key: mask ? "clear-mask" : "clear-paint", label: mask ? "Clear mask" : "Clear paint", disabled: readOnly },
  };
}

// The confirmation Clear asks (the old editor's words): { title, body, confirm }.
export function clearQuestion(layerKind) {
  const label = layerKind === "mask" ? "Mask" : "Paint";
  return { title: `Clear ${label}`, body: `This will remove all ${layerKind === "mask" ? "mask" : "paint"} strokes in the current node.`, confirm: `Clear ${label}` };
}
