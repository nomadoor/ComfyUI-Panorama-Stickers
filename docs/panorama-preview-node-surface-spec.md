# PanoramaPreview Node Surface Specification

## Purpose

`PanoramaPreview` の既存image / video viewerを、`PanoramaCutout` で確立した全面canvas、
Vue overlay、固定配置、入力捕捉、teardownの知見に合わせる。
Previewへ編集機能やcamera stateの永続化は追加しない。

## Compatibility Contract

- node id `PanoramaPreview` を維持する。
- `erp_image`、`coverage`、`fps`、`audio` のport semanticsとoutputなしの契約を維持する。
- dedicated runtime `web_src/pano_preview_previewnode.js` を維持し、Cutout shared runtimeへ統合しない。
- image解決、video muted / loop / autoplay、double-click / Space再生切替、coverage、drag、wheel、inertiaを維持する。
- cameraは一時状態のままとし、workflowへ新しいparameterやstateを保存しない。
- Legacy canvas pathは既存挙動と標準 `Open Preview` buttonを維持する。

## Node2 Surface Contract

- preview canvasはnodeの利用可能領域を満たし、nodeの縦横resizeに追従する。
- DOM preview上にVue surfaceを重ねる。
- node surfaceのactionはfullscreen toggle 1つだけとする。
- FOV、reset、playback、help、camera parameter、editor actionをtoolbarへ追加しない。
- fullscreen actionはDOM preview rootを直接fullscreen表示し、同じactionで解除できる。
- Fullscreen APIが利用できない、または失敗した場合は既存read-only modalへ安全にfallbackする。
- Vue surfaceのmount成功後だけ標準 `Open Preview` buttonを非表示にする。
- mount失敗時は標準buttonを表示したままread-only modal導線を維持する。
- hidden overlay領域はcanvasのdrag / wheel / double-clickを遮らない。

## Runtime Contract

- Node2 DOM camera frameはpreview canvasだけを更新し、host graph canvas全体を再描画しない。
- animation frameは同時に1件だけ予約する。
- fullscreen changeとResizeObserverはpreview再描画を要求する。
- teardownはVue app、fullscreen listener、ResizeObserver、media listener、RAF、widget hookを復元する。
- Preview変更はCutout / Stickersのattach policy、runtime、interactionを変更しない。

## Acceptance

1. Node2で新規Previewを追加するとpreview surfaceが直ちに見える。
2. nodeを縦横にresizeするとcanvasが利用可能領域へ追従し、widget間に余剰空白や黒い中間frameを作らない。
3. fullscreen button以外のnode-surface actionを表示しない。
4. fullscreenへ入り、同じbuttonまたはEscapeで戻れる。
5. 静止画と動画のdrag / wheelが従来どおり動く。
6. 動画のautoplay / loopとdouble-click / Space再生切替を維持する。
7. Legacy Previewの表示、drag、wheel、標準buttonを維持する。
8. Node2 / LegacyのCutout表示と操作を変更しない。
