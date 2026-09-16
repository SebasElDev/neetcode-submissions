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
        for (const num of nums) {
            buckets[freqMap.get(num)].push(num);
        }

        console.log(buckets);

        const result: number[] = [];
        for (let i = buckets.length-1; i >= 0; i--) {
            if (buckets[i].length === 0) continue;
            const numberSet = new Set([...buckets[i]])
            result.push(...Array.from(numberSet));
        }

        return result.slice(0, k);

    }
}
