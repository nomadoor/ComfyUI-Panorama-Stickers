import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "@playwright/test";

// docs/space-and-view.md "地面のグリッド", docs/threejs-spark-integration.md "新しい UI のステージの描画": the ground grid
// looks the same through every path that draws it, and the World's objects (a SPLAT here) draw over it.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

test.setTimeout(120_000);

test("the ground grid looks the same through a lens and the live ERP, and an opaque SPLAT hides it", async ({ page }, testInfo) => {
  const problems = watch(page);
  await page.goto("/tests/browser/pages/ground_grid.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 100_000 }).catch(() => {});
  const check = await page.evaluate(() => window.__check);
  if (check?.renderer) testInfo.annotations.push({ type: "renderer", description: check.renderer });
  console.log(`lens: ${JSON.stringify(check?.lens)}`);
  console.log(`liveErp: ${JSON.stringify(check?.liveErp)}`);
  console.log(`faces: ${JSON.stringify(check?.faces)}`);
  console.log(`splat: ${JSON.stringify(check?.splat)}`);
  // GRID_SHOTS=<dir> saves the pictures to look at (GRID_SHOTS_TAG=<tag> adds -<tag> to their names).
  if (process.env.GRID_SHOTS && check?.shots) {
    mkdirSync(process.env.GRID_SHOTS, { recursive: true });
    for (const [name, url] of Object.entries(check.shots)) {
      writeFileSync(join(process.env.GRID_SHOTS, `grid-${name}${process.env.GRID_SHOTS_TAG ? `-${process.env.GRID_SHOTS_TAG}` : ""}.png`), Buffer.from(url.split(",")[1], "base64"));
    }
  }
  expect(problems).toEqual([]);
  expect(check.error).toBeNull();
  expect(check.contextLost).toBe(false);
  for (const row of check.lens) {
    // On the canvas the line blends over the Sky in sRGB values: 0.22 white over the Sky's level.
    expect(Math.abs(row.k1 - row.expected)).toBeLessThanOrEqual(2);
    // Through the lens faces, the same within a few levels.
    expect(Math.abs(row["k0.99"] - row.k1)).toBeLessThanOrEqual(2);
    expect(Math.abs(row["k0.5"] - row.k1)).toBeLessThanOrEqual(2);
  }
  for (const row of check.liveErp) expect(Math.abs(row.top - row.expected)).toBeLessThanOrEqual(2);
  // A mesh, the clear color and a SPLAT through the pinhole and the cube come out as without a lens.
  expect(check.faces.map((row) => row.name)).toEqual(["mesh", "clear", "splat"]);
  for (const row of check.faces) {
    expect([row["kind0.9"], row.kind0]).toEqual(["pinhole", "cube"]);
    for (const key of ["k0.9", "k0"]) row[key].forEach((value, channel) => expect(Math.abs(value - row.k1[channel])).toBeLessThanOrEqual(2));
  }
  // The ball's middle shows no grid from any place.
  expect(check.splat.length).toBe(5);
  for (const row of check.splat) expect(row.most).toBeLessThanOrEqual(2);
});

