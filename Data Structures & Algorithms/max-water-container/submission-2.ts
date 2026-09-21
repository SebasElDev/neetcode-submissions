class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0,
            r = heights.length - 1,
            max = 0;

        while (l < r) {
            const w = r - l;
            const h = Math.min(heights[l], heights[r]);
            const area = w * h;
            max = Math.max(max, area);

            if (h === heights[l]) l++;
            else r--;
        }

        return max;
    }
}
