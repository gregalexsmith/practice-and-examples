// take a file name from the first agument
// stream the output to stdout
var fs = require('fs');
var file = process.argv[2];
fs.createReadStream(file).pipe(process.stdout);
