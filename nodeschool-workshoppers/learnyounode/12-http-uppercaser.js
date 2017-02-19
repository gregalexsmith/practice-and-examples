// create http server that receives only POST requests
// convert incoming body characters to upper-case
// return result to client

var http = require('http');
var map = require('through2-map');

var port = Number(process.argv[2]);

var server = http.createServer(function(req, res) {
  // check for correct request method
  if (req.method !== 'POST') {
    return res.end('send me a POST\n');
  }
  // pipe the request directly to through2-map
  // this works similarly to array.map, allowing you to return a modified version of the stream and pipe it to another destination
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
})

server.listen(port);
