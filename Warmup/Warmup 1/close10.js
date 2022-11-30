/* Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. 
Note that Math.abs(n) returns the absolute value of a number. */

function close10(a, b){
  return Math.abs(10 - a) === Math.abs(10 - b) ? 0 : Math.min.apply(Math, [a, b])
}