// Add and the drop on the new UI's stage (web_src/studio/add_files.js; docs/studio-ui.md "Add とドロップの見せ方",
// docs/space-and-view.md "Add とドロップ"), with the stage, the uploads and the 3D file route stood in for.
import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { boxCorners, transformPoint } from "../web_src/pano_space.js";
import { ADD_TEXT, createAddFiles, dragKind, fileToPlace } from "../web_src/studio/add_files.js";
import { createStudioSession } from "../web_src/studio/session.js";
import { stageCamera } from "../web_src/studio/stage_view.js";

const GROUND = -1.6;
const SIZE = { width: 1000, height: 600 };
const near = (a, b, eps = 1e-6) => Math.abs(a - b) <= eps;

// A view at the origin looking `pitch` degrees, its target 8 ahead.
function stage({ pitch = -30, picked = null } = {}) {
  const r = (pitch * Math.PI) / 180;
  const pose = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: pitch, roll_deg: 0, target: [0, 8 * Math.sin(r), -8 * Math.cos(r)] };
  return {
    camera: () => stageCamera(pose, SIZE.width, SIZE.height, 48),
    size: () => SIZE,
    pose: () => pose,
    bound: () => 48,
    pick: () => picked,
  };
}

const imageFile = (name = "photo.png", type = "image/png") => ({ name, type, size: 10 });
const glbFile = (name = "box.glb", size = 1000) => ({ name, type: "", size });

function setup({ view = stage(), state = { stickers: [] }, readOnly = false, uploadImage, upload3d, route, decode, box = { min: [-0.5, -1, -0.5], max: [0.5, 1, 0.5] }, pending, late } = {}) {
  const session = createStudioSession({ state: loadSceneState({ version: 2, ...state }), readOnly });
  const ui = { choice: null, drop: null, adding: false, addWarning: null };
  const notices = [];
  let drawn = false;
  const add = createAddFiles({
    session,
    ui,
    view: () => view,
    ground: () => GROUND,
    content: () => ({ space: { fileStickers: session.state.stickers.filter((s) => s.source.filename?.endsWith(".glb")).map((s) => ({ id: s.id, url: `u:${s.id}` })) } }),
    sceneBox: () => (drawn ? { min: [0, 0, 0], max: [1, 1, 1] } : null),
    uploadImage: uploadImage ?? (async (file) => ({ filename: file.name, subfolder: "panorama_stickers", storage: "input" })),
    upload3d: upload3d ?? (async (file) => ({ kind: "file", filename: file.name, subfolder: "3d", storage: "input" })),
    route: route ?? (async () => ({ state: "ready", box })),
    decode: decode ?? (async () => ({ image: { tag: "img" }, width: 200, height: 100 })),
    notice: (text) => notices.push(text),
    timers: { set: () => 1, clear: () => {} },
    ...(pending ? { pending } : {}),
    ...(late ? { late } : {}),
  });
  return { session, ui, add, notices, draw: () => { drawn = true; add.refresh(); } };
}

test("the file placed is the first image, else the first 3D file; a drag shows an image's mark only for an image type", () => {
  assert.equal(fileToPlace([glbFile(), imageFile()]).name, "photo.png");
  assert.equal(fileToPlace([{ name: "a.txt", type: "text/plain" }, glbFile()]).name, "box.glb");
  assert.equal(fileToPlace([{ name: "a.txt", type: "text/plain" }]), null);
  assert.equal(dragKind([{ kind: "file", type: "image/jpeg" }]), "image");
  assert.equal(dragKind([{ kind: "file", type: "" }]), "3d");
  assert.equal(dragKind([{ kind: "file", type: "model/gltf-binary" }]), "3d");
  assert.equal(dragKind([{ kind: "string", type: "text/plain" }]), null);
});

test("Add with a GLB places it in the World where the screen center lands, selected; placing is one Undo step", async () => {
  const { session, ui, add, draw } = setup();
  const placing = await add.pick([glbFile()]);
  const sticker = session.state.stickers[0];
  assert.equal(sticker.placement, "world");
  assert.equal(session.selection.row, sticker.id);
  assert.equal(session.canUndo, false);
  assert.equal(ui.adding, true);
  // The screen center's ray (30° down) meets the ground 1.6 / tan 30° ahead.
  const ahead = 1.6 / Math.tan(Math.PI / 6);
  assert.ok(near(sticker.position.value[2], -ahead) && near(sticker.position.value[1], GROUND));
  await placing.done;
  const settled = session.state.stickers[0];
  assert.equal(settled.source.filename, "box.glb");
  assert.equal(settled.source.subfolder, "3d");
  // The box's bottom sits on the landing point, its level middle over it.
  const turned = boxCorners({ min: [-0.5, -1, -0.5], max: [0.5, 1, 0.5] }).map((p) => transformPoint({ position: settled.position.value, yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1 }, p));
  assert.ok(near(Math.min(...turned.map((p) => p[1])), GROUND));
  assert.equal(session.canUndo, true);
  assert.equal(ui.adding, true);
  draw();
  assert.equal(ui.adding, false);
  assert.ok(session.undo());
  assert.equal(session.state.stickers.length, 0);
});

test("Add with a GLB and nothing at the center lands on the ground below T", async () => {
  const { session, add } = setup({ view: stage({ pitch: 10 }) });
  await add.pick([glbFile()]);
  const [x, y, z] = session.state.stickers[0].position.value;
  assert.ok(near(x, 0) && near(y, GROUND) && near(z, -8 * Math.cos(Math.PI / 18)));
});

test("a GLB moved while it uploaded keeps its place", async () => {
  let release;
  const { session, add } = setup({ route: () => new Promise((resolve) => (release = () => resolve({ state: "ready", box: { min: [0, 0, 0], max: [1, 1, 1] } }))) });
  const placing = await add.pick([glbFile()]);
  await new Promise((resolve) => setTimeout(resolve, 0));
  session.gesture((draft) => {
    draft.stickers[0].position.value = [5, 0, 5];
    return true;
  });
  session.commitGesture();
  release();
  await placing.done;
  assert.deepEqual(session.state.stickers[0].position.value, [5, 0, 5]);
  assert.equal(session.state.stickers[0].source.filename, "box.glb");
});

test("a 3D file that fails goes with no step and the line says why", async () => {
  const unreadable = setup({ route: async () => ({ state: "failed", error: "Could not read the 3D file 3d/box.fbx: convert it to GLB." }) });
  const placing = await unreadable.add.pick([glbFile("box.fbx")]);
  await placing.done;
  assert.equal(unreadable.session.state.stickers.length, 0);
  assert.equal(unreadable.session.canUndo, false);
  assert.equal(unreadable.ui.adding, false);
  assert.equal(unreadable.ui.addWarning, "Could not read the 3D file 3d/box.fbx: convert it to GLB.");

  const big = setup();
  assert.equal(await big.add.pick([glbFile("huge.glb", 200 * 1024 * 1024)]), null);
  assert.match(big.ui.addWarning, /too large/);
  assert.equal(big.session.state.stickers.length, 0);

  const offline = setup({ upload3d: async () => { throw new Error("Could not upload box.glb (500)."); } });
  await (await offline.add.pick([glbFile()])).done;
  assert.equal(offline.ui.addWarning, "Could not upload box.glb (500).");
  // The next file placed ends the line.
  await offline.add.pick([imageFile()]);
  assert.equal(offline.ui.addWarning, null);
});

test("Add with an image shows the Sky / World choice; Escape closes it and places nothing", async () => {
  const { session, ui, add } = setup();
  await add.pick([imageFile()]);
  assert.deepEqual(ui.choice, { name: "photo.png" });
  assert.equal(session.state.stickers.length, 0);
  assert.equal(add.escape(), true);
  assert.equal(ui.choice, null);
  assert.equal(add.escape(), false);
  assert.equal(add.choose("sky"), null);
  assert.equal(session.state.stickers.length, 0);
});

test("Sky puts the image along the screen center's ray in front of the other sky images, drawn from the decoded file", async () => {
  const { session, ui, add } = setup({ state: { stickers: [{ id: "sticker_1", placement: "sky", source: { kind: "file", filename: "a.png" }, z_index: 4 }] } });
  await add.pick([imageFile()]);
  const placing = add.choose("sky");
  assert.equal(ui.choice, null);
  const sticker = session.state.stickers.find((item) => item.id === placing.id);
  assert.equal(sticker.placement, "sky");
  assert.equal(sticker.z_index, 5);
  assert.ok(near(sticker.direction.value.pitch_deg, -30) && near(sticker.direction.value.yaw_deg, 0));
  assert.equal(sticker.size.value.hFOV_deg, 30);
  assert.deepEqual(add.media(sticker), { media: { tag: "img" }, revision: `added:${sticker.id}` });
  assert.deepEqual(add.sizes(session.state), { [sticker.id]: { width: 200, height: 100 } });
  await placing.done;
  assert.equal(session.state.stickers.find((item) => item.id === placing.id).source.subfolder, "panorama_stickers");
  assert.equal(session.canUndo, true);
});

test("World puts the image standing on the ground where the screen center lands, E tall", async () => {
  const { session, add } = setup();
  await add.pick([imageFile()]);
  const placing = add.choose("world");
  const sticker = session.state.stickers[0];
  assert.equal(sticker.placement, "world");
  assert.ok(near(sticker.position.value[1], GROUND + 0.8));
  assert.ok(near(sticker.scale.value, 3.2));
  await placing.done;
});

test("an image that cannot be read or uploaded says so and leaves nothing", async () => {
  const unreadable = setup({ decode: async () => { throw new Error("bad"); } });
  await unreadable.add.pick([imageFile("broken.png")]);
  assert.equal(unreadable.ui.addWarning, ADD_TEXT.unreadable("broken.png"));
  assert.equal(unreadable.ui.choice, null);

  const offline = setup({ uploadImage: async () => { throw new Error("upload failed (500)"); } });
  await offline.add.pick([imageFile()]);
  await offline.add.choose("sky").done;
  assert.equal(offline.session.state.stickers.length, 0);
  assert.equal(offline.session.canUndo, false);
  assert.equal(offline.ui.addWarning, ADD_TEXT.uploadFailed("photo.png", "upload failed (500)"));
});

test("an image dropped on the sky becomes a sky image; on the ground a World image; no choice", async () => {
  const { session, ui, add } = setup({ view: stage({ pitch: 0 }) });
  await add.drop({ x: 500, y: 100 }, [imageFile()]);
  assert.equal(ui.choice, null);
  assert.equal(session.state.stickers[0].placement, "sky");
  await add.drop({ x: 500, y: 550 }, [imageFile()]);
  assert.equal(session.state.stickers[1].placement, "world");
  assert.equal(session.selection.row, session.state.stickers[1].id);
});

test("the GPU pick decides the drop: an image over a picked point goes to the World", async () => {
  const { session, add } = setup({ view: stage({ pitch: 0, picked: [0, 0.5, -4] }) });
  await add.drop({ x: 500, y: 300 }, [imageFile()]);
  const sticker = session.state.stickers[0];
  assert.equal(sticker.placement, "world");
  assert.ok(near(sticker.position.value[2], -4, 1e-3));
});

test("a 3D file dropped on the sky goes to the ground far along the ray; with no ground inside the bound it is not placed", async () => {
  const { session, add, notices } = setup({ view: stage({ pitch: 0 }) });
  await add.drop({ x: 500, y: 100 }, [glbFile()]);
  const [x, y, z] = session.state.stickers[0].position.value;
  assert.ok(near(Math.hypot(x, y, z), 48, 1e-6));

  const outside = { ...stage(), camera: () => stageCamera({ position: [0, 0, 80], yaw_deg: 180, pitch_deg: 20, roll_deg: 0, target: [0, 2, 88] }, SIZE.width, SIZE.height, 48), pose: () => ({ position: [0, 0, 80], yaw_deg: 180, pitch_deg: 20, target: [0, 2, 88] }) };
  const none = setup({ view: outside });
  assert.equal(await none.add.drop({ x: 500, y: 100 }, [glbFile()]), null);
  assert.deepEqual(none.notices, [ADD_TEXT.noGround]);
  assert.equal(none.session.state.stickers.length, 0);
  assert.ok(notices.length === 0);
});

test("dragging over the stage shows where it lands with the pointer and the stage for its label; it leaves and closes the choice", async () => {
  const { ui, add } = setup({ view: stage({ pitch: 0 }) });
  await add.pick([imageFile()]);
  add.dragOver({ x: 500, y: 100 }, "image");
  assert.equal(ui.choice, null);
  assert.equal(ui.drop.placement, "sky");
  assert.deepEqual(ui.drop.pointer, { x: 500, y: 100 });
  assert.deepEqual(ui.drop.stage, SIZE);
  add.dragOver({ x: 500, y: 550 }, "image");
  assert.equal(ui.drop.placement, "world");
  add.dragOver({ x: 500, y: 550 }, "3d");
  assert.equal(ui.drop.placement, "world");
  add.dragLeave();
  assert.equal(ui.drop, null);
});

test("a read-only editor takes no file", async () => {
  const { session, ui, add } = setup({ readOnly: true });
  await add.pick([glbFile()]);
  await add.drop({ x: 500, y: 550 }, [imageFile()]);
  add.dragOver({ x: 500, y: 550 }, "image");
  assert.equal(session.state.stickers.length, 0);
  assert.equal(ui.drop, null);
});

// docs/studio-ui.md "Add とドロップの見せ方" (置く間): an editor closed while a placed object uploads, and opened again
// before the upload ends, takes the object over.
function held() {
  const calls = [];
  const upload = (file) => new Promise((resolve, reject) => calls.push({ file, resolve, reject }));
  return { calls, upload };
}

test("an image placed, the editor closed and opened again before its upload ends: the new editor takes it over and settles it", async () => {
  const pending = new Set();
  const uploads = held();
  let lateWrites = 0;
  const first = setup({ pending, uploadImage: uploads.upload, late: () => { lateWrites += 1; } });
  const placing = await first.add.drop({ x: 500, y: 60 }, [imageFile()]);
  const id = placing.id;
  // Moved while it uploads: the new editor gets it as the closed one left it.
  first.session.gesture((draft) => {
    draft.stickers[0].opacity.value = 0.5;
    return true;
  });
  first.session.commitGesture();
  first.add.close();
  lateWrites = 0;
  // The new editor opens on the state written at closing (the placed object has no file yet, so it is left out).
  const second = setup({ pending, uploadImage: uploads.upload });
  assert.deepEqual(second.session.state.stickers.map((s) => s.id), [id]);
  assert.equal(second.session.state.stickers[0].opacity.value, 0.5);
  assert.equal(second.session.selection.row, null);
  assert.equal(second.session.canUndo, false);
  assert.ok(second.add.media(second.session.state.stickers[0]));
  uploads.calls[0].resolve({ filename: "photo.png", subfolder: "panorama_stickers", storage: "input" });
  await placing.done;
  assert.equal(second.session.state.stickers[0].source.filename, "photo.png");
  assert.equal(second.session.canUndo, true);
  assert.equal(lateWrites, 0);
  assert.equal(pending.size, 0);
});

test("a 3D file taken over shows the loading line in the new editor; a failure takes it away there and says why", async () => {
  const pending = new Set();
  let release;
  const route = () => new Promise((resolve) => (release = resolve));
  const first = setup({ pending, route });
  const placing = await first.add.pick([glbFile()]);
  first.add.close();
  const second = setup({ pending, route });
  assert.equal(second.session.state.stickers.length, 1);
  assert.equal(second.ui.adding, true);
  await new Promise((resolve) => setTimeout(resolve, 0));
  release({ state: "failed", error: "Could not read the 3D file 3d/box.glb." });
  await placing.done;
  assert.equal(second.session.state.stickers.length, 0);
  assert.equal(second.ui.addWarning, "Could not read the 3D file 3d/box.glb.");
  assert.equal(second.ui.adding, false);
});

test("closed and not opened again, or opened read-only, a settled placement is written by the closed editor", async () => {
  for (const reopen of [false, true]) {
    const pending = new Set();
    const uploads = held();
    let lateWrites = 0;
    const first = setup({ pending, uploadImage: uploads.upload, late: () => { lateWrites += 1; } });
    const placing = await first.add.drop({ x: 500, y: 60 }, [imageFile()]);
    first.add.close();
    lateWrites = 0;
    const second = reopen ? setup({ pending, readOnly: true }) : null;
    if (second) assert.equal(second.session.state.stickers.length, 0);
    uploads.calls[0].resolve({ filename: "photo.png", subfolder: "panorama_stickers", storage: "input" });
    await placing.done;
    assert.equal(first.session.state.stickers[0].source.filename, "photo.png");
    assert.ok(lateWrites >= 1);
  }
});
