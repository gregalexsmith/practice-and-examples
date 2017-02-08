// perform requests to 3 urls given by process arguments
// print out the responses in the order that the urls are given
// servers may not give complete response in the same order as the requests

var http = require('http');
var bl = require('bl');

var urls = process.argv.splice(2, process.argv.length - 2);
var responses = [];
var receivedCount = 0;

// perform HTTP GET request to a url at specified index
// once data is received from the server, add that data to the results array at the correct locations
// finally, check to see if all URLS have been received, if so print results
var httpGetAndCheck = function(index) {
  http.get(urls[index], function(res) {
      res.pipe(bl(function(err, buf) {
        if (err) {
          return console.error(err)
        }
        //all data received, add to responses array at correct location;
        responses[index] = buf.toString();
        receivedCount++;
        //check if all urls have been received
        if (receivedCount === urls.length) {
          printResult(responses);
        }
      }))
  })
}

var printResult = function(result) {
  for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

for (var i = 0; i < urls.length; i++) {
  //fill the response array to required length
  responses.push("");
  //perform get request and check for success
  httpGetAndCheck(i);
}
