import assert from "node:assert/strict";
import test from "node:test";

import { FakeCanvas, FakeElement, createFakeNode, fakeDocument, fakeApp, mountedSurfaces, resizeObservers, runFrames, surfaceElements, windowListeners } from "./node_surface_fakes.mjs";
import { createFakeWebGl } from "./fake_webgl.mjs";
import { readWebSource, webSourceFiles } from "./editor_source.mjs";

// docs/studio-node-surface.md: Panorama Studio's node surface (pano_preview_runtime.js) driven in Node through its
// exports, on the fake DOM and ComfyUI of tests/node_surface_fakes.mjs, with the three.js view drawing on the fake WebGL
// of tests/fake_webgl.mjs. The component itself is tested in tests/pano_studio_node_surface_vue.test.mjs.

globalThis.HTMLVideoElement ??= class { static HAVE_CURRENT_DATA = 2; };
globalThis.ImageData ??= class { constructor(data, width, height) { Object.assign(this, { data, width, height }); } };
// The canvases get a fake WebGL context, and their 2D contexts take the live ERP's pixels.
// Every fake WebGL context made, whose calls show what the three.js view uploaded.
const webgls = [];
const canvasContext = FakeCanvas.prototype.getContext;
FakeCanvas.prototype.getContext = function getContext(kind, ...rest) {
  if (kind === "webgl2" || kind === "webgl") {
    if (!this.webgl) {
      const fake = createFakeWebGl();
      webgls.push(fake);
      this.webgl = fake.gl;
    }
    return this.webgl;
  }
  const context = canvasContext.call(this, kind, ...rest);
  if (context) context.putImageData ??= (...args) => context.calls.push(["putImageData", ...args]);
  return context;
};

const runtime = await import("../web_src/pano_preview_runtime.js");
const { nodeSurface } = await import("../web_src/pano_node_bridge.js");
const { studioRunKey } = await import("../web_src/pano_studio_status.js");

const WIDGETS = { background_color: "#112233", background_range: 360, megapixels: 1, multiple: 8 };

function studioNode(state, extra = {}) {
  return createFakeNode({ type: "PanoramaStudio", studio: true, widgets: { state_json: JSON.stringify(state), ...WIDGETS }, ...extra });
}

// Attaches the surface, runs prepare(surface) (the surface's record, pano_node_bridge.js nodeSurface) if given, shows it
// 320 x 200 in the page, and lets the shared three.js view load and draw.
async function showStudio(node, prepare = null) {
  runtime.attachPanoramaPreview(node, {});
  prepare?.(nodeSurface(node));
  runFrames();
  const elements = surfaceElements(node);
  elements.root.connected = true;
  elements.wrap.clientWidth = 320;
  elements.wrap.clientHeight = 200;
  for (const element of [elements.root, elements.wrap, elements.canvas]) element.rect = { left: 0, top: 0, width: 320, height: 200 };
  const draw = async () => {
    resizeObservers.find((entry) => entry.targets.has(elements.wrap)).trigger();
    runFrames();
    await new Promise((resolve) => setTimeout(resolve, 0));
    runFrames();
  };
  await draw();
  return { ...elements, draw, model: () => nodeSurface(node).stickers.model };
}

function detach(node) {
  node.onRemoved?.();
  delete fakeApp.nodeOutputs[String(node.id)];
}

// Whether the three.js view handed `media` to WebGL (a texture upload) since the calls were last cleared.
const uploaded = (media) => webgls.some((fake) => fake.calls.some(([name, args]) => name.startsWith("tex") && args.includes(media)));
const clearCalls = () => webgls.forEach((fake) => { fake.calls.length = 0; });

const drawnImages = (canvas) => (canvas.context?.calls ?? []).filter(([name]) => name === "drawImage");

test("the runtime mounts the Studio surface for Panorama Studio, the Stickers and Cutout surfaces for the legacy nodes", () => {
  const nodes = [
    [studioNode({ version: 2 }), "PanoStudioNodeSurface", runtime.attachPanoramaPreview],
    [createFakeNode({ type: "PanoramaStickers", widgets: { state_json: "" } }), "PanoStickersNodeSurface", runtime.attachPanoramaPreview],
    [createFakeNode({ type: "PanoramaCutout", widgets: { state_json: "" } }), "PanoCutoutNodeSurface", runtime.attachCutoutPreview],
  ];
  for (const [node, component, attach] of nodes) {
    attach(node, {});
    runFrames();
    assert.equal(mountedSurfaces.at(-1).component, component);
    detach(node);
  }
});

// ADR 0049: no look-around: no pan, no wheel capture (the wheel goes to the graph), no picking or moving a Sticker.
test("the Studio surface does not look around: it captures no wheel, and a drag or Delete changes nothing", async () => {
  const state = { version: 2, stickers: [{ id: "s1", placement: "sky", source: { kind: "file", filename: "a.png" } }] };
  const node = studioNode(state);
  // The Sticker is selected, so a Delete would have something to delete.
  node.properties = { pano_editor_active: { selected_sticker_id: "s1" } };
  const { root, wrap, canvas } = await showStudio(node);
  assert.equal(root.hasAttribute("data-capture-wheel"), false);
  for (const target of [root, wrap, canvas]) assert.equal(target.listenerCount("wheel"), 0);
  const before = node.widgets.find((widget) => widget.name === "state_json").value;
  const pointer = { pointerId: 1, button: 0, buttons: 1, clientX: 160, clientY: 80, isPrimary: true, pointerType: "mouse" };
  canvas.dispatch("pointerdown", pointer);
  // Nothing grabs the pointer: no look-around drag and no Sticker drag starts.
  assert.equal(canvas.pointerCaptures.size, 0);
  canvas.dispatch("pointermove", { ...pointer, clientX: 220, clientY: 120 });
  canvas.dispatch("pointerup", { ...pointer, clientX: 220, clientY: 120, buttons: 0 });
  // Delete with the surface focused deletes nothing.
  root.focus();
  for (const listener of windowListeners.get("keydown") ?? []) listener({ key: "Delete", target: canvas, preventDefault() {}, stopPropagation() {} });
  assert.equal(node.widgets.find((widget) => widget.name === "state_json").value, before);
  detach(node);

  // The legacy Stickers surface does look around (its wheel is captured), which is what the Studio leaves out.
  const legacy = createFakeNode({ type: "PanoramaStickers", widgets: { state_json: "" } });
  runtime.attachPanoramaPreview(legacy, {});
  runFrames();
  assert.equal(surfaceElements(legacy).root.getAttribute("data-capture-wheel"), "true");
  detach(legacy);
});

// The line first (the picture takes the output's shape from it), then the picture.
test("the Studio surface's line says how the Camera shoots, and its picture takes the output's shape from it", async () => {
  for (const [camera, mode, ratio] of [[{ projection: "erp" }, "panorama", 2], [{ projection: "pinhole" }, "frame", 1]]) {
    const node = studioNode({ version: 2, camera });
    const { model } = await showStudio(node);
    assert.equal(model().status.mode, mode);
    assert.equal(model().status.ratio, ratio);
    const { picture } = model().layout;
    assert.ok(Math.abs(picture.w / picture.h - ratio) < 1e-9, `${mode}: ${picture.w} x ${picture.h}`);
    detach(node);
  }
});

// The run's size counts only while its media are the inputs' (and its key, the state and widgets): the background,
// the sticker and the scene input each. (The `sticker_image` name: relinking Panorama Studio's `sticker` also syncs its port
// Sticker, which changes the state and so the run's key on its own.)
test("the Studio surface shows the run's size only while the run's inputs are still linked", async () => {
  const stateText = JSON.stringify({ version: 2, camera: { projection: "erp" } });
  const key = studioRunKey(stateText, WIDGETS.megapixels, WIDGETS.multiple, "360", WIDGETS.background_color);
  for (const [index, name] of ["background", "sticker_image", "scene"].entries()) {
    const links = new Map([[7, { id: 7, origin_id: 3, origin_slot: 0, type: "IMAGE" }], [8, { id: 8, origin_id: 4, origin_slot: 0, type: "IMAGE" }]]);
    const inputs = [{ name, link: 7 }];
    const node = studioNode(JSON.parse(stateText), { inputs });
    node.graph = { links };
    node.getInputLink = (slot) => links.get(node.inputs[slot]?.link) ?? null;
    node.isInputConnected = (slot) => node.inputs[slot]?.link != null;
    // Each run's own size, so no two nodes share a result.
    const run = { width: 1234 + index * 2, height: 617 + index, key };
    const size = `${run.width} × ${run.height}`;
    fakeApp.nodeOutputs[String(node.id)] = { ui: { pano_output_size: [run] } };
    const { model, draw } = await showStudio(node);
    assert.equal(model().status.size, size, name);
    // Something else on the input: the run's size no longer counts.
    inputs[0].link = 8;
    await draw();
    assert.notEqual(model().status.size, size, name);
    assert.match(model().status.size, /^\d+ × \d+$/);
    detach(node);
  }
});

// The Studio picture is the editor's Output window picture: the live ERP in Panorama mode, the Camera's frame in Frame mode.
test("the Studio picture is the live ERP in Panorama mode and the three.js frame in Frame mode, in the layout's picture box", async () => {
  const node = studioNode({ version: 2, camera: { projection: "erp" } });
  const { canvas, model, draw } = await showStudio(node);
  const box = () => {
    const { picture } = model().layout;
    return [picture.x, picture.y, picture.w, picture.h].map(Math.round);
  };
  const [erpDraw] = drawnImages(canvas).slice(-1);
  const erpCanvas = erpDraw[1];
  // The live ERP is a 2D canvas the view put the ERP's pixels on.
  assert.equal(erpCanvas.webgl, undefined);
  assert.ok(erpCanvas.context.calls.some(([name]) => name === "putImageData"));
  assert.deepEqual(erpDraw.slice(-4), box());
  // Frame mode: the three.js view's own canvas, and the live ERP's canvas lets go of its pixels.
  node.widgets.find((widget) => widget.name === "state_json").value = JSON.stringify({ version: 2, camera: { projection: "pinhole" } });
  canvas.context.calls.length = 0;
  await draw();
  const [frameDraw] = drawnImages(canvas).slice(-1);
  assert.ok(frameDraw[1].webgl, "drawn from the WebGL canvas");
  assert.deepEqual(frameDraw.slice(-4), box());
  assert.deepEqual([erpCanvas.width, erpCanvas.height], [0, 0]);
  // Back in Panorama mode, then removed: the live ERP's canvas goes with the surface.
  node.widgets.find((widget) => widget.name === "state_json").value = JSON.stringify({ version: 2, camera: { projection: "erp" } });
  await draw();
  assert.ok(erpCanvas.width > 1);
  detach(node);
  assert.deepEqual([erpCanvas.width, erpCanvas.height], [0, 0]);
});

// No run output image: the picture is always drawn live (ADR 0052).
test("no frontend file reads a run's output picture for the Studio surface", () => {
  for (const file of webSourceFiles()) {
    assert.doesNotMatch(readWebSource(file), /pano_output_erp|pano_output_frame|studioRunPicture|studioRunQuaternion/, file);
  }
});

// ADR 0052: the picture draws what the editor's Output window draws of the inputs: the painting's Sky layers
// (pano_surface_paint.js surfacePaintLayers, through the surface's paint display), the upstream Scene's layers at the
// display frame (studioInputs.upstream.viewInput), the depth grids in their proxies' colors (studioInputs.depthColor,
// and studioInputs.depthColors keeps only those drawn), and the background the surface chooses (bg_color here).
test("the Studio picture draws the painting, the upstream layers, the depth grids' colors and the chosen background", async () => {
  const previousFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(null, { status: 404 });
  const errors = console.error;
  console.error = () => {};
  try {
    const color = "#2a3b4c";
    const node = createFakeNode({ type: "PanoramaStudio", studio: true, widgets: { state_json: JSON.stringify({ version: 2, camera: { projection: "erp" } }), ...WIDGETS, background_color: color } });
    const paintMedia = { width: 64, height: 32, tag: "paint" };
    const upstreamMedia = { width: 64, height: 32, tag: "upstream" };
    const frames = [];
    const colorsAsked = [];
    const retained = [];
    const { model } = await showStudio(node, (surface) => {
      surface.paintDisplay = { layers: () => [{ kind: "erp", id: "paint_group:g", media: paintMedia, revision: "p1", opacity: 1, zIndex: 0 }], dispose() {} };
      const depthUrl = "/view?filename=depth.glb";
      const turn = { x: 0, y: 0, z: 0, w: 1 };
      const depthRequest = {
        kind: "depth_grid", url: depthUrl, urls: [depthUrl], prefetch: [], transform: { position: [0, 0, -2], quaternion: turn, scale: 1 },
        itemQuaternion: turn, unlit: true, video: { src: "/view?filename=depth.mp4", fps: 24, items: [depthUrl] },
      };
      surface.studioInputs.upstream.viewInput = (frame) => {
        frames.push(frame);
        return { sky: [{ kind: "erp", id: "upstream:sky", media: upstreamMedia, revision: "u1", opacity: 1 }], stickers: [], items: [{ slot: "layer_1", urls: [depthUrl], request: depthRequest, opacity: 1 }] };
      };
      surface.studioInputs.depthColor = (slot) => {
        colorsAsked.push(slot);
        return null;
      };
      const retain = surface.studioInputs.depthColors.retain;
      surface.studioInputs.depthColors.retain = (slots) => {
        retained.push([...slots]);
        return retain.call(surface.studioInputs.depthColors, slots);
      };
      clearCalls();
    });
    assert.ok(model().layout, "drawn");
    assert.ok(frames.length > 0 && frames.every((frame) => Number.isFinite(frame)), "the upstream layers asked at the display frame");
    assert.ok(uploaded(paintMedia), "the painting");
    assert.ok(uploaded(upstreamMedia), "the upstream Scene's sky");
    assert.ok(colorsAsked.includes("layer_1"), "the depth grid's colors");
    assert.deepEqual(retained.at(-1), ["layer_1"]);
    const background = webgls.flatMap((fake) => fake.calls.filter(([name]) => name.startsWith("tex")).flatMap(([, args]) => args))
      .find((arg) => arg instanceof FakeCanvas && arg.context?.fillStyle === color);
    assert.ok(background, "the background_color");
    detach(node);
  } finally {
    globalThis.fetch = previousFetch;
    console.error = errors;
  }
});

// Open Studio's width counts only once the Studio stylesheet applies (studio/stylesheet.js installStudioStylesheet): a
// width measured before is the unstyled button's. Until then Open Studio stays centered by its middle. This test loads
// the stylesheet for the whole file (it is loaded once), so it stays the last one.
test("Open Studio's measured width counts only once the Studio stylesheet has loaded", async () => {
  // The mounted component's Open Studio button (the components are stand-ins here), with its width with the label.
  const open = new FakeElement("button", fakeDocument);
  open.className = "pano-studio-node-open";
  open.offsetWidth = 120;
  const querySelector = FakeElement.prototype.querySelector;
  FakeElement.prototype.querySelector = function find(selector) {
    return selector === ".pano-studio-node-open" ? open : querySelector.call(this, selector);
  };
  try {
    const node = studioNode({ version: 2, camera: { projection: "erp" } });
    const { model, draw } = await showStudio(node);
    const link = fakeDocument.getElementById("pano-studio-style-link");
    assert.ok(link && link.dataset?.loaded !== "true", "the stylesheet has not loaded yet");
    assert.deepEqual(Object.keys(model().layout.buttons.open), ["center"]);
    // The stylesheet loads: the button's width now places it.
    link.dataset ??= {};
    link.dispatch("load");
    await new Promise((resolve) => setTimeout(resolve, 0));
    await draw();
    assert.equal(model().layout.buttons.open.w, 120);
    detach(node);
  } finally {
    FakeElement.prototype.querySelector = querySelector;
  }
});
