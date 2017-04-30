// call first arg a number of times equal to the second arg
function repeat(operation, num) {
  for (var i = 0; i < num; i++) {
    operation()
  }
}

// or recursive method:
function recursiveRepeat(op, num) {
  if (num <= 0) return;
  op();
  return repeat(op, --num);
}

// Do not remove the line below
module.exports = repeat;
