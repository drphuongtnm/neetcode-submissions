class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);
        const stack = [];
        for(let i =0;i<n;i++){
            const t = temperatures[i];
            while(stack.length > 0 && stack[stack.length-1][0] < t){
                const [temp, index] = stack.pop();
                res[index] = i-index
            }
            stack.push([t,i])
        }
        return res;
    }
}
