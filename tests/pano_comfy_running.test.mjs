import assert from "node:assert/strict";
import test from "node:test";

import { watchComfyRunning } from "../web_src/pano_comfy_running.js";

// docs/threejs-spark-integration.md "生成を邪魔しない": a fake ComfyUI api's events.
function fakeApi() {
  const target = new EventTarget();
  return {
    addEventListener: (type, listener) => target.addEventListener(type, listener),
    removeEventListener: (type, listener) => target.removeEventListener(type, listener),
    emit: (type, detail = null) => target.dispatchEvent(new CustomEvent(type, { detail })),
  };
}

const status = (queueRemaining) => ({ status: {}, exec_info: { queue_remaining: queueRemaining } });

test("ComfyUI runs while its queue has a job, from the status event", () => {
  const api = fakeApi();
  const changes = [];
  const watch = watchComfyRunning(api, (running) => changes.push(running));
  assert.equal(watch.running(), false);
  api.emit("status", status(1));
  assert.equal(watch.running(), true);
  api.emit("status", status(2));
  api.emit("status", status(0));
  assert.equal(watch.running(), false);
  assert.deepEqual(changes, [true, false]);
  watch.dispose();
  api.emit("status", status(1));
  assert.equal(watch.running(), false);
  assert.equal(watchComfyRunning(null).running(), false);
});

// The server broadcasts status to every client: a job queued from another tab sends this client no prompt events.
test("a job queued by another client counts as running", () => {
  const api = fakeApi();
  const watch = watchComfyRunning(api);
  api.emit("status", status(1));
  assert.equal(watch.running(), true);
  api.emit("status", status(0));
  assert.equal(watch.running(), false);
});

// A job that ends while the socket is down sends no end event; the status sent on reconnect has an empty queue.
test("a job that ended while disconnected is not running after the reconnect", () => {
  const api = fakeApi();
  const watch = watchComfyRunning(api);
  api.emit("execution_start", { prompt_id: "a" });
  api.emit("status", status(1));
  api.emit("status", null);
  assert.equal(watch.running(), false);
  api.emit("status", status(0));
  assert.equal(watch.running(), false);
});

// executing's detail is a node id in older frontends and an object in newer ones; neither decides running.
test("executing events, as an id or an object, do not change running", () => {
  const api = fakeApi();
  const watch = watchComfyRunning(api);
  api.emit("executing", "12");
  api.emit("executing", { node: "12", display_node: "12", prompt_id: "a" });
  assert.equal(watch.running(), false);
  api.emit("status", status(1));
  api.emit("executing", null);
  api.emit("executing", { node: null, prompt_id: "a" });
  assert.equal(watch.running(), true);
});
