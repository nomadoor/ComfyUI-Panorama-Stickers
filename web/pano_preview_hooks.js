export function patchNodeLifecycle(nodeType, key, applyToNode) {
  if (!nodeType?.prototype || typeof applyToNode !== "function") return;
  const marker = `__panoLifecyclePatched_${String(key || "default")}`;
  if (nodeType[marker]) return;
  nodeType[marker] = true;
  const logPrefix = `[PanoramaPreview:${String(key || "default")}]`;

  const onNodeCreatedPrev = nodeType.prototype.onNodeCreated;
  nodeType.prototype.onNodeCreated = function () {
    const r = onNodeCreatedPrev ? onNodeCreatedPrev.apply(this, arguments) : undefined;
    try {
      applyToNode(this);
    } catch (err) {
      try { console.warn(logPrefix, "onNodeCreated wiring skipped:", err); } catch { }
    }
    return r;
  };

  const onConfigurePrev = nodeType.prototype.onConfigure;
  nodeType.prototype.onConfigure = function () {
    const r = onConfigurePrev ? onConfigurePrev.apply(this, arguments) : undefined;
    try {
      applyToNode(this);
    } catch (err) {
      try { console.warn(logPrefix, "onConfigure wiring skipped:", err); } catch { }
    }
    return r;
  };

  const onAddedPrev = nodeType.prototype.onAdded;
  nodeType.prototype.onAdded = function () {
    const r = onAddedPrev ? onAddedPrev.apply(this, arguments) : undefined;
    try {
      applyToNode(this);
    } catch (err) {
      try { console.warn(logPrefix, "onAdded wiring skipped:", err); } catch { }
    }
    return r;
  };
}
