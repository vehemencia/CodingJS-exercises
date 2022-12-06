// Given an array of ints, return true if 6 appears as either the first or last element in the array.
// The array will be length 1 or more.

function firstLast6(nums){
  const digits = [nums.pop(), nums.shift()];
  return digits.includes(6) ? true : false
}