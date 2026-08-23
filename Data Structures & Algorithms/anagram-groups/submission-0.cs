public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        var res = new Dictionary<string, List<string>>();
        foreach(var s in strs){
            char[] c = s.ToCharArray();
            Array.Sort(c);
            string sorted = new string(c);
            if(!res.ContainsKey(sorted)){
                res[sorted] = new List<string>();
            }
            res[sorted].Add(s);
        }
        return res.Values.ToList<List<string>>();
        
    }
}
