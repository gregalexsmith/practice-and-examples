// Dont have to return promises all the time
// fulfillment handlers may return promises or values

// Promise handlers will wrap any retuned values in promises even if they are obtained synchronously
// Also, the returned value will resolve on the NEXT turn of the event loop

function attachTitle(name) {
  return 'DR. ' + name;
}

Promise.resolve("MANHATTAN")
  .then(attachTitle)
  .then(console.log);
