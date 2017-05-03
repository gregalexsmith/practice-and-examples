// create a function that fixes the first argument to console.log
// (implements a logging function that prepends a namspace string to its output)

var slice = Array.prototype.slice

function logger(namespace) {
  return function(message) {
    console.log(namespace, slice.call(arguments).join(" "));

    //OR
    // this takes advantage of console.log seperating arguments with a space AND .apply supplying arguments using an array
    //console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger
