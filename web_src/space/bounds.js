// Where the World content lies (docs/editor-interaction.md "Frame Selected の外接球"): the boxes of loaded items, the
// world Sticker planes and their lens patches, the points that bound the content, and the sphere Frame Selected fits.
import { DEG2RAD } from "../pano_camera_math.js";
import { lensFilmDirection, lensRadius } from "../pano_lens.js";
import { rotationToQuaternion, worldRotation } from "../pano_world.js";
import { add, apply } from "./vec.js";

export function transformPoint(scene, p) {
  return add(scene.position, apply(worldRotation(scene.yaw_deg, scene.pitch_deg, scene.roll_deg), p), scene.scale);
}

// A box { min, max } of a loaded `scene` item in the item's own frame, in the `scene` glTF frame: a
// SPLAT's box is in 3DGS coordinates, turned by SPLAT_TO_SCENE ((x, y, z) -> (x, -y, -z)).
export function sceneItemBox(kind, box) {
  if (kind !== "splat") return box;
  return { min: [box.min[0], -box.max[1], -box.max[2]], max: [box.max[0], -box.min[1], -box.min[2]] };
}

// The box of the item a `scene` or 3D Sticker request draws, in the `scene` glTF frame, as Frame Selected and the
// content's sphere take it: an animated 3D file's content box (its meta's `animation.box`, the first clip's pose at
// time 0, docs/studio-node.md "中身の箱"; already in that frame) in place of the box of the bind pose its editor GLB
// loads with, else the loaded item's box (`loaded`, null while it loads) turned by sceneItemBox.
export function sceneContentBox(request, loaded) {
  if (request?.animation?.box) return request.animation.box;
  return loaded && request ? sceneItemBox(request.kind, loaded) : null;
}

// The 8 corners of a box { min, max }.
export function boxCorners({ min, max }) {
  const corners = [];
  for (const x of [min[0], max[0]]) for (const y of [min[1], max[1]]) for (const z of [min[2], max[2]]) corners.push([x, y, z]);
  return corners;
}

// The smallest axis-aligned sphere around points: the center of their box and the farthest point from
// it. null without points.
export function boundingSphere(points) {
  if (!points.length) return null;
  const min = [0, 1, 2].map((axis) => Math.min(...points.map((p) => p[axis])));
  const max = [0, 1, 2].map((axis) => Math.max(...points.map((p) => p[axis])));
  const center = min.map((value, axis) => (value + max[axis]) / 2);
  const radius = Math.max(...points.map((p) => Math.hypot(p[0] - center[0], p[1] - center[1], p[2] - center[2])));
  return { center, radius };
}

// The World points that bound the content at an evaluated state: the box of the shown `scene` item
// (its box in the `scene` frame, null while it loads) moved by the `scene` transform, the corners of
// the world Sticker planes, and the boxes of the 3D Stickers' items ({ box, value }: the item's box in
// the `scene` frame, and the Sticker's evaluated transform).
export function contentPoints(evaluated, sceneBox, planes, items = []) {
  const points = [];
  if (sceneBox && evaluated.scene.active) points.push(...boxCorners(sceneBox).map((p) => transformPoint(evaluated.scene, p)));
  for (const plane of planes) points.push(...planeCorners(plane));
  for (const { box, value } of items) points.push(...boxCorners(box).map((p) => transformPoint(value, p)));
  return points;
}

// The plane of a world Sticker evaluated at a frame: centered at its position, turned by its rotation,
// facing its local +Z. It is scale wide and as tall as its cropped media's aspect makes it (media sizes
// in pixels). null when the crop or the media is empty.
// A world Sticker with a `lens` (ADR 0042) is a patch of a sphere instead: `patch` (lensPatch()).
export function worldStickerPlane(value, crop, mediaWidth, mediaHeight) {
  const cropWidth = (crop.x1 - crop.x0) * mediaWidth;
  const cropHeight = (crop.y1 - crop.y0) * mediaHeight;
  if (!(cropWidth > 0 && cropHeight > 0)) return null;
  const plane = {
    position: [...value.position],
    quaternion: rotationToQuaternion(worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg)),
    rotation: worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg),
    width: value.scale,
    height: value.scale * cropHeight / cropWidth,
  };
  if (value.lens) plane.patch = lensPatch(plane, value.lens);
  return plane;
}

// The sphere patch of a world Sticker's lens { curve, hFOV_deg } (docs/render-contract.md "`world` の Sticker の板"):
// the lens's center `center` (the plane's middle `radius` behind it), the radius scale ÷ (2·g_κ(hFOV ÷ 2)), and the
// image's half extents in film units (halfX = g_κ(hFOV ÷ 2), halfY by the plane's aspect). The patch is the
// directions from the center the lens maps into the image; its middle is the plane's position.
export function lensPatch(plane, lens) {
  const halfX = lensRadius(lens.hFOV_deg * 0.5 * DEG2RAD, lens.curve);
  const radius = plane.width / (2 * halfX);
  return {
    curve: lens.curve,
    center: add(plane.position, apply(plane.rotation, [0, 0, radius])),
    radius,
    halfX,
    halfY: halfX * plane.height / plane.width,
  };
}

// The World point of a plane at (x, y), each -1 to 1 across it: on its sphere patch when it has one.
function planePoint(plane, x, y) {
  if (!plane.patch) return add(plane.position, apply(plane.rotation, [x * plane.width / 2, y * plane.height / 2, 0]));
  const { patch } = plane;
  const ray = lensFilmDirection(x * patch.halfX, y * patch.halfY, patch.curve);
  return ray && add(patch.center, apply(plane.rotation, ray.map((value) => value * patch.radius)));
}

// The World corners of a worldStickerPlane() (or a world Sticker layer of the same shape); a patch's past 180° off
// its lens's axis are left out.
export function planeCorners(plane) {
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([x, y]) => planePoint(plane, x, y)).filter(Boolean);
}

// The edge of a plane's image as World segments, `steps` per side: a lens patch's selection frame (ADR 0042), its
// image's edge on its sphere.
export function planeOutlineSegments(plane, steps = 24) {
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  const points = [];
  corners.forEach(([x0, y0], index) => {
    const [x1, y1] = corners[(index + 1) % 4];
    for (let step = 0; step < steps; step += 1) points.push(planePoint(plane, x0 + (x1 - x0) * step / steps, y0 + (y1 - y0) * step / steps));
  });
  return points.flatMap((point, index) => {
    const next = points[(index + 1) % points.length];
    return point && next ? [[point, next]] : [];
  });
}

// The sphere Frame Selected fits, like Blender's View Selected: around the selected Sticker where
// it shows in the World, else around all the content (content, null without content). selected is
// { sticker, value, plane, box }: the state v2 Sticker, its evaluated value at the playhead, its plane
// (a worldStickerPlane(), null before its media has a size), and its 3D item's box in the `scene` glTF frame
// (sceneContentBox; null while it loads). A plane is bounded by its corners and a 3D item by its box moved by the
// Sticker's transform; until either is known, a sphere as big as its scale at its position. A sky Sticker lies at
// infinity, so with one selected all the content is framed.
export function frameSphere(content, selected = null) {
  const { sticker, value, plane, box } = selected ?? {};
  if (sticker?.placement !== "world" || !value?.active) return content;
  if (plane) return boundingSphere(planeCorners(plane));
  if (box) return boundingSphere(boxCorners(box).map((p) => transformPoint(value, p)));
  return { center: [...value.position], radius: value.scale };
}
