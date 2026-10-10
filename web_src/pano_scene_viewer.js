// The Preview's viewer of a Scene (docs/preview-node.md "`PANO_SCENE` を見る", ADR 0041): the Scene's layers drawn as
// the editor draws an upstream Scene (pano_upstream_layers.js), the view moved as the editor's space view moves
// (pano_space_navigation.js), and its Timeline played. Nothing is edited: no gizmo, no selection, no Camera. The node
// surface (pano_scene_viewer_node.js) and the window (pano_scene_viewer_window.js) draw what it builds.
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "./pano_diagnostics.js";
import { createDepthColors } from "./pano_depth_color.js";
import { bgColorBackground, backgroundClipAt } from "./pano_port_media.js";
import { clipActive } from "./pano_scene_eval.js";
import {
  DEFAULT_DISTANCE,
  DEFAULT_VIEW_HFOV,
  boundingSphere,
  contentPoints,
  gridSpec,
  orbitView,
  sceneItemBox,
  spaceCamera,
} from "./pano_space.js";
import { createSpaceNavigation } from "./pano_space_navigation.js";
import { upstreamBackgroundOf } from "./pano_upstream.js";
import { createUpstreamLayers, refreshGoneUpstreamFiles } from "./pano_upstream_layers.js";
import { createVideoFollower } from "./pano_video_playback.js";
import { viewDragAction } from "./pano_view_controls.js";

// What a Preview node keeps of its viewer (pano_node_bridge.js sceneViewer), never saved: the view (the fields
// pano_space_navigation.js moves), the playhead and whether it plays, and whether the grid shows. A Scene opens in
// 6DoF at the World origin, looking at the ERP's front at the editor's default FOV.
export function sceneViewerRecord() {
  return {
    view: {
      spaceMode: "6dof", viewPosition: [0, 0, 0], viewYaw: 0, viewPitch: 0, viewFov: DEFAULT_VIEW_HFOV,
      viewDistance: DEFAULT_DISTANCE, viewMoved: false, viewTransition: null,
    },
    frame: 0,
    playing: false,
    showGrid: true,
  };
}

// Which Preview viewers draw on the shared view: each draws its first picture, then only the one last used (a press,
// a wheel step, a double click, or its run) draws; the others keep the picture they copied. None draws while Studio's
// editor is open.
export function createSceneViewerHost() {
  let active = null;
  const drawn = new WeakSet();
  return {
    touch(node) {
      active = node;
    },
    isActive(node) {
      return active === node;
    },
    shouldDraw(node, { editorOpen = false } = {}) {
      if (editorOpen) return false;
      return active === node || !drawn.has(node);
    },
    drew(node) {
      drawn.add(node);
    },
    forget(node) {
      if (active === node) active = null;
      drawn.delete(node);
    },
  };
}

export const sceneViewerHost = createSceneViewerHost();

function timeLabel(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

// record: sceneViewerRecord(). uiList(key): the Preview's current result under a `ui` key ([] without one).
// mediaSource / mediaAssetSource: URLs of `ui` file entries and of file Sources. surface: the three.js view drawn on
// ({ pickSurface, contentRevision, sceneBox, sceneItemError }). size(): { width, height } it draws at.
// viewControls(): the 3D view controls preset. revisionOf(media): a picture's revision. createVideo /
// createCanvas / releaseCanvas: the background VIDEO and stills. muted: the background's sound off (on the node).
// editorFile(sticker): a 3D file Sticker's editor file, or null. refreshFile(source): asks again for the editor file
// of a 3D file Sticker that is gone (a 404), as the editor does. onChange(): draw again.
export function createSceneViewer({
  record, uiList, mediaSource, mediaAssetSource, surface, size, viewControls, revisionOf,
  createVideo = () => createPanoVideo(document, "viewer.video"),
  createCanvas = () => createPanoCanvas({ label: "viewer.still" }),
  releaseCanvas = releasePanoCanvas,
  muted = true, editorFile = null, refreshFile = () => {}, onChange = () => {},
}) {
  const fps = () => Number(uiList("pano_timeline_fps")[0]) > 0 ? Number(uiList("pano_timeline_fps")[0]) : 24;
  const frames = () => Math.max(1, Math.floor(Number(uiList("pano_timeline_frames")[0]) || 1));
  let lastTs = null;
  // Where the playhead is, between frames.
  let playhead = record.frame;
  // The content sphere of the input built last, which the navigation scales by.
  let sphere = null;
  // The 3D items of the input built last.
  let shownItems = [];
  // A drag in progress: { kind: "space_orbit" | "space_pan" | "look", last }.
  let drag = null;
  const images = new Map();

  const layers = createUpstreamLayers({
    list: () => {
      const value = uiList("pano_upstream_layers");
      return Array.isArray(value) && value.length ? value : null;
    },
    fps,
    records: () => [],
    mediaSource,
    mediaAssetSource,
    revisionOf,
    // The editor paints at its own node's output_preset (editor/paint_strokes.js getDesiredPaintTargetDescriptor);
    // the Preview has none and the Scene does not carry the size of the Studio that made it, so the paint shows at
    // the editor's default preset (2048, an ERP of 2:1).
    paintTarget: () => ({ width: 2048, height: 1024 }),
    playing: () => record.playing,
    editorFile,
    onMedia: onChange,
  });
  const navigation = createSpaceNavigation({
    view: record.view,
    origin: () => [0, 0, 0],
    contentSphere: () => sphere,
    surface,
    size,
    draw: onChange,
    onModeShown: onChange,
  });
  const depthColors = createDepthColors({ createVideo, createCanvas, releaseCanvas, onChange });

  // The background VIDEO of the Scene, following the playhead (with its sound in the window).
  let background = null;
  function backgroundVideo() {
    if (background) return background;
    const video = createVideo();
    const still = createCanvas();
    background = { video, still, frame: 0, follower: null };
    background.follower = createVideoFollower({
      video,
      onCapture: () => {
        const width = Number(video.videoWidth || 0);
        const height = Number(video.videoHeight || 0);
        if (width < 1 || height < 1) return;
        still.width = width;
        still.height = height;
        still.getContext("2d")?.drawImage(video, 0, 0);
        background.frame += 1;
        onChange();
      },
      onChange,
    });
    video.muted = muted;
    return background;
  }

  function image(src) {
    if (!src) return null;
    let img = images.get(src);
    if (!img) {
      img = new Image();
      img.onload = onChange;
      img.onerror = onChange;
      img.src = src;
      images.set(src, img);
    }
    return img;
  }

  // The Scene's background at the playhead (its image or VIDEO inside its Clip range), else its bg_color.
  function backgroundAt(frame) {
    const color = uiList("pano_upstream_bg_color")[0];
    const hex = Array.isArray(color) && color.length === 3
      ? `#${color.map((value) => Math.round(Math.min(1, Math.max(0, Number(value) || 0)) * 255).toString(16).padStart(2, "0")).join("")}`
      : "#000000";
    const bg = upstreamBackgroundOf(uiList);
    if (!bg) return bgColorBackground(hex);
    const clip = bg.clip ? backgroundClipAt(bg.clip.clip, bg.clip.fps, fps()) : { start: 0, in: 0, duration: null };
    if (!clipActive(clip, frame)) return bgColorBackground(bg.color ?? hex);
    const videoEntry = uiList(bg.videoKey)[0];
    if (videoEntry) {
      const { follower, still, frame: stillFrame } = backgroundVideo();
      const src = mediaSource(videoEntry);
      follower.follow({ src, time: (frame - clip.start + clip.in) / fps(), playing: record.playing, fps: fps() });
      const media = follower.picture(still, null);
      return media ? { media, revision: media === still ? `still:${stillFrame}` : "video", coverage: bg.coverage, source: src } : null;
    }
    const img = image(mediaSource(uiList(bg.imageKey)[0] || null));
    return img?.naturalWidth ? { media: img, revision: revisionOf(img), coverage: bg.coverage, source: img.src } : bgColorBackground(bg.color ?? hex);
  }

  // What the three.js view draws at the playhead: { camera, background, layers, space }, the Scene's layers with
  // the grid, without anything to edit.
  function input() {
    const frame = record.frame;
    const upstream = layers.viewInput(frame);
    const items = upstream.items.map((entry) => (entry.request?.kind === "depth_grid"
      ? { ...entry, request: { ...entry.request, color: depthColorOf(entry.slot, entry.request) } }
      : entry));
    depthColors.retain(items.filter((entry) => entry.request?.kind === "depth_grid").map((entry) => entry.slot));
    refreshGoneUpstreamFiles(items, (key) => surface.sceneItemError(key), refreshFile);
    shownItems = items;
    const boxes = items.flatMap(({ request, value }) => {
      const box = request?.url ? surface.sceneBox(request.url) : null;
      return box ? [{ box: sceneItemBox(request.kind, box), value }] : [];
    });
    sphere = boundingSphere(contentPoints({ scene: { active: false } }, null, upstream.stickers, boxes));
    const { width, height } = size();
    return {
      camera: spaceCamera(navigation.spaceViewState(), width, height, sphere),
      background: backgroundAt(frame),
      layers: upstream.sky,
      space: {
        grid: record.showGrid ? gridSpec(sphere?.radius || DEFAULT_DISTANCE) : null,
        sceneUrls: [], scene: null, stickerUrls: [], sticker: null, fileStickers: [], fileStickerKeys: [], stickers: [],
        lines: [], upstreamItems: items, upstreamStickers: upstream.stickers, gizmo: null, sphere,
      },
    };
  }

  // Whether every 3D item of the input built last has loaded or failed, so its picture is the Scene's.
  function itemsLoaded() {
    return shownItems.every(({ request }) => !request?.url || !!surface.sceneBox(request.url) || !!surface.sceneItemError(request.url));
  }

  function depthColorOf(slot, request) {
    const color = depthColors.picture(slot, request.video, record.playing);
    return color && { ...color, slot };
  }

  // The playhead and the view at time ts: playback moves on (going round at the end), a transition runs. Returns
  // whether anything moved.
  function tick(ts) {
    const elapsed = lastTs === null ? 0 : Math.max(0, ts - lastTs) / 1000;
    lastTs = ts;
    let moved = navigation.stepTransition(ts);
    if (record.playing && hasTime() && elapsed > 0) {
      // The playhead keeps the part of a frame the display's frames add up to; a frame set elsewhere (a seek, the
      // window) starts it again.
      if (Math.floor(playhead) !== record.frame) playhead = record.frame;
      playhead = (playhead + elapsed * fps()) % frames();
      record.frame = Math.floor(playhead);
      moved = true;
    }
    return moved;
  }

  function hasTime() {
    return frames() > 1;
  }

  function togglePlay() {
    if (!hasTime()) return;
    record.playing = !record.playing;
    lastTs = null;
    onChange();
  }

  function seek(frame) {
    record.frame = Math.max(0, Math.min(frames() - 1, Math.round(frame)));
    onChange();
  }

  // The playback bar's state (PanoVideoTransport.vue's `state`): disabled, in place, without time.
  function transport() {
    const duration = frames() / fps();
    const current = record.frame / fps();
    return {
      visible: true,
      ready: hasTime(),
      playing: record.playing,
      duration,
      currentTime: current,
      progressPct: hasTime() ? (record.frame / Math.max(1, frames() - 1)) * 100 : 0,
      currentTimeLabel: timeLabel(current),
      durationLabel: timeLabel(duration),
    };
  }

  // A press at canvas point p with a button and modifiers: the preset's drag (orbit, pan, look); a left press
  // without one does the preset's drag on empty space (nothing is ever under it to edit). Returns whether a drag
  // started.
  function pointerDown(event) {
    const p = { x: event.x, y: event.y };
    navigation.cancelViewTransition();
    let action = viewDragAction(viewControls(), event);
    if (!action && event.button === 0) action = viewControls().emptyLeft;
    if (record.view.spaceMode === "3dof" && action) action = "look";
    if (!action) return false;
    drag = action === "look" ? { kind: "look", last: p } : navigation.spaceDrag(action, p);
    return true;
  }

  function pointerMove(p) {
    if (!drag) return;
    if (drag.kind === "look") {
      const state = navigation.spaceViewState();
      navigation.setSpaceView(orbitView(state, p.x - drag.last.x, p.y - drag.last.y, size().height, state.position));
      drag.last = p;
      return;
    }
    navigation.moveSpaceDrag(drag, p);
  }

  function pointerUp() {
    drag = null;
  }

  // A wheel step toward the surface under p (direction > 0) or away.
  function wheel(direction, p) {
    navigation.cancelViewTransition();
    if (direction) navigation.zoomSpaceAt(p, direction);
  }

  // Back to the World origin's front, over a transition.
  function resetView() {
    const state = navigation.spaceViewState();
    navigation.transitionView({ ...state, position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, hFOV_deg: DEFAULT_VIEW_HFOV, distance: sphere?.radius || DEFAULT_DISTANCE }, { mode: record.view.spaceMode, moved: false });
  }

  // Frame all: the whole content fits (nothing is selected in the viewer).
  function frameAll() {
    if (sphere) navigation.frameSphereView(sphere);
  }

  function toggleGrid() {
    record.showGrid = !record.showGrid;
    onChange();
  }

  // The movement keys (pano_view_keys.js createMoveKeys) at time ts: in 6DoF the view moves at the content's size per
  // second. Returns whether it moved.
  function stepKeys(moveKeys, ts) {
    const seconds = moveKeys.elapsed(ts);
    if (!seconds || record.view.viewTransition || record.view.spaceMode !== "6dof") return false;
    return navigation.keyMove(moveKeys.direction(), moveKeys.speed(navigation.spaceScale()) * seconds);
  }

  function dispose() {
    layers.dispose();
    depthColors.dispose();
    if (background) {
      background.follower.dispose();
      releaseCanvas(background.still);
      background = null;
    }
    images.clear();
  }

  return {
    input, itemsLoaded, tick, frames, fps, hasTime, togglePlay, seek, transport, pointerDown, pointerMove, pointerUp, wheel,
    resetView, frameAll, toggleGrid, stepKeys, setSpaceMode: navigation.setSpaceMode, navigation, dispose,
    get dragging() {
      return drag !== null;
    },
  };
}
