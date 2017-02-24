// Prove that promises are always async

// create a promise
var promise = new Promise(function(resolve, reject) {
  resolve('PROMISE VALUE');
})

// add success handler
promise.then(console.log)

// print out message within main program
console.log("MAIN PROGRAM");

// MAIN PROGRAM is printed out before PROMISE VALUE
// even thought the value of promise is known synchronously, the provided function is not executed until the next turn of the event loop
