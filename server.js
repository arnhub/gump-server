'use strict';

var nodeStatic = require('node-static'),
    http = require('http'),
    staticServer = new nodeStatic.Server('./gump-app/dist'),
    port = 8080,
    io,
    app,
    game = require('./model/game.js');

app = http.createServer(function (request, response) {
  staticServer.serve(request, response);
}).listen(port);

io = require('socket.io').listen(app);

var dashboard = io
    .of('/dashboard')
    .on('connection', function (socket) {
      socket.emit('game-updated', game.get());
    });