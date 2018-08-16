// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

var sumEveryOther = function(nums, startIdx) {
  let sum = 0;

  for (let i = startIdx; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
}

var rob = function(nums) {
  let startAtZero = sumEveryOther(nums, 0);
  let startAtOne = sumEveryOther(nums, 1);

  return startAtZero > startAtOne ? startAtZero : startAtOne;
}


console.log(rob([1, 2, 3, 1]));
console.log(rob([2,7,9,3,1]));
