// Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57.
// Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.

function lastDigit(a, b){
  return a % 10 === b % 10 ? true : false
}

/* Also came with another solution where numbers are converted into strings

function lastDigit(a, b){
  let firstValue = a.toString();
  let secondValue = b.toString();
  return firstValue[firstValue.length-1] === secondValue[secondValue.length-1] ? true : false
} */