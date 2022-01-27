const express = require("express");
const bodyparser = require("body-parser");

const app = express();

var urlencodedParser = bodyparser.urlencoded({ extended: true });


app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
}) 
    
app.post("/",urlencodedParser,function(req,res){
    console.log('Got body:', req.body);
    res.sendStatus(200);
}) 

app.listen("3000", function(req,res){
    console.log("Server Start on port no 3000");
})