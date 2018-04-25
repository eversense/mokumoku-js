Object
リテラル

// オブジェクトの初期化、あるいはオブジェクトリテラルとして
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// コンストラクタとして呼び出す場合
new Object([value])


Object コンストラクタは与えられた値のオブジェクトラッパーを生成します。値が null や undefined の場合、空のオブジェクトを生成して返します。それ以外の場合、与えられた値に対応する型のオブジェクトを返します。値が元々オブジェクトだった場合には、その値自体を返します。

コンストラクタではないコンテキストで呼び出されたときは、Object は、new Object() と同じように振舞います。



function は Function型

## function と objectの違いは？

## prototaypeってなんだっけ？

## OO
### 全てがオブジェクト
Javascriptで全てはオブジェクトで、クラスベース言語でいうところのインスタンスのみだと思えば良い。

### オブジェクトのプロパティ
- オブジェクトのプロパティになっている関数がメソッド。

### newするとオブジェクトに
どの JavaScript 関数もコンストラクタとして使用できます。new 演算子をコンストラクタ関数とともに使用することで、新しいオブジェクトを作成します。

### プロトタイプオブジェクト
はて？

```
プロトタイプオブジェクト (prototypical object) という概念があります。このオブジェクトは、新しいオブジェクトの初期プロパティの取得元になるテンプレートとして使用されます
```
https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#Defining_a_class

### new 

prototypeの値を中で自動的に指定している模様

```
1. 新しいオブジェクトを作る。
2. 1 で作ったオブジェクトの [[Prototype]] 内部プロパティ (__proto__ プロパティ) に F.prototype の値を設定する。
    F.prototype の値がオブジェクトでないのなら代わりに Object.prototype の値を設定する。
4. F を呼び出す。このとき this の値は 1 で作ったオブジェクトとし、引数には new 演算子とともに使われた引数をそのまま用いる。
5. 3 の返り値がオブジェクトならそれを返す。そうでなければ 1 で作ったオブジェクトを返す。
```
http://nanto.asablo.jp/blog/2005/10/24/118564

### 継承
* クラス（？）の```prototype```に紐付けて継承ができる
* __proto__ で継承もとを確認できる
* プロトタイプチェーンに従ってプロパティを継承する。これに従ってメソッドを探す。

```
function Person() {}
Person.prototype.work = function() {
  console.log("いきています");
}

function SalesPerson() {}
SalesPerson.prototype = Object.create(Person.prototype);

var person = new Person();
typeof(salesPerson);
// object

console.log(person.__proto__)
// Person {}
// {work: ƒ, constructor: ƒ}
// work:ƒ ()
// constructor:ƒ Person()
// __proto__:Object ... __proto__たどると、Objectになる

var salesPerson = new SalesPerson();
typeof(salesPerson);
// object

salesPerson.work();
// いきています

console.log(salesPerson.__proto__)
// Person {}

salesPerson.toString()
// [Object, Object]
// SalesPerson -> Person -> Object と辿ってメソッドを探している
```