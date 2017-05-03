// return the number of arguments passed which have a property 'quack' defined directly on them
// do not match values inherited from prototypes
function duckCount() {
  var numDucks = 0;
  // convert Array-Like object 'arguments' to an Array
  var birds = Array.prototype.slice.call(arguments);
  return birds.reduce((acc, bird) => {
    if (Object.prototype.hasOwnProperty.call(bird, 'quack'))
      acc++;
    return acc;
  }, 0 )
}

module.exports = duckCount
