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
  // The view kept drawing while the camera turned: the page ends the turn only after TURN_DRAWS draws (not after a
  // fixed time), so a count short of it means the turn gave up at its time limit with the draw loop stalled.
  expect(check.turnDraws).toBeGreaterThanOrEqual(check.turnDrawsWanted);
  // Spark sorted the splats again while the camera turned: its raw upload of the order ran.
  expect(check.turnSorts).toBeGreaterThan(0);
  // The VIDEO kept playing (and looping) to the end of the turn, so its frames were uploaded as textures too.
  expect(check.videoPaused).toBe(false);
  expect(check.videoFrames).toBeGreaterThan(0);
  expect(check.videoGap).toBeLessThan(1000);
  expect(check.nonEmpty).toBe(true);
});

// docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド": the grid draws from its depth and video, the
// quads with a corner of depth 0 are not drawn, and a pick lands on the drawn surface.
test("a DA3 mono depth grid draws its plane with a hole where the depth is 0, and is picked on its surface", async ({ page }, testInfo) => {
  const problems = watch(page);
  await page.goto("/tests/browser/pages/depth_grid.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 45_000 }).catch(() => {});
  const check = problems.some((p) => p.startsWith("crash")) ? null : await page.evaluate(() => window.__check);
  if (check?.renderer) {
    testInfo.annotations.push({ type: "renderer", description: check.renderer });
    console.log(`renderer: ${check.renderer}`);
  }
  if (check) console.log(`check: ${JSON.stringify({ inside: check.inside, hole: check.hole, pick: check.pick, sceneItems: check.stats?.sceneItems })}`);
  expect(problems).toEqual([]);
  expect(check.error).toBeNull();
  expect(check.done).toBe(true);
  expect(check.contextLost).toBe(false);
  expect(check.stats.sceneItems.loaded).toBe(1);
  // Drawn (opaque) on the plane, nothing in the hole.
  expect(check.inside[3]).toBeGreaterThan(250);
  expect(check.hole[3]).toBeLessThan(5);
  expect(check.pick).not.toBeNull();
  expect(Math.abs(check.pick[2] + 2)).toBeLessThan(0.02);
  // The image's top is drawn at the top, from a playing VIDEO, a still canvas and an ImageBitmap alike.
  for (const name of ["video", "canvas", "bitmap"]) {
    const { top, bottom } = check.orientation[name];
    expect(top[0], name).toBeGreaterThan(top[2] + 100);
    expect(bottom[2], name).toBeGreaterThan(bottom[0] + 100);
  }
  // A playing VIDEO and its still draw the same color (a VideoTexture is decoded from sRGB in the shader).
  for (let channel = 0; channel < 3; channel += 1) expect(Math.abs(check.tone.video[channel] - check.tone.still[channel]), `channel ${channel}`).toBeLessThan(8);
  // Across a magnified edge the VIDEO blends in linear space as the still does.
  const edgeGap = Math.max(...check.edge.video.map((value, index) => Math.abs(value - check.edge.still[index])));
  expect(edgeGap).toBeLessThan(8);
  // The colors are one texture per input, let go when the input no longer draws.
  expect(check.colorTextures).toBe(1);
  expect(check.colorTexturesAfter).toBe(0);
});
