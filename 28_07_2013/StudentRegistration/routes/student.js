/**
 * Created with JetBrains WebStorm.
 * User: MohammedTaha
 * Date: 7/28/13
 * Time: 12:51 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
mongoose.connect("mongodb://student:student@ds037758.mongolab.com:37758/studentregistration");

var schema = {
    name: String,
    age:Number,
    fees:Number
}

var Student = mongoose.model("Student",schema);

exports.register = function (req,res){
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.fees);

    var stu1 = new Student({name:req.body.name,age:req.body.age,fees:req.body.fees});
    //var stu1 = new Student(req.body);
    stu1.save(function (err,data){
        if(err){
            res.send("Error in save data");
        }
        else {
            res.send("Saving successful");
        }
    });
}