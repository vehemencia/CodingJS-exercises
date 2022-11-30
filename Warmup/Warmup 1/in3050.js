// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

function in3050(a, b) {
  if (a >= 30 && a < 41 && b >= 30 && b <= 40) {
    return true;
  } else if (a >= 40 && a <= 50 && b >= 40 && b <= 50) {
    return true;
  } else return false
}

/* OR:
function in3050(a, b){
  return a >= 30 && a < 41 && b >= 30 && b <= 40 || a >= 40 && a <= 50 && b >= 40 && b <= 50 ? true : false
} */