import { expect, test } from "@playwright/test";

// The new editor's tooltip (components/studio/StudioTooltip.vue, studio/tooltip.js) on
// tests/browser/pages/studio_editor.html: docs/studio-ui.md "ツールチップ". The bubble shows beside the control (not
// at the cursor), on its group's side, flips at the editor's edge, carries the shortcut as a hint, shows a disabled
// control's reason, hides on a press, and shows for the keyboard's focus. No new-UI control keeps a title.

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
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/tests/browser/pages/studio_editor.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  return problems;
}

const bubble = (page) => page.locator(".pano-studio-tip");
const shown = (page) => page.locator(".pano-studio-tip.is-shown");
const overlaps = (a, b) => a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;
const inside = (a, b) => a.x >= b.x && a.y >= b.y && a.x + a.width <= b.x + b.width && a.y + a.height <= b.y + b.height;

async function hover(page, locator) {
  await page.mouse.move(5, 5);
  await locator.hover();
}

test("a left-column button's bubble shows to its right after the delay, 8px away, with the shortcut as a hint", async ({ page }) => {
  const problems = await open(page);
  const undo = page.locator('[data-tool="undo"]');
  await hover(page, undo);
  // Not at once: the delay (400ms) first.
  await page.waitForTimeout(150);
  await expect(shown(page)).toHaveCount(0);
  await expect(shown(page)).toHaveCount(1, { timeout: 2000 });
  await expect(bubble(page)).toHaveAttribute("data-side", "right");
  await expect(bubble(page)).toHaveText(/^Undo\s*Ctrl\+Z$/);
  await expect(bubble(page).locator(".pano-studio-tip-keys")).toHaveText("Ctrl+Z");
  const tip = await bubble(page).boundingBox();
  const button = await undo.boundingBox();
  expect(overlaps(tip, button)).toBe(false);
  expect(Math.round(tip.x - (button.x + button.width))).toBe(8);
  // Centered on the button along its side.
  expect(Math.abs(tip.y + tip.height / 2 - (button.y + button.height / 2))).toBeLessThanOrEqual(1);
  // The pointer leaves: it hides at once.
  await page.mouse.move(640, 300);
  await expect(shown(page)).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("the knobs' bubbles go left, the bottom-right buttons' above; at the top it flips below; at the right edge it flips left", async ({ page }) => {
  await open(page);
  const editor = await page.locator(".pano-studio-editor").boundingBox();

  await hover(page, page.locator('[data-knob="orbit"]'));
  await expect(shown(page)).toHaveCount(1);
  await expect(bubble(page)).toHaveAttribute("data-side", "left");

  await hover(page, page.locator(".pano-studio-at-buttons button").first());
  await expect(shown(page)).toHaveCount(1);
  await expect(bubble(page)).toHaveAttribute("data-side", "top");

  // The inspector's ✕ prefers above, which leaves the editor at its top: below.
  const close = page.locator('[data-action="close"]');
  await hover(page, close);
  await expect(shown(page)).toHaveCount(1);
  await expect(bubble(page)).toHaveAttribute("data-side", "bottom");
  let tip = await bubble(page).boundingBox();
  expect(inside(tip, editor)).toBe(true);
  expect(overlaps(tip, await close.boundingBox())).toBe(false);

  // Asked for the right (data-tip-side), the ✕ at the right edge has no room there: left.
  await close.evaluate((element) => element.setAttribute("data-tip-side", "right"));
  await hover(page, close);
  await expect(shown(page)).toHaveCount(1);
  await expect(bubble(page)).toHaveAttribute("data-side", "left");
  tip = await bubble(page).boundingBox();
  expect(inside(tip, editor)).toBe(true);
  expect(overlaps(tip, await close.boundingBox())).toBe(false);
});

test("a disabled button shows its reason; in the Camera tab the column says why", async ({ page }) => {
  await open(page);
  const paint = page.locator('[data-tool="paint"]');
  await expect(paint).toHaveAttribute("aria-disabled", "true");
  await hover(page, paint);
  await expect(shown(page)).toHaveText("Paint · in development");

  await page.locator('.pano-studio-tabs [data-value="camera"]').click();
  await hover(page, page.locator('[data-tool="add"]'));
  await expect(shown(page)).toHaveText("Not available in the Camera view");
  await expect(bubble(page)).toHaveAttribute("data-side", "right");
});

test("a press hides it and nothing shows while the button is held or until the pointer re-enters", async ({ page }) => {
  await open(page);
  const grid = page.locator(".pano-studio-at-buttons button").last();
  await hover(page, grid);
  await expect(shown(page)).toHaveCount(1);
  const box = await grid.boundingBox();
  await page.mouse.down();
  await expect(shown(page)).toHaveCount(0);
  // Held and dragged over another control: nothing.
  const undo = await page.locator('[data-tool="undo"]').boundingBox();
  await page.mouse.move(undo.x + undo.width / 2, undo.y + undo.height / 2, { steps: 4 });
  await page.waitForTimeout(700);
  await expect(shown(page)).toHaveCount(0);
  await page.mouse.up();
  // Released on the same control it was pressed on: nothing until the pointer leaves and comes back.
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.up();
  await page.waitForTimeout(700);
  await expect(shown(page)).toHaveCount(0);
  await page.mouse.move(640, 300);
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await expect(shown(page)).toHaveCount(1);
});

test("the keyboard's focus shows it at once; a click's focus does not", async ({ page }) => {
  await open(page);
  const undo = page.locator('[data-tool="undo"]');
  // Focus that arrives while the pointer works the editor (after a press) shows nothing.
  await page.mouse.click(640, 300);
  await undo.focus();
  await page.waitForTimeout(600);
  await expect(shown(page)).toHaveCount(0);
  await page.keyboard.press("Tab");
  await page.keyboard.press("Shift+Tab");
  await expect(undo).toBeFocused();
  await expect(shown(page)).toHaveText(/^Undo/);
  // Another key hides it (Escape would close the editor here).
  await page.keyboard.press("Shift");
  await expect(shown(page)).toHaveCount(0);
});

test("no control of the new editor carries a title attribute", async ({ page }) => {
  await open(page);
  expect(await page.locator(".pano-studio [title]").count()).toBe(0);
  await page.locator('.pano-studio-tabs [data-value="camera"]').click();
  expect(await page.locator(".pano-studio [title]").count()).toBe(0);
  // The buttons keep their accessible names.
  await expect(page.locator('[data-tool="undo"]')).toHaveAttribute("aria-label", "Undo");
});
