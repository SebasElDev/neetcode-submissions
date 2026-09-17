class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let currCount = 0;
        let maxCount = 0;

        for (const num of nums) {
            currCount = num === 1 ? currCount+1 : 0;
            maxCount = Math.max(maxCount, currCount);
        }

        return maxCount;
    }
}
