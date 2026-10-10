import { expect, test } from "@playwright/test";

// docs/threejs-spark-integration.md "Camera から見た空間の表示" (ADR 0042): a sky Sticker of a lens shows its image past
// 90° off its axis, a world Sticker's lens is a sphere patch drawn and picked where its image is, and a 180 background
// keeps to its half under paint that covers the sphere.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  return problems;
}

const red = ([r, g, , a]) => r > 200 && g < 60 && a > 200;
const green = ([r, g, , a]) => g > 200 && r < 60 && a > 200;
const empty = ([, , , a]) => a === 0;

test("lens Stickers draw and pick by their lens, and a 180 background keeps to its half", async ({ page }) => {
  const problems = watch(page);
  await page.goto("/tests/browser/pages/lens_stickers.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 45_000 }).catch(() => {});
  const check = await page.evaluate(() => window.__check);
  console.log(`check: ${JSON.stringify(check)}`);
  expect(problems).toEqual([]);
  expect(check.error).toBeNull();
  // The sky Sticker over 200°: its right half 95° to the right, its left half to the left, nothing past 100°.
  for (const views of [check.sky, check.unwrap]) {
    expect(green(views.right95)).toBe(true);
    expect(red(views.left95)).toBe(true);
    expect(empty(views.right105)).toBe(true);
  }
  // The patch over 220° around its lens's center: seen and picked ahead and 100° to either side, on its sphere.
  for (const [name, color] of [["ahead", null], ["right100", green], ["left100", red]]) {
    const hit = check.patch[name];
    if (color) expect(color(hit.color)).toBe(true);
    expect(hit.sticker).toBe("patch");
    expect(Math.abs(hit.distance - check.patch.radius)).toBeLessThan(check.patch.radius * 0.01);
  }
  // Past 110° it is neither drawn nor picked.
  expect(empty(check.patch.right125.color)).toBe(true);
  expect(check.patch.right125.sticker).toBeNull();
  // The 180 background ahead; behind, only the paint.
  expect(check.coverage.ahead.slice(0, 3)).toEqual([0, 0, 255]);
  expect(check.coverage.behind.slice(0, 3)).toEqual([255, 255, 0]);
});
