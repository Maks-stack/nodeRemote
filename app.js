var express = require('express');
var http = require('http');
var app = express();
var server =  http .createServer(app);
var PORT = process.env.PORT || 2000;

app.get('/', function(req, res){
    console.log("Max Crashes");
    res.sendFile(__dirname + '/index.html');
});
app.use('/', express.static(__dirname));

server.listen(PORT);
console.log("server started on: " + PORT);

var io = require('socket.io')(server,{});
io.sockets.on('connection', function(socket){

    console.log('socket connection');

    socket.on('test', function(response){
        console.log('test' + response.args);
    });
});