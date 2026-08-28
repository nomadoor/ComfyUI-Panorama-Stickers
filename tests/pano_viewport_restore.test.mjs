import assert from "node:assert/strict";
import test from "node:test";

import { createViewportRestoreScheduler } from "../web_src/pano_viewport_restore.js";

test("viewport restore coalesces wheel bursts and cancels pending work on teardown", () => {
  const callbacks = new Map();
  const cancelled = [];
  const restored = [];
  let nextId = 1;
  const scheduler = createViewportRestoreScheduler({
    requestFrame(callback) {
      const id = nextId++;
      callbacks.set(id, callback);
      return id;
    },
    cancelFrame(id) { cancelled.push(id); },
    restore(snapshot) { restored.push(snapshot); },
  });

  scheduler.schedule("first");
  scheduler.schedule("second");
  assert.equal(callbacks.size, 1);
  callbacks.get(1)();
  assert.deepEqual(restored, ["first"]);

  scheduler.schedule("third");
  scheduler.dispose();
  callbacks.get(2)();
  assert.deepEqual(cancelled, [2]);
  assert.deepEqual(restored, ["first"]);
});
