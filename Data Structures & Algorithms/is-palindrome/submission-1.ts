class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const clean: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let l = 0, r = clean.length - 1;
        while (l < r) {
            if (clean[l] !== clean[r]) return false;
            l++
            r--
        }
        return true;
    }
}
