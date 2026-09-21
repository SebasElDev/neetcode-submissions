class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let res = 0;
        let prev: number[] = [];
        for (const op of operations) {
            switch (op) {
                case "+":
                    const sum = prev[prev.length - 1] + prev[prev.length - 2];
                    prev.push(sum);
                    res += sum;
                    continue;
                case "D":
                    const score = prev[prev.length - 1] * 2;
                    prev.push(score);
                    res += score;
                    continue;
                case "C":
                    res -= prev.pop();
                    continue;
                default:
                    prev.push(Number(op));
                    res += Number(op)
                    continue;
            }
        }

        return res;
    }
}
