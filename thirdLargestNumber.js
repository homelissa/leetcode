/*
Given a non-empty array of integers, return the third maximum number in this array.
If it does not exist, return the maximum number. The time complexity must be in O(n).
*/

var thirdMax = function(nums) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] === undefined) {
      hashMap[nums[i]] = nums[i];
    }
  }

  const uniqKeys = Object.keys(hashMap).sort((a, b) => Number(b) - Number(a));

  return uniqKeys.length < 3 ? Number(uniqKeys[0]) : Number(uniqKeys[2])
};
