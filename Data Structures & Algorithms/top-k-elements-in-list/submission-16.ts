class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq = new Map<number, number>();
        for (const n of nums) {
            freq.set(n, (freq.get(n) || 0) + 1);
        }

        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        for (const [n, i] of freq) {
            buckets[i].push(n);
        }

        const res: number[] = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length === 0) continue;
            for (const n of buckets[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }
    }
}
