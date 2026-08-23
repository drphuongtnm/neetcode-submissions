class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        let maxPrice=0;
        for(let i=0;i<n-1;i++){
            for(let j=i+1;j<n;j++){
                if(prices[i] < prices[j]){
                    const profit = prices[j] - prices[i];
                    maxPrice=Math.max(maxPrice, profit)
                }
            }
        }
        return maxPrice
    }
}
