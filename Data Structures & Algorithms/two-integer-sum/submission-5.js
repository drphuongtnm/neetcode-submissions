class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        let A = [];
        for(let i=0;i<n;i++){
            A.push([nums[i], i]);
        }
        A.sort((a,b) => a[0] - b[0])
        let i =0, j = n-1;
        while(i<j){
            let total = A[i][0] + A[j][0];
            if(total === target ){
                return [Math.min(A[i][1], A[j][1]), Math.max(A[i][1], A[j][1])];
            } else if (total < target)
                i++;
            else
                j--;
        }
        return [];
    }
}
