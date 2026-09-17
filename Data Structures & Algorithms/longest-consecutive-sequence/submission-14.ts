class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let longest = 0;

        for (const num of set) {
            if (set.has(num - 1)) {
                continue;
            }

            let next = num + 1;

            while (set.has(next)) {
                next++;
            }

            longest = Math.max(longest, next - num);
        }

        return longest;
    }
}
