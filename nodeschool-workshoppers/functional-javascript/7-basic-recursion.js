// implement a version of reduce
// will operate on the first argument (array)
function reduce(arr, fn, initial) {
  var reduceOne = function(index, accVal) {
    if (index >= arr.length) return accVal;
    var nextVal = fn(accVal, arr[index], index, arr);
    return reduceOne(++index, nextVal);
  }
  return reduceOne(0, initial);
}

module.exports = reduce
