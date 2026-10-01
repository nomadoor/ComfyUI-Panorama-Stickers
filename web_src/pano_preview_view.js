// On-node view. The Preview nodes and the on-node Stickers and Cutout surfaces on the graph draw
// through one shared three.js view, so they hold one WebGL context between them instead of one each;
// each node copies the rendered frame into its own canvas right away. The view loads with the first
// frame a node draws and is released with the last node.
import { viewportCamera } from "./pano_editor_view.js";

// Shown on a node in place of its frame when the three.js view cannot load.
export const VIEW_UNAVAILABLE_MESSAGE = "3D view unavailable. Check the browser console.";

// The camera of a Preview node's { yaw, pitch, fov }; fov spans the view width like the previous
// renderer's panorama view.
export function previewNodeCamera(view, width, height) {
  return viewportCamera({ yaw_deg: view.yaw, pitch_deg: view.pitch, roll_deg: 0, hFOV_deg: view.fov }, width, height);
}

// load() resolves to a view with render(input), release(owner) and dispose(). Returns acquire(onChange),
// which hands out a handle per node; onChange runs when the view becomes ready or fails to load.
// A failed load is tried again once every node has gone and a node draws again.
export function createSharedView(load) {
  let view = null;
  let loading = false;
  let failed = false;
  const users = new Set();

  function ensureView() {
    if (view || loading || failed) return;
    loading = true;
    load().then((created) => {
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

  return function acquire(onChange) {
    const user = { onChange };
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
      // Frees this node's textures when it has no media to show.
      release() {
        view?.release(user);
      },
      dispose() {
        if (disposed) return;
        disposed = true;
        users.delete(user);
        view?.release(user);
        if (users.size) return;
        failed = false;
        view?.dispose();
        view = null;
      },
    };
  };
}

export const acquirePreviewView = createSharedView(
  () => import("./pano_three_view.js").then((module) => module.createThreeView()),
);
