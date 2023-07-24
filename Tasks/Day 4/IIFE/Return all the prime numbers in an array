const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbersUsingIIFE = (function(arr) {
  const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return arr.filter(number => isPrime(number));
})(numbers);

console.log(primeNumbersUsingIIFE); // Output: [2, 3, 5, 7]
