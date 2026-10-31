import { expect, test } from "@playwright/test";

// The legacy nodes keep the old editor (ADR 0044 "旧ノードの UI"; docs/legacy-node-surfaces.md). These scenes open it
// through web_src/main.js as ComfyUI loads it (tests/browser/pages/legacy_editors.html) from the node surface's own
// button, use one of its controls, and close it: what the editor changed is in the node's state_json. They stand in
// for the source-text tests that pinned the old editor's wiring (ADR 0050).

// A 4×2 PNG, the image Add Image picks.
const PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAAEklEQVR4nGP4z8DwHxkzoAsAAA8hD/EEN8afAAAAAElFTkSuQmCC",
  "base64",
);

async function load(page, kind, extra = "") {
  const problems = [];
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  // The uploaded sticker's /view has no ComfyUI to answer it here; the editor's own errors (a boot step, closing) count.
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource")) problems.push(`console: ${message.text()}`);
  });
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/legacy_editors.html?node=${kind}${extra}`);
  await page.waitForFunction(() => window.__entry?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__entry.error)).toBeNull();
  return problems;
}

const state = (page) => page.evaluate(() => JSON.parse(window.__entry.state() || "{}"));
const modal = (page) => page.locator(".pano-modal");

async function closeEditor(page) {
  await page.keyboard.press("Escape");
  await expect(modal(page)).toHaveCount(0);
}

test("the legacy Stickers editor opens from the node surface, adds an image as a sticker, and writes it on close", async ({ page }) => {
  const problems = await load(page, "stickers");
  expect((await state(page)).stickers ?? []).toEqual([]);
  await page.locator('#graph [data-action="open-editor"]').click();
  await expect(modal(page)).toHaveCount(1, { timeout: 20_000 });

  const chooser = page.waitForEvent("filechooser", { timeout: 10_000 });
  await modal(page).locator('[data-tool-ui-action="add"]').click();
  await (await chooser).setFiles({ name: "sticker.png", mimeType: "image/png", buffer: PNG });
  await expect.poll(() => page.evaluate(() => window.__entry.uploads)).toBe(1);

  await closeEditor(page);
  const written = await state(page);
  expect(written.stickers).toHaveLength(1);
  expect(written.assets[written.stickers[0].asset_id]).toMatchObject({ type: "comfy_image", filename: "sticker_1.png" });
  expect(problems).toEqual([]);
});

test("the legacy Cutout editor opens from the node surface, adds a frame, and writes it on close", async ({ page }) => {
  const problems = await load(page, "cutout");
  expect((await state(page)).shots).toEqual([]);
  await page.locator('#graph [data-action="open-editor"]').click();
  await expect(modal(page)).toHaveCount(1, { timeout: 20_000 });

  await modal(page).locator('[data-tool-ui-action="add-or-look"]').click();
  await closeEditor(page);
  const written = await state(page);
  expect(written.shots).toHaveLength(1);
  expect(written.shots[0]).toMatchObject({ yaw_deg: expect.any(Number), hFOV_deg: expect.any(Number) });
  expect(problems).toEqual([]);
});

test("the legacy Panorama Preview opens the old editor read-only when the browser has no fullscreen", async ({ page }) => {
  const problems = await load(page, "preview");
  await page.locator('#graph [aria-label="Fullscreen"]').click();
  await expect(modal(page)).toHaveCount(1, { timeout: 20_000 });
  // Read-only: nothing to edit.
  await expect(modal(page).locator('[data-tool-ui-action="add"]')).toHaveCount(0);
  await expect(modal(page).locator('[data-tool-mode="paint"]')).toHaveCount(0);
  await closeEditor(page);
  expect(problems).toEqual([]);
});

// The /view URLs the page asks for, answered with the 4×2 PNG (no ComfyUI here).
async function recordViews(page) {
  const views = [];
  await page.route("**/view?*", (route) => {
    const url = new URL(route.request().url());
    views.push(`${url.pathname}${url.search}`);
    return url.searchParams.get("filename")?.endsWith(".png")
      ? route.fulfill({ status: 200, contentType: "image/png", body: PNG })
      : route.fulfill({ status: 404, body: "" });
  });
  return views;
}

test("the legacy Panorama Preview reads its linked image from the origin's result, storage first", async ({ page }) => {
  const views = await recordViews(page);
  const problems = await load(page, "preview", "&linked");
  await expect.poll(() => views).toContain("/view?filename=erp.png&type=output&subfolder=pano");
  expect(problems).toEqual([]);
});

test("the legacy Panorama Preview reads the MP4 of its own result", async ({ page }) => {
  const views = await recordViews(page);
  const problems = await load(page, "preview", "&video");
  await expect.poll(() => views).toContain("/view?filename=pv.mp4&type=temp");
  expect(problems).toEqual([]);
});

// docs/legacy-node-surfaces.md: the legacy Stickers node surface draws the background image of the node's own result
// (pano_preview_runtime.js surfaceBackground).
test("the legacy Stickers node surface draws the background image of its own result", async ({ page }) => {
  const problems = await load(page, "stickers", "&bg");
  const orange = (rgb) => Math.abs(rgb[0] - 230) <= 40 && Math.abs(rgb[1] - 140) <= 40 && Math.abs(rgb[2] - 30) <= 40;
  await expect.poll(async () => orange(await page.evaluate(() => window.__entry.surfaceColor(0.5, 0.5))), { timeout: 20_000 }).toBe(true);
  expect(problems).toEqual([]);
});

test("the legacy Stickers node surface without a background draws no orange there", async ({ page }) => {
  const problems = await load(page, "stickers");
  await page.waitForTimeout(1500);
  const rgb = await page.evaluate(() => window.__entry.surfaceColor(0.5, 0.5));
  expect(Math.abs(rgb[0] - 230) <= 40 && Math.abs(rgb[1] - 140) <= 40 && Math.abs(rgb[2] - 30) <= 40).toBe(false);
  expect(problems).toEqual([]);
});
