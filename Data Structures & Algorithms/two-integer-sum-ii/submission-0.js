class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length
        let l=0, r = n-1;
        while (l<r){
            const total = numbers[l] +numbers[r]
            if(total > target)
                r--;
            if(total < target)
                l++;
            if(total == target)
                return [l+1, r+1];
        }
    }
}
