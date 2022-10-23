/* Given 2 int values, return true if one is negative and one is positive. 
Except if the parameter "negative" is true, then return true only if both are negative. */

function posNeg(a, b, negative){
  if (negative){
    if (0 > a && 0 > b) {
      return true;
    } else return false;
  } else {
    if (0 > a && 0 < b || 0 < a && 0 > b) {
      return true;
    } else return false;
  }
}