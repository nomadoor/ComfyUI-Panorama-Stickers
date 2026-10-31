import { expect, test } from "@playwright/test";

// The Output window's line of the output's shape in the new editor (tests/browser/pages/studio_camera_wired.html, a real
// browser engine): docs/studio-ui.md "Output の小窓" (folded and open, both tabs, the node surface's line of the estimate,
// right-aligned with the fold button at its right end, the folded width following the line with the right end fixed,
// the open width kept whatever the mode, the height the picture's and the line's, the size's tooltip at the upper
// limit) and docs/design.md "Output の小窓の一行", "Camera タブの Output の小窓" (ADR 0051).

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function load(page, query = "aspect=16:9&mode=frame") {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/studio_camera_wired.html?${query}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  console.log(`renderer: ${await page.evaluate(() => window.__studio.rendererOf())}`);
  return problems;
}

const rectOf = (page, selector) => page.locator(selector).first().evaluate((el) => {
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height, right: r.right, bottom: r.bottom };
});
const line = (page) => page.locator("[data-output-line]");
const fold = (page) => page.locator('[data-action="output-fold"]');
const output = (page) => page.locator('[data-region="output"]');
const tab = (page, name) => page.locator('[role="tablist"] button', { hasText: name }).click();

// What the line reads, and where its parts are.
async function lineOf(page) {
  return page.locator('[data-region="output"]').evaluate((el) => {
    const box = (node) => {
      const r = node.getBoundingClientRect();
      return { x: r.left, y: r.top, width: r.width, height: r.height, right: r.right, bottom: r.bottom };
    };
    const pill = el.querySelector("[data-output-line]");
    return {
      mode: pill.querySelector("[data-output-mode]")?.dataset.outputMode ?? null,
      shot: pill.querySelector("[data-output-shot]").textContent,
      size: pill.querySelector("[data-output-size]").textContent,
      cap: pill.querySelector("[data-output-size]").dataset.tip ?? null,
      pill: box(pill),
      glyph: box(pill.querySelector("[data-output-mode]")),
      shotBox: box(pill.querySelector("[data-output-shot]")),
      sizeBox: box(pill.querySelector("[data-output-size]")),
      button: box(el.querySelector('[data-action="output-fold"]')),
      opacity: getComputedStyle(pill).opacity,
      buttonOpacity: getComputedStyle(el.querySelector('[data-action="output-fold"]')).opacity,
    };
  });
}

for (const [query, mode, shot, size] of [
  ["aspect=16:9&mode=frame", "frame", "Frame 16:9", "1928 × 1088"],
  ["aspect=16:9&mode=panorama", "panorama", "Panorama 360°", "2048 × 1024"],
]) {
  test(`the folded line shows the mode's glyph, its name and the size, right-aligned with the fold button at its right end (${mode})`, async ({ page }, testInfo) => {
    const problems = await load(page, query);
    await expect(output(page)).toHaveClass(/is-collapsed/);
    const stage = await rectOf(page, '[data-region="stage"]');
    const shown = await lineOf(page);
    expect(shown).toMatchObject({ mode, shot, size, cap: null });
    // The line is the folded pill: 32px high, its right end the stage's inset, the parts in order with 8px between.
    expect(shown.pill.height).toBe(32);
    expect(Math.round(stage.right - shown.pill.right)).toBe(16);
    expect(shown.glyph.width).toBe(20);
    expect(shown.glyph.height).toBe(10);
    expect(Math.round(shown.shotBox.x - shown.glyph.right)).toBe(8);
    expect(Math.round(shown.sizeBox.x - shown.shotBox.right)).toBe(8);
    expect(shown.button.x).toBeGreaterThanOrEqual(shown.sizeBox.right + 7);
    expect(shown.button.right).toBeLessThanOrEqual(shown.pill.right);
    // The folded window is as wide as its line.
    const region = await rectOf(page, '[data-region="output"]');
    expect(Math.abs(region.width - shown.pill.width)).toBeLessThanOrEqual(1);
    await page.screenshot({ path: testInfo.outputPath(`output_line_${mode}.png`), clip: { x: stage.right - 420, y: stage.y, width: 420, height: 80 } });
    expect(problems).toEqual([]);
  });
}

test("the folded width follows the line with its right end fixed, and a mode change shows the new line at once", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame");
  const frame = await lineOf(page);
  // The mode is changed in the Scene card's Camera tiles (nothing is selected).
  await page.locator('[data-card="camera"] .pano-studio-mode-tile[data-value="erp"]').click();
  await expect.poll(async () => (await lineOf(page)).shot).toBe("Panorama 360°");
  const panorama = await lineOf(page);
  expect(panorama.size).toBe("2048 × 1024");
  expect(panorama.mode).toBe("panorama");
  expect(Math.abs(panorama.pill.right - frame.pill.right)).toBeLessThanOrEqual(0.5);
  expect(Math.abs(panorama.button.x - frame.button.x)).toBeLessThanOrEqual(0.5);
  expect(panorama.pill.width).not.toBe(frame.pill.width);
  // No flash: the line does not animate (nothing in it has a transition or an animation).
  expect(await line(page).evaluate((el) => [el, ...el.querySelectorAll("*")].every((node) => {
    const style = getComputedStyle(node);
    return style.animationName === "none" && (style.transitionDuration === "0s" || node === el);
  }))).toBe(true);
  expect(problems).toEqual([]);
});

test("open, the line heads the window: its width is kept whatever the mode, its height the picture's and the line's 32px", async ({ page }, testInfo) => {
  const problems = await load(page, "aspect=16:9&mode=frame");
  const folded = await lineOf(page);
  await fold(page).click();
  await expect(output(page)).not.toHaveClass(/is-collapsed/);
  await page.waitForTimeout(300);
  const win = await rectOf(page, ".pano-studio-output-window");
  const picture = await rectOf(page, ".pano-studio-output-body");
  const open = await lineOf(page);
  // The line stays where it was (same right end, same top), the window's top row.
  expect(Math.abs(open.pill.right - folded.pill.right)).toBeLessThanOrEqual(0.5);
  expect(Math.abs(open.pill.y - folded.pill.y)).toBeLessThanOrEqual(0.5);
  expect(Math.abs(open.pill.right - win.right)).toBeLessThanOrEqual(0.5);
  expect(Math.round(picture.y - win.y)).toBe(32);
  expect(Math.round(picture.width)).toBe(Math.round(win.width));
  expect(Math.abs(picture.height - win.width / (16 / 9))).toBeLessThanOrEqual(1);
  expect(Math.abs(win.height - (picture.height + 32))).toBeLessThanOrEqual(0.5);
  // The whole line fits the window.
  expect(open.glyph.x).toBeGreaterThanOrEqual(win.x);
  await page.screenshot({ path: testInfo.outputPath("output_line_open.png") });

  // Panorama: the same width, the height follows the 2:1 picture.
  await page.locator('[data-card="camera"] .pano-studio-mode-tile[data-value="erp"]').click();
  await expect.poll(async () => (await lineOf(page)).shot).toBe("Panorama 360°");
  await page.waitForTimeout(300);
  const panorama = await rectOf(page, ".pano-studio-output-window");
  expect(panorama.width).toBe(win.width);
  expect(Math.abs(panorama.height - (win.width / 2 + 32))).toBeLessThanOrEqual(1);
  expect(Math.abs(panorama.right - win.right)).toBeLessThanOrEqual(0.5);
  expect(Math.abs(panorama.y - win.y)).toBeLessThanOrEqual(0.5);
  expect(problems).toEqual([]);
});

for (const query of ["aspect=16:9&mode=frame", "aspect=16:9&mode=panorama"]) {
  test(`the Camera tab keeps the folded line as in the 3D tab, only the fold button faint and inert (${query})`, async ({ page }, testInfo) => {
    const problems = await load(page, query);
    const before = await lineOf(page);
    await tab(page, "Camera");
    await expect(output(page)).toHaveClass(/is-suspended/);
    const after = await lineOf(page);
    expect(after.shot).toBe(before.shot);
    expect(after.size).toBe(before.size);
    expect(after.pill).toEqual(before.pill);
    expect(after.opacity).toBe("1");
    expect(await output(page).evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
    expect(after.buttonOpacity).toBe("0.4");
    await expect(fold(page)).toHaveAttribute("aria-disabled", "true");
    await expect(fold(page)).toHaveAttribute("data-tip", "Not available in the Camera view");
    await fold(page).hover();
    await page.waitForTimeout(300);
    expect(await fold(page).evaluate((el) => [getComputedStyle(el).backgroundColor, getComputedStyle(el).opacity])).toEqual(["rgba(0, 0, 0, 0)", "0.4"]);
    await fold(page).click({ force: true });
    await expect(output(page)).toHaveClass(/is-collapsed/);
    const stage = await rectOf(page, '[data-region="stage"]');
    await page.screenshot({ path: testInfo.outputPath("output_line_camera_tab.png"), clip: { x: stage.right - 420, y: stage.y, width: 420, height: 80 } });
    expect(problems).toEqual([]);
  });
}

test("a size brought down to the upper limit says so in the size's tooltip, as on the node surface", async ({ page }) => {
  const problems = await load(page, "aspect=5:1&mode=frame&mp=16");
  const shown = await lineOf(page);
  expect(shown.size).toMatch(/^8192 × \d+$/);
  expect(shown.cap).toMatch(/^Capped at 8192 \(\d+ × \d+\)$/);
  await page.locator("[data-output-size]").hover();
  await expect(page.locator(".pano-studio-tip.is-shown")).toHaveText(shown.cap, { timeout: 5_000 });
  expect(problems).toEqual([]);
});

test("a width kept below the least (168px from before) opens at the least, 256px, and is kept so", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame&keptOutput=168");
  await fold(page).click();
  await expect(output(page)).not.toHaveClass(/is-collapsed/);
  await page.waitForTimeout(300);
  expect((await rectOf(page, ".pano-studio-output-window")).width).toBe(256);
  expect(await page.evaluate(() => window.__studio.kept("PanoramaSuite.Studio.outputWindow"))).toEqual({ width: 256, collapsed: false });
  expect(problems).toEqual([]);
});
