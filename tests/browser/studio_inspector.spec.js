import { expect, test } from "@playwright/test";

// The new UI's inspector (web_src/components/studio/StudioInspector.vue) on tests/browser/pages/studio_inspector.html,
// which applies its edits with web_src/studio/inspector_actions.js as the editor does: docs/studio-ui.md "インスペクタ"
// and docs/timeline-ui.md "インスペクタの Keyframe のポチ".

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
  await page.setViewportSize({ width: 400, height: 900 });
  await page.goto("/tests/browser/pages/studio_inspector.html");
  await page.waitForFunction(() => window.__check?.done, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__check.error)).toBeNull();
  // A refused pointer lock: the field drags with the cursor shown (headless Chromium's lock stalls the mouse).
  await page.evaluate(() => {
    Element.prototype.requestPointerLock = () => Promise.reject(new DOMException("refused", "NotAllowedError"));
  });
  return problems;
}

const scene = (page, name, ...args) => page.evaluate(([name, args]) => window.__scene[name](...args), [name, args]);
const row = (page, name) => page.locator(`.pano-studio-inspector [data-row="${name}"]`);
const dot = (page, name) => row(page, name).locator(".pano-studio-keydot");
const reset = (page, name) => row(page, name).locator(".pano-studio-row-reset .pano-studio-icon-btn");

async function drag(page, locator, dx, { escape = false } = {}) {
  const box = await locator.boundingBox();
  const at = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  await page.mouse.move(at.x, at.y);
  await page.mouse.down();
  for (let i = 1; i <= 10; i += 1) await page.mouse.move(at.x + (dx * i) / 10, at.y);
  if (escape) await page.keyboard.press("Escape");
  await page.mouse.up();
}

test("a world 3D's card: its rows, their values, the dots and resets in one column, the top row with the name", async ({ page }, testInfo) => {
  const problems = await open(page);
  await expect(page.locator(".pano-studio-inspector-title")).toHaveText("Panorama Studio");
  await expect(page.locator('[data-card="world"] .pano-studio-card-title')).toContainText("chair.glb");
  const names = await page.locator(".pano-studio-inspector .pano-studio-row").evaluateAll((rows) => rows.map((r) => r.dataset.row));
  expect(names).toEqual(["Position", "Rotation", "Scale", "Opacity", "Clip", "Speed"]);
  await expect(page.locator('.pano-studio-inspector [data-row="Animation"]')).toHaveText("Animation");
  await expect(row(page, "Position").locator(".pano-studio-field-value")).toHaveText(["1.20", "-1.60", "-3.00"]);
  await expect(row(page, "Opacity").locator(".pano-studio-field-value")).toHaveText("72");
  await expect(dot(page, "Position")).toHaveAttribute("data-state", "now");
  await expect(dot(page, "Rotation")).toHaveAttribute("data-state", "none");
  await expect(row(page, "Clip").locator(".pano-studio-keydot")).toHaveCount(0);
  const lefts = await page.locator(".pano-studio-inspector .pano-studio-row").evaluateAll((rows) => rows.map((r) => [
    Math.round(r.querySelector(".pano-studio-row-dot").getBoundingClientRect().left),
    Math.round(r.querySelector(".pano-studio-row-reset").getBoundingClientRect().left),
  ].join()));
  expect(new Set(lefts).size).toBe(1);
  // A box's content sits at its left: axis letter, value, unit (docs/studio-ui.md "欄"). The value starts at the same
  // place with or without a unit, and the unit follows the value instead of the box's right edge.
  const starts = await page.locator(".pano-studio-inspector .pano-studio-field").evaluateAll((boxes) => boxes.map((b) => {
    const box = b.getBoundingClientRect();
    const value = b.querySelector(".pano-studio-field-value").getBoundingClientRect();
    const unit = b.querySelector(".pano-studio-field-unit")?.getBoundingClientRect();
    const axis = b.querySelector(".pano-studio-field-axis")?.getBoundingClientRect();
    return { field: b.dataset.field, value: value.left - (axis ? axis.right : box.left), unitGap: unit ? unit.left - value.right : null, right: box.right - (unit || value).right };
  }));
  const byField = Object.fromEntries(starts.map((s) => [s.field, s]));
  // Scale has no unit, Opacity has %, Rotation has °: their values start at the same inset.
  expect(Math.abs(byField.scale.value - byField.opacity.value)).toBeLessThan(1);
  for (const s of starts) expect(s.value).toBeLessThan(6);
  expect(byField.opacity.unitGap).toBeLessThan(4);
  expect(byField.opacity.right).toBeGreaterThan(8);
  // No scrollbar takes width from the cards.
  const body = await page.locator(".pano-studio-inspector-body").evaluate((el) => el.offsetWidth - el.clientWidth);
  expect(body).toBe(0);
  await page.locator(".pano-studio-inspector").screenshot({ path: testInfo.outputPath("inspector_world.png") });
  await page.locator('[data-action="close"]').click();
  expect(await scene(page, "closes")).toBe(1);
  expect(problems).toEqual([]);
});

test("dragging a keyed value between its Keyframes adds one there: one Undo step, and the dot turns to 'now'", async ({ page }) => {
  const problems = await open(page);
  await scene(page, "playhead", 12);
  await expect(dot(page, "Position")).toHaveAttribute("data-state", "has");
  await drag(page, row(page, "Position").locator('[data-field="position_y"]'), 60);
  const state = await scene(page, "state");
  const frames = state.stickers[0].position.keyframes.map((key) => key.frame);
  expect(frames).toEqual([0, 12, 24]);
  expect(state.stickers[0].position.keyframes[1].value[1]).toBeCloseTo(-1.6 + 0.6, 5);
  expect(await scene(page, "history")).toBe(1);
  await expect(dot(page, "Position")).toHaveAttribute("data-state", "now");
  // The other Lanes stay without Keyframes.
  expect(state.stickers[0].rotation.keyframes).toEqual([]);
  expect(problems).toEqual([]);
});

test("Escape during a drag puts the state back, Keyframe and all, and takes no Undo step", async ({ page }) => {
  const problems = await open(page);
  await scene(page, "playhead", 12);
  const before = await scene(page, "state");
  await drag(page, row(page, "Position").locator('[data-field="position_x"]'), 50, { escape: true });
  expect(await scene(page, "state")).toEqual(before);
  expect(await scene(page, "history")).toBe(0);
  await expect(dot(page, "Position")).toHaveAttribute("data-state", "has");
  expect(problems).toEqual([]);
});

test("a drag that comes back to where it began puts the state back, Keyframe and all, and takes no Undo step", async ({ page }) => {
  const problems = await open(page);
  await scene(page, "playhead", 12);
  const before = await scene(page, "state");
  const field = row(page, "Position").locator('[data-field="position_x"]');
  const box = await field.boundingBox();
  const at = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  await page.mouse.move(at.x, at.y);
  await page.mouse.down();
  for (let i = 1; i <= 10; i += 1) await page.mouse.move(at.x + 5 * i, at.y);
  for (let i = 9; i >= 0; i -= 1) await page.mouse.move(at.x + 5 * i, at.y);
  await page.mouse.up();
  expect(await scene(page, "state")).toEqual(before);
  expect(await scene(page, "history")).toBe(0);
  await expect(dot(page, "Position")).toHaveAttribute("data-state", "has");
  expect(problems).toEqual([]);
});

test("a dot press keys only its row at the playhead, a second press removes it; the reset returns the default", async ({ page }) => {
  const problems = await open(page);
  await scene(page, "playhead", 6);
  await dot(page, "Rotation").click();
  await expect(dot(page, "Rotation")).toHaveAttribute("data-state", "now");
  let state = await scene(page, "state");
  expect(state.stickers[0].rotation.keyframes.map((key) => key.frame)).toEqual([6]);
  expect(state.stickers[0].scale.keyframes).toEqual([]);
  await dot(page, "Rotation").click();
  await expect(dot(page, "Rotation")).toHaveAttribute("data-state", "none");

  await expect(reset(page, "Scale")).not.toHaveAttribute("aria-disabled", "true");
  await reset(page, "Scale").click();
  await expect(row(page, "Scale").locator(".pano-studio-field-value")).toHaveText("1.00");
  await expect(reset(page, "Scale")).toHaveAttribute("aria-disabled", "true");
  state = await scene(page, "state");
  expect(state.stickers[0].scale.value).toBe(1);
  expect(await scene(page, "history")).toBe(3);
  expect(problems).toEqual([]);
});

test("the Scale slider sets the value under the press; a sky image shows Rotation, FOV and Opacity", async ({ page }) => {
  const problems = await open(page);
  const slider = row(page, "Scale").locator(".pano-studio-slider");
  const box = await slider.boundingBox();
  await page.mouse.click(box.x + box.width * 0.5, box.y + box.height / 2);
  const value = (await scene(page, "state")).stickers[0].scale.value;
  expect(value).toBeGreaterThan(1.9);
  expect(value).toBeLessThan(2.1);

  await scene(page, "select", { ids: ["sticker_2"] });
  await expect(page.locator('[data-card="sky"] .pano-studio-card-title')).toContainText("moon.png");
  const names = await page.locator(".pano-studio-inspector .pano-studio-row").evaluateAll((rows) => rows.map((r) => r.dataset.row));
  expect(names).toEqual(["Rotation", "FOV", "Opacity"]);
  await expect(row(page, "FOV").locator(".pano-studio-field-value")).toHaveText(["30.0", "20.0"]);
  expect(problems).toEqual([]);
});

test("the Camera tab shows only the Camera card; Panorama grays Aspect, H FOV and Lens, Frame turns them on", async ({ page }, testInfo) => {
  const problems = await open(page);
  await scene(page, "tab", "camera");
  await expect(page.locator(".pano-studio-inspector .pano-studio-card")).toHaveCount(1);
  await expect(page.locator('[data-card="camera"]')).toHaveCount(1);
  const disabled = () => page.locator(".pano-studio-inspector .pano-studio-row.is-disabled").evaluateAll((rows) => rows.map((r) => r.dataset.row));
  expect(await disabled()).toEqual(["Aspect", "H FOV", "Lens"]);
  await expect(row(page, "Range").locator('[aria-checked="true"]')).toHaveText("360°");
  // The mode is two tiles right under the heading (mode-3.html M1), outside the row grid: a picture and the name,
  // 68px tall, the chosen one in the pressed fill, the other without fill.
  const tiles = page.locator('.pano-studio-inspector [data-row="Mode"] .pano-studio-mode-tile');
  await expect(tiles).toHaveText(["Panorama", "Frame"]);
  await expect(tiles.locator("svg")).toHaveCount(2);
  const tileLook = () => tiles.evaluateAll((items) => items.map((t) => {
    const style = getComputedStyle(t);
    return { h: Math.round(t.getBoundingClientRect().height), bg: style.backgroundColor, on: t.getAttribute("aria-checked") };
  }));
  const first = await tileLook();
  expect(first.map((t) => t.h)).toEqual([68, 68]);
  expect(first.map((t) => t.on)).toEqual(["true", "false"]);
  expect(first[1].bg).toBe("rgba(0, 0, 0, 0)");
  expect(first[0].bg).not.toBe("rgba(0, 0, 0, 0)");
  const heading = await page.locator('[data-card="camera"] .pano-studio-card-title').boundingBox();
  const tileBox = await tiles.first().boundingBox();
  expect(Math.round(tileBox.y - (heading.y + heading.height))).toBe(8);
  await page.locator('.pano-studio-inspector [data-row="Mode"] [data-value="perspective"]').click();
  await expect.poll(async () => (await tileLook()).map((t) => t.on)).toEqual(["false", "true"]);
  await expect.poll(disabled).toEqual(["Range"]);
  expect((await scene(page, "state")).camera.projection).toBe("perspective");
  await row(page, "Aspect").locator('[data-field="aspect"]').click();
  await row(page, "Aspect").locator("input").fill("4:3");
  await row(page, "Aspect").locator("input").press("Enter");
  expect((await scene(page, "state")).camera.aspect).toBeCloseTo(4 / 3, 9);
  await reset(page, "Aspect").click();
  expect((await scene(page, "state")).camera.aspect).toBeCloseTo(16 / 9, 9);
  await page.locator(".pano-studio-inspector").screenshot({ path: testInfo.outputPath("inspector_camera.png") });
  expect(problems).toEqual([]);
});

test("nothing selected shows the Scene card: Ground at -1.6, Set ground asks the editor, and an edited ground resets", async ({ page }) => {
  const problems = await open(page);
  await scene(page, "select", { ids: [] });
  await expect(page.locator('[data-card="scene"]')).toHaveCount(1);
  await expect(row(page, "Ground").locator(".pano-studio-field-value")).toHaveText("-1.60");
  await expect(reset(page, "Ground")).toHaveAttribute("aria-disabled", "true");
  await page.locator('[data-action="set-ground"]').click();
  const edits = await page.evaluate(() => window.__edits.map((item) => item.edit.type));
  expect(edits).toContain("set-ground");
  await row(page, "Ground").locator('[data-field="ground"]').click();
  await row(page, "Ground").locator("input").fill("-0.9");
  await row(page, "Ground").locator("input").press("Enter");
  expect((await scene(page, "state")).ground).toBe(-0.9);
  await reset(page, "Ground").click();
  expect("ground" in (await scene(page, "state"))).toBe(false);
  expect(problems).toEqual([]);
});

test("an upstream element's overridden row has the mark; its reset returns the upstream value and the mark goes", async ({ page }) => {
  const problems = await open(page);
  await scene(page, "select", { ids: ["upstream:scene_up:sticker_1"] });
  await expect(row(page, "Position").locator(".pano-studio-row-mark")).toHaveCount(1);
  await expect(row(page, "Rotation").locator(".pano-studio-row-mark")).toHaveCount(0);
  await expect(row(page, "Position").locator(".pano-studio-field-value")).toHaveText(["3.00", "0.00", "-2.00"]);
  await reset(page, "Position").click();
  await expect(row(page, "Position").locator(".pano-studio-field-value")).toHaveText(["0.00", "0.00", "-2.00"]);
  await expect(row(page, "Position").locator(".pano-studio-row-mark")).toHaveCount(0);
  await expect(reset(page, "Position")).toHaveAttribute("aria-disabled", "true");
  expect((await scene(page, "state")).upstream).toEqual([]);
  expect(problems).toEqual([]);
});

test("selecting Keyframes brings the Easing panel at the bottom: presets, a square graph, the bezier text, its reset", async ({ page }, testInfo) => {
  const problems = await open(page);
  await expect(page.locator(".pano-studio-easing")).toHaveCount(0);
  await scene(page, "select", { ids: ["sticker_1"], keyframes: { owner: "sticker_1", lane: null, frames: [0] } });
  const panel = page.locator(".pano-studio-easing");
  await expect(panel).toBeVisible();
  // Icons only; the names are the tooltips and the accessible names (docs/studio-ui.md "Easing のパネル").
  const presets = panel.locator(".pano-studio-seg-item");
  await expect(presets).toHaveText(["", "", "", "", ""]);
  expect(await presets.evaluateAll((items) => items.map((item) => [item.title, item.getAttribute("aria-label"), item.querySelectorAll("svg").length])))
    .toEqual(["Hold", "Linear", "Ease in-out", "Ease in", "Ease out"].map((name) => [name, name, 1]));
  await expect(panel.locator('[aria-checked="true"]')).toHaveAttribute("title", "Ease in-out");
  await expect(panel.locator(".pano-studio-easing-text")).toHaveValue("0.42, 0, 0.58, 1");
  await expect(panel.locator(".pano-studio-icon-btn")).toHaveAttribute("aria-disabled", "true");
  // The panel sits at the bottom of the inspector; the graph is square and as wide as the panel's content.
  await page.waitForTimeout(200);
  const boxes = await page.evaluate(() => {
    const rect = (selector) => document.querySelector(selector).getBoundingClientRect();
    return { inspector: rect(".pano-studio-inspector"), panel: rect(".pano-studio-easing"), graph: rect(".pano-studio-easing-graph") };
  });
  expect(Math.abs(boxes.panel.bottom - (boxes.inspector.bottom - 1))).toBeLessThan(1.5);
  expect(boxes.graph.width).toBeCloseTo(boxes.graph.height, 0);
  expect(boxes.graph.width).toBeCloseTo(320 - 2 - 28, -1);
  await page.locator(".pano-studio-inspector").screenshot({ path: testInfo.outputPath("inspector_easing.png") });

  await panel.locator('[data-value="Linear"]').click();
  let state = await scene(page, "state");
  expect(state.stickers[0].position.keyframes[0].easing).toEqual([0, 0, 1, 1]);
  await expect(panel.locator(".pano-studio-easing-text")).toHaveValue("0, 0, 1, 1");
  await expect(panel.locator(".pano-studio-icon-btn")).not.toHaveAttribute("aria-disabled", "true");

  // Typing four values applies them; pasting does too.
  const text = panel.locator(".pano-studio-easing-text");
  await text.fill("0.1, 0.2, 0.3, 0.9");
  await text.press("Enter");
  state = await scene(page, "state");
  expect(state.stickers[0].position.keyframes[0].easing).toEqual([0.1, 0.2, 0.3, 0.9]);
  await text.evaluate((el) => {
    const data = new DataTransfer();
    data.setData("text", "cubic-bezier(0.25, 0.1, 0.25, 1)");
    el.dispatchEvent(new ClipboardEvent("paste", { clipboardData: data, bubbles: true, cancelable: true }));
  });
  await expect(text).toHaveValue("0.25, 0.1, 0.25, 1");
  state = await scene(page, "state");
  expect(state.stickers[0].position.keyframes[0].easing).toEqual([0.25, 0.1, 0.25, 1]);

  // Dragging a control point bends the curve: one Undo step.
  const history = await scene(page, "history");
  const handle = panel.locator('[data-handle="0"]');
  const hb = await handle.boundingBox();
  await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2);
  await page.mouse.down();
  await page.mouse.move(hb.x + 20, hb.y - 30, { steps: 5 });
  await page.mouse.up();
  expect(await scene(page, "history")).toBe(history + 1);
  state = await scene(page, "state");
  expect(state.stickers[0].position.keyframes[0].easing[0]).toBeGreaterThan(0.25);

  await panel.locator(".pano-studio-icon-btn").click();
  state = await scene(page, "state");
  expect(state.stickers[0].position.keyframes[0].easing).toEqual([0.42, 0, 0.58, 1]);

  await scene(page, "select", { ids: ["sticker_1"] });
  await expect(panel).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("in a short inspector the graph shrinks, square, to leave EASING_MIN_ABOVE above the panel", async ({ page }) => {
  const problems = await open(page);
  await scene(page, "height", 560);
  await scene(page, "select", { ids: ["sticker_1"], keyframes: { owner: "sticker_1", lane: null, frames: [0] } });
  await page.waitForTimeout(250);
  const boxes = await page.evaluate(() => {
    const rect = (selector) => document.querySelector(selector).getBoundingClientRect();
    return { head: rect(".pano-studio-inspector-head"), panel: rect(".pano-studio-easing"), graph: rect(".pano-studio-easing-graph"), inspector: rect(".pano-studio-inspector") };
  });
  expect(boxes.graph.width).toBeCloseTo(boxes.graph.height, 0);
  expect(boxes.graph.width).toBeLessThan(290);
  // The area between the top row and the panel keeps 180px.
  expect(Math.round(boxes.panel.top - boxes.head.bottom)).toBeGreaterThanOrEqual(179);
  expect(Math.round(boxes.panel.top - boxes.head.bottom)).toBeLessThanOrEqual(182);
  expect(problems).toEqual([]);
});
