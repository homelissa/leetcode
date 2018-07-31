/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

//Brute Force: O(n^2)
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target)  {
                return [i, j];
            }
        }
    }

    return null;
};

var twoSum = function(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (map[compliment] != undefined) {
      return [map[compliment], i]
    }

    map[nums[i]] = i;
  }

  return null;
}
