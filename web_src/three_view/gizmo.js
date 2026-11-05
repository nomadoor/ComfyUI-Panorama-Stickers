// The gizmo of the three.js view (pano_three_view.js createThreeView): moving, turning and scaling the selected world
// Sticker with three.js TransformControls. Part of the three.js chunk (pano_three_view.js).
import { Object3D } from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import { sameValue } from "./values.js";

// The gizmo of the selected world Sticker: three.js TransformControls seen from camera, on a
// stand-in object. The editor feeds it the pointer and writes what it moved back to the state, which the
// next render draws. It is not hooked to DOM events.
export function createGizmo(camera) {
  const controls = new TransformControls(camera);
  const target = new Object3D();
  controls.attach(target);
  let shown = false;
  let colors = null;
  return {
    // Shows it at { mode ("translate", "rotate" or "scale"), transform ({ position, quaternion, scale }, as
    // pano_space.js sceneTransform() gives it), colors? }, and returns the objects to add to the World. It draws
    // over the World (its materials do not test depth). While a handle is dragged the stand-in keeps
    // where the drag took it, so it follows the pointer even when the Sticker's value is taken at another
    // frame. `colors` ({ x, y, z, active }, CSS colors; the new UI's) paints the axes and the handle under the
    // pointer; without it the gizmo keeps TransformControls' colors.
    show({ mode, transform, colors: wanted = null }) {
      shown = true;
      if (wanted && !sameValue(wanted, colors)) {
        colors = { ...wanted };
        controls.setColors(colors.x, colors.y, colors.z, colors.active);
      }
      if (!controls.dragging) {
        controls.mode = mode;
        target.position.set(...transform.position);
        target.quaternion.set(transform.quaternion.x, transform.quaternion.y, transform.quaternion.z, transform.quaternion.w);
        target.scale.setScalar(transform.scale);
      }
      return [target, controls.getHelper()];
    },
    // Not shown in this frame: a drag in progress ends, so the gizmo can be grabbed when it shows again.
    hide() {
      shown = false;
      if (controls.dragging) controls.pointerUp(null);
    },
    // The pointer at (x, y) in normalized device coordinates, with the camera where the frame was drawn
    // from. phase "hover" finds the handle under it and returns its axis (null over none), "down" grabs
    // that handle and returns whether it did, "move" drags it and returns the stand-in's transform
    // ({ position, quaternion, scale: [x, y, z] }) or null when nothing is grabbed, and "up" lets go,
    // shown or not. While it is not shown the other phases return null.
    pointer(phase, x, y) {
      if (phase === "up") {
        controls.pointerUp({ x, y, button: 0 });
        return null;
      }
      if (!shown) return null;
      controls.getHelper().updateMatrixWorld(true);
      if (phase === "hover") {
        controls.pointerHover({ x, y, button: -1 });
        return controls.axis;
      }
      if (phase === "down") {
        controls.pointerDown({ x, y, button: 0 });
        return controls.dragging;
      }
      if (!controls.dragging) return null;
      controls.pointerMove({ x, y, button: -1 });
      return {
        position: target.position.toArray(),
        quaternion: { x: target.quaternion.x, y: target.quaternion.y, z: target.quaternion.z, w: target.quaternion.w },
        scale: target.scale.toArray(),
      };
    },
    // TransformControls.dispose() would unhook pointer listeners it never had (no DOM element here).
    dispose() {
      controls.getHelper().dispose();
    },
  };
}
