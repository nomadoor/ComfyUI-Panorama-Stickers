import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { diagnostics } from "../web_src/pano_diagnostics.js";
import { createEditorView } from "../web_src/pano_editor_view.js";
import { sameValue, visibleWindow } from "../web_src/pano_three_view.js";
import { readEditorSource } from "./editor_source.mjs";

const source = (name) => readFileSync(new URL(`../web_src/${name}`, import.meta.url), "utf8");
const editorSource = readEditorSource();
const editorFunction = (name) => editorSource.slice(editorSource.indexOf(`  function ${name}(`), editorSource.indexOf("\n  }\n", editorSource.indexOf(`  function ${name}(`)));

// A three.js view module whose views record what they are asked to do.
function fakeModule() {
  const views = [];
  return {
    views,
    createThreeView({ createCanvas }) {
      const canvas = createCanvas();
      const view = {
        canvas,
        renders: 0,
        disposed: [],
        render() {
          view.renders += 1;
          return { canvas, x: 0, y: 0, width: 1, height: 1 };
        },
        renderUnwrap: () => null,
        resize: (width, height) => ({ width, height }),
        clear() {},
        sceneBox: () => null,
        pick: () => null,
        pickSurface: () => null,
        pickSticker: () => null,
        gizmoPointer: () => null,
        contentRevision: () => 0,
        stats: () => ({}),
        dispose(options) {
          view.disposed.push(options ?? null);
        },
      };
      views.push(view);
      return view;
    },
  };
}

const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

test("a lost WebGL context is waited out without errors; its restore makes the view again and draws everything", async () => {
  const module = fakeModule();
  const canvas = new EventTarget();
  const calls = { ready: 0, restored: 0 };
  const errors = [];
  const consoleError = console.error;
  console.error = (...args) => errors.push(args);
  diagnostics.setEnabled(true);
  try {
    const editorView = createEditorView({
      canvas,
      onReady: () => { calls.ready += 1; },
      onFailed: () => assert.fail("the view loaded"),
      onRestored: () => { calls.restored += 1; },
      load: async () => module,
    });
    await flush();
    assert.equal(calls.ready, 1);
    assert.equal(editorView.ready, true);
    assert.ok(editorView.render({}));
    assert.equal(module.views[0].canvas, canvas, "the view draws on the stage's own canvas");

    const lost = new Event("webglcontextlost", { cancelable: true });
    canvas.dispatchEvent(lost);
    // The loss is prevented, or the browser would not restore the context.
    assert.equal(lost.defaultPrevented, true);
    assert.equal(editorView.lost, true);
    assert.equal(editorView.ready, false);
    // The view let go of its GPU resources without letting go of the context, and draws nothing.
    assert.deepEqual(module.views[0].disposed, [{ lost: true }]);
    assert.equal(editorView.render({}), null);
    assert.equal(editorView.pick({}, 0, 0, 1, 1), null);
    editorView.clear(0);
    assert.equal(module.views[0].renders, 1);

    canvas.dispatchEvent(new Event("webglcontextrestored"));
    await flush();
    assert.equal(module.views.length, 2, "a new view on the same canvas");
    assert.equal(module.views[1].canvas, canvas);
    assert.deepEqual(module.views[0].disposed, [{ lost: true }, null]);
    assert.equal(editorView.lost, false);
    assert.equal(editorView.ready, true);
    assert.equal(calls.restored, 1);
    assert.equal(calls.ready, 1);
    // The new view's content count goes on from the old one's, so a pick kept from before is not reused.
    assert.equal(editorView.contentRevision(), 1);
    assert.ok(editorView.render({}));
    assert.equal(module.views[1].renders, 1);

    // The diagnostics count one context made again, lost once and restored once, and one alive.
    const { webgl } = diagnostics.sample();
    assert.deepEqual({ created: webgl.created, lost: webgl.lost, restored: webgl.restored, disposed: webgl.disposed, alive: webgl.alive }, { created: 2, lost: 1, restored: 1, disposed: 1, alive: 1 });

    editorView.dispose();
    assert.deepEqual(module.views[1].disposed, [null]);
    // A closed editor no longer listens to its canvas.
    canvas.dispatchEvent(new Event("webglcontextlost", { cancelable: true }));
    canvas.dispatchEvent(new Event("webglcontextrestored"));
    await flush();
    assert.equal(module.views.length, 2);
    assert.deepEqual(errors, []);
  } finally {
    diagnostics.setEnabled(false);
    console.error = consoleError;
  }
});

test("a context lost before the view loaded makes the view once it is restored", async () => {
  const module = fakeModule();
  const canvas = new EventTarget();
  let release;
  const loaded = new Promise((resolve) => { release = resolve; });
  let ready = 0;
  let restored = 0;
  const editorView = createEditorView({ canvas, onReady: () => { ready += 1; }, onFailed() {}, onRestored: () => { restored += 1; }, load: () => loaded });
  canvas.dispatchEvent(new Event("webglcontextlost", { cancelable: true }));
  release(module);
  await flush();
  assert.equal(module.views.length, 0);
  assert.equal(ready, 0);
  canvas.dispatchEvent(new Event("webglcontextrestored"));
  await flush();
  assert.equal(module.views.length, 1);
  assert.equal(restored, 1);
  assert.equal(editorView.ready, true);
  editorView.dispose();
});

test("a view drawn into a rect draws only its part on the canvas, at the canvas's pixels", () => {
  // Inside the canvas: all of it.
  assert.deepEqual(visibleWindow({ x: 10, y: 20, w: 100, h: 50 }, 400, 300), { x: 10, y: 20, width: 100, height: 50, offsetX: 0, offsetY: 0 });
  // The Frame view's context reaches far past the canvas: only the canvas is drawn, as that window of the
  // whole view.
  assert.deepEqual(visibleWindow({ x: -1000, y: -500, w: 3000, h: 1600 }, 800, 600), { x: 0, y: 0, width: 800, height: 600, offsetX: 1000, offsetY: 500 });
  assert.deepEqual(visibleWindow({ x: 700, y: 550, w: 300, h: 300 }, 800, 600), { x: 700, y: 550, width: 100, height: 50, offsetX: 0, offsetY: 0 });
  assert.equal(visibleWindow({ x: 900, y: 0, w: 100, h: 100 }, 800, 600), null);
  // Fractional edges land on whole pixels, and the window keeps where they are in the view.
  assert.deepEqual(visibleWindow({ x: 10.4, y: 0, w: 99.2, h: 10 }, 800, 600), { x: 10, y: 0, width: 100, height: 10, offsetX: -0.40000000000000036, offsetY: 0 });
});

test("the World's content and lines are compared by value, not by a JSON key per frame", () => {
  assert.equal(sameValue([["a", { position: [1, 2, 3], quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 }]], [["a", { position: [1, 2, 3], quaternion: { x: 0, y: 0, z: 0, w: 1 }, scale: 1 }]]), true);
  assert.equal(sameValue([["a", { position: [1, 2, 3] }]], [["a", { position: [1, 2, 4] }]]), false);
  assert.equal(sameValue([1, 2], { 0: 1, 1: 2 }), false);
  assert.equal(sameValue(null, []), false);
  assert.equal(sameValue({ a: 1 }, { a: 1, b: undefined }), false);
  const view = source("pano_three_view.js");
  assert.doesNotMatch(view, /JSON\.stringify/);
  assert.match(view, /if \(sameValue\(cache\.sets, sets\)\) return cache\.lines;/);
});

test("the editor shows its three.js canvas as it is: nothing is copied to a 2D canvas", () => {
  // The stage's canvas in the page is the view's canvas.
  assert.match(editorSource, /const editorView = createEditorView\(\{\s*canvas: backgroundCanvas,/);
  assert.doesNotMatch(editorSource, /backgroundCanvas\.getContext/);
  // No frame of the view is drawn with drawImage anywhere in the editor.
  assert.doesNotMatch(editorSource, /drawImage\(surface\.canvas/);
  for (const name of ["renderEditorView", "drawEditorViewShot", "renderEditorViewUnwrap", "drawFrameViewBackground", "drawCutoutOutputPreview"]) {
    assert.doesNotMatch(editorFunction(name), /drawImage|getContext\("2d"\)/, name);
  }
  // The Frame view and the Unwrap view draw into their rect of the same canvas.
  assert.match(editorFunction("renderEditorViewUnwrap"), /editorView\.renderUnwrap\(\{ rect: deviceRect\(rect\), \.\.\.editorViewInput\(\) \}\)/);
  // The camera preview floats over the stage as its own element: its frame is drawn in a corner of the
  // same canvas and shown through an ImageBitmap (a GPU copy), not a 2D canvas.
  assert.match(editorSource, /createImageBitmap\(surface\.canvas, surface\.x, surface\.y, surface\.width, surface\.height\)/);
  assert.match(editorSource, /cutoutPreviewCanvas\.getContext\("bitmaprenderer"\)\?\.transferFromImageBitmap\(bitmap\);/);
  // The three.js canvas draws at the device's pixels; the overlay stays in CSS pixels.
  assert.match(editorFunction("syncCanvasSize"), /editorView\.resize\(size\.width, size\.height\);/);
  // A frame that only changes the overlay leaves the three.js canvas as the page shows it.
  assert.match(editorFunction("tickFrame"), /if \(\[\.\.\.reasons\]\.some\(\(reason\) => reason !== DRAW_REASON\.OVERLAY\)\) runtime\.backgroundDirty = true;/);
  assert.match(editorFunction("drawScene"), /const drawView = runtime\.backgroundDirty;/);
});

test("the editor asks the browser for frames only through its scheduler, and only while something animates", () => {
  assert.equal(editorSource.match(/requestAnimationFrame\(/g).length, 1);
  assert.match(editorSource, /requestAnimationFrame: \(callback\) => requestAnimationFrame\(callback\),\s*cancelAnimationFrame: \(id\) => cancelAnimationFrame\(id\),\s*draw: \(ts, reasons\) => tick\(ts, reasons\),\s*animating: \(\) => editorAnimating\(\),/);
  // tick no longer asks for the next frame by itself.
  assert.doesNotMatch(editorFunction("tick"), /requestAnimationFrame|rafId/);
  // The playback takes its frames from the scheduler, so the frame it moves to draws in the same frame.
  assert.match(editorSource, /requestFrame: \(callback\) => scheduler\.requestFrame\(callback\),\s*cancelFrame: \(id\) => scheduler\.cancelFrame\(id\),\s*\},\s*fps: playbackFps,/);
  const animating = editorFunction("editorAnimating");
  for (const what of ["editor.viewTransition", "viewController.state.inertia.active", "runtime.pendingStableLayoutFrames > 0", "isDragging()"]) {
    assert.ok(animating.includes(what), what);
  }
  assert.match(editorFunction("stopRenderLoop"), /scheduler\.stop\(\);/);
});

test("a draw request without a reason is a state change, which makes what is drawn from the state again", () => {
  assert.match(editorFunction("requestDraw"), /const reason = options\.reason \?\? DRAW_REASON\.STATE;/);
  assert.match(editorFunction("requestDraw"), /scheduler\.requestDraw\(reason\);/);
  assert.match(editorFunction("buildEditorViewInput"), /if \(editorViewScene\.revision !== scheduler\.stateRevision\) \{/);
  assert.match(editorSource, /if \(trajectory\.revision !== scheduler\.stateRevision \|\| trajectory\.span !== span\) \{/);
  assert.match(editorFunction("setTimelineFrame"), /requestDraw\(\{ reason: DRAW_REASON\.PLAYHEAD \}\);/);
  // The evaluated state is shared by the Sky layers and the World within a frame.
  const input = editorFunction("buildEditorViewInput");
  assert.equal(input.match(/evaluateSceneState\(/g).length, 1);
  assert.doesNotMatch(editorFunction("buildSpaceContent"), /evaluateSceneState\(/);
  // The Frame view's context is drawn over the stage's base, not cleared to transparent.
  assert.match(source("pano_three_view.js"), /if \(input\.clearColor != null\) renderer\.setClearColor\(new Color\(input\.clearColor\), 1\);\s*renderer\.render\(scene, camera\);/);
});

test("canvases draw at the device's pixels, but no larger than the screen shows", async () => {
  const { screenRenderSize } = await import("../web_src/pano_editor_view.js");
  const { measurePreviewCanvasSize } = await import("../web_src/pano_preview_node_surface.js");
  // Within the screen: CSS size x devicePixelRatio, nothing lost.
  assert.deepEqual(screenRenderSize(800, 450, 2, 1920, 1080), { width: 1600, height: 900 });
  // A node surface on a graph zoomed in 4x at dpr 2 on a 1920 x 1080 window: it shows only the screen.
  assert.deepEqual(screenRenderSize(3200, 1600, 2, 1920, 1080), { width: 3840, height: 1920 });
  assert.deepEqual(measurePreviewCanvasSize({ width: 3200, height: 1600 }, 2, Infinity, { width: 1920, height: 1080 }), { width: 3840, height: 1920 });
  assert.deepEqual(measurePreviewCanvasSize({ width: 800, height: 450 }, 2, Infinity, { width: 1920, height: 1080 }), { width: 1600, height: 900 });
  assert.match(editorFunction("syncCanvasSize"), /screenRenderSize\(rect\.width \|\| nextW, rect\.height \|\| nextH, dpr, window\.innerWidth \|\| rect\.width, window\.innerHeight \|\| rect\.height\)/);
  assert.match(source("pano_preview_previewnode.js"), /measurePreviewCanvasSize\(rect, window\.devicePixelRatio \|\| 1, Infinity, \{ width: window\.innerWidth, height: window\.innerHeight \}\)/);
});

test("whatever editorAnimating() reads is started through startAnimation, which wakes the frames", () => {
  assert.match(editorFunction("startAnimation"), /start\(\);\s*scheduler\.wake\(\);/);
  // Each condition of editorAnimating() and where it starts: none is set outside startAnimation.
  const starts = [
    /runtime\.pendingStableLayoutFrames = Math\.max\(/g,
    /editor\.outputPreviewAnimTo = nextExpanded/g,
    /viewController\.endDrag\(/g,
  ];
  for (const pattern of starts) {
    const found = [...editorSource.matchAll(pattern)];
    assert.ok(found.length > 0, String(pattern));
    for (const match of found) {
      // Inside the callback of the nearest startAnimation before it.
      const start = editorSource.lastIndexOf("startAnimation(() =>", match.index);
      assert.ok(start >= 0 && match.index - start < 300, `${pattern} at ${match.index}`);
      assert.doesNotMatch(editorSource.slice(start, match.index), /\n\s*\}\);|\)\);/, `${pattern} at ${match.index}`);
    }
  }
  // The stage resizing holds the draw for the layout and wakes the frames that count it down.
  assert.match(editorFunction("syncCanvasSize"), /startAnimation\(\(\) => \{\s*runtime\.pendingStableLayoutFrames = Math\.max/);
  // A drag (editor.interaction, timeline.drag) starts on a pointerdown, which wakes the frames first.
  assert.match(editorSource, /root\.addEventListener\("pointerdown", \(\) => scheduler\.wake\(\), true\);/);
  // The fades start inside tickFrame, a frame that then sees editorAnimating() and goes on.
  for (const fade of ["frameRollOverlayTarget = ", "cutoutPanoDimTarget = ", "cutoutPanoFrameTarget = "]) {
    const index = editorSource.indexOf(`editor.${fade}`);
    assert.ok(index > editorSource.indexOf("  function tickFrame(") && index < editorSource.indexOf("  function runGuardedFrame("), fade);
  }
  // The camera preview hidden draws its frame anew when it shows again.
  assert.match(editorFunction("drawCutoutOutputPreview"), /uiState\.cameraPreview\.settled = false;\s*dropCameraPreview\(\);\s*return;/);
  assert.match(editorFunction("dropCameraPreview"), /cameraPreviewDrawn = null;/);
});

test("a Keyframe or Clip range drag draws the state it changed: the view's state is made again", async () => {
  const { loadSceneState } = await import("../web_src/pano_scene_state.js");
  const { evaluateSceneState } = await import("../web_src/pano_scene_eval.js");
  const { moveKeyframes } = await import("../web_src/pano_timeline.js");
  const state = loadSceneState({
    version: 2,
    stickers: [{
      id: "s1",
      placement: "sky",
      source: { kind: "file", filename: "a.png" },
      opacity: { value: 1, keyframes: [{ frame: 0, value: 0 }, { frame: 10, value: 1 }] },
    }],
  });
  const before = loadSceneState(state);
  moveKeyframes(state.stickers[0], ["opacity"], [10], 10, 0);
  // The state drawn before the drag still shows the old value at the playhead; a state rebuilt from the
  // dragged one shows the new.
  assert.notEqual(evaluateSceneState(before, 10).stickers[0].opacity, evaluateSceneState(loadSceneState(state), 10).stickers[0].opacity);
  // The drag's batched view task asks with the state's reason, which counts runtime.stateRevision, and the
  // view's state is rebuilt on that count.
  const tasks = editorSource.slice(editorSource.indexOf("const dragFrames = createFrameBatch({"), editorSource.indexOf("\n  });\n", editorSource.indexOf("const dragFrames = createFrameBatch({")));
  assert.match(tasks, /requestDraw\(\{ localOnly: true, reason: DRAW_REASON\.STATE \}\);/);
  assert.match(editorFunction("buildEditorViewInput"), /if \(editorViewScene\.revision !== scheduler\.stateRevision\) \{/);
  assert.doesNotMatch(editorSource, /scheduler\.requestDraw\(DRAW_REASON\.VIEW\);\s*\},\s*sidePanel/);
});
