/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/


// time: O(n); space: O(n)
var moveZeroes = function(nums) {
  let result = [];

  nums.forEach(num => {
    if (num != 0) {
      result.push(num);
    }
  })

  while (result.length < nums.length) {
    result.push(0)
  }

  return result;
};


var moveZeroesInPlace = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let j = findNextNonZero(nums, i);
      if (j < nums.length) {
        swap(nums, i, j) 
      }
    }
  }

  return nums;
}

var findNextNonZero = function(nums, i) {
  while (i < nums.length && nums[i] === 0) {
    i++
  }

  return i;
}

var swap = function(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
