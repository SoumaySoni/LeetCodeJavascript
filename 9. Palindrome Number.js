var isPalindrome = function (x) {
    // Negative numbers are not palindrome
    // Numbers ending in 0 (but not 0 itself) cannot be palindrome
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;

    // Reverse only half of the number
    while (x > reversed) {
        // Extract last digit and add to reversed number
        reversed = reversed * 10 + (x % 10);

        // Remove last digit from original number
        x = Math.floor(x / 10);
    }

    // For even digits: x === reversed
    // For odd digits: ignore middle digit using Math.floor(reversed / 10)
    return x === reversed || x === Math.floor(reversed / 10);
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))