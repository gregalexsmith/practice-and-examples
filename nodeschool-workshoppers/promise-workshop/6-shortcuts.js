// A few shortcuts for writing promises

// Promise creation shortcuts

var promise = new Promise(function(resolve, reject) {
  resolve("OK");
});
// same as ...
var promiseShort = Promise.resolve("OK");

var promise2 = new Promise(function(resolve, reject) {
  reject(new Error("ERROR"));
});
// same as ...
var promise2Short = Promise.reject(new Error("ERROR"));


// use catch to add an error handler for the promise
promise.catch(function(error) {
  console.log(error.message);
})
