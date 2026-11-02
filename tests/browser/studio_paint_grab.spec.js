import { expect, test } from "@playwright/test";

// The Cursor grabbing the paint in the new editor (docs/studio-ui.md "ペイントのまとまり"; web_src/studio/stage_objects.js,
// session.js, selection_bar.js) on tests/browser/pages/studio_paint_grab.html, in a real browser engine: a press on a
// stroke selects its group, its drag moves the paint under the pointer as it goes and is one Undo step; Escape puts it
// back; the order against a sky image follows the z order and Send to back; a World object in front is hit first; a
// locked group is selected but does not move; the rotate handle turns a stroke group and a raster object (Shift stops
// at 15°, Escape puts it back, Undo takes the turn in one step).

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, query = "") {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/studio_paint_grab.html${query}`);
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

// --- The rotate handle (docs/studio-ui.md "ペイントのまとまり" "回転のハンドル", "回す").

// The rotate handle of the selected paint group, found as the hover finds it: the first point straight up from (x, y)
// fractions of the stage where the stage's cursor is grab. Page px.
async function rotateHandle(page, x, y) {
  const box = await stageBox(page);
  for (let py = box.y + box.height * y; py > box.y; py -= 2) {
    await page.mouse.move(box.x + box.width * x, py);
    const cursor = await page.locator("[data-stage-canvas]").evaluate((el) => getComputedStyle(el).cursor);
    if (cursor === "grab") return [box.x + box.width * x, py - 4];
  }
  throw new Error("no rotate handle above the point");
}

// The page point of `point` turned by `deg` (clockwise on the screen) about `center`.
const turned = ([x, y], [cx, cy], deg) => {
  const rad = (deg * Math.PI) / 180;
  return [cx + (x - cx) * Math.cos(rad) - (y - cy) * Math.sin(rad), cy + (x - cx) * Math.sin(rad) + (y - cy) * Math.cos(rad)];
};

// The turn (degrees on the paint plane) that takes the stroke's first and last points from `before` to `after`.
const strokeTurn = (before, after) => {
  const angle = (stroke) => {
    const points = stroke.geometry.processedPoints;
    const [a, b] = [points[0], points[points.length - 1]];
    let du = b.u - a.u;
    du -= Math.round(du);
    return (Math.atan2(b.v - a.v, 2 * du) * 180) / Math.PI;
  };
  return angle(after) - angle(before);
};

test("the rotate handle turns a stroke group about its points' mean as it goes; Shift stops at 15°; Escape puts it back; Undo takes one step", async ({ page }) => {
  const problems = await open(page);
  await paintStroke(page, [[0.35, 0.3], [0.4, 0.3], [0.45, 0.3]]);
  await page.mouse.click(...(await at(page, 0.4, 0.3)));
  await page.waitForTimeout(150);
  expect(await row(page)).toMatch(/^paint_group:/);
  const before = await strokes(page);
  const handle = await rotateHandle(page, 0.4, 0.3);
  const center = await at(page, 0.4, 0.3);

  // A quarter turn clockwise: the stroke stands up, its middle where it was.
  await page.mouse.move(...handle);
  await page.mouse.down();
  await page.mouse.move(...turned(handle, center, 90), { steps: 12 });
  await page.waitForTimeout(250);
  expect(red(await pixel(page, 0.4, 0.3))).toBe(true);
  expect(red(await pixel(page, 0.35, 0.3))).toBe(false);
  await page.mouse.up();
  await page.waitForTimeout(250);
  const stood = await strokes(page);
  expect(Math.abs(strokeTurn(before[0], stood[0]) - 90)).toBeLessThan(12);
  expect(stood[0].size).toBe(before[0].size);

  await page.locator('[data-tool="undo"]').click();
  await page.waitForTimeout(300);
  expect(await strokes(page)).toEqual(before);

  // Shift: the turn stops at a multiple of 15°.
  await page.mouse.move(...handle);
  await page.mouse.down();
  await page.keyboard.down("Shift");
  await page.mouse.move(...turned(handle, center, 37), { steps: 8 });
  await page.mouse.up();
  await page.keyboard.up("Shift");
  await page.waitForTimeout(250);
  const snapped = strokeTurn(before[0], (await strokes(page))[0]);
  expect(Math.abs(snapped - 30)).toBeLessThan(1e-6);

  // Escape during a turn puts it back with no step.
  const kept = await strokes(page);
  const again = await rotateHandle(page, 0.4, 0.3);
  await page.mouse.move(...again);
  await page.mouse.down();
  await page.mouse.move(...turned(again, center, -60), { steps: 8 });
  await page.waitForTimeout(150);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(250);
  await page.mouse.up();
  expect(await strokes(page)).toEqual(kept);
  await page.locator('[data-tool="undo"]').click();
  await page.waitForTimeout(300);
  expect(await strokes(page)).toEqual(before);
  expect(problems).toEqual([]);
});

test("the rotate handle turns a raster object's rot_deg and the stage draws it turned; Shift stops at 15°; Undo takes one step", async ({ page }) => {
  const problems = await open(page, "?raster");
  const rasterAt = () => page.evaluate(() => window.__studio.session.state.painting.raster_objects[0].transform);
  // Its middle and a point beside it, inside its width but outside its height once it stands.
  let middleY = null;
  for (let y = 0.1; y < 0.5; y += 0.005) {
    if (red(await pixel(page, 0.5, y))) {
      const top = y;
      while (red(await pixel(page, 0.5, y))) y += 0.005;
      middleY = (top + y) / 2;
      break;
    }
  }
  expect(middleY).not.toBeNull();
  await page.mouse.click(...(await at(page, 0.5, middleY)));
  await page.waitForTimeout(150);
  expect(await row(page)).toBe("raster:r1");
  const handle = await rotateHandle(page, 0.5, middleY);
  const center = await at(page, 0.5, middleY);
  const above = [0.5, middleY - 0.06];
  const side = [0.54, middleY];
  expect(red(await pixel(page, ...above))).toBe(false);
  expect(red(await pixel(page, ...side))).toBe(true);

  await page.mouse.move(...handle);
  await page.mouse.down();
  await page.keyboard.down("Shift");
  await page.mouse.move(...turned(handle, center, 84), { steps: 12 });
  await page.waitForTimeout(250);
  // Drawn turned while it goes: it stands, above its middle and no longer beside it.
  expect(red(await pixel(page, ...above))).toBe(true);
  expect(red(await pixel(page, ...side))).toBe(false);
  await page.mouse.up();
  await page.keyboard.up("Shift");
  await page.waitForTimeout(250);
  expect((await rasterAt()).rot_deg).toBe(90);
  expect((await rasterAt()).scale).toBe(1);

  await page.locator('[data-tool="undo"]').click();
  await page.waitForTimeout(300);
  expect((await rasterAt()).rot_deg).toBe(0);
  expect(red(await pixel(page, ...side))).toBe(true);
  expect(problems).toEqual([]);
});
