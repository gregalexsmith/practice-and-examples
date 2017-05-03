// create a spy that keeps track of how many times a function is called
// override a specified method of an object with new functionality while still maintaining all of the old behaviour

function Spy(target, method) {
  // must name the return object so we can update it by reference within this scope
  var result = {count: 0}
  var internalRef = target[method];

  // replace target method
  target[method] = function() {
    result.count++;
    // pseudo example: 
    // console.log = log.apply(console, arguments)
    return internalRef.apply(this, arguments)
  }

  return result;
}

module.exports = Spy
