// Given three int values, a b c, return the largest.

function intMax(a, b, c){
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else return c;
}


// Using the Math.max method:
// intMax = (a, b, c) => Math.max(a, b, c);