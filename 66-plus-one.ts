function plusOne(digits: number[]): number[] {
    const numberStr = BigInt((digits.join(""))) + BigInt(1);
    const strToNumber = numberStr.toString().split('').map(Number);;
    return strToNumber;
};

const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const result = plusOne(digits);

console.log(result);