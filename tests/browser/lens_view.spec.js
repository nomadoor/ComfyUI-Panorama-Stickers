import { expect, test } from "@playwright/test";

// docs/threejs-spark-integration.md "Camera から見た空間の表示" (ADR 0042): the lens pass draws each pixel along
// pano_lens.js's ray, through the pinhole with overscan or the cube, and bg_color past 180° off the axis.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

test("a lens Camera's image follows its rays through the pinhole and the cube, with bg_color past 180 degrees", async ({ page }, testInfo) => {
  const problems = watch(page);
  await page.goto("/tests/browser/pages/lens_view.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 45_000 }).catch(() => {});
  const check = await page.evaluate(() => window.__check);
  if (check?.renderer) testInfo.annotations.push({ type: "renderer", description: check.renderer });
  console.log(`check: ${JSON.stringify(check?.cases)}`);
  expect(problems).toEqual([]);
  expect(check.error).toBeNull();
  expect(check.contextLost).toBe(false);
  expect(check.cases.map((item) => item.kind)).toEqual(["pinhole", "pinhole", "cube"]);
  for (const item of check.cases) {
    expect(item.compared).toBeGreaterThan(5000);
    // Nearest pixel of a resampled image of smooth bands: about 1.7 levels on the rays (SwiftShader); rays 3% off
    // in f are 2.5 to 3.9.
    expect(item.mean).toBeLessThan(2.2);
    expect(item.pastBg).toBe(item.past);
  }
  // At 300° the fisheye's corners pass 180°.
  expect(check.cases[2].past).toBeGreaterThan(0);
  // A turn of the Camera alone draws only the pass (one draw, against the faces' Sky and the pass), and the same
  // picture as a fresh draw.
  // Two owners drawing different lenses in turn keep their own faces.
  for (const owner of ["a", "b"]) {
    expect(check.cache[owner].reusedDraws).toBe(1);
    expect(check.cache[owner].freshDraws).toBeGreaterThan(check.cache[owner].reusedDraws);
    expect(check.cache[owner].different).toBe(0);
  }
  // The SPLAT through the cube draws, with a Spark renderer per face, and the hide lets them all go.
  expect(check.splat.loaded).toBe(true);
  expect(check.splat.centerAlpha).toBeGreaterThan(0);
  expect(check.splat.renderers).toBe(6);
  expect(check.splat.afterHide).toBe(0);
});
