
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


// undefined
var person;
typeof(person);

// object
var person = {};
typeof(person);

// function
function Person() {}
typeof(Person);

var person = new Person();
typeof(person);


//proto.prototypeは自動で生成
// オブジェクトの定義
function Employee() {}
Employee.prototype.work = function() {
  console.log("会社のいぬです");
}

var employee = new Employee();
employee.work(); // 会社のいぬです

function Engineer() {
  this.work = function() {
    console.log('わんわん');
  };
}
var shun = new Engineer();
shun.work(); //'わんわん';