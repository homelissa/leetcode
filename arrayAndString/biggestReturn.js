/*
Given an array of integers, where each index represents date and each value
represents the stock price on that date, return the biggest profit given you buy
stock on one day and sell on another.
*/

var biggestReturn = nums => {
  let largestDiff = null;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - nums[i] > largestDiff || largestDiff === null) {
        largestDiff = nums[j] - nums[i];
      }
    }
  }

  return largestDiff;
}

console.log(biggestReturn([5, 2, 3, 4, 5]));
