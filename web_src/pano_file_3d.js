// The editor files of a 3D file's `file` Source (docs/studio-node.md "3D ファイルの `file` の Source のエディタ用
// ファイル"): the server's read-only route reads the file with the node's own readers and returns the PLY or GLB the
// editor draws, its kind and whether light falls on it. The editor asks for it as soon as a Sticker is placed, so a
// 3D file shows as the output draws it before any run.

import { is3dFileSource } from "./pano_scene_state.js";

export const FILE_3D_ROUTE = "/panorama_suite/file_3d";

// Times one Source is asked again after its editor file is gone (a 404: the server dropped the temp file),
// so a file that keeps going is not asked for in a loop.
const FILE_3D_REFRESHES = 3;

function sourceValues(source) {
  return {
    filename: String(source?.filename ?? ""),
    subfolder: String(source?.subfolder ?? ""),
    storage: String(source?.storage ?? "input"),
  };
}

function sourcePath({ filename, subfolder }) {
  return subfolder ? `${subfolder}/${filename}` : filename;
}

function failure(values, reason) {
  return { ok: false, error: `Could not read the 3D file ${sourcePath(values)}: ${reason}` };
}

// Asks the route for the editor file of a 3D file's Source: { ok: true, kind ("mesh" or "splat"), unlit (true
// unless light falls on a mesh), file (the `ui` file entry), box (the content's box as the route gives it, null
// without one) }, or { ok: false, error } with the route's text (the
// node's warning for the same file) or, without one, what went wrong.
export async function requestFile3dEditorFile(source, { fetchApi }) {
  const values = sourceValues(source);
  let response;
  try {
    response = await fetchApi(FILE_3D_ROUTE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  } catch (error) {
    return failure(values, `${error?.message || error}.`);
  }
  let body = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }
  if (response.status !== 200) {
    return typeof body?.error === "string" && body.error ? { ok: false, error: body.error } : failure(values, `the server answered ${response.status}.`);
  }
  const kind = body?.kind;
  if ((kind !== "mesh" && kind !== "splat") || !body.file || typeof body.file !== "object") {
    return failure(values, "the server's reply was not understood.");
  }
  return { ok: true, kind, unlit: kind !== "mesh" || body.unlit !== false, file: body.file, box: body.box ?? null };
}

export function file3dSourceKey(source) {
  const { storage, subfolder, filename } = sourceValues(source);
  return JSON.stringify([storage, subfolder, filename]);
}

// The editor files of the 3D file Sources, asked for once per Source while an editor is open. get(source) gives
// { state ("pending", "ready" or "failed"), kind, unlit, file, error, generation } and asks the first time;
// request(source) resolves to it once it is no longer pending; refresh(source) asks again (a new generation) after
// the editor file was gone. onUpdate runs when an answer comes.
export function createFile3dEditorFiles({ fetchApi, onUpdate = () => {} }) {
  const entries = new Map();
  let closed = false;

  function ask(key, values, generation, refreshes) {
    const entry = { state: "pending", kind: null, unlit: true, file: null, box: null, error: null, generation };
    const pending = requestFile3dEditorFile(values, { fetchApi }).then((result) => {
      if (entries.get(key)?.entry !== entry) return entry;
      Object.assign(entry, result.ok
        ? { state: "ready", kind: result.kind, unlit: result.unlit, file: result.file, box: result.box }
        : { state: "failed", error: result.error });
      if (!closed) onUpdate();
      return entry;
    });
    entries.set(key, { entry, pending, values, refreshes });
    return entry;
  }

  function slot(source) {
    const key = file3dSourceKey(source);
    if (!entries.has(key)) ask(key, sourceValues(source), 0, 0);
    return entries.get(key);
  }

  return {
    get(source) {
      return slot(source).entry;
    },
    request(source) {
      return slot(source).pending;
    },
    refresh(source) {
      const key = file3dSourceKey(source);
      const current = entries.get(key);
      if (!current) {
        slot(source);
        return;
      }
      if (current.entry.state === "pending" || current.refreshes >= FILE_3D_REFRESHES) return;
      ask(key, current.values, current.entry.generation + 1, current.refreshes + 1);
    },
    // The Sources whose question failed, with the reason.
    failures() {
      return [...entries.values()].filter(({ entry }) => entry.state === "failed").map(({ entry, values }) => ({ source: values, error: entry.error }));
    },
    close() {
      closed = true;
      entries.clear();
    },
  };
}

// The editor file of a 3D file Sticker (docs/threejs-spark-integration.md) from `files` (createFile3dEditorFiles):
// { kind, unlit, url, generation } once the route answered, else null. The first call for its Source asks the route.
// source(entry): the URL of the route's `file`.
export function file3dEditorFileOf(files, sticker, source) {
  if (!files || !is3dFileSource(sticker?.source)) return null;
  const entry = files.get(sticker.source);
  const url = entry.state === "ready" ? source(entry.file) : null;
  return url ? { kind: entry.kind, unlit: entry.unlit, url, generation: entry.generation } : null;
}
