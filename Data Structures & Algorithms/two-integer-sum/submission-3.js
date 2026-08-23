class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();
        for (let i=0;i<nums.length;i++){
            const res = target - nums[i];
            if(prevMap.has(res)){
                return [prevMap.get(res),i];
            }
            prevMap.set(nums[i],i);
        }
        return [];
    }
}
