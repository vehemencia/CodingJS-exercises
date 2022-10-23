/* Given an int n, return true if it is within 10 of 100 or 200. 
Note: Math.abs(num) computes the absolute value of a number. */

function nearHundred(n){
  let absoluteValue = Math.abs(n);
  if (absoluteValue <= 110 && absoluteValue >= 90 || absoluteValue <= 210 && absoluteValue >= 190) {
    return true;
  } else return false;
}