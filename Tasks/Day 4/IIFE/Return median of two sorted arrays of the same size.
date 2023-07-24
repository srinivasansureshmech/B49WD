const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const medianUsingIIFE = (function(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const middleIndex = mergedArray.length / 2;
  
  if (mergedArray.length % 2 === 0) {
    const median = (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    return median;
  } else {
    return mergedArray[Math.floor(middleIndex)];
  }
})(array1, array2);

console.log(medianUsingIIFE); // Output: 3.5
