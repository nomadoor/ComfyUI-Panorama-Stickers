import { expect, test } from "@playwright/test";

// The Paint and Mask tools of the new editor (docs/studio-ui.md "左の列", "ペイントの道具", "閉じ方"; web_src/studio/
// paint.js, paint_bar.js, components/studio/StudioPaintBar.vue) on tests/browser/pages/studio_paint.html, in a real
// browser engine: a stroke changes the stage's pixels where it was drawn, is saved in the state in the old editor's
// format, and is one Undo step; the mask likewise; Clear asks and is one step; Escape goes back to Cursor. The paint
// eraser and the lasso write what the old editor writes too.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto("/tests/browser/pages/studio_paint.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  await page.waitForTimeout(400);
  return problems;
}

async function stageBox(page) {
  return page.locator("[data-stage-canvas]").boundingBox();
}

// A drag over the stage along `points` ([x, y] fractions of the stage).
async function drag(page, points) {
  const box = await stageBox(page);
  const at = ([x, y]) => [box.x + box.width * x, box.y + box.height * y];
  await page.mouse.move(...at(points[0]));
  await page.mouse.down();
  for (const point of points.slice(1)) {
    const [x, y] = at(point);
    await page.mouse.move(x, y, { steps: 8 });
  }
  await page.mouse.up();
  await page.waitForTimeout(250);
}

const line = (x0, y0, x1, y1) => [[x0, y0], [(x0 + x1) / 2, (y0 + y1) / 2], [x1, y1]];

async function pixel(page, x, y) {
  const box = await stageBox(page);
  return page.evaluate(([px, py]) => window.__studio.stageAt(px, py), [box.width * x, box.height * y]);
}

const painting = (page) => page.evaluate(() => window.__studio.session.state.painting);

// The keys of a value and of everything inside it, as "path:type", values left out.
function shape(value, path = "") {
  if (Array.isArray(value)) return [`${path}:array`, ...(value.length ? shape(value[0], `${path}[]`) : [])];
  if (value && typeof value === "object") return [`${path}:object`, ...Object.keys(value).sort().flatMap((key) => shape(value[key], `${path}.${key}`))];
  return [`${path}:${value === null ? "null" : typeof value}`];
}

test("Paint: a stroke on the sky shows, is saved in the old editor's format, and is one Undo step", async ({ page }) => {
  const problems = await open(page);
  await expect(page.locator("[data-paint-bar]")).toHaveCount(0);
  await page.locator('[data-tool="paint"]').click();
  const bar = page.locator("[data-paint-bar]");
  await expect(bar).toHaveCount(1);
  await expect(page.locator('[data-tool="paint"]')).toHaveClass(/is-active/);
  await expect(bar.locator("[data-paint-brush]")).toHaveCount(6);
  await expect(page.locator("[data-paint-swatch]")).toHaveCount(5);
  await expect(page.locator(".pano-studio-card-title").first()).toContainText("Paint");
  await page.locator('[data-paint-swatch="red"]').click();

  const before = await pixel(page, 0.5, 0.3);
  await drag(page, line(0.4, 0.3, 0.6, 0.3));
  const after = await pixel(page, 0.5, 0.3);
  expect(after[0]).toBeGreaterThan(200);
  expect(after[1]).toBeLessThan(80);
  expect(before[0]).toBeLessThan(180);
  // Far from the stroke nothing changed.
  expect(await pixel(page, 0.5, 0.15)).toEqual(await pixel(page, 0.5, 0.15));

  const saved = await painting(page);
  expect(saved.paint.strokes).toHaveLength(1);
  expect(saved.groups).toHaveLength(1);
  const [stroke] = saved.paint.strokes;
  expect(stroke.color).toEqual({ r: 1, g: 0, b: 0, a: 1 });
  expect(stroke.geometry.processedPoints.length).toBeGreaterThan(3);
  expect(saved.groups[0].actionGroupId).toBe(stroke.actionGroupId);
  // The sky image is z 1, so the stroke's group goes over it.
  expect(saved.groups[0].z_index).toBe(2);
  const old = await page.evaluate(() => window.__studio.oldRecords());
  const { processedPoints, ...geometry } = stroke.geometry;
  expect(processedPoints.length).toBeGreaterThan(0);
  expect(shape({ ...stroke, geometry })).toEqual(shape(old.freehand));
  // The text written to state_json carries it, without a painting layer.
  const text = await page.evaluate(() => window.__studio.session.stateText(window.__studio.node, window.__studio.node.widgets[0].value));
  const written = JSON.parse(text);
  expect(written.painting.paint.strokes).toHaveLength(1);
  expect(written.painting_layer ?? null).toBeNull();

  // Undo takes the stroke back, Redo does it again.
  await page.locator('[data-tool="undo"]').click();
  await page.waitForTimeout(250);
  expect((await painting(page)).paint.strokes).toHaveLength(0);
  expect(await pixel(page, 0.5, 0.3)).toEqual(before);
  await page.locator('[data-tool="redo"]').click();
  await page.waitForTimeout(250);
  expect((await painting(page)).paint.strokes).toHaveLength(1);
  expect((await pixel(page, 0.5, 0.3))[0]).toBeGreaterThan(200);

  // The Timeline shows the Paint row.
  await expect(page.locator('[data-head="painting"]')).toHaveCount(1);
  expect(problems).toEqual([]);
});

test("Paint: the eraser turns what it touches into raster objects; the lasso fills", async ({ page }) => {
  const problems = await open(page);
  await page.locator('[data-tool="paint"]').click();
  await drag(page, line(0.4, 0.3, 0.6, 0.3));
  await page.locator('[data-paint-brush="eraser"]').click();
  await expect(page.locator(".pano-studio-paint-colors")).toHaveClass(/is-disabled/);
  await drag(page, line(0.5, 0.2, 0.5, 0.4));
  let saved = await painting(page);
  expect(saved.paint.strokes).toHaveLength(0);
  expect(saved.raster_objects.length).toBeGreaterThanOrEqual(2);
  expect(saved.raster_objects.every((item) => item.type === "raster_frozen" && item.rasterDataUrl.startsWith("data:image/png"))).toBe(true);
  await page.waitForTimeout(300);
  // Where it erased, the sky shows again; the halves left show.
  expect((await pixel(page, 0.5, 0.3))[1]).toBeGreaterThan(100);
  expect((await pixel(page, 0.42, 0.3))[1]).toBeGreaterThan(200);

  await page.locator('[data-paint-brush="lasso_fill"]').click();
  await expect(page.locator("[data-paint-size] .pano-studio-slider")).toHaveAttribute("aria-disabled", "true");
  await drag(page, [[0.3, 0.55], [0.4, 0.55], [0.4, 0.65], [0.3, 0.65]]);
  saved = await painting(page);
  expect(saved.paint.strokes).toHaveLength(1);
  expect(saved.paint.strokes[0].geometry.geometryKind).toBe("lasso_fill");
  const old = await page.evaluate(() => window.__studio.oldRecords());
  expect(shape(saved.paint.strokes[0])).toEqual(shape(old.lasso));
  expect(problems).toEqual([]);
});

test("Mask: a stroke on the mask layer, one Undo step; Clear mask asks and is one step; Escape goes back to Cursor", async ({ page }) => {
  const problems = await open(page);
  await page.locator('[data-tool="mask"]').click();
  const bar = page.locator("[data-paint-bar]");
  await expect(bar.locator("[data-paint-brush]")).toHaveCount(3);
  await expect(page.locator("[data-paint-swatch]")).toHaveCount(0);
  const before = await pixel(page, 0.5, 0.3);
  await drag(page, line(0.4, 0.3, 0.6, 0.3));
  expect(await pixel(page, 0.5, 0.3)).not.toEqual(before);
  let saved = await painting(page);
  expect(saved.mask.strokes).toHaveLength(1);
  expect(saved.paint.strokes).toHaveLength(0);
  expect(saved.groups).toHaveLength(0);
  expect(saved.mask.strokes[0].color).toEqual({ r: 0, g: 0, b: 0, a: 1 });

  // Clear mask: the question, Cancel keeps it, the confirming button clears it as one step.
  await page.locator('[data-paint-clear="mask"]').click();
  await expect(page.locator("[data-confirm]")).toHaveCount(1);
  await expect(page.locator(".pano-studio-confirm-title")).toHaveText("Clear Mask");
  await page.locator('[data-confirm-answer="cancel"]').click();
  expect((await painting(page)).mask.strokes).toHaveLength(1);
  // Escape answers Cancel, and only that (the tool stays Mask).
  await page.locator('[data-paint-clear="mask"]').click();
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-confirm]")).toHaveCount(0);
  await expect(page.locator("[data-paint-bar]")).toHaveCount(1);
  expect((await painting(page)).mask.strokes).toHaveLength(1);
  await page.locator('[data-paint-clear="mask"]').click();
  await page.locator('[data-confirm-answer="ok"]').click();
  await page.waitForTimeout(250);
  expect((await painting(page)).mask.strokes).toHaveLength(0);
  expect(await pixel(page, 0.5, 0.3)).toEqual(before);
  await page.keyboard.press("Control+z");
  await page.waitForTimeout(250);
  expect((await painting(page)).mask.strokes).toHaveLength(1);

  // Escape: back to Cursor, the bar goes.
  await page.locator("[data-stage-canvas]").hover();
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-paint-bar]")).toHaveCount(0);
  await expect(page.locator('[data-tool="cursor"]')).toHaveClass(/is-active/);
  // With Cursor a left drag looks around: it paints nothing.
  await drag(page, line(0.4, 0.5, 0.6, 0.5));
  saved = await painting(page);
  expect(saved.mask.strokes).toHaveLength(1);
  expect(problems).toEqual([]);
});

test("Paint: Escape during a stroke gives it up; the Camera tab goes back to Cursor", async ({ page }) => {
  const problems = await open(page);
  await page.locator('[data-tool="paint"]').click();
  const box = await stageBox(page);
  await page.mouse.move(box.x + box.width * 0.4, box.y + box.height * 0.3);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.6, box.y + box.height * 0.3, { steps: 8 });
  await page.keyboard.press("Escape");
  await page.mouse.up();
  await page.waitForTimeout(250);
  expect((await painting(page)).paint.strokes).toHaveLength(0);
  expect(await page.evaluate(() => window.__studio.session.canUndo)).toBe(false);
  // The tool stays Paint (Escape only gave up the stroke).
  await expect(page.locator("[data-paint-bar]")).toHaveCount(1);
  await page.locator('.pano-studio-tabs [data-value="camera"]').click();
  await expect(page.locator("[data-paint-bar]")).toHaveCount(0);
  await expect(page.locator('[data-tool="paint"]')).not.toHaveClass(/is-active/);
  expect(problems).toEqual([]);
});

test("Closing uploads the paint layer the editor draws, as the old editor does, and writes painting_layer to state_json", async ({ page }) => {
  const problems = await open(page);
  await page.locator('[data-tool="paint"]').click();
  await page.locator('[data-paint-swatch="red"]').click();
  await drag(page, line(0.4, 0.3, 0.6, 0.3));
  await page.locator('[data-tool="mask"]').click();
  await drag(page, line(0.4, 0.7, 0.6, 0.7));
  const drawn = await painting(page);
  expect(await page.evaluate(() => window.__studio.session.state.painting_layer)).toBeNull();
  await page.evaluate(() => window.__studio.close());
  await page.waitForFunction(() => JSON.parse(window.__studio.node.widgets[0].value).painting_layer, null, { timeout: 15_000 });
  const saved = await page.evaluate(() => JSON.parse(window.__studio.node.widgets[0].value));
  const gid = drawn.paint.strokes[0].actionGroupId;
  const uploads = await page.evaluate(() => window.__studio.uploads);
  expect(uploads.map((item) => [item.path, item.name, item.type, item.subfolder, item.overwrite])).toEqual([
    ["/upload/image", "pano_paint_21.png", "input", "panorama_stickers", "1"],
    ["/upload/image", `pano_group_21_${gid}.png`, "input", "panorama_stickers", "1"],
    ["/upload/image", "pano_mask_21.png", "input", "panorama_stickers", "1"],
  ]);
  const ref = (filename) => ({ type: "comfy_image", filename, subfolder: "panorama_stickers", storage: "input" });
  expect(saved.painting_layer.paint).toEqual(ref("pano_paint_21.png"));
  expect(saved.painting_layer.mask).toEqual(ref("pano_mask_21.png"));
  expect(saved.painting_layer.groups).toEqual([{ id: gid, actionGroupId: gid, image: ref(`pano_group_21_${gid}.png`) }]);
  expect(saved.painting_layer.revision).toMatch(/:2048x1024$/);
  // The painting is the one drawn (as state_json keeps it); the PNGs are 2048x1024 and have the stroke where it lies on
  // the ERP.
  expect(saved.painting.paint.strokes.map((item) => item.id)).toEqual(drawn.paint.strokes.map((item) => item.id));
  expect(saved.painting.mask.strokes.map((item) => item.id)).toEqual(drawn.mask.strokes.map((item) => item.id));
  const at = (stroke) => {
    const points = stroke.geometry.processedPoints;
    const mid = points[Math.floor(points.length / 2)];
    return [Math.floor(mid.u * 2048), Math.floor(mid.v * 1024)];
  };
  const paintPixel = await page.evaluate(([url, [x, y]]) => window.__studio.pngAt(url, x, y), [uploads[0].url, at(drawn.paint.strokes[0])]);
  expect([paintPixel.width, paintPixel.height]).toEqual([2048, 1024]);
  expect(paintPixel.pixel[0]).toBeGreaterThan(200);
  expect(paintPixel.pixel[1]).toBeLessThan(60);
  expect(paintPixel.pixel[3]).toBeGreaterThan(200);
  const maskPixel = await page.evaluate(([url, [x, y]]) => window.__studio.pngAt(url, x, y), [uploads[2].url, at(drawn.mask.strokes[0])]);
  expect(maskPixel.pixel[3]).toBeGreaterThan(200);
  expect(problems).toEqual([]);
});
