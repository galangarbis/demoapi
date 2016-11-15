var express = require('express');

var app=express();

app.listen(3000, function() {
   console.log('Server is running on port 3000'); 
});
//learn Route with express
app.get('/',function(req,res) {
    res.send("Hello from Express JS");
});

app.get('/Admin',function(req,res){
    res.send("it's Admin Page");
});

app.get('/Member',function(req,res){
    res.send("it's Member Page");
});