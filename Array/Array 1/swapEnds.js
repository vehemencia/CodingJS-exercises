function swapEnds(nums){
  if (nums.length === 1) {
    return nums;
  } else if (nums.length === 2) {
    return nums.reverse();
  } else {
    let firstPosition = nums.shift();
    let lastPosition = nums.pop();
    return [lastPosition, ...nums, firstPosition];
  }
}