class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        const n = nums.length;
        let count = 0;
        let currentMax = 0;
        for (let i=0; i<=n; i++){
            if (nums[i] === 1){
                count++;
            }else {
                currentMax=Math.max(count, currentMax);
                count =0;
            };
        }
        return currentMax;
    }
}
