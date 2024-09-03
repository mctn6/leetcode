function removeDuplicates(nums: number[]): number {
    const uniqueSet = new Set<number>(nums);
    const uniqueArray = Array.from(uniqueSet);
    for (let i = 0; i < uniqueArray.length; i++) {
        nums[i] = uniqueArray[i];
    }
    return uniqueArray.length;
};

const nums = [1,1,2];
const result_26 = removeDuplicates(nums);
console.log(result_26)