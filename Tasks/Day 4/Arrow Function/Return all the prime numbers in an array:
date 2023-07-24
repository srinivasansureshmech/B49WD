const findPrimes = array => {
  const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return array.filter(number => isPrime(number));
};

// Usage:
const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimes(numbersArray);
console.log(primeNumbers);
