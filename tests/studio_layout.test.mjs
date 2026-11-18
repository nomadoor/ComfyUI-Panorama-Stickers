// docs/studio-ui.md "下の中央のバー" "バーの置き場所" (web_src/studio/layout.js barPosition): the bar at the bottom center
// moves left before it comes nearer than BAR_VIEW_GAP to the View group, then drops its name's text, then scrolls.
import assert from "node:assert/strict";
import test from "node:test";

import { BAR_VIEW_GAP, barPosition } from "../web_src/studio/layout.js";

test("the bar stays centered while it keeps BAR_VIEW_GAP from the View group", () => {
  assert.equal(BAR_VIEW_GAP, 8);
  assert.deepEqual(barPosition({ stage: 1600, bar: 500, name: 140, view: 196, inset: 16 }), { left: 550, compact: false, maxWidth: null });
});

test("too near the View group it moves left, then loses its name's text, then scrolls inside itself", () => {
  // Centered it would end at 1150 > 1200 - 16 - 196 - 8 = 980: moved left to end at 980.
  assert.deepEqual(barPosition({ stage: 1200, bar: 800, name: 140, view: 196, inset: 16 }), { left: 180, compact: false, maxWidth: null });
  // 800 wide does not fit 16..780; 660 without the name does.
  assert.deepEqual(barPosition({ stage: 1000, bar: 800, name: 140, view: 196, inset: 16 }), { left: 120, compact: true, maxWidth: null });
  // Not even that: it scrolls in the room there is.
  assert.deepEqual(barPosition({ stage: 700, bar: 800, name: 140, view: 196, inset: 16 }), { left: 16, compact: true, maxWidth: 464 });
});
