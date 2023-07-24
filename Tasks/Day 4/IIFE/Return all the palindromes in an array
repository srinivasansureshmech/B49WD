const strings = ["hello", "level", "world", "radar", "javascript", "civic"];

const palindromesUsingIIFE = (function(arr) {
  const isPalindrome = str => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  return arr.filter(string => isPalindrome(string));
})(strings);

console.log(palindromesUsingIIFE); // Output: ['level', 'radar', 'civic']
