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

const color = (page, u, v) => page.evaluate(([x, y]) => window.__surface.pictureColor(x, y), [u, v]);

test("Frame mode: the surface draws the Camera's frame live, and turning the Camera in state_json draws it again", async ({ page }) => {
  const problems = await open(page, "frame");
  await expect(page.locator(".pano-studio-node-shot")).toHaveText("Frame 16:9");
  await expect(page.locator(".pano-studio-node-size")).toHaveText("1928 × 1088");
  // The red sky image is straight ahead, the rest is background_color (no background input), as in the output.
  await expect.poll(async () => near(await color(page, 0.5, 0.5), RED), { timeout: 20_000 }).toBe(true);
  await expect.poll(async () => near(await color(page, 0.03, 0.1), GREEN)).toBe(true);
  // The picture keeps the output's shape: 16 : 9 over the line.
  const box = await page.locator(".pano-studio-node-line").boundingBox();
  const node = await page.locator("#node").boundingBox();
  expect(Math.abs(box.width / (box.y - node.y - 6) - 16 / 9)).toBeLessThan(0.02);

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
  const box = await page.locator(".pano-studio-node-line").boundingBox();
  const node = await page.locator("#node").boundingBox();
  expect(Math.abs(box.width / (box.y - node.y - 6) - 2)).toBeLessThan(0.02);

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
  await page.evaluate(() => window.__surface.setMode("panorama"));
  await expect(page.locator(".pano-studio-node-shot")).toHaveText("Panorama 360°");
  // The picture takes the new shape too.
  await expect.poll(async () => {
    const box = await page.locator(".pano-studio-node-line").boundingBox();
    const node = await page.locator("#node").boundingBox();
    return Math.round((box.width / (box.y - node.y - 6)) * 100) / 100;
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
