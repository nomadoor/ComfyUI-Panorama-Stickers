import assert from "node:assert/strict";
import test from "node:test";

import {
  STUDIO_BUTTON_GAP,
  STUDIO_BUTTON_INSET,
  STUDIO_ROUND_BUTTON,
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

test("the line sits right under the picture, as wide as it, and the buttons above its bottom edge", () => {
  const layout = studioSurfaceLayout(400, 300, 1);
  const { picture, line, buttons } = layout;
  assert.deepEqual(line, { x: picture.x, y: picture.y + picture.h + STUDIO_LINE_GAP, w: picture.w, h: STUDIO_LINE_HEIGHT });
  assert.equal(buttons.bottom, 300 - (picture.y + picture.h) + STUDIO_BUTTON_INSET);
});

// docs/studio-node-surface.md "表示の構成": Open Studio alone at the center, or with the play button left of it as one group.
test("without playback Open Studio alone is centered on the picture, and the play button takes no seat", () => {
  const { picture, buttons } = studioSurfaceLayout(400, 300, 1, { playable: false, openWidth: 110 });
  assert.equal(buttons.play, null);
  assert.equal(buttons.compact, false);
  assert.equal(buttons.open.x + 110 / 2, picture.x + picture.w / 2);
  assert.equal(buttons.open.w, 110);
});

test("with playback the play button and Open Studio are one group centered on the picture, 8px apart", () => {
  const { picture, buttons } = studioSurfaceLayout(400, 300, 1, { playable: true, openWidth: 110 });
  assert.equal(STUDIO_BUTTON_GAP, 8);
  assert.equal(STUDIO_ROUND_BUTTON, 30);
  assert.equal(buttons.compact, false);
  assert.equal(buttons.open.x - (buttons.play.x + STUDIO_ROUND_BUTTON), STUDIO_BUTTON_GAP);
  const group = STUDIO_ROUND_BUTTON + STUDIO_BUTTON_GAP + 110;
  assert.equal(buttons.play.x, picture.x + (picture.w - group) / 2);
});

test("a group wider than the picture makes Open Studio a 30px round icon button, still centered", () => {
  // The picture of a 150 x 120 surface at 2 : 1 is 150 wide: 30 + 8 + 120 does not fit, 30 + 8 + 30 does.
  const narrow = studioSurfaceLayout(150, 120, 2, { playable: true, openWidth: 120 });
  assert.equal(narrow.buttons.compact, true);
  assert.equal(narrow.buttons.open.w, STUDIO_ROUND_BUTTON);
  const group = 2 * STUDIO_ROUND_BUTTON + STUDIO_BUTTON_GAP;
  assert.equal(narrow.buttons.play.x, narrow.picture.x + (narrow.picture.w - group) / 2);
  assert.equal(narrow.buttons.open.x, narrow.buttons.play.x + STUDIO_ROUND_BUTTON + STUDIO_BUTTON_GAP);
  // Open Studio alone does too when it does not fit.
  const alone = studioSurfaceLayout(100, 80, 2, { playable: false, openWidth: 120 });
  assert.equal(alone.buttons.compact, true);
  assert.equal(alone.buttons.open.x + STUDIO_ROUND_BUTTON / 2, alone.picture.x + alone.picture.w / 2);
  // A group that fits exactly keeps the label.
  const exact = studioSurfaceLayout(158, 200, 2, { playable: true, openWidth: 120 });
  assert.equal(exact.buttons.compact, false);
});

test("a surface too small for anything gives an empty picture, never a negative one", () => {
  const layout = studioSurfaceLayout(0, 10, 2);
  assert.ok(layout.picture.w >= 0 && layout.picture.h >= 0);
  assert.ok(layout.picture.y >= 0);
  assert.equal(studioSurfaceLayout(100, 100, NaN).picture.w > 0, true);
});

// Review P2-2: Open Studio is measured once the stylesheet applies; until then it stands alone at the center by its
// middle, and the play button comes after (no copy of its width in the code).
test("before Open Studio is measured it is alone and centered, and the play button waits", () => {
  const { picture, buttons } = studioSurfaceLayout(400, 300, 1, { playable: true });
  assert.equal(buttons.play, null);
  assert.equal(buttons.compact, false);
  assert.deepEqual(buttons.open, { center: picture.x + picture.w / 2 });
});
