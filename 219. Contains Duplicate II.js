/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            const prev = map.get(nums[i]);
            map.set(nums[i],i)
            if(Math.abs(prev - i) <= k) return true
        }else{
            map.set(nums[i],i)
        }
    }
    return false
};

console.log(containsNearbyDuplicate([1,2,3,1],3))
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))
console.log(containsNearbyDuplicate([5, 6, 5, 7, 5],2))