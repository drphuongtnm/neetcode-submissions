class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0], curr = nums[0];
        for(let i=1;i<nums.length;i++){
            curr = Math.max(nums[i], nums[i] + curr);
            max = Math.max(curr, max);
        }
        return max;
    }
}
