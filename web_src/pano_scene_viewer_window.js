// The Preview's window on a Scene (docs/preview-node.md "大きなウィンドウ", ADR 0041): PanoModal.vue's `viewer` layout
// with pano_scene_viewer.js drawn on its stage through a WebGL context of its own, held while it is open. It goes on
// from the node's view and playhead (the same record, pano_node_bridge.js sceneViewer), and the node takes the last
// ones back when it closes. Vue owns the window's structure; this file wires the stage, the pointer, the keys and
// the frames.
import { createApp, reactive } from "vue";
import PanoModal from "./components/PanoModal.vue";
import { buildModalShellPreset } from "./modal_shell_presets.js";
import { trackPanoCanvas } from "./pano_diagnostics.js";
import { floatingRightState } from "./pano_editor_ui_state.js";
import { createEditorView, screenRenderSize } from "./pano_editor_view.js";
import { sceneViewer, sceneViewerWindowClosed, sceneViewerWindowOpened } from "./pano_node_bridge.js";
import { createSceneViewer } from "./pano_scene_viewer.js";
import { sceneViewerRecordOf } from "./pano_scene_viewer_node.js";
import { VIEW_CONTROLS_SETTING_ID, presetUsesButton, viewControlsPreset } from "./pano_view_controls.js";
import { createMoveKeys } from "./pano_view_keys.js";
import { shownSpaceMode } from "./pano_view_transition.js";
import { readWheelDirection } from "./pano_wheel.js";

// Opens the window on the node's Scene. app: ComfyUI's app (its settings); uiList(node, key): the node's current
// result under a `ui` key; mediaSource / mediaAssetSource: URLs; revisionOf(media); editorFile(sticker);
// refreshFile(source).
// onClosed(node): the window has closed.
export function openSceneViewerWindow(node, { app, uiList, mediaSource, mediaAssetSource, revisionOf, editorFile = null, refreshFile, onClosed = () => {}, load }) {
  const owner = sceneViewer(node);
  if (owner.window) return owner.window;
  const record = sceneViewerRecordOf(node);
  const viewControls = () => viewControlsPreset(app?.ui?.settings?.getSettingValue?.(VIEW_CONTROLS_SETTING_ID));
  const shellPreset = buildModalShellPreset("viewer");
  const uiState = reactive({
    stageStatus: "loading",
    stageStatusDetail: "",
    videoTransport: {},
    floatingButtons: shellPreset.floatingButtons.map((button) => ({ ...button })),
    space: { visible: true, mode: record.view.spaceMode, frameDisabled: false, modes: shellPreset.spaceButtons, frame: shellPreset.spaceFrameButton },
    tooltip: {},
  });
  const mountHost = document.createElement("div");
  document.body.appendChild(mountHost);
  const vueApp = createApp(PanoModal, {
    open: true,
    type: "studio",
    layout: "viewer",
    hideSidebar: true,
    nodeTitle: String(node?.title || "Panorama Preview"),
    shellPreset,
    uiState,
    onClose: () => close(),
  });
  vueApp.mount(mountHost);
  const overlay = mountHost.querySelector(".pano-modal-overlay");
  const root = mountHost.querySelector(".pano-modal");
  // Vue owns the structure; these are the bridge's handles on the stage.
  const stage = root.querySelector("[data-stage-overlay]");
  const backgroundCanvas = root.querySelector("[data-stage-background]");
  const stageWrap = root.querySelector(".pano-stage-wrap");
  trackPanoCanvas(backgroundCanvas, "viewer.stage");
  const moveKeys = createMoveKeys();
  let raf = 0;
  let closed = false;
  let fullscreen = false;

  const view = createEditorView({
    canvas: backgroundCanvas,
    onReady: () => {
      uiState.stageStatus = "ready";
      stageWrap.setAttribute("data-stage-ready", "");
      requestDraw();
    },
    onFailed: () => {
      uiState.stageStatus = "failed";
      uiState.stageStatusDetail = "renderer";
      stageWrap.setAttribute("data-stage-ready", "");
    },
    onUpdate: () => requestDraw(),
    onSplats: () => requestDraw(),
    onRestored: () => requestDraw(),
    ...(load ? { load } : {}),
  });
  // The pointer and the camera are in the stage's CSS pixels, as in the editor.
  const viewer = createSceneViewer({
    record,
    uiList: (key) => uiList(node, key),
    mediaSource,
    mediaAssetSource,
    surface: view,
    size: () => ({ width: stage.width, height: stage.height }),
    viewControls,
    revisionOf,
    editorFile,
    refreshFile,
    muted: false,
    onChange: () => requestDraw(),
  });

  function requestDraw() {
    if (raf || closed) return;
    raf = requestAnimationFrame(frame);
  }

  function syncSize() {
    const rect = stage.getBoundingClientRect();
    const width = Math.max(2, Math.round(rect.width));
    const height = Math.max(2, Math.round(rect.height));
    if (stage.width !== width || stage.height !== height) {
      stage.width = width;
      stage.height = height;
    }
    const dpr = window.devicePixelRatio || 1;
    const size = screenRenderSize(rect.width || width, rect.height || height, dpr, window.innerWidth || width, window.innerHeight || height);
    view.resize(size.width, size.height);
  }

  function frame(ts) {
    raf = 0;
    if (closed) return;
    syncSize();
    const keyMoved = viewer.stepKeys(moveKeys, ts);
    const moved = viewer.tick(ts);
    const input = viewer.input();
    view.clear();
    view.render({ rect: { x: 0, y: 0, w: backgroundCanvas.width, h: backgroundCanvas.height }, ...input });
    syncUi();
    if (moved || keyMoved || moveKeys.held || record.playing || record.view.viewTransition) requestDraw();
  }

  function syncUi() {
    uiState.videoTransport = viewer.transport();
    const floating = floatingRightState({
      spaceView: true,
      spaceMode: shownSpaceMode(record.view.spaceMode, record.view.viewTransition),
      readOnly: false,
      frameMode: false,
      showGrid: record.showGrid,
    });
    Object.assign(uiState.space, floating.space);
    for (const [action, patch] of Object.entries(floating.buttons)) {
      const button = uiState.floatingButtons.find((item) => item.action === action);
      if (button) Object.assign(button, patch);
    }
  }

  function point(event) {
    const rect = stage.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (stage.width / Math.max(1, rect.width)),
      y: (event.clientY - rect.top) * (stage.height / Math.max(1, rect.height)),
    };
  }

  function onPointerDown(event) {
    if (!viewer.pointerDown({ button: event.button, shiftKey: event.shiftKey, altKey: event.altKey, ctrlKey: event.ctrlKey, metaKey: event.metaKey, ...point(event) })) return;
    event.preventDefault();
    stage.setPointerCapture?.(event.pointerId);
  }

  function onPointerMove(event) {
    if (!viewer.dragging) return;
    event.preventDefault();
    viewer.pointerMove(point(event));
    requestDraw();
  }

  function onPointerUp(event) {
    if (!viewer.dragging) return;
    viewer.pointerUp();
    stage.releasePointerCapture?.(event.pointerId);
  }

  function onWheel(event) {
    event.preventDefault();
    const direction = readWheelDirection(event);
    if (direction) viewer.wheel(-direction, point(event));
  }

  function onContextMenu(event) {
    if (presetUsesButton(viewControls(), 2)) event.preventDefault();
  }

  // The keys (docs/editor-interaction.md "キーボードの移動"): WASD / QE move in 6DoF, Space plays and pauses. Escape
  // closes (PanoModal.vue). Keys typed into a field are its own.
  function onKeyDown(event) {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey) return;
    if (event.target?.matches?.("input:not([type=range]), textarea, select")) return;
    moveKeys.modifiers(event);
    if (event.code === "Space") {
      event.preventDefault();
      if (!event.repeat) viewer.togglePlay();
      requestDraw();
      return;
    }
    if (moveKeys.press(event.code, performance.now())) {
      event.preventDefault();
      requestDraw();
    }
  }

  function onKeyUp(event) {
    moveKeys.modifiers(event);
    if (moveKeys.release(event.code)) event.preventDefault();
  }

  function onBlur() {
    moveKeys.releaseAll();
  }

  function onClick(event) {
    const mode = event.target.closest?.("[data-space-mode]");
    if (mode) {
      viewer.setSpaceMode(mode.getAttribute("data-space-mode"));
      requestDraw();
      return;
    }
    const action = event.target.closest?.("[data-action]")?.getAttribute("data-action");
    if (!action) return;
    if (action === "close") close();
    else if (action === "video-play-toggle") viewer.togglePlay();
    else if (action === "reset-view") viewer.resetView();
    else if (action === "frame-view") viewer.frameAll();
    else if (action === "toggle-grid") viewer.toggleGrid();
    else if (action === "toggle-fullscreen") void toggleFullscreen();
    requestDraw();
  }

  function onInput(event) {
    if (!event.target.matches?.("[data-video-seek]")) return;
    viewer.seek(Number(event.target.value) * viewer.fps());
    requestDraw();
  }

  function setFullscreen(on) {
    fullscreen = on;
    root.classList.toggle("pano-modal-fullscreen", on);
    const button = uiState.floatingButtons.find((item) => item.action === "toggle-fullscreen");
    if (button) {
      button.label = on ? "Exit Fullscreen" : "Fullscreen";
      button.tip = on ? "Exit fullscreen" : "Fullscreen";
      button.pressed = on ? "true" : null;
    }
    requestDraw();
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenEnabled) {
        setFullscreen(!fullscreen);
        return;
      }
      if (document.fullscreenElement !== overlay) await overlay.requestFullscreen?.();
      else await document.exitFullscreen?.();
    } catch {
      setFullscreen(!fullscreen);
    }
  }

  function onFullscreenChange() {
    if (document.fullscreenEnabled) setFullscreen(document.fullscreenElement === overlay);
  }

  function onResize() {
    requestDraw();
  }

  stage.addEventListener("pointerdown", onPointerDown);
  stage.addEventListener("pointermove", onPointerMove);
  stage.addEventListener("pointerup", onPointerUp);
  stage.addEventListener("pointercancel", onPointerUp);
  stage.addEventListener("wheel", onWheel, { passive: false });
  stage.addEventListener("contextmenu", onContextMenu);
  root.addEventListener("click", onClick);
  root.addEventListener("input", onInput);
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);
  document.addEventListener("fullscreenchange", onFullscreenChange);
  window.addEventListener("blur", onBlur);
  window.addEventListener("resize", onResize);

  // Closes the window and lets go of its WebGL context; the node goes on from the record.
  function close() {
    if (closed) return;
    closed = true;
    cancelAnimationFrame(raf);
    raf = 0;
    if (document.fullscreenElement === overlay) document.exitFullscreen?.().catch(() => { });
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("keyup", onKeyUp);
    document.removeEventListener("fullscreenchange", onFullscreenChange);
    window.removeEventListener("blur", onBlur);
    window.removeEventListener("resize", onResize);
    viewer.pointerUp();
    viewer.dispose();
    view.dispose();
    vueApp.unmount();
    mountHost.remove();
    sceneViewerWindowClosed(node);
    onClosed(node);
  }

  const handle = { close, viewer, requestDraw };
  sceneViewerWindowOpened(node, handle);
  syncUi();
  requestDraw();
  return handle;
}
