import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";

import {
  DIAGNOSTICS_EXPORT_COMMAND,
  DIAGNOSTICS_MAX_CHARS,
  DIAGNOSTICS_PREVIOUS_KEY,
  DIAGNOSTICS_RECORDS,
  DIAGNOSTICS_SETTING,
  DIAGNOSTICS_STORAGE_KEY,
  createDiagnostics,
} from "../web_src/pano_diagnostics.js";
import { createPanoEditorExtension } from "../web_src/pano_editor_extension.js";
import { EDITOR_FILES } from "./editor_source.mjs";

function fakeElement(tag) {
  const listeners = new Map();
  return {
    tag,
    width: 300,
    height: 150,
    addEventListener(type, listener) {
      listeners.set(type, listener);
    },
    dispatch(type) {
      listeners.get(type)?.();
    },
  };
}

function fakeStorage(initial = {}) {
  const items = new Map(Object.entries(initial));
  return {
    items,
    getItem: (key) => (items.has(key) ? items.get(key) : null),
    setItem: (key, value) => items.set(key, String(value)),
    removeItem: (key) => items.delete(key),
  };
}

// A collector the test drives: collect(target) runs the registry's callback and empties its WeakRefs.
function fakeCollector() {
  const collected = new Set();
  const registries = [];
  class FakeWeakRef {
    constructor(target) {
      this.target = target;
    }

    deref() {
      return collected.has(this.target) ? undefined : this.target;
    }
  }
  class FakeRegistry {
    constructor(callback) {
      this.callback = callback;
      this.held = new Map();
      registries.push(this);
    }

    register(target, held) {
      this.held.set(target, held);
    }
  }
  return {
    WeakRef: FakeWeakRef,
    FinalizationRegistry: FakeRegistry,
    collect(target) {
      collected.add(target);
      for (const registry of registries) {
        if (registry.held.has(target)) registry.callback(registry.held.get(target));
      }
    },
  };
}

function setup(overrides = {}) {
  const storage = overrides.storageObject ?? fakeStorage();
  const collector = fakeCollector();
  const logs = [];
  let time = 0;
  let unload = null;
  const intervals = [];
  const diagnostics = createDiagnostics({
    now: () => time,
    clock: () => 1_700_000_000_000 + time,
    storage: () => storage,
    document: () => ({ createElement: fakeElement }),
    setInterval: (callback, ms) => {
      intervals.push({ callback, ms });
      return intervals.length;
    },
    clearInterval: () => {},
    addUnload: (callback) => {
      unload = callback;
    },
    removeUnload: () => {
      unload = null;
    },
    memory: () => ({ usedJSHeapSize: 100 * 1024 ** 2, totalJSHeapSize: 200 * 1024 ** 2, jsHeapSizeLimit: 4096 * 1024 ** 2 }),
    observeLongTasks: () => () => {},
    userAgent: () => "test",
    console: { info: (...args) => logs.push(["info", ...args]), warn: (...args) => logs.push(["warn", ...args]) },
    WeakRef: collector.WeakRef,
    FinalizationRegistry: collector.FinalizationRegistry,
    ...overrides,
  });
  return {
    diagnostics,
    storage,
    collector,
    logs,
    intervals,
    advance: (ms) => {
      time += ms;
    },
    unload: () => unload?.(),
    hasUnload: () => !!unload,
  };
}

test("while off the factories only create and nothing is sampled or written", () => {
  const { diagnostics, storage, intervals, hasUnload } = setup();
  diagnostics.setEnabled(false);
  const canvas = diagnostics.createCanvas({ label: "a", width: 10, height: 20 });
  assert.deepEqual([canvas.tag, canvas.width, canvas.height], ["canvas", 10, 20]);
  const video = diagnostics.createVideo({ createElement: fakeElement }, "v");
  assert.equal(video.tag, "video");
  diagnostics.releaseCanvas(canvas);
  assert.deepEqual([canvas.width, canvas.height], [0, 0]);
  assert.equal(diagnostics.frameStart(), -1);
  const disposeContext = diagnostics.watchContext(fakeElement("canvas"), "editor");
  disposeContext();
  assert.equal(intervals.length, 0);
  assert.equal(hasUnload(), false);
  assert.equal(storage.items.size, 0);
  // Turned on later, it has counted nothing made while off.
  diagnostics.setEnabled(true);
  const record = diagnostics.sample();
  assert.deepEqual([record.canvas.created, record.canvas.released, record.canvas.alive], [0, 0, 0]);
  assert.deepEqual([record.video.created, record.webgl.created], [0, 0]);
});

test("the canvas factory counts canvases made, released and collected, and their pixels", () => {
  const { diagnostics, collector } = setup();
  diagnostics.setEnabled(true);
  const big = diagnostics.createCanvas({ label: "stage", width: 1000, height: 500 });
  const small = diagnostics.createCanvas({ label: "still", width: 10, height: 10 });
  const plain = diagnostics.createCanvas({ label: "still" });
  let record = diagnostics.sample();
  assert.equal(record.canvas.created, 3);
  assert.equal(record.canvas.alive, 3);
  assert.equal(record.canvas.pixels, 1000 * 500 + 100 + 300 * 150);
  assert.deepEqual(record.canvas.largest, [1000, 500]);
  assert.deepEqual(record.canvas.byLabel, { stage: [1, 500000], still: [2, 100 + 45000] });

  diagnostics.releaseCanvas(big);
  record = diagnostics.sample();
  assert.equal(record.canvas.released, 1);
  assert.equal(record.canvas.alive, 3);
  assert.equal(record.canvas.sized, 2);
  assert.equal(record.canvas.pixels, 100 + 45000);

  collector.collect(small);
  collector.collect(plain);
  record = diagnostics.sample();
  assert.equal(record.canvas.collected, 2);
  assert.equal(record.canvas.alive, 1);
  assert.equal(record.canvas.pixels, 0);
});

test("an OffscreenCanvas is made where there is one and counted the same", () => {
  const previous = globalThis.OffscreenCanvas;
  globalThis.OffscreenCanvas = class {
    constructor(width, height) {
      Object.assign(this, { width, height, offscreen: true });
    }
  };
  try {
    const { diagnostics } = setup();
    diagnostics.setEnabled(true);
    const canvas = diagnostics.createCanvas({ width: 4, height: 2, offscreen: true });
    assert.equal(canvas.offscreen, true);
    assert.equal(diagnostics.sample().canvas.pixels, 8);
  } finally {
    globalThis.OffscreenCanvas = previous;
  }
});

test("VIDEO elements are listed with their state", () => {
  const { diagnostics, collector } = setup();
  diagnostics.setEnabled(true);
  const video = diagnostics.createVideo({ createElement: fakeElement }, "node.playback");
  Object.assign(video, { paused: false, ended: false, currentSrc: "a.mp4", videoWidth: 64, videoHeight: 32, readyState: 4, isConnected: true });
  const idle = diagnostics.trackVideo({ paused: true, src: "" }, "editor.video");
  let record = diagnostics.sample();
  assert.equal(record.video.alive, 2);
  assert.equal(record.video.playing, 1);
  assert.deepEqual(record.video.list[0], { label: "node.playback", playing: true, src: true, size: [64, 32], ready: 4, connected: true });
  assert.equal(record.video.list[1].src, false);
  // Only an element with a src holds a decoder: a released one counts as alive until it is collected.
  assert.equal(record.video.loaded, 1);
  collector.collect(idle);
  record = diagnostics.sample();
  assert.deepEqual([record.video.alive, record.video.collected], [1, 1]);
});

test("WebGL contexts are counted, and a disposed context's loss is not a loss", () => {
  const { diagnostics } = setup();
  diagnostics.setEnabled(true);
  const editorCanvas = fakeElement("canvas");
  const nodeCanvas = fakeElement("canvas");
  diagnostics.watchContext(editorCanvas, "editor");
  const disposeNode = diagnostics.watchContext(nodeCanvas, "node");
  editorCanvas.dispatch("webglcontextlost");
  let record = diagnostics.sample();
  assert.deepEqual(record.webgl, { created: 2, lost: 1, restored: 0, disposed: 0, alive: 1 });
  editorCanvas.dispatch("webglcontextrestored");
  disposeNode();
  nodeCanvas.dispatch("webglcontextlost");
  record = diagnostics.sample();
  assert.deepEqual(record.webgl, { created: 2, lost: 1, restored: 1, disposed: 1, alive: 1 });
  const types = diagnostics.exportData().current.events.map((event) => `${event.type}:${event.label}`);
  assert.deepEqual(types, [
    "webgl-created:editor",
    "webgl-created:node",
    "webglcontextlost:editor",
    "webglcontextrestored:editor",
    "webgl-disposed:node",
  ]);
});

test("frames, renders and sources are sampled, and the frame counts start over each sample", () => {
  const { diagnostics, advance } = setup();
  diagnostics.setEnabled(true);
  for (const ms of [5, 30, 10]) {
    const start = diagnostics.frameStart();
    advance(ms);
    diagnostics.frameEnd(start);
  }
  const start = diagnostics.frameStart();
  advance(12);
  diagnostics.renderEnd("node", start);
  diagnostics.addSource("editor", () => ({ interaction: "move_sticker", playing: false }));
  const remove = diagnostics.addSource("three.node", () => ({ textures: 3 }));
  let record = diagnostics.sample();
  assert.deepEqual(record.frame, { count: 3, maxMs: 30, longTasks: 0, longTaskMaxMs: 0 });
  assert.deepEqual(record.renders, { node: { count: 1, maxMs: 12 } });
  assert.deepEqual(record.sources, { editor: { interaction: "move_sticker", playing: false }, "three.node": { textures: 3 } });
  assert.deepEqual(record.heap, { used: 100, total: 200, limit: 4096 });
  remove();
  record = diagnostics.sample();
  assert.equal(record.frame.count, 0);
  assert.deepEqual(record.renders, {});
  assert.deepEqual(Object.keys(record.sources), ["editor"]);
});

test("the ring keeps the last records and localStorage gets at most the size limit", () => {
  const { diagnostics, storage, intervals } = setup();
  diagnostics.setEnabled(true);
  assert.equal(intervals[0].ms, 1000);
  // A large source makes each record about 2 KB, so the limit cuts the stored records.
  diagnostics.addSource("big", () => ({ text: "x".repeat(2000) }));
  for (let index = 0; index < DIAGNOSTICS_RECORDS + 50; index += 1) intervals[0].callback();
  const records = diagnostics.exportData().current.records;
  assert.equal(records.length, DIAGNOSTICS_RECORDS);
  const stored = storage.getItem(DIAGNOSTICS_STORAGE_KEY);
  assert.ok(stored.length <= DIAGNOSTICS_MAX_CHARS, `${stored.length}`);
  const parsed = JSON.parse(stored);
  assert.ok(parsed.records.length > 50 && parsed.records.length < DIAGNOSTICS_RECORDS);
  // The newest records are the ones kept.
  assert.equal(parsed.records.at(-1).t, records.at(-1).t);
  assert.equal(parsed.closed, false);
  const small = diagnostics.serialize(10_000);
  assert.ok(small.length <= 10_000);
  assert.ok(JSON.parse(small).records.length >= 1);
});

test("a write that localStorage refuses is dropped", () => {
  const storageObject = fakeStorage();
  storageObject.setItem = () => {
    throw new Error("QuotaExceededError");
  };
  const { diagnostics } = setup({ storageObject });
  diagnostics.setEnabled(true);
  diagnostics.sample();
  diagnostics.sample();
  assert.equal(diagnostics.exportData().current.records.length, 2);
});

test("without localStorage the diagnostics still sample", () => {
  const { diagnostics } = setup({ storage: () => null });
  assert.equal(diagnostics.recoverPrevious(), null);
  diagnostics.setEnabled(true);
  diagnostics.sample();
  diagnostics.sample();
  assert.equal(diagnostics.exportData().current.records.length, 2);
});

test("closing the page or turning the setting off marks the session closed", () => {
  const first = setup();
  first.diagnostics.setEnabled(true);
  first.diagnostics.sample();
  first.unload();
  let stored = JSON.parse(first.storage.getItem(DIAGNOSTICS_STORAGE_KEY));
  assert.deepEqual([stored.closed, stored.closedBy], [true, "unload"]);
  assert.equal(stored.records.length, 1);

  const second = setup();
  second.diagnostics.setEnabled(true);
  second.diagnostics.setEnabled(false);
  stored = JSON.parse(second.storage.getItem(DIAGNOSTICS_STORAGE_KEY));
  assert.deepEqual([stored.closed, stored.closedBy], [true, "disabled"]);
  assert.equal(second.hasUnload(), false);
});

test("the next load reports a session that did not close as a crash, once", () => {
  const crashed = { v: 1, session: "s1", startedAt: 1, savedAt: 2, closed: false, events: [], records: [{ t: 2, canvas: { mb: 900 } }] };
  const storageObject = fakeStorage({ [DIAGNOSTICS_STORAGE_KEY]: JSON.stringify(crashed) });
  const { diagnostics, storage, logs } = setup({ storageObject });
  // ComfyUI calls the setting's onChange with the saved value (here off) when it registers it.
  diagnostics.setEnabled(false);
  assert.equal(logs.length, 1);
  assert.equal(logs[0][0], "warn");
  assert.match(logs[0][1], /did NOT close normally/);
  assert.match(logs[0][2], /"mb":900/);
  assert.equal(storage.getItem(DIAGNOSTICS_STORAGE_KEY), null);
  assert.deepEqual(JSON.parse(storage.getItem(DIAGNOSTICS_PREVIOUS_KEY)), crashed);
  assert.deepEqual(diagnostics.exportData().previous, crashed);
  diagnostics.setEnabled(true);
  assert.equal(logs.length, 1);

  // The load after that has the moved session to export, and says nothing.
  const next = setup({ storageObject: fakeStorage({ [DIAGNOSTICS_PREVIOUS_KEY]: JSON.stringify(crashed) }) });
  next.diagnostics.setEnabled(false);
  assert.equal(next.logs.length, 0);
  assert.deepEqual(next.diagnostics.exportData().previous, crashed);
});

test("the next load reports a session that closed normally as such", () => {
  const closed = { v: 1, session: "s1", startedAt: 1, closed: true, closedBy: "unload", events: [], records: [] };
  const { diagnostics, logs } = setup({ storageObject: fakeStorage({ [DIAGNOSTICS_STORAGE_KEY]: JSON.stringify(closed) }) });
  diagnostics.setEnabled(true);
  assert.equal(logs.length, 1);
  assert.equal(logs[0][0], "info");
  assert.match(logs[0][1], /closed normally/);
});

test("a corrupt stored session is ignored", () => {
  const { diagnostics, logs } = setup({ storageObject: fakeStorage({ [DIAGNOSTICS_STORAGE_KEY]: "{not json" }) });
  diagnostics.setEnabled(true);
  assert.equal(logs.length, 0);
  assert.equal(diagnostics.exportData().previous, null);
});

test("the setting is off by default and the export command is in the Extensions menu", () => {
  assert.equal(DIAGNOSTICS_SETTING.id, "PanoramaSuite.Debug.Diagnostics");
  assert.deepEqual(DIAGNOSTICS_SETTING.category, ["Panorama Suite", "Debug", "Diagnostics"]);
  assert.equal(DIAGNOSTICS_SETTING.type, "boolean");
  assert.equal(DIAGNOSTICS_SETTING.defaultValue, false);
  const extension = createPanoEditorExtension({ app: {}, openEditor() {}, attachStickers() {}, attachCutout() {}, attachPreview() {} });
  assert.ok(extension.settings.includes(DIAGNOSTICS_SETTING));
  assert.deepEqual(extension.commands, [DIAGNOSTICS_EXPORT_COMMAND]);
  assert.deepEqual(extension.menuCommands, [{ path: ["Extensions", "Panorama Suite"], commands: [DIAGNOSTICS_EXPORT_COMMAND.id] }]);
});

test("the suite makes its canvases and VIDEO elements through the diagnostics factories", () => {
  const files = readdirSync(new URL("../web_src/", import.meta.url))
    .filter((name) => name.endsWith(".js") && name !== "pano_diagnostics.js")
    .concat(EDITOR_FILES.filter((name) => name.startsWith("editor/")));
  assert.ok(files.includes("pano_editor.js"));
  for (const name of files) {
    const source = readFileSync(new URL(`../web_src/${name}`, import.meta.url), "utf8");
    assert.doesNotMatch(source, /createElement\??\.?\(\s*["'](canvas|video)["']/, name);
    assert.doesNotMatch(source, /new OffscreenCanvas\(/, name);
  }
});
