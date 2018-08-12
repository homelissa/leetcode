/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/


var getSum = arr => {
  const reducer = (acc, current) => acc + current;
  return arr.reduce(reducer);
}

var getSubArrays = arr => {
  let subs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let sub = arr.slice(i, j + 1);
      if (sub.length > 0 && !subs.includes(sub)) {
        subs.push(sub);
      }
    }
  }

  return subs;
}


var maxSubArray = function(nums) {
  let hashMap = {};
  let subs = getSubArrays(nums);

  subs.forEach(el => {
    hashMap[getSum(el)] = el
  })

  const sortedKeys = Object.keys(hashMap).sort((a, b) => Number(b) - Number(a));

  return sortedKeys[0];
};
