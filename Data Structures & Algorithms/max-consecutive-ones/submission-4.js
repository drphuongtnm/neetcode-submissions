class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        const n = nums.length;
        let r = 0;
        for (let i=0; i<n; i++){
            let count=0;
            for(let j=i; j<n;j++){
                if(nums[j] === 1){
                    count++;
                }else 
                    break;
            }
            r = Math.max(r,count);
        }
        return r;
    }
}
