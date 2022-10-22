/* Given a number n, return true if n is in the range 1..10, inclusive. 
Unless "outsideMode" is true, in which case return true if the number is less or equal to 1, or greater or equal to 10. */

function in1To10(n, outsideMode){
  if (!outsideMode && n > 0 && n <= 10 || outsideMode && n <= 1 || outsideMode && n >= 10) {
    return true;
  } else return false;
}