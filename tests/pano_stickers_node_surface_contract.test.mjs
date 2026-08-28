import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

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
  assert.match(runtime, /const stickerDragOverHook = stickersMode \? function/);
  assert.match(runtime, /const stickerDragDropHook = stickersMode \? function/);
  assert.match(runtime, /if \(stickersMode\) \{[\s\S]*?node\.onDragOver = stickerDragOverHook;[\s\S]*?node\.onDragDrop = stickerDragDropHook;/);
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
  const editor = await read("../web_src/pano_editor.js");
  const start = editor.indexOf("  function dragHasImageFiles(e) {");
  const end = editor.indexOf("\n  function ", start + 1);
  const detector = editor.slice(start, end);

  assert.match(editor, /dragHasStickerImageFile,/);
  assert.match(detector, /return dragHasStickerImageFile\(e\?\.dataTransfer\);/);
  assert.doesNotMatch(detector, /startsWith\("image\/"\)/);
});

test("modal lock changes refresh both selection actions and inspector controls", async () => {
  const editor = await read("../web_src/pano_editor.js");
  const start = editor.indexOf("  function toggleSelectedLock() {");
  const end = editor.indexOf("\n  function ", start + 1);
  const toggleLock = editor.slice(start, end);

  assert.notEqual(start, -1);
  assert.match(toggleLock, /updateSelectionMenu\(\);/);
  assert.match(toggleLock, /updateSidePanel\(\);/);
});

test("modal destructive and ordering commands reject selections containing locked items", async () => {
  const editor = await read("../web_src/pano_editor.js");
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
  const editor = await read("../web_src/pano_editor.js");
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(editor, /const ENABLE_STICKERS_NODE_PREVIEW = true;/);
  assert.match(runtime, /PanoStickersNodeSurface/);
  assert.match(runtime, /createStickersNodeSurfaceSession/);
  assert.match(runtime, /pano-stickers-node-surface-host/);
  assert.doesNotMatch(runtime, /runDomProbeForStickers\(\);/);
});

test("Stickers surface uses the shared ordered composite and current image or video input", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const branchStart = runtime.indexOf("// Stickers mode: Canvas resolution follows DOM size");
  const branchEnd = runtime.indexOf("\n  }\n}\n\nexport function drawErpBackground", branchStart);
  assert.notEqual(branchStart, -1);
  assert.notEqual(branchEnd, -1);
  const branch = runtime.slice(branchStart, branchEnd);

  assert.match(branch, /\["pano_input_videos"\]/);
  assert.match(branch, /syncRuntimeCutoutComposite\(/);
  assert.match(branch, /renderToContext\(/);
  assert.match(branch, /ctx\.fillStyle = "#070707"/);
  assert.match(branch, /const bgImg = connectedBg \|\| null/);
  assert.match(branch, /const backgroundReady = !connectedBg \|\| isRenderableMediaReady\(bgImg\)/);
  assert.match(branch, /if \(!connectedBg && panoramaDrawn\)[\s\S]*?drawPanoGrid\(/);
  assert.doesNotMatch(branch, /solidErpSourceCache/);
  assert.doesNotMatch(branch, /bg_color/);
  assert.doesNotMatch(branch, /Connect ERP image/);
  assert.doesNotMatch(branch, /buildBgPaintCanvas\(/);
  assert.doesNotMatch(branch, /drawSticker\(/);
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

  assert.ok(body.indexOf("onConnectionsChangePrev") < body.indexOf("markNodeOutputMediaStale"));
  assert.match(body, /const refreshAfterConnectionMutation = \(\) => \{[\s\S]*?invalidateBackgroundPreviewMedia\(node\)[\s\S]*?requestDraw\(\)/);
  assert.match(body, /queueMicrotask\(refreshAfterConnectionMutation\)/);
});

test("background connection changes do not invalidate the external sticker texture", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("  const onConnectionsChangeHook = function (type, slotIndex) {");
  const end = runtime.indexOf("\n  node.onConnectionsChange = onConnectionsChangeHook;", start);
  const body = runtime.slice(start, end);

  assert.match(body, /backgroundInputChanged[\s\S]*?markNodeOutputMediaStale\(node, "background"\)/);
  assert.match(body, /if \(stickerInputChanged\) \{\s*markNodeOutputMediaStale\(node, "external-sticker"\);\s*node\.__panoLastExecutedOutput = null;\s*invalidateExternalStickerPreviewImage\(node\);\s*\}/);
  assert.match(body, /if \(backgroundInputChanged\) \{[\s\S]*?invalidateBackgroundPreviewMedia\(node\);[\s\S]*?\}/);
  assert.match(body, /if \(stickerInputChanged\) \{[\s\S]*?invalidateExternalStickerPreviewImage\(node\);[\s\S]*?\}/);
  assert.doesNotMatch(body, /invalidatePreviewImageCaches\(node\)/);
  assert.match(runtime, /isNodeOutputMediaCurrent\(node, "external-sticker"\)/);
});

test("surface teardown restores lifecycle hooks only while it still owns each wrapper", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const start = runtime.indexOf("  const restoreDom = () => {");
  const end = runtime.indexOf("\n  node.__panoDomRestore = restoreDom;", start);
  const body = runtime.slice(start, end);

  assert.match(body, /if \(node\.onResize === onResizeHook\) node\.onResize = onResizePrev/);
  assert.match(body, /if \(node\.onExecuted === onExecutedHook\) node\.onExecuted = onExecutedPrev/);
  assert.match(body, /if \(node\.onConnectionsChange === onConnectionsChangeHook\) node\.onConnectionsChange = onConnectionsChangePrev/);
  assert.match(body, /if \(node\.onRemoved === onRemovedHook\) node\.onRemoved = onRemovedPrev/);
});

test("shared composite includes raster paint objects as independent z-ordered layers", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /createRasterObjectSurfaceCache/);
  assert.match(runtime, /painting\?\.raster_objects/);
  assert.match(runtime, /id:\s*`raster:/);
  assert.match(runtime, /rasterEntries:\s*layerEntries/);
});

test("external sticker textures resolve only from the node's current dedicated output", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");

  assert.match(runtime, /pano_sticker_input_images/);
  assert.match(runtime, /isNodeOutputMediaCurrent\(node, "external-sticker"\)/);
  assert.match(runtime, /pano_sticker_input_state_hash/);
  assert.doesNotMatch(runtime, /getLinkedInputImageForPreview\(\s*node,\s*\["stickers"\]/);
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

  assert.match(body, /__panoOwnOutputRev\s*=\s*nextMediaRevision\(/);
  assert.ok(body.indexOf("__panoOwnOutputRev") < body.indexOf("if (src)"));
  assert.match(runtime, /createSharedImageCache\(\)/);
  assert.match(runtime, /buildSharedImageCacheKey\(src, stateHash, revision\)/);
  assert.match(runtime, /sharedPreviewImageCache\.disposeOwner\(node\)/);
});

test("Stickers canvas wires selection and direct transform gestures through the state session", async () => {
  const runtime = await read("../web_src/pano_preview_runtime.js");
  const editor = await read("../web_src/pano_editor.js");

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
  const restoreEnd = runtime.indexOf("\n  node.__panoDomRestore = restoreDom;", restoreStart);
  const restore = runtime.slice(restoreStart, restoreEnd);

  assert.ok(teardown.indexOf("const dom = node.__panoDomPreview;") < teardown.indexOf("node.__panoDomRestore?.();"));
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
  const restoreEnd = runtime.indexOf("\n  node.__panoDomRestore = restoreDom;", restoreStart);
  const restore = runtime.slice(restoreStart, restoreEnd);

  assert.notEqual(restoreStart, -1);
  assert.ok(restore.indexOf("flushNodeSurfaceGesture();") < restore.indexOf("nodeSurfaceSession?.destroy?.();"));
  assert.doesNotMatch(restore, /cancelCutoutDrag\(\)/);
});
