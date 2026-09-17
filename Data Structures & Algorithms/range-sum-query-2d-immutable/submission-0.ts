class NumMatrix {
    preMatrix: number[][];

    /**
     * @param {number[][]} matrix
     */
    constructor(matrix: number[][]) {
        const n = matrix.length;
        const m = matrix[0].length;

        this.preMatrix = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                this.preMatrix[i + 1][j + 1] =
                    matrix[i][j] +
                    this.preMatrix[i][j + 1] +
                    this.preMatrix[i + 1][j] -
                    this.preMatrix[i][j];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return (
            this.preMatrix[row2 + 1][col2 + 1] -
            this.preMatrix[row2 + 1][col1] -
            this.preMatrix[row1][col2 + 1] +
            this.preMatrix[row1][col1]
        );
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
