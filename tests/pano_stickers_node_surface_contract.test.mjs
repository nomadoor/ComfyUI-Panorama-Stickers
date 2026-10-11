import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { EDITOR_FILES, readEditorSource } from "./editor_source.mjs";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("Stickers surface exposes the shared image picker beside the Full Editor action", async () => {
  const source = await read("../web_src/components/PanoStickersNodeSurface.vue");

  assert.match(source, /class="pano-stickers-node-toolbar"/);
  assert.match(source, /data-action="open-editor"/);
  assert.match(source, /Full Editor/);
  assert.match(source, /PanoImageFilePicker/);
  assert.match(source, /Add Image/);
  assert.match(source, /model\.hasStickers === false/);
  assert.match(source, /pano-stickers-node-empty-note/);
  assert.match(source, /type: 'add-image-file'/);
  assert.match(source, /type: 'toggle-lock'/);
  assert.match(source, /type: 'send-back'/);
  assert.match(source, /type: 'bring-front'/);
  assert.match(source, /delete-selected/);
  assert.match(source, /ICON\.back_initial/);
  assert.match(source, /restore-initial/);
  assert.match(source, /model\.isExternalSelection/);
  assert.match(source, /model\.canRestoreInitial/);
  assert.doesNotMatch(source, /replace-image|duplicate/);
});

test("Stickers image drop uses the shared host hook and restores prior hooks on teardown", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /const onDragOverPrev = node\.onDragOver/);
  assert.match(runtime, /const onDragDropPrev = node\.onDragDrop/);
  // Panorama Studio's surface takes no image drop (#91): stickerDrop is stickersMode without it.
  assert.match(runtime, /const stickerDragOverHook = stickerDrop \? function/);
  assert.match(runtime, /const stickerDragDropHook = stickerDrop \? function/);
  assert.match(runtime, /if \(stickerDrop\) \{[\s\S]*?node\.onDragOver = stickerDragOverHook;[\s\S]*?node\.onDragDrop = stickerDragDropHook;/);
  assert.match(runtime, /isStickerImageFile\(/);
  assert.match(runtime, /queuePendingStickerOperation\(/);
  assert.match(runtime, /if \(node\.onDragOver === stickerDragOverHook\) node\.onDragOver = onDragOverPrev/);
  assert.match(runtime, /if \(node\.onDragDrop === stickerDragDropHook\) node\.onDragDrop = onDragDropPrev/);
});

test("Stickers DOM preview is itself an image drop target in Legacy and Node 2.0", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /bindStickerDropTarget\(root,/);
  assert.match(runtime, /onDrop:\s*\(file\) => \{\s*void addNodeStickerFile\(file\)/);
  assert.match(runtime, /stickerDropTargetCleanup\(\)/);
});

test("modal image drag feedback reuses the shared generic-MIME detector", async () => {
  const editor = readEditorSource();
  const start = editor.indexOf("  function dragHasImageFiles(e) {");
  const end = editor.indexOf("\n  function ", start + 1);
  const detector = editor.slice(start, end);

  assert.match(editor, /dragHasStickerImageFile,/);
  // Panorama Studio's editor also takes 3D files (dragHasStudioFile); the legacy editor images only.
  assert.match(detector, /return sceneV2 \? dragHasStudioFile\(e\?\.dataTransfer\) : dragHasStickerImageFile\(e\?\.dataTransfer\);/);
  assert.doesNotMatch(detector, /startsWith\("image\/"\)/);
});

test("modal lock changes refresh both selection actions and inspector controls", async () => {
  const editor = readEditorSource();
  const start = editor.indexOf("  function toggleSelectedLock() {");
  const end = editor.indexOf("\n  function ", start + 1);
  const toggleLock = editor.slice(start, end);

  assert.notEqual(start, -1);
  assert.match(toggleLock, /updateSelectionMenu\(\);/);
  assert.match(toggleLock, /updateSidePanel\(\);/);
});

test("modal destructive and ordering commands reject selections containing locked items", async () => {
  const editor = readEditorSource();
  for (const functionName of ["deleteSelected", "bringSelectedToFront", "sendSelectedToBack"]) {
    const start = editor.indexOf(`  function ${functionName}() {`);
    const end = editor.indexOf("\n  function ", start + 1);
    const body = editor.slice(start, end);
    assert.notEqual(start, -1);
    assert.match(body, /selectedItems\.some\(\(item\) => isItemLocked\(item\)\)/);
  }
});

test("a completed image import settles any active pointer gesture before changing selection", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("  const addNodeStickerFile = async (file) => {");
  const end = runtime.indexOf("\n  let cutoutDrag = null;", start);
  const body = runtime.slice(start, end);

  assert.notEqual(start, -1);
  assert.match(body, /flushNodeSurfaceGesture\(\);[\s\S]*?nodeSurfaceSession\.apply\(\{[\s\S]*?type: "add-sticker"/);
});

test("Stickers toolbar reuses the Cutout control tokens without layout-shifting active motion", async () => {
  const css = await read("../web/pano_editor.css");
  const addStart = css.indexOf(".pano-stickers-node-add-image {");
  const addEnd = css.indexOf("\n}", addStart);
  const addBlock = css.slice(addStart, addEnd);

  assert.match(css, /\.pano-stickers-node-toolbar[\s\S]*?grid-template-columns:/);
  assert.match(css, /\.pano-stickers-node-full-editor/);
  assert.notEqual(addStart, -1);
  assert.doesNotMatch(addBlock, /pano-emphasis-bg/);
  assert.doesNotMatch(css, /\.pano-stickers-node-toolbar[\s\S]*?button:active[\s\S]*?translateY/);
});

test("selected Stickers can be deleted from the node surface keyboard focus", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("  const onNodeSurfaceKeyDown = (ev) => {");
  const end = runtime.indexOf("\n  window.addEventListener(\"keydown\", onNodeSurfaceKeyDown, true);", start);
  const handler = runtime.slice(start, end);

  assert.match(handler, /ev\.key !== \"Delete\" && ev\.key !== \"Backspace\"/);
  assert.match(handler, /stickersMode/);
  assert.match(handler, /document\.activeElement/);
  assert.match(handler, /root\.contains\(activeElement\)/);
  assert.match(handler, /type: \"delete-selected\"/);
  assert.match(handler, /nodeSurfaceSession\.apply/);
  assert.match(handler, /stopCanvasEvent\(ev\)/);
  assert.match(runtime, /window\.removeEventListener\("keydown", onNodeSurfaceKeyDown, true\)/);
});

test("shipping Stickers uses the shared DOM surface in both node renderers", async () => {
  const editor = readEditorSource();
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(editor, /const ENABLE_STICKERS_NODE_PREVIEW = true;/);
  assert.match(runtime, /PanoStickersNodeSurface/);
  assert.match(runtime, /createStickersNodeSurfaceSession/);
  assert.match(runtime, /pano-stickers-node-surface-host/);
  assert.doesNotMatch(runtime, /runDomProbeForStickers\(\);/);
});

test("Stickers surface draws the ordered Sky layers over the current image or video input", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const drawStart = runtime.indexOf("function drawCanvas(");
  const branchStart = runtime.indexOf("  if (!surface.view) surface.view", drawStart);
  const branchEnd = runtime.indexOf("\n}\n", branchStart);
  assert.notEqual(drawStart, -1);
  assert.notEqual(branchStart, -1);
  const draw = runtime.slice(drawStart, branchStart);
  const branch = runtime.slice(branchStart, branchEnd);

  assert.match(draw, /\["pano_input_videos"\]/);
  assert.match(draw, /ctx\.fillStyle = "#070707"/);
  assert.match(branch, /if \(!bgImg \|\| bgReady\) \{/);
  assert.match(branch, /drawView\(rect, previewNodeCamera\(surface\.view, surfW, surfH\)\)/);
  assert.match(branch, /if \(!bgImg && panoramaDrawn\) drawPanoGrid\(ctx, projection/);
  assert.match(branch, /drawStickerSelectionOverlay\(ctx, selected, projection\)/);
  assert.doesNotMatch(branch, /bg_color/);
  assert.doesNotMatch(branch, /Connect ERP image/);
});

test("Stickers surface hit testing uses the projection of the drawn view", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /function stickersSurfaceProjection\(node, width, height\) \{\s*return viewProjection\(previewNodeCamera\(/);
  assert.match(runtime, /pickStickerAtPoint\([\s\S]*?stickersSurfaceProjection\(node, canvas\.width, canvas\.height\)/);
  assert.match(runtime, /moveStickerToScreenPoint\([\s\S]*?stickerDrag\.projection/);
});

test("Stickers camera drag uses the same viewport-aware interaction controller as Preview and Cutout", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("  const interaction = createPanoInteractionController({");
  const end = runtime.indexOf("\n  const eventSurface", start);
  const controller = runtime.slice(start, end);

  assert.match(controller, /getViewportSize:\s*\(\) =>/);
  assert.match(controller, /getInvert:\s*\(\) =>/);
  assert.doesNotMatch(controller, /stickersMode\s*\?\s*\{\}\s*:/);
});

test("background disconnect invalidates after the prior connection hook and redraws again after graph mutation", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("  const onConnectionsChangeHook = function (type, slotIndex) {");
  const end = runtime.indexOf("\n  node.onConnectionsChange = onConnectionsChangeHook;", start);
  const body = runtime.slice(start, end);

  assert.ok(body.indexOf("onConnectionsChangePrev") < body.indexOf("invalidateBackgroundPreviewMedia"));
  assert.match(body, /const refreshAfterConnectionMutation = \(\) => \{[\s\S]*?invalidateBackgroundPreviewMedia\(node\)[\s\S]*?requestDraw\(\)/);
  assert.match(body, /queueMicrotask\(refreshAfterConnectionMutation\)/);
});

test("background connection changes do not invalidate the external sticker texture", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("  const onConnectionsChangeHook = function (type, slotIndex) {");
  const end = runtime.indexOf("\n  node.onConnectionsChange = onConnectionsChangeHook;", start);
  const body = runtime.slice(start, end);

  assert.match(body, /if \(backgroundInputChanged\) invalidateBackgroundPreviewMedia\(node\);/);
  assert.doesNotMatch(body, /invalidatePreviewImageCaches\(node\)/);
  assert.match(runtime, /isNodeOutputMediaCurrent\(node, "external-sticker"\)/);
});

test("connection events leave output freshness alone, so the ones configure fires while loading do not hide restored media", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("  const onConnectionsChangeHook = function (type, slotIndex) {");
  const end = runtime.indexOf("\n  node.onConnectionsChange = onConnectionsChangeHook;", start);
  const body = runtime.slice(start, end);

  assert.doesNotMatch(body, /markNodeOutputMedia|recordOutputInputs/);
  assert.match(runtime, /export async function restoreNodeOutput\(node\) \{\s*const output = await restoreLoadedNodeOutput\(node, app, api\);/);
});

// Opening a workflow must not change it: a restored output is shown, and only a run of the node syncs the
// port Sticker from its output into state_json.
test("a restored output is only shown, and only a run syncs the port Sticker into the state", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const restoreStart = runtime.indexOf("export async function restoreNodeOutput(node) {");
  const restore = runtime.slice(restoreStart, runtime.indexOf("\n}\n", restoreStart));
  const showStart = runtime.indexOf("function showOwnNodeOutput(node, output) {");
  const show = runtime.slice(showStart, runtime.indexOf("\n}\n", showStart));

  assert.match(restore, /showOwnNodeOutput\(node, output\)/);
  assert.doesNotMatch(restore + show, /runExternalStickerSync|commitState|state_json|outputFromRun/);
  assert.match(runtime, /const onExecutedHook = function \(output\) \{\s*media\.outputFromRun = true;[\s\S]*?const shown = showOwnNodeOutput\(node, output\);[\s\S]*?runExternalStickerSync\(node, shown \? "executed" : "sync", output\);/);
  assert.match(runtime, /if \(sceneItem\?\.external && mediaCache\(node\)\.outputFromRun\) runExternalStickerSync\(node, "image-loaded"\);/);
});

// A run that takes the node (or its upstream LoadVideo) from ComfyUI's execution cache sends `executed`
// again with the same output. It must not load the node's media again: no new revision, no dropped video,
// and the editor is not told to drop its sticker image.
test("an output that a cached run sends again leaves the node's media as it is", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const showStart = runtime.indexOf("function showOwnNodeOutput(node, output) {");
  const show = runtime.slice(showStart, runtime.indexOf("\n}\n", showStart));
  const monitorStart = runtime.indexOf("const executedRefreshMonitor = {");
  const monitor = runtime.slice(monitorStart, runtime.indexOf("\n};\n", monitorStart));

  assert.match(show, /^function showOwnNodeOutput\(node, output\) \{\s*if \(isRepeatedOutput\(shownOwnOutputs, node, output\)\) return false;\s*syncOwnOutputSourceFromExecuted\(node, output\);\s*invalidatePreviewImageCaches\(node\);/);
  assert.match(show, /return true;$/);
  assert.match(monitor, /if \(isRepeatedOutput\(mediaCache\(node\)\.executedOutputs, executedId, detail\.output\)\) return;\s*panoPreviewLog\(node, "exec-refresh"/);

  // A run of a node the media is not read from (not the node, not up its image inputs) leaves the media.
  assert.doesNotMatch(runtime, /global_executed/);
  assert.match(monitor, /if \(!selfHit && !\[\.\.\.getMediaSourceIds\(node\)\]\.some\(\(id\) => executionIdMatches\(executedId, id\)\)\) return;[\s\S]*?invalidatePreviewImageCaches\(node\)/);
  assert.match(runtime, /function getMediaSourceIds\(node, preferredInputNames = BACKGROUND_INPUT_NAMES\) \{[\s\S]*?return sourceNodeIds\(node, indices, /);
});

test("the node's own output is read from app.nodeOutputs only, so a restored output and ComfyUI's never disagree", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.doesNotMatch(runtime, /__panoLastExecutedOutput/);
  assert.match(runtime, /setNodeOutputLookup\(\(node\) => lookupNodeOutputEntry\(node\.id\)\)/);
  assert.match(runtime, /^trackRunOutputs\(api\);$/m);
});

test("surface teardown restores lifecycle hooks only while it still owns each wrapper", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("  const restoreDom = () => {");
  const end = runtime.indexOf("\n  surface.restore = restoreDom;", start);
  const body = runtime.slice(start, end);

  assert.match(body, /if \(node\.onResize === onResizeHook\) node\.onResize = onResizePrev/);
  assert.match(body, /if \(node\.onExecuted === onExecutedHook\) node\.onExecuted = onExecutedPrev/);
  assert.match(body, /if \(node\.onConnectionsChange === onConnectionsChangeHook\) node\.onConnectionsChange = onConnectionsChangePrev/);
  assert.match(body, /if \(node\.onRemoved === onRemovedHook\) node\.onRemoved = onRemovedPrev/);
});

test("shared composite includes raster paint objects as independent z-ordered layers", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  // The order and which layers there are come from skyPaintLayers (tests/pano_paint_layers.test.mjs); the surface's
  // engine and raster canvases are pano_surface_paint.js's (tests/pano_surface_paint.test.mjs).
  const surfacePaint = await read("../web_src/pano_surface_paint.js");
  assert.match(surfacePaint, /const layers = skyPaintLayers\(painted, \{[\s\S]*?raster: \(item\) => \{[\s\S]*?surface\.rasterCache \?\?= createRasterObjectSurfaceCache\(\);/);
  // The legacy nodes' state (parseState, the widget's JSON as it is) and state v2 both go to it.
  assert.match(runtime, /const parsed = sceneText\s*\? surfaceSceneEditorState\([\s\S]*?: parseState\(source, bg\);/);
  assert.match(runtime, /function surfaceViewInput\(node, state, bgImg\)[\s\S]*?const paintLayers = surfacePaintLayers\(nodeSurface\(node\), state\);/);
});

test("external sticker textures resolve only from the node's current dedicated output", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /pano_sticker_input_images/);
  assert.match(runtime, /isNodeOutputMediaCurrent\(node, "external-sticker"\)/);
  assert.match(runtime, /pano_sticker_input_state_hash/);
  assert.doesNotMatch(runtime, /getLinkedInputImageForPreview\(\s*node,\s*\["stickers"\]/);
  // The port Sticker's MP4 or PNGs are the node's own current result too.
  assert.match(runtime, /function portStickerMedia\(node\) \{\s*if \(!isNodeOutputMediaCurrent\(node, "external-sticker"\)\) return null;[\s\S]*?"pano_sticker_input_video_meta"[\s\S]*?pano_sticker_input_frames[\s\S]*?\["pano_sticker_input_videos"\]/);
});

// The port Sticker's picture names its media, so the three.js view keeps the frame before only within
// one media (a seek, a loop) and never shows a swapped-out VIDEO's frame for the next media.
test("the port Sticker's picture carries its media as the source of its layer, on the node and in the editor", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const editor = readEditorSource();
  assert.match(runtime, /const source = portMediaSource\(surfacePlayback\.playback\.stickerMedia, img\);\s*return picture \? \{ media: picture, revision: getRenderableMediaRevisionToken\(picture\), source \} : null;/);
  assert.match(editor, /return picture \? \{ media: picture, revision: getMediaRevisionToken\(picture\), source: portMediaSource\(media, first\) \} : null;/);
  assert.match(editor, /if \(portVideo && isExternalSticker\(item\)\) return portPicture;/);
});

test("failed sticker image loads do not schedule an immediate retry loop", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("function getNodePreviewImage(");
  const end = runtime.indexOf("\nfunction ", start + 1);
  const resolver = runtime.slice(start, end);

  assert.notEqual(start, -1);
  assert.match(resolver, /\(image, succeeded\) => \{/);
  assert.match(resolver, /if \(!succeeded\) return;/);
});

test("runtime advances and applies the public external media revision seam", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("function syncOwnOutputSourceFromExecuted(");
  const end = runtime.indexOf("\nfunction disposeNodeOutputVideoCache", start);
  const body = runtime.slice(start, end);

  assert.match(body, /media\.ownOutputRev\s*=\s*nextMediaRevision\(/);
  assert.ok(body.indexOf("ownOutputRev") < body.indexOf("if (src)"));
  assert.match(runtime, /createSharedImageCache\(\)/);
  assert.match(runtime, /buildSharedImageCacheKey\(src, stateHash, revision\)/);
  assert.match(runtime, /sharedPreviewImageCache\.disposeOwner\(node\)/);
});

test("Stickers canvas wires selection and direct transform gestures through the state session", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const editor = readEditorSource();

  assert.match(runtime, /pickStickerAtPoint\(/);
  assert.match(runtime, /drawStickerSelectionHandles\(/);
  assert.match(runtime, /drawStickerSelectionBoundary\(/);
  assert.match(editor, /drawStickerSelectionHandles\(/);
  assert.match(editor, /drawStickerSelectionBoundary\(/);
  assert.match(editor, /hitStickerSelectionAffordance\(/);
  assert.doesNotMatch(editor, /STICKER_NODE_ROTATE_HANDLE_OFFSET_PX/);
  const stickerGeometryStart = editor.indexOf("function buildSceneItemGeom(item) {");
  const stickerGeometryEnd = editor.indexOf("\n  function ", stickerGeometryStart + 1);
  const stickerGeometry = editor.slice(stickerGeometryStart, stickerGeometryEnd);
  assert.match(stickerGeometry, /const rotateHandle\s*=\s*\{\s*x:\s*rotateStemBase\.x\s*\+\s*\(handleDx\s*\/\s*handleLen\)\s*\*\s*30,\s*y:\s*rotateStemBase\.y\s*\+\s*\(handleDy\s*\/\s*handleLen\)\s*\*\s*30,/);
  assert.match(runtime, /nodeSurfaceSession\.apply\(\{\s*type:\s*"select-sticker"/);
  assert.match(runtime, /nodeSurfaceSession\.beginGesture\(\)/);
  assert.match(runtime, /type:\s*"set-transform"/);
  assert.match(runtime, /nodeSurfaceSession\.commitGesture\(\)/);
  assert.match(runtime, /nodeSurfaceSession\.cancelGesture\(\)/);
  assert.match(runtime, /canvas\.style\.cursor = picked\.hit\.cursor/);
  assert.match(runtime, /if \(!stickerDrag && !interaction\.state\.drag\.active\)[\s\S]*?updateStickerHoverCursor\(ev\)/);
});

test("DOM teardown retains the mount record, unregisters widgets, and restores owned callbacks", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const teardownStart = runtime.indexOf("function teardownPreview(node, options = {}) {");
  const teardownEnd = runtime.indexOf("\nfunction ", teardownStart + 1);
  const teardown = runtime.slice(teardownStart, teardownEnd);
  const restoreStart = runtime.indexOf("  const restoreDom = () => {");
  const restoreEnd = runtime.indexOf("\n  surface.restore = restoreDom;", restoreStart);
  const restore = runtime.slice(restoreStart, restoreEnd);

  assert.ok(teardown.indexOf("const dom = surface.dom;") < teardown.indexOf("surface.restore?.();"));
  assert.match(teardown, /dom\.root\?\.remove\?\.\(\)/);
  assert.match(teardown, /if \(w === dom\?\.widget\) return true/);
  assert.match(teardown, /removable\.forEach\(\(widget\) => removeNodeWidget\(node, widget\)\)/);
  assert.match(restore, /sw\?\.callback === swCallbackWrapper/);
  assert.match(restore, /delete sw\.__panoPreviewPatchedCb/);
  assert.match(restore, /bgw\?\.callback === bgwCallbackWrapper/);
  assert.match(restore, /delete bgw\.__panoPreviewPatchedCb/);
});

test("Stickers teardown commits an active gesture before destroying the surface session", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const restoreStart = runtime.indexOf("  const restoreDom = () => {");
  const restoreEnd = runtime.indexOf("\n  surface.restore = restoreDom;", restoreStart);
  const restore = runtime.slice(restoreStart, restoreEnd);

  assert.notEqual(restoreStart, -1);
  assert.ok(restore.indexOf("flushNodeSurfaceGesture();") < restore.indexOf("nodeSurfaceSession?.destroy?.();"));
  assert.doesNotMatch(restore, /cancelCutoutDrag\(\)/);
});

test("the port Sticker draws as a frame on the node until the node's result has its media", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const drawStart = runtime.indexOf("function drawCanvas(");
  const drawEnd = runtime.indexOf("\nfunction ", drawStart + 1);
  const draw = runtime.slice(drawStart, drawEnd);

  assert.match(draw, /surfacePoseStickers\(state, surfaceFrame\(node\)\)[\s\S]*?\(item\.external \|\| item\.source_kind === "external_image"\)\)[\s\S]*?!isRenderableMediaReady\(getNodePreviewImage\(node, item\.id, null, \{ external: true \}\)\)[\s\S]*?drawStickerFrame\(ctx, item, projection\)/);
  assert.ok(draw.indexOf("drawStickerFrame(") < draw.indexOf("drawStickerSelectionOverlay(ctx, selected, projection)"));
});

test("Panorama Studio syncs its port Sticker in the editor and on the node", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const editor = readEditorSource();

  assert.doesNotMatch(runtime, /TODO\(#75\)/);
  assert.doesNotMatch(editor, /TODO\(#75\)/);
  assert.match(runtime, /if \(node\.__panoSceneStateV2\) \{[\s\S]*?type: "sync-port",[\s\S]*?portStickerSyncValue\(node,/);
  assert.match(editor, /node\.__panoSceneStateV2 \? reconcilePortStickerFromInputs\(\) : reconcileLegacyExternalStickerFromInputs\(\)/);
  assert.match(editor, /function getExternalStickerPreviewImage\(onLoad = null\) \{\s*if \(!isNodeOutputMediaCurrent\(node, "external-sticker"\)\) return null;/);
});

test("connectivity is read through getInputLink and isInputConnected, not the deprecated input.link", async () => {
  for (const file of ["pano_comfy_media.js", ...EDITOR_FILES, "pano_preview_previewnode.js", "pano_preview_runtime.js"]) {
    const source = await read(`../web_src/${file}`);
    assert.doesNotMatch(source, /\.link\b(?!s)/, file);
  }
});

test("the node surface syncs the port Sticker through the registry so the open editor is the only writer", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /registerExternalStickerSync\(node, syncExternalSticker\)/);
  assert.doesNotMatch(runtime, /[^.\w]syncExternalSticker\(/);
  for (const reason of ["connection-change", "attach"]) {
    assert.match(runtime, new RegExp(`runExternalStickerSync\\(node, "${reason}"`));
  }
  assert.match(runtime, /runExternalStickerSync\(node, shown \? "executed" : "sync", output\)/);
  const editor = readEditorSource();
  // The editor's handler wins over a node surface that attaches again, and a result syncs once: the
  // node's onExecuted runs the handler, which drops the stale sticker image first.
  assert.match(editor, /registerExternalStickerSync\(node, \(reason = "sync"\) => \{\s*if \(reason === "executed"\) \{\s*invalidateMediaUiImage\(imageCache, EXTERNAL_STICKER_PREVIEW_KEY\);\s*refreshModalVideoSource\(\);\s*if \(sceneV2\) applyVideoTimelineFps\(\);\s*\}\s*reconcileExternalStickerFromInputs\(reason\);\s*\}, \{ editor: true \}\)/);
  assert.doesNotMatch(editor, /node\.onExecuted =/);
});

// LiteGraph's getInputLink throws before the node is in a graph (onNodeCreated runs before graph.add),
// so the node surface reads links only with a graph and syncs the sticker input once it has one.
test("links are read only once the node is in a graph", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const media = await read("../web_src/pano_comfy_media.js");

  assert.match(runtime, /const syncExternalSticker = \(reason = "sync", outputOverride = null\) => \{\s*if \(!stickersMode \|\| !node\.graph \|\|/);
  assert.match(runtime, /if \(node\.graph\) runExternalStickerSync\(node, "attach"\);/);
  for (const [file, source] of [["pano_preview_runtime.js", runtime], ["pano_comfy_media.js", media]]) {
    for (const match of source.matchAll(/[^\n]*getInputLink\([^\n]*/g)) {
      const line = match[0];
      if (line.includes("typeof node?.getInputLink")) continue; // a subgraph origin: in a graph, inside try
      if (line.includes("slot >= 0 ? node.getInputLink(slot)")) continue; // the legacy sync, behind !node.graph
      assert.match(line, /node\.graph \? node\.getInputLink|&& node\.graph \? node\.getInputLink/, `${file}: ${line.trim()}`);
    }
  }
});

// A run with the editor open reloads the background VIDEO, and the playback shows the playhead's frame
// once it loads (tests/pano_video_playback.test.mjs); seeking on the ruler picks up a VIDEO that
// arrived since; a dropped VIDEO loads again when the same MP4 returns.
test("the editor follows the background VIDEO of a new result", async () => {
  const editor = readEditorSource();

  assert.match(editor, /dragFrames\.cancel\(\);\s*if \(action\.phase === "start"\) refreshModalVideoSource\(\);\s*playback\.seek\(action\.frame\);/);
  assert.match(editor, /videoEl\.removeAttribute\("src"\);\s*delete videoEl\.dataset\.panoSrc;/);
  // load() drops a seek in flight without `seeked`; the playback starts over with each source.
  const refreshStart = editor.indexOf("function refreshModalVideoSource(");
  const refresh = editor.slice(refreshStart, editor.indexOf("\n  function ", refreshStart + 1));
  assert.match(refresh, /videoEl\.src = nextSrc;\s*videoEl\.load\(\);\s*playback\.setSource\(true\);\s*if \(!stateV2\) playback\.seek\(0\);/);
  assert.match(refresh, /resetVideoThumbnails\(\);\s*playback\.setSource\(false\);/);
});

test("the editor plays its own background VIDEO first, then a directly loaded file, and never a failed source", async () => {
  const editor = readEditorSource();
  const start = editor.indexOf("  function refreshModalVideoSource() {");
  const body = editor.slice(start, editor.indexOf("\n  function normalizeInputPoseValue", start));

  assert.match(body, /\[ownSrc, comfyMedia\.linkedVideoFile\(node, backgroundInputNames\(\)\)\]/);
  assert.match(body, /candidates\.find\(\(src\) => !videoState\.failedSrcs\.has\(src\)\)/);
  assert.match(body, /const meta = nextSrc && nextSrc === ownSrc \? getVideoMetaEntry\(\) : null;/);
  assert.match(body, /stateV2 \? state\.timeline\.fps : 24/);
  // The still of one source is dropped when another takes its place.
  assert.match(body, /videoEl\.pause\(\);\s*dropVideoStill\(\);\s*videoEl\.dataset\.panoSrc = nextSrc;/);
  assert.match(editor, /function dropVideoStill\(\) \{\s*stillCanvas\.__panoFrameIdx = 0;/);
  assert.match(editor, /const onVideoError = \(\) => \{[\s\S]*?videoState\.failedSrcs\.add\(src\);\s*refreshModalVideoSource\(\);/);
  assert.match(editor, /backgroundState = videoState\.videoFailed \? IMAGE_FAILED :/);
});

// The editor's commitState is held by tests/editor_commit.test.mjs.
test("state_json is written only when its meaning changes on the node", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  // editorStateWrite (pano_editor_state.js) is null for an unchanged text and gives Studio's state its Scene id.
  assert.match(runtime, /commitState: \(nextState\) => \{[\s\S]*?const text = editorStateWrite\(node, nextState, String\(stateWidget\.value \?\? ""\)\);\s*if \(text === null\) return;\s*stateWidget\.value = text;/);
  // The node surface shows the port Sticker with the Pose handoff of the current result, which it never writes:
  // sync-port leaves the handoff's replace to the display (ADR 0030 T11).
  assert.match(runtime, /const handoff = sceneText && portHandoffLinked\(node\) && isNodeOutputMediaCurrent\(node, "sticker-handoff"\)/);
  assert.match(runtime, /surfaceSceneEditorState\(source, \{[^}]*\}, handoff\)/);
  assert.match(runtime, /cache\.handoff === handoff/);
  assert.match(runtime, /handoff: isNodeOutputMediaCurrent\(node, "sticker-handoff"\) \? ownOutputUiValue\(node, "pano_sticker_handoff", outputOverride\) : null,/);
  // Connecting or disconnecting sticker_state syncs the port Sticker again.
  assert.match(runtime, /isTrackedMediaInputConnectionChange\(node, type, slotIndex, \[\.\.\.STICKER_INPUT_NAMES, \.\.\.HANDOFF_INPUT_NAMES\]\)/);
});

test("the node surface leaves a background VIDEO that failed to load for its image fallbacks", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /if \(cached && cached\.key === cacheKey\) return cached\.player\.failed\(\) \? null : cached\.player\.video;/);
  // The origin slot indexes the images as the node output them, so video files are left out after it.
  assert.match(runtime, /ordered\.push\(outImgs\[resolvedOriginSlot\]\);\s*ordered\.push\(\.\.\.outImgs\);\s*for \(const cand of ordered\.filter\(\(image\) => !isVideoFile\(image\)\)\)/);
});

test("the Stickers node surface shows one play button only when it can play", async () => {
  const source = await read("../web_src/components/PanoStickersNodeSurface.vue");
  const button = source.slice(source.indexOf("<button\n      v-if=\"model.playable === true\""), source.indexOf("</button>", source.indexOf("pano-stickers-node-play")));

  assert.match(button, /data-action="toggle-playback"/);
  assert.match(button, /@pointerdown\.stop/);
  assert.match(button, /model\.playing \? ICON\.pause : ICON\.play/);
  assert.match(button, /model\.playing \? 'Pause' : 'Play'/);
  assert.equal(source.match(/toggle-playback/g).length, 2);
});

test("node playback pauses for edits and the editor, follows the node, and is released with the surface", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const restoreStart = runtime.indexOf("  const restoreDom = () => {");
  const restore = runtime.slice(restoreStart, runtime.indexOf("\n  surface.restore = restoreDom;", restoreStart));
  const keyStart = runtime.indexOf("  const onNodeSurfaceKeyDown = (ev) => {");
  const keyDown = runtime.slice(keyStart, runtime.indexOf("\n  };", keyStart));

  // Only Panorama Studio plays; its hidden VIDEOs (the background and the port Sticker's MP4)
  // stay rendered for requestVideoFrameCallback.
  assert.match(runtime, /if \(stickersMode && node\.__panoSceneStateV2\) \{/);
  assert.match(runtime, /const \[video, stickerVideo\] = \[0, 1\]\.map\(\(\) => \{\s*const element = createPanoVideo\(document, "node\.playback"\);/);
  assert.match(runtime, /element\.style\.cssText = "[^"]*opacity:0[^"]*"/);
  assert.doesNotMatch(runtime, /element\.style\.cssText = "[^"]*visibility/);
  // Every toolbar action but the play button stops playback first, the Full Editor included.
  assert.match(runtime, /if \(action\?\.type === "toggle-playback"\) \{[\s\S]*?return;\s*\}\s*pauseSurfacePlayback\(\);\s*if \(action\?\.type === "open-editor"\)/);
  assert.match(runtime, /isStickerImageFile\(file\)\) return false;\s*pauseSurfacePlayback\(\);/);
  assert.match(keyDown, /pauseSurfacePlayback\(\);\s*flushNodeSurfaceGesture\(\);/);
  // The node shows its playback's frame, which lives only in the node's runtime record (pano_node_bridge.js); a grab pauses there.
  assert.match(runtime, /return nodeSurface\(node\)\.playback\?\.playback\.frame \?\? NODE_SURFACE_FRAME;/);
  assert.match(runtime, /let picked = studioSurface \? null : pick\(\);\s*\/\/[^\n]*\n[^\n]*\n\s*if \(picked && surfacePlayback\?\.playback\.playing\) \{\s*pauseSurfacePlayback\(\);\s*picked = pick\(\);/);
  // Space stays ComfyUI's canvas pan.
  assert.doesNotMatch(keyDown, /" "|Space/);
  // A node out of sight, or under its open editor (which plays the same VIDEO), stops and lets its VIDEO go,
  // on each draw and as soon as its surface resizes away.
  assert.match(runtime, /const shown = surfaceShown\(wrap, !!node\.flags\?\.collapsed, editorOpen\(node\)\);/);
  // The surface's Timeline is the output's length: what the result gives of the inputs counts as in the editor.
  assert.match(runtime, /const sticker = shown \? portStickerMedia\(node\) : null;\s*const state = getCachedState\(node\);\s*const playable = playback\.follow\(\{\s*shown,\s*sources: shown \? backgroundVideoSources\(node\) : \[\],\s*state,\s*sticker,\s*media: shown \? surfaceTimelineMedia\(node, state\) : \{\},/);
  assert.match(runtime, /if \(surfacePlayback\) syncSurfacePlayback\(\);\s*else syncLegacyVideo\(\);[\s\S]*?if \(!node\.flags\?\.collapsed && !editorOpen\(node\)\) drawCanvas\(node, canvas, surfaceView, run\);\s*else surfaceView\.release\(\);/);
  assert.match(runtime, /new ResizeObserver\(\(\) => \{\s*if \(surfacePlayback\) syncSurfacePlayback\(\);\s*requestDraw\(\);/);
  assert.match(restore, /surfacePlayback\.playback\.dispose\(\);\s*surfacePlayback\.video\.remove\(\);\s*surfacePlayback\.stickerVideo\.remove\(\);\s*releasePanoCanvas\(surfacePlayback\.still\);\s*releasePanoCanvas\(surfacePlayback\.stickerStill\);/);
  // The editor marks itself open on the node while it covers the surface, and the surface draws again on close.
  const editor = await read("../web_src/pano_editor.js");
  // It is marked open only once the setup that may throw is done, right before its first draw.
  assert.match(editor, /runBootStep\("cursor", \(\) => updateCursor\(editor\.pointerPos\)\);\s*\/\/[^\n]*\n\s*editorSession\(node\)\.open = true;\s*peekNodeSurface\(node\)\?\.dom\?\.requestDraw\?\.\(\);\s*requestDraw\(\);/);
  assert.match(editor, /closeEditorPromise = \(async \(\) => \{\s*const session = peekEditorSession\(node\);\s*if \(session\) session\.open = false;/);
});
