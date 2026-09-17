class NumArray {
    pre: number[];

    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        this.pre = new Array();
        let runSum = 0;
        for (const num of nums) {
            runSum += num;
            this.pre.push(runSum);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        const leftSum = left - 1 >= 0 ? this.pre[left - 1] : 0;
        return this.pre[right] - leftSum;
    }       
}
