// before
function asyncFunction() {
  return 42;
}

let result = asyncFunction();
console.log(result); // 42

// after（asyncをつかう。asyncはPromiseのsyntaxシュガー）
async function asyncFunction() {
  return 42;
}

asyncFunction().then(result => {
  console.log(result); // 42
});

// Promiseでかくとこんな感じ
// Promiseオブジェクトを返却する。処理成功時の返り値っぽいものをresolveで定義する
function asyncFunction() {
  return new Promise(function (resolve, reject) {
    resolve(42);
  });
}

// 中身がPromiseかを確認したかった…
let obj = asyncFunction();
typeof(obj); // Object
console.log(Object.prototype.toString.apply( obj )); // [object Object]

asyncFunction().then(function (value) {
  // 非同期処理成功
  console.log(value); // 42
}).catch(function (error) {
  // 非同期処理失敗。呼ばれない
  console.log(error);
});


// ===================================================

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
