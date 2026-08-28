# PanoramaStickers Node Surface Specification

## Purpose

`PanoramaStickers` の未使用preview経路を廃止し、Cutout / Previewで確立したDOM canvas、Vue overlay、
入力捕捉、resize、teardownの構成で置き換える。node surfaceでは画像追加と単一stickerの基本配置を素早く行い、
詳細編集は既存modalへ委譲する。

## Compatibility Contract

- node id `PanoramaStickers`、既存input / output、widget意味論を維持する。
- `state_json` schemaとERP座標規約を変更しない。
- background、paint / raster、internal / external stickerはbackendと同じdisplay orderで描画する。
- external stickerを別種のUI objectとして扱わず、通常stickerと同じ選択・変形経路を使う。
- camera viewは一時状態とし、workflowへ保存しない。
- Node 2.0とLegacy node rendererで同じDOM surface実装を使う。

## Surface Contract

- canvasはnodeの利用可能領域を満たし、縦横resizeへ追従する。
- toolbarはcanvas上端に固定し、左端に `Full Editor` を置く。
- toolbarの `Add Image` は既存Vue file pickerを使い、OSの画像選択画面から画像を追加する。
- `Add Image` は通常control色とし、表示中stickerがない場合はcanvas下部に追加案内を表示する。
- Vue mount成功後だけ標準 `Open Stickers Editor` widgetを隠す。
- mount失敗時は標準widgetを表示したままとし、editorへの導線を失わない。
- toolbarは固定幅のcontrolで構成し、値や状態変化でlayoutを動かさない。
- hidden overlay領域はcanvas操作を遮らない。

## Interaction Contract

- sticker clickは選択とmoveを同じpointer gestureで開始する。
- 選択stickerはhandleで等比scaleとrotateを行える。
- locked stickerは選択できるが、move / scale / rotate / deleteを拒否する。
- toolbarからlock、delete、display listのfront / backを操作できる。
- 外部入力stickerの右端actionはmodalと同じ `Back to Initial` iconへ切り替え、接続時の位置・size・rotationへ戻す。
- node surfaceにfocusがあるとき、Delete / Backspaceで選択stickerを削除できる。
- front / backはsticker配列内だけでなくpaint group / raster objectを含む実際のdisplay orderを更新する。
- `Add Image` と画像file dropは、既存modalと同じく現在のcamera view中央へ30度のstickerを追加する。
- file dropはDOM preview面を直接drop targetにし、ComfyUIのnode `onDragOver` / `onDragDrop` hookも外側のfallbackとして維持する。Node 2.0とLegacyで同じ追加処理を通す。
- 画像の検証、decode、uploadはmodalと同じ共有moduleを使い、upload完了後にassetとstickerを1回で保存する。
- 選択枠、corner / rotate handle、accent color、hover / active cursorはmodalと同じ共有affordanceを使う。
- 空所primary dragはcameraをpanする。wheelは共有controllerで横FOVを1イベント3度変更する。
- gesture中はlive draftを描画し、pointerupで1回だけ`state_json`へcommitする。
- Escapeは未確定gestureをcancelする。
- prompt queue、Full Editor開始、teardown前に未確定gestureをflushする。
- Full Editor開始時は進行中の画像operationもsettleまで待ち、成功した追加を含む最新stateを読む。

## Scope Boundary

surfaceに含めない操作:

- stickerのreplace / duplicate
- paint / mask
- multi-selectionとmarquee selection
- crop、opacity

これらは既存modalの責務として維持する。

## Runtime Contract

- 旧Stickers previewのprobe、自動DOM / Legacy切替、Legacy canvas編集を使用しない。
- shared render coreとdescriptorを使い、第二rendererを作らない。
- image / video、state、paint、external inputを独立したrevisionとして扱い、draw loop内でstateを再生成しない。
- image / video replacement、connection change、executeで古いmedia cacheを無効化する。
- backgroundとexternal stickerの実行結果鮮度は独立して管理し、`bg_erp` の接続変更でexternal sticker textureを失効させない。
- animation frameは同時に1件だけ予約し、interaction中は低解像度、settle後は通常解像度で再描画する。
- camera frameとresizeはDOM canvasだけを更新し、host graph canvas全体を継続再描画しない。
- teardownはVue app、RAF、ResizeObserver、media callback、render core、listener、widget hookを破棄・復元する。
- teardown済みsurface sessionは、遅れて完了した画像operationからのstate更新を拒否する。
- raster objectのnode preview用surfaceは最大1024×512とし、objectごとに最新revisionだけを保持する。

## Acceptance

1. Node 2.0とLegacy node rendererの両方で同じStickers surfaceが表示される。
2. 静止画と動画がloop表示され、resize時に余剰widget間隔や黒い中間frameを作らない。
3. internal / external sticker、paint / raster、coverageを含む表示順が実行出力と一致する。
4. stickerを選択し、move / equal-scale / rotateできる。
5. lock / delete / front / backがmodalと同じstate意味論で動く。
6. 空所drag / wheelはCutout / Previewと同じcamera感度で動く。
7. Full Editorを開く直前とprompt queue前にnode上の最新編集が保存される。
8. replace、disconnect、re-execute後に古い画像や動画が復活しない。
9. remove / reconfigure / re-addで二重mount、listener、RAF、media callbackを残さない。
10. Cutout / Preview / modal / backend実行に回帰がない。
11. file pickerと画像dropから現在のview中央へstickerを追加でき、prompt queueはupload完了を待つ。
12. 選択枠、handle、accent color、hover cursorがmodalと一致する。
13. stickerがない状態では追加案内が表示され、選択後はDelete / Backspaceで削除できる。
14. 外部入力stickerを移動・拡縮・回転した後、`Back to Initial`で接続時のposeへ戻せる。
