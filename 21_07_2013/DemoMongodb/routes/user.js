
/*
 * GET users listing.
 */

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/newssuet');
mongoose.connect('mongodb://ssuet:ssuet@ds037358.mongolab.com:37358/ssuet');

var schema = {
    name:String,
    age: Number
}
var Student = mongoose.model('Student', schema);

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.addStudent = function (req,res){

    var stu1 = new Student({name:"hello world",age:23});
    stu1.save(function (err,data){
        if(err){
            console.log("error = "+err);
        }
        else {
            console.log(data);
        }

        res.send("done");
    });
}