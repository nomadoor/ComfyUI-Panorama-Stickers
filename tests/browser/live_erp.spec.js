import { expect, test } from "@playwright/test";

// The live ERP of Panorama mode (web_src/pano_live_erp.js; docs/threejs-spark-integration.md "Panorama モードの ERP の
// 表示") on tests/browser/pages/live_erp.html: the six World-aligned faces turned into an ERP point the same way as the
// output (pano_camera_math.js), and each change draws again only what it has to.

test("the live ERP's orientation matches the output's convention, and a turn draws the pass only", async ({ page }) => {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash"));
  await page.goto("/tests/browser/pages/live_erp.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 120_000 });
  const check = await page.evaluate(() => window.__check);
  console.log(`renderer: ${check.renderer}`);
  expect(check.error).toBeNull();
  expect(check.contextLost).toBeFalsy();

  // Every marker in range, within 1.5 px of where cameraBasis puts it (the prototype measured 0.87 px).
  const worst = Math.max(...check.orientation.map((row) => row.errorPx ?? Infinity));
  console.log(`orientation: ${check.orientation.length} markers, worst ${worst} px`);
  for (const row of check.orientation) expect(row.got, `${row.coverage} ${row.name} ${JSON.stringify(row.pose)}`).not.toBeNull();
  expect(worst).toBeLessThanOrEqual(1.5);
  // Both ranges and the splat cluster were checked.
  expect(new Set(check.orientation.map((row) => row.coverage))).toEqual(new Set([360, 180]));
  expect(check.orientation.some((row) => row.name === "splat")).toBe(true);

  const r = check.redraws;
  expect(r["nothing changed"]).toEqual({ faces: 0, passes: 0, sorts: 0, drew: { faces: false, pass: false } });
  expect(r["turn only"]).toEqual({ faces: 0, passes: 1, sorts: 0, drew: { faces: false, pass: true } });
  expect(r["same turn again"]).toEqual({ faces: 0, passes: 0, sorts: 0, drew: { faces: false, pass: false } });
  expect(r.position).toEqual({ faces: 1, passes: 1, sorts: 1, drew: { faces: true, pass: true } });
  expect(r["splats sorted"]).toEqual({ faces: 1, passes: 1, sorts: 0, drew: { faces: true, pass: true } });
  expect(r.content).toEqual({ faces: 1, passes: 1, sorts: 1, drew: { faces: true, pass: true } });
  expect(r.size).toEqual({ faces: 1, passes: 1, sorts: 0, drew: { faces: true, pass: true } });
  // Spark's sort told the page it was done; the renderer's own updates are back as they were after the faces.
  expect(check.dirtyCalls).toBeGreaterThan(0);
  expect(check.sparkAutoUpdate).toBe(true);
  expect(check.sparkTarget).toBeNull();
  // Nothing drawn: every face is the clear color (#070707), the first face (+X) too, which once came out #2e2e2e (the
  // clear value three.js had worked out for the canvas, cleared into the faces' sRGB target).
  for (const [face, rgb] of Object.entries(check.blank)) expect(rgb, face).toEqual([7, 7, 7]);
  console.log(`timing (ms): ${JSON.stringify(check.timing)} face ${check.faceSize}`);
  expect(problems).toEqual([]);
});
