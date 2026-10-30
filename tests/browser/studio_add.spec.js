import { expect, test } from "@playwright/test";

// Add and the drop on the new editor's stage (web_src/studio/add_files.js, drop_input.js, landing.js,
// components/studio/StudioPlaceChoice.vue, StudioDropMarker.vue) on tests/browser/pages/studio_add.html, in a real browser
// engine: docs/studio-ui.md "Add とドロップの見せ方", "閉じ方" (Escape's step 3) and docs/space-and-view.md "Add とドロップ".
// The page stands in for ComfyUI's upload and the 3D file route; the GLB is drawn by the three.js view.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function open(page, testInfo) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto("/tests/browser/pages/studio_add.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice.is-loading")).toHaveCount(0, { timeout: 30_000 });
  const renderer = await page.evaluate(() => window.__studio.rendererOf());
  testInfo.annotations.push({ type: "renderer", description: String(renderer) });
  console.log(`renderer: ${renderer}`);
  const box = await page.locator("[data-stage-canvas]").boundingBox();
  return {
    problems,
    sky: { x: box.x + box.width * 0.5, y: box.y + box.height * 0.15 },
    ground: { x: box.x + box.width * 0.5, y: box.y + box.height * 0.85 },
  };
}

async function drag(page, from, to, steps = 8) {
  await page.mouse.move(from.x, from.y);
  await page.mouse.down();
  for (let i = 1; i <= steps; i += 1) await page.mouse.move(from.x + (to.x - from.x) * i / steps, from.y + (to.y - from.y) * i / steps);
  await page.mouse.up();
}

const stickers = (page) => page.evaluate(() => window.__studio.session.state.stickers.map((s) => ({ id: s.id, placement: s.placement, source: s.source, position: s.position?.value ?? null })));
const selectedRow = (page) => page.evaluate(() => window.__studio.session.selection.row);

// Whether the drop label's rectangle stays off the mark's (its fills and brackets) and inside the stage.
async function labelOffMark(page) {
  return page.evaluate(() => {
    const label = document.querySelector("[data-drop-label]").getBoundingClientRect();
    const paths = [...document.querySelectorAll(".pano-studio-drop-mark path")];
    const svg = document.querySelector(".pano-studio-drop-mark").getBoundingClientRect();
    const boxes = paths.map((path) => path.getBBox()).filter((b) => b.width || b.height);
    const mark = {
      left: svg.left + Math.min(...boxes.map((b) => b.x)),
      top: svg.top + Math.min(...boxes.map((b) => b.y)),
      right: svg.left + Math.max(...boxes.map((b) => b.x + b.width)),
      bottom: svg.top + Math.max(...boxes.map((b) => b.y + b.height)),
    };
    const crosses = Math.min(label.right, mark.right) > Math.max(label.left, mark.left) && Math.min(label.bottom, mark.bottom) > Math.max(label.top, mark.top);
    const stage = document.querySelector("[data-stage-canvas]").getBoundingClientRect();
    const inside = label.left >= stage.left && label.top >= stage.top && label.right <= stage.right && label.bottom <= stage.bottom;
    return !crosses && inside;
  });
}

async function pick(page, key) {
  const file = await page.evaluate((name) => window.__studio.files[name], key);
  const chooser = page.waitForEvent("filechooser");
  await page.locator('[data-tool="add"]').click();
  await (await chooser).setFiles({ name: file.name, mimeType: file.mimeType, buffer: Buffer.from(file.base64, "base64") });
}

test("Add with a GLB lands it on the ground ahead, selected in the timeline and the inspector; the gizmo shows, Undo takes it back, closing saves it", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  await pick(page, "glb");
  // It is uploaded to input/3d, the route answered, and placing it is one Undo step.
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null, { timeout: 15_000 }).toBe("box.glb");
  const [placed] = await stickers(page);
  expect(placed.placement).toBe("world");
  expect(placed.source.subfolder).toBe("3d");
  // The box's bottom (-1 in its own frame) is on the ground (-1.6) ahead of the view.
  expect(placed.position[1]).toBeCloseTo(-0.6, 5);
  expect(placed.position[2]).toBeLessThan(-5);
  expect(await selectedRow(page)).toBe(placed.id);
  // The loading line goes once the item has drawn; its selected guide is drawn in yellow.
  await expect(page.locator(".pano-studio-notice.is-loading")).toHaveCount(0, { timeout: 15_000 });
  await expect.poll(() => page.evaluate(() => window.__studio.yellowPixels()), { timeout: 10_000 }).toBeGreaterThan(50);
  // The timeline has its row, selected; the inspector shows its card; the bar shows its gizmo modes.
  await expect(page.locator(`.pano-studio-tl-head.is-selected[data-head="${placed.id}"]`)).toBeVisible();
  await expect(page.locator('[data-region="inspector"]')).toContainText("Position");
  await expect(page.locator('[data-region="bar"]')).toContainText("box.glb");
  await page.screenshot({ path: testInfo.outputPath("placed-glb.png") });
  // Undo takes the placing back, Redo puts it again.
  await page.keyboard.press("Control+z");
  await expect.poll(async () => (await stickers(page)).length).toBe(0);
  await page.keyboard.press("Control+Shift+z");
  await expect.poll(async () => (await stickers(page)).length).toBe(1);
  // Closing saves it.
  await page.evaluate(() => window.__studio.close());
  const saved = JSON.parse(await page.evaluate(() => window.__studio.node.widgets[0].value));
  expect(saved.stickers.map((s) => s.source.filename)).toEqual(["box.glb"]);
  expect(problems).toEqual([]);
});

test("Add with an image shows the Sky / World choice at the stage's center; Sky and World place it so", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  await pick(page, "photo");
  const choice = page.locator(".pano-studio-place-choice");
  await expect(choice).toBeVisible();
  const stage = await page.locator("[data-stage-canvas]").boundingBox();
  const at = await choice.boundingBox();
  expect(Math.abs(at.x + at.width / 2 - (stage.x + stage.width / 2))).toBeLessThan(2);
  expect(Math.abs(at.y + at.height / 2 - (stage.y + stage.height / 2))).toBeLessThan(2);
  await expect(choice.locator('[data-place="sky"]')).toHaveText("Sky");
  await expect(choice.locator('[data-place="world"]')).toHaveText("World");
  // Big tiles over a dark veil that covers the stage; the Sky tile has the focus.
  expect(Math.round((await choice.locator('[data-place="sky"]').boundingBox()).width)).toBe(180);
  const veil = await page.locator(".pano-studio-place-veil").boundingBox();
  expect(Math.abs(veil.width - stage.width)).toBeLessThan(2);
  await expect(choice.locator('[data-place="sky"]')).toBeFocused();
  await page.screenshot({ path: testInfo.outputPath("choice.png") });
  await choice.locator('[data-place="sky"]').click();
  await expect(choice).toHaveCount(0);
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null).toBe("photo.png");
  expect((await stickers(page))[0].placement).toBe("sky");

  // The arrows move between the tiles and Enter chooses.
  await pick(page, "photo");
  await expect(choice.locator('[data-place="sky"]')).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(choice.locator('[data-place="world"]')).toBeFocused();
  await page.keyboard.press("Enter");
  await expect.poll(async () => (await stickers(page))[1]?.source.filename ?? null).toBe("photo.png");
  const world = (await stickers(page))[1];
  expect(world.placement).toBe("world");
  // Standing on the ground: its middle half its height (E = 1.6) above the ground.
  expect(world.position[1]).toBeCloseTo(-0.8, 5);
  expect(await selectedRow(page)).toBe(world.id);
  expect(problems).toEqual([]);
});

test("Escape closes the choice and places nothing; the editor stays open; a press outside closes it too", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  await pick(page, "photo");
  await expect(page.locator(".pano-studio-place-choice")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".pano-studio-place-choice")).toHaveCount(0);
  await expect(page.locator(".pano-studio-editor")).toBeVisible();
  expect(await stickers(page)).toEqual([]);
  await pick(page, "photo");
  await expect(page.locator(".pano-studio-place-choice")).toBeVisible();
  const stage = await page.locator("[data-stage-canvas]").boundingBox();
  await page.mouse.click(stage.x + 200, stage.y + 200);
  await expect(page.locator(".pano-studio-place-choice")).toHaveCount(0);
  expect(await stickers(page)).toEqual([]);
  // With nothing left, Escape closes the editor.
  await page.keyboard.press("Escape");
  await expect(page.locator(".pano-studio-editor")).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("dragging an image shows the Sky mark over the sky and the World mark over the ground; the drop places it there", async ({ page }, testInfo) => {
  const { problems, sky, ground } = await open(page, testInfo);
  await page.evaluate(({ x, y }) => window.__studio.drag("dragover", "photo", x, y), sky);
  await expect(page.locator("[data-drop-place=sky]")).toHaveCount(1);
  await expect(page.locator("[data-drop-label]")).toHaveText("Sky");
  // Sky is ice, the mark and the label alike; the label lies off the mark.
  await expect(page.locator("[data-drop-place=sky] .pano-studio-drop-line")).toHaveAttribute("stroke", "#aecedb");
  await expect(page.locator("[data-drop-label]")).toHaveClass(/is-sky/);
  expect(await labelOffMark(page)).toBe(true);
  await page.evaluate(({ x, y }) => window.__studio.drag("dragover", "photo", x, y), ground);
  await expect(page.locator("[data-drop-place=world]")).toHaveCount(1);
  await expect(page.locator("[data-drop-label]")).toHaveText("World");
  await expect(page.locator("[data-drop-place=world] .pano-studio-drop-line")).toHaveAttribute("stroke", "#e8cf74");
  expect(await labelOffMark(page)).toBe(true);
  // Leaving the stage takes the mark away.
  await page.evaluate(({ x, y }) => window.__studio.drag("dragleave", "photo", x, y), ground);
  await expect(page.locator("[data-drop-label]")).toHaveCount(0);

  await page.evaluate(({ x, y }) => window.__studio.drag("drop", "photo", x, y), sky);
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null).toBe("photo.png");
  expect((await stickers(page))[0].placement).toBe("sky");
  await page.evaluate(({ x, y }) => window.__studio.drag("drop", "photo", x, y), ground);
  await expect.poll(async () => (await stickers(page))[1]?.source.filename ?? null).toBe("photo.png");
  expect((await stickers(page))[1].placement).toBe("world");
  await expect(page.locator(".pano-studio-place-choice")).toHaveCount(0);
  expect(problems).toEqual([]);
});

test("a dragged 3D file shows its box on the ground and drops into the World", async ({ page }, testInfo) => {
  const { problems, sky } = await open(page, testInfo);
  await page.evaluate(({ x, y }) => window.__studio.drag("dragover", "glb", x, y), sky);
  await expect(page.locator("[data-drop-place=world]")).toHaveCount(1);
  await expect(page.locator("[data-drop-label]")).toHaveText("World");
  await page.evaluate(({ x, y }) => window.__studio.drag("drop", "glb", x, y), sky);
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null, { timeout: 15_000 }).toBe("box.glb");
  const [placed] = await stickers(page);
  // Over the sky it goes to the ground at the far edge of the world bound (48 for E = 1.6).
  expect(Math.hypot(placed.position[0], placed.position[2])).toBeGreaterThan(40);
  expect(problems).toEqual([]);
});

test("the Camera tab takes no file: no mark while dragging, nothing placed on the drop, Add disabled", async ({ page }, testInfo) => {
  const { problems, ground } = await open(page, testInfo);
  await page.locator('.pano-studio-tabs [data-value="camera"]').click();
  await page.evaluate(({ x, y }) => window.__studio.drag("dragover", "photo", x, y), ground);
  await page.waitForTimeout(200);
  await expect(page.locator("[data-drop-label]")).toHaveCount(0);
  await page.evaluate(({ x, y }) => window.__studio.drag("drop", "photo", x, y), ground);
  await page.waitForTimeout(500);
  expect(await stickers(page)).toEqual([]);
  await expect(page.locator('[data-tool="add"]')).toHaveAttribute("aria-disabled", "true");
  expect(problems).toEqual([]);
});

test("a dragged image near the stage's edges keeps its label off the mark and inside the stage", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  const box = await page.locator("[data-stage-canvas]").boundingBox();
  for (const [fx, fy] of [[0.5, 0.2], [0.97, 0.2], [0.03, 0.15], [0.96, 0.9], [0.5, 0.97]]) {
    const at = { x: box.x + box.width * fx, y: box.y + box.height * fy };
    await page.evaluate(({ x, y }) => window.__studio.drag("dragover", "photo", x, y), at);
    await expect(page.locator("[data-drop-label]")).toHaveCount(1);
    expect(await labelOffMark(page), `at ${fx}, ${fy}`).toBe(true);
  }
  expect(problems).toEqual([]);
});

test("a placed GLB that loads slowly shows its guide with the band of light, then its model fades in and the band stops", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  // Where the model's middle lands: place it once, read it, take it back.
  await pick(page, "glb");
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null, { timeout: 15_000 }).toBe("box.glb");
  await expect(page.locator(".pano-studio-notice.is-loading")).toHaveCount(0, { timeout: 15_000 });
  await expect(page.locator("[data-stage-overlay][data-loading-guide]")).toHaveCount(0, { timeout: 5_000 });
  const id = (await stickers(page))[0].id;
  const middle = await page.evaluate((row) => window.__studio.boxCenter(row), id);
  // Off the white gizmo dot: a little to the left on the model's face.
  const probe = { x: middle.stageX - 8, y: middle.stageY + 6 };
  const shown = await page.evaluate(({ x, y }) => window.__studio.record(x, y, 50), probe);
  const loadedPixel = shown.at(-1).px;
  await page.keyboard.press("Control+z");
  await expect.poll(async () => (await stickers(page)).length).toBe(0);
  const emptyPixel = (await page.evaluate(({ x, y }) => window.__studio.record(x, y, 50), probe)).at(-1).px;
  const distance = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
  const span = distance(loadedPixel, emptyPixel);
  expect(span).toBeGreaterThan(30);

  // Again with a slow route and a file not asked for yet: the guide shows at once with its band (the overlay is
  // marked), before any model; frames through the wait and the reveal.
  await page.evaluate(() => { window.__studio.routeDelay = 1500; });
  const recording = page.evaluate(({ x, y }) => window.__studio.record(x, y, 4500), probe);
  await pick(page, "slow");
  await expect(page.locator("[data-stage-overlay][data-loading-guide]")).toHaveCount(1, { timeout: 5_000 });
  await expect(page.locator("[data-stage-overlay]")).toHaveClass(/is-loading-guide/);
  await expect.poll(() => page.evaluate(() => window.__studio.yellowPixels())).toBeGreaterThan(30);
  const frames = await recording;
  const share = (frame) => distance(frame.px, emptyPixel) / span;
  testInfo.annotations.push({ type: "reveal frames", description: JSON.stringify(frames.filter((f) => f.loading || share(f) > 0.05).filter((f, i, all) => i > all.findIndex((g) => share(g) > 0.05) - 4).slice(0, 40).map((f) => [Math.round(f.t), Math.round(share(f) * 100), f.loading])) });
  // While the band runs before the model has drawn, nothing of it shows.
  const waiting = frames.filter((frame) => frame.loading && share(frame) < 0.1);
  expect(waiting.length).toBeGreaterThan(5);
  // At the end it is all there and the band has stopped.
  expect(share(frames.at(-1))).toBeGreaterThan(0.85);
  expect(frames.at(-1).loading).toBe(false);
  // It fades in: the first frames that show it show less of it than the full model does (the band is still fading).
  // The blend is in linear light and the faces behind show through a see-through model, so these sRGB pixels come
  // near the full one early; the frames are read after each draw (studio.record).
  const first = frames.findIndex((frame) => share(frame) > 0.1);
  const full = Math.max(...frames.map(share));
  expect(first).toBeGreaterThan(0);
  expect(frames[first].loading).toBe(true);
  expect(share(frames[first])).toBeLessThan(full - 0.06);
  await page.screenshot({ path: testInfo.outputPath("loaded.png") });
  expect(problems).toEqual([]);
});

test("the gizmo of a GLB whose box lies off its origin sits at the box's center inside its guide, also after Scale and Rotate", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  await pick(page, "offset");
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null, { timeout: 15_000 }).toBe("offset.glb");
  await expect(page.locator("[data-stage-overlay][data-loading-guide]")).toHaveCount(0, { timeout: 15_000 });
  const id = (await stickers(page))[0].id;
  const stage = await page.locator("[data-stage-canvas]").boundingBox();
  const check = async (what) => {
    const middle = await page.evaluate((row) => window.__studio.boxCenter(row), id);
    const box = await page.evaluate(() => window.__studio.yellowBox());
    expect(box, what).not.toBeNull();
    expect(middle.stageX > box.left && middle.stageX < box.right && middle.stageY > box.top && middle.stageY < box.bottom, `${what}: the box's center is inside the guide`).toBe(true);
    // The gizmo's white center dot is drawn there.
    const pixel = await page.evaluate(({ stageX, stageY }) => window.__studio.overlayAt(stageX, stageY), middle);
    expect(pixel[0] > 240 && pixel[1] > 240 && pixel[2] > 240 && pixel[3] > 240, `${what}: the gizmo's dot is at the box's center`).toBe(true);
  };
  await check("placed");
  await page.screenshot({ path: testInfo.outputPath("offset-move.png") });
  // Scale: drag the X square out to twice its reach.
  await page.keyboard.press("3");
  let h = await page.evaluate((row) => window.__studio.handles(row, "scale"), id);
  const end = h.axes.x;
  await drag(page, end, { x: h.center.x + (end.x - h.center.x) * 1.8, y: h.center.y + (end.y - h.center.y) * 1.8 });
  const scaled = await page.evaluate(() => window.__studio.session.state.stickers[0].scale.value);
  expect(scaled).toBeGreaterThan(1.3);
  await check("scaled");
  // Rotate: drag along the Y ring.
  await page.keyboard.press("2");
  h = await page.evaluate((row) => window.__studio.handles(row, "rotate"), id);
  const grip = h.ring.y[Math.floor(h.ring.y.length / 2)];
  await drag(page, grip, { x: grip.x + 60, y: grip.y + 4 });
  await check("rotated");
  await page.screenshot({ path: testInfo.outputPath("offset-rotated.png") });
  expect(stage.width).toBeGreaterThan(0);
  expect(problems).toEqual([]);
});

test("Move's XZ square drags the object on the level plane only; its Y stays", async ({ page }, testInfo) => {
  const { problems, ground } = await open(page, testInfo);
  // Dropped near the view, so the level plane is not seen edge on.
  await page.evaluate(({ x, y }) => window.__studio.drag("drop", "glb", x, y), ground);
  await expect.poll(async () => (await stickers(page))[0]?.source.filename ?? null, { timeout: 15_000 }).toBe("box.glb");
  await expect(page.locator("[data-stage-overlay][data-loading-guide]")).toHaveCount(0, { timeout: 15_000 });
  const id = (await stickers(page))[0].id;
  const before = (await stickers(page))[0].position;
  const h = await page.evaluate((row) => window.__studio.handles(row, "translate"), id);
  expect(h.planes.xz).not.toBeNull();
  // The square lights under the pointer: its lime brought toward white, never plain white.
  const box = await page.locator("[data-stage-canvas]").boundingBox();
  const at = { x: h.planes.xz.x - box.x, y: h.planes.xz.y - box.y };
  const idle = await page.evaluate((p) => window.__studio.overlayAt(p.x, p.y), at);
  await page.mouse.move(h.planes.xz.x, h.planes.xz.y);
  await expect.poll(async () => {
    const px = await page.evaluate((p) => window.__studio.overlayAt(p.x, p.y), at);
    return px[3] > idle[3] + 20;
  }).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("plane-hover.png") });
  await drag(page, h.planes.xz, { x: h.planes.xz.x + 70, y: h.planes.xz.y + 30 });
  const after = (await stickers(page))[0].position;
  expect(after[1]).toBeCloseTo(before[1], 6);
  expect(Math.hypot(after[0] - before[0], after[2] - before[2])).toBeGreaterThan(0.1);
  // One drag is one Undo step.
  await page.keyboard.press("Control+z");
  await expect.poll(async () => (await stickers(page))[0].position).toEqual(before);
  // Escape gives a drag up.
  await page.mouse.move(h.planes.xz.x, h.planes.xz.y);
  await page.mouse.down();
  await page.mouse.move(h.planes.xz.x + 50, h.planes.xz.y + 20, { steps: 4 });
  await page.keyboard.press("Escape");
  await page.mouse.up();
  expect((await stickers(page))[0].position).toEqual(before);
  expect(problems).toEqual([]);
});

// docs/studio-ui.md "閉じ方": a state_json that cannot be read opens read-only with a warning, and closing leaves it.
test("a node whose state_json cannot be read opens read-only with a warning; closing leaves the text byte for byte", async ({ page }, testInfo) => {
  const { problems } = await open(page, testInfo);
  for (const text of ["{not json", '{"version":3,"stickers":[]}']) {
    await page.evaluate((value) => window.__studio.reopen(value), text);
    await expect(page.locator(".pano-studio-notice")).toHaveText("This node's saved state can't be read, so changes won't be saved");
    await expect(page.locator(".pano-studio-notice")).toHaveAttribute("data-notice", "warning");
    await expect(page.locator('[data-tool="add"]')).toBeDisabled();
    expect(await page.evaluate(() => window.__studio.session.readOnly)).toBe(true);
    await page.keyboard.press("Escape");
    await expect(page.locator("[data-stage-canvas]")).toHaveCount(0);
    expect(await page.evaluate(() => window.__studio.node.widgets[0].value)).toBe(text);
  }
  expect(problems).toEqual([]);
});
