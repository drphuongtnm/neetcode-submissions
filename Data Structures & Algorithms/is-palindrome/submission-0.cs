public class Solution {
    public bool IsPalindrome(string s) {
        //loai bo klhoang trang va ky tu dac biet
        string sTrim = Regex.Replace(s,@"[^a-zA-Z0-9]","").ToLower();
        //dao string
        char[] sChar = sTrim.ToCharArray();
        Array.Reverse(sChar);
        string sReverse = new string(sChar);
        //so sanh
        if(sTrim == sReverse){
            return true;
        }else{
            return false;
        }
    }
}
