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

#### async/awaitとの関係は

Promiseの糖衣構文（syntac sugar）
なので、Promiseわかってないと、そっちもわからず

## 参考文献
一問一答形式で非常によくまとまっている
* https://qiita.com/soarflat/items/1a9613e023200bbebcb3