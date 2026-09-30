# three.js と Spark の導入（#51）

エディタの 3D 表示のため、`three@0.184.0` と `@sparkjsdev/spark@2.1.0` を devDependencies に固定して加えた。版はコアのフロントエンド（comfyui_frontend_package 1.53.6）に同梱されている版と一致させている。その sourcemap のパスは `three@0.184.0` と `@sparkjsdev+spark@2.1.0_three@0.184.0` で、バンドル内の three の revision は `184` である。バンドル内に見える `REVISION = "180"` は、Spark の worker に埋め込まれた three のものである。

Spark 2.1.0 の dist は、WebAssembly を `data:application/wasm;base64` で埋め込み、worker を blob URL で起動する。別ファイルを参照しないので、現在の単一ファイルのビルド（vite の lib モード）のままで動き、拡張の配信パスにも `import.meta.url` にも依存しない。ただし、`worker-src` で blob を許可しない CSP のもとでは動かない。確認のため、生成したスプラットをエディタのモーダル内に描く一時的なデモを作った。ユーザーが実際の ComfyUI で描画を確認したあと、デモは削除した。

同梱した場合の大きさは約 5.8MB（gzip で約 1.9MB）で、大半は Spark が占める。ComfyUI は `web/` の `**/*.js` をすべて拡張として読み込むので（`server.py` の `get_extensions`）、`.js` のチャンクに分けても遅延読み込みにはならない。そのため、three.js と Spark は、ComfyUI が自動では読み込まないドットで始まるフォルダに `.js` として出力し、エディタを開いたときに読み込む方針とする。`.mjs` も `**/*.js` の対象外になるが、コアが明示的に MIME を登録しているのは `.js` だけで（`utils/mime_types.py`）、`.mjs` は Python の既定の対応表と OS の設定に依存するため、第一案にはしない。ドットで始まるフォルダが実際に読み込みの対象外になるかは #66 で確認し、問題があれば `.mjs` を次の候補とする。

`package-lock.json` は git で管理する。devDependencies は完全固定し、`npm ci` からのビルドで `web/panorama_suite.js` がバイト単位で一致することを確認した。
