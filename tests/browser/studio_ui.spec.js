import { expect, test } from "@playwright/test";

// The new UI's primitives (web_src/components/studio/Studio*.vue, web/pano_studio.css) on
// tests/browser/pages/studio_ui.html, in dark and light: docs/design.md "新しい UI の見た目" and docs/studio-ui.md
// "行の格子"・"欄"・"リセットと Keyframe のポチ".

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1100, height: 900 });
  await page.goto("/tests/browser/pages/studio_ui.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 30_000 });
  const check = await page.evaluate(() => window.__check);
  expect(check.error).toBeNull();
  return { problems, check };
}

const events = (page) => page.evaluate(() => window.__events.splice(0));
const col = (page, theme) => page.locator(`[data-theme-col="${theme}"]`);

test("the primitives draw in dark and light with the font, no console errors, and the shared look", async ({ page }, testInfo) => {
  const { problems, check } = await open(page);
  console.log(`fonts: ${JSON.stringify(check.fonts)} text-box: ${check.textBox}`);
  expect(check.fonts.loaded).toEqual([true, true, true]);
  // One variable file serves 500 to 700: the bold text is wider than the regular one.
  expect(check.fonts.width700).toBeGreaterThan(check.fonts.width500 * 1.02);

  const look = await page.evaluate(() => {
    const dark = document.querySelector('[data-theme-col="dark"]');
    const light = document.querySelector('[data-theme-col="light"]');
    const css = (el, name) => getComputedStyle(el).getPropertyValue(name).trim();
    const style = (root, selector) => getComputedStyle(root.querySelector(selector));
    const shadows = [...document.querySelectorAll(".pano-studio *")].filter((el) => getComputedStyle(el).boxShadow !== "none").length;
    const float = style(dark, ".pano-studio-float.is-rail");
    return {
      darkPanel: css(dark, "--studio-panel"),
      lightPanel: css(light, "--studio-panel"),
      darkFg: style(dark, ".pano-studio-field-value").color,
      lightFg: style(light, ".pano-studio-field-value").color,
      darkIce: css(dark, "--studio-ice"),
      lightIce: css(light, "--studio-ice"),
      floatBg: float.backgroundColor,
      floatRadius: float.borderRadius,
      floatButton: style(dark, ".pano-studio-float.is-rail .pano-studio-icon-btn:not(.is-active)").color,
      panelRadius: style(dark, ".pano-studio-panel").borderRadius,
      fieldRadius: style(dark, ".pano-studio-field").borderRadius,
      fieldBg: style(dark, ".pano-studio-field").backgroundColor,
      fieldHeight: style(dark, ".pano-studio-field").height,
      font: style(dark, ".pano-studio-field-value").fontFamily,
      sizes: [".pano-studio-field-axis", ".pano-studio-row-name", ".pano-studio-field-value", ".pano-studio-card-title"].map((s) => style(dark, s).fontSize),
      grid: style(dark, ".pano-studio-row").gridTemplateColumns,
      shadows,
    };
  });
  console.log(`look: ${JSON.stringify(look)}`);
  expect(look.darkPanel).toBe("#1b1c1e");
  expect(look.lightPanel).toBe("#ffffff");
  expect(look.darkFg).toBe("rgb(220, 220, 224)");
  expect(look.lightFg).toBe("rgb(22, 22, 24)");
  expect(look.darkIce).toBe("#aecedb");
  expect(look.lightIce).toBe("#5f8fa3");
  // 85% of the panel, no blur, no shadow; on a float the buttons use the text color, not the 2nd gray.
  expect(look.floatBg).toMatch(/^color\(srgb 0\.10\d* 0\.10\d* 0\.11\d* \/ 0\.85\)$|^rgba\(27, 28, 30, 0\.85\)$/);
  expect(look.floatRadius).toBe("999px");
  expect(look.floatButton).toBe("rgb(220, 220, 224)");
  expect(look.panelRadius).toBe("12px");
  expect(look.fieldRadius).toBe("6px");
  expect(look.fieldBg).toBe("rgba(0, 0, 0, 0)");
  expect(look.fieldHeight).toBe("26px");
  expect(look.font.startsWith('"Plus Jakarta Sans"')).toBe(true);
  expect(look.sizes).toEqual(["11px", "12px", "13px", "13px"]);
  // name 62 / three equal / dot 16 / reset 22 inside a 320px inspector with 14px padding (290px wide rows).
  const cols = look.grid.split(" ").map(parseFloat);
  expect(cols[0]).toBe(62);
  expect(cols[4]).toBe(16);
  expect(cols[5]).toBe(22);
  expect(Math.abs(cols[1] - cols[2]) < 0.01 && Math.abs(cols[2] - cols[3]) < 0.01).toBe(true);
  expect(look.shadows).toBe(0);

  // The boxes, dots and resets line up in columns down the card.
  const lefts = await page.evaluate(() => {
    const card = document.querySelector('[data-theme-col="dark"] .pano-studio-card');
    const left = (row, selector) => Math.round(row.querySelector(selector).getBoundingClientRect().left);
    return [...card.querySelectorAll(".pano-studio-row")].map((row) => [left(row, ".pano-studio-row-dot"), left(row, ".pano-studio-row-reset")]);
  });
  expect(new Set(lefts.map((pair) => pair.join())).size).toBe(1);

  await page.mouse.move(1, 1);
  await page.screenshot({ path: testInfo.outputPath("studio_ui.png"), fullPage: true });
  await col(page, "dark").screenshot({ path: testInfo.outputPath("studio_ui_dark.png") });
  await col(page, "light").screenshot({ path: testInfo.outputPath("studio_ui_light.png") });
  console.log(`screenshots: ${testInfo.outputPath("studio_ui.png")}`);
  expect(problems).toEqual([]);
});

// Pointer lock in headless Chromium does not answer the way a desktop browser does (a granted lock can stall the
// test's mouse), so the page's lock is replaced: "refuse" rejects every request (the fallback drag with the cursor
// shown), "grant" grants it and lets the test end it as the browser does on Escape (window.__breakLock).
async function fakeLock(page, mode) {
  await page.evaluate((mode) => {
    let locked = null;
    const changed = () => setTimeout(() => document.dispatchEvent(new Event("pointerlockchange")));
    window.__lockRequests = 0;
    Object.defineProperty(Document.prototype, "pointerLockElement", { configurable: true, get: () => locked });
    Element.prototype.requestPointerLock = function () {
      window.__lockRequests += 1;
      if (mode === "refuse") return Promise.reject(new DOMException("refused", "NotAllowedError"));
      locked = this;
      changed();
      return Promise.resolve();
    };
    document.exitPointerLock = () => {
      locked = null;
      changed();
    };
    window.__breakLock = () => {
      locked = null;
      changed();
    };
  }, mode);
}

async function press(page, locator) {
  const box = await locator.boundingBox();
  const at = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  await page.mouse.move(at.x, at.y);
  await page.mouse.down();
  return at;
}

async function moveRight(page, at, steps, px) {
  for (let i = 1; i <= steps; i += 1) await page.mouse.move(at.x + i * px, at.y);
}

test("a value box drags by its step, Shift is a tenth, and one drag sends one change (lock refused: the same drag)", async ({ page }) => {
  const { problems } = await open(page);
  await fakeLock(page, "refuse");
  const field = col(page, "dark").locator('[data-field="pos-X"]');
  let at = await press(page, field);
  await moveRight(page, at, 10, 5);
  await expect(field).toHaveClass(/is-dragging/);
  await page.mouse.up();
  let log = await events(page);
  expect(await page.evaluate(() => window.__lockRequests)).toBe(1);
  expect(log.filter((e) => e.name === "posX:change").map((e) => e.value)).toEqual([1.7]);
  expect(log.filter((e) => e.name === "posX:input").length).toBeGreaterThan(1);

  await page.keyboard.down("Shift");
  at = await press(page, field);
  await moveRight(page, at, 10, 5);
  await page.mouse.up();
  await page.keyboard.up("Shift");
  log = await events(page);
  expect(log.filter((e) => e.name === "posX:change").map((e) => e.value)).toEqual([1.75]);
  await expect(field.locator(".pano-studio-field-value")).toHaveText("1.75");
  expect(problems).toEqual([]);
});

test("a drag takes the pointer lock past the threshold and gives it back at the end", async ({ page }) => {
  const { problems } = await open(page);
  await fakeLock(page, "grant");
  const field = col(page, "dark").locator('[data-field="pos-X"]');
  const at = await press(page, field);
  await page.mouse.move(at.x + 2, at.y);
  expect(await page.evaluate(() => window.__lockRequests)).toBe(0);
  await moveRight(page, at, 4, 5);
  await expect.poll(() => page.evaluate(() => document.pointerLockElement?.dataset.field)).toBe("pos-X");
  await page.mouse.up();
  await expect.poll(() => page.evaluate(() => document.pointerLockElement)).toBeNull();
  const log = await events(page);
  expect(log.filter((e) => e.name === "posX:change").map((e) => e.value)).toEqual([1.4]);
  expect(problems).toEqual([]);
});

test("Escape during a drag puts the value back, sends no change, and does not reach the editor", async ({ page }) => {
  const { problems } = await open(page);
  await fakeLock(page, "grant");
  await page.evaluate(() => {
    window.__escapes = 0;
    window.addEventListener("keydown", (event) => event.key === "Escape" && (window.__escapes += 1));
  });
  const field = col(page, "dark").locator('[data-field="pos-Y"]');
  const at = await press(page, field);
  await moveRight(page, at, 6, 8);
  await page.keyboard.press("Escape");
  await page.mouse.up();
  const log = await events(page);
  const inputs = log.filter((e) => e.name === "posY:input");
  expect(inputs.length).toBeGreaterThan(1);
  expect(inputs.at(-1).value).toBe(-1.6);
  expect(log.some((e) => e.name === "posY:cancel")).toBe(true);
  expect(log.some((e) => e.name === "posY:change")).toBe(false);
  await expect(field.locator(".pano-studio-field-value")).toHaveText("-1.60");
  expect(await page.evaluate(() => window.__escapes)).toBe(0);
  await expect.poll(() => page.evaluate(() => document.pointerLockElement)).toBeNull();
  expect(problems).toEqual([]);
});

test("the browser ending the lock (its Escape) is the same as Escape, and that Escape does not reach the editor", async ({ page }) => {
  const { problems } = await open(page);
  await fakeLock(page, "grant");
  await page.evaluate(() => {
    window.__escapes = 0;
    window.addEventListener("keydown", (event) => event.key === "Escape" && (window.__escapes += 1));
  });
  const field = col(page, "dark").locator('[data-field="pos-Z"]');
  const at = await press(page, field);
  await moveRight(page, at, 6, 8);
  await expect.poll(() => page.evaluate(() => !!document.pointerLockElement)).toBe(true);
  await page.evaluate(() => window.__breakLock());
  await expect.poll(async () => (await page.evaluate(() => window.__events.map((e) => e.name))).includes("posZ:cancel")).toBe(true);
  await page.keyboard.press("Escape");
  await page.mouse.up();
  const log = await events(page);
  expect(log.filter((e) => e.name === "posZ:input").at(-1).value).toBe(-3.05);
  expect(log.some((e) => e.name === "posZ:change")).toBe(false);
  expect(await page.evaluate(() => window.__escapes)).toBe(0);
  // The release after the cancel does not open the box for typing.
  await expect(field.locator("input")).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("a click without moving opens the box for typing; Enter sends the typed value once, Escape keeps the old one", async ({ page }) => {
  const { problems } = await open(page);
  const target = col(page, "light").locator('[data-field="pos-Z"]');
  await target.click();
  const input = target.locator("input");
  await expect(input).toBeFocused();
  await input.fill("2.5");
  await input.press("Enter");
  let log = await events(page);
  expect(log.filter((e) => e.name === "posZ:change").map((e) => e.value)).toEqual([2.5]);
  await expect(target.locator(".pano-studio-field-value")).toHaveText("2.50");

  await target.click();
  await target.locator("input").fill("9");
  await target.locator("input").press("Escape");
  log = await events(page);
  expect(log.some((e) => e.name === "posZ:change")).toBe(false);
  await expect(target.locator(".pano-studio-field-value")).toHaveText("2.50");

  // The Aspect box reads ratios and names them.
  const aspect = col(page, "light").locator('[data-field="aspect"]');
  await aspect.click();
  await aspect.locator("input").fill("4:3");
  await aspect.locator("input").press("Enter");
  await expect(aspect.locator(".pano-studio-field-value")).toHaveText("4:3");
  expect(problems).toEqual([]);
});

test("the Aspect slider lands only on the presets; free ratios come from the box and the next slider move snaps", async ({ page }) => {
  const { problems } = await open(page);
  const dark = col(page, "dark");
  const slider = dark.locator('[data-slider="aspect"]');
  const value = dark.locator('[data-field="aspect"] .pano-studio-field-value');
  const box = await slider.boundingBox();
  const y = box.y + box.height / 2;
  const changes = async () => (await events(page)).filter((e) => e.name === "aspect:change").map((e) => e.value);
  const knobPos = async () => {
    const knob = await slider.locator(".pano-studio-slider-knob").boundingBox();
    return (knob.x + knob.width / 2 - box.x) / box.width;
  };
  // A press a little off the middle lands on 1:1.
  await page.mouse.click(box.x + box.width * 0.515, y);
  expect(await changes()).toEqual([1]);
  await expect(value).toHaveText("1:1");
  // A press between presets lands on the nearest one, never between: 0.09 is nearer 3:2 (0.148) than 16:9 (0).
  const pos32 = 0.5 - Math.log2(3 / 2) / (2 * Math.log2(16 / 9));
  await page.mouse.click(box.x + box.width * 0.09, y);
  expect(await changes()).toEqual([3 / 2]);
  expect(Math.abs((await knobPos()) - pos32)).toBeLessThan(0.01);
  // A drag across the slider sends only preset ratios.
  await page.mouse.move(box.x + box.width * 0.2, y);
  await page.mouse.down();
  for (let i = 1; i <= 20; i += 1) await page.mouse.move(box.x + box.width * (0.2 + i * 0.03), y);
  await page.mouse.up();
  const presets = [16 / 9, 3 / 2, 4 / 3, 1, 3 / 4, 2 / 3, 9 / 16];
  const inputs = (await events(page)).filter((e) => e.name === "aspect:input").map((e) => e.value);
  expect(inputs.length).toBeGreaterThan(1);
  for (const v of inputs) expect(presets).toContain(v);
  // The arrow keys step preset to preset.
  await page.mouse.click(box.x + box.width * 0.5, y);
  await events(page);
  await slider.press("ArrowRight");
  await slider.press("ArrowRight");
  await slider.press("ArrowLeft");
  expect(await changes()).toEqual([3 / 4, 2 / 3, 3 / 4]);
  // A free ratio typed in the box shows the knob at its place; the next key or press snaps to a preset.
  const field = dark.locator('[data-field="aspect"]');
  await field.click();
  await field.locator("input").fill("1.2");
  await field.locator("input").press("Enter");
  await expect(value).toHaveText("1.20");
  const pos12 = 0.5 - Math.log2(1.2) / (2 * Math.log2(16 / 9));
  expect(Math.abs((await knobPos()) - pos12)).toBeLessThan(0.01);
  await events(page);
  await slider.press("ArrowRight");
  expect(await changes()).toEqual([1]);
  expect(problems).toEqual([]);
});

test("the Keyframe dot sends toggle, a reset at its default and a disabled row send nothing", async ({ page }) => {
  const { problems } = await open(page);
  const dark = col(page, "dark");
  const posRow = dark.locator('[data-row="Position"]');
  await expect(posRow.locator(".pano-studio-keydot")).toHaveAttribute("data-state", "has");
  await posRow.locator(".pano-studio-keydot").click();
  await expect(posRow.locator(".pano-studio-keydot")).toHaveAttribute("data-state", "now");
  await posRow.locator(".pano-studio-icon-btn").click();
  // aria-disabled keeps the tooltip; Playwright treats it as disabled, so the press is forced.
  await dark.locator('[data-row="Rotation"] .pano-studio-icon-btn').click({ force: true });
  await dark.locator('[data-row="Lens"] .pano-studio-field').click({ force: true });
  const log = await events(page);
  expect(log.map((e) => e.name)).toEqual(["pos:key", "pos:reset"]);
  await expect(dark.locator('[data-row="Lens"] input')).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("the top-center line's mark follows its kind: coral, soft yellow, neutral, a turning ring", async ({ page }) => {
  const { problems } = await open(page);
  const marks = await page.evaluate(() => [...document.querySelectorAll('[data-theme-col="dark"] [data-notices] .pano-studio-notice')].map((line) => {
    const dot = line.querySelector(".pano-studio-notice-dot");
    const ring = line.querySelector(".pano-studio-notice-ring");
    return {
      kind: line.dataset.notice,
      dot: dot ? getComputedStyle(dot).backgroundColor : null,
      opacity: dot ? getComputedStyle(dot).opacity : null,
      ring: ring ? getComputedStyle(ring).animationName : null,
    };
  }));
  expect(marks).toEqual([
    { kind: "stopped", dot: "rgb(243, 113, 89)", opacity: "1", ring: null },
    { kind: "warning", dot: "rgb(232, 207, 116)", opacity: "1", ring: null },
    { kind: "info", dot: "rgb(220, 220, 224)", opacity: "0.55", ring: null },
    { kind: "loading", dot: null, opacity: null, ring: "pano-studio-ring" },
  ]);
  expect(problems).toEqual([]);
});

test("the bar at the bottom center: the name never changes its width, a long name ends with an ellipsis and is whole in the tooltip", async ({ page }) => {
  const { problems } = await open(page);
  const bars = await page.evaluate(() => Object.fromEntries([...document.querySelectorAll('[data-theme-col="dark"] [data-bars] [data-bar-row]')].map((bar) => {
    const name = bar.querySelector(".pano-studio-bar-name");
    const style = getComputedStyle(name);
    return [bar.dataset.barRow, {
      width: bar.getBoundingClientRect().width,
      nameWidth: name.getBoundingClientRect().width,
      cut: name.scrollWidth > name.clientWidth,
      ellipsis: style.textOverflow,
      tip: bar.querySelector("[data-bar-name]").dataset.tip,
      text: name.textContent,
    }];
  })));
  // docs/design.md "大きさ": the name's box is 140px whatever the name.
  expect(bars.short.nameWidth).toBe(140);
  expect(bars.long.nameWidth).toBe(140);
  expect(bars.long.width).toBe(bars.short.width);
  expect(bars.short.cut).toBe(false);
  expect(bars.long.cut).toBe(true);
  expect(bars.long.ellipsis).toBe("ellipsis");
  expect(bars.long.tip).toBe("a_very_long_file_name_for_testing.glb");
  expect(bars.long.text).toBe("a_very_long_file_name_for_testing.glb");
  // A sky image's bar has other buttons, so its width may differ; its name's box does not.
  expect(bars.sky.nameWidth).toBe(140);
  expect(problems).toEqual([]);
});

test("a segmented control's thumb slides to the chosen option; hover eases, a press and reduced motion do not", async ({ page }) => {
  const { problems } = await open(page);
  const tabs = col(page, "dark").locator(".pano-studio-tabs");
  const thumb = tabs.locator(".pano-studio-seg-thumb");
  const look = () => thumb.evaluate((el) => {
    const style = getComputedStyle(el);
    return { transform: style.transform, duration: style.transitionDuration, timing: style.transitionTimingFunction, width: el.getBoundingClientRect().width };
  });
  const before = await look();
  expect(before.duration).toBe("0.16s");
  expect(before.timing).toBe("ease-out");
  const item = await tabs.locator('[data-value="camera"]').evaluate((el) => el.getBoundingClientRect().width);
  expect(before.width).toBeCloseTo(item, 0);
  await tabs.locator('[data-value="camera"]').click();
  // Mid-slide the thumb is between the two options; then it sits under Camera.
  await expect.poll(async () => (await look()).transform).toBe(`matrix(1, 0, 0, 1, ${item}, 0)`);
  // Hover: the fill and the text color ease over 120ms; a press changes at once.
  const button = col(page, "dark").locator('.pano-studio-float.is-rail [aria-label="Add"]');
  expect(await button.evaluate((el) => [getComputedStyle(el).transitionProperty, getComputedStyle(el).transitionDuration])).toEqual(["background-color, color", "0.12s, 0.12s"]);
  const box = await button.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  expect(await button.evaluate((el) => getComputedStyle(el).transitionDuration)).toBe("0s");
  await page.mouse.up();
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(await thumb.evaluate((el) => getComputedStyle(el).transitionDuration)).toBe("0s");
  expect(await button.evaluate((el) => getComputedStyle(el).transitionDuration)).toBe("0s");
  expect(problems).toEqual([]);
});
