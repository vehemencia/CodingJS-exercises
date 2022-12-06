/* Start with 2 int arrays, a and b, each length 2. 
Consider the sum of the values in each array. 
Return the array which has the largest sum. In event of a tie, return a. */ 

function biggerTwo(a, b){
  let firstSum = a.reduce((a, b) => a + b);
  let secondSum = b.reduce((a, b) => a + b);
  return firstSum === secondSum || firstSum > secondSum ? a : b;
}