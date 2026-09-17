class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let currCount = 0;
        let maxCount = 0;

        for (const num of nums) {
            if (num === 1) currCount++;
            else {
                maxCount = Math.max(maxCount, currCount);
                currCount = 0;
            }
        }

        return Math.max(maxCount, currCount);
    }
}
