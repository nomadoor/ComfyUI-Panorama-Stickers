import { expect, test } from "@playwright/test";
import { CAMERA_FRAME_MARGIN } from "../../web_src/studio/frame_layout.js";

// A selected object in the new editor's Camera tab, and the inspector by the selection only (ADR 0051), on
// tests/browser/pages/studio_camera_wired.html in a real browser engine: docs/studio-ui.md "インスペクタ", "種類ごとの中身",
// "下の中央のバー", "Camera タブ"; docs/space-and-view.md "Frame 表示" (the selected object's gizmo, handles and body take
// the press first, anything else moves the Camera); docs/design.md "Camera タブのフレームの余白" (the bar's seat under the
// Roll ruler). The Camera is turned (yaw 30, pitch 6); a red World plane stands 3 units ahead of it at yaw 0.

function watch(page) {
  const problems = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("crash", () => problems.push("crash: the renderer process crashed"));
  return problems;
}

async function load(page, query = "aspect=16:9&mode=frame", viewport = { width: 1440, height: 860 }) {
  const problems = watch(page);
  await page.setViewportSize(viewport);
  await page.goto(`/tests/browser/pages/studio_camera_wired.html?${query}`);
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await expect(page.locator(".pano-studio-notice")).toHaveCount(0, { timeout: 30_000 });
  await page.waitForTimeout(300);
  console.log(`renderer: ${await page.evaluate(() => window.__studio.rendererOf())}`);
  return problems;
}

async function toTab(page, name) {
  await page.locator('[role="tablist"] button', { hasText: name }).click();
  if (name === "Camera") await expect(page.locator("[data-frame-box]")).toHaveCount(1);
  await page.waitForTimeout(300);
}

const RED = [255, 0, 0];
const stageBox = (page) => page.locator("[data-stage-canvas]").evaluate((el) => {
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height };
});
const rectOf = (page, selector) => page.locator(selector).first().evaluate((el) => {
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height, right: r.right, bottom: r.bottom };
});
const selected = (page) => page.evaluate(() => window.__studio.session.selection.row);
const camera = (page) => page.evaluate(() => window.__studio.camera());
const cards = (page) => page.locator('[data-region="inspector"] [data-card]').evaluateAll((els) => els.map((el) => el.dataset.card));
const inspectorText = (page) => page.locator('[data-region="inspector"] .pano-studio-inspector-body').innerText();
const position = (page, index) => page.evaluate((i) => JSON.stringify(window.__studio.session.state.stickers[i].position), index);

// The red plane's middle on the page, or null where it is not drawn.
async function redOnPage(page) {
  const stage = await stageBox(page);
  const red = await page.evaluate((rgb) => window.__studio.stageCentroid(rgb), RED);
  return red ? { x: stage.x + red.x, y: stage.y + red.y } : null;
}

// A point near `around` (page px) where the stage's cursor is the gizmo's grab, or null.
async function grabNear(page, around, reach = 90) {
  for (let r = 6; r <= reach; r += 6) {
    for (let a = 0; a < 360; a += 15) {
      const x = around.x + r * Math.cos((a * Math.PI) / 180);
      const y = around.y + r * Math.sin((a * Math.PI) / 180);
      await page.mouse.move(x, y);
      if ((await page.locator("[data-stage-canvas]").evaluate((el) => el.style.cursor)) === "grab") return { x, y };
    }
  }
  return null;
}

async function dragBy(page, from, dx, dy) {
  await page.mouse.move(from.x, from.y);
  await page.mouse.down();
  await page.mouse.move(from.x + dx, from.y + dy, { steps: 6 });
  await page.mouse.up();
  await page.waitForTimeout(200);
}

// The overlay's opaque pixels of the selected guide's yellow (#e8cf74) and of anything at all.
const overlayPixels = (page) => page.evaluate(() => {
  const overlay = document.querySelector("[data-stage-overlay]");
  const data = overlay.getContext("2d").getImageData(0, 0, overlay.width, overlay.height).data;
  let yellow = 0;
  let any = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 0) any += 1;
    if (data[i + 3] > 200 && Math.abs(data[i] - 0xe8) < 24 && Math.abs(data[i + 1] - 0xcf) < 24 && Math.abs(data[i + 2] - 0x74) < 32) yellow += 1;
  }
  return { yellow, any };
});

test("the inspector follows the selection, kept across the tabs; the Camera tab keeps the Camera's card on top, where it was", async ({ page }) => {
  const problems = await load(page);
  // Nothing selected: the Scene card, the Camera's over the Ground's, in both tabs.
  expect(await cards(page)).toEqual(["camera", "scene"]);
  const sceneText = await inspectorText(page);
  await toTab(page, "Camera");
  expect(await cards(page)).toEqual(["camera", "scene"]);
  expect(await inspectorText(page)).toBe(sceneText);
  const cameraCard = await rectOf(page, '[data-region="inspector"] [data-card="camera"]');
  // A World object selected in the Camera tab: the Camera's card stays on top, in place, its card under it, its bar.
  const red = await redOnPage(page);
  await page.mouse.click(red.x, red.y);
  await expect.poll(() => selected(page)).toBe("sticker_1");
  expect(await cards(page)).toEqual(["camera", "world"]);
  expect((await rectOf(page, '[data-region="inspector"] [data-card="camera"]')).y).toBe(cameraCard.y);
  await expect(page.locator('.pano-studio-at-bar [data-kind="world-image"]')).toHaveCount(1);
  const objectText = await page.locator('[data-region="inspector"] [data-card="world"]').innerText();
  // Kept in the 3D tab, where the object's card shows alone.
  await toTab(page, "3D");
  expect(await selected(page)).toBe("sticker_1");
  expect(await cards(page)).toEqual(["world"]);
  expect(await page.locator('[data-region="inspector"] [data-card="world"]').innerText()).toBe(objectText);
  await toTab(page, "Camera");
  expect(await cards(page)).toEqual(["camera", "world"]);
  // Escape lets it go: back to the Scene card.
  await page.keyboard.press("Escape");
  await expect.poll(() => cards(page)).toEqual(["camera", "scene"]);
  expect(problems).toEqual([]);
});

test("Set ground: on in the Frame mode Camera tab, off in its place in the Panorama mode Camera tab", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame");
  const button = page.locator('[data-card="scene"] [data-action="set-ground"]');
  await toTab(page, "Camera");
  await expect(button).not.toHaveAttribute("aria-disabled", "true");
  const place = await rectOf(page, '[data-card="scene"] [data-action="set-ground"]');
  await page.locator('[data-card="camera"] .pano-studio-mode-tile[data-value="erp"]').click();
  await expect(button).toHaveAttribute("aria-disabled", "true");
  await expect(button).toHaveAttribute("data-tip", "Not available in Panorama mode");
  expect(await rectOf(page, '[data-card="scene"] [data-action="set-ground"]')).toEqual(place);
  await toTab(page, "3D");
  await expect(button).not.toHaveAttribute("aria-disabled", "true");
  expect(problems).toEqual([]);
});

test("Camera tab: the guides are drawn as in the 3D tab, thin for every World object with nothing selected", async ({ page }) => {
  const problems = await load(page);
  await toTab(page, "Camera");
  await page.mouse.move(5, 5);
  await page.waitForTimeout(200);
  const shown = await overlayPixels(page);
  expect(shown.any).toBeGreaterThan(40);
  expect(shown.yellow).toBe(0);
  expect(problems).toEqual([]);
});

test("Camera tab: a selected World object's gizmo drag moves the object as one Undo step; a drag on empty space moves the Camera", async ({ page }, testInfo) => {
  const problems = await load(page);
  await toTab(page, "Camera");
  const red = await redOnPage(page);
  await page.mouse.click(red.x, red.y);
  await expect.poll(() => selected(page)).toBe("sticker_1");
  await page.waitForTimeout(200);
  expect((await overlayPixels(page)).yellow).toBeGreaterThan(40);
  await page.screenshot({ path: testInfo.outputPath("camera_tab_selected.png") });

  // Its body's drag moves nothing, as in the 3D tab (the gizmo moves it), and not the Camera either.
  const startCamera = await camera(page);
  const startPosition = await position(page, 0);
  const body = await redOnPage(page);
  await dragBy(page, { x: body.x + 12, y: body.y + 12 }, 40, 0);
  expect(await position(page, 0)).toBe(startPosition);
  expect((await camera(page)).yaw_deg).toBeCloseTo(startCamera.yaw_deg, 6);

  // The gizmo: grabbed, its drag moves the object only, as one Undo step.
  const grip = await grabNear(page, body);
  expect(grip, "a handle of the gizmo near the object").not.toBeNull();
  // The movement keys and the wheel during the drag leave the Camera alone (both would write the same gesture).
  await page.mouse.move(grip.x, grip.y);
  await page.mouse.down();
  await page.mouse.move(grip.x + 15, grip.y + 10, { steps: 3 });
  await page.keyboard.down("KeyW");
  await page.mouse.wheel(0, -120);
  await page.waitForTimeout(250);
  await page.keyboard.up("KeyW");
  await page.mouse.move(grip.x + 30, grip.y + 20, { steps: 3 });
  await page.mouse.up();
  await page.waitForTimeout(200);
  expect(await position(page, 0)).not.toBe(startPosition);
  const moved = await camera(page);
  expect(moved.yaw_deg).toBeCloseTo(startCamera.yaw_deg, 6);
  expect(moved.position).toEqual(startCamera.position);
  expect(await selected(page)).toBe("sticker_1");
  await page.keyboard.press("Control+z");
  expect(await position(page, 0)).toBe(startPosition);

  // A drag on empty space (the frame's top right, over the background) looks around with the Camera; the object stays.
  const frame = await rectOf(page, "[data-frame-box]");
  await dragBy(page, { x: frame.x + frame.width * 0.85, y: frame.y + frame.height * 0.15 }, 60, 0);
  expect((await camera(page)).yaw_deg).toBeLessThan(startCamera.yaw_deg - 3);
  expect(await position(page, 0)).toBe(startPosition);
  expect(await selected(page)).toBe("sticker_1");
  expect(problems).toEqual([]);
});

for (const how of ["Escape", "blur"]) {
  test(`Camera tab: an object's gizmo drag given up (${how}) puts it back with no Undo step`, async ({ page }) => {
    const problems = await load(page);
    await toTab(page, "Camera");
    const red = await redOnPage(page);
    await page.mouse.click(red.x, red.y);
    await expect.poll(() => selected(page)).toBe("sticker_1");
    const start = await position(page, 0);
    const before = await page.evaluate(() => window.__studio.session.canUndo);
    const grip = await grabNear(page, await redOnPage(page));
    expect(grip).not.toBeNull();
    await page.mouse.move(grip.x, grip.y);
    await page.mouse.down();
    await page.mouse.move(grip.x + 30, grip.y + 20, { steps: 4 });
    expect(await position(page, 0)).not.toBe(start);
    if (how === "Escape") await page.keyboard.press("Escape");
    else await page.evaluate(() => window.dispatchEvent(new Event("blur")));
    await page.mouse.up();
    await page.waitForTimeout(200);
    expect(await position(page, 0)).toBe(start);
    expect(await page.evaluate(() => window.__studio.session.canUndo)).toBe(before);
    expect(await selected(page)).toBe("sticker_1");
    expect(problems).toEqual([]);
  });
}

test("Camera tab: a drag on a locked selected object moves the Camera, not the object", async ({ page }) => {
  const problems = await load(page);
  await toTab(page, "Camera");
  const red = await redOnPage(page);
  await page.mouse.click(red.x, red.y);
  await expect.poll(() => selected(page)).toBe("sticker_1");
  await page.locator('.pano-studio-at-bar [data-bar="lock"]').click();
  await page.waitForTimeout(200);
  const start = await position(page, 0);
  const startCamera = await camera(page);
  const body = await redOnPage(page);
  await dragBy(page, body, 60, 0);
  expect(await position(page, 0)).toBe(start);
  expect((await camera(page)).yaw_deg).toBeLessThan(startCamera.yaw_deg - 3);
  expect(await selected(page)).toBe("sticker_1");
  expect(problems).toEqual([]);
});

test("Panorama mode Camera tab: a selection carried in is not let go by a click on the stage, only by Escape", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=panorama");
  await page.locator('[data-head="sticker_1"] [data-part="name"]').first().click();
  await expect.poll(() => selected(page)).toBe("sticker_1");
  await toTab(page, "Camera");
  expect(await cards(page)).toEqual(["camera", "world"]);
  const frame = await rectOf(page, "[data-frame-box]");
  await page.mouse.click(frame.x + frame.width / 2, frame.y + frame.height / 2);
  await page.waitForTimeout(200);
  expect(await selected(page)).toBe("sticker_1");
  await page.keyboard.press("Escape");
  await expect.poll(() => cards(page)).toEqual(["camera", "scene"]);
  expect(problems).toEqual([]);
});

test("Camera tab: the Camera selected in the 3D tab shows its card and its bar there, without a gizmo", async ({ page }) => {
  const problems = await load(page);
  await page.locator('[data-head="camera"] [data-part="name"]').first().click();
  await expect.poll(() => selected(page)).toBe("camera");
  await toTab(page, "Camera");
  expect(await cards(page)).toEqual(["camera"]);
  await expect(page.locator('.pano-studio-at-bar [data-kind="camera"]')).toHaveCount(1);
  // No gizmo of its own: nothing near the frame's middle grabs.
  const frame = await rectOf(page, "[data-frame-box]");
  expect(await grabNear(page, { x: frame.x + frame.width / 2, y: frame.y + frame.height / 2 }, 60)).toBeNull();
  expect(problems).toEqual([]);
});

test("Camera tab on a Camera whose κ shows as 1.00 (0.998): taken as a pinhole, its guides and the gizmo show", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame&curve=0.998");
  await toTab(page, "Camera");
  await page.mouse.move(5, 5);
  await page.waitForTimeout(200);
  expect((await overlayPixels(page)).any, "the guides are drawn").toBeGreaterThan(40);
  const red = await redOnPage(page);
  await page.mouse.click(red.x, red.y);
  await expect.poll(() => selected(page)).toBe("sticker_1");
  await page.waitForTimeout(200);
  expect((await overlayPixels(page)).yellow).toBeGreaterThan(40);
  expect(await grabNear(page, await redOnPage(page)), "the gizmo grabs").not.toBeNull();
  expect(problems).toEqual([]);
});

// The share of the red plane's edge pixels on the stage (its lens image) that have an overlay pixel within `reach` CSS px:
// the guide drawn on the bent picture lies along it.
const guideAlongRed = (page, reach = 3) => page.evaluate(({ reach }) => {
  const stage = document.querySelector("[data-stage-canvas]");
  const overlay = document.querySelector("[data-stage-overlay]");
  const box = stage.getBoundingClientRect();
  const w = Math.round(box.width);
  const h = Math.round(box.height);
  const probe = document.createElement("canvas");
  probe.width = w;
  probe.height = h;
  const g = probe.getContext("2d", { willReadFrequently: true });
  g.drawImage(stage, 0, 0, w, h);
  const pixels = g.getImageData(0, 0, w, h).data;
  const red = (x, y) => {
    const i = (y * w + x) * 4;
    return pixels[i] > 150 && pixels[i + 1] < 90 && pixels[i + 2] < 90;
  };
  const ratio = overlay.width / box.width;
  const lines = overlay.getContext("2d").getImageData(0, 0, overlay.width, overlay.height).data;
  const drawn = (x, y) => {
    for (let dy = -reach; dy <= reach; dy += 1) {
      for (let dx = -reach; dx <= reach; dx += 1) {
        const ox = Math.round((x + dx) * ratio);
        const oy = Math.round((y + dy) * ratio);
        if (ox < 0 || oy < 0 || ox >= overlay.width || oy >= overlay.height) continue;
        if (lines[(oy * overlay.width + ox) * 4 + 3] > 40) return true;
      }
    }
    return false;
  };
  let edge = 0;
  let near = 0;
  for (let y = 1; y < h - 1; y += 1) {
    for (let x = 1; x < w - 1; x += 1) {
      if (!red(x, y) || (red(x - 1, y) && red(x + 1, y) && red(x, y - 1) && red(x, y + 1))) continue;
      edge += 1;
      if (drawn(x, y)) near += 1;
    }
  }
  return { edge, near, share: edge ? near / edge : 0 };
}, { reach });

const cursorAt = async (page, p) => {
  await page.mouse.move(p.x, p.y);
  return page.locator("[data-stage-canvas]").evaluate((el) => el.style.cursor);
};

// docs/space-and-view.md "レンズの Camera の当たり": a lens Camera (κ 0.8) draws the guides, the gizmo and the sky image's
// handles on its bent picture, and they are hit and dragged there as on a pinhole.
test("Camera tab on a lens Camera: the guides lie on the bent picture, nothing selected", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame&curve=0.8", { width: 1920, height: 1080 });
  await toTab(page, "Camera");
  await page.mouse.move(5, 5);
  await page.waitForTimeout(200);
  const shown = await overlayPixels(page);
  expect(shown.any, "the guides are drawn").toBeGreaterThan(40);
  expect(shown.yellow).toBe(0);
  const along = await guideAlongRed(page);
  console.log(`red edge pixels ${along.edge}, with a guide within 3px ${along.near} (${(along.share * 100).toFixed(1)}%)`);
  expect(along.edge).toBeGreaterThan(100);
  expect(along.share).toBeGreaterThan(0.8);
  // The hover lights the red plane's guide where the lens shows it.
  const red = await redOnPage(page);
  expect(await cursorAt(page, red)).toBe("default");
  expect(problems).toEqual([]);
});

test("Camera tab on a lens Camera: a selected object's gizmo sits on it and its drag keeps the grabbed point under the pointer; an empty drag moves the Camera", async ({ page }) => {
  const problems = await load(page, "aspect=16:9&mode=frame&curve=0.8", { width: 1920, height: 1080 });
  await toTab(page, "Camera");
  const red = await redOnPage(page);
  await page.mouse.click(red.x, red.y);
  await expect.poll(() => selected(page)).toBe("sticker_1");
  await page.waitForTimeout(200);
  expect((await overlayPixels(page)).yellow).toBeGreaterThan(40);
  expect((await guideAlongRed(page)).share, "the selected guide on the bent outline").toBeGreaterThan(0.8);
  // Move's center dot sits on the plane's middle as the lens shows it.
  const body = await redOnPage(page);
  const grip = await grabNear(page, body, 30);
  expect(grip, "the gizmo's center dot on the object").not.toBeNull();
  const startPosition = await position(page, 0);
  const startCamera = await camera(page);
  await dragBy(page, grip, 60, 30);
  expect(await position(page, 0)).not.toBe(startPosition);
  expect((await camera(page)).yaw_deg).toBeCloseTo(startCamera.yaw_deg, 6);
  const after = await redOnPage(page);
  console.log(`red moved by (${(after.x - body.x).toFixed(1)}, ${(after.y - body.y).toFixed(1)}) for a drag of (60, 30)`);
  expect(Math.abs(after.x - body.x - 60)).toBeLessThan(6);
  expect(Math.abs(after.y - body.y - 30)).toBeLessThan(6);
  // The grabbed handle is still under the pointer where the drag let go.
  expect(await cursorAt(page, { x: grip.x + 60, y: grip.y + 30 })).toBe("grab");
  await page.keyboard.press("Control+z");
  expect(await position(page, 0)).toBe(startPosition);
  // A drag on empty space looks around with the Camera; the object stays.
  const frame = await rectOf(page, "[data-frame-box]");
  await dragBy(page, { x: frame.x + frame.width * 0.85, y: frame.y + frame.height * 0.15 }, 60, 0);
  expect((await camera(page)).yaw_deg).toBeLessThan(startCamera.yaw_deg - 3);
  expect(await position(page, 0)).toBe(startPosition);
  expect(problems).toEqual([]);
});

test("Camera tab on a lens Camera: the selected sky image's handles sit on its bent frame and a corner scales it", async ({ page }) => {
  // tests/browser/pages/studio_select.html draws its sky image (this page's sky image does not load as a layer).
  const problems = watch(page);
  await page.setViewportSize({ width: 1920, height: 1080 });
  // The sky image 14° right of and 10° above the Camera's axis (its yaw 25, pitch 0).
  await page.goto("/tests/browser/pages/studio_select.html?curve=0.8&sky=39,10");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__studio.error)).toBeNull();
  await page.waitForTimeout(400);
  await toTab(page, "Camera");
  // Its frame: the poster's orange on the stage.
  const stage = await stageBox(page);
  const poster = await page.evaluate((rgb) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const box = canvas.getBoundingClientRect();
    const probe = document.createElement("canvas");
    probe.width = Math.round(box.width);
    probe.height = Math.round(box.height);
    const g = probe.getContext("2d", { willReadFrequently: true });
    g.drawImage(canvas, 0, 0, probe.width, probe.height);
    const data = g.getImageData(0, 0, probe.width, probe.height).data;
    let sx = 0;
    let sy = 0;
    let n = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (Math.abs(data[i] - rgb[0]) < 40 && Math.abs(data[i + 1] - rgb[1]) < 40 && Math.abs(data[i + 2] - rgb[2]) < 40) {
        sx += (i / 4) % probe.width;
        sy += Math.floor(i / 4 / probe.width);
        n += 1;
      }
    }
    return n > 50 ? { x: sx / n, y: sy / n } : null;
  }, [0xd9, 0x57, 0x3f]);
  const at = poster ? { x: stage.x + poster.x, y: stage.y + poster.y } : null;
  console.log(`sky image at ${JSON.stringify(at)}`);
  expect(at, "the sky image shows").not.toBeNull();
  await page.mouse.click(at.x, at.y);
  await expect.poll(() => selected(page)).toBe("sticker_1");
  await page.waitForTimeout(200);
  // A corner handle: the cursor turns into a diagonal resize near the image's corners.
  let corner = null;
  for (let r = 20; r <= 260 && !corner; r += 3) {
    for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      const p = { x: at.x + sx * r * 1.3, y: at.y + sy * r };
      if (/nwse|nesw/.test(await cursorAt(page, p))) {
        corner = { ...p, sx, sy };
        break;
      }
    }
  }
  expect(corner, "a corner handle of the sky image").not.toBeNull();
  const size = () => page.evaluate(() => window.__studio.session.state.stickers.find((item) => item.id === "sticker_1").size.value.hFOV_deg);
  const before = await size();
  await dragBy(page, corner, corner.sx * 50, corner.sy * 40);
  expect(await size()).toBeGreaterThan(before * 1.2);
  expect(await selected(page)).toBe("sticker_1");
  expect(problems).toEqual([]);
});

for (const viewport of [{ width: 1920, height: 1080 }, { width: 1440, height: 860 }, { width: 1024, height: 700 }]) {
  for (const aspect of ["16:9", "9:16"]) {
    test(`the bar at the bottom center stays clear of the Roll ruler, and the frame does not move when it shows (${aspect}, ${viewport.width}×${viewport.height})`, async ({ page }) => {
      const problems = await load(page, `aspect=${aspect}&mode=frame`, viewport);
      await toTab(page, "Camera");
      const frame = await rectOf(page, "[data-frame-box]");
      // The sky image's row in the Timeline selects it.
      await page.locator('[data-head="sticker_9"] [data-part="name"]').first().click();
      await expect.poll(() => selected(page)).toBe("sticker_9");
      const bar = await rectOf(page, '.pano-studio-at-bar [data-kind="sky"]');
      const stage = await rectOf(page, '[data-region="stage"]');
      const track = await rectOf(page, '[data-ruler="Roll"] [data-ruler-track]');
      console.log(`bar height ${bar.height}, bar top from the stage's bottom ${stage.bottom - bar.y}, Roll strip bottom from the stage's bottom ${stage.bottom - track.bottom}`);
      expect(Math.round(stage.bottom - bar.bottom)).toBe(16);
      // 10px between the Roll ruler's numbers (under its strip) and the bar (docs/design.md "Camera タブのフレームの余白"),
      // and the ruler's whole hit band above the bar.
      const numbers = await page.locator('[data-ruler="Roll"] .pano-studio-edge-ruler-num').evaluateAll((els) => Math.max(...els.map((el) => el.getBoundingClientRect().bottom)));
      console.log(`Roll numbers' bottom from the stage's bottom ${stage.bottom - numbers}`);
      expect(numbers).toBeGreaterThan(track.bottom);
      expect(bar.y - numbers).toBeGreaterThanOrEqual(9.5);
      expect((await rectOf(page, '[data-ruler="Roll"]')).bottom).toBeLessThanOrEqual(bar.y);
      expect(Math.round(stage.bottom - (frame.bottom))).toBeGreaterThanOrEqual(CAMERA_FRAME_MARGIN.bottom);
      expect(await rectOf(page, "[data-frame-box]")).toEqual(frame);
      expect(problems).toEqual([]);
    });
  }
}
