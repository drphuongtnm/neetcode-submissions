public class Solution {
    public int Search(int[] nums, int target) {
        Dictionary<int,int> map = new Dictionary<int,int>();
        for(int i=0;i<nums.Length;i++){
            map[nums[i]]=i;
        }
        if(map.ContainsKey(target)){
            return map[target];
        }else{
            return -1;
        }
    }
}
