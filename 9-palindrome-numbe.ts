/**
 * https://leetcode.com/problems/palindrome-number/descriptions
 */
function isPalindrome(x: number): boolean {

    const charString = [...x.toString()];
    let palindrome = ""
    for (let index = charString.length - 1; index >= 0; index--) {
      palindrome += charString[index];
    }
    return palindrome.toString() === x.toString();
};

const x = 121;
const printOutput = isPalindrome(x);
console.log(printOutput);