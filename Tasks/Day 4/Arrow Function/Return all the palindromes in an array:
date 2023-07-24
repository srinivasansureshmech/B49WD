const findPalindromes = array => {
  const isPalindrome = str => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  return array.filter(string => isPalindrome(string));
};

// Usage:
const stringsArray = ["hello", "level", "world", "radar", "javascript", "civic"];
const palindromeStrings = findPalindromes(stringsArray);
console.log(palindromeStrings);
