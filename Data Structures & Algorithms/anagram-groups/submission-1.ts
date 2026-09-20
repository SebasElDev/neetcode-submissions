class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hm = new Map<string, string[]>();
        const res: string[][] = [];

        for (const s of strs) {
            const ht = new Array(26).fill(0);
            for (const c of s) {
                ht[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const sht = ht.join(",");
            if (hm.has(sht)) hm.get(sht).push(s);
            else hm.set(sht, [s]);
        }

        return [...hm.values()]
    }
}
