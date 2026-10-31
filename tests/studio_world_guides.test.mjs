// docs/space-and-view.md "World の物のガイド" and "ホバーの判定" (web_src/studio/world_guides.js): which World objects have
// a guide and what outline, the CPU hover test, how each guide is drawn, and the near cut of a segment that passes
// behind the view. The Camera's mark is tests/studio_camera_marker.test.mjs's.
import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { DEFAULT_VIEW_HFOV, spaceCamera, worldStickerPlane } from "../web_src/pano_space.js";
import { guideLook, hoverGuide, screenSegment, worldGuideItems } from "../web_src/studio/world_guides.js";

const W = 1000;
const H = 500;
// A view at the origin looking down -Z.
const camera = spaceCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: DEFAULT_VIEW_HFOV, distance: 5 }, W, H, { center: [0, 0, 0], radius: 50 });

const state = loadSceneState({
  version: 2,
  stickers: [
    { id: "plane", placement: "world", source: { kind: "file", filename: "a.png" }, position: { value: [0, 0, -4] } },
    { id: "chair", placement: "world", source: { kind: "file", filename: "chair.glb" }, position: { value: [3, 0, -8] }, locked: true },
  ],
});

function contentOf() {
  const plane = { id: "plane", ...worldStickerPlane({ position: [0, 0, -4], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 2 }, { x0: 0, y0: 0, x1: 1, y1: 1 }, 100, 100) };
  const value = { position: [3, 0, -8], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, scale: 1 };
  return { space: { stickers: [plane], fileStickers: [{ id: "chair", url: "file3d:1:chair", kind: "glb", value }] } };
}
const box = { min: [-0.5, -0.5, -0.5], max: [0.5, 0.5, 0.5] };

test("a world image plane's guide is its four edges, a 3D Sticker's the 12 edges of its turned box once it has loaded", () => {
  const before = worldGuideItems(state, contentOf(), () => null);
  assert.deepEqual(before.map((item) => item.id), ["plane"], "a 3D item without its box yet has no guide");
  const items = worldGuideItems(state, contentOf(), () => box);
  assert.deepEqual(items.map((item) => [item.id, item.kind, item.segments.length, item.locked]), [["plane", "plane", 4, false], ["chair", "box", 12, true]]);
  assert.deepEqual(items[1].center, [3, 0, -8]);
  assert.deepEqual(worldGuideItems(state, null), []);
});

test("the hover test hits a plane inside its projected corners and a box inside the screen rectangle around its corners", () => {
  const items = worldGuideItems(state, contentOf(), () => box);
  assert.equal(hoverGuide(items, camera, { x: W / 2, y: H / 2 }, W, H), "plane");
  // The chair is right of the plane's edge: 3 units right at 8 deep.
  const right = W / 2 * (1 + 3 / 8 / Math.tan(50 * Math.PI / 180));
  assert.equal(hoverGuide(items, camera, { x: right, y: H / 2 }, W, H), "chair");
  assert.equal(hoverGuide(items, camera, { x: 5, y: 5 }, W, H), null);
});

test("of overlapping guides the shallowest center wins, and an object with a corner behind the view is not hit", () => {
  const near = { id: "near", kind: "box", corners: [[-1, -1, -3], [1, 1, -3], [-1, 1, -3], [1, -1, -3]], center: [0, 0, -3] };
  const far = { id: "far", kind: "box", corners: [[-3, -3, -9], [3, 3, -9], [-3, 3, -9], [3, -3, -9]], center: [0, 0, -9] };
  assert.equal(hoverGuide([far, near], camera, { x: W / 2, y: H / 2 }, W, H), "near");
  const behind = { ...near, id: "behind", corners: [...near.corners, [0, 0, 1]] };
  assert.equal(hoverGuide([far, behind], camera, { x: W / 2, y: H / 2 }, W, H), "far");
});

test("a guide is thin normally, bright under the pointer, yellow when selected; Hide Grid draws only the selected one (the Camera tab draws as the 3D tab)", () => {
  assert.equal(guideLook({}), "normal");
  assert.equal(guideLook({ hovered: true }), "hover");
  assert.equal(guideLook({ hovered: true, selected: true }), "selected");
  assert.equal(guideLook({ hovered: true, locked: true }), "normal", "a locked object does not light up");
  assert.equal(guideLook({ hovered: true, altHeld: true }), "normal", "nothing lights up while Alt is held");
  assert.equal(guideLook({ gridHidden: true, hovered: true }), null);
  assert.equal(guideLook({ gridHidden: true, selected: true }), "selected");
});

test("a segment passing behind the view is cut at the near plane; one wholly behind is not drawn", () => {
  const cut = screenSegment(camera, [[0, -1, -4], [0, -1, 4]], W, H);
  assert.ok(cut, "the part in front is drawn");
  assert.ok(Math.abs(cut[0].x - W / 2) < 1e-6 && cut[0].y > H / 2);
  assert.ok(cut[1].y > cut[0].y, "it runs down toward the view");
  assert.equal(screenSegment(camera, [[0, 0, 1], [1, 0, 2]], W, H), null);
});

test("the port Sticker's 3D media has a box guide of its item at the playhead, with its item's key for the hit grid", () => {
  const portState = loadSceneState({
    version: 2,
    stickers: [{ id: "port3d", placement: "world", source: { kind: "port" }, position: { value: [0, 0, -6] } }],
  });
  const value = { position: [0, 0, -6], scale: 1, yaw_deg: 0, pitch_deg: 0, roll_deg: 0 };
  const request = { id: "port3d", kind: "mesh", url: "/f1.glb", urls: ["/f0.glb", "/f1.glb"], value };
  const content = { space: { stickers: [], fileStickers: [], sticker: request } };
  const box = { min: [-1, -1, -1], max: [1, 1, 1] };
  const [item] = worldGuideItems(portState, content, (url) => (url === "/f1.glb" ? box : null));
  assert.equal(item.id, "port3d");
  assert.equal(item.kind, "box");
  assert.equal(item.url, "/f1.glb");
  assert.deepEqual(item.center, [0, 0, -6]);
  // Its item at the playhead not loaded yet: no guide.
  assert.deepEqual(worldGuideItems(portState, content, () => null), []);
});

// docs/space-and-view.md "レンズの Camera の当たり": on a lens Camera's picture the guides bend and the hover follows
// the bent outline (pano_lens.js withLensImage).
test("on a lens Camera's picture a guide line bends, cut past the lens's limit, and the hover takes the bent outline", async () => {
  const { lensProjectPoint, withLensImage } = await import("../web_src/pano_lens.js");
  const { screenLines } = await import("../web_src/studio/world_guides.js");
  const focal = W / 2 / Math.tan(DEFAULT_VIEW_HFOV / 2 * Math.PI / 180);
  const lens = withLensImage(camera, { curve: 0.5, focalPx: focal, centerX: W / 2, centerY: H / 2 });
  // A pinhole line stays one straight run.
  assert.equal(screenLines(camera, [[-3, -1, -4], [3, -1, -4]], W, H)[0].length, 2);
  const [run] = screenLines(lens, [[-3, -1, -4], [3, -1, -4]], W, H);
  assert.ok(run.length > 8, "bent into many points");
  // Its middle point lies below the chord between its ends (a horizontal line below the axis bows toward the center).
  const middle = lensProjectPoint(lens, [0, -1, -4]);
  assert.ok(run.some((p) => Math.abs(p.x - middle.x) < 1e-6 && Math.abs(p.y - middle.y) < 1e-6), "through the mapped middle");
  assert.ok(middle.y > run[0].y + 1, "bowed");
  // A line from ahead to straight behind is cut at the limit (κ 0.5: 179°).
  const cut = screenLines(withLensImage(camera, { curve: 0.8, focalPx: focal, centerX: W / 2, centerY: H / 2 }), [[0, -1, -1], [0, -1, 3]], W, H);
  assert.equal(cut.length, 1);
  // The hover: the plane at (0, 0, -4) is hit at its mapped center, and not just outside its bent edge.
  const items = worldGuideItems(state, contentOf(), () => box);
  const plane = items.find((item) => item.id === "plane");
  const center = lensProjectPoint(lens, plane.center);
  assert.equal(hoverGuide([plane], lens, center, W, H), "plane");
  const edge = lensProjectPoint(lens, plane.corners[0].map((value, axis) => (value + plane.corners[1][axis]) / 2));
  const outward = { x: edge.x + (edge.x - center.x) * 0.05, y: edge.y + (edge.y - center.y) * 0.05 };
  assert.equal(hoverGuide([plane], lens, outward, W, H), null);
  const inward = { x: edge.x - (edge.x - center.x) * 0.05, y: edge.y - (edge.y - center.y) * 0.05 };
  assert.equal(hoverGuide([plane], lens, inward, W, H), "plane");
});
