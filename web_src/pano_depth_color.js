// The colors of the depth grids (docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド"): each
// DA3_GEOMETRY mono input (the `scene`, a 3D Sticker, an upstream layer's) has its proxy MP4 follow the playhead
// (pano_video_playback.js createVideoFollower) at the time of the item drawn, i ÷ video_fps. The picture is the playing
// VIDEO while the playhead advances and its item is drawn, else the still the follower captured at the drawn item's
// time (an item drawn in place of the playhead's while it loads: shape and colors from one item); null until either is
// there, so a depth grid is not drawn without its colors. In the eager bundle; the three.js view makes the texture.
import { createVideoFollower } from "./pano_video_playback.js";

// createVideo() makes a <video>, createCanvas() a canvas for the still and releaseCanvas(canvas) lets it go;
// onChange() runs when a picture may have changed (draw again).
export function createDepthColors({ createVideo, createCanvas, releaseCanvas, onChange }) {
  // By slot (an input's name): { video, still, follower, frame }.
  const slots = new Map();

  function slotOf(name) {
    let entry = slots.get(name);
    if (entry) return entry;
    const video = createVideo();
    video.playsInline = true;
    video.preload = "auto";
    const still = createCanvas();
    entry = { video, still, frame: 0, follower: null };
    entry.follower = createVideoFollower({
      video,
      onCapture: () => {
        const width = Number(video.videoWidth || 0);
        const height = Number(video.videoHeight || 0);
        if (width < 1 || height < 1) return;
        still.width = width;
        still.height = height;
        still.getContext("2d")?.drawImage(video, 0, 0);
        entry.frame += 1;
        onChange();
      },
      onChange,
      // The item drawn in place of the playhead's can change every frame: its still shows each item sought that lands.
      captureEachSeek: true,
    });
    slots.set(name, entry);
    return entry;
  }

  function drop(name) {
    const entry = slots.get(name);
    slots.delete(name);
    entry.follower.dispose();
    releaseCanvas(entry.still);
  }

  return {
    // The colors of the depth grid of input `name` for `video` ({ src, fps, time, still }, withDepthColor's) while the
    // playhead advances or not: { media, revision, source, time (the time of the picture: `video.time` for the playing
    // VIDEO, the still's, NaN for the picture a pause left) }, or null while there is no picture yet. `still` rests the
    // VIDEO on `time` also while the playhead advances (an item drawn in place of the playhead's), so it seeks once per
    // item, not every frame. Without `video`, what input `name` shows now, without following anything (null for an
    // input without a video).
    picture(name, video, playing) {
      if (!video) {
        const entry = slots.get(name);
        const media = entry?.follower.picture(entry.still, null);
        return media ? pictureOf(entry, media, entry.follower.stillTime, entry.video.src) : null;
      }
      if (!video.src) return null;
      const entry = slotOf(name);
      entry.follower.follow({ src: video.src, time: video.time, playing: playing && !video.still, fps: video.fps });
      const media = entry.follower.picture(entry.still, null);
      return media ? pictureOf(entry, media, media === entry.still ? entry.follower.stillTime : video.time, video.src) : null;
    },
    // Lets the videos of the inputs not in `names` go.
    retain(names) {
      for (const name of [...slots.keys()]) if (!names.includes(name)) drop(name);
    },
    dispose() {
      for (const name of [...slots.keys()]) drop(name);
    },
  };
}

function pictureOf(entry, media, time, source) {
  return { media, revision: media === entry.still ? `still:${entry.frame}` : "video", source, time };
}

// The time on the proxy of the depth grid item `key` among `video.items` (all the input's item keys in item order, null
// for an empty item): i ÷ video_fps (docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド").
export function depthItemTime(video, key) {
  return video.items.indexOf(key) / video.fps;
}

// The item key whose time a picture at `time` shows, or null (NaN, or no item there).
function depthItemAt(video, time) {
  return Number.isFinite(time) ? video.items[Math.round(time * video.fps)] ?? null : null;
}

// `request` (sceneRequest's) with the colors of the depth grid input `slot` (an input's name: "scene", "sticker" or an
// upstream layer's slot), which keys its one color texture (pano_three_view.js createDepthColorTextures), and `slot`
// goes into `slots` (the inputs whose videos are kept, retain()). picture(slot, video) is the proxy's picture
// (createDepthColors picture()). While the input shows no picture yet, asking for it wakes the proxy resting on the
// playhead's item, so the video loads beside the grid's first item instead of after it (once there is a picture, only
// at() follows: a second follow per render would pause the playing video for a stand-in's still and play it again). `color` is null without a proxy, else { slot, ready (the
// input shows a picture now), at(key) }: at(key) asks for the picture at the time of the item `key` drawn (pano_scene_items.js pick), following the
// playhead for the playhead's item and resting on that item's still for an item drawn in its place, and gives
// { media, revision, source, slot, key (the item the picture shows, null when unknown) } or null while there is none.
// A request of another kind comes back as it is.
export function withDepthColor(request, slot, picture, slots) {
  if (request?.kind !== "depth_grid") return request;
  slots.push(slot);
  const { video } = request;
  if (!video) return { ...request, color: null };
  const at = (key) => {
    const shown = picture(slot, { src: video.src, fps: video.fps, time: depthItemTime(video, key), still: key !== request.url });
    if (!shown) return null;
    const { media, revision, source, time } = shown;
    return { media, revision, source, slot, key: depthItemAt(video, time) };
  };
  const shown = picture(slot, null)
    ?? (request.url ? picture(slot, { src: video.src, fps: video.fps, time: depthItemTime(video, request.url), still: true }) : null);
  return { ...request, color: { slot, ready: !!shown, at } };
}

// The stage's line while a depth grid waits for its colors (docs/agents/ux-principles.md: say what it waits for).
export const DEPTH_VIDEO_LOADING = "Loading depth video…";

// The stage's line for the depth grids shown (requests as sceneRequest makes them, with `color` (withDepthColor);
// errorOf(key) is why an item failed to load, loaded(key) whether it loaded): a grid too large for the GPU's textures says
// so, else one with an item loaded whose input shows no picture yet says DEPTH_VIDEO_LOADING (the video is what it waits
// for; before an item loaded, it waits for the grid), else nothing.
export function depthGridNotice(requests, errorOf, loaded = () => true) {
  const grids = requests.filter((request) => request?.kind === "depth_grid" && request.url);
  const tooLarge = grids.map((request) => errorOf(request.url)).find((error) => /MAX_TEXTURE_SIZE/.test(error ?? ""));
  if (tooLarge) return tooLarge;
  const awaitsVideo = (request) => !request.color?.ready && (request.urls ?? [request.url]).some((key) => key && loaded(key));
  return grids.some(awaitsVideo) ? DEPTH_VIDEO_LOADING : "";
}
