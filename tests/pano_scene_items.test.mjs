import assert from "node:assert/strict";
import test from "node:test";

import { createSceneItems } from "../web_src/pano_scene_items.js";

// Loads that end when the test says so: each call is { kind, url, signal, resolve, reject }.
function harness(options = {}) {
  const calls = [];
  const disposed = [];
  let updates = 0;
  const items = createSceneItems({
    load: (kind, url, signal) => new Promise((resolve, reject) => {
      signal.addEventListener("abort", () => reject(new Error("aborted")));
      calls.push({ kind, url, signal, resolve: () => resolve({ object: { url }, box: { min: [0, 0, 0], max: [1, 1, 1] } }), reject });
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

test("scrubbing aborts the load nobody wants any more, skips the queued ones and loads the newest", async () => {
  const { items, calls } = harness();
  ask(items, "f0", ["f1"]);
  ask(items, "f3", ["f4"]);
  ask(items, "f6", ["f7"]);
  assert.deepEqual(calls.map((call) => [call.url, call.signal.aborted]), [["f0", true], ["f3", true], ["f6", false]]);
  await settle();
  assert.equal(calls.length, 3);
  calls[2].resolve();
  await settle();
  assert.deepEqual(calls.map((call) => call.url), ["f0", "f3", "f6", "f7"]);
});

test("while an item loads, the one shown before stays; a frame without an item shows nothing", async () => {
  const { items, calls } = harness({ concurrency: 2 });
  ask(items, "f0");
  calls[0].resolve();
  await settle();
  // The render the load asks for shows it.
  assert.deepEqual(ask(items, "f0").object, { url: "f0" });
  assert.deepEqual(ask(items, "f1").object, { url: "f0" });
  assert.equal(ask(items, null), null);
  // The frame without an item wanted nothing else, so f1 loads again when it is asked for.
  assert.equal(calls[1].signal.aborted, true);
  ask(items, "f1");
  calls.at(-1).resolve();
  await settle();
  assert.deepEqual(ask(items, "f1").object, { url: "f1" });
});

test("a load that ends after it was dropped is disposed, not shown", async () => {
  const { items, calls, disposed } = harness();
  ask(items, "f0");
  const late = calls[0];
  ask(items, "f5");
  late.resolve();
  await settle();
  assert.deepEqual(disposed, []);
  assert.equal(items.box("f0"), null);
});

test("loaded items beyond the limit go least recently used first, never the shown or wanted ones", async () => {
  const { items, calls, disposed } = harness({ concurrency: 4, limit: 3 });
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
