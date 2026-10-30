import { expect, test } from "@playwright/test";

// The new Preview window (docs/studio-ui.md "Preview のウィンドウ") on tests/browser/pages/preview_window.html: an
// IMAGE source fills the stage; a VIDEO source plays and seeks under the playback strip; ✕ and Escape close it; its
// keys do not reach ComfyUI's listeners behind it.

async function open(page, query = "") {
  const problems = [];
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/preview_window.html${query}`);
  await page.waitForFunction(() => window.__preview?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__preview.error)).toBeNull();
  expect(await page.evaluate(() => window.__preview.open())).toBe(true);
  await expect(page.locator("[data-preview-window]")).toHaveCount(1);
  return problems;
}

test("an IMAGE source fills the stage, with no inspector, timeline or rail", async ({ page }) => {
  const problems = await open(page);
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 20_000 }).toBeGreaterThan(20);
  await expect(page.locator("[data-region=inspector], [data-region=timeline], .pano-studio-at-rail")).toHaveCount(0);
  await expect(page.locator("[data-action=close]")).toBeVisible();
  await expect(page.locator("[data-action=reset-view]")).toBeVisible();
  await expect(page.locator("[data-action=grid]")).toBeVisible();
  await expect(page.locator("[data-action=fullscreen]")).toBeVisible();
  if (process.env.PREVIEW_SHOT) await page.screenshot({ path: process.env.PREVIEW_SHOT });
  expect(problems).toEqual([]);
});

test("✕ closes the window", async ({ page }) => {
  await open(page);
  await page.locator("[data-action=close]").click();
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
});

test("Escape closes the window and no key reaches ComfyUI behind it", async ({ page }) => {
  await open(page);
  await page.locator("[data-stage-canvas]").click({ position: { x: 300, y: 300 } });
  await page.evaluate(() => (window.__comfy.length = 0));
  await page.keyboard.press("w");
  await page.keyboard.press("Delete");
  expect(await page.evaluate(() => window.__comfy)).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
});

test("a VIDEO source: the strip plays and seeks, and the frame on the stage follows", async ({ page }) => {
  const problems = await open(page, "?video");
  await expect(page.locator("[data-region=playback]")).toBeVisible();
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frames), { timeout: 20_000 }).toBeGreaterThan(10);
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 20_000 }).toBeGreaterThan(5);
  const dark = await page.evaluate(() => window.__preview.sample());
  // Seek near the end: the frame and the picture move (the gray grows lighter over the VIDEO).
  const last = await page.evaluate(() => window.__preview.playback().frames - 2);
  await page.locator("[data-seek]").fill(String(last));
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frame), { timeout: 10_000 }).toBe(last);
  await expect.poll(() => page.evaluate(() => window.__preview.sample()), { timeout: 10_000 }).toBeGreaterThan(dark + 20);
  await expect(page.locator("[data-time]")).toContainText("/ 0:0");
  // Play from the start: the frame advances.
  await page.locator("[data-seek]").fill("0");
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frame), { timeout: 10_000 }).toBe(0);
  await page.locator("[data-action=play]").click();
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frame), { timeout: 10_000 }).toBeGreaterThan(5);
  await page.locator("[data-action=play]").click();
  await expect.poll(() => page.evaluate(() => window.__preview.playback().playing)).toBe(false);
  if (process.env.PREVIEW_SHOT_VIDEO) await page.screenshot({ path: process.env.PREVIEW_SHOT_VIDEO });
  await page.locator("[data-action=close]").click();
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  await expect(page.locator("video")).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("a PANO_SCENE source: its objects draw read-only over its background, and the strip seeks its Timeline", async ({ page }) => {
  const problems = await open(page, "?scene");
  // The red board ahead at the center, the blue upstream background above.
  await expect.poll(async () => {
    const { center } = await page.evaluate(() => window.__preview.colors());
    return center[0] > 150 && center[1] < 90 && center[2] < 90;
  }, { timeout: 20_000 }).toBe(true);
  await expect.poll(async () => {
    const { top } = await page.evaluate(() => window.__preview.colors());
    return top[2] > top[0] + 40;
  }, { timeout: 20_000 }).toBe(true);
  await expect(page.locator("[data-region=playback]")).toBeVisible();
  expect(await page.evaluate(() => window.__preview.playback().frames)).toBe(48);
  await page.locator("[data-seek]").fill("30");
  await expect.poll(() => page.evaluate(() => window.__preview.playback().frame)).toBe(30);
  // Nothing is selected or edited: a click on the board keeps it as it is and no gizmo or selection bar shows.
  await page.locator("[data-stage-canvas]").click({ position: { x: 568, y: 345 } });
  await expect(page.locator(".pano-studio-at-bar, [data-region=inspector]")).toHaveCount(0);
  if (process.env.PREVIEW_SHOT_SCENE) await page.screenshot({ path: process.env.PREVIEW_SHOT_SCENE });
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
  expect(problems).toEqual([]);
});
