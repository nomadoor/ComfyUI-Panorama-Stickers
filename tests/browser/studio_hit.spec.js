import { expect, test } from "@playwright/test";

// Finding the World object under the pointer (docs/space-and-view.md "ホバーの判定"; web_src/studio/hit_test.js) on
// tests/browser/pages/studio_hit.html, in a real browser engine. The 3D file is two small cubes at opposite corners of
// its box, so the middle of its box is empty: a hover that shows an object (the cursor) and a click that selects agree,
// and the empty middle does neither. The grid is built ahead in idle slices, so no pointer move builds it.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, testInfo, heavy = false) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/studio_hit.html${heavy ? "?heavy=1" : ""}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  const renderer = await page.evaluate(() => window.__studio.rendererOf());
  testInfo.annotations.push({ type: "renderer", description: String(renderer) });
  console.log(`renderer: ${renderer}`);
  return problems;
}

// Waits until the GLB has loaded and drawn: a click on a cube selects it.
async function loaded(page) {
  const cube = await page.evaluate(() => window.__studio.at(window.__studio.cubes[0]));
  await expect(async () => {
    await page.mouse.click(cube.x, cube.y);
    expect(await page.evaluate(() => window.__studio.session.selection.row)).toBe("model");
  }).toPass({ timeout: 30_000 });
}

// Whether the hover at `point` shows an object (the stage's cursor is the object's, not the look cursor). A click on
// nothing first lets the selection go, so no gizmo shows over the box.
async function hoverShows(page, point, empty) {
  await page.mouse.click(empty.x, empty.y);
  await page.mouse.move(point.x, point.y);
  await page.mouse.move(point.x + 1, point.y);
  return (await page.evaluate(() => window.__studio.cursor())) === "default";
}

// Whether a click at `point` selects the model (from nothing selected).
async function clickSelects(page, point, empty) {
  await page.mouse.click(empty.x, empty.y);
  expect(await page.evaluate(() => window.__studio.session.selection.row)).toBeNull();
  await page.mouse.click(point.x + 1, point.y);
  return (await page.evaluate(() => window.__studio.session.selection.row)) === "model";
}

test("the hover and the click agree: the empty middle of the box does neither, a cube both, outside neither", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  await loaded(page);
  const points = await page.evaluate(() => {
    const studio = window.__studio;
    return { middle: studio.at([0, 0, 0]), cube: studio.at(studio.cubes[1]), outside: studio.at([3, 0, 0]) };
  });
  const want = { middle: false, cube: true, outside: false };
  for (const [name, point] of Object.entries(points)) {
    // The grid is built in idle time after the load: until then the box answers, so wait for it at the middle.
    if (name === "middle") await expect.poll(() => hoverShows(page, point, points.outside), { timeout: 10_000 }).toBe(false);
    const shows = await hoverShows(page, point, points.outside);
    const selects = await clickSelects(page, point, points.outside);
    expect([shows, selects], `${name}: [hover shows, click selects]`).toEqual([want[name], want[name]]);
  }
  expect(problems).toEqual([]);
});

// About 480k triangles: the grid gets ready with no pointer move asking for it, and no pointer move takes long (the
// grid built on the first query, before this change, took 71-144 ms here).
test("a heavy 3D file: its grid is built ahead in idle slices; no pointer move builds it or takes long", async ({ page }, testInfo) => {
  test.setTimeout(120_000);
  const problems = await open(page, testInfo, true);
  const points = await page.evaluate(() => ({ middle: window.__studio.at([0, 0, 0]), cube: window.__studio.at(window.__studio.cubes[1]) }));
  const moves = [];
  const move = async (point) => {
    const result = await page.evaluate((at) => window.__studio.move(at), point);
    moves.push(result.ms);
    return result.cursor === "default" ? "object" : "none";
  };
  // Pointer moves over a cube until the GLB has loaded (its box or its grid answers), then over the empty middle until
  // its grid answers (nothing there).
  await expect.poll(() => move(points.cube), { timeout: 60_000, intervals: [20] }).toBe("object");
  const shown = Date.now();
  await expect.poll(() => move(points.middle), { timeout: 60_000, intervals: [20] }).toBe("none");
  const gridMs = Date.now() - shown;
  expect(await move(points.cube)).toBe("object");
  const longest = Math.max(...moves);
  console.log(`hit-heavy moves=${moves.length} longestMove=${longest.toFixed(2)}ms gridAfterShown<=${gridMs}ms`);
  expect(longest).toBeLessThan(30);
  // The building of the grid of this GLB, measured (logged for the report), its slices kept short, once the editor's
  // own frames (the 3D file's fade-in) have settled.
  await page.waitForTimeout(1500);
  const build = await page.evaluate(() => window.__studio.gridBuild());
  console.log(`hit-heavy grid atOnce=${build.allMs.toFixed(1)}ms ready=${build.readyMs.toFixed(1)}ms slices=${build.slices} longestSlice=${build.longestSlice.toFixed(2)}ms longestFrame=${build.longestFrame.toFixed(1)}ms frames=${build.frames}`);
  expect(build.same, "the grid built in slices is the grid built at once").toBe(true);
  expect(build.slices).toBeGreaterThan(1);
  expect(build.longestSlice).toBeLessThan(12);
  expect(problems).toEqual([]);
});
