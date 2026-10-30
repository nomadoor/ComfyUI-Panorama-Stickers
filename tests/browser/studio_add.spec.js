import { expect, test } from "@playwright/test";

// Add and the drop on the new editor's stage (web_src/studio/add_files.js, drop_input.js, landing.js,
// components/studio/StudioPlaceChoice.vue, StudioDropMarker.vue) on tests/browser/pages/studio_add.html, in a real browser
// engine: docs/studio-ui.md "Add とドロップの見せ方", "閉じ方" (Escape's step 3) and docs/space-and-view.md "Add とドロップ".
// The page stands in for ComfyUI's upload and the 3D file route; the GLB is drawn by the three.js view.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, testInfo) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto("/tests/browser/pages/studio_add.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice.is-loading")).toHaveCount(0, { timeout: 30_000 });
  const renderer = await page.evaluate(() => window.__studio.rendererOf());
  testInfo.annotations.push({ type: "renderer", description: String(renderer) });
  console.log(`renderer: ${renderer}`);
  const box = await page.locator("[data-stage-canvas]").boundingBox();
  return {
    problems,
    sky: { x: box.x + box.width * 0.5, y: box.y + box.height * 0.15 },
    ground: { x: box.x + box.width * 0.5, y: box.y + box.height * 0.85 },
  };
}

const stickers = (page) => page.evaluate(() => window.__studio.session.state.stickers.map((s) => ({ id: s.id, placement: s.placement, source: s.source, position: s.position?.value ?? null })));
const selectedRow = (page) => page.evaluate(() => window.__studio.session.selection.row);

async function pick(page, key) {
  const file = await page.evaluate((name) => window.__studio.files[name], key);
  const chooser = page.waitForEvent("filechooser");
  await page.locator('[data-tool="add"]').click();
  await (await chooser).setFiles({ name: file.name, mimeType: file.mimeType, buffer: Buffer.from(file.base64, "base64") });
}

test("Add with a GLB lands it on the ground ahead, selected in the timeline and the inspector; the gizmo shows, Undo takes it back, closing saves it", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  await pick(page, "glb");
  // It is uploaded to input/3d, the route answered, and placing it is one Undo step.
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null, { timeout: 15_000 }).toBe("box.glb");
  const [placed] = await stickers(page);
  expect(placed.placement).toBe("world");
  expect(placed.source.subfolder).toBe("3d");
  // The box's bottom (-1 in its own frame) is on the ground (-1.6) ahead of the view.
  expect(placed.position[1]).toBeCloseTo(-0.6, 5);
  expect(placed.position[2]).toBeLessThan(-5);
  expect(await selectedRow(page)).toBe(placed.id);
  // The loading line goes once the item has drawn; its selected guide is drawn in yellow.
  await expect(page.locator(".pano-studio-notice.is-loading")).toHaveCount(0, { timeout: 15_000 });
  await expect.poll(() => page.evaluate(() => window.__studio.yellowPixels()), { timeout: 10_000 }).toBeGreaterThan(50);
  // The timeline has its row, selected; the inspector shows its card; the bar shows its gizmo modes.
  await expect(page.locator(`.pano-studio-tl-head.is-selected[data-head="${placed.id}"]`)).toBeVisible();
  await expect(page.locator('[data-region="inspector"]')).toContainText("Position");
  await expect(page.locator('[data-region="bar"]')).toContainText("box.glb");
  await page.screenshot({ path: testInfo.outputPath("placed-glb.png") });
  // Undo takes the placing back, Redo puts it again.
  await page.keyboard.press("Control+z");
  await expect.poll(async () => (await stickers(page)).length).toBe(0);
  await page.keyboard.press("Control+Shift+z");
  await expect.poll(async () => (await stickers(page)).length).toBe(1);
  // Closing saves it.
  await page.evaluate(() => window.__studio.close());
  const saved = JSON.parse(await page.evaluate(() => window.__studio.node.widgets[0].value));
  expect(saved.stickers.map((s) => s.source.filename)).toEqual(["box.glb"]);
  expect(problems).toEqual([]);
});

test("Add with an image shows the Sky / World choice at the stage's center; Sky and World place it so", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  await pick(page, "photo");
  const choice = page.locator(".pano-studio-place-choice");
  await expect(choice).toBeVisible();
  const stage = await page.locator("[data-stage-canvas]").boundingBox();
  const at = await choice.boundingBox();
  expect(Math.abs(at.x + at.width / 2 - (stage.x + stage.width / 2))).toBeLessThan(2);
  expect(Math.abs(at.y + at.height / 2 - (stage.y + stage.height / 2))).toBeLessThan(2);
  await expect(choice.locator('[data-place="sky"]')).toHaveText("Sky");
  await expect(choice.locator('[data-place="world"]')).toHaveText("World");
  await page.screenshot({ path: testInfo.outputPath("choice.png") });
  await choice.locator('[data-place="sky"]').click();
  await expect(choice).toHaveCount(0);
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null).toBe("photo.png");
  expect((await stickers(page))[0].placement).toBe("sky");

  await pick(page, "photo");
  await page.locator('.pano-studio-place-choice [data-place="world"]').click();
  await expect.poll(async () => (await stickers(page))[1]?.source.filename ?? null).toBe("photo.png");
  const world = (await stickers(page))[1];
  expect(world.placement).toBe("world");
  // Standing on the ground: its middle half its height (E = 1.6) above the ground.
  expect(world.position[1]).toBeCloseTo(-0.8, 5);
  expect(await selectedRow(page)).toBe(world.id);
  expect(problems).toEqual([]);
});

test("Escape closes the choice and places nothing; the editor stays open; a press outside closes it too", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  await pick(page, "photo");
  await expect(page.locator(".pano-studio-place-choice")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".pano-studio-place-choice")).toHaveCount(0);
  await expect(page.locator(".pano-studio-editor")).toBeVisible();
  expect(await stickers(page)).toEqual([]);
  await pick(page, "photo");
  await expect(page.locator(".pano-studio-place-choice")).toBeVisible();
  const stage = await page.locator("[data-stage-canvas]").boundingBox();
  await page.mouse.click(stage.x + 200, stage.y + 200);
  await expect(page.locator(".pano-studio-place-choice")).toHaveCount(0);
  expect(await stickers(page)).toEqual([]);
  // With nothing left, Escape closes the editor.
  await page.keyboard.press("Escape");
  await expect(page.locator(".pano-studio-editor")).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("dragging an image shows the Sky mark over the sky and the World mark over the ground; the drop places it there", async ({ page }, testInfo) => {
  const { problems, sky, ground } = await open(page, testInfo);
  await page.evaluate(({ x, y }) => window.__studio.drag("dragover", "photo", x, y), sky);
  await expect(page.locator("[data-drop-place=sky]")).toHaveCount(1);
  await expect(page.locator("[data-drop-label]")).toHaveText("Sky");
  const label = await page.locator("[data-drop-label]").boundingBox();
  expect(label.x - sky.x).toBeCloseTo(16, 0);
  expect(label.y - sky.y).toBeCloseTo(12, 0);
  await page.evaluate(({ x, y }) => window.__studio.drag("dragover", "photo", x, y), ground);
  await expect(page.locator("[data-drop-place=world]")).toHaveCount(1);
  await expect(page.locator("[data-drop-label]")).toHaveText("World");
  // Leaving the stage takes the mark away.
  await page.evaluate(({ x, y }) => window.__studio.drag("dragleave", "photo", x, y), ground);
  await expect(page.locator("[data-drop-label]")).toHaveCount(0);

  await page.evaluate(({ x, y }) => window.__studio.drag("drop", "photo", x, y), sky);
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null).toBe("photo.png");
  expect((await stickers(page))[0].placement).toBe("sky");
  await page.evaluate(({ x, y }) => window.__studio.drag("drop", "photo", x, y), ground);
  await expect.poll(async () => (await stickers(page))[1]?.source.filename ?? null).toBe("photo.png");
  expect((await stickers(page))[1].placement).toBe("world");
  await expect(page.locator(".pano-studio-place-choice")).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("a dragged 3D file shows its box on the ground and drops into the World", async ({ page }, testInfo) => {
  const { problems, sky } = await open(page, testInfo);
  await page.evaluate(({ x, y }) => window.__studio.drag("dragover", "glb", x, y), sky);
  await expect(page.locator("[data-drop-place=world]")).toHaveCount(1);
  await expect(page.locator("[data-drop-label]")).toHaveText("World");
  await page.evaluate(({ x, y }) => window.__studio.drag("drop", "glb", x, y), sky);
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null, { timeout: 15_000 }).toBe("box.glb");
  const [placed] = await stickers(page);
  // Over the sky it goes to the ground at the far edge of the world bound (48 for E = 1.6).
  expect(Math.hypot(placed.position[0], placed.position[2])).toBeGreaterThan(40);
  expect(problems).toEqual([]);
});
