import assert from "node:assert/strict";
import test from "node:test";

import { createPaintEngineManager } from "../web_src/pano_paint_engine.js";

// A 2D canvas that counts the drawing calls made on any canvas, so a test sees whether a display
// canvas was rebuilt.
let draws = 0;
// Each canvas also keeps the canvases drawn into it since it was last cleared (`drawn`).
function fakeContext(canvas) {
  const target = { globalAlpha: 1, globalCompositeOperation: "source-over" };
  return new Proxy(target, {
    get(object, key) {
      if (key in object) return object[key];
      return (...args) => {
        draws += 1;
        if (key === "clearRect") canvas.drawn = [];
        if (key === "drawImage") canvas.drawn.push(args[0]);
        return { addColorStop() {} };
      };
    },
  });
}
function fakeCanvas() {
  const canvas = { width: 0, height: 0, drawn: [] };
  const ctx = fakeContext(canvas);
  canvas.getContext = () => ctx;
  return canvas;
}

function withFakeCanvas(run) {
  const previousDocument = globalThis.document;
  globalThis.document = { createElement: fakeCanvas };
  try {
    run();
  } finally {
    globalThis.document = previousDocument;
  }
}

function maskStroke(toolKind = "pen") {
  return {
    targetSpace: { kind: "ERP_GLOBAL" },
    layerKind: "mask",
    toolKind,
    size: 4,
    geometry: { geometryKind: "freehand", rawPoints: [{ u: 0.4, v: 0.5 }, { u: 0.5, v: 0.5 }] },
  };
}

function drawsOf(run) {
  const before = draws;
  const out = run();
  return { out, draws: draws - before };
}

test("an empty mask has no display canvas", () => {
  withFakeCanvas(() => {
    const engine = createPaintEngineManager({ width: 64, height: 32 });
    assert.equal(engine.getMaskDisplay(), null);
    engine.rebuildCommitted({ painting: { mask: { strokes: [maskStroke("eraser")] } } });
    assert.equal(engine.getMaskDisplay(), null, "erasing an empty mask leaves it empty");
  });
});

test("the mask display canvas is rebuilt only when the mask changes", () => {
  withFakeCanvas(() => {
    const engine = createPaintEngineManager({ width: 64, height: 32 });
    engine.rebuildCommitted({ painting: { mask: { strokes: [maskStroke()] } } });
    const first = drawsOf(() => engine.getMaskDisplay());
    assert.ok(first.out.media);
    assert.ok(first.draws > 0);
    const { revision } = first.out;
    for (let index = 0; index < 100; index += 1) {
      const again = drawsOf(() => engine.getMaskDisplay());
      assert.equal(again.out.media, first.out.media);
      assert.equal(again.draws, 0, "an unchanged mask is not drawn again");
      assert.equal(again.out.revision, revision);
    }

    // A live mask stroke changes it on each point; the next frame draws it once.
    const stroke = maskStroke();
    engine.beginStroke(stroke);
    engine.appendStrokePoint(engine.ensureTarget(), 0.6, 0.5, stroke);
    const live = drawsOf(() => engine.getMaskDisplay());
    assert.ok(live.draws > 0);
    assert.notEqual(live.out.revision, revision);
    assert.equal(drawsOf(() => engine.getMaskDisplay()).draws, 0);
    engine.commitActiveStroke(stroke);
    assert.ok(drawsOf(() => engine.getMaskDisplay()).draws > 0);
    assert.equal(drawsOf(() => engine.getMaskDisplay()).draws, 0);

    // Painting does not touch the mask display.
    const paint = { ...maskStroke(), layerKind: "paint", actionGroupId: "g1" };
    const before = engine.getMaskDisplay().revision;
    engine.beginStroke(paint);
    engine.appendStrokePoint(engine.ensureTarget(), 0.2, 0.5, paint);
    const painted = drawsOf(() => engine.getMaskDisplay());
    assert.equal(painted.draws, 0);
    assert.equal(painted.out.revision, before);
  });
});

test("a paint group with its live stroke is drawn once per change", () => {
  withFakeCanvas(() => {
    const engine = createPaintEngineManager({ width: 64, height: 32 });
    const paint = { ...maskStroke(), layerKind: "paint", actionGroupId: "g1" };
    engine.rebuildCommitted({ painting: { paint: { strokes: [paint] } } });
    const committed = engine.getGroupDisplay("g1");
    assert.equal(committed.media, engine.getGroupTarget("g1").committedPaint.canvas);
    assert.equal(drawsOf(() => engine.getGroupDisplay("g1")).draws, 0, "without a live stroke it is the committed paint");
    engine.beginStroke(paint);
    engine.appendStrokePoint(engine.ensureTarget(), 0.2, 0.5, paint);
    const live = drawsOf(() => engine.getGroupDisplay("g1"));
    assert.notEqual(live.out.media, committed.media);
    assert.notEqual(live.out.revision, committed.revision);
    assert.equal(live.out.changed, committed.changed, "one damage log across both canvases");
    assert.ok(live.draws > 0);
    assert.equal(drawsOf(() => engine.getGroupDisplay("g1")).draws, 0);
    engine.appendStrokePoint(engine.ensureTarget(), 0.3, 0.5, paint);
    assert.ok(drawsOf(() => engine.getGroupDisplay("g1")).draws > 0);
    engine.commitActiveStroke(paint);
    assert.equal(engine.getGroupDisplay("g1").media, committed.media);
  });
});

test("a paint eraser shows on the groups it reaches, each with its own paint", () => {
  withFakeCanvas(() => {
    const engine = createPaintEngineManager({ width: 64, height: 32 });
    const paint = (actionGroupId, u) => ({ ...maskStroke(), layerKind: "paint", actionGroupId, geometry: { geometryKind: "freehand", rawPoints: [{ u, v: 0.5 }] } });
    engine.rebuildCommitted({ painting: { paint: { strokes: [paint("g1", 0.2), paint("g2", 0.7)] } } });
    const committed = (gid) => engine.getGroupTarget(gid).committedPaint.canvas;
    const g2 = engine.getGroupDisplay("g2");
    const eraser = { ...maskStroke("eraser"), layerKind: "paint", geometry: { geometryKind: "freehand", rawPoints: [{ u: 0.2, v: 0.5 }] } };
    engine.beginStroke(eraser);
    engine.appendStrokePoint(engine.ensureTarget(), 0.2, 0.5, eraser);
    const reached = engine.getGroupDisplay("g1");
    assert.notEqual(reached.media, committed("g1"), "g1 shows the eraser");
    // Its display starts from g1's own paint.
    assert.equal(reached.media.drawn[0], committed("g1"));
    assert.equal(engine.getGroupDisplay("g2").media, committed("g2"), "the eraser does not reach g2");
    assert.equal(engine.getGroupDisplay("g2").revision, g2.revision);
    assert.equal(drawsOf(() => engine.getGroupDisplay("g1")).draws, 0);
    engine.cancelActiveStroke();
    assert.equal(engine.getGroupDisplay("g1").media, committed("g1"));
  });
});

test("a rebuild told that strokes do not change in place reads only the strokes it has not read before", () => {
  withFakeCanvas(() => {
    const engine = createPaintEngineManager({ width: 64, height: 32 });
    let reads = 0;
    const counted = (stroke) => new Proxy(stroke, {
      get(object, key) {
        if (key === "geometry") reads += 1;
        return object[key];
      },
    });
    const paintStroke = (gid, u) => ({ ...maskStroke(), layerKind: "paint", actionGroupId: gid, geometry: { geometryKind: "freehand", rawPoints: [{ u, v: 0.5 }, { u: u + 0.05, v: 0.5 }] } });
    const kept = counted(paintStroke("g1", 0.2));
    engine.rebuildCommitted({ painting: { paint: { strokes: [kept, paintStroke("g2", 0.6)] } } }, { immutableStrokes: true });
    reads = 0;
    engine.rebuildCommitted({ painting: { paint: { strokes: [kept, paintStroke("g2", 0.7)] } } }, { immutableStrokes: true });
    assert.equal(reads, 0, "the stroke kept is not read again");
  });
});
