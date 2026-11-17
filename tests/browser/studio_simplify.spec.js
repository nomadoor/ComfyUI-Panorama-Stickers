import { expect, test } from "@playwright/test";

// Simplify on the Timeline's bar (docs/timeline-ui.md "Simplify"), on tests/browser/pages/studio_path_line.html?dense=1:
// off with its reason until three Keyframes of one row are selected; pressed, it removes Keyframes down to the default
// count and brings out the slider (left fewer, right more) between its fixed ends on one gray fill;
// Enter keeps it as one Undo step, Escape puts it back.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  return problems;
}

async function open(page) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/tests/browser/pages/studio_path_line.html?dense=1");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  return problems;
}

const count = (page) => page.evaluate(() => window.__studio.keys().length);

// A box from the empty area below the rows up over the Camera row's pins selects them all.
async function boxAll(page) {
  const pins = page.locator('[data-track="camera"] .pano-studio-tl-key');
  const first = await pins.first().boundingBox();
  const last = await pins.last().boundingBox();
  const fill = await page.locator('[data-tl="fill"]').boundingBox();
  await page.mouse.move(last.x + last.width + 10, fill.y + 10);
  await page.mouse.down();
  await page.mouse.move(first.x - 6, first.y + first.height / 2, { steps: 8 });
  await page.mouse.up();
}

test("Simplify reduces dense Keyframes to the default count, its slider changes it, Enter keeps one Undo step", async ({ page }) => {
  const problems = await open(page);
  const button = page.locator('[data-tl="simplify"]');
  await expect(button).toHaveAttribute("aria-disabled", "true");
  await expect(button).toHaveAttribute("data-tip", "Simplify · Select 3+ Keyframes");
  const before = await count(page);
  expect(before).toBe(24);
  // A box over the Camera row's pins selects them all.
  await boxAll(page);
  await expect(button).not.toHaveAttribute("aria-disabled", "true");
  await expect(button).toHaveAttribute("data-tip", "Simplify Keyframes");
  await expect(page.locator('[data-tl="simplify-adjust"]')).toHaveCount(0);
  await button.click();
  // The ends: the fewest it can keep (the stretch's two ends) and the count selected; the slider at the count kept.
  await expect(page.locator('[data-tl="simplify-least"]')).toHaveText("2");
  await expect(page.locator('[data-tl="simplify-total"]')).toHaveText("24");
  const reduced = await count(page);
  const shown = page.locator('[data-tl="simplify-adjust"] [role="slider"]');
  await expect(shown).toHaveAttribute("aria-valuenow", String(reduced));
  await expect(page.locator('[data-tl="simplify-group"]')).toHaveClass(/is-adjusting/);
  // The slider is drawn as the inspector's: the part left of the knob is filled.
  await expect(page.locator('[data-tl="simplify-adjust"] .pano-studio-slider-fill')).toHaveCount(1);
  expect(reduced).toBeLessThan(12);
  // The kept Keyframes stay at their frames.
  const frames = await page.evaluate(() => window.__studio.keys().map((key) => key.frame));
  expect(frames.every((frame) => frame % 2 === 0)).toBe(true);
  expect(frames[0]).toBe(0);
  expect(frames.at(-1)).toBe(46);
  // The faded pins show what goes.
  await expect(page.locator('[data-part="key-going"]')).toHaveCount(24 - reduced);
  // The slider keeps one more (right is more), made again from the original.
  const slider = page.locator('[data-tl="simplify-adjust"] [role="slider"]');
  await slider.focus();
  await slider.press("ArrowRight");
  await expect(shown).toHaveAttribute("aria-valuenow", String(reduced + 1));
  expect(await count(page)).toBe(reduced + 1);
  await slider.press("ArrowLeft");
  await expect(shown).toHaveAttribute("aria-valuenow", String(reduced));
  await page.keyboard.press("Enter");
  await expect(page.locator('[data-tl="simplify-adjust"]')).toHaveCount(0);
  expect(await count(page)).toBe(reduced);
  await expect(page.locator(".pano-studio-notice")).toContainText(`24 Keyframes → ${reduced}`);
  // One Undo step puts all 24 back.
  await page.keyboard.press("Control+z");
  await expect.poll(() => count(page)).toBe(24);
  expect(problems).toEqual([]);
});

test("Escape while adjusting puts every Keyframe back", async ({ page }) => {
  const problems = await open(page);
  await boxAll(page);
  await page.locator('[data-tl="simplify"]').click();
  expect(await count(page)).toBeLessThan(24);
  await page.keyboard.press("Escape");
  await expect.poll(() => count(page)).toBe(24);
  expect(problems).toEqual([]);
});

test("the Simplify slider is as wide as its seat and a pointer drag on it changes the count", async ({ page }) => {
  const problems = await open(page);
  await boxAll(page);
  await page.locator('[data-tl="simplify"]').click();
  const shown = page.locator('[data-tl="simplify-adjust"] [role="slider"]');
  await expect(page.locator('[data-tl="simplify-total"]')).toHaveText("24");
  const reduced = await count(page);
  const track = await page.locator('[data-tl="simplify-adjust"] .pano-studio-slider').boundingBox();
  expect(track.width).toBeGreaterThan(60);
  // Right is more: a press at the track's right end keeps them all.
  await page.mouse.click(track.x + track.width - 1, track.y + track.height / 2);
  await expect(shown).toHaveAttribute("aria-valuenow", "24");
  expect(await count(page)).toBeGreaterThan(reduced);
  // The ends do not change, so the slider stayed where it was.
  expect((await page.locator('[data-tl="simplify-adjust"] .pano-studio-slider').boundingBox()).x).toBe(track.x);
  expect(problems).toEqual([]);
});

// docs/design.md "数字が揺れない表示": the frame text keeps its width, so Simplify does not move as the playhead does.
test("the playhead's digits do not move Simplify on the bar", async ({ page }) => {
  const problems = await open(page);
  const left = () => page.locator('[data-tl="constant-speed"]').boundingBox().then((box) => box.x);
  const ruler = await page.locator('[data-tl="ruler"]').boundingBox();
  await page.mouse.click(ruler.x + 2, ruler.y + ruler.height / 2);
  const atStart = await left();
  await page.mouse.click(ruler.x + ruler.width * 0.95, ruler.y + ruler.height / 2);
  await expect(page.locator(".pano-studio-tl-frame")).not.toHaveText(/^\d \//);
  expect(await left()).toBe(atStart);
  expect(problems).toEqual([]);
});
