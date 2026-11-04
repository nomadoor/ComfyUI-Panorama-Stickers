// The vector and 3 x 3 matrix arithmetic of the editor's World math (pano_space.js): arrays [x, y, z] and rotations as
// rows.

export function add(a, b, s = 1) {
  return [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];
}

export function column(rotation, index) {
  return [rotation[0][index], rotation[1][index], rotation[2][index]];
}

export function apply(rotation, p) {
  return rotation.map((row) => row[0] * p[0] + row[1] * p[1] + row[2] * p[2]);
}

export function sub(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

export function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

export function multiply(a, b) {
  return a.map((row) => [0, 1, 2].map((index) => row[0] * b[0][index] + row[1] * b[1][index] + row[2] * b[2][index]));
}

export function transpose(m) {
  return [0, 1, 2].map((index) => column(m, index));
}
