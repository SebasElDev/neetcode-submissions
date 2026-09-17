class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums);
        let maxLength = 0;
        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let x = num;
                let length = 1;
                while (numSet.has(x+1)) {
                    x++;
                    length++;
                }
                maxLength = Math.max(maxLength, length)
            }
        }

        return maxLength;
    }
}
