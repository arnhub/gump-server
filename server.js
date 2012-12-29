'use strict';

var nodeStatic = require('node-static'),
    http = require('http'),
    staticServer = new nodeStatic.Server('./gump-app/dist'),
    port = 8080,
    game;

game = {
  status: 'server-confirmed',
  server: 'player1',
  player1: {
    firstName: 'Hubert',
    lastName : 'SABLONNIERE',
    email    : 'hubert.sablonniere@gmail.com',
    score    : 8
  },
  player2: {
    firstName: 'Arnaud',
    lastName : 'SPANNEUT',
    email    : 'arnaud.spanneut@gmail.com',
    score    : 11
  }
};

http.createServer(function (request, response) {

  if (request.url.match(/^\/api\/game/)) {
    response.end(JSON.stringify(game));
  } else {
    staticServer.serve(request, response);
  }

}).listen(port);
