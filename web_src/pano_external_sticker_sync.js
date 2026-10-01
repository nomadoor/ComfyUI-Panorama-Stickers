const handlersByNode = new WeakMap();

// The open editor is the only writer of the state, so its handler wins over the node surface's even
// when the node surface attaches again after it. Otherwise the newest live handler runs.
export function registerExternalStickerSync(node, handler, { editor = false } = {}) {
  if (!node || typeof handler !== "function") return () => {};
  let handlers = handlersByNode.get(node);
  if (!handlers) {
    handlers = [];
    handlersByNode.set(node, handlers);
  }
  const entry = { handler, editor };
  handlers.push(entry);
  let active = true;
  return () => {
    if (!active) return;
    active = false;
    const current = handlersByNode.get(node);
    if (!current) return;
    const index = current.indexOf(entry);
    if (index >= 0) current.splice(index, 1);
    if (current.length === 0) handlersByNode.delete(node);
  };
}

export function runExternalStickerSync(node, ...args) {
  const handlers = handlersByNode.get(node);
  const entry = handlers?.findLast((item) => item.editor) || handlers?.at(-1);
  if (!entry) return false;
  entry.handler(...args);
  return true;
}
