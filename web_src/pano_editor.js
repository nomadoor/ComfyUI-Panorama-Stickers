import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { createApp, reactive, shallowRef } from "vue";
import {
  attachCutoutPreview,
  attachPreviewNode,
  attachStickersNodePreview,
  restoreNodeOutput,
} from "./pano_node_preview.js";
import { createPanoInteractionController } from "./pano_interaction_controller.js";
import { clamp, wrapYaw } from "./pano_math.js";
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID, applyPresetToStroke } from "./pano_brush_presets.js";
import { createFrameBatch } from "./pano_frame_batch.js";
import { DRAW_REASON, createFrameScheduler } from "./pano_frame_scheduler.js";
import { createPaintEngineManager } from "./pano_paint_engine.js";
import { normalizePaintingState } from "./pano_paint_types.js";
import {
  CAMERA_SHOT_ID,
  cameraShot,
  duplicateSceneSticker,
  editorActive,
  editorStateText,
  fileSource,
  newSceneSticker,
  newStudioCamera,
  newWorldSceneSticker,
  normalizeCoverageValue,
  noteCameraEdit,
  parsePanoEditorState,
  parseSceneEditorState,
  retainActiveCutoutShot,
  sameEditorStateText,
  setCameraField,
  setCameraShot,
  setEditorActive,
  deleteWorldSticker,
  setStickerOpacity,
  setWorldStickerField,
  setWorldStickerTransform,
} from "./pano_editor_state.js";
import { evaluateSticker } from "./pano_scene_eval.js";
import { timelineFps } from "./pano_scene_state.js";
import { setLaneValue } from "./pano_timeline.js";
import { createEditorView, frameViewContext } from "./pano_editor_view.js";
import {
  DEFAULT_DISTANCE,
  cameraFrustumSegments,
  frameView,
  gizmoDragLanes,
  gizmoScreenBox,
  navigationTarget,
  newWorldStickerTransform,
  orbitView,
  panDepth,
  panView,
  planeCorners,
  projectPoint,
  reuseWheelPick,
  segmentsHit,
  zoomView,
} from "./pano_space.js";
import { shownSpaceMode } from "./pano_view_transition.js";
import { presetUsesButton, viewDragAction } from "./pano_view_controls.js";
import { createPanoCanvas, trackPanoCanvas, trackPanoVideo } from "./pano_diagnostics.js";
import {
  contextHalfExtentsPx,
  createDefaultCutoutShot,
  deriveCutoutAspectFromFov,
  deriveCutoutAspectLabelFromFov,
  deriveHorizontalFovDeg,
  aspectFitGateSize,
  fitFocalPx,
  fovPairForGate,
  gateRectFromFocal,
  getCutoutAspectLabel,
  getCutoutCameraParams,
  resolveFrameRollDeg,
  shortestAngleDeltaRad,
  stepCutoutFovPairByWheel,
} from "./pano_cutout_view_math.js";
import { readWheelDirection } from "./pano_wheel.js";
import {
  beginCutoutRollGesture,
  panCutoutShotByScreenDelta,
  parseCutoutAspectPair,
  updateCutoutRollGesture,
} from "./pano_cutout_node_surface.js";
import { installPanoSuiteStylesheet } from "./pano_styles.js";
import {
  ERP_ASPECT,
  buildSelectionMenuModel,
  buildWorldSelectionMenuModel,
  selectionMenuPlacement,
  patchUiButton,
} from "./pano_editor_ui_state.js";
import PanoModal from "./components/PanoModal.vue";
import { buildModalShellPreset } from "./modal_shell_presets.js";
import { ICON } from "./icons.js";
import {
  IMAGE_LOADING,
  isImageLoadFailed,
  markImageFailed,
  markImageLoading,
  markImageReady,
} from "./pano_image_state.js";
import { createComfyMediaAdapter } from "./pano_comfy_media.js";
import {
  createPanoEditorExtension,
  flushPanoStateProducers,
  queuePendingStickerOperation,
} from "./pano_editor_extension.js";
import { isNodeOutputMediaCurrent } from "./pano_preview_video.js";
import { frameAtTime } from "./pano_video_playback.js";
import { hitFrameAffordance, hitStickerSelectionAffordance } from "./pano_sticker_affordance.js";
import {
  decodeStickerImageFile,
  dragHasStickerImageFile,
  isStickerImageFile,
  uploadStickerAssetFile,
} from "./pano_sticker_file_import.js";
import {
  registerExternalStickerSync,
  runExternalStickerSync,
} from "./pano_external_sticker_sync.js";
import {
  CUTOUT_V2_HIDDEN_TOOLS,
  ENABLE_STICKERS_NODE_PREVIEW,
  EXTERNAL_STICKER_PREVIEW_KEY,
  FLOATING_RIGHT_RESERVED_PX,
  FRAME_GATE_EDGE_GAP_PX,
  FRAME_GATE_OCCUPANCY,
  FRAME_GATE_SIDE_GAP_PX,
  FRAME_ROLL_CURSOR,
  LASSO_CURSOR_HOTSPOT_X,
  LASSO_CURSOR_HOTSPOT_Y,
  LASSO_CURSOR_SIZE,
  PAINT_COLOR_SWATCHES,
  RAD2DEG,
  STATE_WIDGET,
  TEXT_INPUT_TYPES,
  WORLD_MIN_SCALE,
  WORLD_UNLIMITED_FIELDS,
} from "./editor/constants.js";
import {
  cloneColor,
  cloneJson,
  colorToCss,
  colorsApproximatelyEqual,
  dirToYawPitch,
  dist2,
  distToSegment2,
  formatParamValue,
  getEditorNodeTitle,
  getLassoCursorBackground,
  getMediaWidthForSizing,
  getWidget,
  hsv01ToRgb,
  isAutoOutputPresetValue,
  isPresetPaintColor,
  logPaintDebug,
  makePaintId,
  parseOutputPresetValue,
  pointInPoly,
  rgb01ToHsv,
  uid,
} from "./editor/helpers.js";
import {
  getNodeGridVisibility,
  loadSharedUiSettings,
  saveSharedUiSettings,
  setNodeGridVisibility,
} from "./editor/ui_settings.js";
import { createEditorModules } from "./editor/modules.js";
import { createMediaSession } from "./editor/media_session.js";
import { createEditorHistory, createHistory } from "./editor/history.js";
import { createItems } from "./editor/items.js";
import { createSelection } from "./editor/selection.js";
import { createProjection } from "./editor/projection.js";
import { createObjectGeometry } from "./editor/object_geometry.js";
import { createPaintLayers } from "./editor/paint_layers.js";
import { createPaintStrokes } from "./editor/paint_strokes.js";
import { createExternalStickers } from "./editor/external_stickers.js";
import { createSpace } from "./editor/space.js";
import { createViewInput } from "./editor/view_input.js";
import { createCameraPreview, getCutoutPreviewViewportSize } from "./editor/camera_preview.js";
import { createOverlay } from "./editor/overlay.js";
import { createRenderLoop } from "./editor/render_loop.js";
import { createPanels } from "./editor/panels.js";
import { createTimeline } from "./editor/timeline.js";
import { createTimelineActions } from "./editor/timeline_actions.js";

const _paintLayerSyncRegistry = new Map();

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

// The Timeline fps a VIDEO input set in the node's current result (ADR 0024), or null. It is brought
// into the range a state keeps, so a faster VIDEO compares equal to the state rebased to it.
function videoTimelineFps(node) {
  if (!isNodeOutputMediaCurrent(node, "background") || !isNodeOutputMediaCurrent(node, "external-sticker")) return null;
  const fps = comfyMedia.uiValue(node, "pano_timeline_fps");
  return Array.isArray(fps) ? timelineFps(fps[0]) : null;
}

// The PANO_SCENE that PanoramaCutoutNode's current result shot (#77): the Scene's state, its Timeline
// length in frames and the span of its background ERP; null for an ERP source or without a current result.
function shotScene(node) {
  if (!isNodeOutputMediaCurrent(node, "background")) return null;
  const [state] = comfyMedia.uiValue(node, "pano_scene_state") || [];
  if (!state || typeof state !== "object") return null;
  const [frames] = comfyMedia.uiValue(node, "pano_timeline_frames") || [];
  const [coverage] = comfyMedia.uiValue(node, "pano_scene_coverage") || [];
  return { state, frames: Number(frames) > 0 ? Number(frames) : null, coverage: normalizeCoverageValue(coverage) };
}

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
  const coverageWidget = getWidget(node, "coverage");
  const bgWidget = getWidget(node, "bg_color");
  const stateWidget = getWidget(node, STATE_WIDGET);

  const getLinkedBackgroundImageForSizing = () => {
    const inputNames = type === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
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

  // PanoramaStickersNode and PanoramaCutoutNode edit state v2 itself (pano_editor_state.js); the legacy
  // nodes edit v1. sceneV2 is the Stickers editor of state v2, cutoutV2 the Cutout one (#77).
  const stateV2 = node.__panoSceneStateV2 === true;
  const sceneV2 = type === "stickers" && stateV2;
  const cutoutV2 = type === "cutout" && stateV2;
  // Panorama Studio (#89) is the Stickers editor of state v2 with the Cutout's Camera, which the user adds
  // and deletes. cameraV2 edits state v2's Camera through the Cutout's shot (cameraShot / setCameraShot);
  // shotEditor has the shot and the Frame view, which have nothing to show while Studio has no Camera.
  const studio = sceneV2 && node.__panoStudio === true;
  const cameraV2 = cutoutV2 || studio;
  const shotEditor = type === "cutout" || studio;
  // A Cutout that shot a PANO_SCENE shows that Scene and edits only its Camera; the Scene sets its Timeline.
  const capture = cutoutV2 ? shotScene(node) : null;
  const state = (stateV2 ? parseSceneEditorState : parsePanoEditorState)(String(stateWidget?.value || ""), {
    outputPreset: resolveEditorOutputPresetWidth(2048),
    backgroundColor: String(bgWidget?.value || "#00ff00"),
    coverage: capture ? capture.coverage : normalizeCoverageValue(coverageWidget?.value),
    sharedUiSettings: loadSharedUiSettings(),
    active: editorActive(node),
    fps: stateV2 ? videoTimelineFps(node) : null,
    scene: capture?.state ?? null,
    camera: cutoutV2,
  });
  node.__panoLiveStateOverride = state;
  node.__panoLiveStateVersion = 0;

  // PanoramaCutoutNode's Camera is the one shot of the Cutout editor, at the playhead (cameraShot), and so
  // is Panorama Studio's while it has one. cutoutShotBase is the shot as it was last derived (null without a
  // Camera); an edit since then is written back to the Camera's Lanes (syncCutoutShot).
  let cutoutShotBase = null;
  if (cameraV2) {
    // A hidden camera does not shoot in Panorama Studio, so it opens without a shot.
    cutoutShotBase = state.camera && (!studio || state.camera.visible !== false) ? cameraShot(state.camera, 0) : null;
    state.shots = cutoutShotBase ? [{ ...cutoutShotBase, position: [...cutoutShotBase.position] }] : [];
    // Panorama Studio opens with nothing selected, as the Stickers editor.
    state.active.selected_shot_id = cutoutShotBase && cutoutV2 ? CAMERA_SHOT_ID : null;
  } else if (type === "cutout") {
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
  const shellPreset = buildModalShellPreset(studio ? "studio" : type);
  const uiState = reactive({
    stageStatus: IMAGE_LOADING,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (shellPreset.viewButtons || []).map((button) => ({ ...button, visible: true, disabled: false })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: shellPreset.spaceButtons?.length
      ? { visible: false, mode: "3dof", frameDisabled: true, modes: shellPreset.spaceButtons, frame: shellPreset.spaceFrameButton }
      : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (shellPreset.toolButtons || []).map((button) => ({
      ...button,
      disabled: false,
      ...(button.key === "add-world" ? { visible: sceneV2 } : {}),
      ...(cutoutV2 && CUTOUT_V2_HIDDEN_TOOLS.has(button.key) ? { visible: false } : {}),
    })),
    floatingButtons: [
      ...(shellPreset.floatingButtons || []).map((button) => ({ ...button, disabled: false })),
      ...(previewMode ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: ICON.fullscreen, disabled: false }] : []),
    ],
    frameRail: {
      visible: false,
      disabled: readOnly,
      aspectOpen: false,
      aspectIcon: ICON.aspect,
      rotateIcon: ICON.rotate_90,
      aspectChoices: [],
      rollKnob: null,
    },
    frameRollKnob: {
      visible: false,
      disabled: readOnly,
      rollDeg: 0,
      displayValue: "0",
      dragging: false,
      armed: false,
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: false,
      icon: ICON.fullscreen,
      label: "Expand Preview",
      tip: "Expand preview",
    },
    paintDock: {
      visible: false,
      activePane: "",
      showColorRow: true,
      colorEnabled: true,
      activeSwatchId: "green",
      customColorActive: false,
      customColorCss: colorToCss({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: false,
      pickerHueColor: colorToCss({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: true,
      historyEntries: Array.from({ length: 8 }, (_, index) => ({ index, color: null })),
      sizeValue: 10,
      sizeText: "10",
      sizeFill: "7.56%",
      sizeDisabled: false,
      showSizeRow: true,
      clearVisible: { paint: true, mask: true },
      activeTools: { paint: "pen", mask: "pen" },
    },
    videoTransport: {
      visible: false,
      ready: false,
      playing: false,
      loop: true,
      duration: 0,
      currentTime: 0,
      progressPct: 0,
      currentTimeLabel: "0:00",
      durationLabel: "0:00",
      frameCount: 0,
      fps: 24,
      hasAudio: false,
      muted: false,
      volume: 1,
      volumePct: 100,
      thumbnails: [],
      thumbnailCount: 9,
      shellMaxWidthPx: 640,
    },
    sidePanel: {},
    timeline: { visible: false },
    easing: null,
    selectionMenu: { visible: false, left: 0, top: 0, items: [] },
    tooltip: { visible: false, text: "", left: 0, top: 0, variant: "" },
    confirmDialog: { visible: false, title: "", text: "", confirmLabel: "Confirm", resolve: null },
    cameraPreview: {
      visible: type === "cutout",
      ready: false,
      settled: false,
      expanded: false,
      width: initialCutoutPreviewSize.width,
      height: initialCutoutPreviewSize.height,
      label: initialCutoutPreviewShot ? "Loading preview" : "Add Frame to preview",
    },
  });
  // The playhead and whether it plays, apart from uiState: they change on every frame of playback, and
  // only the Timeline's playhead, time and key buttons follow them (PanoTimeline.vue).
  const timelinePlayhead = { frame: shallowRef(0), playing: shallowRef(false) };
  const mountHost = document.createElement("div");
  document.body.appendChild(mountHost);
  const onImageFileSelected = ({ intent, file } = {}) => {
    if (!isStickerImageFile(file)) return;
    if (intent === "add") {
      void addImageStickerFromFile(file);
      return;
    }
    if (intent === "add-world") {
      void addWorldStickerFromFile(file);
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
    playhead: timelinePlayhead,
    onClose: () => { void closeEditor(); },
    onTimeline: (action) => onTimelineAction(action),
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
  const portVideoEl = root.querySelector("[data-port-video-element]");
  // The stage and VIDEO elements of PanoModal.vue, counted by the diagnostics.
  trackPanoCanvas(canvas, "editor.stage-overlay");
  trackPanoCanvas(backgroundCanvas, "editor.stage-background");
  trackPanoVideo(videoEl, "editor.video");
  trackPanoVideo(portVideoEl, "editor.port-video");
  const floatingRightEl = root.querySelector(".pano-floating-right");
  const floatingTopEl = root.querySelector(".pano-floating-top");
  const toolRailEl = root.querySelector("[data-tool-rail]");
  const frameRailEl = root.querySelector("[data-frame-rail]");
  const frameRollKnobEl = root.querySelector("[data-frame-roll-knob]");
  const paintDockEl = root.querySelector("[data-paint-dock]");
  const videoTransportEl = root.querySelector(".pano-video-transport");
  const selectionMenu = root.querySelector("[data-selection-menu]");
  // Whether the selection menu shows the world Sticker's menu, which renderEditorView() keeps current.
  let worldMenuShown = false;
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
  let paintSizePreviewTimer = 0;
  stageWrap?.removeAttribute("data-stage-ready");
  stageWrap?.setAttribute("data-stage-loading-kind", "boot");
  canvas.style.opacity = "1";
  backgroundCanvas.style.opacity = "0";
  if (hideSidebar) {
    side?.remove();
    root.classList.add("pano-modal-readonly");
  }
  const commitCustomPaintHistory = () => {
    if (!editor.customPaintSessionStart) return;
    if (colorsApproximatelyEqual(editor.customPaintSessionStart, editor.customPaintColor)) {
      editor.customPaintSessionStart = null;
      return;
    }
    if (isPresetPaintColor(editor.customPaintColor)) {
      editor.customPaintSessionStart = null;
      return;
    }
    const next = [
      cloneColor(editor.customPaintColor),
      ...editor.customPaintHistory.filter((item) => !colorsApproximatelyEqual(item, editor.customPaintColor)),
    ];
    editor.customPaintHistory = next.slice(0, 8);
    editor.customPaintSessionStart = null;
  };
  const closePaintColorPop = (commitHistory = false) => {
    if (!paintColorPop || paintColorPop.hidden) return;
    if (commitHistory) commitCustomPaintHistory();
    else editor.customPaintSessionStart = null;
    paintColorPop.hidden = true;
    uiState.paintDock.colorPopOpen = false;
  };
  const openPaintColorPop = () => {
    if (!paintColorPop) return;
    if (paintColorPop.hidden) editor.customPaintSessionStart = cloneColor(editor.customPaintColor);
    paintColorPop.hidden = false;
    uiState.paintDock.colorPopOpen = true;
  };
  // A pointer going down can start a drag (editor.interaction, timeline.drag), which editorAnimating()
  // reads: the frames run while it lasts.
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

  const initialSelectedId = type === "stickers"
    ? state.active.selected_sticker_id
    : (type === "cutout" ? state.active.selected_shot_id : state.active.selected_shot_id);
  const editor = {
    mode: "pano",
    selectedId: initialSelectedId,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: DEFAULT_DISTANCE,
    viewMoved: false,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
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
    // PanoramaStickersNode: the id of the world Sticker selected in the space view or on its Timeline row
    // (#72). The canvas selection (selectedId) holds sky Stickers only; selecting one clears the other.
    worldSelectedId: null,
    // The mode of the selected world Sticker's gizmo: "translate", "rotate" or "scale".
    gizmoMode: "translate",
    // The gizmo handle under the pointer, or null.
    gizmoAxis: null,
    panelWasEnabled: false,
    // The view moving to another over a short time (pano_view_transition.js), or null.
    viewTransition: null,
    fullscreen: false,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0,
  };
  // The Timeline of PanoramaStickersNode. expanded is null until the user toggles it, and the
  // Timeline then opens only when something is timed. openRows holds the rows showing their Lanes.
  // selection is { owner, lane, frames }: `lane` a Lane's name, or null for every Lane of the row,
  // and the frames in the owner's own time base. drag holds what a Timeline drag started from, and
  // scrubFrame where a scrub of the ruler seeks on the next frame.
  const timeline = { expanded: null, openRows: new Set(), selection: null, drag: null, scrubFrame: 0 };
  // Where the pointer went down on the canvas, until its first move.
  let editPointerDown = null;
  if (type === "stickers") {
    editor.selectedId = null;
    state.active.selected_sticker_id = null;
  }
  editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
  const imageCache = new Map();
  const rasterImageCache = new Map();
  const rasterImageAlphaCache = new Map();
  const rasterErpCanvasCache = new Map();
  const stillCanvas = createPanoCanvas({ label: "editor.still" });
  stillCanvas.__panoFrameIdx = 0;
  // The still of the port Sticker's MP4 (#83).
  const portStillCanvas = createPanoCanvas({ label: "editor.port-still" });
  portStillCanvas.__panoFrameIdx = 0;
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
  // playback and a drag's batched work take their frames from it too.
  const scheduler = createFrameScheduler({
    requestAnimationFrame: (callback) => requestAnimationFrame(callback),
    cancelAnimationFrame: (id) => cancelAnimationFrame(id),
    draw: (ts, reasons) => tick(ts, reasons),
    animating: () => editorAnimating(),
  });
  // A drag's moves change the state at once; what follows from it (the Timeline, the view, the
  // inspector, the playhead of a scrub) runs at most once per frame. The drag's end does the rest once.
  const dragFrames = createFrameBatch({
    requestFrame: (callback) => scheduler.requestFrame(callback),
    cancelFrame: (id) => scheduler.cancelFrame(id),
    tasks: {
      seek: () => playback.seek(timeline.scrubFrame),
      timeline: () => syncTimeline(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        syncCutoutShot();
        requestDraw({ localOnly: true, reason: DRAW_REASON.STATE });
      },
      sidePanel: () => updateSidePanel(),
    },
  });
  // The Stickers and Cutout editors and the read-only Preview modal draw with three.js. The Cutout
  // camera preview draws through the same view as its own owner.
  // A `scene` item that loaded, or Spark's sorted splats, change only the stage.
  // The stage's three.js canvas is the page's own (backgroundCanvas): its frames are not copied.
  const editorView = createEditorView({
    canvas: backgroundCanvas,
    onReady: () => {
      syncCanvasSize();
      requestDraw({ reason: DRAW_REASON.CONTEXT });
    },
    onFailed: () => requestDraw(),
    onUpdate: () => requestDraw({ localOnly: true, reason: DRAW_REASON.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      forgetCameraPreviewFrame();
      syncCanvasSize();
      requestDraw({ reason: DRAW_REASON.CONTEXT });
    },
  });
  let frameWheel = null;
  const frameGateCssRadius = Number.parseFloat(
    getComputedStyle(root).getPropertyValue("--pano-float-radius"),
  ) || 10;
  const setCanvasCursor = (nextCursor) => {
    const cursor = String(nextCursor || "default");
    if (canvas.style.cursor === cursor) return;
    canvas.style.cursor = cursor;
  };
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
      editor.viewPitch = clamp(Number(next.pitch || 0), -89.9, 89.9);
      editor.viewFov = clamp(Number(next.fov || editor.viewFov || 100), 35, 140);
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
    onInteraction: () => scheduler.requestDraw(DRAW_REASON.VIEW),
  });

  // --- editor modules: begin (generated wiring, see docs/editor-architecture.md) ---
  // Each module gets what it uses from here and calls the others through connect() (editor/modules.js).
  const {
    applyInitialCutoutFocus, applyRasterObjectOffset, applyRasterObjectTransform, applySpaceMode,
    applyStrokeGroupOffset, applyStrokeGroupTransform, applyVideoTimelineFps, areAllSelectedItemsLocked,
    bringSelectedToFront, buildCanonicalCutoutStickerState, buildCanonicalSelectedStickerState,
    buildRasterObjectEditCanvas, cameraFrustumLength, cameraShoots, cameraSphere, canRestoreSelectedToInitial,
    cancelViewTransition, clearSelection, clearWorldSelection, collectExternalStickersForClearAll,
    computeStickerVFov, contentSphere, createRasterFrozenObjectsFromCanvas, createRasterSurface,
    currentSpaceCamera, cutoutCamera, deleteSelectedKeyframes, editorAnimating, editorViewInput, ensureGroupFrame,
    ensurePaintingGroupEntry, erpPointToWorldDir, forgetCameraPreviewFrame, frameLocalPointToWorldDir,
    frameSpaceContent, getActivePaintTargetDescriptor, getCutoutInspectorItems, getCutoutSelectableItems,
    getCutoutSelectableItemsForHit, getDisplayListObjects, getHistoryCapabilities, getList, getMultiSelectionGeom,
    getNextStickerZIndex, getOrderedDisplayListObjects, getPaintingGroupList, getRasterObjectCenterUv,
    getRasterObjectItem, getRasterObjectList, getSelectableRasterObjectItems, getSelectableStrokeGroupItems,
    getSelected, getSelectedItems, getSelectedKind, getStrokeGroupCenterUv, getStrokeGroupItem,
    getStrokeGroupStrokes, getUnwrapRect, hasCamera, hasSpaceContent, hitRasterObjectAt,
    invalidateLivePaintPreviewCaches, isCameraSelected, isErpCamera, isExternalSticker, isFreeSpaceView,
    isItemLocked, isRasterObjectItem, isSceneSticker, isShotItem, isSpaceView, isStickerHidden, isStickerItem,
    isStrokeGroupItem, isUploadingSticker, lookingAt, makeRasterObjectSelectionId, makeStrokeGroupSelectionId,
    markObjectVisualsDirty, markPaintCompositeVisualsDirty, markPaintStrokeVisualsDirty, needsPaintingLayerSync,
    objectGeom, onTimelineAction, paintingShown, parseRasterObjectSelectionId, playback, playbackFps, poseOf,
    processFreehandPoints, pushHistory, queueVideoTransportLayout, rasterizeStrokeToSurface,
    rebuildPaintEngineIfNeeded, reconcileExternalStickerFromInputs, refreshModalVideoSource,
    refreshPaintEngineRevisionCache, requestDraw, restoreHistory, restoreSelectedToInitialPose,
    sampleEditorDiagnostics, screenPos, screenPosCss, screenPosToErpPoint, screenPosToFrameAsErpPoint,
    screenToWorldDir, selectWorldSticker, selectedWorldSticker, sendSelectedToBack, setSelectedItem,
    setSelectedItems, setSpaceMode, setSpaceView, shortestWrappedDelta, shotViewCamera, spaceOrigin, spaceScale,
    spaceViewState, stageResizeObserver, startAnimation, startSpaceDrag, stickerCornerOrderSanity,
    stickerImageKey, stopRenderLoop, stopTimelinePlayback, syncCanvasSize, syncFloatingViewButtonState,
    syncFrameRollKnob, syncLookAtFrameButtonState, syncPaintUi, syncPaintingLayerAsync, syncSidePanelControls,
    syncTimeline, syncUndoRedoButtons, syncVideoTransportState, syncViewToggleState, tick, togglePlayback,
    toggleSelectedExternalStickerVisibility, toggleSelectedLock, toggleVideoMuted, transitionView, turnViewTo,
    updateSidePanel, videoCleanupFns, videoState, viewControls, watchPixelRatio, worldDirToFrameLocalPoint,
    worldStickerEditable, writePose, zoomSpaceAt,
  } = createEditorModules({
    api, app, backgroundCanvas, cameraV2, canvas, capture, comfyMedia, commitAndRefreshNode, commitState, ctx,
    cutoutPreviewCanvas, cutoutPreviewHost, cutoutV2, dragFrames, editor, editorView, floatingRightEl,
    frameGateCssRadius, frameViewDistance, getActiveCutoutShot, getBrushPresetIdForTool, getFrameViewLayout,
    getFrameViewRect, getPaintingLayerList, hideSidebar, imageCache, isActiveLassoTool, isPaintCursorEnabled,
    isWorldMenuShown, leaveFrameView, loadPreferredExactLinkedImage, measureFrameSafeRect, mediaAssetSource,
    mediaSource, mediaUiImage, node, paintColorPop, paintColorRow, paintColorSvCursor, paintHueHandle,
    portStillCanvas, portVideoEl, previewMode, rasterErpCanvasCache, rasterImageAlphaCache, rasterImageCache,
    readOnly, rectFromPoints, resolveEditorOutputPresetWidth, runtime, sceneV2, scheduler, setCanvasCursor,
    shotEditor, stageWrap, state, stateV2, stillCanvas, studio, syncCutoutShot, timeline, timelinePlayhead, type,
    uiState, updateCursor, updateSelectionMenu, videoEl, videoTimelineFps, viewController,
  }, [
    createMediaSession, createHistory, createItems, createSelection, createProjection, createObjectGeometry,
    createPaintLayers, createPaintStrokes, createExternalStickers, createSpace, createViewInput,
    createCameraPreview, createOverlay, createRenderLoop, createPanels, createTimeline, createTimelineActions,
  ]);
  // --- editor modules: end ---

  function dragHasImageFiles(e) {
    return dragHasStickerImageFile(e?.dataTransfer);
  }

  function setDropCue(on) {
    const next = !!on;
    if (dragCue.active === next) return;
    dragCue.active = next;
    stageWrap.classList.toggle("drop-active", next);
  }

  // Coordinate sanity: front-facing sticker should have top edge above bottom edge.
  const __sanity = stickerCornerOrderSanity();
  void __sanity;

  function getActivePaintToolKind() {
    return editor.primaryTool === "mask" ? editor.maskTool : editor.paintTool;
  }
  function isActiveLassoTool() {
    return String(getActivePaintToolKind() || "") === "lasso_fill";
  }

  function pruneUnusedAssets() {
    const used = new Set(
      (state.stickers || [])
        .map((s) => String(s?.asset_id || ""))
        .filter((id) => !!id),
    );
    Object.keys(state.assets || {}).forEach((id) => {
      if (!used.has(id)) {
        delete state.assets[id];
        imageCache.delete(id);
      }
    });
  }

  // A left press with the cursor tool in 6DoF on the selected Camera's gizmo grabs it; on the Camera's
  // frustum it selects the Camera. Returns whether the press was taken.
  function startCameraPress(e, p) {
    const gizmo = editorViewInput().space?.gizmo;
    if (isCameraSelected() && gizmo && worldGizmoPointer("hover", p) !== null && worldGizmoPointer("down", p)) {
      editor.interaction = { kind: "world_gizmo", camera: true, mode: gizmo.mode, start: gizmo.transform, base: cutoutCamera(), changed: false };
      canvas.setPointerCapture(e.pointerId);
      updateCursor(p);
      return true;
    }
    const frustum = cameraFrustumSegments(cutoutCamera(), cameraFrustumLength(spaceScale()));
    if (!segmentsHit(currentSpaceCamera(), frustum, p, canvas.width, canvas.height)) return false;
    if (!isCameraSelected()) {
      setSelectedItem(getActiveCutoutShot());
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
    }
    editor.interaction = { kind: "world_select" };
    canvas.setPointerCapture(e.pointerId);
    return true;
  }

  stageResizeObserver.observe(canvas);
  watchPixelRatio();

  async function addImageStickerFromFile(file) {
    if (readOnly || cutoutV2) return;
    if (type !== "stickers" && type !== "cutout") return;
    if (!isStickerImageFile(file)) return;
    if (sceneV2) {
      // A dropped or picked image is added at the frame shown.
      stopTimelinePlayback();
      await addSceneStickerFromFile(file);
      return;
    }
    const aid = uid("asset");
    const operation = queuePendingStickerOperation(node, `add:${aid}`, async () => {
      try {
        const { image: img } = await decodeStickerImageFile(file);
        imageCache.set(aid, img);
        const id = uid("st");
        state.stickers.push({
          id,
          asset_id: aid,
          yaw_deg: editor.viewYaw,
          pitch_deg: editor.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: computeStickerVFov(30, Number(img.naturalWidth || img.width || 1), Number(img.naturalHeight || img.height || 1)),
          rot_deg: 0,
          z_index: getNextStickerZIndex(),
        });
        setSelectedItem(state.stickers[state.stickers.length - 1]);
        forceCursorTool();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        const uploaded = await uploadStickerAssetFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        const liveStickers = Array.isArray(state.stickers) ? state.stickers : [];
        const matching = liveStickers.filter((item) => String(item?.asset_id || "") === aid);
        if (!matching.length) return;
        state.assets[aid] = uploaded;
        pruneUnusedAssets();
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
      } catch (error) {
        delete state.assets[aid];
        imageCache.delete(aid);
        const liveStickers = Array.isArray(state.stickers) ? state.stickers : [];
        const removed = liveStickers.filter((item) => String(item?.asset_id || "") === aid);
        if (removed.length) {
          state.stickers = liveStickers.filter((item) => String(item?.asset_id || "") !== aid);
          if (removed.some((item) => String(item?.id || "") === String(editor.selectedId || ""))) {
            setSelectedItem(null);
          }
          updateSidePanel();
          updateSelectionMenu();
          requestDraw();
          commitAndRefreshNode();
        }
        throw error;
      }
    });
    try {
      await operation;
    } catch { }
  }

  function addImageSticker() {
    if (readOnly) return;
    if (type !== "stickers" && type !== "cutout") return;
    vueModal?.openImagePicker?.("add");
  }

  // PanoramaStickersNode (#72): Add World Image picks an image to place in space.
  function addWorldImageSticker() {
    if (readOnly || !sceneV2) return;
    vueModal?.openImagePicker?.("add-world");
  }

  async function addWorldStickerFromFile(file) {
    if (readOnly || !sceneV2 || !isStickerImageFile(file)) return;
    stopTimelinePlayback();
    await addSceneStickerFromFile(file, "world");
  }

  // Where a world Sticker added now goes (pano_space.js newWorldStickerTransform): on the World content
  // at the center of the view, else ahead of the view. The button that adds it is not over the view, so
  // the center of the view stands for the pointer.
  function newWorldStickerPlace() {
    const center = { x: canvas.width / 2, y: canvas.height / 2 };
    const hit = isSpaceView() ? editorView.pick(currentSpaceCamera(), center.x, center.y, canvas.width, canvas.height) : null;
    return newWorldStickerTransform(spaceViewState(), hit, contentSphere());
  }

  // PanoramaStickersNode: the new Sticker shows from the decoded image while it uploads. Its Source
  // has no file until then, so saving in between leaves it out. A sky Sticker goes where the view looks;
  // a world one where newWorldStickerPlace() puts it.
  async function addSceneStickerFromFile(file, placement = "sky") {
    const id = uid("st");
    const operation = queuePendingStickerOperation(node, `add:${id}`, async () => {
      const { image: img } = await decodeStickerImageFile(file);
      const pose = {
        yaw_deg: editor.viewYaw,
        pitch_deg: editor.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: computeStickerVFov(30, Number(img.naturalWidth || img.width || 1), Number(img.naturalHeight || img.height || 1)),
        rot_deg: 0,
      };
      const source = { kind: "file", filename: "" };
      const sticker = placement === "world"
        ? newWorldSceneSticker(id, source, newWorldStickerPlace())
        : newSceneSticker(id, source, pose, getNextStickerZIndex());
      imageCache.set(stickerImageKey(sticker), img);
      state.stickers.push(sticker);
      if (placement === "world") selectWorldSticker(id);
      else setSelectedItem(sticker);
      forceCursorTool();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      try {
        const uploaded = await uploadStickerAssetFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        const live = state.stickers.find((item) => item.id === id);
        if (!live) return;
        live.source = fileSource(uploaded);
        imageCache.set(stickerImageKey(live), img);
        pushHistory();
        commitAndRefreshNode();
      } catch (error) {
        state.stickers = state.stickers.filter((item) => item.id !== id);
        if (editor.selectedId === id) setSelectedItem(null);
        if (editor.worldSelectedId === id) clearWorldSelection();
        // Edits made while it uploaded were not recorded yet.
        pushHistory();
        commitAndRefreshNode();
        throw error;
      } finally {
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
      }
    });
    try {
      await operation;
    } catch { }
  }

  // PanoramaStickersNode: the Source changes once the image is uploaded. The vFOV of the value and of
  // every Keyframe follows the new image's aspect.
  async function replaceSceneStickerImage(file, id) {
    const operation = queuePendingStickerOperation(node, `replace:${id}:${uid("asset")}`, async () => {
      const { image: img } = await decodeStickerImageFile(file);
      const uploaded = await uploadStickerAssetFile(file, {
        fetchApi: (path, options) => api.fetchApi(path, options),
      });
      const live = state.stickers.find((item) => item.id === id);
      if (!live) return;
      live.source = fileSource(uploaded);
      live.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
      for (const value of [live.size.value, ...live.size.keyframes.map((key) => key.value)]) {
        value.vFOV_deg = computeStickerVFov(value.hFOV_deg, Number(img.naturalWidth || img.width || 1), Number(img.naturalHeight || img.height || 1));
      }
      imageCache.set(stickerImageKey(live), img);
      markObjectVisualsDirty();
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
    });
    try {
      await operation;
    } catch { }
  }

  async function replaceSelectedImageFromFile(file) {
    if (readOnly) return;
    if (type !== "stickers" && type !== "cutout") return;
    const selected = getSelected();
    if (!selected || !isStickerItem(selected) || isExternalSticker(selected)) return;
    if (!isStickerImageFile(file)) return;
    if (sceneV2) {
      await replaceSceneStickerImage(file, selected.id);
      return;
    }
    const selectedId = String(selected.id || "");
    const nextAssetId = uid("asset");
    const operation = queuePendingStickerOperation(node, `replace:${selectedId}:${nextAssetId}`, async () => {
      const liveSelected = (Array.isArray(state.stickers) ? state.stickers : [])
        .find((item) => String(item?.id || "") === selectedId) || null;
      if (!liveSelected || !isStickerItem(liveSelected) || isExternalSticker(liveSelected)) return;
      const previousAssetId = String(liveSelected.asset_id || "");
      const previousAsset = previousAssetId ? cloneJson(state.assets?.[previousAssetId] || null) : null;
      const previousVfov = Number(liveSelected.vFOV_deg || 0);
      const previousCrop = liveSelected.crop && typeof liveSelected.crop === "object"
        ? { ...liveSelected.crop }
        : null;
      try {
        const { image: img } = await decodeStickerImageFile(file);
        imageCache.set(nextAssetId, img);
        liveSelected.asset_id = nextAssetId;
        liveSelected.vFOV_deg = computeStickerVFov(
          Number(liveSelected.hFOV_deg || 30),
          Number(img.naturalWidth || img.width || 1),
          Number(img.naturalHeight || img.height || 1),
        );
        liveSelected.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        markObjectVisualsDirty();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        const uploaded = await uploadStickerAssetFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        const currentSticker = (Array.isArray(state.stickers) ? state.stickers : [])
          .find((item) => String(item?.id || "") === selectedId) || null;
        if (!currentSticker || String(currentSticker.asset_id || "") !== nextAssetId) return;
        state.assets[nextAssetId] = uploaded;
        pruneUnusedAssets();
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
      } catch (error) {
        delete state.assets[nextAssetId];
        imageCache.delete(nextAssetId);
        const currentSticker = (Array.isArray(state.stickers) ? state.stickers : [])
          .find((item) => String(item?.id || "") === selectedId) || null;
        if (currentSticker && String(currentSticker.asset_id || "") === nextAssetId) {
          if (previousAssetId && previousAsset) state.assets[previousAssetId] = previousAsset;
          currentSticker.asset_id = previousAssetId;
          currentSticker.vFOV_deg = previousVfov;
          currentSticker.crop = previousCrop ? { ...previousCrop } : null;
        }
        markObjectVisualsDirty();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        throw error;
      }
    });
    try {
      await operation;
    } catch { }
  }

  function replaceSelectedImage() {
    if (readOnly) return;
    const selected = getSelected();
    if (!selected || !isStickerItem(selected) || isExternalSticker(selected)) return;
    vueModal?.openImagePicker?.("replace");
  }

  async function migrateLegacyEmbeddedAssets() {
    if (readOnly || type !== "stickers") return;
    if (sceneV2) {
      await uploadEmbeddedSceneSources();
      return;
    }
    const assets = state.assets && typeof state.assets === "object" ? state.assets : {};
    const entries = Object.entries(assets).filter(([, asset]) => {
      const t = String(asset?.type || "").toLowerCase();
      const v = String(asset?.value || "");
      return t === "dataurl" && v.startsWith("data:image");
    });
    if (!entries.length) return;
    let changed = false;
    for (const [assetId, asset] of entries) {
      try {
        const dataUrl = String(asset?.value || "");
        if (!dataUrl) continue;
        const blob = await fetch(dataUrl).then((r) => r.blob());
        const ext = String(blob.type || "image/png").split("/")[1] || "png";
        const name = String(asset?.name || `${assetId}.${ext}`);
        const file = new File([blob], name, { type: blob.type || "image/png" });
        const uploaded = await uploadStickerAssetFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        state.assets[assetId] = {
          ...uploaded,
          w: Number(asset?.w || 0),
          h: Number(asset?.h || 0),
        };
        changed = true;
      } catch {
      }
    }
    if (changed) {
      commitAndRefreshNode();
      requestDraw();
    }
  }

  // A Source of state v2 that embeds a data URL (read from a v1 state) becomes an uploaded file.
  async function uploadEmbeddedSceneSources() {
    let changed = false;
    for (const sticker of state.stickers) {
      const dataUrl = sticker.source.data_url;
      if (!dataUrl) continue;
      try {
        const blob = await fetch(dataUrl).then((r) => r.blob());
        const ext = String(blob.type || "image/png").split("/")[1] || "png";
        const file = new File([blob], `${sticker.id}.${ext}`, { type: blob.type || "image/png" });
        const uploaded = await uploadStickerAssetFile(file, {
          fetchApi: (path, options) => api.fetchApi(path, options),
        });
        sticker.source = fileSource(uploaded);
        changed = true;
      } catch {
      }
    }
    if (changed) {
      commitAndRefreshNode();
      requestDraw();
    }
  }

  function addCutoutFrame() {
    if (readOnly || type !== "cutout") return;
    const existing = getActiveCutoutShot();
    if (existing) {
      setSelectedItem(existing);
      editor.mode = "pano";
      // In 6DoF the view turns to the Camera and comes close enough to show its frustum (#77).
      if (cutoutV2 && isFreeSpaceView()) transitionView(frameView(lookingAt(spaceViewState(), existing.position), cameraSphere(), canvas.width, canvas.height));
      else turnViewTo(wrapYaw(Number(existing.yaw_deg || 0)), clamp(Number(existing.pitch_deg || 0), -89.9, 89.9));
      updateSidePanel();
      updateSelectionMenu();
      requestDraw({ cause: "cutout_frame" });
      return;
    }
    const shot = createDefaultCutoutShot({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: wrapYaw(Number(editor.viewYaw || 0)),
      pitchDeg: Number(editor.viewPitch || 0),
      viewFovDeg: Number(editor.viewFov || 90),
    });
    state.shots = [shot];
    setSelectedItem(shot);
    forceCursorTool();
    editor.mode = "pano";
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw({ cause: "cutout_frame" });
  }

  // Add Camera (Panorama Studio, #89): one Camera where the Viewport camera stands and looks
  // (newStudioCamera), selected. The view stays where it is.
  function addStudioCamera() {
    if (readOnly || !studio || hasCamera()) return;
    stopTimelinePlayback();
    state.camera = newStudioCamera(spaceViewState());
    syncCutoutShot();
    setSelectedItem(getActiveCutoutShot());
    forceCursorTool();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw({ cause: "cutout_frame" });
  }

  // Delete on Panorama Studio's selected Camera: the state has no Camera (`camera: null`), and the Frame view
  // and 3DoF follow (followCameraChange). Undo brings it back.
  function deleteStudioCamera() {
    stopTimelinePlayback();
    state.camera = null;
    setSelectedItem(null);
    syncCutoutShot();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw({ cause: "cutout_frame" });
  }

  // An aspect preset of the selected shot. Panorama Studio's 360° preset makes its Camera shoot an ERP, and a
  // ratio makes it shoot through its frame again (ADR 0029).
  function setShotAspect(shot, aspect) {
    if (studio && isShotItem(shot)) {
      state.camera.projection = aspect === ERP_ASPECT ? "erp" : "perspective";
      if (aspect === ERP_ASPECT) return;
    }
    applyCutoutAspect(shot, aspect);
  }

  function clearCutoutFrame() {
    if (readOnly || type !== "cutout") return;
    state.shots = [];
    editor.selectedId = null;
    editor.selectedIds = [];
    if (editor.mode === "frame") editor.mode = "pano";
    editor.cutoutAspectOpen = false;
    state.active.selected_shot_id = null;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }

  function showCanvasConfirm(title, text, confirmLabel = "Clear") {
    return new Promise((resolve) => {
      uiState.confirmDialog = {
        visible: true,
        title: String(title || ""),
        text: String(text || ""),
        confirmLabel: String(confirmLabel || "Confirm"),
        resolve,
      };
    });
  }

  async function clearAll() {
    if (readOnly) return;
    const ok = await showCanvasConfirm(
      "Clear All Paint Data",
      type === "stickers"
        ? "This will remove all paint, mask, and sticker images in the current node."
        : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All",
    );
    if (!ok) return;
    state.painting = normalizePaintingState(null);
    markPaintStrokeVisualsDirty();
    const keptExternalStickers = collectExternalStickersForClearAll();
    if (type === "stickers") {
      // World Stickers are not shown on the canvas, so Clear All keeps them.
      state.stickers = sceneV2 ? state.stickers.filter((item) => item.placement === "world" || keptExternalStickers.includes(item)) : keptExternalStickers;
      if (!sceneV2) state.assets = {};
      editor.selectedId = keptExternalStickers[0]?.id || null;
      editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
      state.active.selected_sticker_id = keptExternalStickers[0]?.id || null;
      pruneUnusedAssets();
    } else {
      const retained = retainActiveCutoutShot(state.shots, state.active.selected_shot_id);
      state.stickers = keptExternalStickers;
      state.assets = {};
      state.shots = retained.shots;
      editor.selectedId = retained.selectedShotId;
      editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
      state.active.selected_sticker_id = null;
      state.active.selected_shot_id = retained.selectedShotId;
      if (!retained.selectedShotId && editor.mode === "frame") editor.mode = "pano";
      editor.cutoutAspectOpen = false;
      pruneUnusedAssets();
    }
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }

  async function clearPaintingLayer(layerKind) {
    if (readOnly) return;
    const kind = layerKind === "mask" ? "mask" : "paint";
    const label = kind === "mask" ? "Mask" : "Paint";
    const strokes = getPaintingLayerList(kind);
    if (!strokes.length && !(editor.interaction?.kind === "draw" && editor.interaction?.layerKind === kind)) return;
    const ok = await showCanvasConfirm(
      `Clear ${label}`,
      `This will remove all ${kind} strokes in the current node.`,
      `Clear ${label}`,
    );
    if (!ok) return;
    if (editor.interaction?.kind === "draw" && editor.interaction?.layerKind === kind) {
      const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
      if (targetDescriptor) editor.paintEngine.cancelActiveStroke(targetDescriptor);
      editor.interaction = null;
    }
    strokes.length = 0;
    state.painting.raster_objects = getRasterObjectList().filter((item) => String(item?.layerKind || "paint") !== kind);
    if (kind === "paint") {
      getPaintingGroupList().length = 0;
    }
    markPaintStrokeVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    syncPaintUi();
    requestDraw();
  }

  function duplicateSelected() {
    if (readOnly) return;
    const selected = getSelected();
    if (!selected) return;
    if (!isStickerItem(selected) || isExternalSticker(selected)) return;
    // A Sticker whose image is still uploading has no file to copy yet.
    if (sceneV2 && isUploadingSticker(selected)) return;
    let copy;
    if (sceneV2) {
      copy = duplicateSceneSticker(selected, uid("st"), getNextStickerZIndex());
    } else {
      copy = JSON.parse(JSON.stringify(selected));
      copy.id = uid("st");
      copy.yaw_deg = wrapYaw((copy.yaw_deg || 0) + 8);
      copy.z_index = getNextStickerZIndex();
    }
    state.stickers.push(copy);
    state.active.selected_sticker_id = copy.id;
    editor.selectedId = copy.id;
    editor.selectedIds = [copy.id];
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSelectionMenu();
    updateSidePanel();
    requestDraw();
  }

  // Delete on the selected world Sticker (deleteWorldSticker). Returns whether a world Sticker was selected.
  function deleteSelectedWorldSticker() {
    const sticker = selectedWorldSticker();
    if (!sticker) return false;
    if (!worldStickerEditable(sticker)) return true;
    stopTimelinePlayback();
    deleteWorldSticker(state, sticker.id);
    clearWorldSelection();
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    syncFloatingViewButtonState();
    requestDraw();
    return true;
  }

  function deleteSelected() {
    // The Cutout's Camera stays; the editor of PanoramaCutoutNode edits nothing else (#77).
    if (readOnly || cutoutV2) return;
    const selectedItems = getSelectedItems();
    const selected = getSelected();
    if (!selected && selectedItems.length === 0) return;
    if (selectedItems.some((item) => isItemLocked(item))) return;
    stopTimelinePlayback();
    if (selectedItems.length > 1) {
      const paintStrokeIds = new Set(selectedItems
        .filter((item) => isStrokeGroupItem(item))
        .map((item) => String(item.actionGroupId || item.id || "")));
      const rasterIds = new Set(selectedItems
        .filter((item) => isRasterObjectItem(item))
        .map((item) => parseRasterObjectSelectionId(item.rasterObjectId || item.id || "")));
      const stickerIds = new Set(selectedItems.filter(isStickerItem).map((item) => String(item.id || "")));
      if (paintStrokeIds.size > 0) {
        state.painting.paint.strokes = (Array.isArray(state.painting?.paint?.strokes) ? state.painting.paint.strokes : [])
          .filter((stroke) => !paintStrokeIds.has(String(stroke?.actionGroupId || "")));
        state.painting.groups = getPaintingGroupList()
          .filter((group) => !paintStrokeIds.has(String(group?.actionGroupId || group?.id || "")));
        markPaintStrokeVisualsDirty();
      }
      if (rasterIds.size > 0) {
        state.painting.raster_objects = getRasterObjectList()
          .filter((item) => !rasterIds.has(String(item?.id || "")));
        markPaintCompositeVisualsDirty();
      }
      if (stickerIds.size > 0) {
        state.stickers = (Array.isArray(state.stickers) ? state.stickers : [])
          .filter((item) => {
            if (!stickerIds.has(String(item?.id || ""))) return true;
            if (!isExternalSticker(item)) return false;
            if (!isStickerHidden(item)) item.visible = false;
            return true;
          });
        pruneUnusedAssets();
        markObjectVisualsDirty();
      }
      editor.selectedId = null;
      editor.selectedIds = [];
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (isStrokeGroupItem(selected)) {
      const gid = String(selected.actionGroupId || selected.id || "").trim();
      state.painting.paint.strokes = (Array.isArray(state.painting?.paint?.strokes) ? state.painting.paint.strokes : [])
        .filter((stroke) => String(stroke?.actionGroupId || "").trim() !== gid);
      state.painting.groups = getPaintingGroupList()
        .filter((group) => String(group?.actionGroupId || group?.id || "").trim() !== gid);
      markPaintStrokeVisualsDirty();
      editor.selectedId = null;
      editor.selectedIds = [];
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (isRasterObjectItem(selected)) {
      const rid = parseRasterObjectSelectionId(selected.rasterObjectId || selected.id || "");
      state.painting.raster_objects = getRasterObjectList()
        .filter((item) => String(item?.id || "").trim() !== rid);
      markPaintCompositeVisualsDirty();
      editor.selectedId = null;
      editor.selectedIds = [];
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (studio && isShotItem(selected)) {
      deleteStudioCamera();
      return;
    }
    if (type === "stickers" || isStickerItem(selected)) {
      if (isExternalSticker(selected)) {
        if (isStickerHidden(selected)) return;
        selected.visible = false;
        markObjectVisualsDirty();
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      state.stickers = state.stickers.filter((s) => s.id !== selected.id);
      pruneUnusedAssets();
      markObjectVisualsDirty();
      editor.selectedId = getList()[0]?.id || null;
      editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
      state.active.selected_sticker_id = editor.selectedId;
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    clearCutoutFrame();
  }

  // Resize the crop to the largest box of `ratio` the viewport allows, without
  // moving the ERP behind it.
  //
  // The presentation scale is `gate size / FOV`, so those three cannot all be
  // chosen freely. Holding the FOV makes the scale follow the aspect, which is
  // the background zooming on every aspect switch. Holding the scale and
  // re-deriving the FOV keeps the background nailed down and still gives each
  // aspect its maximal frame: landscape fills the width, portrait fills the
  // height. The captured solid angle changes, which is the right trade for
  // Frame view — it exists to compose a crop, not to conserve an area.
  //
  // Returns false when there is no measured viewport (aspect edits made from
  // the Panorama tab), so the caller can fall back to a plain FOV derivation.
  function applyGateAspectAtCurrentScale(selected, ratio) {
    const safeRect = runtime.frameSafeRect;
    if (!selected || !safeRect || editor.mode !== "frame") return false;
    const focal = FRAME_GATE_OCCUPANCY * fitFocalPx(safeRect, selected);
    const next = fovPairForGate(aspectFitGateSize(safeRect, ratio), focal);
    selected.hFOV_deg = next.hFOV_deg;
    selected.vFOV_deg = next.vFOV_deg;
    return true;
  }

  function applyCutoutAspect(selected, aspect) {
    if (!selected || selected.locked === true) return;
    const pairs = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9],
    };
    const currentLandscape = (() => {
      const stored = String(selected.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(stored)) {
        const [sw, sh] = stored.split(":").map((value) => Number(value));
        if (Number.isFinite(sw) && Number.isFinite(sh)) return sw >= sh;
      }
      const hf = Number(selected.hFOV_deg || 64);
      const vf = Number(selected.vFOV_deg || 40);
      if (Math.abs(hf - vf) > 1e-6) return hf >= vf;
      return deriveCutoutAspectFromFov(selected) >= 1;
    })();
    let [aw, ah] = pairs[String(aspect)] || pairs["1:1"];
    if ((aw >= ah) !== currentLandscape) [aw, ah] = [ah, aw];
    const ratio = aw / ah;
    if (!applyGateAspectAtCurrentScale(selected, ratio)) {
      const vf = clamp(Number(selected.vFOV_deg || 40), 1, 179);
      selected.vFOV_deg = vf;
      selected.hFOV_deg = deriveHorizontalFovDeg(vf, ratio);
    }
    selected.aspect_id = `${aw}:${ah}`;
  }

  function applyCutoutAspectCustom(selected, w, h) {
    if (!selected || selected.locked === true) return false;
    const pair = parseCutoutAspectPair(w, h);
    if (!pair) return false;
    const ratio = pair.ratio;
    if (!applyGateAspectAtCurrentScale(selected, ratio)) {
      const vf = clamp(Number(selected.vFOV_deg || 40), 1, 179);
      selected.vFOV_deg = vf;
      selected.hFOV_deg = deriveHorizontalFovDeg(vf, ratio);
    }
    selected.aspect_id = pair.label;
    return true;
  }

  // Portrait/landscape toggle inverts the aspect while holding vFOV, exactly
  // like the aspect presets do.
  //
  // Swapping hFOV and vFOV instead would preserve the captured solid angle, but
  // a transposed landscape frame is taller than the viewport, so the whole view
  // has to zoom out to show it. Frame view is about the crop you are composing,
  // not about conserving the captured area, so hold the vertical extent and
  // narrow the horizontal one. The gate keeps filling the height, and the ERP
  // behind it does not move.
  function rotateCutoutAspect90(selected) {
    if (!selected || selected.locked === true) return;
    const storedAspect = String(selected.aspect_id || "").trim();
    const camera = getCutoutCameraParams(selected);
    const aspect = camera.tanHalfX / Math.max(1e-12, camera.tanHalfY);
    const inverted = 1 / Math.max(1e-12, aspect);
    if (!applyGateAspectAtCurrentScale(selected, inverted)) {
      const vf = clamp(Number(selected.vFOV_deg || 60), 1, 179);
      selected.vFOV_deg = vf;
      selected.hFOV_deg = deriveHorizontalFovDeg(vf, inverted);
    }
    if (/^\d+:\d+$/.test(storedAspect)) {
      const [w, h] = storedAspect.split(":");
      selected.aspect_id = `${h}:${w}`;
    } else {
      selected.aspect_id = deriveCutoutAspectLabelFromFov(selected);
    }
  }

  function apply() {
    if (readOnly) return;
    state.projection_model = "pinhole_rectilinear";
    state.alpha_mode = "straight";
    if (presetWidget) state.output_preset = resolveEditorOutputPresetWidth(Number(state.output_preset || 2048));
    if (coverageWidget) state.coverage = normalizeCoverageValue(coverageWidget.value);
    if (bgWidget) state.bg_color = String(bgWidget.value || state.bg_color || "#00ff00");
    commitState();
    node.setDirtyCanvas(true, true);
  }

  function commitState() {
    if (readOnly) return;
    syncCutoutShot();
    noteCameraEdit(state);
    state.coverage = normalizeCoverageValue(state.coverage);
    setEditorActive(node, state.active);
    const text = editorStateText(node, state);
    if (stateWidget && !sameEditorStateText(node, text, String(stateWidget.value ?? ""), { rebased: cameraV2 })) {
      stateWidget.value = text;
      stateWidget.callback?.(text);
    }
  }
  const flushStateBeforeQueue = () => commitState();
  if (!readOnly) node.__panoFlushStateBeforeQueue = flushStateBeforeQueue;
  function persistUiSettings() {
    state.ui_settings = saveSharedUiSettings(state.ui_settings);
    if (!readOnly) {
      commitState();
    }
  }
  function commitAndRefreshNode() {
    if (readOnly) return;
    commitState();
    node.setDirtyCanvas?.(true, true);
  }

  function triggerBackgroundPersistenceOnClose() {
    if (readOnly) return;
    if (needsPaintingLayerSync()) {
      void syncPaintingLayerAsync().catch((error) => {
        console.error("[PanoramaPaintingLayerSync] background close sync failed", error);
      });
    }
  }

  function syncCoverageChangeToNodePreviews(options = {}) {
    const syncPreview = options.syncPreview !== false;
    const syncGraph = options.syncGraph !== false;
    if (syncPreview) {
      node.__panoPreviewNodeRuntime?.requestDraw?.();
      node.__panoDomPreview?.requestDraw?.();
      node.setDirtyCanvas?.(true, false);
    }
    if (syncGraph) {
      node.graph?.setDirtyCanvas?.(true, true);
      app?.canvas?.setDirty?.(true, true);
    }
  }

  function forceCursorTool() {
    if (editor.primaryTool === "cursor") return;
    editor.primaryTool = "cursor";
    syncPaintUi();
    updateSidePanel();
  }

  function supportsErpPainting() {
    return editor.mode === "pano" || editor.mode === "unwrap";
  }

  // PanoramaCutoutNode (#77): writes an edit of the shot since it was last derived to the Camera at the
  // playhead (setCameraShot, by the recording rule), then derives the shot from the Camera again, so it
  // follows the playhead, Keyframe edits and Undo. The shot stays the same object, which interactions
  // hold. `keep` false drops an edit instead (the state was replaced).
  // Panorama Studio's shot comes and goes with its Camera (#89).
  function syncCutoutShot(keep = true) {
    if (!cameraV2) return;
    const before = cutoutShotBase;
    if (!cameraShoots()) {
      cutoutShotBase = null;
      if (state.shots?.length) state.shots = [];
      if (before) followCameraChange(before, null);
      return;
    }
    const shot = state.shots?.[0];
    if (keep && shot && cutoutShotBase) setCameraShot(state.camera, editor.frame, shot, cutoutShotBase);
    cutoutShotBase = cameraShot(state.camera, editor.frame);
    if (shot) Object.assign(shot, cutoutShotBase, { position: [...cutoutShotBase.position] });
    else state.shots = [{ ...cutoutShotBase, position: [...cutoutShotBase.position] }];
    if (!before) followCameraChange(null, cutoutShotBase);
  }

  // Panorama Studio's Camera came or went (#89), by an edit or by Undo. The Frame view ends without one,
  // and 3DoF, which stands at the Camera (spaceOrigin), moves to where it stands now. The view goes there
  // over a transition instead of jumping.
  function followCameraChange(before, after) {
    if (!after && editor.mode === "frame") leaveFrameView(before);
    const to = after?.position ?? [0, 0, 0];
    // A way back to 3DoF on the way goes to where 3DoF stands now.
    if (editor.viewTransition?.end?.mode === "3dof") {
      transitionView({ ...spaceViewState(), position: to }, editor.viewTransition.end);
      return;
    }
    if (editor.mode !== "pano" || editor.spaceMode !== "3dof" || !hasSpaceContent()) return;
    const from = before?.position ?? [0, 0, 0];
    if (from.every((value, axis) => value === to[axis])) return;
    // The way there moves in 6DoF and enters 3DoF when it arrives, as the way back from 6DoF does.
    const view = { ...spaceViewState(), position: from };
    applySpaceMode({ mode: "6dof", position: from, moved: true });
    editor.viewDistance = view.distance;
    transitionView({ ...view, position: to }, { mode: "3dof", moved: false });
  }

  // The Frame view ends while it shows Panorama Studio's shot (its Camera went, or shoots a 360-degree ERP,
  // #89): the panorama view looks where the shot looked, and in 6DoF stands where it stood, so the view does
  // not jump.
  function leaveFrameView(shot) {
    editor.mode = "pano";
    if (!shot) return;
    cancelViewTransition();
    const distance = spaceViewState().distance;
    editor.viewYaw = wrapYaw(shot.yaw_deg);
    editor.viewPitch = clamp(shot.pitch_deg, -89.9, 89.9);
    editor.viewFov = clamp(shot.hFOV_deg, 35, 140);
    if (editor.spaceMode === "6dof") applySpaceMode({ mode: "6dof", position: [...shot.position], moved: true });
    editor.viewDistance = distance;
    runtime.backgroundDirty = true;
  }

  function getActiveCutoutShot() {
    if (!shotEditor) return null;
    const shots = Array.isArray(state.shots) ? state.shots : [];
    if (!shots.length) return null;
    const selectedId = String(state.active.selected_shot_id || "");
    return shots.find((item) => String(item?.id || "") === selectedId) || shots[0] || null;
  }

  function measureFrameSafeRect() {
    if (!canvas) return null;
    const canvasBounds = canvas.getBoundingClientRect?.();
    const scaleX = Number(canvasBounds?.width || 0) > 0 ? canvas.width / canvasBounds.width : 1;
    const scaleY = Number(canvasBounds?.height || 0) > 0 ? canvas.height / canvasBounds.height : 1;
    runtime.frameCanvasScale = Math.min(scaleX, scaleY);
    let left = 24;
    let top = 24;
    const right = Math.max(left + 1, canvas.width - 24);
    let bottom = Math.max(top + 1, canvas.height - 24);
    const railBounds = toolRailEl?.getBoundingClientRect?.();
    const frameRailBounds = frameRailEl?.getBoundingClientRect?.();
    let reservedSide = 24;
    if (railBounds && canvasBounds && railBounds.width > 0 && railBounds.height > 0) {
      reservedSide = Math.max(reservedSide, (railBounds.right - canvasBounds.left) * scaleX + FRAME_GATE_SIDE_GAP_PX);
    }
    if (frameRailBounds && canvasBounds && frameRailBounds.width > 0 && frameRailBounds.height > 0
      && uiState.frameRail?.visible === true) {
      reservedSide = Math.max(reservedSide, (canvasBounds.right - frameRailBounds.left) * scaleX + FRAME_GATE_SIDE_GAP_PX);
    }
    left = Math.max(left, reservedSide);
    const symmetricRight = Math.min(right, canvas.width - reservedSide);
    let reservedVertical = 24;
    const topBounds = floatingTopEl?.getBoundingClientRect?.();
    if (topBounds && canvasBounds && topBounds.width > 0 && topBounds.height > 0) {
      reservedVertical = Math.max(reservedVertical, (topBounds.bottom - canvasBounds.top) * scaleY + FRAME_GATE_EDGE_GAP_PX);
    }
    // Only measure chrome whose size is independent of the active shot. The
    // gate scale is derived from this rect, so anything shot-dependent here
    // closes a feedback loop (shot -> layout -> safe rect -> scale -> the ERP
    // visibly zooming whenever the aspect changes). `.pano-floating-right`
    // hosts the cutout camera preview, whose box follows the shot aspect, so it
    // is reserved by its fixed collapsed height instead of its measured one.
    [paintDockEl, videoTransportEl].forEach((element) => {
      if (!element || !canvasBounds) return;
      const style = getComputedStyle(element);
      if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) <= 0) return;
      const bounds = element.getBoundingClientRect?.();
      if (!bounds || bounds.width <= 0 || bounds.height <= 0) return;
      reservedVertical = Math.max(reservedVertical, (canvasBounds.bottom - bounds.top) * scaleY + FRAME_GATE_EDGE_GAP_PX);
    });
    if (floatingRightEl && canvasBounds) {
      const style = getComputedStyle(floatingRightEl);
      const visible = style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) > 0;
      if (visible) {
        reservedVertical = Math.max(reservedVertical, (FLOATING_RIGHT_RESERVED_PX + FRAME_GATE_EDGE_GAP_PX) * scaleY);
      }
    }
    top = Math.max(top, reservedVertical);
    bottom = Math.max(top + 1, Math.min(bottom, canvas.height - reservedVertical));
    return {
      x: left,
      y: top,
      w: Math.max(1, symmetricRight - left),
      h: Math.max(1, bottom - top),
    };
  }

  // The presentation scale is a pure function of the UI-safe rect and the shot:
  // the gate is always the largest rectangle of the shot's aspect that fits.
  // There is no stored scale, so nothing can drift, ratchet, or go stale.
  //
  // Two useful properties fall out of this and need no special-case code:
  //   - Aspect changes hold vFOV, and every supported aspect is height-bound in
  //     a landscape viewport, so the fit is unchanged and the ERP does not move.
  //   - Wheel scales both tangents by k, which scales the fit by 1/k, so the
  //     gate keeps its screen size while the ERP behind it zooms.
  function getFrameViewLayout(shot = getActiveCutoutShot()) {
    if (!shot || !canvas) return null;
    const safeRect = runtime.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, canvas.width - 48),
      h: Math.max(1, canvas.height - 48),
    };
    return gateRectFromFocal(safeRect, shot, FRAME_GATE_OCCUPANCY * fitFocalPx(safeRect, shot));
  }

  function getFrameViewRect(shot = getActiveCutoutShot()) {
    const layout = getFrameViewLayout(shot);
    return layout ? { x: layout.x, y: layout.y, w: layout.w, h: layout.h } : null;
  }

  function supportsFramePainting() {
    return shotEditor && !!getActiveCutoutShot();
  }

  function zoomFrameViewAt(anchor, direction) {
    const shot = getActiveCutoutShot();
    if (!shot || shot.locked === true) return false;
    const zoomingOut = Number(direction) > 0;
    const next = stepCutoutFovPairByWheel(shot, direction);
    if (!next) return false;
    // The gate keeps its screen size on its own: scaling both tangents by k
    // scales the aspect fit by 1/k, so no presentation compensation is needed.
    // The ERP behind the gate zooms instead, which is the intent.
    //
    // The one hard stop is the projection itself: a rectilinear context can no
    // longer cover the canvas once it nears 90 degrees off-axis, and pushing
    // past that would reopen dark margins. Refuse the step there.
    if (zoomingOut) {
      const projectedFocal = FRAME_GATE_OCCUPANCY * fitFocalPx(
        runtime.frameSafeRect || { w: canvas.width, h: canvas.height },
        next,
      );
      const reach = contextHalfExtentsPx({ width: canvas.width, height: canvas.height }, projectedFocal);
      if (reach.halfW < canvas.width * 0.5 - 1e-6 || reach.halfH < canvas.height * 0.5 - 1e-6) return false;
    }
    shot.hFOV_deg = next.hFOV_deg;
    shot.vFOV_deg = next.vFOV_deg;
    void anchor;
    scheduleFrameWheelCommit();
    updateSidePanel();
    return true;
  }

  // A run of wheel steps in the Frame view is one Undo step, taken once the wheel rests.
  function scheduleFrameWheelCommit() {
    editor.frameWheelChanged = true;
    if (editor.frameWheelCommitTimer) window.clearTimeout(editor.frameWheelCommitTimer);
    editor.frameWheelCommitTimer = window.setTimeout(() => {
      editor.frameWheelCommitTimer = 0;
      if (!editor.frameWheelChanged) return;
      editor.frameWheelChanged = false;
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
    }, 180);
  }

  // --- The Frame view of PanoramaCutoutNode with World content (#77): moving the view moves the Camera
  // itself, as Blender's camera locked to the view. The drags of the 3D view controls orbit and pan it
  // (pano_view_controls.js, pano_space.js), the wheel moves it toward the point under the pointer, and a
  // left drag still turns it where it stands, as in the Frame view of an ERP.
  function isFreeFrameView() {
    return cameraV2 && editor.mode === "frame" && hasSpaceContent();
  }

  // The Frame view's context (frameViewContext): the canvas rect drawn through the shot and the shot that
  // spans it, or null without a shot.
  function frameContext() {
    const shot = getActiveCutoutShot();
    const layout = getFrameViewLayout(shot);
    return shot && layout ? frameViewContext(shot, layout, { width: canvas.width, height: canvas.height }) : null;
  }

  // The pivot distance of the Frame view's moves: the content's size, whatever moves came before, so a
  // pan of the same length moves the Camera the same way after any zoom (like a Blender view locked to
  // its camera). Keyframes and playback move the Camera too, so a pivot left by the last move would not
  // stay where that move put it anyway.
  function frameViewDistance() {
    return contentSphere()?.radius || DEFAULT_DISTANCE;
  }

  // The Camera as a space view (pano_space.js) over the context rect.
  function frameSpaceView(context) {
    const { position, yaw_deg, pitch_deg, roll_deg, hFOV_deg } = context.shot;
    return { position, yaw_deg, pitch_deg, roll_deg, hFOV_deg, distance: frameViewDistance() };
  }

  // The World point of the content under canvas point p in the Frame view that an orbit or a wheel step
  // works on, or null (also over a SPLAT's box, pano_three_view.js pickSurface).
  function pickFrame(context, p) {
    const { rect } = context;
    return editorView.pickSurface(shotViewCamera(context.shot), p.x - rect.x, p.y - rect.y, rect.w, rect.h);
  }

  // The point a Frame view orbit or wheel step at canvas point p works on: the content under it, else the
  // pivot.
  function frameTarget(context, view, p) {
    return navigationTarget(view, pickFrame(context, p), null, spaceScale());
  }

  function frameViewKey(context) {
    return JSON.stringify([frameSpaceView(context), context.rect]);
  }

  function moveCutoutShot(view) {
    const shot = getActiveCutoutShot();
    shot.position = [...view.position];
    shot.yaw_deg = view.yaw_deg;
    shot.pitch_deg = view.pitch_deg;
  }

  // A drag that turns the Camera where it stands (the Frame view's left drag).
  function startPanFrame(p, pointerId) {
    const shot = getActiveCutoutShot();
    if (!shot || readOnly || shot.locked === true) return;
    editor.interaction = {
      kind: "pan_frame", shot, last: p,
      start: { yaw_deg: Number(shot.yaw_deg || 0), pitch_deg: Number(shot.pitch_deg || 0) },
      changed: false,
    };
    updateCursor(p);
    canvas.setPointerCapture(pointerId);
  }

  function startFrameDrag(action, p, pointerId) {
    const context = frameContext();
    if (!context || readOnly) return;
    const view = frameSpaceView(context);
    editor.interaction = action === "orbit"
      ? { kind: "frame_orbit", last: p, pivot: frameTarget(context, view, p), changed: false }
      : { kind: "frame_pan", last: p, depth: panDepth(view, spaceScale()), changed: false };
    updateCursor(p);
    canvas.setPointerCapture(pointerId);
  }

  function dragFrame(it, p) {
    const context = frameContext();
    if (!context) return;
    const view = frameSpaceView(context);
    const dx = p.x - it.last.x;
    const dy = p.y - it.last.y;
    moveCutoutShot(it.kind === "frame_pan"
      ? panView(view, dx, dy, context.rect.w, context.rect.h, it.depth)
      : orbitView(view, dx, dy, canvas.height, it.pivot));
    it.changed = it.changed || dx !== 0 || dy !== 0;
    it.last = p;
    requestDraw({ localOnly: true, cause: "frame_view" });
  }

  function zoomFrameAt(p, direction) {
    const context = frameContext();
    if (!context || readOnly) return;
    const view = frameSpaceView(context);
    // A step reuses the pick of an earlier one as reuseWheelPick() allows, like zoomSpaceAt().
    const now = performance.now();
    const next = { x: p.x, y: p.y, time: now, key: editorView.contentRevision(), view: frameViewKey(context) };
    if (!reuseWheelPick(frameWheel, next)) {
      const hit = pickFrame(context, p);
      frameWheel = { ...next, cost: performance.now() - now, hit };
    }
    moveCutoutShot(zoomView(view, navigationTarget(view, frameWheel.hit, null, spaceScale()), direction, spaceScale()));
    frameWheel.view = frameViewKey(frameContext() ?? context);
    frameWheel.wheelTime = now;
    scheduleFrameWheelCommit();
    updateSidePanel();
    requestDraw({ localOnly: true, cause: "frame_view" });
  }

  function flushFrameWheelCommit() {
    if (editor.frameWheelCommitTimer) {
      window.clearTimeout(editor.frameWheelCommitTimer);
      editor.frameWheelCommitTimer = 0;
    }
    if (!editor.frameWheelChanged) return false;
    editor.frameWheelChanged = false;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    return true;
  }

  function cancelFrameCameraGesture() {
    const interaction = editor.interaction;
    if (!interaction?.shot || !interaction.start
      || (interaction.kind !== "pan_frame" && interaction.kind !== "roll_frame")) return false;
    const cancelledRoll = interaction.kind === "roll_frame";
    if (interaction.kind === "pan_frame") {
      interaction.shot.yaw_deg = interaction.start.yaw_deg;
      interaction.shot.pitch_deg = interaction.start.pitch_deg;
    } else {
      interaction.shot.roll_deg = interaction.start.roll_deg;
    }
    if (cancelledRoll) hideTooltip();
    editor.interaction = null;
    invalidateLivePaintPreviewCaches();
    syncViewToggleState();
    updateSidePanel();
    updateCursor(editor.pointerPos);
    requestDraw({ localOnly: true });
    return true;
  }

  function captureStrokeRadiusSpec(targetSpace, sizePx) {
    const r = Number(sizePx || 0) * 0.5;
    // ERP: normalize against 2048 (full equirectangular canvas reference width).
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, r / 2048),
    };
  }

  function getBrushPresetIdForTool(toolKind) {
    const kind = String(toolKind || "").trim();
    if (kind === "eraser") return DEFAULT_BRUSH_PRESET_ID;
    if (BRUSH_PRESETS[kind]) return kind;
    return editor.activeBrushPresetId || DEFAULT_BRUSH_PRESET_ID;
  }

  function isPaintCursorEnabled() {
    return (editor.primaryTool === "paint" || editor.primaryTool === "mask") && (supportsErpPainting() || supportsFramePainting());
  }

  function isActivePaintCursorVisible() {
    return isPaintCursorEnabled() && editor.pointerPos?.inside === true;
  }

  function setPointerPos(p, inside = true) {
    const nextX = Number(p?.x || 0);
    const nextY = Number(p?.y || 0);
    const nextInside = inside !== false;
    const prev = editor.pointerPos || { x: 0, y: 0, inside: false };
    const changed = prev.inside !== nextInside || Math.abs(prev.x - nextX) > 0.01 || Math.abs(prev.y - nextY) > 0.01;
    editor.pointerPos = { x: nextX, y: nextY, inside: nextInside };
    return changed;
  }

  function getActivePaintCursorDescriptor() {
    if (!isActivePaintCursorVisible()) return null;
    const layerKind = editor.primaryTool === "mask" ? "mask" : "paint";
    const toolKind = layerKind === "mask" ? editor.maskTool : editor.paintTool;
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const rawSize = Number(editor.brushSizes[presetId] ?? 10);
    const size = Math.max(1, rawSize) * Math.max(0.1, Number(preset.sizeScale ?? 1));
    const radius = Math.max(3, size * 0.5);
    const baseColor = layerKind === "mask"
      ? (toolKind === "lasso_fill"
        ? { r: 0, g: 0, b: 0, a: 1 }
        : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 })
      : (toolKind === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : cloneColor(editor.paintColor));
    const fillAlpha = layerKind === "mask"
      ? (toolKind === "lasso_fill" ? 0.18 : 0.2)
      : (toolKind === "eraser" ? 0.06 : clamp(Math.max(0.16, Number(baseColor.a ?? 1) * 0.3), 0.16, 0.52));
    const strokeAlpha = layerKind === "mask"
      ? 0.95
      : (toolKind === "eraser" ? 0.75 : clamp(Math.max(0.46, Number(baseColor.a ?? 1) * 0.92), 0.46, 1));
    return {
      layerKind,
      toolKind,
      preset,
      radius,
      fillStyle: colorToCss(baseColor, fillAlpha),
      strokeStyle: colorToCss(baseColor, strokeAlpha),
      x: Number(editor.pointerPos?.x || 0),
      y: Number(editor.pointerPos?.y || 0),
      hotspotX: radius,
      hotspotY: radius,
    };
  }

  function syncPaintCursorElement() {
    const cursor = getActivePaintCursorDescriptor();
    if (!paintCursorEl) return;
    if (!cursor) {
      paintCursorEl.style.display = "none";
      return;
    }

    let width = cursor.radius * 2;
    let height = cursor.radius * 2;
    let borderRadius = "999px";
    let rotateDeg = 0;
    let background = cursor.fillStyle;
    let border = `1px solid rgba(222, 222, 222, 0.72)`;
    let boxShadow = `0 0 0 1px rgba(52, 52, 52, 0.72)`;
    const borderColorInner = "rgba(222, 222, 222, 0.72)";
    const borderColorOuter = "rgba(52, 52, 52, 0.72)";
    let hotspotX = Number(cursor.hotspotX ?? width * 0.5);
    let hotspotY = Number(cursor.hotspotY ?? height * 0.5);

    if (cursor.toolKind === "lasso_fill") {
      width = LASSO_CURSOR_SIZE;
      height = LASSO_CURSOR_SIZE;
      borderRadius = "0";
      border = "0";
      boxShadow = "none";
      hotspotX = LASSO_CURSOR_HOTSPOT_X;
      hotspotY = LASSO_CURSOR_HOTSPOT_Y;
      background = getLassoCursorBackground(cursor.fillStyle, borderColorOuter, borderColorInner);
    } else if (cursor.layerKind === "mask") {
      background = `repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)`;
    } else if (cursor.toolKind === "marker") {
      const aspect = Math.max(1, Number(cursor.preset?.aspect ?? 1));
      width = Math.max(10, cursor.radius * 2 * aspect);
      height = Math.max(6, cursor.radius * 2);
      borderRadius = `${Math.min(6, height * 0.42)}px`;
      rotateDeg = Number(cursor.preset?.angle?.value || 0) * RAD2DEG;
    } else if (cursor.toolKind === "brush") {
      background = `radial-gradient(circle at 50% 50%, ${cursor.strokeStyle} 0%, ${cursor.fillStyle} 45%, rgba(0,0,0,0) 100%)`;
    } else if (cursor.toolKind === "eraser") {
      background = "rgba(255,255,255,0.14)";
    }

    paintCursorEl.style.display = "block";
    paintCursorEl.style.width = `${Math.round(width)}px`;
    paintCursorEl.style.height = `${Math.round(height)}px`;
    paintCursorEl.style.borderRadius = borderRadius;
    paintCursorEl.style.border = border;
    paintCursorEl.style.boxShadow = boxShadow;
    paintCursorEl.style.background = background;
    paintCursorEl.style.backgroundRepeat = "no-repeat";
    paintCursorEl.style.backgroundPosition = "center";
    paintCursorEl.style.backgroundSize = "contain";
    paintCursorEl.style.transform = `translate(${Math.round(cursor.x - hotspotX)}px, ${Math.round(cursor.y - hotspotY)}px) rotate(${rotateDeg}deg)`;
  }

  function showPaintSizePreview() {
    if (!paintSizePreviewEl || !paintSizePreviewSampleEl) return;
    const layerKind = editor.primaryTool === "mask" ? "mask" : "paint";
    const toolKind = layerKind === "mask" ? editor.maskTool : editor.paintTool;
    if (toolKind === "lasso_fill") return;
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const rawSize = Number(editor.brushSizes[presetId] ?? 10);
    const size = Math.max(1, rawSize) * Math.max(0.1, Number(preset.sizeScale ?? 1));
    const radius = Math.max(6, size * 0.5);
    const isEraser = toolKind === "eraser";
    const baseColor = layerKind === "mask"
      ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 }
      : (isEraser ? { r: 1, g: 1, b: 1, a: 0.22 } : cloneColor(editor.paintColor));
    const fill = layerKind === "mask"
      ? colorToCss(baseColor, 0.22)
      : (isEraser ? "rgba(255,255,255,0.14)" : colorToCss(baseColor, clamp(Math.max(0.18, Number(baseColor.a ?? 1) * 0.34), 0.18, 0.56)));
    const stroke = layerKind === "mask"
      ? colorToCss(baseColor, 0.96)
      : (isEraser ? "rgba(255,255,255,0.72)" : colorToCss(baseColor, clamp(Math.max(0.56, Number(baseColor.a ?? 1) * 0.96), 0.56, 1)));

    let width = radius * 2;
    let height = radius * 2;
    let borderRadius = "999px";
    let rotateDeg = 0;
    let background = fill;
    const borderColorInner = "rgba(222, 222, 222, 0.72)";
    const borderColorOuter = "rgba(52, 52, 52, 0.72)";

    if (layerKind === "mask") {
      background = `repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)`;
    } else if (toolKind === "marker") {
      const aspect = Math.max(1, Number(preset?.aspect ?? 1));
      width = Math.max(16, radius * 2 * aspect);
      height = Math.max(10, radius * 2);
      borderRadius = `${Math.min(8, height * 0.42)}px`;
      rotateDeg = Number(preset?.angle?.value || 0) * RAD2DEG;
    } else if (toolKind === "brush") {
      background = `radial-gradient(circle at 50% 50%, ${stroke} 0%, ${fill} 48%, rgba(0,0,0,0) 100%)`;
    } else if (toolKind === "lasso_fill") {
      width = Math.max(18, radius * 1.8);
      height = width;
      background = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${stroke} 43%, ${stroke} 58%, rgba(0,0,0,0) 59%)`;
    } else if (isEraser) {
      background = "rgba(255,255,255,0.12)";
    }

    paintSizePreviewSampleEl.style.width = `${Math.round(width)}px`;
    paintSizePreviewSampleEl.style.height = `${Math.round(height)}px`;
    paintSizePreviewSampleEl.style.borderRadius = borderRadius;
    paintSizePreviewSampleEl.style.background = background;
    paintSizePreviewSampleEl.style.border = `1px solid ${borderColorInner}`;
    paintSizePreviewSampleEl.style.boxShadow = `0 0 0 1px ${borderColorOuter}`;
    paintSizePreviewSampleEl.style.transform = `rotate(${rotateDeg}deg)`;

    if (paintSizePreviewTimer) {
      clearTimeout(paintSizePreviewTimer);
      paintSizePreviewTimer = 0;
    }
    paintSizePreviewEl.classList.remove("fade-out");
    paintSizePreviewEl.classList.add("show");
  }

  function hidePaintSizePreview() {
    if (!paintSizePreviewEl || !paintSizePreviewEl.classList.contains("show")) return;
    paintSizePreviewEl.classList.add("fade-out");
    if (paintSizePreviewTimer) clearTimeout(paintSizePreviewTimer);
    paintSizePreviewTimer = window.setTimeout(() => {
      paintSizePreviewEl.classList.remove("show", "fade-out");
      paintSizePreviewTimer = 0;
    }, 180);
  }

  function buildFreehandStrokeRecord(layerKind, toolKind, points, targetSpace) {
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const rawSize = editor.brushSizes[presetId] ?? 10;
    const size = Math.max(1, rawSize) * Math.max(0.1, preset.sizeScale ?? 1);
    const radiusSpec = captureStrokeRadiusSpec(targetSpace, size);
    const preparedPoints = points.map((pt) => ({
      ...pt,
      t: Number(pt?.t || 0),
      widthScale: Number.isFinite(Number(pt?.widthScale)) ? Math.max(0, Number(pt.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(pt?.pressureLike)) ? Math.max(0, Number(pt.pressureLike)) : 1,
    }));
    const stroke = {
      id: makePaintId(layerKind),
      actionGroupId: makePaintId("ag"),
      targetSpace: targetSpace && typeof targetSpace === "object"
        ? { ...targetSpace, viewMode: String(editor.mode || "pano") }
        : { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "pano") },
      layerKind,
      toolKind,
      size,
      createdAt: Date.now(),
      color: layerKind === "paint" ? { ...editor.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: radiusSpec.radiusModel,
      radiusValue: radiusSpec.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: preparedPoints.map((pt) => ({ ...pt })),
        points: preparedPoints.map((pt) => ({ ...pt })),
      },
    };
    applyPresetToStroke(stroke, preset);
    logPaintDebug("stroke-created", {
      mode: editor.mode,
      layerKind,
      toolKind,
      presetId,
      presetAspect: Number(preset.aspect ?? 1),
      strokeAspect: Number(stroke.aspect ?? 1),
      stampKind: String(stroke.stampKind || ""),
      size: Number(stroke.size || 0),
      radiusModel: String(stroke.radiusModel || ""),
      radiusValue: Number(stroke.radiusValue || 0),
      targetSpace: { ...stroke.targetSpace },
    });
    return stroke;
  }

  function buildLassoFillStrokeRecord(layerKind, toolKind, points, targetSpace) {
    const preparedPoints = points.map((pt) => ({
      ...pt,
      t: Number(pt?.t || 0),
      widthScale: Number.isFinite(Number(pt?.widthScale)) ? Math.max(0, Number(pt.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(pt?.pressureLike)) ? Math.max(0, Number(pt.pressureLike)) : 1,
    }));
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const stroke = {
      id: makePaintId(layerKind),
      actionGroupId: makePaintId("ag"),
      targetSpace: targetSpace && typeof targetSpace === "object"
        ? { ...targetSpace, viewMode: String(editor.mode || "pano") }
        : { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "pano") },
      layerKind,
      toolKind,
      size: 10,
      createdAt: Date.now(),
      color: layerKind === "paint" ? { ...editor.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: preparedPoints.map((pt) => ({ ...pt })),
      },
    };
    applyPresetToStroke(stroke, preset);
    logPaintDebug("lasso-created", {
      mode: editor.mode,
      layerKind,
      toolKind,
      presetId,
      presetAspect: Number(preset.aspect ?? 1),
      strokeAspect: Number(stroke.aspect ?? 1),
      stampKind: String(stroke.stampKind || ""),
      targetSpace: { ...stroke.targetSpace },
    });
    return stroke;
  }

  function getPaintingLayerList(layerKind) {
    const root = state.painting || (state.painting = normalizePaintingState(null));
    const layer = root[layerKind] || (root[layerKind] = { strokes: [] });
    if (!Array.isArray(layer.strokes)) layer.strokes = [];
    return layer.strokes;
  }

  function appendPaintPoint(interaction, pos, ts = performance.now()) {
    let next;
    if (editor.mode === "frame") {
      // Frame view: convert screen position to ERP UV via frame's world projection.
      // This keeps strokes world-fixed regardless of subsequent frame camera moves.
      const shot = getActiveCutoutShot();
      if (!shot) return false;
      next = screenPosToFrameAsErpPoint(pos, shot, ts);
      if (!next) return false; // out-of-frame — caller (pointermove) handles segmentation
    } else {
      next = screenPosToErpPoint(pos, ts);
    }
    if (!next) return false;
    const rawPoints = interaction.stroke.geometry.rawPoints || interaction.stroke.geometry.points;
    const points = interaction.stroke.geometry.points;
    // Dedup against raw coords so OEF smoothing doesn't cause points to be incorrectly skipped
    const prevRaw = rawPoints[rawPoints.length - 1];
    if (prevRaw) {
      const du = Math.abs(Number(next.u ?? next.x ?? 0) - Number(prevRaw.u ?? prevRaw.x ?? 0));
      const dv = Math.abs(Number(next.v ?? next.y ?? 0) - Number(prevRaw.v ?? prevRaw.y ?? 0));
      if (du < 0.0015 && dv < 0.0015) return false;
    }
    const sample = {
      ...next,
      t: Number(next?.t || 0),
      widthScale: 1,
      pressureLike: 1,
    };
    rawPoints.push({ ...sample });
    points.push({ ...sample });
    // Incremental rendering: send raw point to engine (O(1), no full re-render)
    const targetDescriptor = getActivePaintTargetDescriptor(interaction);
    if (targetDescriptor) {
      const engineTarget = editor.paintEngine.ensureTarget(targetDescriptor);
      editor.paintEngine.appendStrokePoint(engineTarget, Number(sample.u ?? 0), Number(sample.v ?? 0), interaction.stroke);
    }
    return true;
  }

  function appendLassoPoint(interaction, pos, ts = performance.now()) {
    let next;
    if (editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      if (!shot) return false;
      next = screenPosToFrameAsErpPoint(pos, shot, ts);
    } else {
      next = screenPosToErpPoint(pos, ts);
    }
    const points = interaction?.stroke?.geometry?.points;
    if (!next || !Array.isArray(points)) return false;
    const prev = points[points.length - 1];
    if (prev) {
      const du = Math.abs(Number(next.u ?? next.x ?? 0) - Number(prev.u ?? prev.x ?? 0));
      const dv = Math.abs(Number(next.v ?? next.y ?? 0) - Number(prev.v ?? prev.y ?? 0));
      if (du < 0.0015 && dv < 0.0015) return false;
    }
    points.push({
      ...next,
      t: Number(next?.t || 0),
      widthScale: 1,
      pressureLike: 1,
    });
    return true;
  }

  function applyPaintEraserInteraction(interaction) {
    const eraserStroke = interaction?.stroke || null;
    if (!eraserStroke || interaction?.layerKind !== "paint" || String(eraserStroke?.toolKind || "") !== "eraser") return false;
    rebuildPaintEngineIfNeeded();
    const erpDesc = getActivePaintTargetDescriptor();
    const eraserSurface = createRasterSurface(erpDesc.width, erpDesc.height);
    if (!rasterizeStrokeToSurface(eraserSurface, eraserStroke, { w: erpDesc.width, h: erpDesc.height })) return false;
    const eraserData = eraserSurface.ctx?.getImageData(0, 0, erpDesc.width, erpDesc.height)?.data || null;
    if (!eraserData) return false;

    const groupMeta = new Map(getPaintingGroupList().map((group) => [String(group?.actionGroupId || group?.id || "").trim(), group ? { ...group } : null]));
    const nextStrokes = [];
    const nextGroups = [];
    const nextRasterObjects = [...getRasterObjectList().filter((item) => String(item?.layerKind || "paint") !== "paint")];
    let changed = false;
    let nextReplacementZ = getDisplayListObjects().reduce((max, entry) => Math.max(max, Number(entry?.z_index || 0)), -1) + 1;

    function getAlphaBoundsFromData(alphaData, width, height, threshold = 8) {
      let minX = width;
      let minY = height;
      let maxX = -1;
      let maxY = -1;
      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          if (alphaData[(y * width + x) * 4 + 3] <= threshold) continue;
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
      if (maxX < minX || maxY < minY) return null;
      return { minX, minY, maxX, maxY };
    }

    const eraserBoundsPx = getAlphaBoundsFromData(eraserData, erpDesc.width, erpDesc.height, 8);
    if (!eraserBoundsPx) return false;

    function boxesIntersect(a, b) {
      if (!a || !b) return false;
      return !(a.maxX < b.minX || b.maxX < a.minX || a.maxY < b.minY || b.maxY < a.minY);
    }

    function getGroupApproxBoundsPx(group, strokes) {
      const frame = ensureGroupFrame(group?.actionGroupId || group?.id || "", "paint", strokes);
      if (!frame) return null;
      const minU = frame.centerUv.u - frame.halfW;
      const maxU = frame.centerUv.u + frame.halfW;
      const minV = frame.centerUv.v - frame.halfH;
      const maxV = frame.centerUv.v + frame.halfH;
      const width = erpDesc.width;
      const height = erpDesc.height;
      return {
        minX: Math.floor(((minU % 1 + 1) % 1) * width),
        maxX: Math.ceil((((maxU % 1 + 1) % 1) * width)),
        minY: Math.floor(clamp(minV, 0, 1) * height),
        maxY: Math.ceil(clamp(maxV, 0, 1) * height),
        wraps: (maxU - minU) >= 1 || minU < 0 || maxU > 1,
      };
    }

    function getRasterApproxBoundsPx(item) {
      const bbox = item?.bbox || null;
      if (!bbox) return null;
      const tf = item?.transform || {};
      const width = erpDesc.width;
      const height = erpDesc.height;
      const u0 = Number(bbox.u0 || 0) + Number(tf.du || 0);
      const u1 = Number(bbox.u1 || 0) + Number(tf.du || 0);
      const v0 = Number(bbox.v0 || 0) + Number(tf.dv || 0);
      const v1 = Number(bbox.v1 || 0) + Number(tf.dv || 0);
      return {
        minX: Math.floor((((u0 % 1) + 1) % 1) * width),
        maxX: Math.ceil((((u1 % 1) + 1) % 1) * width),
        minY: Math.floor(clamp(v0, 0, 1) * height),
        maxY: Math.ceil(clamp(v1, 0, 1) * height),
        wraps: (u1 - u0) >= 1 || u0 < 0 || u1 > 1,
      };
    }

    function approxBoundsHit(bounds) {
      if (!bounds) return true;
      if (bounds.wraps) {
        return boxesIntersect(eraserBoundsPx, { minX: 0, maxX: bounds.maxX, minY: bounds.minY, maxY: bounds.maxY })
          || boxesIntersect(eraserBoundsPx, { minX: bounds.minX, maxX: erpDesc.width - 1, minY: bounds.minY, maxY: bounds.maxY });
      }
      return boxesIntersect(eraserBoundsPx, bounds);
    }

    function eraseCanvasAndDetectTouch(sourceCanvas) {
      if (!sourceCanvas) return { touched: false, canvas: null };
      const working = createRasterSurface(erpDesc.width, erpDesc.height, { readback: true });
      working.ctx.drawImage(sourceCanvas, 0, 0);
      const beforeData = working.ctx.getImageData(0, 0, erpDesc.width, erpDesc.height);
      working.ctx.save();
      working.ctx.globalCompositeOperation = "destination-out";
      working.ctx.drawImage(eraserSurface.canvas, 0, 0);
      working.ctx.restore();
      const afterData = working.ctx.getImageData(0, 0, erpDesc.width, erpDesc.height);
      for (let i = 0; i < erpDesc.width * erpDesc.height; i += 1) {
        const eraserAlpha = eraserData[i * 4 + 3];
        if (eraserAlpha <= 8) continue;
        const beforeAlpha = beforeData.data[i * 4 + 3];
        const afterAlpha = afterData.data[i * 4 + 3];
        if (beforeAlpha > afterAlpha) {
          return { touched: true, canvas: working.canvas };
        }
      }
      return { touched: false, canvas: null };
    }

    function createReplacementObjects(canvas, layerKind, baseMeta) {
      const baseZ = Number(baseMeta?.z_index);
      const created = createRasterFrozenObjectsFromCanvas(canvas, layerKind, baseMeta).map((item, index) => ({
        ...item,
        z_index: Number.isFinite(baseZ) ? baseZ + (index * 0.001) : nextReplacementZ + (index * 0.001),
      }));
      if (created.length) {
        nextReplacementZ = Math.max(nextReplacementZ, ...created.map((item) => Number(item?.z_index || 0))) + 1;
      }
      return created;
    }

    for (const group of getPaintingGroupList()) {
      const gid = String(group?.actionGroupId || group?.id || "").trim();
      if (!gid) continue;
      const groupStrokes = getStrokeGroupStrokes(gid, "paint");
      if (!approxBoundsHit(getGroupApproxBoundsPx(group, groupStrokes))) {
        nextGroups.push(group);
        nextStrokes.push(...groupStrokes);
        continue;
      }
      const groupTarget = editor.paintEngine?.getGroupTarget?.(gid) || null;
      const groupCanvas = groupTarget?.committedPaint?.canvas || null;
      if (!groupCanvas) {
        nextGroups.push(group);
        nextStrokes.push(...groupStrokes);
        continue;
      }
      const erased = eraseCanvasAndDetectTouch(groupCanvas);
      if (!erased.touched || !erased.canvas) {
        nextGroups.push(group);
        nextStrokes.push(...groupStrokes);
        continue;
      }
      changed = true;
      const created = createReplacementObjects(erased.canvas, "paint", groupMeta.get(gid) || group || {});
      nextRasterObjects.push(...created);
    }

    for (const rasterObject of getRasterObjectList().filter((item) => String(item?.layerKind || "paint") === "paint")) {
      if (!approxBoundsHit(getRasterApproxBoundsPx(rasterObject))) {
        nextRasterObjects.push(rasterObject);
        continue;
      }
      const rasterCanvas = buildRasterObjectEditCanvas(rasterObject, null);
      if (!rasterCanvas) {
        nextRasterObjects.push(rasterObject);
        continue;
      }
      const erased = eraseCanvasAndDetectTouch(rasterCanvas);
      if (!erased.touched || !erased.canvas) {
        nextRasterObjects.push(rasterObject);
        continue;
      }
      changed = true;
      const created = createReplacementObjects(erased.canvas, "paint", rasterObject);
      nextRasterObjects.push(...created);
    }

    if (!changed) return false;
    state.painting.paint.strokes = nextStrokes;
    state.painting.groups = nextGroups.sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
    state.painting.raster_objects = nextRasterObjects.sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
    clearSelection({ preservePanelValues: false });
    return true;
  }

  // Commit the current frame-stroke segment to state and start a fresh stroke with the
  // same action group.  Called when the pointer crosses the frame boundary mid-drag so
  // that the segment drawn inside the frame is preserved without a "teleport" line to
  // wherever the pointer re-enters.
  function _segmentFrameStroke(it) {
    const rawPoints = it.stroke?.geometry?.rawPoints || it.stroke?.geometry?.points || [];
    if (rawPoints.length >= 1) {
      // Save the completed inside-frame segment.
      commitPaintInteraction(it);
      const targetDescriptor = getActivePaintTargetDescriptor(it);
      if (targetDescriptor) {
        if (String(it.stroke?.toolKind || "") === "eraser") {
          editor.paintEngine.cancelActiveStroke(targetDescriptor);
        } else {
          editor.paintEngine.commitActiveStroke(it.stroke, targetDescriptor);
        }
      }
      it._hasCommittedSegments = true;
    }
    // Start a new blank stroke — same tool/layer/style but fresh geometry.
    const prev = it.stroke;
    const targetSpace = { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "frame") };
    const newStroke = buildFreehandStrokeRecord(it.layerKind, prev.toolKind, [], targetSpace);
    newStroke.actionGroupId = prev.actionGroupId; // keep same undo group
    it.stroke = newStroke;
    const targetDescriptor = getActivePaintTargetDescriptor(it);
    if (targetDescriptor) {
      editor.paintEngine.beginStroke(newStroke, targetDescriptor);
    }
  }

  function _segmentFrameLassoFill(it) {
    const points = it.stroke?.geometry?.points || [];
    if (points.length >= 3) {
      commitPaintInteraction(it);
      const targetDescriptor = getActivePaintTargetDescriptor(it);
      if (targetDescriptor) editor.paintEngine.commitActiveStroke(it.stroke, targetDescriptor);
      it._hasCommittedSegments = true;
    }
    const prev = it.stroke;
    const targetSpace = { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "frame") };
    const newStroke = buildLassoFillStrokeRecord(it.layerKind, prev.toolKind, [], targetSpace);
    newStroke.actionGroupId = prev.actionGroupId;
    it.stroke = newStroke;
    const targetDescriptor = getActivePaintTargetDescriptor(it);
    if (targetDescriptor) {
      editor.paintEngine.beginStroke(newStroke, targetDescriptor);
    }
  }

  function commitPaintInteraction(interaction) {
    const geometry = interaction?.stroke?.geometry || null;
    if (!geometry) return false;
    const toolKind = String(interaction?.stroke?.toolKind || "pen");
    if (interaction.layerKind === "paint" && toolKind === "eraser") {
      if (geometry.geometryKind !== "lasso_fill") {
        geometry.processedPoints = processFreehandPoints(geometry.rawPoints || geometry.points || [], interaction.stroke.targetSpace, true);
      }
      return applyPaintEraserInteraction(interaction);
    }
    const shouldCreatePaintGroup = interaction.layerKind === "paint" && toolKind !== "eraser";
    if (geometry.geometryKind === "lasso_fill") {
      const points = Array.isArray(geometry.points) ? geometry.points : [];
      if (points.length < 3) return false;
      if (shouldCreatePaintGroup) ensurePaintingGroupEntry(interaction.stroke?.actionGroupId);
      getPaintingLayerList(interaction.layerKind).push(interaction.stroke);
      return true;
    }
    const rawPoints = geometry.rawPoints || geometry.points || [];
    if (rawPoints.length < 1) return false;
    // ADR 0006: processedPoints is durable; rasterizer (Python) uses it directly.
    geometry.processedPoints = processFreehandPoints(rawPoints, interaction.stroke.targetSpace, true);
    if (shouldCreatePaintGroup) ensurePaintingGroupEntry(interaction.stroke?.actionGroupId);
    getPaintingLayerList(interaction.layerKind).push(interaction.stroke);
    return true;
  }

  function hitObjectAt(p) {
    if (shotEditor && editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      const rect = getFrameViewRect(shot);
      if (!shot || !rect) return null;
      const insideRect = Number(p?.x || 0) >= Number(rect.x || 0)
        && Number(p?.x || 0) <= Number(rect.x || 0) + Number(rect.w || 0)
        && Number(p?.y || 0) >= Number(rect.y || 0)
        && Number(p?.y || 0) <= Number(rect.y || 0) + Number(rect.h || 0);
      if (!insideRect) return null;
      const erpPoint = screenPosToFrameAsErpPoint(p, shot, performance.now());
      const dir = erpPoint ? erpPointToWorldDir(erpPoint) : null;
      if (dir) {
        for (const item of getCutoutSelectableItemsForHit()) {
          if (!isStickerItem(item)) continue;
          const local = worldDirToFrameLocalPoint(item, dir);
          if (!local) continue;
          if (Number(local.x) >= 0 && Number(local.x) <= 1 && Number(local.y) >= 0 && Number(local.y) <= 1) {
            const geom = objectGeom(item);
            if (geom?.visible) return { item, geom };
          }
        }
      }
      const items = getOrderedDisplayListObjects(false).slice().sort((a, b) => Number(b?.z_index || 0) - Number(a?.z_index || 0));
      for (const entry of items) {
        if (entry.type === "strokeGroup") {
          const item = getStrokeGroupItem(makeStrokeGroupSelectionId("paint", entry.actionGroupId || entry.id || ""));
          if (!item) continue;
          const geom = objectGeom(item);
          if (!geom?.visible) continue;
          const paths = Array.isArray(geom.strokePaths) ? geom.strokePaths : [];
          for (const path of paths) {
            const pts = Array.isArray(path?.points) ? path.points : [];
            if (!pts.length) continue;
            if (path.closed && pts.length >= 3 && pointInPoly(p, pts)) return { item, geom };
            const threshold = Math.max(8, Number(path?.lineWidth || 0) * 0.5 + 6);
            for (let i = 0; i < pts.length - 1; i += 1) {
              if (distToSegment2(p, pts[i], pts[i + 1]) <= threshold * threshold) return { item, geom };
            }
            if (pts.length === 1 && dist2(p, pts[0]) <= threshold * threshold) return { item, geom };
          }
          continue;
        }
        if (entry.type === "rasterObject") {
          const item = getRasterObjectItem(makeRasterObjectSelectionId(entry.item?.id || entry.id || ""));
          if (!item) continue;
          const geom = objectGeom(item);
          if (hitRasterObjectAt(item, geom, p, erpPoint)) return { item, geom };
          continue;
        }
        const item = entry.item;
        if (!item || !isStickerItem(item)) continue;
        if (!dir) continue;
        const local = worldDirToFrameLocalPoint(item, dir);
        if (!local) continue;
        if (Number(local.x) >= 0 && Number(local.x) <= 1 && Number(local.y) >= 0 && Number(local.y) <= 1) {
          const geom = objectGeom(item);
          if (geom?.visible) return { item, geom };
        }
      }
      return null;
    }
    const items = [
      ...getOrderedDisplayListObjects(false)
      .slice()
      .sort((a, b) => Number(b?.z_index || 0) - Number(a?.z_index || 0))
      .map((entry) => {
        if (entry.type === "strokeGroup") {
          return getStrokeGroupItem(makeStrokeGroupSelectionId("paint", entry.actionGroupId || entry.id || ""));
        }
        if (entry.type === "rasterObject") {
          return getRasterObjectItem(makeRasterObjectSelectionId(entry.item?.id || entry.id || ""));
        }
        return entry.item;
      })
      .filter(Boolean),
      ...(shotEditor ? getCutoutSelectableItemsForHit().filter((item) => isShotItem(item)) : []),
    ];
    for (const item of items) {
      if (isStrokeGroupItem(item)) {
        const geom = objectGeom(item);
        if (!geom?.visible) continue;
        const paths = Array.isArray(geom.strokePaths) ? geom.strokePaths : [];
        for (const path of paths) {
          const pts = Array.isArray(path?.points) ? path.points : [];
          if (!pts.length) continue;
          if (path.closed && pts.length >= 3 && pointInPoly(p, pts)) return { item, geom };
          const threshold = Math.max(8, Number(path?.lineWidth || 0) * 0.5 + 6);
          for (let i = 0; i < pts.length - 1; i += 1) {
            if (distToSegment2(p, pts[i], pts[i + 1]) <= threshold * threshold) return { item, geom };
          }
          if (pts.length === 1 && dist2(p, pts[0]) <= threshold * threshold) return { item, geom };
        }
        continue;
      }
      if (isRasterObjectItem(item)) {
        const geom = objectGeom(item);
        if (!geom?.visible) continue;
        if (hitRasterObjectAt(item, geom, p)) return { item, geom };
        continue;
      }
      const g = objectGeom(item);
      if (!g.visible) continue;
      if (pointInPoly(p, g.corners)) return { item, geom: g };
    }
    return null;
  }

  function handleHit(geom, p, item = null) {
    if (!geom || !geom.visible) return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
    if (isStickerItem(item)) return hitStickerSelectionAffordance(geom, p);
    if (geom.kind === "strokeGroup") {
      const cornerIdx = geom.corners.findIndex((c) => dist2(c, p) <= 11 * 11);
      if (cornerIdx >= 0) {
        const c = geom.corners[cornerIdx];
        const vx = c.x - geom.center.x;
        const vy = c.y - geom.center.y;
        const cursor = (vx * vy) >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx, cursor };
      }
      const paths = Array.isArray(geom.strokePaths) ? geom.strokePaths : [];
      for (const path of paths) {
        const pts = Array.isArray(path?.points) ? path.points : [];
        if (path.closed && pts.length >= 3 && pointInPoly(p, pts)) return { kind: "move", cursor: "default" };
        const threshold = Math.max(8, Number(path?.lineWidth || 0) * 0.5 + 6);
        for (let i = 0; i < pts.length - 1; i += 1) {
          if (distToSegment2(p, pts[i], pts[i + 1]) <= threshold * threshold) return { kind: "move", cursor: "default" };
        }
      }
      if (pointInPoly(p, geom.corners)) return { kind: "move", cursor: "default" };
      return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
    }
    if (geom.kind === "rasterObject") {
      const cornerIdx = geom.corners.findIndex((c) => dist2(c, p) <= 11 * 11);
      if (cornerIdx >= 0) {
        const c = geom.corners[cornerIdx];
        const vx = c.x - geom.center.x;
        const vy = c.y - geom.center.y;
        const cursor = (vx * vy) >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx, cursor };
      }
      if (pointInPoly(p, geom.corners)) return { kind: "move", cursor: "default" };
      return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
    }
    return hitFrameAffordance(geom, p, {
      edges: type === "cutout" || isShotItem(item),
      resize: !(isShotItem(item) && isErpCamera()),
      emptyCursor: editor.mode === "pano" ? "grab" : "default",
    });
  }

  function rectFromPoints(a, b) {
    return {
      x0: Math.min(Number(a?.x || 0), Number(b?.x || 0)),
      y0: Math.min(Number(a?.y || 0), Number(b?.y || 0)),
      x1: Math.max(Number(a?.x || 0), Number(b?.x || 0)),
      y1: Math.max(Number(a?.y || 0), Number(b?.y || 0)),
    };
  }

  function rectContainsPoint(rect, point) {
    return !!rect && !!point
      && Number(point.x) >= Number(rect.x0)
      && Number(point.x) <= Number(rect.x1)
      && Number(point.y) >= Number(rect.y0)
      && Number(point.y) <= Number(rect.y1);
  }

  function rectIntersectsGeom(rect, geom) {
    if (!rect || !geom?.visible || !Array.isArray(geom.corners)) return false;
    if (geom.corners.some((corner) => rectContainsPoint(rect, corner))) return true;
    const cx = (Number(rect.x0) + Number(rect.x1)) * 0.5;
    const cy = (Number(rect.y0) + Number(rect.y1)) * 0.5;
    if (pointInPoly({ x: cx, y: cy }, geom.corners)) return true;
    return false;
  }

  function updateCursor(p) {
    syncPaintCursorElement();
    if (editor.interaction) {
      if (editor.interaction.kind === "paint_stroke" || editor.interaction.kind === "paint_lasso_fill") setCanvasCursor("none");
      else if (editor.interaction.kind === "view") setCanvasCursor("grabbing");
      else if (editor.interaction.kind === "pan_frame") setCanvasCursor("grabbing");
      else if (editor.interaction.kind === "space_pan" || editor.interaction.kind === "frame_pan") setCanvasCursor("move");
      else if (editor.interaction.kind === "space_orbit" || editor.interaction.kind === "frame_orbit") setCanvasCursor("grabbing");
      else if (editor.interaction.kind === "world_gizmo") setCanvasCursor("grabbing");
      else if (editor.interaction.kind === "roll_frame") setCanvasCursor("grabbing");
    else if (editor.interaction.kind === "move" || editor.interaction.kind === "move_multi" || editor.interaction.kind === "move_stroke_group" || editor.interaction.kind === "move_raster_object") setCanvasCursor("move");
      else if (editor.interaction.kind === "scale" || editor.interaction.kind === "scale_x" || editor.interaction.kind === "scale_y" || editor.interaction.kind === "scale_raster_object") setCanvasCursor(editor.interaction.cursor || "nwse-resize");
      else if (editor.interaction.kind === "rotate") setCanvasCursor("grabbing");
      else setCanvasCursor("default");
      return;
    }
    if (isActivePaintCursorVisible()) {
      setCanvasCursor("none");
      return;
    }
    if (editor.mode === "frame") {
      if (editor.altModifier && !readOnly) {
        setCanvasCursor(FRAME_ROLL_CURSOR);
        return;
      }
      if (editor.primaryTool !== "cursor") {
        setCanvasCursor("default");
        return;
      }
      setCanvasCursor("grab");
      return;
    }
    if (editor.primaryTool === "cursor" && editor.marqueeModifier) {
      setCanvasCursor("default");
      return;
    }
    if (editor.gizmoAxis) {
      setCanvasCursor("grab");
      return;
    }
    const selected = getSelected();
    const geom = selected ? objectGeom(selected) : null;
    const selectedLocked = selected ? isItemLocked(selected) : false;
    const h = selectedLocked ? { kind: "none", cursor: "default" } : handleHit(geom, p, selected);
    if (!selectedLocked && h.kind !== "none") {
      setCanvasCursor(h.cursor);
      return;
    }
    if (editor.primaryTool === "cursor") {
      const hit = hitObjectAt(p);
      if (hit) {
        setCanvasCursor("default");
        return;
      }
    }
    setCanvasCursor(editor.mode === "pano" ? "grab" : "default");
  }

  function isWorldMenuShown() {
    return worldMenuShown;
  }

  function updateSelectionMenu() {
    if (!selectionMenu) return;
    worldMenuShown = false;
    if (editor.mode === "frame") {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }
    if (editor.worldSelectedId || (isCameraSelected() && isFreeSpaceView())) {
      const model = worldSelectionMenuModel();
      worldMenuShown = model.visible;
      showSelectionMenu(model);
      return;
    }
    const selected = getSelected();
    const selectedItems = getSelectedItems();
    if ((!selected && selectedItems.length === 0) || editor.interaction) {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }
    const selectedKind = getSelectedKind();
    const model = buildSelectionMenuModel({
      type,
      selected,
      selectedItems,
      selectedKind,
      geom: selectedItems.length > 1 ? getMultiSelectionGeom(selectedItems) : objectGeom(selected),
      allLocked: areAllSelectedItemsLocked(selectedItems),
      anyLocked: selectedItems.some((item) => isItemLocked(item)),
      selectedLocked: isItemLocked(selected),
      activeAspect: isShotItem(selected) && isErpCamera() ? ERP_ASPECT : getCutoutAspectLabel(selected),
      cutoutAspectOpen: editor.cutoutAspectOpen,
      isExternalSticker,
      isStickerHidden,
      canRestoreSelectedToInitial,
      iconSet: ICON,
      cameraShot: cameraV2,
      cameraDeletable: studio,
      erpChoice: studio,
      coverage: state.coverage,
    });
    showSelectionMenu(model);
  }

  // The selected world Sticker's menu shows while its gizmo does (worldGizmo: in the space view, not
  // locked, in an editor that edits, inside its Clip range), clear of its plane (or its 3D item's origin)
  // and of the gizmo's handles.
  function worldSelectionMenuModel() {
    const space = isSpaceView() && !editor.interaction ? editorViewInput().space : null;
    if (!space?.gizmo) return { visible: false };
    const camera = currentSpaceCamera();
    const plane = space.stickers.find((layer) => layer.id === editor.worldSelectedId);
    const points = plane ? planeCorners(plane) : [space.gizmo.transform.position];
    const corners = points.map((point) => projectPoint(camera, point, canvas.width, canvas.height)).filter(Boolean);
    const gizmoBox = gizmoScreenBox(camera, space.gizmo.transform.position, space.gizmo.mode, canvas.width, canvas.height);
    return buildWorldSelectionMenuModel({ corners, gizmoBox, gizmoMode: space.gizmo.mode, camera: isCameraSelected(), deletable: studio && isCameraSelected() });
  }

  function showSelectionMenu(model) {
    if (!model.visible) {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }

    const placeSelectionMenu = (menuW, menuH) => selectionMenuPlacement(model.anchor, menuW, menuH, canvas.width, canvas.height);
    const estimatedW = Math.max(1, Number(editor.menuSize?.w || 220));
    const estimatedH = Math.max(1, Number(editor.menuSize?.h || 40));
    const initialPlacement = placeSelectionMenu(estimatedW, estimatedH);
    if (!initialPlacement) {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }

    uiState.selectionMenu = {
      visible: true,
      left: initialPlacement.left,
      top: initialPlacement.top,
      items: model.items,
    };
    scheduler.requestFrame(() => {
      if (!selectionMenu || uiState.selectionMenu.visible !== true) return;
      const rect = selectionMenu.getBoundingClientRect();
      const menuW = Math.round(Number(rect?.width || 0)) || 220;
      const menuH = Math.round(Number(rect?.height || 0)) || 40;
      editor.menuSize = { w: menuW, h: menuH, measured: true };
      const measuredPlacement = placeSelectionMenu(menuW, menuH);
      if (!measuredPlacement) return;
      uiState.selectionMenu.left = measuredPlacement.left;
      uiState.selectionMenu.top = measuredPlacement.top;
    });
  }

  function hideTooltip() {
    if (tooltip.timer) {
      clearTimeout(tooltip.timer);
      tooltip.timer = 0;
    }
    tooltip.target = null;
    uiState.tooltip.visible = false;
  }

  function showTooltipFor(el) {
    if (!tooltipEl || !el || !el.isConnected) return;
    const text = String(el.getAttribute("data-tip") || "").trim();
    if (!text) return;
    uiState.tooltip.text = text;
    uiState.tooltip.visible = true;
    const expectedTarget = el;
    scheduler.requestFrame(() => {
      if (tooltip.target !== expectedTarget || !tooltipEl || !expectedTarget?.isConnected) return;
      const hostRect = stageWrap.getBoundingClientRect();
      const rect = expectedTarget.getBoundingClientRect();
      const pad = 8;
      const topGap = 12;
      const mw = Math.round(Number(tooltipEl.getBoundingClientRect()?.width || 0)) || 100;
      const mh = Math.round(Number(tooltipEl.getBoundingClientRect()?.height || 0)) || 24;
      const inToolRail = !!expectedTarget.closest(".pano-floating-left");
      const inFrameRail = !!expectedTarget.closest(".pano-frame-rail");
      const inFooter = !!expectedTarget.closest(".pano-paint-footer") || !!expectedTarget.closest(".pano-paint-color-float");
      let variant = "";
      let x = rect.left - hostRect.left + rect.width * 0.5 - mw * 0.5;
      let y = rect.top - hostRect.top - mh - topGap;
      // The view tabs are at the top of the stage, so their tooltip goes below them.
      if (expectedTarget.closest(".pano-floating-top")) y = rect.bottom - hostRect.top + topGap;
      if (inToolRail) {
        variant = "tool-rail";
        x = rect.right - hostRect.left + 10;
        y = rect.top - hostRect.top + rect.height * 0.5 - mh * 0.5;
        x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
        y = clamp(y, pad, Math.max(pad, hostRect.height - mh - pad));
      } else if (inFrameRail) {
        variant = "frame-rail";
        x = rect.left - hostRect.left - mw - 10;
        y = rect.top - hostRect.top + rect.height * 0.5 - mh * 0.5;
        x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
        y = clamp(y, pad, Math.max(pad, hostRect.height - mh - pad));
      } else if (inFooter) {
        variant = "footer";
        const footerHost = expectedTarget.closest(".pano-paint-footer");
        const footerRect = footerHost ? footerHost.getBoundingClientRect() : rect;
        x = footerRect.left - hostRect.left + footerRect.width * 0.5 - mw * 0.5;
        y = footerRect.bottom - hostRect.top + 5;
        x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
        y = Math.max(pad, y);
      }
      x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
      y = Math.max(pad, y);
      uiState.tooltip.left = x;
      uiState.tooltip.top = y;
      uiState.tooltip.variant = variant;
      uiState.tooltip.visible = true;
    });
  }

  function applyRollInteractionAngle(interaction, angle, event = {}) {
    if (interaction?.kind !== "roll_frame" || !interaction.shot) return;
    interaction.accumulatedRad += shortestAngleDeltaRad(angle, interaction.lastAngle);
    interaction.lastAngle = angle;
    const roll = resolveFrameRollDeg(interaction.start.roll_deg, interaction.accumulatedRad, {
      shiftKey: event.shiftKey,
      altKey: interaction.altStarted ? false : event.altKey,
    });
    interaction.shot.roll_deg = roll;
    interaction.changed = interaction.changed || Math.abs(interaction.accumulatedRad) > 1e-9;
    const rollParam = (uiState.sidePanel?.params || []).find((param) => param.key === "roll_deg");
    if (rollParam) {
      rollParam.value = roll;
      rollParam.displayValue = formatParamValue(roll);
      rollParam.fillPct = ((roll + 180) / 360) * 100;
    }
    syncFrameRollKnob();
    syncFrameRollTooltip(interaction);
    requestDraw({ localOnly: true });
  }

  function applySharedRollInteractionPoint(interaction, point, event = {}) {
    if (interaction?.kind !== "roll_frame" || !interaction.shot || !interaction.rollGesture) return;
    const result = updateCutoutRollGesture(interaction.rollGesture, point, event);
    if (!result) return;
    interaction.rollGesture = result.gesture;
    interaction.center = result.gesture.center;
    interaction.lastAngle = result.gesture.lastAngle;
    interaction.accumulatedRad = result.gesture.accumulatedRad;
    interaction.shot.roll_deg = result.rollDeg;
    interaction.changed = interaction.changed || Math.abs(result.gesture.accumulatedRad) > 1e-9;
    const rollParam = (uiState.sidePanel?.params || []).find((param) => param.key === "roll_deg");
    if (rollParam) {
      rollParam.value = result.rollDeg;
      rollParam.displayValue = formatParamValue(result.rollDeg);
      rollParam.fillPct = ((result.rollDeg + 180) / 360) * 100;
    }
    syncFrameRollKnob();
    syncFrameRollTooltip(interaction);
    requestDraw({ localOnly: true });
  }

  function frameRollAngleForEvent(event, center) {
    const point = screenPos(event);
    return Math.atan2(point.y - center.y, point.x - center.x);
  }
  function syncFrameRollTooltip(interaction) {
    if (interaction?.kind !== "roll_frame" || !interaction.shot) return;
    if (tooltip.timer) {
      clearTimeout(tooltip.timer);
      tooltip.timer = 0;
    }
    tooltip.target = null;
    const rect = getFrameViewRect(interaction.shot);
    const canvasBounds = canvas.getBoundingClientRect?.();
    const hostBounds = stageWrap.getBoundingClientRect?.();
    if (!rect || !canvasBounds || !hostBounds || canvas.width <= 0 || canvas.height <= 0) return;
    const scaleX = canvasBounds.width / canvas.width;
    const scaleY = canvasBounds.height / canvas.height;
    uiState.tooltip.text = `${formatParamValue(interaction.shot.roll_deg)}°`;
    uiState.tooltip.left = canvasBounds.left - hostBounds.left + (rect.x + rect.w * 0.5) * scaleX;
    uiState.tooltip.top = canvasBounds.top - hostBounds.top + (rect.y + rect.h * 0.5) * scaleY + 12;
    uiState.tooltip.variant = "roll";
    uiState.tooltip.visible = true;
  }
  function onFrameRollKnobPointerDown(event) {
    if (event.button !== 0 || readOnly || editor.mode !== "frame") return;
    const shot = getActiveCutoutShot();
    if (!shot || shot.locked === true) return;
    const rect = getFrameViewRect(shot);
    if (!rect) return;
    const center = { x: rect.x + rect.w * 0.5, y: rect.y + rect.h * 0.5 };
    const angle = frameRollAngleForEvent(event, center);
    editor.interaction = {
      kind: "roll_frame", shot, center, lastAngle: angle, accumulatedRad: 0,
      start: { roll_deg: Number(shot.roll_deg ?? shot.rot_deg ?? 0) },
      changed: false, altStarted: false, source: "knob",
    };
    frameRollKnobEl.setPointerCapture?.(event.pointerId);
    event.preventDefault();
    syncFrameRollKnob();
    syncFrameRollTooltip(editor.interaction);
    requestDraw({ localOnly: true });
  }
  frameRollKnobEl?.addEventListener("pointerdown", onFrameRollKnobPointerDown);
  function onFrameRollKnobPointerMove(event) {
    if (editor.interaction?.kind !== "roll_frame" || editor.interaction.source !== "knob") return;
    applyRollInteractionAngle(
      editor.interaction,
      frameRollAngleForEvent(event, editor.interaction.center),
      event,
    );
  }
  frameRollKnobEl?.addEventListener("pointermove", onFrameRollKnobPointerMove);
  function finishKnobRoll() {
    const interaction = editor.interaction;
    if (interaction?.kind !== "roll_frame" || interaction.source !== "knob") return;
    if (interaction.changed) {
      pushHistory();
      commitAndRefreshNode();
      updateSidePanel();
    }
    editor.interaction = null;
    hideTooltip();
    syncViewToggleState();
    syncFrameRollKnob();
    requestDraw();
  }
  frameRollKnobEl?.addEventListener("pointerup", finishKnobRoll);
  frameRollKnobEl?.addEventListener("pointercancel", () => cancelFrameCameraGesture());
  frameRollKnobEl?.addEventListener("lostpointercapture", () => {
    if (editor.interaction?.source === "knob") cancelFrameCameraGesture();
  });
  function onFrameRollKnobDoubleClick(event) {
    const shot = editor.mode === "frame" && !readOnly ? getActiveCutoutShot() : null;
    if (!shot || shot.locked === true || Math.abs(Number(shot.roll_deg ?? shot.rot_deg ?? 0)) <= 1e-9) return;
    shot.roll_deg = 0;
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    syncFrameRollKnob();
    requestDraw();
    event.preventDefault();
  }
  frameRollKnobEl?.addEventListener("dblclick", onFrameRollKnobDoubleClick);

  // Looking around and selecting keep the Timeline playing. A paint stroke stops it at once; any
  // other edit stops it on its first move (restartEditAtStoppedFrame), so a click only selects.
  function onCanvasPointerDown(e) {
    if (timeline.selection) {
      timeline.selection = null;
      syncTimeline();
    }
    const p = screenPos(e);
    editPointerDown = p;
    setPointerPos(p, true);
    // Grabbing the view stops a transition where it shows, and the drag starts from there.
    cancelViewTransition();
    viewController.state.inertia.active = false;
    viewController.state.inertia.vx = 0;
    viewController.state.inertia.vy = 0;
    // In 6DoF the drags of the 3D view controls move the view with any tool (pano_view_controls.js); the
    // middle and the right button do nothing else there.
    const freeSpace = isFreeSpaceView();
    const freeFrame = isFreeFrameView();
    const spaceAction = freeSpace || freeFrame ? viewDragAction(viewControls(), e) : null;
    if (freeFrame && spaceAction) {
      e.preventDefault();
      // Looking around turns the Camera where it stands, as a left drag in the Frame view does.
      if (spaceAction === "look") startPanFrame(p, e.pointerId);
      else startFrameDrag(spaceAction, p, e.pointerId);
      return;
    }
    if (spaceAction === "look") {
      e.preventDefault();
      const dragPos = screenPosCss(e);
      editor.interaction = { kind: "view", last: dragPos, lastTs: performance.now() };
      viewController.startDrag(dragPos.x, dragPos.y, e.pointerId, performance.now());
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }
    if (spaceAction) {
      e.preventDefault();
      startSpaceDrag(spaceAction, p, e.pointerId);
      return;
    }
    if ((freeSpace || freeFrame) && e.button !== 0) {
      e.preventDefault();
      return;
    }
    if (e.button === 1) {
      e.preventDefault();
      if (editor.mode === "frame") {
        const shot = getActiveCutoutShot();
        if (!shot || readOnly || shot.locked === true) return;
        editor.interaction = {
          kind: "pan_frame",
          shot,
          last: p,
          start: {
            yaw_deg: Number(shot.yaw_deg || 0),
            pitch_deg: Number(shot.pitch_deg || 0),
          },
          changed: false,
        };
      } else {
        const dragPos = editor.mode === "unwrap" ? p : screenPosCss(e);
        editor.interaction = { kind: "view", last: dragPos, lastTs: performance.now() };
        viewController.startDrag(dragPos.x, dragPos.y, e.pointerId, performance.now());
      }
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }
    if (e.button !== 0) return;
    if (editor.mode === "frame" && (e.altKey || e.shiftKey) && !readOnly) {
      const shot = getActiveCutoutShot();
      const rect = getFrameViewRect(shot);
      if (!shot || shot.locked === true || !rect) return;
      const rollGesture = beginCutoutRollGesture({
        frame: rect,
        point: p,
        startRollDeg: Number(shot.roll_deg ?? shot.rot_deg ?? 0),
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        allowAlt: true,
      });
      if (!rollGesture) return;
      editor.interaction = {
        kind: "roll_frame",
        shot,
        center: rollGesture.center,
        lastAngle: rollGesture.lastAngle,
        accumulatedRad: rollGesture.accumulatedRad,
        rollGesture,
        start: { roll_deg: Number(shot.roll_deg ?? shot.rot_deg ?? 0) },
        changed: false,
        altStarted: rollGesture.source === "alt",
        source: rollGesture.source,
      };
      canvas.setPointerCapture(e.pointerId);
      e.preventDefault();
      syncFrameRollKnob();
      requestDraw({ localOnly: true });
      return;
    }
    if (editor.mode === "frame" && editor.primaryTool === "cursor") {
      startPanFrame(p, e.pointerId);
      e.preventDefault();
      return;
    }
    if (readOnly) {
      if (editor.mode === "pano") startEmptyDrag(e, p);
      return;
    }
    if (paintColorPop && !paintColorPop.hidden) {
      return;
    }

    if ((editor.primaryTool === "paint" || editor.primaryTool === "mask") && (supportsErpPainting() || supportsFramePainting())) {
      // A hidden painting takes no strokes, as a hidden layer takes no paint in image editors.
      if (!paintingShown()) return;
      stopTimelinePlayback();
      const layerKind = editor.primaryTool === "mask" ? "mask" : "paint";
      const toolKind = editor.primaryTool === "mask" ? editor.maskTool : editor.paintTool;
      const activeShot = editor.mode === "frame" && supportsFramePainting() ? getActiveCutoutShot() : null;
      // Always use ERP_GLOBAL: frame-view strokes are converted to world-space ERP UV
      // via the frame's projection so they stay fixed in the panorama when the frame moves.
      const targetSpace = { kind: "ERP_GLOBAL" };
      const startPoint = activeShot
        ? screenPosToFrameAsErpPoint(p, activeShot, performance.now())
        : screenPosToErpPoint(p, performance.now());
      if (!startPoint) {
        updateCursor(p);
        return;
      }
      editor.interaction = {
        kind: toolKind === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind,
        _livePreviewToken: makePaintId("live"),
        stroke: toolKind === "lasso_fill"
          ? buildLassoFillStrokeRecord(layerKind, toolKind, [startPoint], targetSpace)
          : buildFreehandStrokeRecord(layerKind, toolKind, [startPoint], targetSpace),
      };
      invalidateLivePaintPreviewCaches();
      const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
      if (targetDescriptor) {
        editor.paintEngine.beginStroke(editor.interaction.stroke, targetDescriptor);
        if (editor.interaction.kind === "paint_stroke") {
          // Seed the incremental renderer with the first point
          const engineTarget = editor.paintEngine.ensureTarget(targetDescriptor);
          const cx = Number(startPoint?.u ?? startPoint?.x ?? 0);
          const cy = Number(startPoint?.v ?? startPoint?.y ?? 0);
          editor.paintEngine.appendStrokePoint(engineTarget, cx, cy, editor.interaction.stroke);
        } else {
          // Lasso fill: use full-redraw path
          editor.paintEngine.updateActiveStroke(editor.interaction.stroke, targetDescriptor);
        }
      }
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      requestDraw();
      return;
    }

    const selectedItems = getSelectedItems();
    const selected = getSelected();
    const selGeom = selectedItems.length > 1 ? getMultiSelectionGeom(selectedItems) : (selected ? objectGeom(selected) : null);

    if (editor.primaryTool === "cursor" && (e.ctrlKey || e.metaKey)) {
      editor.interaction = { kind: "marquee_select", start: p, current: p };
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      requestDraw({ localOnly: true, reason: DRAW_REASON.OVERLAY });
      return;
    }
    if (editor.primaryTool === "cursor" && cameraShoots() && isFreeSpaceView() && startCameraPress(e, p)) return;
    if (editor.primaryTool === "cursor" && sceneV2 && isSpaceView() && startWorldStickerPress(e, p)) return;

    if (selectedItems.length > 1 && selGeom?.visible) {
      const h = selectedItems.some((item) => isItemLocked(item)) ? { kind: "none" } : handleHit(selGeom, p);
      if (h.kind === "move") {
        editor.interaction = {
          kind: "move_multi",
          items: selectedItems.map((item) => item),
          offset: { x: p.x - selGeom.center.x, y: p.y - selGeom.center.y },
          startCenter: { x: selGeom.center.x, y: selGeom.center.y },
          stickerSnapshots: selectedItems
            .filter((item) => isStickerItem(item))
            .map((item) => ({
              id: String(item.id || ""),
              yaw_deg: Number(poseOf(item).yaw_deg || 0),
              pitch_deg: Number(poseOf(item).pitch_deg || 0),
              center: (() => {
                const geom = objectGeom(item);
                return geom?.visible ? { x: Number(geom.center?.x || 0), y: Number(geom.center?.y || 0) } : { x: p.x, y: p.y };
              })(),
            })),
          strokeSnapshots: selectedItems
            .filter((item) => isStrokeGroupItem(item))
            .map((item) => ({
              id: String(item.actionGroupId || item.id || ""),
              layerKind: String(item.layerKind || "paint"),
              snapshot: cloneJson(getStrokeGroupStrokes(item.actionGroupId, item.layerKind)),
              frameSnapshot: cloneJson(ensureGroupFrame(item.actionGroupId, item.layerKind)),
              center: (() => {
                const geom = objectGeom(item);
                return geom?.visible ? { x: Number(geom.center?.x || 0), y: Number(geom.center?.y || 0) } : { x: p.x, y: p.y };
              })(),
              centerUv: getStrokeGroupCenterUv(item.actionGroupId, item.layerKind),
            })),
          rasterSnapshots: selectedItems
            .filter((item) => isRasterObjectItem(item))
            .map((item) => ({
              id: parseRasterObjectSelectionId(item.rasterObjectId || item.id || ""),
              snapshot: cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(item.rasterObjectId || item.id || ""))),
              center: (() => {
                const geom = objectGeom(item);
                return geom?.visible ? { x: Number(geom.center?.x || 0), y: Number(geom.center?.y || 0) } : { x: p.x, y: p.y };
              })(),
              centerUv: getRasterObjectCenterUv(item),
            })),
        };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
    } else if (selected && selGeom?.visible) {
      const h = isItemLocked(selected) ? { kind: "none" } : handleHit(selGeom, p, selected);
      if (h.kind === "scale") {
        editor.interaction = isStrokeGroupItem(selected)
          ? {
            kind: "scale_stroke_group",
            item: selected,
            center: selGeom.center,
            startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
            snapshot: cloneJson(getStrokeGroupStrokes(selected.actionGroupId, selected.layerKind)),
            frameSnapshot: cloneJson(ensureGroupFrame(selected.actionGroupId, selected.layerKind)),
            cursor: h.cursor,
          }
          : isRasterObjectItem(selected)
          ? {
            kind: "scale_raster_object",
            item: selected,
            center: selGeom.center,
            startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
            snapshot: cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(selected.rasterObjectId || selected.id || ""))),
            cursor: h.cursor,
          }
          : {
            kind: "scale",
            item: selected,
            center: selGeom.center,
            startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
            startHFOV: Number(poseOf(selected).hFOV_deg || 20),
            startVFOV: Number(poseOf(selected).vFOV_deg || 20),
            cursor: h.cursor,
          };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
      if (h.kind === "scale_x" || h.kind === "scale_y") {
        editor.interaction = {
          kind: h.kind,
          item: selected,
          center: selGeom.center,
          startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
          startHFOV: Number(poseOf(selected).hFOV_deg || 20),
          startVFOV: Number(poseOf(selected).vFOV_deg || 20),
          cursor: h.cursor,
          edge: h.edge,
        };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
      if (h.kind === "rotate") {
        editor.interaction = isStrokeGroupItem(selected)
          ? {
            kind: "rotate_stroke_group",
            item: selected,
            center: selGeom.center,
            startAng: Math.atan2(p.y - selGeom.center.y, p.x - selGeom.center.x),
            snapshot: cloneJson(getStrokeGroupStrokes(selected.actionGroupId, selected.layerKind)),
            frameSnapshot: cloneJson(ensureGroupFrame(selected.actionGroupId, selected.layerKind)),
          }
          : {
            kind: "rotate",
            item: selected,
            center: selGeom.center,
            startRot: Number(poseOf(selected).rot_deg || poseOf(selected).roll_deg || 0),
            startAng: Math.atan2(p.y - selGeom.center.y, p.x - selGeom.center.x),
          };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
      if (h.kind === "move") {
        if (isStrokeGroupItem(selected)) {
          const startUv = editor.mode === "frame"
            ? (() => {
              const shot = getActiveCutoutShot();
              return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
            })()
            : screenPosToErpPoint(p, performance.now());
          editor.interaction = {
            kind: "move_stroke_group",
            item: selected,
            startUv,
            snapshot: cloneJson(getStrokeGroupStrokes(selected.actionGroupId, selected.layerKind)),
            frameSnapshot: cloneJson(ensureGroupFrame(selected.actionGroupId, selected.layerKind)),
          };
          updateCursor(p);
          canvas.setPointerCapture(e.pointerId);
          return;
        }
        if (isRasterObjectItem(selected)) {
          const startUv = editor.mode === "frame"
            ? (() => {
              const shot = getActiveCutoutShot();
              return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
            })()
            : screenPosToErpPoint(p, performance.now());
          editor.interaction = {
            kind: "move_raster_object",
            item: selected,
            startUv,
            snapshot: cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(selected.rasterObjectId || selected.id || ""))),
          };
          updateCursor(p);
          canvas.setPointerCapture(e.pointerId);
          return;
        }
        editor.interaction = {
          kind: "move",
          item: selected,
          offset: { x: p.x - selGeom.center.x, y: p.y - selGeom.center.y },
        };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
    }

    const hit = hitObjectAt(p);
    if (hit) {
      const isNewSelection = editor.selectedId !== hit.item.id;
      if (isNewSelection && editor.selectedId) {
        pushHistory();
        commitState();
      }
      setSelectedItem(hit.item);
      if (shotEditor && isNewSelection) editor.cutoutAspectOpen = false;
      if (isNewSelection) updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      if (isItemLocked(hit.item)) {
        updateCursor(p);
        return;
      }
      editor.interaction = {
        kind: isStrokeGroupItem(hit.item) ? "move_stroke_group" : (isRasterObjectItem(hit.item) ? "move_raster_object" : "move"),
        item: hit.item,
        offset: { x: p.x - hit.geom.center.x, y: p.y - hit.geom.center.y },
        startUv: (isStrokeGroupItem(hit.item) || isRasterObjectItem(hit.item))
          ? (editor.mode === "frame"
            ? (() => {
              const shot = getActiveCutoutShot();
              return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
            })()
            : screenPosToErpPoint(p, performance.now()))
          : null,
        snapshot: isStrokeGroupItem(hit.item)
          ? cloneJson(getStrokeGroupStrokes(hit.item.actionGroupId, hit.item.layerKind))
          : (isRasterObjectItem(hit.item)
            ? cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(hit.item.rasterObjectId || hit.item.id || "")))
            : null),
        frameSnapshot: isStrokeGroupItem(hit.item)
          ? cloneJson(ensureGroupFrame(hit.item.actionGroupId, hit.item.layerKind))
          : null,
      };
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }

    const hadSelection = !!editor.selectedId;
    if (hadSelection) {
      pushHistory();
      commitState();
    }
    clearSelection();
    if (hadSelection) updateSidePanel();
    updateSelectionMenu();
    requestDraw();

    if (editor.mode === "pano") startEmptyDrag(e, p);
  }
  canvas.onpointerdown = onCanvasPointerDown;

  // The selected world Sticker's gizmo at canvas point p (pano_three_view.js gizmoPointer): "hover",
  // "down", "move" or "up".
  function worldGizmoPointer(phase, p) {
    return editorView.gizmoPointer(phase, currentSpaceCamera(), p.x, p.y, canvas.width, canvas.height);
  }

  // A left press with the cursor tool in the space view (#72): on a handle of the selected world
  // Sticker's gizmo it grabs the handle; on a world Sticker (the nearest content under the pointer, by
  // pick) it selects it. A world Sticker is in front of the Sky, so it comes before the sky Stickers,
  // except for the scale and rotate handles of a selected sky Sticker. The `scene` content is not
  // selectable and leaves the press to the sky Stickers, as before. Dragging a world Sticker itself only
  // selects it; the gizmo moves it. Returns whether the press was taken.
  function startWorldStickerPress(e, p) {
    const gizmo = editorViewInput().space?.gizmo;
    if (gizmo && worldGizmoPointer("hover", p) !== null && worldGizmoPointer("down", p)) {
      editor.interaction = {
        kind: "world_gizmo",
        id: editor.worldSelectedId,
        mode: gizmo.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: gizmo.transform,
        base: evaluateSticker(selectedWorldSticker(), editor.frame),
        changed: false,
      };
      canvas.setPointerCapture(e.pointerId);
      updateCursor(p);
      return true;
    }
    // The handles of the canvas selection, as the press would find them below.
    const selectedItems = getSelectedItems();
    const selected = getSelected();
    const handle = selectedItems.length > 1
      ? (selectedItems.some((item) => isItemLocked(item)) ? "none" : handleHit(getMultiSelectionGeom(selectedItems), p).kind)
      : (selected && !isItemLocked(selected) ? handleHit(objectGeom(selected), p, selected).kind : "none");
    if (handle !== "none" && handle !== "move") return false;
    const id = editorView.pickSticker(currentSpaceCamera(), p.x, p.y, canvas.width, canvas.height);
    if (!state.stickers.some((item) => item.id === id && item.placement === "world")) return false;
    if (editor.worldSelectedId !== id) {
      if (editor.selectedId) {
        pushHistory();
        commitState();
      }
      selectWorldSticker(id);
      updateSidePanel();
      updateSelectionMenu();
      syncFloatingViewButtonState();
      requestDraw();
    }
    editor.interaction = { kind: "world_select" };
    canvas.setPointerCapture(e.pointerId);
    return true;
  }

  // The gizmo highlights the handle under the pointer, and the cursor shows it can be grabbed.
  function hoverWorldGizmo(p) {
    const shown = !!(editor.worldSelectedId || isCameraSelected()) && editor.primaryTool === "cursor" && isSpaceView() && !!editorViewInput().space?.gizmo;
    const axis = shown ? worldGizmoPointer("hover", p) : null;
    if (axis === editor.gizmoAxis) return;
    editor.gizmoAxis = axis;
    runtime.backgroundDirty = true;
    requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
  }

  // A gizmo drag of the selected world Sticker: the Lane of the gizmo's mode, by the recording rule.
  function dragWorldGizmo(it, p) {
    const moved = worldGizmoPointer("move", p);
    if (moved && it.camera) {
      // The Camera's Lane of the gizmo's mode, by the recording rule; the shot follows it.
      for (const [name, value] of Object.entries(gizmoDragLanes(it.mode, it.base, it.start, moved))) setLaneValue(state.camera, name, editor.frame, value);
      syncCutoutShot();
      it.changed = true;
      dragFrames.request("sidePanel");
      requestDraw({ localOnly: true });
      return;
    }
    const sticker = state.stickers.find((item) => item.id === it.id);
    if (!moved || !sticker) return;
    setWorldStickerTransform(sticker, editor.frame, gizmoDragLanes(it.mode, it.base, it.start, moved));
    it.changed = true;
    markObjectVisualsDirty();
    dragFrames.request("sidePanel");
    requestDraw({ localOnly: true });
  }

  // A press of startWorldStickerPress() ends: a gizmo drag that changed the Sticker is one Undo step.
  function endWorldStickerPress(ended) {
    editor.interaction = null;
    editor.gizmoAxis = null;
    if (ended.kind === "world_gizmo") {
      worldGizmoPointer("up", editor.pointerPos);
      runtime.backgroundDirty = true;
      if (ended.changed) {
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
      }
    }
    updateCursor(editor.pointerPos);
    requestDraw();
  }

  // A left drag on empty space of the panorama view looks around; in 6DoF it does what the 3D view
  // controls preset does there (pano_view_controls.js emptyLeft), or nothing.
  function startEmptyDrag(e, p) {
    if (isFreeSpaceView()) {
      const action = viewControls().emptyLeft;
      if (action) startSpaceDrag(action, p, e.pointerId);
      return;
    }
    const dragPos = screenPosCss(e);
    editor.interaction = { kind: "view", last: dragPos, lastTs: performance.now() };
    viewController.startDrag(dragPos.x, dragPos.y, e.pointerId, performance.now());
    updateCursor(p);
    canvas.setPointerCapture(e.pointerId);
  }

  // Playback ran on from the pointer going down to its first move. It stops here on the frame shown,
  // and a Sticker edit starts over from that frame's values, as if the pointer went down there.
  // Paint strokes and raster objects do not change over time and keep their start.
  function restartEditAtStoppedFrame(it, down) {
    if (!stateV2 || !playback.playing) return;
    playback.stop();
    if (it.kind === "frame_pan") return;
    if (it.kind === "frame_orbit") {
      // The Camera moved with playback: the point the orbit turns about is picked again from where it stopped.
      const context = frameContext();
      if (context) it.pivot = frameTarget(context, frameSpaceView(context), down);
      return;
    }
    if (it.kind === "world_gizmo") {
      const sticker = state.stickers.find((item) => item.id === it.id);
      if (it.camera) it.base = cutoutCamera();
      else if (sticker) it.base = evaluateSticker(sticker, editor.frame);
      return;
    }
    if (it.kind === "move_multi") {
      const geom = getMultiSelectionGeom(it.items);
      if (!geom?.visible) return;
      it.offset = { x: down.x - geom.center.x, y: down.y - geom.center.y };
      it.startCenter = { x: geom.center.x, y: geom.center.y };
      for (const snap of it.stickerSnapshots) {
        const item = it.items.find((entry) => String(entry?.id || "") === snap.id);
        const itemGeom = item ? objectGeom(item) : null;
        if (!itemGeom?.visible) continue;
        snap.yaw_deg = Number(poseOf(item).yaw_deg || 0);
        snap.pitch_deg = Number(poseOf(item).pitch_deg || 0);
        snap.center = { x: itemGeom.center.x, y: itemGeom.center.y };
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(it.kind)) return;
    const geom = objectGeom(it.item);
    if (!geom?.visible) return;
    const pose = poseOf(it.item);
    if (it.kind === "move") {
      it.offset = { x: down.x - geom.center.x, y: down.y - geom.center.y };
      return;
    }
    it.center = geom.center;
    if (it.kind === "rotate") {
      it.startRot = Number(pose.rot_deg || pose.roll_deg || 0);
      it.startAng = Math.atan2(down.y - geom.center.y, down.x - geom.center.x);
      return;
    }
    it.startDist = Math.max(1, Math.hypot(down.x - geom.center.x, down.y - geom.center.y));
    it.startHFOV = Number(pose.hFOV_deg || 20);
    it.startVFOV = Number(pose.vFOV_deg || 20);
  }

  function onCanvasPointerMove(e) {
    const p = screenPos(e);
    setPointerPos(p, true);
    if (!editor.interaction) {
      hoverWorldGizmo(p);
      updateCursor(p);
      return;
    }
    updateCursor(p);
    const it = editor.interaction;
    if (editPointerDown && (p.x !== editPointerDown.x || p.y !== editPointerDown.y)) {
      const down = editPointerDown;
      editPointerDown = null;
      if (!["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(it.kind)) restartEditAtStoppedFrame(it, down);
    }

    if (it.kind === "world_select") return;
    if (it.kind === "world_gizmo") {
      dragWorldGizmo(it, p);
      return;
    }

    if (it.kind === "paint_stroke") {
      const samples = typeof e.getCoalescedEvents === "function" ? e.getCoalescedEvents() : [e];
      let changed = false;
      samples.forEach((sample) => {
        const sp = screenPos(sample);
        if (editor.mode === "frame") {
          // Frame-boundary guard: segment the stroke on exit, restart on re-entry.
          const shot = getActiveCutoutShot();
          const rect = shot ? getFrameViewRect(shot) : null;
          if (rect) {
            const fx = (sp.x - rect.x) / Math.max(1, rect.w);
            const fy = (sp.y - rect.y) / Math.max(1, rect.h);
            const inFrame = fx >= 0 && fx <= 1 && fy >= 0 && fy <= 1;
            if (!inFrame) {
              it._outOfFrame = true;
              return; // drop point — no artifact
            }
            if (it._outOfFrame) {
              // Re-entered: commit previous inside-frame segment, start fresh
              it._outOfFrame = false;
              _segmentFrameStroke(it);
            }
          }
        }
        // appendPaintPoint now calls appendStrokePoint internally (O(1) incremental rendering)
        if (appendPaintPoint(it, sp, performance.now())) changed = true;
      });
      if (changed) requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      return;
    }

    if (it.kind === "paint_lasso_fill") {
      const samples = typeof e.getCoalescedEvents === "function" ? e.getCoalescedEvents() : [e];
      let changed = false;
      samples.forEach((sample) => {
        const sp = screenPos(sample);
        if (editor.mode === "frame") {
          const shot = getActiveCutoutShot();
          const rect = shot ? getFrameViewRect(shot) : null;
          if (rect) {
            const fx = (sp.x - rect.x) / Math.max(1, rect.w);
            const fy = (sp.y - rect.y) / Math.max(1, rect.h);
            const inFrame = fx >= 0 && fx <= 1 && fy >= 0 && fy <= 1;
            if (!inFrame) {
              it._outOfFrame = true;
              return;
            }
            if (it._outOfFrame) {
              it._outOfFrame = false;
              _segmentFrameLassoFill(it);
            }
          }
        }
        if (appendLassoPoint(it, sp, performance.now())) changed = true;
      });
      if (changed) {
        const targetDescriptor = getActivePaintTargetDescriptor(it);
        if (targetDescriptor) editor.paintEngine.updateActiveStroke(it.stroke, targetDescriptor);
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "view") {
      const now = performance.now();
      const dragPos = editor.mode === "unwrap" ? p : screenPosCss(e);
      viewController.moveDrag(dragPos.x, dragPos.y, editor.mode === "unwrap" ? "unwrap" : "pano", now);
      it.lastTs = now;
      it.last = dragPos;
      requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
      return;
    }

    if (it.kind === "frame_pan" || it.kind === "frame_orbit") {
      dragFrame(it, p);
      return;
    }

    if (it.kind === "space_pan" || it.kind === "space_orbit") {
      const view = spaceViewState();
      setSpaceView(it.kind === "space_pan"
        ? panView(view, p.x - it.last.x, p.y - it.last.y, canvas.width, canvas.height, it.depth)
        : orbitView(view, p.x - it.last.x, p.y - it.last.y, canvas.height, it.pivot));
      it.last = p;
      return;
    }

    if (it.kind === "pan_frame") {
      const layout = getFrameViewLayout(it.shot);
      if (!layout || !it.shot) return;
      const dx = p.x - it.last.x;
      const dy = p.y - it.last.y;
      const nextShot = panCutoutShotByScreenDelta(it.shot, {
        dx,
        dy,
        focalPx: layout.focalPx,
        invertX: state.ui_settings?.invert_view_x === true,
        invertY: state.ui_settings?.invert_view_y === true,
      });
      it.shot.yaw_deg = nextShot.yaw_deg;
      it.shot.pitch_deg = nextShot.pitch_deg;
      it.changed = it.changed || Math.abs(dx) > 0 || Math.abs(dy) > 0;
      it.last = p;
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "roll_frame") {
      if (it.source === "knob") return;
      applySharedRollInteractionPoint(it, p, e);
      return;
    }

    if (it.kind === "move") {
      const tx = p.x - it.offset.x;
      const ty = p.y - it.offset.y;
      if (editor.mode === "frame" && shotEditor) {
        const shot = getActiveCutoutShot();
        const rect = getFrameViewRect(shot);
        if (!shot || !rect) return;
        const framePoint = {
          x: clamp((tx - rect.x) / Math.max(1, rect.w), 0, 1),
          y: clamp((ty - rect.y) / Math.max(1, rect.h), 0, 1),
        };
        const dir = frameLocalPointToWorldDir(shot, framePoint);
        if (!dir) return;
        const yp = dirToYawPitch(dir);
        writePose(it.item, { yaw_deg: yp.yaw, pitch_deg: yp.pitch });
      } else if (editor.mode === "unwrap") {
        const r = getUnwrapRect();
        const nx = clamp((tx - r.x) / Math.max(r.w, 1), 0, 1);
        const ny = clamp((ty - r.y) / Math.max(r.h, 1), 0, 1);
        writePose(it.item, { yaw_deg: wrapYaw(nx * 360 - 180), pitch_deg: clamp(90 - ny * 180, -90, 90) });
      } else {
        const dir = screenToWorldDir(tx, ty);
        const yp = dirToYawPitch(dir);
        writePose(it.item, { yaw_deg: yp.yaw, pitch_deg: yp.pitch });
      }
      if (isStickerItem(it.item)) {
        markObjectVisualsDirty();
      }
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "move_stroke_group") {
      const currentUv = editor.mode === "frame"
        ? (() => {
          const shot = getActiveCutoutShot();
          return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
        })()
        : screenPosToErpPoint(p, performance.now());
      if (!currentUv || !it.startUv) return;
      const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(it.startUv.u || 0));
      const dv = Number(currentUv.v || 0) - Number(it.startUv.v || 0);
      if (applyStrokeGroupOffset(it.item?.actionGroupId, du, dv, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "move_raster_object") {
      const currentUv = editor.mode === "frame"
        ? (() => {
          const shot = getActiveCutoutShot();
          return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
        })()
        : screenPosToErpPoint(p, performance.now());
      if (!currentUv || !it.startUv) return;
      const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(it.startUv.u || 0));
      const dv = Number(currentUv.v || 0) - Number(it.startUv.v || 0);
      if (applyRasterObjectOffset(it.item?.rasterObjectId || it.item?.id || "", du, dv, it.snapshot)) {
        markPaintCompositeVisualsDirty();
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "scale_raster_object") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / Math.max(1, Number(it.startDist || 1));
      if (applyRasterObjectTransform(it.item?.rasterObjectId || it.item?.id || "", ratio, it.snapshot)) {
        markPaintCompositeVisualsDirty();
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "move_multi") {
      const tx = p.x - Number(it.offset?.x || 0);
      const ty = p.y - Number(it.offset?.y || 0);
      let changed = false;
      let paintStrokeChanged = false;
      let rasterChanged = false;
      const dx = tx - Number(it.startCenter?.x || tx);
      const dy = ty - Number(it.startCenter?.y || ty);
      for (const snap of (Array.isArray(it.stickerSnapshots) ? it.stickerSnapshots : [])) {
        const sticker = (type === "cutout" ? getCutoutSelectableItems() : getList()).find((entry) => String(entry?.id || "") === String(snap.id || ""));
        if (!sticker || !isStickerItem(sticker)) continue;
        const targetScreen = {
          x: Number(snap.center?.x || 0) + dx,
          y: Number(snap.center?.y || 0) + dy,
        };
        if (editor.mode === "frame" && shotEditor) {
          const shot = getActiveCutoutShot();
          const rect = getFrameViewRect(shot);
          if (!shot || !rect) continue;
          const framePoint = {
            x: clamp((targetScreen.x - rect.x) / Math.max(1, rect.w), 0, 1),
            y: clamp((targetScreen.y - rect.y) / Math.max(1, rect.h), 0, 1),
          };
          const dir = frameLocalPointToWorldDir(shot, framePoint);
          if (!dir) continue;
          const yp = dirToYawPitch(dir);
          writePose(sticker, { yaw_deg: yp.yaw, pitch_deg: yp.pitch });
        } else if (editor.mode === "unwrap") {
          const r = getUnwrapRect();
          const nx = clamp((targetScreen.x - r.x) / Math.max(r.w, 1), 0, 1);
          const ny = clamp((targetScreen.y - r.y) / Math.max(r.h, 1), 0, 1);
          writePose(sticker, { yaw_deg: wrapYaw(nx * 360 - 180), pitch_deg: clamp(90 - ny * 180, -90, 90) });
        } else {
          const dir = screenToWorldDir(targetScreen.x, targetScreen.y);
          const yp = dirToYawPitch(dir);
          writePose(sticker, { yaw_deg: yp.yaw, pitch_deg: yp.pitch });
        }
        changed = true;
      }
      for (const snap of (Array.isArray(it.strokeSnapshots) ? it.strokeSnapshots : [])) {
        const targetScreen = {
          x: Number(snap.center?.x || 0) + dx,
          y: Number(snap.center?.y || 0) + dy,
        };
        const currentUv = editor.mode === "frame"
          ? (() => {
            const shot = getActiveCutoutShot();
            return shot ? screenPosToFrameAsErpPoint(targetScreen, shot, performance.now()) : null;
          })()
          : screenPosToErpPoint(targetScreen, performance.now());
        const startUvForGroup = snap.centerUv || null;
        if (currentUv && startUvForGroup) {
          const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(startUvForGroup.u || 0));
          const dv = Number(currentUv.v || 0) - Number(startUvForGroup.v || 0);
          if (applyStrokeGroupOffset(snap.id, du, dv, snap.snapshot, snap.layerKind, snap.frameSnapshot)) {
            changed = true;
            paintStrokeChanged = true;
          }
        }
      }
      for (const snap of (Array.isArray(it.rasterSnapshots) ? it.rasterSnapshots : [])) {
        const targetScreen = {
          x: Number(snap.center?.x || 0) + dx,
          y: Number(snap.center?.y || 0) + dy,
        };
        const currentUv = editor.mode === "frame"
          ? (() => {
            const shot = getActiveCutoutShot();
            return shot ? screenPosToFrameAsErpPoint(targetScreen, shot, performance.now()) : null;
          })()
          : screenPosToErpPoint(targetScreen, performance.now());
        const startUvForObject = snap.centerUv || null;
        if (currentUv && startUvForObject) {
          const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(startUvForObject.u || 0));
          const dv = Number(currentUv.v || 0) - Number(startUvForObject.v || 0);
          if (applyRasterObjectOffset(snap.id, du, dv, snap.snapshot)) {
            changed = true;
            rasterChanged = true;
          }
        }
      }
      if (changed) {
        if (paintStrokeChanged) {
          markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        } else if (rasterChanged) {
          markPaintCompositeVisualsDirty();
        } else {
          markObjectVisualsDirty();
        }
        requestDraw({ localOnly: true });
      }
      return;
    }

    if (it.kind === "scale_stroke_group") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / Math.max(1, Number(it.startDist || 1));
      if (applyStrokeGroupTransform(it.item?.actionGroupId, ratio, 0, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "rotate_stroke_group") {
      let delta = (Math.atan2(p.y - it.center.y, p.x - it.center.x) - Number(it.startAng || 0)) * RAD2DEG;
      if (e.shiftKey) delta = Math.round(delta / 45) * 45;
      if (applyStrokeGroupTransform(it.item?.actionGroupId, 1, delta, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "marquee_select") {
      it.current = p;
      requestDraw({ localOnly: true, reason: DRAW_REASON.OVERLAY });
      return;
    }

    if (it.kind === "scale") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      writePose(it.item, { hFOV_deg: clamp(it.startHFOV * ratio, 1, 179), vFOV_deg: clamp(it.startVFOV * ratio, 1, 179) });
      if (!isSceneSticker(it.item)) it.item.aspect_id = deriveCutoutAspectLabelFromFov(it.item);
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "scale_x") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      writePose(it.item, { hFOV_deg: clamp(it.startHFOV * ratio, 1, 179) });
      if (!isSceneSticker(it.item)) it.item.aspect_id = deriveCutoutAspectLabelFromFov(it.item);
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "scale_y") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      writePose(it.item, { vFOV_deg: clamp(it.startVFOV * ratio, 1, 179) });
      if (!isSceneSticker(it.item)) it.item.aspect_id = deriveCutoutAspectLabelFromFov(it.item);
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "rotate") {
      const a = Math.atan2(p.y - it.center.y, p.x - it.center.x);
      let delta = (a - it.startAng) * RAD2DEG;
      let out = it.startRot - delta;
      if (e.shiftKey) out = Math.round(out / 45) * 45;
      writePose(it.item, { [isStickerItem(it.item) ? "rot_deg" : "roll_deg"]: out });
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
    }
  }
  canvas.onpointermove = onCanvasPointerMove;

  function onCanvasPointerUp() {
    const ended = editor.interaction;
    if (ended?.kind === "roll_frame" && ended.source === "knob") return;
    if (ended?.kind === "space_pan" || ended?.kind === "space_orbit") {
      editor.interaction = null;
      updateCursor(editor.pointerPos);
      updateSelectionMenu();
      return;
    }
    if (ended?.kind === "world_select" || ended?.kind === "world_gizmo") {
      endWorldStickerPress(ended);
      return;
    }
    if (editor.interaction?.kind === "paint_stroke" || editor.interaction?.kind === "paint_lasso_fill") {
      invalidateLivePaintPreviewCaches();
      const didCommit = commitPaintInteraction(editor.interaction);
      // _hasCommittedSegments: set when frame boundary segmented a stroke mid-drag.
      // Even if the final segment is empty (pointer ended outside frame), we still need
      // to push history for the previously committed inside-frame segments.
      const hadSegments = Boolean(editor.interaction._hasCommittedSegments);
      if (didCommit || hadSegments) {
        markPaintStrokeVisualsDirty();
        // Invalidate the persistent frame so objectGeom() recomputes bbox on next select.
        const committedGroupId = String(editor.interaction.stroke?.actionGroupId || "").trim();
        if (committedGroupId) {
          const grpEntry = getPaintingGroupList().find((g) => String(g?.actionGroupId || "") === committedGroupId);
          if (grpEntry) grpEntry.frame = null;
        }
        const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
        if (targetDescriptor) {
          if (!didCommit) {
            // Final segment was empty (stroke ended outside frame); cancel engine stroke.
            editor.paintEngine.cancelActiveStroke(targetDescriptor);
          } else if (String(editor.interaction.stroke?.toolKind || "") === "eraser") {
            editor.paintEngine.cancelActiveStroke(targetDescriptor);
            refreshPaintEngineRevisionCache();
          } else {
            editor.paintEngine.commitActiveStroke(editor.interaction.stroke, targetDescriptor);
          }
        }
        pushHistory();
        commitState();
        updateSidePanel();
        updateSelectionMenu();
        node.setDirtyCanvas(true, true);
        requestDraw();
      } else {
        const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
        if (targetDescriptor) editor.paintEngine.cancelActiveStroke(targetDescriptor);
      }
    } else if (editor.interaction?.kind === "marquee_select") {
      const rect = rectFromPoints(editor.interaction.start, editor.interaction.current);
      const pool = [
        ...(type === "cutout"
          ? getCutoutSelectableItemsForHit().filter((item) => !isShotItem(item))
          : [...getList()]),
        ...getSelectableStrokeGroupItems(),
        ...getSelectableRasterObjectItems(),
      ];
      const hits = pool.filter((item) => rectIntersectsGeom(rect, objectGeom(item)));
      setSelectedItems(hits, hits[hits.length - 1]?.id || null);
      if (shotEditor && hits.length) editor.cutoutAspectOpen = false;
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
    } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes(editor.interaction?.kind)) {
      if (editor.interaction.changed) {
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
      }
    } else if (editor.interaction && editor.interaction.kind !== "view") {
      let compositeChanged = false;
      if (editor.interaction.kind === "move_stroke_group"
        || editor.interaction.kind === "scale_stroke_group"
        || editor.interaction.kind === "rotate_stroke_group") {
        compositeChanged = true;
      }
      if (editor.interaction.kind === "move_raster_object" || editor.interaction.kind === "scale_raster_object") {
        compositeChanged = true;
      }
      if (editor.interaction.kind === "move_multi" && Array.isArray(editor.interaction.strokeSnapshots) && editor.interaction.strokeSnapshots.length) {
        compositeChanged = true;
      }
      if (editor.interaction.kind === "move_multi" && Array.isArray(editor.interaction.rasterSnapshots) && editor.interaction.rasterSnapshots.length) {
        compositeChanged = true;
      }
      if (compositeChanged) {
        const strokeDragKinds = ["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"];
        const isStrokeDrag = strokeDragKinds.includes(editor.interaction.kind)
          || (editor.interaction.kind === "move_multi" && Array.isArray(editor.interaction.strokeSnapshots) && editor.interaction.strokeSnapshots.length);
        if (isStrokeDrag) {
          markPaintStrokeVisualsDirty({ rebuildPaintEngine: true });
        } else {
          markPaintCompositeVisualsDirty();
        }
      }
      pushHistory();
      commitState();
      node.setDirtyCanvas(true, true);
      syncSidePanelControls();
      updateSelectionMenu();
      requestDraw();
    }
    editor.interaction = null;
    if (ended?.kind === "roll_frame") hideTooltip();
    invalidateLivePaintPreviewCaches();
    if (ended && ended.kind === "view") {
      startAnimation(() => viewController.endDrag(performance.now()));
    }
    syncViewToggleState();
    updateSelectionMenu();
    updateCursor(editor.pointerPos);
    requestDraw();
  }
  canvas.onpointerup = onCanvasPointerUp;

  function onCanvasPointerCancel() {
    if (cancelFrameCameraGesture()) return;
    if (editor.interaction?.kind === "world_select" || editor.interaction?.kind === "world_gizmo") {
      endWorldStickerPress(editor.interaction);
      return;
    }
    if (editor.interaction?.kind === "view") {
      startAnimation(() => viewController.endDrag(performance.now()));
    }
    if (editor.interaction?.kind === "paint_stroke" || editor.interaction?.kind === "paint_lasso_fill") {
      invalidateLivePaintPreviewCaches();
      const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
      if (targetDescriptor) editor.paintEngine.cancelActiveStroke(targetDescriptor);
    }
    editor.interaction = null;
    invalidateLivePaintPreviewCaches();
    syncViewToggleState();
    updateCursor(editor.pointerPos);
    requestDraw({ localOnly: true });
  }
  canvas.onpointercancel = onCanvasPointerCancel;
  canvas.onlostpointercapture = () => {
    cancelFrameCameraGesture();
  };

  canvas.onauxclick = (e) => {
    if (e.button === 1) e.preventDefault();
  };
  // A right drag of the 3D view controls opens no context menu. The canvas has no right-click action
  // of its own.
  canvas.oncontextmenu = (e) => {
    if ((isFreeSpaceView() || isFreeFrameView()) && presetUsesButton(viewControls(), 2)) e.preventDefault();
  };

  function onCanvasMouseMove(e) {
    const p = screenPos(e);
    const pointerChanged = setPointerPos(p, true);
    if (editor.interaction) return;
    updateCursor(p);
    if (pointerChanged && editor.mode === "frame" && editor.primaryTool === "cursor") {
      requestDraw({ localOnly: true, reason: DRAW_REASON.OVERLAY });
    }
  }
  canvas.onmousemove = onCanvasMouseMove;

  // Off the view no gizmo handle is under the pointer.
  canvas.onpointerleave = () => {
    if (!editor.interaction) hoverWorldGizmo({ x: -1e6, y: -1e6 });
  };

  canvas.onmouseleave = () => {
    setPointerPos(editor.pointerPos, false);
    updateCursor(editor.pointerPos);
    if (editor.mode === "frame" && editor.primaryTool === "cursor") requestDraw({ localOnly: true, reason: DRAW_REASON.OVERLAY });
  };

  function onCanvasWheel(e) {
    if (editor.mode === "frame") {
      const p = screenPos(e);
      const direction = readWheelDirection(e);
      // Edits stop PanoramaCutoutNode's playback, so the wheel keys the frame shown.
      if (direction) stopTimelinePlayback();
      // With World content the wheel moves the Camera toward the point under the pointer, as in 6DoF.
      if (direction && isFreeFrameView()) zoomFrameAt(p, -direction);
      else if (direction && zoomFrameViewAt(p, direction)) requestDraw({ localOnly: true });
      e.preventDefault();
      return;
    }
    if (editor.mode !== "pano") return;
    cancelViewTransition();
    if (isFreeSpaceView()) {
      const direction = readWheelDirection(e);
      // The wheel zooms the panorama view in (direction < 0); in space it moves toward the point under
      // the pointer the same way.
      if (direction) zoomSpaceAt(screenPos(e), -direction);
    } else if (viewController.applyWheelEvent(e)) {
      requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
    }
    e.preventDefault();
  }
  canvas.onwheel = onCanvasWheel;

  function onCanvasDragOver(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    e.preventDefault();
    setDropCue(true);
  }
  canvas.ondragover = onCanvasDragOver;

  function onCanvasDrop(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    e.preventDefault();
    e.stopPropagation();
    dragCue.depth = 0;
    setDropCue(false);
    const files = Array.from(e.dataTransfer?.files || []);
    const file = files.find((f) => isStickerImageFile(f));
    if (!file) return;
    void addImageStickerFromFile(file);
  }
  canvas.ondrop = onCanvasDrop;

  function onWindowDragEnter(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    if (!dragHasImageFiles(e)) return;
    dragCue.depth += 1;
    setDropCue(true);
    e.preventDefault();
  }
  function onWindowDragOver(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    if (!dragCue.active && dragHasImageFiles(e)) setDropCue(true);
    if (dragCue.active) e.preventDefault();
  }
  function onWindowDragLeave(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    if (!dragCue.active) return;
    dragCue.depth = Math.max(0, dragCue.depth - 1);
    const leftWindow = (Number(e.clientX) <= 0 && Number(e.clientY) <= 0);
    if (dragCue.depth === 0 || leftWindow) setDropCue(false);
  }
  function onWindowDrop(e) {
    if ((type !== "stickers" && type !== "cutout") || readOnly) return;
    dragCue.depth = 0;
    setDropCue(false);
    if (dragHasImageFiles(e)) e.preventDefault();
  }
  window.addEventListener("dragenter", onWindowDragEnter, true);
  window.addEventListener("dragover", onWindowDragOver, true);
  window.addEventListener("dragleave", onWindowDragLeave, true);
  window.addEventListener("drop", onWindowDrop, true);

  function applySidePanelParam(key, rawValue, commit = false) {
    // Edits during playback would key every frame they pass.
    stopTimelinePlayback();
    const frameInspectorShot = shotEditor && editor.mode === "frame" ? getActiveCutoutShot() : null;
    const selected = frameInspectorShot || getSelected();
    const selectedKind = frameInspectorShot ? "shot" : getSelectedKind();
    const worldInspected = selectedWorldSticker();
    if (worldInspected && !worldStickerEditable(worldInspected)) return;
    if (!worldInspected && (!selected || selectedKind === "stroke" || isItemLocked(selected))) return;
    const param = (uiState.sidePanel?.params || []).find((item) => item.key === key);
    if (!param || param.enabled === false) return;
    let out = Number(rawValue);
    if (Number.isNaN(out)) out = 0;
    // A world Sticker's position has no limit, and its scale only stays above 0. Nor has the Camera's.
    if ((worldInspected || cameraV2) && WORLD_UNLIMITED_FIELDS.has(key)) out = key === "scale" ? Math.max(out, WORLD_MIN_SCALE) : out;
    else out = clamp(out, Number(param.min), Number(param.max));
    if (key === "yaw_deg") out = wrapYaw(out);
    if (!worldInspected && cameraV2 && key.startsWith("position_")) {
      syncCutoutShot();
      setCameraField(state.camera, editor.frame, key, out);
      updateSidePanel();
      requestDraw();
      if (commit) pushHistory();
      return;
    }
    if (worldInspected) {
      setWorldStickerField(worldInspected, editor.frame, key, out);
      markObjectVisualsDirty();
      updateSidePanel();
      requestDraw();
      if (commit) pushHistory();
      return;
    }
    if (key === "opacity") setStickerOpacity(selected, editor.frame, out / 100);
    else writePose(selected, { [key]: out });
    if (shotEditor && !isSceneSticker(selected) && (key === "hFOV_deg" || key === "vFOV_deg")) {
      selected.aspect_id = deriveCutoutAspectLabelFromFov(selected);
    }
    updateSidePanel();
    requestDraw();
    if (commit) pushHistory();
  }
  async function onSidePanelClick(ev) {
    const target = ev.target.closest("[data-action]");
    if (!target) return;
    const action = String(target.getAttribute("data-action") || "");
    if (action === "coverage-set") {
      const nextCoverage = normalizeCoverageValue(target.getAttribute("data-coverage"));
      if (nextCoverage === normalizeCoverageValue(state.coverage)) return;
      state.coverage = nextCoverage;
      editor.coverage = nextCoverage;
      if (coverageWidget) {
        coverageWidget.value = String(nextCoverage);
      }
      if (previewMode) {
        runtime.backgroundDirty = true;
      } else {
        commitState();
        syncCoverageChangeToNodePreviews({
          syncPreview: type !== "cutout",
          syncGraph: type !== "cutout",
        });
      }
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (action === "toggle-selection-picker") {
      if (uiState.sidePanel?.selectionPicker?.disabled) return;
      uiState.sidePanel.selectionPicker.open = !uiState.sidePanel.selectionPicker.open;
      return;
    }
    if (action === "select-picker-item") {
      uiState.sidePanel.selectionPicker.open = false;
      const selectedId = String(target.getAttribute("data-selection-id") || "");
      let nextItem = null;
      if (selectedId) {
        if (type === "stickers") nextItem = [...getList(), ...(studio ? state.shots : [])].find((item) => String(item?.id || "") === selectedId) || null;
        else nextItem = getCutoutInspectorItems().find((entry) => String(entry?.item?.id || "") === selectedId)?.item || null;
      }
      setSelectedItem(nextItem || null);
      if (nextItem && !isStrokeGroupItem(nextItem)) {
        const pose = poseOf(nextItem);
        turnViewTo(wrapYaw(Number(pose.yaw_deg || 0)), clamp(Number(pose.pitch_deg || 0), -89.9, 89.9));
      }
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (action === "copy-state-inline") {
      const selected = getSelected();
      const selectedKind = getSelectedKind();
      if (!selected || selectedKind === "stroke" || getSelectedItems().length > 1) return;
      const text = JSON.stringify(shotEditor && selectedKind !== "image"
        ? buildCanonicalCutoutStickerState(selected)
        : buildCanonicalSelectedStickerState(poseOf(selected)));
      try {
        await navigator.clipboard.writeText(text);
        if (uiState.sidePanel?.copyStateButton) {
          uiState.sidePanel.copyStateButton.label = "Copied";
          window.setTimeout(() => {
            if (uiState.sidePanel?.copyStateButton) uiState.sidePanel.copyStateButton.label = "Copy State";
          }, 900);
        }
      } catch {
        // ignore clipboard failures
      }
      return;
    }
    if (action === "set-invert-x") {
      state.ui_settings.invert_view_x = target.getAttribute("data-value") === "1";
      persistUiSettings();
      updateSidePanel();
      node.setDirtyCanvas?.(true, true);
      requestDraw();
      return;
    }
    if (action === "set-invert-y") {
      state.ui_settings.invert_view_y = target.getAttribute("data-value") === "1";
      persistUiSettings();
      updateSidePanel();
      node.setDirtyCanvas?.(true, true);
      requestDraw();
      return;
    }
    if (action === "ui-reset-defaults") {
      state.ui_settings.invert_view_x = false;
      state.ui_settings.invert_view_y = false;
      persistUiSettings();
      updateSidePanel();
      node.setDirtyCanvas?.(true, true);
      requestDraw();
      return;
    }
    if (action === "close-preview") {
      void closeEditor();
      return;
    }
    if (action === "cancel-close") {
      void closeEditor();
      return;
    }
    if (action === "save-close") {
      apply();
      void closeEditor();
    }
  }
  side?.addEventListener("click", onSidePanelClick);
  function onSidePanelInput(ev) {
    const target = ev.target.closest("[data-action='param-input']");
    if (!target) return;
    applySidePanelParam(String(target.getAttribute("data-param-key") || ""), target.value, false);
  }
  side?.addEventListener("input", onSidePanelInput);
  function onSidePanelChange(ev) {
    const target = ev.target.closest("[data-action='param-input']");
    if (!target) return;
    applySidePanelParam(String(target.getAttribute("data-param-key") || ""), target.value, true);
  }
  side?.addEventListener("change", onSidePanelChange);
  function syncGridToggleButton() {
    syncFloatingViewButtonState();
  }
  syncGridToggleButton();
  function onRootClick(ev) {
    if (ev.target?.matches?.("[data-confirm-overlay]")) {
      const resolver = uiState.confirmDialog?.resolve;
      uiState.confirmDialog = { visible: false, title: "", text: "", confirmLabel: "Confirm", resolve: null };
      resolver?.(false);
      return;
    }
    const spaceModeTarget = ev.target.closest("[data-space-mode]");
    if (spaceModeTarget) {
      setSpaceMode(spaceModeTarget.getAttribute("data-space-mode"));
      return;
    }
    const gizmoModeTarget = ev.target.closest("[data-gizmo-mode]");
    if (gizmoModeTarget) {
      editor.gizmoMode = gizmoModeTarget.getAttribute("data-gizmo-mode");
      runtime.backgroundDirty = true;
      updateSelectionMenu();
      requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
      return;
    }
    const viewTarget = ev.target.closest("[data-view]");
    if (viewTarget) {
      if (viewTarget.getAttribute("aria-disabled") === "true") return;
      const previousMode = editor.mode;
      editor.mode = String(viewTarget.getAttribute("data-view") || "pano");
      if (shotEditor && editor.mode === "frame") {
        if (previousMode !== "frame") runtime.frameSafeRect = null;
        updateSidePanel();
        updateSelectionMenu();
      }
      forceCursorTool();
      syncViewToggleState();
      requestDraw();
      return;
    }
    const actionTarget = ev.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (actionTarget && !readOnly) {
      if (actionTarget.matches("[data-tool-mode]")) {
        const newTool = String(actionTarget.getAttribute("data-tool-mode") || "cursor");
        editor.primaryTool = newTool;
        if (newTool === "paint" || newTool === "mask") clearSelection({ preservePanelValues: true });
        syncPaintUi();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (actionTarget.matches("[data-tool-ui-action]")) {
        const action = String(actionTarget.getAttribute("data-tool-ui-action") || "");
        if ((action === "undo" || action === "redo") && actionTarget.disabled) return;
        if (action === "undo") restoreHistory(-1);
        else if (action === "redo") restoreHistory(1);
        else if (action === "clear") clearAll();
        else if (action === "add" || action === "add-image") addImageSticker();
        else if (action === "add-world") addWorldImageSticker();
        else if (action === "add-or-look") addCutoutFrame();
        else if (action === "add-camera") addStudioCamera();
        return;
      }
      if (actionTarget.matches("[data-paint-tool]")) {
        editor.primaryTool = "paint";
        const tool = String(actionTarget.getAttribute("data-paint-tool") || "pen");
        editor.paintTool = tool;
        clearSelection({ preservePanelValues: true });
        if (BRUSH_PRESETS[tool]) editor.activeBrushPresetId = tool;
        syncPaintUi();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (actionTarget.matches("[data-mask-tool]")) {
        editor.primaryTool = "mask";
        editor.maskTool = String(actionTarget.getAttribute("data-mask-tool") || "pen");
        clearSelection({ preservePanelValues: true });
        syncPaintUi();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (actionTarget.matches("[data-paint-layer-clear-current]")) {
        const layerKind = String(actionTarget.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        clearPaintingLayer(layerKind);
        return;
      }
      if (actionTarget.matches("[data-paint-color-swatch]")) {
        const swatch = PAINT_COLOR_SWATCHES.find((item) => item.id === actionTarget.getAttribute("data-paint-color-swatch"));
        if (!swatch) return;
        editor.paintColor = cloneColor(swatch.color);
        closePaintColorPop(true);
        syncPaintUi();
        return;
      }
      if (actionTarget.matches("[data-paint-color-custom]")) {
        ev.preventDefault();
        ev.stopPropagation();
        if (paintColorPop && !paintColorPop.hidden) closePaintColorPop(true);
        else openPaintColorPop();
        syncPaintUi();
        return;
      }
    }
    const action = String(actionTarget?.getAttribute?.("data-action") || "");
    if (action === "video-play-toggle") {
      ev.preventDefault();
      ev.stopPropagation();
      if (!(videoEl instanceof HTMLVideoElement)) return;
      videoState.resumeAfterScrub = false;
      togglePlayback();
      return;
    }
    if (action === "video-audio-toggle") {
      ev.preventDefault();
      ev.stopPropagation();
      toggleVideoMuted();
      if (typeof actionTarget?.blur === "function") actionTarget.blur();
      return;
    }
    if (action === "video-loop-toggle") {
      ev.preventDefault();
      ev.stopPropagation();
      if (!(videoEl instanceof HTMLVideoElement)) return;
      const nextLoop = !uiState.videoTransport.loop;
      uiState.videoTransport.loop = nextLoop;
      videoEl.loop = nextLoop;
      syncVideoTransportState({
        hasAudio: uiState.videoTransport.hasAudio,
        loop: nextLoop,
        muted: videoEl.muted,
        volume: Number(videoEl.volume ?? uiState.videoTransport.volume ?? 1),
      });
      if (typeof actionTarget?.blur === "function") actionTarget.blur();
      return;
    }
    if (!readOnly) {
      if (action === "frame-aspect") {
        uiState.frameRail.aspectOpen = !uiState.frameRail.aspectOpen;
        return;
      }
      if (action === "frame-aspect-set") {
        const shot = editor.mode === "frame" ? getActiveCutoutShot() : null;
        if (!shot || shot.locked === true) return;
        setShotAspect(shot, String(actionTarget.getAttribute("data-aspect") || "1:1"));
        uiState.frameRail.aspectOpen = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        syncViewToggleState();
        // 360° leaves the Frame view (Panorama Studio), whose inspector shows the shot.
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (action === "frame-aspect-custom") {
        const shot = editor.mode === "frame" ? getActiveCutoutShot() : null;
        const width = actionTarget.getAttribute("data-custom-width");
        const height = actionTarget.getAttribute("data-custom-height");
        if (!shot || !applyCutoutAspectCustom(shot, width, height)) return;
        uiState.frameRail.aspectOpen = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        syncViewToggleState();
        requestDraw();
        return;
      }
      if (action === "frame-rotate-90") {
        const shot = editor.mode === "frame" ? getActiveCutoutShot() : null;
        if (!shot || shot.locked === true) return;
        rotateCutoutAspect90(shot);
        uiState.frameRail.aspectOpen = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        syncViewToggleState();
        requestDraw();
        return;
      }
      if (action === "aspect") {
        editor.cutoutAspectOpen = !editor.cutoutAspectOpen;
        editor.menuSize.measured = false;
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (action === "aspect-set") {
        const selected = getSelected();
        if (!selected) return;
        const aspect = String(actionTarget.getAttribute("data-aspect") || "1:1");
        setShotAspect(selected, aspect);
        editor.cutoutAspectOpen = false;
        editor.menuSize.measured = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (action === "rotate-90") {
        const selected = getSelected();
        if (!selected || isErpCamera()) return;
        rotateCutoutAspect90(selected);
        editor.cutoutAspectOpen = false;
        editor.menuSize.measured = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (action === "bring-front") {
        bringSelectedToFront();
        return;
      }
      if (action === "send-back") {
        sendSelectedToBack();
        return;
      }
      if (action === "duplicate") {
        duplicateSelected();
        return;
      }
      if (action === "replace-image") {
        replaceSelectedImage();
        return;
      }
      if (action === "toggle-lock") {
        toggleSelectedLock();
        return;
      }
      if (action === "back-initial") {
        restoreSelectedToInitialPose();
        return;
      }
      if (action === "toggle-visible") {
        toggleSelectedExternalStickerVisibility();
        return;
      }
      if (action === "delete") {
        deleteSelected();
        return;
      }
    }
    if (action === "reset-view") {
      if (editor.mode === "frame") return;
      // In space the view also goes back to where 3DoF stands (the World origin, where the ERP is taken from,
      // or the Cutout's Camera), as it opened.
      transitionView(
        { position: spaceOrigin(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: contentSphere()?.radius || DEFAULT_DISTANCE },
        { mode: shownSpaceMode(editor.spaceMode, editor.viewTransition), moved: false },
      );
      return;
    }
    if (action === "frame-view") {
      // As the button shows it: not on the way back to 3DoF.
      if (!isFreeSpaceView() || shownSpaceMode(editor.spaceMode, editor.viewTransition) !== "6dof") return;
      frameSpaceContent();
      return;
    }
    if (action === "toggle-grid") {
      if (editor.mode === "frame") return;
      editor.showGrid = !editor.showGrid;
      setNodeGridVisibility(node?.id, editor.showGrid);
      syncGridToggleButton();
      requestDraw();
      return;
    }
    if (action === "toggle-fullscreen") {
      ev.preventDefault();
      ev.stopPropagation();
      toggleFullscreen();
      return;
    }
    if (action === "toggle-output-preview-size") {
      ev.preventDefault();
      ev.stopPropagation();
      const nextExpanded = !editor.outputPreviewExpanded;
      editor.outputPreviewExpanded = nextExpanded;
      startAnimation(() => {
        editor.outputPreviewAnimFrom = editor.outputPreviewAnim;
        editor.outputPreviewAnimTo = nextExpanded ? 1 : 0;
        editor.outputPreviewAnimStartTs = performance.now();
      });
      syncOutputPreviewToggleButton();
      requestDraw();
      return;
    }
    const historyBtn = ev.target.closest("[data-paint-history-index]");
    if (!historyBtn) return;
    const idx = Number(historyBtn.getAttribute("data-paint-history-index"));
    const color = editor.customPaintHistory[idx];
    if (!color) return;
    editor.customPaintColor = cloneColor(color);
    editor.paintColor = cloneColor(color);
    syncPaintUi();
  }
  root.addEventListener("click", onRootClick);
  function onRootInput(ev) {
    const videoSeek = ev.target.closest("[data-video-seek]");
    if (videoSeek) {
      if (!(videoEl instanceof HTMLVideoElement)) return;
      if (playback.playing) videoState.resumeAfterScrub = true;
      playback.seek(frameAtTime(Number(videoSeek.value || 0), playbackFps()));
      return;
    }
    const videoVolume = ev.target.closest("[data-video-volume]");
    if (videoVolume) {
      if (!(videoEl instanceof HTMLVideoElement)) return;
      const nextVolume = clamp(Number(videoVolume.value || 0), 0, 1);
      videoEl.volume = nextVolume;
      videoEl.muted = nextVolume <= 0.0001;
      syncVideoTransportState({
        hasAudio: uiState.videoTransport.hasAudio,
        muted: videoEl.muted,
        volume: nextVolume,
      });
      return;
    }
    const slider = ev.target.closest("[data-paint-size-slider]");
    if (slider) {
      if (slider.disabled) return;
      const v = Math.max(1, Math.min(120, Math.round(Number(slider.value))));
      const sizePresetId = getBrushPresetIdForTool(editor.primaryTool === "paint" ? editor.paintTool : editor.maskTool);
      editor.brushSizes[sizePresetId] = v;
      syncPaintUi();
      showPaintSizePreview();
      return;
    }
    const alphaSlider = ev.target.closest("[data-paint-alpha-slider]");
    if (alphaSlider) {
      const next = { ...editor.customPaintColor, a: clamp(Number(alphaSlider.value) / 100, 0, 1) };
      editor.customPaintColor = cloneColor(next);
      editor.paintColor = cloneColor(next);
      syncPaintUi();
    }
  }
  root.addEventListener("input", onRootInput);
  function onRootChange(ev) {
    if (ev.target.closest("[data-video-seek]")) {
      if (!(videoEl instanceof HTMLVideoElement)) return;
      if (videoState.resumeAfterScrub) playback.play();
      videoState.resumeAfterScrub = false;
      return;
    }
    if (ev.target.closest("[data-video-volume]")) {
      if (typeof ev.target?.blur === "function") ev.target.blur();
      return;
    }
    if (ev.target.closest("[data-paint-size-slider]")) hidePaintSizePreview();
  }
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
  function onRootPointerOver(ev) {
    const target = ev.target.closest("[data-tip]");
    if (!target || !root.contains(target)) return;
    if (tooltip.target === target) return;
    tooltip.target = target;
    if (tooltip.timer) clearTimeout(tooltip.timer);
    tooltip.timer = window.setTimeout(() => {
      if (tooltip.target === target) showTooltipFor(target);
    }, 220);
  }
  root.addEventListener("pointerover", onRootPointerOver);
  function onRootPointerOut(ev) {
    const target = ev.target.closest("[data-tip]");
    if (!target || tooltip.target !== target) return;
    const nextTarget = ev.relatedTarget instanceof Element ? ev.relatedTarget.closest?.("[data-tip]") : null;
    if (nextTarget === target) return;
    hideTooltip();
  }
  root.addEventListener("pointerout", onRootPointerOut);
  root.addEventListener("pointerdown", (event) => {
    if (!event.target.closest("[data-frame-roll-knob]")) hideTooltip();
  });
  function updatePaintColorFromSv(clientX, clientY) {
    if (!paintColorSv) return;
    const rect = paintColorSv.getBoundingClientRect();
    const sat = clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1);
    const val = 1 - clamp((clientY - rect.top) / Math.max(1, rect.height), 0, 1);
    const hsv = rgb01ToHsv(editor.customPaintColor);
    const next = { ...hsv01ToRgb(hsv.h, sat, val), a: Number(editor.customPaintColor?.a ?? 1) };
    editor.customPaintColor = cloneColor(next);
    editor.paintColor = cloneColor(next);
    syncPaintUi();
  }
  function updatePaintColorFromHue(clientX) {
    if (!paintHueStrip) return;
    const rect = paintHueStrip.getBoundingClientRect();
    const hue = clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1);
    const hsv = rgb01ToHsv(editor.customPaintColor);
    const next = { ...hsv01ToRgb(hue, hsv.s, hsv.v), a: Number(editor.customPaintColor?.a ?? 1) };
    editor.customPaintColor = cloneColor(next);
    editor.paintColor = cloneColor(next);
    syncPaintUi();
  }
  function bindDrag(startEvent, onMove) {
    const pointerId = startEvent.pointerId;
    onMove(startEvent);
    const handleMove = (moveEvent) => {
      if (moveEvent.pointerId !== pointerId) return;
      onMove(moveEvent);
    };
    const finish = (endEvent) => {
      if (endEvent.pointerId !== pointerId) return;
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", finish);
      window.removeEventListener("pointercancel", finish);
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", finish);
    window.addEventListener("pointercancel", finish);
  }
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
    const ok = target.getAttribute("data-action") === "confirm-accept";
    const resolver = uiState.confirmDialog?.resolve;
    uiState.confirmDialog = { visible: false, title: "", text: "", confirmLabel: "Confirm", resolve: null };
    resolver?.(ok);
  });
  function syncFullscreenButton() {
    const active = !!editor.fullscreen;
    patchUiButton(uiState.floatingButtons, "action", "toggle-fullscreen", {
      icon: active ? ICON.fullscreen_close : ICON.fullscreen,
      label: active ? "Exit Fullscreen" : "Fullscreen",
      tip: active ? "Exit fullscreen" : "Fullscreen",
    });
  }
  function setFullscreenState(active) {
    const on = !!active;
    if (editor.fullscreen === on) return;
    editor.fullscreen = on;
    root.classList.toggle("pano-modal-fullscreen", on);
    if (on) {
      editor.fullscreenPrevShowGrid = !!editor.showGrid;
      editor.showGrid = false;
    } else if (editor.fullscreenPrevShowGrid !== null) {
      editor.showGrid = !!editor.fullscreenPrevShowGrid;
      editor.fullscreenPrevShowGrid = null;
    }
    syncGridToggleButton();
    syncFullscreenButton();
    queueVideoTransportLayout();
    requestDraw();
  }
  function isOverlayFullscreen() {
    return document.fullscreenElement === overlay;
  }
  async function toggleFullscreen() {
    try {
      if (!document.fullscreenEnabled) {
        setFullscreenState(!editor.fullscreen);
        return;
      }
      if (!isOverlayFullscreen()) {
        await overlay.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch {
      setFullscreenState(!editor.fullscreen);
    }
  }
  function onFullscreenChange() {
    if (document.fullscreenEnabled) {
      setFullscreenState(isOverlayFullscreen());
    }
  }
  document.addEventListener("fullscreenchange", onFullscreenChange);
  syncFullscreenButton();
  function syncOutputPreviewToggleButton() {
    const expanded = !!editor.outputPreviewExpanded;
    uiState.outputPreviewToggle.icon = expanded ? ICON.fullscreen_close : ICON.fullscreen;
    uiState.outputPreviewToggle.label = expanded ? "Reduce Preview" : "Expand Preview";
    uiState.outputPreviewToggle.tip = expanded ? "Reduce preview" : "Expand preview";
  }
  syncOutputPreviewToggleButton();
  const modalPrevOnConnectionsChange = node.onConnectionsChange;
  let modalOnConnectionsChange = null;
  let unregisterModalExternalStickerSync = () => {};
  if (!readOnly && type === "stickers") {
    // The node's onExecuted (pano_preview_runtime.js) runs this once per result.
    unregisterModalExternalStickerSync = registerExternalStickerSync(node, (reason = "sync") => {
      if (reason === "executed") {
        invalidateMediaUiImage(imageCache, EXTERNAL_STICKER_PREVIEW_KEY);
        refreshModalVideoSource();
        if (sceneV2) applyVideoTimelineFps();
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
  if (!readOnly && !cutoutV2) {
    _paintLayerSyncRegistry.set(String(node.id ?? "0"), () => syncPaintingLayerAsync());
  }

  let closeEditorPromise = null;
  async function closeEditor() {
    if (closeEditorPromise) return closeEditorPromise;
    closeEditorPromise = (async () => {
      _paintLayerSyncRegistry.delete(String(node.id ?? "0"));
      flushFrameWheelCommit();
      if (!readOnly) commitState();
      if (document.fullscreenElement === overlay) {
        document.exitFullscreen?.().catch(() => { });
      }
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      node.__panoLiveStateOverride = null;
      node.__panoLivePaintSurface = null;
      if (node.__panoFlushStateBeforeQueue === flushStateBeforeQueue) {
        node.__panoFlushStateBeforeQueue = null;
      }
      node.__panoDomPreview?.requestDraw?.();
      node.graph?.setDirtyCanvas?.(true, true);
      app?.canvas?.setDirty?.(true, true);
      hideTooltip();
      dragFrames.cancel();
      stopRenderLoop();
      if (videoEl instanceof HTMLVideoElement) videoEl.pause();
      videoCleanupFns.forEach((fn) => {
        try { fn(); } catch { }
      });
      editorView.dispose();
      setDropCue(false);
      window.removeEventListener("keydown", onEscClose, true);
      window.removeEventListener("keydown", onDeleteKey, true);
      window.removeEventListener("keydown", onSpaceKey, true);
      window.removeEventListener("keyup", onSpaceKeyUp, true);
      window.removeEventListener("keydown", onModifierKeyChange, true);
      window.removeEventListener("keyup", onModifierKeyChange, true);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("keydown", onUndoRedoKey, true);
      window.removeEventListener("dragenter", onWindowDragEnter, true);
      window.removeEventListener("dragover", onWindowDragOver, true);
      window.removeEventListener("dragleave", onWindowDragLeave, true);
      window.removeEventListener("drop", onWindowDrop, true);
      if (!readOnly && type === "stickers") {
        if (node.onConnectionsChange === modalOnConnectionsChange) node.onConnectionsChange = modalPrevOnConnectionsChange;
        unregisterModalExternalStickerSync();
      }
      vueApp.unmount();
      mountHost.remove();
      triggerBackgroundPersistenceOnClose();
      closeEditorPromise = null;
      return true;
    })().catch((error) => {
      console.error("[PanoramaCutoutSync] closeEditor failed", error);
      closeEditorPromise = null;
      return false;
    });
    return closeEditorPromise;
  }
  function onEscClose(ev) {
    if (ev.key !== "Escape") return;
    if (cancelFrameCameraGesture()) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      return;
    }
    if (editor.fullscreen && document.fullscreenElement === overlay) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      document.exitFullscreen?.().catch(() => { });
      return;
    }
    if (editor.fullscreen) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      setFullscreenState(false);
      return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    ev.stopImmediatePropagation?.();
    void closeEditor();
  }
  function onDeleteKey(ev) {
    const key = String(ev.key || "");
    const code = String(ev.code || "");
    const keyCode = Number(ev.keyCode || 0);
    const isDeleteKey = key === "Delete" || code === "Delete" || keyCode === 46;
    const isBackspaceKey = key === "Backspace" || code === "Backspace" || keyCode === 8;
    if (!isDeleteKey && !isBackspaceKey) return;
    const t = ev.target;
    const tag = (t?.tagName || "").toUpperCase();
    if (tag === "INPUT" || tag === "TEXTAREA" || t?.isContentEditable) return;
    if (timeline.selection) {
      deleteSelectedKeyframes();
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    if (deleteSelectedWorldSticker()) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    const selected = getSelected();
    if (!selected) return;
    deleteSelected();
    ev.preventDefault();
    ev.stopPropagation();
  }
  // Space plays and stops the Timeline like its play button, also over a focused button or slider.
  // Space with Ctrl, Meta or Alt is left to the browser and the OS, and typing keeps its spaces.
  // Focus outside the editor (another ComfyUI dialog on top) keeps Space for itself.
  function spaceTogglesPlayback(ev) {
    if (ev.code !== "Space" || ev.ctrlKey || ev.metaKey || ev.altKey) return false;
    if (readOnly || !stateV2 || !uiState.timeline.visible || uiState.confirmDialog.visible) return false;
    const t = ev.composedPath()[0];
    if (t !== document.body && t !== document.documentElement && !overlay.contains(t)) return false;
    const tag = (t?.tagName || "").toUpperCase();
    if (tag === "INPUT") return !TEXT_INPUT_TYPES.has(String(t.type || "text").toLowerCase());
    return tag !== "TEXTAREA" && tag !== "SELECT" && !t?.isContentEditable;
  }
  function onSpaceKey(ev) {
    if (!spaceTogglesPlayback(ev)) return;
    ev.preventDefault();
    ev.stopPropagation();
    if (!ev.repeat) togglePlayback();
  }
  // Firefox clicks a focused button on keyup, so the keyup is held back too.
  function onSpaceKeyUp(ev) {
    if (!spaceTogglesPlayback(ev)) return;
    ev.preventDefault();
    ev.stopPropagation();
  }
  function onModifierKeyChange(ev) {
    const next = !!(ev.ctrlKey || ev.metaKey);
    const nextAlt = !!ev.altKey;
    if (editor.marqueeModifier === next && editor.altModifier === nextAlt) return;
    editor.marqueeModifier = next;
    editor.altModifier = nextAlt;
    syncFrameRollKnob();
    updateCursor(editor.pointerPos);
  }
  function onWindowBlur() {
    editor.marqueeModifier = false;
    editor.altModifier = false;
    syncFrameRollKnob();
    updateCursor(editor.pointerPos);
  }
  function onUndoRedoKey(ev) {
    if (readOnly) return;
    if (!ev.ctrlKey && !ev.metaKey) return;
    const key = String(ev.key || "").toLowerCase();
    const code = String(ev.code || "");
    if (key !== "z" && code !== "KeyZ") return;
    const t = ev.target;
    const tag = (t?.tagName || "").toUpperCase();
    if (tag === "INPUT" || tag === "TEXTAREA" || t?.isContentEditable) return;
    const { canUndo, canRedo } = getHistoryCapabilities();
    if ((ev.shiftKey && !canRedo) || (!ev.shiftKey && !canUndo)) return;
    restoreHistory(ev.shiftKey ? 1 : -1);
    ev.preventDefault();
    ev.stopPropagation();
  }
  window.addEventListener("keydown", onEscClose, true);
  window.addEventListener("keydown", onDeleteKey, true);
  window.addEventListener("keydown", onSpaceKey, true);
  window.addEventListener("keyup", onSpaceKeyUp, true);
  window.addEventListener("keydown", onModifierKeyChange, true);
  window.addEventListener("keyup", onModifierKeyChange, true);
  window.addEventListener("blur", onWindowBlur);
  window.addEventListener("keydown", onUndoRedoKey, true);
  overlay.addEventListener("pointerdown", (ev) => {
    if (ev.target === overlay) void closeEditor();
  });

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

  runBootStep("cutout-focus", applyInitialCutoutFocus);
  if (!readOnly && type === "stickers") {
    runBootStep("external-sticker-sync", () => reconcileExternalStickerFromInputs("open"), { rollbackState: true });
  }
  void migrateLegacyEmbeddedAssets().catch((error) => {
    uiState.stageWarningDetail = "boot:asset-migration";
    console.error('[PanoramaStickers] editor boot step "asset-migration" failed', error);
  });
  runBootStep("history", pushHistory);
  runBootStep("undo-redo", syncUndoRedoButtons);
  runBootStep("paint-ui", syncPaintUi);
  runBootStep("side-panel", updateSidePanel);
  runBootStep("look-at-frame", syncLookAtFrameButtonState);
  runBootStep("video-source", refreshModalVideoSource);
  runBootStep("canvas-size", syncCanvasSize);
  runBootStep("cursor", () => updateCursor(editor.pointerPos));
  requestDraw();
  sampleEditorDiagnostics();
}

app.registerExtension(createPanoEditorExtension({
  app,
  openEditor: showEditor,
  attachStickers: attachStickersNodePreview,
  attachCutout: attachCutoutPreview,
  attachPreview: attachPreviewNode,
  restoreOutput: restoreNodeOutput,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: ENABLE_STICKERS_NODE_PREVIEW,
}));
