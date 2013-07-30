/**
 * Created with JetBrains WebStorm.
 * User: MohammedTaha
 * Date: 7/28/13
 * Time: 12:24 PM
 * To change this template use File | Settings | File Templates.
 */
(function (){

    $(function(){
        addHandlers();
    });

    function addHandlers(){
        $("#register").bind("click",function (){
            $("body").empty();
            $("body").html("<h1>Registration Form</h1>" +
                "<form >" +
                "Name: <input type='text' id='name'><br> " +
                "Age: <input type='text' id='age'><br> " +
                "Fees: <input type='text' id='fees'> <br>" +
                "<input type='button' id='submit' value='Submit'> " +
                "</form>");

            $("#submit").on("click",function (){
                $.ajax({
                    url:"/register",
                    type:"post",
                    data : {
                        name:$("#name").val(),
                        age:$("#age").val(),
                        fees:$("#fees").val()
                    }
                }).done(function (response){
                       alert("success");
                       alert("res "+response);
                });
            });
        });

    }
})();
