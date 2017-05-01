// given array of words
// return object that contains num of times each word was used
function countWords(inputWords) {
  return inputWords.reduce((obj, word) => {
    obj[word] = ++obj[word] || 1
    return obj;
  }, {})
}

module.exports = countWords
