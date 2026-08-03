/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    const result = [];

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += a.charCodeAt(i--) - 48;
        if (j >= 0) sum += b.charCodeAt(j--) - 48;

        result.push(sum & 1);      // same as sum % 2
        carry = sum >> 1;          // same as Math.floor(sum / 2)
    }

    return result.reverse().join("");
};