// State v2 evaluation: normalized state and a Timeline frame -> values at that time.
// The contract is documented in docs/scene-state-v2.md. comfyui_pano_suite/core/scene_eval.py
// must return the same values within 1e-4.

function copyValue(value) {
  if (!value || typeof value !== "object") return value;
  const out = {};
  for (const [key, item] of Object.entries(value)) out[key] = Array.isArray(item) ? [...item] : item;
  return out;
}

// Fractional frames within this distance of a Keyframe or Clip range edge count as that frame, so a Cut
// lands on the output frame whose time (seconds x fps) misses the Keyframe only by float rounding.
export const FRAME_EPSILON = 1e-6;

function evaluateGroup(group, frame) {
  const keyframes = group.keyframes;
  if (!keyframes.length) return copyValue(group.value);
  if (frame <= keyframes[0].frame + FRAME_EPSILON) return copyValue(keyframes[0].value);
  const last = keyframes[keyframes.length - 1];
  if (frame >= last.frame - FRAME_EPSILON) return copyValue(last.value);
  let index = 0;
  while (keyframes[index + 1].frame <= frame + FRAME_EPSILON) index += 1;
  const left = keyframes[index];
  if (Math.abs(frame - left.frame) <= FRAME_EPSILON || left.easing === "hold") return copyValue(left.value);
  throw new Error(`Keyframe easing ${JSON.stringify(left.easing)} is not implemented yet.`);
}

function clipFrame(clip, frame) {
  return frame - (clip.start - clip.in);
}

function clipActive(clip, frame) {
  return frame >= clip.start - FRAME_EPSILON
    && (clip.duration === null || frame < clip.start + clip.duration - FRAME_EPSILON);
}

// Evaluates a state returned by loadSceneState at a fractional Timeline frame.
export function evaluateSceneState(state, frame) {
  const time = Number(frame);
  const { camera, scene } = state;
  const sceneClipFrame = clipFrame(scene.clip, time);
  return {
    frame: time,
    camera: { ...evaluateGroup(camera.transform, time), aspect: camera.aspect },
    scene: {
      active: clipActive(scene.clip, time),
      clip_frame: sceneClipFrame,
      ...evaluateGroup(scene.transform, sceneClipFrame),
    },
    stickers: state.stickers.map((sticker) => {
      const stickerClipFrame = clipFrame(sticker.clip, time);
      return {
        id: sticker.id,
        placement: sticker.placement,
        active: sticker.visible && clipActive(sticker.clip, time),
        clip_frame: stickerClipFrame,
        ...evaluateGroup(sticker.transform, stickerClipFrame),
        opacity: evaluateGroup(sticker.opacity, stickerClipFrame),
      };
    }),
  };
}
