import assert from "node:assert/strict";
import test from "node:test";

import { FILE_3D_ROUTE, createFile3dEditorFiles, requestFile3dEditorFile } from "../web_src/pano_file_3d.js";

const source = { kind: "file", filename: "chair.glb", subfolder: "3d", storage: "input" };
const entry = { filename: "pano_scene_ab12.glb", subfolder: "", type: "temp", pano_evictable: true };

function respond(status, body) {
  return { status, ok: status >= 200 && status < 300, json: async () => body };
}

// docs/studio-node.md "3D ファイルの `file` の Source のエディタ用ファイル": the editor's side of the route.
test("the editor asks the route for a 3D file's editor file with the Source's values", async () => {
  const calls = [];
  const fetchApi = async (path, options) => {
    calls.push({ path, options });
    return respond(200, { kind: "mesh", unlit: false, file: entry, box: { min: [-1, 0, -1], max: [1, 2, 1] } });
  };
  const result = await requestFile3dEditorFile(source, { fetchApi });
  assert.equal(FILE_3D_ROUTE, "/panorama_suite/file_3d");
  assert.equal(calls.length, 1);
  assert.equal(calls[0].path, FILE_3D_ROUTE);
  assert.equal(calls[0].options.method, "POST");
  assert.equal(calls[0].options.headers["Content-Type"], "application/json");
  assert.deepEqual(JSON.parse(calls[0].options.body), { filename: "chair.glb", subfolder: "3d", storage: "input" });
  // The content's box comes as the route gives it, for the fit of a new 3D Sticker (pano_space.js fitSphereOfBox
  // checks its shape).
  assert.deepEqual(result, { ok: true, kind: "mesh", unlit: false, file: entry, box: { min: [-1, 0, -1], max: [1, 2, 1] } });
});

test("a SPLAT has no unlit, and a reply of another shape is a failure", async () => {
  const splat = await requestFile3dEditorFile(source, { fetchApi: async () => respond(200, { kind: "splat", file: entry }) });
  // Without a box (an empty content, or an older node pack) it is null.
  assert.deepEqual(splat, { ok: true, kind: "splat", unlit: true, file: entry, box: null });
  const odd = await requestFile3dEditorFile(source, { fetchApi: async () => respond(200, { kind: "voxels", file: entry }) });
  assert.equal(odd.ok, false);
  assert.equal(odd.error, "Could not read the 3D file 3d/chair.glb: the server's reply was not understood.");
});

test("a refused or unreadable 3D file gives the route's text, the node's warning", async () => {
  const error = "Could not read the 3D file 3d/rig.fbx: Unsupported 3D format. Convert it to GLB.";
  for (const status of [400, 422]) {
    const result = await requestFile3dEditorFile(source, { fetchApi: async () => respond(status, { error }) });
    assert.deepEqual(result, { ok: false, error });
  }
  // Without the route's text (an older node pack, a lost connection) the editor says what it could.
  const missing = await requestFile3dEditorFile(source, { fetchApi: async () => ({ status: 404, ok: false, json: async () => { throw new SyntaxError("not JSON"); } }) });
  assert.deepEqual(missing, { ok: false, error: "Could not read the 3D file 3d/chair.glb: the server answered 404." });
  const lost = await requestFile3dEditorFile(source, { fetchApi: async () => { throw new TypeError("Failed to fetch"); } });
  assert.deepEqual(lost, { ok: false, error: "Could not read the 3D file 3d/chair.glb: Failed to fetch." });
});

test("each Source is asked once while the editor is open, again after its file is gone", async () => {
  const calls = [];
  let updates = 0;
  const files = createFile3dEditorFiles({
    fetchApi: async (path, options) => {
      calls.push(JSON.parse(options.body));
      return respond(200, { kind: "mesh", unlit: true, file: { ...entry, filename: `f${calls.length}.glb` } });
    },
    onUpdate: () => { updates += 1; },
  });
  assert.equal(files.get(source).state, "pending");
  assert.equal(files.get({ ...source }).state, "pending");
  const ready = await files.request(source);
  assert.equal(calls.length, 1);
  assert.equal(updates, 1);
  assert.deepEqual(ready, { state: "ready", kind: "mesh", unlit: true, file: { ...entry, filename: "f1.glb" }, box: null, error: null, generation: 0 });
  assert.equal(files.get(source), ready);
  // Another file is another question.
  await files.request({ ...source, filename: "table.glb" });
  assert.equal(calls.length, 2);
  // The editor file 404'd (the temp file was dropped): asked again, under a new generation.
  files.refresh(source);
  assert.equal(files.get(source).state, "pending");
  const again = await files.request(source);
  assert.equal(calls.length, 3);
  assert.equal(again.generation, 1);
  assert.equal(again.file.filename, "f3.glb");
});

test("a failed question is kept, so the editor does not ask again every frame", async () => {
  let calls = 0;
  const files = createFile3dEditorFiles({ fetchApi: async () => { calls += 1; return respond(422, { error: "bad" }); } });
  const failed = await files.request(source);
  assert.equal(failed.state, "failed");
  assert.equal(failed.error, "bad");
  assert.equal(files.get(source).state, "failed");
  assert.equal(calls, 1);
  assert.deepEqual(files.failures(), [{ source: { filename: "chair.glb", subfolder: "3d", storage: "input" }, error: "bad" }]);
});

test("a refresh happens a few times at most, so a file the server keeps dropping is not asked for forever", async () => {
  let calls = 0;
  const files = createFile3dEditorFiles({ fetchApi: async () => { calls += 1; return respond(200, { kind: "mesh", unlit: true, file: entry }); } });
  await files.request(source);
  for (let index = 0; index < 10; index += 1) {
    files.refresh(source);
    await files.request(source);
  }
  assert.equal(calls, 4);
});
