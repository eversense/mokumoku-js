# callbackに関して

## callbackとは

Aの処理した後に、Bの処理してね、と明示的に呼び出す仕組み
https://nkmrkisk.com/archives/1157

HTMLが読み込まれたら〜
ボタンが押されたら〜

### なんで必要なの？

jsの特徴
* シンクルスレッドで動作
* キューに登録された順番に関数を実行
  * キューに登録される順番は、まちまち（同期したり非同期だったり）

おそらく下記理由で、callbackが必要なのかと（本人談）

* シングルスレッドという理由で処理がロックされうる
* Web用の言語として開発された（？）ので、ロックされると使い勝手がわるくなる
* Webの特性上、同期的というよりは非同期（●●したら、xxする）などが多い

JavaScriptの同期、非同期、コールバック、プロミス辺りを整理してみる
https://qiita.com/YoshikiNakamura/items/732ded26c85a7f771a27

## callbackの使い方
### hello world

```js

console.log(1);
setTimeout(function(){
  console.log("hello world");
}, 2 /* msec */ );
console.log(2);
console.log(3);
setTimeout(function(){}, 1);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);
console.log(12);
console.log(13);
console.log(14);
```

```
1
2
3
...
13
14
hello world
```

という結果になる。
キューには順に処理が詰まるれるけど、setTimeoutのために順番が変わる。

### setTimeoutの秒数を0にしたら？

```
console.log(1);
setTimeout(function(){
  console.log(2);
}, 0 /* msec */ );
console.log(3);
```

1 > 2 > 3 になると思うじゃん。
キューにつんで、setTimeoutの処理をなんかしているせいで 1 > 3 > 2 と表示される。

### 自前で組んでみる

途中！
