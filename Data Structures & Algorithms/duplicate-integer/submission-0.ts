class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set<number>([...nums]);
        if (seen.size === nums.length) return false;
        return true;
    }
}
