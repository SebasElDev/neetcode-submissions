class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map<string, string[]>();
        for (const str of strs) {
            const hashTable = new Array(26).fill(0);

            for (const ch of str) {
                hashTable[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = hashTable.join(",");
 
            hashMap.set(key, [...(hashMap.get(key) || []), str])
        }

        return [...hashMap.values()];
    }
}
