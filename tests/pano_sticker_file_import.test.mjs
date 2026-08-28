import assert from "node:assert/strict";
import test from "node:test";

import {
  bindStickerDropTarget,
  decodeStickerImageFile,
  dragHasStickerImageFile,
  isStickerImageFile,
  uploadStickerAssetFile,
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
