# Cutout Node Frame Surface 仕様

## Goal

`PanoramaCutout` のノード上UIは、詳細なカメラ編集を行う第二のEditorではなく、
active frameの出力形状を素早く決めてFull Editorへ入るためのsurfaceとする。

UIとinteractionの基準はPerspective Editorの実ノードUIとし、既存のPanorama Vue
component、icon、control surfaceを再利用する。

## Scope

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

## Out of Scope

- node上でのH FOV / V FOV数値編集
- dragによるframe resize
- paint、mask、複数shot編集
- node専用のundo / redo履歴
- node ID、port、parameter formatの変更（内部widgetのV3 UI metadataは対象内）

## Layout Contract

- node surfaceはPerspective Editorと同じ、canvasを主面とする構成を使う。
- toolbarはcanvas上端に浮かせ、Full Editor、frame追加/削除、aspect、roll、orientation swap、helpだけを置く。
- toolbarの各列と数値領域は固定し、値や桁数が変わってもbox、icon、隣接controlを移動させない。
- toolbar controlはPerspective Editorと同じ24px control / 26px icon button、6px radius、
  `#1b1e25` control、`#252932` hover、共通emphasis token、2.3px icon strokeを使う。
- Full EditorはmodalのAdd Frameと同じemphasis tokenを使い、通常時は暗い青、hover / focus時は明るい青、active時は押下色とする。
- button押下時に位置をずらすtransform animationは使わない。
- 独立editorを思わせるheading、常設の操作説明、camera parameter rowは置かない。
- frame内外ともpanoramaを表示し、frame外だけを半透明のpassepartoutで暗くする。
- 85°安全角を越える広角shotでは全面の広角contextを先に描き、正確なframe投影を最後に重ねて黒い未描画領域を残さない。単一のrectilinear面で180°近傍のframe外を連続投影することはできないため、この境界fallbackではframe端の連続性よりframe内の正確さを優先する。
- output frameは左右下32px、上58px（workspace 32px + toolbar 26px）のsafe paddingを引いた矩形へ最大サイズでaspect-fitする。
- surfaceがpadding合計より小さい場合は、Perspective Editorと同じ比率で対向paddingを縮める。
- DOM stageは260pxの最小高を持ち、基準paddingによってframeが実用不能な大きさまで潰れないようにする。
- frameの位置と大きさを直接dragするhandleは置かない。
- node resizeではframeを同じpadding規則で再計算し、shot state自体は変更しない。
- Node 2.0では内部`state_json`をV3 advanced inputとして扱い、そのDOM grid rowを完全に除外する。
  Cutoutの縦方向の余剰はpreview rowだけへ割り当て、Stickersのvisible widget間へ配分しない。
- workflow上の保存sizeは維持するが、stageの最小高を満たさない表示ではComfyUIのwidget layoutによりnode全体を拡張する。

## Aspect Contract

- presetは `1:1`、`4:3`、`3:2`、`16:9` を提供し、現在のlandscape / portraitを保つ。
- custom ratioは幅と高さの正の有限値を受け付け、無効値はstateへ書かない。
- orientation swapは現在ratioの幅と高さを入れ替える。
- aspect popoverはtrigger再押下、値の適用、またはpopover外のpointer downで閉じる。
- aspect変更時は、表示中frameのcamera scaleを保ちながら新しい最大aspect-fit gateから
  H FOV / V FOVを再導出する。
- `aspect_id` は既存形式のまま更新し、新schemaを追加しない。

## Roll Contract

- modifierなしのprimary dragは、pointer-down時のcameraとframeを固定基準にyaw / pitchを更新する。
- `Shift + primary drag` は、固定frame中心に対するpointer角度差からrollを更新する。
- drag中はnode previewだけがlive draftを読み、pointer-upで一度だけ `state_json` へ確定する。
- pointer cancel、lost capture、Escape、teardownではdraftを破棄する。
- modalのFrame viewにも同じ `Shift + drag` roll開始操作を追加する。
- 既存のmodal roll affordanceと互換操作は維持する。
- node toolbarはroll角を符号込み・小数1桁の固定幅で表示する。
- roll表示をダブルクリックすると0°へ設定する。
- 0°近傍の自動スナップは行わない。legacy Alt+Shiftの15°スナップだけを維持する。

## FOV Contract

- wheel upはFOVを狭め、wheel downはFOVを広げる。
- Node 2.0ではDOM widget rootを`tabindex="0"`かつ`data-capture-wheel="true"`とし、
  frame surfaceへのpointer enterでrootへfocusを移してからwheelを受け取る。
- H FOV / V FOVのtangent比を維持し、frameのaspectと画面上の固定geometryを変えない。
- 連続wheel入力は1 gestureとしてlive draftへ反映し、180ms停止後に一度だけstateへ確定する。
- prompt queue、Full Editor開始、pointer gesture開始、teardownでは確定待ちwheel gestureをflushする。
- locked shotまたはshotなしではFOVを変更しない。

## State Contract

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

## Lifecycle

- node surfaceはCutoutの既存DOM previewと同じmountに所属する。
- node removalまたはpreview teardown時にVue app、listener、pointer capture、timer、一時stateを破棄する。
- workflow restoreでwidgetやcallbackを重複追加しない。
- ClassicとNodes 2.0の両方で同じ公開state契約を使う。

## Performance Contract

- node上のcamera操作フレームはDOM preview canvasだけを更新し、ComfyUIのgraph canvas全体を再描画しない。
- rendererのstate同期はtextureとscene stateの更新だけを行い、非表示の既定viewを余分に描画しない。
- shotが0件のdrag / inertia中は内部render解像度を50%へ下げ、表示rectは維持する。操作終了後の最終frameは100%解像度で描画する。
- inertia中を含め、同じpreview runtimeが同時に複数のanimation frameを予約しない。
- 操作中もbackground、image sticker、paint / raster layerの合成順序を維持する。

## Acceptance

1. preset、custom ratio、orientation swap後にnode frame、Full Editor、実行結果のaspectが一致する。
2. node resizeでframeはpadding内へaspect-fitし、camera stateは変化しない。
3. frame外にも同じpanoramaの周辺領域が表示され、frame外だけが暗くなる。
4. 通常dragはyaw / pitchを移動し、wheelはaspectを維持してH FOV / V FOVを変更する。
5. `Shift + drag` rollはpointer-upで一度だけ確定し、modalの方向と一致する。
6. Full Editor actionは常時見え、shot無しでも利用できる。
7. shot無し・locked shot・preview teardownを安全に処理する。
8. 既存workflowのnode ID、port、state format、保存node sizeが変わらない。
9. Node 2.0でnodeを縦へ伸ばしてもCutoutの`coverage` / `output_megapixels`間、および
   Stickersの`bg_color` / `fps`間に余剰空白が入らない。advanced input表示時も同じとする。
10. 新規nodeとAdd Frameは1:1を生成する。Delete後はnode上のAdd Frameだけで復帰でき、Clear Allはactive frameを保持する。
