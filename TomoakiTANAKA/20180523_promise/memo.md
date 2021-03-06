
## Promiseとは

* 非同期処理を抽象化したオブジェクトとその仕組

* 順番をきちんと制御したい、でもcallbackは使いたくない、時につかう？
  * でもそれなら同期処理の仕組み、といったほうが正しいきがするんだが…

## 例
### コールバックの例
```
getAsync("fileA.txt", function(error, result){
    if(error){// 取得失敗時の処理
        throw error;
    }
    // 取得成功の処理
});

// callback地獄
A(function(a){
  B(a, function(b){
    C(b, function(c){
      done(c); // ABC
    });
  });
});
```

### Promiseの例
```
var promise = getAsyncPromise("fileA.txt"); 
promise.then(function(result){
    // 取得成功の処理
}).catch(function(error){
    // 取得失敗時の処理
});

// thenでつなぐだけ
A().then(B).then(C).then(done);  // ABC
```

* 文法が限定的になる（読みやすいけど、自由はなくなる）

http://azu.github.io/promises-book/#chapter1-what-is-promise

## 文法

* Promiseオブジェクトをつくりつつ、そのなかに処理を突っ込む

```
var promise = new Promise(function(resoleve, reject) {
    console.log('hoge');
});
```

* thenで、コールバックを設定する
* then().then().then()....というので直列に

```
then(成功関数, 失敗関数)
```

* allで並列に
* allの中の処理が全部終わるまでまつ
  * 終わったていうのは、promise.resolve()で
  * resolveの中に、引数をいれることもできる

```
# 例
Promise.all([func1, func2, func3]).then(function(results){
  console.log(results);
  // 成功
}).catch(function(error){
  // 失敗
});
```


------

## 疑問

### 並列の時は順番きにしない？？

* その通り
* 並列処理の中で順番きにするなら、thenでつなぐ（もはや並列ではない）

### Promiseを使う意味は読みやすいからだけ？

そのとおり。簡単にプログラム書くだけの仕組み

### 同期/非同期
同期
* 処理順が固定される
非同期
* どう動くかの順番はわからない

つらつら書くと、順番が保証されない（処理がある）
なので、順番を保証するために、コールバックを使う

### async/awaitとの関係は

Promiseの糖衣構文（syntac sugar）
なので、Promiseわかってないと、そっちもわからず

### EventEmitter
これはPromiseとは別のはなし。node.jsの話。
onClick(xxx)の仲間

EventEmitterを継承することで、on / emitを使えるようになる。

```
on
emit（イベント名、引数）
```

### frontend / backendの違い

frontend = pure js ... 最初からwindowがイベントを持っているから、event emitterはない（というか最初からあるともいえる）
server side = node.js ... windowがないからEventEmitterがある