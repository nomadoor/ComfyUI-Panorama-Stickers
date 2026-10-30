// The lens curve's mapping in GLSL (docs/threejs-spark-integration.md "Camera から見た空間の表示", ADR 0042): lens_angle
// and lens_radius as pano_lens.js lensAngle and lensRadius have them (the three.js chunk imports this instead of
// pano_lens.js, which the eager bundle uses too), and the film point of a direction in a lens image's own axes (x
// right, y up, looking down -z). tests/browser/lens_view.spec.js holds them to pano_lens.js's rays.
export const LENS_GLSL = `
float lensAngle(float rho, float curve) {
  float x = curve * rho;
  return abs(x) < 1e-4 ? rho * (1.0 - x * x / 3.0) : atan(x) / curve;
}
float lensRadius(float theta, float curve) {
  float x = curve * theta;
  return abs(x) < 1e-4 ? theta * (1.0 + x * x / 3.0) : tan(x) / curve;
}
// The film point of a direction (any length) at the curve, or false where the lens does not reach it.
bool lensFilm(vec3 direction, float curve, out vec2 film) {
  vec3 d = normalize(direction);
  float side = length(d.xy);
  float theta = atan(side, -d.z);
  if (curve * theta >= 1.5707963267948966) return false;
  film = side > 0.0 ? d.xy / side * lensRadius(theta, curve) : vec2(0.0);
  return true;
}
`;
