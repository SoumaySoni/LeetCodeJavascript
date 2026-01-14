/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = 0;

    while (x !== 0) {
        const digit = x % 10;
        x = (x / 10) | 0;
        result = result * 10 + digit;
    }

    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
        return 0;
    }

    return result;
};

console.log(reverse(123))
console.log(reverse(-123))