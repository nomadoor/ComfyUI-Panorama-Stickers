// Plain values of the three.js view (pano_three_view.js createThreeView): comparing them, in place of a JSON key per
// frame. Part of the three.js chunk (pano_three_view.js).

// Whether a and b hold the same numbers, strings and booleans in the same arrays and objects.
export function sameValue(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((key) => sameValue(a[key], b[key]));
}

// A value as plain numbers, strings, arrays and objects (sameValue compares them): an image as its identity, size
// and frame count (its layer's revision says when it changed), a VIDEO as its identity and time; a draw's `owner`
// is left out. The World's guides (grid, lines, the gizmo's place) are drawn into the faces, so they stay in it.
// createPlainValue() gives the plainValue of one view, which numbers the objects it meets in its own order.
export function createPlainValue() {
  const objectIds = new WeakMap();
  let nextObjectId = 1;
  function objectId(value) {
    if (!objectIds.has(value)) objectIds.set(value, nextObjectId++);
    return objectIds.get(value);
  }

  function plainValue(value) {
    if (value === null || typeof value !== "object") return value;
    if (typeof HTMLVideoElement !== "undefined" && value instanceof HTMLVideoElement) return ["video", objectId(value), value.currentTime, value.videoWidth];
    if (value.nodeType || (typeof ImageBitmap !== "undefined" && value instanceof ImageBitmap)) {
      return ["media", objectId(value), value.width, value.height, value.__panoFrameIdx ?? 0];
    }
    // A buffer of data (a depth, a typed array) by identity: its contents are its item's, which the content revision
    // follows.
    if (ArrayBuffer.isView(value) || value instanceof ArrayBuffer) return ["data", objectId(value)];
    if (Array.isArray(value)) return value.map(plainValue);
    const out = {};
    for (const [key, item] of Object.entries(value)) if (key !== "owner" && item !== undefined) out[key] = plainValue(item);
    return out;
  }
  return plainValue;
}
