import { expect, test } from "@playwright/test";

// docs/space-and-view.md "空のグリッド" (ADR 0058), in a real browser engine: the sky grid draws where the view looks at
// the sky, goes with the grid switch, shows the half on the eye's side of the ground, and is not in the Output window.

function watch(page) {
  const problems = [];
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  return problems;
}

async function openEditor(page) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/tests/browser/pages/studio_editor.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  return problems;
}

// The stage's pixels in its middle third (full resolution), as one array.
const middle = (page) => page.evaluate(() => {
  const c = document.querySelector("[data-stage-canvas]");
  const probe = document.createElement("canvas");
  probe.width = c.width;
  probe.height = c.height;
  const g = probe.getContext("2d", { willReadFrequently: true });
  g.drawImage(c, 0, 0);
  return Array.from(g.getImageData(Math.round(c.width / 3), Math.round(c.height / 3), Math.round(c.width / 3), Math.round(c.height / 3)).data);
});
const differ = (a, b) => a.reduce((sum, value, index) => sum + Math.abs(value - b[index]), 0) / a.length;

async function look(page, dx, dy) {
  const box = await page.locator("[data-stage-canvas]").boundingBox();
  const mid = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  await page.mouse.move(mid.x, mid.y);
  await page.mouse.down({ button: "right" });
  await page.mouse.move(mid.x + dx, mid.y + dy, { steps: 6 });
  await page.mouse.up({ button: "right" });
  await page.mouse.move(5, 5);
  await page.waitForTimeout(300);
}

// The middle of the view with the grids shown and hidden.
async function withAndWithout(page) {
  const shown = await middle(page);
  await page.locator('[data-action="grid"]').click();
  await page.waitForTimeout(300);
  const hidden = await middle(page);
  await page.locator('[data-action="grid"]').click();
  await page.waitForTimeout(300);
  return { shown, hidden };
}

test("looking up from above the ground, the sky grid draws on the sky and the switch hides it", async ({ page }) => {
  const problems = await openEditor(page);
  const box = await page.locator("[data-stage-canvas]").boundingBox();
  // Up by about 50° (a drag down): only sky in the middle, no ground grid.
  await look(page, 0, box.height * 0.9);
  const { shown, hidden } = await withAndWithout(page);
  expect(differ(shown, hidden)).toBeGreaterThan(0.05);
  expect(problems).toEqual([]);
});

test("from below the ground the lower half shows: looking down, the sky grid draws", async ({ page }) => {
  const problems = await openEditor(page);
  const box = await page.locator("[data-stage-canvas]").boundingBox();
  // Looking down from above the ground: the ground grid there; from below it (Q), the sky's lower half.
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.keyboard.down("KeyQ");
  await page.waitForTimeout(900);
  await page.keyboard.up("KeyQ");
  await look(page, 0, -box.height * 0.9);
  const { shown, hidden } = await withAndWithout(page);
  expect(differ(shown, hidden)).toBeGreaterThan(0.05);
  expect(problems).toEqual([]);
});

test("the Output window's picture has no grid", async ({ page }) => {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto("/tests/browser/pages/studio_camera_wired.html?aspect=16:9&mode=frame");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  await page.locator('[data-action="output-fold"]').click();
  const pixels = () => page.evaluate(() => {
    const canvas = document.querySelector('[data-output-picture="frame"]');
    if (!canvas || !canvas.width) return null;
    const probe = document.createElement("canvas");
    probe.width = 64;
    probe.height = 36;
    const g = probe.getContext("2d", { willReadFrequently: true });
    g.drawImage(canvas, 0, 0, 64, 36);
    return Array.from(g.getImageData(0, 0, 64, 36).data);
  });
  await expect.poll(async () => (await pixels())?.length ?? 0, { timeout: 10_000 }).toBeGreaterThan(0);
  await page.waitForTimeout(500);
  const shown = await pixels();
  await page.locator('[data-action="grid"]').click();
  await page.waitForTimeout(600);
  const hidden = await pixels();
  expect(differ(shown, hidden)).toBe(0);
  expect(problems).toEqual([]);
});
