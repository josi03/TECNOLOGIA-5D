var express = require('express');
var app= express();
const path= require('path');

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/ciao', function(req,res){
    res.sendFile(path.join(__dirname,'ciao.html'));
});

app.listen(3000, function(){
    console.log('example app listening port 3000!');
});