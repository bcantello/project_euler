/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

function findLargestPrimeFactor(number) {
    let primeArray = [];
    while (number % 2 === 0) {
        primeArray.push(2);
        number /= 2;
    }
    let sqrtNumber = Math.sqrt(number);
    for (let i = 3; i <= sqrtNumber; i++) {
        while (number % i === 0) {
            primeArray.push(i);
            number /= i;
        }
    }
    if (number > 2) {
        primeArray.push(number);
    }
    console.log(primeArray);
    return primeArray[primeArray.length - 1];
}

console.log(findLargestPrimeFactor(600851475143));
