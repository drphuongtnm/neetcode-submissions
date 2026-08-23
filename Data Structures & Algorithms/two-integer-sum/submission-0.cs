public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int result;
        for(int i=0;i<nums.Length;i++){
            for(int j=i+1;j<nums.Length;j++){
                result = nums[i]+nums[j];
                if(result == target){
                    return new int[] {i,j};
                }
            }
        }
        return new int[0];
    }
}
