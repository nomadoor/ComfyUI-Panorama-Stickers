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
