/**
 * Created with JetBrains WebStorm.
 * User: zeeshan
 * Date: 5/19/13
 * Time: 2:27 PM
 * To change this template use File | Settings | File Templates.
 */

var ageSpan = document.getElementById("age");
//alert(ageSpan.innerHTML);
var value = parseInt(ageSpan.innerHTML);

setInterval(function (){
    value++;
    ageSpan.innerHTML=value;
    var body = document.getElementsByTagName("body")[0];

    if(value>10 && value <=20){
        body.style.backgroundColor="blue";
    }
    else if(value>20 && value <=30){
        body.style.backgroundColor="green";
    }
    else if(value>30 && value <=80){
        body.style.backgroundColor="purple";
    }
    else if(value>80){
        body.style.backgroundColor="black";
    }
},200);