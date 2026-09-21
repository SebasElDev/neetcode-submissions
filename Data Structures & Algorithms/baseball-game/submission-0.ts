class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let prev: number[] = [];
        for (const op of operations) {
            switch (op) {
                case "+":
                    const sum = prev[prev.length - 1] + prev[prev.length - 2];
                    prev.push(sum);
                    continue;
                case "D":
                    const score = prev[prev.length - 1] * 2;
                    prev.push(score);
                    continue;
                case "C":
                    prev.pop();
                    continue;
                default:
                    prev.push(Number(op));
                    continue;
            }
        }

        let res = 0;
        for (const s of prev) res += s;

        return res;
    }
}
