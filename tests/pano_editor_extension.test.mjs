import assert from "node:assert/strict";
import test from "node:test";

import {
  createPanoEditorExtension,
  flushPanoStateProducers,
  queuePendingStickerOperation,
} from "../web_src/pano_editor_extension.js";
import { registerExternalStickerSync } from "../web_src/pano_external_sticker_sync.js";
import { disposeNodeRuntime, editorSession, nodeSurface, previewNode, sceneViewer, stateSync } from "../web_src/pano_node_bridge.js";

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

test("stickers lifecycle hides the fallback button only after the shared DOM surface mounts", () => {
  function NodeType() {}
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers(node) { nodeSurface(node).stickers = { mounted: true }; },
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
    enableStickersPreview: true,
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaStickers" });
  const node = makeNode([360, 260]);

  NodeType.prototype.onNodeCreated.call(node);

  assert.equal(node.widgets.find((widget) => widget.name === "Open Stickers Editor").hidden, true);
});

test("Panorama Studio opens the Stickers editor and node surface on state v2 with its Camera, beside the legacy Stickers", () => {
  const opened = [];
  const attached = [];
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor(node, type) { opened.push([node, type]); },
    attachStickers(node, options) {
      attached.push(node);
      nodeSurface(node).stickers = { mounted: true };
      options.onOpen();
    },
    attachCutout() { throw new Error("Panorama Studio has no Cutout surface"); },
    attachPreview() {},
    requestFrame(callback) { callback(); },
    enableStickersPreview: true,
  });
  function StudioNodeType() {}
  function LegacyNodeType() {}
  extension.beforeRegisterNodeDef(StudioNodeType, { name: "PanoramaStudio" });
  extension.beforeRegisterNodeDef(LegacyNodeType, { name: "PanoramaStickers" });
  const node = makeNode([360, 260]);
  node.widgets.find((widget) => widget.name === "bg_color").value = "#000000";
  const legacy = makeNode([360, 260]);

  StudioNodeType.prototype.onNodeCreated.call(node);
  StudioNodeType.prototype.onConfigure.call(node);
  LegacyNodeType.prototype.onNodeCreated.call(legacy);

  assert.deepEqual(opened, [[node, "stickers"], [legacy, "stickers"]]);
  assert.deepEqual(attached, [node, legacy]);
  assert.deepEqual([node.__panoSceneStateV2, node.__panoStudio], [true, true]);
  assert.deepEqual([legacy.__panoSceneStateV2, legacy.__panoStudio], [false, false]);
  assert.equal(node.widgets.find((widget) => widget.name === "state_json").hidden, true);
  // A black bg_color is the user's choice on Panorama Studio; only the legacy node replaces it.
  assert.equal(node.widgets.find((widget) => widget.name === "bg_color").value, "#000000");
});

test("the removed state v2 Stickers and Cutout node ids get no editor", () => {
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() { throw new Error("no editor"); },
    attachStickers() { throw new Error("no surface"); },
    attachCutout() { throw new Error("no surface"); },
    attachPreview() {},
    requestFrame(callback) { callback(); },
    enableStickersPreview: true,
  });
  for (const name of ["PanoramaStickersNode", "PanoramaCutoutNode"]) {
    function NodeType() {}
    extension.beforeRegisterNodeDef(NodeType, { name });
    assert.equal(NodeType.prototype.onNodeCreated, undefined, name);
  }
});

// LiteGraph.createNode runs onNodeCreated before graph.add, and getInputLink throws without a graph.
test("the sticker input syncs once the node is in the graph, for the legacy Stickers and Panorama Studio", () => {
  const synced = [];
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers(node) {
      nodeSurface(node).stickers = { mounted: true };
      registerExternalStickerSync(node, (reason) => synced.push([node.title, reason, node.getInputLink(0)]));
    },
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
    enableStickersPreview: true,
  });
  for (const name of ["PanoramaStickers", "PanoramaStudio"]) {
    function NodeType() {}
    extension.beforeRegisterNodeDef(NodeType, { name });
    const node = { ...makeNode([360, 260]), title: name, graph: null, inputs: [{ name: "sticker" }] };
    node.getInputLink = function () {
      if (!this.graph) throw new Error("NullGraphError");
      return null;
    };

    NodeType.prototype.onNodeCreated.call(node);
    node.graph = { setDirtyCanvas() {} };
    NodeType.prototype.onAdded.call(node);
    NodeType.prototype.onConfigure.call(node);
  }

  assert.deepEqual(synced, [["PanoramaStickers", "attach", null], ["PanoramaStudio", "attach", null]]);
});

test("a loaded graph restores the last output of each editor node and leaves other nodes alone", () => {
  const restored = [];
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    restoreOutput(node) { restored.push(node); },
    requestFrame(callback) { callback(); },
    enableStickersPreview: true,
  });
  function NodeType() {}
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaStudio" });
  const node = makeNode([360, 260]);
  NodeType.prototype.onNodeCreated.call(node);
  NodeType.prototype.onConfigure.call(node);

  extension.loadedGraphNode(node);
  extension.loadedGraphNode(makeNode());

  assert.deepEqual(restored, [node]);
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
  assert.notEqual(node.widgets.find((widget) => widget.name === "Open Cutout Editor").hidden, true);
  assert.equal(node.widgets.find((widget) => widget.name === "state_json").hidden, true);
  const initialState = JSON.parse(node.widgets.find((widget) => widget.name === "state_json").value);
  assert.equal(initialState.shots.length, 1);
  assert.equal(initialState.shots[0].aspect_id, "1:1");
  assert.equal(initialState.active.selected_shot_id, initialState.shots[0].id);
});

test("the legacy Cutout is marked as editing v1, not state v2", () => {
  function NodeType() {}
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaCutout" });
  const node = makeNode([360, 260]);

  NodeType.prototype.onNodeCreated.call(node);

  assert.equal(node.__panoSceneStateV2, false);
});

test("restoring legacy empty Cutout states overrides the new-node default", () => {
  function NodeType() {}
  NodeType.prototype.onConfigure = function ({ stateJson }) {
    this.widgets.find((widget) => widget.name === "state_json").value = stateJson;
  };
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaCutout" });
  const node = makeNode([360, 260]);

  NodeType.prototype.onNodeCreated.call(node);
  assert.equal(JSON.parse(node.widgets.find((widget) => widget.name === "state_json").value).shots.length, 1);

  for (const legacyEmpty of [
    "",
    JSON.stringify({ shots: [], active: { selected_shot_id: null } }),
  ]) {
    NodeType.prototype.onConfigure.call(node, { stateJson: legacyEmpty });
    assert.equal(node.widgets.find((widget) => widget.name === "state_json").value, legacyEmpty);
  }
});

test("cutout lifecycle hides the fallback editor button only after the node surface mounts", () => {
  function NodeType() {}
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout(node) { nodeSurface(node).cutout = { mounted: true }; },
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaCutout" });
  const node = makeNode([360, 260]);

  NodeType.prototype.onNodeCreated.call(node);

  assert.equal(node.widgets.find((widget) => widget.name === "Open Cutout Editor").hidden, true);
});

test("cutout lifecycle restores a visible fallback button when a later node surface mount fails", () => {
  function NodeType() {}
  let mountSucceeds = true;
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout(node) {
      nodeSurface(node).cutout = mountSucceeds ? { mounted: true } : null;
    },
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaCutout" });
  const node = makeNode([360, 260]);

  NodeType.prototype.onNodeCreated.call(node);
  const button = node.widgets.find((widget) => widget.name === "Open Cutout Editor");
  assert.deepEqual(button.computeSize(), [0, 0]);

  mountSucceeds = false;
  nodeSurface(node).attached = false;
  NodeType.prototype.onConfigure.call(node);

  assert.equal(button.hidden, false);
  assert.equal(button.options.hidden, false);
  assert.ok(button.computeSize()[0] > 0);
  assert.ok(button.computeSize()[1] > 0);
});

test("Preview hides its modal fallback button only after the fullscreen surface mounts", () => {
  const makePreview = (surfaceMounted) => {
    const extension = createPanoEditorExtension({
      app: { canvas: { setDirty() {} } },
      openEditor() {},
      attachStickers() {},
      attachCutout() {},
      attachPreview(node) {
        previewNode(node).surface = surfaceMounted ? { mounted: true } : null;
      },
      requestFrame(callback) { callback(); },
    });
    const node = makeNode([360, 260]);
    node.id = 12;
    node.comfyClass = "PanoramaPreview";
    extension.nodeCreated(node);
    return node.widgets.find((widget) => widget.name === "Open Preview");
  };

  const mountedButton = makePreview(true);
  assert.equal(mountedButton.hidden, true);
  assert.deepEqual(mountedButton.computeSize(), [0, 0]);

  const fallbackButton = makePreview(false);
  assert.notEqual(fallbackButton.hidden, true);
});

test("legacy Preview workflows regain the pass-through image output after configure", () => {
  function NodeType() {}
  NodeType.prototype.onConfigure = function (serialized) {
    this.outputs = Array.isArray(serialized?.outputs) ? [...serialized.outputs] : this.outputs;
  };
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaPreview" });
  const node = makeNode([360, 260]);
  node.outputs = [{ name: "image", type: "IMAGE", links: null }];
  node.addOutput = function (name, type) {
    const output = { name, type, links: null };
    this.outputs.push(output);
    return output;
  };

  NodeType.prototype.onConfigure.call(node, { outputs: [] });
  NodeType.prototype.onConfigure.call(node, { outputs: node.outputs });

  assert.deepEqual(node.outputs, [{ name: "image", type: "IMAGE", links: null }]);
});

test("coverage changes preserve the widget callback and invalidate every preview cache", () => {
  const dirtied = [];
  const node = makeNode();
  const coverage = node.widgets.find((widget) => widget.name === "coverage");
  coverage.callback = (value) => `previous:${value}`;
  stateSync(node).parsedState = {};
  stateSync(node).liveState = {};
  previewNode(node).runtime = { requestDraw() { dirtied.push("runtime"); } };
  nodeSurface(node).dom = { requestDraw() { dirtied.push("dom"); } };
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
  assert.equal(stateSync(node).parsedState, null);
  assert.equal(stateSync(node).liveState, null);
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
  assert.equal(previewNode(node).installDone, true);
  assert.equal(node.widgets.filter((widget) => widget.name === "Open Preview").length, 1);
});

test("removing a node disposes its runtime after the hooks before it", () => {
  const calls = [];
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  for (const name of ["PanoramaStudio", "PanoramaCutout", "PanoramaPreview"]) {
    function NodeType() {}
    NodeType.prototype.onRemoved = function () {
      calls.push([name, "previous", nodeSurface(this).restore !== null]);
      return "removed";
    };
    extension.beforeRegisterNodeDef(NodeType, { name });
    const node = makeNode();
    nodeSurface(node).restore = () => calls.push([name, "restore"]);
    nodeSurface(node).attached = true;

    assert.equal(NodeType.prototype.onRemoved.call(node), "removed");
    assert.equal(nodeSurface(node).attached, false);
  }
  assert.deepEqual(calls, [
    ["PanoramaStudio", "previous", true], ["PanoramaStudio", "restore"],
    ["PanoramaCutout", "previous", true], ["PanoramaCutout", "restore"],
    ["PanoramaPreview", "previous", true], ["PanoramaPreview", "restore"],
  ]);
});

test("a Preview node removed while it waits for its graph is not installed", () => {
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
  node.comfyClass = "PanoramaPreview";
  node.id = -1;
  node.graph = null;

  extension.nodeCreated(node);
  queue.shift()();
  disposeNodeRuntime(node);
  for (let frame = 0; frame < 40 && queue.length; frame += 1) queue.shift()();

  assert.deepEqual(queue, []);
  assert.deepEqual(attached, []);
  assert.equal(node.widgets.some((widget) => widget.name === "Open Preview"), false);
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
  stateSync(node).pendingStickerUploads.set("replacement", pendingUpload);
  editorSession(node).flushBeforeQueue = () => { stateWidget.value = "replacement-state"; };

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

test("state serialization flushes every registered state producer before reading the widget", async () => {
  function NodeType() {}
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview() {},
    requestFrame(callback) { callback(); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaCutout" });
  const node = makeNode();
  NodeType.prototype.onNodeCreated.call(node);
  const stateWidget = node.widgets.find((widget) => widget.name === "state_json");
  const calls = [];
  stateSync(node).flushers.add(async () => {
    await Promise.resolve();
    calls.push("node-surface");
    stateWidget.value = "node-surface-state";
  });
  stateSync(node).flushers.add(() => calls.push("secondary"));

  assert.equal(await stateWidget.serializeValue(node, 0), "node-surface-state");
  assert.deepEqual(calls, ["node-surface", "secondary"]);
});

test("state producers can be flushed through the same public seam before opening an editor", async () => {
  const calls = [];
  const node = {};
  stateSync(node).flushers.add(async () => {
    await Promise.resolve();
    calls.push("node-surface");
  });
  editorSession(node).flushBeforeQueue = () => calls.push("modal");

  await flushPanoStateProducers(node);
  assert.deepEqual(calls, ["node-surface", "modal"]);
});

test("the public state barrier waits for image operations before opening an editor", async () => {
  const calls = [];
  const node = {};
  stateSync(node).flushers.add(() => calls.push("node-surface"));
  editorSession(node).flushBeforeQueue = () => calls.push("modal");
  let releaseUpload;
  const uploadGate = new Promise((resolve) => { releaseUpload = resolve; });
  queuePendingStickerOperation(node, "add-image", async () => {
    calls.push("upload:start");
    await uploadGate;
    calls.push("upload:end");
  });

  let settled = false;
  const flushing = flushPanoStateProducers(node).then(() => { settled = true; });
  await Promise.resolve();
  assert.equal(settled, false);
  assert.deepEqual(calls, ["upload:start"]);

  releaseUpload();
  await flushing;
  assert.deepEqual(calls, ["upload:start", "upload:end", "node-surface", "modal"]);
});

test("an editor barrier can continue after a failed image operation has settled", async () => {
  const calls = [];
  const node = {};
  stateSync(node).flushers.add(() => calls.push("node-surface"));
  editorSession(node).flushBeforeQueue = () => calls.push("modal");
  queuePendingStickerOperation(node, "failed-add", async () => {
    throw new Error("upload failed");
  });

  await flushPanoStateProducers(node, { tolerateOperationFailure: true });
  assert.deepEqual(calls, ["node-surface", "modal"]);
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
  stateSync(node).pendingStickerUploads.set("replacement", Promise.reject(new Error("replacement upload failed")));
  editorSession(node).flushBeforeQueue = () => { stateWidget.value = "must-not-queue"; };

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
  stateSync(node).pendingStickerUploads.set("first", firstUpload);
  editorSession(node).flushBeforeQueue = () => { stateWidget.value = "latest-state"; };

  let settled = false;
  const serialized = stateWidget.serializeValue(node, 0).then((value) => {
    settled = true;
    return value;
  });
  stateSync(node).pendingStickerUploads.set("second", secondUpload);
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

  assert.equal(stateSync(node).pendingStickerUploads.get("replace-a"), operation);
  resolveDecode();
  assert.equal(await operation, "uploaded");
  await Promise.resolve();
  assert.equal(stateSync(node).pendingStickerUploads.size, 0);
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

// docs/preview-node.md "ノード上の表示": the Preview (`PanoramaPreviewNode`) shows its `source` by the type linked to
// it, before any run: a Scene in the Scene viewer, IMAGE and VIDEO in the legacy Preview's runtime.
test("the Preview shows a linked Scene in the Scene viewer and IMAGE or VIDEO in the legacy Preview's view, switching with the link", () => {
  const shown = [];
  const queue = [];
  function NodeType() {}
  NodeType.prototype.onConfigure = function (serialized) {
    this.outputs = [...serialized.outputs];
  };
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor() {},
    attachStickers() {},
    attachCutout() {},
    attachPreview(node, options) {
      shown.push(["media", options.imageInputName]);
      previewNode(node).runtime = { teardown: () => { shown.push(["media gone"]); previewNode(node).runtime = null; } };
    },
    attachSceneViewer(node) {
      shown.push(["scene"]);
      sceneViewer(node).surface = { detach: () => { shown.push(["scene gone"]); sceneViewer(node).surface = null; } };
    },
    requestFrame(callback) { queue.push(callback); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaPreviewNode" });
  const node = makeNode([360, 260]);
  let linked = "PANO_SCENE";
  node.comfyClass = "PanoramaPreviewNode";
  node.id = 3;
  node.inputs = [{ name: "source", type: "IMAGE,VIDEO,PANO_SCENE" }];
  node.getInputLink = () => (linked ? { type: linked, origin_id: 1 } : null);
  node.outputs = [{ name: "source", type: "PANO_SCENE", links: null }];
  node.addOutput = () => { throw new Error("no image output is added"); };
  const flush = () => { while (queue.length) queue.shift()(); };

  extension.nodeCreated(node);
  flush();
  NodeType.prototype.onConfigure.call(node, { outputs: node.outputs });
  linked = "VIDEO";
  NodeType.prototype.onConnectionsChange.call(node);
  flush();
  linked = "IMAGE";
  NodeType.prototype.onConnectionsChange.call(node);
  flush();
  linked = "PANO_SCENE";
  NodeType.prototype.onConnectionsChange.call(node);
  flush();

  assert.deepEqual(shown, [["scene"], ["scene gone"], ["media", "source"], ["media gone"], ["scene"]]);
  assert.deepEqual(node.outputs, [{ name: "source", type: "PANO_SCENE", links: null }]);
  assert.equal(node.widgets.filter((widget) => widget.name === "Open Preview").length, 1);
});

// docs/preview-node.md "ノード上": the IMAGE and VIDEO view's top-right button opens the new window when the chooser
// takes the node, so the runtime is given the chooser's answer.
test("the Preview's IMAGE or VIDEO view is told whether the chooser's new window takes the node", () => {
  const given = [];
  const queue = [];
  function NodeType() {}
  let takes = true;
  const openEditor = () => {};
  openEditor.previewWindowTakes = (target) => takes && target === node;
  const extension = createPanoEditorExtension({
    app: { canvas: { setDirty() {} } },
    openEditor,
    attachStickers() {},
    attachCutout() {},
    attachPreview(target, options) { given.push(options); },
    attachSceneViewer() {},
    requestFrame(callback) { queue.push(callback); },
  });
  extension.beforeRegisterNodeDef(NodeType, { name: "PanoramaPreviewNode" });
  const node = makeNode([360, 260]);
  node.comfyClass = "PanoramaPreviewNode";
  node.id = 3;
  node.inputs = [{ name: "source", type: "IMAGE,VIDEO,PANO_SCENE", link: 1 }];
  node.getInputLink = () => ({ type: "VIDEO", origin_id: 1 });
  extension.nodeCreated(node);
  while (queue.length) queue.shift()();
  assert.equal(given.length, 1);
  assert.equal(given[0].opensWindow(), true);
  takes = false;
  assert.equal(given[0].opensWindow(), false);
});
