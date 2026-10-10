// The 2D overlay over the three.js canvas: the grids, the items' boundaries and selection handles, the
// Cutout's frame and passepartout, the Frame view's gate, the lasso outline and the roll overlay.
import { yawPitchToDir } from "../pano_camera_math.js";
import { deviceLens, frameViewContext } from "../pano_editor_view.js";
import { clamp } from "../pano_math.js";
import { projectPoint, spaceCamera } from "../pano_space.js";
import { drawStickerSelectionBoundary, drawStickerSelectionHandles } from "../pano_sticker_affordance.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { CUTOUT_FRAME_ACCENT, CUTOUT_PANO_DIM_ALPHA, DEG2RAD } from "./constants.js";

export function createOverlay(deps) {
  const {
    cameraV2, canvas, ctx, editor, editorView, frameGateCssRadius, runtime, shotEditor, studio, type,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let areAllSelectedItemsLocked, contentSphere, deviceRect, drawEditorViewShot, editorViewInput,
    getActiveCutoutShot, getCutoutSelectableItemsForDisplay, getFrameViewLayout, getFrameViewRect, getList,
    getMultiSelectionGeom, getSelectedItems, getStickerDisplayAlpha, getUnwrapRect, isCameraSelected,
    isErpCamera, isExternalSticker, isFreeSpaceView, isItemLocked, isItemSelected, isRasterObjectItem,
    isSceneSticker, isShotItem, isStickerItem, isStrokeGroupItem, objectGeom, poseOf, projectDir,
    projectDirUnwrap, projectErpLassoPointsToFrameRect, projectLassoPointsToCurrentView,
    rebuildPaintEngineIfNeeded, rectFromPoints, renderEditorView, renderEditorViewUnwrap, sampleStickerEdge,
    sceneStickerShown, spaceViewState;

  function drawGridUnwrap(drawView) {
    const w = canvas.width;
    const h = canvas.height;
    const r = getUnwrapRect();
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.clearRect(0, 0, w, h);
    rebuildPaintEngineIfNeeded();
    if (drawView) runtime.backgroundDirty = !renderEditorViewUnwrap(r);

    if (editor.showGrid && !editor.fullscreen) {
      ctx.strokeStyle = "#3f3f46";
      for (let i = 0; i <= 16; i += 1) {
        const x = r.x + (r.w * i) / 16;
        ctx.beginPath(); ctx.moveTo(x, r.y); ctx.lineTo(x, r.y + r.h); ctx.stroke();
      }
      for (let i = 0; i <= 8; i += 1) {
        const y = r.y + (r.h * i) / 8;
        ctx.beginPath(); ctx.moveTo(r.x, y); ctx.lineTo(r.x + r.w, y); ctx.stroke();
      }

      ctx.strokeStyle = "rgba(250, 250, 250, 0.86)";
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(r.x, r.y + r.h / 2); ctx.lineTo(r.x + r.w, r.y + r.h / 2); ctx.stroke();

      ctx.fillStyle = "rgba(250, 250, 250, 0.42)";
      ctx.font = "500 11px Geist, sans-serif";
      ctx.textAlign = "center";
      const ly = r.y + r.h * 0.57;
      ctx.fillText("Left", r.x + r.w * 0.25, ly);
      ctx.fillText("Front", r.x + r.w * 0.50, ly);
      ctx.fillText("Right", r.x + r.w * 0.75, ly);
      ctx.fillText("Back", r.x + 38, ly);
      ctx.fillText("Back", r.x + r.w - 38, ly);
    }
  }

  function drawLineOnSphere(pointsDir, color, width = 1) {
    let started = false;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    for (const d of pointsDir) {
      const p = projectDir(d);
      if (!p) { started = false; continue; }
      if (!started) { ctx.moveTo(p.x, p.y); started = true; }
      else { ctx.lineTo(p.x, p.y); }
    }
    ctx.stroke();
  }

  function drawGridPano(drawView) {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    rebuildPaintEngineIfNeeded();
    if (drawView) runtime.backgroundDirty = !renderEditorView();

    if (editor.showGrid && !editor.fullscreen && editorViewInput().space) {
      drawErpOriginLabel();
    } else if (editor.showGrid && !editor.fullscreen) {
      for (let lon = -180; lon <= 180; lon += 15) {
        const pts = [];
        for (let lat = -89; lat <= 89; lat += 4) pts.push(yawPitchToDir(lon, lat));
        drawLineOnSphere(pts, "#3f3f46", lon % 90 === 0 ? 1.3 : 1);
      }
      for (let lat = -75; lat <= 75; lat += 15) {
        const pts = [];
        for (let lon = -180; lon <= 180; lon += 4) pts.push(yawPitchToDir(lon, lat));
        drawLineOnSphere(pts, lat === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", lat === 0 ? 1.5 : 1);
      }

      const labels = [
        { name: "Left", dir: yawPitchToDir(-90, 0) },
        { name: "Front", dir: yawPitchToDir(0, 0) },
        { name: "Right", dir: yawPitchToDir(90, 0) },
        { name: "Back", dir: yawPitchToDir(180, 0) },
      ];
      ctx.fillStyle = "rgba(250, 250, 250, 0.42)";
      ctx.font = "500 11px Geist, sans-serif";
      ctx.textAlign = "center";
      labels.forEach((l) => {
        const p = projectDir(l.dir);
        if (p) ctx.fillText(l.name, p.x, p.y + 24);
      });
    }
  }

  // The space view's grid has its origin marker at the World origin, where the Stickers ERP is taken
  // from; this names it.
  function drawErpOriginLabel() {
    const camera = spaceCamera(spaceViewState(), canvas.width, canvas.height, contentSphere());
    const origin = projectPoint(camera, [0, 0, 0], canvas.width, canvas.height);
    if (!origin) return;
    ctx.fillStyle = "rgba(255, 221, 87, 0.9)";
    ctx.font = "500 11px Geist, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("ERP origin", origin.x, origin.y - 12);
  }

  function drawStickerBoundary(item, selected) {
    const pose = poseOf(item);
    const centerDir = yawPitchToDir(Number(pose.yaw_deg || 0), Number(pose.pitch_deg || 0));
    const centerProj = editor.mode === "unwrap" ? projectDirUnwrap(centerDir) : null;
    const refX = centerProj ? centerProj.x : null;
    const steps = editor.mode === "pano" ? 28 : 20;
    const edges = [
      sampleStickerEdge(item, 0, steps, refX),
      sampleStickerEdge(item, 1, steps, refX),
      sampleStickerEdge(item, 2, steps, refX),
      sampleStickerEdge(item, 3, steps, refX),
    ];

    drawStickerSelectionBoundary(ctx, edges, { selected });
  }

  function traceQuad(ctx2d, corners = []) {
    if (!ctx2d || !Array.isArray(corners) || corners.length < 4) return;
    ctx2d.beginPath();
    ctx2d.moveTo(corners[0].x, corners[0].y);
    for (let i = 1; i < 4; i += 1) ctx2d.lineTo(corners[i].x, corners[i].y);
    ctx2d.closePath();
  }

  function drawCameraFrameBody(geom, selected, locked) {
    const corners = Array.isArray(geom?.corners) ? geom.corners : [];
    if (corners.length < 4) return;
    const visibilityAlpha = clamp(Number(geom?.visibilityAlpha ?? 1), 0, 1);
    if (visibilityAlpha <= 0.01) return;
    const prevAlpha = ctx.globalAlpha;
    ctx.globalAlpha = prevAlpha * visibilityAlpha;
    const accent = locked
      ? "rgba(255, 116, 116, 0.96)"
      : (selected ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)");
    const fill = locked
      ? "rgba(255, 89, 89, 0.08)"
      : (selected ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)");
    const edgeStroke = selected ? 3.2 : 2.6;
    traceQuad(ctx, corners);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = accent;
    ctx.lineWidth = edgeStroke;
    ctx.stroke();

    ctx.save();
    ctx.strokeStyle = accent;
    ctx.lineWidth = selected ? 3.2 : 2.6;
    ctx.lineCap = "round";
    const edgeMidpoints = Array.isArray(geom?.edgeMidpoints) && geom.edgeMidpoints.length >= 4
      ? geom.edgeMidpoints
      : [
        { edge: "top", x: (corners[0].x + corners[1].x) * 0.5, y: (corners[0].y + corners[1].y) * 0.5 },
        { edge: "right", x: (corners[1].x + corners[2].x) * 0.5, y: (corners[1].y + corners[2].y) * 0.5 },
        { edge: "bottom", x: (corners[2].x + corners[3].x) * 0.5, y: (corners[2].y + corners[3].y) * 0.5 },
        { edge: "left", x: (corners[3].x + corners[0].x) * 0.5, y: (corners[3].y + corners[0].y) * 0.5 },
      ];
    const oppositeEdge = { top: "bottom", right: "left", bottom: "top", left: "right" };
    const indicatorLen = selected ? 12 : 9;
    edgeMidpoints.forEach((mid) => {
      const opposite = edgeMidpoints.find((candidate) => candidate?.edge === oppositeEdge[mid?.edge]);
      const target = opposite || {
        x: (corners[0].x + corners[1].x + corners[2].x + corners[3].x) * 0.25,
        y: (corners[0].y + corners[1].y + corners[2].y + corners[3].y) * 0.25,
      };
      const vx = target.x - mid.x;
      const vy = target.y - mid.y;
      const len = Math.hypot(vx, vy) || 1;
      ctx.beginPath();
      ctx.moveTo(mid.x, mid.y);
      ctx.lineTo(mid.x + (vx / len) * indicatorLen, mid.y + (vy / len) * indicatorLen);
      ctx.stroke();
    });
    ctx.restore();
    ctx.globalAlpha = prevAlpha;
  }

  function drawObjectBody(item, geom, selected, locked) {
    const visibilityAlpha = clamp(Number(geom?.visibilityAlpha ?? 1), 0, 1);
    if (visibilityAlpha <= 0.01) return;
    if (isShotItem(item)) {
      drawCameraFrameBody(geom, selected, locked);
      return;
    }
    if (isStickerItem(item)) {
      const prevAlpha = ctx.globalAlpha;
      ctx.globalAlpha = prevAlpha * getStickerDisplayAlpha(item) * visibilityAlpha;
      if (editor.mode === "frame") {
        ctx.strokeStyle = selected
          ? "rgba(250, 250, 250, 0.9)"
          : (locked ? "rgba(255, 89, 89, 0.72)" : "#71717a");
        ctx.lineWidth = selected ? 2 : 1;
        traceQuad(ctx, geom.corners);
        ctx.stroke();
      } else {
        drawStickerBoundary(item, selected);
      }
      ctx.globalAlpha = prevAlpha;
      return;
    }

    const prevAlpha = ctx.globalAlpha;
    ctx.globalAlpha = prevAlpha * visibilityAlpha;
    ctx.fillStyle = selected
      ? "rgba(0, 112, 243, 0.24)"
      : (locked ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)");
    traceQuad(ctx, geom.corners);
    ctx.fill();
    ctx.strokeStyle = selected
      ? "rgba(255, 255, 255, 1)"
      : (locked ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)");
    ctx.lineWidth = selected ? 2.8 : 1.9;
    traceQuad(ctx, geom.corners);
    ctx.stroke();
    ctx.globalAlpha = prevAlpha;
  }

  function drawSelectedObjectAffordances(item, geom, accent) {
    if (isStickerItem(item)) {
      drawStickerSelectionHandles(ctx, geom, { accent });
      return;
    }
    // Panorama Studio's 360-degree Camera has no size handles, only its rotate handle (#89).
    const resizable = !(isShotItem(item) && isErpCamera());
    ctx.fillStyle = accent;
    if (resizable) geom.corners.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2); ctx.fill(); });
    if (resizable && isShotItem(item)) {
      ctx.strokeStyle = accent;
      ctx.lineCap = "round";
      ctx.lineWidth = 4;
      geom.edgeMidpoints.forEach((midpoint) => {
        const dx = (midpoint.b?.x ?? midpoint.x) - (midpoint.a?.x ?? midpoint.x);
        const dy = (midpoint.b?.y ?? midpoint.y) - (midpoint.a?.y ?? midpoint.y);
        const len = Math.hypot(dx, dy) || 1;
        const tx = dx / len;
        const ty = dy / len;
        const half = 10;
        ctx.beginPath();
        ctx.moveTo(midpoint.x - tx * half, midpoint.y - ty * half);
        ctx.lineTo(midpoint.x + tx * half, midpoint.y + ty * half);
        ctx.stroke();
      });
      ctx.lineCap = "butt";
    }
    if (!isStrokeGroupItem(item)) {
      ctx.strokeStyle = "rgba(250, 250, 250, 0.9)";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(geom.rotateStemBase.x, geom.rotateStemBase.y);
      ctx.lineTo(geom.rotateHandle.x, geom.rotateHandle.y);
      ctx.stroke();
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(geom.rotateHandle.x, geom.rotateHandle.y, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawObjects() {
    const selectedItems = editor.mode === "frame" ? [] : getSelectedItems();
    const multiSelected = selectedItems.length > 1;
    const rawList = shotEditor ? getCutoutSelectableItemsForDisplay() : getList();
    const orderKey = rawList.map((item) => `${String(item?.id || "")}:${isShotItem(item) ? "frame" : Number(item?.z_index || 0)}`).join("|");
    if (!editor._sortedItemsCache || editor._sortedItemsCache.src !== rawList || editor._sortedItemsCache.orderKey !== orderKey) {
      editor._sortedItemsCache = {
        src: rawList,
        orderKey,
        sorted: [...rawList],
      };
    }
    // A selected upstream element (ADR 0030) shows its outline and handles under the node's own.
    const items = [...selectedItems.filter(isUpstreamSticker), ...editor._sortedItemsCache.sorted];
    for (const item of items) {
      const selected = editor.mode !== "frame" && !multiSelected && isItemSelected(item);
      if (editor.mode === "frame" && !selected) continue;
      const itemIsSticker = isStickerItem(item);
      const itemIsShot = isShotItem(item);
      const itemLocked = isItemLocked(item);
      if (!itemIsSticker && !itemIsShot) {
        continue;
      }
      if (isSceneSticker(item) && !sceneStickerShown(item)) continue;
      const g = objectGeom(item);
      if (type !== "stickers" && !g.visible) {
        continue;
      }
      const visibilityAlpha = clamp(Number(g?.visibilityAlpha ?? 1), 0, 1);
      if (visibilityAlpha <= 0.01) continue;
      const frameTransitionAlpha = itemIsShot && shotEditor && editor.mode === "pano"
        ? clamp(Number(editor.cutoutPanoFrameAlpha || 0), 0, 1)
        : 1;
      ctx.save();
      ctx.globalAlpha *= frameTransitionAlpha;
      drawObjectBody(item, g, selected, itemLocked);

      if (selected && g.visible) {
        const accent = itemLocked ? "#ff4d4f" : ((itemIsSticker && isExternalSticker(item)) ? "#f59e0b" : "#0070f3");
        const prevAlpha = ctx.globalAlpha;
        ctx.globalAlpha = prevAlpha * visibilityAlpha;
        drawSelectedObjectAffordances(item, g, accent);
        ctx.globalAlpha = prevAlpha;
      }
      ctx.restore();
    }

    if (shotEditor && editor.mode === "pano" && !getActiveCutoutShot()
      && editor.cutoutPanoFrameVisual && editor.cutoutPanoFrameAlpha > 1e-4) {
      const visual = editor.cutoutPanoFrameVisual;
      const fade = clamp(Number(editor.cutoutPanoFrameAlpha || 0), 0, 1);
      ctx.save();
      ctx.globalAlpha *= fade;
      drawCameraFrameBody(visual.geom, visual.selected, visual.locked);
      if (visual.selected) {
        drawSelectedObjectAffordances(
          visual.item,
          visual.geom,
          visual.locked ? "#ff4d4f" : "#0070f3",
        );
      }
      ctx.restore();
    }

    if (multiSelected) {
      const g = getMultiSelectionGeom(selectedItems);
      if (g?.visible) {
        const accent = areAllSelectedItemsLocked(selectedItems) ? "#ff4d4f" : "#0070f3";
        ctx.save();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(g.corners[0].x, g.corners[0].y);
        for (let i = 1; i < g.corners.length; i += 1) ctx.lineTo(g.corners[i].x, g.corners[i].y);
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = accent;
        g.corners.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2); ctx.fill(); });
        ctx.restore();
      }
    } else {
      selectedItems.forEach((selected) => {
        if (!isStrokeGroupItem(selected) && !isRasterObjectItem(selected)) return;
        const g = objectGeom(selected);
        if (!g?.visible) return;
        const accent = isItemLocked(selected) ? "#ff4d4f" : "#0070f3";
        ctx.save();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(g.corners[0].x, g.corners[0].y);
        for (let i = 1; i < g.corners.length; i += 1) ctx.lineTo(g.corners[i].x, g.corners[i].y);
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = accent;
        g.corners.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 6.5, 0, Math.PI * 2); ctx.fill(); });
        ctx.restore();
      });
    }

    if (editor.interaction?.kind === "marquee_select") {
      const rect = rectFromPoints(editor.interaction.start, editor.interaction.current);
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.rect(rect.x0, rect.y0, rect.x1 - rect.x0, rect.y1 - rect.y0);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawFrameViewBackground(drawView) {
    const shot = getActiveCutoutShot();
    const layout = getFrameViewLayout(shot);
    if (!shot || !layout) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (drawView) editorView.clear(0x0a0a0a);
      return false;
    }
    const rect = { x: layout.x, y: layout.y, w: layout.w, h: layout.h };
    // The context fills the whole canvas. Do NOT bound it relative to the gate — that makes the
    // rendered area shrink together with the gate and leaves unpainted margins.
    const { rect: contextRect, shot: contextShot, lens } = frameViewContext(shot, layout, { width: canvas.width, height: canvas.height });
    const gateRadius = getFrameGateRadius(rect);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (drawView) {
      // An opaque base on the whole canvas, under the context. Only the part of the context on the canvas is
      // drawn, at the canvas's own pixels. Until the shot can draw, its context is a little lighter
      // (#111111, the base under white at 3%).
      editorView.clear(0x0a0a0a);
      const device = deviceRect(contextRect);
      const drawn = !!drawEditorViewShot(device, contextShot, undefined, 0x0a0a0a, lens && deviceLens(lens, device.w / contextRect.w));
      if (!drawn) editorView.clear(0x111111, device);
      runtime.backgroundDirty = !drawn;
    }
    ctx.save();
    ctx.fillStyle = "rgba(0, 0, 0, 0.58)";
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.roundRect(rect.x, rect.y, rect.w, rect.h, gateRadius);
    ctx.fill("evenodd");
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = CUTOUT_FRAME_ACCENT;
    ctx.globalAlpha = 0.62;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(rect.x + 1, rect.y + 1, rect.w - 2, rect.h - 2, Math.max(0, gateRadius - 1));
    ctx.stroke();
    ctx.restore();
    return true;
  }

  function getFrameGateRadius(rect) {
    const radiusScale = Math.max(1e-6, Number(runtime.frameCanvasScale || 1));
    return Math.min(frameGateCssRadius * radiusScale, Number(rect?.w || 0) * 0.5, Number(rect?.h || 0) * 0.5);
  }

  // Draw dashed outline for the lasso fill region while the user is still drawing.
  // The fill itself is rendered at 50% by the paint engine (lassoPreviewActive).
  // This overlay adds a visible dashed border on the 2D canvas.
  function drawLassoOutlineOverlay() {
    if (editor.interaction?.kind !== "paint_lasso_fill") return;
    const stroke = editor.interaction.stroke;
    const points = stroke?.geometry?.points;
    let projected;
    if (editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      const rect = getFrameViewRect(shot);
      projected = projectErpLassoPointsToFrameRect(points, shot, rect);
    } else {
      projected = projectLassoPointsToCurrentView(points);
    }
    if (!Array.isArray(projected) || projected.length < 3) return;

    const isMaskLasso = String(stroke?.layerKind || "") === "mask";
    const c = stroke?.color || { r: 1, g: 0.25, b: 0.25, a: 1 };
    const cr = Math.round(Number(c.r || 0) * 255);
    const cg = Math.round(Number(c.g || 0) * 255);
    const cb = Math.round(Number(c.b || 0) * 255);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(Number(projected[0].x || 0), Number(projected[0].y || 0));
    for (let i = 1; i < projected.length; i++) ctx.lineTo(Number(projected[i].x || 0), Number(projected[i].y || 0));
    ctx.closePath();
    if (isMaskLasso) {
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.lineDashOffset = 0;
      ctx.strokeStyle = "rgba(0,0,0,0.96)";
      ctx.stroke();
      ctx.lineDashOffset = -6;
      ctx.strokeStyle = "rgba(255,255,255,0.96)";
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
    } else {
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.strokeStyle = `rgba(${cr},${cg},${cb},1)`;
      ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.restore();
  }

  function drawFrameRollOverlay() {
    const visual = editor.frameRollOverlayVisual;
    const alpha = clamp(Number(editor.frameRollOverlayAlpha || 0), 0, 1);
    if (editor.mode !== "frame" || !visual?.shot || alpha <= 1e-4) return;
    const rect = getFrameViewRect(visual.shot);
    if (!rect) return;
    const center = { x: rect.x + rect.w * 0.5, y: rect.y + rect.h * 0.5 };
    const angle = Number(visual.shot.roll_deg ?? visual.shot.rot_deg ?? 0) * DEG2RAD;
    const radius = Math.hypot(rect.w, rect.h) * 0.55;
    const dx = Math.cos(angle) * radius;
    const dy = Math.sin(angle) * radius;
    ctx.save();
    ctx.globalAlpha *= alpha;
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
    ctx.clip();
    ctx.translate(center.x, center.y);
    ctx.rotate(angle);
    const spacing = Math.max(12, Math.min(rect.w, rect.h) / 6);
    ctx.beginPath();
    for (let x = -radius; x <= radius; x += spacing) {
      ctx.moveTo(x, -radius);
      ctx.lineTo(x, radius);
    }
    for (let y = -radius; y <= radius; y += spacing) {
      ctx.moveTo(-radius, y);
      ctx.lineTo(radius, y);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
    ctx.stroke();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.beginPath();
    ctx.moveTo(center.x - dx, center.y - dy);
    ctx.lineTo(center.x + dx, center.y + dy);
    ctx.lineWidth = 1.5;
    ctx.setLineDash([8, 6]);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
    ctx.shadowBlur = 3;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  function getCutoutPanoDimTarget() {
    // In 6DoF the Camera is its frustum, not a frame on the panorama to dim around. Panorama Studio dims
    // around its Camera's frame only while the Camera is selected, so its Stickers stay in full view (#89).
    if (!shotEditor || !getActiveCutoutShot() || (cameraV2 && isFreeSpaceView()) || (studio && !isCameraSelected())) return 0;
    return CUTOUT_PANO_DIM_ALPHA;
  }

  function drawCutoutPanoPassepartout() {
    const alpha = clamp(Number(editor.cutoutPanoDimAlpha || 0), 0, 1);
    if (alpha <= 1e-4 || !shotEditor || editor.mode !== "pano") return;
    const shot = getActiveCutoutShot();
    const geom = shot ? objectGeom(shot) : null;
    const liveCorners = Array.isArray(geom?.corners) && geom.corners.length >= 4
      ? geom.corners.map((point) => ({ x: Number(point.x || 0), y: Number(point.y || 0) }))
      : null;
    if (geom?.visible && liveCorners) editor.cutoutPanoDimCorners = liveCorners;
    if (shot && geom?.visible && liveCorners) {
      editor.cutoutPanoFrameVisual = {
        item: shot,
        geom,
        selected: isItemSelected(shot),
        locked: isItemLocked(shot),
      };
    }
    // Cached corners exist only to preserve the hole while a deleted frame
    // fades out. A live but offscreen frame must produce uniform dimming.
    const fadingOut = Number(editor.cutoutPanoDimTarget || 0) <= 1e-6;
    const corners = geom?.visible
      ? liveCorners
      : (fadingOut ? (editor.cutoutPanoDimCorners || []) : []);
    ctx.save();
    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    if (corners.length >= 4) {
      ctx.moveTo(corners[0].x, corners[0].y);
      for (let i = 1; i < 4; i += 1) ctx.lineTo(corners[i].x, corners[i].y);
      ctx.closePath();
    }
    ctx.fill("evenodd");
    ctx.restore();
  }

  return {
    connect(api) {
      ({
        areAllSelectedItemsLocked, contentSphere, deviceRect, drawEditorViewShot, editorViewInput,
        getActiveCutoutShot, getCutoutSelectableItemsForDisplay, getFrameViewLayout, getFrameViewRect, getList,
        getMultiSelectionGeom, getSelectedItems, getStickerDisplayAlpha, getUnwrapRect, isCameraSelected,
        isErpCamera, isExternalSticker, isFreeSpaceView, isItemLocked, isItemSelected, isRasterObjectItem,
        isSceneSticker, isShotItem, isStickerItem, isStrokeGroupItem, objectGeom, poseOf, projectDir,
        projectDirUnwrap, projectErpLassoPointsToFrameRect, projectLassoPointsToCurrentView,
        rebuildPaintEngineIfNeeded, rectFromPoints, renderEditorView, renderEditorViewUnwrap, sampleStickerEdge,
        sceneStickerShown, spaceViewState,
      } = api);
    },
    drawGridUnwrap, drawGridPano, drawObjects, drawFrameViewBackground, drawLassoOutlineOverlay,
    drawFrameRollOverlay, getCutoutPanoDimTarget, drawCutoutPanoPassepartout,
  };
}
