import assert from "node:assert/strict";
import test from "node:test";

import {
  createPanoEditorExtension,
  queuePendingStickerOperation,
} from "../web_src/pano_editor_extension.js";

function makeWidget(name, value = "") {
  return { name, value, callback() {} };
}

function makeNode(size = [220, 120]) {
  return {
    size: [...size],
    widgets: [
      makeWidget("output_preset", "2048"),
      makeWidget("coverage", "360"),
      makeWidget("bg_color", "#00ff00"),
      makeWidget("state_json", "{}"),
      makeWidget("sticker_state", ""),
    ],
    addWidget(type, name, value, callback) {
      const widget = { type, name, value, callback };
      this.widgets.push(widget);
      return widget;
    },
    setDirtyCanvas() {},
    graph: { setDirtyCanvas() {} },
  };
}

test("stickers lifecycle preserves prior hooks and installs one editor button without resizing", () => {
  const calls = [];
  function NodeType() {}
  NodeType.prototype.onNodeCreated = function (...args) {
    calls.push(["created", this, args]);
    return "created-result";
  };
  NodeType.prototype.onConfigure = function (...args) {
    calls.push(["configured", this, args]);
    return "configured-result";
  };
  NodeType.prototype.onAdded = function (...args) {
    calls.push(["added", this, args]);
    return "added-result";
  };
  const attachCalls = [];
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers(node) { attachCalls.push(node); },
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
    enableStickersPreview: false,
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "Panorama Stickers" });
  const node = makeNode([247, 133]);

  assert.equal(NodeType.prototype.onNodeCreated.call(node, "create"), "created-result");
  assert.equal(NodeType.prototype.onConfigure.call(node, "configure"), "configured-result");
  assert.equal(NodeType.prototype.onAdded.call(node, "add"), "added-result");

  assert.deepEqual(calls.map(([name, receiver, args]) => [name, receiver === node, args]), [
    ["created", true, ["create"]],
    ["configured", true, ["configure"]],
    ["added", true, ["add"]],
  ]);
  assert.equal(node.widgets.filter((widget) => widget.name === "Open Stickers Editor").length, 1);
  assert.deepEqual(node.size, [247, 133]);
  assert.equal(attachCalls.length, 0);
});

test("cutout lifecycle attaches once and initializes only an invalid node size", () => {
  function NodeType() {}
  const attached = [];
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout(node, options) { attached.push([node, options]); },
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaCutout" });
  const node = makeNode([0, 0]);

  NodeType.prototype.onNodeCreated.call(node);
  NodeType.prototype.onConfigure.call(node);
  NodeType.prototype.onAdded.call(node);

  assert.deepEqual(node.size, [360, 260]);
  assert.equal(attached.length, 1);
  assert.equal(node.widgets.filter((widget) => widget.name === "Open Cutout Editor").length, 1);
  assert.equal(node.widgets.find((widget) => widget.name === "state_json").hidden, true);
});

test("coverage changes preserve the widget callback and invalidate every preview cache", () => {
  const dirtied = [];
  const node = makeNode();
  const coverage = node.widgets.find((widget) => widget.name === "coverage");
  coverage.callback = (value) => `previous:${value}`;
  node.__panoStateCache = {};
  node.__panoLiveStateOverride = {};
  node.__panoWrappedErpCache = {};
  node.__panoPanoBackgroundCache = {};
  node.__panoPreviewNodeRuntime = { requestDraw() { dirtied.push("runtime"); } };
  node.__panoDomPreview = { requestDraw() { dirtied.push("dom"); } };
  node.setDirtyCanvas = () => dirtied.push("node");
  node.graph.setDirtyCanvas = () => dirtied.push("graph");
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() { dirtied.push("app"); } } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });

  extension.nodeCreated(node);
  assert.equal(coverage.callback("180"), "previous:180");
  assert.equal(node.__panoStateCache, null);
  assert.equal(node.__panoLiveStateOverride, null);
  assert.equal(node.__panoWrappedErpCache, null);
  assert.equal(node.__panoPanoBackgroundCache, null);
  assert.deepEqual(dirtied, ["runtime", "dom", "node", "graph", "app"]);
});

test("legacy stickers widget values migrate after configured values are restored", () => {
  function NodeType() {}
  NodeType.prototype.onConfigure = function (values) {
    this.widgets.find((widget) => widget.name === "coverage").value = values.coverage;
    this.widgets.find((widget) => widget.name === "bg_color").value = values.bgColor;
    this.widgets.find((widget) => widget.name === "state_json").value = values.stateJson;
  };
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaStickers" });
  const node = makeNode();

  NodeType.prototype.onNodeCreated.call(node);
  NodeType.prototype.onConfigure.call(node, {
    coverage: "360",
    bgColor: "#00ff00",
    stateJson: "{}",
  });
  NodeType.prototype.onConfigure.call(node, {
    coverage: "#123456",
    bgColor: JSON.stringify({ coverage: 180 }),
    stateJson: "old-sticker-state",
  });

  assert.equal(node.widgets.find((widget) => widget.name === "coverage").value, "180");
  assert.equal(node.widgets.find((widget) => widget.name === "bg_color").value, "#123456");
  assert.equal(node.widgets.find((widget) => widget.name === "state_json").value, JSON.stringify({ coverage: 180 }));
  assert.equal(node.widgets.find((widget) => widget.name === "sticker_state").value, "old-sticker-state");
});

test("standalone preview waits for graph identity and attaches only once", () => {
  const queue = [];
  const attached = [];
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview(node) { attached.push(node); },
    requestFrame(callback) { queue.push(callback); },
  });
  const node = makeNode();
  node.comfyClass = "Panorama Preview";
  node.id = -1;
  node.graph = null;

  extension.nodeCreated(node);
  extension.nodeCreated(node);
  assert.equal(queue.length, 1);
  queue.shift()();
  assert.equal(queue.length, 1);
  node.id = 7;
  node.graph = { setDirtyCanvas() {} };
  queue.shift()();

  assert.equal(attached.length, 1);
  assert.equal(node.__panoStandaloneInstallDone, true);
  assert.equal(node.widgets.filter((widget) => widget.name === "Open Preview").length, 1);
});

test("state serialization waits for pending sticker uploads before flushing the latest editor state", async () => {
  function NodeType() {}
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaStickers" });
  const node = makeNode();
  NodeType.prototype.onNodeCreated.call(node);
  const stateWidget = node.widgets.find((widget) => widget.name === "state_json");
  stateWidget.value = "old-state";

  let resolveUpload;
  const pendingUpload = new Promise((resolve) => { resolveUpload = resolve; });
  node.__panoPendingStickerUploads = new Map([["replacement", pendingUpload]]);
  node.__panoFlushStateBeforeQueue = () => { stateWidget.value = "replacement-state"; };

  let settled = false;
  const serialized = stateWidget.serializeValue(node, 0).then((value) => {
    settled = true;
    return value;
  });
  await Promise.resolve();
  assert.equal(settled, false);

  resolveUpload();
  assert.equal(await serialized, "replacement-state");
});

test("state serialization rejects instead of queueing stale state when a sticker upload fails", async () => {
  function NodeType() {}
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaStickers" });
  const node = makeNode();
  NodeType.prototype.onNodeCreated.call(node);
  const stateWidget = node.widgets.find((widget) => widget.name === "state_json");
  node.__panoPendingStickerUploads = new Map([[
    "replacement",
    Promise.reject(new Error("replacement upload failed")),
  ]]);
  node.__panoFlushStateBeforeQueue = () => { stateWidget.value = "must-not-queue"; };

  await assert.rejects(
    () => stateWidget.serializeValue(node, 0),
    /replacement upload failed/,
  );
  assert.notEqual(stateWidget.value, "must-not-queue");
});

test("state serialization also waits for a replacement started while another upload is settling", async () => {
  function NodeType() {}
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaStickers" });
  const node = makeNode();
  NodeType.prototype.onNodeCreated.call(node);
  const stateWidget = node.widgets.find((widget) => widget.name === "state_json");

  let resolveFirst;
  let resolveSecond;
  const firstUpload = new Promise((resolve) => { resolveFirst = resolve; });
  const secondUpload = new Promise((resolve) => { resolveSecond = resolve; });
  node.__panoPendingStickerUploads = new Map([["first", firstUpload]]);
  node.__panoFlushStateBeforeQueue = () => { stateWidget.value = "latest-state"; };

  let settled = false;
  const serialized = stateWidget.serializeValue(node, 0).then((value) => {
    settled = true;
    return value;
  });
  node.__panoPendingStickerUploads.set("second", secondUpload);
  resolveFirst();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(settled, false);

  resolveSecond();
  assert.equal(await serialized, "latest-state");
});

test("sticker operations register before decode or upload can yield", async () => {
  const node = makeNode();
  let resolveDecode;
  const decode = new Promise((resolve) => { resolveDecode = resolve; });
  const operation = queuePendingStickerOperation(node, "replace-a", async () => {
    await decode;
    return "uploaded";
  });

  assert.equal(node.__panoPendingStickerUploads.get("replace-a"), operation);
  resolveDecode();
  assert.equal(await operation, "uploaded");
  await Promise.resolve();
  assert.equal(node.__panoPendingStickerUploads.size, 0);
});

test("sticker operations serialize consecutive replacements", async () => {
  const node = makeNode();
  const events = [];
  let resolveFirst;
  const firstGate = new Promise((resolve) => { resolveFirst = resolve; });
  const first = queuePendingStickerOperation(node, "replace-a", async () => {
    events.push("first:start");
    await firstGate;
    events.push("first:end");
  });
  const second = queuePendingStickerOperation(node, "replace-b", async () => {
    events.push("second:start");
    events.push("second:end");
  });

  await Promise.resolve();
  assert.deepEqual(events, ["first:start"]);
  resolveFirst();
  await first;
  await second;
  assert.deepEqual(events, ["first:start", "first:end", "second:start", "second:end"]);
});
