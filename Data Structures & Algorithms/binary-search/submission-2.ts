class Solution {
    rbs = (arr: number[], l: number, r: number, t: number): number => {
        if (l > r) return -1;
        const n = l + r;

        const mid = l + Math.floor((r - l) / 2);
        if (arr[mid] === t) return mid;
        else if (arr[mid] > t) r = mid - 1;
        else l = mid + 1;

        return this.rbs(arr, l, r, t);
    };

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        return this.rbs(nums, 0, nums.length - 1, target);
    }
}
