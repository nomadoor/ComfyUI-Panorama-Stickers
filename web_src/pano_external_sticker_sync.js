const handlersByNode = new WeakMap();

export function registerExternalStickerSync(node, handler) {
  if (!node || typeof handler !== "function") return () => {};
  let handlers = handlersByNode.get(node);
  if (!handlers) {
    handlers = [];
    handlersByNode.set(node, handlers);
  }
  const entry = { handler };
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
  const entry = handlers?.[handlers.length - 1];
  if (!entry) return false;
  entry.handler(...args);
  return true;
}
