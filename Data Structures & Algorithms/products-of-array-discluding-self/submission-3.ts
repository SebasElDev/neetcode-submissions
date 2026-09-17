class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let res = new Array(nums.length);
        res[0] = 1;
        for (let i = 1; i < nums.length; i++) {
            res[i] = res[i-1]*nums[i-1];
        }

        let postFix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= postFix;
            postFix *= nums[i];
        }


        return res;
    }
}
