// Listening to a ComfyUI widget's changes (docs/studio-node-surface.md "一行の状態"). ComfyUI calls a widget's
// callback as callback.call(widget, value, canvas, node, ...) and its own callbacks read `this` (a number widget's
// options) and those arguments, so a listener chains onto the callback and calls the one before it with the same
// `this` and arguments. The listener runs even when the one before throws (the error still reaches the caller).

// Chains `listener(...args)` after `widget.callback`. Returns restore(): it puts the callback before back while this
// wrapper is still the widget's callback, and otherwise only stops the listener (another chain wraps this one).
export function chainWidgetCallback(widget, listener) {
  if (!widget) return () => {};
  const previous = widget.callback;
  let listening = true;
  const wrapper = function (...args) {
    try {
      return typeof previous === "function" ? previous.apply(this, args) : undefined;
    } finally {
      if (listening) listener(...args);
    }
  };
  widget.callback = wrapper;
  return () => {
    listening = false;
    if (widget.callback === wrapper) widget.callback = previous;
  };
}
