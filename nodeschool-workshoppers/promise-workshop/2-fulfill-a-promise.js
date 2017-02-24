// create a promise
// fulfill with a value of 'FULFILLED!' after a delay of 300ms

// create a promise
var promise = new Promise(function(resolve, reject) {
  // after 300ms, resolve the promise
  setTimeout(function() {
    resolve('FULFILLED!')
  }, 300)
});

// add a handler for the promise's resolve function
// this actually gets excecuted before the resolve function in this case
promise.then(function(result) {
  console.log(result);
})
