var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var data = fs.readFileSync("./index.html","utf8");

app.get('/', function(request, response) {
  response.send(data);
});

var data = fs.readFileSync("./script.js","utf8");

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
