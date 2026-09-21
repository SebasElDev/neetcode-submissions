class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {

        let l = 0, r = height.length - 1, maxL = 0, maxR = 0, total = 0;
        while (l < r) {
            
            maxL = Math.max(maxL, height[l]);
            maxR = Math.max(maxR, height[r]);
            if (maxL >= maxR) {
                total += Math.min(maxL, maxR) - height[r];
                r--;
            } else {
                total += Math.min(maxL, maxR) - height[l];
                l++;
            }

        }

        return total;
    }
}
