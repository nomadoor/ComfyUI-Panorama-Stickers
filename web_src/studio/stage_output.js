// The Output window on the new UI's stage (docs/studio-ui.md "Output の小窓"): the Camera's output, Frame mode's picture
// and Panorama mode's live ERP, drawn at the window's device pixels. stage.js createStage puts it together and draws
// it in its frame; `shared` is the stage's state its parts share (stage.js). It builds no DOM.
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { liveErpSize } from "./erp_preview.js";
import { outputErpInput, outputFrameInput } from "./output_picture.js";

// The owners (pano_three_view.js) the live ERP of the Camera tab's Panorama mode, the Output window's Frame picture and
// its live ERP draw for.
export const LIVE_ERP_OWNER = "studio-live-erp";
export const OUTPUT_OWNER = "studio-output";
export const OUTPUT_ERP_OWNER = "studio-output-erp";
// The reasons that leave the Output window's picture as it is: the stage's view, its overlay, its own Spark sort, and
// a paint stroke under way (its end changes the state, which draws the window again).
const OUTPUT_KEEPS = new Set([DRAW_REASON.VIEW, DRAW_REASON.OVERLAY, DRAW_REASON.SPLAT_STAGE, DRAW_REASON.PAINT]);

// canvas, cameraTab, world, background, win: createStage's. editorView: the three.js view; camera: the 3D tab's
// viewpoint (its bound).
export function createStageOutput(shared, { canvas, cameraTab, world, background, win, editorView, camera }) {
  let outputDrawn = null;
  let outputLensKind = null;
  let outputFrames = 0;
  // The Frame picture failed (its canvas took no bitmap): none is drawn until the window folds and opens again.
  let outputFailed = false;

  // What the Output window shows now: { kind: "frame" | "erp", canvas, width, height } (device px), or null while it
  // is folded. What it held before lets go when that changes.
  function outputTarget() {
    const canvases = cameraTab?.output?.() ?? null;
    const kind = cameraTab ? (cameraTab.mode() === "panorama" ? "erp" : "frame") : null;
    const target = canvases && kind ? canvases[kind] : null;
    // Its layout size: the window's open and fold animations scale it by a transform, which does not change what it shows.
    const box = target ? { width: target.clientWidth, height: target.clientHeight } : null;
    if (!target || !(box?.width > 0 && box?.height > 0)) {
      releaseOutput();
      // A picture that failed is tried again when the window opens again.
      outputFailed = false;
      return null;
    }
    if (outputDrawn && outputDrawn.kind !== kind) releaseOutput();
    const dpr = win.devicePixelRatio || 1;
    return { kind, canvas: target, width: Math.max(1, Math.round(box.width * dpr)), height: Math.max(1, Math.round(box.height * dpr)) };
  }

  function releaseOutput() {
    if (!outputDrawn) return;
    editorView.releaseSplats(outputDrawn.kind === "erp" ? OUTPUT_ERP_OWNER : OUTPUT_OWNER);
    outputDrawn = null;
  }

  function outputStale(target, reasons) {
    return !outputDrawn || outputDrawn.canvas !== target.canvas || outputDrawn.width !== target.width || outputDrawn.height !== target.height
      || [...reasons].some((reason) => !OUTPUT_KEEPS.has(reason));
  }

  // Frame mode: the Camera's picture as the output shoots it (no grid), drawn in the canvas's bottom left corner and
  // taken as an ImageBitmap for the window's "bitmaprenderer" canvas (docs/threejs-spark-integration.md "エディタの描画を
  // 直接表示する", the camera preview's way: no 2D canvas, no copy on each frame).
  function drawOutputFrame(shown, target, reasons) {
    if (outputFailed || !outputStale(target, reasons)) return;
    const fit = Math.min(1, canvas.width / target.width, canvas.height / target.height);
    const width = Math.max(1, Math.floor(target.width * fit));
    const height = Math.max(1, Math.floor(target.height * fit));
    const input = outputFrameInput({
      shot: cameraTab.shot(),
      ground: world.ground,
      radius: camera.bound(),
      width,
      height,
      background: background(),
      content: shown,
      backgroundColor: cameraTab.backgroundColor(),
      lensKind: outputLensKind,
      owner: OUTPUT_OWNER,
      rect: { x: 0, y: canvas.height - height, w: width, h: height },
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
    });
    outputLensKind = input.lens?.kind ?? null;
    const surface = editorView.render(input);
    if (!surface) return;
    outputDrawn = { kind: "frame", canvas: target.canvas, width: target.width, height: target.height };
    const request = ++outputFrames;
    const shownOn = target.canvas;
    createImageBitmap(surface.canvas, surface.x, surface.y, surface.width, surface.height).then((bitmap) => {
      if (request !== outputFrames || shared.disposed) {
        bitmap.close();
        return;
      }
      const renderer = shownOn.getContext("bitmaprenderer");
      if (!renderer) {
        bitmap.close();
        throw new Error("the Output window's canvas has no \"bitmaprenderer\" context");
      }
      renderer.transferFromImageBitmap(bitmap);
    }).catch((error) => {
      if (request !== outputFrames || shared.disposed || outputFailed) return;
      outputFailed = true;
      outputDrawn = null;
      console.error("[PanoramaStickers] the Output window's picture failed", error);
    });
  }

  // Panorama mode: the live ERP from the Camera's position at the window's pixels, without the ground grid (an edit
  // guide; the Camera tab's frame draws its own ERP with it).
  function drawOutputErp(shown, target, reasons) {
    const pixels = liveErpSize(target.width / (win.devicePixelRatio || 1), target.height / (win.devicePixelRatio || 1), win.devicePixelRatio || 1, cameraTab.erpRange());
    if (!outputStale(target, reasons)) return;
    const drawn = editorView.renderLiveErp(outputErpInput({
      shot: cameraTab.shot(),
      erpRange: cameraTab.erpRange(),
      ground: world.ground,
      radius: camera.bound(),
      width: pixels.width,
      height: pixels.height,
      background: background(),
      content: shown,
      owner: OUTPUT_ERP_OWNER,
      canvas: target.canvas,
    }));
    if (drawn) outputDrawn = { kind: "erp", canvas: target.canvas, width: target.width, height: target.height };
  }

  // The stage is disposed: a Frame picture still on its way is not shown.
  function stop() {
    outputFrames += 1;
  }

  return { outputTarget, drawOutputFrame, drawOutputErp, stop };
}
