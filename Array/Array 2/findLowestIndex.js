// Return the index of the minimum value in an array. The input array will have at least one element in it.

function findLowestIndex(nums){
  let minNumber = Math.min.apply(Math, nums);
  return nums.indexOf(minNumber)
}