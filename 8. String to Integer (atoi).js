/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const result = s.trim().split('');
    const result2 = ""
    for (let i = 0; i < result.length; i++){
        // console.log(typeof (result[i]))
        if (typeof(result[i]) == "") {
            result2.push(result[i])
        }
    }
    console.log(result2)
};

console.log(myAtoi("1337c0d3"))