class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hm = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (hm.has(diff)) return [hm.get(diff), i];
            hm.set(nums[i], i);
        }
    }
}
