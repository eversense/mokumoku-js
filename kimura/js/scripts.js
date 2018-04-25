/**
 * コンスタラクタ
**/
let Greeting = function(){
  this.name = "kimura";
};
/**
 * 即時関数にしてメソッドを定義する
**/
(function(){
  // public method
  Greeting.prototype.sayHello = function(name) {
    this.name = name;
    return "Hello " + name;
  };

  // private method
  privateMethod = function() {
    //エラーになることが正しい
  };
})();


