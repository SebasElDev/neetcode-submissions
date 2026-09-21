class MinStack {
    st: number[];
    pre: number[];

    constructor() {
        this.st = [];
        this.pre = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const n = this.pre.length - 1;
        if (n < 0) {
            this.pre.push(val);
            this.st.push(val);
            return;
        }

        if (this.pre[n] > val) this.pre.push(val);
        else this.pre.push(this.pre[n]);

        this.st.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.pre.pop();
        this.st.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.st[this.st.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.pre[this.pre.length - 1];
    }
}
