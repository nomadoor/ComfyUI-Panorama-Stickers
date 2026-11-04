// The lens pass of the three.js view (ADR 0042, pano_three_view.js createThreeView): a lens Camera's image drawn as the
// faces of a pinhole or a cube into targets of their own, each face drawn again only when what it shows changed or its
// splats were sorted again, then sampled per pixel by the lens. Part of the three.js chunk (pano_three_view.js).
import {
  Color,
  LinearFilter,
  Matrix3,
  Matrix4,
  NoBlending,
  PerspectiveCamera,
  Quaternion,
  RGBAFormat,
  Scene,
  UnsignedByteType,
  Vector2,
  Vector4,
  WebGLRenderTarget,
} from "three";
import { canvasValueTarget } from "../pano_live_erp.js";
import { setCamera, setView } from "./camera.js";
import { createQuad } from "./meshes.js";
import { LENS_FACES, LENS_FRAGMENT } from "./shaders.js";
import { sameValue } from "./values.js";

// The lens pass of one view. It draws with the view's renderer, canvas, Sky (`scene`, fillSky of `panorama`) and World
// (`world`, buildWorld) from the view's cameras, places a draw as the view does (`place`, the owners' sizes in
// `owners`), and reads the World's content revision (contentRevision()) and the view's plainValue. sortedAgain(owner)
// marks the faces a Spark renderer that sorted again draws, and returns the owner whose view draws again.
export function createLensPass({
  renderer,
  canvas,
  quadGeometry,
  sparkViews,
  owners,
  place,
  layerTextures,
  fillSky,
  panorama,
  buildWorld,
  camera,
  scene,
  worldCamera,
  world,
  settleUnpack,
  contentRevision,
  plainValue,
}) {
  // The lens images (ADR 0042): per owner, the faces its lens renders draw into, by index (each owner keeps its own,
  // so one owner's faces never overwrite another's kept ones), and the owners each face's Spark renderer draws for
  // (one per face, so each sorts for its own camera).
  const lensTargets = new Map();
  const lensFaceOwners = new Map();
  const lensFaceBase = new WeakMap();
  const lensScene = new Scene();
  const lensQuad = createQuad(quadGeometry, LENS_FRAGMENT, {
    ...Object.fromEntries(Array.from({ length: LENS_FACES }, (_, index) => [`face${index}`, { value: null }])),
    cameraTurn: { value: new Matrix3() },
    faceTurn: { value: Array.from({ length: LENS_FACES }, () => new Matrix3()) },
    faceTan: { value: Array.from({ length: LENS_FACES }, () => new Vector2(1, 1)) },
    faceCount: { value: 0 },
    curve: { value: 1 },
    focal: { value: 1 },
    center: { value: new Vector2() },
    window: { value: new Vector4() },
    windowHeight: { value: 1 },
    background: { value: new Vector4(0, 0, 0, 1) },
  }, NoBlending);
  lensScene.add(lensQuad);
  const lensCamera = new PerspectiveCamera();
  const faceRotation = new Matrix4();

  // A face's target: it holds the canvas's sRGB values and blends them as the canvas does (canvasValueTarget), which
  // the pass puts on the canvas as they are.
  function lensTarget(owner, index, width, height) {
    let targets = lensTargets.get(owner);
    if (!targets) lensTargets.set(owner, targets = []);
    let target = targets[index];
    if (!target) {
      target = canvasValueTarget(new WebGLRenderTarget(width, height, { format: RGBAFormat, type: UnsignedByteType, depthBuffer: true, minFilter: LinearFilter, magFilter: LinearFilter, generateMipmaps: false }));
      targets[index] = target;
    } else if (target.width !== width || target.height !== height) {
      target.setSize(width, height);
    }
    return target;
  }

  // The owners of base's faces, made the first time; a Spark renderer of a face tells base's view to draw again.
  function lensFaceOwner(base, index) {
    let faces = lensFaceOwners.get(base);
    if (!faces) lensFaceOwners.set(base, faces = []);
    if (!faces[index]) {
      faces[index] = { lensFace: index };
      lensFaceBase.set(faces[index], { base, index });
    }
    return faces[index];
  }

  // base's lens images let go: its faces' targets and what they held.
  function releaseLensImages(base) {
    lensCaches.delete(base);
    lensTargets.get(base)?.forEach((target) => target?.dispose());
    lensTargets.delete(base);
  }

  // base's lens images and its cube faces' Spark renderers let go, when base stops drawing or hides its SPLATs. A
  // face's renderer stays while base draws otherwise (without a lens, or through the pinhole): a new one has no sort
  // until its worker returns one, and its face would show without its splats until then.
  function releaseLensFaces(base) {
    releaseLensImages(base);
    lensFaceOwners.get(base)?.forEach((owner) => owner && sparkViews.release(owner));
    lensFaceOwners.delete(base);
  }

  // Per owner, the faces drawn ({ key, drawn: face indexes drawn under key, dirty: faces whose Spark renderer sorted
  // again }): a face is drawn again only when what it shows changed (lensCacheKey) or its splats were sorted again.
  const lensCaches = new Map();

  // What a lens render's faces show, but for the Camera's turn: the faces' places and sizes (a pinhole's turn is the
  // Camera's), the Camera's position, the clear color, the Sky (background and layers with their images'
  // revisions, a VIDEO's time) and the World (its content revision and the inputs drawn).
  function lensCacheKey(input, faces) {
    return plainValue({
      faces: faces.map((face) => [face.quaternion, face.tanX, face.tanY, face.width, face.height]),
      position: input.camera.position, near: input.camera.near, far: input.camera.far,
      clearColor: input.clearColor ?? null,
      background: input.background ?? null,
      layers: input.layers,
      space: input.space ?? null,
      content: contentRevision(),
    });
  }

  // A lens Camera's image (input.lens: { curve, focal, centerX, centerY, background, faces }, the faces of
  // pano_lens.js lensRenderPlan; focal and the center in pixels of the whole view): each seen face drawn as a pinhole
  // turned by its quaternion (from the Camera for the pinhole, from the World's axes for the cube) at the Camera's
  // position, then the pass samples them per pixel of the part on the canvas through the Camera's turn. A face drawn
  // before is used again while lensCacheKey stays and its splats were not sorted again, so a turn of the Camera alone
  // draws only the pass.
  function drawLens(input, space) {
    let entry = owners.get(input.owner);
    if (!entry) owners.set(input.owner, entry = {});
    const at = place(input, entry);
    if (!at) return null;
    const { lens } = input;
    const base = new Quaternion(input.camera.quaternion.x, input.camera.quaternion.y, input.camera.quaternion.z, input.camera.quaternion.w);
    // Each face's turn in the World.
    const faces = lens.faces.map((face) => {
      const q = new Quaternion(face.quaternion.x, face.quaternion.y, face.quaternion.z, face.quaternion.w);
      const turn = face.world ? q : base.clone().multiply(q);
      return { ...face, quaternion: { x: turn.x, y: turn.y, z: turn.z, w: turn.w }, turn };
    });
    let cache = lensCaches.get(input.owner);
    if (!cache) lensCaches.set(input.owner, cache = { key: null, drawn: new Set(), dirty: new Set(), shared: false });
    // The pinhole looks where the Camera looks, as a draw without a lens does: it draws with the view's own Spark
    // renderer, whose sort holds for it, so going from no lens to a lens (κ leaving 1) shows the splats at once.
    cache.shared = !faces[0].world;
    const owned = layerTextures.draw(input.owner);
    const uniforms = lensQuad.material.uniforms;
    let count = 0;
    try {
      fillSky(owned, panorama, input);
      // The World is built once for what picks and the content revision read; each drawn face builds it for its
      // own Spark renderer.
      if (space) buildWorld(owned, space, lensSplatOwner(input.owner, faces[0], 0));
      const key = lensCacheKey(input, faces);
      if (!sameValue(key, cache.key)) {
        cache.key = key;
        cache.drawn.clear();
      }
      faces.forEach((face, index) => {
        if (!face.seen) return;
        if (!cache.drawn.has(index) || cache.dirty.has(index)) {
          drawLensFace(owned, input, space, face, index);
          cache.drawn.add(index);
          cache.dirty.delete(index);
        }
        uniforms[`face${count}`].value = lensTargets.get(input.owner)[index].texture;
        faceRotation.makeRotationFromQuaternion(face.turn.clone().invert());
        uniforms.faceTurn.value[count].setFromMatrix4(faceRotation);
        uniforms.faceTan.value[count].set(face.tanX, face.tanY);
        count += 1;
      });
    } finally {
      owned.end();
      renderer.setRenderTarget(null);
    }
    uniforms.faceCount.value = count;
    uniforms.cameraTurn.value.setFromMatrix4(faceRotation.makeRotationFromQuaternion(base));
    uniforms.curve.value = lens.curve;
    uniforms.focal.value = lens.focal;
    uniforms.center.value.set(lens.centerX, lens.centerY);
    const bottom = canvas.height - at.y - at.height;
    uniforms.window.value.set(at.x, bottom, at.offsetX, at.offsetY);
    uniforms.windowHeight.value = at.height;
    const color = Number(lens.background ?? 0);
    uniforms.background.value.set(((color >> 16) & 255) / 255, ((color >> 8) & 255) / 255, (color & 255) / 255, 1);
    renderer.setViewport(at.x, bottom, at.width, at.height);
    renderer.setScissor(at.x, bottom, at.width, at.height);
    renderer.render(lensScene, lensCamera);
    settleUnpack();
    return { canvas, x: at.x, y: at.y, width: at.width, height: at.height };
  }

  // One face of a lens render into its target: the Sky, then the World from the Camera's position with the face's
  // own Spark renderer.
  function drawLensFace(owned, input, space, face, index) {
    const setup = {
      ...input.camera,
      quaternion: face.quaternion,
      fovY_deg: 2 * Math.atan(face.tanY) * 180 / Math.PI,
      aspect: face.tanX / face.tanY,
    };
    renderer.setRenderTarget(lensTarget(input.owner, index, face.width, face.height));
    renderer.setViewport(0, 0, face.width, face.height);
    renderer.setScissor(0, 0, face.width, face.height);
    if (input.clearColor != null) renderer.setClearColor(new Color(input.clearColor), 1);
    renderer.clear(true, true, false);
    setView(camera, setup);
    renderer.autoClear = false;
    renderer.render(scene, camera);
    if (space) {
      const faceOwner = lensSplatOwner(input.owner, face, index);
      buildWorld(owned, space, faceOwner);
      setCamera(worldCamera, setup);
      sparkViews.aim(worldCamera, faceOwner);
      renderer.clearDepth();
      renderer.render(world, worldCamera);
    }
    renderer.autoClear = true;
    if (input.clearColor != null) renderer.setClearColor(0x000000, 0);
  }

  // The owner whose Spark renderer draws a lens face's splats: the view's own for the pinhole, the face's for the cube.
  function lensSplatOwner(base, face, index) {
    return face.world ? lensFaceOwner(base, index) : base;
  }

  return {
    drawLens,
    releaseLensImages,
    releaseLensFaces,
    // A Spark renderer of owner sorted again: a lens face's renderer draws for the view it is a face of, and its face
    // is drawn again. The pinhole face is drawn with its view's own renderer (drawLens), so that renderer's sort draws
    // it again too.
    sortedAgain(owner) {
      if (!lensFaceBase.has(owner)) {
        const cache = lensCaches.get(owner);
        if (cache?.shared) cache.dirty.add(0);
        return owner;
      }
      const { base, index } = lensFaceBase.get(owner);
      lensCaches.get(base)?.dirty.add(index);
      return base;
    },
    dispose() {
      lensTargets.forEach((targets) => targets.forEach((target) => target.dispose()));
      lensQuad.material.dispose();
    },
  };
}
