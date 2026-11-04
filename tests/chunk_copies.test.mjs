// The rules the three.js chunk keeps its own copy of (docs/threejs-spark-integration.md "版の固定と遅延読み込みのチャンク":
// the chunk does not import back from the bundle that loads at once) give the same answers as the bundle's: turning a
// vector by a quaternion (pano_pick.js pickRay's rotate, pano_lens.js rotateByQuaternion) and the size of a media
// element (pano_three_view.js mediaSize, pano_editor_view.js mediaSize).
import assert from "node:assert/strict";
import test from "node:test";

import { mediaSize } from "../web_src/pano_editor_view.js";
import { rotateByQuaternion } from "../web_src/pano_lens.js";
import { pickRay } from "../web_src/pano_pick.js";
import { mediaSize as chunkMediaSize } from "../web_src/pano_three_view.js";

let seed = 11;
const random = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648) * 2 - 1;
const unitQuaternion = () => {
  const q = [random(), random(), random(), random()];
  const length = Math.hypot(...q) || 1;
  return { x: q[0] / length, y: q[1] / length, z: q[2] / length, w: q[3] / length };
};

test("the two copies of turning a vector by a quaternion agree", () => {
  const cases = [
    [{ x: 0, y: 0, z: 0, w: 1 }, 0.5, 0.5],
    [{ x: 0, y: Math.SQRT1_2, z: 0, w: Math.SQRT1_2 }, 0, 0],
    [{ x: Math.SQRT1_2, y: 0, z: 0, w: Math.SQRT1_2 }, 1, 1],
  ];
  for (let i = 0; i < 500; i += 1) cases.push([unitQuaternion(), (random() + 1) / 2, (random() + 1) / 2]);
  for (const [quaternion, u, v] of cases) {
    const camera = { position: [1, 2, 3], quaternion, fovY_deg: 60, aspect: 16 / 9 };
    const width = 640;
    const height = 360;
    const x = u * width;
    const y = v * height;
    // pickRay's direction is its camera-local ray turned by the chunk's copy.
    const tanY = Math.tan(camera.fovY_deg * Math.PI / 360);
    const local = [(x / width * 2 - 1) * tanY * camera.aspect, (1 - y / height * 2) * tanY, -1];
    const chunk = pickRay(camera, x, y, width, height).direction;
    const eager = rotateByQuaternion(quaternion, local);
    // The two sum the same terms in a different order, so they may differ in the last bits.
    for (let axis = 0; axis < 3; axis += 1) assert.ok(Math.abs(chunk[axis] - eager[axis]) <= 1e-12, `${chunk} vs ${eager}`);
  }
});

test("the two copies of a media element's size agree", () => {
  const cases = [
    { videoWidth: 1920, videoHeight: 1080, width: 300, height: 150 },
    { naturalWidth: 640, naturalHeight: 480, width: 10, height: 10 },
    { width: 320, height: 240 },
    { videoWidth: 0, videoHeight: 0, naturalWidth: 200, naturalHeight: 100 },
    { width: "64", height: "32" },
    {},
  ];
  for (const media of cases) assert.deepEqual(chunkMediaSize(media), mediaSize(media));
  assert.deepEqual(mediaSize(cases[0]), { width: 1920, height: 1080 });
});
