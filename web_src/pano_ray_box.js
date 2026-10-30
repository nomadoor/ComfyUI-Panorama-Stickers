// Where a ray enters a box, for the code that loads at once (the new UI's viewpoint, web_src/studio/view_camera.js:
// the first T on the CPU). The three.js chunk (pano_three_view.js) must not share a module with the bundle that loads
// at once (docs/threejs-spark-integration.md "遅延読み込み": the chunk imports nothing statically), so it keeps its own
// pano_pick.js rayBoxDepth; tests/pano_ray_box.test.mjs holds the two to the same answers.

// Where the ray origin + direction * t enters the box { min, max } (both in the same frame): the least t >= 0 on it,
// so from inside the box it is where the ray leaves. null when it misses.
export function rayBoxDepth(origin, direction, box) {
  let enter = -Infinity;
  let leave = Infinity;
  for (let axis = 0; axis < 3; axis += 1) {
    if (direction[axis] === 0) {
      if (origin[axis] < box.min[axis] || origin[axis] > box.max[axis]) return null;
      continue;
    }
    const a = (box.min[axis] - origin[axis]) / direction[axis];
    const b = (box.max[axis] - origin[axis]) / direction[axis];
    enter = Math.max(enter, Math.min(a, b));
    leave = Math.min(leave, Math.max(a, b));
  }
  if (enter > leave || leave < 0) return null;
  return enter >= 0 ? enter : leave;
}
