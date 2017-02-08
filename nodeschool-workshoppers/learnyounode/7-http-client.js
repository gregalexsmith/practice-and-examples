// Perform a HTTP GET request to the given url
// Log each data response to the console

var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
  //sets the response to give a string output instead of a Buffer
  res.setEncoding('utf8')
  res.on('error', console.error)
  res.on('data', function(data) {
    console.log(data);
  })
}).on('error', console.error)
