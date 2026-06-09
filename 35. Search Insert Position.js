/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right){
            let middle = Math.floor((left + right)/2)
            if(target === nums[middle]){
                return middle;
            }
            else if(target > nums[middle]){
                left = middle + 1;
            }
            else if(target < nums[middle]){
                right = middle - 1;
            }
        }
        return left
};


console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],7))