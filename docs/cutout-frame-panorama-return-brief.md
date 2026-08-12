# Frame → Panorama 復帰時の挙動と、Panorama passepartout のバグ修正

対象ブランチ: `feat/cutout-frame-camera-editing`（未コミットの作業ツリー）

作業は3つ。**(1) 挙動の確定（コード変更なし・追加禁止事項）**、**(2) 画面外インジケータの削除**、
**(3) Panorama passepartout のバグ修正**。

---

## 1. 挙動の決定：Panorama 視点は自動で動かさない

Frame タブで yaw/pitch/FOV を変更した結果、Panorama へ戻ったときにフレームが画面外になることがある。
これに対して**自動的な視点補正は一切行わない。**

### 理由

Panorama タブには既に passepartout（`drawCutoutPanoPassepartout()`）があり、
フレームの有無と位置が減光だけで判別できる。

```text
減光なし          → フレームが存在しない
明るい領域がある   → そこがフレーム
全体が減光         → フレームは画面外
```

復帰手段もツールレールの `Look At Frame`（`addCutoutFrame()`）が既にある。
これは FOV を保持したまま yaw/pitch をフレーム中心へアニメーション移動する。

つまり「フレームを見失う」問題は既に解決済みで、自動補正が解く問題が存在しない。
またタブ切り替えは移動であって編集ではないため、
**何も変更せずに Panorama → Frame → Panorama と往復したら Panorama の見え方は完全に元のまま**
でなければならない。自動補正はこの性質を壊す。

### 禁止事項

以下は**実装しない。既に入っていれば削除する。**

1. タブ切り替え時に `editor.viewYaw` / `viewPitch` / `viewFov` を書き換える
2. Panorama の FOV を自動で変更する（特にフレームへの最大フィット）
3. フレームが画面外かどうかで視点を補正する
4. `Look At Frame` と同等の機能を別の UI として追加する

現状のタブ切り替えハンドラ（`data-view` の分岐）は視点を触っていない。**この状態を維持すること。**

---

## 2. 画面外インジケータの削除

`Look At Frame` と同じ機能を、より小さく押しにくい形で二重に用意しているだけなので削除する。
減光で状態が判別できる以上、方向表示も不要。

### 削除対象

**`web_src/pano_editor.js`**

- `OFFSCREEN_FRAME_INDICATOR_INSET_X_PX` / `..._Y_PX`（定数、L90 付近）
- `uiState.offscreenFrameIndicator`（L1777 付近）
- `function syncOffscreenFrameIndicator()`（L7114 付近、関数まるごと）
- `drawScene()` 内の `syncOffscreenFrameIndicator();` 呼び出し
- `action === "look-at-offscreen-frame"` の分岐（L10923 付近）

**`web_src/components/PanoModal.vue`**

- `import PanoOffscreenFrameIndicator from "./PanoOffscreenFrameIndicator.vue";`
- `<PanoOffscreenFrameIndicator :model="uiState.offscreenFrameIndicator || {}" />`

**`web_src/components/PanoOffscreenFrameIndicator.vue`**

- ファイルごと削除

**`web/pano_editor.css`**

- `.pano-offscreen-frame-indicator`
- `.pano-offscreen-frame-indicator:hover`
- `.pano-offscreen-frame-indicator:focus-visible`
- `.pano-offscreen-frame-arrow`

### 注意

`dot` / `cameraBasis` / `shortestYawDelta` / `yawPitchToDir` は他でも使われているので
import は残す。削除後に未使用 import が出ていないか確認すること。

`addCutoutFrame()` は `Look At Frame` の実体なので**削除しない**。

---

## 3. バグ修正：フレームが背後にあるとき、減光に古い穴が残る

### 症状

Frame タブでカメラを大きく振ってから Panorama に戻ると、
**フレームが存在しない位置に明るい矩形の穴**が空く。

これは §1 の判断の前提（全体が減光 = フレームは画面外）を直接壊す。

### 原因

`drawCutoutPanoPassepartout()`（`web_src/pano_editor.js` L7100 付近）

```js
const corners = (geom?.visible ? liveCorners : null) || editor.cutoutPanoDimCorners || [];
```

Panorama モードでは `objectGeom()` が `clipBehind: true` で投影するため、
フレームがカメラの背後に回ると `geom.visible === false` になる。
このとき**最後に画面内にあったときの角座標**（`editor.cutoutPanoDimCorners`）にフォールバックし、
そこに穴が空く。

`cutoutPanoDimCorners` がクリアされるのは、フレームが削除されて減光が 0 までフェードし終わったとき
だけ（L7297 付近）で、画面外に出ただけでは残り続ける。

### 修正

キャッシュは「フレーム削除時のフェードアウト中に穴の形を保つ」ためだけに使う。
フレームが存在したまま画面外に出た場合はキャッシュを使わない。

```js
// キャッシュは削除フェードアウト中の見た目を保つためだけのもの。
// フレームが存在したまま画面外へ出た場合に使うと、実体のない位置に穴が残り、
// 「全体が減光 = フレームは画面外」という判別が壊れる。
const fadingOut = Number(editor.cutoutPanoDimTarget || 0) <= 1e-6;
const corners = geom?.visible
  ? liveCorners
  : (fadingOut ? (editor.cutoutPanoDimCorners || []) : []);
```

`getCutoutPanoDimTarget()` は shot が無いときだけ 0 を返すので、
`fadingOut` は「フレームが削除された」と厳密に一致する。

`corners` が空配列なら `ctx.fill("evenodd")` がキャンバス全面を塗るため、
画面外 = 全体減光が保証される。

---

## 4. テスト

`tests/test_cutout_camera_modal_contract.py` に追加する。

```python
def test_panorama_view_is_never_moved_by_tab_switch(self):
    editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
    view_branch = editor_js.split('const viewTarget = ev.target.closest("[data-view]");', 1)[1]
    view_branch = view_branch.split("const actionTarget", 1)[0]
    # タブ切り替えは移動であって編集ではない。往復は no-op でなければならない。
    for forbidden in ("editor.viewYaw", "editor.viewPitch", "editor.viewFov", "startViewTween"):
        self.assertNotIn(forbidden, view_branch)

def test_offscreen_frame_indicator_is_not_reintroduced(self):
    editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
    modal_vue = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
    # Look At Frame と同じ機能を別 UI として重複させない。
    self.assertNotIn("offscreenFrameIndicator", editor_js)
    self.assertNotIn("look-at-offscreen-frame", editor_js)
    self.assertNotIn("PanoOffscreenFrameIndicator", modal_vue)
    self.assertFalse((REPO_ROOT / "web_src" / "components" / "PanoOffscreenFrameIndicator.vue").exists())

def test_panorama_passepartout_does_not_reuse_stale_corners(self):
    editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
    body = editor_js.split("function drawCutoutPanoPassepartout", 1)[1]
    body = body.split("function ", 1)[0]
    # 画面外のフレームで古い角座標に穴を空けると、減光による状態判別が壊れる。
    self.assertNotIn("(geom?.visible ? liveCorners : null) || editor.cutoutPanoDimCorners", body)
    self.assertIn("fadingOut", body)
```

---

## 5. 検証

```bash
node --check web_src/pano_editor.js
node --test tests/pano_cutout_view_math.test.mjs          # 15/15
python3 -m unittest discover -s tests -p "test_*.py"      # 失敗集合が着手前と同一であること
npm run build:web                                          # web/panorama_suite.js もコミットに含める
```

Python 側は既存の失敗が 4 failures / 10 errors ある（numpy・torch 未導入と、
今回と無関係な既存の文字列契約テスト）。**この集合を増やさないこと**が合格条件。

### 手動確認

1. フレームを作り、Panorama で見える位置に置く → 明るい領域がフレーム
2. Frame タブでカメラを大きく振る → Panorama に戻る
   → **視点は動かない**、かつ**全体が均一に減光**（明るい穴が残らない）
3. `Look At Frame` を押す → FOV を保ったままアニメーションでフレームへ移動
4. フレームを削除 → 減光がフェードアウトする間、穴の形が保たれたまま消える
5. 何も変更せず Panorama → Frame → Panorama と往復 → Panorama の見え方が完全に不変

---

## 6. やらないこと

- `Look At Frame` の仕様変更（FOV 保持・アニメーションのまま）
- Panorama passepartout の濃さ・フェード時間の変更
- 新しい UI コンポーネントの追加
- `docs/adr/0021-cutout-frame-crop-view.md` で決めた Frame タブ側の座標契約への変更

作業後、ADR 0021 に「Frame → Panorama 復帰時は Panorama 視点を維持する（passepartout と
`Look At Frame` で足りるため）」を追記すること。
