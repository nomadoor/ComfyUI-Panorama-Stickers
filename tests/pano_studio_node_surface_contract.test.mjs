import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("the Studio surface has the Open Studio button, the play button, the line with the shot and the size, and no editing controls", async () => {
  const source = await read("../web_src/components/PanoStudioNodeSurface.vue");

  assert.match(source, /class="pano-studio pano-studio-node-surface"/);
  assert.match(source, /data-action="open-editor"/);
  assert.match(source, /type: 'open-editor'/);
  assert.match(source, />Open Studio</);
  assert.match(source, /<SvgIcon :icon="ICON\.fullscreen" \/>/);
  assert.match(source, /model\.status\.shot/);
  assert.match(source, /model\.status\.size/);
  // The cap is the size's tooltip; the line has no note.
  assert.match(source, /:title="model\.status\.cap \|\| null"/);
  assert.doesNotMatch(source, /model\.status\.note/);
  // Panorama shows the 360° icon, Frame the aspect icon.
  assert.match(source, /props\.model\.status\.mode === "panorama" \? ICON\.pano : ICON\.aspect/);
  // The buttons and the line go where the canvas's picture is (studioSurfaceLayout), Open Studio always shown, the play
  // button only while the layout seats it (playable), toggling playback with its icon and tooltip (ADR 0052).
  assert.match(source, /left: px\(open\.x\)/);
  assert.match(source, /left: px\(open\.center\), bottom: px\(bottom\), transform: "translateX\(-50%\)"/);
  assert.match(source, /v-if="buttons\?\.play"/);
  assert.match(source, /data-action="toggle-playback"/);
  assert.match(source, /model\.playing \? ICON\.pause : ICON\.play/);
  assert.match(source, /props\.model\.playing \? "Pause" : "Play"/);
  // A narrow node: Open Studio without its label, its name as the tooltip.
  assert.match(source, /:title="compact \? 'Open Studio' : null"/);
  assert.match(source, /<span v-if="!compact" class="label">Open Studio<\/span>/);
  assert.match(source, /layout\.line\.y/);
  assert.doesNotMatch(source, /:hover|v-if="hover/);
  assert.match(source, /PanoViewUnavailable/);
  assert.doesNotMatch(source, /add-image|delete-selected|toggle-lock|PanoImageFilePicker|@keydown|seek/);
});

test("the Studio surface is view-only: the runtime mounts it for Panorama Studio, draws the Camera's output, and does not look around", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /const studioSurface = stickersMode && node\.__panoStudio === true;/);
  assert.match(runtime, /createApp\(studioSurface \? PanoStudioNodeSurface : \(stickersMode \? PanoStickersNodeSurface : PanoCutoutNodeSurface\)/);
  // Open Studio is measured only once the stylesheet applies (studioStyled).
  assert.match(runtime, /installStudioStylesheet\(\)\.then\(\(\) => \{\s*studioStyled = true;/);
  assert.match(runtime, /if \(studioStyled && studioOpenButton\?\.offsetWidth > 0/);
  assert.match(runtime, /let picked = studioSurface \? null : pick\(\);/);
  assert.match(runtime, /const stickerDrop = stickersMode && !studioSurface;/);
  assert.match(runtime, /if \(!stickersMode \|\| studioSurface \|\| \(ev\.key !== "Delete"/);
  // No look-around: no pan, no wheel capture, the wheel goes to the graph (ADR 0049).
  assert.match(runtime, /const panoramaInteractiveView = surface\.mode !== "cutout" && !studioSurface;/);
  assert.match(runtime, /if \(!studioSurface\) root\.setAttribute\("data-capture-wheel", "true"\);/);
  assert.match(runtime, /const wheelTargets = studioSurface \? \[\] :/);
  // The line first (the picture takes the output's shape from it), then the picture.
  assert.match(runtime, /const status = studioStatus\(studioStatusOptions\(node\), \(\) => surfaceSceneState\(node, getCachedState\(node\)\)\);\s*if \(status\) nodeSurfaceUiModel\.status = status;/);
  assert.match(runtime, /const layout = studioSurfaceLayout\(wrap\.clientWidth, wrap\.clientHeight, nodeSurfaceUiModel\.status\.ratio, \{\s*playable: nodeSurfaceUiModel\.playable,/);
  assert.match(runtime, /drawStudioPicture\(node, canvas, surfaceView, layout, studioErpCanvas\);/);
  // The run's size counts only while its media are the inputs' (and its key, the state and widgets).
  assert.match(runtime, /\["background", "external-sticker", "scene"\]\.every\(\(channel\) => isNodeOutputMediaCurrent\(node, channel\)\)/);
  assert.match(runtime, /run: \(current && ownOutputUiValue\(node, "pano_output_size"\)\) \|\| null/);
  // The line and the picture follow the widgets and state_json (pano_widget_callback.js), given back when it goes.
  assert.match(runtime, /\["state_json", "background_color", "background_range", "megapixels", "multiple"\]/);
  assert.match(runtime, /chainWidgetCallback\(widget, \(\) => requestDraw\(\)\)/);
  assert.match(runtime, /widgetRestores\.forEach\(\(restore\) => restore\(\)\)/);
});

test("the Studio picture is the editor's Output window picture: the live ERP in Panorama mode, the Camera's frame in Frame mode", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("function drawStudioPicture(");
  const picture = runtime.slice(start, runtime.indexOf("\nfunction ", start + 1));

  assert.match(picture, /const content = stageContent\(sceneState, frame, \{/);
  assert.match(picture, /paintLayers: surfacePaintLayers\(surface, state\)/);
  // What the editor draws of the inputs is drawn too (ADR 0052): the upstream layers and the depth grids in their colors.
  assert.match(picture, /upstream: inputs\?\.upstream\.viewInput\(frame\) \?\? null/);
  assert.match(picture, /depthColor: inputs\?\.depthColor \?\? null/);
  assert.match(picture, /inputs\?\.depthColors\.retain\(content\.space\.depthSlots\)/);
  assert.match(picture, /surfaceView\.renderLiveErp\(outputErpInput\(\{/);
  assert.match(picture, /const input = outputFrameInput\(\{/);
  assert.match(picture, /const rendered = surfaceView\.render\(input\);/);
  // Without a background, background_color shows, as in the output.
  assert.match(picture, /surfaceBackground\(node, state, surfaceBackgroundMedia\(node\), \{ fill: true \}\)/);
  // No run output image.
  assert.doesNotMatch(runtime, /pano_output_erp|pano_output_frame|studioRunPicture|studioRunQuaternion/);
  // The live ERP's canvas goes with the surface.
  assert.match(runtime, /if \(studioErpCanvas\) releasePanoCanvas\(studioErpCanvas\);/);
});
