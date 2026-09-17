class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixArr = new Array(nums.length);
        prefixArr[0] = 1;
        for (let i = 1; i < nums.length; i++) {
            prefixArr[i] = prefixArr[i-1]*nums[i-1];
        }

        let suffixArr = new Array(nums.length);
        suffixArr[nums.length - 1] = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            suffixArr[i] = nums[i+1]*suffixArr[i+1];
        }

        let result = new Array(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefixArr[i] * suffixArr[i];
        }

        return result;
    }
}
