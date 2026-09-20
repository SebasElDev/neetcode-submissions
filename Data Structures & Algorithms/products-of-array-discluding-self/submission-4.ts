class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const pre: number[] = [];
        pre[0] = 1;
        let sum = 1;
        for (let i = 1; i < nums.length; i++) {
            sum *= nums[i-1];
            pre.push(sum);
        }

        console.log(pre)

        let post = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            pre[i] *= post;
            post *= nums[i]
        }

        return pre
    }
}
