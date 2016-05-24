var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('/'));

http.listen('3000', function() {
  console.log('Talk app is running on 3000!');
});

app.get('/', function(req, res) {
  res.sendfile('./dist/index.html');
});

app.get('/*', function(req, res) {
  res.sendfile('./dist/index.html');
});

io.on('connection', function (socket) {
  socket.on('send message', function (msg) {
    console.log(msg)
    io.emit('send message', msg);
  });
});
