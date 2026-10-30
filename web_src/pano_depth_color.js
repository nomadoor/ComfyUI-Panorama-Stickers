// The colors of the depth grids (docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド"): each
// DA3_GEOMETRY mono input (the `scene`, a 3D Sticker, an upstream layer's) has its proxy MP4 follow the playhead
// (pano_video_playback.js createVideoFollower), the item's time being i ÷ video_fps. The picture is the playing VIDEO
// while the playhead advances, else the still the follower captured at the item's time; null until either is there,
// so a depth grid is not drawn without its colors. In the eager bundle; the three.js view makes the texture.
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
    // The colors of the depth grid of input `name` for `video` ({ src, fps, time }, sceneRequest's) while the
    // playhead advances or not: { media, revision, source }, or null while there is no picture yet.
    picture(name, video, playing) {
      if (!video?.src) return null;
      const entry = slotOf(name);
      entry.follower.follow({ src: video.src, time: video.time, playing, fps: video.fps });
      const media = entry.follower.picture(entry.still, null);
      if (!media) return null;
      return { media, revision: media === entry.still ? `still:${entry.frame}` : "video", source: video.src };
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

// `request` (sceneRequest's) with the colors of the depth grid input `slot` (an input's name: "scene", "sticker" or an
// upstream layer's slot), which keys its one color texture (pano_three_view.js createDepthColorTextures):
// picture(slot, video) is the proxy's picture (createDepthColors picture()) or null while it has none, and `slot` goes
// into `slots` (the inputs whose videos are kept, retain()). A request of another kind comes back as it is.
export function withDepthColor(request, slot, picture, slots) {
  if (request?.kind !== "depth_grid") return request;
  slots.push(slot);
  const color = picture(slot, request.video);
  return { ...request, color: color && { ...color, slot } };
}

// The stage's line while a depth grid waits for its colors (docs/agents/ux-principles.md: say what it waits for).
export const DEPTH_VIDEO_LOADING = "Loading depth video…";

// The stage's line for the depth grids shown (requests as sceneRequest makes them, with `color`; errorOf(key) is
// why an item failed to load): a grid too large for the GPU's textures says so, else one shown without its colors
// says DEPTH_VIDEO_LOADING, else nothing.
export function depthGridNotice(requests, errorOf) {
  const grids = requests.filter((request) => request?.kind === "depth_grid" && request.url);
  const tooLarge = grids.map((request) => errorOf(request.url)).find((error) => /MAX_TEXTURE_SIZE/.test(error ?? ""));
  if (tooLarge) return tooLarge;
  return grids.some((request) => !request.color) ? DEPTH_VIDEO_LOADING : "";
}
