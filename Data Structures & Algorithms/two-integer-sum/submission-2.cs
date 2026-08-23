public class Solution {
    public int[] TwoSum(int[] nums, int target) {
       Dictionary<int, int> prevMap = new Dictionary<int,int>();
       
        for(int i=0;i<nums.Length;i++){
            int result = target - nums[i];
            if(prevMap.ContainsKey(result)){
                return new int[] {prevMap[result], i};
            }
            //prevMap.Add(nums[i],i);
            prevMap[nums[i]] = i;
        }
        return new int[0];
    }
}
