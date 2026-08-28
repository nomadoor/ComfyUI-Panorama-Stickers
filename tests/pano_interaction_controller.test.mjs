import assert from "node:assert/strict";
import test from "node:test";

import { createPanoInteractionController } from "../web_src/pano_interaction_controller.js";

test("stopMotion cancels camera drag and inertia before an object gesture starts", () => {
  let view = { yaw: 0, pitch: 0, fov: 100 };
  const controller = createPanoInteractionController({
    getView: () => view,
    setView: (next) => { view = next; },
  });

  controller.startDrag(0, 0, 1, 1000);
  controller.moveDrag(10, 0, "pano", 1010);
  controller.moveDrag(20, 0, "pano", 1020);
  controller.endDrag(1020);
  assert.equal(controller.state.inertia.active, true);

  assert.equal(controller.stopMotion(), true);
  assert.equal(controller.state.drag.active, false);
  assert.equal(controller.state.inertia.active, false);
  assert.equal(controller.state.inertia.vx, 0);
  assert.equal(controller.state.inertia.vy, 0);
});
