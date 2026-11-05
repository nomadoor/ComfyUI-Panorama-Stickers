import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { createApp, reactive } from "vue";
import {
  attachCutoutPreview,
  attachPreviewNode,
  attachStickersNodePreview,
  restoreNodeOutput,
} from "./pano_node_preview.js";
import { createPanoInteractionController } from "./pano_interaction_controller.js";
import { clamp, wrapYaw } from "./pano_math.js";
import { VIEW_HFOV_MAX_DEG, VIEW_HFOV_MIN_DEG, VIEW_PITCH_LIMIT_DEG } from "./pano_camera_math.js";
import { DEFAULT_BRUSH_PRESET_ID } from "./pano_brush_presets.js";
import { DRAW_REASON, createFrameScheduler } from "./pano_frame_scheduler.js";
import { createPaintEngineManager } from "./pano_paint_engine.js";
import {
  createEditorHistory,
  LEGACY_BACKGROUND_COLOR,
  normalizeCoverageValue,
  parsePanoEditorState,
} from "./pano_editor_state.js";
import { createEditorView } from "./pano_editor_view.js";
import { DEFAULT_DISTANCE, DEFAULT_VIEW_HFOV } from "./pano_space.js";
import { createTimers } from "./pano_timers.js";
import { createPanoCanvas, trackPanoCanvas, trackPanoVideo } from "./pano_diagnostics.js";
import { installPanoSuiteStylesheet } from "./pano_styles.js";
import PanoModal from "./components/PanoModal.vue";
import { buildModalShellPreset } from "./modal_shell_presets.js";
import { buildEditorUiState } from "./pano_editor_ui_state.js";
import {
  isImageLoadFailed,
  markImageFailed,
  markImageLoading,
  markImageReady,
} from "./pano_image_state.js";
import { createComfyMediaAdapter } from "./pano_comfy_media.js";
import { flushPanoStateProducers } from "./pano_editor_extension.js";
import { BACKGROUND_COLOR_WIDGET_NAMES, BACKGROUND_RANGE_WIDGET_NAMES, STUDIO_BACKGROUND_INPUT_NAMES, isNodeOutputMediaCurrent } from "./pano_preview_video.js";
import { isStickerImageFile } from "./pano_sticker_file_import.js";
import {
  registerExternalStickerSync,
  runExternalStickerSync,
} from "./pano_external_sticker_sync.js";
import {
  ENABLE_STICKERS_NODE_PREVIEW,
  EXTERNAL_STICKER_PREVIEW_KEY,
  PAINT_COLOR_SWATCHES,
  STATE_WIDGET,
} from "./editor/constants.js";
import {
  colorToCss,
  getEditorNodeTitle,
  getMediaWidthForSizing,
  getWidget,
  isAutoOutputPresetValue,
  parseOutputPresetValue,
} from "./editor/helpers.js";
import { getNodeGridVisibility, loadSharedUiSettings } from "./editor/ui_settings.js";
import { createEditorModules } from "./editor/modules.js";
import { createMediaSession } from "./editor/media_session.js";
import { createHistory, savedSelectionId } from "./editor/history.js";
import { createItems } from "./editor/items.js";
import { createSelection } from "./editor/selection.js";
import { createProjection } from "./editor/projection.js";
import { createObjectGeometry } from "./editor/object_geometry.js";
import { createPaintLayers } from "./editor/paint_layers.js";
import { createPaintStrokes } from "./editor/paint_strokes.js";
import { createExternalStickers } from "./editor/external_stickers.js";
import { createSpace } from "./editor/space.js";
import { createViewInput } from "./editor/view_input.js";
import { createCameraPreview, getCutoutPreviewViewportSize, splatDrawReason } from "./editor/camera_preview.js";
import { createOverlay } from "./editor/overlay.js";
import { createRenderLoop } from "./editor/render_loop.js";
import { createPanels } from "./editor/panels.js";
import { createCommit } from "./editor/commit.js";
import { createCommands } from "./editor/commands.js";
import { createStickerImport } from "./editor/sticker_import.js";
import { createCamera } from "./editor/camera.js";
import { createFrameView } from "./editor/frame_view.js";
import { createPaintInput } from "./editor/paint_input.js";
import { createHitTest } from "./editor/hit_test.js";
import { createSelectionMenu } from "./editor/selection_menu.js";
import { createPointerInput } from "./editor/pointer_input.js";
import { createPointerView } from "./editor/pointer_view.js";
import { createPointerFrame } from "./editor/pointer_frame.js";
import { createPointerPaint } from "./editor/pointer_paint.js";
import { createPointerMarquee } from "./editor/pointer_marquee.js";
import { createPointerTransform } from "./editor/pointer_transform.js";
import { createPointerMultiMove } from "./editor/pointer_multi_move.js";
import { createSidePanelEvents } from "./editor/side_panel_events.js";
import { createModalEvents } from "./editor/modal_events.js";
import { createKeyboard } from "./editor/keyboard.js";
import { editorSession, peekEditorSession, peekNodeSurface, stateSync } from "./pano_node_bridge.js";
import { createFile3dEditorFiles, file3dEditorFileOf } from "./pano_file_3d.js";
import { mediaPlayheadRevisionToken } from "./pano_media_session.js";
import { attachSceneViewerNode, redrawSceneViewers, touchSceneViewer } from "./pano_scene_viewer_node.js";

const comfyMedia = createComfyMediaAdapter({
  app,
  api,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed,
    markImageFailed,
    markImageLoading,
    markImageReady,
  },
});

const mediaAssetSource = comfyMedia.assetSource;
const mediaSource = comfyMedia.source;
const mediaUiImage = comfyMedia.uiImage;
const invalidateMediaUiImage = comfyMedia.invalidateUiImage;
const loadPreferredExactLinkedImage = comfyMedia.loadPreferredExactLinkedImage;

async function showEditor(node, type, options = {}) {
  await flushPanoStateProducers(node, { tolerateOperationFailure: true });
  comfyMedia.clearFailedLinkedImages(node);
  const readOnly = options?.readOnly === true;
  const hideSidebar = options?.hideSidebar ?? readOnly;
  const previewMode = readOnly;
  const nodeTitle = getEditorNodeTitle(node, type);
  await installPanoSuiteStylesheet();
  const presetWidget = getWidget(node, "output_preset");
  const coverageWidget = getWidget(node, BACKGROUND_RANGE_WIDGET_NAMES);
  const bgWidget = getWidget(node, BACKGROUND_COLOR_WIDGET_NAMES);
  const stateWidget = getWidget(node, STATE_WIDGET);

  const getLinkedBackgroundImageForSizing = () => {
    const inputNames = type === "stickers" ? [...STUDIO_BACKGROUND_INPUT_NAMES, "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return loadPreferredExactLinkedImage(
      node,
      inputNames,
      () => requestDraw(),
      `background:size:${inputNames.join("|")}`,
    );
  };

  const getLinkedBackgroundWidthForAuto = () => {
    const img = getLinkedBackgroundImageForSizing();
    return getMediaWidthForSizing(img);
  };

  const resolveEditorOutputPresetWidth = (fallback = 2048) => {
    const raw = presetWidget?.value;
    if (isAutoOutputPresetValue(raw)) {
      return getLinkedBackgroundWidthForAuto() || Math.max(1, Math.round(Number(fallback || 2048)));
    }
    return parseOutputPresetValue(raw, fallback);
  };

  // The old editor opens the legacy nodes (state v1) and the Preview's read-only opening; Panorama Studio opens in the
  // new UI (ADR 0062). shotEditor has the Cutout's shot and the Frame view.
  const shotEditor = type === "cutout";
  const state = parsePanoEditorState(String(stateWidget?.value || ""), {
    outputPreset: resolveEditorOutputPresetWidth(2048),
    backgroundColor: String(bgWidget?.value || LEGACY_BACKGROUND_COLOR),
    coverage: normalizeCoverageValue(coverageWidget?.value),
    sharedUiSettings: loadSharedUiSettings(),
  });
  stateSync(node).liveState = state;
  stateSync(node).liveStateVersion = 0;

  if (type === "cutout") {
    state.shots = Array.isArray(state.shots) ? state.shots.slice(0, 1) : [];
    if (!state.shots.length) {
      state.active.selected_shot_id = null;
    }
  }
  const initialCutoutPreviewShot = type === "cutout"
    ? (() => {
      const shots = Array.isArray(state.shots) ? state.shots : [];
      const selectedId = String(state?.active?.selected_shot_id || "");
      return shots.find((item) => String(item?.id || "") === selectedId) || shots[0] || null;
    })()
    : null;
  const initialCutoutPreviewSize = initialCutoutPreviewShot
    ? getCutoutPreviewViewportSize(initialCutoutPreviewShot, false)
    : { width: 220, height: 132 };
  const shellPreset = buildModalShellPreset(type);
  const uiState = reactive(buildEditorUiState({
    shellPreset,
    readOnly,
    previewMode,
    type,
    cutoutPreviewShot: initialCutoutPreviewShot,
    cutoutPreviewSize: initialCutoutPreviewSize,
  }));
  const mountHost = document.createElement("div");
  document.body.appendChild(mountHost);
  const onImageFileSelected = ({ intent, file } = {}) => {
    if (!isStickerImageFile(file)) return;
    if (intent === "add") {
      void addImageStickerFromFile(file);
      return;
    }
    if (intent === "replace") void replaceSelectedImageFromFile(file);
  };
  const onImageFileCancelled = ({ intent } = {}) => {
    void intent;
  };
  const vueApp = createApp(PanoModal, {
    open: true,
    type,
    readOnly,
    hideSidebar,
    nodeTitle,
    shellPreset,
    paintSwatches: PAINT_COLOR_SWATCHES.map((swatch) => ({
      id: swatch.id,
      label: swatch.label,
      cssColor: colorToCss(swatch.color, 1),
    })),
    uiState,
    onClose: () => { void closeEditor(); },
    onImageFileSelected,
    onImageFileCancelled,
  });
  let vueModal = null;
  try {
    vueModal = vueApp.mount(mountHost);
  } catch (error) {
    try {
      vueApp.unmount();
    } catch {
      // Ignore secondary teardown failures from partially mounted trees.
    }
    mountHost.remove();
    throw error;
  }

  const overlay = mountHost.querySelector(".pano-modal-overlay");
  const root = mountHost.querySelector(".pano-modal");
  const canvas = root?.querySelector("[data-stage-overlay]");
  const backgroundCanvas = root?.querySelector("[data-stage-background]");
  const stageWrap = root?.querySelector(".pano-stage-wrap");
  const paintOverlayRefs = vueModal?.getPaintOverlayRefs?.() || {};
  const paintCursorEl = paintOverlayRefs.cursor || null;
  const paintSizePreviewEl = paintOverlayRefs.sizePreview || null;
  const paintSizePreviewSampleEl = paintOverlayRefs.sizeSample || null;
  if (
    !overlay
    || !root
    || !canvas
    || !backgroundCanvas
    || !stageWrap
    || !paintCursorEl
    || !paintSizePreviewEl
    || !paintSizePreviewSampleEl
  ) {
    vueApp.unmount();
    mountHost.remove();
    throw new Error("Failed to mount Panorama Vue modal shell");
  }
  const ctx = canvas.getContext("2d");
  // Vue owns modal DOM structure. The references below are bridge-only:
  // canvas mounting, geometry measurement, low-level pointer wiring, and fullscreen integration.
  const side = root.querySelector("[data-side]");
  const videoEl = root.querySelector("[data-video-element]");
  // The stage and VIDEO elements of PanoModal.vue, counted by the diagnostics.
  trackPanoCanvas(canvas, "editor.stage-overlay");
  trackPanoCanvas(backgroundCanvas, "editor.stage-background");
  trackPanoVideo(videoEl, "editor.video");
  const floatingRightEl = root.querySelector(".pano-floating-right");
  const floatingTopEl = root.querySelector(".pano-floating-top");
  const toolRailEl = root.querySelector("[data-tool-rail]");
  const frameRailEl = root.querySelector("[data-frame-rail]");
  const frameRollKnobEl = root.querySelector("[data-frame-roll-knob]");
  const paintDockEl = root.querySelector("[data-paint-dock]");
  const videoTransportEl = root.querySelector(".pano-video-transport");
  const selectionMenu = root.querySelector("[data-selection-menu]");
  const tooltipEl = root.querySelector("[data-tooltip]");
  const cutoutPreviewHost = root.querySelector("[data-camera-preview-host]");
  const cutoutPreviewCanvas = root.querySelector("[data-camera-preview-canvas]");
  trackPanoCanvas(cutoutPreviewCanvas, "editor.camera-preview");
  const paintColorRow = root.querySelector("[data-paint-color-row]");
  const paintColorPop = root.querySelector("[data-paint-color-pop]");
  const paintColorSv = root.querySelector("[data-paint-color-sv]");
  const paintColorSvCursor = root.querySelector("[data-paint-color-sv-cursor]");
  const paintHueStrip = root.querySelector("[data-paint-hue-strip]");
  const paintHueHandle = root.querySelector("[data-paint-hue-handle]");
  stageWrap?.removeAttribute("data-stage-ready");
  stageWrap?.setAttribute("data-stage-loading-kind", "boot");
  canvas.style.opacity = "1";
  backgroundCanvas.style.opacity = "0";
  if (hideSidebar) {
    side?.remove();
    root.classList.add("pano-modal-readonly");
  }
  // A pointer going down can start a drag (editor.interaction), which editorAnimating() reads: the frames run
  // while it lasts.
  root.addEventListener("pointerdown", () => scheduler.wake(), true);
  root.addEventListener("pointerdown", (ev) => {
    if (!ev.target.closest("[data-frame-roll-knob]")) hideTooltip();
    if (ev.target.closest(".pano-picker")) return;
    if (ev.target.closest("[data-paint-color-row]")) return;
    root.querySelectorAll(".pano-picker-pop").forEach((el) => {
      el.hidden = true;
    });
    closePaintColorPop(true);
    if (shotEditor && editor.cutoutAspectOpen && !ev.target.closest(".pano-aspect-popover") && !ev.target.closest("[data-action='aspect']")) {
      editor.cutoutAspectOpen = false;
      editor.menuMode = "";
      editor.menuSize.measured = false;
      updateSelectionMenu();
      requestDraw();
    }
    if (uiState.frameRail?.aspectOpen && !ev.target.closest(".pano-frame-aspect-control")) {
      uiState.frameRail.aspectOpen = false;
    }
  });

  const initialSelectedId = savedSelectionId(type, state);
  const editor = {
    mode: "pano",
    selectedId: initialSelectedId,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: DEFAULT_VIEW_HFOV,
    // The view's place for its transitions (pano_space_navigation.js) and the view kept for the node
    // (pano_view_memory.js): this editor stands at the World origin in 3DoF and looks around.
    viewPosition: [0, 0, 0],
    viewDistance: DEFAULT_DISTANCE,
    viewMoved: false,
    spaceMode: "3dof",
    coverage: normalizeCoverageValue(state.coverage),
    historyController: createEditorHistory(state),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: DEFAULT_BRUSH_PRESET_ID,
    paintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintHistory: [],
    customPaintSessionStart: null,
    pointerPos: { x: 0, y: 0, inside: false },
    interaction: null,
    viewInertia: { vx: 0, vy: 0, active: false },
    menuSize: { w: 220, h: 40, measured: false },
    menuMode: "",
    cutoutAspectOpen: false,
    showGrid: getNodeGridVisibility(node?.id, true),
    outputPreviewExpanded: false,
    outputPreviewAnim: 0,
    outputPreviewAnimFrom: 0,
    outputPreviewAnimTo: 0,
    outputPreviewAnimStartTs: 0,
    outputPreviewAnimDurationMs: 180,
    outputPreviewRect: null,
    cutoutPanoDimAlpha: 0,
    cutoutPanoDimFrom: 0,
    cutoutPanoDimTarget: 0,
    cutoutPanoDimStartTs: 0,
    cutoutPanoDimCorners: null,
    cutoutPanoFrameVisual: null,
    cutoutPanoFrameAlpha: 0,
    cutoutPanoFrameFrom: 0,
    cutoutPanoFrameTarget: 0,
    cutoutPanoFrameStartTs: 0,
    frameRollOverlayVisual: null,
    frameRollOverlayAlpha: 0,
    frameRollOverlayFrom: 0,
    frameRollOverlayTarget: 0,
    frameRollOverlayStartTs: 0,
    frameWheelCommitTimer: 0,
    frameWheelChanged: false,
    paintEngine: createPaintEngineManager(),
    paintEngineDescriptorKey: "",
    paintEngineRevisionKey: "",
    paintStrokeRevision: 0,
    paintCompositeRevision: 0,
    livePaintInteractionRevision: 0,
    selectedIds: [],
    _sortedItemsCache: null,
    _strokeGeomCache: new Map(),
    marqueeModifier: false,
    altModifier: false,
    panelLastValues: null,
    panelWasEnabled: false,
    // The view moving to another over a short time (pano_view_transition.js), or null.
    viewTransition: null,
    fullscreen: false,
    fullscreenPrevShowGrid: null,
    // The frame the state is drawn at (view_input.js): the legacy nodes have no Timeline.
    frame: 0,
  };
  if (type === "stickers") {
    editor.selectedId = null;
    state.active.selected_sticker_id = null;
  }
  editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
  const imageCache = new Map();
  const rasterImageCache = new Map();
  const rasterImageAlphaCache = new Map();
  const stillCanvas = createPanoCanvas({ label: "editor.still" });
  stillCanvas.__panoFrameIdx = 0;
  const runtime = {
    // The next frame draws the stage (tickFrame); it waits while the layout settles, keeping the reasons
    // asked for since the last draw.
    dirty: true,
    reasons: new Set(),
    running: true,
    lastTickTs: 0,
    pendingStableLayoutFrames: type === "cutout" ? 2 : 0,
    hasPresentedFrame: false,
    // The three.js canvas needs drawing again. A frame that only changes the 2D overlay leaves it as it
    // is, and the page keeps showing its last frame.
    backgroundDirty: true,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: "",
    // The node's preview has not seen the state since a drag changed it.
    nodePreviewPending: false,
  };
  // Every frame of the editor goes through one scheduler (pano_frame_scheduler.js): the stage draws when
  // something asks for it, and keeps drawing only while something animates (editorAnimating). The
  // playback takes its frames from it too.
  const scheduler = createFrameScheduler({
    requestAnimationFrame: (callback) => requestAnimationFrame(callback),
    cancelAnimationFrame: (id) => cancelAnimationFrame(id),
    draw: (ts, reasons) => tick(ts, reasons),
    animating: () => editorAnimating(),
  });
  // The Stickers and Cutout editors and the read-only Preview modal draw with three.js. The Cutout
  // camera preview draws through the same view as its own owner.
  // A `scene` item or Spark that loaded, and a Spark renderer's sorted splats, change only the editor's views;
  // the sorted splats only the view of that renderer (splatDrawReason).
  // The stage's three.js canvas is the page's own (backgroundCanvas): its frames are not copied.
  const editorView = createEditorView({
    canvas: backgroundCanvas,
    onReady: () => {
      syncCanvasSize();
      requestDraw({ reason: DRAW_REASON.CONTEXT });
    },
    onFailed: () => requestDraw(),
    onUpdate: () => requestDraw({ localOnly: true, reason: DRAW_REASON.MEDIA }),
    onSplats: (owner) => requestDraw({ localOnly: true, reason: splatDrawReason(owner) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      forgetCameraPreviewFrame();
      syncCanvasSize();
      requestDraw({ reason: DRAW_REASON.CONTEXT });
    },
  });
  const frameGateCssRadius = Number.parseFloat(
    getComputedStyle(root).getPropertyValue("--pano-float-radius"),
  ) || 10;
  const setCanvasCursor = (nextCursor) => {
    const cursor = String(nextCursor || "default");
    if (canvas.style.cursor === cursor) return;
    canvas.style.cursor = cursor;
  };
  // The editor's timeouts (pano_timers.js); closeEditor clears those still waiting, so none runs after it.
  const timers = createTimers();
  const tooltip = {
    timer: 0,
    target: null,
  };
  const dragCue = {
    active: false,
    depth: 0,
  };

  const viewController = createPanoInteractionController({
    getView: () => ({ yaw: editor.viewYaw, pitch: editor.viewPitch, fov: editor.viewFov }),
    setView: (next) => {
      editor.viewYaw = wrapYaw(Number(next.yaw || 0));
      editor.viewPitch = clamp(Number(next.pitch || 0), -VIEW_PITCH_LIMIT_DEG, VIEW_PITCH_LIMIT_DEG);
      editor.viewFov = clamp(Number(next.fov || editor.viewFov || DEFAULT_VIEW_HFOV), VIEW_HFOV_MIN_DEG, VIEW_HFOV_MAX_DEG);
    },
    getViewportSize: () => {
      const rect = canvas.getBoundingClientRect();
      return {
        w: Math.max(1, Number(rect.width || canvas.clientWidth || 0)),
        h: Math.max(1, Number(rect.height || canvas.clientHeight || 0)),
      };
    },
    getInvert: () => ({
      x: state.ui_settings?.invert_view_x ? -1 : 1,
      y: state.ui_settings?.invert_view_y ? -1 : 1,
    }),
    getUnwrapRect: () => getUnwrapRect(),
    onInteraction: () => requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW }),
  });

  // --- editor modules: begin (docs/editor-architecture.md) ---
  // Each module takes what it uses from here and calls the others through connect() (editor/modules.js);
  // showEditor takes back what it registers and calls below. A name missing on either side throws.
  const {
    addImageStickerFromFile, applyInitialCutoutFocus, applyRunResult, bindDrag, cancelGesture, closePaintColorPop,
    commitState, disposeMediaSession, editorAnimating, finishKnobRoll, flushFrameWheelCommit, forgetCameraPreviewFrame,
    getUnwrapRect, hidePaintSizePreview, hideTooltip, migrateLegacyEmbeddedAssets, onCanvasDragOver, onCanvasDrop,
    onCanvasMouseMove, onCanvasPointerCancel, onCanvasPointerDown, onCanvasPointerMove, onCanvasPointerUp, onCanvasWheel,
    onDeleteKey, onEscClose, onFrameRollKnobDoubleClick, onFrameRollKnobPointerDown, onFrameRollKnobPointerMove,
    onFullscreenChange, onModifierKeyChange, onMoveKeyDown, onRootChange, onRootClick, onRootInput, onRootPointerOut,
    onRootPointerOver, onSidePanelChange, onSidePanelClick, onSidePanelInput, onUndoRedoKey, onWindowBlur,
    onWindowDragEnter, onWindowDragLeave, onWindowDragOver, onWindowDrop, pushHistory, reconcileExternalStickerFromInputs,
    refreshModalVideoSource, replaceSelectedImageFromFile, requestDraw, restoreView, sampleEditorDiagnostics, saveView,
    setDropCue, settleCanvasConfirm, setPointerPos, stageResizeObserver, stopRenderLoop, syncCanvasSize,
    syncFullscreenButton, syncGridToggleButton, syncLookAtFrameButtonState, syncOutputPreviewToggleButton, syncPaintUi,
    syncUndoRedoButtons, tick, triggerBackgroundPersistenceOnClose, updateCursor, updatePaintColorFromHue,
    updatePaintColorFromSv, updateSelectionMenu, updateSidePanel, watchPixelRatio,
  } = createEditorModules({
    api, app, backgroundCanvas, bgWidget, canvas, closeEditor, comfyMedia, coverageWidget, ctx,
    cutoutPreviewCanvas, cutoutPreviewHost, dragCue, editor, editorView, floatingRightEl,
    floatingTopEl, frameGateCssRadius, frameRailEl, frameRollKnobEl, hideSidebar, imageCache,
    loadPreferredExactLinkedImage, mediaAssetSource, mediaSource, mediaUiImage, node, overlay, paintColorPop,
    paintColorRow, paintColorSv, paintColorSvCursor, paintCursorEl, paintDockEl, paintHueHandle, paintHueStrip,
    paintSizePreviewEl, paintSizePreviewSampleEl, presetWidget, previewMode,
    rasterImageAlphaCache, rasterImageCache, readOnly, resolveEditorOutputPresetWidth, root,
    runtime, scheduler, selectionMenu, setCanvasCursor, shotEditor, stageWrap, state,
    stateWidget, stillCanvas, timers, toolRailEl, tooltip, tooltipEl, type, uiState,
    videoEl, videoTransportEl, viewController, vueModal,
  }, [
    createMediaSession, createHistory, createItems, createSelection, createProjection, createObjectGeometry,
    createPaintLayers, createPaintStrokes, createExternalStickers, createSpace, createViewInput,
    createCameraPreview, createOverlay, createRenderLoop, createPanels,
    createCommit, createCommands, createStickerImport, createCamera, createFrameView, createPaintInput,
    createHitTest, createSelectionMenu, createPointerInput, createPointerView, createPointerFrame,
    createPointerPaint, createPointerMarquee, createPointerTransform, createPointerMultiMove,
    createSidePanelEvents, createModalEvents, createKeyboard,
  ]);
  // --- editor modules: end ---

  stageResizeObserver.observe(canvas);
  watchPixelRatio();

  const flushStateBeforeQueue = () => commitState();
  if (!readOnly) editorSession(node).flushBeforeQueue = flushStateBeforeQueue;

  // The editor's DOM listeners, registered in one place. It returns what closeEditor calls to take back those on
  // document (fullscreen) and on window, each at its own step of the close; the others go with the modal's DOM.
  function bindEditorDom() {
    frameRollKnobEl?.addEventListener("pointerdown", onFrameRollKnobPointerDown);
    frameRollKnobEl?.addEventListener("pointermove", onFrameRollKnobPointerMove);
    frameRollKnobEl?.addEventListener("pointerup", finishKnobRoll);
    frameRollKnobEl?.addEventListener("pointercancel", () => {
      if (editor.interaction?.source === "knob") cancelGesture();
    });
    frameRollKnobEl?.addEventListener("lostpointercapture", () => {
      if (editor.interaction?.source === "knob") cancelGesture();
    });
    frameRollKnobEl?.addEventListener("dblclick", onFrameRollKnobDoubleClick);

    canvas.onpointerdown = onCanvasPointerDown;

    canvas.onpointermove = onCanvasPointerMove;

    canvas.onpointerup = onCanvasPointerUp;

    canvas.onpointercancel = onCanvasPointerCancel;
    // A gesture whose pointer lost the capture without a pointerup is cancelled; after a pointerup none is
    // under way.
    canvas.onlostpointercapture = onCanvasPointerCancel;

    canvas.onauxclick = (e) => {
      if (e.button === 1) e.preventDefault();
    };
    canvas.onmousemove = onCanvasMouseMove;

    canvas.onmouseleave = () => {
      setPointerPos(editor.pointerPos, false);
      updateCursor(editor.pointerPos);
      if (editor.mode === "frame" && editor.primaryTool === "cursor") requestDraw({ localOnly: true, reason: DRAW_REASON.OVERLAY });
    };

    canvas.onwheel = onCanvasWheel;

    canvas.ondragover = onCanvasDragOver;

    canvas.ondrop = onCanvasDrop;

    window.addEventListener("dragenter", onWindowDragEnter, true);
    window.addEventListener("dragover", onWindowDragOver, true);
    window.addEventListener("dragleave", onWindowDragLeave, true);
    window.addEventListener("drop", onWindowDrop, true);

    side?.addEventListener("click", onSidePanelClick);
    side?.addEventListener("input", onSidePanelInput);
    side?.addEventListener("change", onSidePanelChange);
    root.addEventListener("click", onRootClick);
    root.addEventListener("input", onRootInput);
    root.addEventListener("change", onRootChange);
    root.addEventListener("pointerup", (ev) => {
      if (ev.target.closest("[data-video-volume]")) {
        if (typeof ev.target?.blur === "function") ev.target.blur();
        return;
      }
      if (ev.target.closest("[data-paint-size-slider]")) hidePaintSizePreview();
    });
    root.addEventListener("pointercancel", (ev) => {
      if (ev.target.closest("[data-video-volume]")) {
        if (typeof ev.target?.blur === "function") ev.target.blur();
        return;
      }
      if (ev.target.closest("[data-paint-size-slider]")) hidePaintSizePreview();
    });
    root.addEventListener("focusout", (ev) => {
      if (ev.target.closest("[data-paint-size-slider]")) hidePaintSizePreview();
    });
    root.addEventListener("pointerover", onRootPointerOver);
    root.addEventListener("pointerout", onRootPointerOut);
    if (paintColorSv) {
      paintColorSv.onpointerdown = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        bindDrag(ev, (moveEvent) => updatePaintColorFromSv(moveEvent.clientX, moveEvent.clientY));
      };
    }
    if (paintHueStrip) {
      paintHueStrip.onpointerdown = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        bindDrag(ev, (moveEvent) => updatePaintColorFromHue(moveEvent.clientX));
      };
    }
    root.addEventListener("click", (ev) => {
      const target = ev.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
      if (!target) return;
      settleCanvasConfirm(target.getAttribute("data-action") === "confirm-accept");
    });
    document.addEventListener("fullscreenchange", onFullscreenChange);
    window.addEventListener("keydown", onEscClose, true);
    window.addEventListener("keydown", onDeleteKey, true);
    window.addEventListener("keydown", onMoveKeyDown, true);
    window.addEventListener("keydown", onModifierKeyChange, true);
    window.addEventListener("keyup", onModifierKeyChange, true);
    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("keydown", onUndoRedoKey, true);
    overlay.addEventListener("pointerdown", (ev) => {
      if (ev.target === overlay) void closeEditor();
    });
    return {
      unbindDocument: () => {
        document.removeEventListener("fullscreenchange", onFullscreenChange);
      },
      unbindWindow: () => {
        window.removeEventListener("keydown", onEscClose, true);
        window.removeEventListener("keydown", onDeleteKey, true);
        window.removeEventListener("keydown", onMoveKeyDown, true);
        window.removeEventListener("keydown", onModifierKeyChange, true);
        window.removeEventListener("keyup", onModifierKeyChange, true);
        window.removeEventListener("blur", onWindowBlur);
        window.removeEventListener("keydown", onUndoRedoKey, true);
        window.removeEventListener("dragenter", onWindowDragEnter, true);
        window.removeEventListener("dragover", onWindowDragOver, true);
        window.removeEventListener("dragleave", onWindowDragLeave, true);
        window.removeEventListener("drop", onWindowDrop, true);
      },
    };
  }
  const editorDom = bindEditorDom();
  syncGridToggleButton();
  syncFullscreenButton();
  syncOutputPreviewToggleButton();

  const modalPrevOnConnectionsChange = node.onConnectionsChange;
  let modalOnConnectionsChange = null;
  let unregisterModalExternalStickerSync = () => {};
  if (!readOnly && type === "stickers") {
    // The node's onExecuted (pano_preview_runtime.js) runs this once per result.
    unregisterModalExternalStickerSync = registerExternalStickerSync(node, (reason = "sync") => {
      if (reason === "executed") {
        invalidateMediaUiImage(imageCache, EXTERNAL_STICKER_PREVIEW_KEY);
        applyRunResult();
      }
      reconcileExternalStickerFromInputs(reason);
    }, { editor: true });
    modalOnConnectionsChange = function onPanoEditorConnectionsChange(...args) {
      if (typeof modalPrevOnConnectionsChange === "function") {
        modalPrevOnConnectionsChange.apply(this, args);
      }
      // A changed background input drops its stale VIDEO until the node runs again.
      refreshModalVideoSource();
      runExternalStickerSync(this, "connections");
    };
    node.onConnectionsChange = modalOnConnectionsChange;
  }

  let closeEditorPromise = null;
  async function closeEditor() {
    if (closeEditorPromise) return closeEditorPromise;
    closeEditorPromise = (async () => {
      const session = peekEditorSession(node);
      if (session) session.open = false;
      flushFrameWheelCommit();
      if (!readOnly) commitState();
      saveView();
      if (document.fullscreenElement === overlay) {
        document.exitFullscreen?.().catch(() => { });
      }
      editorDom.unbindDocument();
      stateSync(node).liveState = null;
      if (session?.flushBeforeQueue === flushStateBeforeQueue) session.flushBeforeQueue = null;
      peekNodeSurface(node)?.dom?.requestDraw?.();
      node.graph?.setDirtyCanvas?.(true, true);
      app?.canvas?.setDirty?.(true, true);
      hideTooltip();
      stopRenderLoop();
      timers.clearAll();
      // A confirm dialog left open answers Cancel.
      settleCanvasConfirm(false);
      disposeMediaSession();
      editorView.dispose();
      setDropCue(false);
      editorDom.unbindWindow();
      if (!readOnly && type === "stickers") {
        if (node.onConnectionsChange === modalOnConnectionsChange) node.onConnectionsChange = modalPrevOnConnectionsChange;
        unregisterModalExternalStickerSync();
      }
      vueApp.unmount();
      mountHost.remove();
      // The paint engine lets go of its canvases once the paint layer upload, which reads them, is done.
      const uploading = triggerBackgroundPersistenceOnClose();
      const engine = editor.paintEngine;
      Promise.resolve(uploading).finally(() => engine?.dispose());
      closeEditorPromise = null;
      return true;
    })().catch((error) => {
      console.error("[PanoramaCutoutSync] closeEditor failed", error);
      closeEditorPromise = null;
      return false;
    });
    return closeEditorPromise;
  }

  function runBootStep(label, fn, { rollbackState = false } = {}) {
    let snapshot = "";
    try {
      if (rollbackState) snapshot = JSON.stringify(state);
      fn();
    } catch (error) {
      if (snapshot) {
        try {
          const restored = JSON.parse(snapshot);
          Object.keys(state).forEach((key) => delete state[key]);
          Object.assign(state, restored);
          if (!readOnly) commitState();
        } catch (restoreError) {
          console.error(`[PanoramaStickers] editor boot step "${label}" rollback failed`, restoreError);
        }
      }
      uiState.stageWarningDetail = `boot:${label}`;
      console.error(`[PanoramaStickers] editor boot step "${label}" failed`, error);
    }
  }

  runBootStep("view", restoreView);
  runBootStep("cutout-focus", applyInitialCutoutFocus);
  if (!readOnly && type === "stickers") {
    runBootStep("external-sticker-sync", () => reconcileExternalStickerFromInputs("open"), { rollbackState: true });
  }
  void migrateLegacyEmbeddedAssets().catch((error) => {
    uiState.stageWarningDetail = "boot:asset-migration";
    console.error('[PanoramaStickers] editor boot step "asset-migration" failed', error);
  });
  runBootStep("history", () => pushHistory());
  runBootStep("undo-redo", syncUndoRedoButtons);
  runBootStep("paint-ui", syncPaintUi);
  runBootStep("side-panel", updateSidePanel);
  runBootStep("look-at-frame", syncLookAtFrameButtonState);
  runBootStep("video-source", refreshModalVideoSource);
  runBootStep("canvas-size", syncCanvasSize);
  runBootStep("cursor", () => updateCursor(editor.pointerPos));
  // The node surface lets its VIDEO, stills and textures go while the editor covers it.
  editorSession(node).open = true;
  peekNodeSurface(node)?.dom?.requestDraw?.();
  requestDraw();
  sampleEditorDiagnostics();
}

// The Preview's Scene viewer (docs/preview-node.md "`PANO_SCENE` を見る"): what it reads of the node's current
// result (its `source` channel), the editor files of 3D file Stickers in the Scene (one registry for every
// viewer), and its window.
const sceneViewerFiles = createFile3dEditorFiles({ fetchApi: (path, options) => api.fetchApi(path, options), onUpdate: () => redrawSceneViewers() });
const sceneViewerMedia = {
  app,
  uiList: (node, key) => (isNodeOutputMediaCurrent(node, "background") ? comfyMedia.uiList(node, key) : []),
  mediaSource,
  mediaAssetSource,
  revisionOf: mediaPlayheadRevisionToken,
  editorFile: (sticker) => file3dEditorFileOf(sceneViewerFiles, sticker, mediaSource),
  refreshFile: (source) => sceneViewerFiles.refresh(source),
};
// The window is the new UI's Preview window (web_src/main.js sets the opener, ADR 0044 "新旧の境", ADR 0062).
let sceneViewerOpener = () => null;
const openSceneViewer = (node) => sceneViewerOpener(node);

// What the old UI gives the node registration (createPanoEditorExtension). web_src/main.js registers it and
// decides which editor opens (ADR 0044).
export const oldEditorHooks = Object.freeze({
  openEditor: showEditor,
  attachStickers: attachStickersNodePreview,
  attachCutout: attachCutoutPreview,
  attachPreview: attachPreviewNode,
  attachSceneViewer: (node) => attachSceneViewerNode(node, { ...sceneViewerMedia, openViewer: openSceneViewer }),
  openSceneViewer,
  setSceneViewerOpener: (open) => {
    sceneViewerOpener = typeof open === "function" ? open : () => null;
  },
  onSceneViewerExecuted: touchSceneViewer,
  restoreOutput: restoreNodeOutput,
  enableStickersPreview: ENABLE_STICKERS_NODE_PREVIEW,
});
