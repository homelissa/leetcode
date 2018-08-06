/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

var rotate = function(nums, k) {
  let rotated = [];

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    rotated[(i + k) % nums.length] = el
  }

  return rotated;
}

console.log(rotate([1, 2, 3], 1))
