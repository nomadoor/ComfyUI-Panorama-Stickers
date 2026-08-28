import assert from "node:assert/strict";
import test from "node:test";

import {
  registerExternalStickerSync,
  runExternalStickerSync,
} from "../web_src/pano_external_sticker_sync.js";

test("external sticker sync keeps the newest live owner across reverse teardown", () => {
  const node = {};
  const calls = [];
  const removeSurface = registerExternalStickerSync(node, (reason) => calls.push(`surface:${reason}`));
  const removeModal = registerExternalStickerSync(node, (reason) => calls.push(`modal:${reason}`));

  removeSurface();
  assert.equal(runExternalStickerSync(node, "executed"), true);
  assert.deepEqual(calls, ["modal:executed"]);

  removeModal();
  assert.equal(runExternalStickerSync(node, "executed"), false);
});

test("external sticker sync reveals the preceding live owner after normal teardown", () => {
  const node = {};
  const calls = [];
  const removeSurface = registerExternalStickerSync(node, (reason) => calls.push(`surface:${reason}`));
  const removeModal = registerExternalStickerSync(node, (reason) => calls.push(`modal:${reason}`));

  removeModal();
  assert.equal(runExternalStickerSync(node, "image-loaded"), true);
  assert.deepEqual(calls, ["surface:image-loaded"]);

  removeSurface();
});
