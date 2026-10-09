import assert from "node:assert/strict";
import test from "node:test";

import { createStickerImport } from "../web_src/editor/sticker_import.js";
import { fileStickerKey } from "../web_src/pano_space.js";

// docs/editor-interaction.md "3D ファイルを置く流れ": Add to World and the drop with a 3D file, in Panorama Studio's
// editor (sceneV2) and in the legacy modal (not taken).
function harness({ sceneV2 = true, upload = { status: 200, body: { name: "chair.glb", subfolder: "3d", type: "input" } }, route = { state: "ready", kind: "mesh", unlit: false, generation: 0 } } = {}) {
  const calls = { uploads: [], routes: [], history: 0, commits: 0, picks: [] };
  const state = { stickers: [], next_sticker_id: 1 };
  const editor = { selectedId: null, worldSelectedId: null, viewYaw: 0, viewPitch: 0, frame: 0 };
  const boxes = new Map();
  const dragCue = { active: false, depth: 0 };
  const editorView = { pick: () => null, sceneBox: (key) => boxes.get(key) ?? null, sceneItemError: () => null };
  let releaseRoute;
  const routeGate = new Promise((resolve) => { releaseRoute = resolve; });
  const module = createStickerImport({
    api: {
      fetchApi: async (path, options) => {
        calls.uploads.push({ path, body: options.body });
        return typeof upload === "function" ? upload() : { status: upload.status, statusText: "", json: async () => upload.body };
      },
    },
    canvas: { width: 800, height: 400 },
    dragCue,
    editor,
    editorView,
    imageCache: new Map(),
    node: {},
    readOnly: false,
    sceneV2,
    stageWrap: { classList: { toggle() {} } },
    state,
    type: "stickers",
    vueModal: { openImagePicker: (...args) => calls.picks.push(args) },
  });
  const noop = () => {};
  module.connect({
    clearWorldSelection: () => { editor.worldSelectedId = null; },
    commitAndRefreshNode: () => { calls.commits += 1; },
    computeStickerVFov: () => 30,
    contentSphere: () => null,
    currentSpaceCamera: noop,
    file3dEditorFile: (sticker) => (sticker.source.filename && route.state === "ready" ? { kind: route.kind, unlit: route.unlit, url: "/view?filename=e.glb", generation: route.generation } : null),
    forceCursorTool: noop,
    getNextStickerZIndex: () => 0,
    getSelected: () => null,
    isExternalSticker: () => false,
    isSpaceView: () => false,
    isStickerItem: () => true,
    markObjectVisualsDirty: noop,
    pushHistory: () => { calls.history += 1; },
    requestDraw: noop,
    requestFile3d: async (source) => {
      calls.routes.push(source);
      await routeGate;
      return route;
    },
    selectWorldSticker: (id) => { editor.worldSelectedId = id; },
    setSelectedItem: (item) => { editor.selectedId = item?.id ?? null; },
    spaceViewState: () => ({ position: [0, 0, 0], yaw_deg: 30, pitch_deg: 20, hFOV_deg: 90, distance: 1 }),
    stickerImageKey: (item) => `sticker:${item.id}`,
    stopTimelinePlayback: noop,
    syncTimeline: noop,
    updateSelectionMenu: noop,
    updateSidePanel: noop,
  });
  return { module, state, editor, calls, boxes, dragCue, releaseRoute };
}

const glb = (size = 4) => new File([new Uint8Array(size)], "chair.glb");

test("Add to World picks images and 3D files", () => {
  const { module, calls } = harness();
  module.addToWorld();
  assert.deepEqual(calls.picks, [["add-world", "image/*,.gltf,.glb,.obj,.fbx,.stl,.spz,.splat,.ply,.ksplat"]]);
});

test("a 3D file is placed selected at once, shows nothing until it draws, and is one Undo step once the route answered", async () => {
  const { module, state, editor, calls, boxes, releaseRoute } = harness();
  const done = module.addWorldStickerFromFile(glb());
  // Selected at once, upright and turned to the view, at scale 1, without a file until the route answered.
  assert.equal(state.stickers.length, 1);
  const [sticker] = state.stickers;
  assert.equal(sticker.placement, "world");
  assert.deepEqual(sticker.source, { kind: "file", filename: "" });
  assert.equal(editor.worldSelectedId, sticker.id);
  assert.equal(sticker.rotation.value.pitch_deg, 0);
  assert.equal(sticker.rotation.value.roll_deg, 0);
  assert.ok(Math.abs(sticker.rotation.value.yaw_deg - 30) < 1e-9);
  assert.equal(sticker.scale.value, 1);
  assert.ok(module.loading3dIds().has(sticker.id));
  assert.equal(module.file3dImportNotice(), "Loading 3D model…");
  await new Promise((resolve) => setTimeout(resolve, 0));
  // Uploaded to input/3d, then the route asked with the uploaded Source; no Undo step yet.
  assert.equal(calls.uploads.length, 1);
  assert.equal(calls.uploads[0].path, "/upload/image");
  assert.equal(calls.uploads[0].body.get("subfolder"), "3d");
  assert.deepEqual(calls.routes, [{ kind: "file", filename: "chair.glb", subfolder: "3d", storage: "input" }]);
  assert.equal(calls.history, 0);
  assert.equal(sticker.source.filename, "");
  releaseRoute();
  await done;
  assert.deepEqual(sticker.source, { kind: "file", filename: "chair.glb", subfolder: "3d", storage: "input" });
  assert.equal(calls.history, 1);
  assert.equal(calls.commits, 1);
  // Still loading until its item is there; then the note goes.
  assert.equal(module.file3dImportNotice(), "Loading 3D model…");
  boxes.set(fileStickerKey(sticker.id, 0), { min: [0, 0, 0], max: [1, 1, 1] });
  assert.equal(module.file3dImportNotice(), "");
  assert.equal(module.loading3dIds().size, 0);
});

// Review P3-7: the note never stays up for a 3D file that will not draw at the shown frame.
test("Loading 3D model… goes once the Sticker is hidden or outside its Clip range at the shown frame", async () => {
  for (const change of [(sticker) => { sticker.visible = false; }, (sticker) => { sticker.clip = { start: 100, in: 0, duration: null }; }]) {
    const { module, state, releaseRoute } = harness();
    releaseRoute();
    const done = module.addWorldStickerFromFile(glb());
    await done;
    // The route answered and the Sticker has its file, but its item has not loaded.
    assert.equal(module.file3dImportNotice(), "Loading 3D model…");
    change(state.stickers[0]);
    assert.equal(module.file3dImportNotice(), "");
    assert.equal(module.loading3dIds().size, 0);
  }
});

test("a 3D file the route cannot read takes its Sticker away without an Undo step of its own, and says why", async () => {
  const error = "Could not read the 3D file 3d/chair.glb: it is neither a splat file nor a mesh file";
  const { module, state, editor, calls, releaseRoute } = harness({ route: { state: "failed", error } });
  releaseRoute();
  await module.addWorldStickerFromFile(glb());
  assert.deepEqual(state.stickers, []);
  assert.equal(editor.worldSelectedId, null);
  assert.equal(module.file3dImportNotice(), error);
  // The snapshot after it went is the state before it came, as for an image whose upload failed.
  assert.equal(calls.history, 1);
  // The note stays until the next file is placed.
  assert.equal(module.file3dImportNotice(), error);
});

test("a failed upload and a file over 100 MB are refused with the reason", async () => {
  const failed = harness({ upload: { status: 500, body: {} } });
  failed.releaseRoute();
  await failed.module.addWorldStickerFromFile(glb());
  assert.deepEqual(failed.state.stickers, []);
  assert.deepEqual(failed.calls.routes, []);
  assert.equal(failed.module.file3dImportNotice(), "Could not upload chair.glb (500).");

  const large = harness();
  const file = { name: "big.glb", type: "", size: 101 * 1024 * 1024 };
  await large.module.addWorldStickerFromFile(file);
  // Refused before anything is placed or sent.
  assert.deepEqual(large.state.stickers, []);
  assert.equal(large.calls.uploads.length, 0);
  assert.equal(large.module.file3dImportNotice(), "big.glb is too large (101.0 MB). The largest 3D file is 100 MB.");
});

test("a 3D file dropped on Panorama Studio's editor goes into space; the legacy modal takes no 3D file", async () => {
  const drop = (files) => ({ preventDefault() {}, stopPropagation() {}, dataTransfer: { files } });
  const studio = harness();
  studio.releaseRoute();
  studio.module.onCanvasDrop(drop([glb()]));
  assert.equal(studio.state.stickers.length, 1);
  assert.equal(studio.state.stickers[0].placement, "world");

  const legacy = harness({ sceneV2: false });
  legacy.module.onCanvasDrop(drop([glb()]));
  await legacy.module.addWorldStickerFromFile(glb());
  assert.deepEqual(legacy.state.stickers, []);
  assert.equal(legacy.calls.uploads.length, 0);
  // Nor does its drag show the drop cue for a 3D file.
  const dragged = { preventDefault() {}, dataTransfer: { items: [{ kind: "file", type: "model/gltf-binary" }], files: [] } };
  legacy.module.onWindowDragEnter(dragged);
  studio.module.onWindowDragEnter(dragged);
  assert.equal(legacy.dragCue.active, false);
  assert.equal(studio.dragCue.active, true);
});
