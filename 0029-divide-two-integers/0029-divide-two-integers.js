/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MIN = -(2n ** 31n);
    const MAX = 2n ** 31n - 1n;

    let a = BigInt(dividend);
    let b = BigInt(divisor);

    // Determine whether answer is negative
    const negative = (a < 0n) !== (b < 0n);

    // Work with positive values
    a = a < 0n ? -a : a;
    b = b < 0n ? -b : b;

    let quotient = 0n;

    while (a >= b) {

        // Start with one divisor
        let current = b;
        let multiple = 1n;

        // Keep doubling while it still fits
        while (a >= current + current) {
            current += current;
            multiple += multiple;
        }

        // Remove the largest possible chunk
        a -= current;

        // Add how many divisors that chunk represents
        quotient += multiple;
    }

    // Apply sign
    if (negative) {
        quotient = -quotient;
    }

    // Handle 32-bit boundaries
    if (quotient > MAX) {
        return Number(MAX);
    }

    if (quotient < MIN) {
        return Number(MIN);
    }

    return Number(quotient);
};