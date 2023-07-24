const strings = ["hello", "level", "world", "radar", "javascript", "civic"];

const findPalindromesUsingAnonymousFunction = function(arr) {
  const isPalindrome = str => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  return arr.filter(string => isPalindrome(string));
};

console.log(findPalindromesUsingAnonymousFunction(strings)); // Output: ['level', 'radar', 'civic']
