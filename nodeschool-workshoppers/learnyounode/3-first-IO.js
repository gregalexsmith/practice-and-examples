// use a single synchronous operation to read a file
// print out the number of newlines it contains to the console
var fs = require('fs');
var pathToFile = process.argv[2];

// read the file into a buffer and convert to string
var buf = fs.readFileSync(pathToFile),
    fileString = buf.toString();

// get the number of new lines (excluding final line)
var lines = fileString.split('\n').length - 1;

console.log(lines);
