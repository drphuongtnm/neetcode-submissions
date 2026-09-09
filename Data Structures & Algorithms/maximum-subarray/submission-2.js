class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max=nums[0];
        let curr = nums[0];
        for(let i=1;i<nums.length;i++){
            curr = Math.max(nums[i], nums[i] + curr);
            max = Math.max(max, curr);
        }
        return max;
    }
}
