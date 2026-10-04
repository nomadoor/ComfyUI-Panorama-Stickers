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
import { DEFAULT_BRUSH_PRESET_ID } from "./pano_brush_presets.js";
import { createFrameBatch } from "./pano_frame_batch.js";
import { DRAW_REASON, createFrameScheduler } from "./pano_frame_scheduler.js";
import { createPaintEngineManager } from "./pano_paint_engine.js";
import {
  CAMERA_SHOT_ID,
  cameraShot,
  editorActive,
  normalizeCoverageValue,
  parsePanoEditorState,
  parseSceneEditorState,
} from "./pano_editor_state.js";
import { timelineFps } from "./pano_scene_state.js";
import { createEditorView } from "./pano_editor_view.js";
import { DEFAULT_DISTANCE } from "./pano_space.js";
import { presetUsesButton } from "./pano_view_controls.js";
import { createPanoCanvas, trackPanoCanvas, trackPanoVideo } from "./pano_diagnostics.js";
import { installPanoSuiteStylesheet } from "./pano_styles.js";
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
import { createPanoEditorExtension, flushPanoStateProducers } from "./pano_editor_extension.js";
import { isNodeOutputMediaCurrent } from "./pano_preview_video.js";
import { isStickerImageFile } from "./pano_sticker_file_import.js";
import {
  registerExternalStickerSync,
  runExternalStickerSync,
} from "./pano_external_sticker_sync.js";
import {
  CUTOUT_V2_HIDDEN_TOOLS,
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
import { createCameraPreview, getCutoutPreviewViewportSize, splatDrawReason } from "./editor/camera_preview.js";
import { createOverlay } from "./editor/overlay.js";
import { createRenderLoop } from "./editor/render_loop.js";
import { createPanels } from "./editor/panels.js";
import { createTimeline } from "./editor/timeline.js";
import { createTimelineActions } from "./editor/timeline_actions.js";
import { createCommit } from "./editor/commit.js";
import { createCommands } from "./editor/commands.js";
import { createStickerImport } from "./editor/sticker_import.js";
import { createCamera } from "./editor/camera.js";
import { createFrameView } from "./editor/frame_view.js";
import { createPaintInput } from "./editor/paint_input.js";
import { createHitTest } from "./editor/hit_test.js";
import { createSelectionMenu } from "./editor/selection_menu.js";
import { createPointerInput } from "./editor/pointer_input.js";
import { createSidePanelEvents } from "./editor/side_panel_events.js";
import { createModalEvents } from "./editor/modal_events.js";
import { createKeyboard } from "./editor/keyboard.js";

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
  // is Panorama Studio's while it has one. initialShotBase is the shot the editor opens with (null without a
  // Camera); cutoutShotBase then follows it.
  let initialShotBase = null;
  if (cameraV2) {
    // A hidden camera does not shoot in Panorama Studio, so it opens without a shot.
    initialShotBase = state.camera && (!studio || state.camera.visible !== false) ? cameraShot(state.camera, 0) : null;
    state.shots = initialShotBase ? [{ ...initialShotBase, position: [...initialShotBase.position] }] : [];
    // Panorama Studio opens with nothing selected, as the Stickers editor.
    state.active.selected_shot_id = initialShotBase && cutoutV2 ? CAMERA_SHOT_ID : null;
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

  // --- editor modules: begin (docs/editor-architecture.md) ---
  // Each module takes what it uses from here and calls the others through connect() (editor/modules.js);
  // showEditor takes back what it registers and calls below. A name missing on either side throws.
  const {
    addImageStickerFromFile, addWorldStickerFromFile, applyInitialCutoutFocus, applyVideoTimelineFps, bindDrag,
    cancelFrameCameraGesture, closePaintColorPop, commitState, disposeMediaSession, editorAnimating,
    finishKnobRoll, flushFrameWheelCommit, forgetCameraPreviewFrame, getUnwrapRect, hidePaintSizePreview,
    hideTooltip, hoverWorldGizmo, isFreeFrameView, isFreeSpaceView, migrateLegacyEmbeddedAssets, onCanvasDragOver,
    onCanvasDrop, onCanvasMouseMove, onCanvasPointerCancel, onCanvasPointerDown, onCanvasPointerMove,
    onCanvasPointerUp, onCanvasWheel, onDeleteKey, onEscClose, onFrameRollKnobDoubleClick,
    onFrameRollKnobPointerDown, onFrameRollKnobPointerMove, onFullscreenChange, onModifierKeyChange, onRootChange,
    onRootClick, onRootInput, onRootPointerOut, onRootPointerOver, onSidePanelChange, onSidePanelClick,
    onSidePanelInput, onSpaceKey, onSpaceKeyUp, onTimelineAction, onUndoRedoKey, onWindowBlur, onWindowDragEnter,
    onWindowDragLeave, onWindowDragOver, onWindowDrop, playback, pushHistory, reconcileExternalStickerFromInputs,
    refreshModalVideoSource, replaceSelectedImageFromFile, requestDraw, sampleEditorDiagnostics, setDropCue,
    setPointerPos, stageResizeObserver, stickerCornerOrderSanity, stopRenderLoop, syncCanvasSize, syncCutoutShot,
    syncFullscreenButton, syncGridToggleButton, syncLookAtFrameButtonState, syncOutputPreviewToggleButton,
    syncPaintUi, syncPaintingLayerAsync, syncTimeline, syncUndoRedoButtons, tick,
    triggerBackgroundPersistenceOnClose, updateCursor, updatePaintColorFromHue, updatePaintColorFromSv,
    updateSelectionMenu, updateSidePanel, viewControls, watchPixelRatio,
  } = createEditorModules({
    api, app, backgroundCanvas, bgWidget, cameraV2, canvas, capture, closeEditor, comfyMedia, coverageWidget, ctx,
    cutoutPreviewCanvas, cutoutPreviewHost, cutoutV2, dragCue, dragFrames, editor, editorView, floatingRightEl,
    floatingTopEl, frameGateCssRadius, frameRailEl, frameRollKnobEl, hideSidebar, imageCache, initialShotBase,
    loadPreferredExactLinkedImage, mediaAssetSource, mediaSource, mediaUiImage, node, overlay, paintColorPop,
    paintColorRow, paintColorSv, paintColorSvCursor, paintCursorEl, paintDockEl, paintHueHandle, paintHueStrip,
    paintSizePreviewEl, paintSizePreviewSampleEl, portStillCanvas, portVideoEl, presetWidget, previewMode,
    rasterErpCanvasCache, rasterImageAlphaCache, rasterImageCache, readOnly, resolveEditorOutputPresetWidth, root,
    runtime, sceneV2, scheduler, selectionMenu, setCanvasCursor, shotEditor, stageWrap, state, stateV2,
    stateWidget, stillCanvas, studio, timeline, timelinePlayhead, toolRailEl, tooltip, tooltipEl, type, uiState,
    videoEl, videoTimelineFps, videoTransportEl, viewController, vueModal,
  }, [
    createMediaSession, createHistory, createItems, createSelection, createProjection, createObjectGeometry,
    createPaintLayers, createPaintStrokes, createExternalStickers, createSpace, createViewInput,
    createCameraPreview, createOverlay, createRenderLoop, createPanels, createTimeline, createTimelineActions,
    createCommit, createCommands, createStickerImport, createCamera, createFrameView, createPaintInput,
    createHitTest, createSelectionMenu, createPointerInput, createSidePanelEvents, createModalEvents,
    createKeyboard,
  ]);
  // --- editor modules: end ---

  // Coordinate sanity: front-facing sticker should have top edge above bottom edge.
  const __sanity = stickerCornerOrderSanity();
  void __sanity;

  stageResizeObserver.observe(canvas);
  watchPixelRatio();

  const flushStateBeforeQueue = () => commitState();
  if (!readOnly) node.__panoFlushStateBeforeQueue = flushStateBeforeQueue;

  frameRollKnobEl?.addEventListener("pointerdown", onFrameRollKnobPointerDown);
  frameRollKnobEl?.addEventListener("pointermove", onFrameRollKnobPointerMove);
  frameRollKnobEl?.addEventListener("pointerup", finishKnobRoll);
  frameRollKnobEl?.addEventListener("pointercancel", () => cancelFrameCameraGesture());
  frameRollKnobEl?.addEventListener("lostpointercapture", () => {
    if (editor.interaction?.source === "knob") cancelFrameCameraGesture();
  });
  frameRollKnobEl?.addEventListener("dblclick", onFrameRollKnobDoubleClick);

  canvas.onpointerdown = onCanvasPointerDown;

  canvas.onpointermove = onCanvasPointerMove;

  canvas.onpointerup = onCanvasPointerUp;

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
  syncGridToggleButton();
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
  root.addEventListener("pointerdown", (event) => {
    if (!event.target.closest("[data-frame-roll-knob]")) hideTooltip();
  });
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
  document.addEventListener("fullscreenchange", onFullscreenChange);
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
      disposeMediaSession();
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
