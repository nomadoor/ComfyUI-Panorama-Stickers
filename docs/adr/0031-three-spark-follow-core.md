# ADR 0031: three.js と Spark はコアの版に合わせ、Spark 2.1 の回避は版を上げたら消す

## Status

Accepted

## Date

2026-10-08

---

エディタとノード上の表示の three.js と Spark は、このパッケージの `package.json` に版を固定して同梱する。コアのフロントエンド（`comfyui_frontend_package`）も three.js と Spark を持つが、拡張から使える API として出していないので、同じ版を自分で持つ（#51）。版はコアに合わせ、コアが上げたら合わせて上げる。今は three.js 0.184.0、Spark 2.1.0 で、コアのフロントエンド 1.53.10 と一致している。

Spark 2.1.0 は、並べ直しの結果（RGBA32UI のテクスチャ）を three を通さず生の `texSubImage2D` でアップロードし、その前に `UNPACK_FLIP_Y_WEBGL` だけを false にする。three は premultiply のテクスチャのアップロードのあと `UNPACK_PREMULTIPLY_ALPHA_WEBGL` を true のまま残すので、その状態で Spark がアップロードすると Chrome がタブを落とす（STATUS_BREAKPOINT。背景が VIDEO で 3DGS がある Scene で、視点を動かした瞬間）。Spark 2.2.0 はこのアップロードを `uploadU32DataTextureRows` にまとめ、両方の値を false にしてから送り、元に戻す。

コアより先に Spark を上げると、このパッケージだけが別の版になり、コアに合わせる方針から外れる。そこで 2.1.0 のまま、`web_src/pano_three_view.js` の `settleUnpack` が描くたびに二つの値を three の状態を通して false に戻す（`docs/threejs-spark-integration.md` の「WebGL の unpack 状態」）。

## Consequences

- コアのフロントエンドが Spark 2.2.0 以上に上がったら、このパッケージの Spark も同じ版に上げ、`settleUnpack` とそのテスト、`docs/threejs-spark-integration.md` の該当の節を消す。ただし `settleUnpack` は害が無いので、消すのは Spark を上げて実機で落ちないことを確かめてからにする。
- 見落とさないように、`tests/test_three_spark_core_pin.py` が次の二つで落ちる：
  - このパッケージの Spark が 2.2.0 以上になったのに `settleUnpack` が残っている。
  - 入っているコアのフロントエンドの Spark が 2.2.0 以上（`uploadU32DataTextureRows` を含む）になったのに、このパッケージの Spark が 2.1 のまま。コアのフロントエンドが見つからない環境では、この確認は飛ばす。
- Spark を上げるときは、このパッケージが Spark の内部に触れている所（`web_src/pano_spark_views.js` の `updateInternal`・`driveSort`・`sortWorker`、`PackedSplats` の共有）が新しい版でも成り立つかを確かめる。
