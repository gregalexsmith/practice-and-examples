// http server that serves JSON
// Takes a request query:
// EX: '?iso=2013-08-10T12:10:15.474Z'

// ENDPOINT 1
// path: '/api/parsetime'
// accepts request query
/* returns {
  "hour": 14,
  "minute": 23,
  "second": 15
} */

// ENDPOINT 2
// path: '/api/unixtime'
// accepts same request query
// returns UNIX epoch time in milliseconds
/* {"unixtime": 1376136615474} */

var http = require('http');
var url = require('url');

var port = process.argv[2]

var server = http.createServer(function(req, res) {
  // get required data from the url
  var pasedURL = url.parse(req.url, true);
  var path = pasedURL.pathname;
  var isoTime = pasedURL.query.iso

  // convert iso time to a new date
  var date = new Date(isoTime);

  // handle different routes
  if (path === "/api/parsetime") {
    // parse the time and return a JSON object
    var result = {};
    result.hour = date.getHours();
    result.minute = date.getMinutes();
    result.second = date.getSeconds();
  } else if (path === "/api/unixtime") {
    // convert the time to UNIX format
    var result = {};
    result.unixtime = date.getTime();
  } else {
    res.end("Route not supported.")
  }

  // return successful if result has been created
  if (result) {
    res.writeHead(200, {'Content-Type': "application/json"});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }

});

server.listen(port);
