// The two defaults of state v2 the new UI reads (docs/scene-state-v2.md `ground` and "既定の Camera"). They live in
// pano_scene_state.js; this module only passes them on, so the new UI has one place that names them.
import { GROUND_DEFAULT, defaultCamera, sceneGround } from "../pano_scene_state.js";

// The ground height a state without `ground` stands on (GROUND_DEFAULT), and a new working Camera with the default
// values (a state's `camera`, normalized).
export { GROUND_DEFAULT, defaultCamera };

// The Camera a state shows: its own (a loaded state always has one, ADR 0048), or a new default one.
export function cameraOf(state) {
  return state.camera ?? defaultCamera();
}

// The ground height a state stands on: its own `ground`, else GROUND_DEFAULT. An upstream layer's `ground` is not
// read here yet (sceneGround takes the upstream states).
export function groundOf(state) {
  return sceneGround(state);
}
