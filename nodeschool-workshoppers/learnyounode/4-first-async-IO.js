// use a single asynchronous operation to read a file
// print the number of new lines to the console (exclude last line)
var fs = require('fs');
var pathToFile = process.argv[2];

// read the file async
// passing 'utf8' as the second argument allows the callback to return the data argument as a string instead of a buffer
fs.readFile(pathToFile, 'utf8', function(err, data) {
  if (err) {
    console.log("Error", err);
    return;
  }
  var lines = data.split('\n').length - 1;
  console.log(lines);
})
