// Build a simple script to prove that promises may only resolve once

// create a promise
var promise = new Promise(function(resolve, reject) {
  // immediately resolve the promise
  resolve('I FIRED');
  // now try to reject the promise with an Error
  reject(new Error('I DID NOT FIRE'));
});

// create function to print errors to console
function onRejected(error) {
  console.log(error.message);
}

// add event handlers for promise
promise.then(console.log, onRejected)



// NOTES:
// Once a promise is fulfilled or rejected, the state may not be changed again
// this is an important feature of promises and differentiates them from an EventEmitter (and other repeatable callbacks)
