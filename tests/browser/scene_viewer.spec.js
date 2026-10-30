import { expect, test } from "@playwright/test";

// docs/preview-node.md "`PANO_SCENE` を見る": the Preview's viewer draws a Scene through the one shared on-node view,
// and keeps drawing it after the view moves in 6DoF.

// Fails on any console error, page error, renderer crash, or lost WebGL context while the page runs.
function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

test("two Previews draw a Scene through one WebGL context, and it still draws after the view moves in 6DoF", async ({ page }, testInfo) => {
  const problems = watch(page);
  await page.goto("/tests/browser/pages/scene_viewer.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 45_000 }).catch(() => {});
  const check = problems.some((p) => p.startsWith("crash")) ? null : await page.evaluate(() => window.__check);
  if (check?.renderer) {
    testInfo.annotations.push({ type: "renderer", description: check.renderer });
    console.log(`renderer: ${check.renderer}`);
  }
  expect(problems).toEqual([]);
  expect(check.error).toBeNull();
  expect(check.done).toBe(true);
  expect(check.contextLost).toBe(false);
  expect(check.contexts).toBe(1);
  expect(check.stats.sceneItems.loaded).toBe(1);
  expect(check.firstNonEmpty).toBe(true);
  expect(check.moved.mode).toBe("6dof");
  expect(check.moved.position).not.toEqual([0, 0, 0]);
  expect(check.movedNonEmpty).toBe(true);
  // The other Preview keeps its own view at the origin and draws through the same context.
  expect(check.secondPosition).toEqual([0, 0, 0]);
  expect(check.secondNonEmpty).toBe(true);
  // Each Preview draws the SPLAT through a Spark renderer of its own, on a layer of its own, last updated for its own
  // camera: the moved one's and the other's at the origin.
  const sparks = check.stats.sparks;
  expect(sparks.length).toBe(2);
  expect(new Set(sparks.map((spark) => spark.layer)).size).toBe(2);
  sparks[0].camera.position.forEach((value, axis) => expect(value).toBeCloseTo(check.moved.position[axis], 2));
  expect(sparks[1].camera.position).toEqual([0, 0, 0]);
});
