class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixArr = new Array(nums.length).fill(1);
        for (let i = 1; i < nums.length; i++) {
            prefixArr[i] = prefixArr[i-1]*nums[i-1];
        }

        let suffixArr = new Array(nums.length).fill(1);
        let runningProduct = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            suffixArr[i] = runningProduct;
            runningProduct *= nums[i];
        }


        let result = new Array(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefixArr[i] * suffixArr[i];
        }

        return result;
    }
}
