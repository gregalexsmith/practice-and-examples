// convert the following function to an approach that uses .map
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}


function doubleAll(numbers) {
  // SOLUTION GOES HERE
  return numbers.map(num => num * 2)
}

module.exports = doubleAll
