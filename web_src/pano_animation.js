// A 3D file's glTF animation in the editor (ADR 0043, docs/render-contract.md "glTF のアニメーション"): which clip a
// state's `animation` plays, the seconds of a clip frame, and how many Timeline frames one cycle lasts. The clips are
// the meta's (`animation.clips`: [{ name, duration }] in the file's order); the poses themselves are three.js's
// (pano_scene_loaders.js). Free of three.js, so Node tests it.
import { ANIMATION_DEFAULT } from "./pano_scene_state.js";

// The index in `clips` of the clip `animation` plays: the one named so, else the first (null clip, or a name the file
// does not have). -1 without clips.
export function animationClipIndex(clips, animation) {
  if (!Array.isArray(clips) || !clips.length) return -1;
  const name = animation?.clip ?? null;
  const index = name === null ? -1 : clips.findIndex((clip) => clip?.name === name);
  return index >= 0 ? index : 0;
}

// Whether `animation` names a clip the file does not have (it plays the first; the editor says so).
export function animationClipMissing(clips, animation) {
  const name = animation?.clip ?? null;
  return name !== null && Array.isArray(clips) && clips.length > 0 && !clips.some((clip) => clip?.name === name);
}

// The Timeline frames one cycle of the clip lasts (its duration ÷ speed, rounded up to a frame at `fps`), or null
// without a clip of a positive duration.
export function animationCycleFrames(clips, animation, fps) {
  const index = animationClipIndex(clips, animation);
  const duration = index >= 0 ? Number(clips[index]?.duration) : NaN;
  if (!(duration > 0)) return null;
  const speed = animation?.speed ?? ANIMATION_DEFAULT.speed;
  return Math.ceil(duration / speed * fps);
}

// What the three.js view plays at a clip frame (the element's material time, `frame − (start − in)`): the clip's
// index, its speed and the seconds the mixer is set to (clip frame ÷ fps; the mixer's LoopRepeat with timeScale =
// speed repeats it). null without clips.
export function animationPose(clips, animation, clipFrame, fps) {
  const index = animationClipIndex(clips, animation);
  if (index < 0) return null;
  return { clip: index, speed: animation?.speed ?? ANIMATION_DEFAULT.speed, time: clipFrame / fps };
}

// The `animation` of a meta or of the file route's answer (docs/studio-node.md "glTF のアニメーションのエディタ用ファイル":
// { source: the original file's `ui` entry, clips: [{ name, duration }] }) as the editor keeps it: { src (the URL
// `source(entry)` gives), clips }, or null without a readable one.
export function animationMetaOf(raw, source) {
  if (!raw || typeof raw !== "object" || !raw.source || typeof raw.source !== "object" || !Array.isArray(raw.clips)) return null;
  const clips = raw.clips
    .filter((clip) => clip && typeof clip === "object" && typeof clip.name === "string" && Number.isFinite(Number(clip.duration)))
    .map((clip) => ({ name: clip.name, duration: Number(clip.duration) }));
  const src = source(raw.source);
  return src && clips.length === raw.clips.length && clips.length ? { src, clips } : null;
}
