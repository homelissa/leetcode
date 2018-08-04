/*
In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

Example 1:

Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.


Example 2:

Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.


Note:

nums will have a length in the range [1, 50].
Every nums[i] will be an integer in the range [0, 99].
*/

var getLargestNum = function(nums) {
  let largest = [nums[0], 0]
  for (let i = 1; i < nums.length; i++) {
    var current = nums[i]
    if (current > largest[0]) {
      largest = [current, i]
    }
  }

  return largest;
}

var dominantIndex = function(nums) {
  let largest = getLargestNum(nums); //[number, index]
    let dominant = largest[0];
  let index = largest[1]

  for (i = 0; i < nums.length; i++) {
    if (i === index) { continue };

    let compareNum = nums[i];
    if ((compareNum + compareNum) > dominant) {
      return -1;
    }
  }

  return index;
}
