// Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.

function scoresIncreasing(scores) {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i + 1] < scores[i]) {
      return false;
    }
  }
  return true
}