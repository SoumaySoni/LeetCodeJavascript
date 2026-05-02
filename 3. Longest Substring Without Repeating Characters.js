/**
 * Problem: Longest Substring Without Repeating Characters
 * Technique: Sliding Window
 */

var lengthOfLongestSubstring = function(s) {
    // Set to store unique characters in the current window
    let set = new Set();

    // Left pointer of the sliding window
    let left = 0;

    // Stores the maximum length found
    let maxLength = 0;

    // Right pointer moves through the string
    for (let right = 0; right < s.length; right++) {

        // If current character already exists in the set,
        // shrink the window from the left until it's removed
        while (set.has(s[right])) {
            set.delete(s[left]); // remove leftmost character
            left++;              // move left pointer forward
        }

        // Add current character to the set
        set.add(s[right]);

        // Update maximum length of valid substring
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // Return the length of the longest substring found
    return maxLength;
};

// Example test case
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
