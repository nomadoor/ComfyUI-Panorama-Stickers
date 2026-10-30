import assert from "node:assert/strict";
import test from "node:test";
import {
  chooseBrush, chooseSwatch, chooseTool, clearQuestion, closeColor, createPaintTools, openColor, paintBar, setBrushSize,
  setCustomColor,
} from "../web_src/studio/paint_bar.js";
import { brushRing } from "../web_src/studio/paint.js";

// The paint tools of the new UI (web_src/studio/paint_bar.js, docs/studio-ui.md "ペイントの道具") and the brush ring
// (web_src/studio/paint.js).

test("the tools open on Cursor; Paint shows its brushes, size, colors and Clear; Mask has no colors", () => {
  const tools = createPaintTools();
  assert.equal(tools.tool, "cursor");
  assert.equal(paintBar(tools), null);
  chooseTool(tools, "paint");
  const bar = paintBar(tools);
  assert.equal(bar.name, "Paint");
  assert.deepEqual(bar.brushes.map((item) => [item.key, item.active]), [
    ["pen", true], ["brush", false], ["marker", false], ["crayon", false], ["eraser", false], ["lasso_fill", false],
  ]);
  assert.deepEqual(bar.size, { value: 20, min: 1, max: 120, disabled: false });
  assert.deepEqual(bar.colors.swatches.map((item) => [item.id, item.active]), [["green", true], ["red", false], ["blue", false], ["black", false], ["white", false]]);
  assert.equal(bar.colors.custom.active, false);
  assert.deepEqual(bar.clear, { key: "clear-paint", label: "Clear paint", disabled: false });
  assert.equal(paintBar(tools, { readOnly: true }).clear.disabled, true);
  chooseTool(tools, "mask");
  const mask = paintBar(tools);
  assert.equal(mask.colors, null);
  assert.deepEqual(mask.brushes.map((item) => item.label), ["Mask pen", "Mask eraser", "Mask lasso"]);
  assert.equal(mask.clear.key, "clear-mask");
});

test("each brush preset keeps its size; the eraser and the mask pen use the pen's; the lasso has none", () => {
  const tools = chooseTool(createPaintTools(), "paint");
  setBrushSize(tools, 55.4);
  chooseBrush(tools, "marker");
  assert.equal(paintBar(tools).size.value, 20);
  setBrushSize(tools, 300);
  assert.equal(paintBar(tools).size.value, 120);
  chooseBrush(tools, "eraser");
  assert.equal(paintBar(tools).size.value, 55);
  assert.equal(paintBar(tools).colors.enabled, false);
  chooseBrush(tools, "lasso_fill");
  assert.equal(paintBar(tools).size.disabled, true);
  // The lasso draws with the preset last chosen.
  assert.equal(tools.activePresetId, "marker");
  chooseTool(tools, "mask");
  assert.equal(paintBar(tools).size.value, 55);
});

test("the Custom color: its popover's color paints at once; closing keeps a new color among the recent ones", () => {
  const tools = chooseTool(createPaintTools(), "paint");
  openColor(tools);
  assert.equal(paintBar(tools).colors.custom.open, true);
  setCustomColor(tools, { r: 0.2, g: 0.4, b: 0.6, a: 0.5 });
  assert.deepEqual(tools.paintColor, { r: 0.2, g: 0.4, b: 0.6, a: 0.5 });
  assert.equal(paintBar(tools).colors.custom.active, true);
  closeColor(tools, true);
  assert.equal(tools.recentColors.length, 1);
  // The same color again, a dot's color, or no change: not added again.
  openColor(tools);
  closeColor(tools, true);
  openColor(tools);
  setCustomColor(tools, { r: 1, g: 0, b: 0, a: 1 });
  closeColor(tools, true);
  assert.equal(tools.recentColors.length, 1);
  // A dot closes the popover and paints its color.
  openColor(tools);
  setCustomColor(tools, { r: 0.9, g: 0.5, b: 0.1, a: 1 });
  chooseSwatch(tools, "white");
  assert.equal(tools.colorStart, null);
  assert.deepEqual(tools.paintColor, { r: 1, g: 1, b: 1, a: 1 });
  assert.equal(tools.recentColors.length, 2);
  assert.equal(paintBar(tools).colors.picker.recent.filter(Boolean).length, 2);
});

test("Clear asks with the old editor's words", () => {
  assert.deepEqual(clearQuestion("paint"), { title: "Clear Paint", body: "This will remove all paint strokes in the current node.", confirm: "Clear Paint" });
  assert.equal(clearQuestion("mask").confirm, "Clear Mask");
});

test("the brush ring is the stroke's height on the screen, none for the lasso", () => {
  const tools = chooseTool(createPaintTools(), "paint");
  // A view of 1 mrad per pixel up and down.
  const dirAt = ({ x, y }) => {
    const pitch = -(y - 100) * 0.001;
    const yaw = (x - 100) * 0.001;
    return { x: Math.sin(yaw) * Math.cos(pitch), y: Math.sin(pitch), z: Math.cos(yaw) * Math.cos(pitch) };
  };
  const ring = brushRing(tools, { x: 100, y: 100 }, dirAt);
  // Size 20: radius 10 / 2048 of the ERP's width, 2π·10/2048 rad.
  assert.ok(Math.abs(ring.radius - (2 * Math.PI * 10) / 2048 / 0.001) < 0.05);
  assert.equal(ring.fill, "rgba(0, 255, 0, 0.25)");
  chooseBrush(tools, "eraser");
  assert.equal(brushRing(tools, { x: 100, y: 100 }, dirAt).fill, null);
  chooseBrush(tools, "lasso_fill");
  assert.equal(brushRing(tools, { x: 100, y: 100 }, dirAt), null);
  chooseTool(tools, "cursor");
  assert.equal(brushRing(tools, { x: 100, y: 100 }, dirAt), null);
});
