import assert from "node:assert/strict";
import test from "node:test";

import { createPaintEngineManager } from "../web_src/pano_paint_engine.js";

// A 2D canvas that counts the drawing calls made on any canvas, so a test sees whether a display
// canvas was rebuilt.
let draws = 0;
function fakeContext() {
  const target = { globalAlpha: 1, globalCompositeOperation: "source-over" };
  return new Proxy(target, {
    get(object, key) {
      if (key in object) return object[key];
      return () => {
        draws += 1;
        return { addColorStop() {} };
      };
    },
  });
}
function fakeCanvas() {
  const ctx = fakeContext();
  return { width: 0, height: 0, getContext: () => ctx };
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
    assert.equal(engine.getMaskDisplayCanvas(), null);
    assert.equal(engine.getMaskDisplayRevision(), null);
    engine.rebuildCommitted({ painting: { mask: { strokes: [maskStroke("eraser")] } } });
    assert.equal(engine.getMaskDisplayCanvas(), null, "erasing an empty mask leaves it empty");
  });
});

test("the mask display canvas is rebuilt only when the mask changes", () => {
  withFakeCanvas(() => {
    const engine = createPaintEngineManager({ width: 64, height: 32 });
    engine.rebuildCommitted({ painting: { mask: { strokes: [maskStroke()] } } });
    const first = drawsOf(() => engine.getMaskDisplayCanvas());
    assert.ok(first.out);
    assert.ok(first.draws > 0);
    const revision = engine.getMaskDisplayRevision();
    for (let index = 0; index < 100; index += 1) {
      const again = drawsOf(() => engine.getMaskDisplayCanvas());
      assert.equal(again.out, first.out);
      assert.equal(again.draws, 0, "an unchanged mask is not drawn again");
    }
    assert.equal(engine.getMaskDisplayRevision(), revision);

    // A live mask stroke changes it on each point; the next frame draws it once.
    const stroke = maskStroke();
    engine.beginStroke(stroke);
    engine.appendStrokePoint(engine.ensureTarget(), 0.6, 0.5, stroke);
    assert.notEqual(engine.getMaskDisplayRevision(), revision);
    assert.ok(drawsOf(() => engine.getMaskDisplayCanvas()).draws > 0);
    assert.equal(drawsOf(() => engine.getMaskDisplayCanvas()).draws, 0);
    engine.commitActiveStroke(stroke);
    assert.ok(drawsOf(() => engine.getMaskDisplayCanvas()).draws > 0);
    assert.equal(drawsOf(() => engine.getMaskDisplayCanvas()).draws, 0);

    // Painting does not touch the mask display.
    const paint = { ...maskStroke(), layerKind: "paint", actionGroupId: "g1" };
    engine.beginStroke(paint);
    engine.appendStrokePoint(engine.ensureTarget(), 0.2, 0.5, paint);
    assert.equal(drawsOf(() => engine.getMaskDisplayCanvas()).draws, 0);
  });
});

test("a paint group with its live stroke is drawn once per change", () => {
  withFakeCanvas(() => {
    const engine = createPaintEngineManager({ width: 64, height: 32 });
    const paint = { ...maskStroke(), layerKind: "paint", actionGroupId: "g1" };
    engine.rebuildCommitted({ painting: { paint: { strokes: [paint] } } });
    const committed = engine.getGroupDisplayCanvas("g1");
    assert.equal(drawsOf(() => engine.getGroupDisplayCanvas("g1")).draws, 0, "without a live stroke it is the committed paint");
    assert.equal(engine.getGroupDisplayCanvas("g1"), committed);
    engine.beginStroke(paint);
    engine.appendStrokePoint(engine.ensureTarget(), 0.2, 0.5, paint);
    const live = drawsOf(() => engine.getGroupDisplayCanvas("g1"));
    assert.notEqual(live.out, committed);
    assert.ok(live.draws > 0);
    assert.equal(drawsOf(() => engine.getGroupDisplayCanvas("g1")).draws, 0);
    engine.appendStrokePoint(engine.ensureTarget(), 0.3, 0.5, paint);
    assert.ok(drawsOf(() => engine.getGroupDisplayCanvas("g1")).draws > 0);
  });
});
