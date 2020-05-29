/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

const specialTriplet = () => {
	for (let i = 3; i < 1000; i++) {
		for (let j = i + 1; j < 1000 - (2 * i); j++) {
			let tempC = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));
			let tripletSum = i + j + tempC;
			if (tripletSum === 1000) return i * j * tempC;
		}
	}
}

console.log(specialTriplet());
