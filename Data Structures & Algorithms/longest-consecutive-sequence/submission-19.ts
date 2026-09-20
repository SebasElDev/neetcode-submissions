class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const s = new Set(nums);
        let longest = 0;
        for (const n of nums) {
            if (s.has(n - 1)) continue;
            let curr = 1;
            let next = n + 1;
            while (s.has(next)) {
                curr++;
                next++;
            }
            longest = Math.max(longest, curr);
        }

        return longest;
    }
}
