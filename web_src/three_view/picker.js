// The GPU pick of the three.js view (pano_three_view.js createThreeView): the World content under a pixel of the last
// space render, drawn with pick materials into a 1 x 1 target and read back, and the SPLATs hit on their boxes.
// Part of the three.js chunk (pano_three_view.js).
import {
  DoubleSide,
  FloatType,
  Matrix3,
  Matrix4,
  NearestFilter,
  NoBlending,
  PerspectiveCamera,
  RGBAFormat,
  ShaderMaterial,
  UnsignedByteType,
  Vector3,
  WebGLRenderTarget,
} from "three";
import { PICK_FRAGMENT, PICK_VERTEX, nearestHit, pickCacheKey, pickRay, pickWindow, pointAt, rayBoxDepth, readPickBytes, readPickFloat } from "../pano_pick.js";
import { createDepthGridPickMaterial } from "../pano_depth_grid.js";
import { setCamera } from "./camera.js";
import { LENS_PATCH_PICK_FRAGMENT, LENS_PATCH_PICK_VERTEX } from "./shaders.js";

// The pick of the World content (pick() below) draws the pixel under the pointer with only the pickable
// objects of `world`: entries are { object, stickerId } for its children that are hit on their
// triangles, and entry i draws its meshes in materialOf(i). The other children of `world` (the guides,
// the lines, the gizmo, Spark's renderer) and the lines or points inside an entry are hidden meanwhile.
// Runs draw() and puts every object and material back after it, also when it throws (a lost WebGL
// context, a target the GPU will not draw to), so the next render draws the World as it is.
export function pickPass(world, entries, materialOf, draw) {
  const roots = new Set(entries.map((entry) => entry.object));
  const hidden = world.children.filter((child) => child.visible && !roots.has(child));
  const swapped = [];
  entries.forEach((entry, index) => {
    entry.object.traverse((object) => {
      if (object.isMesh) {
        swapped.push([object, object.material]);
        // A mesh may have a pick material of its own (a depth grid, which makes its positions in its shader).
        object.material = materialOf(index, object);
      } else if ((object.isLine || object.isPoints || object.isSprite) && object.visible) {
        hidden.push(object);
      }
    });
  });
  hidden.forEach((object) => { object.visible = false; });
  try {
    return draw();
  } finally {
    hidden.forEach((object) => { object.visible = true; });
    swapped.forEach(([object, material]) => { object.material = material; });
  }
}

// The picks of one view's `world`, drawn with its renderer. content is what the view's last space render drew
// ({ pickable, pickBoxes, revision }, read when a pick runs). dispose() frees the pick materials and the target.
export function createPicker({ renderer, world, content }) {
  // The last pick ({ key, hit }, pickCacheKey()) and what it draws with: a 1 x 1 target (a float one
  // where the GPU can draw to it), its camera and the pick materials by entry.
  let lastPick = { key: null, hit: null };
  let pickTarget = null;
  // After a float target failed picks use RGBA8; after that failed too only the SPLAT boxes are picked.
  let pickFloat = true;
  let pickFailed = false;
  const pickCamera = new PerspectiveCamera();
  const pickMaterials = [];

  // The pick pass's mode and far, which the depth grids' pick materials share.
  const pickShared = { pickMode: { value: 0 }, far: { value: 1 } };

  // The pick material of pickable entry `index` for one of its meshes: one per entry, or a depth grid's own (its
  // uniforms are its item's), kept on the mesh and freed with it.
  function pickMaterial(index, object) {
    // A world Sticker's lens patch is hit where it shows: its own shape, with its uniforms.
    if (object?.userData.lensPatch) {
      object.userData.pickMaterial ||= new ShaderMaterial({
        vertexShader: LENS_PATCH_PICK_VERTEX,
        fragmentShader: LENS_PATCH_PICK_FRAGMENT,
        uniforms: { pickId: { value: 0 }, ...pickShared, curve: object.material.uniforms.curve, patchHalf: object.material.uniforms.patchHalf },
        side: DoubleSide,
        blending: NoBlending,
      });
      object.userData.pickMaterial.uniforms.pickId.value = index + 1;
      return object.userData.pickMaterial;
    }
    if (object?.userData.depthGrid) {
      object.userData.pickMaterial ||= createDepthGridPickMaterial(object.material, pickShared);
      object.userData.pickMaterial.uniforms.pickId.value = index + 1;
      return object.userData.pickMaterial;
    }
    if (!pickMaterials[index]) {
      pickMaterials[index] = new ShaderMaterial({
        vertexShader: PICK_VERTEX,
        fragmentShader: PICK_FRAGMENT,
        uniforms: { pickId: { value: index + 1 }, pickMode: { value: 0 }, far: { value: 1 } },
        side: DoubleSide,
        blending: NoBlending,
      });
    }
    return pickMaterials[index];
  }

  // The 1 x 1 target picks draw to: RGBA float where the GPU can draw to it, else RGBA8.
  function ensurePickTarget() {
    if (pickTarget) return pickTarget;
    const float = pickFloat && renderer.extensions.has("EXT_color_buffer_float");
    pickTarget = new WebGLRenderTarget(1, 1, {
      type: float ? FloatType : UnsignedByteType,
      format: RGBAFormat,
      minFilter: NearestFilter,
      magFilter: NearestFilter,
      generateMipmaps: false,
      depthBuffer: true,
    });
    return pickTarget;
  }

  // Draws the pixel at (x, y) with the pickable meshes and reads it back: { id (1 + pickable index),
  // depth }, null over nothing, or false when drawing failed (the next pick tries RGBA8, then gives up).
  function drawPick(camera, x, y, width, height) {
    if (!content.pickable.length || pickFailed) return null;
    const target = ensurePickTarget();
    const float = target.texture.type === FloatType;
    setCamera(pickCamera, camera);
    const offset = pickWindow(x, y, width, height);
    pickCamera.setViewOffset(offset.fullWidth, offset.fullHeight, offset.x, offset.y, offset.width, offset.height);
    const pixel = float ? new Float32Array(4) : new Uint8Array(4);
    const read = (mode) => {
      pickMaterials.forEach((material) => {
        material.uniforms.pickMode.value = mode;
        material.uniforms.far.value = camera.far;
      });
      pickShared.pickMode.value = mode;
      pickShared.far.value = camera.far;
      renderer.setRenderTarget(target);
      try {
        renderer.render(world, pickCamera);
      } finally {
        renderer.setRenderTarget(null);
      }
      renderer.readRenderTargetPixels(target, 0, 0, 1, 1, pixel);
      return [...pixel];
    };
    try {
      return pickPass(world, content.pickable, pickMaterial, () => (float ? readPickFloat(read(0)) : readPickBytes(read(1), read(2), camera.far)));
    } catch (error) {
      console.error("[PanoramaStickers] Picking on the GPU failed", error);
      target.dispose();
      pickTarget = null;
      if (float) pickFloat = false;
      else pickFailed = true;
      return false;
    }
  }

  // The nearest content of the last space render at (x, y) of a width x height view from camera (a
  // spaceCamera()): { point (World [x, y, z]), stickerId (the Sticker it is, or null for the `scene`
  // content), box (whether the point is on a SPLAT's box) } or null over empty space. Meshes and planes
  // hit on their triangles, from both sides; a SPLAT on its box. The same pixel of the same view over the
  // same content gives the pick before.
  function pickAt(camera, x, y, width, height) {
    const key = pickCacheKey(camera, x, y, width, height, content.revision);
    if (lastPick.key === key) return lastPick.hit;
    world.updateMatrixWorld();
    const ray = pickRay(camera, x, y, width, height);
    const hits = [];
    const drawn = drawPick(camera, x, y, width, height);
    const entry = drawn && content.pickable[drawn.id - 1];
    if (entry) hits.push({ depth: drawn.depth, stickerId: entry.stickerId, plane: entry.plane });
    for (const { object, box, stickerId } of content.pickBoxes) {
      if (!box) continue;
      // The ray in the SPLAT's own frame keeps its parameter, which is the depth along the view axis.
      const inverse = new Matrix4().copy(object.matrixWorld).invert();
      const origin = new Vector3(...ray.origin).applyMatrix4(inverse).toArray();
      const direction = new Vector3(...ray.direction).applyMatrix3(new Matrix3().setFromMatrix4(inverse)).toArray();
      const depth = rayBoxDepth(origin, direction, box);
      if (depth !== null) hits.push({ depth, stickerId, box: true });
    }
    // The point is the nearest hit. A SPLAT's box is larger than what shows of it, so a world Sticker plane
    // hit takes the Sticker before a nearer box.
    const nearest = nearestHit(hits, camera);
    const hit = nearest && {
      point: pointAt(ray, nearest.depth),
      stickerId: nearestHit(hits, camera, (each) => each.plane).stickerId,
      box: nearest.box === true,
    };
    // A failed draw is not kept, so the next pick draws again.
    if (drawn !== false) lastPick = { key, hit };
    return hit;
  }

  // The World point of the content under (x, y) in the last space render (pickAt), or null.
  function pick(camera, x, y, width, height) {
    return pickAt(camera, x, y, width, height)?.point ?? null;
  }

  // The same on a surface only: null where the nearest content is a SPLAT's box, whose point (inside the
  // box, where the ray leaves it) is not where the splats show, so an orbit or a wheel step there works
  // on the view's pivot instead.
  function pickSurface(camera, x, y, width, height) {
    const hit = pickAt(camera, x, y, width, height);
    return hit && !hit.box ? hit.point : null;
  }

  // The id of the world or 3D Sticker under (x, y) in the last space render (pickAt), or null over the
  // `scene` content or empty space.
  function pickSticker(camera, x, y, width, height) {
    return pickAt(camera, x, y, width, height)?.stickerId ?? null;
  }

  return {
    pick,
    pickSurface,
    pickSticker,
    dispose() {
      pickMaterials.forEach((material) => material.dispose());
      pickTarget?.dispose();
    },
  };
}
