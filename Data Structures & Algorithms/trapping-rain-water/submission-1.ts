class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if (height.length < 3) return 0;
        let l = 0,
            r = height.length - 1,
            res = 0,
            maxL = 0,
            maxR = 0,
            ptr: boolean;
        while (l < r) {
        
            const water = Math.min(maxL, maxR) - height[ptr ? l : r]
            res += water > 0 ? water : 0;

            maxL = Math.max(maxL, height[l]);
            maxR = Math.max(maxR, height[r]);

            if (maxL <= maxR) {
                l++;
                ptr = true;
            } else {
                r--;
                ptr = false;
            }
        }
        return res;
    }
}
