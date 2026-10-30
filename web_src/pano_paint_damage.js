// Where a paint canvas changed: integer pixel rectangles { x0, y0, x1, y1 } (x1 and y1 exclusive), so what is
// built from the canvas (a display canvas, a texture) is drawn or uploaded again only there. The pixels do not
// depend on it: a region drawn again is drawn exactly as the whole canvas is, and anything unknown is the whole.

// The rectangles of a canvas's changes are merged where they overlap or touch; past this many they become one.
const MAX_RECTS = 8;
// Change records kept per canvas; past it the oldest are merged (a reader that far behind gets more).
const MAX_ENTRIES = 1024;
// Pixels around a drawn shape that its anti-aliased and filtered edges may reach.
const EDGE = 2;

let nextLogId = 1;

// The rectangle of a shape drawn over [x0, x1) x [y0, y1) (any numbers), widened by its edges and clamped to the
// canvas, or null when none of it is on the canvas.
export function shapeRect(x0, y0, x1, y1, width, height) {
  const rect = {
    x0: Math.max(0, Math.floor(x0) - EDGE),
    y0: Math.max(0, Math.floor(y0) - EDGE),
    x1: Math.min(width, Math.ceil(x1) + EDGE),
    y1: Math.min(height, Math.ceil(y1) + EDGE),
  };
  return rect.x1 > rect.x0 && rect.y1 > rect.y0 ? rect : null;
}

function touches(a, b) {
  return a.x0 <= b.x1 && b.x0 <= a.x1 && a.y0 <= b.y1 && b.y0 <= a.y1;
}

function union(a, b) {
  return { x0: Math.min(a.x0, b.x0), y0: Math.min(a.y0, b.y0), x1: Math.max(a.x1, b.x1), y1: Math.max(a.y1, b.y1) };
}

// rects with `rect` added (a new array): merged into the ones it overlaps or touches, all in one past MAX_RECTS.
export function addRect(rects, rect) {
  if (!rect) return rects;
  let merged = rect;
  let rest = rects;
  for (;;) {
    const index = rest.findIndex((other) => touches(other, merged));
    if (index < 0) break;
    merged = union(merged, rest[index]);
    rest = [...rest.slice(0, index), ...rest.slice(index + 1)];
  }
  const out = [...rest, merged];
  return out.length > MAX_RECTS ? [out.reduce(union)] : out;
}

// The rectangles of both lists, or null (the whole canvas) when either is null.
export function joinRects(a, b) {
  if (a === null || b === null) return null;
  return b.reduce(addRect, a);
}

// Where both lists' rectangles are (null: the whole canvas, as `width` x `height`).
export function intersectRects(a, b, width, height) {
  const whole = [{ x0: 0, y0: 0, x1: width, y1: height }];
  let out = [];
  for (const x of a ?? whole) {
    for (const y of b ?? whole) {
      const rect = { x0: Math.max(x.x0, y.x0), y0: Math.max(x.y0, y.y0), x1: Math.min(x.x1, y.x1), y1: Math.min(x.y1, y.y1) };
      if (rect.x1 > rect.x0 && rect.y1 > rect.y0) out = addRect(out, rect);
    }
  }
  return out;
}

// The changes of one canvas, by revision. mark(rects) records a change within rects (null: anywhere) and moves
// `revision`; since(revision) gives where the canvas changed after that revision ([] when it did not), or null
// when it does not know (another canvas's revision, or a change anywhere since). However many changes come
// between two reads (a fast stroke gives many points per frame), they are rectangles, never the whole canvas:
// past MAX_ENTRIES the two oldest records become one, which covers both. `since` is one function for the
// canvas's life, so a layer that carries it compares equal from draw to draw.
export function createDamageLog() {
  const id = nextLogId++;
  let version = 0;
  // Changes since `floor` (the last change anywhere), oldest first: { to, rects }, each the changes after the
  // record before it up to version `to`.
  let floor = 0;
  let entries = [];
  const prefix = `damage${id}:`;
  return {
    get revision() {
      return `${prefix}${version}`;
    },
    mark(rects) {
      version += 1;
      if (rects === null) {
        floor = version;
        entries = [];
        return;
      }
      entries.push({ to: version, rects });
      if (entries.length > MAX_ENTRIES) {
        const [first, second] = entries;
        entries.splice(0, 2, { to: second.to, rects: joinRects(first.rects, second.rects) });
      }
    },
    since(revision) {
      if (typeof revision !== "string" || !revision.startsWith(prefix)) return null;
      const seen = Number(revision.slice(prefix.length));
      if (!Number.isInteger(seen) || seen < floor || seen > version) return null;
      let rects = [];
      for (let index = entries.length - 1; index >= 0 && entries[index].to > seen; index -= 1) {
        rects = joinRects(rects, entries[index].rects);
      }
      return rects;
    },
  };
}
