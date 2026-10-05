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

## Playback Contract (state v2)

状態 v2 のノード上の表示の再生（`web_src/pano_node_playback.js`）。`PanoramaStickersNode` のために作り、そのノードは #92 で外した。今は Panorama Studio の表示（`PanoStudioNodeSurface.vue`、#91）が、表示フレームの背景の VIDEO と `port` の素材のフレームを出すのに使う。Studio の表示には再生ボタンが無いので、下の再生ボタンの項は今は使われていない。旧 `PanoramaStickers` は変えない。

- node surfaceが表示するフレーム（表示フレーム）はノードごとの一時状態で、`state_json` にも
  `node.properties` にも保存しない。最初は frame 0 で、reloadやworkflowを開き直すと frame 0 に戻る。
- 再生・一時停止を切り替えるボタン（play / pause）を1つだけ、canvas左下に置く。表示するのは、sceneが時間を持つとき
  （エディタのタイムラインと同じ `isTimed`）か、背景のVIDEOがあるとき、`port` のStickerの素材のMP4
  （`pano_sticker_input_videos`、RGBA の IMAGE バッチは PNG の列 `pano_sticker_input_frames`）があるときだけ。背景のVIDEOは、ノードの
  実行結果の `pano_input_videos`（`bg_media` が2フレーム以上のとき）か、上流のLoadVideoが読むファイルで、
  エディタと同じ候補順で選ぶ。読めないVIDEOは次の候補へ進む。toolbarには置かず、シークバーや時刻表示も出さない。
- 再生は表示フレームから Timeline fps で進み、Timeline の終わりで frame 0 に戻って繰り返す。各フレームのStickerは共有evaluator（エディタの
  `workingSkyLayers` / `surfacePoseStickers` と同じ）で評価する。背景のVIDEOはエディタと同じ状態機械
  `pano_video_playback.js` で同期して再生し、音は出さない（muted）。`port` のStickerの素材のMP4は、
  エディタと同じく再生ヘッドに従う（`createVideoFollower`、#83）。Timelineの長さは、Clip rangeに長さのない
  `port` のStickerでは素材の終わりまで延ばす。
- 一時停止は画面に出ているフレームで止まる（エディタの停止と同じ規則：一時停止したVIDEOが表示する
  PTS ≤ currentTime のフレームに再生ヘッドと静止画を合わせ、シークしない。ADR 0024）。もう一度押すとそのフレームから再生を続ける。一時停止中の背景は、そのフレームの
  VIDEOの静止画（最大幅2048）を描く。
- 一時停止中はそのフレームで編集できる。ノード上で変えられるのはKeyframeのないLaneだけで、その値は
  どのフレームでも同じなので、どのフレームで編集しても結果は同じ（静的な値を書く）。Keyframeのある
  Laneはノード上では変えない（docs/timeline-ui.md）。
- 表示フレームが frame 0 に戻るのは、背景のVIDEOが別のものに替わったとき、Timelineが短くなって
  表示フレームに届かなくなったとき、再生できるもの（時間・VIDEO）がなくなったとき。
- 編集の前に再生を一時停止する：toolbarの操作（Full Editor・Add Image・lock・delete・front / back・
  Back to Initial）、画像のdrop、Delete / Backspace、再生中のSticker上でのpointerdown（そのフレームで
  一時停止し、表示どおりの位置で選択・dragを続ける）。見回し（空所drag・wheel）では止めない。
- Space キーは割り当てない（canvas上の Space は ComfyUI の pan）。
- 再生していないときはrAFもvideo frame callbackも持たない。再生中は表示されたVIDEOフレーム（VIDEOがないときは
  時計）ごとに1回描く。
- VIDEO要素（背景と `port` のStickerの素材の2つ）はsurfaceの中に置き、`opacity:0` で隠す（`visibility:hidden` や `display:none` では
  requestVideoFrameCallback が来ない）。
- surfaceが見えなくなったノード（collapse、subgraphの中や別のgraphを表示中、widgetが隠れたとき。
  surfaceの要素がpageにないか幅0）は、一時停止してVIDEOのsrcを外す（表示フレームは保つ）。
  一時停止中でも外す。見えるようになると同じVIDEOを読み直し、表示フレームを出す。ResizeObserverで
  すぐに、また描画のたびに確かめる。node remove / graph clear では状態機械、VIDEO要素、
  rAF / video frame callbackを破棄する。
- 読めなかったVIDEOのURLは、候補から一度消えたら（再実行や接続変更）もう一度試す。

## Panorama Studio Surface (#91)

`PanoramaStudio` は同じDOM canvas、shared three.js view、teardownを使い、Vue overlayだけを
`PanoStudioNodeSurface.vue` に替える（ADR 0029）。

- 上端の固定高さのbarに、状態と `Open Editor` を置く。状態は撮るもの（`ERP`、`Camera · Perspective`、
  `Camera · 360°` / `180°`）、出力の画素数、上限（4096）に収めたときの元の大きさ、auto で `bg_media` が
  無いときの注記を示す。注記の欄は空でも場所を保ち、controlを動かさない。
- 状態は実行前から `state_json` と `output_size`・`coverage` で決める（`web_src/pano_studio_status.js`、
  Python の `_studio_output_size` と `tests/test_studio_status_parity.py` で一致させる）。`hFOV_max` は
  media を読まない Timeline の frame で求める（見積もり）。
- 実行後は、実行が返した大きさ（`ui` の `pano_output_size`）を見積もりより優先する。VIDEO・IMAGE batch・
  port の media・上流の Scene は Timeline の長さや coverage を変えるため。使うのは、実行時の media の接続
  （background・sticker・scene）が今と同じで、かつ `pano_output_size.key`（`state_json`・`output_size`・
  `coverage`・`bg_color` の hash、`_studio_run_key` / `studioRunKey`）が今の値と一致するときだけで、実行後に
  編集したら見積もりに戻る。状態はこれらの入力が変わったときだけ計算し直す。接続（link）を変えずに上流の
  中身を変えたとき（LoadImage で別の画像を選ぶ、上流のノードの widget を変えるなど）は検出しないので、
  実行し直すまで前の実行の結果を示す。
- auto の `bg_media` の幅は、直近の実行結果の `pano_bg_width`、無ければ接続した画像、または node が
  再生用に読む VIDEO file の幅とする。実行前は frontend が preview に読む画像の幅に従うため、それが
  `bg_media` の実際の幅と違えば、実行までは表示が実行結果と違うことがある。わからない間は大きさを
  `auto` と示す。上流の Scene の `bg_media` は実行結果からだけわかる。
- 実行前は、背景と sky Sticker・paint を Timeline の最初の frame で描き（live の描画）、drag / wheel で
  見回すだけとする。world Sticker と 3D の素材（`scene`）は描かない。注記の欄の先頭に `Not run yet` と示す。
  Sticker の選択・drag・削除、画像の追加と drop、再生ボタンは持たない。surface の大きさは出力の比で変わらない。
- 一度実行すると、surface は常に直近の実行の出力を示す（ADR 0029）。実行は出力（`first_frame`、動画なら最初の
  frame）を元の大きさの PNG で temp に書き（`TEMP_FILES` に登録、縮小しない）、`ui` で返す。出力が ERP のとき
  （Camera が無いか、隠したか、`projection` が `erp`）は `pano_output_erp` に `coverage` を添えて返し、
  パノラマはその画像だけを背景に描いて見回す。sky Sticker と paint は重ねない（3D・world・上流の Scene も
  すでに入っている）。`coverage` 180 なら前半球として描く。`perspective` の Camera のときは `pano_output_frame`
  で返し、surface はそれを平らな画像として、比を保ったまま上端の bar の下（surface の上から 38px より下）に
  収めて描く（余白は黒、切り取らない、surface の大きさは変えない）。見回しはしない。
- 実行の後に入力が実行と合わなくなっても（上の `pano_output_size` と同じ条件：media の接続と
  `pano_output_size.key`）、出力を示し続け、注記の欄の先頭に `Edited — run to update` と示す。合っている間は
  この注記を出さない。どちらの注記も同じ欄に入り、長ければ省略記号で切る（layout shift なし）。
- 画像を読み込めるまでは live の描画を示す。読み込めなかったとき（再起動で temp が消えたなど）は live の描画に
  戻し、注記を `Run output unavailable — run again` にする。読み込みに失敗した file は、次にこの node が実行
  される（`executed` が届く。cache から同じ `ui` が送り直されたときも含む）まで読み直さない。実行のたびに一度だけ
  読み直す。画像は結果の file ごとに一度だけ読んで decode し、node を外すと手放す。collapse や非表示の間は
  読まない。
- Camera の ERP は Camera の向きで撮った ERP なので、実行は `pano_output_erp` に撮った回転（Camera の frame 0 の
  `yaw_deg`・`pitch_deg`・`roll_deg`、Camera が無いか隠したときは `null`）を `rotation` として添える。パノラマは
  その回転（`studioRunQuaternion`）で ERP の球を回して World の向きに戻して描く。run が `core/render.py` の
  `_rays` で回したものの逆で（`tests/test_studio_run_erp_orientation.py`）、二つの描き方を切り替えても向きは
  跳ばない。実行の後に Camera を回しても、示す出力の向きは変わらない。
- `port` の Sticker の vFOV は状態に書かない派生値なので（`docs/scene-state-v2.md`）、実行の後に port の
  素材が読み込まれても `state_json` は変わらず、実行と合ったままになる。エディタの inspector は、`port` の
  Sticker の V FOV を素材から求めた値で示し、無効にする（`stickerParamEnabled`）。Sticker には上下の辺の
  handle がないので、vFOV だけを変える操作もない。

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
