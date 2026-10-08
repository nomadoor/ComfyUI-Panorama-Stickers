import { expect, test } from "@playwright/test";

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

test("a VIDEO background and a 3DGS sticker draw while the camera turns", async ({ page }, testInfo) => {
  const problems = watch(page);
  await page.goto("/tests/browser/pages/three_view.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 45_000 }).catch(() => {});
  const check = problems.some((p) => p.startsWith("crash")) ? null : await page.evaluate(() => window.__check);
  if (check?.renderer) {
    testInfo.annotations.push({ type: "renderer", description: check.renderer });
    console.log(`renderer: ${check.renderer}`);
  }
  if (check) {
    const { stats, ...counts } = check;
    console.log(`check: ${JSON.stringify({ ...counts, renderer: undefined, sceneItems: stats?.sceneItems })}`);
  }
  expect(problems).toEqual([]);
  expect(check.error).toBeNull();
  expect(check.done).toBe(true);
  expect(check.contextLost).toBe(false);
  expect(check.stats.sceneItems.loaded).toBe(1);
  expect(check.draws).toBeGreaterThan(30);
  // Spark sorted the splats again while the camera turned: its raw upload of the order ran.
  expect(check.turnSorts).toBeGreaterThan(0);
  // The VIDEO kept playing (and looping) to the end of the turn, so its frames were uploaded as textures too.
  expect(check.videoPaused).toBe(false);
  expect(check.videoFrames).toBeGreaterThan(0);
  expect(check.videoGap).toBeLessThan(1000);
  expect(check.nonEmpty).toBe(true);
});
