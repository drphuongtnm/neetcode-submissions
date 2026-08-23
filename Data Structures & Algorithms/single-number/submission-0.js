class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const single = new Set();
        for (const num of nums){
            if (single.has(num)){
                single.delete(num)
            }else{
                single.add(num);
            }
            
        }
        return Array.from(single)[0];
    }
}
