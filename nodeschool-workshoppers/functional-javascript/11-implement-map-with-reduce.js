// use reduce to implement a simple version of map

module.exports = function arrayMap(arr, fn) {
  return arr.reduce((acc, item) => {
    acc.push(fn(item))
    return acc;
  }, [])
}
