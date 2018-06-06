# async/await
## async
Promiseの糖衣構文（syntac sugar）

## await

async function内でPromiseの結果（resolve、reject）が返されるまで待機する（処理を一時停止する）演算子のこと。
以下のように、関数の前にawaitを指定すると、その関数のPromiseの結果が返されるまで待機する。


```
async function sample() {
    const result = await sampleResolve();

    // sampleResolve()のPromiseの結果が返ってくるまで以下は実行されない
    console.log(result);
}
```

例：

## async/awaitとPromiseの関係

Promiseの糖衣構文（syntac sugar）
なので、Promiseわかってないと、そっちもわからず

## エラー
### Referenceエラー
* Promiseとasyncがごっちゃになってる
* asyncはresolveでなく、return

```
// async awaitってこうつかいたいけどエラーがでてる
// 
// VM168:2 Uncaught (in promise) ReferenceError: resolve is not defined
//     at asyncFunc1 (<anonymous>:2:3)
//     at <anonymous>:11:1

async function asyncFunc1() {
  resolve("asyncFunc1");
}

async function asyncFunc2() {
  var result = await asyncFunc1();
  console.log(result);
  resolve("asyncFunc2");
}

asyncFunc1().then(result => {
  console.log(result);
});
```

### クラスの確認
* constructorを使えばOK

```
// 中身がPromiseかを確認したかった…
let obj = asyncFunction();
typeof(obj); // Object
console.log(Object.prototype.toString.apply( obj )); // [object Object]
```

## 参考文献
一問一答形式で非常によくまとまっている
* https://qiita.com/soarflat/items/1a9613e023200bbebcb3