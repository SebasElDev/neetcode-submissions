class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let max = -1;
        const res = new Array(arr.length);
        for (let i = arr.length - 1; i >= 0; i--) {
            res[i] = max;
            max = Math.max(max, arr[i]);
        }

        return res;
    }
}
