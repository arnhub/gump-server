'use strict';

var nodeStatic   = require('node-static'),
    http         = require('http'),
    staticServer = new nodeStatic.Server('./gump-app/app'),
    port         = 8080;

http.createServer(function (request, response) {
  
  if (request.url.match(/^\/api/)) {
    response.end('foobar');
  } else {
    staticServer.serve(request, response);
  }

}).listen(port);
