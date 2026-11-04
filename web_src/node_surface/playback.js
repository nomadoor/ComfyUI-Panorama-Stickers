// Playback on the node: Panorama Studio's Timeline (its background VIDEO, the port Sticker's media, the Camera's Keyframes)
// while the surface is shown, what that playback follows, and the legacy Stickers node's looping background VIDEO.
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "../pano_diagnostics.js";
import { mediaPlayheadRevisionToken as getRenderableMediaRevisionToken } from "../pano_media_session.js";
import { createNodePlayback, createSoloPlayback, surfaceShown } from "../pano_node_playback.js";
import { createDepthColors } from "../pano_depth_color.js";
import { portMediaMeta } from "../pano_port_media.js";
import { backgroundLength, backgroundVideoCandidates } from "../pano_background_choice.js";
import { createStudioUpstream } from "../studio/upstream.js";
import { stateAnimationClips } from "../pano_space.js";
import { file3dEditorFileOf } from "../pano_file_3d.js";
import {
  BACKGROUND_INPUT_NAMES,
  isNodeOutputMediaCurrent,
  linkedInputType,
  resolvePreviewVideoSource,
  videoLinked,
} from "../pano_preview_video.js";
import { editorOpen, nodeSurface } from "../pano_node_bridge.js";
import {
  comfy,
  imageSourceFromCandidate,
  linkedVideoFile,
  lookupNodeOutputEntry,
  mediaAssetSource,
  mediaSource,
  ownOutputUiList,
  ownOutputUiValue,
} from "./media.js";
import { getCachedState, surfaceSceneState } from "./state.js";
import { surfaceBackgroundChoice } from "./studio_picture.js";

// Only one Panorama Studio node plays on its surface at a time (docs/studio-node-surface.md "再生のボタン").
const studioSurfacePlayback = createSoloPlayback();
const NODE_STILL_MAX_WIDTH = 2048;

// Panorama Studio's background VIDEO, best first (backgroundVideoCandidates of `choice`, surfaceBackgroundChoice's): the
// node's current result, else the file LoadVideo loads into the background input.
function backgroundVideoSources(node, choice) {
  const { own, file } = backgroundVideoCandidates(choice, {
    uiList: (key) => ownOutputUiList(node, key),
    current: (channel) => isNodeOutputMediaCurrent(node, channel),
    sourceOf: (key) => resolvePreviewVideoSource(lookupNodeOutputEntry(node.id), [key], imageSourceFromCandidate),
    linkedVideoFile: (inputs) => linkedVideoFile(node, inputs),
  });
  return [own, file];
}

// The port Sticker's MP4 ({ src, meta }) or the PNGs of an RGBA IMAGE batch ({ frames, meta }) in the
// node's current result, or null.
function portStickerMedia(node) {
  if (!isNodeOutputMediaCurrent(node, "external-sticker")) return null;
  const output = lookupNodeOutputEntry(node.id);
  const meta = ownOutputUiValue(node, "pano_sticker_input_video_meta");
  if (!meta || typeof meta !== "object") return null;
  const frames = output?.ui?.pano_sticker_input_frames || output?.pano_sticker_input_frames;
  if (Array.isArray(frames) && frames.length) return { frames: frames.map(imageSourceFromCandidate), meta };
  const src = resolvePreviewVideoSource(output, ["pano_sticker_input_videos"], imageSourceFromCandidate);
  return src ? { src, meta } : null;
}

// What the node's result gives the Auto length of Panorama Studio's inputs (pano_timeline.js
// autoTimelineLength), as its editor counts them: the background's frames (left out while no result gives
// them: the surface's playback then counts the VIDEO it plays; null when the upstream Scene's background stands
// in, which its length holds already, with its Clip range as `upstreamClip` and its MP4's meta as
// `upstreamMedia`), the port Sticker's media, the `scene` items, and the upstream Scene's
// length with the ends of the Clip ranges the node overrides in it (the surface's upstream layers', as in the editor).
// `state` is the node's working state v2, `choice` its background (surfaceBackgroundChoice).
function surfaceTimelineMedia(node, state, choice) {
  const list = (key) => ownOutputUiList(node, key);
  const scene = isNodeOutputMediaCurrent(node, "scene");
  const layers = scene ? list("pano_upstream_layers") : [];
  // The background (pano_background_choice.js backgroundLength): an upstream one is placed by the Clip range of the
  // Studio it came from and ends with its media, as in the editor (pano_node_playback.js).
  const media = backgroundLength(choice, {
    uiList: list,
    current: (channel) => isNodeOutputMediaCurrent(node, channel),
    videoLinked: videoLinked(node, BACKGROUND_INPUT_NAMES),
  });
  if (isNodeOutputMediaCurrent(node, "external-sticker")) media.port = portMediaMeta(list);
  if (layers.length) {
    // The upstream Scene's length as the editor counts it (studio/upstream.js output()), from the layers the picture draws.
    const upstream = nodeSurface(node).studioInputs?.upstream.output() ?? null;
    if (upstream) media.upstream = upstream;
  } else if (scene) {
    media.sceneItems = list("pano_scene_files").length;
  }
  // The animated 3D files (ADR 0043): the `scene` input's and the port Sticker's 3D media as the result tells of them,
  // and each 3D file Sticker's from the file route, as the editor asks it, so the surface counts the length the run
  // decides before and after a run.
  const clips = (metaKey) => list(metaKey)[0]?.animation?.clips;
  const portSticker = state.stickers.find((sticker) => sticker.source.kind === "port");
  const portClips = isNodeOutputMediaCurrent(node, "external-sticker") ? clips("pano_sticker_meta") : null;
  media.animations = stateAnimationClips(state, {
    sceneFiles: scene && !layers.length && Array.isArray(clips("pano_scene_meta")) ? { animation: { clips: clips("pano_scene_meta") } } : null,
    stickerFiles: portSticker && Array.isArray(portClips) ? { animation: { clips: portClips } } : null,
    editorFile: (sticker) => file3dEditorFileOf(comfy.file3dFiles, sticker, mediaSource),
  });
  return media;
}

// The surface's Timeline playback, made for a state v2 node (null otherwise), and Panorama Studio's inputs
// (pano_node_bridge.js nodeSurface studioInputs).
export function createSurfacePlayback(ctx) {
  const { node, surface, wrap, stickersMode, studioSurface, requestDraw, nodeSurfaceUiModel } = ctx;
  // Panorama Studio plays its Timeline on the node. requestVideoFrameCallback runs only for a
  // rendered VIDEO, so the muted elements stay in the surface, out of sight by their opacity: the
  // background VIDEO, and the port Sticker's MP4 that follows the playhead.
  let surfacePlayback = null;
  if (stickersMode && node.__panoSceneStateV2) {
    const [video, stickerVideo] = [0, 1].map(() => {
      const element = createPanoVideo(document, "node.playback");
      element.playsInline = true;
      element.preload = "auto";
      element.crossOrigin = "anonymous";
      element.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none";
      wrap.appendChild(element);
      return element;
    });
    const still = createPanoCanvas({ label: "node.still" });
    still.__panoFrameIdx = 0;
    const stickerStill = createPanoCanvas({ label: "node.port-still" });
    stickerStill.__panoFrameIdx = 0;
    const playback = createNodePlayback({
      video,
      stickerVideo,
      createImage: (src, onLoad) => {
        const image = new Image();
        image.onload = onLoad;
        image.onerror = onLoad;
        image.src = src;
        return image;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (callback) => requestAnimationFrame(callback),
        cancelFrame: (id) => cancelAnimationFrame(id),
      },
      readState: () => getCachedState(node),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does.
      camera: node.__panoStudio === true,
      solo: studioSurfacePlayback,
      onFrame: requestDraw,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        if (!(video.videoWidth > 0 && video.videoHeight > 0)) return;
        const scale = Math.min(1, NODE_STILL_MAX_WIDTH / video.videoWidth);
        still.width = Math.round(video.videoWidth * scale);
        still.height = Math.round(video.videoHeight * scale);
        still.getContext("2d")?.drawImage(video, 0, 0, still.width, still.height);
        still.__panoFrameIdx += 1;
        requestDraw();
      },
      onStickerCapture: () => {
        if (!(stickerVideo.videoWidth > 0 && stickerVideo.videoHeight > 0)) return;
        stickerStill.width = stickerVideo.videoWidth;
        stickerStill.height = stickerVideo.videoHeight;
        stickerStill.getContext("2d")?.drawImage(stickerVideo, 0, 0);
        stickerStill.__panoFrameIdx += 1;
        requestDraw();
      },
      onChange: () => {
        nodeSurfaceUiModel.playing = playback.playing;
        requestDraw();
      },
    });
    surfacePlayback = { playback, video, still, stickerVideo, stickerStill, stickerSource: "" };
    surface.playback = surfacePlayback;
    // What Panorama Studio's picture draws of its inputs as the editor does (docs/studio-node-surface.md "撮る Camera の
    // 出力をその場で描く"): the depth grids' colors (a proxy MP4 per input following the display frame) and the upstream
    // Scene's layers with the node's overrides. Out of sight both let their media go (release) and load again when shown.
    if (studioSurface) {
      const depthColors = createDepthColors({
        createVideo: () => createPanoVideo(document, "node.depth-video"),
        createCanvas: () => createPanoCanvas({ label: "node.depth-still" }),
        releaseCanvas: releasePanoCanvas,
        onChange: requestDraw,
      });
      const upstream = createStudioUpstream({
        list: () => {
          const value = isNodeOutputMediaCurrent(node, "scene") ? ownOutputUiList(node, "pano_upstream_layers") : [];
          return value.length ? value : null;
        },
        linkType: () => linkedInputType(node, "scene"),
        uiList: (key) => ownOutputUiList(node, key),
        state: () => surfaceSceneState(node, getCachedState(node)),
        mediaSource,
        mediaAssetSource,
        revisionOf: getRenderableMediaRevisionToken,
        playing: () => playback.advancing,
        editorFile: (sticker) => file3dEditorFileOf(comfy.file3dFiles, sticker, mediaSource),
        onMedia: requestDraw,
      });
      // The upstream Scene's background image (upstreamBackgroundMedia), loaded from the result once per source.
      const backgroundImages = new Map();
      const releaseBackgroundImages = () => {
        backgroundImages.forEach((image) => {
          image.onload = null;
          image.onerror = null;
          image.removeAttribute("src");
        });
        backgroundImages.clear();
      };
      surface.studioInputs = {
        depthColors,
        upstream,
        depthColor: (slot, request) => depthColors.picture(slot, request, playback.advancing),
        backgroundImage: (key) => comfy.surfaceMedia.uiImage(node, key, backgroundImages, requestDraw),
        releaseBackgroundImages,
        release() {
          depthColors.retain([]);
          upstream.dispose();
          releaseBackgroundImages();
        },
        dispose() {
          depthColors.dispose();
          upstream.dispose();
          releaseBackgroundImages();
        },
      };
    }
  }
  return surfacePlayback;
}

// The Timeline plays on the node only while it is shown: collapsed, in a subgraph or another graph, or
// under the node's open editor (which plays the same VIDEO itself), the node pauses and lets its VIDEO go.
export function syncSurfacePlayback(ctx) {
  const { node, surface, wrap, surfaceView, nodeSurfaceUiModel, surfacePlayback } = ctx;
  const { playback, still, stickerStill } = surfacePlayback;
  const shown = surfaceShown(wrap, !!node.flags?.collapsed, editorOpen(node));
  const source = playback.source;
  const sticker = shown ? portStickerMedia(node) : null;
  const state = getCachedState(node);
  // The background chosen once for this follow (pano_background_choice.js): its VIDEO candidates and its length.
  const choice = shown ? surfaceBackgroundChoice(node, state) : null;
  const playable = playback.follow({
    shown,
    sources: shown ? backgroundVideoSources(node, choice) : [],
    state,
    sticker,
    media: shown ? surfaceTimelineMedia(node, state, choice) : {},
  });
  // The still of the port Sticker's MP4 is released with its source.
  if ((sticker?.src || "") !== surfacePlayback.stickerSource) {
    surfacePlayback.stickerSource = sticker?.src || "";
    releasePanoCanvas(stickerStill);
  }
  // The still of one source must not show for the next, nor hold memory without one.
  if (playback.source !== source) {
    releasePanoCanvas(still);
    still.__panoFrameIdx = 0;
  }
  // Out of sight the depth grids' color VIDEOs, the upstream layers' media and the loaded 3D items are let go too.
  if (!shown) {
    surface.studioInputs?.release();
    surfaceView.releaseWorld();
  }
  nodeSurfaceUiModel.playable = playable;
  nodeSurfaceUiModel.playing = playback.playing;
}

// The legacy nodes' background VIDEO (createLoopingPreviewVideo) shows its first frame and plays from
// the play button (Stickers; the Cutout surface has none); out of sight it pauses, as the Timeline above.
export function syncLegacyVideo(ctx) {
  const { node, media, wrap, stickersMode, nodeSurfaceUiModel } = ctx;
  const player = media.ownOutputVideo?.player ?? null;
  if (player && !surfaceShown(wrap, !!node.flags?.collapsed)) player.pause();
  if (!stickersMode) return;
  nodeSurfaceUiModel.playable = !!player && !player.failed();
  nodeSurfaceUiModel.playing = !!player?.playing;
}

// Edits pause playback first, on the frame on screen.
export function pauseSurfacePlayback(ctx) {
  const { media, surfacePlayback } = ctx;
  surfacePlayback?.playback.pause();
  media.ownOutputVideo?.player.pause();
}
