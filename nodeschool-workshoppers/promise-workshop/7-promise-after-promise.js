// how to chain promises together using then

// call first() --> this returns a promise
first().then(function(results) {
  // return a promise by calling second()
  return second(results);
}).then(console.log)

// alt:
// first().then(second).then(console.log);
