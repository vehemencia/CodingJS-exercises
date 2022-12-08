// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive.
// Return 0 if neither is in that range.

function max1020(a, b) {
  //First, create a function to evaluate if value passes the condition of being inside the defined range
  const isInRange = (value) => value >= 10 && value <= 20 ? value : 0;
  /* Then return which value is larger, but applying previous function because Math.max will always return which value is bigger
  but the function will be called because it evaluates the range */ 
  return Math.max(isInRange(a), isInRange(b))
}