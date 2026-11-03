// The sky grid of the new UI's space view (docs/space-and-view.md "空のグリッド", ADR 0058): a graticule on the Sky's sphere
// at infinity (what to draw: web_src/studio/grid.js skyGrid; how it is drawn: docs/threejs-spark-integration.md "新しい UI
// のステージの描画"). pano_three_view.js puts it in the Sky's scene (fillSky) over the background and under the Sky's
// layers, so the World draws over it and it turns with the view only.
//
// One dome (the background's sphere, BackSide) whose fragment shader draws, from the direction, the meridians and
// parallels every step (fading toward the poles), the two axis meridians in the ground axes' colors (fading as they
// come down to the horizon), the ground's axes beyond the ground grid's plane out to the horizon, the horizon, and a
// dot at the pole that shows only when the view looks near it, all on the half of the sky on the eye's side of the
// ground (the other half is the ground's) but the horizon, each line about px render pixels wide with a one-pixel
// feather (the pixel's angle from fwidth of the direction, as the ground grid's lines). Lines crowding closer than a
// few pixels fade out so they do not flicker.
import { BackSide, Mesh, OneFactor, OneMinusSrcAlphaFactor, CustomBlending, ShaderMaterial, Vector2, Vector4 } from "three";

const SKY_GRID_VERTEX = `
varying vec3 vDirection;
varying vec3 vForward;
void main() {
  vDirection = position;
  // The view's direction in the dome's frame (the inverse turn of the model view; a uniform scale does not matter).
  vForward = normalize(transpose(mat3(modelViewMatrix)) * vec3(0.0, 0.0, -1.0));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const SKY_GRID_FRAGMENT = `
uniform float stepRad;
uniform float linePx;
uniform vec4 lineColor;
uniform vec2 lineFade;
uniform float axisPx;
uniform vec4 axisX;
uniform vec4 axisZ;
uniform float horizonPx;
uniform vec4 horizonColor;
uniform float poleDot;
uniform vec4 poleColor;
uniform vec2 poleNear;
uniform vec2 axisRise;
uniform float groundOn;
uniform float side;
uniform vec2 eyeXZ;
uniform float groundBelow;
uniform float groundReach;
uniform float groundAxisPx;
uniform vec4 groundAxisX;
uniform vec4 groundAxisZ;
varying vec3 vDirection;
varying vec3 vForward;
const float HALF_PI = 1.5707963267948966;

// How much of a line widthPx wide covers this pixel, offPx pixels from its middle, its edges smoothed over a pixel.
float cover(float offPx, float widthPx) {
  return 1.0 - smoothstep(widthPx * 0.5 - 0.5, widthPx * 0.5 + 0.5, offPx);
}

// Lines spacingPx apart fade out as they come closer than a few pixels.
float uncrowded(float spacingPx) {
  return smoothstep(4.0, 10.0, spacingPx);
}

vec4 over(vec4 top, vec4 under) {
  float alpha = top.a + under.a * (1.0 - top.a);
  vec3 color = alpha > 0.0 ? (top.rgb * top.a + under.rgb * under.a * (1.0 - top.a)) / alpha : vec3(0.0);
  return vec4(color, alpha);
}

// The angle across to the great circle through the poles at longitude at (radians), at latitude lat and longitude lon.
float acrossMeridian(float lat, float lon, float at) {
  return asin(min(1.0, cos(lat) * abs(sin(lon - at))));
}

void main() {
  vec3 dir = normalize(vDirection);
  // The angle of one render pixel here, in radians.
  float px = max(length(fwidth(dir)) * 0.7071, 1e-6);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  float lon = atan(dir.x, -dir.z);
  // The elevation on the shown half (side 1: the eye above the ground, the upper half; -1: below it, the lower half).
  float up = lat * side;
  float shown = step(0.0, up);
  float toPole = 1.0 - smoothstep(lineFade.x, lineFade.y, abs(lat));

  // Parallels (not the horizon, not the poles).
  float k = floor(lat / stepRad + 0.5);
  float parallelAt = k * stepRad;
  float parallel = (abs(k) < 0.5 || abs(parallelAt) > HALF_PI - 1e-3) ? 0.0 : cover(abs(lat - parallelAt) / px, linePx);
  parallel *= uncrowded(stepRad / px);

  // Meridians: the angle across to the nearest one along the sphere.
  float m = floor(lon / stepRad + 0.5);
  float meridian = cover(acrossMeridian(lat, lon, m * stepRad) / px, linePx);
  meridian *= uncrowded(stepRad * cos(lat) / px);

  // The axis meridians: X through longitude +-90 degrees, Z through 0 and 180 (the meridian at lon covers both sides).
  float rise = smoothstep(axisRise.x, axisRise.y, up);
  float onX = cover(acrossMeridian(lat, lon, HALF_PI) / px, axisPx) * rise;
  float onZ = cover(acrossMeridian(lat, lon, 0.0) / px, axisPx) * rise;

  // The ground's axes beyond the ground grid's plane (a square of half side groundReach about the view), out to the
  // horizon, on the ground's half of the sphere (where the ray meets the ground y = ground, groundBelow from the eye).
  // Each axis line seen from the eye lies on a great circle (the plane through the eye and the line); its width is
  // the angle across to that circle, so it stays one line up to the horizon.
  float groundX = 0.0;
  float groundZ = 0.0;
  if (groundOn > 0.5 && dir.y * groundBelow > 1e-7) {
    vec2 off = dir.xz * (groundBelow / dir.y);
    float beyond = step(groundReach, max(abs(off.x), abs(off.y)));
    // The X axis (z = 0) runs along (1, 0, 0) through (0, groundBelow, -eyeZ) from the eye; the Z axis (x = 0) along
    // (0, 0, 1) through (-eyeX, groundBelow, 0).
    vec3 nX = normalize(vec3(0.0, eyeXZ.y, groundBelow));
    vec3 nZ = normalize(vec3(-groundBelow, -eyeXZ.x, 0.0));
    groundX = beyond * cover(asin(min(1.0, abs(dot(dir, nX)))) / px, groundAxisPx);
    groundZ = beyond * cover(asin(min(1.0, abs(dot(dir, nZ)))) / px, groundAxisPx);
  }

  float horizon = cover(abs(lat) / px, horizonPx);

  // The shown half's pole dot, only as the view comes near it.
  float near = smoothstep(cos(poleNear.x), cos(poleNear.y), vForward.y * side);
  float spot = (1.0 - smoothstep(-0.5, 0.5, (HALF_PI - up - poleDot) / px)) * near;

  vec4 color = vec4(lineColor.rgb, lineColor.a * max(parallel, meridian) * toPole * shown);
  color = over(vec4(axisZ.rgb, axisZ.a * onZ * shown), color);
  color = over(vec4(axisX.rgb, axisX.a * onX * shown), color);
  color = over(vec4(groundAxisZ.rgb, groundAxisZ.a * groundZ), color);
  color = over(vec4(groundAxisX.rgb, groundAxisX.a * groundX), color);
  color = over(vec4(horizonColor.rgb, horizonColor.a * horizon), color);
  color = over(vec4(poleColor.rgb, poleColor.a * spot), color);
  if (color.a <= 0.002) discard;
  // sRGB values, premultiplied as the Sky's layers blend.
  gl_FragColor = vec4(color.rgb * color.a, color.a);
}`;

const vec4Of = (rgba) => new Vector4(rgba[0], rgba[1], rgba[2], rgba[3]);
const RAD = Math.PI / 180;

// The sky grid on `geometry` (the background's dome). show(sky) sets it for `sky` (grid.js skyGrid() with `scale`: the
// render pixels per device pixel) and returns the mesh to put in the Sky's scene.
export function createSkyGrid(geometry) {
  const uniforms = {
    stepRad: { value: 30 * RAD },
    linePx: { value: 1 },
    lineColor: { value: new Vector4() },
    lineFade: { value: new Vector2() },
    axisPx: { value: 1.5 },
    axisX: { value: new Vector4() },
    axisZ: { value: new Vector4() },
    horizonPx: { value: 1.5 },
    horizonColor: { value: new Vector4() },
    poleDot: { value: 0.5 * RAD },
    poleColor: { value: new Vector4() },
    poleNear: { value: new Vector2() },
    axisRise: { value: new Vector2() },
    groundOn: { value: 0 },
    side: { value: 1 },
    eyeXZ: { value: new Vector2() },
    groundBelow: { value: -1 },
    groundReach: { value: 1 },
    groundAxisPx: { value: 1.5 },
    groundAxisX: { value: new Vector4() },
    groundAxisZ: { value: new Vector4() },
  };
  const material = new ShaderMaterial({
    vertexShader: SKY_GRID_VERTEX,
    fragmentShader: SKY_GRID_FRAGMENT,
    uniforms,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    side: BackSide,
    blending: CustomBlending,
    blendSrc: OneFactor,
    blendDst: OneMinusSrcAlphaFactor,
    blendSrcAlpha: OneFactor,
    blendDstAlpha: OneMinusSrcAlphaFactor,
  });
  const mesh = new Mesh(geometry, material);
  mesh.frustumCulled = false;
  // Over the background (renderOrder 0), under the Sky's layers (1 and up).
  mesh.renderOrder = 0.5;
  return {
    // `sky`: grid.js skyGrid() with `scale` (render pixels per device pixel). Returns the mesh to put in the Sky's scene.
    show(sky) {
      const scale = sky.scale ?? 1;
      uniforms.stepRad.value = sky.stepDeg * RAD;
      uniforms.linePx.value = sky.linePx * scale;
      uniforms.lineColor.value.copy(vec4Of(sky.lineColor));
      uniforms.lineFade.value.set(sky.lineFadeDeg[0] * RAD, sky.lineFadeDeg[1] * RAD);
      uniforms.axisPx.value = sky.axisPx * scale;
      uniforms.axisX.value.copy(vec4Of(sky.axisX));
      uniforms.axisZ.value.copy(vec4Of(sky.axisZ));
      uniforms.axisRise.value.set(sky.axisRiseDeg[0] * RAD, sky.axisRiseDeg[1] * RAD);
      uniforms.horizonPx.value = sky.horizonPx * scale;
      uniforms.horizonColor.value.copy(vec4Of(sky.horizonColor));
      uniforms.poleDot.value = sky.poleDotDeg * RAD;
      uniforms.poleColor.value.copy(vec4Of(sky.poleColor));
      uniforms.poleNear.value.set(sky.poleNearDeg[0] * RAD, sky.poleNearDeg[1] * RAD);
      uniforms.side.value = sky.side;
      uniforms.groundOn.value = sky.groundAxes ? 1 : 0;
      if (sky.groundAxes) {
        uniforms.eyeXZ.value.set(sky.eye[0], sky.eye[2]);
        uniforms.groundBelow.value = sky.ground - sky.eye[1];
        uniforms.groundReach.value = sky.groundReach;
        uniforms.groundAxisPx.value = sky.groundAxisPx * scale;
        uniforms.groundAxisX.value.copy(vec4Of(sky.groundAxisColors.x));
        uniforms.groundAxisZ.value.copy(vec4Of(sky.groundAxisColors.z));
      }
      return mesh;
    },
    dispose() {
      material.dispose();
    },
  };
}
