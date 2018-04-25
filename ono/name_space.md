# [JavaScript] 名前空間とは

- JavaScriptが提供している名前空間のメソッドはない
- 各自で最善と思える名前空間の定義をする

名前空間定義
```js
if (typeof MYAPP === "undefined"){
  var MYAPP = {};
}
```

短縮した書き方
```js
var MYAPP = MYAPP || {};
```

名前空間を作成する関数
```js
var MYAPP = MYAPP || {};

MYAPP.namespace = function(ns_string){
  var parts = ns_string.split('.'), // . で区切った配列
      parent = MYAPP, // グローバルオブジェクトのアプリ名
      i;

  // 先頭のグローバルを取り除く
  if ( parts[0] === "MYAPP"){
    parts = parts.slice(1); // 先頭を削除
  }

  for ( i = 0; i < parts.length; i += 1){
    // プロパティが存在しなければ作成する
    if ( typeof parent[parts[i]] === "undefined"){
      parent[parts[i]] = {}; // モジュールのオブジェクト生成
    }
    parent = parent[parts[i]];
  }
};
```

名前空間準備
```js
var MYAPP = {
  modules: {
    moduleA: {},
    moduleB: {}
  }
};
```

以下のようなnamespace()メソッドで定義できる
```js
MYAPP.namespace('MYAPP.modules.moduleA');
MYAPP.namespace('MYAPP.modules.moduleB');
```
