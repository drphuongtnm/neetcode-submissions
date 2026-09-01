class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dup = new Set();
        for(let i =0;i<nums.length;i++){
            if(dup.has(nums[i])) return true;
            dup.add(nums[i])
        }
        return false
    }
}
