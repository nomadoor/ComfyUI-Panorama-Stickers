import assert from "node:assert/strict";
import test from "node:test";

import { disposeNodeRuntime, editorSession } from "../web_src/pano_node_bridge.js";
import { restoredView, viewMemory } from "../web_src/pano_view_memory.js";

function editorView(patch = {}) {
  return {
    mode: "pano",
    spaceMode: "6dof",
    viewPosition: [1, 2, 3],
    viewYaw: 30,
    viewPitch: -10,
    viewFov: 80,
    viewDistance: 5,
    viewMoved: true,
    viewTransition: null,
    ...patch,
  };
}

const shown = {
  mode: "pano",
  spaceMode: "6dof",
  position: [1, 2, 3],
  yaw_deg: 30,
  pitch_deg: -10,
  hFOV_deg: 80,
  distance: 5,
  moved: true,
};

test("the view is remembered as the editor shows it: tab, space mode, place, direction, FOV and pivot", () => {
  assert.deepEqual(viewMemory(editorView()), shown);
  assert.deepEqual(viewMemory(editorView({ mode: "unwrap", spaceMode: "3dof", viewMoved: false })), {
    ...shown, mode: "unwrap", spaceMode: "3dof", moved: false,
  });
});

test("the remembered position is a copy, so moving on does not change it", () => {
  const editor = editorView();
  const memory = viewMemory(editor);
  editor.viewPosition[0] = 99;
  assert.deepEqual(memory.position, [1, 2, 3]);
});

test("a view on its way somewhere is remembered where it goes, in the mode it ends in", () => {
  const to = { position: [4, 5, 6], yaw_deg: 90, pitch_deg: 0, hFOV_deg: 100, distance: 2 };
  assert.deepEqual(viewMemory(editorView({ viewTransition: { from: {}, to, end: null } })), {
    ...shown, position: [4, 5, 6], yaw_deg: 90, pitch_deg: 0, hFOV_deg: 100, distance: 2,
  });
  assert.deepEqual(viewMemory(editorView({ viewTransition: { from: {}, to, end: { mode: "3dof", moved: false } } })), {
    ...shown, spaceMode: "3dof", position: [4, 5, 6], yaw_deg: 90, pitch_deg: 0, hFOV_deg: 100, distance: 2, moved: false,
  });
});

test("a remembered view gives back the editor's view fields", () => {
  assert.deepEqual(restoredView(shown, { frame: false }), {
    mode: "pano",
    spaceMode: "6dof",
    viewPosition: [1, 2, 3],
    viewYaw: 30,
    viewPitch: -10,
    viewFov: 80,
    viewDistance: 5,
    viewMoved: true,
  });
  const restored = restoredView(shown, { frame: false });
  restored.viewPosition[0] = 99;
  assert.deepEqual(shown.position, [1, 2, 3], "the memory is not shared with the editor");
  assert.equal(restoredView({ ...shown, mode: "frame" }, { frame: true }).mode, "frame");
});

test("nothing remembered, or anything that is no view, opens at the default view", () => {
  assert.equal(restoredView(null, { frame: true }), null);
  assert.equal(restoredView(undefined, { frame: true }), null);
  const bad = [
    { mode: "frame" },
    { mode: "other" },
    { spaceMode: "free" },
    { position: [1, Number.NaN, 3] },
    { position: [1, 2] },
    { position: null },
    { yaw_deg: Number.POSITIVE_INFINITY },
    { pitch_deg: 90 },
    { pitch_deg: Number.NaN },
    { hFOV_deg: 10 },
    { hFOV_deg: 141 },
    { distance: 0 },
    { distance: Number.NaN },
    { moved: "yes" },
  ];
  for (const patch of bad) assert.equal(restoredView({ ...shown, ...patch }, { frame: false }), null, JSON.stringify(patch));
});

test("the view lives in the node's editor session, which a node removal or a workflow load clears", () => {
  const node = {};
  assert.equal(editorSession(node).view, null);
  editorSession(node).view = shown;
  assert.equal(editorSession(node).view, shown);
  disposeNodeRuntime(node);
  assert.equal(editorSession(node).view, null);
  assert.equal(JSON.stringify(node), "{}", "nothing is written on the node");
});
