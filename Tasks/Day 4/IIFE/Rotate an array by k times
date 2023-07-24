const array = [1, 2, 3, 4, 5];
const k = 2;

const rotatedArrayUsingIIFE = (function(arr, k) {
  const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  return rotatedArray;
})(array, k);

console.log(rotatedArrayUsingIIFE); // Output: [3, 4, 5, 1, 2]
