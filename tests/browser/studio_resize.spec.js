import { expect, test } from "@playwright/test";

// The stage follows a change of its size in the same frame (docs/timeline-ui.md: the timeline's height changes and
// "ビューは同じフレームのうちに新しい大きさで描き直す"), on tests/browser/pages/studio_camera_wired.html, in a real
// browser engine. The border above the timeline is dragged step by step; a ResizeObserver made after the editor's
// reads, at each size change, what that frame will paint: the stage's canvas (not cleared, its buffer at the new
// size), the overlay canvas (at the new size), and in the Camera tab the picture laid out for the frame box's new size
// (Frame mode) or the live ERP canvas at the box's new size (Panorama mode). The first record is the probe's own
// observation of the settled stage.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, testInfo, mode) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/studio_camera_wired.html?aspect=16:9&mode=${mode}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  await page.waitForTimeout(400);
  const renderer = await page.evaluate(() => window.__studio.rendererOf());
  testInfo.annotations.push({ type: "renderer", description: String(renderer) });
  console.log(`renderer: ${renderer}`);
  return problems;
}

// Installs the probe: a ResizeObserver on the stage canvas, made after the editor's, so its callback runs after the
// editor's (and after the Camera frame's and their microtasks) in the frame that paints the new size.
function installProbe(page) {
  return page.evaluate(async () => {
    const { liveErpSize } = await import("/web_src/studio/erp_preview.js");
    const canvas = document.querySelector("[data-stage-canvas]");
    const overlay = document.querySelector("[data-stage-overlay]");
    const probe = document.createElement("canvas");
    const g = probe.getContext("2d", { willReadFrequently: true });
    // The device pixel of the stage canvas at (x, y) CSS px of the stage.
    const at = (x, y) => {
      probe.width = 1;
      probe.height = 1;
      g.clearRect(0, 0, 1, 1);
      const sx = canvas.width / canvas.getBoundingClientRect().width;
      const sy = canvas.height / canvas.getBoundingClientRect().height;
      g.drawImage(canvas, Math.round(x * sx), Math.round(y * sy), 1, 1, 0, 0, 1, 1);
      return Array.from(g.getImageData(0, 0, 1, 1).data);
    };
    const records = (window.__resizeProbe = []);
    const observer = new ResizeObserver(() => {
      const box = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const record = { css: [box.width, box.height], buffer: [canvas.width, canvas.height], overlay: [overlay.width, overlay.height], overlayWanted: [Math.round(box.width * dpr), Math.round(box.height * dpr)] };
      // The buffer keeps the canvas's shape: a buffer of the old size would show stretched.
      record.bufferShape = Math.abs(canvas.width / canvas.height - box.width / box.height);
      // A cleared WebGL buffer reads as transparent.
      record.center = at(box.width / 2, box.height / 2);
      const frame = document.querySelector("[data-frame-box]");
      const erp = document.querySelector("[data-erp]");
      if (frame && !erp) {
        const r = frame.getBoundingClientRect();
        // Where the red plane shows, in the box's widths from its center: the box keeps the Camera's horizontal angle,
        // so a picture drawn for the box's old size puts it elsewhere.
        const red = window.__studio.stageCentroid([255, 0, 0]);
        record.frame = { box: [r.width, r.height], red: red ? [(red.x - (r.left - box.left + r.width / 2)) / r.width, (red.y - (r.top - box.top + r.height / 2)) / r.width] : null };
      }
      if (erp) {
        const r = erp.getBoundingClientRect();
        const wanted = liveErpSize(r.width, r.height, dpr, 360);
        record.erp = { buffer: [erp.width, erp.height], wanted: [wanted.width, wanted.height] };
      }
      records.push(record);
    });
    observer.observe(canvas);
  });
}

// Drags the border above the timeline up and back down, a frame or two at each step.
async function dragSplitter(page) {
  const box = await page.locator('[data-region="splitter"]').boundingBox();
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;
  await page.mouse.move(x, y);
  await page.mouse.down();
  const frames = () => page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  for (const dy of [-24, -48, -72, -96, -120, -96, -72, -48, -24, 0]) {
    await page.mouse.move(x, y + dy);
    await frames();
  }
  await page.mouse.up();
  await frames();
}

for (const tab of ["3d", "frame", "panorama"]) {
  test(`dragging the timeline's border redraws the stage at its new size in the same frame (${tab})`, async ({ page }, testInfo) => {
    const problems = await open(page, testInfo, tab === "panorama" ? "panorama" : "frame");
    if (tab !== "3d") {
      await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
      await expect(page.locator("[data-frame-box]")).toHaveCount(1);
      if (tab === "panorama") await page.waitForFunction(() => window.__studio.stage().liveErp()?.counts.faces > 0);
      await page.waitForTimeout(400);
    }
    await installProbe(page);
    await dragSplitter(page);
    const records = await page.evaluate(() => window.__resizeProbe);
    // The drag changed the stage's size at most steps.
    expect(records.length).toBeGreaterThanOrEqual(8);
    for (const record of records) {
      const label = JSON.stringify(record);
      // Not cleared, and drawn at the new size.
      expect(record.center[3], label).toBe(255);
      expect(record.bufferShape, label).toBeLessThan(0.01);
      expect(record.overlay, label).toEqual(record.overlayWanted);
      if (record.frame) {
        expect(record.frame.red, label).not.toBeNull();
        expect(Math.abs(record.frame.red[0] - records[0].frame.red[0]), label).toBeLessThan(0.006);
        expect(Math.abs(record.frame.red[1] - records[0].frame.red[1]), label).toBeLessThan(0.006);
      }
      if (record.erp) expect(record.erp.buffer, label).toEqual(record.erp.wanted);
    }
    // The frame box changed size with the stage.
    if (tab === "frame") expect(new Set(records.map((record) => record.frame?.box.join("x"))).size).toBeGreaterThanOrEqual(2);
    if (tab === "panorama") expect(new Set(records.map((record) => record.erp?.wanted.join("x"))).size).toBeGreaterThanOrEqual(2);
    expect(problems).toEqual([]);
  });
}

// The Output window resized by its corner, in Panorama mode (its ERP canvas is drawn at its size, in the same frame).
test("resizing the Output window draws its live ERP at the new size in the same frame", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo, "panorama");
  await page.locator('[data-action="output-fold"]').click();
  await expect.poll(() => page.evaluate(() => document.querySelector('[data-output-picture="erp"]')?.width ?? 0), { timeout: 10_000 }).toBeGreaterThan(1);
  await page.waitForTimeout(400);
  await page.evaluate(async () => {
    const { liveErpSize } = await import("/web_src/studio/erp_preview.js");
    const erp = document.querySelector('[data-output-picture="erp"]');
    const records = (window.__resizeProbe = []);
    new ResizeObserver(() => {
      const wanted = liveErpSize(erp.clientWidth, erp.clientHeight, window.devicePixelRatio || 1, 360);
      records.push({ css: [erp.clientWidth, erp.clientHeight], buffer: [erp.width, erp.height], wanted: [wanted.width, wanted.height] });
    }).observe(erp);
  });
  const grip = await page.locator('[data-action="output-resize"]').boundingBox();
  const x = grip.x + grip.width / 2;
  const y = grip.y + grip.height / 2;
  await page.mouse.move(x, y);
  await page.mouse.down();
  for (const dx of [-30, -60, -90, -120, -90, -60, -30]) {
    await page.mouse.move(x + dx, y);
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  }
  await page.mouse.up();
  const records = await page.evaluate(() => window.__resizeProbe);
  expect(new Set(records.map((record) => record.wanted.join("x"))).size).toBeGreaterThanOrEqual(4);
  for (const record of records) expect(record.buffer, JSON.stringify(record)).toEqual(record.wanted);
  expect(problems).toEqual([]);
});
