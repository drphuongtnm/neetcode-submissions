class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const SMap = {};
        const TMap = {};
        for(let i = 0; i < s.length; i++){
            SMap[s[i]] = (SMap[s[i]] || 0) + 1;
        }
        for(let i = 0; i < t.length; i++){
            TMap[t[i]] = (TMap[t[i]] || 0) + 1;
        }
        for (let key in SMap) {
            if (SMap[key] !== TMap[key]) return false;
        }
        return true;
    }
}
