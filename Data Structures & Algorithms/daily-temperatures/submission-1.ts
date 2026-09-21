class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const pre: number[] = [n - 1];
        const res = new Array(n).fill(0);

        let curr = 0;
        for (let i = n - 1; i >= 0; i--) {
            while (pre.length > 0 && temperatures[i] >= temperatures[pre[pre.length - 1]])
                pre.pop();
            res[i] += (pre[pre.length - 1] ?? i)  - i;

            pre.push(i);
        }

        return res;
    }
}
