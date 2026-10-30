// The camera preview of the Cutout editor and Panorama Studio: what the shot sees, drawn on the stage's
// three.js canvas and shown in the preview's own canvas.
import { deriveCutoutAspectFromFov } from "../pano_cutout_view_math.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { clamp } from "../pano_math.js";

// The owner the camera preview draws as on the stage's three.js view; its SPLATs draw through a Spark
// renderer of its own (pano_spark_views.js).
export const CAMERA_PREVIEW_OWNER = "camera_preview";

// The draw reason of a Spark renderer's sort (createEditorView's onSplats): the camera preview's or the
// stage's, whose owner is undefined.
export function splatDrawReason(owner) {
  return owner === CAMERA_PREVIEW_OWNER ? DRAW_REASON.SPLAT_PREVIEW : DRAW_REASON.SPLAT_STAGE;
}

// Whether what the camera preview shows can have changed for a frame with these reasons: not for the view, the
// overlay, or a sort of the stage's Spark renderer, which the preview does not draw with.
export function cameraPreviewChanged(reasons) {
  return [...reasons].some((reason) => reason !== DRAW_REASON.VIEW && reason !== DRAW_REASON.OVERLAY && reason !== DRAW_REASON.SPLAT_STAGE);
}

// The camera preview's size in CSS pixels for `shot`: its long side 220, or 320 expanded.
export function getCutoutPreviewViewportSize(shot, expanded = false) {
  const aspect = clamp(deriveCutoutAspectFromFov(shot), 0.05, 20.0);
  const longSide = expanded ? 320 : 220;
  return aspect >= 1
    ? { width: longSide, height: Math.max(1, Math.round(longSide / aspect)) }
    : { width: Math.max(1, Math.round(longSide * aspect)), height: longSide };
}

export function createCameraPreview(deps) {
  const {
    backgroundCanvas, cutoutPreviewCanvas, cutoutPreviewHost, editor, editorView, runtime, shotEditor, studio, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cameraPreviewShown, drawEditorViewShot, getActiveCutoutShot, getConnectedErpImage;

  // The camera preview's last frame ({ width, height }), or null; it draws again when what it shows can
  // have changed (drawScene's reasons) or its size changes.
  let cameraPreviewDrawn = null;
  // Whether the preview has drawn since it last let its Spark renderer go.
  let cameraPreviewHeld = false;
  // Taking a frame failed (showCameraPreviewFrame): the preview stops drawing instead of trying on every
  // frame, until it hides and shows again or the view is made anew.
  let cameraPreviewFailed = false;

  // Frees the preview's Spark renderer (all the splats generated and sorted for the shot) while it does not
  // draw.
  function releaseCameraPreviewSplats() {
    if (!cameraPreviewHeld) return;
    cameraPreviewHeld = false;
    editorView.releaseSplats(CAMERA_PREVIEW_OWNER);
  }

  // The preview hides or has nothing to show: it draws its frame anew when it shows again.
  function dropCameraPreview() {
    cameraPreviewDrawn = null;
    cameraPreviewFailed = false;
    releaseCameraPreviewSplats();
  }

  function isCutoutPreviewLayoutStable(targetSize) {
    if (!cutoutPreviewHost || !targetSize) return false;
    const previewShell = cutoutPreviewHost.closest(".pano-camera-preview");
    if (!previewShell) return false;
    const hostWidth = Math.round(Number(previewShell.clientWidth || cutoutPreviewHost.clientWidth || 0));
    const hostHeight = Math.round(Number(previewShell.clientHeight || cutoutPreviewHost.clientHeight || 0));
    return Math.abs(hostWidth - Number(targetSize.width || 0)) <= 1
      && Math.abs(hostHeight - Number(targetSize.height || 0)) <= 1;
  }

  // The Cutout's camera preview. Its <canvas> (PanoFloatingRight.vue) floats over the stage with rounded
  // corners and fades in and out, so it cannot be a part of the stage's own canvas. It is drawn on the
  // stage's three.js canvas, in its bottom left corner, before the stage's frame covers it, and that part
  // is taken as an ImageBitmap (a copy on the GPU where the browser draws with it) that the preview's
  // "bitmaprenderer" canvas shows as it is. It draws only when what it shows can have changed: drawView
  // (the three.js canvas draws in this frame) with a reason other than the view, the overlay or the stage's
  // Spark sort (cameraPreviewChanged), or its size changed.
  function drawCutoutOutputPreview(drawView, reasons) {
    editor.outputPreviewRect = null;
    uiState.outputPreviewToggle.visible = editor.mode !== "frame" && !!getActiveCutoutShot();
    // Panorama Studio's preview keeps one size: it has no size toggle.
    if (studio) uiState.outputPreviewToggle.visible = false;
    if (!shotEditor || !uiState.cameraPreview) return;
    if (editor.mode === "frame" || !cameraPreviewShown()) {
      uiState.cameraPreview.visible = false;
      uiState.cameraPreview.settled = false;
      dropCameraPreview();
      return;
    }
    const shot = getActiveCutoutShot();
    uiState.cameraPreview.visible = true;
    uiState.cameraPreview.expanded = !!editor.outputPreviewExpanded;
    if (!shot || !cutoutPreviewCanvas) {
      uiState.cameraPreview.ready = false;
      uiState.cameraPreview.settled = false;
      uiState.cameraPreview.width = 220;
      uiState.cameraPreview.height = 132;
      uiState.cameraPreview.label = shot ? "Preview unavailable" : "Add Frame to preview";
      dropCameraPreview();
      return;
    }
    const previewSize = getCutoutPreviewViewportSize(shot, !!editor.outputPreviewExpanded);
    uiState.cameraPreview.width = previewSize.width;
    uiState.cameraPreview.height = previewSize.height;
    if (cameraPreviewFailed) {
      uiState.cameraPreview.ready = false;
      uiState.cameraPreview.label = "Preview unavailable";
      uiState.cameraPreview.settled = false;
      releaseCameraPreviewSplats();
      return;
    }
    // The frame is drawn at the preview's target size in device pixels; CSS scales it while the box
    // animates. A stage smaller than that (a tiny window) draws it as large as the stage holds.
    const dpr = window.devicePixelRatio || 1;
    const width = Math.max(1, previewSize.width * dpr);
    const height = Math.max(1, previewSize.height * dpr);
    const fit = Math.min(1, backgroundCanvas.width / width, backgroundCanvas.height / height);
    const size = { width: Math.max(1, Math.floor(width * fit)), height: Math.max(1, Math.floor(height * fit)) };
    const stale = !cameraPreviewDrawn || cameraPreviewDrawn.width !== size.width || cameraPreviewDrawn.height !== size.height || cameraPreviewChanged(reasons);
    if (drawView && stale) {
      cameraPreviewHeld = true;
      const surface = drawEditorViewShot({ x: 0, y: backgroundCanvas.height - size.height, w: size.width, h: size.height }, shot, CAMERA_PREVIEW_OWNER);
      cameraPreviewDrawn = surface ? size : null;
      if (surface) showCameraPreviewFrame(surface);
    }
    if (!cameraPreviewDrawn) {
      uiState.cameraPreview.ready = false;
      uiState.cameraPreview.label = getConnectedErpImage() ? "Loading preview" : "Connect ERP image";
      uiState.cameraPreview.settled = false;
      return;
    }
    const layoutStable = isCutoutPreviewLayoutStable(previewSize);
    uiState.cameraPreview.ready = true;
    uiState.cameraPreview.label = layoutStable ? "" : "Loading preview";
    uiState.cameraPreview.settled = layoutStable
      && runtime.pendingStableLayoutFrames <= 0
      && runtime.hasPresentedFrame;
  }

  // A new view has nothing of the camera preview's frame: it draws it anew, and tries again after a failure.
  function forgetCameraPreviewFrame() {
    cameraPreviewDrawn = null;
    cameraPreviewFailed = false;
  }

  // Shows the part `surface` of the three.js canvas in the camera preview. The bitmap is taken now, before
  // the stage's frame covers that part; a newer frame that arrives first wins. A failure stops the preview
  // (cameraPreviewFailed) and is reported once.
  let cameraPreviewFrames = 0;
  let cameraPreviewFailureReported = false;
  function showCameraPreviewFrame(surface) {
    const request = ++cameraPreviewFrames;
    createImageBitmap(surface.canvas, surface.x, surface.y, surface.width, surface.height).then((bitmap) => {
      if (request !== cameraPreviewFrames || !runtime.running) {
        bitmap.close();
        return;
      }
      cutoutPreviewCanvas.getContext("bitmaprenderer")?.transferFromImageBitmap(bitmap);
    }).catch((error) => {
      // A newer frame decides.
      if (request !== cameraPreviewFrames || !runtime.running) return;
      cameraPreviewFailed = true;
      cameraPreviewDrawn = null;
      uiState.cameraPreview.ready = false;
      uiState.cameraPreview.label = "Preview unavailable";
      if (cameraPreviewFailureReported) return;
      cameraPreviewFailureReported = true;
      console.error("[PanoramaStickers] camera preview frame failed", error);
    });
  }

  return {
    connect(api) {
      ({
        cameraPreviewShown, drawEditorViewShot, getActiveCutoutShot, getConnectedErpImage,
      } = api);
    },
    drawCutoutOutputPreview, forgetCameraPreviewFrame,
  };
}
