import assert from "node:assert/strict";
import test from "node:test";

import {
  STUDIO_BUTTON_INSET,
  STUDIO_LINE_GAP,
  STUDIO_LINE_HEIGHT,
  studioSurfaceLayout,
} from "../web_src/pano_studio_surface.js";

const LINE = STUDIO_LINE_HEIGHT + STUDIO_LINE_GAP;

test("a wide surface: the height above the line holds the picture, centered across", () => {
  const { picture } = studioSurfaceLayout(600, 222, 2);
  const h = 222 - LINE;
  assert.deepEqual(picture, { x: (600 - h * 2) / 2, y: 0, w: h * 2, h });
});

test("a tall surface: the width holds the picture, and the picture with its line is centered up and down", () => {
  const { picture, line } = studioSurfaceLayout(300, 400, 16 / 9);
  assert.equal(picture.w, 300);
  assert.equal(picture.h, 300 * 9 / 16);
  assert.equal(picture.x, 0);
  // As much room above the picture as below the line.
  assert.equal(picture.y, (400 - picture.h - LINE) / 2);
  assert.equal(400 - (line.y + line.h), picture.y);
});

test("a surface made taller and wider grows the picture to the largest that fits, still centered", () => {
  const small = studioSurfaceLayout(360, 240, 2);
  const large = studioSurfaceLayout(720, 900, 2);
  assert.ok(large.picture.w > small.picture.w);
  assert.equal(large.picture.w, 720);
  assert.equal(large.picture.x, 0);
  assert.equal(large.picture.y, (900 - 360 - LINE) / 2);
});

test("the line sits right under the picture, as wide as it, and the button above its bottom edge", () => {
  const layout = studioSurfaceLayout(400, 300, 1);
  const { picture, line, button } = layout;
  assert.deepEqual(line, { x: picture.x, y: picture.y + picture.h + STUDIO_LINE_GAP, w: picture.w, h: STUDIO_LINE_HEIGHT });
  assert.equal(button.centerX, picture.x + picture.w / 2);
  assert.equal(button.bottom, 300 - (picture.y + picture.h) + STUDIO_BUTTON_INSET);
});

test("a surface too small for anything gives an empty picture, never a negative one", () => {
  const layout = studioSurfaceLayout(0, 10, 2);
  assert.ok(layout.picture.w >= 0 && layout.picture.h >= 0);
  assert.ok(layout.picture.y >= 0);
  assert.equal(studioSurfaceLayout(100, 100, NaN).picture.w > 0, true);
});
