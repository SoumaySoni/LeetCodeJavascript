/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let i = 0;

    while (i < nums.length) {
        const start = nums[i];

        // Move while numbers are consecutive
        while (
            i + 1 < nums.length &&
            nums[i + 1] === nums[i] + 1
        ) {
            i++;
        }

        const end = nums[i];

        if (start === end) {
            result.push(String(start));
        } else {
            result.push(`${start}->${end}`);
        }

        i++;
    }

    return result;
};

console.log(summaryRanges([0,1,2,4,5,7]))