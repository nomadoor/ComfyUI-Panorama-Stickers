import { expect, test } from "@playwright/test";

// The keys of the new editor against ComfyUI behind it, on tests/browser/pages/studio_session.html:
// docs/studio-ui.md "キーとクリップボードを ComfyUI に渡さない" (no key or clipboard event reaches ComfyUI's listeners on
// window and document while the editor is open; text fields still type, copy and paste) and docs/timeline-ui.md
// "Keyframe のコピーと貼り付け". ComfyUI is stood in for by listeners on window and document, where its keybindings, its
// node paste and its copy listen (on the bubbling side).

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
  // The stand-in ComfyUI: what reaches window and document on the bubbling side.
  await page.evaluate(() => {
    const heard = (window.__comfy = []);
    for (const target of [window, document]) {
      for (const type of ["keydown", "keyup", "keypress", "copy", "cut", "paste"]) {
        target.addEventListener(type, (event) => heard.push(`${target === window ? "window" : "document"}:${type}:${event.key ?? ""}`));
      }
    }
  });
  return problems;
}

const heard = (page) => page.evaluate(() => window.__comfy.slice());
const frameText = (page) => page.locator('[data-tl="time"] .pano-studio-tl-frame');

// A click on the ruler at `fraction` of its width: the frame the playhead went to.
async function seekTo(page, fraction) {
  const ruler = await page.locator('[data-tl="ruler"]').boundingBox();
  await page.mouse.click(ruler.x + ruler.width * fraction, ruler.y + ruler.height / 2);
  const text = await frameText(page).textContent();
  return Number(text.match(/(\d+)\s*\/\s*48/)[1]);
}

const keyAt = (page, row, frame) => page.locator(`[data-track="${row}"] .pano-studio-tl-key[data-frame="${frame}"]`);
const rowDot = (page, row) => page.locator(`.pano-studio-tl-head[data-head="${row}"] [data-part="dot"]`);

test("no key or clipboard event reaches ComfyUI while the editor is open, from the editor or from the page", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  await page.locator(".pano-studio-editor").focus();
  for (const key of ["Control+v", "Control+c", "Control+x", "Delete", "Backspace", "Control+a", "Control+z", "Control+Shift+z", "Meta+v"]) {
    await page.keyboard.press(key);
  }
  // The focus fallen to the page itself (a focused part went away).
  await page.evaluate(() => document.activeElement?.blur());
  expect(await page.evaluate(() => document.activeElement === document.body)).toBe(true);
  for (const key of ["Control+v", "Control+c", "Delete", "Control+a"]) await page.keyboard.press(key);
  expect(await heard(page)).toEqual([]);
  // The editor is still open and its state as it was (nothing was deleted).
  expect((await studio(page, "state")).stickers.length).toBe(2);
  expect(problems).toEqual([]);
});

test("the Easing panel's text field still copies and pastes its text, and ComfyUI hears none of it", async ({ page, context }, testInfo) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  const problems = await open(page, testInfo);
  // Two Keyframes on the Sky image, both selected: the Easing panel edits the segment between them.
  const first = await seekTo(page, 0.25);
  await rowDot(page, "sticker_1").click();
  const second = await seekTo(page, 0.75);
  await rowDot(page, "sticker_1").click();
  await keyAt(page, "sticker_1", first).click();
  await keyAt(page, "sticker_1", second).click({ modifiers: ["Shift"] });
  const field = page.locator(".pano-studio-easing-text");
  await expect(field).toBeEnabled();
  // Copy: the field's text goes to the system clipboard.
  await field.focus();
  await page.keyboard.press("Control+a");
  await page.keyboard.press("Control+c");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(await field.inputValue());
  // Paste: four values applied to the selected segment.
  await page.evaluate(() => navigator.clipboard.writeText("0, 0, 1, 1"));
  await page.keyboard.press("Control+a");
  await page.keyboard.press("Control+v");
  await expect.poll(async () => (await studio(page, "state")).stickers[0].direction.keyframes[0].easing).toEqual([0, 0, 1, 1]);
  expect(await heard(page)).toEqual([]);
  expect(problems).toEqual([]);
});

test("a Keyframe copied, the playhead moved and Ctrl+V: the value pastes at the new frame as one Undo step, and the graph gets nothing", async ({ page }, testInfo) => {
  const problems = await open(page, testInfo);
  const directionFrames = async () => (await studio(page, "state")).stickers[0].direction.keyframes.map((key) => key.frame);
  const first = await seekTo(page, 0.25);
  await rowDot(page, "sticker_1").click();
  await keyAt(page, "sticker_1", first).click();
  await page.keyboard.press("Control+c");
  const second = await seekTo(page, 0.75);
  expect(second).toBeGreaterThan(first);
  await page.keyboard.press("Control+v");
  await expect.poll(directionFrames).toEqual([first, second]);
  const state = await studio(page, "state");
  expect(state.stickers[0].direction.keyframes[1].value).toEqual(state.stickers[0].direction.keyframes[0].value);
  // The pasted Keyframe is the selection.
  await expect(keyAt(page, "sticker_1", second)).toHaveClass(/is-selected/);
  await expect(keyAt(page, "sticker_1", first)).not.toHaveClass(/is-selected/);
  // One Undo step takes the paste back.
  await page.keyboard.press("Control+z");
  await expect.poll(directionFrames).toEqual([first]);
  // Cut: the copied Keyframe goes (one step), and pastes again where the playhead is.
  await keyAt(page, "sticker_1", first).click();
  await page.keyboard.press("Control+x");
  await expect.poll(directionFrames).toEqual([]);
  const third = await seekTo(page, 0.5);
  await page.keyboard.press("Control+v");
  await expect.poll(directionFrames).toEqual([third]);
  expect(await heard(page)).toEqual([]);
  expect((await studio(page, "state")).stickers.length).toBe(2);
  expect(problems).toEqual([]);
});
