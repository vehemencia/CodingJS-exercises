// Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

function sameFirstLast(nums){
  return nums.length > 0 && nums[0] === nums.reverse()[0] ? true : false;
}