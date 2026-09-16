class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>();
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0)+1);
        }

        let buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of freqMap) {
            buckets[freq].push(num);
        }

        const result: number[] = [];
        for (let i = buckets.length-1; i >= 0; i--) {
            if (buckets[i].length === 0) continue;
            result.push(...buckets[i]);
        }

        return result.slice(0, k);

    }
}
