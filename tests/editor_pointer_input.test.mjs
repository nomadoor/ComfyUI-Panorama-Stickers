// Characterization tests of the stage canvas's pointer input (web_src/editor/pointer_input.js and the
// gesture modules it dispatches to, every web_src/editor/pointer_*.js): which gesture a press starts,
// what a move writes, and how the gesture ends. They pin the behavior as it is, branch by branch, so the
// gesture code can be moved without changing what it does.
//
// The pointer modules are made for real and connected to each other; every other name they take through
// connect() is a recording stub (configurable per test), and the values showEditor gives them are plain
// objects whose methods record their calls too.
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import test from "node:test";

import { newStudioCamera, newWorldSceneSticker, setWorldStickerTransform } from "../web_src/pano_editor_state.js";
import { DRAW_REASON } from "../web_src/pano_frame_scheduler.js";
import { evaluateSticker } from "../web_src/pano_scene_eval.js";
import { gizmoDragLanes, initialSpaceView } from "../web_src/pano_space.js";
import { panCutoutShotByScreenDelta } from "../web_src/pano_cutout_node_surface.js";
import { deriveCutoutAspectLabelFromFov } from "../web_src/pano_cutout_view_math.js";
import { VIEW_CONTROL_PRESETS } from "../web_src/pano_view_controls.js";
import { RAD2DEG } from "../web_src/editor/constants.js";
import { dirToYawPitch } from "../web_src/editor/helpers.js";

const EDITOR_DIR = new URL("../web_src/editor/", import.meta.url);
const FACTORIES = [];
for (const file of readdirSync(EDITOR_DIR).filter((name) => /^pointer_\w+\.js$/.test(name)).sort()) {
  const module = await import(new URL(file, EDITOR_DIR));
  for (const [name, value] of Object.entries(module)) {
    if (/^create[A-Z]\w*$/.test(name) && typeof value === "function") FACTORIES.push(value);
  }
}

const isNum = (value) => typeof value === "number" && Number.isFinite(value);

// The connect() names that only read (positions, geometry, flags, lists). effects() leaves them out, so a
// test pins what a handler does, not how often it asks.
const QUERIES = new Set([
  "screenPos", "screenPosCss", "currentSpaceCamera", "objectGeom", "getList", "isFreeFrameView", "isFreeSpaceView",
  "isSpaceView", "getActiveCutoutShot", "getFrameViewRect", "getSelectedItems", "getSelected", "isStickerItem",
  "isStrokeGroupItem", "isRasterObjectItem", "isItemLocked", "isShotItem", "isSceneSticker", "poseOf",
  "getPaintingGroupList", "getActivePaintTargetDescriptor", "rectFromPoints", "rectIntersectsGeom",
  "getSelectableStrokeGroupItems", "getSelectableRasterObjectItems", "getCutoutSelectableItemsForHit",
  "getCutoutSelectableItems", "editorViewInput", "viewControls", "isCameraSelected",
]);

// The pointer input with fake deps. `api` overrides the connect() names (a function is the stub's
// implementation, anything else is returned as is), `deps` the values showEditor gives, `editor` fields of
// the editor object.
function harness({ api = {}, deps = {}, editor: editorFields = {}, wheelApplies = false } = {}) {
  const log = [];
  const record = (name, impl) => (...args) => {
    log.push({ name, args });
    return impl ? impl(...args) : undefined;
  };
  const paintEngine = {
    beginStroke: record("paintEngine.beginStroke"),
    ensureTarget: record("paintEngine.ensureTarget", () => "engine-target"),
    appendStrokePoint: record("paintEngine.appendStrokePoint"),
    updateActiveStroke: record("paintEngine.updateActiveStroke"),
    cancelActiveStroke: record("paintEngine.cancelActiveStroke"),
    commitActiveStroke: record("paintEngine.commitActiveStroke"),
  };
  const editor = {
    mode: "pano",
    primaryTool: "cursor",
    paintTool: "brush",
    maskTool: "brush",
    interaction: null,
    selectedId: null,
    worldSelectedId: null,
    pointerPos: { x: 1, y: 2 },
    frame: 0,
    gizmoAxis: null,
    cutoutAspectOpen: true,
    paintEngine,
    ...editorFields,
  };
  const values = {
    canvas: { width: 800, height: 400, setPointerCapture: record("canvas.setPointerCapture") },
    dragFrames: { request: record("dragFrames.request") },
    editor,
    editorView: {
      gizmoPointer: record("editorView.gizmoPointer", api.gizmoPointer),
      pickSticker: record("editorView.pickSticker", api.pickSticker),
    },
    node: { setDirtyCanvas: record("node.setDirtyCanvas") },
    paintColorPop: null,
    readOnly: false,
    runtime: { backgroundDirty: false },
    sceneV2: false,
    shotEditor: false,
    state: { ui_settings: {} },
    stateV2: false,
    timeline: { selection: null },
    type: "stickers",
    viewController: {
      state: { inertia: { active: true, vx: 3, vy: 4 } },
      startDrag: record("viewController.startDrag"),
      moveDrag: record("viewController.moveDrag"),
      endDrag: record("viewController.endDrag"),
      applyWheelEvent: record("viewController.applyWheelEvent", () => wheelApplies),
    },
    ...deps,
  };
  const defaults = {
    screenPos: (e) => ({ x: e.x, y: e.y }),
    screenPosCss: (e) => ({ x: e.x / 2, y: e.y / 2 }),
    setPointerPos: () => true,
    viewControls: () => VIEW_CONTROL_PRESETS.default,
    isFreeSpaceView: () => false,
    isFreeFrameView: () => false,
    isSpaceView: () => false,
    cameraShoots: () => false,
    getSelectedItems: () => [],
    getSelected: () => null,
    objectGeom: (item) => item?.geom ?? null,
    handleHit: () => ({ kind: "none" }),
    hitObjectAt: () => null,
    isItemLocked: (item) => item?.locked === true,
    isStickerItem: (item) => item?.kind === "sticker",
    isStrokeGroupItem: (item) => item?.kind === "stroke",
    isRasterObjectItem: (item) => item?.kind === "raster",
    isShotItem: (item) => item?.kind === "shot",
    isSceneSticker: () => false,
    poseOf: (item) => item?.pose ?? {},
    parseRasterObjectSelectionId: (id) => String(id).replace(/^raster:/, ""),
    getRasterObjectList: () => [],
    getStrokeGroupStrokes: (id, layerKind) => [{ id: `${id}-stroke`, layerKind }],
    ensureGroupFrame: (id, layerKind) => ({ id, layerKind, frame: true }),
    getStrokeGroupCenterUv: (id) => ({ u: 0.25, v: 0.5, id }),
    getRasterObjectCenterUv: (item) => ({ u: 0.75, v: 0.5, id: item.id }),
    getActiveCutoutShot: () => null,
    getFrameViewRect: () => null,
    paintingShown: () => true,
    supportsErpPainting: () => true,
    supportsFramePainting: () => false,
    screenPosToErpPoint: (p) => ({ u: p.x / 1000, v: p.y / 1000 }),
    screenToWorldDir: () => ({ x: 0, y: 0, z: 1 }),
    screenPosToFrameAsErpPoint: (p) => ({ u: p.x / 2000, v: p.y / 2000 }),
    buildFreehandStrokeRecord: (...args) => ({ built: "freehand", args, actionGroupId: "g1", toolKind: args[1] }),
    buildLassoFillStrokeRecord: (...args) => ({ built: "lasso", args, actionGroupId: "g1", toolKind: args[1] }),
    getActivePaintTargetDescriptor: () => "target-descriptor",
    editorViewInput: () => ({}),
    startCameraPress: () => false,
    stickerById: () => null,
    getList: () => [],
    getPaintingGroupList: () => [],
    getCutoutSelectableItems: () => [],
    getCutoutSelectableItemsForHit: () => [],
    getSelectableStrokeGroupItems: () => [],
    getSelectableRasterObjectItems: () => [],
    rectFromPoints: (a, b) => ({ a, b }),
    rectIntersectsGeom: () => false,
    startAnimation: (fn) => fn(),
    cancelFrameCameraGesture: () => false,
    shortestWrappedDelta: (a, b) => a - b,
    currentSpaceCamera: () => "space-camera",
    playback: { playing: false, stop: record("playback.stop") },
  };
  const impls = { ...defaults, ...api };
  const real = {};
  const stubs = {};
  const connected = new Proxy({}, {
    get(_, name) {
      if (Object.hasOwn(real, name)) return real[name];
      if (!Object.hasOwn(stubs, name)) {
        const impl = impls[name];
        stubs[name] = impl !== undefined && typeof impl !== "function" ? impl : record(name, impl);
      }
      return stubs[name];
    },
  });
  const modules = FACTORIES.map((create) => create(values));
  for (const { connect, ...exports } of modules) Object.assign(real, exports);
  for (const module of modules) module.connect(connected);
  const h = {
    ...real,
    log,
    editor,
    values,
    calls: (name) => log.filter((entry) => entry.name === name).map((entry) => entry.args),
    // The names of the calls that are not QUERIES, in order.
    effects: () => log.filter((entry) => !QUERIES.has(entry.name)).map((entry) => entry.name),
    called: (name) => log.some((entry) => entry.name === name),
    // The names of the calls among `names`, in the order they were made.
    sequence: (...names) => log.filter((entry) => names.includes(entry.name)).map((entry) => entry.name),
    clear: () => { log.length = 0; },
    event: ({ x = 100, y = 50, button = 0, pointerId = 7, ...rest } = {}) => ({
      x, y, button, pointerId,
      ctrlKey: false, metaKey: false, altKey: false, shiftKey: false,
      preventDefault: record("e.preventDefault"),
      ...rest,
    }),
  };
  return h;
}

const sticker = (id, extra = {}) => ({
  id, kind: "sticker",
  pose: { yaw_deg: 10, pitch_deg: 5, hFOV_deg: 30, vFOV_deg: 20, rot_deg: 15 },
  geom: { visible: true, center: { x: 60, y: 40 } },
  ...extra,
});
const strokeGroup = (id, extra = {}) => ({
  id, kind: "stroke", actionGroupId: `${id}-group`, layerKind: "paint",
  geom: { visible: true, center: { x: 70, y: 30 } },
  ...extra,
});
const raster = (id, extra = {}) => ({
  id: `raster:${id}`, rasterObjectId: `raster:${id}`, kind: "raster",
  pose: { yaw_deg: 1, pitch_deg: 2, hFOV_deg: 40, vFOV_deg: 30, rot_deg: 0, roll_deg: 25 },
  geom: { visible: true, center: { x: 90, y: 20 } },
  ...extra,
});
const rasterList = (id) => [{ id: "other" }, { id, w: 3 }];

// ---------------------------------------------------------------- pointerdown: before the tools

test("a press clears the Timeline selection, records the pointer and stops the view's inertia and transition", () => {
  const h = harness({ deps: { timeline: { selection: { id: "k" } } } });
  h.onCanvasPointerDown(h.event({ button: 2 }));
  assert.equal(h.values.timeline.selection, null);
  assert.equal(h.calls("syncTimeline").length, 1);
  assert.deepEqual(h.calls("setPointerPos"), [[{ x: 100, y: 50 }, true]]);
  assert.equal(h.calls("cancelViewTransition").length, 1);
  assert.deepEqual(h.values.viewController.state.inertia, { active: false, vx: 0, vy: 0 });
  assert.deepEqual(h.sequence("syncTimeline", "setPointerPos", "cancelViewTransition"), ["syncTimeline", "setPointerPos", "cancelViewTransition"]);
});

test("a press without a Timeline selection does not sync the Timeline", () => {
  const h = harness();
  h.onCanvasPointerDown(h.event({ button: 2 }));
  assert.equal(h.called("syncTimeline"), false);
});

test("in 6DoF a binding of the 3D view controls moves the view: pan and orbit go to startSpaceDrag", () => {
  for (const [button, shiftKey, action] of [[1, false, "pan"], [2, false, "orbit"], [2, true, "pan"]]) {
    const h = harness({ api: { isFreeSpaceView: () => true } });
    h.onCanvasPointerDown(h.event({ button, shiftKey, pointerId: 3 }));
    assert.deepEqual(h.calls("startSpaceDrag"), [[action, { x: 100, y: 50 }, 3]]);
    assert.equal(h.calls("e.preventDefault").length, 1);
    assert.equal(h.editor.interaction, null);
  }
});

test("in 6DoF a look binding looks around from the CSS position", () => {
  const h = harness({ api: { isFreeSpaceView: () => true, viewControls: () => VIEW_CONTROL_PRESETS.unity } });
  h.onCanvasPointerDown(h.event({ button: 2, pointerId: 4 }));
  const it = h.editor.interaction;
  assert.equal(it.kind, "view");
  assert.deepEqual(it.last, { x: 50, y: 25 });
  assert.ok(isNum(it.lastTs));
  const [start] = h.calls("viewController.startDrag");
  assert.deepEqual(start.slice(0, 3), [50, 25, 4]);
  assert.deepEqual(h.calls("updateCursor"), [[{ x: 100, y: 50 }]]);
  assert.deepEqual(h.calls("canvas.setPointerCapture"), [[4]]);
  assert.equal(h.calls("e.preventDefault").length, 1);
  assert.equal(h.called("startSpaceDrag"), false);
});

test("in the Frame view with World content a look binding turns the Camera, the others drag the Frame view", () => {
  let h = harness({ api: { isFreeFrameView: () => true, viewControls: () => VIEW_CONTROL_PRESETS.unity } });
  h.onCanvasPointerDown(h.event({ button: 2, pointerId: 5 }));
  assert.deepEqual(h.calls("startPanFrame"), [[{ x: 100, y: 50 }, 5]]);
  assert.equal(h.called("startFrameDrag"), false);
  assert.equal(h.calls("e.preventDefault").length, 1);

  h = harness({ api: { isFreeFrameView: () => true } });
  h.onCanvasPointerDown(h.event({ button: 2, pointerId: 5 }));
  assert.deepEqual(h.calls("startFrameDrag"), [["orbit", { x: 100, y: 50 }, 5]]);
  h = harness({ api: { isFreeFrameView: () => true, isFreeSpaceView: () => true } });
  h.onCanvasPointerDown(h.event({ button: 1, pointerId: 5 }));
  assert.deepEqual(h.calls("startFrameDrag"), [["pan", { x: 100, y: 50 }, 5]]);
  assert.equal(h.called("startSpaceDrag"), false);
});

test("in 6DoF a non-left button without a binding does nothing but prevent the default", () => {
  for (const flags of [{ isFreeSpaceView: () => true }, { isFreeFrameView: () => true }]) {
    const h = harness({ api: { ...flags, viewControls: () => VIEW_CONTROL_PRESETS.blender }, editor: { mode: "frame" } });
    h.onCanvasPointerDown(h.event({ button: 2 }));
    assert.equal(h.calls("e.preventDefault").length, 1);
    assert.equal(h.editor.interaction, null);
    assert.equal(h.called("viewController.startDrag"), false);
    assert.equal(h.called("hitObjectAt"), false);
  }
});

test("in 6DoF Ctrl leaves a press to the tools", () => {
  const h = harness({ api: { isFreeSpaceView: () => true } });
  h.onCanvasPointerDown(h.event({ button: 0, ctrlKey: true }));
  assert.equal(h.editor.interaction.kind, "marquee_select");
});

test("the middle button pans the active Camera's shot in the Frame view", () => {
  const shot = { yaw_deg: 12, pitch_deg: -3 };
  const h = harness({ api: { getActiveCutoutShot: () => shot }, editor: { mode: "frame" } });
  h.onCanvasPointerDown(h.event({ button: 1, pointerId: 9 }));
  assert.deepEqual(h.editor.interaction, {
    kind: "pan_frame", shot, last: { x: 100, y: 50 }, start: { yaw_deg: 12, pitch_deg: -3 }, changed: false,
  });
  assert.deepEqual(h.calls("updateCursor"), [[{ x: 100, y: 50 }]]);
  assert.deepEqual(h.calls("canvas.setPointerCapture"), [[9]]);
  assert.equal(h.calls("e.preventDefault").length, 1);
  assert.equal(h.called("startPanFrame"), false);
});

test("the middle button in the Frame view does nothing without a shot, read-only, or on a locked shot", () => {
  for (const [shot, readOnly] of [[null, false], [{ yaw_deg: 1 }, true], [{ yaw_deg: 1, locked: true }, false]]) {
    const h = harness({ api: { getActiveCutoutShot: () => shot }, deps: { readOnly }, editor: { mode: "frame" } });
    h.onCanvasPointerDown(h.event({ button: 1 }));
    assert.equal(h.editor.interaction, null);
    assert.equal(h.calls("e.preventDefault").length, 1);
    assert.equal(h.called("canvas.setPointerCapture"), false);
    assert.equal(h.called("updateCursor"), false);
  }
});

test("the middle button looks around: from the CSS position in the panorama, the canvas position in Unwrap", () => {
  for (const [mode, last] of [["pano", { x: 50, y: 25 }], ["unwrap", { x: 100, y: 50 }]]) {
    const h = harness({ editor: { mode } });
    h.onCanvasPointerDown(h.event({ button: 1, pointerId: 2 }));
    assert.equal(h.editor.interaction.kind, "view");
    assert.deepEqual(h.editor.interaction.last, last);
    assert.deepEqual(h.calls("viewController.startDrag")[0].slice(0, 3), [last.x, last.y, 2]);
    assert.deepEqual(h.calls("canvas.setPointerCapture"), [[2]]);
    assert.deepEqual(h.calls("updateCursor"), [[{ x: 100, y: 50 }]]);
  }
});

test("other buttons do nothing outside 6DoF", () => {
  const h = harness();
  h.onCanvasPointerDown(h.event({ button: 2 }));
  assert.equal(h.editor.interaction, null);
  assert.equal(h.called("e.preventDefault"), false);
  assert.equal(h.called("hitObjectAt"), false);
  assert.equal(h.called("clearSelection"), false);
});

// ---------------------------------------------------------------- pointerdown: Frame view

test("Alt in the Frame view starts a roll of the shot", () => {
  const shot = { roll_deg: 7 };
  const rect = { x: 0, y: 0, w: 200, h: 100 };
  const h = harness({ api: { getActiveCutoutShot: () => shot, getFrameViewRect: () => rect }, editor: { mode: "frame" } });
  h.onCanvasPointerDown(h.event({ altKey: true, x: 150, y: 20, pointerId: 6 }));
  const it = h.editor.interaction;
  assert.equal(it.kind, "roll_frame");
  assert.equal(it.shot, shot);
  assert.deepEqual(it.center, { x: 100, y: 50 });
  assert.equal(it.lastAngle, Math.atan2(20 - 50, 150 - 100));
  assert.equal(it.accumulatedRad, 0);
  assert.equal(it.rollGesture.source, "alt");
  assert.equal(it.rollGesture.startRollDeg, 7);
  assert.deepEqual(it.start, { roll_deg: 7 });
  assert.equal(it.changed, false);
  assert.equal(it.altStarted, true);
  assert.equal(it.source, "alt");
  assert.deepEqual(h.calls("canvas.setPointerCapture"), [[6]]);
  assert.deepEqual(h.sequence("canvas.setPointerCapture", "e.preventDefault", "syncFrameRollKnob", "requestDraw"),
    ["canvas.setPointerCapture", "e.preventDefault", "syncFrameRollKnob", "requestDraw"]);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true }]]);
});

test("Shift in the Frame view rolls from rot_deg outside the dead zone, and nothing inside it", () => {
  const shot = { rot_deg: 4 };
  const rect = { x: 0, y: 0, w: 200, h: 100 };
  let h = harness({ api: { getActiveCutoutShot: () => shot, getFrameViewRect: () => rect }, editor: { mode: "frame" } });
  h.onCanvasPointerDown(h.event({ shiftKey: true, x: 10, y: 10 }));
  assert.equal(h.editor.interaction.source, "shift");
  assert.equal(h.editor.interaction.altStarted, false);
  assert.deepEqual(h.editor.interaction.start, { roll_deg: 4 });

  h = harness({ api: { getActiveCutoutShot: () => shot, getFrameViewRect: () => rect }, editor: { mode: "frame" } });
  h.onCanvasPointerDown(h.event({ shiftKey: true, x: 101, y: 50 }));
  assert.equal(h.editor.interaction, null);
  assert.equal(h.called("startPanFrame"), false);
  assert.equal(h.called("canvas.setPointerCapture"), false);
});

test("a roll in the Frame view needs a shot, an unlocked shot and its rect", () => {
  for (const [shot, rect] of [[null, { x: 0, y: 0, w: 10, h: 10 }], [{ locked: true }, { x: 0, y: 0, w: 10, h: 10 }], [{}, null]]) {
    const h = harness({ api: { getActiveCutoutShot: () => shot, getFrameViewRect: () => rect }, editor: { mode: "frame" } });
    h.onCanvasPointerDown(h.event({ altKey: true }));
    assert.equal(h.editor.interaction, null);
    assert.deepEqual(h.calls("getFrameViewRect"), [[shot]]);
    assert.equal(h.called("startPanFrame"), false);
  }
});

test("read-only, Alt in the Frame view pans with the cursor tool instead of rolling", () => {
  const h = harness({ deps: { readOnly: true }, editor: { mode: "frame" } });
  h.onCanvasPointerDown(h.event({ altKey: true, pointerId: 8 }));
  assert.deepEqual(h.calls("startPanFrame"), [[{ x: 100, y: 50 }, 8]]);
  assert.equal(h.called("getFrameViewRect"), false);
});

test("the cursor tool's left press in the Frame view turns the Camera", () => {
  const h = harness({ editor: { mode: "frame" } });
  h.onCanvasPointerDown(h.event({ pointerId: 8 }));
  assert.deepEqual(h.calls("startPanFrame"), [[{ x: 100, y: 50 }, 8]]);
  assert.deepEqual(h.sequence("startPanFrame", "e.preventDefault"), ["startPanFrame", "e.preventDefault"]);
  assert.equal(h.called("hitObjectAt"), false);
});

// ---------------------------------------------------------------- pointerdown: read-only, color popover

test("read-only, a left press looks around in the panorama and does nothing elsewhere", () => {
  let h = harness({ deps: { readOnly: true }, editor: { primaryTool: "paint" } });
  h.onCanvasPointerDown(h.event({ pointerId: 3 }));
  assert.equal(h.editor.interaction.kind, "view");
  assert.deepEqual(h.editor.interaction.last, { x: 50, y: 25 });
  assert.deepEqual(h.calls("viewController.startDrag")[0].slice(0, 3), [50, 25, 3]);
  assert.deepEqual(h.calls("canvas.setPointerCapture"), [[3]]);
  assert.equal(h.called("stopTimelinePlayback"), false);
  assert.equal(h.called("clearSelection"), false);

  h = harness({ deps: { readOnly: true }, editor: { mode: "unwrap" } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.editor.interaction, null);
  assert.equal(h.called("viewController.startDrag"), false);
});

test("read-only in 6DoF, a left press does what the preset's emptyLeft does, or nothing", () => {
  let h = harness({ deps: { readOnly: true }, api: { isFreeSpaceView: () => true } });
  h.onCanvasPointerDown(h.event({ pointerId: 3 }));
  assert.deepEqual(h.calls("startSpaceDrag"), [["orbit", { x: 100, y: 50 }, 3]]);
  assert.equal(h.editor.interaction, null);

  h = harness({ deps: { readOnly: true }, api: { isFreeSpaceView: () => true, viewControls: () => VIEW_CONTROL_PRESETS.blender } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.called("startSpaceDrag"), false);
  assert.equal(h.called("viewController.startDrag"), false);
});

test("an open paint color popover takes the press", () => {
  const h = harness({ deps: { paintColorPop: { hidden: false } }, editor: { primaryTool: "paint" } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.editor.interaction, null);
  assert.equal(h.called("stopTimelinePlayback"), false);
  assert.equal(h.called("hitObjectAt"), false);
  assert.equal(h.called("clearSelection"), false);
});

test("a hidden paint color popover leaves the press to the tool", () => {
  const h = harness({ deps: { paintColorPop: { hidden: true } }, editor: { primaryTool: "paint" } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.editor.interaction.kind, "paint_stroke");
});

// ---------------------------------------------------------------- pointerdown: paint

test("a paint press stops playback and starts a freehand stroke seeded into the engine", () => {
  const h = harness({ editor: { primaryTool: "paint", paintTool: "brush" } });
  h.onCanvasPointerDown(h.event({ x: 200, y: 100, pointerId: 11 }));
  const it = h.editor.interaction;
  assert.equal(it.kind, "paint_stroke");
  assert.equal(it.layerKind, "paint");
  assert.match(it._livePreviewToken, /^live_/);
  assert.deepEqual(it.stroke.args, ["paint", "brush", [{ u: 0.2, v: 0.1 }], { kind: "ERP_GLOBAL" }]);
  assert.equal(it.stroke.built, "freehand");
  assert.deepEqual(h.calls("getActivePaintTargetDescriptor"), [[it]]);
  assert.deepEqual(h.calls("paintEngine.beginStroke"), [[it.stroke, "target-descriptor"]]);
  assert.deepEqual(h.calls("paintEngine.ensureTarget"), [["target-descriptor"]]);
  assert.deepEqual(h.calls("paintEngine.appendStrokePoint"), [["engine-target", 0.2, 0.1, it.stroke]]);
  assert.equal(h.called("paintEngine.updateActiveStroke"), false);
  assert.deepEqual(h.sequence("stopTimelinePlayback", "invalidateLivePaintPreviewCaches", "paintEngine.beginStroke", "updateCursor", "canvas.setPointerCapture", "requestDraw"),
    ["stopTimelinePlayback", "invalidateLivePaintPreviewCaches", "paintEngine.beginStroke", "updateCursor", "canvas.setPointerCapture", "requestDraw"]);
  assert.deepEqual(h.calls("canvas.setPointerCapture"), [[11]]);
  assert.deepEqual(h.calls("requestDraw"), [[]]);
  assert.equal(h.called("hitObjectAt"), false);
});

test("a mask press with the lasso fill starts a lasso fill drawn in full", () => {
  const h = harness({ editor: { primaryTool: "mask", maskTool: "lasso_fill", paintTool: "brush" } });
  h.onCanvasPointerDown(h.event({ x: 200, y: 100 }));
  const it = h.editor.interaction;
  assert.equal(it.kind, "paint_lasso_fill");
  assert.equal(it.layerKind, "mask");
  assert.equal(it.stroke.built, "lasso");
  assert.deepEqual(it.stroke.args, ["mask", "lasso_fill", [{ u: 0.2, v: 0.1 }], { kind: "ERP_GLOBAL" }]);
  assert.deepEqual(h.calls("paintEngine.updateActiveStroke"), [[it.stroke, "target-descriptor"]]);
  assert.equal(h.called("paintEngine.appendStrokePoint"), false);
});

test("a mask press with a brush tool is a stroke on the mask layer", () => {
  const h = harness({ editor: { primaryTool: "mask", maskTool: "eraser", paintTool: "lasso_fill" } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.editor.interaction.kind, "paint_stroke");
  assert.deepEqual(h.editor.interaction.stroke.args.slice(0, 2), ["mask", "eraser"]);
});

test("a paint press without a target descriptor starts the stroke without the engine", () => {
  const h = harness({ editor: { primaryTool: "paint" }, api: { getActivePaintTargetDescriptor: () => null } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.editor.interaction.kind, "paint_stroke");
  assert.equal(h.called("paintEngine.beginStroke"), false);
  assert.equal(h.called("canvas.setPointerCapture"), true);
});

test("a paint press in the Frame view takes its point through the active shot", () => {
  const shot = { id: "shot" };
  const h = harness({
    editor: { primaryTool: "paint", mode: "frame" },
    deps: { readOnly: false },
    api: { supportsFramePainting: () => true, supportsErpPainting: () => false, getActiveCutoutShot: () => shot },
  });
  // The cursor tool's Frame press pans; the paint tool's does not.
  h.onCanvasPointerDown(h.event({ x: 200, y: 100 }));
  const [args] = h.calls("screenPosToFrameAsErpPoint");
  assert.deepEqual(args.slice(0, 2), [{ x: 200, y: 100 }, shot]);
  assert.ok(isNum(args[2]));
  assert.equal(h.called("screenPosToErpPoint"), false);
  assert.deepEqual(h.editor.interaction.stroke.args[2], [{ u: 0.1, v: 0.05 }]);
});

test("a paint press in the Frame view without Frame painting takes its point from the panorama", () => {
  const h = harness({ editor: { primaryTool: "paint", mode: "frame" }, api: { getActiveCutoutShot: () => ({}) } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.called("screenPosToFrameAsErpPoint"), false);
  assert.equal(h.calls("screenPosToErpPoint").length, 1);
});

test("a hidden painting takes no strokes", () => {
  const h = harness({ editor: { primaryTool: "paint" }, api: { paintingShown: () => false } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.editor.interaction, null);
  assert.equal(h.called("stopTimelinePlayback"), false);
  assert.equal(h.called("hitObjectAt"), false);
  assert.equal(h.called("updateCursor"), false);
});

test("a paint press off the panorama stops playback and only updates the cursor", () => {
  const h = harness({ editor: { primaryTool: "paint" }, api: { screenPosToErpPoint: () => null } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.editor.interaction, null);
  assert.equal(h.calls("stopTimelinePlayback").length, 1);
  assert.deepEqual(h.calls("updateCursor"), [[{ x: 100, y: 50 }]]);
  assert.equal(h.called("buildFreehandStrokeRecord"), false);
  assert.equal(h.called("canvas.setPointerCapture"), false);
});

test("the paint tool where painting is not supported falls through to selection", () => {
  const h = harness({ editor: { primaryTool: "paint" }, api: { supportsErpPainting: () => false } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.called("stopTimelinePlayback"), false);
  assert.equal(h.calls("hitObjectAt").length, 1);
  assert.equal(h.calls("clearSelection").length, 1);
});

// ---------------------------------------------------------------- pointerdown: marquee, Camera, world Sticker

test("Ctrl or Meta with the cursor tool starts a marquee selection", () => {
  for (const mod of [{ ctrlKey: true }, { metaKey: true }]) {
    const h = harness({ api: { getSelectedItems: () => [sticker("a")], getSelected: () => sticker("a"), handleHit: () => ({ kind: "move" }) } });
    h.onCanvasPointerDown(h.event({ ...mod, pointerId: 12 }));
    assert.deepEqual(h.editor.interaction, { kind: "marquee_select", start: { x: 100, y: 50 }, current: { x: 100, y: 50 } });
    assert.deepEqual(h.calls("canvas.setPointerCapture"), [[12]]);
    assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.OVERLAY }]]);
    assert.equal(h.called("handleHit"), false);
    assert.equal(h.called("hitObjectAt"), false);
  }
});

test("Ctrl with another tool is not a marquee", () => {
  const h = harness({ editor: { primaryTool: "hand" } });
  h.onCanvasPointerDown(h.event({ ctrlKey: true }));
  assert.equal(h.editor.interaction?.kind, "view");
});

test("in 6DoF a press the Camera takes ends there; one it does not take goes on", () => {
  let h = harness({ api: { cameraShoots: () => true, isFreeSpaceView: () => true, startCameraPress: () => true } });
  const e = h.event();
  h.onCanvasPointerDown(e);
  assert.deepEqual(h.calls("startCameraPress"), [[e, { x: 100, y: 50 }]]);
  assert.equal(h.called("hitObjectAt"), false);

  h = harness({ api: { cameraShoots: () => true, isFreeSpaceView: () => true, startCameraPress: () => false } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.calls("hitObjectAt").length, 1);

  h = harness({ api: { cameraShoots: () => false, isFreeSpaceView: () => true, startCameraPress: () => true } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.called("startCameraPress"), false);

  h = harness({ api: { cameraShoots: () => true, startCameraPress: () => true } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.called("startCameraPress"), false);
});

function worldHarness(extra = {}) {
  const world = newWorldSceneSticker("w1", { kind: "file" }, { position: [1, 2, 3], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 1 });
  const gizmo = { mode: "translate", transform: { position: [1, 2, 3] } };
  const h = harness({
    deps: { sceneV2: true, ...(extra.deps || {}) },
    editor: { worldSelectedId: "w1", frame: 0, ...(extra.editor || {}) },
    api: {
      isSpaceView: () => true,
      editorViewInput: () => ({ space: { gizmo: extra.noGizmo ? null : gizmo } }),
      selectedWorldSticker: () => world,
      stickerById: (id) => (id === "w1" ? world : (id === "sky" ? { placement: "sky" } : null)),
      ...(extra.api || {}),
    },
  });
  return { h, world, gizmo };
}

test("a press on a handle of the selected world Sticker's gizmo grabs it", () => {
  const { h, world, gizmo } = worldHarness({ api: { gizmoPointer: (phase) => (phase === "hover" ? "x" : true) } });
  h.onCanvasPointerDown(h.event({ pointerId: 13 }));
  assert.deepEqual(h.editor.interaction, {
    kind: "world_gizmo", id: "w1", mode: "translate", start: gizmo.transform, base: evaluateSticker(world, 0), changed: false,
  });
  assert.deepEqual(h.calls("editorView.gizmoPointer").map((args) => args[0]), ["hover", "down"]);
  assert.deepEqual(h.calls("editorView.gizmoPointer")[0], ["hover", "space-camera", 100, 50, 800, 400]);
  assert.deepEqual(h.sequence("canvas.setPointerCapture", "updateCursor"), ["canvas.setPointerCapture", "updateCursor"]);
  assert.equal(h.called("hitObjectAt"), false);
});

test("a gizmo the pointer is over but does not grab leaves the press to picking", () => {
  const { h } = worldHarness({ api: { gizmoPointer: (phase) => (phase === "hover" ? "x" : false), pickSticker: () => "w1" } });
  h.onCanvasPointerDown(h.event());
  assert.deepEqual(h.editor.interaction, { kind: "world_select" });
});

test("a press on another world Sticker commits the canvas selection and selects it", () => {
  const { h } = worldHarness({ editor: { worldSelectedId: null, selectedId: "s1" }, noGizmo: true, api: { pickSticker: () => "w1" } });
  h.onCanvasPointerDown(h.event({ pointerId: 14 }));
  assert.deepEqual(h.editor.interaction, { kind: "world_select" });
  assert.deepEqual(h.calls("editorView.pickSticker"), [["space-camera", 100, 50, 800, 400]]);
  assert.deepEqual(h.calls("selectWorldSticker"), [["w1"]]);
  assert.deepEqual(h.sequence("pushHistory", "commitState", "selectWorldSticker", "updateSidePanel", "updateSelectionMenu", "syncFloatingViewButtonState", "requestDraw", "canvas.setPointerCapture"),
    ["pushHistory", "commitState", "selectWorldSticker", "updateSidePanel", "updateSelectionMenu", "syncFloatingViewButtonState", "requestDraw", "canvas.setPointerCapture"]);
  assert.equal(h.called("updateCursor"), false);
  assert.equal(h.called("hitObjectAt"), false);
});

test("a press on another world Sticker without a canvas selection selects it without a history step", () => {
  const { h } = worldHarness({ editor: { worldSelectedId: null }, noGizmo: true, api: { pickSticker: () => "w1" } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.called("pushHistory"), false);
  assert.deepEqual(h.calls("selectWorldSticker"), [["w1"]]);
});

test("a press on the selected world Sticker keeps it selected", () => {
  const { h } = worldHarness({ noGizmo: true, api: { pickSticker: () => "w1" } });
  h.onCanvasPointerDown(h.event());
  assert.deepEqual(h.editor.interaction, { kind: "world_select" });
  assert.equal(h.called("selectWorldSticker"), false);
  assert.equal(h.called("requestDraw"), false);
});

test("a press that picks no world Sticker goes on to the canvas items", () => {
  for (const picked of ["sky", null]) {
    const { h } = worldHarness({ noGizmo: true, api: { pickSticker: () => picked } });
    h.onCanvasPointerDown(h.event());
    assert.equal(h.calls("hitObjectAt").length, 1);
  }
});

test("a scale or rotate handle of the canvas selection comes before a world Sticker", () => {
  const sel = sticker("s1");
  const { h } = worldHarness({
    noGizmo: true,
    api: { pickSticker: () => "w1", getSelected: () => sel, getSelectedItems: () => [sel], handleHit: () => ({ kind: "rotate" }) },
  });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.called("editorView.pickSticker"), false);
  assert.equal(h.editor.interaction.kind, "rotate");
});

test("the move handle of the canvas selection and a locked selection leave the press to the world Sticker", () => {
  const sel = sticker("s1");
  let r = worldHarness({ noGizmo: true, api: { pickSticker: () => "w1", getSelected: () => sel, getSelectedItems: () => [sel], handleHit: () => ({ kind: "move" }) } });
  r.h.onCanvasPointerDown(r.h.event());
  assert.deepEqual(r.h.editor.interaction, { kind: "world_select" });

  const items = [sticker("a"), sticker("b", { locked: true })];
  r = worldHarness({ noGizmo: true, api: { pickSticker: () => "w1", getSelectedItems: () => items, getMultiSelectionGeom: () => ({ visible: true, center: { x: 0, y: 0 } }) } });
  r.h.onCanvasPointerDown(r.h.event());
  assert.deepEqual(r.h.editor.interaction, { kind: "world_select" });
  assert.equal(r.h.called("handleHit"), false);

  const locked = sticker("s1", { locked: true });
  r = worldHarness({ noGizmo: true, api: { pickSticker: () => "w1", getSelected: () => locked, getSelectedItems: () => [locked] } });
  r.h.onCanvasPointerDown(r.h.event());
  assert.deepEqual(r.h.editor.interaction, { kind: "world_select" });
  assert.equal(r.h.called("handleHit"), false);
});

test("world Stickers are pressed only in the space view of a state v2 with the cursor tool", () => {
  for (const extra of [{ deps: { sceneV2: false } }, { api: { isSpaceView: () => false } }]) {
    const { h } = worldHarness({ noGizmo: true, ...extra, api: { pickSticker: () => "w1", ...(extra.api || {}) } });
    h.onCanvasPointerDown(h.event());
    assert.equal(h.called("editorView.pickSticker"), false);
  }
});

// ---------------------------------------------------------------- pointerdown: the canvas selection

function multiHarness(extra = {}) {
  const items = extra.items ?? [
    sticker("a"),
    strokeGroup("b"),
    raster("c"),
    sticker("d", { geom: { visible: false } }),
  ];
  const h = harness({
    api: {
      getSelectedItems: () => items,
      getSelected: () => items[0],
      getMultiSelectionGeom: () => ({ visible: true, center: { x: 80, y: 45 } }),
      handleHit: () => ({ kind: "move" }),
      getRasterObjectList: () => rasterList("c"),
      ...(extra.api || {}),
    },
  });
  return { h, items };
}

test("a press on the move area of a multi-selection moves all of it, with a snapshot of each item", () => {
  const { h, items } = multiHarness();
  h.onCanvasPointerDown(h.event({ pointerId: 15 }));
  const it = h.editor.interaction;
  assert.equal(it.kind, "move_multi");
  assert.deepEqual(it.items, items);
  assert.notEqual(it.items, items);
  assert.deepEqual(it.offset, { x: 20, y: 5 });
  assert.deepEqual(it.startCenter, { x: 80, y: 45 });
  assert.deepEqual(it.stickerSnapshots, [
    { id: "a", yaw_deg: 10, pitch_deg: 5, center: { x: 60, y: 40 } },
    { id: "d", yaw_deg: 10, pitch_deg: 5, center: { x: 100, y: 50 } },
  ]);
  assert.deepEqual(it.strokeSnapshots, [{
    id: "b-group", layerKind: "paint",
    snapshot: [{ id: "b-group-stroke", layerKind: "paint" }],
    frameSnapshot: { id: "b-group", layerKind: "paint", frame: true },
    center: { x: 70, y: 30 },
    centerUv: { u: 0.25, v: 0.5, id: "b-group" },
  }]);
  assert.deepEqual(it.rasterSnapshots, [{
    id: "c", snapshot: { id: "c", w: 3 }, center: { x: 90, y: 20 }, centerUv: { u: 0.75, v: 0.5, id: "raster:c" },
  }]);
  assert.deepEqual(h.calls("handleHit"), [[{ visible: true, center: { x: 80, y: 45 } }, { x: 100, y: 50 }]]);
  assert.deepEqual(h.calls("canvas.setPointerCapture"), [[15]]);
  assert.deepEqual(h.calls("updateCursor"), [[{ x: 100, y: 50 }]]);
  assert.equal(h.called("hitObjectAt"), false);
});

test("a multi-selection with a locked item, or a press off its move area, goes on to the hit test", () => {
  for (const extra of [
    { items: [sticker("a"), sticker("b", { locked: true })] },
    { api: { handleHit: () => ({ kind: "scale" }) } },
    { api: { getMultiSelectionGeom: () => ({ visible: false, center: { x: 0, y: 0 } }) } },
  ]) {
    const { h } = multiHarness(extra);
    h.onCanvasPointerDown(h.event());
    assert.equal(h.calls("hitObjectAt").length, 1);
    assert.equal(h.editor.interaction.kind, "view");
  }
});

function singleHarness(item, hit, extra = {}) {
  const h = harness({
    editor: extra.editor,
    deps: extra.deps,
    api: {
      getSelectedItems: () => [item],
      getSelected: () => item,
      handleHit: () => hit,
      getRasterObjectList: () => rasterList("r"),
      ...(extra.api || {}),
    },
  });
  return h;
}

test("the scale handle of a selected sticker scales its FOV", () => {
  const item = sticker("s");
  const h = singleHarness(item, { kind: "scale", cursor: "nesw-resize" });
  h.onCanvasPointerDown(h.event({ x: 63, y: 44, pointerId: 16 }));
  assert.deepEqual(h.editor.interaction, {
    kind: "scale", item, center: { x: 60, y: 40 }, startDist: 5, startHFOV: 30, startVFOV: 20, cursor: "nesw-resize",
  });
  assert.deepEqual(h.calls("handleHit"), [[item.geom, { x: 63, y: 44 }, item]]);
  assert.deepEqual(h.calls("canvas.setPointerCapture"), [[16]]);
  assert.equal(h.called("hitObjectAt"), false);
});

test("scale keeps a distance of at least 1 and FOVs of 20 by default", () => {
  const item = sticker("s", { pose: {} });
  const h = singleHarness(item, { kind: "scale", cursor: "c" });
  h.onCanvasPointerDown(h.event({ x: 60, y: 40 }));
  assert.equal(h.editor.interaction.startDist, 1);
  assert.equal(h.editor.interaction.startHFOV, 20);
  assert.equal(h.editor.interaction.startVFOV, 20);
});

test("the scale handle of a stroke group or a raster object scales it from a snapshot", () => {
  const group = strokeGroup("g");
  let h = singleHarness(group, { kind: "scale", cursor: "c" });
  h.onCanvasPointerDown(h.event({ x: 73, y: 34 }));
  assert.deepEqual(h.editor.interaction, {
    kind: "scale_stroke_group", item: group, center: { x: 70, y: 30 }, startDist: 5,
    snapshot: [{ id: "g-group-stroke", layerKind: "paint" }],
    frameSnapshot: { id: "g-group", layerKind: "paint", frame: true },
    cursor: "c",
  });
  const object = raster("r");
  h = singleHarness(object, { kind: "scale", cursor: "c" });
  h.onCanvasPointerDown(h.event({ x: 93, y: 24 }));
  assert.deepEqual(h.editor.interaction, {
    kind: "scale_raster_object", item: object, center: { x: 90, y: 20 }, startDist: 5, snapshot: { id: "r", w: 3 }, cursor: "c",
  });
});

test("the edge handles scale one axis, for any selected item", () => {
  for (const kind of ["scale_x", "scale_y"]) {
    for (const item of [sticker("s"), strokeGroup("g")]) {
      const h = singleHarness(item, { kind, cursor: "ew", edge: 2 });
      h.onCanvasPointerDown(h.event({ x: item.geom.center.x + 3, y: item.geom.center.y + 4 }));
      assert.deepEqual(h.editor.interaction, {
        kind, item, center: item.geom.center, startDist: 5,
        startHFOV: Number(item.pose?.hFOV_deg || 20), startVFOV: Number(item.pose?.vFOV_deg || 20), cursor: "ew", edge: 2,
      });
    }
  }
});

test("the rotate handle turns a sticker, a raster object from its roll, a stroke group from a snapshot", () => {
  const item = sticker("s");
  let h = singleHarness(item, { kind: "rotate" });
  h.onCanvasPointerDown(h.event({ x: 70, y: 40 }));
  assert.deepEqual(h.editor.interaction, { kind: "rotate", item, center: { x: 60, y: 40 }, startRot: 15, startAng: 0 });

  const object = raster("r");
  h = singleHarness(object, { kind: "rotate" });
  h.onCanvasPointerDown(h.event({ x: 90, y: 30 }));
  assert.deepEqual(h.editor.interaction, { kind: "rotate", item: object, center: { x: 90, y: 20 }, startRot: 25, startAng: Math.PI / 2 });

  const group = strokeGroup("g");
  h = singleHarness(group, { kind: "rotate" });
  h.onCanvasPointerDown(h.event({ x: 70, y: 40 }));
  assert.deepEqual(h.editor.interaction, {
    kind: "rotate_stroke_group", item: group, center: { x: 70, y: 30 }, startAng: Math.PI / 2,
    snapshot: [{ id: "g-group-stroke", layerKind: "paint" }],
    frameSnapshot: { id: "g-group", layerKind: "paint", frame: true },
  });
});

test("the move area of a selected sticker moves it by its offset", () => {
  const item = sticker("s");
  const h = singleHarness(item, { kind: "move" });
  h.onCanvasPointerDown(h.event({ pointerId: 17 }));
  assert.deepEqual(h.editor.interaction, { kind: "move", item, offset: { x: 40, y: 10 } });
  assert.deepEqual(h.calls("canvas.setPointerCapture"), [[17]]);
  assert.equal(h.called("hitObjectAt"), false);
  assert.equal(h.called("pushHistory"), false);
});

test("the move area of a selected stroke group or raster object moves it from its start UV", () => {
  const group = strokeGroup("g");
  let h = singleHarness(group, { kind: "move" });
  h.onCanvasPointerDown(h.event({ x: 200, y: 100 }));
  assert.deepEqual(h.editor.interaction, {
    kind: "move_stroke_group", item: group, startUv: { u: 0.2, v: 0.1 },
    snapshot: [{ id: "g-group-stroke", layerKind: "paint" }],
    frameSnapshot: { id: "g-group", layerKind: "paint", frame: true },
  });
  const object = raster("r");
  h = singleHarness(object, { kind: "move" });
  h.onCanvasPointerDown(h.event({ x: 200, y: 100 }));
  assert.deepEqual(h.editor.interaction, { kind: "move_raster_object", item: object, startUv: { u: 0.2, v: 0.1 }, snapshot: { id: "r", w: 3 } });
});

test("in the Frame view a paint item's start UV goes through the active shot, or is null without one", () => {
  const shot = { id: "shot" };
  for (const item of [strokeGroup("g"), raster("r")]) {
    let h = singleHarness(item, { kind: "move" }, { editor: { mode: "frame", primaryTool: "select" }, api: { getActiveCutoutShot: () => shot } });
    h.onCanvasPointerDown(h.event({ x: 200, y: 100 }));
    assert.deepEqual(h.editor.interaction.startUv, { u: 0.1, v: 0.05 });
    assert.equal(h.calls("screenPosToFrameAsErpPoint")[0][1], shot);
    h = singleHarness(item, { kind: "move" }, { editor: { mode: "frame", primaryTool: "select" } });
    h.onCanvasPointerDown(h.event({ x: 200, y: 100 }));
    assert.equal(h.editor.interaction.startUv, null);
    assert.equal(h.called("screenPosToFrameAsErpPoint"), false);
    assert.equal(h.called("screenPosToErpPoint"), false);
  }
});

test("a locked or hidden single selection, or a press off its handles, goes on to the hit test", () => {
  for (const [item, hit] of [
    [sticker("s", { locked: true }), { kind: "move" }],
    [sticker("s", { geom: { visible: false, center: { x: 0, y: 0 } } }), { kind: "move" }],
    [sticker("s"), { kind: "none" }],
  ]) {
    const h = singleHarness(item, hit);
    h.onCanvasPointerDown(h.event());
    assert.equal(h.calls("hitObjectAt").length, 1);
    if (item.locked) assert.equal(h.called("handleHit"), false);
  }
});

// ---------------------------------------------------------------- pointerdown: hit, empty

test("a press on an unselected item commits the old selection, selects it and moves it", () => {
  const item = sticker("b");
  const h = harness({ deps: { shotEditor: true }, editor: { selectedId: "a" }, api: { hitObjectAt: () => ({ item, geom: { center: { x: 90, y: 45 } } }) } });
  h.onCanvasPointerDown(h.event({ pointerId: 18 }));
  assert.deepEqual(h.editor.interaction, { kind: "move", item, offset: { x: 10, y: 5 }, startUv: null, snapshot: null, frameSnapshot: null });
  assert.deepEqual(h.calls("setSelectedItem"), [[item]]);
  assert.equal(h.editor.cutoutAspectOpen, false);
  assert.deepEqual(h.sequence("pushHistory", "commitState", "setSelectedItem", "updateSidePanel", "updateSelectionMenu", "requestDraw", "updateCursor", "canvas.setPointerCapture"),
    ["pushHistory", "commitState", "setSelectedItem", "updateSidePanel", "updateSelectionMenu", "requestDraw", "updateCursor", "canvas.setPointerCapture"]);
  assert.deepEqual(h.calls("hitObjectAt"), [[{ x: 100, y: 50 }]]);
});

test("a press on an item without a prior selection selects it without a history step", () => {
  const item = sticker("b");
  const h = harness({ api: { hitObjectAt: () => ({ item, geom: { center: { x: 90, y: 45 } } }) } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.called("pushHistory"), false);
  assert.equal(h.calls("updateSidePanel").length, 1);
  assert.equal(h.editor.cutoutAspectOpen, true);
});

test("a press on the selected item off its handles keeps the selection and the side panel", () => {
  const item = sticker("b");
  const h = harness({ deps: { shotEditor: true }, editor: { selectedId: "b" }, api: { hitObjectAt: () => ({ item, geom: { center: { x: 90, y: 45 } } }) } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.called("pushHistory"), false);
  assert.equal(h.called("updateSidePanel"), false);
  assert.equal(h.editor.cutoutAspectOpen, true);
  assert.deepEqual(h.calls("setSelectedItem"), [[item]]);
  assert.equal(h.calls("updateSelectionMenu").length, 1);
  assert.equal(h.editor.interaction.kind, "move");
});

test("a press on a locked item selects it and starts nothing", () => {
  const item = sticker("b", { locked: true });
  const h = harness({ api: { hitObjectAt: () => ({ item, geom: { center: { x: 90, y: 45 } } }) } });
  h.onCanvasPointerDown(h.event());
  assert.equal(h.editor.interaction, null);
  assert.deepEqual(h.calls("setSelectedItem"), [[item]]);
  assert.deepEqual(h.calls("updateCursor"), [[{ x: 100, y: 50 }]]);
  assert.equal(h.called("canvas.setPointerCapture"), false);
});

test("a press on an unselected stroke group or raster object moves it from its start UV and snapshot", () => {
  const group = strokeGroup("g");
  let h = harness({ api: { hitObjectAt: () => ({ item: group, geom: { center: { x: 90, y: 45 } } }) } });
  h.onCanvasPointerDown(h.event({ x: 200, y: 100 }));
  assert.deepEqual(h.editor.interaction, {
    kind: "move_stroke_group", item: group, offset: { x: 110, y: 55 }, startUv: { u: 0.2, v: 0.1 },
    snapshot: [{ id: "g-group-stroke", layerKind: "paint" }],
    frameSnapshot: { id: "g-group", layerKind: "paint", frame: true },
  });
  const object = raster("r");
  h = harness({ api: { hitObjectAt: () => ({ item: object, geom: { center: { x: 90, y: 45 } } }), getRasterObjectList: () => rasterList("r") } });
  h.onCanvasPointerDown(h.event({ x: 200, y: 100 }));
  assert.deepEqual(h.editor.interaction, {
    kind: "move_raster_object", item: object, offset: { x: 110, y: 55 }, startUv: { u: 0.2, v: 0.1 }, snapshot: { id: "r", w: 3 }, frameSnapshot: null,
  });
  h = harness({ editor: { mode: "frame", primaryTool: "select" }, api: { hitObjectAt: () => ({ item: object, geom: { center: { x: 90, y: 45 } } }), getActiveCutoutShot: () => ({}) } });
  h.onCanvasPointerDown(h.event({ x: 200, y: 100 }));
  assert.deepEqual(h.editor.interaction.startUv, { u: 0.1, v: 0.05 });
  assert.equal(h.editor.interaction.snapshot, undefined);
});

test("an empty press commits and clears the selection and looks around in the panorama", () => {
  const h = harness({ editor: { selectedId: "a" } });
  h.onCanvasPointerDown(h.event({ pointerId: 19 }));
  assert.deepEqual(h.sequence("pushHistory", "commitState", "clearSelection", "updateSidePanel", "updateSelectionMenu", "requestDraw", "viewController.startDrag", "updateCursor", "canvas.setPointerCapture"),
    ["pushHistory", "commitState", "clearSelection", "updateSidePanel", "updateSelectionMenu", "requestDraw", "viewController.startDrag", "updateCursor", "canvas.setPointerCapture"]);
  assert.equal(h.editor.interaction.kind, "view");
  assert.deepEqual(h.editor.interaction.last, { x: 50, y: 25 });
});

test("an empty press without a selection clears it without a history step", () => {
  const h = harness();
  h.onCanvasPointerDown(h.event());
  assert.equal(h.called("pushHistory"), false);
  assert.equal(h.called("updateSidePanel"), false);
  assert.equal(h.calls("clearSelection").length, 1);
  assert.equal(h.calls("updateSelectionMenu").length, 1);
});

test("an empty press outside the panorama only clears the selection", () => {
  for (const mode of ["unwrap", "frame"]) {
    const h = harness({ editor: { mode, primaryTool: "select" } });
    h.onCanvasPointerDown(h.event());
    assert.equal(h.editor.interaction, null);
    assert.equal(h.calls("clearSelection").length, 1);
    assert.equal(h.called("viewController.startDrag"), false);
  }
});

test("an empty press in 6DoF does the preset's emptyLeft", () => {
  const h = harness({ api: { isFreeSpaceView: () => true } });
  h.onCanvasPointerDown(h.event({ pointerId: 2 }));
  assert.deepEqual(h.calls("startSpaceDrag"), [["orbit", { x: 100, y: 50 }, 2]]);
  assert.equal(h.editor.interaction, null);
});

// ---------------------------------------------------------------- pointermove

test("a move without a gesture hovers the gizmo and updates the cursor", () => {
  const { h } = worldHarness({ api: { gizmoPointer: () => "y" } });
  h.onCanvasPointerMove(h.event({ x: 5, y: 6 }));
  assert.equal(h.editor.gizmoAxis, "y");
  assert.equal(h.values.runtime.backgroundDirty, true);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.VIEW }]]);
  assert.deepEqual(h.calls("updateCursor"), [[{ x: 5, y: 6 }]]);
  h.clear();
  h.onCanvasPointerMove(h.event({ x: 5, y: 6 }));
  assert.equal(h.called("requestDraw"), false);
});

test("the gizmo hover shows for a selected Camera, and not without a gizmo or outside the cursor tool", () => {
  let h = harness({ api: { isSpaceView: () => true, isCameraSelected: () => true, editorViewInput: () => ({ space: { gizmo: {} } }), gizmoPointer: () => "z" } });
  h.onCanvasPointerMove(h.event());
  assert.equal(h.editor.gizmoAxis, "z");
  for (const extra of [{ editor: { primaryTool: "paint" } }, { noGizmo: true }]) {
    ({ h } = worldHarness({ ...extra, api: { gizmoPointer: () => "z" } }));
    h.editor.gizmoAxis = "x";
    h.onCanvasPointerMove(h.event());
    assert.equal(h.editor.gizmoAxis, null);
    assert.equal(h.called("editorView.gizmoPointer"), false);
  }
});

test("hoverWorldGizmo and worldGizmoPointer are given to the other modules", () => {
  const { h } = worldHarness({ api: { gizmoPointer: () => "q" } });
  assert.equal(h.worldGizmoPointer("down", { x: 3, y: 4 }), "q");
  assert.deepEqual(h.calls("editorView.gizmoPointer"), [["down", "space-camera", 3, 4, 800, 400]]);
  h.hoverWorldGizmo({ x: 3, y: 4 });
  assert.equal(h.editor.gizmoAxis, "q");
});

// A press that starts nothing (the right button), so a test can set the gesture the move continues.
function pressAt(h, x = 100, y = 50) {
  h.onCanvasPointerDown(h.event({ x, y, button: 2 }));
  h.clear();
}

test("the first move of an edit stops playback and starts a move over from the frame shown", () => {
  const item = sticker("s", { geom: { visible: true, center: { x: 70, y: 40 } } });
  const playback = { playing: true, stop: null };
  const h = harness({ deps: { stateV2: true }, api: { playback } });
  playback.stop = () => h.log.push({ name: "playback.stop", args: [] });
  pressAt(h);
  h.editor.interaction = { kind: "move", item, offset: { x: 0, y: 0 } };
  h.onCanvasPointerMove(h.event({ x: 101, y: 50 }));
  assert.equal(h.calls("playback.stop").length, 1);
  assert.deepEqual(h.editor.interaction.offset, { x: 30, y: 10 });
  assert.equal(h.calls("writePose").length, 1);
  assert.deepEqual(h.sequence("playback.stop", "writePose"), ["playback.stop", "writePose"]);
  h.clear();
  h.onCanvasPointerMove(h.event({ x: 102, y: 50 }));
  assert.equal(h.called("playback.stop"), false);
});

function restartHarness(interaction, extra = {}) {
  const playback = { playing: true, stop: null };
  const h = harness({ deps: { stateV2: true, ...(extra.deps || {}) }, editor: extra.editor, api: { playback, ...(extra.api || {}) } });
  playback.stop = () => h.log.push({ name: "playback.stop", args: [] });
  pressAt(h);
  h.editor.interaction = interaction;
  return h;
}

test("the first move that does not leave the press point does not restart", () => {
  const h = restartHarness({ kind: "move", item: sticker("s"), offset: { x: 0, y: 0 } });
  h.onCanvasPointerMove(h.event({ x: 100, y: 50 }));
  assert.equal(h.called("playback.stop"), false);
  h.onCanvasPointerMove(h.event({ x: 101, y: 50 }));
  assert.equal(h.calls("playback.stop").length, 1);
});

test("looking around, the marquee, the space drags and a world selection keep playing", () => {
  for (const kind of ["view", "marquee_select", "space_pan", "space_orbit", "world_select"]) {
    const h = restartHarness({ kind, last: { x: 0, y: 0 }, start: { x: 0, y: 0 }, current: { x: 0, y: 0 } }, { api: { spaceViewState: () => initialSpaceView(0, 0, 90) } });
    h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
    assert.equal(h.called("playback.stop"), false, kind);
  }
});

test("an edit's first move does not stop a stopped playback or a state that is not v2", () => {
  for (const [stateV2, playing] of [[false, true], [true, false]]) {
    const playback = { playing, stop: null };
    const h = harness({ deps: { stateV2 }, api: { playback } });
    playback.stop = () => h.log.push({ name: "playback.stop", args: [] });
    pressAt(h);
    const item = sticker("s");
    h.editor.interaction = { kind: "move", item, offset: { x: 1, y: 1 } };
    h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
    assert.equal(h.called("playback.stop"), false);
    assert.deepEqual(h.editor.interaction.offset, { x: 1, y: 1 });
  }
});

test("restart: a Frame pan only stops; a Frame orbit picks its pivot again from where the press was", () => {
  let h = restartHarness({ kind: "frame_pan", last: { x: 0, y: 0 } });
  h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
  assert.equal(h.calls("playback.stop").length, 1);
  assert.equal(h.called("frameContext"), false);
  assert.equal(h.calls("dragFrame").length, 1);

  h = restartHarness({ kind: "frame_orbit", last: { x: 0, y: 0 }, pivot: "old" }, {
    api: { frameContext: () => "ctx", frameSpaceView: (c) => `view-of-${c}`, frameTarget: (c, v, d) => ({ c, v, d }) },
  });
  h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
  assert.deepEqual(h.editor.interaction.pivot, { c: "ctx", v: "view-of-ctx", d: { x: 100, y: 50 } });
  h = restartHarness({ kind: "frame_orbit", last: { x: 0, y: 0 }, pivot: "old" }, { api: { frameContext: () => null } });
  h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
  assert.equal(h.editor.interaction.pivot, "old");
  assert.equal(h.called("frameTarget"), false);
});

test("restart: a gizmo drag takes its base again from the Camera or the Sticker at the frame shown", () => {
  let h = restartHarness({ kind: "world_gizmo", camera: true, base: "old" }, { api: { cutoutCamera: () => "camera-now" } });
  h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
  assert.equal(h.editor.interaction.base, "camera-now");

  const world = newWorldSceneSticker("w1", { kind: "file" }, { position: [0, 0, 0], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 2 });
  h = restartHarness({ kind: "world_gizmo", id: "w1", base: "old" }, { editor: { frame: 3 }, api: { stickerById: (id) => (id === "w1" ? world : null) } });
  h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
  assert.deepEqual(h.editor.interaction.base, evaluateSticker(world, 3));

  h = restartHarness({ kind: "world_gizmo", id: "gone", base: "old" });
  h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
  assert.equal(h.editor.interaction.base, "old");
});

test("restart: a multi-selection move takes its offset, center and sticker snapshots again", () => {
  const a = sticker("a", { pose: { yaw_deg: 33, pitch_deg: 4 }, geom: { visible: true, center: { x: 11, y: 12 } } });
  const b = sticker("b", { geom: { visible: false } });
  const snapA = { id: "a", yaw_deg: 0, pitch_deg: 0, center: { x: 0, y: 0 } };
  const snapB = { id: "b", yaw_deg: 0, pitch_deg: 0, center: { x: 0, y: 0 } };
  let h = restartHarness({ kind: "move_multi", items: [a, b], offset: {}, startCenter: {}, stickerSnapshots: [snapA, snapB], strokeSnapshots: [], rasterSnapshots: [] }, {
    api: { getMultiSelectionGeom: () => ({ visible: true, center: { x: 90, y: 40 } }), getList: () => [] },
  });
  h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
  assert.deepEqual(h.editor.interaction.offset, { x: 10, y: 10 });
  assert.deepEqual(h.editor.interaction.startCenter, { x: 90, y: 40 });
  assert.deepEqual(snapA, { id: "a", yaw_deg: 33, pitch_deg: 4, center: { x: 11, y: 12 } });
  assert.deepEqual(snapB, { id: "b", yaw_deg: 0, pitch_deg: 0, center: { x: 0, y: 0 } });

  h = restartHarness({ kind: "move_multi", items: [a], offset: "keep", startCenter: {}, stickerSnapshots: [], strokeSnapshots: [], rasterSnapshots: [] }, {
    api: { getMultiSelectionGeom: () => ({ visible: false }) },
  });
  h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
  assert.equal(h.editor.interaction.offset, "keep");
});

test("restart: scale and rotate take their center and start values again; a hidden item keeps them", () => {
  const item = sticker("s", { pose: { hFOV_deg: 50, vFOV_deg: 40, roll_deg: 9 }, geom: { visible: true, center: { x: 97, y: 46 } } });
  for (const kind of ["scale", "scale_x", "scale_y"]) {
    const h = restartHarness({ kind, item, center: null, startDist: 0, startHFOV: 0, startVFOV: 0 });
    h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
    assert.deepEqual(h.editor.interaction.center, { x: 97, y: 46 });
    assert.equal(h.editor.interaction.startDist, 5);
    assert.equal(h.editor.interaction.startHFOV, 50);
    assert.equal(h.editor.interaction.startVFOV, 40);
  }
  let h = restartHarness({ kind: "rotate", item, center: null, startRot: 0, startAng: 0 });
  h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
  assert.equal(h.editor.interaction.startRot, 9);
  assert.equal(h.editor.interaction.startAng, Math.atan2(4, 3));
  assert.deepEqual(h.editor.interaction.center, { x: 97, y: 46 });

  const hidden = sticker("s", { geom: { visible: false } });
  h = restartHarness({ kind: "scale", item: hidden, center: "keep", startDist: 7, startHFOV: 1, startVFOV: 1 });
  h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
  assert.equal(h.editor.interaction.center, "keep");
  assert.equal(h.calls("playback.stop").length, 1);
});

test("restart: paint and the other edits only stop playback", () => {
  for (const kind of ["paint_stroke", "move_stroke_group", "pan_frame", "roll_frame"]) {
    const h = restartHarness({ kind, item: strokeGroup("g"), offset: "keep", source: "knob", stroke: {} }, { api: { appendPaintPoint: () => false } });
    h.onCanvasPointerMove(h.event({ x: 120, y: 50 }));
    assert.equal(h.calls("playback.stop").length, 1, kind);
    assert.equal(h.editor.interaction.offset, "keep");
  }
});

test("a world selection's move does nothing; a gizmo drag writes the Sticker's Lanes", () => {
  let h = harness();
  h.editor.interaction = { kind: "world_select" };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.effects(), ["setPointerPos", "updateCursor"]);

  const world = newWorldSceneSticker("w1", { kind: "file" }, { position: [1, 2, 3], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 1 });
  const expected = structuredClone(world);
  const moved = { position: [4, 2, 3] };
  h = harness({ editor: { frame: 2 }, api: { stickerById: (id) => (id === "w1" ? world : null), gizmoPointer: () => moved } });
  const it = { kind: "world_gizmo", id: "w1", mode: "translate", base: evaluateSticker(world, 2), start: { position: [1, 2, 3] }, changed: false };
  h.editor.interaction = it;
  h.onCanvasPointerMove(h.event({ x: 7, y: 8 }));
  setWorldStickerTransform(expected, 2, gizmoDragLanes("translate", it.base, it.start, moved));
  assert.deepEqual(world, expected);
  assert.equal(it.changed, true);
  assert.deepEqual(h.calls("editorView.gizmoPointer"), [["move", "space-camera", 7, 8, 800, 400]]);
  assert.deepEqual(h.sequence("markObjectVisualsDirty", "dragFrames.request", "requestDraw"), ["markObjectVisualsDirty", "dragFrames.request", "requestDraw"]);
  assert.deepEqual(h.calls("dragFrames.request"), [["sidePanel"]]);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true }]]);
});

test("a gizmo drag of the Camera writes the Camera's Lanes and its shot follows", () => {
  const camera = newStudioCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 });
  const expected = structuredClone(camera);
  const moved = { position: [0, 1, 0] };
  const h = harness({ deps: { state: { camera, ui_settings: {} } }, editor: { frame: 0 }, api: { gizmoPointer: () => moved } });
  const it = { kind: "world_gizmo", camera: true, mode: "translate", base: { position: [0, 0, 0] }, start: { position: [0, 0, 0] }, changed: false };
  h.editor.interaction = it;
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(camera.position, { ...expected.position, value: [0, 1, 0] });
  assert.equal(it.changed, true);
  assert.deepEqual(h.sequence("syncCutoutShot", "dragFrames.request", "requestDraw"), ["syncCutoutShot", "dragFrames.request", "requestDraw"]);
  assert.equal(h.called("markObjectVisualsDirty"), false);
});

test("a gizmo drag the gizmo does not move, or of a Sticker that is gone, writes nothing", () => {
  for (const [moved, found] of [[null, true], [{ position: [0, 0, 0] }, false]]) {
    const h = harness({ api: { gizmoPointer: () => moved, stickerById: () => (found ? {} : null) } });
    const it = { kind: "world_gizmo", id: "w1", mode: "translate", base: {}, start: {}, changed: false };
    h.editor.interaction = it;
    h.onCanvasPointerMove(h.event());
    assert.equal(it.changed, false);
    assert.equal(h.called("requestDraw"), false);
  }
});

test("a paint stroke's move appends each coalesced point", () => {
  const h = harness({ api: { appendPaintPoint: (it, sp) => sp.x !== 2 } });
  const it = { kind: "paint_stroke" };
  h.editor.interaction = it;
  h.onCanvasPointerMove(h.event({ getCoalescedEvents: () => [{ x: 1, y: 1 }, { x: 2, y: 2 }] }));
  assert.deepEqual(h.calls("appendPaintPoint").map((args) => [args[0], args[1]]), [[it, { x: 1, y: 1 }], [it, { x: 2, y: 2 }]]);
  assert.ok(isNum(h.calls("appendPaintPoint")[0][2]));
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.PAINT }]]);
  h.clear();
  h.onCanvasPointerMove(h.event({ x: 2, y: 2 }));
  assert.deepEqual(h.calls("appendPaintPoint").map((args) => args[1]), [{ x: 2, y: 2 }]);
  assert.equal(h.called("requestDraw"), false);
});

test("in the Frame view a stroke drops points outside the frame and starts a new segment on re-entry", () => {
  for (const [kind, append, segment] of [["paint_stroke", "appendPaintPoint", "_segmentFrameStroke"], ["paint_lasso_fill", "appendLassoPoint", "_segmentFrameLassoFill"]]) {
    const h = harness({
      editor: { mode: "frame" },
      api: { getActiveCutoutShot: () => ({}), getFrameViewRect: () => ({ x: 0, y: 0, w: 100, h: 100 }), [append]: () => true },
    });
    const it = { kind, stroke: { s: 1 } };
    h.editor.interaction = it;
    h.onCanvasPointerMove(h.event({ getCoalescedEvents: () => [{ x: 10, y: 10 }, { x: 150, y: 10 }, { x: 20, y: 20 }] }));
    assert.deepEqual(h.calls(append).map((args) => args[1]), [{ x: 10, y: 10 }, { x: 20, y: 20 }]);
    assert.deepEqual(h.calls(segment), [[it]]);
    assert.deepEqual(h.sequence(append, segment), [append, segment, append]);
    assert.equal(it._outOfFrame, false);
    h.clear();
    h.onCanvasPointerMove(h.event({ getCoalescedEvents: () => [{ x: -1, y: 10 }] }));
    assert.equal(it._outOfFrame, true);
    assert.equal(h.called(append), false);
  }
});

test("in the Frame view without a shot or rect a stroke keeps every point", () => {
  const h = harness({ editor: { mode: "frame" }, api: { getActiveCutoutShot: () => ({}), appendPaintPoint: () => true } });
  h.editor.interaction = { kind: "paint_stroke" };
  h.onCanvasPointerMove(h.event({ x: 500, y: 500 }));
  assert.equal(h.calls("appendPaintPoint").length, 1);
});

test("in the Frame view a paint item's move goes through the active shot", () => {
  const shot = { id: "shot" };
  const h = harness({ editor: { mode: "frame" }, api: { getActiveCutoutShot: () => shot, applyStrokeGroupOffset: () => true } });
  h.editor.interaction = { kind: "move_stroke_group", item: strokeGroup("g"), startUv: { u: 0, v: 0 } };
  h.onCanvasPointerMove(h.event({ x: 200, y: 100 }));
  assert.deepEqual(h.calls("screenPosToFrameAsErpPoint")[0].slice(0, 2), [{ x: 200, y: 100 }, shot]);
  const [[, du, dv]] = h.calls("applyStrokeGroupOffset");
  assert.deepEqual([du, dv], [0.1, 0.05]);
});

test("in the Frame view without a shot a stroke keeps every point", () => {
  const h = harness({ editor: { mode: "frame" }, api: { appendPaintPoint: () => true } });
  h.editor.interaction = { kind: "paint_stroke" };
  h.onCanvasPointerMove(h.event({ x: 500, y: 500 }));
  assert.equal(h.calls("appendPaintPoint").length, 1);
  assert.equal(h.called("getFrameViewRect"), false);
});

test("a Frame roll of a shot without a roll starts from 0", () => {
  const h = harness({ api: { getActiveCutoutShot: () => ({}), getFrameViewRect: () => ({ x: 0, y: 0, w: 10, h: 10 }) }, editor: { mode: "frame" } });
  h.onCanvasPointerDown(h.event({ altKey: true }));
  assert.deepEqual(h.editor.interaction.start, { roll_deg: 0 });
  assert.equal(h.editor.interaction.rollGesture.startRollDeg, 0);
});

test("a paint press seeds the engine with x and y when the point has no u and v", () => {
  const h = harness({ editor: { primaryTool: "paint" }, api: { screenPosToErpPoint: () => ({ x: 0.3, y: 0.4 }) } });
  h.onCanvasPointerDown(h.event());
  assert.deepEqual(h.calls("paintEngine.appendStrokePoint")[0].slice(1, 3), [0.3, 0.4]);
});

test("a lasso fill's move redraws the active stroke when a point is added", () => {
  let h = harness({ api: { appendLassoPoint: () => true } });
  const it = { kind: "paint_lasso_fill", stroke: { s: 1 } };
  h.editor.interaction = it;
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("paintEngine.updateActiveStroke"), [[it.stroke, "target-descriptor"]]);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.PAINT }]]);

  h = harness({ api: { appendLassoPoint: () => true, getActivePaintTargetDescriptor: () => null } });
  h.editor.interaction = { kind: "paint_lasso_fill", stroke: {} };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.called("paintEngine.updateActiveStroke"), false);
  assert.equal(h.calls("requestDraw").length, 1);

  h = harness({ api: { appendLassoPoint: () => false } });
  h.editor.interaction = { kind: "paint_lasso_fill", stroke: {} };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.called("getActivePaintTargetDescriptor"), false);
  assert.equal(h.called("requestDraw"), false);
});

test("looking around moves the view controller's drag", () => {
  for (const [mode, pos, viewMode] of [["pano", { x: 50, y: 25 }, "pano"], ["unwrap", { x: 100, y: 50 }, "unwrap"], ["frame", { x: 50, y: 25 }, "pano"]]) {
    const h = harness({ editor: { mode } });
    const it = { kind: "view", last: null, lastTs: 0 };
    h.editor.interaction = it;
    h.onCanvasPointerMove(h.event());
    const [args] = h.calls("viewController.moveDrag");
    assert.deepEqual(args.slice(0, 3), [pos.x, pos.y, viewMode]);
    assert.equal(it.lastTs, args[3]);
    assert.deepEqual(it.last, pos);
    assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.VIEW }]]);
  }
});

test("the Frame view's drags go to dragFrame", () => {
  for (const kind of ["frame_pan", "frame_orbit"]) {
    const h = harness();
    const it = { kind, last: { x: 0, y: 0 } };
    h.editor.interaction = it;
    h.onCanvasPointerMove(h.event());
    assert.deepEqual(h.calls("dragFrame"), [[it, { x: 100, y: 50 }]]);
  }
});

// The way a space drag moves the view is pano_space_navigation.js's (tests/editor_space_navigation.test.mjs).
test("the space drags' moves go to the space view", () => {
  for (const kind of ["space_pan", "space_orbit"]) {
    const h = harness();
    const it = { kind, last: { x: 0, y: 0 } };
    h.editor.interaction = it;
    h.onCanvasPointerMove(h.event());
    assert.deepEqual(h.calls("moveSpaceView"), [[it, { x: 100, y: 50 }]]);
  }
});

test("a Frame pan turns the shot by the screen delta", () => {
  const shot = { yaw_deg: 10, pitch_deg: 5, roll_deg: 0 };
  const h = harness({ deps: { state: { ui_settings: { invert_view_x: true } } }, api: { getFrameViewLayout: () => ({ focalPx: 300 }) } });
  const it = { kind: "pan_frame", shot, last: { x: 90, y: 50 }, changed: false };
  h.editor.interaction = it;
  h.onCanvasPointerMove(h.event());
  const next = panCutoutShotByScreenDelta({ yaw_deg: 10, pitch_deg: 5, roll_deg: 0 }, { dx: 10, dy: 0, focalPx: 300, invertX: true, invertY: false });
  assert.equal(shot.yaw_deg, next.yaw_deg);
  assert.equal(shot.pitch_deg, next.pitch_deg);
  assert.equal(it.changed, true);
  assert.deepEqual(it.last, { x: 100, y: 50 });
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true }]]);
  // Without a move it is not a change.
  it.changed = false;
  h.onCanvasPointerMove(h.event());
  assert.equal(it.changed, false);
});

test("a Frame pan without a layout does nothing", () => {
  const shot = { yaw_deg: 10 };
  const h = harness({ api: { getFrameViewLayout: () => null } });
  h.editor.interaction = { kind: "pan_frame", shot, last: { x: 0, y: 0 }, changed: false };
  h.onCanvasPointerMove(h.event());
  assert.equal(shot.yaw_deg, 10);
  assert.equal(h.called("requestDraw"), false);
});

test("a Frame roll's move applies the roll unless the knob drives it", () => {
  let h = harness();
  const it = { kind: "roll_frame", source: "alt" };
  h.editor.interaction = it;
  const e = h.event();
  h.onCanvasPointerMove(e);
  assert.deepEqual(h.calls("applySharedRollInteractionPoint"), [[it, { x: 100, y: 50 }, e]]);
  h = harness();
  h.editor.interaction = { kind: "roll_frame", source: "knob" };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.called("applySharedRollInteractionPoint"), false);
});

test("a move of a sticker writes its yaw and pitch: through the shot in the Frame view, the rect in Unwrap, the view in the panorama", () => {
  const item = sticker("s");
  // Frame view of a shot editor.
  let h = harness({ deps: { shotEditor: true }, editor: { mode: "frame" }, api: {
    getActiveCutoutShot: () => ({ id: "shot" }), getFrameViewRect: () => ({ x: 0, y: 0, w: 200, h: 100 }), frameLocalPointToWorldDir: () => ({ x: 0, y: 0.5, z: 1 }),
  } });
  h.editor.interaction = { kind: "move", item, offset: { x: 10, y: -100 } };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("frameLocalPointToWorldDir"), [[{ id: "shot" }, { x: 0.45, y: 1 }]]);
  let yp = dirToYawPitch({ x: 0, y: 0.5, z: 1 });
  assert.deepEqual(h.calls("writePose"), [[item, { yaw_deg: yp.yaw, pitch_deg: yp.pitch }]]);
  assert.deepEqual(h.sequence("writePose", "markObjectVisualsDirty", "requestDraw"), ["writePose", "markObjectVisualsDirty", "requestDraw"]);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true }]]);

  // Unwrap.
  h = harness({ editor: { mode: "unwrap" }, api: { getUnwrapRect: () => ({ x: 0, y: 0, w: 200, h: 100 }) } });
  h.editor.interaction = { kind: "move", item, offset: { x: 50, y: 25 } };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("writePose"), [[item, { yaw_deg: 0 * 360 - 180 + 90, pitch_deg: 45 }]]);

  // Panorama.
  h = harness({ api: { screenToWorldDir: () => ({ x: 1, y: 0, z: 0 }) } });
  const group = strokeGroup("g");
  h.editor.interaction = { kind: "move", item: group, offset: { x: 1, y: 2 } };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("screenToWorldDir"), [[99, 48]]);
  yp = dirToYawPitch({ x: 1, y: 0, z: 0 });
  assert.deepEqual(h.calls("writePose"), [[group, { yaw_deg: yp.yaw, pitch_deg: yp.pitch }]]);
  assert.equal(h.called("markObjectVisualsDirty"), false);
  assert.equal(h.calls("requestDraw").length, 1);
});

test("a move in the Frame view of a shot editor writes nothing without a shot, rect or direction", () => {
  for (const api of [
    { getActiveCutoutShot: () => null, getFrameViewRect: () => ({ x: 0, y: 0, w: 1, h: 1 }) },
    { getActiveCutoutShot: () => ({}), getFrameViewRect: () => null },
    { getActiveCutoutShot: () => ({}), getFrameViewRect: () => ({ x: 0, y: 0, w: 1, h: 1 }), frameLocalPointToWorldDir: () => null },
  ]) {
    const h = harness({ deps: { shotEditor: true }, editor: { mode: "frame" }, api });
    h.editor.interaction = { kind: "move", item: sticker("s"), offset: { x: 0, y: 0 } };
    h.onCanvasPointerMove(h.event());
    assert.equal(h.called("writePose"), false);
    assert.equal(h.called("requestDraw"), false);
  }
});

test("a move in the Frame view without a shot editor goes through the view", () => {
  const h = harness({ editor: { mode: "frame" }, api: { screenToWorldDir: () => ({ x: 0, y: 0, z: 1 }) } });
  h.editor.interaction = { kind: "move", item: sticker("s"), offset: { x: 0, y: 0 } };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.calls("screenToWorldDir").length, 1);
});

test("a stroke group's move offsets it by the wrapped UV delta from its start", () => {
  const group = strokeGroup("g");
  let h = harness({ api: { applyStrokeGroupOffset: () => true } });
  h.editor.interaction = { kind: "move_stroke_group", item: group, startUv: { u: 0.05, v: 0.02 }, snapshot: "snap", frameSnapshot: "fsnap" };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("shortestWrappedDelta"), [[0.1, 0.05]]);
  const [[id, du, dv, snap, layer, fsnap]] = h.calls("applyStrokeGroupOffset");
  assert.deepEqual([id, snap, layer, fsnap], ["g-group", "snap", "paint", "fsnap"]);
  assert.ok(Math.abs(du - 0.05) < 1e-12 && Math.abs(dv - 0.03) < 1e-12);
  assert.deepEqual(h.calls("markPaintStrokeVisualsDirty"), [[{ rebuildPaintEngine: false }]]);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.PAINT }]]);

  h = harness({ api: { applyStrokeGroupOffset: () => false } });
  h.editor.interaction = { kind: "move_stroke_group", item: group, startUv: { u: 0, v: 0 } };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.called("requestDraw"), false);

  h = harness();
  h.editor.interaction = { kind: "move_stroke_group", item: group, startUv: null };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.called("applyStrokeGroupOffset"), false);

  h = harness({ editor: { mode: "frame" } });
  h.editor.interaction = { kind: "move_stroke_group", item: group, startUv: { u: 0, v: 0 } };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.called("applyStrokeGroupOffset"), false);
  assert.equal(h.called("screenPosToErpPoint"), false);
});

test("a raster object's move offsets it from its start UV, in the Frame view through the shot", () => {
  const object = raster("r");
  let h = harness({ editor: { mode: "frame" }, api: { getActiveCutoutShot: () => ({}), applyRasterObjectOffset: () => true } });
  h.editor.interaction = { kind: "move_raster_object", item: object, startUv: { u: 0.01, v: 0.01 }, snapshot: "snap" };
  h.onCanvasPointerMove(h.event());
  const [[id, du, dv, snap]] = h.calls("applyRasterObjectOffset");
  assert.deepEqual([id, snap], ["raster:r", "snap"]);
  assert.ok(Math.abs(du - 0.04) < 1e-12 && Math.abs(dv - 0.015) < 1e-12);
  assert.equal(h.calls("markPaintCompositeVisualsDirty").length, 1);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.PAINT }]]);

  h = harness({ api: { applyRasterObjectOffset: () => false } });
  h.editor.interaction = { kind: "move_raster_object", item: { id: "plain" }, startUv: { u: 0, v: 0 } };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.calls("applyRasterObjectOffset")[0][0], "plain");
  assert.equal(h.called("requestDraw"), false);
});

test("a raster object's scale applies the distance ratio", () => {
  const object = raster("r");
  let h = harness({ api: { applyRasterObjectTransform: () => true } });
  h.editor.interaction = { kind: "scale_raster_object", item: object, center: { x: 97, y: 46 }, startDist: 2, snapshot: "snap" };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("applyRasterObjectTransform"), [["raster:r", 2.5, "snap"]]);
  assert.equal(h.calls("markPaintCompositeVisualsDirty").length, 1);
  h = harness({ api: { applyRasterObjectTransform: () => false } });
  h.editor.interaction = { kind: "scale_raster_object", item: object, center: { x: 100, y: 50 }, startDist: 0, snapshot: "snap" };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("applyRasterObjectTransform"), [["raster:r", 1, "snap"]]);
  assert.equal(h.called("requestDraw"), false);
});

test("a multi-selection move writes the stickers' poses and offsets the paint items by their UV delta", () => {
  const a = sticker("a");
  const h = harness({
    api: {
      getList: () => [a],
      screenToWorldDir: () => ({ x: 0, y: 0, z: 1 }),
      applyStrokeGroupOffset: () => true,
      applyRasterObjectOffset: () => true,
    },
  });
  h.editor.interaction = {
    kind: "move_multi", offset: { x: 10, y: 10 }, startCenter: { x: 80, y: 30 },
    stickerSnapshots: [{ id: "a", center: { x: 50, y: 50 } }, { id: "missing", center: { x: 0, y: 0 } }],
    strokeSnapshots: [{ id: "g", center: { x: 100, y: 100 }, centerUv: { u: 0.1, v: 0.1 }, snapshot: "s", layerKind: "mask", frameSnapshot: "f" }],
    rasterSnapshots: [{ id: "r", center: { x: 200, y: 100 }, centerUv: { u: 0.2, v: 0.1 }, snapshot: "rs" }],
  };
  h.onCanvasPointerMove(h.event());
  // The pointer moved the selection by (10, 10).
  assert.deepEqual(h.calls("screenToWorldDir"), [[60, 60]]);
  assert.equal(h.calls("writePose")[0][0], a);
  assert.deepEqual(h.calls("screenPosToErpPoint").map((args) => args[0]), [{ x: 110, y: 110 }, { x: 210, y: 110 }]);
  const [[gid, gdu, gdv, gs, gl, gf]] = h.calls("applyStrokeGroupOffset");
  assert.deepEqual([gid, gs, gl, gf], ["g", "s", "mask", "f"]);
  assert.ok(Math.abs(gdu - 0.01) < 1e-12 && Math.abs(gdv - 0.01) < 1e-12);
  assert.deepEqual(h.calls("applyRasterObjectOffset").map((args) => [args[0], args[3]]), [["r", "rs"]]);
  // A stroke change wins the dirty flag.
  assert.deepEqual(h.calls("markPaintStrokeVisualsDirty"), [[{ rebuildPaintEngine: false }]]);
  assert.equal(h.called("markPaintCompositeVisualsDirty"), false);
  assert.equal(h.called("markObjectVisualsDirty"), false);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true }]]);
});

test("a multi-selection move marks the composite for rasters only, the objects for stickers only, and nothing without a change", () => {
  let h = harness({ api: { applyRasterObjectOffset: () => true } });
  h.editor.interaction = { kind: "move_multi", offset: { x: 0, y: 0 }, startCenter: { x: 0, y: 0 }, stickerSnapshots: [], strokeSnapshots: [], rasterSnapshots: [{ id: "r", center: {}, centerUv: { u: 0, v: 0 } }] };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.calls("markPaintCompositeVisualsDirty").length, 1);

  const a = sticker("a");
  h = harness({ deps: { type: "cutout" }, api: { getCutoutSelectableItems: () => [a], screenToWorldDir: () => ({ x: 0, y: 0, z: 1 }) } });
  h.editor.interaction = { kind: "move_multi", offset: { x: 0, y: 0 }, startCenter: { x: 0, y: 0 }, stickerSnapshots: [{ id: "a", center: {} }] };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.calls("markObjectVisualsDirty").length, 1);
  assert.equal(h.called("getList"), false);

  h = harness({ api: { applyStrokeGroupOffset: () => false } });
  h.editor.interaction = { kind: "move_multi", offset: {}, startCenter: {}, stickerSnapshots: [{ id: "x" }], strokeSnapshots: [{ id: "g", centerUv: { u: 0, v: 0 } }, { id: "h", centerUv: null }] };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.calls("applyStrokeGroupOffset").length, 1);
  assert.equal(h.called("requestDraw"), false);
});

test("a multi-selection move in the Frame view goes through the shot, and skips stickers without a rect", () => {
  const a = sticker("a");
  let h = harness({ deps: { shotEditor: true }, editor: { mode: "frame" }, api: {
    getList: () => [a], getActiveCutoutShot: () => ({ id: "shot" }), getFrameViewRect: () => ({ x: 0, y: 0, w: 100, h: 100 }),
    frameLocalPointToWorldDir: () => ({ x: 0, y: 0, z: 1 }), applyStrokeGroupOffset: () => true,
  } });
  h.editor.interaction = { kind: "move_multi", offset: { x: 0, y: 0 }, startCenter: { x: 100, y: 50 },
    stickerSnapshots: [{ id: "a", center: { x: 20, y: 30 } }], strokeSnapshots: [{ id: "g", center: { x: 1, y: 2 }, centerUv: { u: 0, v: 0 } }],
    rasterSnapshots: [{ id: "r", center: { x: 3, y: 4 }, centerUv: { u: 0, v: 0 } }] };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("frameLocalPointToWorldDir"), [[{ id: "shot" }, { x: 0.2, y: 0.3 }]]);
  assert.deepEqual(h.calls("screenPosToFrameAsErpPoint").map((args) => args.slice(0, 2)), [[{ x: 1, y: 2 }, { id: "shot" }], [{ x: 3, y: 4 }, { id: "shot" }]]);
  assert.equal(h.calls("applyRasterObjectOffset").length, 1);

  h = harness({ deps: { shotEditor: true }, editor: { mode: "frame" }, api: { getList: () => [a], getActiveCutoutShot: () => ({}) } });
  h.editor.interaction = { kind: "move_multi", offset: { x: 0, y: 0 }, startCenter: { x: 0, y: 0 }, stickerSnapshots: [{ id: "a", center: {} }] };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.called("writePose"), false);
  assert.equal(h.called("requestDraw"), false);

  h = harness({ editor: { mode: "unwrap" }, api: { getList: () => [a], getUnwrapRect: () => ({ x: 0, y: 0, w: 360, h: 180 }) } });
  h.editor.interaction = { kind: "move_multi", offset: { x: 0, y: 0 }, startCenter: { x: 100, y: 50 }, stickerSnapshots: [{ id: "a", center: { x: 180, y: 90 } }] };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("writePose"), [[a, { yaw_deg: 0, pitch_deg: 0 }]]);
});

test("a stroke group's scale and rotate transform it from its snapshot; Shift snaps the turn to 45 degrees", () => {
  const group = strokeGroup("g");
  let h = harness({ api: { applyStrokeGroupTransform: () => true } });
  h.editor.interaction = { kind: "scale_stroke_group", item: group, center: { x: 97, y: 46 }, startDist: 2, snapshot: "s", frameSnapshot: "f" };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("applyStrokeGroupTransform"), [["g-group", 2.5, 0, "s", "paint", "f"]]);
  assert.deepEqual(h.calls("markPaintStrokeVisualsDirty"), [[{ rebuildPaintEngine: false }]]);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.PAINT }]]);

  h = harness({ api: { applyStrokeGroupTransform: () => true } });
  h.editor.interaction = { kind: "rotate_stroke_group", item: group, center: { x: 90, y: 50 }, startAng: 0.1, snapshot: "s", frameSnapshot: "f" };
  h.onCanvasPointerMove(h.event({ x: 90, y: 60 }));
  assert.deepEqual(h.calls("applyStrokeGroupTransform"), [["g-group", 1, (Math.PI / 2 - 0.1) * RAD2DEG, "s", "paint", "f"]]);
  h.clear();
  h.onCanvasPointerMove(h.event({ x: 90, y: 60, shiftKey: true }));
  assert.deepEqual(h.calls("applyStrokeGroupTransform")[0][2], 90);

  h = harness({ api: { applyStrokeGroupTransform: () => false } });
  h.editor.interaction = { kind: "scale_stroke_group", item: group, center: { x: 0, y: 0 }, startDist: 1 };
  h.onCanvasPointerMove(h.event());
  assert.equal(h.called("requestDraw"), false);
});

test("the marquee follows the pointer", () => {
  const h = harness();
  const it = { kind: "marquee_select", start: { x: 0, y: 0 }, current: { x: 0, y: 0 } };
  h.editor.interaction = it;
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(it.current, { x: 100, y: 50 });
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.OVERLAY }]]);
});

test("scale writes both FOVs by the distance ratio, and the aspect of a sky Sticker", () => {
  const item = sticker("s", { pose: { hFOV_deg: 100, vFOV_deg: 100 } });
  let h = harness({ api: { writePose: (target, patch) => Object.assign(target.pose, patch) } });
  h.editor.interaction = { kind: "scale", item, center: { x: 97, y: 46 }, startDist: 2, startHFOV: 100, startVFOV: 40 };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("writePose"), [[item, { hFOV_deg: 179, vFOV_deg: 100 }]]);
  assert.equal(item.aspect_id, deriveCutoutAspectLabelFromFov(item));
  assert.deepEqual(h.sequence("writePose", "markObjectVisualsDirty", "requestDraw"), ["writePose", "markObjectVisualsDirty", "requestDraw"]);

  const scene = sticker("t");
  h = harness({ api: { isSceneSticker: () => true } });
  h.editor.interaction = { kind: "scale", item: scene, center: { x: 100, y: 50 }, startDist: 4, startHFOV: 2, startVFOV: 8 };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("writePose"), [[scene, { hFOV_deg: 1, vFOV_deg: 2 }]]);
  assert.equal(scene.aspect_id, undefined);
});

test("scale_x and scale_y write one FOV each", () => {
  const item = sticker("s");
  let h = harness({ api: { isSceneSticker: () => true } });
  h.editor.interaction = { kind: "scale_x", item, center: { x: 97, y: 46 }, startDist: 5, startHFOV: 30, startVFOV: 20 };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("writePose"), [[item, { hFOV_deg: 30 }]]);
  h = harness({ api: { isSceneSticker: () => true } });
  const group = strokeGroup("g");
  h.editor.interaction = { kind: "scale_y", item: group, center: { x: 97, y: 46 }, startDist: 2.5, startHFOV: 30, startVFOV: 20 };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.calls("writePose"), [[group, { vFOV_deg: 40 }]]);
  assert.equal(h.called("markObjectVisualsDirty"), false);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true }]]);
});

// docs/editor-interaction.md (the owner, 2026-10-11): Panorama Studio's Camera keeps its frame's aspect under every
// size handle; only the aspect presets change it.
test("the size handles of Panorama Studio's Camera write only its angle of view", () => {
  for (const [kind, startDist, hFov] of [["scale", 2.5, 120], ["scale_x", 2.5, 120]]) {
    const camera = { id: "camera", hFOV_deg: 60, vFOV_deg: 40, aspect_id: "3:2" };
    const h = harness();
    h.editor.interaction = { kind, item: camera, center: { x: 97, y: 46 }, startDist, startHFOV: 60, startVFOV: 40 };
    h.onCanvasPointerMove(h.event());
    assert.deepEqual(h.calls("writePose"), [[camera, { hFOV_deg: hFov }]], kind);
  }
  // The edge across the frame scales its height: the H FOV that height makes at the frame's aspect.
  const camera = { id: "camera", hFOV_deg: 60, vFOV_deg: 40 };
  const h = harness();
  h.editor.interaction = { kind: "scale_y", item: camera, center: { x: 97, y: 46 }, startDist: 10, startHFOV: 60, startVFOV: 40 };
  h.onCanvasPointerMove(h.event());
  const [[, pose]] = h.calls("writePose");
  assert.deepEqual(Object.keys(pose), ["hFOV_deg"]);
  const aspect = Math.tan(30 * Math.PI / 180) / Math.tan(20 * Math.PI / 180);
  assert.ok(Math.abs(Math.tan(pose.hFOV_deg * Math.PI / 360) - aspect * Math.tan(10 * Math.PI / 180)) < 1e-9);
});

test("rotate writes rot_deg of a sticker and roll_deg of another item; Shift snaps it", () => {
  const item = sticker("s");
  let h = harness({ api: { isSceneSticker: () => true } });
  h.editor.interaction = { kind: "rotate", item, center: { x: 90, y: 50 }, startRot: 10, startAng: 0 };
  h.onCanvasPointerMove(h.event({ x: 90, y: 60 }));
  assert.deepEqual(h.calls("writePose"), [[item, { rot_deg: 10 - 90 }]]);
  assert.equal(h.calls("markObjectVisualsDirty").length, 1);
  h.clear();
  h.editor.interaction.startRot = 30;
  h.onCanvasPointerMove(h.event({ x: 90, y: 60, shiftKey: true }));
  assert.deepEqual(h.calls("writePose"), [[item, { rot_deg: -45 }]]);

  const object = raster("r");
  h = harness();
  h.editor.interaction = { kind: "rotate", item: object, center: { x: 90, y: 50 }, startRot: 0, startAng: 0 };
  h.onCanvasPointerMove(h.event({ x: 110, y: 50 }));
  assert.deepEqual(h.calls("writePose"), [[object, { roll_deg: 0 }]]);
  assert.equal(h.called("markObjectVisualsDirty"), false);
});

test("a move of an unknown gesture only updates the pointer and the cursor", () => {
  const h = harness();
  h.editor.interaction = { kind: "draw" };
  h.onCanvasPointerMove(h.event());
  assert.deepEqual(h.effects(), ["setPointerPos", "updateCursor"]);
});

// ---------------------------------------------------------------- pointerup

const TAIL = ["syncViewToggleState", "updateSelectionMenu", "updateCursor", "requestDraw"];

test("a release of the roll knob's gesture is left to the knob", () => {
  const h = harness();
  const it = { kind: "roll_frame", source: "knob" };
  h.editor.interaction = it;
  h.onCanvasPointerUp();
  assert.equal(h.editor.interaction, it);
  assert.deepEqual(h.log, []);
});

test("a release of a space drag ends it without a draw", () => {
  for (const kind of ["space_pan", "space_orbit"]) {
    const h = harness();
    h.editor.interaction = { kind };
    h.onCanvasPointerUp();
    assert.equal(h.editor.interaction, null);
    assert.deepEqual(h.log.map((entry) => [entry.name, entry.args]), [["updateCursor", [{ x: 1, y: 2 }]], ["updateSelectionMenu", []]]);
  }
});

test("a release of a world selection ends it; a gizmo drag that changed the Sticker is one Undo step", () => {
  let h = harness();
  h.editor.gizmoAxis = "x";
  h.editor.interaction = { kind: "world_select" };
  h.onCanvasPointerUp();
  assert.equal(h.editor.interaction, null);
  assert.equal(h.editor.gizmoAxis, null);
  assert.deepEqual(h.effects(), ["updateCursor", "requestDraw"]);
  assert.deepEqual(h.calls("requestDraw"), [[]]);

  h = harness();
  h.editor.interaction = { kind: "world_gizmo", changed: false };
  h.onCanvasPointerUp();
  assert.deepEqual(h.calls("editorView.gizmoPointer"), [["up", "space-camera", 1, 2, 800, 400]]);
  assert.equal(h.values.runtime.backgroundDirty, true);
  assert.equal(h.called("pushHistory"), false);

  h = harness();
  h.editor.interaction = { kind: "world_gizmo", changed: true };
  h.onCanvasPointerUp();
  assert.deepEqual(h.effects(), ["editorView.gizmoPointer", "pushHistory", "commitAndRefreshNode", "updateSidePanel", "updateCursor", "requestDraw"]);
});

test("a release of a paint stroke commits it to the engine and the history", () => {
  const group = { actionGroupId: "g1", frame: { x: 1 } };
  const h = harness({ api: { commitPaintInteraction: () => true, getPaintingGroupList: () => [{ actionGroupId: "other", frame: 1 }, group] } });
  const it = { kind: "paint_stroke", stroke: { actionGroupId: " g1 ", toolKind: "brush" } };
  h.editor.interaction = it;
  h.onCanvasPointerUp();
  assert.equal(group.frame, null);
  assert.deepEqual(h.calls("commitPaintInteraction"), [[it]]);
  assert.deepEqual(h.calls("paintEngine.commitActiveStroke"), [[it.stroke, "target-descriptor"]]);
  assert.deepEqual(h.calls("markPaintStrokeVisualsDirty"), [[]]);
  assert.deepEqual(h.effects(), [
    "invalidateLivePaintPreviewCaches", "commitPaintInteraction", "markPaintStrokeVisualsDirty",
    "paintEngine.commitActiveStroke", "pushHistory", "commitState", "updateSidePanel",
    "updateSelectionMenu", "node.setDirtyCanvas", "requestDraw",
    "invalidateLivePaintPreviewCaches", ...TAIL,
  ]);
  assert.deepEqual(h.calls("node.setDirtyCanvas"), [[true, true]]);
  assert.equal(h.editor.interaction, null);
});

test("a released eraser stroke is cancelled in the engine and refreshes its revision", () => {
  const h = harness({ api: { commitPaintInteraction: () => true } });
  h.editor.interaction = { kind: "paint_stroke", stroke: { toolKind: "eraser" } };
  h.onCanvasPointerUp();
  assert.equal(h.calls("paintEngine.cancelActiveStroke").length, 1);
  assert.equal(h.calls("refreshPaintEngineRevisionCache").length, 1);
  assert.equal(h.called("paintEngine.commitActiveStroke"), false);
  assert.equal(h.called("getPaintingGroupList"), false);
  assert.equal(h.calls("pushHistory").length, 1);
});

test("a stroke whose last segment is empty but had committed segments still makes a history step", () => {
  const h = harness({ api: { commitPaintInteraction: () => false } });
  h.editor.interaction = { kind: "paint_lasso_fill", _hasCommittedSegments: true, stroke: {} };
  h.onCanvasPointerUp();
  assert.equal(h.calls("paintEngine.cancelActiveStroke").length, 1);
  assert.equal(h.called("paintEngine.commitActiveStroke"), false);
  assert.equal(h.calls("pushHistory").length, 1);
  assert.equal(h.calls("commitState").length, 1);
});

test("a stroke that commits nothing is cancelled without a history step", () => {
  let h = harness({ api: { commitPaintInteraction: () => false } });
  h.editor.interaction = { kind: "paint_stroke", stroke: {} };
  h.onCanvasPointerUp();
  assert.equal(h.calls("paintEngine.cancelActiveStroke").length, 1);
  assert.equal(h.called("pushHistory"), false);
  assert.equal(h.called("markPaintStrokeVisualsDirty"), false);

  h = harness({ api: { commitPaintInteraction: () => true, getActivePaintTargetDescriptor: () => null } });
  h.editor.interaction = { kind: "paint_stroke", stroke: {} };
  h.onCanvasPointerUp();
  assert.equal(h.called("paintEngine.commitActiveStroke"), false);
  assert.equal(h.calls("pushHistory").length, 1);

  h = harness({ api: { commitPaintInteraction: () => false, getActivePaintTargetDescriptor: () => null } });
  h.editor.interaction = { kind: "paint_stroke", stroke: {} };
  h.onCanvasPointerUp();
  assert.equal(h.called("paintEngine.cancelActiveStroke"), false);
});

test("a released marquee selects the items it touches", () => {
  const a = sticker("a");
  const b = sticker("b");
  const g = strokeGroup("g");
  const r = raster("r");
  const touched = new Set([a, g, r]);
  const h = harness({ deps: { shotEditor: true }, api: {
    getList: () => [a, b], getSelectableStrokeGroupItems: () => [g], getSelectableRasterObjectItems: () => [r],
    rectIntersectsGeom: (rect, geom) => [...touched].some((item) => item.geom === geom),
  } });
  h.editor.interaction = { kind: "marquee_select", start: { x: 0, y: 0 }, current: { x: 5, y: 5 } };
  h.onCanvasPointerUp();
  assert.deepEqual(h.calls("rectFromPoints"), [[{ x: 0, y: 0 }, { x: 5, y: 5 }]]);
  assert.deepEqual(h.calls("setSelectedItems"), [[[a, g, r], "raster:r"]]);
  assert.equal(h.editor.cutoutAspectOpen, false);
  assert.deepEqual(h.effects(), [
    "setSelectedItems", "updateSidePanel", "updateSelectionMenu", "requestDraw", "invalidateLivePaintPreviewCaches", ...TAIL,
  ]);
  assert.equal(h.called("pushHistory"), false);
});

test("a released marquee in Cutout picks from the selectable items without the shot; touching nothing clears", () => {
  const a = sticker("a");
  const shot = { id: "shot", kind: "shot", geom: {} };
  const h = harness({ deps: { type: "cutout", shotEditor: true }, api: {
    getCutoutSelectableItemsForHit: () => [shot, a], rectIntersectsGeom: () => true,
  } });
  h.editor.interaction = { kind: "marquee_select", start: { x: 0, y: 0 }, current: { x: 5, y: 5 } };
  h.onCanvasPointerUp();
  assert.deepEqual(h.calls("setSelectedItems"), [[[a], "a"]]);
  assert.equal(h.called("getList"), false);

  const h2 = harness({ deps: { shotEditor: true } });
  h2.editor.interaction = { kind: "marquee_select", start: { x: 0, y: 0 }, current: { x: 5, y: 5 } };
  h2.onCanvasPointerUp();
  assert.deepEqual(h2.calls("setSelectedItems"), [[[], null]]);
  assert.equal(h2.editor.cutoutAspectOpen, true);
});

test("a release of a Frame view gesture that changed the Camera is one Undo step", () => {
  for (const kind of ["pan_frame", "roll_frame", "frame_pan", "frame_orbit"]) {
    let h = harness();
    h.editor.interaction = { kind, changed: true, source: "alt" };
    h.onCanvasPointerUp();
    const expected = ["pushHistory", "commitAndRefreshNode", "updateSidePanel"];
    if (kind === "roll_frame") expected.push("hideTooltip");
    assert.deepEqual(h.effects(), [...expected, "invalidateLivePaintPreviewCaches", ...TAIL], kind);

    h = harness();
    h.editor.interaction = { kind, changed: false, source: "shift" };
    h.onCanvasPointerUp();
    assert.equal(h.called("pushHistory"), false, kind);
    assert.equal(h.called("commitState"), false, kind);
  }
});

test("a release of an item edit is one Undo step, even without a move", () => {
  for (const kind of ["move", "scale", "scale_x", "scale_y", "rotate", "draw"]) {
    const h = harness();
    h.editor.interaction = { kind };
    h.onCanvasPointerUp();
    assert.deepEqual(h.effects(), [
      "pushHistory", "commitState", "node.setDirtyCanvas", "syncSidePanelControls", "updateSelectionMenu", "requestDraw",
      "invalidateLivePaintPreviewCaches", ...TAIL,
    ], kind);
  }
});

test("a release of a paint item edit rebuilds the strokes or the composite first", () => {
  for (const [interaction, mark, args] of [
    [{ kind: "move_stroke_group" }, "markPaintStrokeVisualsDirty", [{ rebuildPaintEngine: true }]],
    [{ kind: "scale_stroke_group" }, "markPaintStrokeVisualsDirty", [{ rebuildPaintEngine: true }]],
    [{ kind: "rotate_stroke_group" }, "markPaintStrokeVisualsDirty", [{ rebuildPaintEngine: true }]],
    [{ kind: "move_raster_object" }, "markPaintCompositeVisualsDirty", []],
    [{ kind: "scale_raster_object" }, "markPaintCompositeVisualsDirty", []],
    [{ kind: "move_multi", strokeSnapshots: [{}], rasterSnapshots: [{}] }, "markPaintStrokeVisualsDirty", [{ rebuildPaintEngine: true }]],
    [{ kind: "move_multi", strokeSnapshots: [], rasterSnapshots: [{}] }, "markPaintCompositeVisualsDirty", []],
  ]) {
    const h = harness();
    h.editor.interaction = interaction;
    h.onCanvasPointerUp();
    assert.deepEqual(h.log.slice(0, 2).map((entry) => [entry.name, entry.args]), [[mark, args], ["pushHistory", []]], interaction.kind);
  }
  const h = harness();
  h.editor.interaction = { kind: "move_multi", stickerSnapshots: [{}], strokeSnapshots: [], rasterSnapshots: [] };
  h.onCanvasPointerUp();
  assert.equal(h.log[0].name, "pushHistory");
});

test("a release of looking around lets the view coast", () => {
  const h = harness();
  h.editor.interaction = { kind: "view" };
  h.onCanvasPointerUp();
  assert.equal(h.called("pushHistory"), false);
  assert.deepEqual(h.effects(), ["invalidateLivePaintPreviewCaches", "startAnimation", "viewController.endDrag", ...TAIL]);
  assert.ok(isNum(h.calls("viewController.endDrag")[0][0]));
});

test("a release without a gesture only syncs", () => {
  const h = harness();
  h.onCanvasPointerUp();
  assert.deepEqual(h.effects(), ["invalidateLivePaintPreviewCaches", ...TAIL]);
  assert.deepEqual(h.calls("updateCursor"), [[{ x: 1, y: 2 }]]);
  assert.deepEqual(h.calls("requestDraw"), [[]]);
});

// ---------------------------------------------------------------- cancel, mousemove, wheel

test("a cancel the Frame view's Camera gesture takes ends there", () => {
  const h = harness({ api: { cancelFrameCameraGesture: () => true } });
  const it = { kind: "pan_frame" };
  h.editor.interaction = it;
  h.onCanvasPointerCancel();
  assert.equal(h.editor.interaction, it);
  assert.deepEqual(h.effects(), ["cancelFrameCameraGesture"]);
});

test("a cancel of a world gesture ends it as a release does", () => {
  const h = harness();
  h.editor.interaction = { kind: "world_gizmo", changed: true };
  h.onCanvasPointerCancel();
  assert.deepEqual(h.effects(), ["cancelFrameCameraGesture", "editorView.gizmoPointer", "pushHistory", "commitAndRefreshNode", "updateSidePanel", "updateCursor", "requestDraw"]);
  assert.equal(h.editor.interaction, null);
});

test("a cancel of looking around lets the view coast; of a stroke drops it from the engine", () => {
  let h = harness();
  h.editor.interaction = { kind: "view" };
  h.onCanvasPointerCancel();
  assert.deepEqual(h.effects(), ["cancelFrameCameraGesture", "startAnimation", "viewController.endDrag", "invalidateLivePaintPreviewCaches", "syncViewToggleState", "updateCursor", "requestDraw"]);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true }]]);

  for (const kind of ["paint_stroke", "paint_lasso_fill"]) {
    h = harness();
    const it = { kind };
    h.editor.interaction = it;
    h.onCanvasPointerCancel();
    assert.deepEqual(h.effects(), ["cancelFrameCameraGesture", "invalidateLivePaintPreviewCaches", "paintEngine.cancelActiveStroke", "invalidateLivePaintPreviewCaches", "syncViewToggleState", "updateCursor", "requestDraw"]);
    assert.deepEqual(h.calls("getActivePaintTargetDescriptor"), [[it]]);
    assert.equal(h.editor.interaction, null);
  }
  h = harness({ api: { getActivePaintTargetDescriptor: () => null } });
  h.editor.interaction = { kind: "paint_stroke" };
  h.onCanvasPointerCancel();
  assert.equal(h.called("paintEngine.cancelActiveStroke"), false);
});

test("a cancel of another gesture drops it without a history step", () => {
  const h = harness();
  h.editor.interaction = { kind: "move" };
  h.onCanvasPointerCancel();
  assert.equal(h.editor.interaction, null);
  assert.deepEqual(h.effects(), ["cancelFrameCameraGesture", "invalidateLivePaintPreviewCaches", "syncViewToggleState", "updateCursor", "requestDraw"]);
});

test("a mouse move updates the cursor without a gesture, and draws the Frame view's overlay for the cursor tool", () => {
  let h = harness({ editor: { mode: "frame" } });
  h.onCanvasMouseMove(h.event());
  assert.deepEqual(h.effects(), ["setPointerPos", "updateCursor", "requestDraw"]);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.OVERLAY }]]);

  for (const extra of [{ editor: { mode: "frame" }, api: { setPointerPos: () => false } }, { editor: { mode: "frame", primaryTool: "paint" } }, { editor: { mode: "pano" } }]) {
    h = harness(extra);
    h.onCanvasMouseMove(h.event());
    assert.equal(h.called("requestDraw"), false);
    assert.equal(h.calls("updateCursor").length, 1);
  }
  h = harness();
  h.editor.interaction = { kind: "view" };
  h.onCanvasMouseMove(h.event());
  assert.deepEqual(h.effects(), ["setPointerPos"]);
});

// What a Frame view wheel step does is frame_view.js wheelFrameView's (tests/editor_frame_wheel.test.mjs).
test("the wheel in the Frame view is the Frame view's step at the pointer", () => {
  let h = harness({ editor: { mode: "frame" } });
  h.onCanvasWheel(h.event({ deltaY: 3 }));
  assert.deepEqual(h.effects(), ["wheelFrameView", "e.preventDefault"]);
  assert.deepEqual(h.calls("wheelFrameView"), [[{ x: 100, y: 50 }, 1]]);

  h = harness({ editor: { mode: "frame" } });
  h.onCanvasWheel(h.event({ deltaY: 0 }));
  assert.equal(h.called("wheelFrameView"), false);
  assert.equal(h.calls("e.preventDefault").length, 1);
  assert.equal(h.called("cancelViewTransition"), false);
});

test("the wheel in the panorama zooms toward the pointer in 6DoF and through the view controller otherwise", () => {
  let h = harness({ api: { isFreeSpaceView: () => true } });
  h.onCanvasWheel(h.event({ deltaY: -2 }));
  assert.deepEqual(h.calls("zoomSpaceAt"), [[{ x: 100, y: 50 }, 1]]);
  assert.deepEqual(h.sequence("cancelViewTransition", "zoomSpaceAt", "e.preventDefault"), ["cancelViewTransition", "zoomSpaceAt", "e.preventDefault"]);
  assert.equal(h.called("viewController.applyWheelEvent"), false);

  h = harness({ api: { isFreeSpaceView: () => true } });
  h.onCanvasWheel(h.event({ deltaY: 0 }));
  assert.equal(h.called("zoomSpaceAt"), false);

  h = harness({ wheelApplies: true });
  const e = h.event({ deltaY: 1 });
  h.onCanvasWheel(e);
  assert.deepEqual(h.calls("viewController.applyWheelEvent"), [[e]]);
  assert.deepEqual(h.calls("requestDraw"), [[{ localOnly: true, reason: DRAW_REASON.VIEW }]]);
  assert.equal(h.calls("e.preventDefault").length, 1);

  h = harness({ wheelApplies: false });
  h.onCanvasWheel(h.event({ deltaY: 1 }));
  assert.equal(h.called("requestDraw"), false);
  assert.equal(h.calls("e.preventDefault").length, 1);
});

test("the wheel in Unwrap does nothing", () => {
  const h = harness({ editor: { mode: "unwrap" } });
  h.onCanvasWheel(h.event({ deltaY: 1 }));
  assert.deepEqual(h.log, []);
});
