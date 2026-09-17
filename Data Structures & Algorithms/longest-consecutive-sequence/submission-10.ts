class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;

        const numSet = new Set(nums);
        if (numSet.size === 1) return 1;

        const numSeqs = new Map<number, Set<number>>();
        let maxLength = -Infinity;
        for (const num of nums) {
            if (!numSet.has(num - 1)) {
                numSeqs.set(num, new Set());
                let x = num;
                while (numSet.has(x)) {
                    numSeqs.get(num).add(x)
                    x++;
                }
                maxLength = Math.max(maxLength, numSeqs.get(num).size)
            }
        }

        return maxLength;
    }
}
