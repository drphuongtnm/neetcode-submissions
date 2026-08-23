public class Solution {
    public bool IsValid(string s) {
        while(s.Contains("()") || s.Contains("{}") || s.Contains("[]")){
            s = s.Replace("()", "")
            .Replace("{}","")
            .Replace("[]","");
            if(s == ""){
                return true;
            }
        }
        return false;
        
    }
}
