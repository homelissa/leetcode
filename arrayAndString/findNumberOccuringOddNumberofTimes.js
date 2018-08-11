/*
Given an array of positive integers. All numbers occur even number of times except one number which occurs odd number of times. Find the number in O(n) time & constant space.

Examples :

Input : arr = {1, 2, 3, 2, 3, 1, 3}
Output : 3

Input : arr = {5, 7, 2, 7, 5, 2, 5}
Output : 5
*/

var oddNumberofTimes = nums => {
  let hashMap = {};

  nums.forEach(el => {
    hashMap[el] = hashMap[el] ? hashMap[el] += 1 : 1;
  })

  const sortedKeys = Object.keys(hashMap).sort((a, b) => hashMap[b] % 2 - hashMap[a] % 2);
  return sortedKeys[0];
}

var oddNumberofTimes = function(nums) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (hashMap[el]) {
      hashMap[el] += 1;
    } else {
      hashMap[el] = 1;
    }
  }

  const sortedKeys = Object.keys(hashMap).filter(el => hashMap[el] % 2 != 0);
  let result = sortedKeys[0];
  return result;
}

var oddNumberofTimes = function(nums) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (hashMap[el]) {
      hashMap[el] += 1;
    } else {
      hashMap[el] = 1;
    }
  }

  const sortedKeys = Object.keys(hashMap).sort((a, b) => (b % 2 - a % 2))
  let result = sortedKeys[0];
  return result;
}
