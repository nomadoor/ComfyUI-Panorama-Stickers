import { expect, test } from "@playwright/test";

// docs/preview-node.md "ノード上": the Panorama Preview node opens the new Preview window (docs/studio-ui.md
// "Preview のウィンドウ") from its node surface for IMAGE, VIDEO and PANO_SCENE, through web_src/main.js as ComfyUI loads it (tests/browser/pages/preview_entry.html: the node has the
// MatchType `source` the real frontend builds), and with nothing linked to the source (an empty black stage).

// A 4×2 PNG for the /view the node surface asks for.
const PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAAEklEQVR4nGP4z8DwHxkzoAsAAA8hD/EEN8afAAAAAElFTkSuQmCC",
  "base64",
);

async function load(page, query) {
  const problems = [];
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  await page.setViewportSize({ width: 1440, height: 860 });
  await page.goto(`/tests/browser/pages/preview_entry.html${query}`);
  await page.waitForFunction(() => window.__entry?.ready, null, { timeout: 30_000 });
  expect(await page.evaluate(() => window.__entry.error)).toBeNull();
  return problems;
}

for (const [name, query, button] of [
  ["IMAGE", "", "Open viewer"],
  ["VIDEO", "?video", "Open viewer"],
  ["PANO_SCENE", "?scene", "Open viewer"],
  ["nothing linked", "?none", "Open viewer"],
]) {
  test(`the node surface's top-right button opens the new window for ${name}`, async ({ page }) => {
    const problems = await load(page, query);
    const open = page.locator(`#graph [aria-label="${button}"]`);
    await expect(open).toBeVisible({ timeout: 20_000 });
    await open.click();
    await expect(page.locator("[data-preview-window]")).toHaveCount(1);
    expect(await page.evaluate(() => window.__entry.fullscreenAsked)).toBe(0);
    expect(await page.evaluate(() => document.fullscreenElement)).toBeNull();
    expect(problems).toEqual([]);
  });
}

test("the IMAGE node surface reads the picture of its origin's result", async ({ page }) => {
  const views = [];
  await page.route("**/view?*", (route) => {
    const url = new URL(route.request().url());
    views.push(`${url.pathname}${url.search}`);
    return route.fulfill({ status: 200, contentType: "image/png", body: PNG });
  });
  const problems = await load(page, "?result");
  await expect.poll(() => views).toContain("/view?filename=bg.png&type=temp");
  expect(problems).toEqual([]);
});

// docs/preview-node.md "ノード上" (ADR 0061): on the node, the IMAGE view's plain wheel changes nothing; Alt + wheel and a
// pinch (Ctrl + wheel, its fine events added up) zoom by the FOV step; the surface takes every wheel (its default
// stopped: not the page's or the graph's zoom). The capture by ComfyUI's own canvas is not in this page.
test("on the IMAGE node the plain wheel changes nothing; Alt + wheel and a pinch zoom by the FOV step", async ({ page }) => {
  const problems = await load(page, "");
  await expect(page.locator('#graph [aria-label="Open viewer"]')).toBeVisible({ timeout: 20_000 });
  const fov = () => page.evaluate(async () => {
    const { peekPreviewNode } = await import("/web_src/pano_node_bridge.js");
    return peekPreviewNode(window.__entry.node).runtime.view.fov;
  });
  const wheel = (events) => page.evaluate((list) => {
    const root = document.querySelector('#graph [data-capture-wheel="true"]');
    const canvas = root.querySelector("canvas") ?? root;
    return list.map((mods) => {
      const event = new WheelEvent("wheel", { deltaMode: 0, bubbles: true, cancelable: true, ...mods });
      canvas.dispatchEvent(event);
      return event.defaultPrevented;
    });
  }, events);
  expect(await fov()).toBe(100);
  expect(await wheel([{ deltaY: -100 }, { deltaY: -100 }])).toEqual([true, true]);
  expect(await fov()).toBe(100);
  expect(await wheel([{ deltaY: -100, altKey: true }])).toEqual([true]);
  expect(await fov()).toBe(98);
  expect(await wheel([{ deltaY: 50, ctrlKey: true }, { deltaY: 50, ctrlKey: true }])).toEqual([true, true]);
  expect(await fov()).toBe(100);
  expect(problems).toEqual([]);
});

// docs/preview-node.md "ノード上" (ADR 0061): the Scene viewer on the node zooms with Alt + wheel and a pinch; its Reset
// view (the home icon) is off at the start view, on after a zoom, and brings the FOV back.
test("the Scene viewer on the node zooms with Alt + wheel and a pinch; Reset view is off at the start", async ({ page }) => {
  const problems = await load(page, "?scene");
  const reset = page.locator('#graph [data-action="reset-view"]');
  await expect(reset).toBeVisible({ timeout: 20_000 });
  await expect(reset).toHaveAttribute("aria-disabled", "true");
  await expect(reset).toHaveAttribute("data-tip", "Reset view · Already at the start");
  const fov = () => page.evaluate(async () => {
    const { peekSceneViewer } = await import("/web_src/pano_node_bridge.js");
    return peekSceneViewer(window.__entry.node).record.view.viewFov;
  });
  const prevented = await page.evaluate(() => {
    const canvas = document.querySelector("#graph .pano-scene-viewer-canvas");
    return [{ deltaY: -100, altKey: true }, { deltaY: -60, ctrlKey: true }, { deltaY: -40, ctrlKey: true }].map((mods) => {
      const event = new WheelEvent("wheel", { deltaMode: 0, bubbles: true, cancelable: true, ...mods });
      canvas.dispatchEvent(event);
      return event.defaultPrevented;
    });
  });
  expect(prevented).toEqual([true, true, true]);
  expect(await fov()).toBe(96);
  await expect(reset).not.toHaveAttribute("aria-disabled", "true");
  await reset.click();
  await expect.poll(fov).toBe(100);
  await expect(reset).toHaveAttribute("aria-disabled", "true");
  expect(problems).toEqual([]);
});
