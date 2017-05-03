// Use .bind to implement a logging function that allows you to namespace messages

module.exports = function(namespace) {
  // return a copy of the function 'log'
  // automatically call the 'log' function on console context
  // automatically pass in namespace as the first paramater
  return console.log.bind(console, namespace);
}
