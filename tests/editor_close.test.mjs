import assert from "node:assert/strict";
import test from "node:test";

import { createFrameView } from "../web_src/editor/frame_view.js";
import { createMediaSession } from "../web_src/editor/media_session.js";
import { createRenderLoop } from "../web_src/editor/render_loop.js";
import { stateSync } from "../web_src/pano_node_bridge.js";
import { createTimers } from "../web_src/pano_timers.js";

// An editor that closed writes nothing and holds nothing: what reaches it afterwards (a loaded image, a
// timer) does not hand the node its working state again, its timers do not run, and its VIDEO lets go of
// its source.

test("a draw asked for after the editor closed does nothing: the node keeps reading its own state", (t) => {
  globalThis.ResizeObserver = class { observe() {} disconnect() {} };
  globalThis.window = { devicePixelRatio: 1, matchMedia: () => ({ addEventListener() {}, removeEventListener() {} }) };
  t.after(() => {
    delete globalThis.ResizeObserver;
    delete globalThis.window;
  });
  const node = { id: 3, setDirtyCanvas() {} };
  const state = { stickers: [] };
  const asked = [];
  const runtime = { running: true, reasons: new Set() };
  const loop = createRenderLoop({
    editor: { interaction: null }, node, runtime, scheduler: { requestDraw: (reason) => asked.push(reason), stop() {} },
    state, timeline: { drag: null }, type: "stickers", uiState: {},
  });
  loop.connect({
    getSharedLivePaintSurface() {}, isPaintCompositeInteraction: () => false, syncLookAtFrameButtonState() {},
    syncViewToggleState() {},
  });
  loop.watchPixelRatio();
  loop.requestDraw();
  assert.equal(stateSync(node).liveState, state);
  assert.equal(asked.length, 1);

  loop.stopRenderLoop();
  // closeEditor hands the node back its stored state.
  stateSync(node).liveState = null;
  loop.requestDraw();
  loop.requestDraw({ localOnly: true });
  assert.equal(stateSync(node).liveState, null);
  assert.equal(asked.length, 1);
});

test("the editor's timers end when it closes: the Frame view's wheel notice draws nothing afterwards", (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  globalThis.window = { setTimeout: (run, ms) => setTimeout(run, ms), clearTimeout: (id) => clearTimeout(id) };
  t.after(() => delete globalThis.window);
  const timers = createTimers();
  let draws = 0;
  const shot = { id: "camera", yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, curve: 1, position: [0, 0, 0] };
  const frameView = createFrameView({
    cameraV2: true, canvas: { width: 1280, height: 720 }, editor: { mode: "frame" }, readOnly: false,
    editorView: { contentRevision: () => 1, pickSurface: () => null },
    runtime: { frameSafeRect: { x: 0, y: 0, w: 1280, h: 720 } }, shotEditor: true, timers, uiState: {},
  });
  frameView.connect({ getActiveCutoutShot: () => shot, hasSpaceContent: () => false, requestDraw: () => { draws += 1; } });
  frameView.wheelFrameView({ x: 640, y: 360 }, -1);
  assert.equal(draws, 1);
  timers.clearAll();
  t.mock.timers.tick(5000);
  assert.equal(draws, 1);
});

test("closing the editor lets its background VIDEO go: no source is left loading", (t) => {
  globalThis.ResizeObserver = class { observe() {} disconnect() {} };
  class FakeVideo {
    constructor() {
      this.calls = [];
      this.attributes = new Map([["src", "/view?filename=bg.mp4"]]);
      this.dataset = {};
    }
    addEventListener() {}
    removeEventListener() {}
    pause() { this.calls.push("pause"); }
    load() { this.calls.push("load"); }
    getAttribute(name) { return this.attributes.get(name) ?? null; }
    removeAttribute(name) { this.calls.push(`remove ${name}`); this.attributes.delete(name); }
  }
  globalThis.HTMLVideoElement = FakeVideo;
  t.after(() => {
    delete globalThis.ResizeObserver;
    delete globalThis.HTMLVideoElement;
  });
  const videoEl = new FakeVideo();
  const media = createMediaSession({
    comfyMedia: { uiList: () => [], uiValue: () => null }, editor: {}, imageCache: new Map(),
    mediaAssetSource: () => "", mediaSource: () => "", node: { id: 7, inputs: [] },
    scheduler: { requestFrame: () => 0, cancelFrame() {} }, stageWrap: {}, state: { stickers: [] },
    stateV2: false, studio: false, type: "stickers", uiState: { videoTransport: {} }, videoEl,
  });
  media.connect({ requestDraw() {}, syncTimeline() {} });
  videoEl.calls.length = 0;
  media.disposeMediaSession();
  assert.equal(videoEl.getAttribute("src"), null);
  assert.deepEqual(videoEl.calls.slice(-2), ["remove src", "load"]);
});
