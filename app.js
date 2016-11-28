var express = require('express');
var http = require('http');
var app = express();
var server =  http .createServer(app);
var PORT = process.env.PORT || 2000;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.use('/', express.static(__dirname));

server.listen(PORT);
console.log("server started on: " + PORT);

var desktopSocket;
var mobileSockets = {};

var io = require('socket.io')(server,{});
io.sockets.on('connection', function(socket){
    socket.on('mobile-connection', function(response){
        socket.id = Math.random();
        mobileSockets[socket.id] = socket;
        console.log("mobile connection");
        desktopSocket.emit('player-connect', {id: socket.id});
    });
    socket.on('desktop-connection', function(response){
        desktopSocket = socket;
        console.log("desktop connection");
    });
    socket.on('update-position-device', function(response){
        if(desktopSocket)
            desktopSocket.emit('update-position-server', {x: response.posX, y: response.posY, id: socket.id})
    });
});
