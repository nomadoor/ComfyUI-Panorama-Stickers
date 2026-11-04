import { expect, test } from "@playwright/test";

// docs/design.md "色": the new UI's light and dark follow ComfyUI's theme. Frontend 1.58 and later state it as
// `color-scheme` on <html> (no class); earlier frontends put `.dark-theme` on <html> or <body>.

const DARK_PANEL = "rgb(27, 28, 30)"; // #1b1c1e
const LIGHT_PANEL = "rgb(255, 255, 255)"; // #ffffff
const DARK_FG = "rgb(220, 220, 224)"; // #dcdce0
const LIGHT_FG = "rgb(22, 22, 24)"; // #161618

async function swatch(page, root = "[data-root]") {
  return page.evaluate((sel) => {
    const style = getComputedStyle(document.querySelector(`${sel} [data-swatch]`));
    return { panel: style.backgroundColor, fg: style.color };
  }, root);
}

async function open(page, { scheme = "", bodyClass = "", htmlClass = "" } = {}) {
  await page.goto("/tests/browser/pages/studio_theme.html");
  await page.evaluate(({ scheme, bodyClass, htmlClass }) => {
    if (scheme) document.documentElement.style.colorScheme = scheme;
    if (bodyClass) document.body.classList.add(bodyClass);
    if (htmlClass) document.documentElement.classList.add(htmlClass);
  }, { scheme, bodyClass, htmlClass });
}

test("color-scheme dark on <html> (frontend 1.58+) gives the dark tokens", async ({ page }) => {
  await open(page, { scheme: "dark" });
  expect(await swatch(page)).toEqual({ panel: DARK_PANEL, fg: DARK_FG });
});

test("color-scheme light on <html> gives the light tokens, even when the OS prefers dark", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await open(page, { scheme: "light" });
  expect(await swatch(page)).toEqual({ panel: LIGHT_PANEL, fg: LIGHT_FG });
});

test("no theme stated gives the light tokens, even when the OS prefers dark", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await open(page);
  expect(await swatch(page)).toEqual({ panel: LIGHT_PANEL, fg: LIGHT_FG });
});

test("an earlier frontend's .dark-theme on <html> or <body> still gives the dark tokens", async ({ page }) => {
  await open(page, { htmlClass: "dark-theme" });
  expect(await swatch(page)).toEqual({ panel: DARK_PANEL, fg: DARK_FG });
  await open(page, { bodyClass: "dark-theme" });
  expect(await swatch(page)).toEqual({ panel: DARK_PANEL, fg: DARK_FG });
});

test(".pano-studio.dark-theme on the root itself gives the dark tokens", async ({ page }) => {
  await open(page, { scheme: "light" });
  expect((await swatch(page, "[data-own-class]")).panel).toBe(DARK_PANEL);
});

test("switching ComfyUI's theme while open changes the tokens at once", async ({ page }) => {
  await open(page, { scheme: "light" });
  expect((await swatch(page)).panel).toBe(LIGHT_PANEL);
  await page.evaluate(() => { document.documentElement.style.colorScheme = "dark"; });
  expect((await swatch(page)).panel).toBe(DARK_PANEL);
});
