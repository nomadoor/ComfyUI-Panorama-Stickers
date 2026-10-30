// docs/space-and-view.md "キーを離したものとするとき": the stage (web_src/studio/stage.js) lets every held movement key go
// when Meta goes up (macOS sends no keyup for a key let go while Meta is down) and when a context menu opens anywhere
// in the editor (Chromium sends no keyup while it is open). The stage runs on stand-ins of the canvas, the window and
// the three.js view; its frames run when the test says.
import assert from "node:assert/strict";
import test from "node:test";

import { createStage, stageUi } from "../web_src/studio/stage.js";

function target(extra = {}) {
  return Object.assign(new EventTarget(), extra);
}

function setup() {
  const frames = [];
  let time = 0;
  const body = target({ tagName: "BODY" });
  const document = target({ visibilityState: "visible", body, documentElement: target({ tagName: "HTML" }) });
  const win = target({
    document,
    devicePixelRatio: 1,
    screen: { width: 1000, height: 500 },
    requestAnimationFrame: (callback) => frames.push(callback),
    cancelAnimationFrame: () => {},
  });
  const canvas = target({ width: 1000, height: 500, getBoundingClientRect: () => ({ left: 0, top: 0, width: 1000, height: 500 }) });
  const root = target({ contains: (node) => node === root, ownerDocument: document });
  const view = () => ({ ready: true, render: () => null, resize: () => null, pick: () => null, dispose: () => {} });
  const ui = stageUi();
  const opening = { pose: { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -8] } };
  const output = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 };
  const stage = createStage({ canvas, root, opening, output, world: { ground: -1.6, camera: [0, 0, 0] }, ui, view, win, now: () => time });
  // Runs the frames asked for, one after another, at 16 ms apart.
  const run = () => {
    for (let i = 0; i < 20 && frames.length; i += 1) {
      time += 16;
      frames.shift()(time);
    }
  };
  const key = (type, code, extra = {}) => {
    const event = Object.assign(new Event(type, { cancelable: true }), { code, key: extra.key ?? code, shiftKey: false, altKey: false, ctrlKey: false, metaKey: false, ...extra });
    Object.defineProperty(event, "composedPath", { value: () => [body] });
    win.dispatchEvent(event);
  };
  return { stage, ui, run, key, root };
}

test("a held movement key moves the view until Meta goes up, which lets it go", () => {
  const { stage, ui, run, key } = setup();
  key("keydown", "KeyW", { key: "w" });
  run();
  assert.deepEqual(ui.lit, ["move"]);
  const moved = stage.pose().position[2];
  assert.ok(moved < 0, "W moved the view forward");
  key("keyup", "MetaLeft", { key: "Meta" });
  run();
  assert.deepEqual(ui.lit, []);
  const stopped = stage.pose().position[2];
  run();
  assert.equal(stage.pose().position[2], stopped, "nothing moves once the key is let go");
  stage.dispose();
});

test("a context menu opened inside the editor lets the held movement keys go", () => {
  const { stage, ui, run, key, root } = setup();
  key("keydown", "KeyD", { key: "d" });
  run();
  assert.deepEqual(ui.lit, ["move"]);
  // The editor's root takes it on its capture: a menu opened over a field in the inspector counts too.
  root.dispatchEvent(new Event("contextmenu"));
  run();
  assert.deepEqual(ui.lit, []);
  const stopped = stage.pose().position[0];
  run();
  assert.equal(stage.pose().position[0], stopped, "nothing moves once the key is let go");
  stage.dispose();
});

// docs/studio-ui.md "Output の小窓": the Frame picture goes to the window's "bitmaprenderer" canvas as an ImageBitmap. A
// canvas that gives no such context closes the bitmap and stops the picture; the window opened again draws again.
test("the Output window closes a bitmap its canvas cannot take, and draws again when it opens again", async () => {
  const frames = [];
  const document = target({ visibilityState: "visible", body: target({ tagName: "BODY" }), documentElement: target({ tagName: "HTML" }) });
  const win = target({ document, devicePixelRatio: 1, screen: { width: 1000, height: 500 }, requestAnimationFrame: (callback) => frames.push(callback), cancelAnimationFrame: () => {} });
  const canvas = target({ width: 1000, height: 500, getBoundingClientRect: () => ({ left: 0, top: 0, width: 1000, height: 500 }) });
  const root = target({ contains: (node) => node === root, ownerDocument: document });
  let renders = 0;
  const view = () => ({
    ready: true,
    render: (input) => {
      if (input.owner === undefined || !String(input.owner).includes("output")) return null;
      renders += 1;
      return { canvas: {}, x: 0, y: 0, width: 10, height: 10 };
    },
    resize: () => null, pick: () => null, releaseSplats: () => {}, dispose: () => {},
  });
  const bitmaps = [];
  const savedBitmap = globalThis.createImageBitmap;
  globalThis.createImageBitmap = async () => {
    const bitmap = { closed: false, close() { this.closed = true; } };
    bitmaps.push(bitmap);
    return bitmap;
  };
  const savedError = console.error;
  console.error = () => {};
  let context = null;
  let open = true;
  const outputCanvas = { clientWidth: 160, clientHeight: 90, getContext: () => context };
  const cameraTab = {
    tab: () => "3d",
    mode: () => "frame",
    shot: () => ({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 60, vFOV_deg: 34, aspect: 16 / 9 }),
    erpRange: () => 360,
    frame: () => null,
    erpCanvas: () => null,
    movable: () => true,
    backgroundColor: () => "#000000",
    output: () => (open ? { frame: outputCanvas, erp: null } : null),
    edits: { live() {}, commit() {}, cancel() {} },
  };
  const opening = { pose: { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -8] } };
  const stage = createStage({ canvas, root, opening, output: { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 }, world: { ground: -1.6, camera: [0, 0, 0] }, ui: stageUi(), view, win, cameraTab, now: () => 0 });
  const settle = () => new Promise((resolve) => setTimeout(resolve, 0));
  const drawn = async () => {
    stage.redraw();
    for (let i = 0; i < 5 && frames.length; i += 1) frames.shift()(16 * (i + 1));
    await settle();
  };
  try {
    await drawn();
    assert.equal(renders, 1);
    assert.equal(bitmaps.length, 1);
    assert.equal(bitmaps[0].closed, true, "a bitmap the canvas cannot take is closed");
    await drawn();
    assert.equal(renders, 1, "the picture stops while the canvas cannot take it");
    // The window folds and opens again with a canvas that takes it.
    open = false;
    await drawn();
    open = true;
    const shown = [];
    context = { transferFromImageBitmap: (bitmap) => shown.push(bitmap) };
    await drawn();
    assert.equal(renders, 2);
    assert.deepEqual(shown, [bitmaps[1]]);
  } finally {
    stage.dispose();
    globalThis.createImageBitmap = savedBitmap;
    console.error = savedError;
  }
});
