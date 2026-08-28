import assert from "node:assert/strict";
import test from "node:test";

import {
  applyCutoutNodeSurfaceAction,
  beginCutoutRollGesture,
  buildCutoutAddFrameAction,
  buildCutoutPanoramaViewFromShot,
  CUTOUT_NODE_FRAME_PADDING,
  CUTOUT_NODE_SURFACE_MIN_HEIGHT,
  createCutoutNodeSurfaceSession,
  cutoutNodeSurfaceModel,
  fitCutoutNodeFrame,
  layoutCutoutNodeContext,
  panCutoutShotByScreenDelta,
  parseCutoutAspectPair,
  updateCutoutRollGesture,
} from "../web_src/pano_cutout_node_surface.js";
import { cameraBasis, yawPitchToDir } from "../web_src/pano_camera_math.js";
import { screenPointToWorldDirection } from "../web_src/pano_sticker_geometry.js";

function stateWithShots(shots, selectedId = null) {
  return {
    version: 1,
    shots,
    active: { selected_shot_id: selectedId },
    painting: { groups: [] },
  };
}

test("node surface model exposes frame shape but no detailed camera controls", () => {
  const state = stateWithShots([{
    id: "frame",
    hFOV_deg: 60,
    vFOV_deg: 40,
    aspect_id: "3:2",
    roll_deg: 12,
  }], "frame");

  assert.deepEqual(cutoutNodeSurfaceModel(state), {
    hasShot: true,
    shotId: "frame",
    locked: false,
    aspectLabel: "3:2",
    rollDeg: 12,
    rollLabel: "12.0°",
  });
});

test("node roll label keeps the current angle visible and normalizes negative zero", () => {
  const base = { id: "frame", hFOV_deg: 60, vFOV_deg: 40 };
  assert.equal(cutoutNodeSurfaceModel(stateWithShots([{ ...base, roll_deg: 25.401 }], "frame")).rollLabel, "25.4°");
  assert.equal(cutoutNodeSurfaceModel(stateWithShots([{ ...base, roll_deg: -0.0001 }], "frame")).rollLabel, "0.0°");
  assert.equal(cutoutNodeSurfaceModel(stateWithShots([{ ...base, roll_deg: -12.25 }], "frame")).rollLabel, "-12.3°");
});

test("custom aspect parser accepts positive finite pairs and canonicalizes decimal ratios", () => {
  assert.deepEqual(parseCutoutAspectPair("2.39", "1"), {
    width: 2.39,
    height: 1,
    ratio: 2.39,
    label: "239:100",
  });
  assert.equal(parseCutoutAspectPair("", "1"), null);
  assert.equal(parseCutoutAspectPair("0", "1"), null);
  assert.equal(parseCutoutAspectPair("wide", "1"), null);
  assert.equal(parseCutoutAspectPair("100", "1")?.ratio, 100);
  assert.equal(parseCutoutAspectPair(Number.MAX_VALUE, Number.MAX_VALUE)?.label, "1:1");
});

test("preset aspect preserves orientation while custom aspect uses the entered orientation", () => {
  const initial = stateWithShots([{
    id: "frame",
    hFOV_deg: 40,
    vFOV_deg: 60,
    aspect_id: "2:3",
  }], "frame");
  const safeRect = { x: 20, y: 42, w: 320, h: 190 };

  const preset = applyCutoutNodeSurfaceAction(initial, {
    type: "set-aspect",
    width: 16,
    height: 9,
    preserveOrientation: true,
    safeRect,
  });
  const custom = applyCutoutNodeSurfaceAction(preset.state, {
    type: "set-aspect",
    width: 2.39,
    height: 1,
    preserveOrientation: false,
    safeRect,
  });

  assert.equal(preset.changed, true);
  assert.equal(preset.state.shots[0].aspect_id, "9:16");
  assert.equal(custom.state.shots[0].aspect_id, "239:100");
  assert.ok(custom.state.shots[0].hFOV_deg > custom.state.shots[0].vFOV_deg);
});

test("orientation swap inverts the active frame without changing other shots", () => {
  const state = stateWithShots([
    { id: "other", hFOV_deg: 50, vFOV_deg: 50, aspect_id: "1:1" },
    { id: "frame", hFOV_deg: 70, vFOV_deg: 40, aspect_id: "16:9" },
  ], "frame");

  const result = applyCutoutNodeSurfaceAction(state, {
    type: "swap-aspect",
    safeRect: { x: 0, y: 0, w: 300, h: 180 },
  });

  assert.equal(result.changed, true);
  assert.deepEqual(result.state.shots[0], state.shots[0]);
  assert.equal(result.state.shots[1].aspect_id, "9:16");
  assert.ok(result.state.shots[1].hFOV_deg < result.state.shots[1].vFOV_deg);
});

test("frame uses Perspective Editor workspace padding and its measured toolbar clearance", () => {
  assert.equal(CUTOUT_NODE_SURFACE_MIN_HEIGHT, 260);
  assert.deepEqual(CUTOUT_NODE_FRAME_PADDING, {
    top: 58,
    right: 32,
    bottom: 32,
    left: 32,
  });

  assert.deepEqual(
    fitCutoutNodeFrame(
      { width: 400, height: 300 },
      16 / 9,
    ),
    {
      x: 32,
      y: 68.5,
      w: 336,
      h: 189,
      safeRect: { x: 32, y: 58, w: 336, h: 210 },
    },
  );

  const tiny = fitCutoutNodeFrame({ width: 48, height: 48 }, 1);
  assert.ok(tiny.x >= 0 && tiny.y >= 0);
  assert.ok(tiny.x + tiny.w <= 48 && tiny.y + tiny.h <= 48);
  assert.ok(tiny.safeRect.w >= 1 && tiny.safeRect.h >= 1);
});

test("ordinary primary drag pans the active frame camera in screen space", () => {
  const shot = {
    id: "frame",
    yaw_deg: 10,
    pitch_deg: 0,
    roll_deg: 0,
    hFOV_deg: 60,
    vFOV_deg: 40,
  };

  const next = panCutoutShotByScreenDelta(shot, {
    dx: 20,
    dy: -10,
    focalPx: 100,
  });

  assert.ok(Math.abs(next.yaw_deg - (-1.309932474020213)) < 1e-12);
  assert.ok(Math.abs(next.pitch_deg - (-5.710593137499643)) < 1e-12);
  assert.equal(next.roll_deg, 0);
  assert.equal(shot.yaw_deg, 10, "pan must not mutate the source shot");
  assert.equal(shot.pitch_deg, 0, "pan must not mutate the source shot");
});

test("wheel FOV action scales both tangent axes together and preserves roll", () => {
  const shot = {
    id: "frame",
    yaw_deg: 10,
    pitch_deg: -5,
    roll_deg: 23,
    hFOV_deg: 80,
    vFOV_deg: 50,
  };
  const initial = stateWithShots([shot], "frame");
  const beforeAspect = Math.tan(shot.hFOV_deg * Math.PI / 360)
    / Math.tan(shot.vFOV_deg * Math.PI / 360);
  const result = applyCutoutNodeSurfaceAction(initial, { type: "scale-fov", scale: 1.1 });
  const next = result.state.shots[0];
  const afterAspect = Math.tan(next.hFOV_deg * Math.PI / 360)
    / Math.tan(next.vFOV_deg * Math.PI / 360);

  assert.equal(result.changed, true);
  assert.ok(next.hFOV_deg > shot.hFOV_deg);
  assert.ok(next.vFOV_deg > shot.vFOV_deg);
  assert.ok(Math.abs(afterAspect - beforeAspect) < 1e-12);
  assert.equal(next.roll_deg, 23);
  assert.equal(initial.shots[0], shot);
});

test("wheel step changes Cutout horizontal FOV by the shared three degrees", () => {
  const initial = stateWithShots([{
    id: "frame",
    hFOV_deg: 100,
    vFOV_deg: 55,
    roll_deg: 17,
  }], "frame");
  const result = applyCutoutNodeSurfaceAction(initial, { type: "step-fov", direction: 1 });
  assert.equal(result.changed, true);
  assert.ok(Math.abs(result.state.shots[0].hFOV_deg - 103) < 1e-9);
  assert.equal(result.state.shots[0].roll_deg, 17);
});

test("node context render covers the full surface while preserving the output frame", () => {
  const viewport = { width: 400, height: 300 };
  const shot = {
    id: "frame",
    yaw_deg: 10,
    pitch_deg: -5,
    roll_deg: 12,
    hFOV_deg: 60,
    vFOV_deg: 40,
  };
  const frame = fitCutoutNodeFrame(viewport, 16 / 9);
  const layout = layoutCutoutNodeContext(viewport, frame, shot);

  assert.ok(layout.rect.x <= 0);
  assert.ok(layout.rect.y <= 0);
  assert.ok(layout.rect.x + layout.rect.w >= viewport.width);
  assert.ok(layout.rect.y + layout.rect.h >= viewport.height);
  assert.ok(layout.rect.w > frame.w);
  assert.ok(layout.rect.h > frame.h);
  assert.equal(layout.shot.yaw_deg, shot.yaw_deg);
  assert.equal(layout.shot.pitch_deg, shot.pitch_deg);
  assert.equal(layout.shot.roll_deg, shot.roll_deg);
  assert.deepEqual(frame, fitCutoutNodeFrame(viewport, 16 / 9));
  assert.equal(layout.fallback, null);
});

test("wide-angle boundary supplies a full-surface fallback without changing the exact frame shot", () => {
  const viewport = { width: 400, height: 300 };
  const frame = fitCutoutNodeFrame(viewport, 16 / 9);
  const shot = {
    id: "wide",
    yaw_deg: 20,
    pitch_deg: -10,
    roll_deg: 15,
    hFOV_deg: 179,
    vFOV_deg: 170,
  };
  const layout = layoutCutoutNodeContext(viewport, frame, shot);

  assert.ok(layout.fallback);
  assert.deepEqual(layout.fallback.rect, { x: 0, y: 0, w: 400, h: 300 });
  const fallbackAspect = Math.tan(layout.fallback.shot.hFOV_deg * Math.PI / 360)
    / Math.tan(layout.fallback.shot.vFOV_deg * Math.PI / 360);
  assert.ok(Math.abs(fallbackAspect - 4 / 3) < 1e-12);
  assert.equal(layout.shot.yaw_deg, shot.yaw_deg);
  assert.equal(layout.fallback.shot.roll_deg, shot.roll_deg);
  assert.equal(shot.hFOV_deg, 179);
});

test("pan action stays anchored to pointer-down state instead of compounding live drafts", () => {
  const startShot = {
    id: "frame",
    yaw_deg: 10,
    pitch_deg: 0,
    roll_deg: 0,
    hFOV_deg: 60,
    vFOV_deg: 40,
  };
  const initial = stateWithShots([startShot], "frame");
  const first = applyCutoutNodeSurfaceAction(initial, {
    type: "pan-camera",
    startShot,
    dx: 10,
    dy: 0,
    focalPx: 100,
  });
  const second = applyCutoutNodeSurfaceAction(first.state, {
    type: "pan-camera",
    startShot,
    dx: 20,
    dy: 0,
    focalPx: 100,
  });
  const expected = panCutoutShotByScreenDelta(startShot, { dx: 20, dy: 0, focalPx: 100 });

  assert.equal(second.state.shots[0].yaw_deg, expected.yaw_deg);
  assert.equal(second.state.shots[0].pitch_deg, expected.pitch_deg);
});

test("roll gesture starts only from an approved modifier outside the center dead zone", () => {
  const frame = { x: 0, y: 0, w: 200, h: 100 };
  const point = { x: 180, y: 50 };

  assert.equal(beginCutoutRollGesture({ frame, point, startRollDeg: 0 }), null);
  assert.equal(beginCutoutRollGesture({
    frame,
    point: { x: 102, y: 50 },
    startRollDeg: 0,
    shiftKey: true,
  }), null);
  assert.equal(beginCutoutRollGesture({
    frame,
    point,
    startRollDeg: 0,
    altKey: true,
  }), null);

  const shift = beginCutoutRollGesture({ frame, point, startRollDeg: 0, shiftKey: true });
  const alt = beginCutoutRollGesture({
    frame,
    point,
    startRollDeg: 0,
    shiftKey: true,
    altKey: true,
    allowAlt: true,
  });
  assert.equal(shift.source, "shift");
  assert.equal(alt.source, "alt");
  assert.deepEqual(shift.frame, frame);
  assert.notEqual(shift.frame, frame);
});

test("Shift-start roll is continuous while legacy Alt-start keeps Shift snapping", () => {
  const frame = { x: 0, y: 0, w: 200, h: 100 };
  const start = { x: 180, y: 50 };
  const angle = 14.1 * Math.PI / 180;
  const current = { x: 100 + Math.cos(angle) * 80, y: 50 + Math.sin(angle) * 80 };
  const shift = beginCutoutRollGesture({ frame, point: start, startRollDeg: 0, shiftKey: true });
  const alt = beginCutoutRollGesture({ frame, point: start, startRollDeg: 0, altKey: true, allowAlt: true });

  const shiftUpdate = updateCutoutRollGesture(shift, current, { shiftKey: true });
  const altUpdate = updateCutoutRollGesture(alt, current, { shiftKey: true });

  assert.ok(Math.abs(shiftUpdate.rollDeg - 14.1) < 1e-9);
  assert.equal(altUpdate.rollDeg, 15);
  assert.deepEqual(shiftUpdate.gesture.frame, frame);
});

test("roll gesture publishes a live draft and commits once", () => {
  let stored = stateWithShots([{
    id: "frame",
    hFOV_deg: 60,
    vFOV_deg: 40,
    roll_deg: 0,
  }], "frame");
  const live = [];
  const commits = [];
  const session = createCutoutNodeSurfaceSession({
    readState: () => stored,
    publishLiveState: (state) => live.push(state),
    commitState: (state) => {
      commits.push(state);
      stored = state;
    },
  });

  session.beginGesture();
  session.updateGesture({ type: "set-roll", value: 25 });
  session.updateGesture({ type: "set-roll", value: 40 });
  assert.equal(commits.length, 0);
  assert.equal(live.length, 2);

  assert.equal(session.commitGesture(), true);
  assert.equal(commits.length, 1);
  assert.equal(stored.shots[0].roll_deg, 40);
});

test("a rejected boundary wheel step keeps the preceding valid draft commit-ready", () => {
  let stored = stateWithShots([{
    id: "frame",
    hFOV_deg: 176,
    vFOV_deg: 80,
  }], "frame");
  const commits = [];
  const session = createCutoutNodeSurfaceSession({
    readState: () => stored,
    commitState: (state) => {
      commits.push(state);
      stored = state;
    },
  });

  session.beginGesture();
  assert.equal(session.updateGesture({ type: "step-fov", direction: 1 }), true);
  assert.equal(session.updateGesture({ type: "step-fov", direction: 1 }), false);
  assert.equal(session.hasGestureChanges(), true);
  assert.equal(session.commitGesture(), true);
  assert.equal(commits.length, 1);
  assert.ok(Math.abs(stored.shots[0].hFOV_deg - 179) < 1e-9);
});

test("missing and locked frames reject every shape edit", () => {
  const empty = stateWithShots([]);
  const locked = stateWithShots([{
    id: "locked",
    locked: true,
    hFOV_deg: 60,
    vFOV_deg: 40,
  }], "locked");

  assert.equal(applyCutoutNodeSurfaceAction(empty, { type: "swap-aspect" }).changed, false);
  assert.equal(applyCutoutNodeSurfaceAction(locked, {
    type: "set-aspect",
    width: 1,
    height: 1,
  }).changed, false);
  assert.equal(applyCutoutNodeSurfaceAction(locked, { type: "set-roll", value: 30 }).changed, false);
  assert.equal(applyCutoutNodeSurfaceAction(locked, { type: "scale-fov", scale: 1.1 }).changed, false);
  assert.equal(applyCutoutNodeSurfaceAction(stateWithShots([{
    id: "wide",
    hFOV_deg: 179,
    vFOV_deg: 60,
  }], "wide"), { type: "scale-fov", scale: 2 }).changed, false);
});

test("node surface can add a square frame to empty state and explicitly remove it again", () => {
  const empty = stateWithShots([]);
  const added = applyCutoutNodeSurfaceAction(empty, {
    type: "add-frame",
    id: "frame_new",
    yawDeg: 33,
    pitchDeg: -14,
    viewFovDeg: 100,
  });

  assert.equal(added.changed, true);
  assert.deepEqual(added.state.shots, [{
    id: "frame_new",
    label: "Frame 1",
    yaw_deg: 33,
    pitch_deg: -14,
    roll_deg: 0,
    hFOV_deg: 42,
    vFOV_deg: 42,
    locked: false,
    aspect_id: "1:1",
  }]);
  assert.equal(added.state.active.selected_shot_id, "frame_new");

  const removed = applyCutoutNodeSurfaceAction(added.state, { type: "delete-frame" });
  assert.equal(removed.changed, true);
  assert.deepEqual(removed.state.shots, []);
  assert.equal(removed.state.active.selected_shot_id, null);
});

test("adding the first frame preserves the panorama center and on-screen scale", () => {
  const view = { yaw: 33, pitch: -14, fov: 100 };
  const viewport = { width: 400, height: 300 };
  const action = buildCutoutAddFrameAction(
    view,
    viewport,
  );

  assert.equal(action.type, "add-frame");
  assert.ok(Math.abs(action.frameFovDeg - 64.066012133414) < 1e-9);

  const frame = fitCutoutNodeFrame(viewport, 1);
  const priorDirection = screenPointToWorldDirection({
    x: frame.x + frame.w * 0.5,
    y: frame.y + frame.h * 0.5,
  }, view, viewport);
  const frameDirection = yawPitchToDir(action.yawDeg, action.pitchDeg);
  assert.ok(Math.hypot(
    priorDirection.x - frameDirection.x,
    priorDirection.y - frameDirection.y,
    priorDirection.z - frameDirection.z,
  ) < 1e-12);

  const added = applyCutoutNodeSurfaceAction(stateWithShots([]), {
    ...action,
    id: "frame_at_view",
  });
  assert.equal(added.state.shots[0].hFOV_deg, action.frameFovDeg);
  assert.equal(added.state.shots[0].vFOV_deg, action.frameFovDeg);

  const restoredView = buildCutoutPanoramaViewFromShot(added.state.shots[0], viewport);
  assert.ok(Math.abs(restoredView.yaw - view.yaw) < 1e-12);
  assert.ok(Math.abs(restoredView.pitch - view.pitch) < 1e-12);
  assert.ok(Math.abs(restoredView.fov - view.fov) < 1e-12);
});

test("deleting a frame derives the panorama view instead of resetting to 100 degrees", () => {
  const viewport = { width: 400, height: 300 };
  const shot = {
    yaw_deg: 18,
    pitch_deg: -7,
    roll_deg: 0,
    hFOV_deg: 42,
    vFOV_deg: 42,
  };
  const view = buildCutoutPanoramaViewFromShot(shot, viewport);

  assert.ok(Math.abs(view.fov - 72.34627204895013) < 1e-9);
  assert.notEqual(view.fov, 100);
});

test("first-frame camera continuity survives crossing a panorama pole", () => {
  const view = { yaw: 33, pitch: -86, fov: 100 };
  const viewport = { width: 400, height: 300 };
  const action = buildCutoutAddFrameAction(view, viewport);
  const added = applyCutoutNodeSurfaceAction(stateWithShots([]), {
    ...action,
    id: "polar_frame",
  });
  const shot = added.state.shots[0];
  const restoredView = buildCutoutPanoramaViewFromShot(shot, viewport);

  assert.ok(Math.abs(Number(shot.roll_deg || 0)) > 90);
  const sourceRight = cameraBasis(view.yaw, view.pitch, 0).right;
  const frameRight = cameraBasis(shot.yaw_deg, shot.pitch_deg, shot.roll_deg).right;
  assert.ok(Math.hypot(
    sourceRight.x - frameRight.x,
    sourceRight.y - frameRight.y,
    sourceRight.z - frameRight.z,
  ) < 1e-9);
  assert.ok(Math.abs(restoredView.yaw - view.yaw) < 1e-9);
  assert.ok(Math.abs(restoredView.pitch - view.pitch) < 1e-9);
  assert.ok(Math.abs(restoredView.fov - view.fov) < 1e-9);
});
