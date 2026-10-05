import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("the Studio surface has the status, the Open Editor action, and no editing or playback controls (#91)", async () => {
  const source = await read("../web_src/components/PanoStudioNodeSurface.vue");

  assert.match(source, /model\.status\.shot/);
  assert.match(source, /model\.status\.size/);
  assert.match(source, /model\.status\.note/);
  assert.match(source, /data-action="open-editor"/);
  assert.match(source, /type: 'open-editor'/);
  assert.match(source, /PanoViewUnavailable/);
  assert.doesNotMatch(source, /toggle-playback|add-image|delete-selected|toggle-lock|PanoImageFilePicker/);
  // The note keeps its line when it is empty, so nothing moves when a cap appears (no layout shift).
  assert.doesNotMatch(source, /v-if="model\.status\.note/);
});

test("the Studio surface is view-only: the runtime mounts it for Panorama Studio and skips the Sticker gestures", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /const studioSurface = stickersMode && node\.__panoStudio === true;/);
  assert.match(runtime, /createApp\(studioSurface \? PanoStudioNodeSurface : \(stickersMode \? PanoStickersNodeSurface : PanoCutoutNodeSurface\)/);
  assert.match(runtime, /let picked = studioSurface \? null : pick\(\);/);
  assert.match(runtime, /const stickerDrop = stickersMode && !studioSurface;/);
  assert.match(runtime, /if \(!stickersMode \|\| studioSurface \|\| \(ev\.key !== "Delete"/);
  assert.match(runtime, /const status = studioStatus\(studioStatusOptions\(node, surfacePlayback\), \(\) => surfaceSceneState\(node, getCachedState\(node\)\)\);\s*if \(status\) nodeSurfaceUiModel\.status = status;/);
  assert.match(runtime, /\.\.\.\(studioSurface \? \{ status: \{ shot: "", size: "", note: "" \} \} : \{\}\)/);
  // The run's size counts only while its media are the inputs' (and its key, the state and widgets).
  assert.match(runtime, /\["background", "external-sticker", "scene"\]\.every\(\(channel\) => isNodeOutputMediaCurrent\(node, channel\)\)/);
  assert.match(runtime, /run: \(current && ownOutputUiValue\(node, "pano_output_size"\)\) \|\| null/);
  // Coverage is normalized once, by getCachedState.
  assert.match(runtime, /coverage: getCachedState\(node\)\.coverage,/);
  // The status follows output_size, and the surface gives its callback back when it goes.
  assert.match(runtime, /const sizeWidget = studioSurface \? getWidget\(node, "output_size"\) : null;/);
  assert.match(runtime, /if \(sizeCallbackWrapper && sizeWidget\.callback === sizeCallbackWrapper\) sizeWidget\.callback = sizeCallbackPrev;/);
});
