/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const m = needle.length;
    const n = haystack.length;
    for (let i = 0; i <= n - m; i++) {
        let found = true;

        for (let j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }

        if (found) {
            return i;
        }
    }

    return -1;
};