// The Sky of the three.js view (pano_three_view.js createThreeView): the dome, plane and quad geometries, the Sky's
// meshes of the panorama and the Unwrap projections, and filling the Sky's scene with an input's background, sky grid
// and layers. Part of the three.js chunk (pano_three_view.js).
import {
  BackSide,
  ClampToEdgeWrapping,
  CustomBlending,
  Matrix3,
  Matrix4,
  Mesh,
  NoBlending,
  PlaneGeometry,
  Quaternion,
  RepeatWrapping,
  SphereGeometry,
  Vector4,
} from "three";
import { createSkyGrid } from "../pano_sky_grid.js";
import { createErpMesh, createMaterial, createQuad, pooled } from "./meshes.js";
import {
  ERP_VERTEX,
  LENS_STICKER_FRAGMENT,
  STICKER_FRAGMENT,
  STICKER_VERTEX,
  UNWRAP_ERP_FRAGMENT,
  UNWRAP_STICKER_FRAGMENT,
} from "./shaders.js";

const DOME_RADIUS = 100;
const STICKER_DISTANCE = 50;

// A sky Sticker is its gnomonic image plane at STICKER_DISTANCE along the Sticker's forward axis;
// seen from the camera at the center it covers the same rays as the previous per-pixel shader.
export function placeSticker(mesh, layer) {
  const { rect, quaternion } = layer;
  mesh.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  mesh.position.set((rect.x0 + rect.x1) * 0.5, (rect.y0 + rect.y1) * 0.5, -1)
    .multiplyScalar(STICKER_DISTANCE)
    .applyQuaternion(mesh.quaternion);
  mesh.scale.set((rect.x1 - rect.x0) * STICKER_DISTANCE, (rect.y1 - rect.y0) * STICKER_DISTANCE, 1);
}

// The Unwrap sticker shader's uniforms: World to the Sticker's frame, and its rect as (x0, y0, x1, y1).
export function unwrapStickerUniforms(layer) {
  const { quaternion, rect } = layer;
  const rotation = new Matrix4().makeRotationFromQuaternion(new Quaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w));
  return {
    toSticker: new Matrix3().setFromMatrix4(rotation).transpose(),
    rect: new Vector4(rect.x0, rect.y0, rect.x1, rect.y1),
    curve: layer.curve ?? 1,
  };
}

// The Sky's geometries and meshes, drawn into `scene` (the view's Sky scene). disposeSkyGrid() frees the sky grid; the
// view frees the meshes and geometries itself, in its own order.
export function createSkyMeshes({ scene }) {
  const domeGeometry = new SphereGeometry(DOME_RADIUS, 64, 32);
  const planeGeometry = new PlaneGeometry(1, 1);
  const quadGeometry = new PlaneGeometry(2, 2);
  // The background replaces what is below it like the previous renderer; the other layers blend.
  // Each projection keeps its meshes: the background, and pools of ERP and Sticker meshes.
  const panorama = {
    background: createErpMesh(domeGeometry, NoBlending),
    erp: [],
    sticker: [],
    createErp: () => createErpMesh(domeGeometry, CustomBlending),
    createSticker: () => new Mesh(planeGeometry, createMaterial(STICKER_VERTEX, STICKER_FRAGMENT, {})),
    // A sky Sticker of a lens curve other than 1, on the dome (ADR 0042).
    lensSticker: [],
    createLensSticker: () => {
      const material = createMaterial(ERP_VERTEX, LENS_STICKER_FRAGMENT, { toSticker: { value: null }, rect: { value: null }, curve: { value: 1 } });
      material.side = BackSide;
      return new Mesh(domeGeometry, material);
    },
    placeLensSticker(mesh, layer) {
      Object.entries(unwrapStickerUniforms(layer)).forEach(([name, value]) => { mesh.material.uniforms[name].value = value; });
    },
    // An ERP may come turned (Panorama Studio's run output, shot by a Camera): its dome takes the rotation.
    placeErp(mesh, halfCoverage, quaternion) {
      mesh.material.uniforms.halfCoverage.value = halfCoverage;
      mesh.quaternion.set(quaternion?.x ?? 0, quaternion?.y ?? 0, quaternion?.z ?? 0, quaternion?.w ?? 1);
    },
    placeSticker,
  };
  // The Unwrap view lays a 180 ERP over the whole width like the previous renderer.
  const unwrap = {
    background: createQuad(quadGeometry, UNWRAP_ERP_FRAGMENT, {}, NoBlending),
    erp: [],
    sticker: [],
    createErp: () => createQuad(quadGeometry, UNWRAP_ERP_FRAGMENT, {}),
    createSticker: () => createQuad(quadGeometry, UNWRAP_STICKER_FRAGMENT, { toSticker: { value: null }, rect: { value: null }, curve: { value: 1 } }),
    placeErp() {},
    placeSticker(mesh, layer) {
      Object.entries(unwrapStickerUniforms(layer)).forEach(([name, value]) => { mesh.material.uniforms[name].value = value; });
    },
  };
  // The new UI's sky grid (pano_sky_grid.js), made the first time a render's space has `sky`.
  let skyGrid = null;

  function addErp(owned, projection, mesh, layer, halfCoverage) {
    mesh.material.uniforms.map.value = owned.texture(layer, halfCoverage ? ClampToEdgeWrapping : RepeatWrapping, false);
    mesh.material.uniforms.opacity.value = layer.opacity;
    projection.placeErp(mesh, halfCoverage, layer.quaternion);
    scene.add(mesh);
    return mesh;
  }

  function addSticker(owned, projection, mesh, layer) {
    mesh.material.uniforms.map.value = owned.texture(layer, ClampToEdgeWrapping, true);
    mesh.material.uniforms.opacity.value = layer.opacity;
    projection.placeSticker(mesh, layer);
    scene.add(mesh);
    return mesh;
  }

  // The Sky of input (its background and layers) in `scene`.
  function fillSky(owned, projection, input) {
    scene.clear();
    const background = input.background;
    if (background && owned.drawable({ id: "background", ...background })) {
      addErp(owned, projection, projection.background, { id: "background", opacity: 1, ...background }, background.coverage === 180);
    }
    // The new UI's sky grid (space.sky, grid.js skyGrid), over the background and under the layers.
    const sky = projection === panorama ? input.space?.sky : null;
    if (sky) scene.add((skyGrid ||= createSkyGrid(domeGeometry)).show(sky));
    let erpIndex = 0;
    let stickerIndex = 0;
    let lensIndex = 0;
    input.layers.forEach((layer, index) => {
      if (!owned.drawable(layer)) return;
      let mesh;
      if (layer.kind === "erp") mesh = addErp(owned, projection, pooled(projection.erp, erpIndex++, projection.createErp), layer, false);
      else if (projection.lensSticker && layer.curve !== undefined && layer.curve !== 1) {
        mesh = pooled(projection.lensSticker, lensIndex++, projection.createLensSticker);
        mesh.material.uniforms.map.value = owned.texture(layer, ClampToEdgeWrapping, true);
        mesh.material.uniforms.opacity.value = layer.opacity;
        projection.placeLensSticker(mesh, layer);
        scene.add(mesh);
      } else mesh = addSticker(owned, projection, pooled(projection.sticker, stickerIndex++, projection.createSticker), layer);
      mesh.renderOrder = index + 1;
    });
  }

  return {
    domeGeometry,
    planeGeometry,
    quadGeometry,
    panorama,
    unwrap,
    fillSky,
    disposeSkyGrid() {
      skyGrid?.dispose();
    },
  };
}
