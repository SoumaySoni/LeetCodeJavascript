/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [];

    for (let i = 0; i <= rowIndex; i++) {
        let row = [];

        for (let j = 0; j <= i; j++) {
            // First and last elements are always 1
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                // Sum of the two numbers directly above
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }

        result.push(row);
    }
        return result[result.length - 1]
};

console.log(getRow(1))