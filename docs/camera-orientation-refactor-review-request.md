# Camera orientation / legacy projection cleanup — review request

この branch の未commit差分について、実装者とは独立した read-only review をお願いします。
修正は行わず、finding を `P0` / `P1` / `P2` / `P3` で報告してください。
`P0` と `P1` は commit blocker として扱います。

## Review baseline

- repository: `ComfyUI-Panorama-Stickers`
- branch: `refactor/camera-orientation-contract`
- base HEAD: `95845cb`
- review target: base HEAD に対する complete uncommitted working tree
- review phase: 初回reviewの7 findingsと再reviewの3 findingsを修正済み。今回はcomplete treeのfinal re-review
- release target: `1.5.1`（camera math修正と内部整理のpatch release）
- standards: `AGENTS.md`、`docs/agents/workflow.md`
- architecture: `docs/adr/0005-webgl-preview-unification.md`、
  `docs/adr/0016-render-core-migration-codex-instruction.md`、
  `docs/adr/0017-cutout-camera-design.md`

Standards review と Spec review を分け、finding がない場合もそれぞれ明記してください。

## Objective

Reframe360 の機能移植ではなく、Panorama Stickers の既存設計と state schema を維持したまま、
次を行う変更です。

1. 現行実行経路で使われない旧 Cutout triangle projector を削除する
2. JS / GLSL / Python に重複していた camera orientation を単一仕様へ統一する
3. world-up切り替えによる pitch極付近の basis 不連続を解消する
4. 通常角度領域では既存 workflow の framing と回転方向を維持する
5. JS / GLSL / Python parity を regression test で固定する
6. 調査中に試した speculative performance optimization は残さない

## Canonical camera contract

- world axis: `+Y` up
- zero rotation: `+X` right、`+Y` up、`+Z` forward
- camera-local axis: `+X` right、`+Y` up、`+Z` forward
- rotation order: standard right-handed column-vector matricesで
  `Ry(yaw) @ Rx(-pitch) @ Rz(roll)`
- positive yaw: right を向く
- positive pitch: up を向く
- positive roll: 画面を時計回りに回す
- public state names remain unchanged:
  `yaw_deg`、`pitch_deg`、`roll_deg`、`hFOV_deg`、`vFOV_deg`

JS reference は `web_src/pano_camera_math.js`、Python reference は
`comfyui_pano_suite/core/math.py`、GLSL equivalent は
`web_src/pano_gl_renderer.js` にあります。

## Intended changes

### Legacy code removal

- `web_src/pano_cutout_projection.js` を削除
- そのうち現役だった Cutout parameter normalization は
  `web_src/pano_cutout_view_math.js` の既存責務へ統合
- runtimeから参照されない `web_src/pano_render_background_pass.js` と専用テストを削除
- `pano_editor.js` 内の呼び出し元がない modal Sticker triangle fallback と専用helperを削除
- 旧 `getCutoutShotParams()` と同じく、falsyなserialized FOVは1°へclampせず90°/60°へfallback

### Fallback intentionally retained

`web_src/pano_preview_runtime.js` の `STANDALONE_MESH_LOW` と
`drawErpBackground()` を含む Preview node CPU triangle fallback は削除していません。
これは WebGL unavailable 時の互換経路であり、旧 Cutout projectorとは別物です。

### Camera math

- JS consumer は共有 `cameraBasis()` / `yawPitchToDir()` を使用
- Python Cutout / Sticker は共有 `camera_basis()` を使用
- background / layer GLSL shader は同一の `CAMERA_BASIS_GLSL` を使用
- `abs(dot(fwd, worldUp)) > 0.999` の basis切り替えを廃止
- 通常角度では旧 cross-product方式と代数的に同値、極では yaw により定まる連続basisを使用
- GLSLと同じ演算順の独立reference basisを使い、JS / GLSL reference / Pythonのrayを数値比較

### Documentation

- ADR 0016 は完了済みmigration instructionとして `Superseded` に変更
- ADR 0017 に canonical camera contract と現在の実装境界を記載
- README 3言語に、browserが software rendering へ落ちた場合の確認方法を短く追記

## Required review questions

特に次を確認してください。

1. 削除した module / helper に実行時参照が本当に残っていないか
2. 残した Preview CPU fallback が現在も正しく到達可能か
3. JS / GLSL / Python の basis が全角度で同じ handedness と符号を持つか
4. CutoutとStickerで、旧roll処理をbasisへ移した代数変換が正しいか
5. 通常角度の既存workflow framingが変わらないか
6. pitch `+/-90` と旧 `0.999` threshold 周辺で不連続が解消されているか
7. center、上下左右端、四隅を含む parity test が、一実装だけの変更を検知できるか
8. GLSL test が単なる脆いsource文字列確認になりすぎていないか。数値検証不足があれば指摘すること
9. node ID、port semantics、parameter format、serialized stateとの互換性が保たれているか
10. 解像度変更、event coalescing、render cadence変更、texture cache変更など、今回不要なperformance変更が残っていないか
11. ADR 0005 / 0016 / 0017 と実装の説明が矛盾していないか

## Out of scope

- sensor size / focal length UI
- depth of field
- `perspective_warp`
- stereographic / equisolid / equidistant / fisheye projection
- Reframe360 dependencyまたは大規模移植
- node ID、port meaning、state schemaの変更
- 新しいprojection abstractionや大規模architecture変更
- software-rendering環境向けにpreview解像度を下げること

## Verification already run

```bash
npm run build:web
npm run check:web
node --test tests/*.test.mjs
../../venv/bin/python -m pytest -q
git diff --check
```

Current result:

- Node: `194 passed`
- Python: `155 passed`
- frontend bundle: in sync
- diff whitespace check: passed

## Expected review output

findingごとに次を記載してください。

- severity: `P0` / `P1` / `P2` / `P3`
- axis: `Standards` または `Spec`
- file と最小限のline range
- 再現条件または具体的なfailure mode
- 最小の修正案

最後に、各axisのfinding数、commit blockerの有無、追加で必要なmanual verificationをまとめてください。
