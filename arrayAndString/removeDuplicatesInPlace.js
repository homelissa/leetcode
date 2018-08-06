var removeDuplicates = function(nums) {
    if (nums.length < 2) {
        return nums;
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            nums.splice(i--, 1)
        }
    }

    return nums.length;
};
