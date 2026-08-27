import json
import subprocess
import textwrap
import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


def run_node_json(script: str):
    proc = subprocess.run(
        ["node", "--input-type=module", "-e", script],
        cwd=REPO_ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    if proc.returncode != 0:
        raise AssertionError(f"node failed\nSTDOUT:\n{proc.stdout}\nSTDERR:\n{proc.stderr}")
    try:
        return json.loads(proc.stdout.strip())
    except json.JSONDecodeError as exc:
        raise AssertionError(f"node did not return json\nSTDOUT:\n{proc.stdout}\nSTDERR:\n{proc.stderr}") from exc


class TestPanoRenderCore(unittest.TestCase):
    def test_renderer_state_sync_does_not_render_a_hidden_default_view(self):
        renderer_js = (REPO_ROOT / "web_src" / "pano_gl_renderer.js").read_text(encoding="utf-8")
        sync_start = renderer_js.index("  function syncState(input = {}) {")
        sync_end = renderer_js.index("\n  function screenToErpUv", sync_start)
        sync_source = renderer_js[sync_start:sync_end]

        assert "applySceneState(input)" in sync_source
        assert "renderScene(" not in sync_source

    def test_state_controller_normalizes_descriptor(self):
        script = textwrap.dedent(
            """
            import { createPanoramaRendererStateController } from "./web_src/pano_render_state.js";

            let payload = null;
            const controller = createPanoramaRendererStateController({
              syncState(next) {
                payload = next;
                return true;
              },
            });

            controller.sync({
              stateRevision: 123,
              backgroundSource: { id: "bg" },
              backgroundRevision: 456,
              layers: {
                paintSource: { id: "paint" },
                paintRevision: 789,
                maskSource: { id: "mask" },
                maskRevision: 999,
              },
              textures: [{ assetId: "a" }],
              scene: { stickers: [{ id: "s1" }], selectedId: "s1", hoveredId: null },
              backgroundOpacity: "0.5",
              showMaskTint: true,
            });

            console.log(JSON.stringify(payload));
            """
        )
        payload = run_node_json(script)
        assert payload["stateRevision"] == "123"
        assert payload["backgroundRevision"] == "456"
        assert payload["paintRevision"] == "789"
        assert payload["maskRevision"] == "999"
        assert payload["backgroundOpacity"] == 0.5
        assert payload["showMaskTint"] is True
        assert payload["scene"]["stickers"][0]["id"] == "s1"
        assert payload["textures"][0]["assetId"] == "a"

    def test_state_controller_accepts_render_descriptor_shape(self):
        script = textwrap.dedent(
            """
            import { createPanoramaRendererStateController } from "./web_src/pano_render_state.js";

            let payload = null;
            const controller = createPanoramaRendererStateController({
              syncState(next) {
                payload = next;
                return true;
              },
            });

            controller.sync({
              stateRevision: "r2",
              background: {
                type: "erp_image",
                source: { id: "bg" },
                revision: "bg2",
                coverageDeg: 180,
                opacity: 0.75,
              },
              objectPass: {
                selectedId: "sticker-1",
                objects: [
                  {
                    id: "sticker-1",
                    type: "sticker",
                    source: { id: "img-1" },
                    revision: "tex-1",
                    zIndex: 2,
                    opacity: 0.9,
                    transform: { yawDeg: 10, pitchDeg: -5, rollDeg: 3, hFovDeg: 40, vFovDeg: 25 },
                    params: { assetId: "asset-1", crop: { x0: 0, y0: 0, x1: 1, y1: 1 } },
                  },
                  {
                    id: "paint-1",
                    type: "paint",
                    source: { id: "paint-src" },
                    revision: "paint-r1",
                  },
                  {
                    id: "mask-1",
                    type: "mask",
                    source: { id: "mask-src" },
                    revision: "mask-r1",
                  },
                ],
              },
              overlay: { showMaskTint: true },
            });

            console.log(JSON.stringify(payload));
            """
        )
        payload = run_node_json(script)
        assert payload["backgroundRevision"] == "bg2"
        assert payload["backgroundOpacity"] == 0.75
        assert payload["showMaskTint"] is True
        assert payload["paintRevision"] == "paint-r1"
        assert payload["maskRevision"] == "mask-r1"
        assert payload["scene"]["selectedId"] == "sticker-1"
        assert payload["scene"]["stickers"][0]["id"] == "sticker-1"
        assert payload["textures"][0]["assetId"] == "asset-1"
        assert payload["textures"][0]["revision"] == "tex-1"

    def test_core_clear_state_prevents_render(self):
        script = textwrap.dedent(
            """
            import { createPanoramaRenderCore } from "./web_src/pano_render_core.js";

            let renderCalls = 0;
            const core = createPanoramaRenderCore({
              rendererFactory() {
                return {
                  renderScene() {
                    renderCalls += 1;
                    return { kind: "surface" };
                  },
                  isSupported() { return true; },
                  dispose() {},
                };
              },
              targetPoolFactory() {
                return {
                  ensureTarget() { return null; },
                  clearTarget() {},
                  dispose() {},
                };
              },
            });

            core.syncState({
              stateRevision: "r1",
              backgroundSource: { id: "bg" },
              backgroundRevision: "bg1",
              layers: {},
              textures: [],
              scene: { stickers: [], selectedId: null, hoveredId: null },
            });
            core.clearState();
            const surface = core.renderView({ mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }, { width: 100, height: 50, dpr: 1 });
            console.log(JSON.stringify({ surfaceIsNull: surface === null, renderCalls }));
            """
        )
        result = run_node_json(script)
        assert result["surfaceIsNull"] is True
        assert result["renderCalls"] == 0

    def test_core_render_to_target_uses_target_pool(self):
        script = textwrap.dedent(
            """
            import { createPanoramaRenderCore } from "./web_src/pano_render_core.js";

            const calls = [];
            const targetEntry = {
              canvas: { width: 64, height: 32, tag: "target" },
              ctx: {
                clearRect(x, y, w, h) { calls.push(["clearRect", x, y, w, h]); },
                drawImage(surface, x, y, w, h) { calls.push(["drawImage", surface.tag, x, y, w, h]); },
              },
            };

            const core = createPanoramaRenderCore({
              rendererFactory() {
                return {
                  renderScene() { return { tag: "surface", width: 64, height: 32 }; },
                  isSupported() { return true; },
                  dispose() {},
                };
              },
              targetPoolFactory() {
                return {
                  ensureTarget(id, width, height) {
                    calls.push(["ensureTarget", id, width, height]);
                    targetEntry.canvas.width = width;
                    targetEntry.canvas.height = height;
                    return targetEntry;
                  },
                  clearTarget() {},
                  dispose() {},
                };
              },
            });

            core.syncState({
              stateRevision: "r1",
              backgroundSource: { id: "bg" },
              backgroundRevision: "bg1",
              layers: {},
              textures: [],
              scene: { stickers: [], selectedId: null, hoveredId: null },
            });

            const canvas = core.renderToTarget("preview", { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }, { width: 64, height: 32, dpr: 1 });
            console.log(JSON.stringify({ canvasTag: canvas.tag, calls }));
            """
        )
        result = run_node_json(script)
        assert result["canvasTag"] == "target"
        assert result["calls"][0] == ["ensureTarget", "preview", 64, 32]
        assert result["calls"][1] == ["clearRect", 0, 0, 64, 32]
        assert result["calls"][2] == ["drawImage", "surface", 0, 0, 64, 32]

    def test_render_to_context_can_lower_internal_resolution_without_shrinking_destination(self):
        script = textwrap.dedent(
            """
            import { createPanoramaRenderCore } from "./web_src/pano_render_core.js";

            const calls = [];
            const core = createPanoramaRenderCore({
              rendererFactory() {
                return {
                  renderScene(input) {
                    calls.push(["render", input.width, input.height]);
                    return { tag: "surface" };
                  },
                  isSupported() { return true; },
                  dispose() {},
                };
              },
              targetPoolFactory() {
                return { ensureTarget() { return null; }, clearTarget() {}, dispose() {} };
              },
            });
            core.syncState({ stateRevision: "r1" });
            const ctx = {
              canvas: { tag: "destination" },
              drawImage(surface, x, y, width, height) {
                calls.push(["present", surface.tag, x, y, width, height]);
              },
            };
            const drawn = core.renderToContext(
              ctx,
              { x: 5, y: 7, w: 200, h: 100 },
              { mode: "panorama", yawDeg: 10, pitchDeg: 5, fovDeg: 90 },
              { renderScale: 0.5, dpr: 1 },
            );
            console.log(JSON.stringify({ drawn, calls }));
            """
        )
        result = run_node_json(script)
        assert result == {
            "drawn": True,
            "calls": [
                ["render", 100, 50],
                ["present", "surface", 5, 7, 200, 100],
            ],
        }


if __name__ == "__main__":
    unittest.main()
