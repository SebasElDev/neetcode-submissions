class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowHS = new Map<number, Set<string>>();
        const colHS = new Map<number, Set<string>>();
        const boxHS = new Map<string, Set<string>>();

        for (let i = 0; i < board.length; i++) {
            rowHS.set(i, new Set());
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === ".") continue;
                const currentBox = [Math.floor(i / 3), Math.floor(j / 3)].join(",");
                if (rowHS.get(i).has(board[i][j])) return false;
                if (colHS.get(j)?.has(board[i][j])) return false;
                if (boxHS.get(currentBox)?.has(board[i][j])) return false;

                rowHS.get(i).add(board[i][j]);
                colHS.set(j, (colHS.get(j) || new Set()).add(board[i][j]));
                boxHS.set(currentBox, (boxHS.get(currentBox) || new Set()).add(board[i][j]));
            }
        }

        return true;
    }
}
