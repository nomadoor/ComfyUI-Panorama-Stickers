import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { Group, Mesh, Object3D, PerspectiveCamera, Scene } from "three";

import { CAMERA_PREVIEW_OWNER, cameraPreviewChanged, splatDrawReason } from "../web_src/editor/camera_preview.js";
import { DRAW_REASON } from "../web_src/pano_frame_scheduler.js";
import { createSparkViews, disposeSpark } from "../web_src/pano_spark_views.js";
import { readEditorSource } from "./editor_source.mjs";

const STAGE = undefined;

// The pose a camera is at, as Spark compares them (a moved camera makes it generate and sort again).
function poseOf(camera) {
  const e = camera.matrixWorld.elements;
  return [e[12], e[13], e[14], -e[8], -e[9], -e[10]].map((value) => Math.round(value * 1000) / 1000).join(",");
}

// A stand-in for Spark 2.1's SplatMesh with spherical harmonics: a generator whose version goes up whenever it
// is updated for another camera than the time before (its colors depend on the view direction).
class FakeSplatMesh extends Object3D {
  constructor(source = null) {
    super();
    this.isSplatGenerator = true;
    this.source = source;
    this.version = 0;
    this.pose = null;
    this.opacity = 1;
  }

  frameUpdate(camera) {
    const pose = poseOf(camera);
    if (pose !== this.pose) this.version += 1;
    this.pose = pose;
  }
}

// A stand-in for Spark 2.1's SparkRenderer with the steps that matter here: drawn (onBeforeRender), it
// updates the generators its camera's layers see; with a camera it has not sorted for, or a generator's
// version changed, it generates the splats (a new `current`) and starts a sort (lastSortTime). The sort ends
// later (finishSort), and setDirty calls onDirty unless it is dirty already.
class FakeSpark extends Mesh {
  constructor(onDirty) {
    super();
    this.onDirty = onDirty;
    this.frustumCulled = false;
    this.current = { pose: null };
    this.sortedPose = null;
    this.sorting = false;
    this.sortDirty = false;
    this.lastSortTime = 0;
    this.dirty = true;
    this.disposed = false;
    // [frame, pose] of every draw.
    this.seen = [];
  }

  onBeforeRender(renderer, scene, camera) {
    this.seen.push([renderer.frame, poseOf(camera)]);
    this.updateInternal({ scene, camera });
    this.dirty = false;
  }

  updateInternal({ scene, camera }) {
    const pose = poseOf(camera);
    const generators = gathered(scene, camera);
    generators.forEach((node) => node.frameUpdate(camera));
    const version = generators.map((node) => `${node.id}:${node.version}`).join();
    if (pose !== this.sortedPose || version !== this.current.version) {
      this.current = { pose, version };
      this.sortDirty = true;
      this.setDirty();
    }
    return Promise.resolve(this.driveSort());
  }

  driveSort() {
    if (this.sorting || !this.sortDirty) return;
    this.sorting = true;
    this.sortDirty = false;
    this.sortedPose = this.current.pose;
    this.lastSortTime += 1;
  }

  finishSort() {
    if (!this.sorting) return;
    this.sorting = false;
    this.setDirty();
    this.driveSort();
  }

  setDirty() {
    if (this.dirty) return;
    this.dirty = true;
    this.onDirty?.();
  }

  dispose() {
    this.disposed = true;
    // As Spark 2.1's dispose: it terminates its sort worker and lets go of it.
    this.sortWorker = null;
  }
}

// What three.js's WebGLRenderer.render does with the objects of a scene: each visible object on a layer the
// camera sees is drawn, and a mesh's onBeforeRender runs with that camera. Children are visited either way.
function renderLike(renderer, scene, camera) {
  renderer.frame += 1;
  scene.updateMatrixWorld();
  camera.updateMatrixWorld();
  const visit = (object) => {
    if (!object.visible) return;
    if (object.layers.test(camera.layers) && object.isMesh) object.onBeforeRender(renderer, scene, camera);
    object.children.forEach(visit);
  };
  visit(scene);
}

// The generators Spark gathers for a camera: those on a layer it sees (its prepareGenerate).
function gathered(scene, camera) {
  const found = [];
  scene.traverse((node) => {
    if (node.isSplatGenerator && camera.layers.test(node.layers)) found.push(node);
  });
  return found;
}

function setup(onDirty = () => {}) {
  const made = [];
  const views = createSparkViews({
    create: (dirty) => {
      const spark = new FakeSpark(dirty);
      made.push(spark);
      return spark;
    },
    cloneSplat: (loaded) => new FakeSplatMesh(loaded),
    onDirty,
    setTimeout: () => 0,
    clearTimeout: () => {},
  });
  return { views, made };
}

test("each view's Spark renderer has a layer of its own, and the view's camera sees it and the World only", () => {
  const { views } = setup();
  const stage = views.renderer(STAGE);
  const preview = views.renderer(CAMERA_PREVIEW_OWNER);
  assert.notEqual(stage, preview);
  assert.equal(views.renderer(STAGE), stage);
  const stageLayer = Math.log2(stage.layers.mask);
  const previewLayer = Math.log2(preview.layers.mask);
  assert.ok(Number.isInteger(stageLayer) && stageLayer > 0);
  assert.ok(Number.isInteger(previewLayer) && previewLayer > 0);
  assert.notEqual(stageLayer, previewLayer);

  const camera = new PerspectiveCamera();
  const world = new Object3D();
  views.aim(camera, STAGE);
  assert.ok(stage.layers.test(camera.layers));
  assert.ok(!preview.layers.test(camera.layers));
  assert.ok(world.layers.test(camera.layers));
  views.aim(camera, CAMERA_PREVIEW_OWNER);
  assert.ok(preview.layers.test(camera.layers));
  assert.ok(!stage.layers.test(camera.layers));
  assert.ok(world.layers.test(camera.layers));
  // A view without a renderer sees the World only.
  views.aim(camera, "other");
  assert.ok(!stage.layers.test(camera.layers) && !preview.layers.test(camera.layers));
  assert.ok(world.layers.test(camera.layers));
});

test("each view draws a loaded SPLAT through a SplatMesh of its own on its layer, which only its camera gathers", () => {
  const { views } = setup();
  const scene = new Scene();
  const loaded = new FakeSplatMesh();
  loaded.opacity = 0.5;
  scene.add(new Group().add(loaded));
  const stageMesh = views.splat(STAGE, loaded);
  const previewMesh = views.splat(CAMERA_PREVIEW_OWNER, loaded);
  assert.notEqual(stageMesh, previewMesh);
  assert.equal(views.splat(STAGE, loaded), stageMesh);
  // They share the loaded splats and its transform, and follow its opacity.
  assert.equal(stageMesh.source, loaded);
  assert.equal(stageMesh.parent, loaded);
  assert.equal(previewMesh.parent, loaded);
  assert.equal(stageMesh.opacity, 0.5);
  loaded.opacity = 0.25;
  assert.equal(views.splat(CAMERA_PREVIEW_OWNER, loaded).opacity, 0.25);
  const camera = new PerspectiveCamera();
  views.aim(camera, STAGE);
  assert.deepEqual(gathered(scene, camera), [stageMesh]);
  views.aim(camera, CAMERA_PREVIEW_OWNER);
  assert.deepEqual(gathered(scene, camera), [previewMesh]);
  // A loaded SPLAT that goes takes them along.
  views.forget(loaded);
  assert.equal(stageMesh.parent, null);
  assert.equal(previewMesh.parent, null);
  assert.notEqual(views.splat(STAGE, loaded), stageMesh);
});

// The World as pano_three_view.js buildWorld fills it for a draw of owner's view: the loaded SPLAT's group
// (the view's SplatMesh made) and the view's renderer.
function fillWorld(world, views, group, loaded, owner) {
  world.clear();
  views.splat(owner, loaded);
  world.add(group, views.renderer(owner));
}

test("a Spark renderer and a SplatMesh never see two cameras in one frame", () => {
  const { views } = setup();
  const renderer = { frame: 0 };
  const world = new Scene();
  const loaded = new FakeSplatMesh();
  const group = new Group().add(loaded);
  // The three.js view draws every space render with one camera object, set up for each draw.
  const worldCamera = new PerspectiveCamera();
  const updates = new Map();
  const draw = (owner, position) => {
    fillWorld(world, views, group, loaded, owner);
    // Both renderers in the World at once, which the layers keep apart too.
    world.add(views.renderer(STAGE), views.renderer(CAMERA_PREVIEW_OWNER));
    worldCamera.position.set(...position);
    worldCamera.updateMatrixWorld();
    views.aim(worldCamera, owner);
    renderLike(renderer, world, worldCamera);
  };
  views.splat(STAGE, loaded);
  views.splat(CAMERA_PREVIEW_OWNER, loaded);
  for (const mesh of loaded.children) {
    const update = mesh.frameUpdate.bind(mesh);
    mesh.frameUpdate = (camera) => {
      updates.set(mesh, [...(updates.get(mesh) ?? []), poseOf(camera)]);
      update(camera);
    };
  }
  const [stage, preview] = [views.renderer(STAGE), views.renderer(CAMERA_PREVIEW_OWNER)];
  const [stageMesh, previewMesh] = [views.splat(STAGE, loaded), views.splat(CAMERA_PREVIEW_OWNER, loaded)];
  for (let frame = 0; frame < 5; frame += 1) {
    // The camera preview draws first, then the stage, each frame; the stage orbits.
    draw(CAMERA_PREVIEW_OWNER, [10, 0, 0]);
    draw(STAGE, [0, 0, frame]);
  }
  const poses = (seen) => new Set(seen);
  assert.equal(preview.seen.length, 5);
  assert.equal(stage.seen.length, 5);
  assert.equal(poses(preview.seen.map(([, pose]) => pose)).size, 1);
  assert.equal(poses(stage.seen.map(([, pose]) => pose)).size, 5);
  const previewPose = preview.seen[0][1];
  assert.ok(stage.seen.every(([, pose]) => pose !== previewPose));
  // Each view's SplatMesh is updated for its own camera only, and the loaded one for none.
  assert.deepEqual([...poses(updates.get(previewMesh))], [previewPose]);
  assert.deepEqual(updates.get(stageMesh), stage.seen.map(([, pose]) => pose));
  assert.equal(loaded.pose, null);
});

test("the three.js view aims the World's camera at the view's own Spark renderer and SplatMeshes for every draw", () => {
  const view = readFileSync(new URL("../web_src/pano_three_view.js", import.meta.url), "utf8");
  assert.match(view, /if \(space\) buildWorld\(owned, space, input\.owner\);/);
  assert.match(view, /if \(content\.splat\) sparkViews\.splat\(owner, content\.object\);\s*children\.push\(content\.group\);/);
  assert.match(view, /if \(splat && Spark\) children\.push\(sparkViews\.renderer\(owner\)\);/);
  assert.match(view, /setCamera\(worldCamera, input\.camera, at\);\s*\/\/[^\n]*\n\s*sparkViews\.aim\(worldCamera, input\.owner\);[\s\S]*?renderer\.render\(world, worldCamera\);/);
  assert.match(view, /new Spark\.SplatMesh\(\{ packedSplats, raycastable: false \}\);\s*packedSplats\.splatEncoding = encoding;/);
  assert.match(view, /if \(item\.kind === "splat" && item\.object\) sparkViews\.forget\(item\.object\);\s*disposeSceneItem\(item\);/);
  assert.equal(view.match(/dispose: disposeItem,/g).length, 2);
  // The editor passes its camera preview as its own owner, and frees its renderer when it hides.
  const editor = readEditorSource();
  assert.match(editor, /drawEditorViewShot\(\{ x: 0, y: backgroundCanvas\.height - size\.height, w: size\.width, h: size\.height \}, shot, CAMERA_PREVIEW_OWNER\)/);
  assert.match(editor, /editorView\.releaseSplats\(CAMERA_PREVIEW_OWNER\)/);
  assert.match(editor, /onSplats: \(owner\) => requestDraw\(\{ localOnly: true, reason: splatDrawReason\(owner\) \}\)/);
});

test("a Spark renderer's sort draws its own view again: the stage's does not redraw the camera preview", () => {
  assert.equal(splatDrawReason(STAGE), DRAW_REASON.SPLAT_STAGE);
  assert.equal(splatDrawReason(CAMERA_PREVIEW_OWNER), DRAW_REASON.SPLAT_PREVIEW);
  assert.equal(cameraPreviewChanged(new Set([DRAW_REASON.SPLAT_STAGE])), false);
  assert.equal(cameraPreviewChanged(new Set([DRAW_REASON.SPLAT_STAGE, DRAW_REASON.VIEW, DRAW_REASON.OVERLAY])), false);
  assert.equal(cameraPreviewChanged(new Set([DRAW_REASON.SPLAT_PREVIEW])), true);
  assert.equal(cameraPreviewChanged(new Set([DRAW_REASON.MEDIA])), true);
  assert.equal(cameraPreviewChanged(new Set([DRAW_REASON.STATE])), true);
});

// The editor's frames with a SPLAT (with spherical harmonics) on screen and the camera preview shown: a frame
// draws when something asked; the stage draws on every such frame (it draws all of the three.js canvas), the
// preview when cameraPreviewChanged says so. Sorts end between frames. previewOwner is the owner the preview
// draws as, perViewMesh whether each view draws the SPLAT through its own SplatMesh. Returns the frames drawn
// before nothing asks, up to limit.
function runEditor({ previewOwner, perViewMesh, reasonOf, limit = 50 }) {
  const asked = new Set([DRAW_REASON.STATE]);
  const { views, made } = setup((owner) => asked.add(reasonOf(owner)));
  const renderer = { frame: 0 };
  const world = new Scene();
  const loaded = new FakeSplatMesh();
  const group = new Group().add(loaded);
  const worldCamera = new PerspectiveCamera();
  const draw = (owner, position) => {
    if (perViewMesh) {
      fillWorld(world, views, group, loaded, owner);
    } else {
      world.clear();
      world.add(group, views.renderer(owner));
    }
    worldCamera.position.set(...position);
    worldCamera.updateMatrixWorld();
    views.aim(worldCamera, owner);
    renderLike(renderer, world, worldCamera);
  };
  let frames = 0;
  while (asked.size && frames < limit) {
    const reasons = new Set(asked);
    asked.clear();
    frames += 1;
    if (cameraPreviewChanged(reasons)) draw(previewOwner, [10, 0, 0]);
    draw(STAGE, [0, 0, 0]);
    made.forEach((spark) => spark.finishSort());
  }
  return { frames, made };
}

test("with a renderer and a SplatMesh per view the frames stop once each has sorted for its camera", () => {
  const { frames, made } = runEditor({ previewOwner: CAMERA_PREVIEW_OWNER, perViewMesh: true, reasonOf: splatDrawReason });
  assert.ok(frames < 10, `the editor kept drawing (${frames} frames)`);
  assert.equal(made.length, 2);
  // Each generated and sorted once, for its own camera.
  for (const spark of made) {
    assert.equal(spark.lastSortTime, 1);
    assert.equal(new Set(spark.seen.map(([, pose]) => pose)).size, 1);
  }
});

test("one renderer shared by the stage and the camera preview never stops sorting (the bug fixed)", () => {
  const { frames, made } = runEditor({ previewOwner: STAGE, perViewMesh: true, reasonOf: () => DRAW_REASON.MEDIA });
  assert.equal(frames, 50);
  assert.equal(made.length, 1);
  assert.ok(made[0].lastSortTime > 20);
});

test("a renderer per view sharing one SplatMesh with spherical harmonics never stops sorting either", () => {
  const { frames, made } = runEditor({ previewOwner: CAMERA_PREVIEW_OWNER, perViewMesh: false, reasonOf: splatDrawReason });
  assert.equal(frames, 50);
  assert.ok(made.every((spark) => spark.lastSortTime > 20));
});

test("a released renderer stops asking for draws and is disposed once its sort has ended", () => {
  const dirty = [];
  const timers = [];
  const made = [];
  const views = createSparkViews({
    create: (onDirty) => {
      const spark = new FakeSpark(onDirty);
      made.push(spark);
      return spark;
    },
    cloneSplat: (loaded) => new FakeSplatMesh(loaded),
    onDirty: (owner) => dirty.push(owner),
    setTimeout: (callback) => timers.push(callback),
    clearTimeout: () => {},
  });
  const preview = views.renderer(CAMERA_PREVIEW_OWNER);
  const loaded = new FakeSplatMesh();
  const mesh = views.splat(CAMERA_PREVIEW_OWNER, loaded);
  preview.sorting = true;
  preview.dirty = false;
  views.release(CAMERA_PREVIEW_OWNER);
  // Its SplatMeshes go at once (its layer can go to another view).
  assert.equal(mesh.parent, null);
  // Disposing it while it sorts would leave a sort worker behind.
  assert.equal(preview.disposed, false);
  preview.finishSort();
  assert.deepEqual(dirty, []);
  timers.shift()();
  assert.equal(preview.disposed, true);
  assert.equal(timers.length, 0);
  // Drawn again, the view gets a new renderer.
  assert.notEqual(views.renderer(CAMERA_PREVIEW_OWNER), preview);
  // Releasing an owner without one does nothing.
  views.release("other");
});

test("disposing the view frees every renderer at once, also one waiting for its sort", () => {
  const cleared = [];
  const made = [];
  const views = createSparkViews({
    create: (onDirty) => {
      const spark = new FakeSpark(onDirty);
      made.push(spark);
      return spark;
    },
    cloneSplat: (loaded) => new FakeSplatMesh(loaded),
    onDirty: () => {},
    setTimeout: () => "timer",
    clearTimeout: (timer) => cleared.push(timer),
  });
  views.renderer(STAGE);
  views.renderer(CAMERA_PREVIEW_OWNER).sorting = true;
  views.release(CAMERA_PREVIEW_OWNER);
  views.dispose();
  assert.ok(made.every((spark) => spark.disposed));
  assert.deepEqual(cleared, ["timer"]);
  assert.deepEqual(views.stats(), []);
});

test("the diagnostics read each renderer's generates and sorts since the last read and its last camera", () => {
  const { views } = setup();
  const renderer = { frame: 0 };
  const world = new Scene();
  world.add(views.renderer(STAGE));
  const camera = new PerspectiveCamera();
  camera.position.set(1, 2, 3);
  views.aim(camera, STAGE);
  renderLike(renderer, world, camera);
  views.renderer(STAGE).finishSort();
  renderLike(renderer, world, camera);
  const [row] = views.stats();
  assert.equal(row.view, "stage");
  assert.equal(row.generates, 1);
  assert.equal(row.sorts, 1);
  assert.deepEqual(row.camera, { position: [1, 2, 3], direction: [0, 0, -1] });
  const [after] = views.stats();
  assert.equal(after.generates, 0);
  assert.equal(after.sorts, 0);
  views.renderer(CAMERA_PREVIEW_OWNER);
  assert.deepEqual(views.stats().map((each) => each.view), ["stage", CAMERA_PREVIEW_OWNER]);
});

test("a renderer disposed while it sorts makes no new sort worker when its read-back resolves", async () => {
  const spark = new FakeSpark(() => {});
  spark.sorting = true;
  disposeSpark(spark);
  assert.equal(spark.disposed, true);
  // What Spark 2.1 driveSort does after the read-back: make a worker when it has none, and sort on it.
  let made = 0;
  if (!spark.sortWorker) made += 1;
  assert.equal(made, 0);
  let settled = false;
  spark.sortWorker.call("sortSplats32", {}).then(() => { settled = true; }, () => { settled = true; });
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(settled, false);
  spark.sortWorker.dispose();
});

test("disposing the view and releasing a view leave no renderer that could make a sort worker", () => {
  const made = [];
  const views = createSparkViews({
    create: (onDirty) => {
      const spark = new FakeSpark(onDirty);
      made.push(spark);
      return spark;
    },
    cloneSplat: (loaded) => new FakeSplatMesh(loaded),
    onDirty: () => {},
    setTimeout: () => 0,
    clearTimeout: () => {},
  });
  views.renderer(STAGE).sorting = true;
  views.renderer(CAMERA_PREVIEW_OWNER);
  views.release(CAMERA_PREVIEW_OWNER);
  views.dispose();
  assert.equal(made.length, 2);
  assert.ok(made.every((spark) => spark.disposed && typeof spark.sortWorker?.call === "function"));
});

test("a released renderer whose sort never ends is disposed after about 5 seconds of polls", () => {
  const timers = [];
  const views = createSparkViews({
    create: (onDirty) => new FakeSpark(onDirty),
    cloneSplat: (loaded) => new FakeSplatMesh(loaded),
    onDirty: () => {},
    setTimeout: (callback, ms) => timers.push([callback, ms]),
    clearTimeout: () => {},
  });
  const preview = views.renderer(CAMERA_PREVIEW_OWNER);
  preview.sorting = true;
  views.release(CAMERA_PREVIEW_OWNER);
  let waited = 0;
  while (timers.length) {
    const [callback, ms] = timers.shift();
    waited += ms;
    assert.equal(preview.disposed, false);
    callback();
  }
  assert.equal(preview.disposed, true);
  assert.ok(waited >= 4000 && waited <= 6000, `waited ${waited} ms`);
  assert.equal(typeof preview.sortWorker.call, "function");
});

test("a Spark without the steps the diagnostics count reports its counts as not measured", () => {
  const views = createSparkViews({
    create: () => Object.assign(new Mesh(), { dispose() {} }),
    cloneSplat: (loaded) => new FakeSplatMesh(loaded),
    onDirty: () => {},
  });
  const spark = views.renderer(STAGE);
  assert.equal(spark.updateInternal, undefined);
  assert.equal(spark.driveSort, undefined);
  for (let read = 0; read < 2; read += 1) {
    const [row] = views.stats();
    assert.equal(row.generates, null);
    assert.equal(row.sorts, null);
  }
  views.dispose();
});
