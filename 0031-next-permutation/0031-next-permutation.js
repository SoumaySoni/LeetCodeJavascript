/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // 1. Find the first decreasing element from the right
    let i = nums.length - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 2. If we found a decreasing element
    if (i >= 0) {
        // Find the smallest element greater than nums[i]
        let j = nums.length - 1;

        while (nums[j] <= nums[i]) {
            j--;
        }

        // Swap nums[i] and nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 3. Reverse everything after i
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};