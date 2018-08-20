/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

// hashMap that keeps count of each element's frequency
// sort the hashmap in descending order
//return first key

var majorityElement = function(nums) {
  let hashMap = {};

  nums.forEach(el => {
    hashMap[el] = hashMap[el] ? hashMap[el] += 1 : 1
  });

  const sortedKeys = Object.keys(hashMap).sort((a, b) => hashMap[b] - hashMap[a]);
  return Number(sortedKeys[0]);
};
