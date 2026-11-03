import { expect, test } from "@playwright/test";

// docs/preview-node.md "ノード上": with the setting PanoramaSuite.Editor.NewUI on, the Panorama Preview node opens
// the new Preview window (docs/studio-ui.md "Preview のウィンドウ") from its node surface for IMAGE, VIDEO and
// PANO_SCENE, through web_src/main.js as ComfyUI loads it (tests/browser/pages/preview_entry.html: the node has the
// MatchType `source` the real frontend builds), and with nothing linked to the source (an empty black stage). With the
// setting off, IMAGE and VIDEO keep the browser's fullscreen.

// A 4×2 PNG for the /view the node surface asks for.
const PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAAEklEQVR4nGP4z8DwHxkzoAsAAA8hD/EEN8afAAAAAElFTkSuQmCC",
  "base64",
);

async function load(page, query) {
  const problems = [];
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/preview_entry.html${query}`);
  await page.waitForFunction(() => window.__entry?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__entry.error)).toBeNull();
  return problems;
}

for (const [name, query, button] of [
  ["IMAGE", "", "Open viewer"],
  ["VIDEO", "?video", "Open viewer"],
  ["PANO_SCENE", "?scene", "Open viewer"],
  ["nothing linked", "?none", "Open viewer"],
]) {
  test(`the node surface's top-right button opens the new window for ${name}`, async ({ page }) => {
    const problems = await load(page, query);
    const open = page.locator(`#graph [aria-label="${button}"]`);
    await expect(open).toBeVisible({ timeout: 20_000 });
    await open.click();
    await expect(page.locator("[data-preview-window]")).toHaveCount(1);
    expect(await page.evaluate(() => window.__entry.fullscreenAsked)).toBe(0);
    expect(await page.evaluate(() => document.fullscreenElement)).toBeNull();
    expect(problems).toEqual([]);
  });
}

test("with the setting off, the IMAGE node surface's top-right button is the browser's fullscreen", async ({ page }) => {
  await load(page, "?off");
  const button = page.locator('#graph [aria-label="Fullscreen"]');
  await expect(button).toBeVisible({ timeout: 20_000 });
  await expect(page.locator('#graph [aria-label="Open viewer"]')).toHaveCount(0);
  await button.click();
  await expect.poll(() => page.evaluate(() => window.__entry.fullscreenAsked)).toBe(1);
  await expect(page.locator("[data-preview-window]")).toHaveCount(0);
});

test("the IMAGE node surface reads the picture of its origin's result", async ({ page }) => {
  const views = [];
  await page.route("**/view?*", (route) => {
    const url = new URL(route.request().url());
    views.push(`${url.pathname}${url.search}`);
    return route.fulfill({ status: 200, contentType: "image/png", body: PNG });
  });
  const problems = await load(page, "?result");
  await expect.poll(() => views).toContain("/view?filename=bg.png&type=temp");
  expect(problems).toEqual([]);
});
