import assert from "node:assert/strict";
import test from "node:test";

import {
  bindWheelCaptureRoot,
  readWheelDirection,
} from "../web_src/pano_wheel.js";

test("wheel direction is normalized across modern and legacy event fields", () => {
  assert.equal(readWheelDirection({ deltaY: 12 }), 1);
  assert.equal(readWheelDirection({ deltaY: -0.25 }), -1);
  assert.equal(readWheelDirection({ deltaY: 0 }), 0);
  assert.equal(readWheelDirection({ wheelDeltaY: 120 }), -1);
  assert.equal(readWheelDirection({ wheelDelta: -120 }), 1);
  assert.equal(readWheelDirection({ detail: -3 }), -1);
  assert.equal(readWheelDirection({}, 40), 1);
});

test("wheel capture focuses the Node2 root on pointer entry and cleans up", () => {
  const listeners = new Map();
  const focusCalls = [];
  const root = {
    addEventListener(name, listener) { listeners.set(name, listener); },
    removeEventListener(name, listener) {
      if (listeners.get(name) === listener) listeners.delete(name);
    },
    focus(options) { focusCalls.push(options); },
  };

  const unbind = bindWheelCaptureRoot(root);
  listeners.get("pointerenter")?.();
  assert.deepEqual(focusCalls, [{ preventScroll: true }]);
  unbind();
  assert.equal(listeners.has("pointerenter"), false);
});
