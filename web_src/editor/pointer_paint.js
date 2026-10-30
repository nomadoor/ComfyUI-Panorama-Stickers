// The paint and mask tools' pointer gestures: a freehand stroke ("paint_stroke") or a lasso fill
// ("paint_lasso_fill") into the paint engine, committed as one Undo step when it lets go.
// pointer_input.js decides when a press paints and stops playback first.
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { makePaintId } from "./helpers.js";

export function createPointerPaint(deps) {
  const { canvas, editor, node } = deps;
  // Bound by connect() to the other modules and showEditor.
  let _segmentFrameLassoFill, _segmentFrameStroke, appendLassoPoint, appendPaintPoint, buildFreehandStrokeRecord,
    buildLassoFillStrokeRecord, commitPaintInteraction, commitState, getActiveCutoutShot,
    getActivePaintTargetDescriptor, getFrameViewRect, getPaintingGroupList, invalidateLivePaintPreviewCaches,
    markPaintStrokeVisualsDirty, pushHistory, refreshPaintEngineRevisionCache, requestDraw, screenPos,
    screenPosToErpPoint, screenPosToFrameAsErpPoint, supportsFramePainting, updateCursor, updateSelectionMenu,
    updateSidePanel;

  function startPaintStroke(e, p) {
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
  }

  // Appends the move's coalesced points with append(it, point, time). In the Frame view a point outside
  // the frame is dropped, and the first one back in commits the inside-frame segment so far (segment(it))
  // and starts a fresh one. Returns whether append() took a point.
  function appendStrokeSamples(it, e, segment, append) {
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
            segment(it);
          }
        }
      }
      if (append(it, sp, performance.now())) changed = true;
    });
    return changed;
  }

  function movePaintStroke(it, e) {
    // appendPaintPoint now calls appendStrokePoint internally (O(1) incremental rendering)
    if (appendStrokeSamples(it, e, _segmentFrameStroke, appendPaintPoint)) requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
  }

  function moveLassoFill(it, e) {
    if (appendStrokeSamples(it, e, _segmentFrameLassoFill, appendLassoPoint)) {
      const targetDescriptor = getActivePaintTargetDescriptor(it);
      if (targetDescriptor) editor.paintEngine.updateActiveStroke(it.stroke, targetDescriptor);
      requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
    }
  }

  function endPaintStroke() {
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
  }

  function cancelPaintStroke() {
    invalidateLivePaintPreviewCaches();
    const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
    if (targetDescriptor) editor.paintEngine.cancelActiveStroke(targetDescriptor);
  }

  return {
    connect(api) {
      ({
        _segmentFrameLassoFill, _segmentFrameStroke, appendLassoPoint, appendPaintPoint, buildFreehandStrokeRecord,
        buildLassoFillStrokeRecord, commitPaintInteraction, commitState, getActiveCutoutShot,
        getActivePaintTargetDescriptor, getFrameViewRect, getPaintingGroupList, invalidateLivePaintPreviewCaches,
        markPaintStrokeVisualsDirty, pushHistory, refreshPaintEngineRevisionCache, requestDraw, screenPos,
        screenPosToErpPoint, screenPosToFrameAsErpPoint, supportsFramePainting, updateCursor, updateSelectionMenu,
        updateSidePanel,
      } = api);
    },
    startPaintStroke, movePaintStroke, moveLassoFill, endPaintStroke, cancelPaintStroke,
  };
}
