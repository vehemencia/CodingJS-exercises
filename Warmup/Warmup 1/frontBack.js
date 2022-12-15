// Given a string, return a new string where the first and last chars have been exchanged.

function frontBack(str){
  let first = str.slice(0, 1);
  let last = str.slice(-1);
  return str.length <= 2 ? str.split('').reverse().join('') : last + str.slice(1,-1) + first
}