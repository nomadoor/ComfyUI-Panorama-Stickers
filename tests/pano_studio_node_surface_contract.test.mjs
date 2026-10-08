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
  assert.match(runtime, /const status = studioStatus\(\{ \.\.\.studioOptions, display: studioRunDisplay\(node, runOutput\) \}, sceneState\);\s*if \(status\) nodeSurfaceUiModel\.status = status;/);
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

test("once it has run, the Studio surface shows the last run's output, edited since or not (ADR 0029)", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  // The output counts whatever the inputs are now; only the run's size waits for its media to be the inputs'.
  assert.match(runtime, /erp: ownOutputUiValue\(node, "pano_output_erp"\) \|\| null,\s*frame: ownOutputUiValue\(node, "pano_output_frame"\) \|\| null,/);
  assert.match(runtime, /const runOutput = studioOptions \? studioRunOutput\(studioOptions\) : null;/);
  assert.match(runtime, /\? studioRunPicture\(node, runOutput\)/);
  assert.match(runtime, /drawCanvas\(node, canvas, surfaceView, run\);/);
  // An ERP is drawn alone: the sky Stickers and the paint are already in it, and no Sticker frame is drawn over it.
  assert.match(runtime, /runBackground \? \{ background: runBackground, layers: \[\] \} : surfaceViewInput\(node, state, bgImg\)/);
  assert.match(runtime, /if \(panoramaDrawn && !runBackground\) \{/);
  // A perspective Camera's first frame is fitted flat in the surface, without the three.js view.
  assert.match(runtime, /if \(run\?\.frame\) \{\s*surfaceView\.release\(\);[\s\S]*?const scale = Math\.min\(surfW \/ width, \(surfH - top\) \/ height\);\s*ctx\.drawImage\(run\.frame,/);
  // The note: not run yet, edited since the run, or the output cannot be loaded (the live drawing shows then).
  assert.match(runtime, /if \(!output\) return "not-run";\s*if \(cachedStudioRunImage\(node, output\)\?\.failed\) return "unavailable";\s*return output\.current \? "run" : "edited";/);
  // The image is kept per result file, not asked for again after it fails, and let go with the surface.
  assert.match(runtime, /if \(media\.studioRunImage && media\.studioRunImage\.src !== src\) disposeStudioRunImage\(node\);/);
  assert.match(runtime, /record\.failed = true;/);
  assert.match(runtime, /disposeNodeOutputVideoCache\(node\);\s*disposeStudioRunImage\(node\);/);
});

test("the run's output ERP is turned back into World by its Camera rotation, only while the surface is shown", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const view = await read("../web_src/pano_three_view.js");

  // The panorama ERP dome takes the background's quaternion, and no other ERP keeps a previous one.
  assert.match(view, /placeErp\(mesh, halfCoverage, quaternion\) \{\s*mesh\.material\.uniforms\.halfCoverage\.value = halfCoverage;\s*mesh\.quaternion\.set\(quaternion\?\.x \?\? 0, quaternion\?\.y \?\? 0, quaternion\?\.z \?\? 0, quaternion\?\.w \?\? 1\);/);
  assert.match(view, /projection\.placeErp\(mesh, halfCoverage, layer\.quaternion\);/);
  // The rotation the run shot the ERP with, which an edit since the run does not change.
  assert.match(runtime, /quaternion: studioRunQuaternion\(output\.entry\.rotation\),/);
  assert.doesNotMatch(runtime, /cached\.quaternion/);
  // A collapsed or hidden surface, or one under its open editor, does not load the run's image.
  assert.match(runtime, /const run = studioOptions && surfaceShown\(wrap, !!node\.flags\?\.collapsed, editorOpen\(node\)\)/);
  // The image counts as ready once it is decoded, so the first draw with it does not stall.
  assert.match(runtime, /image\.decode\(\)\.then\(/);
  assert.match(runtime, /if \(!cached\.ready\) return null;/);
});

test("each run of the node, a resent cached one too, loads its output again once, and a flat frame sits below the bar", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /const reason = selfHit \? "self" : "upstream";\s*if \(selfHit\) \{\s*(?:\/\/.*\s*)?disposeStudioRunImage\(node\);\s*nodeSurface\(node\)\.dom\?\.requestDraw\?\.\(\);\s*\}\s*if \(isRepeatedOutput\(/);
  assert.match(runtime, /const top = STUDIO_BAR_BOTTOM;\s*const scale = Math\.min\(surfW \/ width, \(surfH - top\) \/ height\);/);
});

test("the editor's inspector shows a port Sticker's new vFOV once its image loads", async () => {
  const stickers = await read("../web_src/editor/external_stickers.js");

  assert.match(stickers, /\} else if \(reason === "image-loaded"\) \{\s*(?:\/\/.*\s*)?updateSidePanel\(\);\s*\}/);
});

