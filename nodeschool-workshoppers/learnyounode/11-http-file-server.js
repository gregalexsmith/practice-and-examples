// HTTP server
// serve the same text file for each request it receives
// listen on the provided port
// location of file is provided as the second command-line argument

var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

// create http server
// this will be called for each new request once the server is listening for connections
var server = http.createServer(function(req, res) {
  //create a read stream for the file
  var readStream = fs.createReadStream(file);
  // when the stream is valid, pipe it through to the response
  readStream.on('open', function() {
    readStream.pipe(res);
  })
})

server.listen(port);
