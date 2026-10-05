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
  assert.match(runtime, /const studioOptions = studioSurface \? studioStatusOptions\(node, surfacePlayback\) : null;/);
  assert.match(runtime, /const status = studioStatus\(\{ \.\.\.studioOptions, showingRun: !!runBackground \}, sceneState\);\s*if \(status\) nodeSurfaceUiModel\.status = status;/);
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

test("the Studio surface shows its last run's output ERP alone while the run is current (follow-up of #91)", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  // The output ERP counts under the same check as the run's size: its media are the inputs'.
  assert.match(runtime, /erp: \(current && ownOutputUiValue\(node, "pano_output_erp"\)\) \|\| null,/);
  assert.match(runtime, /\? studioRunBackground\(node, studioRunErp\(sceneState\(\), studioOptions\), sceneState\)/);
  assert.match(runtime, /drawCanvas\(node, canvas, surfaceView, runBackground\);/);
  // It is drawn alone: the sky Stickers and the paint are already in it, and no Sticker frame is drawn over it.
  assert.match(runtime, /runBackground \? \{ background: runBackground, layers: \[\] \} : surfaceViewInput\(node, state, bgImg\)/);
  assert.match(runtime, /if \(panoramaDrawn && !runBackground\) \{/);
  // The image is kept per result file, not asked for again after it fails (it just stays not ready), and let go
  // with the surface.
  assert.match(runtime, /if \(cached && cached\.src !== src\) \{\s*disposeStudioRunImage\(node\);/);
  assert.match(runtime, /disposeNodeOutputVideoCache\(node\);\s*disposeStudioRunImage\(node\);/);
});

test("the run's output ERP is turned back into World by its Camera rotation, only while the surface is shown", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const view = await read("../web_src/pano_three_view.js");

  // The panorama ERP dome takes the background's quaternion, and no other ERP keeps a previous one.
  assert.match(view, /placeErp\(mesh, halfCoverage, quaternion\) \{\s*mesh\.material\.uniforms\.halfCoverage\.value = halfCoverage;\s*mesh\.quaternion\.set\(quaternion\?\.x \?\? 0, quaternion\?\.y \?\? 0, quaternion\?\.z \?\? 0, quaternion\?\.w \?\? 1\);/);
  assert.match(view, /projection\.placeErp\(mesh, halfCoverage, layer\.quaternion\);/);
  assert.match(runtime, /quaternion: studioRunQuaternion\(sceneState\(\)\)/);
  // A collapsed or hidden surface does not load the run's image.
  assert.match(runtime, /const runBackground = studioOptions && surfaceShown\(wrap, !!node\.flags\?\.collapsed\)/);
  // The image counts as ready once it is decoded, so the first draw with it does not stall.
  assert.match(runtime, /image\.decode\(\)\.then\(/);
  assert.match(runtime, /return cached\.ready/);
});
