/*The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.*/

/**
 * Sudo Code
 *
 * FUNCTION longestCollatzSequence(n)
 *     SET startingNumber = 0
 *     SET count = 0
 *     SET currentNum = 2
 *     FOR values less than or equal to the chosen value of n
 *         SET tempCount = 1
 *         WHILE currentNum is greater than 1
 *             IF currentNum is even
 *                 SET currentNum equal to currentNum divided by 2
 *                 SET tempCount equal to count plus 1
 *             END IF
 *             ELSE
 *                 SET currentNum equal to 3 times currentNum plus 1
 *                 SET tempCount equal to count plus 1
 *             END ELSE
 *         END WHILE
 *         IF tempCount is greater than count
 *             SET count equal to tempCount
 *             SET startingNumber equal to currentNum
 *         END IF
 *     END FOR
 *     RETURN startingNumber
 * END FUNCTION
 */

function longestCollatzSequence(n) {
	let startingNumber = 0,
		count = 0,
		currentNum = 0;

	for (let i = 2; i <= n; i++) {
		let tempCount = 1;
		currentNum = i;
		let tempNum = currentNum;
		while (tempNum > 1) {
			if (tempNum % 2 === 0) {
				tempNum /= 2;
				tempCount++;
			} else {
				tempNum = (tempNum * 3) + 1;
				tempCount++;
			}
		}
		if (tempCount > count) {
			count = tempCount;
			startingNumber = currentNum
		}
	}
	return startingNumber;
}

console.log(longestCollatzSequence(1000000));
