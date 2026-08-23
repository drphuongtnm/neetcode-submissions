public class Solution {
    public int ClimbStairs(int n) {     
        //fibonacci
        int one=1, two=1;
        for(int i=0;i<n-1;i++){
            int temp = one;
            one = one + two;
            two = temp;
        }
        return one;
    }
}
