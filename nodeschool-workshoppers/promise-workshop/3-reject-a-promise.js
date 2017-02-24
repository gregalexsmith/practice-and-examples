// Create a promise that rejects with an Error object after 300ms
// Create function onReject to print out error.message
// Pass this function as a rejection handler to the then method of the promise

// create a promise
var promise = new Promise(function (fulfill, reject) {
  // reject promise after 300ms with a new Error object
  setTimeout(function() {
    reject(new Error('REJECTED!'))
  }, 300)
});

// print out error
function onReject (error) {
  console.log(error.message);
}

// add onReject as a rejection handler for the promise
promise.then(null, onReject);
