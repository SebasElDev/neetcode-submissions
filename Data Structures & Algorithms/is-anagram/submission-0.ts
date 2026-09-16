class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const charsS = new Map<string, number>();
        const charsT = new Map<string, number>();

        for (const ch of s) {
            charsS.set(ch, (charsS.get(ch) || 0) + 1)
        }
        for (const ch of t) {
            charsT.set(ch, (charsT.get(ch) || 0) + 1)
        }

        if (charsS.size !== charsT.size) return false;
        for (const [ch, count] of charsS) {
            if (charsT.get(ch) !== count) return false;
        }

        return true;
    }
}
