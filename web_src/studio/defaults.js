// The two defaults of state v2 the new UI reads (docs/scene-state-v2.md `ground` and "既定の Camera"). They live in
// pano_scene_state.js; this module only passes them on, so the new UI has one place that names them.
import { GROUND_DEFAULT, defaultCamera, sceneGround } from "../pano_scene_state.js";

// The ground height a state without `ground` stands on (GROUND_DEFAULT), and a new working Camera with the default
// values (a state's `camera`, normalized).
export { GROUND_DEFAULT, defaultCamera };

// The ground height a state stands on (docs/scene-state-v2.md `ground`): its own `ground`, else that of the most
// downstream upstream layer that has one, else GROUND_DEFAULT. `upstream` is the upstream Scene's working layers
// (pano_upstream.js upstreamWorkingLayers, from the farthest upstream), none without an upstream Scene.
export function groundOf(state, upstream = []) {
  return sceneGround(state, upstream.map((layer) => layer.sceneState));
}
