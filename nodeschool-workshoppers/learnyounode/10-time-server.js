// TCP time server
// listen to TCP connections on given port
// for each connection:
// send back the current server time in format:
//  YYYY-MM-DD hh:mm \n


var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(function (socket) {
  //client connected

  // get current time formatted using strftime library
  // %F : 2017-01-22
  // %H : 13
  // %M : 42
  var dateString = strftime('%F %H:%M') + "\n";

  socket.end(dateString);
  //send back the data
})

server.listen(port);
