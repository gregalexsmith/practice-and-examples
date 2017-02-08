// Perform HTTP GET request to to the provided URL
// Write 2 lines to console:
//  1. number of characters received from server
//  2. complete string sent from server

var http = require('http');
// the bl (buffer list) library will take a stream (piped in) and run the callback when all data has been received
var bl = require('bl');

var url = process.argv[2];

http.get(url, function(res) {
  //take the response stream and pipe into buffer list
  res.pipe(bl(function(err, buf) {
    if (err) {
      return console.error(err);
    }
    //response is now complete, format data and log to console
    var data = buf.toString();
    console.log(data.length);
    console.log(data);
  }))
}).on('error', console.error);
