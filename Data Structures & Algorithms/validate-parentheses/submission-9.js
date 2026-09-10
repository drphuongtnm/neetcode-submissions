class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            '}': '{',
            ')': '(',
            ']': '['
        }
        const stack = [];
        for(let c of s){
            if(closeToOpen[c]){
                if(stack.length > 0 && closeToOpen[c] === stack[stack.length-1]){
                    stack.pop();
                }else{
                    return false
                }
            }else{
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
