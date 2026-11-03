import { expect, test } from "@playwright/test";

// A paint stroke drawn on the sphere (docs/render-contract.md "ペイントのストロークの描き方"), in a real browser engine:
// a stroke painted on the equator and carried near or over the pole (pano_paint_objects.js moveStrokeGroupTo) is drawn
// by the editor's paint engine and by rasterizeStrokeToSurface (what the eraser reaches) without holes across its
// width on the sphere, whatever view it was painted in.

test("a stroke carried near the pole is drawn without holes across its width on the sphere", async ({ page }) => {
  await page.goto("/tests/browser/pages/studio_paint_grab.html");
  await page.waitForFunction(() => window.__studio?.ready, null, { timeout: 30_000 });
  const report = await page.evaluate(async () => {
    const S = await import("/web_src/pano_paint_strokes.js");
    const O = await import("/web_src/pano_paint_objects.js");
    const E = await import("/web_src/pano_paint_engine.js");
    const W = 2048;
    const H = 1024;
    const radius = 2 * Math.PI * 5 / W;
    // Of 1100 points across the true path (up to 0.4 of the brush radius on either side: the path may lie off the great
    // circle by half the radius), how many are not painted.
    const holes = (data, dirs) => {
      let count = 0;
      for (let i = 1; i < dirs.length - 1; i += 5) {
        const p = dirs[i];
        const q = dirs[i + 1];
        const t = { x: q.x - p.x, y: q.y - p.y, z: q.z - p.z };
        const n = { x: p.y * t.z - p.z * t.y, y: p.z * t.x - p.x * t.z, z: p.x * t.y - p.y * t.x };
        const length = Math.hypot(n.x, n.y, n.z);
        for (const s of [-0.4, -0.2, 0, 0.2, 0.4]) {
          const a = s * radius;
          const e = S.erpPointOfDirection({ x: p.x + n.x / length * a, y: p.y + n.y / length * a, z: p.z + n.z / length * a });
          const x = Math.min(W - 1, Math.floor(e.u * W));
          const y = Math.min(H - 1, Math.floor(e.v * H));
          if (data[(y * W + x) * 4 + 3] < 128) count += 1;
        }
      }
      return count;
    };
    const out = [];
    for (const viewMode of ["pano", "unwrap"]) {
      for (const lat of [80, 89.5, 89.97]) {
        const points = Array.from({ length: 56 }, (_, k) => ({ u: 0.45 + k * 0.002, v: 0.5, t: k }));
        const stroke = { id: "s", actionGroupId: "g", layerKind: "paint", toolKind: "pen", size: 10, opacity: 1, flow: 1, hardness: 0.9, stampKind: "round", color: { r: 0, g: 1, b: 0, a: 1 }, radiusModel: "erp_uv_norm", radiusValue: 5 / 2048, targetSpace: { kind: "ERP_GLOBAL", viewMode }, geometry: { geometryKind: "freehand_open", points, rawPoints: points, processedPoints: points } };
        const fine = Array.from({ length: 1101 }, (_, k) => ({ u: 0.45 + k * 0.0001, v: 0.5 }));
        const truth = { ...structuredClone(stroke), geometry: { geometryKind: "freehand_open", points: fine, rawPoints: fine, processedPoints: fine } };
        const frame = S.strokeGroupFrame([stroke]);
        const r = lat * Math.PI / 180;
        for (const each of [stroke, truth]) O.moveStrokeGroupTo([each], "g", frame, { x: 0, y: Math.sin(r), z: Math.cos(r) }, null);
        const dirs = truth.geometry.points.map(S.directionOfErpPoint);
        const engine = E.createPaintEngineManager({ kind: "ERP_GLOBAL", width: W, height: H });
        engine.rebuildCommitted({ painting: { groups: [{ id: "g", actionGroupId: "g", z_index: 0 }], paint: { strokes: [stroke] }, mask: { strokes: [] }, raster_objects: [] } });
        const canvas = engine.getGroupDisplayCanvas("g");
        const surface = S.createRasterSurface(W, H, { readback: true });
        S.rasterizeStrokeToSurface(surface, stroke, { w: W, h: H });
        out.push({
          viewMode, lat,
          engine: holes(canvas.getContext("2d").getImageData(0, 0, W, H).data, dirs),
          raster: holes(surface.ctx.getImageData(0, 0, W, H).data, dirs),
        });
      }
    }
    return out;
  });
  console.log(JSON.stringify(report));
  for (const row of report) {
    expect(row.engine, `engine ${row.viewMode} ${row.lat}`).toBe(0);
    expect(row.raster, `rasterize ${row.viewMode} ${row.lat}`).toBe(0);
  }
});
