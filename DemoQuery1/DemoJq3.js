/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 6/16/13
 * Time: 2:46 PM
 * To change this template use File | Settings | File Templates.
 */

$(function (){

    $("#mybtn").on("click",function (){
       $(".second").text("Button Clicked")
           .css("background-color","blue");
    });

    $("#mybtn").on("mouseout",function (){
        $(".second").text("")
            .css("background-color","yellow");

    });
});