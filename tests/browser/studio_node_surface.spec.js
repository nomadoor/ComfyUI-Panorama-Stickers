import { expect, test } from "@playwright/test";

// Panorama Studio's node surface in a real browser engine (docs/studio-node-surface.md, ADR 0049): it draws the
// Camera's output live from state_json and the widgets, the line under the picture follows the widgets without a
// run, and the Open Studio button opens the editor. tests/browser/pages/studio_node_surface.html.

const RED = [220, 40, 40];
const GREEN = [0, 255, 0];
const near = (a, b, tolerance = 40) => a.every((value, i) => Math.abs(value - b[i]) <= tolerance);

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, mode) {
  const problems = watch(page);
  await page.goto(`/tests/browser/pages/studio_node_surface.html?mode=${mode}`);
  await page.waitForFunction(() => window.__surface?.ready || window.__surface?.error, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__surface.error)).toBeNull();
  await expect(page.locator(".pano-studio-node-line")).toBeVisible({ timeout: 30_000 });
  return problems;
}

const pictureBox = (page) => page.evaluate(() => window.__surface.pictureBox());
const color = (page, u, v) => page.evaluate(([x, y]) => window.__surface.pictureColor(x, y), [u, v]);

test("Frame mode: the surface draws the Camera's frame live, and turning the Camera in state_json draws it again", async ({ page }) => {
  const problems = await open(page, "frame");
  await expect(page.locator(".pano-studio-node-shot")).toHaveText("Frame 16:9");
  await expect(page.locator(".pano-studio-node-size")).toHaveText("1928 × 1088");
  // The red sky image is straight ahead, the rest is background_color (no background input), as in the output.
  await expect.poll(async () => near(await color(page, 0.5, 0.5), RED), { timeout: 20_000 }).toBe(true);
  await expect.poll(async () => near(await color(page, 0.03, 0.1), GREEN)).toBe(true);
  // The picture keeps the output's shape: 16 : 9 over the line.
  const box = await pictureBox(page);
  expect(Math.abs(box.w / box.h - 16 / 9)).toBeLessThan(0.02);

  await page.evaluate(() => window.__surface.turnCamera(180));
  await expect.poll(async () => near(await color(page, 0.5, 0.5), GREEN)).toBe(true);
  await page.screenshot({ path: test.info().outputPath("frame.png") });
  expect(problems).toEqual([]);
});

test("Panorama mode: the surface draws the live ERP from the Camera, its turn moves what it shows", async ({ page }) => {
  const problems = await open(page, "panorama");
  await expect(page.locator(".pano-studio-node-shot")).toHaveText("Panorama 360°");
  await expect(page.locator(".pano-studio-node-size")).toHaveText("2048 × 1024");
  // The ERP's center is the Camera's forward: the red image.
  await expect.poll(async () => near(await color(page, 0.5, 0.5), RED), { timeout: 20_000 }).toBe(true);
  await expect.poll(async () => near(await color(page, 0.02, 0.5), GREEN)).toBe(true);
  const box = await pictureBox(page);
  expect(Math.abs(box.w / box.h - 2)).toBeLessThan(0.02);

  // Turned a quarter: the image leaves the center for a quarter of the ERP's width to one side.
  await page.evaluate(() => window.__surface.turnCamera(90));
  await expect.poll(async () => near(await color(page, 0.5, 0.5), GREEN)).toBe(true);
  const quarter = await Promise.all([color(page, 0.25, 0.5), color(page, 0.75, 0.5)]);
  expect(quarter.some((rgb) => near(rgb, RED))).toBe(true);
  await page.screenshot({ path: test.info().outputPath("panorama.png") });
  expect(problems).toEqual([]);
});

test("the line follows megapixels, multiple and the Camera's mode at once, without a run", async ({ page }) => {
  const problems = await open(page, "frame");
  const size = page.locator(".pano-studio-node-size");
  await expect(size).toHaveText("1928 × 1088");
  // ComfyUI calls the callback with the widget as `this` (its number widget reads this.options).
  await page.evaluate(() => window.__surface.setWidget("megapixels", 1.0));
  await expect(size).toHaveText("1368 × 768");
  await page.evaluate(() => window.__surface.setWidget("multiple", 64));
  await expect(size).not.toHaveText("1368 × 768");
  const sized = await size.textContent();
  expect(sized.split(" × ").map(Number).every((side) => side % 64 === 0)).toBe(true);
  // A missing widget falls back to the node's default (2 and 8, pano_studio_status.js studioSizeWidgets, shared with
  // the editor's Output window).
  await page.evaluate(() => window.__surface.removeWidget("megapixels"));
  await page.evaluate(() => window.__surface.removeWidget("multiple"));
  await expect(size).toHaveText("1928 × 1088");
  await page.evaluate(() => window.__surface.setMode("panorama"));
  await expect(page.locator(".pano-studio-node-shot")).toHaveText("Panorama 360°");
  // The picture takes the new shape too.
  await expect.poll(async () => {
    const box = await pictureBox(page);
    return Math.round((box.w / box.h) * 100) / 100;
  }).toBe(2);
  expect(problems).toEqual([]);
});

test("the Open Studio button sits at the picture's bottom center, always shown, and opens the editor", async ({ page }) => {
  const problems = await open(page, "frame");
  const button = page.locator(".pano-studio-node-open");
  await expect(button).toBeVisible();
  await expect(button).toHaveText("Open Studio");
  const b = await button.boundingBox();
  const line = await page.locator(".pano-studio-node-line").boundingBox();
  // Centered on the picture, 8px above its bottom edge (the line is 6px under that edge).
  expect(Math.abs(b.x + b.width / 2 - (line.x + line.width / 2))).toBeLessThan(1.5);
  expect(Math.abs(line.y - 6 - (b.y + b.height) - 8)).toBeLessThan(1.5);
  expect(b.height).toBe(30);
  await button.click();
  expect(await page.evaluate(() => window.__surface.opened)).toBe(1);
  expect(problems).toEqual([]);
});

// The surface is one box under the widgets: the picture is the largest that fits it less the line, at the output's
// shape, centered up and down and across with the line right under it, and the rest is the surface's dark fill
// (docs/studio-node-surface.md "表示の構成"). A node resize lays it out again in the same frame.
test("resizing the node keeps the picture as large as fits and centered, the line under it and the button on it", async ({ page }) => {
  const problems = await open(page, "frame");
  await expect.poll(async () => near(await color(page, 0.5, 0.5), RED), { timeout: 20_000 }).toBe(true);
  const LINE = 16 + 6;
  for (const [width, height] of [[300, 500], [640, 260], [700, 500]]) {
    const sample = await page.evaluate(([w, h]) => window.__surface.resizeAndSample(w, h), [width, height]);
    // Already laid out and drawn in the frame of the resize: no frame shows the cleared or stretched canvas.
    expect(sample.canvas).toEqual(sample.expected);
    const box = sample.box;
    const fit = Math.min(width, (height - LINE) * 16 / 9);
    expect(Math.abs(box.w - fit)).toBeLessThan(1.5);
    expect(Math.abs(box.w / box.h - 16 / 9)).toBeLessThan(0.02);
    expect(Math.abs(box.x - (width - box.w) / 2)).toBeLessThan(1.5);
    expect(Math.abs(box.y - (height - box.h - LINE) / 2)).toBeLessThan(1.5);
    const line = await page.locator(".pano-studio-node-line").boundingBox();
    const node = await page.locator("#node").boundingBox();
    expect(Math.abs(line.y - node.y - (box.y + box.h + 6))).toBeLessThan(1.5);
    expect(Math.abs(line.width - box.w)).toBeLessThan(1.5);
    const button = await page.locator(".pano-studio-node-open").boundingBox();
    expect(Math.abs(button.x + button.width / 2 - (node.x + box.x + box.w / 2))).toBeLessThan(1.5);
    expect(Math.abs(node.y + box.y + box.h - (button.y + button.height) - 8)).toBeLessThan(1.5);
    // The picture is drawn to its edges, and around it the surface is not filled: the node's background shows through.
    await expect.poll(async () => near(await color(page, 0.5, 0.5), RED)).toBe(true);
    await expect.poll(async () => near(await color(page, 0.02, 0.05), GREEN)).toBe(true);
    const outside = await page.evaluate(([w, h]) => {
      const host = document.getElementById("node");
      const box = window.__surface.pictureBox();
      const x = box.x > 4 ? box.x / 2 : w / 2;
      const y = box.x > 4 ? h / 2 : box.y / 2;
      const probe = document.elementFromPoint(host.getBoundingClientRect().left + x, host.getBoundingClientRect().top + y);
      return { fill: getComputedStyle(host.querySelector(".pano-studio-node-frame")).backgroundColor, probe: Boolean(probe?.closest("#node")) };
    }, [width, height]);
    expect(outside).toEqual({ fill: "rgba(0, 0, 0, 0)", probe: true });
  }
  await page.screenshot({ path: test.info().outputPath("resized.png") });
  expect(problems).toEqual([]);
});
