# Frame view の Roll を右レールの回転ノブに置き換える

対象ブランチ: `feat/cutout-frame-camera-editing`

四隅チップは廃止する。Roll は**右レール（`.pano-frame-rail`）に常設した回転ノブ**で操作する。
併せて Alt ショートカット、レールの視覚的強調、ツールチップ位置の3点も直す。

roll の数学（`resolveFrameRollDeg` / `shortestAngleDeltaRad`）、履歴の1回コミット、
Inspector 同期、水平ガイド／回転グリッド描画は**そのまま使う**。

---

## 1. なぜ変えるか

- 四隅チップは画像の上に常時4つ乗るため、どう styling しても散らかる
- 下部中央のダイヤルは `.pano-paint-dock`（`left:50%; bottom:24px`）と同じ場所で干渉する
- 直線スライダーは回転操作のジェスチャと合わない

右レールは `right: 12px; top: 50%` の**右辺垂直中央**にあり、ペイントドックと衝突しない。
レール幅が変わらなければ `reservedSide` も変わらないので、**safe rect は 1px も減らない。**

---

## 2. 削除するもの

- `web_src/components/PanoFrameRollHandles.vue`（ファイルごと）
- `PanoModal.vue` の import と描画
- `uiState.frameRollHandles` とその同期処理
- `hitFrameRollHandle()`（`pano_cutout_view_math.js`）とそのテスト
- `FRAME_ROLL_HANDLE_HIT_PX` / `FRAME_ROLL_HANDLE_HIT_TOUCH_PX` / `FRAME_ROLL_HANDLE_ARM_PX`
- `getHoveredFrameRollHandle()`
- `canvas.onpointerdown` の四隅判定による roll 分岐
- CSS の `.pano-frame-roll-handles` / `.pano-frame-roll-chip`

`FRAME_ROLL_CURSOR` は **残す**（§4 の Alt 時に使う）。

---

## 3. 回転ノブ

### 配置

`PanoFrameRail.vue` の3つ目の要素として、アスペクト比・向き切り替えの下に置く。
**レールの幅を変えないこと**（既存ボタンと同じ 44px 幅に収める）。幅が変わると safe rect が動く。

### 見た目

**`rotate_90` のアイコンと紛らわしくならないこと。** グリフ主体のボタンにせず、
**目盛り付きのダイヤル**にする。形が違えば混同しない。

```text
      ╭───────╮
      │  ╱|╲  │   外周に目盛り
      │ ─ ● ─ │   中心から現在角を指すインジケータ
      │  ╲|╱  │   0° の位置だけ強いティック
      ╰───────╯
```

- 外周に等間隔の目盛り（15° 刻み）
- 現在の `roll_deg` を指す針
- 0° のティックだけ濃くする
- ドラッグ中は中央に角度の数値（`formatParamValue` と同じ書式、`12.4°`）
- ダブルクリックで 0° にリセット（履歴1件）
- 背景・角丸は既存トークン（`--pano-float-bg` / `--pano-float-radius`）

Vue コンポーネント `PanoFrameRollKnob.vue` を新規作成し、`uiState.frameRollKnob` から
`{ visible, disabled, rollDeg, dragging, armed }` を受けて**描画だけ**を行う。
SVG で描く。新しい依存を足さない。

### 入力

**入力の所有は `pano_editor.js`**（既存アーキテクチャに合わせる）。

- ノブ要素に `data-frame-roll-knob` を付ける
- `pano_editor.js` はマウント後に `root.querySelector("[data-frame-roll-knob]")` で参照を取る
  （`frameRailEl` / `toolRailEl` と同じやり方）
- その要素に `pointerdown` を張り、`setPointerCapture` してドラッグを処理する

角度計算は**ノブの中心**を基準にする。

```text
center     = ノブ要素の中心（CSS px）
startAngle = atan2(p.y - center.y, p.x - center.x)
以降は既存 roll_frame と同じ:
  差分を (-π, π] に正規化して accumulatedRad に加算
  resolveFrameRollDeg(start.roll_deg, accumulatedRad, { shiftKey, altKey })
```

`setPointerCapture` によりポインタはノブの外へ出られる。**中心から離れるほど角度分解能が上がる**
ので、粗く回してから外へ引いて追い込む操作になる。これは意図した挙動なので妨げないこと。

`readOnly` では非表示。`editor.mode !== "frame"` でも非表示。

---

## 4. Alt + キャンバスドラッグ

慣れたユーザー向けの近道として、**Alt を押しながらキャンバスをドラッグすると roll** にする。

- 押下時に `e.altKey` が真なら `roll_frame` を開始する。中心は**ゲート中心**
- `e.preventDefault()` を必ず呼ぶ（Windows / Linux で Alt 単独がメニューバーへフォーカスするため）
- Alt を押している間、キャンバスのカーソルを `FRAME_ROLL_CURSOR` にする
- ペイントツール選択中も Alt が優先（ペイントより roll が勝つ）。read-only では無効

### 修飾キーの衝突（重要）

`resolveFrameRollDeg()` は現在 **Alt を「0° 磁石の無効化」**に使っている。
Alt でドラッグを開始すると Alt は押されっぱなしになるため、磁石が常時無効になってしまう。

**解決**: interaction に `altStarted` を持たせ、Alt 起動のドラッグでは `altKey: false` を渡す。

```text
altStarted = true  → resolveFrameRollDeg(..., { shiftKey, altKey: false })
altStarted = false → 従来どおり altKey を渡す（ノブからのドラッグ）
```

`resolveFrameRollDeg()` 自体は変更しない。

### 修飾キーの追跡

`editor.altModifier` を追加し、`keydown` / `keyup` で更新する。
既存の `onModifierKeyChange`（ctrl/meta → `marqueeModifier`）と同じ場所に足す。

**`window` の `blur` でも false に戻すこと。** Alt+Tab で離脱すると押しっぱなし判定が残る。

---

## 5. Alt 押下時のフィードバック

Alt を押している間、**ノブを armed 表示**にする。キャンバスのショートカットが生きていることを示す。

- `uiState.frameRollKnob.armed = editor.altModifier === true`
- armed のとき、ノブの枠または針を `var(--pano-accent)` にする
- Alt を離したら戻す

ノブ以外のレールボタンは変えない。

---

## 6. Frame モードのレールを強調する

`.pano-frame-rail` は Frame モードでしか出ないモード固有の UI なので、
他のフローティング UI と同じ見た目だと役割が伝わらない。

- 背景または境界に `var(--pano-accent-dimmed)`（既存トークン）を薄く乗せる
- 主張しすぎないこと。アクセントの縁取り程度に留める
- ホバー・押下時の挙動は既存ボタンと同じ

---

## 7. ツールチップの位置を直す

`.pano-frame-rail` のボタンにホバーすると、ツールチップが**ボタンの上**に出る。
レールは画面右端にあるので、**ボタンの左横**に出すのが正しい。

`showTooltipFor()`（`pano_editor.js` L9766 付近）には既に左ツールレール用の分岐がある。

```js
const inToolRail = !!expectedTarget.closest(".pano-floating-left");
if (inToolRail) {
  variant = "tool-rail";
  x = rect.right - hostRect.left + 10;                       // ボタンの右横
  y = rect.top - hostRect.top + rect.height * 0.5 - mh * 0.5; // 垂直中央
}
```

これを右側用に**鏡像**で追加する。

```js
const inFrameRail = !!expectedTarget.closest(".pano-frame-rail");
if (inFrameRail) {
  variant = "frame-rail";
  x = rect.left - hostRect.left - mw - 10;                    // ボタンの左横
  y = rect.top - hostRect.top + rect.height * 0.5 - mh * 0.5;
  // 既存と同じく pad でクランプする
}
```

`PanoTooltip.vue` に `pano-tooltip-frame-rail` クラスを追加し、CSS で
`tool-rail` と同じ体裁（矢印の向きがあるなら左右反転）にする。

---

## 8. 画像側のフィードバック

手はレール、目は画像になるため、**ドラッグ中のキャンバス表示は必須**。既存を流用する。

- 水平ガイド線（既存）
- 回転グリッド（既存。無ければ追加）
- どちらもドラッグ中のみ。終了で消す

角度の数値はノブ中央に出すので、キャンバス側の角度ラベルは出さない
（`showFrameRollTooltip()` を使っているなら削除してよい）。

---

## 9. やってはいけないこと

1. ノブを `rotate_90` と似たグリフボタンにする
2. レールの幅を変える（safe rect が動く）
3. 下部中央にコントロールを置く（ペイントドックと衝突）
4. 画像の上に常設のマーカーを描く
5. ノブを押してから別コントロールが開く二段構成にする
6. `resolveFrameRollDeg()` / `shortestAngleDeltaRad()` の中身を変える
7. 履歴コミット・Esc 復帰・Inspector 同期の契約を変える
8. Alt の `preventDefault` を省く
9. `blur` での修飾キーリセットを省く

---

## 10. テスト

### 契約テスト（`tests/test_cutout_camera_modal_contract.py`）

1. `PanoFrameRollHandles` が `pano_editor.js` / `PanoModal.vue` / ファイルシステムのいずれにも存在しない
2. `PanoFrameRail.vue` が `data-frame-roll-knob` を持つ
3. `pano_editor.js` に `editor.altModifier` と `window` の `blur` リセットがある
4. `showTooltipFor` に `.pano-frame-rail` の分岐と `frame-rail` variant がある
5. Alt 起動時に `altKey: false` を渡す分岐（`altStarted`）がある

### `tests/pano_cutout_view_math.test.mjs`

6. 既存の `resolveFrameRollDeg` / `shortestAngleDeltaRad` テストを維持
7. `hitFrameRollHandle` のテストを削除

### 手動受け入れ条件

1. Frame タブの右レールに、目盛りと針のあるノブが常時見える
2. ノブと向き切り替えボタンが**一目で区別できる**
3. ノブを掴んで回すと回転する。外へ引くと細かく合わせられる
4. ノブのダブルクリックで 0° に戻り、履歴が1件だけ増える
5. ドラッグ中、ノブ中央に角度が出て、画像側にガイドとグリッドが出る
6. Alt を押すとノブがアクセント色になり、キャンバスのカーソルが回転アイコンになる
7. Alt + キャンバスドラッグで回転する。Alt 起動でも 0° 磁石が効く
8. Alt を押したまま Alt+Tab で離脱して戻ると、armed 表示が解除されている
9. Frame モードのとき右レールが他のフローティング UI と区別できる色になっている
10. 右レールのボタンにホバーすると、ツールチップが**上ではなく左横**に出る
11. 左ツールレールのツールチップは従来どおり右横に出る（退行していない）
12. 画像の上に常設のマーカーが無い
13. ペイントドックを開いてもノブと干渉しない
14. read-only ではノブが出ず、Alt ドラッグも効かない

---

## 11. 検証

```bash
node --check web_src/pano_editor.js
node --test tests/pano_cutout_view_math.test.mjs
python3 -m unittest discover -s tests -p "test_*.py"   # 失敗集合を増やさないこと
npm run build:web
```

作業後、`docs/adr/0021-cutout-frame-crop-view.md` に
「Frame view の roll は右レールの回転ノブで操作し、Alt + キャンバスドラッグを近道とする。
画像の上に常設の操作マーカーは置かない」を追記すること。
