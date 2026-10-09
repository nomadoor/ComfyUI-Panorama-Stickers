import assert from "node:assert/strict";
import test from "node:test";

import {
  FILE_3D_MAX_BYTES,
  WORLD_FILE_ACCEPT,
  bindStickerDropTarget,
  decodeStickerImageFile,
  dragHasStickerImageFile,
  dragHasStudioFile,
  file3dTooLargeMessage,
  isSticker3dFile,
  isStickerImageFile,
  uploadStickerAssetFile,
  uploadWorld3dFile,
} from "../web_src/pano_sticker_file_import.js";

class DropTargetBoundary {
  constructor() {
    this.listeners = new Map();
  }

  addEventListener(name, listener, capture) {
    this.listeners.set(name, { listener, capture });
  }

  removeEventListener(name, listener, capture) {
    const current = this.listeners.get(name);
    if (current?.listener === listener && current.capture === capture) this.listeners.delete(name);
  }

  contains(value) {
    return value === this;
  }

  dispatch(name, event) {
    this.listeners.get(name)?.listener(event);
  }
}

function dropEvent(dataTransfer, relatedTarget = null) {
  return {
    dataTransfer,
    relatedTarget,
    prevented: false,
    stopped: false,
    immediateStopped: false,
    preventDefault() { this.prevented = true; },
    stopPropagation() { this.stopped = true; },
    stopImmediatePropagation() { this.immediateStopped = true; },
  };
}

test("sticker import accepts browser image MIME types and supported image suffixes", () => {
  assert.equal(isStickerImageFile({ type: "image/png", name: "asset.bin" }), true);
  assert.equal(isStickerImageFile({ type: "", name: "asset.WEBP" }), true);
  assert.equal(isStickerImageFile({ type: "text/plain", name: "notes.txt" }), false);
});

test("drag acceptance recognizes image DataTransfer items before files are exposed", () => {
  assert.equal(dragHasStickerImageFile({ items: [{ kind: "file", type: "image/png" }], files: [] }), true);
  assert.equal(dragHasStickerImageFile({ items: [{ kind: "file", type: "text/plain" }], files: [] }), false);
});

test("the DOM preview surface accepts an image drop and releases every listener", () => {
  const target = new DropTargetBoundary();
  const active = [];
  const dropped = [];
  const image = { type: "image/png", name: "sticker.png" };
  const cleanup = bindStickerDropTarget(target, {
    onActive: (value) => active.push(value),
    onDrop: (file) => dropped.push(file),
  });

  const over = dropEvent({ items: [{ kind: "file", type: "image/png" }], files: [] });
  target.dispatch("dragover", over);
  assert.equal(over.prevented, true);
  assert.equal(over.stopped, true);
  assert.equal(over.dataTransfer.dropEffect, "copy");
  assert.equal(active.at(-1), true);

  const drop = dropEvent({ items: [{ kind: "file", type: "image/png" }], files: [image] });
  target.dispatch("drop", drop);
  assert.equal(drop.prevented, true);
  assert.deepEqual(dropped, [image]);
  assert.equal(active.at(-1), false);

  cleanup();
  assert.equal(target.listeners.size, 0);
});

test("the dropped File decides acceptance when the drag item has a generic MIME type", () => {
  const target = new DropTargetBoundary();
  const active = [];
  const dropped = [];
  const image = { type: "application/octet-stream", name: "sticker.WEBP" };
  const cleanup = bindStickerDropTarget(target, {
    onActive: (value) => active.push(value),
    onDrop: (file) => dropped.push(file),
  });
  const transfer = {
    items: [{ kind: "file", type: "application/octet-stream" }],
    files: [image],
  };
  const over = dropEvent(transfer);
  target.dispatch("dragover", over);
  assert.equal(over.prevented, true);
  assert.equal(over.dataTransfer.dropEffect, "copy");
  assert.equal(active.at(-1), true);

  const event = dropEvent(transfer);
  target.dispatch("drop", event);

  assert.equal(event.prevented, true);
  assert.equal(event.stopped, true);
  assert.deepEqual(dropped, [image]);
  cleanup();
});

test("an unsupported drop clears drag feedback without consuming the host event", () => {
  const target = new DropTargetBoundary();
  const active = [];
  const cleanup = bindStickerDropTarget(target, { onActive: (value) => active.push(value) });
  target.dispatch("dragover", dropEvent({
    items: [{ kind: "file", type: "" }],
    files: [],
  }));
  assert.equal(active.at(-1), true);
  const event = dropEvent({
    items: [{ kind: "file", type: "" }],
    files: [{ type: "application/octet-stream", name: "archive.bin" }],
  });

  target.dispatch("drop", event);

  assert.equal(active.at(-1), false);
  assert.equal(event.prevented, false);
  assert.equal(event.stopped, false);
  cleanup();
});

test("the DOM preview surface leaves a non-image drop to the host", () => {
  const target = new DropTargetBoundary();
  const dropped = [];
  const cleanup = bindStickerDropTarget(target, { onDrop: (file) => dropped.push(file) });
  const event = dropEvent({
    items: [{ kind: "file", type: "" }],
    files: [{ type: "application/octet-stream", name: "archive.bin" }],
  });

  target.dispatch("drop", event);

  assert.equal(event.prevented, false);
  assert.equal(event.stopped, false);
  assert.deepEqual(dropped, []);
  cleanup();
});

test("sticker import decodes dimensions and always releases its temporary object URL", async () => {
  const released = [];
  class BoundaryImage {
    set src(value) {
      this.currentSrc = value;
      this.naturalWidth = 640;
      this.naturalHeight = 320;
      queueMicrotask(() => this.onload?.());
    }
  }

  const decoded = await decodeStickerImageFile(
    { type: "image/png", name: "wide.png" },
    {
      ImageCtor: BoundaryImage,
      createObjectURL: () => "blob:test",
      revokeObjectURL: (url) => released.push(url),
    },
  );

  assert.equal(decoded.width, 640);
  assert.equal(decoded.height, 320);
  assert.equal(decoded.image.currentSrc, "blob:test");
  assert.deepEqual(released, ["blob:test"]);
});

test("sticker upload returns the durable Comfy image descriptor", async () => {
  const requests = [];
  const descriptor = await uploadStickerAssetFile(
    { type: "image/png", name: "logo.png" },
    {
      fetchApi: async (path, options) => {
        requests.push({ path, options });
        return {
          status: 200,
          json: async () => ({ name: "saved.png", subfolder: "panorama_stickers", type: "input" }),
        };
      },
    },
  );

  assert.equal(requests[0].path, "/upload/image");
  assert.equal(requests[0].options.method, "POST");
  assert.deepEqual(descriptor, {
    type: "comfy_image",
    filename: "saved.png",
    subfolder: "panorama_stickers",
    storage: "input",
    name: "logo.png",
  });
});

// docs/editor-interaction.md "3D ファイルを置く流れ": the 3D files of Add to World and the drop.
test("a 3D file is told by its extension, apart from the image checks the legacy nodes use", () => {
  for (const name of ["a.glb", "a.GLTF", "a.obj", "a.fbx", "a.stl", "a.spz", "a.splat", "a.ply", "a.ksplat"]) {
    assert.equal(isSticker3dFile({ type: "", name }), true, name);
    // The legacy image checks do not take it.
    assert.equal(isStickerImageFile({ type: "", name }), false, name);
  }
  assert.equal(isSticker3dFile({ type: "model/gltf-binary", name: "a.png" }), false);
  assert.equal(isSticker3dFile({ type: "image/png", name: "a.png" }), false);
  assert.equal(isSticker3dFile(null), false);
});

test("Add to World picks images and the nine 3D file extensions", () => {
  assert.equal(WORLD_FILE_ACCEPT, "image/*,.gltf,.glb,.obj,.fbx,.stl,.spz,.splat,.ply,.ksplat");
});

test("a Panorama Studio drag takes 3D file items, which the legacy image drag does not", () => {
  const items = (type) => ({ items: [{ kind: "file", type }], files: [] });
  for (const type of ["model/gltf-binary", "model/obj", "", "application/octet-stream", "image/png"]) {
    assert.equal(dragHasStudioFile(items(type)), true, type);
  }
  assert.equal(dragHasStudioFile(items("text/plain")), false);
  assert.equal(dragHasStudioFile({ items: [{ kind: "string", type: "text/plain" }], files: [] }), false);
  // Without items the files decide, by their names.
  assert.equal(dragHasStudioFile({ files: [{ type: "", name: "a.glb" }] }), true);
  assert.equal(dragHasStudioFile({ files: [{ type: "", name: "a.txt" }] }), false);
  // The legacy check stays as it was.
  assert.equal(dragHasStickerImageFile(items("model/gltf-binary")), false);
});

test("a 3D file uploads to input/3d as Load3D sends it and becomes a file Source", async () => {
  const requests = [];
  const file = new File([new Uint8Array([1, 2, 3])], "chair.glb");
  const source = await uploadWorld3dFile(file, {
    fetchApi: async (path, options) => {
      requests.push({ path, options });
      return { status: 200, json: async () => ({ name: "chair (1).glb", subfolder: "3d", type: "input" }) };
    },
  });
  assert.equal(requests.length, 1);
  assert.equal(requests[0].path, "/upload/image");
  assert.equal(requests[0].options.method, "POST");
  const body = requests[0].options.body;
  assert.equal(body.get("image").name, "chair.glb");
  assert.equal(body.get("subfolder"), "3d");
  assert.equal(body.get("type"), "input");
  // No overwrite: the server keeps a file of the same name and contents, else saves under a new name.
  assert.equal(body.has("overwrite"), false);
  assert.deepEqual(source, { kind: "file", filename: "chair (1).glb", subfolder: "3d", storage: "input" });
});

test("a 3D file over 100 MB is refused before it uploads", async () => {
  assert.equal(FILE_3D_MAX_BYTES, 100 * 1024 * 1024);
  const sized = (size) => ({ name: "big.glb", type: "", size });
  assert.equal(file3dTooLargeMessage(sized(FILE_3D_MAX_BYTES)), null);
  assert.equal(file3dTooLargeMessage(sized(FILE_3D_MAX_BYTES + 1)), "big.glb is too large (100.0 MB). The largest 3D file is 100 MB.");
  let called = false;
  await assert.rejects(
    uploadWorld3dFile(sized(150 * 1024 * 1024), { fetchApi: async () => { called = true; } }),
    { message: "big.glb is too large (150.0 MB). The largest 3D file is 100 MB." },
  );
  assert.equal(called, false);
});

test("a failed 3D upload says why", async () => {
  const file = new File([new Uint8Array([1])], "a.glb");
  await assert.rejects(
    uploadWorld3dFile(file, { fetchApi: async () => ({ status: 413, statusText: "Payload Too Large" }) }),
    { message: "Could not upload a.glb (413 Payload Too Large)." },
  );
  await assert.rejects(
    uploadWorld3dFile(file, { fetchApi: async () => { throw new TypeError("Failed to fetch"); } }),
    { message: "Could not upload a.glb (Failed to fetch)." },
  );
  await assert.rejects(uploadWorld3dFile({ name: "a.png", type: "image/png", size: 1 }, { fetchApi: async () => null }), TypeError);
});
