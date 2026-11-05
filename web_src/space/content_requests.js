// What the space view asks pano_three_view.js to draw of the World content (docs/threejs-spark-integration.md "空間の表示",
// "`scene` の要素の読み込み", "`DA3_GEOMETRY` mono の深度のグリッド"): the `scene` input's editor files, the requests of the
// `scene` item, the `sticker` input's 3D media and the 3D file Stickers, their animation clips, and the `scene` transform.
import { animationMetaOf, animationPose } from "../pano_animation.js";
import { is3dFileSource } from "../pano_scene_state.js";
import { rotationToQuaternion, worldRotation } from "../pano_world.js";

// An SPLAT is in 3DGS coordinates (Y down, Z forward); the `scene` glTF frame turns it 180 degrees about
// X, as core's Load3D does with quaternion.set(1, 0, 0, 0) (docs/render-contract.md).
export const SPLAT_TO_SCENE = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });

// The key of an item made of several views (a DA3_GEOMETRY multiview element): its views' URLs, in order.
export function multiviewKey(urls) {
  return `views:${JSON.stringify(urls)}`;
}

// The `scene` input's editor files in a node result (`pano_scene_files` and `pano_scene_meta`,
// docs/studio-node.md): the kind the editor loads, whether its meshes draw without light (`unlit`; only a mesh
// marked false is lit, so a result without the mark draws as before), a key per item (its URL, by
// source(entry); null for an empty item), and `sources`, where the item of several views (an element whose value
// is a list of files, DA3_GEOMETRY multiview) loads from: its key (multiviewKey) -> its views' URLs. null when the
// result has none.
export function sceneFilesOf(files, meta, source) {
  const kind = meta[0]?.kind;
  if (kind === "depth_grid") return depthGridFilesOf(files, meta[0], source);
  if (!files.length || (kind !== "splat" && kind !== "mesh")) return null;
  const sources = {};
  const urls = files.map((entry) => {
    if (!Array.isArray(entry)) return entry ? source(entry) : null;
    const views = entry.filter(Boolean).map(source);
    if (!views.length) return null;
    const key = multiviewKey(views);
    sources[key] = views;
    return key;
  });
  // An animated 3D file (ADR 0043) is one item: its original file and its clips.
  const animation = kind === "mesh" && urls.length === 1 ? animationMetaOf(meta[0].animation, source) : null;
  return { kind, unlit: kind !== "mesh" || meta[0].unlit !== false, urls, sources, ...(animation ? { animation } : {}) };
}

// The items of a depth grid a request loads ahead: the next ones, as the item is small and playback must keep up
// (docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド"), within the budget's aheadFits.
export const DEPTH_GRID_PREFETCH = 8;

const positiveInteger = (value) => Number.isInteger(value) && value > 0;

// sceneFilesOf of a DA3_GEOMETRY mono result (kind `depth_grid`, docs/studio-node.md "DA3_GEOMETRY mono のエディタ用
// ファイル"): a key per item (the URL of its depth file, null for an empty item), `sources` with what each loads with
// ({ url, width, height, depth (the file's form), intrinsics (its own K, 9 numbers by rows) }), and `video`, the color
// proxy ({ src, fps }). null for a meta without its grid's form.
function depthGridFilesOf(files, meta, source) {
  const { width, height, depth, intrinsics } = meta;
  if (!files.length || !positiveInteger(width) || !positiveInteger(height) || !depth || typeof depth !== "object") return null;
  if (!Array.isArray(intrinsics) || intrinsics.length !== files.length) return null;
  const sources = {};
  const urls = files.map((entry, index) => {
    const url = entry && !Array.isArray(entry) ? source(entry) : null;
    if (url) sources[url] = { url, width, height, depth, intrinsics: intrinsics[index] };
    return url || null;
  });
  const video = meta.video ? source(meta.video) : null;
  const fps = Number(meta.video_fps);
  return { kind: "depth_grid", unlit: true, urls, sources, video: video && fps > 0 ? { src: video, fps } : null };
}

// What the space view asks pano_three_view.js to draw of the `scene` input at an evaluated state: the
// item the node draws at this frame (sceneItemIndex) with the next one to load ahead, or null outside the
// `scene` Clip range. url is null at a frame without an item (outside the batch, or an empty item).
export function sceneRequest(files, evaluatedScene, animation = undefined, fps = 24) {
  if (!files || !evaluatedScene.active) return null;
  const index = sceneItemIndex(evaluatedScene.clip_frame, files.urls.length);
  const depthGrid = files.kind === "depth_grid";
  // The next item of a batch (a MoGe VIDEO) loads ahead for playback; DEPTH_GRID_PREFETCH of a depth grid.
  const ahead = index === null ? [] : files.urls.slice(index + 1, index + 1 + (depthGrid ? DEPTH_GRID_PREFETCH : 1));
  return {
    kind: files.kind,
    url: index === null ? null : files.urls[index],
    urls: files.urls.filter(Boolean),
    prefetch: ahead.filter(Boolean),
    // A depth grid's colors: its proxy MP4 with the input's item keys, at the time of the item drawn (pano_depth_color.js
    // withDepthColor, depthItemTime).
    video: depthGrid && files.video && index !== null ? { ...files.video, items: files.urls } : null,
    transform: sceneTransform(evaluatedScene),
    itemQuaternion: files.kind === "splat" ? SPLAT_TO_SCENE : { x: 0, y: 0, z: 0, w: 1 },
    unlit: files.unlit !== false,
    // Where an item of several views loads from (sceneFilesOf).
    sources: files.sources ?? {},
    // An animated 3D file (ADR 0043): where its original loads from and the pose at the clip frame.
    ...animationRequest(files.animation, animation, evaluatedScene.clip_frame, fps),
  };
}

// The `animation` of a request for an animated 3D file (files.animation: { src, clips }, sceneFilesOf or the file
// route's answer) whose state's animation is `animation`, at its clip frame: { src, clips, clip (the index the
// mixer plays), speed, time }. Nothing for a file without one.
function animationRequest(fileAnimation, animation, clipFrame, fps) {
  if (!fileAnimation) return {};
  const pose = animationPose(fileAnimation.clips, animation, clipFrame, fps);
  return pose ? { animation: { src: fileAnimation.src, ...(fileAnimation.box ? { box: fileAnimation.box } : {}), ...pose } } : {};
}

// The clips of the animated 3D files of a state, as autoTimelineLength counts them (`animations`): the `scene`
// input's (sceneFiles), the port Sticker's 3D media (stickerFiles) and each 3D file Sticker's (editorFile(sticker),
// its editor file), by Sticker id.
export function stateAnimationClips(sceneState, { sceneFiles = null, stickerFiles = null, editorFile = () => null } = {}) {
  const stickers = {};
  for (const sticker of sceneState.stickers) {
    const clips = stickerAnimationClips(sticker, { stickerFiles, editorFile });
    if (clips) stickers[sticker.id] = clips;
  }
  return { scene: sceneFiles?.animation?.clips ?? null, stickers };
}

// The clips of a Sticker's animated 3D file (the port Sticker's from stickerFiles, a 3D file Sticker's from its editor
// file), or null when it has none.
export function stickerAnimationClips(sticker, { stickerFiles = null, editorFile = () => null } = {}) {
  const files = sticker.source.kind === "port" ? stickerFiles : is3dFileSource(sticker.source) ? editorFile(sticker) : null;
  return files?.animation?.clips ?? null;
}

// What the space view asks pano_three_view.js to draw of the `sticker` input's 3D media (its editor files
// in the node result, sceneFilesOf of `pano_sticker_files`), as sceneRequest() does for `scene`: the item
// of the port Sticker's batch at its clip frame, with the Sticker's evaluated transform and opacity. null
// without files or a world port Sticker, or where the Sticker is not active.
export function stickerContentRequest(files, sceneState, evaluated) {
  const index = sceneState.stickers.findIndex((sticker) => sticker.source.kind === "port");
  const sticker = sceneState.stickers[index];
  if (!files || sticker?.placement !== "world") return null;
  const value = evaluated.stickers[index];
  const request = sceneRequest(files, value, sticker.animation, sceneState.timeline.fps);
  return request && { ...request, id: sticker.id, opacity: value.opacity, value };
}

// The item URLs of the `sticker` input's 3D media the space view keeps loaded: none while the state has no
// world port Sticker, so its loaded items are freed.
export function stickerContentUrls(files, sceneState) {
  const port = sceneState.stickers.find((sticker) => sticker.source.kind === "port");
  return files && port?.placement === "world" ? files.urls.filter(Boolean) : [];
}

// The key a 3D file Sticker's item loads under (docs/threejs-spark-integration.md): the Sticker's id, not the
// URL, so two Stickers of one file load apart, with the generation of its editor file, so the file asked for
// again (it was gone) loads anew.
export function fileStickerKey(id, generation) {
  return `file3d:${generation}:${id}`;
}

// What the space view asks pano_three_view.js to draw of the world Stickers whose Source is a 3D file: per
// Sticker whose editor file is there (editorFile(sticker): { kind, unlit, url, generation }, null while it is
// asked for or when it could not be read), its item's key (fileStickerKey) and a request as
// stickerContentRequest() makes one, the item keyed by that key and fetched from `src`; the request is null
// where the Sticker is not active (outside its Clip range, hidden), which keeps its item loaded.
export function fileStickerRequests(sceneState, evaluated, editorFile) {
  const entries = [];
  sceneState.stickers.forEach((sticker, index) => {
    if (sticker.placement !== "world" || !is3dFileSource(sticker.source)) return;
    const file = editorFile(sticker);
    if (!file) return;
    const key = fileStickerKey(sticker.id, file.generation);
    const value = evaluated.stickers[index];
    const request = value.active ? {
      kind: file.kind,
      unlit: file.unlit !== false,
      url: key,
      urls: [key],
      prefetch: [],
      src: file.url,
      transform: sceneTransform(value),
      itemQuaternion: file.kind === "splat" ? SPLAT_TO_SCENE : { x: 0, y: 0, z: 0, w: 1 },
      id: sticker.id,
      opacity: value.opacity,
      value,
      ...animationRequest(file.animation, sticker.animation, value.clip_frame, sceneState.timeline.fps),
    } : null;
    entries.push({ id: sticker.id, key, request });
  });
  return entries;
}

// The item of the `scene` input's `count` items shown at its clip frame: the nearest one, as the
// node picks it (sticker_media.py batch_index; the editor's Timeline fps is the state's). A single item
// shows throughout; null outside the batch.
export function sceneItemIndex(clipFrame, count) {
  if (count === 1) return 0;
  const index = Math.floor(clipFrame + 0.5);
  return index >= 0 && index < count ? index : null;
}

// The `scene` transform of an evaluated `scene`: an item's point x lands at
// position + scale * worldRotation(yaw, pitch, roll) x.
export function sceneTransform(scene) {
  return {
    position: [...scene.position],
    quaternion: rotationToQuaternion(worldRotation(scene.yaw_deg, scene.pitch_deg, scene.roll_deg)),
    scale: scene.scale,
  };
}
