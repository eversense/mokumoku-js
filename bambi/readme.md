# もくもくjs
## プロトタイプベース言語
クラスベース言語はクラスとインスタンスという概念があるのに対し、
プロトタイプベース言語はPrototypical Objectというオブジェクトがあるだけ。

## オブジェクト
オブジェクトは結局単なるHashMap
```js
var myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
```

```js
"hoge".length
// => 4

"hoge"['length']
// => 4
```

## メソッド
オブジェクトのプロパティになっている関数がメソッド

## prototype
一旦テンプレートとしてプロトタイプなオブジェクトがある
それを元にインスタンスをnewで生成すると、プロトタイプを継承したインスタンス（プロトタイプも作ったインスタンスもオブジェクト）ができる
プロトタイプベースのオブジェクト指向言語では、オブジェクトは別のオブジェクトをプロトタイプとしてできていると考える。

## コンストラクタ
コンストラクタとは、関数オブジェクトのこと。
全ての関数は、オブジェクトを生成するコンストラクタになる可能性があります。



オブジェクトA をプロトタイプとしているオブジェクトB は、「 オブジェクトA に対し 暗黙の参照を持っている 」という状態になります。