/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function (nums1, nums2) {
    let p1 = 0;
    let p2 = 0;
    let array = [];
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] < nums2[p2]) {
            array.push(nums1[p1]);
            p1++;
        }
        else {
            array.push(nums2[p2]);
            p2++;
        }
    }
    array = [...array, ...nums1.slice(p1), ...nums2.slice(p2)]
    if (array.length % 2 == 0) {
        return array[array.length / 2] / 2 + array[array.length / 2 - 1] / 2;
    }

    return array[(array.length - 1) / 2];
};
// [1,3][3,4]