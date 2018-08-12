/*
238. Product of Array Except Self
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
*/

var getProduct = (arr) => {
  const reducer = (acc, current) => (acc * current);
  return arr.reduce(reducer);
}

var productExceptSelf = function(nums) {
  let result = [];

  nums.forEach((el, i) => {
    let res = nums.slice(0, i).concat(nums.slice(i + 1));
    if (res.length > 0) {
      result.push(getProduct(res));
    }

  })

  return result;
};
