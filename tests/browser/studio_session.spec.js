import { expect, test } from "@playwright/test";

// The new editor put together (web_src/studio/editor.js, session.js, stage_content.js, components/studio/
// StudioEditor.vue with <StudioInspector> and <StudioTimeline>) on tests/browser/pages/studio_session.html: a state with
// a background, a Sky image and a World 3D file. docs/studio-ui.md "インスペクタ", "閉じ方"; docs/timeline-ui.md
// "タイムラインの表示", "記録の規則"; the stage draws the state at the playhead through the lower three.js view.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

const studio = (page, name, ...args) => page.evaluate(([key, rest]) => window.__studio[key](...rest), [name, args]);

async function open(page, testInfo) {
  const problems = watch(page);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/tests/browser/pages/studio_session.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  const renderer = await studio(page, "rendererOf");
  testInfo.annotations.push({ type: "renderer", description: String(renderer) });
  console.log(`renderer: ${renderer}`);
  return problems;
}

const inspector = (page) => page.locator('[data-region="inspector"]');
const cardTitle = (page) => inspector(page).locator(".pano-studio-card-title .pano-studio-cap").first();
const rowName = (page, id) => page.locator(`.pano-studio-tl-head[data-head="${id}"] [data-part="name"]`);
const field = (page, row, name) => inspector(page).locator(`[data-row="${row}"] [data-field="${name}"]`);

async function type(page, row, name, value) {
  await field(page, row, name).click();
  const input = inspector(page).locator(`[data-row="${row}"] input`).first();
  await input.fill(String(value));
  await input.press("Enter");
}

test("the stage draws the Sky image at the playhead; the World 3D file is asked for and loads without errors", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  // The red Sky image is straight ahead of the opening view.
  await expect.poll(async () => {
    const [r, g, b] = await studio(page, "middle");
    return r > 150 && g < 90 && b < 90;
  }, { timeout: 20_000 }).toBe(true);
  expect(await page.evaluate(() => window.__studio.routeAsks)).toBe(1);
  // The Timeline lists the background, the Camera and both Stickers.
  await expect(page.locator(".pano-studio-tl-head[data-head]")).toHaveCount(4);
  await page.waitForTimeout(500);
  await page.locator('[data-region="stage"]').screenshot({ path: testInfo.outputPath("stage.png") });
  expect(problems).toEqual([]);
});

test("a row selected in the Timeline shows in the inspector; an edit changes the state and Undo puts it back", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  await expect(cardTitle(page)).toHaveText("Scene");
  await rowName(page, "sticker_1").click();
  await expect(cardTitle(page)).toHaveText("sticker_1");
  await expect(page.locator('.pano-studio-tl-head[data-head="sticker_1"]')).toHaveClass(/is-selected/);
  await expect(page.locator('[data-tool="undo"]')).toHaveAttribute("aria-disabled", "true");

  await type(page, "Opacity", "opacity", 40);
  expect((await studio(page, "state")).stickers[0].opacity.value).toBeCloseTo(0.4, 6);
  await expect(page.locator('[data-tool="undo"]')).not.toHaveAttribute("aria-disabled", "true");
  // Ctrl+Z with the stage holding the keys.
  await page.locator('[data-region="stage"]').click({ position: { x: 600, y: 150 } });
  await page.keyboard.press("Control+z");
  expect((await studio(page, "state")).stickers[0].opacity.value).toBe(1);
  // Redo from the left rail, then Undo from it.
  await page.locator('[data-tool="redo"]').click();
  expect((await studio(page, "state")).stickers[0].opacity.value).toBeCloseTo(0.4, 6);
  await page.locator('[data-tool="undo"]').click();
  expect((await studio(page, "state")).stickers[0].opacity.value).toBe(1);

  // The World 3D file's card, and the Camera's.
  await rowName(page, "sticker_2").click();
  await expect(cardTitle(page)).toHaveText("box.glb");
  await rowName(page, "camera").click();
  await expect(cardTitle(page)).toHaveText("Camera");
  // Delete on the Camera says it can't be deleted.
  await page.locator('[data-region="stage"]').click({ position: { x: 600, y: 150 } });
  await page.keyboard.press("Delete");
  await expect(page.locator(".pano-studio-notice")).toHaveText(/The camera can't be deleted/);
  expect(problems).toEqual([]);
});

test("a seek on the ruler moves the playhead; a row's dot keys it there and the Keyframe selection brings the Easing panel", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const timecode = page.locator('[data-tl="time"]');
  await expect(timecode).toContainText("0 / 48");
  const ruler = await page.locator('[data-tl="ruler"]').boundingBox();
  await page.mouse.click(ruler.x + ruler.width / 2, ruler.y + ruler.height / 2);
  await expect(timecode).not.toContainText(" 0 / 48");
  const frame = Number((await timecode.textContent()).match(/(\d+) \/ 48/)[1]);
  expect(frame).toBeGreaterThan(15);
  expect(frame).toBeLessThan(33);

  // The Sky image's row dot keys all its Lanes at the playhead: one Undo step.
  await page.locator('.pano-studio-tl-head[data-head="sticker_1"] [data-part="dot"]').click();
  const keyed = await studio(page, "state");
  expect(keyed.stickers[0].direction.keyframes.map((key) => key.frame)).toEqual([frame]);
  // A click on the Keyframe selects it; the Easing panel shows at the inspector's bottom.
  await page.locator(`[data-track="sticker_1"] .pano-studio-tl-key[data-frame="${frame}"]`).click();
  await expect(page.locator(".pano-studio-easing")).toBeVisible();
  // Escape takes back the Keyframe selection first (the panel goes), and the editor stays open.
  await page.keyboard.press("Escape");
  await expect(page.locator(".pano-studio-easing")).toHaveCount(0);
  await expect(page.locator(".pano-studio-editor")).toHaveCount(1);
  // Delete with no Keyframes selected and no object: nothing; the Keyframe is still there.
  expect((await studio(page, "state")).stickers[0].direction.keyframes.length).toBe(1);
  expect(problems).toEqual([]);
});

test("closing writes state_json once with the edit, and opening and closing without an edit writes nothing", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const opened = await studio(page, "text");
  // Opened and closed with ✕: nothing written.
  await inspector(page).locator('[data-action="close"]').click();
  await expect(page.locator(".pano-studio-editor")).toHaveCount(0);
  expect(await page.evaluate(() => window.__studio.writes)).toBe(0);
  expect(await studio(page, "text")).toBe(opened);

  await studio(page, "open");
  await expect(page.locator(".pano-studio-editor")).toHaveCount(1);
  await rowName(page, "sticker_2").click();
  await type(page, "Scale", "scale", 2.5);
  // Escape steps back one thing at a time: the object's selection, then the editor closes.
  await page.locator('[data-region="stage"]').click({ position: { x: 600, y: 150 } });
  await page.keyboard.press("Escape");
  await expect(cardTitle(page)).toHaveText("Scene");
  expect(await page.evaluate(() => window.__studio.writes)).toBe(0);
  await page.keyboard.press("Escape");
  await expect(page.locator(".pano-studio-editor")).toHaveCount(0);
  expect(await page.evaluate(() => window.__studio.writes)).toBe(1);
  const written = JSON.parse(await studio(page, "text"));
  expect(written.stickers[1].scale.value).toBe(2.5);
  expect(written.id).toMatch(/^[A-Za-z0-9_-]{16}$/);

  // Open and close again without an edit: still one write.
  await studio(page, "open");
  await inspector(page).locator('[data-action="close"]').click();
  expect(await page.evaluate(() => window.__studio.writes)).toBe(1);
  expect(problems).toEqual([]);
});
