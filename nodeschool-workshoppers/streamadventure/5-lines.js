// convert even-numbered lines to upper-case
// and odd-numbered lines to lower-case
var through = require('through2');
var split = require('split');
var lineNum = 1;

process.stdin
  .pipe(split())
  .pipe(through(write))
  .pipe(process.stdout);

function write(line, encoding, next) {
  if (lineNum % 2 === 0) {
    // even numbered lines will be upper-case
    this.push(line.toString().toUpperCase() + '\n')
  } else {
    this.push(line.toString().toLowerCase() + '\n')
  }
  lineNum++;
  next();
}
