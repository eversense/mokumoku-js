// alert("Hello");


let count = function(){
    var i = 0; 

    function myClosure() { //クロージャ
        return i++;
    }
    return myClosure;
}

var c = count();
let sayHello = function(){
  alert(c())
};


var clickMe = document.getElementById("helloButton");
clickMe.onclick = sayHello;

