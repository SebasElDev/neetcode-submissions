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
        for (const num of nums) {
            if (!numSet.has(num - 1)) {
                numSeqs.set(num, new Set());
                let x = num;
                while (numSet.has(x)) {
                    numSeqs.get(num).add(x)
                    x++;
                }
            }

        }

        if (numSeqs.size === 0) return 1;


        let maxLength = -Infinity;
        for (const s of numSeqs.values()) {
            maxLength = Math.max(maxLength, s.size);
        }

        return maxLength;
    }
}
