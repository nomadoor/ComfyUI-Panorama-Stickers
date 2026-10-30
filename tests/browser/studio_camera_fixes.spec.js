import { expect, test } from "@playwright/test";

// The Camera tab's edge rulers and the parts around them in the new editor (tests/browser/pages/studio_camera_wired.html,
// a real browser engine): docs/studio-ui.md "Camera タブ" (the tick strips' fixed length centered on the frame's edges,
// the heads outside the strip's two ends with a fixed-width value, the reset, the hit band, the focus) and "Output の小窓" (folded
// and inert in the Camera tab), and no timecode at the top center.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function load(page, query) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/studio_camera_wired.html?${query}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  console.log(`renderer: ${await page.evaluate(() => window.__studio.rendererOf())}`);
  return problems;
}

async function open(page, query = "aspect=16:9&mode=frame") {
  const problems = await load(page, query);
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
  await expect(page.locator("[data-frame-box]")).toHaveCount(1);
  await page.waitForTimeout(300);
  return problems;
}

const rectOf = (page, selector) => page.locator(selector).first().evaluate((el) => {
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height, right: r.right, bottom: r.bottom };
});
const strip = (page, name) => rectOf(page, `[data-ruler="${name}"] [data-ruler-track]`);
const ticksCenter = (page, name, vertical) => page.locator(`[data-ruler="${name}"] [data-ruler-ticks]`).evaluate((el, v) => {
  const r = el.getBoundingClientRect();
  return v ? r.top + r.height / 2 : r.left + r.width / 2;
}, vertical);
const camera = (page) => page.evaluate(() => window.__studio.camera());
const history = (page) => page.evaluate(() => ({ undo: window.__studio.session.canUndo, redo: window.__studio.session.canRedo }));

for (const query of ["aspect=16:9&mode=frame", "aspect=1:1&mode=frame", "aspect=9:16&mode=frame", "aspect=16:9&mode=panorama"]) {
  test(`the tick strips' middles are the frame's edges' middles, and the heads sit at their ends clear of everything (${query})`, async ({ page }) => {
    const problems = await open(page, query);
    const frame = await rectOf(page, "[data-frame-box]");
    const midX = frame.x + frame.width / 2;
    const midY = frame.y + frame.height / 2;
    expect(Math.abs((await ticksCenter(page, "Roll", false)) - midX)).toBeLessThanOrEqual(1);
    expect(Math.abs((await ticksCenter(page, "FOV", true)) - midY)).toBeLessThanOrEqual(1);
    expect(Math.abs((await ticksCenter(page, "Lens", true)) - midY)).toBeLessThanOrEqual(1);
    // The middle mark is the ticks' middle too.
    const mark = await rectOf(page, '[data-ruler="Roll"] [data-ruler-mark]');
    expect(Math.abs(mark.x + mark.width / 2 - midX)).toBeLessThanOrEqual(1);
    // The fixed lengths, shorter only where the edge is (docs/design.md "大きさ": both heads' larger room, 46px, at both ends).
    const roll = await strip(page, "Roll");
    const fov = await strip(page, "FOV");
    expect(roll.width).toBe(Math.min(320, frame.width));
    expect(fov.height).toBe(Math.min(200, frame.height - 92));
    const tabs = await rectOf(page, ".pano-studio-at-tabs");
    const rail = await rectOf(page, ".pano-studio-at-rail");
    const knobs = await rectOf(page, ".pano-studio-at-nav");
    const stage = await rectOf(page, '[data-region="stage"]');
    const boxes = [];
    for (const name of ["FOV", "Lens"]) {
      const band = await strip(page, name);
      const middle = band.x + band.width / 2;
      // The name over the value, 8px above the strip, within the head's 30px, inside the frame's height, under the tabs.
      const head = await rectOf(page, `[data-ruler="${name}"] [data-ruler-head]`);
      const nameBox = await rectOf(page, `[data-ruler="${name}"] .pano-studio-edge-ruler-name`);
      const value = await rectOf(page, `[data-ruler="${name}"] [data-ruler-value]`);
      expect(Math.abs(band.y - 8 - head.bottom)).toBeLessThanOrEqual(0.5);
      expect(head.height).toBeLessThanOrEqual(30);
      expect(value.y - nameBox.bottom).toBeGreaterThanOrEqual(4);
      expect(value.y - nameBox.bottom).toBeLessThanOrEqual(6.5);
      expect(Math.abs(head.x + head.width / 2 - middle)).toBeLessThanOrEqual(1);
      expect(head.y).toBeGreaterThanOrEqual(frame.y - 0.5);
      expect(head.y).toBeGreaterThan(tabs.bottom + 8);
      // The dot over the reset, stacked, 4px below the strip, within 42px, inside the frame's height, above the stage's bottom.
      const acts = await rectOf(page, `[data-ruler="${name}"] [data-ruler-acts]`);
      const dot = await rectOf(page, `[data-ruler="${name}"] [data-ruler-acts] .pano-studio-keydot`);
      const reset = await rectOf(page, `[data-ruler="${name}"] [aria-label="Reset ${name}"]`);
      expect(Math.abs(acts.y - (band.bottom + 4))).toBeLessThanOrEqual(0.5);
      expect(acts.height).toBeLessThanOrEqual(42);
      expect(dot.bottom).toBeLessThanOrEqual(reset.y);
      expect(Math.abs(dot.x + dot.width / 2 - middle)).toBeLessThanOrEqual(1);
      expect(Math.abs(reset.x + reset.width / 2 - middle)).toBeLessThanOrEqual(1);
      expect(acts.bottom).toBeLessThanOrEqual(frame.bottom + 0.5);
      expect(acts.bottom).toBeLessThan(stage.bottom - 8);
      boxes.push(head, acts);
    }
    // Roll: the name and value 10px left of its strip, the dot then the reset 8px right of it, on its line.
    const rollHead = await rectOf(page, '[data-ruler="Roll"] [data-ruler-head]');
    const rollActs = await rectOf(page, '[data-ruler="Roll"] [data-ruler-acts]');
    const rollDot = await rectOf(page, '[data-ruler="Roll"] [data-ruler-acts] .pano-studio-keydot');
    const rollReset = await rectOf(page, '[data-ruler="Roll"] [aria-label="Reset Roll"]');
    expect(Math.abs(roll.x - 10 - rollHead.right)).toBeLessThanOrEqual(0.5);
    expect(Math.abs(rollActs.x - (roll.right + 8))).toBeLessThanOrEqual(0.5);
    expect(rollDot.right).toBeLessThanOrEqual(rollReset.x);
    for (const box of [rollHead, rollDot, rollReset]) expect(Math.abs(box.y + box.height / 2 - (roll.y + roll.height / 2))).toBeLessThanOrEqual(1);
    boxes.push(rollHead, rollActs);
    // No head overlaps another, the left rail, the view knobs or the tabs.
    const overlap = (a, b) => a.x < b.right && b.x < a.right && a.y < b.bottom && b.y < a.bottom;
    for (const [i, a] of boxes.entries()) {
      for (const other of [rail, knobs, tabs]) expect(overlap(a, other)).toBe(false);
      for (const b of boxes.slice(i + 1)) expect(overlap(a, b)).toBe(false);
    }
    // The frame keeps clear space under the tabs.
    expect(frame.y - tabs.bottom).toBeGreaterThanOrEqual(29);
    expect(problems).toEqual([]);
  });
}

test("the Roll strip and its head keep their size and place whatever the value", async ({ page }) => {
  const problems = await open(page);
  const measure = async () => ({
    strip: await strip(page, "Roll"),
    head: await rectOf(page, '[data-ruler="Roll"] [data-ruler-head]'),
    acts: await rectOf(page, '[data-ruler="Roll"] [data-ruler-acts]'),
    value: await rectOf(page, '[data-ruler="Roll"] [data-ruler-value]'),
  });
  const setRoll = async (value) => {
    const field = page.locator('.pano-studio-inspector [data-row="Rotation"] [role="spinbutton"]').nth(2);
    await field.click();
    await field.locator("input").fill(String(value));
    await field.locator("input").press("Enter");
  };
  const before = await measure();
  await expect(page.locator('[data-ruler="Roll"] [data-ruler-value]')).toHaveText("-4°");
  for (const value of [-14, -120, 120, -180]) {
    await setRoll(value);
    await expect(page.locator('[data-ruler="Roll"] [data-ruler-value]')).toHaveText(`${value}°`);
    expect(await measure()).toEqual(before);
  }
  // FOV and Lens too.
  const fovHead = await rectOf(page, '[data-ruler="FOV"] [data-ruler-head]');
  const fovStrip = await strip(page, "FOV");
  await page.locator('[data-ruler="FOV"] [role="slider"]').focus();
  for (let i = 0; i < 30; i += 1) await page.keyboard.press("ArrowUp");
  await expect(page.locator('[data-ruler="FOV"] [data-ruler-value]')).toHaveText("120°");
  expect(await rectOf(page, '[data-ruler="FOV"] [data-ruler-head]')).toEqual(fovHead);
  expect(await strip(page, "FOV")).toEqual(fovStrip);
  expect(problems).toEqual([]);
});

test("each ruler's reset returns its value as the inspector's does, one Undo step, grayed at the default", async ({ page }) => {
  const problems = await open(page);
  const reset = (name) => page.locator(`[data-ruler="${name}"] [data-ruler-acts] [aria-label="Reset ${name}"]`);
  // The page's Camera: FOV 60, Lens 1 (the default), Roll -4.
  await expect(reset("Lens")).toHaveAttribute("aria-disabled", "true");
  await expect(reset("FOV")).not.toHaveAttribute("aria-disabled", "true");
  await expect(reset("Roll")).not.toHaveAttribute("aria-disabled", "true");
  const start = await camera(page);

  await reset("Roll").click();
  let cam = await camera(page);
  expect(cam.roll_deg).toBe(0);
  expect([cam.yaw_deg, cam.pitch_deg]).toEqual([start.yaw_deg, start.pitch_deg]);
  await expect(page.locator('[data-ruler="Roll"] [data-ruler-value]')).toHaveText("0°");
  await expect(reset("Roll")).toHaveAttribute("aria-disabled", "true");
  expect(await history(page)).toEqual({ undo: true, redo: false });
  await page.keyboard.press("Control+z");
  expect((await camera(page)).roll_deg).toBe(start.roll_deg);
  expect(await history(page)).toEqual({ undo: false, redo: true });

  // FOV: the inspector's H FOV reset (its default), one step.
  await reset("FOV").click();
  cam = await camera(page);
  expect(cam.hFOV_deg).toBe(90);
  await expect(page.locator('[data-ruler="FOV"] [data-ruler-value]')).toHaveText("90°");
  await expect(page.locator('.pano-studio-inspector [data-row="H FOV"] [aria-label="Reset H FOV"]')).toHaveAttribute("aria-disabled", "true");
  await expect(reset("FOV")).toHaveAttribute("aria-disabled", "true");
  await page.keyboard.press("Control+z");
  expect((await camera(page)).hFOV_deg).toBe(60);

  // Lens: moved, then reset to its default.
  await page.locator('[data-ruler="Lens"] [role="slider"]').focus();
  await page.keyboard.press("ArrowDown");
  await expect(reset("Lens")).not.toHaveAttribute("aria-disabled", "true");
  await reset("Lens").click();
  expect((await camera(page)).curve ?? 1).toBe(1);
  await expect(reset("Lens")).toHaveAttribute("aria-disabled", "true");
  expect(problems).toEqual([]);
});

test("Panorama mode: the FOV and Lens resets are gray with their rulers, Roll's works", async ({ page }) => {
  const problems = await open(page, "aspect=16:9&mode=panorama");
  await expect(page.locator('[data-ruler="FOV"] [aria-label="Reset FOV"]')).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator('[data-ruler="Lens"] [aria-label="Reset Lens"]')).toHaveAttribute("aria-disabled", "true");
  await page.locator('[data-ruler="Roll"] [aria-label="Reset Roll"]').click();
  expect((await camera(page)).roll_deg).toBe(0);
  expect(problems).toEqual([]);
});

test("a press on a ruler shows no outline or fill; the keyboard focus shows a faint fill and no outline", async ({ page }) => {
  const problems = await open(page);
  const look = (name) => page.locator(`[data-ruler="${name}"] [role="slider"]`).evaluate((el) => {
    const style = getComputedStyle(el);
    return { focused: document.activeElement === el, outline: style.outlineStyle, background: style.backgroundColor };
  });
  const r = await strip(page, "Roll");
  await page.mouse.move(r.x + r.width / 2, r.y + r.height / 2);
  await page.mouse.down();
  expect(await look("Roll")).toEqual({ focused: true, outline: "none", background: "rgba(0, 0, 0, 0)" });
  await page.mouse.up();
  expect(await look("Roll")).toEqual({ focused: true, outline: "none", background: "rgba(0, 0, 0, 0)" });
  // An arrow key on the pressed ruler shows the keyboard focus.
  await page.keyboard.press("ArrowLeft");
  const keyed = await look("Roll");
  expect(keyed.outline).toBe("none");
  expect(keyed.background).toBe("rgba(255, 255, 255, 0.1)");
  await page.keyboard.press("Control+z");
  expect(problems).toEqual([]);
});

test("the strips take a drag 12px off their ticks, not inside the frame", async ({ page }) => {
  const problems = await open(page);
  const frame = await rectOf(page, "[data-frame-box]");
  const roll = await strip(page, "Roll");
  // 12px under the Roll strip's ticks (the strip is 22px; the ticks span its height less 5px each side).
  const y = roll.bottom + 12 - 1;
  await page.mouse.move(roll.x + roll.width / 2, y);
  await page.mouse.down();
  await page.mouse.move(roll.x + roll.width / 2 + 40, y, { steps: 4 });
  await page.mouse.up();
  expect((await camera(page)).roll_deg).toBeCloseTo(-9, 5);
  // Above it too, between the strip and the frame.
  const above = roll.y - 12 + 1;
  expect(above).toBeGreaterThanOrEqual(frame.bottom);
  await page.mouse.move(roll.x + roll.width / 2, above);
  await page.mouse.down();
  await page.mouse.move(roll.x + roll.width / 2 - 40, above, { steps: 4 });
  await page.mouse.up();
  expect((await camera(page)).roll_deg).toBeCloseTo(-4, 5);
  // FOV: 12px to the side of its strip, on the frame's side and the outer side.
  const fov = await strip(page, "FOV");
  for (const x of [fov.right + 12 - 1, fov.x - 12 + 1]) {
    const before = (await camera(page)).hFOV_deg;
    await page.mouse.move(x, fov.y + fov.height / 2);
    await page.mouse.down();
    await page.mouse.move(x, fov.y + fov.height / 2 - 20, { steps: 2 });
    await page.mouse.up();
    expect((await camera(page)).hFOV_deg).toBeCloseTo(before + 5, 5);
  }
  // The band is 46px across and stops short of the frame.
  const band = await page.locator('[data-ruler="FOV"] [role="slider"]').evaluate((el) => {
    const style = getComputedStyle(el, "::before");
    return { left: style.left, right: style.right };
  });
  expect(band).toEqual({ left: "-12px", right: "-12px" });
  expect(fov.right + 12).toBeLessThan(frame.x);
  // A press inside the frame next to the band is the stage's, not the ruler's.
  const at = await page.evaluate(({ x, y }) => document.elementFromPoint(x, y)?.closest("[data-ruler]")?.dataset.ruler ?? null, { x: frame.x + 2, y: fov.y + fov.height / 2 });
  expect(at).toBeNull();
  expect(problems).toEqual([]);
});

// The Output window's picture as numbers (a coarse probe), or null when it is not there.
const outputPixels = (page) => page.evaluate(() => {
  const canvas = document.querySelector('[data-output-picture="frame"]');
  if (!canvas || !canvas.width) return null;
  const probe = document.createElement("canvas");
  probe.width = 32;
  probe.height = 18;
  const g = probe.getContext("2d", { willReadFrequently: true });
  g.drawImage(canvas, 0, 0, 32, 18);
  return Array.from(g.getImageData(0, 0, 32, 18).data);
});
const differ = (a, b) => a.reduce((sum, value, index) => sum + Math.abs(value - b[index]), 0) / a.length;

test("the Camera tab folds the Output window, faint and inert, stops its picture, and the 3D tab brings it back", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame");
  const output = page.locator('[data-region="output"]');
  const fold = page.locator('[data-action="output-fold"]');
  // Opened in the 3D tab: it draws, and the browser keeps it open.
  await fold.click();
  await expect(output).not.toHaveClass(/is-collapsed/);
  await expect.poll(async () => (await outputPixels(page))?.some((v, i) => i % 4 === 0 && v > 200) ?? false, { timeout: 10_000 }).toBe(true);
  const kept = () => page.evaluate(() => window.__studio.kept("PanoramaSuite.Studio.outputWindow"));
  const keptOpen = await kept();
  expect(keptOpen?.collapsed).toBe(false);
  const drawn = await outputPixels(page);

  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
  await expect(output).toHaveClass(/is-collapsed/);
  await expect(output).toHaveClass(/is-suspended/);
  await expect(fold).toHaveAttribute("aria-disabled", "true");
  await expect(fold).toHaveAttribute("title", "Not available in the Camera view");
  expect(await output.evaluate((el) => getComputedStyle(el).opacity)).toBe("0.4");
  // A press does nothing; a hover does not light it.
  await fold.hover();
  // Past the hover's ease (docs/design.md "動き").
  await page.waitForTimeout(300);
  expect(await fold.evaluate((el) => getComputedStyle(el).backgroundColor)).toBe("rgba(0, 0, 0, 0)");
  await fold.click({ force: true });
  await expect(output).toHaveClass(/is-collapsed/);
  expect(await kept()).toEqual(keptOpen);
  // Its picture is not drawn while hidden: a Camera change leaves it as it was.
  await page.locator('[data-ruler="FOV"] [role="slider"]').focus();
  for (let i = 0; i < 10; i += 1) await page.keyboard.press("ArrowUp");
  await page.waitForTimeout(400);
  expect(differ(await outputPixels(page), drawn)).toBeLessThan(0.5);

  // Back in the 3D tab: open again, drawn with the change.
  await page.locator('[role="tablist"] button', { hasText: "3D" }).click();
  await expect(output).not.toHaveClass(/is-collapsed/);
  await expect(output).not.toHaveClass(/is-suspended/);
  await expect.poll(async () => differ(await outputPixels(page), drawn), { timeout: 10_000 }).toBeGreaterThan(1);
  expect(await kept()).toEqual(keptOpen);
  expect(problems).toEqual([]);
});

test("a folded Output window stays folded after the Camera tab", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame");
  const output = page.locator('[data-region="output"]');
  await expect(output).toHaveClass(/is-collapsed/);
  await page.locator('[role="tablist"] button', { hasText: "Camera" }).click();
  await expect(output).toHaveClass(/is-suspended/);
  await page.locator('[role="tablist"] button', { hasText: "3D" }).click();
  await expect(output).toHaveClass(/is-collapsed/);
  await expect(output).not.toHaveClass(/is-suspended/);
  await expect(page.locator('[data-action="output-fold"]')).not.toHaveAttribute("aria-disabled", "true");
  expect(problems).toEqual([]);
});

test("no timecode at the top center of the Camera tab", async ({ page }) => {
  const problems = await open(page);
  await expect(page.locator("[data-timecode]")).toHaveCount(0);
  await expect(page.locator(".pano-studio-timecode")).toHaveCount(0);
  expect(await page.locator(".pano-studio-at-notice").innerText()).toBe("");
  expect(problems).toEqual([]);
});

// docs/design.md "フォーカス": no outline anywhere in the editor; after a press no focus look, also when the focus comes
// back to the pressed button (as from a file picker); the keyboard's focus takes the hover fill.
test("a pressed button shows no outline and no focus fill, even refocused; the keyboard's focus is the hover fill", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame");
  const look = (selector) => page.locator(selector).evaluate((el) => {
    const style = getComputedStyle(el);
    return { focused: document.activeElement === el, outline: style.outlineStyle, background: style.backgroundColor };
  });
  const fill = await page.locator(".pano-studio-editor").evaluate((el) => getComputedStyle(el).getPropertyValue("--studio-fill-hover").trim());
  const rgb = await page.evaluate((hex) => {
    const probe = document.createElement("i");
    probe.style.color = hex;
    document.body.append(probe);
    const value = getComputedStyle(probe).color;
    probe.remove();
    return value;
  }, fill);
  for (const selector of ['[data-action="grid"]', '[data-action="output-fold"]']) {
    await page.locator(selector).click();
    await page.mouse.move(5, 5);
    // The hover fill eases out (docs/design.md "動き").
    await page.waitForTimeout(300);
    expect(await look(selector)).toEqual({ focused: true, outline: "none", background: "rgba(0, 0, 0, 0)" });
    // The focus comes back by script, as Chromium does after a file picker: still nothing.
    await page.locator(selector).evaluate((el) => {
      el.blur();
      el.focus();
    });
    await page.waitForTimeout(300);
    expect(await look(selector)).toEqual({ focused: true, outline: "none", background: "rgba(0, 0, 0, 0)" });
  }
  // The keyboard: Tab moves the focus, which shows the hover fill and no outline.
  await page.keyboard.press("Tab");
  await page.waitForTimeout(300);
  const focused = await page.evaluate(() => {
    const el = document.activeElement;
    const style = getComputedStyle(el);
    return { inEditor: !!el.closest(".pano-studio-editor"), outline: style.outlineStyle, background: style.backgroundColor, disabled: el.getAttribute("aria-disabled") };
  });
  expect(focused.inEditor).toBe(true);
  expect(focused.outline).toBe("none");
  if (focused.disabled !== "true") expect(focused.background).toBe(rgb);
  // A container focused by script (the timeline, tabindex -1) keeps its own fill under the keyboard.
  const timeline = page.locator(".pano-studio-tl");
  const own = await timeline.evaluate((el) => getComputedStyle(el).backgroundColor);
  await timeline.evaluate((el) => el.focus());
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(300);
  expect(await timeline.evaluate((el) => getComputedStyle(el).backgroundColor)).toBe(own);
  expect(problems).toEqual([]);
});

test("over the Camera tab's dim, a ruler's reset reached by the keyboard is white on a faint fill", async ({ page }) => {
  const problems = await open(page);
  const reset = page.locator('[data-ruler="Roll"] [aria-label="Reset Roll"]');
  await reset.evaluate((el) => el.focus());
  await page.keyboard.press("Tab");
  await page.keyboard.press("Shift+Tab");
  await page.waitForTimeout(300);
  const look = await reset.evaluate((el) => ({ focused: document.activeElement === el, color: getComputedStyle(el).color, background: getComputedStyle(el).backgroundColor }));
  expect(look).toEqual({ focused: true, color: "rgb(255, 255, 255)", background: "rgba(255, 255, 255, 0.1)" });
  expect(problems).toEqual([]);
});
