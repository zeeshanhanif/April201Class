/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 6/9/13
 * Time: 2:20 PM
 * To change this template use File | Settings | File Templates.
 */



$(function (){
    $("body").html("<div class='header' id='a1'>Hello 201</div><div class='details' id='a2'>Hello 251</div>");

    alert($("#a1").text());
    $("#a1").css("background-color","red");

    $(".details").css("background-color","blue")

    $("div").hide();

    $("div")
        .width(200)
        .height(100)
        .text("New Text")
        .fadeIn(2000);

    var a = $("div");
    var b = a.width(200);
    var c = b.height(200);


    //$("div:last").html("Bootcamp");
    //$("div")[0].innerHTML= "Bootcamp";

})