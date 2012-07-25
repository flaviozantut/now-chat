var httpServer = require('http').createServer(function(req, response){ /* Serve your static files */ })
httpServer.listen(8080);

var nowjs = require("now");
var everyone = nowjs.initialize(httpServer);


      
everyone.now.distribute = function(message){
  // this.now exposes caller's scope
  everyone.now.receive(this.now.name, message);
};