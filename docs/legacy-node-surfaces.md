# 旧ノードのノード上の表示

旧ノード `PanoramaStickers`・`PanoramaPreview`・`PanoramaCutout` のノード上の表示（node surface）の規則を定める。
`PanoramaPreview` は Panorama Preview（`PanoramaPreviewNode`）に置き換え、表示名「Panorama Preview (legacy)」と deprecated の印で残す（`docs/preview-node.md`）。
これらのノードは今のまま残し、表示は広げない。開発を続けるのは Panorama Studio だけで、その表示は
`docs/studio-node-surface.md` にある。旧 `PanoramaStickers` と `PanoramaCutout` の表示は Panorama Studio と同じ
DOM surface（`web_src/pano_preview_runtime.js` の `attachPanoramaPreviewImpl`）を使い、`PanoramaPreview` は専用の runtime を使う。

この文書が持たない規則：Panorama Studio の表示と、旧 `PanoramaStickers` がそれと共有する規則（`docs/studio-node-surface.md`）、
エディタの操作（`docs/editor-interaction.md`）。

## この文書が owner である規則

| 規則 | Python | JS | test |
|---|---|---|---|
| `PanoramaStickers` の互換と表示順 | `nodes.py` `PanoramaStickersNode` | `web_src/pano_stickers_node_surface.js` `buildStickersDisplayEntries`・`reconcileExternalStickerState`、`web_src/pano_editor_extension.js` `createPanoEditorExtension`（widget の並びの移行） | `tests/test_node_schema_contract.py`、`tests/pano_stickers_node_surface.test.mjs`、`tests/pano_editor_extension.test.mjs` |
| `PanoramaStickers` の toolbar と `Add Image`・画像の drop | — | `web_src/components/PanoStickersNodeSurface.vue`、`pano_stickers_node_surface.js` `stickersNodeSurfaceModel`、`web_src/pano_sticker_file_import.js` `isStickerImageFile`・`bindStickerDropTarget` | `tests/pano_stickers_node_surface_contract.test.mjs`、`tests/pano_stickers_node_surface.test.mjs`、`tests/pano_sticker_file_import.test.mjs` |
| `PanoramaStickers` の選択・変形・lock・delete・front / back・`Back to Initial` | — | `pano_stickers_node_surface.js` `applyStickersNodeSurfaceAction`・`createStickersNodeSurfaceSession`、`web_src/pano_sticker_affordance.js` `hitStickerSelectionAffordance`・`drawStickerSelectionHandles` | `tests/pano_stickers_node_surface.test.mjs`、`tests/pano_sticker_affordance.test.mjs`、`tests/pano_stickers_node_surface_contract.test.mjs` |
| `PanoramaStickers` の flush と upload 待ち | — | `pano_editor_extension.js` `createPanoEditorExtension`（`state_json` の queue barrier） | `tests/pano_editor_extension.test.mjs` |
| `PanoramaStickers` の背景の VIDEO | — | `web_src/pano_preview_video.js` `createLoopingPreviewVideo`、`web_src/pano_preview_runtime.js` `attachPanoramaPreviewImpl`（`syncLegacyVideo`）、`PanoStickersNodeSurface.vue` | `tests/pano_preview_video.test.mjs`、`tests/pano_stickers_node_surface_contract.test.mjs` |
| `PanoramaPreview` の互換（ports、`image` 出力） | `nodes.py` `PanoramaPreviewNode` | `pano_editor_extension.js` `createPanoEditorExtension`（`image` 出力の復元） | `tests/test_nodes_preview.py`、`tests/test_node_schema_contract.py`、`tests/pano_editor_extension.test.mjs` |
| `PanoramaPreview` の専用 runtime（image / video、再生切替、drag・wheel、teardown） | — | `web_src/pano_preview_previewnode.js` `attachPreviewNodeRuntime`、`web_src/pano_preview_node_surface.js` `shouldTogglePreviewPlaybackFromKey`・`measurePreviewCanvasSize` | `tests/pano_preview_node_surface.test.mjs`、`tests/pano_preview_node_surface_contract.test.mjs`、`tests/pano_preview_video.test.mjs`、`tests/test_nodes_preview.py` |
| `PanoramaPreview` の fullscreen と標準 button（Panorama Preview の IMAGE・VIDEO で新しいウィンドウが開くときは右上が `Open viewer` になる。規則は `docs/preview-node.md` の「ノード上」） | — | `pano_preview_node_surface.js` `createPreviewFullscreenController`、`web_src/components/PanoPreviewNodeSurface.vue`、`pano_editor_extension.js` `createPanoEditorExtension` | `tests/pano_preview_node_surface.test.mjs`、`tests/pano_preview_node_surface_contract.test.mjs`、`tests/pano_editor_extension.test.mjs`、`tests/browser/preview_entry.spec.js` |
| `PanoramaCutout` の toolbar と layout | — | `web_src/components/PanoCutoutNodeSurface.vue`・`PanoCutoutAspectPicker.vue`、`web_src/pano_cutout_node_surface.js` `cutoutNodeSurfaceModel`・`fitCutoutNodeFrame`・`layoutCutoutNodeContext`・`CUTOUT_NODE_FRAME_PADDING`・`CUTOUT_NODE_SURFACE_MIN_HEIGHT` | `tests/pano_cutout_node_surface.test.mjs`、`tests/pano_cutout_node_surface_contract.test.mjs` |
| `PanoramaCutout` の aspect・roll・pan | — | `pano_cutout_node_surface.js` `parseCutoutAspectPair`・`applyCutoutNodeSurfaceAction`・`beginCutoutRollGesture`・`updateCutoutRollGesture`・`panCutoutShotByScreenDelta` | `tests/pano_cutout_node_surface.test.mjs`、`tests/pano_cutout_node_surface_contract.test.mjs` |
| `PanoramaCutout` の FOV | — | `web_src/pano_cutout_view_math.js` `stepCutoutFovPairByWheel`、`pano_cutout_node_surface.js` `applyCutoutNodeSurfaceAction`（`step-fov`）、`web_src/pano_wheel.js` `bindWheelCaptureRoot` | `tests/pano_cutout_view_math.test.mjs`、`tests/pano_cutout_node_surface.test.mjs`、`tests/pano_wheel.test.mjs` |
| `PanoramaCutout` の state（新規 node の 1:1 frame、Add Frame、削除） | — | `pano_cutout_node_surface.js` `createCutoutNodeSurfaceSession`・`buildCutoutAddFrameAction`、`pano_editor_extension.js` `createPanoEditorExtension`（新規 node の frame） | `tests/pano_cutout_node_surface.test.mjs`、`tests/pano_editor_extension.test.mjs` |
| `PanoramaCutout` の lifecycle と performance | — | `pano_preview_runtime.js` `attachCutoutPreview`・`attachPanoramaPreviewImpl` | `tests/pano_cutout_node_surface_contract.test.mjs` |

## PanoramaStickers

### Compatibility Contract

- node id `PanoramaStickers`、既存input / output、widget意味論を維持する。
- `state_json` schemaとERP座標規約を変更しない。
- background、paint / raster、internal / external stickerは、coverageを含めてbackendと同じdisplay orderで描画する。
- external stickerを別種のUI objectとして扱わず、通常stickerと同じ選択・変形経路を使う。
- 次の規則は Panorama Studio の表示と同じで、`docs/studio-node-surface.md` の「表示の構成」に置く：
  Node 2.0とLegacy node rendererで同じDOM surface実装を使う、canvasはnodeの利用可能領域を満たし縦横resizeへ追従する、
  hidden overlay領域はcanvas操作を遮らない。camera viewは一時状態とし、workflowへ保存しない（「見回し」）。

### Surface Contract

- toolbarはcanvas上端に固定し、左端に `Full Editor` を置く。
- toolbarの `Add Image` は既存Vue file pickerを使い、OSの画像選択画面から画像を追加する。
- `Add Image` は通常control色とし、表示中stickerがない場合はcanvas下部に追加案内を表示する。
- Vue mount成功後だけ標準 `Open Stickers Editor` widgetを隠す。
- mount失敗時は標準widgetを表示したままとし、editorへの導線を失わない。
- toolbarは固定幅のcontrolで構成し、値や状態変化でlayoutを動かさない。
- resize時に余剰widget間隔や黒い中間frameを作らない。

### Interaction Contract

- sticker clickは選択とmoveを同じpointer gestureで開始する。
- 選択stickerはhandleで等比scaleとrotateを行える。
- locked stickerは選択できるが、move / scale / rotate / deleteを拒否する。
- toolbarからlock、delete、display listのfront / backを操作できる。lock / delete / front / backはmodalと同じstate意味論で動く。
- 外部入力stickerの右端actionはmodalと同じ `Back to Initial` iconへ切り替え、接続時の位置・size・rotationへ戻す。
- node surfaceにfocusがあるとき、Delete / Backspaceで選択stickerを削除できる。
- front / backはsticker配列内だけでなくpaint group / raster objectを含む実際のdisplay orderを更新する。
- `Add Image` と画像file dropは、既存modalと同じく現在のcamera view中央へ30度のstickerを追加する。
- file dropはDOM preview面を直接drop targetにし、ComfyUIのnode `onDragOver` / `onDragDrop` hookも外側のfallbackとして維持する。Node 2.0とLegacyで同じ追加処理を通す。
- 画像の検証、decode、uploadはmodalと同じ共有moduleを使い、upload完了後にassetとstickerを1回で保存する。prompt queueはupload完了を待つ。
- 選択枠、corner / rotate handle、accent color、hover / active cursorはmodalと同じ共有affordanceを使う。
- 空所drag / wheel は Panorama Studio の表示と同じ（`docs/studio-node-surface.md` の「見回し」）。
- gesture中はlive draftを描画し、pointerupで1回だけ`state_json`へcommitする。
- Escapeは未確定gestureをcancelする。
- prompt queue、Full Editor開始、teardown前に未確定gestureをflushする。
- Full Editor開始時は進行中の画像operationもsettleまで待ち、成功した追加を含む最新stateを読む。

### 背景の VIDEO

- 背景の動画は先頭のframeを表示し、canvas左下の再生・一時停止を切り替えるボタン（play / pause）でloop再生（muted）・停止する。ボタンは再生できるVIDEOがあるときだけ出す。
- surfaceが見えなくなったノード（collapse、subgraphの中や別のgraphを表示中）は、VIDEOを一時停止する。
- 編集の前に再生を一時停止する（toolbarの操作、画像のdrop、Delete / Backspace）。
- 背景の VIDEO（`createLoopingPreviewVideo`。`PanoramaStickers` と `PanoramaCutout` の表示が使う）は自動で再生しない。既定は止めて先頭のframeを表示し、
  再生は操作でだけ始め、再生中はループする。エディタのモーダルが開いても止めない（再生中ならモーダルの下でもデコードを続ける）。
- `PanoramaCutout` の表示には再生の操作がないので、背景の VIDEO は先頭のframeのままである。

### Scope Boundary

surfaceに含めない操作:

- stickerのreplace / duplicate
- paint / mask
- multi-selectionとmarquee selection
- crop、opacity

これらは既存modalの責務として維持する。

### Runtime Contract

- 旧Stickers previewのprobe、自動DOM / Legacy切替、Legacy canvas編集を使用しない。
- backgroundとexternal stickerの実行結果鮮度は独立して管理し、`bg_erp` の接続変更でexternal sticker textureを失効させない。
- animation frameは同時に1件だけ予約する。
- teardown済みsurface sessionは、遅れて完了した画像operationからのstate更新を拒否する。
- 次の規則は Panorama Studio の表示と同じで、`docs/studio-node-surface.md` の「描画と後始末」に置く：
  shared render coreとdescriptorを使い第二rendererを作らない、image / video・state・paint・external inputを独立したrevisionとして扱う、
  replacement・connection change・executeで古いmedia cacheを無効化する、camera frameとresizeはDOM canvasだけを更新する、
  teardownの破棄・復元、raster objectのnode preview用surfaceは最大1024×512。

## PanoramaPreview

### Compatibility Contract

- node id `PanoramaPreview` を維持する。
- `erp_image`、`coverage`、`fps`、`audio` のinput port semanticsを維持する。
- `image: IMAGE` outputは、core `PreviewImage` と同様に入力 `erp_image` tensorを加工・copyせずそのまま返す。後続のTerminate系nodeへ接続できる。
- dedicated runtime `web_src/pano_preview_previewnode.js` を維持し、Cutout shared runtimeへ統合しない。
- 同じ runtime を新しい Preview（id `PanoramaPreviewNode`。`docs/preview-node.md`）の IMAGE と VIDEO にも付ける（`pano_editor_extension.js`。どちらの表示を付けるかは `docs/preview-node.md`）。そこでは画像の入力は `source`（`imageInputName`）で、`image` 出力の復元（`ensurePanoramaPreviewImageOutput`）はしない。`PANO_SCENE` は別の表示（`docs/preview-node.md` の「`PANO_SCENE` を見る」）で、この runtime は描かない。
- image解決、video muted / loop、double-click / Space再生切替、coverage、drag、wheel、inertiaを維持する。
- videoは自動再生しない。既定は停止で先頭のframeを表示し、double-click / Spaceで再生する。画面外（collapse、別のgraph、subgraphの中）では停止する（見えないかの判定は Panorama Studio と同じ `surfaceShown`。停止するだけで、src は外さない）。
- cameraは一時状態のままとし、workflowへ新しいparameterやstateを保存しない。
- Legacy canvas pathは既存挙動と標準 `Open Preview` buttonを維持する。

### Node2 Surface Contract

- Node2で新規Previewを追加するとpreview surfaceが直ちに見える。
- preview canvasはnodeの利用可能領域を満たし、nodeの縦横resizeに追従する。widget間に余剰空白や黒い中間frameを作らない。
- DOM preview上にVue surfaceを重ねる。
- node surfaceのactionはfullscreen toggle 1つだけとする。
- FOV、reset、playback、help、camera parameter、editor actionをtoolbarへ追加しない。
- fullscreen actionはDOM preview rootを直接fullscreen表示し、同じactionまたはEscapeで解除できる。
- Fullscreen APIが利用できない、または失敗した場合は既存read-only modalへ安全にfallbackする。
- Vue surfaceのmount成功後だけ標準 `Open Preview` buttonを非表示にする。
- mount失敗時は標準buttonを表示したままread-only modal導線を維持する。
- hidden overlay領域はcanvasのdrag / wheel / double-clickを遮らない。

### Runtime Contract

- Node 2.0でのwheelの捕捉は Panorama Studio の表示と同じ（`docs/studio-node-surface.md` の「見回し」）。wheelの不具合は、listenerをroot / canvas / wrapの間で動かす前に、まずその規則が満たされているかを確かめる。
- live previewのlayoutを、実行時に `node.size` を書き換えて直さない（Panorama Studioと同じ。`docs/studio-node-surface.md` の「描画と後始末」）。
- Node2 DOM camera frameはpreview canvasだけを更新し、host graph canvas全体を再描画しない。
- animation frameは同時に1件だけ予約する。
- fullscreen changeとResizeObserverはpreview再描画を要求する。
- teardownはVue app、fullscreen listener、ResizeObserver、media listener、RAF、widget hookを復元する。
- Preview変更はCutout / Stickersのattach policy、runtime、interactionを変更しない。

## PanoramaCutout

`PanoramaCutout` のノード上UIは、詳細なカメラ編集を行う第二のEditorではなく、
active frameの出力形状を素早く決めてFull Editorへ入るためのsurfaceとする。

既存のPanorama Vue component、icon、control surfaceを再利用する。

### Compatibility Contract

- node ID、port、parameter format、state format、保存したnode sizeを変えない（内部widgetのV3 UI metadataは対象内）。

### Scope

- active frameのaspect presetを選択する。
- 正の有限値2つから任意のaspect ratioを設定する。
- landscape / portraitを入れ替える。
- primary dragでactive frameのyaw / pitchを移動する。
- wheelでactive frameのH FOV / V FOVをtangent spaceで一様に変更する。
- `Shift + drag` でframe rollを変更する。
- toolbarに現在のroll角を表示する。
- toolbarは左からFull Editor、frame追加/削除、aspect、roll、orientation swap、helpの固定gridとする。
- 常に見える `Full Editor` actionから既存modalを開く。
- shotが無い場合もFull Editor actionは利用できる。
- locked shotではaspectとrollの変更を禁止する。

### surfaceに含めない操作

- node上でのH FOV / V FOV数値編集
- dragによるframe resize
- paint、mask、複数shot編集
- node専用のundo / redo履歴

### Layout Contract

- node surfaceはcanvasを主面とする構成を使う。
- toolbarはcanvas上端に浮かせ、Full Editor、frame追加/削除、aspect、roll、orientation swap、helpだけを置く。
- toolbarの各列と数値領域は固定し、値や桁数が変わってもbox、icon、隣接controlを移動させない。
- toolbar controlは24px control / 26px icon button、6px radius、
  `#1b1e25` control、`#252932` hover、共通emphasis token、2.3px icon strokeを使う。
- Full EditorはmodalのAdd Frameと同じemphasis tokenを使い、通常時は暗い青、hover / focus時は明るい青、active時は押下色とする。
- button押下時に位置をずらすtransform animationは使わない。
- 独立editorを思わせるheading、常設の操作説明、camera parameter rowは置かない。
- frame内外ともpanoramaを表示し、frame外だけを半透明のpassepartoutで暗くする。
- 85°安全角を越える広角shotでは全面の広角contextを先に描き、正確なframe投影を最後に重ねて黒い未描画領域を残さない。単一のrectilinear面で180°近傍のframe外を連続投影することはできないため、この境界fallbackではframe端の連続性よりframe内の正確さを優先する。
- output frameは左右下32px、上58px（workspace 32px + toolbar 26px）のsafe paddingを引いた矩形へ最大サイズでaspect-fitする。
- surfaceがpadding合計より小さい場合は、対向する2つのpaddingの比を保ったまま、合計が `surfaceの大きさ − 1` になるまで縮める（`fitCutoutNodeFrame`）。
- DOM stageは260pxの最小高を持ち、基準paddingによってframeが実用不能な大きさまで潰れないようにする。
- frameの位置と大きさを直接dragするhandleは置かない。
- node resizeではframeを同じpadding規則で再計算し、shot state自体は変更しない。
- Node 2.0では内部`state_json`をV3 advanced inputとして扱い、そのDOM grid rowを完全に除外する。
  Cutoutの縦方向の余剰はpreview rowだけへ割り当て、Stickersのvisible widget間へ配分しない。
- Node 2.0でnodeを縦へ伸ばしてもCutoutの`coverage` / `output_megapixels`間、および
  Stickersの`bg_color` / `fps`間に余剰空白が入らない。advanced input表示時も同じとする。
- workflow上の保存sizeは維持するが、stageの最小高を満たさない表示ではComfyUIのwidget layoutによりnode全体を拡張する。

### Aspect Contract

- presetは `1:1`、`4:3`、`3:2`、`16:9` を提供し、現在のlandscape / portraitを保つ。
- custom ratioは幅と高さの正の有限値を受け付け、無効値はstateへ書かない。
- orientation swapは現在ratioの幅と高さを入れ替える。
- aspect popoverはtrigger再押下、値の適用、またはpopover外のpointer downで閉じる。
- aspect変更時は、表示中frameのcamera scaleを保ちながら新しい最大aspect-fit gateから
  H FOV / V FOVを再導出する。
- `aspect_id` は既存形式のまま更新し、新schemaを追加しない。
- preset、custom ratio、orientation swap後にnode frame、Full Editor、実行結果のaspectが一致する。

### Roll Contract

- modifierなしのprimary dragは、pointer-down時のcameraとframeを固定基準にyaw / pitchを更新する。
- `Shift + primary drag` は、固定frame中心に対するpointer角度差からrollを更新する。
- drag中はnode previewだけがlive draftを読み、pointer-upで一度だけ `state_json` へ確定する。
- pointer cancel、lost capture、Escape、teardownではdraftを破棄する。
- modalのFrame viewにも同じ `Shift + drag` roll開始操作がある。roll の方向は node と modal で一致する。
- 既存のmodal roll affordanceと互換操作は維持する。
- node toolbarはroll角を符号込み・小数1桁の固定幅で表示する。
- roll表示をダブルクリックすると0°へ設定する。
- 0°近傍の自動スナップは行わない。legacy Alt+Shiftの15°スナップだけを維持する。

### FOV Contract

- wheel upはFOVを狭め、wheel downはFOVを広げる。
- Node 2.0でのwheelの捕捉は Panorama Studio の表示と同じ（`docs/studio-node-surface.md` の「見回し」）。
- H FOV / V FOVのtangent比を維持し、frameのaspectと画面上の固定geometryを変えない。
- 連続wheel入力は1 gestureとしてlive draftへ反映し、180ms停止後に一度だけstateへ確定する。
- prompt queue、Full Editor開始、pointer gesture開始、teardownでは確定待ちwheel gestureをflushする。
- locked shotまたはshotなしではFOVを変更しない。

### State Contract

- 永続状態の唯一の権威は既存の `state_json` widgetとする。
- node専用の永続cacheや別schemaを追加しない。
- prompt queue前とFull Editor開始前に、確定待ちのnode editを既存barrierでflushする。
- Full Editorは同じ `state_json` を読む。
- 既存workflowとの互換性のため、shotが0件のstateとERP passthrough実行は維持する。
- 新規Cutout nodeは1:1のframeを1件持って開始する。workflow復元時は保存済みstateを優先し、0件を自動補完しない。
- shotが0件のEditorとnode surfaceではAdd Frameを利用でき、追加フレームはERPの2:1ではなく1:1で開始する。
- modalとnode surfaceの両方からactive frameを明示的に削除できる。0件になったnode surfaceはAdd Frame actionを表示する。
- shotが0件のnode surfaceも通常のpanorama viewerとして描画し、dragとwheelで視点を決められる。
  dragはPanoramaPreviewと同じviewport / FOV基準の移動量と共有invert設定を使う。
  Add Frameはその時点のyaw / pitchへ既定sizeの1:1 frameを作る。中央を塞ぐempty-state表示は使わず、下端に短い補助文だけを表示する。
- CutoutのClear Allはpaint、mask、imageを消去するがactive frameを保持する。

### Lifecycle

- node surfaceはCutoutの既存DOM previewと同じmountに所属する。
- node removalまたはpreview teardown時にVue app、listener、pointer capture、timer、一時stateを破棄する。
- workflow restoreでwidgetやcallbackを重複追加しない。
- ClassicとNodes 2.0の両方で同じ公開state契約を使う。

### Performance Contract

- node上のcamera操作フレームはDOM preview canvasだけを更新し、ComfyUIのgraph canvas全体を再描画しない。
- rendererのstate同期はtextureとscene stateの更新だけを行い、非表示の既定viewを余分に描画しない。
- inertia中を含め、同じpreview runtimeが同時に複数のanimation frameを予約しない。
- 操作中もbackground、image sticker、paint / raster layerの合成順序を維持する。
