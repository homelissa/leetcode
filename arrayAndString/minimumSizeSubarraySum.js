/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example:

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
*/

var getSum = (arr) => {
  let sum = 0;
  arr.forEach(el => {
    sum += el;
  })

  return sum;
}

var minSubArrayLen = function(s, nums) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {

      let sub = nums.slice(i, j + 1);
      if (getSum(sub) >= s) {
        hashMap[sub.length] = sub;
      }
    }
  }

  let sortedKeys = Object.keys(hashMap).sort((a, b) => Number(a) - Number(b))

  if (sortedKeys.length === 0) {
      return 0;
  }

  let first = Number(sortedKeys[0]);
    return first;
};

console.log(minSubArrayLen(7,[2,3,1,2,4,3]));

//
var getSum = (nums) => {
  const reducer = (acc, current) => acc + current;
  return nums.reduce(reducer);
}

var getSubArrays = (nums) => {
  let subs = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let sub = nums.slice(i, j + 1);
      if (sub.length > 0 && !subs.includes(sub)) {
        subs.push(sub);
      }
    }
  }

  return subs;
}

var minSubArrayLen = function(s, nums) {
    if (nums.length < 1) {
        return 0;
    }

   let subArrays = getSubArrays(nums);

   const meetsMinLength = subArrays.filter(el => (getSum(el) >= s));

    if (meetsMinLength.length < 1) {
        return 0;
    }

    const sortedMins = meetsMinLength.sort((a, b) => a.length - b.length);

    let result = sortedMins[0];
    return result.length;
};
