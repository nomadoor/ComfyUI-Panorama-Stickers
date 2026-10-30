// The ground grid and the origin mark of the new UI's space view (what to draw, at which height and where it fades:
// docs/space-and-view.md "地面のグリッドと原点の印", web_src/studio/grid.js; how it is drawn: docs/threejs-spark-integration.md).
// pano_three_view.js draws it for a render's `space.ground` and imports this into its chunk, so three.js stays out
// of the bundle that loads at once.
//
// The grid is one plane on y = ground under the view, as wide as the farthest fade, whose fragment shader draws the
// 1-unit and 10-unit lines and the X and Z axes at about one pixel, each faded by its horizontal distance from the
// view and faded where the lines crowd closer than a few pixels (so they do not flicker). It does not write depth,
// so the World's objects draw over it in their own depth order. The origin mark is a ring of lines at (0, ground, 0).
import {
  BufferGeometry,
  DoubleSide,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineLoop,
  Mesh,
  PlaneGeometry,
  SRGBColorSpace,
  ShaderMaterial,
  Vector2,
  Vector3,
  Vector4,
} from "three";

const GRID_VERTEX = `
varying vec3 vWorld;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}`;

const GRID_FRAGMENT = `
uniform vec3 viewPosition;
uniform vec2 minorFade;
uniform vec2 majorFade;
uniform vec4 minorColor;
uniform vec4 majorColor;
uniform vec4 axisXColor;
uniform vec4 axisZColor;
uniform float linePx;
varying vec3 vWorld;

// How much of a line every \`step\` units covers this pixel: a line linePx render pixels wide whose edges are smoothed
// over one pixel (fwidth gives the pixel's size in grid units, docs/design.md "新しい UI の見た目" "描画のくっきりさ"), faded out where
// the lines come closer than a few pixels.
float cover(float offPx) {
  return 1.0 - smoothstep(linePx * 0.5 - 0.5, linePx * 0.5 + 0.5, offPx);
}

float lines(vec2 at, float step) {
  vec2 cell = at / step;
  vec2 width = max(fwidth(cell), vec2(1e-6));
  vec2 off = abs(fract(cell - 0.5) - 0.5) / width;
  float hit = max(cover(off.x), cover(off.y));
  return hit * (1.0 - smoothstep(0.15, 0.4, max(width.x, width.y) * linePx));
}

// The same for one line along an axis (\`across\`: the coordinate that is 0 on it), 1.5 times as wide.
float axis(float across) {
  float width = max(fwidth(across), 1e-6);
  float halfPx = linePx * 0.75;
  return 1.0 - smoothstep(halfPx - 0.5, halfPx + 0.5, abs(across) / width);
}

vec4 over(vec4 top, vec4 under) {
  float alpha = top.a + under.a * (1.0 - top.a);
  vec3 color = alpha > 0.0 ? (top.rgb * top.a + under.rgb * under.a * (1.0 - top.a)) / alpha : vec3(0.0);
  return vec4(color, alpha);
}

void main() {
  float away = length(vWorld.xz - viewPosition.xz);
  float minorKeep = 1.0 - smoothstep(minorFade.x, minorFade.y, away);
  float majorKeep = 1.0 - smoothstep(majorFade.x, majorFade.y, away);
  // Where a 10-unit line lies the 1-unit line under it is left out, so the 10-unit lines stay the fainter ones.
  float major = lines(vWorld.xz, 10.0);
  vec4 color = vec4(minorColor.rgb, minorColor.a * lines(vWorld.xz, 1.0) * minorKeep * (1.0 - major));
  color = over(vec4(majorColor.rgb, majorColor.a * major * majorKeep), color);
  color = over(vec4(axisXColor.rgb, axisXColor.a * axis(vWorld.z) * majorKeep), color);
  color = over(vec4(axisZColor.rgb, axisZColor.a * axis(vWorld.x) * majorKeep), color);
  if (color.a <= 0.002) discard;
  gl_FragColor = color;
}`;

const RING_SEGMENTS = 64;

const vec4Of = (rgba) => new Vector4(rgba[0], rgba[1], rgba[2], rgba[3]);

// The grid and the ring as one group. show(ground) places them for `ground` (web_src/studio/grid.js groundGrid():
// { y, minorFade, majorFade, originRadius, colors: { minor, major, axisX, axisZ, origin } }, colors as sRGB
// [r, g, b, a] in 0..1, and linePx: the lines' width in render pixels, 1 when missing) and returns the group to put
// in the World.
export function createGroundGrid() {
  const uniforms = {
    viewPosition: { value: new Vector3() },
    minorFade: { value: new Vector2() },
    majorFade: { value: new Vector2() },
    minorColor: { value: new Vector4() },
    majorColor: { value: new Vector4() },
    axisXColor: { value: new Vector4() },
    axisZColor: { value: new Vector4() },
    linePx: { value: 1 },
  };
  const material = new ShaderMaterial({
    vertexShader: GRID_VERTEX,
    fragmentShader: GRID_FRAGMENT,
    uniforms,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: DoubleSide,
  });
  const plane = new Mesh(new PlaneGeometry(1, 1), material);
  plane.rotation.x = -Math.PI / 2;
  plane.frustumCulled = false;
  // The plane follows the view across the ground, so it reaches the farthest fade in every direction.
  plane.onBeforeRender = (renderer, scene, camera) => {
    camera.getWorldPosition(uniforms.viewPosition.value);
    plane.position.x = uniforms.viewPosition.value.x;
    plane.position.z = uniforms.viewPosition.value.z;
    plane.updateMatrixWorld();
  };

  const ringPoints = [];
  for (let index = 0; index < RING_SEGMENTS; index += 1) {
    const angle = (index / RING_SEGMENTS) * Math.PI * 2;
    ringPoints.push(Math.cos(angle), 0, Math.sin(angle));
  }
  const ringGeometry = new BufferGeometry();
  ringGeometry.setAttribute("position", new Float32BufferAttribute(ringPoints, 3));
  const ringMaterial = new LineBasicMaterial({ transparent: true, depthWrite: false, depthTest: true });
  const ring = new LineLoop(ringGeometry, ringMaterial);
  ring.renderOrder = 1;

  const group = new Group();
  group.add(plane, ring);

  return {
    group,
    show(ground) {
      plane.position.y = ground.y;
      plane.scale.set(ground.majorFade[1] * 2, ground.majorFade[1] * 2, 1);
      uniforms.minorFade.value.set(ground.minorFade[0], ground.minorFade[1]);
      uniforms.majorFade.value.set(ground.majorFade[0], ground.majorFade[1]);
      uniforms.minorColor.value.copy(vec4Of(ground.colors.minor));
      uniforms.majorColor.value.copy(vec4Of(ground.colors.major));
      uniforms.axisXColor.value.copy(vec4Of(ground.colors.axisX));
      uniforms.axisZColor.value.copy(vec4Of(ground.colors.axisZ));
      uniforms.linePx.value = ground.linePx ?? 1;
      const [r, g, b, a] = ground.colors.origin;
      ringMaterial.color.setRGB(r, g, b, SRGBColorSpace);
      ringMaterial.opacity = a;
      ring.position.set(0, ground.y, 0);
      ring.scale.setScalar(ground.originRadius);
      return group;
    },
    dispose() {
      plane.geometry.dispose();
      material.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
    },
  };
}
