var func1 = function() {
  // API通信1
  console.log('function1');
};
var func2 = function() {
  // API通信2
  console.log('function2');
};
var func3 = function() {
  // API通信3
  console.log('function3');
};

Promise.all([func1, func2, func3]).then(function(results){


  console.log(results);
  // 成功
}).catch(function(error){
  // 失敗
});