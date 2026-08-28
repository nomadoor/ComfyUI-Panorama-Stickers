const trackedWidgets = new WeakSet();

export function trackDomWidgetRemoval(widget) {
  if (!widget || typeof widget !== "object" || trackedWidgets.has(widget)) return widget;
  const previous = typeof widget.onRemove === "function" ? widget.onRemove : null;
  let removed = false;
  widget.onRemove = function (...args) {
    if (removed) return undefined;
    removed = true;
    return previous?.apply(this, args);
  };
  trackedWidgets.add(widget);
  return widget;
}

export function removeTrackedDomWidget(node, widget) {
  if (!widget) return false;
  trackDomWidgetRemoval(widget)?.onRemove?.();
  if (!Array.isArray(node?.widgets)) return false;
  const index = node.widgets.indexOf(widget);
  if (index < 0) return false;
  node.widgets.splice(index, 1);
  if (Array.isArray(node.widgets_values) && node.widgets_values.length > index) {
    node.widgets_values.splice(index, 1);
  }
  return true;
}
