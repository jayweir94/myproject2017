var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");


app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});
 
 app.get('/GAA', function(req, res) {
	console.log("GAA page ");
    res.sendFile(path.join(__dirname + '/GAA.html'));
});

app.get('/Football', function(req, res) {
	console.log("Football page ");
    res.sendFile(path.join(__dirname + '/Football.html'));
});

app.get('/Rugby', function(req, res) {
	console.log("Rugby page ");
    res.sendFile(path.join(__dirname + '/Rugby.html'));
});
 
 app.get('/Champions', function (req, res) {
 res.send('Cork City');
 })
 
 app.get('/Champs', function (req, res) {
 res.send('Dublin GAA 3 IN-A-ROW');
 })
 
 app.get('/2018', function (req, res) {
 res.send('#MAYO4SAM2018');
 })
 
 
app.listen(8080);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})