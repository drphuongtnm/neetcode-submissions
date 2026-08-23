public class Solution {
    public bool IsValid(string s) {
        Stack<char> stack = new Stack<char>();
        Dictionary<char, char> closeToOpen = new Dictionary<char, char>{
            {')', '('},
            {'}','{'},
            {']','['}
        };
        foreach(char c in s){
            if (closeToOpen.ContainsKey(c)){
                if(stack.Any() && stack.Peek() == closeToOpen[c]){
                    stack.Pop();
                }
                else{
                    return false;
                }
            }else{
                stack.Push(c);
            }

        }
        if(!stack.Any()){
            return true;
        }else{
            return false;
        }
        
    }
}
