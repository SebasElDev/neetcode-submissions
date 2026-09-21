class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let l = 0,
            r = height.length - 1,
            maxL = height[l],
            maxR = height[r],
            total = 0;
        while (l < r) {
            if (maxL >= maxR) {
                r--;
                maxR = Math.max(maxR, height[r]);
                total += maxR - height[r];
            } else {
                l++;
                maxL = Math.max(maxL, height[l]);
                total += maxL - height[l];
            }
        }

        return total;
    }
}
