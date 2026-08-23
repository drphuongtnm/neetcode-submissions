class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Set();
        for(let i = 0; i<=nums.length;i++){
            if(map.has(nums[i])){
                return true;
                break;
            }
            map.add(nums[i]);
        }
        return false;
    }
}
