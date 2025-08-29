/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // if (numRows === 1 || numRows >= s.length) return s;

    const rows = new Array(Math.min(numRows, s.length)).fill("");
    console.log(rows)
    let curRow = 0;
    let goingDown = false;

    for (let c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
        console.log(rows)

    }

    return rows.join("");
};



// console.log(convert("PAYPALISHIRING", 3)) 
console.log(convert("PAYPALISHIRING", 3)) 