class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const numStack: number[] = [];

        for (const t of tokens) {
            if (!isNaN(Number(t))) {
                numStack.push(Number(t));
                continue;
            }

            let res = 0;
            const op2 = numStack.pop() ?? 0;
            const op1 = numStack.pop() ?? 0;

            if (t === "+") {
                res = op1 + op2;
            } else if (t === "-") {
                res = op1 - op2;
            } else if (t === "*") {
                res = op1 * op2;
            } else if (t === "/") {
                const div = op1 / op2;
                res = div > 0 ? Math.floor(div) : Math.ceil(div);
            }


            numStack.push(res);
        }
        return numStack[0];
    }
}
