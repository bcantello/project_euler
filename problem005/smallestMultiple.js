/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

let divisorArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let num = 2520;

function smallestValueDivisible(val) {
    let count = 0;
    while (count < 10) {
        divisorArray.forEach(e => {
            if (val % e === 0) {
                count += 1;
            }
        });
        if (count === 10) {
            return val;
        } else {
            count = 0;
            val += 2520;
        }
    }
}

console.log(smallestValueDivisible(num));
