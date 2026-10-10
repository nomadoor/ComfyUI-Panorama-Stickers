// The Preview's viewer of a Scene on its node (docs/preview-node.md "ノード上", ADR 0041): pano_scene_viewer.js drawn
// through the shared on-node view (pano_preview_view.js acquirePreviewView), copied into the node's own canvas. Only
// the Preview last used draws (sceneViewerHost); the others keep their picture. The view and the playhead are the
// node's (pano_node_bridge.js sceneViewer), so the window continues from them. Vue owns the surface's structure
// (PanoSceneViewerNodeSurface.vue); this file wires the canvas, the pointer and the frames.
import { createApp, reactive } from "vue";
import PanoSceneViewerNodeSurface from "./components/PanoSceneViewerNodeSurface.vue";
import { assignFreshDomWidgetRenderIdentity, removeTrackedDomWidget, trackDomWidgetRemoval } from "./pano_dom_widget_lifecycle.js";
import { screenRenderSize } from "./pano_editor_view.js";
import { anyStudioEditorOpen, sceneViewer } from "./pano_node_bridge.js";
import { acquirePreviewView } from "./pano_preview_view.js";
import { createSceneViewer, sceneViewerHost, sceneViewerRecord } from "./pano_scene_viewer.js";
import { VIEW_CONTROLS_SETTING_ID, presetUsesButton, viewControlsPreset } from "./pano_view_controls.js";
import { bindWheelCaptureRoot, readWheelDirection } from "./pano_wheel.js";

// How long the play / pause cue of a double click shows.
const CUE_MS = 600;
const SURFACE_MIN_HEIGHT = 160;

// The surfaces on the graph, by node.
const surfaces = new Set();

// Every viewer on the graph draws what it has not drawn yet, and the one used last goes on (after Studio's editor
// closed, or a 3D file's editor file came).
export function redrawSceneViewers() {
  surfaces.forEach((surface) => surface.requestDraw());
}

// The node ran: its viewer is the one that draws now.
export function touchSceneViewer(node) {
  sceneViewer(node).surface?.activate();
}

// The viewer's record of the node, made the first time.
export function sceneViewerRecordOf(node) {
  const owner = sceneViewer(node);
  owner.record ||= sceneViewerRecord();
  return owner.record;
}

// Puts the viewer on the node. app: ComfyUI's app (its settings); uiList(node, key): the node's current result
// under a `ui` key; mediaSource / mediaAssetSource: URLs; revisionOf(media); editorFile(sticker): a 3D file
// Sticker's editor file; openViewer(node): the window.
export function attachSceneViewerNode(node, { app, uiList, mediaSource, mediaAssetSource, revisionOf, editorFile = null, refreshFile, openViewer, acquire = acquirePreviewView }) {
  const owner = sceneViewer(node);
  if (owner.surface || typeof node?.addDOMWidget !== "function") return;
  const record = sceneViewerRecordOf(node);
  const viewControls = () => viewControlsPreset(app?.ui?.settings?.getSettingValue?.(VIEW_CONTROLS_SETTING_ID));

  // The DOM widget's root, which takes the wheel as Studio's surface does.
  const root = document.createElement("div");
  root.className = "pano-node-preview-dom pano-scene-viewer-dom";
  root.setAttribute("data-capture-wheel", "true");
  root.tabIndex = 0;
  root.style.cssText = `width:100%;height:100%;min-height:${SURFACE_MIN_HEIGHT}px;position:relative;overflow:hidden`;
  const model = reactive({ transport: {}, cue: null, cueKey: 0, viewUnavailable: false });
  let raf = 0;
  let cueTimer = 0;
  const vueApp = createApp(PanoSceneViewerNodeSurface, { model, onAction: (action) => onAction(action) });
  const canvas = vueApp.mount(root).canvas;
  const ctx = canvas.getContext("2d");
  const shared = acquire(() => requestDraw(), { items: true });
  const viewer = createSceneViewer({
    record,
    uiList: (key) => uiList(node, key),
    mediaSource,
    mediaAssetSource,
    surface: shared,
    size: () => ({ width: canvas.width, height: canvas.height }),
    viewControls,
    revisionOf,
    editorFile,
    refreshFile,
    muted: true,
    onChange: () => requestDraw(),
  });
  const widget = trackDomWidgetRemoval(assignFreshDomWidgetRenderIdentity(node.addDOMWidget("scene_viewer", "preview", root, {
    serialize: false,
    hideOnZoom: false,
    getValue: () => "",
    setValue() {},
    getMinHeight: () => SURFACE_MIN_HEIGHT,
    afterResize: () => requestDraw(),
  })));
  const releaseWheel = bindWheelCaptureRoot(root);

  function shown() {
    return root.isConnected && !node.flags?.collapsed && !owner.windowOpen;
  }

  function requestDraw() {
    if (raf) return;
    raf = requestAnimationFrame(frame);
  }

  function frame(ts) {
    raf = 0;
    if (!shown() || !sceneViewerHost.shouldDraw(node, { editorOpen: anyStudioEditorOpen() })) return;
    const moved = viewer.tick(ts);
    draw();
    if (sceneViewerHost.isActive(node) && (moved || record.playing || record.view.viewTransition)) requestDraw();
  }

  function draw() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const size = screenRenderSize(rect.width, rect.height, dpr, window.innerWidth || rect.width, window.innerHeight || rect.height);
    if (canvas.width !== size.width || canvas.height !== size.height) {
      canvas.width = size.width;
      canvas.height = size.height;
    }
    model.transport = viewer.transport();
    model.viewUnavailable = shared.failed;
    const input = viewer.input();
    const drawn = shared.render({ width: canvas.width, height: canvas.height, ...input });
    if (!drawn) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(drawn.canvas, drawn.x, drawn.y, drawn.width, drawn.height, 0, 0, canvas.width, canvas.height);
    // A picture drawn while the Scene's items load is not its first picture yet: the item's arrival draws it again
    // even when this Preview is not the one used last.
    if (viewer.itemsLoaded()) sceneViewerHost.drew(node);
  }

  // This Preview is the one that draws now.
  function activate() {
    sceneViewerHost.touch(node);
    requestDraw();
  }

  function devicePoint(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (canvas.width / Math.max(1, rect.width)),
      y: (event.clientY - rect.top) * (canvas.height / Math.max(1, rect.height)),
    };
  }

  function onPointerDown(event) {
    activate();
    const p = devicePoint(event);
    if (!viewer.pointerDown({ button: event.button, shiftKey: event.shiftKey, altKey: event.altKey, ctrlKey: event.ctrlKey, metaKey: event.metaKey, ...p })) return;
    event.preventDefault();
    event.stopPropagation();
    canvas.setPointerCapture?.(event.pointerId);
  }

  function onPointerMove(event) {
    if (!viewer.dragging) return;
    event.preventDefault();
    event.stopPropagation();
    viewer.pointerMove(devicePoint(event));
    requestDraw();
  }

  function onPointerUp(event) {
    if (!viewer.dragging) return;
    viewer.pointerUp();
    canvas.releasePointerCapture?.(event.pointerId);
  }

  function onWheel(event) {
    event.preventDefault();
    event.stopPropagation();
    activate();
    const direction = readWheelDirection(event);
    if (direction) viewer.wheel(-direction, devicePoint(event));
  }

  // A double click plays or pauses, with a short cue in the middle.
  function onDoubleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    activate();
    if (!viewer.hasTime()) return;
    viewer.togglePlay();
    model.cue = record.playing ? "play" : "pause";
    model.cueKey += 1;
    clearTimeout(cueTimer);
    cueTimer = setTimeout(() => { model.cue = null; }, CUE_MS);
  }

  // The right button's menu stays away while a preset drags with it.
  function onContextMenu(event) {
    if (presetUsesButton(viewControls(), 2)) event.preventDefault();
  }

  // The playback bar: play / pause and seek.
  function onClick(event) {
    if (!event.target.closest?.('[data-action="video-play-toggle"]')) return;
    activate();
    viewer.togglePlay();
  }

  function onInput(event) {
    if (!event.target.matches?.("[data-video-seek]")) return;
    activate();
    viewer.seek(Number(event.target.value) * viewer.fps());
  }

  function onAction(action) {
    activate();
    if (action.type === "reset-view") viewer.resetView();
    else if (action.type === "open-viewer") openViewer?.(node);
  }

  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("pointercancel", onPointerUp);
  canvas.addEventListener("wheel", onWheel, { passive: false });
  canvas.addEventListener("dblclick", onDoubleClick);
  canvas.addEventListener("contextmenu", onContextMenu);
  root.addEventListener("click", onClick);
  root.addEventListener("input", onInput);

  const surface = {
    requestDraw,
    activate,
    detach() {
      surfaces.delete(surface);
      cancelAnimationFrame(raf);
      clearTimeout(cueTimer);
      releaseWheel();
      viewer.dispose();
      shared.dispose();
      sceneViewerHost.forget(node);
      vueApp.unmount();
      try { removeTrackedDomWidget(node, widget); } catch { }
      root.remove();
      owner.surface = null;
    },
  };
  owner.surface = surface;
  surfaces.add(surface);
  requestDraw();
}
