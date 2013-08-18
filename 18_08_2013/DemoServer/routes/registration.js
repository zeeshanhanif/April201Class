/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 8/18/13
 * Time: 2:21 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
mongoose.connect("mongodb://ssuet:ssuet@ds041198.mongolab.com:41198/registrationsystem");
//mongoose.connect("mongodb://localhost/registrationsystem");
var studentSchema = {
    name: String,
    age : Number
};

var Student = mongoose.model("Student",studentSchema);

exports.save= function (req,res){
    console.log(req.body.name);
    console.log(req.body.age);
    var stu1 = new Student(
        {
            name:req.body.name,
            age:req.body.age
        });
    stu1.save(function (err,data){
        if(err){
            res.send("Error in saving data");
        }
        else {
            res.send("Saved");
        }
    });
}


exports.showStudents =function (req,res){
    Student.find({age:23},function(err,data){
        if(err){
            res.send('Error');
        }
        else {
            res.send(data);
        }
    })
}