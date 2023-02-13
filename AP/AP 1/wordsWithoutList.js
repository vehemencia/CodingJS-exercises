// Given an array of strings, return a new List (e.g. an ArrayList) where all the strings of the given length are omitted. 
// wordsWithoutList(['a', 'bb', 'b', 'ccc'], 1) → bb,ccc -- wordsWithoutList(['a', 'bb', 'b', 'ccc'], 3) → a,bb,b...

function wordsWithoutList(words, len) {
  let finalWord = [];
  words.map(word => {
    if (word.length !== len) {
      finalWord.push(word)
    }
  })
  return finalWord
}