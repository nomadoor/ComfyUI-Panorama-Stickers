import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { normalizeStickerItem } from "../web_src/pano_gl_scene.js";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("node surface reuses the shared aspect picker and existing icon components", async () => {
  const nodeSurface = await read("../web_src/components/PanoCutoutNodeSurface.vue");
  const frameRail = await read("../web_src/components/PanoFrameRail.vue");
  const help = await read("../web_src/components/PanoCutoutNodeHelp.vue");
  const css = await read("../web/pano_editor.css");
  const icons = await read("../web_src/icons.js");

  assert.ok(nodeSurface.includes('import PanoCutoutAspectPicker from "./PanoCutoutAspectPicker.vue"'));
  assert.ok(frameRail.includes('import PanoCutoutAspectPicker from "./PanoCutoutAspectPicker.vue"'));
  assert.ok(nodeSurface.includes('import PanoIconButton from "./PanoIconButton.vue"'));
  assert.ok(nodeSurface.includes("Full Editor"));
  assert.ok(nodeSurface.includes("model.rollLabel"));
  assert.ok(nodeSurface.includes('aria-label="Current roll"'));
  assert.ok(nodeSurface.includes("ICON.roll"));
  assert.ok(nodeSurface.includes("PanoCutoutNodeHelp"));
  assert.match(nodeSurface, /model\.hasShot \? ICON\.delete : ICON\.plus_circle/);
  assert.match(nodeSurface, /model\.hasShot \? 'delete-frame' : 'add-frame'/);
  assert.ok(nodeSurface.includes("Choose a view · + Add Frame"));
  assert.match(nodeSurface, /@dblclick[^\n]*emitAction\(\{ type: 'set-roll', value: 0 \}\)/);
  const template = nodeSurface.slice(nodeSurface.indexOf("<template>"));
  assert.ok(template.indexOf("pano-cutout-node-full-editor") < template.indexOf("PanoCutoutAspectPicker"));
  assert.ok(help.includes("Drag"));
  assert.ok(help.includes("Shift + Drag"));
  assert.ok(help.includes("Wheel"));
  assert.ok(help.includes("Add / Delete"));
  assert.ok(help.includes("Aspect / Rotate"));
  assert.ok(help.includes("Double-click roll"));
  assert.ok(help.includes("Full Editor"));
  assert.ok(help.includes("Detailed editing"));
  assert.ok(icons.includes('roll: "roll"'));
  assert.match(css, /\.pano-cutout-node-toolbar\s*\{[\s\S]*?display:\s*grid/);
  assert.match(css, /\.pano-cutout-node-roll-value\s*\{[\s\S]*?font-variant-numeric:\s*tabular-nums/);
  assert.match(css, /\.pano-cutout-node-roll-value\s+\.value\s*\{[\s\S]*?width:/);
  assert.ok(nodeSurface.includes('aria-label="Cutout frame controls"'));
  for (const label of ["Yaw", "Pitch", "H FOV", "V FOV"]) {
    assert.ok(!nodeSurface.includes(label), `unexpected detailed control ${label}`);
  }
});

test("shared aspect picker exposes presets, custom ratio, and the existing modal action contract", async () => {
  const picker = await read("../web_src/components/PanoCutoutAspectPicker.vue");
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const editor = await read("../web_src/pano_editor.js");

  for (const value of ["1:1", "4:3", "3:2", "16:9"]) {
    assert.ok(picker.includes(value), `missing ${value}`);
  }
  assert.ok(picker.includes('data-action="frame-aspect"'));
  assert.ok(picker.includes('data-action="frame-aspect-set"'));
  assert.ok(picker.includes('data-action="frame-aspect-custom"'));
  assert.ok(picker.includes("customWidth"));
  assert.ok(picker.includes("customHeight"));
  assert.match(picker, /:data-custom-width="customWidth"/);
  assert.match(picker, /:data-custom-height="customHeight"/);
  const customStart = editor.indexOf('if (action === "frame-aspect-custom")');
  const customEnd = editor.indexOf('\n      if (action === "frame-rotate-90")', customStart);
  const customAction = editor.slice(customStart, customEnd);
  assert.match(customAction, /getAttribute\("data-custom-width"\)/);
  assert.match(customAction, /getAttribute\("data-custom-height"\)/);
  assert.doesNotMatch(customAction, /closest|querySelector/);
  assert.match(picker, /active: activeValue \? value === activeValue : choice\?\.active === true/);
  assert.match(picker, /document\.addEventListener\("pointerdown", onDocumentPointerDown, true\)/);
  assert.match(picker, /document\.removeEventListener\("pointerdown", onDocumentPointerDown, true\)/);
  assert.match(picker, /rootElement\.value\?\.contains\(event\.target\)/);
  assert.match(picker, /type:\s*"close-aspect"/);
  assert.match(runtime, /action\?\.type === "close-aspect"[\s\S]*?aspectOpen = false/);
});

test("node toolbar follows the Perspective Editor control tokens", async () => {
  const css = await read("../web/pano_editor.css");

  assert.match(css, /\.pano-cutout-node-toolbar \.pano-btn\s*\{[\s\S]*?border-radius:\s*6px/);
  assert.match(css, /\.pano-cutout-node-toolbar \.pano-btn\s*\{[\s\S]*?background:\s*#1b1e25/);
  assert.match(css, /\.pano-cutout-node-toolbar \.pano-btn\s*\{[\s\S]*?color:\s*rgba\(255, 255, 255, 0\.62\)/);
  assert.match(css, /\.pano-cutout-node-toolbar \.pano-btn-icon\s*\{[\s\S]*?height:\s*26px/);
  assert.match(css, /\.pano-cutout-node-toolbar \.pano-btn-icon svg\s*\{[\s\S]*?stroke-width:\s*2\.3px/);
  assert.match(css, /\.pano-cutout-node-toolbar\s*\{[\s\S]*?pointer-events:\s*none/);
  assert.match(css, /\.pano-cutout-node-toolbar\s*>\s*\*\s*\{[\s\S]*?pointer-events:\s*auto/);
  assert.match(
    css,
    /\.pano-cutout-node-full-editor\s*\{[^}]*background:\s*var\(--pano-emphasis-bg\) !important/,
  );
  assert.match(
    css,
    /\.pano-cutout-node-toolbar \.pano-cutout-node-full-editor:is\(:hover, :focus-visible\):not\(:disabled\)\s*\{[^}]*background:\s*var\(--pano-emphasis-bg-hover\) !important/,
  );
  assert.match(
    css,
    /\.pano-cutout-node-toolbar \.pano-cutout-node-full-editor:active:not\(:disabled\)\s*\{[^}]*background:\s*var\(--pano-emphasis-bg-active\) !important/,
  );
  assert.doesNotMatch(css, /\.pano-cutout-node-toolbar \.pano-btn\s*\{[^}]*backdrop-filter/);
});

test("Node 2.0 fully collapses hidden state rows even when advanced inputs are shown", async () => {
  const css = await read("../web/pano_editor.css");

  assert.match(css, /\.lg-node-widget:has\(> \[node-type="PanoramaStickers"\] textarea\[placeholder="state_json"\]\)/);
  assert.match(css, /\.lg-node-widget:has\(> \[node-type="PanoramaCutout"\] textarea\[placeholder="state_json"\]\)/);
  assert.match(css, /display:\s*none !important/);
  assert.match(css, /\.lg-node-widgets:has\(> \.lg-node-widget > \[node-type="PanoramaStickers"\][^\n]+state_json[^\n]+\)\s*\{[\s\S]*?grid-template-rows:\s*24px 24px 32px 24px 24px !important/);
  assert.match(css, /\.lg-node-widgets:has\(> \.lg-node-widget > \[node-type="PanoramaCutout"\][^\n]+state_json[^\n]+\)\s*\{[\s\S]*?grid-template-rows:\s*24px 24px 24px minmax\(260px, 1fr\) !important/);
  assert.match(css, /\.lg-node-widgets:[^\n]+PanoramaCutout[^\n]+state_json[^\n]+:has\(> \.lg-node-widget > \[node-type="PanoramaCutout"\] > button\)\s*\{[\s\S]*?grid-template-rows:\s*24px 24px 24px 24px minmax\(260px, 1fr\) !important/);
});

test("cutout node renders panorama context across the canvas behind the fixed frame", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const surface = await read("../web_src/pano_cutout_node_surface.js");

  assert.match(runtime, /createApp\(stickersMode \? PanoStickersNodeSurface : PanoCutoutNodeSurface/);
  assert.match(runtime, /fitCutoutNodeFrame\(/);
  assert.match(runtime, /surfaceMinHeight = noPreview \? 0 : CUTOUT_NODE_SURFACE_MIN_HEIGHT/);
  assert.match(runtime, /createCoreManagedDomWidgetOptions\([\s\S]*?surfaceMinHeight/);
  assert.match(runtime, /const wrap = document\.createElement\("div"\);[\s\S]*?"inset:0"/);
  assert.ok(!runtime.includes('"inset:0 0 82px 0"'));
  assert.match(runtime, /layoutCutoutNodeContext/);
  assert.match(surface, /contextHalfExtentsPx/);
  assert.match(runtime, /const contextRect =/);
  assert.match(runtime, /const contextShot =/);
  assert.match(runtime, /renderToContext\(\s*ctx,\s*contextRect,\s*contextShot,/);
  assert.match(runtime, /contextLayout\.fallback[\s\S]*?fallbackRect[\s\S]*?fallbackShot/);
  assert.match(runtime, /renderToContext\(\s*ctx,\s*frame,\s*buildCutoutViewParamsFromShot\(shot\)/);
  assert.doesNotMatch(runtime, /renderToContext\(\s*ctx,\s*contain,/);
  assert.match(runtime, /ctx\.rect\(frame\.x/);
  assert.match(runtime, /ctx\.fill\("evenodd"\)/);
  assert.match(runtime, /strokeRect\(frame\.x/);
});

test("node primary drag pans, Shift-primary drag rolls, and wheel scales FOV", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const attachStart = runtime.indexOf("function attachPanoramaPreviewImpl(");
  const tickStart = runtime.indexOf("  const tick = (ts) => {", attachStart);
  const controllerStart = runtime.indexOf("  const interaction = createPanoInteractionController({", tickStart);
  const controllerEnd = runtime.indexOf("  const eventSurface =", controllerStart);
  assert.ok(attachStart >= 0 && tickStart > attachStart && controllerStart > tickStart && controllerEnd > controllerStart);
  const controller = runtime.slice(controllerStart, controllerEnd);

  assert.match(runtime, /layoutCutoutNodeContext/);
  assert.doesNotMatch(controller, /stickersMode\s*\?\s*\{\}\s*:/);
  assert.match(controller, /getViewportSize:\s*\(\) =>/);
  assert.match(controller, /canvas\.getBoundingClientRect\(\)/);
  assert.match(controller, /getInvert:\s*\(\) =>/);
  assert.match(controller, /const uiSettings = loadSharedUiSettings\(\)/);
  assert.doesNotMatch(controller, /getCachedState/);
  assert.match(controller, /invert_view_x/);
  assert.match(controller, /invert_view_y/);
  assert.match(runtime, /kind:\s*"pan"/);
  assert.match(runtime, /kind:\s*"roll"/);
  assert.match(runtime, /cutoutDrag\.kind === "pan"[\s\S]*?type:\s*"pan-camera"/);
  assert.match(runtime, /beginCutoutRollGesture\(/);
  assert.match(runtime, /updateCutoutRollGesture\(/);
  assert.match(runtime, /type:\s*"step-fov"/);
  assert.match(
    runtime,
    /action\?\.type === "add-frame"[\s\S]*?buildCutoutAddFrameAction\(view, \{[\s\S]*?width: canvas\.width,[\s\S]*?height: canvas\.height/,
  );
  assert.match(
    runtime,
    /if \(lastShot\) \{[\s\S]*?buildCutoutPanoramaViewFromShot\(lastShot, \{[\s\S]*?width: surfW,[\s\S]*?height: surfH[\s\S]*?node\.__panoLastCutoutShot = null;[\s\S]*?else if \(!node\.__panoPreviewView\)/,
  );
  assert.match(
    runtime,
    /function syncRuntimeCutoutComposite[\s\S]*?buildRuntimePreviewScene[\s\S]*?buildRuntimePreviewTextures[\s\S]*?buildRuntimeCutoutLayerEntries[\s\S]*?rasterEntries:\s*layerEntries/,
  );
  assert.match(
    runtime,
    /if \(!shot\)[\s\S]*?syncRuntimeCutoutComposite\([\s\S]*?renderToContext\([\s\S]*?buildPanoramaViewParamsFromRuntime/,
  );
  assert.match(runtime, /const zeroShotRenderScale = [\s\S]*?interaction\?\.state\?\.drag\?\.active[\s\S]*?interaction\?\.state\?\.inertia\?\.active[\s\S]*?0\.5[\s\S]*?: 1/);
  assert.match(runtime, /renderToContext\([\s\S]*?renderScale: zeroShotRenderScale/);
  assert.doesNotMatch(runtime, /Open editor and add frame/);
  assert.match(runtime, /const wheelTargets = stickersMode \? \[wrap, canvas\] : \[wrap\]/);
  assert.match(runtime, /root\.setAttribute\("data-capture-wheel", "true"\)/);
  assert.match(runtime, /root\.tabIndex\s*=\s*0/);
  assert.match(runtime, /const wheelCaptureCleanup = bindWheelCaptureRoot\(root\)/);
  assert.match(runtime, /wheelCaptureCleanup\(\)/);
  assert.match(runtime, /nodeSurfaceWheelCommitTimer/);
  assert.match(runtime, /else if \(!nodeSurfaceSession\.hasGestureChanges\(\)\)[\s\S]*?cancelGesture\(\)/);
  assert.doesNotMatch(runtime, /button:active\s*\{[\s\S]*?translateY\(1px\)/);
});

test("node and modal wheel adapters use the shared direction and Cutout step", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const editor = await read("../web_src/pano_editor.js");
  const controller = await read("../web_src/pano_interaction_controller.js");

  assert.match(runtime, /readWheelDirection\(ev\)/);
  assert.match(runtime, /type:\s*"step-fov"/);
  assert.doesNotMatch(runtime, /scale:\s*delta\s*<\s*0\s*\?\s*\(1\s*\/\s*1\.1\)/);
  assert.match(editor, /readWheelDirection\(e\)/);
  assert.match(editor, /stepCutoutFovPairByWheel\(shot,\s*direction\)/);
  assert.match(editor, /function zoomFrameViewAt\([\s\S]*?if \(!shot \|\| shot\.locked === true\) return false;/);
  assert.doesNotMatch(editor, /e\.deltaY\s*<\s*0\s*\?\s*1\.1/);
  assert.match(controller, /readWheelDirection\(ev,\s*fallbackDelta\)/);
});

test("modal frame view adds shared Shift-roll without removing legacy Alt-roll", async () => {
  const editor = await read("../web_src/pano_editor.js");

  assert.match(editor, /beginCutoutRollGesture\(/);
  assert.match(editor, /updateCutoutRollGesture\(/);
  assert.match(editor, /e\.altKey \|\| e\.shiftKey/);
  assert.match(editor, /allowAlt: true/);
  assert.match(editor, /uiState\.frameRail\.disabled = readOnly \|\| frameShot\?\.locked === true/);
  assert.match(editor, /uiState\.frameRail\.aspectLabel = frameShot \? getCutoutAspectLabel\(frameShot\) : ""/);
  assert.match(editor, /!shot \|\| shot\.locked === true \|\| !rect/);
  assert.match(editor, /const enabled = !!inspectorSelected && !isItemLocked\(inspectorSelected\)/);
  assert.match(editor, /selectedKind === "stroke" \|\| isItemLocked\(selected\)/);
  const syncStart = editor.indexOf("  function syncFrameRollKnob() {");
  const syncEnd = editor.indexOf("\n  function ", syncStart + 1);
  const syncRollKnob = editor.slice(syncStart, syncEnd);
  assert.match(syncRollKnob, /visible = !!shot && !readOnly && shot\.locked !== true/);
});

test("node surface owns teardown and keeps the Full Editor state barrier", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const editor = await read("../web_src/pano_editor.js");

  assert.match(runtime, /nodeSurfaceSession\?\.destroy\?\.\(\)/);
  assert.match(runtime, /nodeSurfaceVueApp\?\.unmount\?\.\(\)/);
  assert.match(runtime, /nodeSurfaceSession && nodeSurfaceMounted/);
  assert.match(runtime, /releasePointerCapture/);
  assert.ok(editor.includes("await flushPanoStateProducers(node, { tolerateOperationFailure: true });"));
});

test("Cutout teardown cancels pointer drafts while retaining the wheel flush contract", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const restoreStart = runtime.indexOf("  const restoreDom = () => {");
  const restoreEnd = runtime.indexOf("\n  node.__panoDomRestore = restoreDom;", restoreStart);
  const restore = runtime.slice(restoreStart, restoreEnd);

  assert.match(restore, /stickersMode\s*\?\s*flushNodeSurfaceGesture\(\)\s*:\s*cancelCutoutNodeSurfaceGesture\(\)/);
  assert.match(runtime, /const cancelCutoutNodeSurfaceGesture/);
  assert.match(runtime, /commitNodeSurfaceWheel\(\)/);
  assert.match(runtime, /nodeSurfaceSession\?\.cancelGesture\?\.\(\)/);
});

test("DOM preview camera frames do not repaint the host graph canvas", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const tickStart = runtime.indexOf("  const tick = (ts) => {");
  const tickEnd = runtime.indexOf("  const interaction = createPanoInteractionController({", tickStart);
  assert.ok(tickStart >= 0 && tickEnd > tickStart);
  const tick = runtime.slice(tickStart, tickEnd);

  assert.match(tick, /drawCanvas\(node, canvas, null, interaction\)/);
  assert.doesNotMatch(tick, /node\.setDirtyCanvas/);
  assert.match(runtime, /if \(mode === "cutout" && node\.__panoCutoutNodeSurfaceState !== state\)/);
});

test("Cutout node surface loops the input ERP video and revisions each presented frame", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const cutoutStart = runtime.indexOf('if (mode === "cutout") {');
  const stickersStart = runtime.indexOf("  } else {", cutoutStart);
  assert.ok(cutoutStart >= 0 && stickersStart > cutoutStart);
  const cutout = runtime.slice(cutoutStart, stickersStart);

  assert.match(cutout, /getNodeOwnOutputVideo\([\s\S]*?\["pano_input_videos"\]/);
  assert.match(cutout, /isRenderableMediaReady\(bgImg\)/);
  assert.match(runtime, /function syncRuntimeCutoutComposite[\s\S]*?getRenderableMediaRevisionToken\(bgImg\)/);
  assert.match(runtime, /function syncRuntimeCutoutComposite[\s\S]*?getSourcePixelSize\(bgImg\)/);
  assert.match(runtime, /invalidatePreviewImageCaches[\s\S]*?disposeNodeOutputVideoCache\(node\)/);
  assert.match(runtime, /getNodeOwnOutputVideo[\s\S]*?isNodeOutputMediaCurrent\(node, "background"\)/);
  assert.match(runtime, /node\.onConnectionsChange = function \(type, slotIndex\)[\s\S]*?isTrackedMediaInputConnectionChange\(node, type, slotIndex\)[\s\S]*?markNodeOutputMediaStale\(node, "background"\)/);
  assert.match(runtime, /node\.onExecuted = function[\s\S]*?markNodeOutputMediaCurrent\(node\)[\s\S]*?requestDraw\(\)/);
});

test("the canvas fallback normalizes raw external sticker identity before image resolution", async () => {
  const rawExternal = {
    id: "sticker_image_1",
    source_kind: "external_image",
    hFOV_deg: 30,
    vFOV_deg: 20,
  };
  const normalized = normalizeStickerItem(rawExternal);
  assert.equal(normalized.assetId, "sticker_image_1");
  assert.equal(normalized.external, true);
  assert.equal(normalizeStickerItem({ ...rawExternal, visible: false }).visible, false);

  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("function drawSticker(");
  const end = runtime.indexOf("\nfunction stepInertia", start);
  const fallback = runtime.slice(start, end);

  assert.match(fallback, /const previewItem = normalizeStickerItem\(item\)/);
  assert.match(fallback, /if \(!previewItem \|\| previewItem\.visible === false\) return/);
  assert.match(fallback, /const textureId = String\(previewItem\?\.assetId \|\| ""\)/);
  assert.match(fallback, /getNodePreviewImage\(node, textureId, asset, previewItem\)/);
});

test("zero-shot wheel zoom does not repaint the host graph canvas", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const wheelStart = runtime.indexOf("  const onPreviewWheel = (ev) => {");
  const wheelEnd = runtime.indexOf("  const wheelTargets =", wheelStart);
  assert.ok(wheelStart >= 0 && wheelEnd > wheelStart);
  const wheel = runtime.slice(wheelStart, wheelEnd);
  const zeroShotStart = wheel.indexOf("      } else if (!shot) {");
  const zeroShotEnd = wheel.indexOf("      }\n      ev.preventDefault", zeroShotStart);
  assert.ok(zeroShotStart >= 0 && zeroShotEnd > zeroShotStart);
  const zeroShotWheel = wheel.slice(zeroShotStart, zeroShotEnd);

  assert.match(zeroShotWheel, /interaction\.applyWheelEvent\(ev\)/);
  assert.doesNotMatch(zeroShotWheel, /setDirty/);
});

test("DOM preview inertia keeps at most one animation frame scheduled", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /const requestDraw = \(\) => \{[\s\S]*?if \(!state\.inTick && !state\.raf\)/);
  assert.match(runtime, /const tick = \(ts\) => \{[\s\S]*?state\.inTick = true;[\s\S]*?state\.inTick = false;[\s\S]*?if \(\(moving \|\| state\.needsDraw\) && !state\.raf\)/);
});

test("Cutout and Stickers resize redraw only their DOM surface instead of the host graph canvas", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const optionsStart = runtime.indexOf("function createCoreManagedDomWidgetOptions(");
  const optionsEnd = runtime.indexOf("\nfunction scheduleResizeSettleDraw", optionsStart);
  const options = runtime.slice(optionsStart, optionsEnd);
  const resizeStart = runtime.indexOf("  const onResizeHook = function () {", optionsEnd);
  const resizeEnd = runtime.indexOf("\n  node.onResize = onResizeHook;", resizeStart);
  const resize = runtime.slice(resizeStart, resizeEnd);

  assert.match(options, /invalidateHostCanvasOnResize\s*=\s*true/);
  assert.match(options, /if \(invalidateHostCanvasOnResize\)[\s\S]*?scheduleResizeSettleDraw/);
  assert.match(runtime, /createCoreManagedDomWidgetOptions\([\s\S]*?surfaceMinHeight,[\s\S]*?false,[\s\S]*?\)/);
  assert.doesNotMatch(resize, /setDirtyCanvas/);
});
