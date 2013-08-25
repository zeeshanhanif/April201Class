/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/25/13
 * Time: 2:45 PM
 * To change this template use File | Settings | File Templates.
 */
$(function (){

    $("#nextPage").bind("click",function (){
        $.mobile.changePage("#page2","flip",true,false);
    });

    $("#page2").bind("pageshow",function (event,ui){
       alert("Hello world");
    });

})
