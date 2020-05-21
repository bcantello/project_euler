/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers
is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

function findLargestPalindrome(start, end) {
    const palindromeArray = [];
    const reverseNumber = number => {
        number = number + "";
        return number.split("").reverse().join("");
    };
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            let num = i * j;
            if (num === parseInt(reverseNumber(num))) {
                palindromeArray.push(num);
            }
        }
    }
    return console.log(palindromeArray.reduce(function (a,b) {
        return Math.max(a, b);
    }));
}

findLargestPalindrome(100, 999);
