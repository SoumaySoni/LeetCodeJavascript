// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Brute Force

// Time Complexity: O(n²)
// Space Complexity: O(1)

var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([1, 2, 3, 4, 5], 6)); // [0, 4] or [1, 3]

// Optimized Approach using Hash Map

// Time: O(n)
// Space: O(n)

var twoSum = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};

console.log(twoSum([1, 2, 3, 4, 5], 6)); // [0, 4] or [1, 3]