import { expect, test } from "@playwright/test";

// The Cursor grabbing the paint in the new editor (docs/studio-ui.md "ペイントのまとまり"; web_src/studio/stage_objects.js,
// session.js, selection_bar.js) on tests/browser/pages/studio_paint_grab.html, in a real browser engine: a press on a
// stroke selects its group, its drag moves the paint under the pointer as it goes and is one Undo step; Escape puts it
// back; the order against a sky image follows the z order and Send to back; a World object in front is hit first; a
// locked group is selected but does not move.

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
  await page.goto("/tests/browser/pages/studio_paint_grab.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  await page.waitForTimeout(400);
  return problems;
}

const stageBox = (page) => page.locator("[data-stage-canvas]").boundingBox();

// The page point of (x, y) fractions of the stage.
async function at(page, x, y) {
  const box = await stageBox(page);
  return [box.x + box.width * x, box.y + box.height * y];
}

// A red pen stroke along `points` ([x, y] fractions of the stage), then back to the Cursor.
async function paintStroke(page, points) {
  await page.locator('[data-tool="paint"]').click();
  await page.locator('[data-paint-swatch="red"]').click();
  await page.mouse.move(...(await at(page, ...points[0])));
  await page.mouse.down();
  for (const point of points.slice(1)) await page.mouse.move(...(await at(page, ...point)), { steps: 8 });
  await page.mouse.up();
  await page.waitForTimeout(250);
  await page.locator('[data-tool="cursor"]').click();
  await page.waitForTimeout(100);
}

async function pixel(page, x, y) {
  const box = await stageBox(page);
  return page.evaluate(([px, py]) => window.__studio.stageAt(px, py), [box.width * x, box.height * y]);
}

const red = ([r, g, b]) => r > 200 && g < 90 && b < 90;
const strokes = (page) => page.evaluate(() => window.__studio.session.state.painting.paint.strokes);
const row = (page) => page.evaluate(() => window.__studio.session.selection.row);

test("a press on a stroke selects its group; its drag moves the paint under the pointer as it goes, and is one Undo step", async ({ page }) => {
  const problems = await open(page);
  // Another stroke that stays where it is: it is not drawn again while the other one moves.
  await paintStroke(page, [[0.6, 0.25], [0.65, 0.25], [0.7, 0.25]]);
  await paintStroke(page, [[0.35, 0.25], [0.4, 0.25], [0.45, 0.25]]);
  const before = await strokes(page);
  const other = `paint_group:${before[0].actionGroupId}`;
  const otherRevision = () => page.evaluate((id) => window.__studio.paint().layers().find((layer) => layer.id === id).revision, other);
  const otherBefore = await otherRevision();
  expect(red(await pixel(page, 0.4, 0.25))).toBe(true);
  // Over the stroke the cursor is the object's arrow.
  await page.mouse.move(...(await at(page, 0.4, 0.25)));
  await page.waitForTimeout(100);
  await expect(page.locator("[data-stage-canvas]")).toHaveCSS("cursor", "default");

  await page.mouse.down();
  await page.mouse.move(...(await at(page, 0.4, 0.35)), { steps: 10 });
  await page.waitForTimeout(250);
  // The paint follows the pointer before it is let go, and no step is taken yet.
  expect(red(await pixel(page, 0.4, 0.35))).toBe(true);
  expect(red(await pixel(page, 0.4, 0.25))).toBe(false);
  expect(await otherRevision()).toBe(otherBefore);
  expect(red(await pixel(page, 0.65, 0.25))).toBe(true);
  await page.mouse.up();
  await page.waitForTimeout(250);

  expect(await row(page)).toBe(`paint_group:${before[1].actionGroupId}`);
  const moved = await strokes(page);
  expect(moved[1].geometry.processedPoints[0].v).toBeGreaterThan(before[1].geometry.processedPoints[0].v + 0.02);
  expect(moved[1].size).toBe(before[1].size);
  expect(moved[0]).toEqual(before[0]);
  // The bar is the paint group's, and the Timeline's Paint row shows selected.
  await expect(page.locator('[data-kind="paint"] [data-bar-name]')).toHaveText("Paint");
  await expect(page.locator('[data-kind="paint"] [data-bar]')).toHaveCount(4);
  await expect(page.locator('[data-head="painting"]')).toHaveClass(/is-selected/);

  await page.locator('[data-tool="undo"]').click();
  await page.waitForTimeout(300);
  expect(await strokes(page)).toEqual(before);
  expect(red(await pixel(page, 0.4, 0.25))).toBe(true);
  expect(problems).toEqual([]);
});

test("Escape during a paint group's drag puts it back, with no step", async ({ page }) => {
  const problems = await open(page);
  await paintStroke(page, [[0.35, 0.25], [0.4, 0.25], [0.45, 0.25]]);
  const before = await strokes(page);
  await page.mouse.move(...(await at(page, 0.4, 0.25)));
  await page.mouse.down();
  await page.mouse.move(...(await at(page, 0.3, 0.35)), { steps: 10 });
  await page.waitForTimeout(150);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(250);
  expect(await strokes(page)).toEqual(before);
  expect(red(await pixel(page, 0.4, 0.25))).toBe(true);
  await page.mouse.up();
  await page.waitForTimeout(150);
  expect(await strokes(page)).toEqual(before);
  // The one step is the stroke's: Undo takes the stroke itself.
  await page.locator('[data-tool="undo"]').click();
  await page.waitForTimeout(250);
  expect(await strokes(page)).toEqual([]);
  expect(problems).toEqual([]);
});

test("over the sky image the stroke in front is hit first; Send to back puts it behind, and the sky image is hit", async ({ page }) => {
  const problems = await open(page);
  // The sky image straight ahead is green.
  expect((await pixel(page, 0.5, 0.5))[1]).toBeGreaterThan(150);
  await paintStroke(page, [[0.47, 0.5], [0.5, 0.5], [0.53, 0.5]]);
  expect(red(await pixel(page, 0.5, 0.5))).toBe(true);
  await page.mouse.click(...(await at(page, 0.5, 0.5)));
  await page.waitForTimeout(150);
  expect(await row(page)).toMatch(/^paint_group:/);
  await page.locator('[data-bar="back"]').click();
  await page.waitForTimeout(300);
  const state = await page.evaluate(() => window.__studio.session.state);
  expect(state.painting.groups[0].z_index).toBe(0);
  expect(state.stickers[0].z_index).toBe(1);
  const behind = await pixel(page, 0.5, 0.5);
  expect(red(behind)).toBe(false);
  expect(behind[1]).toBeGreaterThan(150);
  await page.mouse.click(...(await at(page, 0.5, 0.5)));
  await page.waitForTimeout(150);
  expect(await row(page)).toBe("sticker_1");
  expect(problems).toEqual([]);
});

test("a World object in front of the paint is hit first", async ({ page }) => {
  const problems = await open(page);
  // The blue board below the sky image: the first row of it down the middle.
  let boardY = null;
  for (let y = 0.55; y < 0.98; y += 0.01) {
    const [r, , b] = await pixel(page, 0.5, y);
    if (b > 170 && r < 110) {
      boardY = y + 0.02;
      break;
    }
  }
  expect(boardY).not.toBeNull();
  await paintStroke(page, [[0.46, boardY], [0.5, boardY], [0.54, boardY]]);
  await page.mouse.click(...(await at(page, 0.5, boardY)));
  await page.waitForTimeout(150);
  expect(await row(page)).toBe("sticker_2");
  expect(problems).toEqual([]);
});

test("a locked paint group is selected but does not move", async ({ page }) => {
  const problems = await open(page);
  await paintStroke(page, [[0.35, 0.25], [0.4, 0.25], [0.45, 0.25]]);
  await page.mouse.click(...(await at(page, 0.4, 0.25)));
  await page.waitForTimeout(150);
  await page.locator('[data-bar="lock"]').click();
  await page.waitForTimeout(150);
  await expect(page.locator('[data-bar="back"]')).toBeDisabled();
  const before = await strokes(page);
  await page.mouse.click(...(await at(page, 0.6, 0.7)));
  await page.waitForTimeout(150);
  expect(await row(page)).toBeNull();
  await page.mouse.move(...(await at(page, 0.4, 0.25)));
  await page.mouse.down();
  await page.mouse.move(...(await at(page, 0.4, 0.4)), { steps: 10 });
  await page.mouse.up();
  await page.waitForTimeout(200);
  expect(await row(page)).toMatch(/^paint_group:/);
  expect(await strokes(page)).toEqual(before);
  expect(problems).toEqual([]);
});

test("a paint group's bar fits its fixed name Paint (docs/design.md \"下の中央のバーの名前の欄\")", async ({ page }) => {
  const problems = await open(page);
  await paintStroke(page, [[0.4, 0.4], [0.55, 0.45]]);
  await page.mouse.click(...(await at(page, 0.475, 0.425)));
  await expect.poll(() => row(page)).toMatch(/^paint_group:/);
  const name = await page.locator(".pano-studio-at-bar .pano-studio-bar-name").evaluate((el) => ({ width: el.getBoundingClientRect().width, text: el.scrollWidth, name: el.textContent }));
  expect(name.name).toBe("Paint");
  expect(name.width).toBeLessThan(60);
  expect(Math.abs(name.width - name.text)).toBeLessThanOrEqual(1);
  expect(problems).toEqual([]);
});
