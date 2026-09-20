class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowHS = new Map<number, Set<string>>();
        const colHS = new Map<number, Set<string>>();
        const boxHS = new Map<string, Set<string>>();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") continue;
                const box = [Math.floor(i / 3), Math.floor(j / 3)].join(",");
                const curr = board[i][j];

                if (
                    rowHS.get(i)?.has(curr) ||
                    colHS.get(j)?.has(curr) ||
                    boxHS.get(box)?.has(curr)
                ) {
                    return false;
                }


                rowHS.set(i, (rowHS.get(i) || new Set()).add(curr));
                colHS.set(j, (colHS.get(j) || new Set()).add(curr));
                boxHS.set(box, (boxHS.get(box) || new Set()).add(curr));
            }
        }

        return true;
    }
}
