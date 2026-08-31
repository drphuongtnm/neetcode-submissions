class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max =0;
        let l =0, r=1;
        while(r < prices.length){
            if(prices[l] < prices[r]){
                const currentMax = prices[r] - prices[l]
                max = Math.max(max, currentMax);
            }else {
                l=r;
            }
            r++;
        }
        return max
    }
}
