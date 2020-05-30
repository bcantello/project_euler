/*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.*/

function isPrime(n) {
	if (n < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

const sumPrimes = (value) => {
	let sum = 0;
	if (value < 2) {
		return 0;
	}
	for (let i = 2; i <= value; i++) {
		if (isPrime(i)) {
			sum += i;
		}
	}
	return `The sum of all primes less than ${value} is: ${sum}`;
}

console.log(sumPrimes(2000000))
