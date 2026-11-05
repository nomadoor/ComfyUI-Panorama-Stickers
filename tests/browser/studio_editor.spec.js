import { expect, test } from "@playwright/test";

// The new editor's shell and stage (web_src/studio/editor.js, stage.js, components/studio/StudioEditor.vue) on
// tests/browser/pages/studio_editor.html: docs/studio-ui.md "画面の区画" and docs/space-and-view.md "マウスとキー",
// "視点の操作の部品", "地面のグリッド", "ウィンドウがフォーカスを失ったとき", "視点の記憶". The stage draws
// the background with the ground grid through the lower three.js view, in a real browser engine.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

const sample = (page) => page.evaluate(() => window.__studio.sample());
const memory = (page) => page.evaluate(() => window.__studio.memory());
// The mean absolute difference of two samples, per channel value.
const diff = (a, b) => a.reduce((sum, value, index) => sum + Math.abs(value - b[index]), 0) / a.length;
// The spread of brightness in a sample (an empty or flat canvas has none).
function spread(pixels) {
  let low = 765;
  let high = 0;
  for (let i = 0; i < pixels.length; i += 4) {
    const luma = pixels[i] + pixels[i + 1] + pixels[i + 2];
    low = Math.min(low, luma);
    high = Math.max(high, luma);
  }
  return high - low;
}

// Samples until two in a row are the same (the eased moves have ended and the frame is settled).
async function settled(page) {
  let last = await sample(page);
  for (let i = 0; i < 60; i += 1) {
    await page.waitForTimeout(100);
    const next = await sample(page);
    if (diff(last, next) === 0) return next;
    last = next;
  }
  return last;
}

async function open(page, testInfo, query = "") {
  const problems = watch(page);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`/tests/browser/pages/studio_editor.html${query}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  // The background loaded and the stage drew it: the loading line has gone.
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  const renderer = await page.evaluate(() => window.__studio.rendererOf());
  testInfo.annotations.push({ type: "renderer", description: String(renderer) });
  console.log(`renderer: ${renderer}`);
  return { problems, stage: page.locator("[data-stage-canvas]") };
}

async function stageCenter(stage) {
  const box = await stage.boundingBox();
  return { x: box.x + box.width / 2, y: box.y + box.height / 2, box };
}

test("the shell has its regions, the stage draws the background and the grid, and Hide Grid hides the grid", async ({ page }, testInfo) => {
  const { problems, stage } = await open(page, testInfo);
  // The regions (docs/studio-ui.md "画面の区画"): no header; the inspector on the right with the name and ✕.
  for (const region of ["stage", "timeline", "inspector", "splitter", "bar", "output"]) {
    await expect(page.locator(`[data-region="${region}"]`)).toHaveCount(1);
  }
  await expect(page.locator(".pano-studio-inspector-title")).toHaveText("Panorama Studio");
  const places = await page.evaluate(() => {
    const box = (selector) => document.querySelector(selector).getBoundingClientRect().toJSON();
    return {
      view: { width: window.innerWidth, height: window.innerHeight },
      frame: box(".pano-studio-editor"),
      stage: box('[data-region="stage"]'),
      inspector: box('[data-region="inspector"]'),
      timeline: box('[data-region="timeline"]'),
      tabs: box(".pano-studio-tabs"),
      rail: box(".pano-studio-at-rail"),
      nav: box(".pano-studio-at-nav"),
      buttons: box(".pano-studio-at-buttons"),
      output: box(".pano-studio-at-output"),
    };
  });
  // A modal frame (docs/design.md "形と重なり"): max(720px, 80vw) x max(520px, 82vh) up to 96vw x 94vh, centered;
  // three windows on it 8px in from its edges and 8px apart; the timeline under the stage only.
  const { view, frame } = places;
  expect(frame.width).toBeCloseTo(Math.min(Math.max(720, view.width * 0.8), view.width * 0.96), 0);
  expect(frame.height).toBeCloseTo(Math.min(Math.max(520, view.height * 0.82), view.height * 0.94), 0);
  expect(frame.left).toBeCloseTo((view.width - frame.width) / 2, 0);
  expect(frame.top).toBeCloseTo((view.height - frame.height) / 2, 0);
  expect(places.stage.left - frame.left).toBeCloseTo(8, 0);
  expect(places.stage.top - frame.top).toBeCloseTo(8, 0);
  expect(places.inspector.width).toBe(320);
  expect(places.inspector.left - places.stage.right).toBeCloseTo(8, 0);
  expect(frame.right - places.inspector.right).toBeCloseTo(8, 0);
  expect(places.inspector.top - frame.top).toBeCloseTo(8, 0);
  expect(frame.bottom - places.inspector.bottom).toBeCloseTo(8, 0);
  expect(places.timeline.top - places.stage.bottom).toBeCloseTo(8, 0);
  expect(places.timeline.left).toBeCloseTo(places.stage.left, 0);
  expect(places.timeline.right).toBeCloseTo(places.stage.right, 0);
  expect(frame.bottom - places.timeline.bottom).toBeCloseTo(8, 0);
  // The windows and the floats carry no line.
  expect(await page.evaluate(() => [".pano-studio-inspector", ".pano-studio-tl", ".pano-studio-tabs", ".pano-studio-output", ".pano-studio-at-rail"]
    .map((selector) => getComputedStyle(document.querySelector(selector)).borderTopWidth))).toEqual(["0px", "0px", "0px", "0px", "0px"]);
  // The floats sit 16px from the stage's edges.
  expect(places.tabs.left - places.stage.left).toBe(16);
  expect(places.tabs.top - places.stage.top).toBe(16);
  // The left column and the knobs sit at the vertical middle of the stage, left and right.
  const middle = places.stage.top + places.stage.height / 2;
  expect(Math.abs(places.rail.top + places.rail.height / 2 - middle)).toBeLessThan(2);
  expect(Math.abs(places.nav.top + places.nav.height / 2 - middle)).toBeLessThan(2);
  expect(places.stage.right - places.nav.right).toBe(16);
  expect(places.stage.right - places.buttons.right).toBe(16);
  expect(places.stage.bottom - places.buttons.bottom).toBe(16);
  expect(places.stage.right - places.output.right).toBe(16);
  // Cursor is chosen; Paint, Mask (tests/browser/studio_paint.spec.js), Add (tests/browser/studio_add.spec.js) and
  // Camera (tests/browser/studio_camera_button.spec.js) can be pressed; Undo and Redo have nothing to do yet.
  await expect(page.locator('[data-tool="cursor"]')).toHaveClass(/is-active/);
  for (const tool of ["paint", "mask", "add", "camera"]) await expect(page.locator(`[data-tool="${tool}"]`)).not.toHaveAttribute("aria-disabled", "true");
  for (const tool of ["undo", "redo"]) {
    await expect(page.locator(`[data-tool="${tool}"]`)).toHaveAttribute("aria-disabled", "true");
  }
  // The 3D tab is chosen; the Camera tab can be chosen (tests/browser/studio_camera_wired.spec.js).
  await expect(page.locator('.pano-studio-tabs [data-value="3d"]')).toHaveAttribute("aria-selected", "true");
  await expect(page.locator('.pano-studio-tabs [data-value="camera"]')).not.toHaveAttribute("aria-disabled", "true");

  const shown = await settled(page);
  expect(spread(shown)).toBeGreaterThan(120);
  await page.locator('[data-action="grid"]').click();
  await expect(page.locator('[data-action="grid"]')).toHaveAttribute("aria-checked", "false");
  const hidden = await settled(page);
  // The ground half changes most: the ground grid lies below the horizon, and the sky grid (quieter than the
  // ground's, its Z axis meridian in ice) changes the sky less.
  const half = shown.length / 2;
  const ground = diff(shown.slice(half), hidden.slice(half));
  expect(ground).toBeGreaterThan(0.5);
  expect(diff(shown.slice(0, half * 0.8), hidden.slice(0, half * 0.8))).toBeLessThan(ground / 2);
  await page.locator('[data-action="grid"]').click();
  await page.screenshot({ path: testInfo.outputPath("studio_editor.png") });
  console.log(`screenshot: ${testInfo.outputPath("studio_editor.png")}`);
  expect(await page.evaluate(() => window.__studio.contextLost)).toBe(false);
  expect(problems).toEqual([]);
  await stage.isVisible();
});

// The real shape after a run: the background IMAGE is made upstream (no file to read), and only the node's own result
// has it (docs/adr/0003-external-input-sticker-failure-boundaries.md, Amendment 2026-03-11).
test("a background IMAGE made upstream shows from the node's own run result (pano_input_images)", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo, "?processed");
  const mean = (pixels) => pixels.reduce((sum, value, index) => (index % 4 === 3 ? sum : sum + value), 0) / ((pixels.length / 4) * 3);
  await expect.poll(async () => mean(await sample(page)), { timeout: 20_000 }).toBeGreaterThan(40);
  expect(problems).toEqual([]);
});

test("a left drag turns the view, the wheel moves it toward the pointer, and the close remembers the view", async ({ page }, testInfo) => {
  const { problems, stage } = await open(page, testInfo);
  const at = await stageCenter(stage);
  const before = await settled(page);
  await page.mouse.move(at.x, at.y);
  await page.mouse.down();
  // 160px: about 24° on the modal's stage, away from the page's 30° stripes, which would look the same after a 30° turn.
  for (let i = 1; i <= 10; i += 1) await page.mouse.move(at.x + i * 16, at.y);
  // A drag looks around with the grabbing cursor.
  expect(await stage.evaluate((el) => el.style.cursor)).toBe("grabbing");
  await page.mouse.up();
  const turned = await settled(page);
  expect(diff(before, turned)).toBeGreaterThan(5);

  // The wheel below the horizon (on the ground) moves the view toward the pointer.
  await page.mouse.move(at.x, at.y + at.box.height * 0.3);
  await page.mouse.wheel(0, -120);
  await settled(page);
  await page.evaluate(() => window.__studio.close());
  const kept = await memory(page);
  expect(kept.mode).toBe("pano");
  expect(Math.abs(kept.yaw_deg)).toBeGreaterThan(20);
  expect(Math.hypot(...kept.position)).toBeGreaterThan(0.1);
  // Opening again starts from the view it was closed with.
  await page.evaluate(() => window.__studio.open());
  await settled(page);
  await page.evaluate(() => window.__studio.close());
  const again = await memory(page);
  expect(again.position.map((v) => v.toFixed(6))).toEqual(kept.position.map((v) => v.toFixed(6)));
  expect(again.yaw_deg).toBeCloseTo(kept.yaw_deg, 6);
  expect(await page.evaluate(() => window.__studio.contextLost)).toBe(false);
  expect(problems).toEqual([]);
});

test("the knobs light for their operation, W moves until released or the window blurs, and Reset View goes home", async ({ page }, testInfo) => {
  const { problems, stage } = await open(page, testInfo);
  // The knobs lit, quietly (the hover's fill) or strongly (the lit fill, only while a knob itself is dragged;
  // docs/space-and-view.md "視点の操作の部品").
  const lit = () => page.evaluate(() => [...document.querySelectorAll("[data-knob].is-lit, [data-knob].is-hint")].map((el) => el.dataset.knob));
  const strong = () => page.evaluate(() => [...document.querySelectorAll("[data-knob].is-lit")].map((el) => el.dataset.knob));
  expect(await lit()).toEqual([]);
  // Alt lights the knobs of Alt's drags.
  await page.keyboard.down("Alt");
  await expect.poll(lit).toEqual(["orbit", "move"]);
  // Once an Alt drag starts only its knob lights: Alt + left drag orbits, Alt + right drag moves forward/back
  // (docs/space-and-view.md "視点の操作の部品").
  const at = await stageCenter(stage);
  await page.mouse.move(at.x, at.y);
  await page.mouse.down();
  await page.mouse.move(at.x + 30, at.y);
  await expect.poll(lit).toEqual(["orbit"]);
  expect(await strong()).toEqual([]);
  await page.mouse.up();
  await expect.poll(lit).toEqual(["orbit", "move"]);
  await page.mouse.down({ button: "right" });
  await page.mouse.move(at.x + 30, at.y + 30);
  await expect.poll(lit).toEqual(["move"]);
  await page.mouse.up({ button: "right" });
  await expect.poll(lit).toEqual(["orbit", "move"]);
  await page.keyboard.up("Alt");
  await expect.poll(lit).toEqual([]);
  // A right drag on the stage pans: the four arrows light (ADR 0060).
  await page.mouse.move(at.x, at.y);
  await page.mouse.down({ button: "right" });
  await page.mouse.move(at.x + 30, at.y + 10);
  await expect.poll(lit).toEqual(["pan"]);
  await page.mouse.up({ button: "right" });
  await expect.poll(lit).toEqual([]);
  // Dragging the sphere knob orbits and lights it; the editor shows the grabbing cursor.
  const sphere = await page.locator('[data-knob="orbit"]').boundingBox();
  await page.mouse.move(sphere.x + sphere.width / 2, sphere.y + sphere.height / 2);
  await page.mouse.down();
  await page.mouse.move(sphere.x - 40, sphere.y + 10);
  await expect.poll(lit).toEqual(["orbit"]);
  expect(await strong()).toEqual(["orbit"]);
  // W during the sphere's drag lights the road's arrows quietly: only the dragged knob is strong.
  await page.keyboard.down("KeyW");
  await expect.poll(lit).toEqual(["orbit", "move"]);
  expect(await strong()).toEqual(["orbit"]);
  await page.keyboard.up("KeyW");
  await expect(page.locator(".pano-studio-editor")).toHaveClass(/is-knob-drag/);
  await page.mouse.up();
  await expect.poll(lit).toEqual([]);

  // Reset View brings the view back to the output view (the origin, level, yaw 0).
  await page.locator('[data-action="reset-view"]').click();
  await settled(page);
  await page.evaluate(() => window.__studio.close());
  let kept = await memory(page);
  expect(Math.hypot(...kept.position)).toBeLessThan(1e-6);
  expect(Math.abs(kept.yaw_deg)).toBeLessThan(1e-6);
  await page.evaluate(() => window.__studio.open());
  await settled(page);

  // W moves forward while held, lighting the arrows; a blur releases it.
  await page.mouse.move(at.x, at.y);
  await page.keyboard.down("KeyW");
  await expect.poll(lit).toEqual(["move"]);
  await page.waitForTimeout(300);
  await page.evaluate(() => window.dispatchEvent(new Event("blur")));
  await expect.poll(lit).toEqual([]);
  await settled(page);
  await page.evaluate(() => window.__studio.close());
  kept = await memory(page);
  const moved = Math.hypot(...kept.position);
  expect(moved).toBeGreaterThan(0.2);
  await page.evaluate(() => window.__studio.open());
  await page.waitForTimeout(400);
  await page.evaluate(() => window.__studio.close());
  // Released by the blur: it did not go on (the key's keyup never came).
  expect(Math.hypot(...(await memory(page)).position)).toBeCloseTo(moved, 6);
  await page.keyboard.up("KeyW");

  // A context menu anywhere in the editor releases the keys (Chromium sends no keyup while it is open).
  await page.evaluate(() => window.__studio.open());
  await page.keyboard.down("KeyD");
  await expect.poll(lit).toEqual(["move"]);
  await page.locator('[data-region="inspector"]').dispatchEvent("contextmenu");
  await expect.poll(lit).toEqual([]);
  await page.keyboard.up("KeyD");
  expect(problems).toEqual([]);
});

test("Frame Selected with nothing to frame says so on the top-center line; Escape closes the editor", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  await page.locator('[data-action="frame-selected"]').click();
  await expect(page.locator(".pano-studio-notice")).toHaveText("Nothing to frame");
  await expect(page.locator(".pano-studio-notice-dot")).toHaveCount(1);
  await expect(page.locator(".pano-studio-notice")).toHaveAttribute("data-notice", "stopped");
  // It goes BOUND_NOTICE_SECONDS after it was shown.
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 4000 });
  await page.keyboard.press("Escape");
  await expect(page.locator(".pano-studio-editor")).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("an opening that throws leaves nothing behind, and the editor opens again", async ({ page }, testInfo) => {
  await open(page, testInfo);
  await page.evaluate(() => window.__studio.close());
  await expect(page.locator(".pano-studio-editor")).toHaveCount(0);
  const before = await page.evaluate(() => document.body.childElementCount);
  for (const where of ["early", "late"]) {
    expect(await page.evaluate((at) => window.__studio.openBroken(at), where)).toBe(where === "early" ? "broken title" : "broken redraw");
    await expect(page.locator(".pano-studio-editor")).toHaveCount(0);
    expect(await page.evaluate(() => document.body.childElementCount)).toBe(before);
    expect(await page.evaluate(() => window.__studio.session())).toEqual({ open: false, flush: false });
    // The next opening works.
    await page.evaluate(() => window.__studio.open());
    await expect(page.locator(".pano-studio-editor")).toHaveCount(1);
    await page.evaluate(() => window.__studio.close());
    await expect(page.locator(".pano-studio-editor")).toHaveCount(0);
  }
});

test("the tabs are 108px each; a click on the backdrop closes like ✕, a drag from inside the frame does not", async ({ page }, testInfo) => {
  const { problems, stage } = await open(page, testInfo);
  const widths = await page.locator(".pano-studio-tabs .pano-studio-seg-item").evaluateAll((items) => items.map((el) => el.getBoundingClientRect().width));
  expect(widths).toEqual([108, 108]);
  // A drag that starts on the stage and ends on the dimmed page keeps the editor.
  const { x, y } = await stageCenter(stage);
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(8, 8, { steps: 6 });
  await page.mouse.up();
  await expect(page.locator(".pano-studio-editor")).toHaveCount(1);
  // A right click on the backdrop keeps it too; a left click closes it.
  await page.mouse.click(8, 8, { button: "right" });
  await expect(page.locator(".pano-studio-editor")).toHaveCount(1);
  await page.mouse.click(8, 8);
  await expect(page.locator(".pano-studio-editor")).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("the Output window opens and folds with a short size and opacity move, its content kept in the page", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  const output = page.locator(".pano-studio-output");
  const win = page.locator(".pano-studio-output-window");
  await expect(output).toHaveClass(/is-collapsed/);
  expect(await win.evaluate((el) => [getComputedStyle(el).transitionDuration, getComputedStyle(el).transitionTimingFunction])).toEqual(["0.16s, 0.16s", "ease-out, ease-out"]);
  const body = await page.locator(".pano-studio-output-body").elementHandle();
  await page.locator('[data-action="output-fold"]').click();
  await expect(output).not.toHaveClass(/is-collapsed/);
  await expect.poll(() => win.evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
  await page.locator('[data-action="output-fold"]').click();
  await expect.poll(() => win.evaluate((el) => getComputedStyle(el).opacity)).toBe("0");
  // The same element the whole time: what it shows is not made again.
  expect(await body.evaluate((el) => el.isConnected)).toBe(true);
  // Folded, the pill takes the clicks and the window none.
  expect(await win.evaluate((el) => getComputedStyle(el).pointerEvents)).toBe("none");
  expect(problems).toEqual([]);
});

// docs/space-and-view.md "寄る", "マウスとキー" (ADR 0061): Alt + wheel and a pinch (Ctrl + wheel) change the view's FOV
// at the screen's center, P staying; Meta + wheel is the browser's; Reset View is off at the start view, on once the
// view zoomed, and brings the FOV back to 100°; the memory keeps the FOV.
test("Alt + wheel and a pinch zoom the view's FOV; Reset View is off at the start and brings the FOV back", async ({ page }, testInfo) => {
  const { problems, stage } = await open(page, testInfo);
  const reset = page.locator('[data-action="reset-view"]');
  const fov = async () => (await page.evaluate(() => window.__studio.pose())).hFOV_deg;
  await expect(reset).toHaveAttribute("aria-disabled", "true");
  await expect(reset).toHaveAttribute("data-tip", "Reset view · Already at the start");
  const at = await stageCenter(stage);
  await page.mouse.move(at.x, at.y);
  const before = await settled(page);
  const start = await page.evaluate(() => window.__studio.pose());
  await page.keyboard.down("Alt");
  for (let i = 0; i < 3; i += 1) await page.mouse.wheel(0, -100);
  await page.keyboard.up("Alt");
  expect(await fov()).toBe(94);
  const zoomed = await page.evaluate(() => window.__studio.pose());
  expect(zoomed.position).toEqual(start.position);
  expect(zoomed.yaw_deg).toBeCloseTo(start.yaw_deg, 9);
  // The picture is drawn nearer.
  expect(diff(await settled(page), before)).toBeGreaterThan(1);
  await expect(reset).not.toHaveAttribute("aria-disabled", "true");
  // A pinch comes as Ctrl + wheel, a trackpad's fine events added up to steps; its default (the page's zoom) is stopped.
  const prevented = await page.evaluate(({ x, y }) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const pinch = (deltaY, mods) => {
      const event = new WheelEvent("wheel", { deltaY, deltaMode: 0, clientX: x, clientY: y, bubbles: true, cancelable: true, ...mods });
      canvas.dispatchEvent(event);
      return event.defaultPrevented;
    };
    const results = [];
    for (let i = 0; i < 4; i += 1) results.push(pinch(25, { ctrlKey: true }));
    // Meta + wheel is left to the browser and changes nothing.
    results.push(pinch(-100, { metaKey: true }));
    return results;
  }, at);
  expect(prevented).toEqual([true, true, true, true, false]);
  expect(await fov()).toBe(96);
  // The memory keeps the FOV and opens with it.
  await page.evaluate(() => window.__studio.close());
  expect((await memory(page)).hFOV_deg).toBe(96);
  await page.evaluate(() => window.__studio.open());
  await expect.poll(fov).toBe(96);
  // Reset View eases back to the start view, the FOV with the rest; then it is off again.
  await page.locator('[data-action="reset-view"]').click();
  await expect.poll(fov).toBe(100);
  await expect(page.locator('[data-action="reset-view"]')).toHaveAttribute("aria-disabled", "true");
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "右下の View の群" and docs/space-and-view.md "寄る" (ADR 0061, mock B2): the FOV number shows the view's
// FOV in a fixed width, a drag right makes it larger (4 px a degree, Shift finer), its arrow keys step it by 2°, and its
// reset (off at 100°) brings it back; the buttons right of it never move.
test("the FOV number drags and steps the view's FOV in a fixed width; its reset is off at 100°", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  const number = page.locator('[data-action="fov"]');
  const reset = page.locator('[data-action="fov-reset"]');
  const fov = async () => (await page.evaluate(() => window.__studio.pose())).hFOV_deg;
  await expect(number).toHaveText("100°");
  await expect(number).toHaveAttribute("data-tip", "Field of view (Alt+Wheel)");
  await expect(reset).toHaveAttribute("aria-disabled", "true");
  const places = async () => page.evaluate(() => {
    const box = (selector) => document.querySelector(selector).getBoundingClientRect().toJSON();
    return { number: box('[data-action="fov"]'), frame: box('[data-action="frame-selected"]'), grid: box('[data-action="grid"]') };
  });
  const start = await places();
  expect(start.number.height).toBe(34);
  // A drag right of 20 px: 5° larger; Shift keeps a tenth of the movement.
  const box = await number.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 10, box.y + box.height / 2);
  await page.mouse.move(box.x + box.width / 2 + 20, box.y + box.height / 2);
  await expect.poll(fov).toBe(105);
  // Shift keeps a tenth: a slow fine drag (small moves, each well under a degree) still adds up to whole degrees.
  await page.keyboard.down("Shift");
  for (let x = 24; x <= 60; x += 4) await page.mouse.move(box.x + box.width / 2 + x, box.y + box.height / 2);
  await page.keyboard.up("Shift");
  await expect.poll(fov).toBe(106);
  await page.mouse.move(box.x + box.width / 2 - 140, box.y + box.height / 2);
  await page.mouse.up();
  await expect.poll(fov).toBe(56);
  await expect(number).toHaveText("56°");
  await expect(reset).not.toHaveAttribute("aria-disabled", "true");
  // A press that does not move changes nothing.
  await number.click();
  expect(await fov()).toBe(56);
  // The focused number steps with the arrow keys.
  await number.focus();
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("ArrowRight");
  expect(await fov()).toBe(60);
  await page.keyboard.press("ArrowDown");
  expect(await fov()).toBe(58);
  // Shift: one degree (the view holds whole degrees).
  await page.keyboard.press("Shift+ArrowUp");
  expect(await fov()).toBe(59);
  await page.keyboard.press("Shift+ArrowLeft");
  await page.keyboard.press("Shift+ArrowLeft");
  expect(await fov()).toBe(57);
  // The width holds "140°": the buttons stay where they were at 35°, 100° and 140°.
  for (const value of [35, 140]) {
    await page.evaluate((v) => window.__studio.stage().setFov(v), value);
    await expect(number).toHaveText(`${value}°`);
    const now = await places();
    expect(now.number.width).toBe(start.number.width);
    expect(now.frame.x).toBe(start.frame.x);
    expect(now.grid.x).toBe(start.grid.x);
  }
  // Its reset: the FOV only, back to 100°.
  await reset.click();
  await expect(number).toHaveText("100°");
  await expect(reset).toHaveAttribute("aria-disabled", "true");
  expect((await places()).frame.x).toBe(start.frame.x);
  // Alt held lights it (Alt + wheel changes it), not during an Alt drag (docs/space-and-view.md "寄る").
  const { x, y } = await stageCenter(page.locator("[data-stage-canvas]"));
  await page.mouse.move(x, y);
  await expect(number).not.toHaveClass(/is-lit/);
  await page.keyboard.down("Alt");
  await expect(number).toHaveClass(/is-lit/);
  await page.mouse.down();
  await page.mouse.move(x + 20, y);
  await expect(number).not.toHaveClass(/is-lit/);
  await page.mouse.up();
  await expect(number).toHaveClass(/is-lit/);
  await page.keyboard.up("Alt");
  await expect(number).not.toHaveClass(/is-lit/);
  expect(problems).toEqual([]);
});

// docs/space-and-view.md "Sky だけのときのホイール" (ADR 0061): no World content: the wheel moves and says Sky only.
test("a wheel step with only the background says Sky only and Alt+wheel zooms", async ({ page }, testInfo) => {
  const { problems, stage } = await open(page, testInfo);
  const at = await stageCenter(stage);
  await page.mouse.move(at.x, at.y);
  await page.mouse.wheel(0, -100);
  const notice = page.locator(".pano-studio-notice");
  await expect(notice).toHaveText("Sky only · Alt+wheel zooms");
  await expect(notice).toHaveAttribute("data-notice", "info");
  expect(problems).toEqual([]);
});
