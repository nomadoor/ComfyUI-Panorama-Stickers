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
