/**
 * Finds the longest common prefix string among an array of strings.
 * If there is no common prefix, returns an empty string.
 *
 * Approach:
 * - Start by assuming the first string is the common prefix.
 * - Compare this prefix with each subsequent string.
 * - While the current string does not start with the prefix,
 *   shorten the prefix by removing its last character.
 * - If the prefix becomes empty, there is no common prefix.
 *
 * Time Complexity: O(n * m)
 *   where n is the number of strings and m is the length of the prefix.
 * Space Complexity: O(1)
 *
 * @param {string[]} strs - Array of strings to compare
 * @return {string} - Longest common prefix
 */
var longestCommonPrefix = function(strs) {
    // Edge case: empty array
    if (strs.length === 0) return "";

    // Initialize prefix as the first string
    let prefix = strs[0];

    // Compare prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        // Reduce prefix until the current string starts with it
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);

            // If prefix is empty, no common prefix exists
            if (prefix === "") return "";
        }
    }

    // Return the longest common prefix found
    return prefix;
};
