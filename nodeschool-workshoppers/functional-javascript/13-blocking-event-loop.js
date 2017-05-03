// Modify the recursive repeat function provided in the boilerplate, such that it does not block the event loop

function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return
  operation();

  setTimeout(function() {
    repeat(operation, --num)
  }, 0)
}

module.exports = repeat
