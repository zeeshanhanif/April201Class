/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 6/2/13
 * Time: 2:16 PM
 * To change this template use File | Settings | File Templates.
 */
/*
var pappu = true;

alert(pappu);
alert(typeof pappu);
*/

(function (){

var a = 6;
a = "Hello world";

alert(window.a);
var b = 5;
var c = sum(a,b);
//var d = multiply(a,b);

var obj1 = {
    name:"Zeeshan",
    age:15,
    eating:function (foodItem){
        alert(this.name+" eating "+foodItem);
    }
};

var obj2 = obj1;
alert(obj1.name);
obj1.eating("badam");

var arr = [6,3,64,5];

var multiply = function (x,y){
    return x*y;
}

function sum(x,y){
    return x + y;
}

})();