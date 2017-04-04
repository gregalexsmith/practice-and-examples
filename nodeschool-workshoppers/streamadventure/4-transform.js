// convert data from 'stdin' to uppercase data
// pipe to 'stdout'
var through = require('through2');

var stream = through(write, end);
process.stdin.pipe(stream).pipe(process.stdout);

// write: called for every buffer of available input
function write(buffer, encoding, next) {
  // convert the buffer to uppercase
  var converted = buffer.toString().toUpperCase()
  // push to output stream
  this.push(converted);
  // get next data or end
  next();
}

// end: called when there is no more data
// this is optional
function end(done) {
  done();
}
