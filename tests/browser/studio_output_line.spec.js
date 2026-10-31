import { expect, test } from "@playwright/test";

// The Output window's line of the output's shape in the new editor (tests/browser/pages/studio_camera_wired.html, a real
// browser engine): docs/studio-ui.md "Output の小窓" (folded and open, both tabs, the node surface's line of the estimate,
// right-aligned with the fold button at its right end, the folded width following the line with the right end fixed,
// the open width kept whatever the mode, the picture filling the open window with the line over its top edge, the whole
// line the fold button with only its chevron answering the pointer, the size's tooltip at the upper limit) and
// docs/design.md "Output の小窓の一行", "Camera タブの Output の小窓" (ADR 0051).

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
      button: box(pill.querySelector("[data-output-chevron]")),
      opacity: getComputedStyle(pill).opacity,
      buttonOpacity: getComputedStyle(pill.querySelector("[data-output-chevron]")).opacity,
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
  // No flash: the line does not animate (nothing in it has a transition or an animation, but the chevron's own
  // hover and turn).
  expect(await line(page).evaluate((el) => [el, ...el.querySelectorAll("*")].every((node) => {
    const style = getComputedStyle(node);
    return style.animationName === "none" && (style.transitionDuration === "0s" || node === el || !!node.closest("[data-output-chevron]"));
  }))).toBe(true);
  expect(problems).toEqual([]);
});

test("open, the picture fills the window and the line lies over its top edge: the width kept whatever the mode, the height width / ratio", async ({ page }, testInfo) => {
  const problems = await load(page, "aspect=16:9&mode=frame");
  const folded = await lineOf(page);
  await fold(page).click();
  await expect(output(page)).not.toHaveClass(/is-collapsed/);
  await page.waitForTimeout(300);
  const win = await rectOf(page, ".pano-studio-output-window");
  const picture = await rectOf(page, ".pano-studio-output-body");
  const open = await lineOf(page);
  // The line stays where it was (same right end, same vertical center), at the window's top right.
  expect(Math.abs(open.pill.right - folded.pill.right)).toBeLessThanOrEqual(0.5);
  expect(Math.abs(open.pill.y + open.pill.height / 2 - (folded.pill.y + folded.pill.height / 2))).toBeLessThanOrEqual(0.5);
  expect(Math.abs(open.button.x - folded.button.x)).toBeLessThanOrEqual(0.5);
  expect(Math.abs(open.pill.right - win.right)).toBeLessThanOrEqual(0.5);
  // No header strip: the picture is the whole window, and the line's top is inside it.
  expect(picture).toEqual(win);
  expect(Math.abs(win.height - win.width / (16 / 9))).toBeLessThanOrEqual(1);
  expect(open.pill.y).toBeGreaterThanOrEqual(picture.y);
  expect(open.pill.bottom).toBeLessThanOrEqual(picture.bottom);
  // Over the picture the line is light, on a dark gradient fading down from the top edge.
  const shade = await page.locator(".pano-studio-output-window").evaluate((el) => {
    const after = getComputedStyle(el, "::after");
    return { image: after.backgroundImage, height: parseFloat(after.height), top: after.top };
  });
  expect(shade.image).toMatch(/^linear-gradient\(rgba\(0, 0, 0, 0\.45\).*rgba\(0, 0, 0, 0\)\)$/);
  expect(shade.height).toBeGreaterThanOrEqual(32);
  expect(shade.top).toBe("0px");
  expect(await line(page).evaluate((el) => getComputedStyle(el.querySelector("[data-output-shot]")).color)).toBe("rgb(255, 255, 255)");
  // The whole line fits the window.
  expect(open.glyph.x).toBeGreaterThanOrEqual(win.x);
  await page.screenshot({ path: testInfo.outputPath("output_line_open.png") });

  // Panorama: the same width, the height follows the 2:1 picture.
  await page.locator('[data-card="camera"] .pano-studio-mode-tile[data-value="erp"]').click();
  await expect.poll(async () => (await lineOf(page)).shot).toBe("Panorama 360°");
  await page.waitForTimeout(300);
  const panorama = await rectOf(page, ".pano-studio-output-window");
  expect(panorama.width).toBe(win.width);
  expect(Math.abs(panorama.height - win.width / 2)).toBeLessThanOrEqual(1);
  expect(Math.abs(panorama.right - win.right)).toBeLessThanOrEqual(0.5);
  expect(Math.abs(panorama.y - win.y)).toBeLessThanOrEqual(0.5);
  expect(await rectOf(page, ".pano-studio-output-body")).toEqual(panorama);
  expect(problems).toEqual([]);
});

test("in the 3D tab a press anywhere on the line opens and folds the window, and the line is one button for the keyboard (Enter)", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame");
  await expect(fold(page)).toHaveAttribute("aria-expanded", "false");
  // The glyph, the name and the size all toggle it, folded and open.
  for (const part of ["[data-output-mode]", "[data-output-shot]", "[data-output-size]", "[data-output-chevron]"]) {
    await line(page).locator(part).click();
    await expect(output(page)).not.toHaveClass(/is-collapsed/);
    await expect(fold(page)).toHaveAttribute("aria-expanded", "true");
    await page.waitForTimeout(250);
    await line(page).locator(part).click();
    await expect(output(page)).toHaveClass(/is-collapsed/);
    await expect(fold(page)).toHaveAttribute("aria-expanded", "false");
    await page.waitForTimeout(250);
  }
  // The keyboard: one button, Enter toggles it (Space is the editor's Play / pause on every button, studio/shortcuts.js).
  expect(await fold(page).evaluate((el) => el.tagName)).toBe("BUTTON");
  expect(await page.locator('[data-region="output"] button').count()).toBe(1);
  await fold(page).focus();
  await page.keyboard.press("Enter");
  await expect(fold(page)).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Enter");
  await expect(fold(page)).toHaveAttribute("aria-expanded", "false");
  expect(problems).toEqual([]);
});

test("hovering the line changes only the chevron, never the line's own look", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame");
  const looks = () => line(page).evaluate((el) => {
    const look = (node) => {
      const style = getComputedStyle(node);
      return [style.backgroundColor, style.color, style.opacity, style.translate, style.boxShadow, style.outlineStyle].join("|");
    };
    const chevron = el.querySelector("[data-output-chevron]");
    return {
      line: look(el),
      fill: getComputedStyle(el, "::before").backgroundColor + getComputedStyle(el, "::before").opacity,
      parts: [...el.children].filter((node) => node !== chevron).map(look),
      chevron: look(chevron),
    };
  });
  for (const state of ["folded", "open"]) {
    if (state === "open") {
      await fold(page).click();
      await expect(output(page)).not.toHaveClass(/is-collapsed/);
    }
    await page.mouse.move(5, 5);
    await page.waitForTimeout(300);
    const before = await looks();
    await line(page).locator("[data-output-shot]").hover();
    await page.waitForTimeout(300);
    const over = await looks();
    expect(over.line).toBe(before.line);
    expect(over.fill).toBe(before.fill);
    expect(over.parts).toEqual(before.parts);
    expect(over.chevron).not.toBe(before.chevron);
  }
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
    // The tooltip is on the whole line; a hover lights nothing, the chevron stays faint and still.
    await line(page).locator("[data-output-shot]").hover();
    await page.waitForTimeout(300);
    expect(await fold(page).evaluate((el) => {
      const chevron = getComputedStyle(el.querySelector("[data-output-chevron]"));
      return [getComputedStyle(el).backgroundColor, getComputedStyle(el).opacity, chevron.opacity, chevron.translate];
    })).toEqual(["rgba(0, 0, 0, 0)", "1", "0.4", "none"]);
    await expect(page.locator(".pano-studio-tip.is-shown")).toHaveText("Not available in the Camera view", { timeout: 5_000 });
    // A press anywhere on the line, or the keyboard, does nothing.
    await line(page).locator("[data-output-shot]").click({ force: true });
    await fold(page).click({ force: true });
    await fold(page).focus();
    await page.keyboard.press("Enter");
    await expect(output(page)).toHaveClass(/is-collapsed/);
    await expect(fold(page)).toHaveAttribute("aria-expanded", "false");
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
