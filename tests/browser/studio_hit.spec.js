import { expect, test } from "@playwright/test";

// A temporary dev comparison (docs/space-and-view.md "比べるための仮の設定"): the modes of finding the World object
// under the pointer (web_src/studio/hit_test.js) on tests/browser/pages/studio_hit.html, in a real browser engine. The
// 3D file is two small cubes at opposite corners of its box, so the middle of its box is empty. In every mode a hover
// that shows an object (the cursor) and a click that selects agree, except today's ("current"), where the hover goes
// by the box and the click by the pixels.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, testInfo, mode, heavy = false) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/studio_hit.html?mode=${mode}${heavy ? "&heavy=1" : ""}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  const renderer = await page.evaluate(() => window.__studio.rendererOf());
  testInfo.annotations.push({ type: "renderer", description: String(renderer) });
  console.log(`renderer: ${renderer}`);
  // The GLB has loaded and drawn: a click on a cube selects it in every mode.
  const cube = await page.evaluate(() => window.__studio.at(window.__studio.cubes[0]));
  await expect(async () => {
    await page.mouse.click(cube.x, cube.y);
    expect(await page.evaluate(() => window.__studio.session.selection.row)).toBe("model");
  }).toPass({ timeout: 30_000 });
  return problems;
}

// Whether the hover at `point` shows an object (the stage's cursor is the object's, not the look cursor), after a few
// frames (the "pixels" hover's pick is read back without waiting). A click on nothing first lets the selection go, so
// no gizmo shows over the box.
async function hoverShows(page, point, empty) {
  await page.mouse.click(empty.x, empty.y);
  await page.mouse.move(point.x, point.y);
  await page.mouse.move(point.x + 1, point.y);
  await page.waitForTimeout(150);
  return (await page.evaluate(() => window.__studio.cursor())) === "default";
}

// Whether a click at `point` selects the model (from nothing selected).
async function clickSelects(page, point, empty) {
  await page.mouse.click(empty.x, empty.y);
  expect(await page.evaluate(() => window.__studio.session.selection.row)).toBeNull();
  await page.mouse.click(point.x + 1, point.y);
  return (await page.evaluate(() => window.__studio.session.selection.row)) === "model";
}

const WANT = {
  // [hover shows, click selects] at the empty middle of the box, on a cube, and outside the box.
  current: { middle: [true, false], cube: [true, true], outside: [false, false] },
  box: { middle: [true, true], cube: [true, true], outside: [false, false] },
  pixels: { middle: [false, false], cube: [true, true], outside: [false, false] },
  coarse: { middle: [false, false], cube: [true, true], outside: [false, false] },
};

for (const [mode, want] of Object.entries(WANT)) {
  test(`hit test "${mode}": the empty middle of the box ${want.middle[1] ? "selects" : "does not select"}; hover and click ${mode === "current" ? "disagree there (today's)" : "agree"}`, async ({ page }, testInfo) => {
    const problems = await open(page, testInfo, mode);
    const points = await page.evaluate(() => {
      const studio = window.__studio;
      return { middle: studio.at([0, 0, 0]), cube: studio.at(studio.cubes[1]), outside: studio.at([3, 0, 0]) };
    });
    for (const [name, point] of Object.entries(points)) {
      const shows = await hoverShows(page, point, points.outside);
      const selects = await clickSelects(page, point, points.outside);
      expect([shows, selects], `${name}: [hover shows, click selects]`).toEqual(want[name]);
    }
    expect(problems).toEqual([]);
  });
}

// The cost of each mode per pointer move, logged for the report (not a limit): a light page and one with about 480k
// triangles.
test("hit test: the cost of each mode per pointer move (logged)", async ({ page }, testInfo) => {
  test.setTimeout(240_000);
  for (const heavy of [false, true]) {
    for (const mode of Object.keys(WANT)) {
      const problems = await open(page, testInfo, mode, heavy);
      const cost = await page.evaluate(() => window.__studio.measure(400));
      if (mode === "coarse") console.log(`hit-cost grid-build heavy=${heavy} ${(await page.evaluate(() => window.__studio.gridBuildMs())).toFixed(1)}ms`);
      const show = (value) => (value === null ? "-" : value.toFixed(3));
      console.log(`hit-cost mode=${cost.mode} heavy=${cost.heavy} first=${show(cost.firstMs)}ms hover=${show(cost.hoverMs)}ms press=${show(cost.pressMs)}ms pixelsHoverDraw=${show(cost.asyncDrawMs)}ms pixelsHoverRead=${show(cost.asyncReadMs)}ms`);
      expect(problems).toEqual([]);
    }
  }
});
