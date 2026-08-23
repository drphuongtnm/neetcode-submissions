public class Solution {
    public bool IsHappy(int n) {
        HashSet<int> seen = new HashSet<int>();
        while(!seen.Contains(n)){
            seen.Add(n);
            n = SumOfSquare(n);
            if(n==1){
                return true;
            }
        }
        return false;
    }
    private int SumOfSquare(int n){
        int output = 0;
        while(n >0){
            int digit = n%10;
            digit = digit * digit;
            output += digit;
            n = n/10; //update new digit
        }
        return output;
    }
}
