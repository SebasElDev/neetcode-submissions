class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const countArr = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            countArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            countArr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        return countArr.every((v) => v === 0);
    }
}
