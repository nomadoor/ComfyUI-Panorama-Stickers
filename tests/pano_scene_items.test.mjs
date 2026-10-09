import assert from "node:assert/strict";
import test from "node:test";

import { aheadFits, createSceneItems, overBudget, SCENE_ITEM_BUDGET } from "../web_src/pano_scene_items.js";

// Loads that end when the test says so: each call is { kind, url, signal, resolve(size), reject }.
function harness(options = {}) {
  const calls = [];
  const disposed = [];
  let updates = 0;
  const items = createSceneItems({
    load: (kind, url, signal, options) => new Promise((resolve, reject) => {
      signal.addEventListener("abort", () => reject(new Error("aborted")));
      calls.push({ kind, url, signal, options, resolve: (size = 1) => resolve({ object: { url }, box: { min: [0, 0, 0], max: [1, 1, 1] }, size }), reject });
    }),
    dispose: (item) => disposed.push(item.object.url),
    onUpdate: () => { updates += 1; },
    ...options,
  });
  return { items, calls, disposed, updates: () => updates };
}

const settle = () => new Promise((resolve) => setTimeout(resolve, 0));
const urls = ["f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9"];
const ask = (store, url, prefetch = [], kind = "mesh", list = urls) => store.request({ kind, urls: list, url, prefetch });

test("loads run one at a time, the shown item before the one ahead, and each URL loads once", async () => {
  const { items, calls, updates } = harness();
  assert.equal(ask(items, "f0", ["f1"]), null);
  assert.deepEqual(calls.map((call) => call.url), ["f0"]);
  ask(items, "f0", ["f1"]);
  assert.equal(calls.length, 1);
  calls[0].resolve();
  await settle();
  assert.equal(updates(), 1);
  assert.deepEqual(calls.map((call) => call.url), ["f0", "f1"]);
  assert.deepEqual(ask(items, "f0", ["f1"]).object, { url: "f0" });
  assert.deepEqual(items.box("f0"), { min: [0, 0, 0], max: [1, 1, 1] });
  assert.equal(items.box("f1"), null);
});

test("scrubbing skips the queued loads nobody wants any more and lets the running one finish", async () => {
  const { items, calls } = harness();
  ask(items, "f0", ["f1"]);
  ask(items, "f3", ["f4"]);
  ask(items, "f6", ["f7"]);
  assert.deepEqual(calls.map((call) => [call.url, call.signal.aborted]), [["f0", false]]);
  calls[0].resolve();
  await settle();
  // f0 loaded on, and the newest request (f6) comes next; f1, f3 and f4 never start.
  assert.deepEqual(calls.map((call) => call.url), ["f0", "f6"]);
  assert.deepEqual(ask(items, "f6", ["f7"]).object, { url: "f0" });
  calls[1].resolve();
  await settle();
  assert.deepEqual(calls.map((call) => call.url), ["f0", "f6", "f7"]);
  assert.deepEqual(ask(items, "f6", ["f7"]).object, { url: "f6" });
});

test("playback that asks for the next item every frame gets the loads it started, without aborting any", async () => {
  const { items, calls } = harness({ concurrency: 2 });
  const shown = [];
  let maxRunning = 0;
  let finished = 0;
  for (let frame = 0; frame < urls.length; frame += 1) {
    const drawn = ask(items, urls[frame], urls[frame + 1] ? [urls[frame + 1]] : []);
    shown.push(drawn?.object.url ?? null);
    maxRunning = Math.max(maxRunning, items.running());
    // Every other frame, the oldest running load ends.
    if (frame % 2 === 1 && finished < calls.length) calls[finished++].resolve();
    await settle();
  }
  assert.equal(calls.some((call) => call.signal.aborted), false);
  assert.ok(maxRunning <= 2);
  // Each started URL loaded once, and the items that loaded are the ones shown, thinned out.
  assert.equal(new Set(calls.map((call) => call.url)).size, calls.length);
  assert.ok(calls.length < urls.length + 1);
  const loaded = shown.filter(Boolean);
  assert.ok(loaded.length > 0);
  assert.deepEqual(loaded, [...loaded].sort());
  assert.ok(new Set(loaded).size >= 3, JSON.stringify(shown));
});

test("while an item loads, the nearest loaded item before it shows; a frame without an item shows nothing", async () => {
  const { items, calls } = harness({ concurrency: 2 });
  ask(items, "f2");
  calls[0].resolve();
  await settle();
  assert.deepEqual(ask(items, "f5").object, { url: "f2" });
  // Nothing loaded before f1: the nearest after it shows.
  assert.deepEqual(ask(items, "f1").object, { url: "f2" });
  assert.equal(ask(items, null), null);
  const f1 = calls.find((call) => call.url === "f1");
  assert.equal(f1.signal.aborted, false);
  f1.resolve();
  await settle();
  assert.deepEqual(ask(items, "f1").object, { url: "f1" });
  assert.deepEqual(ask(items, "f3").object, { url: "f2" });
});

test("a load still running when its input goes away is aborted and its result disposed", async () => {
  const { items, calls, disposed } = harness();
  ask(items, "f0");
  const late = calls[0];
  ask(items, "g0", [], "mesh", ["g0"]);
  assert.equal(late.signal.aborted, true);
  late.resolve();
  await settle();
  assert.deepEqual(disposed, []);
  assert.equal(items.box("f0"), null);
  // The aborted load counted until it ended, so g0 starts only now.
  assert.deepEqual(calls.map((call) => call.url), ["f0", "g0"]);
});

test("the budget drops the least recently used loaded items first, never the shown or wanted ones", () => {
  const loaded = (size) => ({ state: "loaded", size });
  const entries = [["f0", loaded(4)], ["f1", loaded(4)], ["f2", { state: "loading", size: undefined }], ["f3", loaded(4)], ["f4", loaded(4)]];
  assert.deepEqual(overBudget(entries, new Set(["f3", "f4"]), 16), []);
  assert.deepEqual(overBudget(entries, new Set(["f3", "f4"]), 12), ["f0"]);
  assert.deepEqual(overBudget(entries, new Set(["f0", "f4"]), 8), ["f1", "f3"]);
  // Kept items stay even when they alone are over the budget; failed and loading ones count nothing.
  assert.deepEqual(overBudget([["f0", loaded(10)], ["f1", { state: "failed" }], ["f2", loaded(20)]], new Set(["f2"]), 8), ["f0"]);
});

test("an item loads ahead only while it fits beside the kept and running ones, and never past one item over the budget", () => {
  const loaded = (size) => ({ state: "loaded", size });
  // Nothing loaded yet: its size is unknown, so nothing loads ahead.
  assert.equal(aheadFits([["f0", { state: "loading" }]], new Set(["f0", "f1"]), 100), false);
  // The shown 30 and one more as large as the largest (30) fit in 60; a running load counts as 30 too.
  assert.equal(aheadFits([["f0", loaded(30)]], new Set(["f0", "f1"]), 60), true);
  assert.equal(aheadFits([["f0", loaded(30)], ["f1", { state: "loading" }]], new Set(["f0", "f1", "f2"]), 60), false);
  // Items not kept will be dropped, so they do not count; the largest loaded one still sizes the next.
  assert.equal(aheadFits([["f0", loaded(50)], ["f1", loaded(10)]], new Set(["f1", "f2"]), 60), true);
  assert.equal(aheadFits([["f0", loaded(50)], ["f1", loaded(20)]], new Set(["f1", "f2"]), 60), false);
  // An item over the budget on its own is shown, and nothing loads ahead of it.
  assert.equal(aheadFits([["f0", loaded(80)]], new Set(["f0", "f1"]), 60), false);
  assert.ok(SCENE_ITEM_BUDGET >= 1024 ** 3);
});

test("loaded items over the budget go least recently used first, never the shown or wanted ones", async () => {
  const { items, calls, disposed } = harness({ concurrency: 4, budget: 3 });
  for (const url of ["f0", "f1", "f2", "f3"]) {
    ask(items, url);
    calls.at(-1).resolve();
    await settle();
  }
  assert.deepEqual(disposed, ["f0"]);
  ask(items, "f1");
  ask(items, "f4");
  calls.at(-1).resolve();
  await settle();
  assert.deepEqual(disposed, ["f0", "f2"]);
  assert.deepEqual([...items.items.keys()], ["f3", "f1", "f4"]);
});

test("an item over the budget on its own is shown, loads nothing ahead, and the one before it goes once it shows", async () => {
  const { items, calls, disposed } = harness({ concurrency: 2, budget: 100 });
  ask(items, "f0", ["f1", "f2"]);
  assert.deepEqual(calls.map((call) => call.url), ["f0"]);
  calls[0].resolve(150);
  await settle();
  assert.deepEqual(ask(items, "f0", ["f1", "f2"]).object, { url: "f0" });
  assert.deepEqual(calls.map((call) => call.url), ["f0"]);
  // The next shown item loads while the loaded one still shows; then the old one goes.
  assert.deepEqual(ask(items, "f1", ["f2"]).object, { url: "f0" });
  assert.deepEqual(calls.map((call) => call.url), ["f0", "f1"]);
  calls[1].resolve(150);
  await settle();
  assert.deepEqual(ask(items, "f1", ["f2"]).object, { url: "f1" });
  assert.deepEqual(disposed, ["f0"]);
  assert.deepEqual(calls.map((call) => call.url), ["f0", "f1"]);
});

test("items load ahead while they fit the budget", async () => {
  const { items, calls } = harness({ concurrency: 2, budget: 100 });
  ask(items, "f0", ["f1", "f2", "f3"]);
  calls[0].resolve(30);
  await settle();
  // Beside f0 (30), f1 and then f2 running (each taken as 30) fit in 100.
  assert.deepEqual(calls.map((call) => call.url), ["f0", "f1", "f2"]);
  calls[1].resolve(30);
  calls[2].resolve(30);
  await settle();
  // f3 would make 120.
  assert.deepEqual(calls.map((call) => call.url), ["f0", "f1", "f2"]);
  assert.deepEqual(ask(items, "f1", ["f2", "f3"]).object, { url: "f1" });
  // Once f0 is no longer wanted it does not count, and f3 fits.
  assert.deepEqual(calls.map((call) => call.url), ["f0", "f1", "f2", "f3"]);
});

test("items of another input are dropped at once", async () => {
  const { items, calls, disposed } = harness();
  ask(items, "f0");
  calls[0].resolve();
  await settle();
  assert.equal(ask(items, "g0", [], "splat", ["g0"]), null);
  assert.deepEqual(disposed, ["f0"]);
  assert.deepEqual(calls.map((call) => call.url), ["f0", "g0"]);
});

test("a failed item is reported once and not loaded again", async (t) => {
  const errors = [];
  t.mock.method(console, "error", (...args) => errors.push(args));
  const { items, calls } = harness();
  ask(items, "f0");
  calls[0].reject(new Error("HTTP 404"));
  await settle();
  assert.equal(ask(items, "f0"), null);
  ask(items, "f0");
  assert.equal(calls.length, 1);
  assert.equal(errors.length, 1);
});

test("closing aborts the running load and disposes the loaded items", async () => {
  const { items, calls, disposed } = harness({ concurrency: 2 });
  ask(items, "f0", ["f1"]);
  calls[0].resolve();
  await settle();
  items.close();
  assert.equal(calls[1].signal.aborted, true);
  assert.deepEqual(disposed, ["f0"]);
});

test("retaining the URLs of the input drops the items of a replaced or disconnected input", async () => {
  const { items, calls, disposed } = harness({ concurrency: 2 });
  ask(items, "f0", ["f1"]);
  calls[0].resolve();
  await settle();
  items.retain(["f0"]);
  assert.equal(calls[1].signal.aborted, true);
  assert.deepEqual(disposed, []);
  items.retain([]);
  assert.deepEqual(disposed, ["f0"]);
  assert.equal(items.items.size, 0);
});

test("a failed item keeps showing the loaded item before it", async (t) => {
  t.mock.method(console, "error", () => {});
  const { items, calls } = harness();
  ask(items, "f0");
  calls[0].resolve();
  await settle();
  ask(items, "f1");
  calls[1].reject(new Error("HTTP 404"));
  await settle();
  assert.deepEqual(ask(items, "f1").object, { url: "f0" });
  assert.equal(calls.length, 2);
});

// docs/threejs-spark-integration.md: the 3D file Stickers load in the 3D Sticker queue beside the port Sticker's
// items, each by its Sticker's key and fetched from its own URL, within one budget.
test("one render asks for several inputs at once, each item by its key and loaded from its source", async () => {
  const { items, calls, disposed } = harness({ concurrency: 4 });
  const port = { kind: "mesh", urls: ["p0", "p1"], url: "p0", prefetch: ["p1"], unlit: true };
  const file = (id, src, extra = {}) => ({ kind: "mesh", urls: [id], url: id, prefetch: [], src, unlit: false, ...extra });
  const one = file("file3d:0:sticker_1", "/view?filename=e.glb");
  const two = file("file3d:0:sticker_2", "/view?filename=e.glb");
  assert.deepEqual(items.requestMany([port, one, two]), [null, null, null]);
  // Every shown item loads first, the ones ahead after; the same file under two keys loads twice.
  assert.deepEqual(calls.map((call) => call.url), ["p0", "/view?filename=e.glb", "/view?filename=e.glb"]);
  assert.deepEqual(calls.map((call) => call.options), [{ unlit: true }, { unlit: false }, { unlit: false }]);
  calls.forEach((call) => call.resolve());
  await settle();
  assert.deepEqual(calls.map((call) => call.url).slice(3), ["p1"]);
  const drawn = items.requestMany([port, one, two]);
  assert.deepEqual(drawn.map((item) => item.object.url), ["p0", "/view?filename=e.glb", "/view?filename=e.glb"]);
  assert.notEqual(drawn[1], drawn[2]);
  assert.deepEqual(items.box("file3d:0:sticker_1"), { min: [0, 0, 0], max: [1, 1, 1] });
  // A key no input draws or keeps (its Sticker left the state) is dropped like a replaced input; one only kept
  // (its Sticker is hidden or outside its Clip range) stays loaded.
  assert.deepEqual(items.requestMany([port, one, { urls: [two.url] }]), [drawn[0], drawn[1], null]);
  assert.deepEqual(disposed, []);
  items.requestMany([port, one]);
  assert.deepEqual(disposed, ["/view?filename=e.glb"]);
  assert.equal(items.items.has("file3d:0:sticker_2"), false);
  // A key whose source or material changes loads again.
  items.requestMany([port, { ...one, unlit: true }]);
  assert.equal(calls.length, 5);
  assert.deepEqual(calls[4].options, { unlit: true });
  // request() is requestMany() of one input.
  assert.equal(items.request(port).object.url, "p0");
  assert.equal(items.items.size, 2);
});

test("a failed item tells why, so the editor can ask for its file again", async (t) => {
  t.mock.method(console, "error", () => {});
  const { items, calls } = harness();
  ask(items, "f0");
  assert.equal(items.error("f0"), null);
  calls[0].reject(new Error("HTTP 404"));
  await settle();
  assert.equal(items.error("f0"), "HTTP 404");
  assert.equal(items.error("f9"), null);
});

// Review P1: a 3D Sticker hidden or outside its Clip range asks for nothing to draw but keeps its loaded item, so
// coming back shows it at once without loading it again (the port Sticker's items and a 3D file Sticker's alike).
test("the 3D Stickers' items stay loaded while their Stickers are inactive, and coming back loads nothing", async () => {
  const { stickerItemInputs } = await import("../web_src/pano_three_view.js");
  const { items, calls, disposed } = harness({ concurrency: 4 });
  const port = { kind: "mesh", urls: ["p0"], url: "p0", prefetch: [], unlit: true, id: "sticker_1", opacity: 1 };
  const file = { kind: "mesh", urls: ["file3d:0:sticker_2"], url: "file3d:0:sticker_2", prefetch: [], src: "/view?filename=e.glb", unlit: false, id: "sticker_2", opacity: 1 };
  const active = { stickerUrls: ["p0"], sticker: port, fileStickerKeys: [file.url], fileStickers: [file] };
  const inactive = { stickerUrls: ["p0"], sticker: null, fileStickerKeys: [file.url], fileStickers: [] };
  const draw = (space) => {
    const { drawn, inputs } = stickerItemInputs(space);
    return items.requestMany(inputs).slice(0, drawn.length);
  };
  draw(active);
  calls.forEach((call) => call.resolve());
  await settle();
  assert.deepEqual(draw(active).map((item) => item.object.url), ["p0", "/view?filename=e.glb"]);
  assert.equal(calls.length, 2);
  // Inactive: nothing drawn, nothing dropped.
  assert.deepEqual(draw(inactive), []);
  assert.deepEqual(disposed, []);
  assert.deepEqual([...items.items.values()].map((item) => item.state), ["loaded", "loaded"]);
  // Back: the same items, without a load.
  assert.deepEqual(draw(active).map((item) => item.object.url), ["p0", "/view?filename=e.glb"]);
  assert.equal(calls.length, 2);
  // Gone from the state (no key kept): dropped.
  draw({ stickerUrls: [], sticker: null, fileStickerKeys: [], fileStickers: [] });
  assert.deepEqual(disposed.sort(), ["/view?filename=e.glb", "p0"]);
});
