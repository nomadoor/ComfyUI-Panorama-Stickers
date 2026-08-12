import assert from "node:assert/strict";
import test from "node:test";

import {
  clampFovPairToGate,
  contextHalfExtentsPx,
  cutoutFilmPointToWorldDir,
  deriveHorizontalFovDeg,
  deriveVerticalFovDeg,
  fitFovPairToGate,
  filmTangentToCanvas,
  fitFocalPx,
  aspectFitGateSize,
  fovPairForGate,
  gateRectFromFocal,
  getCutoutCameraParams,
  getCutoutOverscanScale,
  canvasToFilmTangent,
  scaleCutoutFovPair,
  shortestAngleDeltaRad,
  resolveFrameRollDeg,
  wrapRollDeg,
  worldDirToCutoutFilmPoint,
} from "../web_src/pano_cutout_view_math.js";

const close = (actual, expected, tolerance = 1e-9) => {
  assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} != ${expected}`);
};

test("camera film projection round-trips with roll and non-square FOV", () => {
  const shot = { yaw_deg: 123, pitch_deg: -37, roll_deg: 28, hFOV_deg: 96, vFOV_deg: 51 };
  for (const point of [{ x: 0, y: 0 }, { x: -1, y: 1 }, { x: 0.42, y: -0.73 }]) {
    const direction = cutoutFilmPointToWorldDir(shot, point);
    const projected = worldDirToCutoutFilmPoint(shot, direction);
    close(projected.x, point.x);
    close(projected.y, point.y);
  }
});

test("one focal scalar derives a centered gate without axis clamping", () => {
  const safe = { x: 120, y: 90, w: 1000, h: 620 };
  for (const ratio of [1 / 4, 9 / 16, 1, 16 / 9, 4]) {
    const shot = { hFOV_deg: 90, vFOV_deg: deriveVerticalFovDeg(90, ratio) };
    const focal = fitFocalPx(safe, shot) * 0.9;
    const gate = gateRectFromFocal(safe, shot, focal);
    close(gate.w / gate.h, ratio, 1e-9);
    assert.ok(gate.x >= safe.x - 1e-9 && gate.y >= safe.y - 1e-9);
    assert.ok(gate.x + gate.w <= safe.x + safe.w + 1e-9);
    assert.ok(gate.y + gate.h <= safe.y + safe.h + 1e-9);
  }
});

test("initial focal uses a fixed fraction of the limiting safe dimension", () => {
  const safe = { x: 120, y: 90, w: 1000, h: 620 };
  const portrait = { hFOV_deg: 34.41, vFOV_deg: 49.827 };
  const focal = fitFocalPx(safe, portrait) * 0.9;
  const gate = gateRectFromFocal(safe, portrait, focal);
  close(gate.h, safe.h * 0.9, 1e-9);
  close(gate.focalPx, focal, 1e-9);
});

test("film tangent and canvas coordinates round-trip outside the gate", () => {
  const center = { x: 800, y: 400 };
  const point = { x: -120, y: 930 };
  const tangent = canvasToFilmTangent(center, 640, point);
  const roundTrip = filmTangentToCanvas(center, 640, tangent);
  close(roundTrip.x, point.x);
  close(roundTrip.y, point.y);
});

test("explicit aspect keeps vertical FOV and derives horizontal FOV in tangent space", () => {
  const vFov = 70;
  const hFov = deriveHorizontalFovDeg(vFov, 9 / 16);
  const camera = getCutoutCameraParams({ hFOV_deg: hFov, vFOV_deg: vFov });
  close(camera.aspect, 9 / 16, 1e-12);
});

test("wheel scaling preserves tangent aspect and rejects an out-of-range pair atomically", () => {
  const shot = { hFOV_deg: 100, vFOV_deg: 55 };
  const before = getCutoutCameraParams(shot).aspect;
  const next = scaleCutoutFovPair(shot, 0.8);
  assert.ok(next);
  close(getCutoutCameraParams(next).aspect, before, 1e-12);
  assert.equal(scaleCutoutFovPair({ hFOV_deg: 179, vFOV_deg: 60 }, 2), null);
});

test("wheel changes the gate while the focal scalar stays fixed", () => {
  const safe = { x: 100, y: 80, w: 1200, h: 700 };
  const shot = { hFOV_deg: 100, vFOV_deg: 55 };
  const focal = fitFocalPx(safe, shot) * 0.9;
  const before = gateRectFromFocal(safe, shot, focal);
  const next = scaleCutoutFovPair(shot, 0.7);
  const after = gateRectFromFocal(safe, next, focal);
  close(after.w, before.w * 0.7);
  close(after.h, before.h * 0.7);
});

test("gate clamp and fit always scale both tangent axes uniformly", () => {
  const safe = { x: 100, y: 80, w: 1200, h: 700 };
  const shot = { hFOV_deg: 100, vFOV_deg: 55 };
  const focal = fitFocalPx(safe, shot) * 1.4;
  const clamped = clampFovPairToGate(shot, focal, safe);
  close(getCutoutCameraParams(clamped).aspect, getCutoutCameraParams(shot).aspect, 1e-12);
  const gate = gateRectFromFocal(safe, clamped, focal);
  assert.ok(gate.w <= safe.w + 1e-9 && gate.h <= safe.h + 1e-9);
  const fitted = fitFovPairToGate(clamped, focal, safe);
  close(getCutoutCameraParams(fitted).aspect, getCutoutCameraParams(shot).aspect, 1e-12);
});

test("overscan obeys the safe half-angle before the maximum multiplier", () => {
  close(getCutoutOverscanScale(90), 1.5);
  const wideScale = getCutoutOverscanScale(179);
  close(wideScale, 1);
  const boundedScale = getCutoutOverscanScale(160);
  const effectiveHalfAngle = Math.atan(Math.tan(160 * Math.PI / 360) * boundedScale) * 180 / Math.PI;
  assert.ok(effectiveHalfAngle <= 85 + 1e-9);
});


test("context extents fill the canvas and never depend on the gate", () => {
  const canvasSize = { width: 1600, height: 800 };
  const focal = 900;
  const extents = contextHalfExtentsPx(canvasSize, focal);
  assert.equal(extents.halfW, 800);
  assert.equal(extents.halfH, 400);

  // A tiny gate must not shrink the painted region: the extents are a function
  // of canvas and focal only, so zooming the shot cannot open black margins.
  const narrow = gateRectFromFocal({ x: 0, y: 0, w: 1552, h: 752 }, { hFOV_deg: 6, vFOV_deg: 6 }, focal);
  assert.ok(narrow.w < 200 && narrow.h < 200);
  assert.deepEqual(contextHalfExtentsPx(canvasSize, focal), extents);

  // The absolute field angle is the only bound, and it only bites at extreme FOV.
  const wide = contextHalfExtentsPx(canvasSize, 40);
  assert.ok(wide.halfW < 800);
  const halfAngleDeg = Math.atan(wide.halfW / 40) * (180 / Math.PI);
  assert.ok(halfAngleDeg <= 85 + 1e-9);
});

// The frame view stores no presentation scale: the gate is always the largest
// rectangle of the shot's aspect that fits the UI-safe rect. These tests pin the
// properties that fall out of that, because each one was a shipped bug once.
const OCCUPANCY = 1;
const focalFor = (safeRect, shot) => OCCUPANCY * fitFocalPx(safeRect, shot);
const withAspect = (safeRect, shot, ratio) => ({
  ...shot,
  ...fovPairForGate(aspectFitGateSize(safeRect, ratio), focalFor(safeRect, shot)),
});
const gateFor = (safeRect, shot) => gateRectFromFocal(safeRect, shot, focalFor(safeRect, shot));



test("wheel pins the gate on screen and zooms the ERP instead", () => {
  const safeRect = { x: 24, y: 24, w: 1552, h: 752 };
  let shot = { hFOV_deg: 64, vFOV_deg: deriveVerticalFovDeg(64, 16 / 9) };
  const first = gateFor(safeRect, shot);
  const firstFocal = focalFor(safeRect, shot);

  for (let i = 0; i < 5; i += 1) {
    const next = scaleCutoutFovPair(shot, 1.1);
    assert.ok(next);
    shot = { ...shot, ...next };
  }

  close(gateFor(safeRect, shot).w, first.w, 1e-6);
  close(gateFor(safeRect, shot).h, first.h, 1e-6);
  assert.ok(focalFor(safeRect, shot) < firstFocal);
  assert.ok(shot.hFOV_deg > 64);
});



test("the scale is a pure function of the safe rect, so layout jitter cannot drift", () => {
  const shot = { hFOV_deg: 64, vFOV_deg: deriveVerticalFovDeg(64, 16 / 9) };
  const stable = { x: 24, y: 24, w: 1552, h: 752 };
  const reference = focalFor(stable, shot);
  for (let i = 0; i < 50; i += 1) {
    focalFor({ x: 24, y: 24, w: 1542, h: 762 }, shot);
    focalFor({ x: 24, y: 24, w: 1562, h: 742 }, shot);
  }
  assert.equal(focalFor(stable, shot), reference);
});

test("every aspect gets the largest frame the viewport allows", () => {
  for (const safeRect of [
    { x: 24, y: 24, w: 981, h: 599 },
    { x: 24, y: 24, w: 1432, h: 740 },
    { x: 24, y: 24, w: 700, h: 800 },
  ]) {
    let shot = { hFOV_deg: 85.116, vFOV_deg: 54.631 };
    for (const ratio of [16 / 9, 4 / 3, 1, 9 / 16, 1 / 4, 4]) {
      shot = withAspect(safeRect, shot, ratio);
      const gate = gateFor(safeRect, shot);
      close(gate.w / gate.h, ratio, 1e-6);
      // Maximal: it touches width or height, and never overflows either.
      assert.ok(gate.w <= safeRect.w + 1e-6 && gate.h <= safeRect.h + 1e-6);
      const touches = Math.abs(gate.w - safeRect.w) < 1e-6 || Math.abs(gate.h - safeRect.h) < 1e-6;
      assert.ok(touches, `aspect ${ratio} left slack on both axes: ${gate.w}x${gate.h}`);
    }
  }
});

test("aspect and portrait toggle never move the ERP, at any viewport ratio", () => {
  // The scale is gate size / FOV, so a maximal gate per aspect is only possible
  // at a fixed scale if the FOV is re-derived. Sweeping the viewport keeps that
  // from silently regressing back to holding the FOV.
  for (let width = 700; width <= 1600; width += 25) {
    const safeRect = { x: 24, y: 24, w: width, h: 599 };
    let shot = { hFOV_deg: 85.116, vFOV_deg: 54.631 };
    shot = withAspect(safeRect, shot, 16 / 9);
    const reference = focalFor(safeRect, shot);
    for (const ratio of [1, 4 / 3, 3 / 2, 16 / 9, 9 / 16, 1, 16 / 9]) {
      shot = withAspect(safeRect, shot, ratio);
      close(focalFor(safeRect, shot), reference, 1e-9);
    }
  }
});

test("landscape fills the width and portrait fills the height", () => {
  const safeRect = { x: 24, y: 24, w: 981, h: 599 };
  let shot = withAspect(safeRect, { hFOV_deg: 85.116, vFOV_deg: 54.631 }, 16 / 9);
  const landscape = gateFor(safeRect, shot);
  close(landscape.w, safeRect.w, 1e-6);
  assert.ok(landscape.h < safeRect.h - 1);

  shot = withAspect(safeRect, shot, 9 / 16);
  const portrait = gateFor(safeRect, shot);
  close(portrait.h, safeRect.h, 1e-6);
  assert.ok(portrait.w < safeRect.w - 1);

  // Round trip restores the landscape frame exactly.
  shot = withAspect(safeRect, shot, 16 / 9);
  close(gateFor(safeRect, shot).w, landscape.w, 1e-6);
  close(gateFor(safeRect, shot).h, landscape.h, 1e-6);
});

test("frame roll accumulation stays continuous across the atan2 seam", () => {
  let accumulated = 0;
  let previous = 170 * Math.PI / 180;
  for (const degrees of [175, 179, -179, -175, -170]) {
    const current = degrees * Math.PI / 180;
    accumulated += shortestAngleDeltaRad(current, previous);
    previous = current;
  }
  close(accumulated * 180 / Math.PI, 20, 1e-9);
  close(resolveFrameRollDeg(12, accumulated), 32, 1e-9);
});

test("frame roll snapping and normalization follow the interaction contract", () => {
  close(resolveFrameRollDeg(0, 14.1 * Math.PI / 180, { shiftKey: true }), 15);
  close(resolveFrameRollDeg(0, 0.8 * Math.PI / 180), 0);
  close(resolveFrameRollDeg(0, 0.8 * Math.PI / 180, { altKey: true }), 0.8);
  assert.equal(wrapRollDeg(-180), 180);
  assert.equal(wrapRollDeg(541), -179);
});

test("roll never changes frame fit or gate geometry", () => {
  const safeRect = { x: 100, y: 80, w: 1200, h: 700 };
  const base = { hFOV_deg: 75, vFOV_deg: 48, roll_deg: 0 };
  const focal = fitFocalPx(safeRect, base);
  const gate = gateRectFromFocal(safeRect, base, focal);
  for (let roll = -180; roll <= 180; roll += 5) {
    const shot = { ...base, roll_deg: roll };
    assert.equal(fitFocalPx(safeRect, shot), focal);
    assert.deepEqual(gateRectFromFocal(safeRect, shot, focal), gate);
  }
});
