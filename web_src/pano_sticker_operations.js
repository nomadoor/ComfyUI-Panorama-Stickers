// The Sticker operations still running on a node (an image or a 3D file uploading for Add, a replace, a paint layer
// written on close): queued one after the other in the node's stateSync, so a prompt queued meanwhile waits for them
// (pano_editor_extension.js flushPanoStateProducers). The old editor, the new UI and the node surfaces queue here.
import { stateSync } from "./pano_node_bridge.js";

export async function waitForPendingStickerUploads(node, { tolerateOperationFailure = false } = {}) {
  const pending = stateSync(node)?.pendingStickerUploads;
  if (!pending) return;
  while (pending.size > 0) {
    const entries = Array.from(pending.entries());
    if (tolerateOperationFailure) {
      await Promise.allSettled(entries.map(([, promise]) => promise));
    } else {
      await Promise.all(entries.map(([, promise]) => promise));
    }
    entries.forEach(([assetId, promise]) => {
      if (pending.get(assetId) === promise) pending.delete(assetId);
    });
  }
}

export function queuePendingStickerOperation(node, operationId, operation) {
  if (!node || typeof operation !== "function") {
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  }
  const sync = stateSync(node);
  const previous = sync.stickerOperationTail;
  const ready = previous && typeof previous.then === "function"
    ? previous.catch(() => undefined)
    : Promise.resolve();
  const pending = ready.then(() => operation());
  const tail = pending.catch(() => undefined);
  sync.stickerOperationTail = tail;
  sync.pendingStickerUploads.set(operationId, pending);
  const cleanup = () => {
    if (sync.pendingStickerUploads.get(operationId) === pending) {
      sync.pendingStickerUploads.delete(operationId);
    }
  };
  pending.then(cleanup, cleanup);
  tail.then(() => {
    if (sync.stickerOperationTail === tail) sync.stickerOperationTail = null;
  });
  return pending;
}
