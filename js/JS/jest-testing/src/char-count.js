// char-count.js
// counts how many times char occurs in sentence
function charCount(char, sentence) {
      // your code goes here
      arguments[0]
    if (arguments.length !==2) {
        throw "wrong number of arguments"
    }

    if (typeof(sentence) !== 'string' || typeof(char) !== 'string') {
        throw "wrong data type"
    }
  
let count = 0
sentence.split('').forEach(sentenceChar => {
    if (sentenceChar === char) {
     count ++
    }
})
    return count
}    

  
  module.exports = charCount