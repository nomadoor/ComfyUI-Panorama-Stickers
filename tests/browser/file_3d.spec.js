import { expect, test } from "@playwright/test";

// docs/threejs-spark-integration.md: a 3D file Sticker draws in the editor's view as the space view draws it. A smoke
// check that holds on any renderer; the match with the node's output is the milestone tool tools/parity_file_3d.mjs.

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

async function run(page, testInfo, query = "") {
  const problems = watch(page);
  await page.goto(`/tests/browser/pages/file_3d.html${query}`);
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 45_000 }).catch(() => {});
  const check = problems.some((p) => p.startsWith("crash")) ? null : await page.evaluate(() => window.__check);
  if (check?.renderer) {
    testInfo.annotations.push({ type: "renderer", description: check.renderer });
    console.log(`renderer: ${check.renderer}`);
  }
  if (check) console.log(`check: ${JSON.stringify({ top: check.top, bottom: check.bottom, sceneItems: check.stats?.sceneItems })}`);
  expect(problems).toEqual([]);
  expect(check.error).toBeNull();
  expect(check.done).toBe(true);
  expect(check.contextLost).toBe(false);
  expect(check.stats.sceneItems.loaded).toBe(1);
  expect(check.nonEmpty).toBe(true);
  // An upstream Scene's item is picked as the node's own, on its surface: the box's top, 0.5 above its center.
  expect(check.upstreamPick.sticker).toBe("upstream:a:sticker_1");
  expect(check.upstreamPick.point[1]).toBeCloseTo(0.5, 2);
  return check;
}

test("a lit 3D file Sticker draws under the default lights, its face toward the lights brighter than the one away", async ({ page }, testInfo) => {
  const check = await run(page, testInfo);
  // The top takes the two upper directional lights (2.4 and 1.5 at 45°) and the ambient light, the bottom only the
  // 0.6 light from below and the ambient light.
  expect(check.top).toBeGreaterThan(check.bottom * 1.15);
});

test("the same box marked unlit draws its faces alike, without light", async ({ page }, testInfo) => {
  const check = await run(page, testInfo, "?unlit=1");
  expect(Math.abs(check.top - check.bottom)).toBeLessThan(2);
});
