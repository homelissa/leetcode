/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
*/

var majorityElement = function(nums) {
  let hashMap = {};
  let k = Math.floor(nums.length / 3);

  nums.forEach(el => {
    hashMap[el] = hashMap[el] ? hashMap[el] += 1 : 1
  })

  const dups = Object.keys(hashMap).filter(el => (hashMap[el] > k));
  return dups.map(el => Number(el));
};
