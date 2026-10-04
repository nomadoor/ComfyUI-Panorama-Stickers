// The Spark renderers of a three.js view (pano_three_view.js), one per view that draws SPLATs. In the three.js
// chunk; it imports nothing.
//
// A SparkRenderer sorts the splats for the camera it last drew with. When it draws with a camera that moved,
// it generates every splat again, reads their depths back and sorts them (Spark 2.1 updateInternal and
// driveSort), and its onDirty asks for the next frame. A SplatMesh with spherical harmonics (most 3DGS PLYs)
// also counts as changed whenever the camera of its update differs from the one before (its colors depend on
// the view direction), so every renderer that gathers it generates again. One renderer and one SplatMesh drawn
// by two cameras in a frame (the stage and the camera preview) did all of that on every frame for the other
// camera, drew the splats in the order of the other camera, and never let the editor go idle.
//
// So a SparkRenderer and a SplatMesh only ever see one camera in a frame:
// - Each view (an owner of the three.js view: the stage, the camera preview) draws its SPLATs through a
//   SparkRenderer of its own, on a three.js layer of its own (1 to 31).
// - Each view draws a loaded SPLAT through a SplatMesh of its own that shares the loaded one's splats
//   (splat()), on the view's layer, as the loaded one's child so it has its transform. The loaded SplatMesh is
//   on no layer, so no renderer gathers it.
// - The camera a view draws the World with sees layer 0, where the rest of the World stays, and its own
//   layer, none other (aim()). three.js draws, and so Spark updates, only that view's renderer, and Spark
//   gathers only that view's SplatMeshes (its prepareGenerate tests camera.layers).
// - A view draws once a frame. The Frame view draws on the stage with the shot's camera while the stage's
//   own camera does not draw, so it uses the stage's renderer.
// - onDirty(owner) asks for that view only. With its camera where it was, the renderer has nothing more to
//   generate or sort, and the frames stop.

// Polls, in ms, of a released renderer that is still sorting.
const RETIRE_POLL_MS = 100;
const LAYERS = 32;

// create(onDirty) makes a SparkRenderer that calls onDirty; onDirty(owner) runs when the renderer of
// owner's view has new splats or a new order to draw. cloneSplat(splat) makes a SplatMesh that draws the
// splats of `splat` (a loaded SplatMesh) without copying them.
export function createSparkViews({ create, cloneSplat, onDirty, setTimeout = globalThis.setTimeout, clearTimeout = globalThis.clearTimeout }) {
  // By owner: { owner, spark, layer, meshes (loaded SplatMesh -> the view's), retired, generates, sorts,
  // camera }.
  const views = new Map();
  // Released renderers waiting for their sort to end, by entry: the timer.
  const retiring = new Map();

  function freeLayer() {
    const used = new Set([...views.values()].map((entry) => entry.layer));
    for (let layer = 1; layer < LAYERS; layer += 1) {
      if (!used.has(layer)) return layer;
    }
    throw new Error("[PanoramaStickers] no three.js layer is left for a Spark renderer");
  }

  // Counts for the diagnostics, from Spark 2.1's own steps: updateInternal generates the splats when it makes
  // another accumulator current, and driveSort starts a sort when it stamps lastSortTime. Both do that before
  // their first await.
  function count(entry) {
    const { spark } = entry;
    const update = spark.updateInternal;
    spark.updateInternal = (options) => {
      const current = spark.current;
      const done = update.call(spark, options);
      if (spark.current !== current) entry.generates += 1;
      entry.camera = cameraPose(options.camera);
      return done;
    };
    const sort = spark.driveSort;
    spark.driveSort = () => {
      const last = spark.lastSortTime;
      const done = sort.call(spark);
      if (spark.lastSortTime !== last) entry.sorts += 1;
      return done;
    };
  }

  function view(owner) {
    let entry = views.get(owner);
    if (entry) return entry;
    entry = { owner, layer: freeLayer(), meshes: new Map(), retired: false, generates: 0, sorts: 0, camera: null };
    entry.spark = create(() => {
      if (!entry.retired) onDirty(owner);
    });
    entry.spark.layers.set(entry.layer);
    count(entry);
    views.set(owner, entry);
    return entry;
  }

  // The renderer of owner's view, made the first time it is asked for.
  function renderer(owner) {
    return view(owner).spark;
  }

  // The SplatMesh owner's view draws `loaded` (a loaded SplatMesh in the World) with, made the first time,
  // with loaded's opacity.
  function splat(owner, loaded) {
    const entry = view(owner);
    let mesh = entry.meshes.get(loaded);
    if (!mesh) {
      mesh = cloneSplat(loaded);
      mesh.layers.set(entry.layer);
      loaded.layers.disableAll();
      loaded.add(mesh);
      entry.meshes.set(loaded, mesh);
    }
    mesh.opacity = loaded.opacity;
    return mesh;
  }

  // Sets camera to draw owner's view: it sees the World (layer 0) and the view's own layer, none other.
  function aim(camera, owner) {
    camera.layers.set(0);
    const entry = views.get(owner);
    if (entry) camera.layers.enable(entry.layer);
  }

  // The view's SplatMeshes go. They share the loaded splats, so they are not disposed.
  function dropMeshes(entry) {
    entry.meshes.forEach((mesh) => mesh.removeFromParent());
    entry.meshes.clear();
  }

  // A renderer disposed while it sorts makes a new sort worker when its read-back resolves, and that worker
  // is never terminated: it is disposed once its sort has ended.
  function retire(entry) {
    entry.retired = true;
    retiring.delete(entry);
    if (entry.spark.sorting) {
      retiring.set(entry, setTimeout(() => retire(entry), RETIRE_POLL_MS));
      return;
    }
    entry.spark.dispose();
  }

  // owner's view stops drawing SPLATs (the camera preview hides): its renderer and what it holds go.
  function release(owner) {
    const entry = views.get(owner);
    if (!entry) return;
    views.delete(owner);
    dropMeshes(entry);
    retire(entry);
  }

  // A loaded SplatMesh is disposed: the views' SplatMeshes of it go.
  function forget(loaded) {
    views.forEach((entry) => {
      entry.meshes.get(loaded)?.removeFromParent();
      entry.meshes.delete(loaded);
    });
  }

  // Frees every renderer now, with the WebGL context they draw on.
  function dispose() {
    retiring.forEach((timer, entry) => {
      clearTimeout(timer);
      entry.spark.dispose();
    });
    retiring.clear();
    views.forEach((entry) => {
      entry.retired = true;
      dropMeshes(entry);
      entry.spark.dispose();
    });
    views.clear();
  }

  // Per renderer, for the diagnostics: its view ("stage" for the owner undefined), its layer, the generates
  // and sorts since the last stats() (the diagnostics read it once a second), and the camera it last
  // updated for.
  function stats() {
    return [...views.values()].map((entry) => {
      const row = {
        view: entry.owner === undefined ? "stage" : typeof entry.owner === "string" ? entry.owner : "node",
        layer: entry.layer,
        generates: entry.generates,
        sorts: entry.sorts,
        camera: entry.camera,
      };
      entry.generates = 0;
      entry.sorts = 0;
      return row;
    });
  }

  return { renderer, splat, aim, release, forget, dispose, stats };
}

// To 3 decimals, without a -0.
function round(value) {
  return Math.round(value * 1000) / 1000 + 0;
}

// A camera's World position and forward direction (its -Z), from its world matrix.
function cameraPose(camera) {
  const e = camera.matrixWorld.elements;
  const length = Math.hypot(e[8], e[9], e[10]) || 1;
  return {
    position: [e[12], e[13], e[14]].map(round),
    direction: [-e[8] / length, -e[9] / length, -e[10] / length].map(round),
  };
}
