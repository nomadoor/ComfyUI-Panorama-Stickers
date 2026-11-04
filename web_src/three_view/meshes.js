// The materials and meshes the three.js view (pano_three_view.js createThreeView) makes for the Sky, the world
// Sticker planes, the lens pass and the lines, and its pools of them. Part of the three.js chunk.
import {
  BackSide,
  BufferGeometry,
  CustomBlending,
  Float32BufferAttribute,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  OneFactor,
  OneMinusSrcAlphaFactor,
  ShaderMaterial,
} from "three";
import { ERP_FRAGMENT, ERP_VERTEX, UNWRAP_VERTEX } from "./shaders.js";

export function createMaterial(vertexShader, fragmentShader, uniforms, blending = CustomBlending) {
  return new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: { map: { value: null }, opacity: { value: 1 }, ...uniforms },
    depthTest: false,
    depthWrite: false,
    transparent: true,
    blending,
    blendSrc: OneFactor,
    blendDst: OneMinusSrcAlphaFactor,
    blendSrcAlpha: OneFactor,
    blendDstAlpha: OneMinusSrcAlphaFactor,
  });
}

export function createErpMesh(geometry, blending) {
  const material = createMaterial(ERP_VERTEX, ERP_FRAGMENT, { halfCoverage: { value: false } }, blending);
  material.side = BackSide;
  return new Mesh(geometry, material);
}

export function createQuad(geometry, fragmentShader, uniforms, blending = CustomBlending) {
  const mesh = new Mesh(geometry, createMaterial(UNWRAP_VERTEX, fragmentShader, uniforms, blending));
  mesh.frustumCulled = false;
  return mesh;
}

// Line segments [[a, b], ...] in one color.
export function createLines({ segments, color }) {
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(segments.flat(2), 3));
  return new LineSegments(geometry, new LineBasicMaterial({ color }));
}

// The mesh `index` of a pool, made by create() the first time.
export function pooled(meshes, index, create) {
  if (!meshes[index]) meshes[index] = create();
  return meshes[index];
}
