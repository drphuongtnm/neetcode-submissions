class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length
        const stack = []; // pair: [temp, index]
        const result = new Array(n).fill(0);

        for(let i=0;i<n;i++){
            const t = temperatures[i];
            while(stack.length > 0 && t > stack[stack.length-1][0]){
                const [stackT, stackInd] = stack.pop();
                result[stackInd] = i - stackInd;
            }
            stack.push([t,i])
        }
        return result;
    }
}
