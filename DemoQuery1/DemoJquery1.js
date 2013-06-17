/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 6/16/13
 * Time: 1:32 PM
 * To change this template use File | Settings | File Templates.
 */

$(function (){

   //$("body").html("<div>Hello 201 Again</div>");
    alert("A");
    //$("body > div > p").html("New Text");
    //$("p[id]").html("New Text");
    $("div > p:first").css("background-color","blue");
    //$("#mytable tr")
    //$("tr")
    //$("table > tr")
    $("#mytable tr:even").css("background-color","green");
    $("#mytable tr:odd").css("background-color","red");

});