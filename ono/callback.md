# クロージャ

```js
function makeFunc() {
  var name = "ono";

  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();

myFunc();
```

- クロージャは関数とその関数が作られた環境という 2 つのものの組み合わせです
- 興味深い点は、内部関数 displayName() がそれが実行される前に外部関数から返されているという事です。
- myFunc は makeFunc が実行された時に作られた displayName 関数のインスタンスへの参照
- displayName のインスタンスはレキシカル環境への参照を保持し、そこに name 変数が存在します
- このため、makeFunc が実行された時に、 name 変数が残っていて "ono" が alert に渡されます
