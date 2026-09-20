class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const ht = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            const codeS = s[i].charCodeAt(0) - "a".charCodeAt(0);
            const codeT = t[i].charCodeAt(0) - "a".charCodeAt(0);
            ht[codeS]++
            ht[codeT]--
        }

        return ht.every(x => x === 0);
    }
}
