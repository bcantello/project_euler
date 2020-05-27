/*
* The sum of the squares of the first ten natural numbers is,

1^2+2^2+...+10^2=385
The square of the sum of the first ten natural numbers is,

(1+2+...+10)^2=55^2=3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
* */

function sumSquareDifference(nums) {
	let squareSum = 0;
	let sum = 0;
	let numsArr = [];
	for (let i = 1; i <= nums; i++) {
		numsArr.push(i);
	}
	numsArr.forEach(e => {
		sum += e;
	});
	numsArr.forEach(e => {
		squareSum += Math.pow(e, 2);
	});
	return Math.pow(sum, 2) - squareSum;
}

console.log(sumSquareDifference(100));
