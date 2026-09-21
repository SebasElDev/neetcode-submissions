class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const st: string[] = [];
        for (const c of s) {
            switch (c) {
                case "(":
                    st.push(c);
                    continue;
                case "{":
                    st.push(c);
                    continue;
                case "[":
                    st.push(c);
                    continue;
                case "]":
                    if (st[st.length - 1] !== "[") return false;
                    st.pop();
                    continue;
                case ")":
                    if (st[st.length - 1] !== "(") return false;
                    st.pop();
                    continue;
                case "}":
                    if (st[st.length - 1] !== "{") return false;
                    st.pop();
                    continue;
            }
        }

        return st.length === 0;
    }
}
