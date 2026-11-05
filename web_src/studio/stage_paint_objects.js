// The paint groups on the new UI's stage (docs/studio-ui.md "ペイントのまとまり"): what the Cursor grabs of the painting,
// the frame and strokes of a paint group on the screen, and the drags of a paint group (stage_objects.js asks for them).
// It builds no DOM.
import { rasterObjectTurnCenterUv } from "../pano_paint_display.js";
import { lensPolylines } from "../pano_lens.js";
import { STICKER_NODE_ROTATE_HANDLE_OFFSET_PX } from "../pano_sticker_affordance.js";
import { directionAtScreenPoint } from "../pano_sticker_geometry.js";
import {
  frameCornersUv, moveStrokeGroupTo, offsetRasterObject, paintIndexOf, pointerDistance, pointerScaleRatio,
  rasterObjectCornersUv, rotateRasterObject, scaleRasterObject, skyStickersOf, strokeHitLineWidth, strokePoints,
  transformStrokeGroup, turnStrokeGroup,
} from "../pano_paint_objects.js";
import {
  brushPresetIdForTool, directionOfErpPoint, erpPointOfDirection, shortestWrappedDelta, syncPaintGroups,
} from "../pano_paint_strokes.js";
import { ROTATE_SNAP_DEG } from "./view_scale.js";

// The paint the Cursor grabs in a state (pano_paint_objects.js paintIndexOf), none while the painting is hidden.
const NO_PAINT = Object.freeze({ groups: new Map(), rasters: [] });
export function paintIndex(state) {
  return state.painting_visible === false ? NO_PAINT : paintIndexOf(state);
}

// Where the ERP point `point` lands on the screen of `projection` (pano_editor_view.js viewProjection): { x, y }, or
// null behind the view. The Sky lies at infinity, so only the direction counts.
function screenOfErp(projection, point) {
  return screenOfDirection(projection, directionOfErpPoint(point));
}

// Where the direction `direction` lands on the screen of `projection`: { x, y }, or null behind the view.
function screenOfDirection(projection, direction) {
  const at = projection.project(direction);
  return at.z > 1e-4 ? { x: at.x, y: at.y } : null;
}

// The ERP point under the screen point `point` of `projection`, or null where it has no ray (past a lens Camera's
// limit).
export function erpUnder(projection, point) {
  const direction = projection.ray(point.x, point.y);
  return direction ? erpPointOfDirection(direction) : null;
}

// The rotate handle of a paint group's frame on screen (docs/studio-ui.md "ペイントのまとまり" "回転のハンドル"):
// { rotateStemBase, rotateHandle }, the middle of its top edge (its first two corners) and the handle
// STICKER_NODE_ROTATE_HANDLE_OFFSET_PX out from it, on the way from its bottom edge's middle (straight up when the two
// meet).
function rotateSeat(corners) {
  const top = { x: (corners[0].x + corners[1].x) / 2, y: (corners[0].y + corners[1].y) / 2 };
  const bottom = { x: (corners[3].x + corners[2].x) / 2, y: (corners[3].y + corners[2].y) / 2 };
  const length = Math.hypot(top.x - bottom.x, top.y - bottom.y);
  const [ux, uy] = length > 1e-9 ? [(top.x - bottom.x) / length, (top.y - bottom.y) / length] : [0, -1];
  return {
    rotateStemBase: top,
    rotateHandle: { x: top.x + ux * STICKER_NODE_ROTATE_HANDLE_OFFSET_PX, y: top.y + uy * STICKER_NODE_ROTATE_HANDLE_OFFSET_PX },
  };
}

// A paint group's frame on the screen of `projection`: { visible, center, corners, outline, rotateStemBase,
// rotateHandle (rotateSeat) } (a stroke group's frame is
// its strokeGroupFrame, a raster object's its transformed box), as the old editor's editor/object_geometry.js. Not
// visible when its center or a corner is behind the view: the frame and its handles are not drawn then (its strokes
// are still hit, paintPaths). `outline` is the frame's edge through its corners: the corners themselves on a pinhole,
// each edge bent on a lens Camera's picture (`projection.bent`; pano_lens.js lensPolylines, as the guides), or not
// visible when an edge leaves what the lens images.
export function paintFrame(state, object, projection) {
  let center = null;
  let cornersUv;
  if (object.kind === "group") {
    const entry = paintIndex(state).groups.get(object.id);
    if (!entry) return { visible: false };
    center = screenOfErp(projection, entry.frame.centerUv);
    cornersUv = frameCornersUv(entry.frame);
  } else {
    cornersUv = rasterObjectCornersUv(object.item);
  }
  const corners = cornersUv.map((point) => screenOfErp(projection, point));
  if (corners.length < 4 || corners.some((corner) => !corner)) return { visible: false };
  if (object.kind === "raster") center = { x: corners.reduce((sum, p) => sum + p.x, 0) / 4, y: corners.reduce((sum, p) => sum + p.y, 0) / 4 };
  if (!center) return { visible: false };
  if (!projection.bent) return { visible: true, center, corners, outline: corners, ...rotateSeat(corners) };
  const directions = cornersUv.map((point) => {
    const { x, y, z } = directionOfErpPoint(point);
    return [x, y, z];
  });
  const project = ([x, y, z]) => {
    const at = projection.project({ x, y, z });
    return at.z > 1e-4 ? at : null;
  };
  const outline = [];
  for (let index = 0; index < directions.length; index += 1) {
    const runs = lensPolylines(project, directions[index], directions[(index + 1) % directions.length]);
    if (runs.length !== 1) return { visible: false };
    outline.push(...runs[0].slice(0, -1).map(({ x, y }) => ({ x, y })));
  }
  return { visible: true, center, corners, outline, ...rotateSeat(corners) };
}

// A stroke group's strokes on the screen of `projection`, as pano_paint_objects.js strokePathsHit takes them: each
// stroke's points in front of the view, closed for a lasso, with the width it is hit within.
export function paintPaths(state, id, projection) {
  const entry = paintIndex(state).groups.get(id);
  if (!entry) return [];
  return entry.strokes.map((stroke) => {
    const points = strokePoints(stroke);
    return {
      points: (Array.isArray(points) ? points : []).map((point) => screenOfErp(projection, point)).filter(Boolean),
      closed: String(stroke?.geometry?.geometryKind || "") === "lasso_fill",
      lineWidth: strokeHitLineWidth(stroke, brushPresetIdForTool(String(stroke?.toolKind || "pen"))),
    };
  }).filter((path) => path.points.length);
}

// What a drag of the paint group `object` copies of the state `base` (session.js gesture's copy): the stroke group's
// strokes or the raster object, and the groups' entries (written with the counted groups); everything else is shared.
function paintDraft(base, object) {
  const painting = base.painting;
  const own = (stroke) => object.kind === "group" && String(stroke?.actionGroupId || "").trim() === object.id;
  return {
    ...base,
    painting: {
      ...painting,
      groups: (painting.groups ?? []).map((group) => ({ ...group })),
      paint: { ...painting.paint, strokes: (painting.paint?.strokes ?? []).map((stroke) => (own(stroke) ? structuredClone(stroke) : stroke)) },
      raster_objects: (painting.raster_objects ?? []).map((item) => (object.kind === "raster" && item.id === object.id ? { ...item, transform: { ...item.transform } } : item)),
    },
  };
}

// The key of a view (a three.js camera setup seen at width x height px) for the caches of the paint's screen shapes.
export function viewKey(camera, width, height) {
  const q = camera.quaternion;
  const lens = camera.lensImage;
  const bent = lens ? `|${lens.curve},${lens.focalPx},${lens.centerX},${lens.centerY}` : "";
  return `${q.x},${q.y},${q.z},${q.w}|${camera.fovY_deg}|${camera.aspect}|${width}|${height}${bent}`;
}

// A press that selects and whose drag does nothing.
export const selectOnly = () => ({ move() {}, end() {}, cancel() {} });

// The drags of a paint group (stage_objects.js createStageObjects): state() is the working state, projection() the
// stage's view now (pano_editor_view.js viewProjection), edits the stage's edits ({ live(apply, copy), commit(),
// cancel() }).
export function createPaintDrags({ state, projection, edits }) {
  // A drag of a paint group (docs/studio-ui.md "ペイントのまとまり"): `kind` "move" (the body: a stroke group as a sky image
  // moves, paintCarry; a raster object by the ERP difference between the press and the pointer, the seam crossed the
  // short way, added to its transform), "scale"
  // (a corner: the pointer's distance from the frame's screen center over the press's, on its frame's tangent plane
  // about its box's center for a stroke group, on its transform's scale for a raster object) or "rotate" (the rotate handle: paintTurn), from
  // `geometry` where it started. The painting is written as it is (no Lanes), with its counted groups, and drops the
  // uploaded `painting_layer`.
  function paintDrag(kind, object, geometry, point) {
    if (kind === "rotate") return paintTurn(object, point);
    if (kind === "move" && object.kind === "group") return paintCarry(object, point);
    const start = erpUnder(projection(), point);
    const center = geometry.center;
    const startDistance = center ? pointerDistance(center, point) : 1;
    const frame = object.kind === "group" ? paintIndex(state()).groups.get(object.id)?.frame : null;
    return {
      move(next) {
        const at = erpUnder(projection(), next);
        if (!start || !at) return;
        editPaint(object, (painting) => {
          if (object.kind === "group") {
            const strokes = painting.paint.strokes;
            return transformStrokeGroup(strokes, object.id, pointerScaleRatio(center, startDistance, next), null, frame);
          }
          const item = painting.raster_objects.find((entry) => entry.id === object.id);
          if (!item) return false;
          return kind === "move"
            ? offsetRasterObject(item, shortestWrappedDelta(at.u, start.u), at.v - start.v)
            : scaleRasterObject(item, pointerScaleRatio(center, startDistance, next));
        });
      },
      end: () => edits.commit(),
      cancel: () => edits.cancel(),
    };
  }

  // A stroke group's body drag, as a sky image's (skyDrag "move"): its center direction `c` (its frame's center, the
  // points' mean direction) keeps the press's screen offset from it and goes to the direction under the pointer less
  // that offset (pano_sticker_geometry.js directionAtScreenPoint), and its points are carried with it on the sphere
  // (moveStrokeGroupTo). When `c` has no place on the screen the press only selects.
  function paintCarry(object, point) {
    const frame = paintIndex(state()).groups.get(object.id)?.frame;
    const anchor = frame ? screenOfDirection(projection(), frame.center) : null;
    if (!anchor) return selectOnly();
    const offset = { x: point.x - anchor.x, y: point.y - anchor.y };
    return {
      move(next) {
        const centerTo = directionAtScreenPoint(projection(), { x: next.x - offset.x, y: next.y - offset.y });
        // Past a lens Camera's limit there is no direction: the group stays where it was last.
        if (!centerTo) return;
        editPaint(object, (painting) => {
          const group = painting.groups.find((entry) => String(entry?.actionGroupId || "").trim() === object.id);
          return moveStrokeGroupTo(painting.paint.strokes, object.id, frame, centerTo, null, group);
        });
      },
      end: () => edits.commit(),
      cancel: () => edits.cancel(),
    };
  }

  // A turn of a paint group from its rotate handle (docs/studio-ui.md "ペイントのまとまり" "回す"): the pointer's angle
  // about the turn's center on screen, from the press's (clockwise positive), adds to a stroke group's rot_deg and turns
  // its points on the sphere about its frame's center direction as grabbed (turnStrokeGroup; the points' mean direction,
  // which a turn does not move), or adds to a raster object's rot_deg about its box's center moved by du and dv. Shift
  // stops either angle at ROTATE_SNAP_DEG multiples. The center is measured where it was at the press.
  function paintTurn(object, point) {
    const axis = object.kind === "group" ? paintIndex(state()).groups.get(object.id)?.frame.center : null;
    const pivot = object.kind === "group" ? null : rasterObjectTurnCenterUv(object.item);
    const center = axis ? screenOfDirection(projection(), axis) : screenOfErp(projection(), pivot);
    const startAngle = center ? Math.atan2(point.y - center.y, point.x - center.x) : 0;
    return {
      move(next, event = {}) {
        if (!center) return;
        const delta = (Math.atan2(next.y - center.y, next.x - center.x) - startAngle) * (180 / Math.PI);
        const snap = event.shiftKey ? ROTATE_SNAP_DEG : 0;
        editPaint(object, (painting) => {
          if (object.kind === "group") return turnStrokeGroup(painting, object.id, delta, axis, { snapDeg: snap });
          const item = painting.raster_objects.find((entry) => entry.id === object.id);
          return item ? rotateRasterObject(item, delta, { snapDeg: snap }) : false;
        });
      },
      end: () => edits.commit(),
      cancel: () => edits.cancel(),
    };
  }

  // A paint drag's change: change(painting) writes the copy of the painting the drag started from (its counted groups
  // written: syncPaintGroups) and returns whether it changed; a change drops the uploaded `painting_layer`.
  function editPaint(object, change) {
    edits.live((draft) => {
      const painting = draft.painting;
      if (!painting) return false;
      syncPaintGroups(painting, skyStickersOf(draft));
      if (!change(painting)) return false;
      draft.painting_layer = null;
      return true;
    }, (base) => paintDraft(base, object));
  }

  return { paintDrag };
}
