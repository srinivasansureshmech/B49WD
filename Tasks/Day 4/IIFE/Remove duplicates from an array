const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArrayUsingIIFE = (function(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
})(array);

console.log(uniqueArrayUsingIIFE); // Output: [1, 2, 3, 4, 5]
