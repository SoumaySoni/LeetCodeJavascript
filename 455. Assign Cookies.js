/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let happy = 0;
    let pointer1 = 0;
    let pointer2 = 0;
    g = new Uint32Array(g).sort();
    s = new Uint32Array(s).sort();
    while(pointer1 < g.length && pointer2 < s.length){
        if(g[pointer1] > s[pointer2]){
            pointer2++;
        } else{
            pointer1++;
            pointer2++;
            happy++;
        }
    }
    return happy
};

console.log(findContentChildren([1,2,3,],[1,1]))