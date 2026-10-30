import { expect, test } from "@playwright/test";

// docs/editor-architecture.md "Paint layers" and docs/threejs-spark-integration.md "レイヤのテクスチャの共有": a
// stroke step uploads only the rectangles it painted (uploadTextureRegions), and the view shows the very bytes a
// whole upload shows, for a brush (across the seam too, and fast), a rotated chisel, the mask pen and the paint
// eraser, the eraser over many groups, and a dragged group. After the first draw no canvas is uploaded whole.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

test("a paint stroke uploads only the regions it painted, with the pixels of whole uploads", async ({ page }, testInfo) => {
  const problems = watch(page);
  await page.goto("/tests/browser/pages/paint_regions.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 45_000 }).catch(() => {});
  const check = await page.evaluate(() => window.__check);
  if (check?.renderer) testInfo.annotations.push({ type: "renderer", description: check.renderer });
  console.log(`check: ${JSON.stringify(check?.cases)}`);
  expect(problems).toEqual([]);
  expect(check.error).toBeNull();
  expect(check.contextLost).toBe(false);
  expect(check.cases.map((item) => item.name)).toEqual([
    "brush", "brush across the seam", "rotated chisel", "mask pen", "paint eraser", "fast brush", "eraser over many groups", "dragged group",
  ]);
  for (const item of check.cases) {
    expect(item.glErrors).toBe(0);
    expect(item.differentBytes).toBe(0);
    // The stroke showed, through region uploads, and nothing was uploaded whole.
    expect(item.painted).toBeGreaterThan(0);
    expect(item.regions).toBeGreaterThan(2);
    expect(item.whole).toBe(0);
  }
  // The view without `changed` uploads whole.
  expect(check.wholeRegions).toBe(0);
});
