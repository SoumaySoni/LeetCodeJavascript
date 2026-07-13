/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(curr, open, close) {
        // If the current string is complete
        if (curr.length === 2 * n) {
            result.push(curr);
            return;
        }

        // Add '(' if we still have some left
        if (open < n) {
            backtrack(curr + "(", open + 1, close);
        }

        // Add ')' only if it won't make the string invalid
        if (close < open) {
            backtrack(curr + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
};