/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let smaller, larger;
    if(nums1.length < nums2.length){
        smaller = nums1;
        larger = nums2;
    }else{
        smaller = nums2;
        larger = nums1;
    }
    const set = new Set(smaller);
    const result = new Set();
    
    for(const num of larger){
        if(set.has(num)){
            result.add(num)
        }
    }
    return Array.from(result)
};

console.log(intersection([1,2,2,1],[2,2]))