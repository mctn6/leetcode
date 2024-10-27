function search(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1
};

const nums704 = [-1,0,3,5,9,12]
const target704 = 9
const output704 = search(nums704, target704);
console.log(output704);