// The editor's frames: requestDraw asks the scheduler for one, tickFrame steps the animations, and
// drawScene draws the stage (the three.js canvas, then the 2D overlay). It keeps the canvases at the
// stage's size and pixel ratio, and stops with the editor.
import { addDiagnosticsSource, diagnosticsFrameEnd, diagnosticsFrameStart } from "../pano_diagnostics.js";
import { screenRenderSize } from "../pano_editor_view.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { IMAGE_FAILED, IMAGE_LOADING } from "../pano_image_state.js";
import { clamp } from "../pano_math.js";
import { viewTransitionFrame } from "../pano_view_transition.js";
import { CUTOUT_PANO_DIM_TRANSITION_MS, FRAME_ROLL_OVERLAY_TRANSITION_MS } from "./constants.js";
import { easeInCubic, easeInOutCubic, easeOutCubic, lerp } from "./helpers.js";

export function createRenderLoop(deps) {
  const {
    app, backgroundCanvas, canvas, editor, editorView, node, readOnly, runtime, scheduler, shotEditor, stageWrap,
    state, timeline, type, uiState, viewController,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let applyViewTransitionEnd, drawCutoutOutputPreview, drawCutoutPanoPassepartout, drawFrameRollOverlay,
    drawFrameViewBackground, drawGridPano, drawGridUnwrap, drawLassoOutlineOverlay, drawObjects,
    endEditorViewFrame, getActiveCutoutShot, getCutoutPanoDimTarget, getSharedLivePaintSurface,
    getStageImageStatus, isPaintCompositeInteraction, measureFrameSafeRect, playback, rebuildPaintEngineIfNeeded,
    syncCutoutShot, syncFloatingViewButtonState, syncFrameRollKnob, syncLookAtFrameButtonState,
    syncViewToggleState, updateSelectionMenu, upstreamNotice;

  // Removes the editor from the diagnostics samples (set when the render loop starts).
  let removeDiagnosticsSource = () => {};

  // Draws the stage: the three.js canvas when runtime.backgroundDirty says something it shows changed
  // (reasons are the DRAW_REASON values of this frame), then the 2D overlay over it. A frame that draws on
  // the three.js canvas draws all of it (its drawing buffer is not kept after the page shows it).
  function drawScene(reasons = new Set()) {
    endEditorViewFrame();
    const drawView = runtime.backgroundDirty;
    // The camera preview draws first, in the corner the stage's frame then covers, with the paint as the
    // stage draws it.
    if (shotEditor) {
      rebuildPaintEngineIfNeeded();
      drawCutoutOutputPreview(drawView, reasons);
    }
    if (editor.mode === "frame") {
      runtime.frameSafeRect = measureFrameSafeRect();
      drawFrameViewBackground(drawView);
    }
    else if (editor.mode === "unwrap") drawGridUnwrap(drawView);
    else drawGridPano(drawView);
    drawCutoutPanoPassepartout();
    drawObjects();
    syncFrameRollKnob();
    drawLassoOutlineOverlay();
    drawFrameRollOverlay();
    uiState.fovValue = `${Math.round(editor.viewFov)}°`;
    if (Math.abs(Number(editor.outputPreviewAnim || 0) - Number(editor.outputPreviewAnimTo || 0)) < 1e-6) {
      updateSelectionMenu();
    }
    if (!runtime.hasPresentedFrame) {
      runtime.hasPresentedFrame = true;
      backgroundCanvas.style.opacity = "1";
    }
    if (shotEditor && uiState.cameraPreview) {
      uiState.cameraPreview.settled = runtime.pendingStableLayoutFrames <= 0 && runtime.hasPresentedFrame && editor.mode !== "frame";
    }
    const stageStatus = getStageImageStatus();
    uiState.stageStatus = stageStatus.status;
    uiState.stageStatusDetail = stageStatus.detail;
    // Panorama Studio notes that the Scene linked to `scene` shows once the workflow has run, or that its
    // background takes the place of bg_media (#90).
    uiState.stageNotice = upstreamNotice();
    if (stageStatus.status === IMAGE_LOADING) {
      stageWrap?.removeAttribute("data-stage-ready");
      stageWrap?.setAttribute("data-stage-loading-kind", stageStatus.detail);
    } else {
      stageWrap?.setAttribute("data-stage-ready", "");
      stageWrap?.removeAttribute("data-stage-loading-kind");
    }
  }

  function isModalBackgroundObjectInteraction(interaction = editor.interaction) {
    if (type !== "stickers" || editor.mode !== "pano") return false;
    const kind = String(interaction?.kind || "");
    if (kind === "move" || kind === "scale" || kind === "scale_x" || kind === "scale_y" || kind === "rotate") {
      return true;
    }
    if (kind === "move_multi") {
      return Array.isArray(interaction?.stickerSnapshots) && interaction.stickerSnapshots.length > 0;
    }
    return false;
  }

  function isDragging() {
    return !!editor.interaction || !!timeline.drag;
  }

  function syncNodeLivePreviewSources() {
    runtime.nodePreviewPending = false;
    node.__panoLiveStateOverride = state;
    node.__panoLiveStateVersion = Number(node.__panoLiveStateVersion || 0) + 1;
    node.__panoLivePaintSurface = getSharedLivePaintSurface();
  }

  // Asks for the next frame. options.reason (DRAW_REASON) says what changed; without one the working
  // state may have, which makes what is derived from it again (scheduler.stateRevision).
  function requestDraw(options = {}) {
    const reason = options.reason ?? DRAW_REASON.STATE;
    const localOnly = !!options.localOnly;
    const externalSync = options.externalSync === true;
    const cause = String(options.cause || "");
    const interactionKind = String(editor.interaction?.kind || "");
    const backgroundShouldRedraw = !localOnly
      || interactionKind === "view"
      || interactionKind === "pan_frame"
      || isModalBackgroundObjectInteraction()
      || !!editor.viewTransition
      || cause === "mode"
      || cause === "frame_view"
      || cause === "cutout_frame";
    if (backgroundShouldRedraw) runtime.backgroundDirty = true;
    if (localOnly && isPaintCompositeInteraction()) {
      editor.livePaintInteractionRevision += 1;
      runtime.backgroundDirty = true;
    }
    const shouldSyncUi = !localOnly
      || cause === "selection"
      || cause === "mode"
      || cause === "cutout_frame";
    if (shouldSyncUi) {
      syncLookAtFrameButtonState();
      syncViewToggleState();
    }
    // The node's preview follows the state once a drag ends, not on each of its moves.
    if (isDragging()) runtime.nodePreviewPending = true;
    else syncNodeLivePreviewSources();
    if (externalSync) {
      node.__panoDomPreview?.requestDraw?.();
      node.setDirtyCanvas?.(true, false);
    }
    if (externalSync && !localOnly) {
      node.graph?.setDirtyCanvas?.(true, true);
      app?.canvas?.setDirty?.(true, true);
    }
    scheduler.requestDraw(reason);
  }

  // The 2D overlay is laid out in CSS pixels, as the pointer and the hit tests are. The three.js canvas
  // under it draws at the device's pixels (CSS size x devicePixelRatio), within what the GPU draws to.
  function syncCanvasSize() {
    const rect = canvas.getBoundingClientRect();
    const nextW = Math.max(2, Math.round(rect.width));
    const nextH = Math.max(2, Math.round(rect.height));
    const dpr = window.devicePixelRatio || 1;
    const before = [canvas.width, canvas.height, backgroundCanvas.width, backgroundCanvas.height].join("x");
    if (canvas.width !== nextW || canvas.height !== nextH) {
      canvas.width = nextW;
      canvas.height = nextH;
    }
    const size = screenRenderSize(rect.width || nextW, rect.height || nextH, dpr, window.innerWidth || rect.width, window.innerHeight || rect.height);
    editorView.resize(size.width, size.height);
    if ([canvas.width, canvas.height, backgroundCanvas.width, backgroundCanvas.height].join("x") === before) return false;
    runtime.backgroundDirty = true;
    runtime.dirty = true;
    if (shotEditor) {
      startAnimation(() => {
        runtime.pendingStableLayoutFrames = Math.max(Number(runtime.pendingStableLayoutFrames || 0), 1);
      });
    }
    return true;
  }

  // Starts something editorAnimating() reads: the frames run until it ends. Every start of one goes
  // through here (a fade starts inside a frame, a drag on a pointerdown, which wakes the frames too), so
  // none waits for an unrelated draw request.
  function startAnimation(start) {
    start();
    scheduler.wake();
  }

  // Whether the next frame must run although nothing asked for it: something moves by itself or a fade
  // has not reached its end. A drag keeps the frames going until it ends.
  function editorAnimating() {
    return !!editor.viewTransition
      || !!viewController.state.inertia.active
      || runtime.pendingStableLayoutFrames > 0
      || Math.abs(Number(editor.frameRollOverlayAlpha || 0) - Number(editor.frameRollOverlayTarget || 0)) > 1e-6
      || Math.abs(Number(editor.cutoutPanoDimAlpha || 0) - Number(editor.cutoutPanoDimTarget || 0)) > 1e-6
      || Math.abs(Number(editor.cutoutPanoFrameAlpha || 0) - Number(editor.cutoutPanoFrameTarget || 0)) > 1e-6
      || editor.outputPreviewAnim !== editor.outputPreviewAnimTo
      || isDragging();
  }

  // A frame: the animations step, and the stage draws when something asked for it (reasons, the
  // DRAW_REASON values since the last frame) or an animation moved. Only an overlay change leaves the
  // three.js canvas as it is.
  function tickFrame(ts = performance.now(), reasons = new Set()) {
    if (runtime.nodePreviewPending && !isDragging()) syncNodeLivePreviewSources();
    // The reasons wait with the draw while the layout settles.
    reasons.forEach((reason) => runtime.reasons.add(reason));
    if (reasons.size) runtime.dirty = true;
    if ([...reasons].some((reason) => reason !== DRAW_REASON.OVERLAY)) runtime.backgroundDirty = true;
    syncCutoutShot();
    const dt = runtime.lastTickTs > 0 ? Math.max(0.001, (ts - runtime.lastTickTs) / 1000) : (1 / 60);
    runtime.lastTickTs = ts;
    const activeRoll = editor.mode === "frame" && editor.interaction?.kind === "roll_frame"
      ? editor.interaction
      : null;
    if (activeRoll?.shot) editor.frameRollOverlayVisual = { shot: activeRoll.shot };
    const nextRollOverlayTarget = activeRoll ? 1 : 0;
    if (Math.abs(nextRollOverlayTarget - Number(editor.frameRollOverlayTarget || 0)) > 1e-6) {
      editor.frameRollOverlayFrom = Number(editor.frameRollOverlayAlpha || 0);
      editor.frameRollOverlayTarget = nextRollOverlayTarget;
      editor.frameRollOverlayStartTs = ts;
    }
    if (Math.abs(Number(editor.frameRollOverlayAlpha || 0) - nextRollOverlayTarget) > 1e-6) {
      const t = clamp(
        (ts - Number(editor.frameRollOverlayStartTs || ts)) / FRAME_ROLL_OVERLAY_TRANSITION_MS,
        0,
        1,
      );
      editor.frameRollOverlayAlpha = lerp(
        Number(editor.frameRollOverlayFrom || 0),
        nextRollOverlayTarget,
        easeInOutCubic(t),
      );
      if (t >= 1) {
        editor.frameRollOverlayAlpha = nextRollOverlayTarget;
        if (nextRollOverlayTarget === 0) editor.frameRollOverlayVisual = null;
      }
      runtime.dirty = true;
    }
    const nextDimTarget = getCutoutPanoDimTarget();
    if (Math.abs(nextDimTarget - Number(editor.cutoutPanoDimTarget || 0)) > 1e-6) {
      editor.cutoutPanoDimFrom = Number(editor.cutoutPanoDimAlpha || 0);
      editor.cutoutPanoDimTarget = nextDimTarget;
      editor.cutoutPanoDimStartTs = ts;
    }
    if (Math.abs(Number(editor.cutoutPanoDimAlpha || 0) - nextDimTarget) > 1e-6) {
      const t = clamp(
        (ts - Number(editor.cutoutPanoDimStartTs || ts)) / CUTOUT_PANO_DIM_TRANSITION_MS,
        0,
        1,
      );
      editor.cutoutPanoDimAlpha = lerp(
        Number(editor.cutoutPanoDimFrom || 0),
        nextDimTarget,
        easeInOutCubic(t),
      );
      if (t >= 1) editor.cutoutPanoDimAlpha = nextDimTarget;
      if (t >= 1 && nextDimTarget === 0) {
        editor.cutoutPanoDimCorners = null;
      }
      runtime.dirty = true;
    }
    const nextFrameTarget = shotEditor && getActiveCutoutShot() ? 1 : 0;
    if (Math.abs(nextFrameTarget - Number(editor.cutoutPanoFrameTarget || 0)) > 1e-6) {
      editor.cutoutPanoFrameFrom = Number(editor.cutoutPanoFrameAlpha || 0);
      editor.cutoutPanoFrameTarget = nextFrameTarget;
      editor.cutoutPanoFrameStartTs = ts;
    }
    if (Math.abs(Number(editor.cutoutPanoFrameAlpha || 0) - nextFrameTarget) > 1e-6) {
      const t = clamp(
        (ts - Number(editor.cutoutPanoFrameStartTs || ts)) / CUTOUT_PANO_DIM_TRANSITION_MS,
        0,
        1,
      );
      editor.cutoutPanoFrameAlpha = lerp(
        Number(editor.cutoutPanoFrameFrom || 0),
        nextFrameTarget,
        easeInOutCubic(t),
      );
      if (t >= 1) {
        editor.cutoutPanoFrameAlpha = nextFrameTarget;
        if (nextFrameTarget === 0) editor.cutoutPanoFrameVisual = null;
      }
      runtime.dirty = true;
    }
    if (editor.outputPreviewAnim !== editor.outputPreviewAnimTo) {
      const dur = Math.max(1, Number(editor.outputPreviewAnimDurationMs || 180));
      const t = clamp((ts - Number(editor.outputPreviewAnimStartTs || 0)) / dur, 0, 1);
      const expanding = editor.outputPreviewAnimTo > editor.outputPreviewAnimFrom;
      const eased = expanding ? easeOutCubic(t) : easeInCubic(t);
      editor.outputPreviewAnim = lerp(editor.outputPreviewAnimFrom, editor.outputPreviewAnimTo, eased);
      runtime.dirty = true;
      if (t >= 1) {
        editor.outputPreviewAnim = editor.outputPreviewAnimTo;
      }
    }

    if (editor.viewTransition) {
      const { view, done } = viewTransitionFrame(editor.viewTransition, ts);
      editor.viewPosition = view.position;
      editor.viewYaw = view.yaw_deg;
      editor.viewPitch = view.pitch_deg;
      editor.viewFov = view.hFOV_deg;
      editor.viewDistance = view.distance;
      if (done) {
        const { end } = editor.viewTransition;
        editor.viewTransition = null;
        if (end) applyViewTransitionEnd(end);
        syncFloatingViewButtonState();
      }
      runtime.backgroundDirty = true;
      runtime.dirty = true;
    }

    editor.viewInertia.vx = Number(viewController.state.inertia.vx || 0);
    editor.viewInertia.vy = Number(viewController.state.inertia.vy || 0);
    editor.viewInertia.active = !!viewController.state.inertia.active;
    if (viewController.stepInertia(ts)) {
      editor.viewInertia.vx = Number(viewController.state.inertia.vx || 0);
      editor.viewInertia.vy = Number(viewController.state.inertia.vy || 0);
      editor.viewInertia.active = !!viewController.state.inertia.active;
      runtime.backgroundDirty = true;
      runtime.dirty = true;
    }

    if (runtime.pendingStableLayoutFrames > 0) {
      runtime.pendingStableLayoutFrames -= 1;
      runtime.dirty = true;
    }
    if (runtime.dirty) {
      if (runtime.pendingStableLayoutFrames > 0) {
        return;
      }
      runtime.dirty = false;
      const drawn = runtime.reasons;
      runtime.reasons = new Set();
      drawScene(drawn);
    }
  }

  // A failing frame shows the stage as failed and logs each distinct error once.
  function runGuardedFrame(draw) {
    try {
      draw();
    } catch (error) {
      const signature = String(error?.stack || error?.message || error || "unknown editor frame error");
      if (runtime.tickErrorSignature !== signature) {
        runtime.tickErrorSignature = signature;
        console.error("[PanoramaStickers] editor frame failed", error);
      }
      uiState.stageStatus = IMAGE_FAILED;
      uiState.stageStatusDetail = "frame";
      stageWrap?.setAttribute("data-stage-ready", "");
      stageWrap?.removeAttribute("data-stage-loading-kind");
    }
  }

  function tick(ts = performance.now(), reasons = new Set()) {
    if (!runtime.running) return;
    const frameStart = diagnosticsFrameStart();
    runGuardedFrame(() => tickFrame(ts, reasons));
    diagnosticsFrameEnd(frameStart);
  }

  // Draws the stage at its new size now, leaving the animations and the tick's clock to the next tick.
  function redrawNow() {
    if (!runtime.running || !syncCanvasSize()) return;
    runGuardedFrame(() => {
      runtime.dirty = false;
      drawScene(new Set([DRAW_REASON.RESIZE]));
    });
  }

  // The stage follows its layout before the browser paints, in the same frame: a canvas left at
  // its old size for a frame shows its frame stretched, which made the Timeline's slide judder.
  const stageResizeObserver = new ResizeObserver(redrawNow);
  // Moved to a screen of another pixel ratio, the stage keeps its CSS size; the three.js canvas follows the
  // new ratio.
  let pixelRatioQuery = null;
  function watchPixelRatio() {
    pixelRatioQuery?.removeEventListener("change", onPixelRatioChange);
    pixelRatioQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
    pixelRatioQuery.addEventListener("change", onPixelRatioChange);
  }
  function onPixelRatioChange() {
    watchPixelRatio();
    redrawNow();
  }

  // What the editor is doing, for the diagnostics samples, until the render loop stops.
  function sampleEditorDiagnostics() {
    removeDiagnosticsSource = addDiagnosticsSource("editor", () => ({
      type,
      readOnly,
      mode: editor.mode,
      interaction: editor.interaction?.kind ?? null,
      timelineDrag: !!timeline.drag,
      playing: !!playback.playing,
    }));
  }

  function stopRenderLoop() {
    removeDiagnosticsSource();
    runtime.running = false;
    scheduler.stop();
    stageResizeObserver.disconnect();
    pixelRatioQuery.removeEventListener("change", onPixelRatioChange);
  }

  return {
    connect(api) {
      ({
        applyViewTransitionEnd, drawCutoutOutputPreview, drawCutoutPanoPassepartout, drawFrameRollOverlay,
        drawFrameViewBackground, drawGridPano, drawGridUnwrap, drawLassoOutlineOverlay, drawObjects,
        endEditorViewFrame, getActiveCutoutShot, getCutoutPanoDimTarget, getSharedLivePaintSurface,
        getStageImageStatus, isPaintCompositeInteraction, measureFrameSafeRect, playback, rebuildPaintEngineIfNeeded,
        syncCutoutShot, syncFloatingViewButtonState, syncFrameRollKnob, syncLookAtFrameButtonState,
        syncViewToggleState, updateSelectionMenu, upstreamNotice,
      } = api);
    },
    requestDraw, syncCanvasSize, startAnimation, editorAnimating, tick, stageResizeObserver, watchPixelRatio,
    sampleEditorDiagnostics, stopRenderLoop,
  };
}
