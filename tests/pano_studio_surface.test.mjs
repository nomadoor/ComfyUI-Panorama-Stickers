import assert from "node:assert/strict";
import test from "node:test";

import {
  STUDIO_BUTTON_INSET,
  STUDIO_LINE_GAP,
  STUDIO_LINE_HEIGHT,
  studioSurfaceLayout,
} from "../web_src/pano_studio_surface.js";

test("the picture keeps the output's ratio in the width and the height above the line, at the top, centered", () => {
  // A wide surface: the height holds the picture.
  const wide = studioSurfaceLayout(600, 222, 2);
  const room = 222 - STUDIO_LINE_HEIGHT - STUDIO_LINE_GAP;
  assert.deepEqual(wide.picture, { x: (600 - room * 2) / 2, y: 0, w: room * 2, h: room });
  // A tall surface: the width holds it, the rest is below the line.
  const tall = studioSurfaceLayout(300, 400, 16 / 9);
  assert.equal(tall.picture.w, 300);
  assert.equal(tall.picture.h, 300 * 9 / 16);
  assert.equal(tall.picture.y, 0);
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
  assert.deepEqual(studioSurfaceLayout(100, 100, NaN).picture.w > 0, true);
});
