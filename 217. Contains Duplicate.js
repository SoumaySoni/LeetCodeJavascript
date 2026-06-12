/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            return true
        }else{
            map.set(nums[i],1)
        }
    }  
    return false
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))