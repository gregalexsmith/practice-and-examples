// Handle Errors with Promises
// Instructions:
//  * Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block, and fulfills or rejects the promise depending on whether an error is thrown.**Note:** your function should synchronously return the promise!
  //* Build a sequence of steps like the ones shown above that catches any thrown errors and logs them to the console.

var invalid_JSON = process.argv[2];

var parsePromised = new Promise(function(resolve, reject) {
  try {
    var test = JSON.parse(invalid_JSON);
    resolve(test);
  } catch (e) {
    console.log(e.message);
    reject(new Error(e.message))
  }
});

parsePromised.then(console.log).catch(console.log)
