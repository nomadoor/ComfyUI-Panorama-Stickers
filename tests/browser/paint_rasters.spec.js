import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { expect, test } from "@playwright/test";

// The paint's raster objects and a stroke group as the four places that show paint on the Sky draw them
// (docs/editor-architecture.md "Paint layers"), on tests/browser/pages/paint_rasters.html in a real browser engine.
// Each place's ERP canvases are hashed. The hashes depend on the browser engine and the drawing path, so they are
// compared with tests/fixtures/paint_rasters_golden.json only on the Chromium and renderer it was taken with
// (UPDATE_GOLDEN=1 takes it again). PAINT_RASTERS_OUT=<file> writes this run's hashes, so two runs (before and after
// a change) are compared exactly; PAINT_RASTERS_SHOTS=<dir> keeps the stage's photograph at 1920x1080.

const GOLDEN = new URL("../fixtures/paint_rasters_golden.json", import.meta.url);

test("each place draws the paint's raster objects and stroke group as it did", async ({ page }) => {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash"));
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/tests/browser/pages/paint_rasters.html");
  await page.waitForFunction(() => window.__rasters?.ready, null, { timeout: 45_000 });
  const report = await page.evaluate(() => window.__rasters);
  expect(report.error).toBeNull();
  console.log(`renderer: ${report.renderer}`);
  const chromium = /Chrome\/([\d.]+)/.exec(report.userAgent)?.[1] ?? "unknown";

  // Every place has its rasters (the mask raster is not a paint layer; the old editor's group comes from its engine,
  // which this page does not give it).
  const ids = (place) => Object.keys(report.hashes[place]).sort();
  expect(ids("studio")).toEqual(["paint_group:g1", "raster:front", "raster:seam", "raster:thin"]);
  expect(ids("editor2048")).toEqual(["raster:front", "raster:seam", "raster:thin"]);
  expect(ids("surface2048")).toEqual(["paint_group:g1", "raster:front", "raster:seam", "raster:thin"]);
  expect(ids("upstream2048")).toEqual(["paint_group:g1", "raster:front", "raster:seam", "raster:thin"]);

  const run = { chromium, renderer: report.renderer, hashes: report.hashes };
  if (process.env.PAINT_RASTERS_OUT) writeFileSync(process.env.PAINT_RASTERS_OUT, `${JSON.stringify(run, null, 1)}\n`);
  if (process.env.UPDATE_GOLDEN === "1") writeFileSync(GOLDEN, `${JSON.stringify(run, null, 1)}\n`);
  const golden = JSON.parse(readFileSync(GOLDEN, "utf8"));
  if (golden.chromium === chromium && golden.renderer === report.renderer) {
    expect(report.hashes).toEqual(golden.hashes);
  } else {
    console.log(`paint_rasters: golden taken on Chromium ${golden.chromium} / ${golden.renderer}; this run is ${chromium} / ${report.renderer}, not compared`);
  }

  // The stage of the new editor with the same painting.
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  await page.waitForTimeout(600);
  const shots = process.env.PAINT_RASTERS_SHOTS;
  if (shots) {
    mkdirSync(shots, { recursive: true });
    await page.screenshot({ path: path.join(shots, "studio_stage_1920x1080.png") });
  }
  expect(problems).toEqual([]);
});
