// On-node view. The Preview nodes and the on-node Stickers and Cutout surfaces on the graph draw
// through one shared three.js view, so they hold one WebGL context between them instead of one each;
// each node copies the rendered frame into its own canvas right away. The view loads with the first
// frame a node draws and is released with the last node.
import { viewportCamera } from "./pano_editor_view.js";
import { createPanoCanvas, watchThreeView } from "./pano_diagnostics.js";

// Shown on a node in place of its frame when the three.js view cannot load.
export const VIEW_UNAVAILABLE_MESSAGE = "3D view unavailable. Check the browser console.";

// The camera of a Preview node's { yaw, pitch, fov }; fov spans the view width like the previous
// renderer's panorama view.
export function previewNodeCamera(view, width, height) {
  return viewportCamera({ yaw_deg: view.yaw, pitch_deg: view.pitch, roll_deg: 0, hFOV_deg: view.fov }, width, height);
}

// load({ onUpdate, onSplats }) resolves to a view with render(input), renderLiveErp(input), release(owner), releaseWorld(owner) and
// dispose(), made with those hooks (pano_three_view.js createThreeView, each node drawing a World of its own: ownWorlds). Returns acquire(onChange, { items }), which hands out a handle per node;
// onChange runs when the view becomes ready or fails to load. A node that draws 3D items (`items`, the Preview's
// Scene viewer) is also told when an item the view loads is ready and when its own splats are sorted again; the
// other nodes are not. A failed load is tried again once every node has gone and a node draws again.
export function createSharedView(load) {
  let view = null;
  let loading = false;
  let failed = false;
  const users = new Set();
  const hooks = {
    onUpdate: () => users.forEach((user) => {
      if (user.items) user.onChange();
    }),
    onSplats: (owner) => {
      if (users.has(owner) && owner.items) owner.onChange();
    },
  };

  function ensureView() {
    if (view || loading || failed) return;
    loading = true;
    load(hooks).then((created) => {
      loading = false;
      if (!users.size) {
        created.dispose();
        return;
      }
      view = created;
      users.forEach((user) => user.onChange());
    }).catch((error) => {
      loading = false;
      if (!users.size) return;
      failed = true;
      console.error("[PanoramaStickers] three.js view is unavailable", error);
      users.forEach((user) => user.onChange());
    });
  }

  return function acquire(onChange, { items = false } = {}) {
    const user = { onChange, items };
    let disposed = false;
    users.add(user);
    return {
      get failed() {
        return failed;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(input) {
        if (disposed) return null;
        ensureView();
        return view ? view.render({ ...input, owner: user }) : null;
      },
      // Draws the live ERP (pano_three_view.js renderLiveErp) for this node on input.canvas; null until the view has
      // loaded. Releasing the node's textures releases it too (Panorama Studio's surface, docs/studio-node-surface.md).
      renderLiveErp(input) {
        if (disposed) return null;
        ensureView();
        return view ? view.renderLiveErp({ ...input, owner: user }) : null;
      },
      // The World under a point of the last space render (pano_three_view.js pickSurface), the box and the load
      // error of a 3D item, and the count that changes with what is hit: the Preview's viewer of a Scene moves its
      // view by them (pano_scene_viewer.js). Its draw is the space render they read while it is the one that draws.
      pickSurface(camera, x, y, width, height) {
        return view ? view.pickSurface(camera, x, y, width, height) : null;
      },
      sceneBox(url) {
        return view ? view.sceneBox(url, user) : null;
      },
      sceneItemError(url) {
        return view ? view.sceneItemError(url, user) : null;
      },
      contentRevision() {
        return view ? view.contentRevision() : 0;
      },
      // Frees this node's textures when it has no media to show.
      release() {
        view?.release(user);
      },
      // Frees the loaded 3D items of this node's World while it is out of sight or under its editor
      // (docs/studio-node-surface.md "見えないときとエディタを開いている間"); its next render loads them again.
      releaseWorld() {
        view?.releaseWorld(user);
      },
      dispose() {
        if (disposed) return;
        disposed = true;
        users.delete(user);
        view?.release(user);
        view?.releaseWorld(user);
        if (users.size) return;
        failed = false;
        view?.dispose();
        view = null;
      },
    };
  };
}

export const acquirePreviewView = createSharedView(
  ({ onUpdate, onSplats }) => import("./pano_three_view.js").then((module) => (
    watchThreeView(module.createThreeView({ onUpdate, onSplats, ownWorlds: true, createCanvas: () => createPanoCanvas({ label: "three.node" }) }), "node")
  )),
);
