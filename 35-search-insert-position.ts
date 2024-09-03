function searchInsert(nums: number[], target: number): number {
    for (let index = 0; index < nums.length; index++) {
        if (target <= nums[index]){
            return index;
        }
        
    }
    return nums.length;
};


const nums_input = [1,3,5,6]
const target_input = 5
const result = searchInsert(nums_input, target_input);
console.log(result)