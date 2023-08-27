
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/",function(req,res){
    res.sendFile(__dirname + "/calculater.html");
});
app.post("/",function(req,res)
{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var final = num1+num2;

    res.send("you are done" +final);
});
app.get("/bmicalculater",function(req,res)
{
    res.sendFile(__dirname +"/bmicalculater.html" );
});
app.post("/bmicalculater",function(req,res)
{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height*height);
    res.send("The BMI is " +bmi);

});
app.listen(30000,function(){
    console.log("all is dddddddddddd well");
});