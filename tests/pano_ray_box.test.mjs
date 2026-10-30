// The ray-box entry of the bundle that loads at once (web_src/pano_ray_box.js) and the three.js chunk's
// (web_src/pano_pick.js) give the same answers: the chunk may not share the module, so the rule has two copies.
import assert from "node:assert/strict";
import test from "node:test";

import { rayBoxDepth as chunkDepth } from "../web_src/pano_pick.js";
import { rayBoxDepth } from "../web_src/pano_ray_box.js";

test("the two copies of the ray-box entry agree, on axis-parallel rays and on random ones", () => {
  const box = { min: [-1, -1, -5], max: [1, 1, -3] };
  const cases = [
    [[0, 0, 0], [0, 0, -1]],
    [[2, 0, 0], [0, 0, -1]],
    [[0, 0, 0], [0, 0, 1]],
    [[0, 0, -4], [0, 0, -1]],
    [[0.5, 0, 0], [0, 0.1, -1]],
  ];
  let seed = 7;
  const random = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648) * 8 - 4;
  for (let i = 0; i < 500; i += 1) cases.push([[random(), random(), random()], [random(), random(), random()]]);
  for (const [origin, direction] of cases) assert.equal(rayBoxDepth(origin, direction, box), chunkDepth(origin, direction, box));
  assert.equal(rayBoxDepth([0, 0, 0], [0, 0, -1], box), 3);
});
