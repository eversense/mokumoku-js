
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