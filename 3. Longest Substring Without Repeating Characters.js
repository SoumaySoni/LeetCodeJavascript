var lengthOfLongestSubstring = function (s) {
  let array = s.split("");
  console.log(array);
   
    let arr = array.filter((item, index) => {
      return array.indexOf(item) === index;
    });
   console.log(arr);
 
  if (s.includes(arr.join(''))) return arr.length;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
//if (s.indexOf(arr) !== -1)