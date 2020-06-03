/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these
multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.*/


/**
 * SUDO CODE
 *
 * FUNCTION sumOfMultiples
 *   SET SUM = 0
 *   FOR all values from 1 to 1000
 *      IF the value is divisible by 3 OR 5
 *          ADD the value to SUM
 *      END IF
 *   END FOR
 *   RETURN SUM
 * END FUNCTION
 */

function sumOfMultiples(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfMultiples(1000));
