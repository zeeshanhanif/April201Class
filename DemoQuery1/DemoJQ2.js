/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 6/16/13
 * Time: 2:07 PM
 * To change this template use File | Settings | File Templates.
 */
$(function (){

    $("div").each(function(i){
        alert(i);
        alert($(this).html());
    });

    /*
    $("div").on("mouseover",function (){
        //$("div").toggleClass("divSelected");
        //alert($("div").css("background-color"));
        $("div").css(
            {
                "background-color":"blue",
                "border": "5px solid green"
            }
        );
    })
*/
})