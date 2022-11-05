// Given 2 int values, return true if either of them is in the range 10..20 inclusive.

function in1020(a, b){
  if (a <= 20 && a >= 10 || b <= 20 && b >= 10) {
    return true;
  } else return false;
}