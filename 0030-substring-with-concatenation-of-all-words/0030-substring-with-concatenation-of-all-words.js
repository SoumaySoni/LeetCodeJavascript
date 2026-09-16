/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const result = [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;

    if (totalLen > s.length) return result;

    // Frequency of words we need
    const required = new Map();

    for (const word of words) {
        required.set(word, (required.get(word) || 0) + 1);
    }

    // Try every possible alignment
    for (let offset = 0; offset < wordLen; offset++) {
        let left = offset;
        let count = 0;

        // Words currently inside the window
        const current = new Map();

        for (let right = offset; right + wordLen <= s.length; right += wordLen) {
            const word = s.slice(right, right + wordLen);

            // Word is not in the required list
            if (!required.has(word)) {
                current.clear();
                count = 0;
                left = right + wordLen;
                continue;
            }

            // Add current word
            current.set(word, (current.get(word) || 0) + 1);
            count++;

            // Too many occurrences of this word
            while (current.get(word) > required.get(word)) {
                const leftWord = s.slice(left, left + wordLen);

                current.set(
                    leftWord,
                    current.get(leftWord) - 1
                );

                left += wordLen;
                count--;
            }

            // We have exactly all words
            if (count === wordCount) {
                result.push(left);

                // Move window forward to search for another answer
                const leftWord = s.slice(left, left + wordLen);

                current.set(
                    leftWord,
                    current.get(leftWord) - 1
                );

                left += wordLen;
                count--;
            }
        }
    }

    return result;
};