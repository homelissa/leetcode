/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
*/

var findMaxConsecutiveOnes = function(nums) {
  let current = 0;
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current += 1
      if (current > longest) {
        longest = current;
      }
    } else {
      current = 0;
    }
  }

  return longest;
};
