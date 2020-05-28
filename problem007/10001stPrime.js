// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10,001st prime number?

function isPrime(n) {
	if (n < 2) return false;
	for (let i = 2; i <= Math.sqrt(n); i++)
		if (n % i === 0) return false;
	return true;
}

function nthPrimeNumber(n) {
	let count = 0;
	num = 2
	while (count < n) {
		if (isPrime(num) === true) {
			count++;
			num++;
		} else {
			num++
		}
	}
	return num - 1;
}

console.log(nthPrimeNumber(249));
